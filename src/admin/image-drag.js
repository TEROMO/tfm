import { NodeSelection } from '@tiptap/pm/state';
import { Fragment, Slice } from '@tiptap/pm/model';
import { dropPoint } from '@tiptap/pm/transform';
import { closeHistory } from '@tiptap/pm/history';

// Keep image movement in the editor rather than the OS's HTML drag operation.
// Native image dragging can copy HTML and suppress wheel events on Windows.
export function createImageDrag() {
  let drag = null;
  let frame = 0;
  let lastFrame = 0;
  let ghost, cursor;
  const win = window;

  function stop() {
    if (!drag) return;
    const old = drag; drag = null;
    if (old.view.dom.hasPointerCapture(old.pointerId)) old.view.dom.releasePointerCapture(old.pointerId);
    cancelAnimationFrame(frame); frame = 0; lastFrame = 0;
    ghost?.remove(); cursor?.remove(); ghost = cursor = null;
    document.body.classList.remove('is-image-dragging');
    win.removeEventListener('pointermove', move);
    win.removeEventListener('pointerup', finish);
    win.removeEventListener('pointercancel', stop);
    win.removeEventListener('blur', stop);
    win.removeEventListener('keydown', escape, true);
    win.removeEventListener('scroll', updateTarget, true);
    win.removeEventListener('wheel', wheel);
  }

  function updateTarget() {
    if (!drag?.active) return;
    const { view, x, y, node } = drag;
    const rect = view.dom.getBoundingClientRect();
    drag.target = null;
    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom && y >= 0 && y <= win.innerHeight) {
      const found = view.posAtCoords({ left:x, top:y });
      if (found) drag.target = dropPoint(view.state.doc, found.pos, new Slice(Fragment.from(node), 0, 0));
    }
    if (drag.target != null) {
      const coords = view.coordsAtPos(drag.target);
      const style = getComputedStyle(view.dom);
      const left = rect.left + parseFloat(style.paddingLeft);
      const right = rect.right - parseFloat(style.paddingRight);
      cursor.hidden = false;
      cursor.style.left = left + 'px'; cursor.style.width = Math.max(0, right - left) + 'px';
      cursor.style.top = Math.max(0, Math.min(win.innerHeight - 3, coords.top)) + 'px';
    } else cursor.hidden = true;
    ghost.style.left = Math.min(win.innerWidth - 160, x + 18) + 'px';
    ghost.style.top = Math.max(8, Math.min(win.innerHeight - 112, y + 18)) + 'px';
  }

  function tick(time) {
    if (!drag?.active) return;
    const elapsed = lastFrame ? Math.min(40, time - lastFrame) : 16;
    lastFrame = time;
    const rect = drag.view.dom.getBoundingClientRect();
    const edge = Math.min(90, win.innerHeight / 5);
    let speed = 0;
    if (drag.x >= rect.left && drag.x <= rect.right) {
      if (drag.y < edge) speed = -900 * Math.min(1, (edge - drag.y) / edge);
      else if (drag.y > win.innerHeight - edge) speed = 900 * Math.min(1, (drag.y - win.innerHeight + edge) / edge);
    }
    if (speed) win.scrollBy(0, speed * elapsed / 1000);
    updateTarget();
    frame = requestAnimationFrame(tick);
  }

  function move(event) {
    if (!drag || event.pointerId !== drag.pointerId) return;
    drag.x = event.clientX; drag.y = event.clientY;
    if (!drag.active && Math.hypot(drag.x - drag.startX, drag.y - drag.startY) < 6) return;
    event.preventDefault();
    if (!drag.active) {
      drag.active = true;
      drag.view.dispatch(closeHistory(drag.view.state.tr));
      ghost = document.createElement('img'); ghost.src = drag.node.attrs.src; ghost.alt = ''; ghost.className = 'image-drag-ghost';
      cursor = document.createElement('div'); cursor.className = 'image-drop-cursor'; cursor.setAttribute('aria-hidden', 'true');
      document.body.append(ghost, cursor); document.body.classList.add('is-image-dragging');
      frame = requestAnimationFrame(tick);
    }
    updateTarget();
  }

  function finish(event) {
    if (!drag || event.pointerId !== drag.pointerId) return;
    drag.x = event.clientX; drag.y = event.clientY; updateTarget();
    const current = drag;
    stop();
    if (!current.active || current.target == null) return;
    event.preventDefault();
    const { view, pos, node, target } = current;
    // Dropping on the original image or its edge is a no-op.
    if (target >= pos && target <= pos + node.nodeSize) return;
    if (!view.state.doc.nodeAt(pos)?.eq(node)) return;
    const tr = closeHistory(view.state.tr);
    tr.delete(pos, pos + node.nodeSize);
    const insertion = tr.mapping.map(target);
    tr.replaceRangeWith(insertion, insertion, node);
    tr.setSelection(NodeSelection.create(tr.doc, insertion));
    view.dispatch(tr.setMeta('uiEvent', 'drop'));
    view.dispatch(closeHistory(view.state.tr));
    view.focus();
  }

  function escape(event) { if (event.key === 'Escape' && drag) { event.preventDefault(); stop(); } }
  function wheel(event) {
    if (!drag?.active || event.ctrlKey) return;
    event.preventDefault();
    const scale = event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? win.innerHeight : 1;
    win.scrollBy(event.deltaX * scale, event.deltaY * scale);
    updateTarget();
  }

  return {
    events:{
      pointerdown(view, event) {
        if (event.button !== 0 || event.pointerType !== 'mouse' || !view.editable) return false;
        const image = event.target instanceof Element ? event.target.closest('img') : null;
        if (!image || !view.dom.contains(image)) return false;
        const pos = view.posAtDOM(image, 0);
        const node = view.state.doc.nodeAt(pos);
        if (node?.type.name !== 'image') return false;
        stop(); event.preventDefault();
        view.focus(); view.dispatch(view.state.tr.setSelection(NodeSelection.create(view.state.doc, pos)));
        drag = { view, node, pos, pointerId:event.pointerId, startX:event.clientX, startY:event.clientY, x:event.clientX, y:event.clientY, active:false, target:null };
        view.dom.setPointerCapture(event.pointerId);
        win.addEventListener('pointermove', move, {passive:false});
        win.addEventListener('pointerup', finish);
        win.addEventListener('pointercancel', stop);
        win.addEventListener('blur', stop);
        win.addEventListener('keydown', escape, true);
        win.addEventListener('scroll', updateTarget, true);
        win.addEventListener('wheel', wheel, {passive:false});
        return true;
      },
      dragstart(_view, event) {
        if (event.target instanceof Element && event.target.closest('img')) { event.preventDefault(); return true; }
        return false;
      },
    },
    map(transaction) {
      if (!drag || !transaction.docChanged) return;
      const mapped = transaction.mapping.mapResult(drag.pos, -1);
      const node = transaction.doc.nodeAt(mapped.pos);
      if (mapped.deleted || node?.type.name !== 'image') return stop();
      drag.pos = mapped.pos; drag.node = node;
    },
    destroy:stop,
  };
}
