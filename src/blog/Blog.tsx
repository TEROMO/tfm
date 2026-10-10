import { useEffect, useState, type ReactNode } from 'react'
import { RichContent, type RichNode } from './RichContent'
import { normalizeContent, normalizeLayout } from './content.js'
import { setArticleHead } from './article-head'

type Post = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  cover: string
  body?: string
  content?: RichNode
  layout?: {left:number;right:number}
  seo?: {title:string;description:string}
}
type Layout = { header: ReactNode; footer: ReactNode; faq?: ReactNode }
const root = import.meta.env.DEV ? new URL('/', location.href) : new URL(/* @vite-ignore */ '../', import.meta.url)
const url = (name: string) => new URL(name, root).href
const dateLabel = (date: string) => new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric', month: 'long', year: 'numeric',
}).format(new Date(date + 'T12:00:00'))
let indexPromise: Promise<Post[]> | undefined

function loadIndex() {
  return indexPromise ??= fetch(url('blog/posts/index.json'), { cache: 'no-cache' })
    .then(response => {
      if (!response.ok) throw new Error('Не удалось загрузить новости')
      return response.json() as Promise<{ posts: Post[] }>
    }).then(data => data.posts)
}

function usePosts() {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [error, setError] = useState(false)
  useEffect(() => {
    let active = true
    loadIndex().then(value => { if (active) setPosts(value) })
      .catch(() => { if (active) setError(true) })
    return () => { active = false }
  }, [])
  return { posts, error }
}

function FeedState({ error }: { error: boolean }) {
  return <p className="news-feed-state" role={error ? 'alert' : 'status'}>
    {error ? 'Не удалось загрузить новости. Обновите страницу чуть позже.' : 'Загружаем новости…'}
  </p>
}

function Card({ post, latest = false }: { post: Post; latest?: boolean }) {
  return <a className="news-card" href={url(`blog/article/${encodeURIComponent(post.slug)}/`)}>
    {post.cover && <div className="news-card-image"><img src={post.cover} alt={post.title}
      loading={latest ? 'eager' : 'lazy'} decoding="async" /></div>}
    <div className="news-card-meta"><span>{post.category}</span><time dateTime={post.date}>{dateLabel(post.date)}</time></div>
    <h2>{post.title}</h2><p>{post.excerpt}</p>
    <span className="news-card-link">Читать материал <span aria-hidden="true">↗</span></span>
  </a>
}

export function LatestNews() {
  const { posts, error } = usePosts()
  return <section>
    <div className="news-section-heading">
      <div><span className="news-label">Блог</span><h2 className="font-heading">Рассказываем<br />о мерче</h2></div>
      <a className="news-all-link" href={url('blog/')}>Все статьи ↗</a>
    </div>
    {posts ? posts.length ? <div className="news-grid news-grid-latest">
      {posts.slice(0, 3).map(post => <Card key={post.id} post={post} latest />)}
    </div> : <p className="news-feed-state">Скоро здесь появятся новости.</p> : <FeedState error={error} />}
  </section>
}

export function BlogPage({ header, footer, faq }: Layout) {
  const { posts, error } = usePosts()
  const [category, setCategory] = useState('Все')
  const [limit, setLimit] = useState(6)
  const categories = ['Все', ...new Set(posts?.map(post => post.category) ?? [])]
  const filtered = posts?.filter(post => category === 'Все' || post.category === category)
  return <div id="top" className="min-h-screen bg-paper text-ink">
    {header}<main>
      <section className="news-blog-hero"><div>
        <span className="news-label">Идеи · технологии · опыт</span>
        <h1 className="font-heading">Рассказываем<br />о мерче</h1>
      </div><p>Практические материалы о производстве, брендинге и вещах, которые становятся частью команды.</p></section>
      <nav className="news-filters" aria-label="Категории статей">
        {categories.map(item => <button key={item} type="button" aria-pressed={category === item}
          onClick={() => { setCategory(item); setLimit(6) }}>{item}</button>)}
      </nav>
      {filtered ? filtered.length ? <>
        <div className="news-grid">{filtered.slice(0, limit).map(post => <Card key={post.id} post={post} />)}</div>
        {filtered.length > limit && <div className="news-more"><button type="button" onClick={() => setLimit(limit + 3)}>Посмотреть ещё ↗</button></div>}
      </> : <p className="news-feed-state">В этой категории пока нет новостей.</p> : <FeedState error={error} />}
      <div className="news-faq">{faq}</div>
    </main>{footer}
  </div>
}

