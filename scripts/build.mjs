import { build } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createStore } from '../server/store.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);
const store = createStore({ dataDir:process.env.BLOG_DATA_DIR ?? path.join(root, 'data/blog'), publicRoots:[path.join(root, 'public')] });
store.publish();
await build();
const stage = path.join(root, 'work/site-build');
const manifest = JSON.parse(fs.readFileSync(path.join(stage, '.vite/manifest.json'), 'utf8'));
const adminFile = path.join(stage, 'blog/admin/index.html');
fs.writeFileSync(adminFile, fs.readFileSync(adminFile, 'utf8').replace('/src/admin/admin.js', '../../' + manifest['src/admin/admin.js'].file));
const shell = fs.readFileSync(path.join(stage, 'index.html'), 'utf8').replace(/\r\n?/g, '\n');
const pages = {
  '': 'Тюменская фабрика мерча',
  about: 'О компании — Тюменская фабрика мерча',
  cases: 'Кейсы — Тюменская фабрика мерча',
  'cases/severnyy-harakter': 'Северный характер — кейс Тюменской фабрики мерча',
  blog: 'Блог — Тюменская фабрика мерча',
  'blog/article': 'Статья — Тюменская фабрика мерча',
  'assortment/product': 'Продукция — Тюменская фабрика мерча',
  privacy: 'Политика конфиденциальности — Тюменская фабрика мерча',
};
for (const [route, title] of Object.entries(pages)) {
  const depth = route ? route.split('/').length : 0;
  const prefix = depth ? '../'.repeat(depth) : './';
  let html = shell.replace(/<title>.*?<\/title>/, `<title>${title}</title>`).replaceAll('./assets/', prefix + 'assets/');
  if (route === 'blog/article') html = html.replace('index,follow,max-image-preview:large','noindex,follow');
  const target = path.join(stage, route, 'index.html');
  fs.mkdirSync(path.dirname(target), { recursive:true });
  fs.writeFileSync(target, html);
}
const missingArticle = '<div class="min-h-screen bg-paper text-ink"><main class="news-article-main"><article><header class="news-article-heading"><a href="/blog/" class="news-back">← Назад в блог</a><h1 class="font-heading">Статья не найдена</h1></header><div class="news-article-body"><p>Эта статья больше недоступна. Выберите другую в блоге.</p><a href="/blog/">Перейти в блог →</a></div></article></main></div>';
fs.writeFileSync(path.join(stage,'404.html'),shell.replaceAll('./assets/','/assets/')
  .replace(/<script[^>]*type="module"[^>]*><\/script>/g,'').replace(/<link[^>]*rel="modulepreload"[^>]*>/g,'')
  .replace('index,follow,max-image-preview:large','noindex,follow')
  .replace(/<title>.*?<\/title>/,'<title>Статья не найдена — Тюменская фабрика мерча</title>')
  .replace('<div id="root"></div>',()=>'<div id="root">'+missingArticle+'</div>'));
for (const name of ['docs','dist']) {
  fs.cpSync(stage, path.join(root, name), { recursive:true });
  const oldAdmin = path.join(root, name, 'blog/admin/admin.js');
  if (fs.existsSync(oldAdmin)) fs.unlinkSync(oldAdmin);
}
createStore({ dataDir:process.env.BLOG_DATA_DIR ?? path.join(root, 'data/blog'), publicRoots:['public','docs','dist'].map(name => path.join(root, name)) }).publish();
console.log('Готовы docs/ и dist/: все страницы, админка и новости.');
