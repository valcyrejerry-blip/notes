const state = {
  departments: [],
  semesters: [],
  subjects: [],
  departmentId: '',
  semester: null,
  subject: null,
  tab: 'syllabus',
  bookmarks: JSON.parse(localStorage.getItem('dbcm-v2-bookmarks') || '[]')
};

const $ = selector => document.querySelector(selector);
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));
const departmentById = id => state.departments.find(item => item.id === id);
const semesterYear = n => n <= 2 ? 'First year' : n <= 4 ? 'Second year' : 'Third year';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const dataset = window.CURRICULUM;
  if (!dataset) {
    $('#department-grid').innerHTML = '<p class="empty-state">The local curriculum file could not be loaded.</p>';
    return;
  }
  state.departments = dataset.departments || [];
  state.semesters = dataset.semesters || [];
  state.subjects = dataset.subjects || [];
  renderDepartments();
  $('#dataset-count').textContent = `${state.subjects.length} subjects`;
  renderSemesters();
  bindEvents();
}

function bindEvents() {
  $('#department-grid').addEventListener('click', event => {
    const tile = event.target.closest('[data-department]');
    if (tile) chooseDepartment(tile.dataset.department);
  });
  $('#department-select').addEventListener('change', event => chooseDepartment(event.target.value));
  $('#semester-grid').addEventListener('click', event => {
    const tile = event.target.closest('[data-semester]');
    if (tile && !tile.disabled) chooseSemester(Number(tile.dataset.semester));
  });
  $('#subject-grid').addEventListener('click', event => {
    const tile = event.target.closest('[data-subject]');
    if (tile) openSubject(tile.dataset.subject);
  });
  $('#change-department').addEventListener('click', () => {
    state.departmentId = '';
    state.semester = null;
    state.subject = null;
    $('#semester-section').classList.add('hidden');
    $('#subject-section').classList.add('hidden');
    $('#subject-detail').classList.add('hidden');
    $('#browse').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  $('#change-semester').addEventListener('click', () => {
    state.subject = null;
    $('#subject-detail').classList.add('hidden');
    $('#subject-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  $('#back-to-subjects').addEventListener('click', () => {
    $('#subject-detail').classList.add('hidden');
    $('#subject-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  $('#home-button').addEventListener('click', returnHome);
  $('#resource-tabs').addEventListener('click', event => {
    const button = event.target.closest('[data-tab]');
    if (button) renderTab(button.dataset.tab);
  });
  $('#bookmark-button').addEventListener('click', toggleBookmark);
  $('#global-search').addEventListener('input', event => search(event.target.value));
  $('#global-search').addEventListener('keydown', event => {
    if (event.key === 'Escape') $('#search-results').classList.add('hidden');
    if (event.key === 'Enter') $('#search-results [data-search-subject]')?.click();
  });
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      $('#global-search').focus();
    }
  });
  $('#search-results').addEventListener('click', event => {
    const result = event.target.closest('[data-search-subject]');
    if (result) openSearchSubject(result.dataset.searchSubject);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.searchbox, .search-results')) $('#search-results').classList.add('hidden');
  });
}

function returnHome() {
  state.departmentId = '';
  state.semester = null;
  state.subject = null;
  $('#department-select').value = '';
  $('.department-tile.selected')?.classList.remove('selected');
  $$('.semester-tile').forEach(tile => tile.classList.remove('selected'));
  $('#semester-section').classList.add('hidden');
  $('#subject-section').classList.add('hidden');
  $('#subject-detail').classList.add('hidden');
  $('#global-search').value = '';
  $('#search-results').innerHTML = '';
  $('#search-results').classList.add('hidden');
  renderTab('syllabus');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDepartments() {
  $('#department-grid').innerHTML = state.departments.map(department => `
    <button class="department-tile" type="button" data-department="${escapeHtml(department.id)}">
      <span class="dept-code">${escapeHtml(department.code)}</span>
      <span class="dept-name">${escapeHtml(department.name)}</span>
    </button>`).join('');
  $('#department-select').innerHTML = '<option value="">Select department</option>' + state.departments.map(department =>
    `<option value="${escapeHtml(department.id)}">${escapeHtml(department.name)}</option>`).join('');
}

function renderSemesters() {
  $('#semester-grid').innerHTML = Array.from({ length: 8 }, (_, index) => {
    const semester = index + 1;
    const ready = semester <= 6;
    return `<button class="semester-tile" type="button" data-semester="${semester}" ${ready ? '' : 'disabled'}>
      <span>${semester}</span><small>${ready ? semesterYear(semester) : 'Coming soon'}</small>
    </button>`;
  }).join('');
}

function chooseDepartment(id) {
  if (!id) return;
  state.departmentId = id;
  state.semester = null;
  state.subject = null;
  const department = departmentById(id);
  $('.department-tile.selected')?.classList.remove('selected');
  $(`[data-department="${CSS.escape(id)}"]`)?.classList.add('selected');
  $('#department-select').value = id;
  $('#selected-department-label').textContent = `${department?.code || ''} · ${department?.name || ''}`;
  $('#semester-section').classList.remove('hidden');
  $('#subject-section').classList.add('hidden');
  $('#subject-detail').classList.add('hidden');
  $('#semester-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function chooseSemester(number) {
  state.semester = number;
  state.subject = null;
  $('#selected-semester-label').textContent = `SEMESTER ${number} · ${semesterYear(number).toUpperCase()}`;
  $$('.semester-tile').forEach(tile => tile.classList.toggle('selected', Number(tile.dataset.semester) === number));
  const matches = state.subjects.filter(subject => subject.departmentId === state.departmentId && Number(subject.semester) === number);
  $('#subject-grid').innerHTML = matches.length ? matches.map(subject => `
    <button class="subject-tile" type="button" data-subject="${escapeHtml(subject.id)}">
      <strong>${escapeHtml(subject.code)}</strong><span>${escapeHtml(subject.shortName || subject.name)}</span>
    </button>`).join('') : '<div class="empty-state">No subjects are listed for this semester yet.</div>';
  $('#subject-section').classList.remove('hidden');
  $('#subject-detail').classList.add('hidden');
  $('#subject-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openSearchSubject(id) {
  const subject = state.subjects.find(item => item.id === id);
  if (!subject) return;
  state.departmentId = subject.departmentId;
  state.semester = Number(subject.semester);
  $('#department-select').value = state.departmentId;
  $('#selected-department-label').textContent = `${departmentById(state.departmentId)?.code || ''} · ${departmentById(state.departmentId)?.name || ''}`;
  $('#semester-section').classList.remove('hidden');
  $('#subject-section').classList.remove('hidden');
  $('#selected-semester-label').textContent = `SEMESTER ${state.semester} · ${semesterYear(state.semester).toUpperCase()}`;
  openSubject(id);
}

function openSubject(id) {
  state.subject = state.subjects.find(subject => subject.id === id);
  if (!state.subject) return;
  $('#detail-meta').textContent = `${state.subject.code} · ${(state.subject.track || 'major').toUpperCase()} · ${departmentById(state.subject.departmentId)?.name || ''} · Semester ${state.subject.semester}`;
  $('#detail-title').textContent = state.subject.name;
  $('#detail-description').textContent = state.subject.description || '';
  $('#subject-detail').classList.remove('hidden');
  $('#subject-detail').scrollIntoView({ behavior: 'smooth', block: 'start' });
  renderTab('syllabus');
}

function renderTab(name) {
  state.tab = name;
  $$('.resource-tab').forEach(tab => {
    const active = tab.dataset.tab === name;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-current', active ? 'page' : 'false');
  });
  const subject = state.subject;
  if (!subject) return;
  if (name === 'syllabus') renderSyllabus(subject);
  if (name === 'notes') renderNotes(subject.notes || []);
  if (name === 'pyqs') renderPapers(subject.pyqs || []);
  if (name === 'videos') renderVideos(subject.videos || []);
  if (name === 'references') renderReferences(subject.references || []);
  $('#bookmark-button').setAttribute('aria-pressed', String(state.bookmarks.includes(subject.id)));
  $('#bookmark-button').textContent = state.bookmarks.includes(subject.id) ? 'Saved' : 'Save subject';
}

function renderSyllabus(subject) {
  const modules = subject.modules || [];
  const notes = subject.notes || [];
  const units = modules.length ? modules.map((unit, index) => `
    <article class="unit-card">
      <div class="unit-topline"><span>UNIT ${escapeHtml(unit.num || index + 1)}</span><span>${escapeHtml(unit.weightage || 'Syllabus')}</span></div>
      <h4>${escapeHtml(unit.title)}</h4><p>${escapeHtml(unit.summary)}</p>
    </article>`).join('') : '<div class="empty-state">No syllabus units are listed yet.</div>';
  const adminNotes = notes.length ? notes.map(noteCard).join('') : '<div class="empty-state">No notes have been shared for this subject yet.</div>';
  $('#resource-content').innerHTML = `
    <div class="resource-heading"><h3>Course syllabus</h3><span>${modules.length} units</span></div>
    <div class="unit-list">${units}</div>
    <div class="resource-heading notes-heading"><h3>Notes shared by the admin</h3><span>${notes.length} items</span></div>
    <div class="resource-list">${adminNotes}</div>`;
}

function noteCard(note) {
  return `<article class="note-card"><div class="meta">${escapeHtml(note.pages || '—')} pages${note.author ? ` · ${escapeHtml(note.author)}` : ''}</div>
    <h4>${escapeHtml(note.title)}</h4><p>${note.content ? escapeHtml(note.content) : 'Catalog entry only. No note file is attached in the current source.'}</p></article>`;
}

function renderNotes(notes) {
  $('#resource-content').innerHTML = `<div class="resource-heading"><h3>Study notes</h3><span>${notes.length} items</span></div>
    <div class="resource-list">${notes.length ? notes.map(noteCard).join('') : '<div class="empty-state">No notes have been shared for this subject yet.</div>'}</div>`;
}

function renderPapers(papers) {
  $('#resource-content').innerHTML = `<div class="resource-heading"><h3>Past question papers</h3><span>${papers.length} records</span></div>
    <div class="resource-list">${papers.length ? papers.map(paper => `<article class="paper-card">
      <div class="meta">${escapeHtml(paper.session || '')}${paper.year ? ` · ${escapeHtml(paper.year)}` : ''}</div>
      <h4>${escapeHtml(paper.paperType || 'Exam paper')}</h4>
      <p>${escapeHtml(paper.totalMarks || '—')} marks · ${escapeHtml(paper.pages || '—')} pages. Paper file is not attached in the current source.</p>
    </article>`).join('') : '<div class="empty-state">No past papers are listed yet.</div>'}</div>`;
}

function renderVideos(videos) {
  $('#resource-content').innerHTML = `<div class="resource-heading"><h3>Video references</h3><span>${videos.length} listings</span></div>
    <div class="resource-list">${videos.length ? videos.map(video => `<article class="resource-card">
      <h4>${escapeHtml(video.title)}</h4><p>${escapeHtml(video.channel)} · ${escapeHtml(video.count || '—')} items</p>
      <a class="resource-url" href="${escapeHtml(video.url || '#')}" target="_blank" rel="noopener noreferrer">Open video reference <span aria-hidden="true">↗</span></a>
    </article>`).join('') : '<div class="empty-state">No video references are listed yet.</div>'}</div>`;
}

function renderReferences(references) {
  $('#resource-content').innerHTML = `<div class="resource-heading"><h3>Book references</h3><span>${references.length} items</span></div>
    <div class="resource-list">${references.length ? references.map(reference => `<article class="resource-card"><h4>${escapeHtml(reference.title || reference.name)}</h4><p>${escapeHtml(reference.author || '')} ${reference.edition ? `· ${escapeHtml(reference.edition)}` : ''}</p></article>`).join('') : '<div class="empty-state">No book references have been added for this subject yet.</div>'}</div>`;
}

function toggleBookmark() {
  if (!state.subject) return;
  const id = state.subject.id;
  state.bookmarks = state.bookmarks.includes(id) ? state.bookmarks.filter(item => item !== id) : [...state.bookmarks, id];
  localStorage.setItem('dbcm-v2-bookmarks', JSON.stringify(state.bookmarks));
  renderTab(state.tab);
  toast(state.bookmarks.includes(id) ? 'Subject saved on this device.' : 'Subject removed from saved items.');
}

function search(query) {
  const results = $('#search-results');
  const q = query.trim().toLowerCase();
  if (!q) { results.classList.add('hidden'); results.innerHTML = ''; return; }
  const matches = state.subjects.filter(subject =>
    [subject.code, subject.name, subject.shortName, subject.description, ...(subject.modules || []).flatMap(unit => [unit.title, unit.summary])]
      .some(value => String(value || '').toLowerCase().includes(q))).slice(0, 9);
  results.innerHTML = matches.length ? matches.map(subject => `<button class="search-result" type="button" data-search-subject="${escapeHtml(subject.id)}">
    <span><strong>${escapeHtml(subject.name)}</strong><small>${escapeHtml(departmentById(subject.departmentId)?.name || '')} · Sem ${subject.semester}</small></span>
    <span class="search-result-code">${escapeHtml(subject.code)}</span></button>`).join('') : '<div class="empty-state">No matching subjects or units.</div>';
  results.classList.remove('hidden');
}

function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('show');
  window.setTimeout(() => element.classList.remove('show'), 1700);
}

function $$(selector) { return [...document.querySelectorAll(selector)]; }
