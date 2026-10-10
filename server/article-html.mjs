import { legacyContent } from '../src/blog/content.js';
import { articleMetadata, articlePath } from '../src/blog/seo.js';

const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const scriptJSON = value => JSON.stringify(value).replace(/</g,'\\u003c').replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029');
const percent = value => Math.max(0,Math.min(20,Number(value) || 0));
const marker = '<meta name="generator" content="TFM blog">';
export const generatedArticle = html => html.includes(marker);

function renderNode(node) {
  const attrs = node.attrs ?? {};
  const children = () => (node.content ?? []).map(renderNode).join('');
  const styles = ['text-align:' + (['left','right','center','justify'].includes(attrs.textAlign) ? attrs.textAlign : 'left'),
    ...(attrs.marginLeft ? ['margin-left:' + percent(attrs.marginLeft) + '%'] : []),
    ...(attrs.marginRight ? ['margin-right:' + percent(attrs.marginRight) + '%'] : [])].join(';');
  switch (node.type) {
    case 'doc': return children();
    case 'text': {
      let value = escape(node.text);
      for (const mark of node.marks ?? []) {
        if (mark.type === 'bold') value = '<strong>' + value + '</strong>';
        if (mark.type === 'italic') value = '<em>' + value + '</em>';
        if (mark.type === 'underline') value = '<u>' + value + '</u>';
        if (mark.type === 'textStyle' && /^\d{1,2}px$/.test(mark.attrs?.fontSize ?? '')) value = `<span style="font-size:${mark.attrs.fontSize}">${value}</span>`;
      }
      return value;
    }
    case 'paragraph': return `<p style="${styles}">${children() || '<br>'}</p>`;
    case 'heading': { const tag = attrs.level === 3 ? 'h3' : 'h2'; return `<${tag} style="${styles}">${children()}</${tag}>`; }
    case 'hardBreak': return '<br>';
    case 'bulletList': return '<ul>' + children() + '</ul>';
    case 'orderedList': return `<ol start="${Number(attrs.start) || 1}">${children()}</ol>`;
    case 'listItem': return '<li>' + children() + '</li>';
    case 'blockquote': return '<blockquote>' + children() + '</blockquote>';
    case 'image': return `<img src="${escape(attrs.src)}" alt="${escape(attrs.alt)}" loading="lazy" decoding="async" style="width:${[25,50,75,100].includes(attrs.width) ? attrs.width : 100}%;margin-left:${attrs.textAlign === 'left' ? '0' : 'auto'};margin-right:${attrs.textAlign === 'right' ? '0' : 'auto'}">`;
    default: return '';
  }
}

export function articleHTML(post, template = '<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><div id="root"></div></body></html>', origin = '') {
  const meta = articleMetadata(post,origin);
  const date = new Intl.DateTimeFormat('ru-RU',{day:'numeric',month:'long',year:'numeric'}).format(new Date(post.date+'T12:00:00'));
  const tags = [marker, `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}">`, '<meta name="robots" content="index,follow,max-image-preview:large">',
    '<meta property="og:type" content="article">', '<meta property="og:locale" content="ru_RU">',
    `<meta property="og:title" content="${escape(meta.title)}">`, `<meta property="og:description" content="${escape(meta.description)}">`,
    `<meta property="article:published_time" content="${escape(post.date)}">`,
    ...(meta.canonical ? [`<link rel="canonical" href="${escape(meta.canonical)}">`,`<meta property="og:url" content="${escape(meta.canonical)}">`] : []),
    ...(meta.image ? [`<meta property="og:image" content="${escape(meta.image)}">`] : []),
    `<script id="article-jsonld" type="application/ld+json">${scriptJSON(meta.structured)}</script>`,
  ].join('\n');
  const article = `<div id="top" class="min-h-screen bg-paper text-ink"><main class="news-article-main"><article><header class="news-article-heading"><a class="news-back" href="/blog/">← Назад в блог</a><div class="news-card-meta"><span>${escape(post.category)}</span><time datetime="${escape(post.date)}">${escape(date)}</time></div><h1 class="font-heading">${escape(post.title)}</h1></header>${post.cover ? `<figure class="news-article-cover"><img src="${escape(post.cover)}" alt="${escape(post.title)}" decoding="async"></figure>` : ''}<div class="news-article-body"><p class="news-article-excerpt">${escape(post.excerpt)}</p><div class="news-rich-content" style="padding-left:${percent(post.layout?.left)}%;padding-right:${percent(post.layout?.right)}%">${renderNode(post.content ?? legacyContent(post.body))}</div><div class="news-article-bottom"><span>Опубликовано ${escape(date)}</span><a href="/#lead">Обсудить проект ↗</a></div></div></article></main></div>`;
  return template.replaceAll('../../assets/','../../../assets/')
    .replace(/<title>[^]*?<\/title>/gi,'')
    .replace(/<meta\s+(?:name=["'](?:description|robots)["']|property=["']og:[^"']+["'])[^>]*>/gi,'')
    .replace('</head>',()=>tags+'\n</head>')
    .replace(/<div id="root"><\/div>/,()=>'<div id="root">'+article+'</div>');
}

export function sitemapHTML(posts, origin) {
  let base;
  try { base = new URL(origin); if (!['https:','http:'].includes(base.protocol) || base.username || base.password) return null; } catch { return null; }
  const routes = ['/','/about/','/cases/','/cases/severnyy-harakter/','/blog/','/privacy/'];
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    [...routes,...posts.map(post=>articlePath(post.slug))].map(route=>`<url><loc>${escape(new URL(route,base.origin).href)}</loc></url>`).join('\n')+'\n</urlset>\n';
}
