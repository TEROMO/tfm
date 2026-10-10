import { Fragment, type CSSProperties, type ReactNode } from 'react'
import { isImageURL, legacyContent } from './content.js'

export type RichNode = {
  type: string
  text?: string
  attrs?: { textAlign?: string; level?: number; src?: string; alt?: string; width?: number; start?: number; marginLeft?:number; marginRight?:number }
  marks?: { type: string; attrs?: { fontSize?: string } }[]
  content?: RichNode[]
}

function render(node: RichNode): ReactNode {
  const children = node.content?.map((child, i) => <Fragment key={i}>{render(child)}</Fragment>)
  const attrs = node.attrs ?? {}
  const align = ['left','center','right','justify'].includes(attrs.textAlign ?? '') ? attrs.textAlign : 'left'
  const style: CSSProperties = { textAlign:align as CSSProperties['textAlign'] }
  if (attrs.marginLeft) style.marginLeft = Math.max(0, Math.min(20, attrs.marginLeft)) + '%'
  if (attrs.marginRight) style.marginRight = Math.max(0, Math.min(20, attrs.marginRight)) + '%'
  switch (node.type) {
    case 'doc': return children
    case 'text': {
      let text: ReactNode = node.text ?? ''
      for (const mark of node.marks ?? []) {
        if (mark.type === 'bold') text = <strong>{text}</strong>
        if (mark.type === 'italic') text = <em>{text}</em>
        if (mark.type === 'underline') text = <u>{text}</u>
        if (mark.type === 'textStyle' && /^\d{1,2}px$/.test(mark.attrs?.fontSize ?? '')) text = <span style={{fontSize:mark.attrs!.fontSize}}>{text}</span>
      }
      return text
    }
    case 'paragraph': return <p style={style}>{children?.length ? children : <br />}</p>
    case 'heading': return attrs.level === 3 ? <h3 style={style}>{children}</h3> : <h2 style={style}>{children}</h2>
    case 'hardBreak': return <br />
    case 'bulletList': return <ul>{children}</ul>
    case 'orderedList': return <ol start={attrs.start ?? 1}>{children}</ol>
    case 'listItem': return <li>{children}</li>
    case 'blockquote': return <blockquote>{children}</blockquote>
    case 'image': {
      if (!isImageURL(attrs.src)) return null
      const width = [25,50,75,100].includes(attrs.width ?? 0) ? attrs.width : 100
      return <img src={attrs.src} alt={attrs.alt ?? ''} loading="lazy" decoding="async" style={{width:width + '%',
        marginLeft:attrs.textAlign === 'left' ? 0 : 'auto', marginRight:attrs.textAlign === 'right' ? 0 : 'auto'}} />
    }
    default: return null
  }
}

export function RichContent({ content, body, layout }: { content?: RichNode; body?: string; layout?: {left:number;right:number} }) {
  return <div className="news-rich-content" style={{paddingLeft:Math.max(0, Math.min(20, layout?.left ?? 0)) + '%', paddingRight:Math.max(0, Math.min(20, layout?.right ?? 0)) + '%'}}>
    {render(content ?? legacyContent(body) as RichNode)}
  </div>
}
