import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { normalizeContent, normalizeLayout, isImageURL } from '../src/blog/content.js';
import { normalizeSEO } from '../src/blog/seo.js';
import { articleHTML, generatedArticle, sitemapHTML } from './article-html.mjs';

export function atomicWrite(filename, value, mode = 0o600) {
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  const temporary = filename + '.' + randomUUID() + '.tmp';
  try {
    fs.writeFileSync(temporary, value, { mode });
    fs.renameSync(temporary, filename);
  } finally {
    if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
  }
}

const json = value => JSON.stringify(value, null, 2) + '\n';
const safeId = value => typeof value === 'string' && /^[a-z0-9][a-z0-9-]{0,179}$/.test(value);
const transliterate = value => {
  const letters = { а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'e',ж:'zh',з:'z',и:'i',й:'y',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'h',ц:'ts',ч:'ch',ш:'sh',щ:'sch',ъ:'',ы:'y',ь:'',э:'e',ю:'yu',я:'ya' };
  return [...value.toLowerCase()].map(char => letters[char] ?? char).join('')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 100) || 'novost';
};

function invalid(message, status = 400) { throw Object.assign(new Error(message), { status }); }

export function validatePost(input, existing, all) {
  input = { ...input, thumbnail: input.thumbnail ?? '' };
  const field = (name, max, required = true) => {
    if (typeof input[name] !== 'string') invalid('Заполните все поля новости.');
    const value = input[name].trim();
    if ((required && !value) || value.length > max) invalid('Проверьте поле «' + ({title:'Заголовок',excerpt:'Короткое описание',category:'Категория',body:'Текст статьи',cover:'Обложка',date:'Дата'}[name] ?? name) + '».');
    return value;
  };
  const title = field('title', 160);
  const excerpt = field('excerpt', 400);
  const category = field('category', 50);
  const body = field('body', 100000, false);
  const cover = field('cover', 2000, false);
  const thumbnail = field('thumbnail', 2000, false);
  const date = field('date', 10);
  let content, layout, seo;
  try {
    content = input.content === undefined ? undefined : normalizeContent(input.content);
    layout = normalizeLayout(input.layout);
    seo = normalizeSEO(input.seo ?? existing?.seo);
  } catch (reason) { invalid(reason.message); }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) invalid('Укажите правильную дату.');
  for (const image of [cover, thumbnail]) {
    if (image && !isImageURL(image)) invalid('Загрузите обложку или укажите HTTPS-ссылку на изображение.');
  }
  if (!['draft', 'published'].includes(input.status)) invalid('Выберите статус новости.');
  if (existing && input.version !== existing.version) invalid('Новость уже изменена в другом окне. Откройте её заново перед сохранением.', 409);
  const id = existing?.id ?? randomUUID();
  let slug = existing?.slug ?? transliterate(title);
  if (!existing && all.some(post => post.slug === slug)) slug += '-' + id.slice(0, 8);
  return { id, slug, title, excerpt, category, date, cover, thumbnail, body, ...(content ? {content} : {}), layout, seo, status: input.status, version: randomUUID() };
}

