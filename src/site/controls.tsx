import type {ComponentProps} from 'react'
import {arrowPath, primaryControlClass} from './control-markup.js'

export function SiteArrow({className = ''}: {className?:string}) {
  return <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d={arrowPath} stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
}

export function PrimaryButton({children, className = '', ...props}: ComponentProps<'button'>) {
  return <button {...props} className={`${primaryControlClass} ${className}`}>
    {children}<SiteArrow className="cta-arrow h-4 w-4 shrink-0" />
  </button>
}

export function PrimaryLink({children, className = '', ...props}: ComponentProps<'a'>) {
  return <a {...props} className={`${primaryControlClass} ${className}`}>
    {children}<SiteArrow className="cta-arrow h-4 w-4 shrink-0" />
  </a>
}

export function ArrowLink({children, dark = false, href = '#'}: {children:ComponentProps<'a'>['children'];dark?:boolean;href?:string}) {
  return <a href={href} className={`arrow-link inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-tight underline decoration-acid decoration-4 underline-offset-4 ${dark ? 'text-paper' : 'text-ink'}`}>
    {children}{' '}<SiteArrow className="arrow-link-icon h-4 w-4" />
  </a>
}
