import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createAdminServer } from '../server/admin.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
fs.mkdirSync(path.join(root, 'work'), { recursive:true });
const testRoot = fs.mkdtempSync(path.join(root, 'work/blog-test-'));
const siteRoot = path.join(testRoot, 'site');
const options = { siteRoot, authFile:path.join(testRoot, 'auth.json'), dataDir:path.join(testRoot, 'data'), publicRoots:[siteRoot], publicOrigin:'https://merch.example', secureCookie:false };
fs.mkdirSync(siteRoot, { recursive:true });
const password = 'temporary-test-password-123!';

test('blog admin: authenticated CRUD, publication, uploads and persistence', async t => {
  let app = createAdminServer(options);
  await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
  let origin = `http://127.0.0.1:${app.server.address().port}`;
  let cookie = '', csrf = '', post;
  const request = (route, { method='GET', data, authenticated=true, token=csrf, raw, type } = {}) => fetch(origin + '/blog/admin/api' + route, {
    method,
    headers:{ ...(authenticated && cookie ? { Cookie:cookie } : {}), ...(data ? { 'Content-Type':'application/json' } : {}), ...(type ? { 'Content-Type':type } : {}), ...(method !== 'GET' ? { 'X-CSRF-Token':token } : {}) },
    body:raw ?? (data ? JSON.stringify(data) : undefined),
  });
  t.after(async () => { app.server.closeIdleConnections(); await new Promise(resolve => app.server.close(resolve)); });
  await t.test('cannot read or change news without login; setup requires one-time token', async () => {
    assert.equal((await request('/posts')).status, 401);
    assert.equal((await request('/setup', { method:'POST', data:{ token:'wrong', password } })).status, 403);
    const result = await request('/setup', { method:'POST', data:{ token:app.getSetupToken(), password } });
    assert.equal(result.status, 200);
    assert.match(result.headers.get('set-cookie'), /HttpOnly; SameSite=Strict/);
    cookie = result.headers.get('set-cookie').split(';')[0];
    csrf = (await result.json()).csrf;
    assert.equal(app.getSetupToken(), null);
    const credentials = fs.readFileSync(options.authFile, 'utf8');
    assert.equal(credentials.includes(password), false);
    assert.equal((await request('/setup', { method:'POST', data:{ token:'wrong', password } })).status, 403);
  });
  const values = { title:'Новая коллекция', excerpt:'Описание карточки', category:'Новости', date:'2026-10-09', cover:'', body:'Первый абзац.\n\nВторой абзац.', status:'draft' };
  await t.test('protects writes against CSRF and foreign origin', async () => {
    assert.equal((await request('/posts', { method:'POST', data:values, token:'wrong' })).status, 403);
    const response = await fetch(origin + '/blog/admin/api/posts', { method:'POST', headers:{ Cookie:cookie, 'Content-Type':'application/json', 'X-CSRF-Token':csrf, Origin:'https://another-site.test' }, body:JSON.stringify(values) });
    assert.equal(response.status, 403);
  });
  await t.test('draft is persistent but not publicly accessible', async () => {
    const response = await request('/posts', { method:'POST', data:values });
    assert.equal(response.status, 201); post = (await response.json()).post;
    assert.equal((await (await fetch(origin + '/blog/posts/index.json')).json()).posts.length, 0);
    assert.equal((await fetch(origin + `/blog/posts/${post.slug}.json`)).status, 404);
  });
  await t.test('publishes independent article and lightweight card index', async () => {
    const response = await request('/posts/' + post.id, { method:'PUT', data:{ ...post, status:'published' } });
    assert.equal(response.status, 200); post = (await response.json()).post;
    const indexResponse = await fetch(origin + '/blog/posts/index.json');
    const index = await indexResponse.json();
    assert.equal(index.posts[0].title, values.title);
    assert.equal('body' in index.posts[0], false);
    assert.equal((await (await fetch(origin + `/blog/posts/${post.slug}.json`)).json()).body, values.body);
    assert.equal((await fetch(origin + '/blog/posts/index.json', { headers:{ 'If-None-Match':indexResponse.headers.get('etag') } })).status, 304);
  });
  await t.test('rejects invalid dates, malicious cover URLs and stale edits without overwriting', async () => {
    for (const mutation of [{date:'2026-02-31'}, {cover:'javascript:alert(1)'}, {cover:'https://login:password@example.com/x.jpg'}]) {
      assert.equal((await request('/posts/' + post.id, { method:'PUT', data:{ ...post, ...mutation } })).status, 400);
    }
    assert.equal((await request('/posts/' + post.id, { method:'PUT', data:{ ...post, version:'old-version', title:'Stale edit' } })).status, 409);
    assert.equal(app.store.get(post.id).title, values.title);
  });
  await t.test('accepts image bytes; rejects disguised scripts and oversized files', async () => {
    assert.equal((await request('/uploads', { method:'POST', raw:Buffer.from('<svg onload="alert(1)">'), type:'image/png' })).status, 400);
    const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=', 'base64');
    const response = await request('/uploads', { method:'POST', raw:png, type:'image/png' });
    assert.equal(response.status, 201);
    const cover = (await response.json()).cover;
    assert.match(cover, /^\/blog\/uploads\/[a-f0-9-]+\.png$/);
    const image = await fetch(origin + cover); assert.equal(image.headers.get('content-type'), 'image/png');
    assert.equal((await request('/uploads', { method:'POST', raw:Buffer.alloc(5 * 1024 * 1024 + 1), type:'image/png' })).status, 413);
  });
  await t.test('private files cannot be fetched through the public web root', async () => {
    for (const route of ['/data/admin.json','/server/admin.mjs','/blog/posts/..%2f..%2f..%2fauth.json','/.git/config']) assert.equal((await fetch(origin + route)).status, 404);
  });
  await t.test('preserves formatted text, multiple photos and margins while keeping the feed small', async () => {
    const content = {type:'doc',content:[
      {type:'heading',attrs:{level:2,textAlign:'center'},content:[{type:'text',text:'Коллекция команды',marks:[{type:'bold'},{type:'underline'},{type:'textStyle',attrs:{fontSize:'24px'}}]}]},
      {type:'image',attrs:{src:'https://example.com/one.webp',alt:'Первое фото',width:50,textAlign:'right',onerror:'alert(1)'}},
      {type:'paragraph',attrs:{textAlign:'left'},content:[{type:'text',text:'Текст между фотографиями.'}]},
      {type:'image',attrs:{src:'https://example.com/two.webp',alt:'Второе фото',width:100,textAlign:'center'}},
      {type:'blockquote',content:[{type:'paragraph',content:[{type:'text',text:'Выделенная мысль из исходной статьи.'}]}]},
    ]};
    const response = await request('/posts/' + post.id, {method:'PUT',data:{...post,content,layout:{left:7,right:12}}});
    assert.equal(response.status, 200); post = (await response.json()).post;
    const article = await (await fetch(origin + `/blog/posts/${post.slug}.json`)).json();
    assert.deepEqual(article.layout, {left:7,right:12});
    assert.equal(article.content.content.filter(node => node.type === 'image').length, 2);
    assert.equal(article.content.content[0].content[0].marks[2].attrs.fontSize, '24px');
    assert.equal('onerror' in article.content.content[1].attrs, false);
    assert.equal(article.content.content.at(-1).type, 'blockquote');
    assert.match(await (await fetch(origin + `/blog/article/${post.slug}/`)).text(), /<blockquote><p[^>]*>Выделенная мысль из исходной статьи\.<\/p><\/blockquote>/);
    const card = (await (await fetch(origin + '/blog/posts/index.json')).json()).posts[0];
    for (const key of ['body','content','layout','version','status']) assert.equal(key in card, false);
  });
  await t.test('rejects unsafe rich content and oversized margins without overwriting the article', async () => {
    const mutations = [
      {content:{type:'doc',content:[{type:'script',text:'alert(1)'}]}},
      {content:{type:'doc',content:[{type:'blockquote',content:[{type:'script',text:'alert(1)'}]}]}},
      {content:{type:'doc',content:[{type:'blockquote',content:[]}]}},
      {content:{type:'doc',content:[{type:'image',attrs:{src:'javascript:alert(1)'}}]}},
      {content:{type:'doc',content:[{type:'paragraph',content:[{type:'text',text:'bad',marks:[{type:'textStyle',attrs:{fontSize:'20px;background:url(x)'}}]}]}]}},
      {content:{type:'doc',content:[{type:'paragraph',content:[{type:'text',text:'bad',marks:[{type:'link',attrs:{href:'javascript:alert(1)'}}]}]}]}},
      {content:{type:'doc',content:Array.from({length:51},()=>({type:'image',attrs:{src:'https://example.com/a.webp'}}))}},
      {content:{type:'doc',content:[{type:'paragraph',content:[{type:'text',text:'a'.repeat(100001)}]}]}},
      {layout:{left:21,right:0}}, {layout:{left:-1,right:0}}, {layout:{left:'10%',right:0}},
    ];
    for (const mutation of mutations) assert.equal((await request('/posts/' + post.id, {method:'PUT',data:{...post,...mutation}})).status, 400);
    assert.equal(app.store.get(post.id).version, post.version);
  });
  await t.test('publishes crawlable HTML with SEO fields, headings, block margins, canonical URL and sitemap', async () => {
    const content = structuredClone(post.content);
    content.content[0].attrs.marginLeft = 4;
    content.content[0].attrs.marginRight = 6;
    content.content[2].attrs.marginLeft = 8;
    const seo = {title:'Мерч <script>alert("x")</script> $&',description:'Описание "для поиска" <b>без HTML</b> $&'};
    const response = await request('/posts/' + post.id, {method:'PUT',data:{...post,content,seo}});
    assert.equal(response.status,200); post = (await response.json()).post;
    const htmlResponse = await fetch(origin + `/blog/article/${post.slug}/`);
    assert.equal(htmlResponse.status,200);
    const html = await htmlResponse.text();
    assert.match(html,/<title>Мерч &lt;script&gt;/);
    assert.equal((html.match(/<h1\b/g) ?? []).length,1);
    assert.match(html,/<h2\b/);
    assert.match(html,/margin-left:4%;margin-right:6%/);
    assert.ok(html.includes('Текст между фотографиями.'));
    assert.ok(html.includes(`rel="canonical" href="https://merch.example/blog/article/${post.slug}/"`));
    assert.ok(html.includes('index,follow,max-image-preview:large'));
    const legacy = await fetch(origin + `/blog/article/?slug=${post.slug}`,{redirect:'manual'});
    assert.equal(legacy.status,301);
    assert.equal(legacy.headers.get('location'),`/blog/article/${post.slug}/`);
    assert.ok(html.includes(' $&amp;'));
    assert.equal(html.includes('<script>alert'),false);
    const structured = JSON.parse(html.match(/id="article-jsonld" type="application\/ld\+json">([^]*?)<\/script>/)[1]);
    assert.equal(structured['@type'],'BlogPosting');
    assert.equal(structured.description,seo.description);
    const sitemap = await fetch(origin+'/sitemap.xml');
    assert.equal(sitemap.headers.get('content-type'),'application/xml; charset=utf-8');
    assert.ok((await sitemap.text()).includes(`https://merch.example/blog/article/${post.slug}/`));
    const robots = await (await fetch(origin+'/robots.txt')).text();
    assert.ok(robots.includes('Sitemap: https://merch.example/sitemap.xml'));
    assert.equal(/^Disallow: \/\s*$/m.test(robots),false);
    const card = (await (await fetch(origin+'/blog/posts/index.json')).json()).posts[0];
    assert.equal('seo' in card,false);
    for (const mutation of [{seo:{title:'x'.repeat(161)}},{seo:{description:9}},
      {content:{type:'doc',content:[{type:'paragraph',attrs:{marginLeft:21}}]}},
      {content:{type:'doc',content:[{type:'heading',attrs:{level:2,marginRight:'10%'}}]}}]) {
      assert.equal((await request('/posts/'+post.id,{method:'PUT',data:{...post,...mutation}})).status,400);
    }
    assert.equal(app.store.get(post.id).version,post.version);
  });
  await t.test('password and news survive restart; old session does not', async () => {
    assert.equal(app.store.get(post.id).content.content.filter(node => node.type === 'image').length, 2);
    app.server.closeIdleConnections(); await new Promise(resolve => app.server.close(resolve));
    app = createAdminServer(options);
    await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
    origin = `http://127.0.0.1:${app.server.address().port}`;
    assert.equal(app.getSetupToken(), null);
    assert.equal((await request('/posts')).status, 401);
    const response = await request('/login', { method:'POST', authenticated:false, data:{username:'admin', password} });
    assert.equal(response.status, 200);
    cookie = response.headers.get('set-cookie').split(';')[0]; csrf = (await response.json()).csrf;
    assert.equal((await (await request('/posts')).json()).posts[0].id, post.id);
  });
  await t.test('unpublish and delete remove public content; preserve backups', async () => {
    const response = await request('/posts/' + post.id, { method:'PUT', data:{...post, status:'draft'} });
    post = (await response.json()).post;
    assert.equal((await fetch(origin + `/blog/posts/${post.slug}.json`)).status, 404);
    assert.equal((await fetch(origin + `/blog/article/${post.slug}/`)).status,404);
    assert.equal((await (await fetch(origin+'/sitemap.xml')).text()).includes('/blog/article/'+post.slug+'/'),false);
    assert.equal((await request('/posts/' + post.id, { method:'DELETE', data:{version:'stale'} })).status, 409);
    assert.equal((await request('/posts/' + post.id, { method:'DELETE', data:{version:post.version} })).status, 200);
    assert.equal((await (await request('/posts')).json()).posts.length, 0);
    assert.ok(fs.readdirSync(path.join(options.dataDir, 'backups')).length >= 2);
    assert.equal((await request('/logout', { method:'POST', data:{} })).status, 200);
    assert.equal((await request('/posts')).status, 401);
  });
});