export function createStore({ dataDir, publicRoots, publicOrigin = process.env.PUBLIC_ORIGIN ?? '' }) {
  const postsDir = path.join(dataDir, 'posts');
  fs.mkdirSync(postsDir, { recursive: true });
  const filename = id => {
    if (!safeId(id)) invalid('Новость не найдена.', 404);
    return path.join(postsDir, id + '.json');
  };
  function list() {
    return fs.readdirSync(postsDir).filter(name => name.endsWith('.json'))
      .map(name => JSON.parse(fs.readFileSync(path.join(postsDir, name), 'utf8')))
      .sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));
  }
  function get(id) {
    const file = filename(id);
    if (!fs.existsSync(file)) invalid('Новость не найдена.', 404);
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  }
  function publish() {
    const posts = list().filter(post => post.status === 'published');
    const revision = randomUUID();
    for (const root of publicRoots) {
      const directory = path.join(root, 'blog/posts');
      fs.mkdirSync(directory, { recursive: true });
      const keep = new Set(['index.json', ...posts.map(post => post.slug + '.json')]);
      for (const post of posts) {
        const { version, status, ...publicPost } = post;
        atomicWrite(path.join(directory, post.slug + '.json'), json(publicPost), 0o644);
      }
      atomicWrite(path.join(directory, 'index.json'), json({ revision, posts: posts.map(({ body, content, layout, seo, version, status, thumbnail, ...post }) => ({ ...post, cover:thumbnail || post.cover })) }), 0o644);
      for (const entry of fs.readdirSync(directory)) {
        if (entry.endsWith('.json') && !keep.has(entry)) fs.unlinkSync(path.join(directory, entry));
      }
      const articleDirectory = path.join(root,'blog/article');
      const templateFile = path.join(articleDirectory,'index.html');
      const template = fs.existsSync(templateFile) ? fs.readFileSync(templateFile,'utf8') : undefined;
      for (const post of posts) atomicWrite(path.join(articleDirectory,post.slug,'index.html'),articleHTML(post,template,publicOrigin),0o644);
      const publishedSlugs = new Set(posts.map(post=>post.slug));
      if (fs.existsSync(articleDirectory)) for (const entry of fs.readdirSync(articleDirectory,{withFileTypes:true})) {
        if (!entry.isDirectory() || !safeId(entry.name) || publishedSlugs.has(entry.name)) continue;
        const obsolete = path.join(articleDirectory,entry.name,'index.html');
        if (fs.existsSync(obsolete) && generatedArticle(fs.readFileSync(obsolete,'utf8'))) {
          fs.unlinkSync(obsolete);
          if (!fs.readdirSync(path.dirname(obsolete)).length) fs.rmdirSync(path.dirname(obsolete));
        }
      }
      const sitemap = sitemapHTML(posts,publicOrigin);
      if (sitemap) {
        atomicWrite(path.join(root,'sitemap.xml'),sitemap,0o644);
        const robotsFile = path.join(root,'robots.txt');
        const robots = fs.existsSync(robotsFile) ? fs.readFileSync(robotsFile,'utf8') : 'User-agent: *\nAllow: /\nDisallow: /blog/admin/api/\n';
        const updated = robots.replace(/# TFM blog sitemap\r?\nSitemap:[^\r\n]*\r?\n?/g,'').trimEnd();
        atomicWrite(robotsFile,updated+'\n\n# TFM blog sitemap\nSitemap: '+new URL('/sitemap.xml',publicOrigin).href+'\n',0o644);
      }
    }
    return posts.length;
  }
  function backup(post) {
    atomicWrite(path.join(dataDir, 'backups', `${post.id}-${Date.now()}-${randomUUID().slice(0, 8)}.json`), json(post));
  }
  function save(input, id) {
    const previous = id ? get(id) : null;
    const post = validatePost(input, previous, list());
    if (previous) backup(previous);
    atomicWrite(filename(post.id), json(post));
    publish();
    return post;
  }
  function remove(id, version) {
    const post = get(id);
    if (version !== post.version) invalid('Новость уже изменена. Обновите список перед удалением.', 409);
    backup(post);
    fs.unlinkSync(filename(id));
    publish();
  }
  function upload(bytes, contentType) {
    let extension;
    if (contentType === 'image/webp' && bytes.subarray(0, 4).toString() === 'RIFF' && bytes.subarray(8, 12).toString() === 'WEBP') extension = 'webp';
    if (contentType === 'image/jpeg' && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) extension = 'jpg';
    if (contentType === 'image/png' && bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) extension = 'png';
    if (!extension) invalid('Выберите изображение JPG, PNG или WebP.');
    const name = randomUUID() + '.' + extension;
    for (const root of publicRoots) atomicWrite(path.join(root, 'blog/uploads', name), bytes, 0o644);
    return '/blog/uploads/' + name;
  }
  return { list, get, save, remove, publish, upload };
}
