import { Editor, mergeAttributes } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { TextStyle, FontSize } from '@tiptap/extension-text-style';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import { closeHistory } from '@tiptap/pm/history';
import { legacyContent, normalizeContent } from '../blog/content.js';
import { createImageDrag } from './image-drag.js';
import { BlockMargins, selectedTextBlocks } from './block-margins.js';
import { SelectionHighlight } from './selection-highlight.js';

const $ = id => document.getElementById(id);
const ArticleImage = Image.extend({
  addAttributes() {
    return {
      src:{ default:null }, alt:{ default:'' },
      width:{ default:100, parseHTML:element => {
        const value = parseInt(element.style.width);
        return element.style.width.endsWith('%') && [25,50,75,100].includes(value) ? value : 100;
      }, renderHTML:() => ({}) },
      textAlign:{ default:'center', parseHTML:element => element.dataset.align ?? 'center', renderHTML:() => ({}) },
    };
  },
  renderHTML({ node, HTMLAttributes }) {
    const align = node.attrs.textAlign;
    return ['img', mergeAttributes(HTMLAttributes, {
      'data-align':align,
      style:`width:${node.attrs.width}%;margin-left:${align === 'left' ? '0' : 'auto'};margin-right:${align === 'right' ? '0' : 'auto'};`,
    })];
  },
});

