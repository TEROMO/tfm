import { Extension } from '@tiptap/core';
import { Plugin, PluginKey, TextSelection } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';

const selectionHighlightKey = new PluginKey('selectionHighlight');

// The browser hides the native text selection when a formatting input gets focus.
// Decorations show the editor's retained range without taking focus from the input.
export const SelectionHighlight = Extension.create({
  name:'selectionHighlight',
  addProseMirrorPlugins() {
    return [new Plugin({
      key:selectionHighlightKey,
      state:{
        init:() => false,
        apply:(tr, visible) => tr.getMeta(selectionHighlightKey) ?? visible,
      },
      props:{
        decorations(state) {
          const {selection} = state;
          if (!selectionHighlightKey.getState(state) || !(selection instanceof TextSelection) || selection.empty) return DecorationSet.empty;
          return DecorationSet.create(state.doc, [Decoration.inline(selection.from, selection.to, {class:'editor-retained-selection'})]);
        },
      },
      view(view) {
        const document = view.dom.ownerDocument;
        let destroyed = false;
        const refresh = () => {
          if (destroyed) return;
          const control = document.activeElement?.closest('#format-toolbar, .block-margin-tools, .margin-controls');
          const visible = Boolean(control && control.closest('#editor-form'));
          if (visible !== selectionHighlightKey.getState(view.state)) view.dispatch(view.state.tr.setMeta(selectionHighlightKey, visible));
        };
        const afterFocusOut = () => queueMicrotask(refresh);
        document.addEventListener('focusin', refresh);
        document.addEventListener('focusout', afterFocusOut);
        return {destroy() {
          destroyed = true;
          document.removeEventListener('focusin', refresh);
          document.removeEventListener('focusout', afterFocusOut);
        }};
      },
    })];
  },
});
