const $ = selector => document.querySelector(selector);
const state = { departments: [], subjects: [], additions: [] };
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

document.addEventListener('DOMContentLoaded', initAdmin);

function initAdmin() {
  $('#login-form').addEventListener('submit', event => {
    event.preventDefault();
    if ($('#admin-password').value !== '1234') {
      $('#login-error').classList.remove('hidden');
      return;
    }
    $('#login-error').classList.add('hidden');
    $('#login-panel').classList.add('hidden');
    $('#dashboard').classList.remove('hidden');
    sessionStorage.setItem('dbcm-admin-preview', 'yes');
    renderAdminNotes();
  });
  $('#logout-button').addEventListener('click', logout);
  $('#note-department').addEventListener('change', renderSubjectOptions);
  $('#note-subject').addEventListener('change', renderUnitOptions);
  $('#note-form').addEventListener('submit', addPreviewNote);
  $('#admin-note-list').addEventListener('click', removePreviewNote);
  if (sessionStorage.getItem('dbcm-admin-preview') === 'yes') {
    $('#login-panel').classList.add('hidden');
    $('#dashboard').classList.remove('hidden');
  }
  const data = window.CURRICULUM;
  if (!data) {
    $('#admin-note-list').innerHTML = '<div class="empty-state">The local curriculum file could not be loaded.</div>';
    return;
  }
  state.departments = data.departments || [];
  state.subjects = data.subjects || [];
  $('#note-department').innerHTML = state.departments.map(department => `<option value="${escapeHtml(department.id)}">${escapeHtml(department.name)}</option>`).join('');
  renderSubjectOptions();
  renderAdminNotes();
}

function renderSubjectOptions() {
  const subjects = state.subjects.filter(subject => subject.departmentId === $('#note-department').value);
  $('#note-subject').innerHTML = subjects.map(subject => `<option value="${escapeHtml(subject.id)}">${escapeHtml(subject.code)} · ${escapeHtml(subject.shortName || subject.name)}</option>`).join('');
  renderUnitOptions();
}

function renderUnitOptions() {
  const subject = state.subjects.find(item => item.id === $('#note-subject').value);
  const modules = subject?.modules || [];
  $('#note-unit').innerHTML = '<option value="">All units</option>' + modules.map((unit, index) => `<option value="${escapeHtml(unit.num || index + 1)}">Unit ${escapeHtml(unit.num || index + 1)} · ${escapeHtml(unit.title)}</option>`).join('');
}

function renderAdminNotes() {
  const demoRows = state.additions.map((note, index) => `
    <article class="admin-note-item"><div><strong>${escapeHtml(note.title)}</strong><span>${escapeHtml(note.code)} · ${escapeHtml(note.fileName || 'No PDF selected')}</span></div>
      <button type="button" data-remove="${index}">Remove</button></article>`).join('');
  const starter = `<article class="admin-note-item"><div><strong>Unit summaries & quick revision guide</strong><span>BCA101 · Existing catalog entry</span></div><span>Catalog</span></article>`;
  $('#admin-note-list').innerHTML = demoRows + starter;
  $('#note-count').textContent = String(310 + state.additions.length);
}

function addPreviewNote(event) {
  event.preventDefault();
  const subject = state.subjects.find(item => item.id === $('#note-subject').value);
  const file = $('#note-file').files[0];
  state.additions.unshift({
    title: $('#note-title').value.trim(),
    code: subject?.code || '—',
    unit: $('#note-unit').value,
    author: $('#note-author').value.trim(),
    fileName: file?.name || ''
  });
  renderAdminNotes();
  $('#note-form').reset();
  renderSubjectOptions();
  showToast('Preview entry added in this browser only.');
}

function removePreviewNote(event) {
  const button = event.target.closest('[data-remove]');
  if (!button) return;
  state.additions.splice(Number(button.dataset.remove), 1);
  renderAdminNotes();
}

function logout() {
  sessionStorage.removeItem('dbcm-admin-preview');
  $('#dashboard').classList.add('hidden');
  $('#login-panel').classList.remove('hidden');
  $('#admin-password').value = '';
}

function showToast(message) {
  const toast = $('#admin-toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1900);
}
