export const arrowPath = 'M5 12h14M13 6l6 6-6 6';
export const primaryControlClass = 'cta-button inline-flex h-12 items-center gap-2 rounded-full bg-acid px-5 font-display text-[0.875rem] font-extrabold whitespace-nowrap uppercase tracking-tight text-ink min-[480px]:gap-3 min-[480px]:px-7 min-[480px]:text-[1rem] sm:text-[1.0625rem]';

export function arrowMarkup(className) {
  return `<svg viewBox="0 0 24 24" fill="none" class="${className}" aria-hidden="true"><path d="${arrowPath}" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path></svg>`;
}