export function createArticleEditor(post, onChange, onFiles) {
  let editor;
  const imageDrag = createImageDrag();
  function syncToolbar() {
    if (!editor) return;
    for (const name of ['bold','italic','underline','bulletList','orderedList']) {
      document.querySelector(`[data-command="${name}"]`).setAttribute('aria-pressed', String(editor.isActive(name)));
    }
    const image = editor.isActive('image');
    const alignment = image ? editor.getAttributes('image').textAlign : editor.getAttributes(editor.isActive('heading') ? 'heading' : 'paragraph').textAlign;
    document.querySelectorAll('[data-align]').forEach(button => {
      button.setAttribute('aria-pressed', String((alignment || 'left') === button.dataset.align));
      button.disabled = image && button.dataset.align === 'justify';
    });
    $('font-size').value = editor.getAttributes('textStyle').fontSize ?? 'auto';
    const blocks = selectedTextBlocks(editor.state);
    $('block-margin-count').textContent = blocks.length ? (blocks.length === 1 ? 'Текущий абзац' : `Выбрано абзацев: ${blocks.length}`) : 'Выберите текст в редакторе';
    for (const side of ['left','right']) {
      const input = $('block-margin-' + side);
      input.disabled = !blocks.length;
      if (document.activeElement === input) continue;
      const values = blocks.map(({node}) => node.attrs['margin' + (side === 'left' ? 'Left' : 'Right')] ?? 0);
      const mixed = values.some(value => value !== values[0]);
      input.value = mixed || !blocks.length ? '' : String(values[0]);
      input.placeholder = mixed ? 'Разные' : '0';
    }
    $('reset-block-margins').disabled = !blocks.length;
    $('text-block').value = editor.isActive('heading') ? String(editor.getAttributes('heading').level) : 'paragraph';
    $('image-tools').hidden = !image;
    if (image) { $('image-width').value = editor.getAttributes('image').width; $('image-alt').value = editor.getAttributes('image').alt ?? ''; }
    $('undo').disabled = !editor.can().undo(); $('redo').disabled = !editor.can().redo();
  }
  editor = new Editor({
    element:$('body'), injectCSS:false,
    extensions:[
      StarterKit.configure({ heading:{ levels:[2,3] }, code:false, codeBlock:false, horizontalRule:false, strike:false, link:false }),
      TextStyle, FontSize, TextAlign.configure({ types:['paragraph','heading'] }), BlockMargins, SelectionHighlight, ArticleImage,
    ],
    content:post?.content ?? legacyContent(post?.body ?? ''),
    editorProps:{
      attributes:{ id:'article-content', role:'textbox', 'aria-label':'Текст статьи', 'aria-multiline':'true', spellcheck:'true' },
      handleDOMEvents:imageDrag.events,
      handlePaste:(_view, event) => {
        const files = [...(event.clipboardData?.files ?? [])];
        if (!files.length) return false;
        onFiles(files); return true;
      },
      handleDrop:(view, event) => {
        if (view.dragging) return false;
        const files = [...(event.dataTransfer?.files ?? [])];
        if (!files.length) return false;
        const position = view.posAtCoords({left:event.clientX,top:event.clientY});
        if (position) editor.commands.setTextSelection(position.pos);
        onFiles(files); return true;
      },
    },
    onUpdate:() => { syncToolbar(); onChange(); },
    onSelectionUpdate:syncToolbar,
    onTransaction:({transaction}) => { imageDrag.map(transaction); syncToolbar(); },
  });
  document.querySelectorAll('#format-toolbar button').forEach(button => {
    button.onmousedown = event => event.preventDefault();
    if (button.dataset.command) button.onclick = () => {
      const commands = {bold:'toggleBold',italic:'toggleItalic',underline:'toggleUnderline',bulletList:'toggleBulletList',orderedList:'toggleOrderedList'};
      editor.chain().focus()[commands[button.dataset.command]]().run();
    };
    if (button.dataset.align) button.onclick = () => {
      const chain = editor.chain().focus();
      if (editor.isActive('image')) chain.updateAttributes('image', { textAlign:button.dataset.align }).run();
      else chain.setTextAlign(button.dataset.align).run();
    };
  });
  $('font-size').onchange = () => {
    const chain = editor.chain().focus();
    if ($('font-size').value === 'auto') chain.unsetFontSize().run();
    else chain.setFontSize($('font-size').value).run();
  };
  $('text-block').onchange = () => {
    const value = $('text-block').value;
    const type = editor.schema.nodes[value === 'paragraph' ? 'paragraph' : 'heading'];
    const tr = editor.state.tr;
    for (const {node,pos} of selectedTextBlocks(editor.state)) {
      const $pos = tr.doc.resolve(pos);
      if ($pos.parent.canReplaceWith($pos.index(),$pos.index()+1,type)) tr.setNodeMarkup(pos,type,{...node.attrs,...(value === 'paragraph' ? {} : {level:Number(value)})});
    }
    editor.view.dispatch(tr); editor.commands.focus();
  };
  $('undo').onclick = () => editor.chain().focus().undo().run();
  $('redo').onclick = () => editor.chain().focus().redo().run();
  $('image-width').onchange = () => editor.chain().focus().updateAttributes('image', {width:Number($('image-width').value)}).run();
  $('image-alt').oninput = () => editor.commands.updateAttributes('image', {alt:$('image-alt').value});
  function setBlockMargins(values) {
    const blocks = selectedTextBlocks(editor.state);
    if (!blocks.length) return;
    const tr = editor.state.tr;
    for (const {node,pos} of blocks) tr.setNodeMarkup(pos,undefined,{...node.attrs,...values});
    editor.view.dispatch(tr);
  }
  for (const side of ['left','right']) $('block-margin-' + side).oninput = event => {
    const value = event.target.value;
    if (value === '' || !Number.isInteger(Number(value)) || Number(value) < 0 || Number(value) > 20) return;
    setBlockMargins({['margin' + (side === 'left' ? 'Left' : 'Right')]:Number(value)});
  };
  $('reset-block-margins').onmousedown = event => event.preventDefault();
  $('reset-block-margins').onclick = () => {
    setBlockMargins({marginLeft:0,marginRight:0});
    $('block-margin-left').value = '0'; $('block-margin-right').value = '0';
  };
  $('delete-image').onclick = () => {
    editor.view.dispatch(closeHistory(editor.state.tr));
    editor.chain().focus().deleteSelection().run();
  };
  syncToolbar();
  return {
    content:() => normalizeContent(editor.getJSON()),
    body:() => editor.getText({ blockSeparator:'\n\n' }),
    selection:() => ({from:editor.state.selection.from, to:editor.state.selection.to}),
    setBusy:busy => editor.setEditable(!busy),
    insertImages:(images, selection) => {
      const content = images.flatMap(image => [{type:'image',attrs:{src:image.src,alt:image.alt,width:100,textAlign:'center'}},{type:'paragraph'}]);
      editor.view.dispatch(closeHistory(editor.state.tr));
      editor.chain().focus().setTextSelection(selection).insertContent(content).run();
      editor.view.dispatch(closeHistory(editor.state.tr));
    },
    destroy:() => { imageDrag.destroy(); editor.destroy(); },
  };
}