export function ArticlePage(props: Layout) {
  return new URLSearchParams(location.search).get('preview') === '1' && window.parent !== window
    ? <ArticlePreview {...props} /> : <PublishedArticle {...props} />
}

function ArticlePreview(props: Layout) {
  const [article, setArticle] = useState<Post | null>(null)
  useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (event.origin !== location.origin || event.source !== window.parent || event.data?.type !== 'blog-preview') return
      try {
        const post = event.data.post
        if (['title','excerpt','category','date','cover','body'].some(field => typeof post[field] !== 'string')) return
        if (!/^\d{4}-\d{2}-\d{2}$/.test(post.date) || !Number.isFinite(Date.parse(post.date))) return
        setArticle({...post,content:normalizeContent(post.content) as RichNode,layout:normalizeLayout(post.layout)})
      } catch { /* Ignore malformed messages; only render the supported article schema. */ }
    }
    window.addEventListener('message', receive)
    window.parent.postMessage({type:'blog-preview-ready'}, location.origin)
    return () => window.removeEventListener('message', receive)
  }, [])
  useEffect(() => { if (article) setArticleHead(article,true) }, [article])
  return <ArticleView {...props} article={article} preview />
}

function PublishedArticle({ header, footer }: Layout) {
  const { posts, error } = usePosts()
  const slug = new URLSearchParams(location.search).get('slug') ?? location.pathname.match(/\/blog\/article\/([a-z0-9-]+)(?:\/|\/index\.html)?$/)?.[1]
  const selected = slug ? posts?.find(post => post.slug === slug) : posts?.[0]
  const [article, setArticle] = useState<Post | null>(null)
  const [articleError, setArticleError] = useState(false)
  useEffect(() => {
    if (!selected) return
    const controller = new AbortController()
    fetch(url(`blog/posts/${encodeURIComponent(selected.slug)}.json`), { cache: 'no-cache', signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error('missing'); return response.json() as Promise<Post> })
      .then(value => { setArticle(value); setArticleHead(value) })
      .catch(reason => { if (reason.name !== 'AbortError') setArticleError(true) })
    return () => controller.abort()
  }, [selected?.slug])
  const missing = !!posts && !selected
  useEffect(() => {
    if (missing || articleError) {
      const tag = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
      if (tag) tag.content = 'noindex,follow'
    }
  }, [missing,articleError])
  return <ArticleView header={header} footer={footer} article={article} missing={missing} error={error || articleError} />
}

function ArticleView({ header, footer, article, preview = false, missing = false, error = false }: Layout & {article:Post | null;preview?:boolean;missing?:boolean;error?:boolean}) {
  return <div id="top" className={'min-h-screen bg-paper text-ink' + (preview ? ' news-is-preview' : '')}
    onClickCapture={preview ? event => { if ((event.target as Element).closest('a,button')) { event.preventDefault(); event.stopPropagation() } } : undefined}>{header}
    <main className="news-article-main"><article>
      <header className="news-article-heading"><a href={url('blog/')} className="news-back">← Назад в блог</a>
        {article && <><div className="news-card-meta"><span>{article.category}</span><time dateTime={article.date}>{dateLabel(article.date)}</time></div>
          <h1 className="font-heading">{article.title}</h1></>}
      </header>
      {article ? <>
        {article.cover && <figure className="news-article-cover"><img src={article.cover} alt={article.title} decoding="async" /></figure>}
        <div className="news-article-body"><p className="news-article-excerpt">{article.excerpt}</p>
          <RichContent content={article.content} body={article.body} layout={article.layout} />
          <div className="news-article-bottom"><span>Опубликовано {dateLabel(article.date)}</span>
            <a href={url('#lead')} data-quiz-open>Обсудить проект ↗</a></div>
        </div>
      </> : missing ? <p className="news-feed-state">Эта статья больше недоступна. Выберите другую в блоге.</p>
        : <FeedState error={error} />}
    </article></main>{footer}
  </div>
}
