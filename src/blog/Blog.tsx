import { useEffect, useState, type ReactNode } from 'react'
import { RichContent, type RichNode } from './RichContent'
import { normalizeContent, normalizeLayout } from './content.js'
import { setArticleHead } from './article-head'
import { SiteArrow, PrimaryButton, PrimaryLink, ArrowLink } from '../site/controls'

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
  day: 'numeric', month: 'long',
}).format(new Date(date + 'T12:00:00')) + ' ' + date.slice(0,4)
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

function Card({ post, lazy = false, topBorderClassName = '' }: { post: Post; lazy?: boolean; topBorderClassName?:string }) {
  return <a className={`news-card group border-b border-r border-line p-5 max-[639px]:pb-10 sm:p-8 lg:p-7 ${topBorderClassName}`} href={url(`blog/article/${encodeURIComponent(post.slug)}/`)}>
    {post.cover && <div className="news-card-image aspect-[16/11] overflow-hidden bg-neutral-200"><img src={post.cover} alt={post.title}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading={lazy ? 'lazy' : 'eager'} decoding="async" /></div>}
    <div className="mt-5 flex items-center justify-between gap-4"><span className="bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper">{post.category}</span><time className="text-right font-mono text-[10px] uppercase tracking-[0.08em] text-ash" dateTime={post.date}>{dateLabel(post.date)}</time></div>
    <h2 className="mt-5 font-display text-[1.05rem] uppercase sm:text-[1.15rem]">{post.title}</h2><p className="mt-3 text-[15px] leading-[1.5] text-ink/65">{post.excerpt}</p>
    <span className="news-card-link arrow-link mt-6 inline-flex items-center gap-2 border-b-2 border-acid pb-1 font-display text-[12px] uppercase">Читать материал <SiteArrow className="arrow-link-icon h-4 w-4" /></span>
  </a>
}

export function LatestNews() {
  const { posts, error } = usePosts()
  return <section>
    <div className="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-6 px-5 sm:px-8 py-14">
      <div><span className="font-mono text-[13px] uppercase tracking-[0.22em] text-ash">Блог</span><h2 className="mt-5 font-heading uppercase tracking-[-1px]">Рассказываем<br />о мерче</h2></div>
      <ArrowLink href={url('blog/')}>Все статьи</ArrowLink>
    </div>
    {posts ? posts.length ? <div className="news-grid news-grid-latest mx-auto grid max-w-[1600px] grid-cols-1 border-l border-t border-line min-[1001px]:grid-cols-3">
      {posts.slice(0, 3).map(post => <Card key={post.id} post={post} />)}
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
      <section className="bg-coal text-paper"><div className="mx-auto grid max-w-[1600px] gap-10 px-5 sm:px-8 pt-40 pb-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:pt-52 lg:pb-28"><div>
        <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-acid sm:text-[13px]">Идеи · технологии · опыт</span>
        <h1 className="mt-7 max-w-4xl font-heading uppercase">Рассказываем<br />о мерче</h1>
      </div><div className="lg:pb-2"><p className="max-w-xl text-[16px] leading-[1.55] text-paper/70 sm:text-[18px]">Практические материалы о производстве, брендинге и вещах, которые становятся частью команды.</p></div></div></section>
      <nav className="news-filters mx-auto flex max-w-[1600px] gap-2 overflow-x-auto px-5 sm:px-8 pt-10 pb-6 sm:pt-12" aria-label="Категории статей">
        {categories.map(item => <button key={item} type="button" aria-pressed={category === item}
          className={`shrink-0 border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${category === item ? 'border-ink bg-ink text-paper' : 'border-line hover:border-ink'}`}
          onClick={() => { setCategory(item); setLimit(6) }}>{item}</button>)}
      </nav>
      {filtered ? filtered.length ? <>
        <div className="news-grid mx-auto grid max-w-[1600px] grid-cols-1 border-l border-line sm:grid-cols-2 xl:grid-cols-3">{filtered.slice(0, limit).map((post,index) => <Card key={post.id} post={post} lazy={index > 2} topBorderClassName={index === 0 ? 'border-t' : index === 1 ? 'sm:border-t' : index === 2 ? 'xl:border-t' : ''} />)}</div>
        {filtered.length > limit && <div className="mx-auto flex max-w-[1600px] justify-center px-5 sm:px-8 pt-10 pb-2 sm:pt-12"><PrimaryButton type="button" className="justify-center" onClick={() => setLimit(limit + 3)}>Посмотреть ещё</PrimaryButton></div>}
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
      <header className="news-article-heading"><a href={url('blog/')} className="news-back inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ash transition-colors hover:text-ink"><SiteArrow className="h-4 w-4 rotate-180" /> Назад в блог</a>
        {article && <><div className="news-card-meta"><span>{article.category}</span><time dateTime={article.date}>{dateLabel(article.date)}</time></div>
          <h1 className="font-heading">{article.title}</h1></>}
      </header>
      {article ? <>
        {article.cover && <figure className="news-article-cover"><img src={article.cover} alt={article.title} decoding="async" /></figure>}
        <div className="news-article-body"><p className="news-article-excerpt">{article.excerpt}</p>
          <RichContent content={article.content} body={article.body} layout={article.layout} />
          <div className="news-article-bottom"><div><div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ash">Опубликовано</div><div className="mt-2 text-[15px]">{dateLabel(article.date)}</div></div>
            <PrimaryLink href={url('#lead')} data-quiz-open>Обсудить проект</PrimaryLink></div>
        </div>
      </> : missing ? <p className="news-feed-state">Эта статья больше недоступна. Выберите другую в блоге.</p>
        : <FeedState error={error} />}
    </article></main>{footer}
  </div>
}
