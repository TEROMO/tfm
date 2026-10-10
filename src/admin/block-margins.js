import { Extension } from '@tiptap/core';

export const BlockMargins = Extension.create({
  name:'blockMargins',
  addGlobalAttributes() {
    return [{types:['paragraph','heading'],attributes:Object.fromEntries(['Left','Right'].map(side => [
      'margin' + side, {
        default:0,
        parseHTML:element => {
          const value = element.style['margin' + side];
          const size = parseInt(value);
          return value.endsWith('%') && size >= 0 && size <= 20 ? size : 0;
        },
        renderHTML:attrs => attrs['margin' + side] ? {style:`margin-${side.toLowerCase()}:${attrs['margin' + side]}%;`} : {},
      },
    ]))}];
  },
});

export function selectedTextBlocks(state) {
  const {from,to,empty,$from} = state.selection;
  const blocks = [];
  if (empty) {
    for (let depth = $from.depth; depth > 0; depth--) {
      const node = $from.node(depth);
      if (['paragraph','heading'].includes(node.type.name)) { blocks.push({node,pos:$from.before(depth)}); break; }
    }
  } else state.doc.nodesBetween(from,to,(node,pos) => {
    if (['paragraph','heading'].includes(node.type.name) && pos + 1 < to && pos + node.nodeSize - 1 > from) blocks.push({node,pos});
  });
  return blocks;
}
