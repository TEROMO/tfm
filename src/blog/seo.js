export const siteName = 'Тюменская фабрика мерча';
export const articlePath = slug => '/blog/article/' + encodeURIComponent(slug) + '/';

export function normalizeSEO(value = {}) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Проверьте SEO-поля статьи.');
  const result = {};
  for (const [field,max] of [['title',160],['description',320]]) {
    const text = value[field] ?? '';
    if (typeof text !== 'string' || text.length > max) throw new Error('Проверьте SEO-заголовок и описание статьи.');
    result[field] = text.trim();
  }
  return result;
}

export function articleMetadata(post, origin = '') {
  const title = post.seo?.title?.trim() || `${post.title} — ${siteName}`;
  const description = post.seo?.description?.trim() || post.excerpt;
  let base = '';
  try {
    const parsed = new URL(origin);
    if (['http:','https:'].includes(parsed.protocol) && !parsed.username && !parsed.password) base = parsed.origin;
  } catch { /* Canonical URLs are added when the public domain is configured. */ }
  const canonical = base && post.slug ? new URL(articlePath(post.slug), base).href : '';
  const image = post.cover?.startsWith('https:') ? post.cover : base && post.cover ? new URL(post.cover, base).href : '';
  const structured = {
    '@context':'https://schema.org', '@type':'BlogPosting', headline:post.title,
    description, datePublished:post.date, inLanguage:'ru-RU',
    ...(canonical ? {url:canonical,mainEntityOfPage:canonical} : {}),
    ...(image ? {image:[image]} : {}),
    publisher:{'@type':'Organization',name:siteName},
  };
  return {title,description,canonical,image,structured};
}
