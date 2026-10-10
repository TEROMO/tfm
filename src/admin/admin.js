import { createArticleEditor } from './editor.js';
import { normalizeLayout } from '../blog/content.js';
import { siteName } from '../blog/seo.js';

const $ = id => document.getElementById(id);
const API = './api';
let csrf = '';
let posts = [];
let current = null;
let cover = '';
let thumbnail = '';
let filter = 'all';
let dirty = false;
let setup = false;
let rich = null;
let photoSelection;
let setupToken = new URLSearchParams(location.hash.slice(1)).get('setup') ?? '';
if (setupToken) history.replaceState(null, '', location.pathname);
const dateLabel = date => new Intl.DateTimeFormat('ru-RU', { day:'numeric', month:'long', year:'numeric' }).format(new Date(date + 'T12:00:00'));
const today = () => { const now = new Date(); return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`; };
const text = (tag, value, className) => { const element = document.createElement(tag); element.textContent = value; if (className) element.className = className; return element; };
const error = (id, message = '') => { $(id).textContent = message; $(id).hidden = !message; };
let toastTimeout;
function toast(message) { $('notice').textContent = message; $('notice').hidden = false; clearTimeout(toastTimeout); toastTimeout = setTimeout(() => { $('notice').hidden = true; }, 4500); }

async function api(route, { method = 'GET', data, blob } = {}) {
  const response = await fetch(API + route, {
    method, credentials:'same-origin', cache:'no-store',
    headers: { ...(method !== 'GET' ? { 'X-CSRF-Token':csrf } : {}), ...(data ? { 'Content-Type':'application/json' } : {}), ...(blob ? { 'Content-Type':blob.type } : {}) },
    body: blob ?? (data ? JSON.stringify(data) : undefined),
  });
  let result;
  try { result = await response.json(); } catch { throw new Error('Не удалось связаться с сервером. Попробуйте ещё раз.'); }
  if (!response.ok) {
    if (response.status === 401 && !['/login','/setup'].includes(route)) showAuth(false);
    throw new Error(result.error || 'Не удалось сохранить изменения.');
  }
  return result;
}
function showAuth(needsSetup) {
  $('app').hidden = true;
  $('auth').hidden = false;
  setup = needsSetup && !!setupToken;
  $('auth-title').textContent = setup ? 'Создайте пароль' : 'Вход в админку';
  $('auth-description').textContent = setup ? 'Придумайте пароль для управления новостями. Логин — admin.' : 'Здесь можно добавлять и изменять новости сайта.';
  $('username-label').hidden = setup;
  $('confirm-label').hidden = !setup;
  $('confirm-password').required = setup;
  $('password').minLength = setup ? 12 : 1;
  $('password').autocomplete = setup ? 'new-password' : 'current-password';
  $('auth-submit').textContent = setup ? 'Сохранить пароль и войти →' : 'Войти →';
  $('auth-submit').disabled = needsSetup && !setupToken;
  $('auth-hint').textContent = setup ? 'Не меньше 12 символов. Сохраните пароль, чтобы не потерять доступ.' : needsSetup ? 'Админка ещё не настроена. Откройте одноразовую ссылку, показанную при запуске сервера.' : 'Доступ есть только у владельца сайта.';
  error('auth-error');
}
async function loadPosts() {
  $('post-list').replaceChildren(text('div', 'Загружаем новости…', 'empty-state'));
  error('list-error');
  try { posts = (await api('/posts')).posts; renderPosts(); }
  catch (reason) { error('list-error', reason.message); $('post-list').replaceChildren(); }
}
function renderPosts() {
  $('post-count').textContent = posts.length;
  const query = $('search').value.trim().toLocaleLowerCase('ru');
  const visible = posts.filter(post => (filter === 'all' || post.status === filter) && post.title.toLocaleLowerCase('ru').includes(query));
  $('post-list').replaceChildren();
  if (!visible.length) { $('post-list').append(text('div', posts.length ? 'Подходящих новостей нет. Попробуйте другой поиск или вкладку.' : 'Здесь пока нет новостей. Нажмите «Добавить новость», чтобы создать первую.', 'empty-state')); return; }
  for (const post of visible) {
    const row = text('article', '', 'post-row');
    let image;
    if (post.cover) { image = document.createElement('img'); image.src = post.thumbnail || post.cover; image.alt = ''; image.loading = 'lazy'; image.className = 'post-cover'; }
    else image = text('div', 'Без обложки', 'post-cover post-placeholder');
    const info = text('div', '');
    info.append(text('h2', post.title, 'post-title'));
    const meta = text('div', '', 'post-meta');
    meta.append(text('span', post.status === 'published' ? 'Опубликовано' : 'Черновик', 'badge' + (post.status === 'draft' ? ' draft' : '')),
      text('span', dateLabel(post.date)), text('span', post.category));
    info.append(meta);
    const actions = text('div', '', 'row-actions');
    const edit = text('button', 'Изменить', 'button secondary'); edit.type = 'button'; edit.setAttribute('aria-label', `Изменить: ${post.title}`); edit.onclick = () => openEditor(post);
    const remove = text('button', 'Удалить', 'button quiet delete-button'); remove.type = 'button'; remove.setAttribute('aria-label', `Удалить: ${post.title}`); remove.onclick = () => deletePost(post);
    actions.append(edit, remove); row.append(image, info, actions); $('post-list').append(row);
  }
}
function previewCover() {
  $('cover-preview').replaceChildren();
  if (cover) { const image = document.createElement('img'); image.src = cover; image.alt = 'Обложка новости'; $('cover-preview').append(image); }
  else $('cover-preview').append(text('span', 'Добавьте изображение'));
  $('remove-cover').hidden = !cover;
}
function openEditor(post = null) {
  current = post;
  photoSelection = null;
  dirty = false;
  cover = post?.cover ?? '';
  thumbnail = post?.thumbnail ?? '';
  for (const name of ['title','excerpt']) $(name).value = post?.[name] ?? '';
  $('seo-title').value = post?.seo?.title ?? '';
  $('seo-description').value = post?.seo?.description ?? '';
  seoSnippet();
  rich?.destroy();
  rich = createArticleEditor(post, () => { dirty = true; updatePreview(); }, uploadPhotos);
  $('margin-left').value = post?.layout?.left ?? 0;
  $('margin-right').value = post?.layout?.right ?? 0;
  applyMargins();
  $('date').value = post?.date ?? today();
  const category = post?.category ?? 'Новости';
  if (![...$('category').options].some(option => option.value === category)) $('category').append(new Option(category, category));
  $('category').value = category;
  $('editor-title').textContent = post ? 'Редактирование новости' : 'Новая новость';
  $('editor-status').textContent = post?.status === 'published' ? 'Новость опубликована на сайте' : 'Пока не опубликована';
  $('publish').textContent = post?.status === 'published' ? 'Сохранить изменения →' : 'Опубликовать →';
  $('save-draft').textContent = post?.status === 'published' ? 'Снять с публикации' : 'Сохранить черновик';
  $('view-post').hidden = post?.status !== 'published';
  if (post) $('view-post').href = `../article/${encodeURIComponent(post.slug)}/`;
  previewCover(); error('editor-error');
  $('list-view').hidden = true; $('editor-view').hidden = false;
  window.scrollTo(0, 0); $('title').focus();
}
function closeEditor() {
  if (dirty && !confirm('Есть несохранённые изменения. Закрыть без сохранения?')) return;
  current = null; dirty = false;
  rich?.destroy(); rich = null;
  $('editor-view').hidden = true; $('list-view').hidden = false;
  renderPosts(); window.scrollTo(0, 0);
}
async function save(status) {
  if (!$('editor-form').reportValidity()) return;
  if (status === 'draft' && current?.status === 'published' && !confirm('Снять новость с публикации? Она останется в черновиках.')) return;
  let data;
  try { data = { ...collectPost(), status, version:current?.version }; }
  catch (reason) { return error('editor-error', reason.message); }
  setBusy(true); error('editor-error');
  try {
    const result = await api('/posts' + (current ? '/' + current.id : ''), { method:current ? 'PUT' : 'POST', data });
    posts = posts.filter(post => post.id !== result.post.id).concat(result.post).sort((a,b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));
    dirty = false; current = null; closeEditor();
    toast(status === 'published' ? 'Новость сохранена и опубликована на сайте' : 'Черновик сохранён');
  } catch (reason) { error('editor-error', reason.message); }
  finally { setBusy(false); }
}

function collectPost() {
  return { title:$('title').value, excerpt:$('excerpt').value, body:rich.body(), content:rich.content(),
    layout:normalizeLayout({left:Number($('margin-left').value),right:Number($('margin-right').value)}),
    category:$('category').value, date:$('date').value, cover, thumbnail,
    seo:{title:$('seo-title').value,description:$('seo-description').value} };
}
function seoSnippet() {
  $('seo-snippet-title').textContent = $('seo-title').value.trim() || ($('title').value.trim() || 'Название статьи') + ' — ' + siteName;
  $('seo-snippet-description').textContent = $('seo-description').value.trim() || $('excerpt').value.trim() || 'Короткое описание статьи';
}
function applyMargins() {
  $('body').style.setProperty('--margin-left', Math.max(0, Math.min(20, Number($('margin-left').value))) + '%');
  $('body').style.setProperty('--margin-right', Math.max(0, Math.min(20, Number($('margin-right').value))) + '%');
}
function setBusy(busy) { $('editor-fields').disabled = busy; rich?.setBusy(busy); }

let previewTimer;
function sendPreview() {
  if (!$('preview-dialog').open || !rich) return;
  try {
    const post = collectPost();
    post.title ||= 'Заголовок новости'; post.date ||= today();
    $('preview-frame').contentWindow?.postMessage({type:'blog-preview',post}, location.origin);
  } catch (reason) { error('editor-error', reason.message); }
}
function updatePreview() { clearTimeout(previewTimer); if ($('preview-dialog').open) previewTimer = setTimeout(sendPreview, 150); }
$('preview-post').onclick = () => {
  try { collectPost(); } catch (reason) { return error('editor-error', reason.message); }
  $('preview-dialog').showModal();
  $('preview-frame').src = '../article/?preview=1';
};
$('close-preview').onclick = () => $('preview-dialog').close();
$('preview-frame').onload = sendPreview;
window.addEventListener('message', event => {
  if (event.origin === location.origin && event.source === $('preview-frame').contentWindow && event.data?.type === 'blog-preview-ready') sendPreview();
});
for (const device of ['desktop','mobile']) $('preview-' + device).onclick = () => {
  $('preview-frame').classList.toggle('mobile', device === 'mobile');
  for (const item of ['desktop','mobile']) $('preview-' + item).setAttribute('aria-pressed', String(item === device));
};
for (const side of ['left','right']) $('margin-' + side).addEventListener('input', () => { applyMargins(); dirty = true; updatePreview(); });
$('reset-margins').onclick = () => { $('margin-left').value = 0; $('margin-right').value = 0; applyMargins(); dirty = true; updatePreview(); };
async function deletePost(post) {
  const dialog = $('delete-dialog'); dialog.returnValue = 'cancel'; $('delete-title').textContent = post.title;
  const result = await new Promise(resolve => { dialog.addEventListener('close', () => resolve(dialog.returnValue), { once:true }); dialog.showModal(); });
  if (result !== 'delete') return;
  error('list-error');
  try { await api('/posts/' + post.id, { method:'DELETE', data:{ version:post.version } }); posts = posts.filter(item => item.id !== post.id); renderPosts(); toast('Новость удалена'); }
  catch (reason) { error('list-error', reason.message); }
}
async function uploadCover(file) {
  if (!file) return;
  if (!['image/jpeg','image/png','image/webp'].includes(file.type)) return error('editor-error', 'Выберите JPG, PNG или WebP.');
  if (file.size > 25 * 1024 * 1024) return error('editor-error', 'Изображение слишком большое. Выберите файл до 25 МБ.');
  setBusy(true); $('upload-cover').textContent = 'Загружаем…'; error('editor-error');
  try {
    const bitmap = await createImageBitmap(file, { imageOrientation:'from-image' });
    const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas'); canvas.width = Math.max(1, Math.round(bitmap.width * scale)); canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height); bitmap.close();
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', .84));
    if (!blob) throw new Error('Не удалось обработать изображение. Попробуйте другую картинку.');
    const small = document.createElement('canvas');
    const ratio = Math.min(1, 640 / Math.max(canvas.width, canvas.height));
    small.width = Math.max(1, Math.round(canvas.width * ratio)); small.height = Math.max(1, Math.round(canvas.height * ratio));
    small.getContext('2d').drawImage(canvas, 0, 0, small.width, small.height);
    const smallBlob = await new Promise(resolve => small.toBlob(resolve, 'image/webp', .8));
    if (!smallBlob) throw new Error('Не удалось обработать обложку. Попробуйте другую картинку.');
    const uploaded = await api('/uploads', { method:'POST', blob });
    const preview = await api('/uploads', { method:'POST', blob:smallBlob });
    cover = uploaded.cover; thumbnail = preview.cover;
    dirty = true; previewCover(); toast('Обложка загружена');
  } catch (reason) { error('editor-error', reason.message); }
  finally { setBusy(false); $('upload-cover').textContent = 'Загрузить изображение'; $('cover-file').value = ''; }
}

async function uploadPhotos(files) {
  if (!files.length || !rich || $('editor-fields').disabled) return;
  const selection = photoSelection ?? rich.selection(); photoSelection = null;
  let imageCount;
  try { imageCount = (JSON.stringify(rich.content()).match(/"type":"image"/g) ?? []).length; }
  catch (reason) { return error('editor-error', reason.message); }
  if (imageCount + files.length > 50) return error('editor-error', 'В одной статье можно разместить до 50 фотографий.');
  if (files.some(file => !['image/jpeg','image/png','image/webp'].includes(file.type) || file.size > 25 * 1024 * 1024)) return error('editor-error', 'Выберите JPG, PNG или WebP, каждый файл до 25 МБ.');
  setBusy(true); error('editor-error');
  const uploaded = [];
  try {
    for (let i = 0; i < files.length; i++) {
      $('insert-photos').textContent = `Фото ${i + 1} из ${files.length}…`;
      const bitmap = await createImageBitmap(files[i], {imageOrientation:'from-image'});
      const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
      const canvas = document.createElement('canvas'); canvas.width = Math.max(1, Math.round(bitmap.width * scale)); canvas.height = Math.max(1, Math.round(bitmap.height * scale));
      canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height); bitmap.close();
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', .84));
      if (!blob) throw new Error('Не удалось обработать фото. Попробуйте другой файл.');
      const result = await api('/uploads', {method:'POST',blob});
      uploaded.push({src:result.cover,alt:files[i].name.replace(/\.[^.]+$/, '').slice(0,300)});
    }
    toast(files.length === 1 ? 'Фото добавлено в статью' : 'Фотографии добавлены в статью');
  } catch (reason) { error('editor-error', reason.message); }
  finally {
    setBusy(false);
    // Keep successfully uploaded images even when a later file failed.
    if (uploaded.length) rich.insertImages(uploaded, selection);
    $('insert-photos').textContent = '+ Фото в текст'; $('article-files').value = '';
  }
}
$('insert-photos').onclick = () => { photoSelection = rich.selection(); $('article-files').click(); };
$('article-files').onchange = () => uploadPhotos([...$('article-files').files]);
$('article-files').oncancel = () => { photoSelection = null; };
$('auth-form').onsubmit = async event => {
  event.preventDefault(); error('auth-error');
  if (setup && $('password').value !== $('confirm-password').value) return error('auth-error', 'Пароли не совпадают.');
  $('auth-submit').disabled = true;
  try {
    const result = await api(setup ? '/setup' : '/login', { method:'POST', data:setup ? { token:setupToken, password:$('password').value } : { username:$('username').value, password:$('password').value } });
    csrf = result.csrf; setupToken = ''; $('password').value = ''; $('confirm-password').value = '';
    $('auth').hidden = true; $('app').hidden = false;
    if (!$('editor-view').hidden && dirty) return;
    await loadPosts();
  } catch (reason) { error('auth-error', reason.message); }
  finally { $('auth-submit').disabled = false; }
};
$('show-password').onchange = () => { const type = $('show-password').checked ? 'text' : 'password'; $('password').type = type; $('confirm-password').type = type; };
$('logout').onclick = async () => {
  if (dirty && !confirm('Выйти без сохранения изменений?')) return;
  try { await api('/logout', { method:'POST', data:{} }); csrf = ''; dirty = false; current = null; $('editor-view').hidden = true; $('list-view').hidden = false; showAuth(false); }
  catch (reason) { toast(reason.message); }
};
$('add-post').onclick = () => openEditor(); $('search').oninput = renderPosts;
document.querySelectorAll('[data-filter]').forEach(button => { button.onclick = () => { filter = button.dataset.filter; document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button))); renderPosts(); }; });
$('editor-form').oninput = () => { dirty = true; seoSnippet(); updatePreview(); };
$('editor-form').onsubmit = event => { event.preventDefault(); save('published'); };
$('save-draft').onclick = () => save('draft'); $('back').onclick = closeEditor; $('cancel').onclick = closeEditor;
$('upload-cover').onclick = () => $('cover-file').click(); $('cover-file').onchange = () => uploadCover($('cover-file').files[0]);
$('remove-cover').onclick = () => { cover = ''; thumbnail = ''; dirty = true; previewCover(); };
window.addEventListener('beforeunload', event => { if (dirty) { event.preventDefault(); event.returnValue = ''; } });
(async () => {
  try {
    const status = await api('/session');
    if (status.authenticated) { csrf = status.csrf; $('auth').hidden = true; $('app').hidden = false; await loadPosts(); }
    else showAuth(status.setupRequired);
  } catch (reason) { error('auth-error', 'Сервер недоступен. Запустите сайт через start-site.bat и откройте админку снова.'); $('auth-submit').disabled = true; }
})();
