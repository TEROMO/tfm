// A small shared schema: the public site never imports the editor library.
export const fontSizes = [14, 16, 18, 20, 24, 28, 32, 40, 48];
export const alignments = ['left', 'center', 'right', 'justify'];

export function isImageURL(value) {
  if (typeof value !== 'string' || value.length > 2000) return false;
  if (/^\/blog\/uploads\/[a-f0-9-]+\.(webp|jpg|png)$/.test(value)) return true;
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password; }
  catch { return false; }
}

export function legacyContent(body = '') {
  return { type:'doc', content:body.split(/\n\s*\n/).filter(Boolean).map(paragraph => ({
    type:'paragraph', content:paragraph.split('\n').flatMap((line, index) => [
      ...(index ? [{ type:'hardBreak' }] : []), ...(line ? [{ type:'text', text:line }] : []),
    ]),
  })) };
}

export function normalizeLayout(value = {}) {
  const result = { left:value.left ?? 0, right:value.right ?? 0 };
  if (Object.values(result).some(size => !Number.isInteger(size) || size < 0 || size > 20)) {
    throw new Error('Отступы слева и справа должны быть от 0 до 20%.');
  }
  return result;
}

export function normalizeContent(value) {
  let nodes = 0, characters = 0, images = 0;
  const fail = () => { throw new Error('Проверьте текст и оформление статьи.'); };
  const inline = ['text','hardBreak'];
  const blocks = ['paragraph','heading','bulletList','orderedList','blockquote','image'];
  function visit(node, depth, allowed) {
    if (!node || typeof node !== 'object' || !allowed.includes(node.type) || ++nodes > 8000 || depth > 16) fail();
    const result = { type:node.type };
    const attrs = node.attrs ?? {};
    if (node.type === 'text') {
      if (typeof node.text !== 'string' || !node.text.length || (characters += node.text.length) > 100000) fail();
      result.text = node.text;
      if (node.marks !== undefined) {
        if (!Array.isArray(node.marks) || node.marks.length > 4) fail();
        result.marks = node.marks.map(mark => {
          if (['bold','italic','underline'].includes(mark?.type)) return { type:mark.type };
          if (mark?.type === 'textStyle') {
            const size = mark.attrs?.fontSize;
            if (size == null) return null;
            if (typeof size !== 'string' || !/^\d{1,2}px$/.test(size) || parseInt(size) < 10 || parseInt(size) > 64) fail();
            return { type:'textStyle', attrs:{ fontSize:size } };
          }
          fail();
        }).filter(Boolean);
        if (!result.marks.length) delete result.marks;
      }
    } else if (node.marks?.length) fail();
    if (['paragraph','heading'].includes(node.type)) {
      if (attrs.textAlign != null && !alignments.includes(attrs.textAlign)) fail();
      result.attrs = { textAlign:attrs.textAlign ?? 'left' };
      for (const side of ['Left','Right']) {
        const value = attrs['margin' + side] ?? 0;
        if (!Number.isInteger(value) || value < 0 || value > 20) throw new Error('Отступы выбранных абзацев должны быть от 0 до 20%.');
        if (value) result.attrs['margin' + side] = value;
      }
      if (node.type === 'heading') {
        if (![2,3].includes(attrs.level)) fail();
        result.attrs.level = attrs.level;
      }
    }
    if (node.type === 'orderedList') {
      const start = attrs.start ?? 1;
      if (!Number.isInteger(start) || start < 1 || start > 9999) fail();
      result.attrs = { start };
    }
    if (node.type === 'image') {
      if (++images > 50 || !isImageURL(attrs.src)) throw new Error('В статье можно разместить до 50 фотографий. Загрузите фото или используйте HTTPS-ссылку.');
      const width = attrs.width ?? 100;
      const textAlign = attrs.textAlign ?? 'center';
      if (![25,50,75,100].includes(width) || !['left','center','right'].includes(textAlign)) fail();
      if (attrs.alt != null && (typeof attrs.alt !== 'string' || attrs.alt.length > 300)) fail();
      result.attrs = { src:attrs.src, alt:attrs.alt ?? '', width, textAlign };
    }
    if (['image','text','hardBreak'].includes(node.type)) {
      if (node.content?.length) fail();
    } else {
      if (node.content !== undefined && !Array.isArray(node.content)) fail();
      const children = node.content ?? [];
      const allowedChildren = ['doc','blockquote'].includes(node.type) ? blocks : ['paragraph','heading'].includes(node.type) ? inline
        : node.type === 'listItem' ? blocks : ['listItem'];
      result.content = children.map(child => visit(child, depth + 1, allowedChildren));
      if (['bulletList','orderedList','listItem','blockquote'].includes(node.type) && !children.length) fail();
      if (node.type === 'listItem' && children[0]?.type !== 'paragraph') fail();
    }
    return result;
  }
  return visit(value, 0, ['doc']);
}
