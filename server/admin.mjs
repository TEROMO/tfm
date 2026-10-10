import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import { atomicWrite, createStore } from './store.mjs';

const deriveKey = promisify(scrypt);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = '/blog/admin/api';
const MIME = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8', '.xml':'application/xml; charset=utf-8', '.webp':'image/webp', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.svg':'image/svg+xml', '.woff':'font/woff', '.woff2':'font/woff2', '.txt':'text/plain; charset=utf-8' };
const secret = () => randomBytes(32).toString('hex');
const equals = (a, b) => typeof a === 'string' && typeof b === 'string' && Buffer.byteLength(a) === Buffer.byteLength(b) && timingSafeEqual(Buffer.from(a), Buffer.from(b));
const fail = (message, status = 400) => { throw Object.assign(new Error(message), { status }); };

export function createAdminServer(options = {}) {
  const siteRoot = options.siteRoot ?? path.join(root, 'docs');
  const authFile = options.authFile ?? process.env.ADMIN_AUTH_FILE ?? path.join(root, 'data/admin.json');
  const store = createStore({
    dataDir: options.dataDir ?? process.env.BLOG_DATA_DIR ?? path.join(root, 'data/blog'),
    publicRoots: options.publicRoots ?? [path.join(root, 'public'), path.join(root, 'docs'), path.join(root, 'dist')],
    publicOrigin: options.publicOrigin ?? process.env.PUBLIC_ORIGIN ?? '',
  });
  store.publish();
  let auth = fs.existsSync(authFile) ? JSON.parse(fs.readFileSync(authFile, 'utf8')) : null;
  let setupToken = auth ? null : secret();
  const sessions = new Map();
  const attempts = new Map();
  const secureCookie = options.secureCookie ?? process.env.ADMIN_SECURE_COOKIE === 'true';
  const sessionLifetime = 8 * 60 * 60 * 1000;
  const timer = setInterval(() => {
    for (const [key, session] of sessions) if (session.expires < Date.now()) sessions.delete(key);
    for (const [key, item] of attempts) if (item.until < Date.now()) attempts.delete(key);
  }, 60000).unref();
  function respond(res, status, value) {
    res.writeHead(status, { 'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store' });
    res.end(JSON.stringify(value));
  }
  function session(req) {
    const token = req.headers.cookie?.match(/(?:^|;\s*)tfm_admin=([a-f0-9]{64})(?:;|$)/)?.[1];
    const value = token ? sessions.get(token) : null;
    if (!value || value.expires < Date.now()) return null;
    return { ...value, token };
  }
  function setSession(res) {
    const token = secret();
    const value = { csrf: secret(), expires: Date.now() + sessionLifetime };
    if (sessions.size > 500) sessions.delete(sessions.keys().next().value);
    sessions.set(token, value);
    res.setHeader('Set-Cookie', `tfm_admin=${token}; HttpOnly; SameSite=Strict; Path=/blog/admin/; Max-Age=${sessionLifetime / 1000}${secureCookie ? '; Secure' : ''}`);
    return value;
  }
  async function readBody(req, limit = 1024 * 1024) {
    const chunks = [];
    let size = 0;
    for await (const chunk of req) {
      size += chunk.length;
      if (size > limit) fail('Слишком большой файл или текст.', 413);
      chunks.push(chunk);
    }
    return Buffer.concat(chunks);
  }
  async function readJson(req) {
    if (!req.headers['content-type']?.startsWith('application/json')) fail('Неверный формат запроса.', 415);
    const bytes = await readBody(req);
    try {
      const value = JSON.parse(bytes.toString());
      if (!value || Array.isArray(value) || typeof value !== 'object') fail('Неверный формат данных.');
      return value;
    } catch { fail('Неверный формат данных.'); }
  }
  const server = http.createServer(async (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    try {
      const requestedURL = new URL(req.url, 'http://localhost');
      const pathname = requestedURL.pathname;
      if (pathname === API || pathname.startsWith(API + '/')) {
        const route = pathname.slice(API.length);
        const method = req.method;
        if (!['GET','POST','PUT','DELETE'].includes(method)) fail('Метод недоступен.', 405);
        if (method !== 'GET' && req.headers.origin) {
          const expected = process.env.PUBLIC_ORIGIN || `${secureCookie ? 'https' : 'http'}://${req.headers.host}`;
          if (req.headers.origin !== expected) fail('Запрос с другого сайта запрещён.', 403);
        }
        if (method === 'GET' && route === '/session') {
          const current = session(req);
          return respond(res, 200, current ? { authenticated:true, csrf:current.csrf } : { authenticated:false, setupRequired:!auth });
        }
        if (method === 'POST' && route === '/setup') {
          const input = await readJson(req);
          if (auth || !equals(input.token, setupToken)) fail('Ссылка настройки недействительна.', 403);
          if (typeof input.password !== 'string' || input.password.length < 12 || input.password.length > 256) fail('Пароль должен содержать от 12 до 256 символов.');
          const salt = randomBytes(16).toString('hex');
          const hash = Buffer.from(await deriveKey(input.password, salt, 64)).toString('hex');
          if (auth) fail('Админка уже настроена.', 409);
          const nextAuth = { username:'admin', salt, hash };
          atomicWrite(authFile, JSON.stringify(nextAuth, null, 2) + '\n');
          auth = nextAuth;
          setupToken = null;
          const current = setSession(res);
          return respond(res, 200, { authenticated:true, csrf:current.csrf });
        }
        if (method === 'POST' && route === '/login') {
          if (!auth) fail('Сначала настройте доступ по ссылке из терминала.', 403);
          const ip = process.env.TRUST_PROXY === 'true' ? req.headers['x-real-ip'] ?? req.socket.remoteAddress : req.socket.remoteAddress;
          const key = String(ip);
          let record = attempts.get(key);
          if (!record || record.until < Date.now()) record = { count:0, until:Date.now() + 15 * 60 * 1000 };
          if (record.count >= 5) { res.setHeader('Retry-After', '900'); fail('Слишком много попыток. Попробуйте через 15 минут.', 429); }
          record.count++;
          attempts.set(key, record);
          const input = await readJson(req);
          if (typeof input.password !== 'string' || input.password.length > 256) fail('Неверный логин или пароль.', 401);
          const hash = Buffer.from(await deriveKey(input.password, auth.salt, 64)).toString('hex');
          if (!equals(hash, auth.hash) || input.username !== auth.username) fail('Неверный логин или пароль.', 401);
          attempts.delete(key);
          const current = setSession(res);
          return respond(res, 200, { authenticated:true, csrf:current.csrf });
        }
        const current = session(req);
        if (!current) fail('Войдите в админку.', 401);
        if (method !== 'GET' && !equals(req.headers['x-csrf-token'], current.csrf)) fail('Обновите страницу и попробуйте ещё раз.', 403);
        if (method === 'POST' && route === '/logout') {
          sessions.delete(current.token);
          res.setHeader('Set-Cookie', `tfm_admin=; HttpOnly; SameSite=Strict; Path=/blog/admin/; Max-Age=0${secureCookie ? '; Secure' : ''}`);
          return respond(res, 200, { ok:true });
        }
        if (method === 'GET' && route === '/posts') return respond(res, 200, { posts:store.list() });
        if (method === 'POST' && route === '/posts') return respond(res, 201, { post:store.save(await readJson(req)) });
        const match = route.match(/^\/posts\/([a-z0-9-]+)$/);
        if (match && method === 'PUT') return respond(res, 200, { post:store.save(await readJson(req), match[1]) });
        if (match && method === 'DELETE') { const input = await readJson(req); store.remove(match[1], input.version); return respond(res, 200, { ok:true }); }
        if (method === 'POST' && route === '/uploads') {
          const contentType = req.headers['content-type']?.split(';')[0];
          const cover = store.upload(await readBody(req, 5 * 1024 * 1024), contentType);
          return respond(res, 201, { cover });
        }
        fail('Адрес не найден.', 404);
      }
      if (!['GET','HEAD'].includes(req.method)) fail('Метод недоступен.', 405);
      const oldSlug = requestedURL.searchParams.get('slug');
      if (pathname === '/blog/article/' && oldSlug && /^[a-z0-9][a-z0-9-]{0,179}$/.test(oldSlug) && fs.existsSync(path.join(siteRoot,'blog/article',oldSlug,'index.html'))) {
        res.writeHead(301,{Location:'/blog/article/'+oldSlug+'/'}); return res.end();
      }
      let decoded;
      try { decoded = decodeURIComponent(pathname); } catch { fail('Адрес не найден.', 404); }
      if (decoded.includes('\\') || decoded.includes('\0') || decoded.split('/').some(item => item.startsWith('.'))) fail('Адрес не найден.', 404);
      let file = path.resolve(siteRoot, '.' + decoded);
      let responseStatus = 200;
      if (file !== siteRoot && !file.startsWith(siteRoot + path.sep)) fail('Адрес не найден.', 404);
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
        if (!pathname.endsWith('/')) { res.writeHead(301, { Location:pathname + '/' }); return res.end(); }
        file = path.join(file, 'index.html');
      }
      if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
        const missing = path.join(siteRoot,'404.html');
        if (decoded.startsWith('/blog/article/') && fs.existsSync(missing)) { file = missing; responseStatus = 404; }
        else fail('Страница не найдена.', 404);
      }
      const stat = fs.statSync(file);
      const etag = `"${stat.size.toString(16)}-${Math.trunc(stat.mtimeMs).toString(16)}"`;
      res.setHeader('ETag', etag);
      res.setHeader('Cache-Control', pathname.startsWith('/assets/') || pathname.startsWith('/blog/uploads/') ? 'public, max-age=31536000, immutable' : 'no-cache');
      if (pathname.startsWith('/blog/admin/')) {
        res.setHeader('Cache-Control', 'no-store');
        res.setHeader('Content-Security-Policy', "default-src 'self'; img-src 'self' https: blob: data:; script-src 'self'; style-src 'self'; style-src-attr 'unsafe-inline'; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'");
      }
      if (responseStatus === 200 && req.headers['if-none-match'] === etag && !pathname.startsWith('/blog/admin/')) { res.writeHead(304); return res.end(); }
      res.setHeader('Content-Type', MIME[path.extname(file)] ?? 'application/octet-stream');
      res.setHeader('Content-Length', stat.size);
      res.writeHead(responseStatus);
      if (req.method === 'HEAD') return res.end();
      const stream = fs.createReadStream(file);
      stream.on('error', () => res.destroy());
      stream.pipe(res);
    } catch (error) {
      if (res.headersSent) return res.destroy();
      if (!error.status) console.error('Blog admin:', error.message);
      respond(res, error.status ?? 500, { error:error.status ? error.message : 'Не удалось сохранить изменения. Попробуйте ещё раз.' });
    }
  });
  server.requestTimeout = 30000;
  server.headersTimeout = 15000;
  server.on('close', () => clearInterval(timer));
  return { server, store, getSetupToken:() => setupToken };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const app = createAdminServer();
  const port = Number(process.env.PORT ?? 8484);
  const host = process.env.HOST ?? '127.0.0.1';
  app.server.listen(port, host, () => {
    const origin = process.env.PUBLIC_ORIGIN || `http://${host}:${port}`;
    console.log(`Сайт: ${origin}/`);
    console.log(`Админка: ${origin}/blog/admin/`);
    if (app.getSetupToken()) console.log(`Первый запуск — задайте пароль по этой одноразовой ссылке:\n${origin}/blog/admin/#setup=${app.getSetupToken()}`);
  });
  app.server.on('error', error => { console.error('Не удалось запустить сервер:', error.message); process.exitCode = 1; });
}
