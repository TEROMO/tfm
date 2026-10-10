import { articleMetadata } from './seo.js'

export function setArticleHead(post: {title:string;excerpt:string;date:string;slug?:string;cover?:string;seo?:{title:string;description:string}}, preview = false) {
  const sourceCanonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  const meta = articleMetadata(post, !preview && sourceCanonical ? new URL(sourceCanonical.href).origin : location.origin)
  document.title = meta.title
  function tag(key: string, value: string, property = false) {
    let element = document.head.querySelector<HTMLMetaElement>(`meta[${property ? 'property' : 'name'}="${key}"]`)
    if (!element) { element = document.createElement('meta'); element.setAttribute(property ? 'property' : 'name',key); document.head.append(element) }
    element.content = value
  }
  tag('description',meta.description)
  tag('robots',preview ? 'noindex,nofollow' : 'index,follow,max-image-preview:large')
  tag('og:title',meta.title,true); tag('og:description',meta.description,true); tag('og:type','article',true)
  if (meta.image) tag('og:image',meta.image,true)
  if (meta.canonical && !preview) {
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.append(link) }
    link.href = meta.canonical; tag('og:url',meta.canonical,true)
  }
  let structured = document.getElementById('article-jsonld') as HTMLScriptElement | null
  if (!structured) { structured = document.createElement('script'); structured.type = 'application/ld+json'; structured.id = 'article-jsonld'; document.head.append(structured) }
  structured.textContent = JSON.stringify(meta.structured)
}
