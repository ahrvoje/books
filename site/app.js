const packed = Uint8Array.from(atob(document.getElementById('catalog-data').textContent.trim()), c => c.charCodeAt(0));
const DATA = JSON.parse(await new Response(new Blob([packed]).stream().pipeThrough(new DecompressionStream('gzip'))).text());
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const url = value => /^(analysis|data)\//.test(value || '') ? 'https://github.com/ahrvoje/books/blob/main/' + value : /^https?:\/\//.test(value || '') ? value : '';
const anchor = (href, text) => DATA.documents?.[href?.split('#')[0]] ? `<a href="#evidence" data-evidence="${esc(href)}">${esc(text)}</a>` : url(href) ? `<a href="${esc(url(href))}" target="_blank" rel="noopener">${esc(text)}</a>` : esc(text);
const STORAGE = 'books.model.v3';
const initial = defaultModel(DATA.reviewYear);
let state = clone(initial), draft = null, currentPanel = '', previousFocus = null;
let result, rowById = new Map(), previewTimer, searchTimer, dirty = false;
let currentDetails = null, plotGroups = [];
function notify(text) { $('#notice').innerHTML = text ? `<span>${esc(text)}</span> <button type="button" data-dismiss-notice aria-label="Dismiss notice">×</button>` : ''; $('#notice').hidden = !text; }
$('#notice').onclick = e => { if (e.target.closest('[data-dismiss-notice]')) notify(''); };
function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE) || 'null');
    if (saved) {
      const errors = validateModel(restoreOptionalTerms(saved.model));
      if (errors.length) notify('Saved settings were not loaded: ' + errors[0]);
      else {
        state = saved.model; restoreColumns(state);
        state.selected = []; state.selectedOnly = false;
      }
    }
  } catch { notify('Local storage is unavailable or contains invalid settings. This session still works; export settings to keep it.'); }
}
function persist() {
  try { localStorage.setItem(STORAGE, JSON.stringify({ datasetHash: DATA.datasetHash, model: state })); }
  catch { notify('Changes cannot be saved in this browser. Export settings to keep this session.'); }
}
function isCustom(m) {
  return m.reviewYear !== initial.reviewYear || REGISTRY.some(r => {
    const t = m.terms[r.id], d = initial.terms[r.id];
    return t.enabled !== d.enabled || (t.enabled && JSON.stringify(t) !== JSON.stringify(d));
  });
}
function termSummary(t) {
  if (!t.enabled || coefficients(t).w === 0) return 'Off';
  return t.mode === 'rate' ? `${t.rate > 0 ? '+' : ''}${t.rate}/unit` : `${t.weight > 0 ? '+' : ''}${t.weight} pt`;
}
function render() {
  const start = performance.now();
  state.columns = displayedColumns(state);
  result = evaluateCatalog(DATA.books, state);
  rowById = new Map(result.rows.map(r => [r.book.id, r]));
  $('#matching-count').textContent = result.matching.length.toLocaleString();
  $('#filtered-count').textContent = result.filtered.length.toLocaleString();
  const incomplete = result.rows.filter(r => r.missing.length).length;
  $('#missing-summary').textContent = incomplete ? `${incomplete.toLocaleString()} scores have missing active data` : `${DATA.books.length.toLocaleString()} books · ${isCustom(state) ? 'complete active inputs' : 'complete baseline'}`;
  $('#model-name').textContent = isCustom(state) ? 'Custom evaluation' : 'Repository evaluation';
  $('#model-description').textContent = isCustom(state) ? 'Your weights and curves. Baseline retained.' : '15 rules. Evidence, integration, utility.';
  $('#data-summary').innerHTML = `${DATA.reviewYear} assessment · ${DATA.coverage.pages.toLocaleString()} verified page counts<br>${DATA.coverage.domainValues.toLocaleString()} domain values in ${DATA.coverage.domainBooks.toLocaleString()} books · ${DATA.coverage.mechanisms} mechanisms`;
  const activeFilters = Object.values(state.filters).filter(f => f.enabled).length + !!state.exact + !!state.requireKnown + (state.baseMin !== null) + (state.totalMin !== null);
  $('#filter-count').textContent = activeFilters;
  const chips = Object.entries(state.filters).filter(([, f]) => f.enabled).map(([id, f]) =>
    `<button class="chip" data-remove-filter="${id}" title="Remove filter">${esc(BY_ID[id].name)} ${f.min !== null ? '≥ ' + esc(f.min) : ''} ${f.max !== null ? '≤ ' + esc(f.max) : ''} · ${esc(f.basis)} ×</button>`);
  if (state.exact) chips.push(`<span class="chip">Target: ${esc(state.exact)}</span>`);
  if (state.requireKnown) chips.push('<span class="chip">Require known score inputs</span>');
  if (state.baseMin !== null) chips.push(`<span class="chip">BASE ≥ ${state.baseMin}</span>`);
  if (state.totalMin !== null) chips.push(`<span class="chip">TOTAL ≥ ${state.totalMin}</span>`);
  $('#chips').innerHTML = chips.join('');
  renderList('matching', result.matching); renderList('filtered', result.filtered);
  $('#filtered-heading-count').textContent = `(${result.filtered.length.toLocaleString()})`;
  $('#filtered-list').hidden = !state.showFiltered;
  $('#toggle-filtered').textContent = state.showFiltered ? 'Collapse' : 'Expand';
  $('#toggle-filtered').setAttribute('aria-expanded', state.showFiltered);
  renderPlot();
  window.bookSiteLastRenderMs = performance.now() - start;
}
function renderList(kind, rows) {
  const root = $('#' + kind + '-list');
  if (!rows.length) {
    root.innerHTML = `<div class="empty"><h3>${kind === 'matching' ? 'No matching books' : 'No books filtered out'}</h3><p>${kind === 'matching' ? 'Change a filter or reset the filters to return to the full collection.' : 'Every book passes the current filters.'}</p>${kind === 'matching' ? '<button data-action="reset-filters">Reset filters</button>' : ''}</div>`;
    return;
  }
  const columns = state.columns.map(id => COLUMN_BY_ID[id]);
  const columnWidth = c => c.id === 'year' ? 54 : ['raw:PG','raw:SRC'].includes(c.id) ? 60 : c.kind === 'raw' && !CORE_COLUMNS.includes(c.id) ? 96 : 80;
  const tableWidth = 468 + columns.reduce((width, c) => width + columnWidth(c), 0);
  const heading = c => c.kind === 'points' ? `${esc(c.short.replace(/ points$/, ''))} <small>points</small>` : esc(c.short);
  const print = (r, c) => {
    const v = columnValue(r, c.id);
    if (c.id === 'periodEnd' && v === null) return 'n/a';
    if (!known(v)) return '—';
    return c.kind === 'points' || c.id === 'base' || !Number.isInteger(v) ? format(v) : String(v);
  };
  const body = rows.map(r => {
    const b = r.book;
    return `<tr data-book="${esc(b.id)}">
      <td class="score-cell"><span class="score">${format(r.total)}</span>${r.missing.length ? '<span class="incomplete">incomplete</span>' : ''}</td>
      <td class="title-cell"><a class="book-title" href="${esc(b.purchaseUrl)}" target="_blank" rel="noopener">${esc(b.title)}</a><span class="author"> — ${esc(b.author)}</span><div class="mobile-meta">${columns.map(c=>`<span title="${esc(c.label)}">${esc(c.short)} <strong>${print(r,c)}</strong></span>`).join(' · ')}</div>${r.reasons.length ? `<div class="reason">${esc(r.reasons[0])}${r.reasons.length > 1 ? ` (+${r.reasons.length - 1})` : ''}</div>` : ''}</td>
      ${columns.map(c=>`<td class="parameter-cell meta-number" data-column="${esc(c.id)}" title="${esc(c.label)}${c.id==='periodEnd'&&b.periodEnd===null?' · non-period account':''}${c.kind==='points'&&r.terms[c.variable].missing?' · missing input; zero fallback':''}">${print(r,c)}${c.kind==='points'&&r.terms[c.variable].missing?'*':''}</td>`).join('')}
      <td class="action-cell"><button class="text-button details-button" data-details="${esc(b.id)}" aria-label="Details for ${esc(b.title)}">Details</button></td></tr>`;
  }).join('');
  root.innerHTML = `${columns.length>4?`<div class="column-scroll-control"><span>Scroll to see all columns ↔</span><div class="column-scrollbar" tabindex="-1" aria-label="Scroll ${kind} book columns"><div style="width:${tableWidth}px"></div></div></div>`:''}<div class="table-scroll" tabindex="-1" aria-label="${kind==='matching'?'Matching':'Filtered'} books, all ${rows.length} rows"><table class="book-table" style="--table-min:${tableWidth}px"><colgroup><col class="score-col"><col>${columns.map(c=>`<col class="parameter-col" style="width:${columnWidth(c)}px">`).join('')}<col class="action-col"></colgroup><thead><tr><th scope="col" class="score-heading">Score</th><th scope="col">Title / author</th>${columns.map(c=>`<th scope="col" class="parameter-heading" data-column="${esc(c.id)}" title="${esc(c.label)}">${heading(c)}</th>`).join('')}<th scope="col">Details</th></tr></thead><tbody>${body}</tbody></table></div>`;
  const scrollbar=$('.column-scrollbar',root),table=$('.table-scroll',root);
  if(scrollbar){scrollbar.onscroll=()=>{table.scrollLeft=scrollbar.scrollLeft;};table.onscroll=()=>{scrollbar.scrollLeft=table.scrollLeft;};}
}
function columnsEditor() {
  draft.columns = displayedColumns(draft);
  return `<p class="intro">Choose raw facts and contributions to the current score. Title, author, total score, and Details always remain visible. Selected columns follow the same order in both lists. On phones they appear below the title.</p>
    <p class="help">${draft.columnsMode === 'active' ? 'Default: year, pages, Amazon ratings, and sources.' : 'Custom column selection. Choose the default to restore the four book facts.'}</p>
    <div class="preset-row"><button data-columns-preset="default">Default book facts</button><button data-columns-preset="quality">Quality contributions</button><button data-columns-preset="recency">Dates and recency</button><button data-columns-preset="none">No extra columns</button></div>
    <label class="field">Find a column<input type="search" data-column-search></label>
    ${COLUMNS.filter(c=>c.kind==='metadata').map(c=>`<label class="check" data-column-choice="${c.id}"><input type="checkbox" data-column-toggle="${c.id}" ${draft.columns.includes(c.id)?'checked':''}>${esc(c.label)}</label>`).join('')}
    ${REGISTRY.map(r=>`<div class="column-choice" data-column-variable="${r.id}"><strong>${esc(r.name)} <span class="alias">${r.id}</span></strong><div class="field-row">${['raw','points'].map(kind=>`<label class="check"><input type="checkbox" data-column-toggle="${kind}:${r.id}" ${draft.columns.includes(kind+':'+r.id)?'checked':''}>${kind==='raw'?'Raw '+esc(r.unit):'Score points'}</label>`).join('')}</div></div>`).join('')}`;
}
function field(label, path, value, options = {}) {
  const attr = `data-path="${esc(path)}"`;
  if (options.check) return `<label class="check"><input type="checkbox" ${attr} ${value ? 'checked' : ''}>${esc(label)}</label>`;
  let control;
  if (options.choices) control = `<select ${attr}>${options.choices.map(([v, text]) => `<option value="${esc(v)}" ${String(value) === String(v) ? 'selected' : ''}>${esc(text)}</option>`).join('')}</select>`;
  else if (options.json) control = `<textarea ${attr} data-json="true">${esc(JSON.stringify(value))}</textarea>`;
  else control = `<input ${attr} type="${options.text ? 'text' : 'number'}" value="${esc(value ?? '')}" ${options.text ? '' : 'step="any"'} ${options.nullable ? 'data-nullable="true"' : ''}>`;
  return `<label class="field">${esc(label)}${control}</label>`;
}
function pair(...fields) { return `<div class="field-row">${fields.join('')}</div>`; }
function termEditor(id, t, prefix) {
  const r = BY_ID[id], { w, b } = coefficients(t);
  const locked = r.derived && !draft.target;
  const sample = r.unit === 'pages' ? 500 : r.unit === 'years' ? 25 : r.max / 2;
  const value = termValue(sample, t, id);
  return `<p class="help">${esc(r.description)}${locked ? ' Configure a domain target in Ideal book before enabling this variable.' : ''}</p><p class="help raw-guidance">${esc(rawGuidance(id))}</p>
    ${field('Use in scoring', prefix + '.enabled', t.enabled, { check: true })}
    ${pair(field('Normalization', prefix + '.kind', t.kind, { choices: [['affine', 'Linear anchors'], ['bands', 'Count bands']] }), field('Level range', prefix + '.signed', String(t.signed), { choices: [['false', '0 to 100'], ['true', '−100 to +100']] }))}
    ${t.kind === 'affine' ? pair(field(`Lower anchor (${r.unit})`, prefix + '.low', t.low), field(`Upper anchor (${r.unit})`, prefix + '.high', t.high)) +
      (t.signed ? field(`Zero pivot (${r.unit})`, prefix + '.pivot', t.pivot) : '') : field('Bands: [lower, upper, level 0..1]; last upper = null', prefix + '.bands', t.bands, { json: true })}
    ${field('Reverse level', prefix + '.reverse', t.reverse, { check: true })}
    ${field('Curve', prefix + '.curve', t.curve, { choices: [['linear', 'Linear'], ['quadratic', t.signed ? 'Signed quadratic' : 'Quadratic'], ['scaled', 'Scaled linear with caps'], ['piecewise', 'Piecewise linear']] })}
    ${t.curve === 'scaled' ? pair(field('Curve slope', prefix + '.slope', t.slope), field('Curve offset (normalized units)', prefix + '.intercept', t.intercept)) : ''}
    ${t.curve === 'piecewise' ? field('Knots [normalized input, output]', prefix + '.knots', t.knots, { json: true }) : ''}
    ${field('Scoring control', prefix + '.mode', t.mode, { choices: [['weight', 'Normalized weight'], ['rate', `Points per ${r.unit === 'pages' ? 'page' : r.unit === 'years' ? 'year' : 'unit'}`]] })}
    ${t.mode === 'weight' ? field('Weight (points; negative is allowed)', prefix + '.weight', t.weight) : pair(field(`Points per ${r.unit}`, prefix + '.rate', t.rate), field(`Reference (${r.unit})`, prefix + '.reference', t.reference))}
    <div class="formula" data-formula="${esc(prefix)}">${esc(id)}: ${format(b)} + ${format(w)} × curve(level)<br>Example ${sample} ${esc(r.unit)} → ${format(100 * value.n)} level → ${format(value.c)} points</div>
    <p class="help">Raw anchors cap the contribution. Values before and after the curve use normalized units. Missing data stays unknown.</p>`;
}
function variableList(type) {
  let last = '', html = '<label class="field">Find a variable<input class="variable-search" type="search" placeholder="Name or alias…" data-variable-search></label>';
  for (const r of REGISTRY) {
    if (r.group !== last) { html += `<h3 class="group-label">${esc(r.group)}</h3>`; last = r.group; }
    const f = draft.filters[r.id] || { enabled: false, min: null, max: null, basis: 'raw', unknown: 'exclude' };
    const summary = type === 'filters' ? f.enabled ? 'On' : 'Off' : termSummary(draft.terms[r.id]);
    let body;
    if (type === 'filters') body = `<p class="help">${esc(r.description)}</p><p class="help raw-guidance">${esc(rawGuidance(r.id))}</p><p class="help">Raw filters use these units. Normalized filters use 0–100, or −100–100 with a signed scale. Contribution filters use points from your current scoring settings. Leave a bound blank for no limit.</p>${r.derived && !draft.target ? '<p class="help">Configure a connection target first.</p>' : ''}
      ${field('Use as filter', `filters.${r.id}.enabled`, f.enabled, { check: true })}
      ${field('Filter value', `filters.${r.id}.basis`, f.basis, { choices: [['raw', `Raw (${r.unit})`], ['normalized', 'Normalized level (0–100 / −100–100)'], ['contribution', 'Current score contribution (points)']] })}
      ${pair(field('Minimum (inclusive)', `filters.${r.id}.min`, f.min, { nullable: true }), field('Maximum (inclusive)', `filters.${r.id}.max`, f.max, { nullable: true }))}
      ${field('Unknown values', `filters.${r.id}.unknown`, f.unknown, { choices: [['exclude', 'Exclude unknown'], ['include', 'Include unknown'], ['only', 'Only unknown']] })}`;
    else body = termEditor(r.id, draft.terms[r.id], `terms.${r.id}`);
    html += `<details class="variable" data-variable="${r.id}"><summary><span>${esc(r.name)} <span class="alias">${r.id}</span></span><small>${esc(summary)}</small></summary><div class="variable-body">${body}</div></details>`;
  }
  return html;
}
function idealEditor() {
  let html = `<p class="intro">The initial ideal is the repository evaluation: ten positive criteria and five deductions. Scoring and Ideal book share one model.</p><button data-editor-action="quality">Edit the 15-rule evaluation</button>
    ${field('Review year for custom age scoring', 'reviewYear', draft.reviewYear)}
    <h3 class="group-label">Optional domain connections</h3><p class="help">Choose subjects, desired depth and importance, then set the minimum strength and confidence for connections. Apply saves the target; it does not change the ranking by itself. In Adjust scoring, enable Target coverage or a connection measure and set its weight to use it in the score. You can also use these measures in Filter books, Columns or Pareto tradeoffs. Books without the required evidence remain unknown.</p>
    <button data-editor-action="${draft.target ? 'clear-target' : 'create-target'}">${draft.target ? 'Clear target and dependent settings' : 'Configure a connection target'}</button>`;
  if (!DATA.books.some(b=>b.connections.status==='complete')) html += '<p class="help">Current catalog: no complete connection reviews. Subject coverage can be calculated where all selected subject depths are known. Connected strength, connected domain count, joint mechanism count and overall fit remain unknown until connection reviews are complete.</p>';
  if (!draft.target) return html + '<p class="help">No target configured. Connection measures are inactive.</p>';
  html += `${pair(field('Minimum strength', 'target.strength', draft.target.strength, { choices: [[0, 'Choose…'], [1, '1 · stated'], [2, '2 · developed'], [3, '3 · supported'], [4, '4 · sustained']] }),
    field('Minimum confidence', 'target.confidence', draft.target.confidence, { choices: [['', 'Choose…'], ['low', 'Low'], ['moderate', 'Moderate'], ['high', 'High']] }))}
    <div class="preset-row"><button data-editor-action="all-domains">Select all 20</button></div>
    <p class="help">Apply a common requirement to the selected domains, then adjust individual values.</p>
    <div class="field-row"><label class="field">Set selected depths<select data-bulk="depth"><option value="">Choose…</option>${[1,2,3,4].map(v=>`<option>${v}</option>`).join('')}</select></label><label class="field">Set selected importance<select data-bulk="importance"><option value="">Choose…</option>${[1,2,3,4,5].map(v=>`<option>${v}</option>`).join('')}</select></label></div>
    <label class="field">Find a domain<input type="search" data-domain-search></label>`;
  for (const id of DOMAIN_IDS) {
    const i = draft.target.domains.findIndex(d => d.id === id), d = draft.target.domains[i];
    html += `<div class="domain-choice" data-domain-row="${id}"><label class="check"><input type="checkbox" data-domain="${id}" ${d ? 'checked' : ''}>${esc(BY_ID[id].name)}</label>${d ? `<div class="target-controls">${pair(field('Desired depth', `target.domains.${i}.depth`, d.depth, { choices: [[0, 'Choose…'], ...[1,2,3,4].map(v=>[v,String(v)])] }), field('Importance', `target.domains.${i}.importance`, d.importance, { choices: [[0, 'Choose…'], ...[1,2,3,4,5].map(v=>[v,String(v)])] }))}</div>` : ''}</div>`;
  }
  return html;
}
function axisEditor(index) {
  const a = draft.axes[index], p = `axes.${index}`, label = index ? 'Y · Vertical' : 'X · Horizontal';
  if (!a) return `<div class="axis-box"><h3>${label}</h3><p class="help">Axis cleared because it depended on a removed target.</p><button data-axis-restore="${index}">Choose an axis</button></div>`;
  const choices = [['BASE', 'BASE · repository score'], ['TOTAL', 'TOTAL · current score'], ...REGISTRY.map(r => [r.id, `${r.id} · ${r.name}`])];
  let html = `<div class="axis-box"><h3>${label}</h3>${field('Axis label', p + '.label', a.label, { text: true })}
    ${field('Value type', p + '.kind', a.kind, { choices: [['aggregate', 'Named score'], ['raw', 'Raw variable'], ['normalized', 'Normalized variable'], ['contribution', 'Linked ranking contribution'], ['sum', 'Custom sum']] })}
    ${a.kind !== 'sum' ? field('Variable', p + '.id', a.id, { choices }) : ''}
    ${field(index ? 'Y-axis scale' : 'X-axis scale', index ? 'yScale' : 'xScale', draft[index ? 'yScale' : 'xScale'] || 'linear', { choices: [['linear', 'Linear'], ['log', 'Logarithmic']] })}
    ${field('Prefer', p + '.direction', a.direction, { choices: [['max', 'Higher values'], ['min', 'Lower values']] })}`;
  if (a.kind === 'sum') {
    html += `<label class="field">Add a variable<select data-axis-add="${index}"><option value="">Choose…</option>${REGISTRY.filter(r => !a.terms.some(t => t.id === r.id)).map(r => `<option value="${r.id}">${esc(r.name)}</option>`).join('')}</select></label>`;
    a.terms.forEach((t, i) => { html += `<details class="axis-term" data-axis-term="${index}-${i}"><summary>${esc(BY_ID[t.id]?.name || t.id)}</summary>${field('Link to ranking contribution', `${p}.terms.${i}.linked`, t.linked, { check: true })}${!t.linked ? termEditor(t.id, t.config, `${p}.terms.${i}.config`) : '<p class="help">Follows the corresponding ranking term.</p>'}<button data-axis-remove="${index}:${i}">Remove term</button></details>`; });
  }
  return html + '</div>';
}
function renderEditor(preserve = false) {
  const body = $('#editor-body'), oldScroll = body.scrollTop;
  const opens = preserve ? $$('details[open]', body).map(e => e.dataset.variable || 'axis:' + e.dataset.axisTerm) : [];
  const focused = preserve && document.activeElement?.dataset.path;
  $('#editor-title').textContent = { filters: 'Filters', scoring: 'Scoring', ideal: 'Ideal book', pareto: 'Pareto', columns: 'Displayed columns' }[currentPanel];
  let html = '';
  if (currentPanel === 'filters') {
    html = `<p class="intro">Filters select books independently of scoring. Books that fail remain in the list below.</p>${field('Require known active score inputs', 'requireKnown', draft.requireKnown, { check: true })}
      ${pair(field('Minimum BASE', 'baseMin', draft.baseMin, { nullable: true }), field('Minimum TOTAL', 'totalMin', draft.totalMin, { nullable: true }))}
      ${draft.target ? field('Exact domain match', 'exact', draft.exact, { choices: [['', 'No exact requirement'], ['coverage', 'Every target at desired depth'], ['connected', 'All targets in one connected explanation'], ['joint', 'All targets in one joint mechanism']] }) : ''}${variableList('filters')}`;
  } else if (currentPanel === 'scoring') html = '<p class="intro">Raw value → normalized level → curve → signed points. Negative weights are allowed. The repository baseline stays available.</p>' + variableList('scoring');
  else if (currentPanel === 'ideal') html = idealEditor();
  else if (currentPanel === 'columns') html = columnsEditor();
  else html = `<p class="help">Apply shows the plot and its boundaries. Each boundary uses matching books that can be plotted; if none can be plotted, it uses the visible filtered books. Remove all books on a boundary before finding the next.</p>${axisEditor(0)}${axisEditor(1)}`;
  body.innerHTML = html;
  $$('details', body).forEach(e => { if (opens.includes(e.dataset.variable || 'axis:' + e.dataset.axisTerm)) e.open = true; });
  if (preserve) body.scrollTop = oldScroll;
  if (focused) $$('[data-path]', body).find(e => e.dataset.path === focused)?.focus({ preventScroll: true });
  $$('#panel-tabs button').forEach(b => b.classList.toggle('active', b.dataset.panel === currentPanel));
  preview();
}
function openEditor(panel) {
  if (!draft) { draft = clone(state); previousFocus = document.activeElement; }
  currentPanel = panel; $('#editor').hidden = false; document.body.classList.add('editing');
  renderEditor();
  if (innerWidth < 768) {
    $('#editor').setAttribute('role', 'dialog'); $('#editor').setAttribute('aria-modal', 'true');
    $('#results').inert = true; $('.masthead').inert = true; $('#panel-tabs').inert = true;
  }
  $('#close-editor').focus({ preventScroll: true });
}
function closeEditor() {
  draft = null; dirty = false; currentPanel = ''; clearTimeout(previewTimer);
  $('#editor').hidden = true; document.body.classList.remove('editing');
  $('#editor').removeAttribute('role'); $('#editor').removeAttribute('aria-modal');
  $('#results').inert = false; $('.masthead').inert = false; $('#panel-tabs').inert = false;
  $$('#panel-tabs button').forEach(b => b.classList.remove('active')); previousFocus?.focus({ preventScroll: true });
}
function preview() {
  $('#apply').disabled = true;
  clearTimeout(previewTimer);
  previewTimer = setTimeout(() => {
    if (!draft) return;
    let errors;
    try { errors = validateModel(draft); } catch { errors = ['A configuration contains invalid values.']; }
    const invalidJSON = $$('[data-json]').some(e => { try { JSON.parse(e.value); return false; } catch { return true; } });
    if (invalidJSON) errors.unshift('Fix the JSON bands or knots before applying.');
    $('#validation').textContent = errors.slice(0, 2).join(' ');
    $('#apply').disabled = errors.length > 0;
    if (errors.length) { $('#draft-preview').textContent = 'Draft has unapplied changes.'; return; }
    const evaluated = evaluateCatalog(DATA.books, draft);
    $('#draft-preview').textContent = `${evaluated.matching.length.toLocaleString()} matching · ${isCustom(draft) ? 'Custom evaluation' : 'Repository evaluation'}${dirty ? ' · not applied' : ''}`;
    $$('[data-formula]').forEach(el => {
      const p = el.dataset.formula, t = getPath(draft, p), id = p.startsWith('terms.') ? p.split('.')[1] : getPath(draft, p.slice(0, -7)).id;
      const r = BY_ID[id], sample = r.unit === 'pages' ? 500 : r.unit === 'years' ? 25 : r.max / 2;
      const { w, b } = coefficients(t), v = termValue(sample, t, id);
      el.textContent = `${id}: ${format(b)} + ${format(w)} × curve(level)\nExample ${sample} ${r.unit} → ${format(100 * v.n)} level → ${format(v.c)} points`;
    });
  }, 150);
}
function getPath(obj, path) { return path.split('.').reduce((v, k) => v[k], obj); }
function setPath(obj, path, value) {
  const keys = path.split('.'), last = keys.pop();
  if (keys[0] === 'filters' && !obj.filters[keys[1]]) obj.filters[keys[1]] = { enabled: false, min: null, max: null, basis: 'raw', unknown: 'exclude' };
  keys.reduce((v, k) => v[k], obj)[last] = value;
}
function editField(el) {
  const path = el.dataset.path; if (!path || !draft) return;
  let value = el.type === 'checkbox' ? el.checked : el.dataset.json ? null : el.type === 'number' ? el.value === '' ? (el.dataset.nullable ? null : NaN) : +el.value : el.value;
  if (el.dataset.json) { try { value = JSON.parse(el.value); } catch { preview(); return; } }
  if (path.endsWith('.signed')) value = value === 'true';
  if (/target\.(strength|domains\.\d+\.(depth|importance))$/.test(path)) value = +value;
  const termPath = path.startsWith('terms.') ? path.split('.').slice(0, 2).join('.') : path.includes('.config.') ? path.slice(0, path.indexOf('.config.') + 7) : '';
  const t = termPath ? getPath(draft, termPath) : null;
  if (t && path.endsWith('.mode')) changeMode(t, value);
  else setPath(draft, path, value);
  if (t && path.endsWith('.signed')) { t.pivot = (t.low + t.high) / 2; t.knots = t.signed ? [[-1, -1], [1, 1]] : [[0, 0], [1, 1]]; }
  if (t && ['low', 'high'].some(k => path.endsWith('.' + k)) && t.mode === 'rate') t.pivot = (t.low + t.high) / 2;
  if (t && ['curve', 'kind', 'pivot'].some(k => path.endsWith('.' + k)) && t.mode === 'rate' &&
      (t.curve !== 'linear' || t.kind !== 'affine' || (t.signed && t.pivot !== (t.low + t.high) / 2))) changeMode(t, 'weight');
  if (/^axes\.\d+\.kind$/.test(path)) {
    const a = draft.axes[+path.split('.')[1]]; a.id = a.kind === 'aggregate' ? 'BASE' : 'SRC'; a.terms ||= [];
  }
  if (/^axes\.\d+\.id$/.test(path)) {
    const a = draft.axes[+path.split('.')[1]];
    if (['BASE', 'TOTAL'].includes(a.id)) a.kind = 'aggregate';
    else if (a.kind === 'aggregate') a.kind = 'raw';
    a.label = a.id === 'BASE' ? 'Repository score' : a.id === 'TOTAL' ? 'Current score' : BY_ID[a.id].name;
  }
  dirty = true;
  if (el.tagName === 'SELECT' && (termPath || /^axes/.test(path)) || path.endsWith('.linked')) renderEditor(true); else preview();
}
$('#editor-body').addEventListener('input', e => {
  if (e.target.matches('[data-variable-search]')) {
    const q = fold(e.target.value); $$('.variable', $('#editor-body')).forEach(d => { const r = BY_ID[d.dataset.variable]; d.hidden = !fold(r.id + ' ' + r.name).includes(q); });
  } else if (e.target.matches('[data-column-search]')) {
    const q=fold(e.target.value);
    $$('[data-column-variable]').forEach(el=>{const r=BY_ID[el.dataset.columnVariable];el.hidden=!fold(r.id+' '+r.name).includes(q);});
    $$('[data-column-choice]').forEach(el=>el.hidden=!fold(COLUMN_BY_ID[el.dataset.columnChoice].label).includes(q));
  } else if (e.target.matches('[data-domain-search]')) {
    const q = fold(e.target.value); $$('[data-domain-row]').forEach(d => d.hidden = !fold(BY_ID[d.dataset.domainRow].name + ' ' + d.dataset.domainRow).includes(q));
  } else if (e.target.tagName !== 'SELECT' && e.target.type !== 'checkbox') editField(e.target);
});
$('#editor-body').addEventListener('change', e => {
  const el = e.target;
  if (el.dataset.columnToggle) {
    const selected=new Set(draft.columns);el.checked?selected.add(el.dataset.columnToggle):selected.delete(el.dataset.columnToggle);
    draft.columnsMode='custom';draft.columns=COLUMNS.filter(c=>selected.has(c.id)).map(c=>c.id);draft.columns=displayedColumns(draft);dirty=true;preview();
  }
  if (el.dataset.path && (el.tagName === 'SELECT' || el.type === 'checkbox')) editField(el);
  if (el.dataset.domain) {
    if (el.checked) draft.target.domains.push({ id: el.dataset.domain, depth: 0, importance: 0 });
    else draft.target.domains = draft.target.domains.filter(d => d.id !== el.dataset.domain);
    updateTargetAnchors(); dirty = true; renderEditor(true);
  }
  if (el.dataset.bulk && el.value) { draft.target.domains.forEach(d => d[el.dataset.bulk] = +el.value); dirty = true; renderEditor(true); }
  if (el.dataset.axisAdd !== undefined && el.value) {
    const t = clone(draft.terms[el.value]); t.enabled = true; t.weight = t.weight || 1;
    draft.axes[+el.dataset.axisAdd].terms.push({ id: el.value, linked: false, config: t }); dirty = true; renderEditor(true);
  }
});
function updateTargetAnchors() {
  for (const id of ['SPAN', 'ORDER']) {
    const t = draft.terms[id]; t.high = Math.max(1, draft.target.domains.length); t.pivot = t.high / 2;
  }
}
$('#editor-body').addEventListener('click', e => {
  const el = e.target.closest('button'); if (!el) return;
  const action = el.dataset.editorAction;
  if (el.dataset.columnsPreset) {
    draft.columnsMode = el.dataset.columnsPreset === 'default' ? 'active' : 'custom';
    draft.columns = el.dataset.columnsPreset==='quality' ? REGISTRY.slice(0,15).map(r=>'points:'+r.id) :
      el.dataset.columnsPreset==='recency' ? ['year','periodEnd','raw:PG','points:H13','points:P14'] :
      el.dataset.columnsPreset==='none' ? [] : [...DEFAULT_COLUMNS];
    dirty=true;renderEditor(true);
  }
  if (action === 'quality') { currentPanel = 'scoring'; renderEditor(); }
  if (action === 'create-target') { draft.target = { domains: [], strength: 0, confidence: '' }; dirty = true; renderEditor(true); }
  if (action === 'clear-target') { clearTarget(draft); dirty = true; renderEditor(true); $('#draft-preview').textContent = 'Target-dependent filters, scoring terms, and axes will be cleared on Apply.'; }
  if (action === 'all-domains') { for (const id of DOMAIN_IDS) if (!draft.target.domains.some(d => d.id === id)) draft.target.domains.push({ id, depth: 0, importance: 0 }); updateTargetAnchors(); dirty = true; renderEditor(true); }
  if (el.dataset.axisRemove) { const [a, i] = el.dataset.axisRemove.split(':').map(Number); draft.axes[a].terms.splice(i, 1); dirty = true; renderEditor(true); }
  if (el.dataset.axisRestore !== undefined) { draft.axes[+el.dataset.axisRestore] = clone(initial.axes[0]); renderEditor(true); }
});
function resetFilters(model) { model.filters = {}; model.baseMin = model.totalMin = null; model.requireKnown = model.selectedOnly = false; model.exact = ''; model.query = ''; }
$('#reset-section').onclick = () => {
  if (currentPanel === 'filters') resetFilters(draft);
  if (currentPanel === 'scoring') { draft.terms = clone(initial.terms); draft.reviewYear = initial.reviewYear; if (draft.target) updateTargetAnchors(); }
  if (currentPanel === 'ideal') clearTarget(draft);
  if (currentPanel === 'pareto') { draft.axes = clone(initial.axes); draft.plot = true; draft.xScale = draft.yScale = 'linear'; }
  if (currentPanel === 'columns') { draft.columnsMode = 'active'; draft.columns = displayedColumns(draft); }
  dirty = true; renderEditor();
};
$('#apply').onclick = () => {
  if (validateModel(draft).length || $('#apply').disabled) return;
  if (currentPanel === 'pareto') draft.plot = true;
  const anchorRow = $$('tr[data-book]').find(el => el.getBoundingClientRect().bottom > 0);
  const anchorId = anchorRow?.dataset.book, offset = anchorRow?.getBoundingClientRect().top;
  state = draft; $('#search').value = state.query;
  closeEditor(); persist(); render();
  const survivor = $$('tr[data-book]').find(el => el.dataset.book === anchorId);
  if (survivor && known(offset)) scrollBy(0, survivor.getBoundingClientRect().top - offset);
};
$('#cancel').onclick = $('#close-editor').onclick = closeEditor;
$('#panel-tabs').onclick = e => { const b = e.target.closest('[data-panel]'); if (b) openEditor(b.dataset.panel); };
$('#columns').onclick = () => openEditor('columns');
$('#search').addEventListener('input', () => { clearTimeout(searchTimer); searchTimer = setTimeout(() => { state.query = $('#search').value; if (draft) draft.query = state.query; persist(); render(); }, 150); });
$('#toggle-filtered').onclick = () => { state.showFiltered = !state.showFiltered; persist(); render(); };
for (const axis of ['x', 'y']) $('#plot-' + axis + '-scale').onchange = e => { state[axis + 'Scale'] = e.target.value; if (draft) draft[axis + 'Scale'] = e.target.value; persist(); renderPlot(); };
$('#hide-plot').onclick = () => { state.plot = false; persist(); render(); };
$('#results').addEventListener('click', e => {
  const el = e.target.closest('button'); if (!el) return;
  if (el.dataset.details) showBook(el.dataset.details);
  if (el.dataset.removeFilter) { delete state.filters[el.dataset.removeFilter]; persist(); render(); }
  if (el.dataset.action === 'reset-filters') { resetFilters(state); $('#search').value = ''; persist(); render(); }
});
document.addEventListener('keydown', e => {
  if (!draft) return;
  if (e.key === 'Escape') { e.preventDefault(); closeEditor(); }
  if (e.key === 'Tab' && innerWidth < 768) {
    const focus = $$('button:not(:disabled),input,select,textarea,summary', $('#editor')).filter(el => !el.closest('[hidden]') && el.getClientRects().length);
    const first = focus[0], last = focus.at(-1);
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
addEventListener('resize', () => {
  if (state.plot && result) renderPlot();
  if (!draft) return;
  const mobile = innerWidth < 768;
  $('#results').inert = mobile; $('.masthead').inert = mobile; $('#panel-tabs').inert = mobile;
  if (mobile) { $('#editor').setAttribute('role', 'dialog'); $('#editor').setAttribute('aria-modal', 'true'); }
  else { $('#editor').removeAttribute('role'); $('#editor').removeAttribute('aria-modal'); }
});
$('#export').onclick = () => {
  const blob = new Blob([JSON.stringify({ datasetHash: DATA.datasetHash, model: state }, null, 2)], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'book-explorer-settings.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
};
$('#import').onchange = async e => {
  const file = e.target.files[0]; if (!file) return;
  try {
    if (file.size > 2_000_000) throw Error('Settings file is too large.');
    const saved = JSON.parse(await file.text()), errors = validateModel(restoreOptionalTerms(saved.model));
    if (errors.length) throw Error(errors[0]);
    saved.model.selected = []; saved.model.selectedOnly = false;
    if (draft) closeEditor(); state = saved.model; restoreColumns(state); $('#search').value = state.query; persist(); render();
    notify('Settings imported.');
  } catch (err) { notify('Settings were not imported: ' + err.message); }
  e.target.value = '';
};
function showDialog(title, body) {
  $('#details-title').textContent = title; $('#details-body').innerHTML = body;
  if (!$('#details').open) $('#details').showModal(); $('#details-body').scrollTop = 0;
}
function showBook(id) {
  currentDetails = id;
  const r = rowById.get(id), b = r.book;
  let html = `<p>${esc(b.author)} · original year ${b.year} · ${esc(b.confidence)} assessment confidence</p><div class="details-links">${anchor(b.purchaseUrl, 'Reading edition ↗')}${anchor(b.analysis, 'Repository analysis ↗')}</div>
    <div class="facts"><div><strong>${format(r.total)}</strong><span>Current score${r.missing.length ? ' · incomplete' : ''}</span></div><div><strong>${format(b.base)}</strong><span>Repository baseline</span></div><div><strong>${r.active - r.missing.length}/${r.active}</strong><span>Active inputs known or prescribed fallback</span></div></div>
    ${b.verdict ? `<p>Repository verdict: ${esc(b.verdict)}. This verdict is retained when custom weights change.</p>` : ''}
    ${b.ledgerMismatch ? '<p class="reason">Rounding reconciliation: the ledger displays 88.17; its full score 88.175 rounds to 88.18 here. No criterion was changed.</p>' : ''}
    ${r.reasons.length ? `<h3>Failed filters</h3><ul>${r.reasons.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
    ${r.missing.length ? `<p class="reason">Missing: ${esc(r.missing.join(', '))}. These terms contribute zero, which can favor books with missing penalties.</p>` : ''}
    ${r.fallback.length ? '<p class="help">Amazon count unavailable: the repository rule uses no obscurity deduction. The count remains unknown.</p>' : ''}
    <h3>How the score is built</h3><table class="breakdown"><thead><tr><th>Variable</th><th>Raw</th><th>Level /100</th><th>After curve</th><th>Points</th></tr></thead><tbody>`;
  for (const variable of REGISTRY) {
    const id = variable.id, v = r.terms[id], evidence = b.evidence[id];
    html += `<tr><td><span class="alias">${id}</span> ${esc(variable.name)}</td><td>${format(r.values[id])}</td><td>${known(v.n) ? format(v.n * 100) : '—'}</td><td>${known(v.z) ? format(v.z * 100) : '—'}</td><td>${format(v.c)}</td></tr>`;
    if (evidence || variable.derived || id === 'PG') html += `<tr class="explanation"><td colspan="5">${evidence ? `${esc(evidence.confidence)} confidence · ${esc(evidence.rationale)} ${evidence.refs.map(ref => anchor(ref, 'Evidence')).join(' ')}` : variable.derived ? esc(r.connection.reason || `Target-dependent; best mechanism IDs: ${r.connection.winning.join(', ') || 'none'}`) : 'Page count and edition have not been verified.'}</td></tr>`;
  }
  html += `</tbody></table><h3>Dates and reading edition</h3><p>Original year: ${b.year} (${esc(b.yearConfidence)} confidence). Historical scope: ${esc(b.scope)}${b.periodEnd !== null ? ', endpoint ' + b.periodEnd : ''} (${esc(b.periodConfidence)} confidence). Custom review year: ${state.reviewYear}; baseline year: ${DATA.reviewYear}.</p><p class="help">${esc(b.scopeNote)}</p>
    <p>${b.edition ? `${b.edition.pages} pages · ${esc(b.edition.id)} · ${esc(b.edition.language)} · ${esc(b.edition.format)} · edition year ${b.edition.year} · ${esc(b.edition.confidence || 'moderate')} confidence · ${anchor(b.edition.url, 'Edition evidence')}<br><span class="help">Retrieved ${esc(b.edition.retrieved)}. ${esc(b.edition.notes || '')}</span>` : `Pages unknown. ${esc(b.research?.pageReason || 'No page count is inferred from title, format, or score.')}`}</p>
    ${b.research ? `<p class="help">Enrichment reviewed ${esc(b.research.reviewed)}. ${esc(b.research.domainBasis || '')} ${b.research.unknownDomains.length} domain values remain unknown. ${esc(b.research.unknownReason || '')}</p>` : ''}
    ${b.research?.primaryReview ? `<p class="help">Primary-source supplement: ${esc(b.research.primaryReview.method)} ${esc(b.research.primaryReview.limitations || '')}</p>` : ''}
    <h3>Domain connections</h3><p>Review status: ${esc(b.connections.status)}. ${esc(b.connections.limitations || '')}</p>`;
  for (const m of b.connections.mechanisms) html += `<p><strong>${esc(m.id)} · ${esc(m.domains.join(', '))}</strong><br>${esc(m.statement)}<br><span class="help">Roles: ${esc(Object.entries(m.roles).map(([id, role])=>id+': '+role).join('; '))}. Scope: ${esc(m.scope)} · strength ${m.strength}/4 · ${esc(m.confidence)} confidence. ${m.refs.map(ref => anchor(ref, 'Evidence')).join(' ')}</span></p>`;
  for (const j of b.connections.joins) html += `<p>${esc(j.from)} → ${esc(j.to)}: ${esc(j.statement)} (${esc(j.handoff)})</p>`;
  html += `<h3>Contributing sources (${b.sources.length})</h3><div class="details-links">${b.sources.map(id => anchor(DATA.sources[id].url, `${id} · ${DATA.sources[id].label}`)).join(' ')}</div>
    <h3>Reader-rating evidence</h3><p>Baseline Amazon count: ${b.amazon.count ?? 'unknown'} ratings. ${anchor(b.amazon.url, b.amazon.marketplace || 'Product snapshot')} ${esc(b.amazon.product)}. Retrieved ${esc(b.amazon.retrieved || 'not available')}.</p><p class="help">${esc(b.amazon.limitations)}</p>${b.reader ? `<p>Other recorded rating: ${esc(b.reader)}</p>` : ''}`;
  const observation = b.research?.newAmazonObservation;
  if (observation && !b.ratingReview) html += `<p><strong>New observation: ${observation.count.toLocaleString()} Amazon ratings.</strong> ${anchor(observation.url, observation.marketplace)} · ${esc(observation.product)} · retrieved ${esc(observation.retrieved)} · ${esc(observation.confidence)} confidence.</p><p class="help">${esc(observation.limitations)} This observation is retained for the next baseline update; it does not change this saved evaluation.</p>`;
  else if (!b.ratingReview && b.research?.amazonReviewReason) html += `<p class="help">Rating lookup: ${esc(b.research.amazonReviewReason)}</p>`;
  showDialog(b.title, html);
}
$('#close-details').onclick = () => $('#details').close();
$('#details').addEventListener('click', e => { if (e.target === $('#details')) $('#details').close(); });
document.addEventListener('click', e => {
  const link=e.target.closest('[data-evidence]');if(!link)return;e.preventDefault();
  const [file,fragment]=link.dataset.evidence.split('#');let text=DATA.documents[file];
  if(!text)return;
  if(fragment){
    const marker=[`id="${fragment}"`,`id='${fragment}'`].map(s=>text.indexOf(s)).find(n=>n>=0);
    if(marker!==undefined){
      const start=text.lastIndexOf('\n',marker), next=text.indexOf('\n<a id=',marker+1);
      text=text.slice(start<0?0:start,next<0?undefined:next);
    }
  }
  const back=currentDetails?`<button data-back-book="${esc(currentDetails)}">Back to book</button>`:'';
  showDialog('Embedded repository evidence',`${back}<p class="help">${esc(file)}${fragment?' #'+esc(fragment):''}. Included in this HTML; no other file is needed.</p><div class="embedded-analysis">${esc(text)}</div>`);
});
$('#details-body').addEventListener('click',e=>{const b=e.target.closest('[data-back-book]');if(b)showBook(b.dataset.backBook);});
$('#data-review').onclick = () => {
  currentDetails = null;
  showDialog('Data and review notes', `<p>This file contains ${DATA.books.length.toLocaleString()} current recommended works. All calculations run locally. The baseline reproduces the stored 15-rule assessments.</p><ul class="data-list">
    <li><strong>Page evidence:</strong> ${DATA.coverage.pages} verified editions. Missing lengths stay unknown; enable “require known” when using a page penalty.</li>
    <li><strong>Domain evidence:</strong> ${DATA.coverage.domainValues.toLocaleString()} supported values across ${DATA.coverage.domainBooks.toLocaleString()} books; ${DATA.coverage.domains} complete 20-domain profiles. ${DATA.coverage.mechanisms} documented mechanisms; ${DATA.coverage.connections} complete connection reviews. Partial evidence does not establish absence or an exact all-domain match.</li>
    <li><strong>Research coverage:</strong> ${DATA.coverage.reviewed.toLocaleString()} books have recorded enrichment reviews. Unknown fields retain a reason in book details. A research pass does not mean all facts were available.</li>
    <li><strong>Rounding:</strong> Scores use full precision for calculation and order. The site and ledgers share the same two-decimal display rounding.</li>
    <li><strong>Dates:</strong> ${DATA.reviewYear} is the fixed baseline review year. Original years and historical scope are inherited from the repository with their recorded confidence.</li>
    <li><strong>Confidence:</strong> high in verified calculation equivalence; book assessments retain their own confidence.</li>
    <li><strong>Portability:</strong> this is one self-contained HTML file, including the catalog, styles, scripts, and cited repository analyses. All features and embedded evidence work offline. Only optional external purchase/publisher/source links need a connection.</li></ul><p class="help">Dataset ${esc(DATA.datasetHash)}. Build ${esc(DATA.generated)}. More review notes are in IMPLEMENTATION_REVIEW.md in the repository.</p>`);
};
$('#footer-review').onclick = () => $('#data-review').click();
function renderPlot() {
  $('#plot-section').hidden = !state.plot;
  if (!state.plot) return;
  if (state.axes.some(a => !a)) { $('#plot').innerHTML = '<p class="plot-empty">Choose two axes in Pareto to draw the plot.</p>'; return; }
  const logarithmic = [state.xScale === 'log', state.yScale === 'log'];
  for (const [i, axis] of ['x', 'y'].entries()) $('#plot-' + axis + '-scale').value = logarithmic[i] ? 'log' : 'linear';
  const transform = (v, i) => logarithmic[i] ? Math.log10(v) : v;
  const inverse = (v, i) => logarithmic[i] ? 10 ** v : v;
  const knownPoints = result.rows.filter(r => r.axes.every(known));
  const points = knownPoints.filter(r => r.axes.every((v, i) => known(transform(v, i))));
  const matchingPoints = points.filter(r => !r.reasons.length);
  const layers = frontierLayers(matchingPoints.length ? matchingPoints : points, state.axes);
  const nonpositive = knownPoints.length - points.length;
  const layerOf = group => layers.findIndex(layer => group.some(r => layer.has(r.book.id))) + 1;
  const missing = result.rows.length - knownPoints.length;
  $('#plot-caption').textContent = `${points.length.toLocaleString()} books plotted · Boundary sizes: ${layers.map(layer=>layer.size).join(' / ')} · ${missing.toLocaleString()} unplotted: missing axis data.${points.length && !matchingPoints.length ? ' No matching books can be plotted; boundaries use visible filtered books.' : ''}${logarithmic.some(Boolean) ? ` Logarithmic ${['X', 'Y'].filter((_, i) => logarithmic[i]).join(' / ')}: ${nonpositive.toLocaleString()} unplotted with zero or negative values on a logarithmic axis; boundaries compare original values of plottable books.` : ''} ${state.axes.map(a => a.label + (a.direction === 'max' ? ' ↑' : ' ↓')).join(' / ')}`;
  if (!points.length) { $('#plot').innerHTML = '<p class="plot-empty">No boundary can be drawn: no books have plottable values on both axes.<br>Choose variables with known data, or use linear scales for zero or negative values.</p>'; return; }
  const W = Math.max(270, $('#plot').clientWidth), H = innerWidth < 768 ? 300 : 350, pad = { l: logarithmic[1] ? 76 : 52, r: 18, t: 22, b: 54 };
  const bounds = [0, 1].map(i => { const v = points.map(r => transform(r.axes[i], i)), lo = Math.min(...v), hi = Math.max(...v), margin = (hi - lo || Math.max(1, Math.abs(lo) * .1)) * .06; return [lo - margin, hi + margin]; });
  const x = v => pad.l + (transform(v, 0) - bounds[0][0]) / (bounds[0][1] - bounds[0][0]) * (W - pad.l - pad.r);
  const y = v => H - pad.b - (transform(v, 1) - bounds[1][0]) / (bounds[1][1] - bounds[1][0]) * (H - pad.t - pad.b);
  let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Pareto plot. Boundary books are listed below; focus a point to inspect its books.">`;
  const steps = W < 500 ? 3 : 4;
  const ticks = bounds.map(([lo, hi], axis) => {
    if (logarithmic[axis] && Math.floor(hi) > Math.ceil(lo)) {
      const values = [], stride = Math.max(1, Math.ceil((Math.floor(hi) - Math.ceil(lo)) / steps));
      for (let power = Math.ceil(lo); power <= Math.floor(hi); power += stride) values.push(10 ** power);
      return values;
    }
    return Array.from({length: steps + 1}, (_, i) => inverse(lo + (hi - lo) * i / steps, axis));
  });
  const tickLabel = (v, axis) => logarithmic[axis] ? v.toLocaleString('en', {maximumSignificantDigits: 3}) : format(v);
  for (const vx of ticks[0]) {
    svg += `<line class="grid-line" x1="${x(vx)}" y1="${pad.t}" x2="${x(vx)}" y2="${H-pad.b}"/><text class="axis-label" text-anchor="middle" x="${x(vx)}" y="${H-pad.b+19}">${tickLabel(vx, 0)}</text>`;
  }
  for (const vy of ticks[1]) {
    const label = tickLabel(vy, 1);
    svg += `<line class="grid-line" x1="${pad.l}" y1="${y(vy)}" x2="${W-pad.r}" y2="${y(vy)}"/><text class="axis-label" text-anchor="end" x="${pad.l-8}" y="${y(vy)+4}">${label}</text>`;
  }
  const unique = new Map();
  for (const r of points) {
    const key = JSON.stringify(r.axes); if (!unique.has(key)) unique.set(key, []); unique.get(key).push(r);
  }
  plotGroups = [...unique.values()].sort((a, b) => (layerOf(b)||4) - (layerOf(a)||4));
  let boundaries = '';
  layers.forEach((layer,i)=>{
    const frontierPoints = [...new Map(points.filter(r => layer.has(r.book.id)).map(r => [JSON.stringify(r.axes), [x(r.axes[0]), y(r.axes[1])]])).values()].sort((a, b) => a[0] - b[0]);
    if (frontierPoints.length < 2) return;
    const path = frontierPath(frontierPoints, state.axes[0].direction);
    boundaries = `<path class="frontier-line pareto-layer-${i+1}" data-frontier-layer="${i+1}" d="${path}"/>` + boundaries;
  });
  plotGroups.forEach((group, i) => {
    const r = group[0], px = x(r.axes[0]), py = y(r.axes[1]), layer = layerOf(group), best = layer > 0, filtered = group.every(r => r.reasons.length);
    svg += `<g class="plot-point pareto-layer-${layer}" data-point="${i}" data-book-count="${group.length}" data-pareto-layer="${layer}" tabindex="0" role="button" aria-label="${esc(group.map(r=>r.book.title).join('; '))}. ${group.length} title${group.length===1?'':'s'}. ${best?'Pareto boundary '+layer+'.':''}">
      <circle class="${best ? 'plot-front' : 'plot-dot' + (filtered ? ' filtered-dot' : '')}" cx="${px}" cy="${py}" r="${best ? 4 : 2.5}"/>
      ${group.length > 1 && best ? `<text class="axis-label" x="${px+9}" y="${py-8}">${group.length}</text>` : ''}<circle class="hit-area" cx="${px}" cy="${py}" r="12"/></g>`;
  });
  svg += boundaries;
  svg += '<circle id="plot-hover-ring" class="plot-ring" r="8" hidden aria-hidden="true"/>';
  svg += `<text class="axis-label" text-anchor="middle" x="${W/2}" y="${H-8}">${esc(state.axes[0].label)} · ${state.axes[0].direction === 'max' ? 'higher preferred' : 'lower preferred'}</text>
    <text class="axis-label" transform="translate(13,${H/2}) rotate(-90)" text-anchor="middle">${esc(state.axes[1].label)} · ${state.axes[1].direction === 'max' ? 'higher preferred' : 'lower preferred'}</text></svg>`;
  svg += '<div id="plot-tooltip" role="status">Hover a book to see its score and axis values.</div>';
  svg += `<div class="boundary-books" aria-label="Pareto boundary books">${layers.map((layer, i) => {
    const books = points.filter(r => layer.has(r.book.id)).sort((a, b) => a.axes[0] - b.axes[0] || a.book.title.localeCompare(b.book.title));
    return `<section class="boundary-column pareto-layer-${i+1}" data-boundary-list="${i+1}" aria-labelledby="boundary-title-${i+1}"><h3 id="boundary-title-${i+1}">${i+1} · ${['Main boundary', 'Secondary boundary', 'Tertiary boundary'][i]} <span>${books.length}</span></h3>${books.length ? `<ul>${books.map(r => `<li><button class="boundary-book" data-details="${esc(r.book.id)}"><span class="boundary-title">${esc(r.book.title)}</span><span class="boundary-author">${esc(r.book.author)}</span></button></li>`).join('')}</ul>` : '<p class="boundary-empty">No books on this boundary.</p>'}</section>`;
  }).join('')}</div>`;
  $('#plot').innerHTML = svg;
}
function showPoint(i, bookId) {
  const group = plotGroups[i]; if (!group) return;
  const books = bookId ? group.filter(r => r.book.id === bookId) : group;
  $('#plot-tooltip').innerHTML = books.map(r => `<span class="plot-book-info"><button data-details="${esc(r.book.id)}">${esc(r.book.title)}</button><span>Score ${format(r.total)} · ${esc(state.axes[0].label)} ${format(r.axes[0])} · ${esc(state.axes[1].label)} ${format(r.axes[1])}${r.reasons.length ? ' · filtered' : ''}</span></span>`).join('<span aria-hidden="true"> / </span>');
}
function highlightPlotTitle(target) {
  const ring = $('#plot-hover-ring'); if (!ring) return;
  const title = target?.closest?.('.boundary-book');
  const index = title ? plotGroups.findIndex(group => group.some(r => r.book.id === title.dataset.details)) : -1;
  const point = title ? $(`.plot-point[data-point="${index}"]`) : target?.closest?.('.plot-point');
  ring.toggleAttribute('hidden', !point);
  if (!point) return;
  const dot = $('circle', point);
  ring.setAttribute('cx', dot.getAttribute('cx')); ring.setAttribute('cy', dot.getAttribute('cy'));
  ring.setAttribute('class', `plot-ring pareto-layer-${point.dataset.paretoLayer}`);
  return +point.dataset.point;
}
$('#plot').addEventListener('pointerover', e => { const index = highlightPlotTitle(e.target); if (known(index)) showPoint(index, e.target.closest('.boundary-book')?.dataset.details); });
$('#plot').addEventListener('pointerout', e => highlightPlotTitle($('#plot').contains(e.relatedTarget) ? e.relatedTarget : null));
$('#plot').addEventListener('focusin', e => { const index = highlightPlotTitle(e.target); if (known(index)) showPoint(index, e.target.closest('.boundary-book')?.dataset.details); });
$('#plot').addEventListener('focusout', e => highlightPlotTitle($('#plot').contains(e.relatedTarget) ? e.relatedTarget : null));
$('#plot').addEventListener('click', e => { const p = e.target.closest('[data-point]'); if (p) showPoint(+p.dataset.point); });
$('#plot').addEventListener('keydown', e => { const p = e.target.closest('[data-point]'); if (p && ['Enter', ' '].includes(e.key)) { e.preventDefault(); showPoint(+p.dataset.point); } });
function renderReferenceLists() {
  $('#vetoed-list').innerHTML = `<div class="table-scroll" tabindex="-1" aria-label="All ${DATA.vetoed.length} vetoed books"><table class="veto-table"><thead><tr><th>Stored score</th><th>Title / author</th><th>Year</th><th>Pages</th><th>Reference pages</th><th>Amazon ratings</th><th>Veto</th><th>Confidence</th><th>Sources</th><th>Details</th></tr></thead><tbody>${DATA.vetoed.map(b=>`<tr data-veto-book="${esc(b.id)}"><td class="veto-score"><span class="score">${esc(b.score)}</span></td><td class="veto-title"><span class="book-title">${esc(b.title)}</span><span class="author"> — ${esc(b.author)}</span><div class="mobile-meta">Year ${esc(b.year)} · Pages ${esc(b.edition?.pages ?? "—")} · Reference pages ${esc(b.referencePages.pages ?? "—")} · Amazon ratings ${esc(b.amazon.count ?? "—")} · ${esc(b.veto)} · ${esc(b.confidence)} confidence · Sources ${esc(b.sourceCount)}</div></td><td class="veto-meta">${esc(b.year)}</td><td class="veto-meta">${esc(b.edition?.pages ?? "—")}</td><td class="veto-meta">${esc(b.referencePages.pages ?? "—")}</td><td class="veto-meta">${esc(b.amazon.count ?? "—")}</td><td class="veto-meta">${esc(b.veto)}</td><td class="veto-meta">${esc(b.confidence)}</td><td class="veto-meta">${esc(b.sourceCount)}</td><td class="veto-action"><button class="text-button details-button" data-veto-details="${esc(b.id)}" aria-label="Details for ${esc(b.title)}">Details</button></td></tr>`).join('')}</tbody></table></div>`;
  $('#excluded-list').innerHTML = DATA.excludedGroups.map((group, i)=>`<section aria-labelledby="excluded-category-${i}"><h3 id="excluded-category-${i}">${esc(group.name)} <small>(${group.books.length})</small></h3><ul class="excluded-list">${group.books.map(b=>`<li>${esc(b)}</li>`).join('')}</ul></section>`).join('');
  $('#sources-list').innerHTML = Object.values(DATA.sources).sort((a,b)=>a.id-b.id).map(s=>`<tr data-source="${s.id}"><th scope="row" class="source-number">${s.id}</th><td class="source-date"><time datetime="${esc(s.date)}">${esc(s.date)}</time></td><td class="source-title">${anchor(s.url,s.label)}</td><td class="source-analysis">${anchor(s.analysis,'Read analysis')}</td></tr>`).join('');
}
$('#vetoed-list').onclick = e => {
  const id=e.target.closest('[data-veto-details]')?.dataset.vetoDetails;if(!id)return;
  const b=DATA.vetoed.find(b=>b.id===id);currentDetails=null;
  showDialog(b.title, `<p>${esc(b.author)} · original year ${esc(b.year)}</p><div class="facts"><div><strong>${esc(b.score)}</strong><span>Stored counterfactual score</span></div><div><strong>${esc(b.veto)}</strong><span>Veto · ${esc(b.confidence)} confidence</span></div></div><p>${esc(b.reason)}</p><p>The veto remains in force. This score suspends only that gate and retains the recorded flaws and deductions.</p><p>Pages: ${b.edition ? `${anchor(b.edition.url,String(b.edition.pages))} · ${esc(b.edition.id)} · ${esc(b.edition.format)} · ${esc(b.edition.year)}. ${esc(b.edition.notes || "")}` : "Unknown: no verified matching edition count."}</p><p>Reference pages: ${b.referencePages.pages===null ? esc(b.referencePages.reason) : `${anchor(b.referencePages.url,String(b.referencePages.pages))} · ${esc(b.referencePages.edition.id)} · ${esc(b.referencePages.confidence)} confidence. ${esc(b.referencePages.ranges.map(r=>`${r.label} ${r.start}–${r.end}`).join("; "))}. ${esc(b.referencePages.limitation)}`}</p><p>Amazon ratings: ${b.amazon.count!==null ? anchor(b.amazon.url,String(b.amazon.count)) : "Unknown"}. ${esc(b.amazon.marketplace)} · ${esc(b.amazon.product)} · Retrieved ${esc(b.amazon.retrieved)}. ${esc(b.amazon.limitations)}</p><p>Contributing sources: ${esc(b.sources)}.</p><div class="details-links">${anchor(b.analysis,'Full recorded assessment')} ${b.ratingReview ? anchor(b.ratingReview,'Rating and total update') : ''}</div>`);
};
function showPage(focus = false) {
  const hash=location.hash.slice(1),name=hash.replace(/-view$/,''),page=['vetoed','excluded','sources','methodology'].includes(name)?name:hash.startsWith('method-')?'methodology':'books';
  if(draft)closeEditor();
  if(page!=='books')currentDetails=null;
  for(const name of ['books','vetoed','excluded','sources','methodology'])$('#'+name+'-view').hidden=name!==page;
  $('#book-toolbar').hidden=page!=='books';
  for(const a of $$('[data-page]')){if(a.dataset.page===page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');}
  $('.skip').href=page==='books'?'#results':'#'+page+'-view';
  document.title=({books:'Book explorer',vetoed:'Vetoed books',excluded:'Excluded books',sources:'Sources',methodology:'Methodology'})[page]+' — a working library';
  if(focus&&!hash.startsWith('method-')){scrollTo(0,0);}
}
for(const name of ['books','vetoed','excluded'])$('#nav-'+name+'-count').textContent=DATA[name].length.toLocaleString();
$('#nav-sources-count').textContent=Object.keys(DATA.sources).length.toLocaleString();
addEventListener('hashchange',()=>showPage(true));
restore(); $('#search').value = state.query; render(); renderReferenceLists(); showPage();
