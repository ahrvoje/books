// One evaluator for the catalog, controls, tests, and Pareto axes.
export const VERSION = 3;
export const DOMAIN_IDS = 'SCI QNT CMP HTC ENG ENE MAT PRD QLT LOG TRD SCL INN INS ECO FIN POL MIL STR HEU'.split(' ');
export const DERIVED_IDS = ['COV', 'FLOOR', 'LINK', 'SPAN', 'ORDER', 'FIT'];
const positives = [
  ['E', 'Evidence and inferential integrity', 20, true, 'Reliable facts, sources, inference, uncertainty, and counterevidence.'],
  ['S', 'Systems integration', 17, true, 'Coherent connections between relevant layers of a system.'],
  ['U', 'Transferable strategic utility', 15, false, 'Models and lessons reusable across decisions and cases.'],
  ['M', 'Mechanistic and causal depth', 12, false, 'Incentives, feedback, bottlenecks, constraints, and failure modes.'],
  ['D', 'Information density', 10, true, 'Useful learning per unit of reading: distinct facts, mechanisms, evidence and illuminating cases. Repeated frameworks are not padding when new cases add knowledge.'],
  ['R', 'Durability', 9, false, 'Usefulness beyond personalities, disputes, and hype.'],
  ['F', 'Direct domain fit', 7, false, 'Fit to the scientific, industrial, and strategic interests in the repository.'],
  ['A', 'Expert authority', 5, false, 'Scholarship, practice, access, and specialist scrutiny.'],
  ['N', 'Narrative architecture', 3, false, 'Readable, cumulative, memorable explanation.'],
  ['P', 'Authorial precision', 2, false, 'Exact and disciplined prose.']
];
const domains = [
  ['Science and physical principles', 'Discovery, physical limits, and the use of scientific knowledge.'],
  ['Mathematics, models, and uncertainty', 'Quantification, estimation, probability, assumptions, and sensitivity.'],
  ['Computing and information', 'Algorithms, software, simulation, information, and computer architecture.'],
  ['High technology', 'Semiconductors, aerospace, nuclear systems, photonics, and advanced instruments.'],
  ['Engineering and design', 'Feasibility, integration, testing, and technical tradeoffs.'],
  ['Energy and useful power', 'Generation, conversion, storage, fuels, efficiency, and energy constraints.'],
  ['Materials and resources', 'Properties, extraction, processing, substitution, scarcity, and allocation.'],
  ['Production and industrialization', 'Manufacturing, capacity, throughput, productivity, and repeatability.'],
  ['Quality, reliability, and precision', 'Metrology, tolerances, variation, maintenance, failure, and dependable performance.'],
  ['Logistics and infrastructure', 'Transport, distribution, inventories, networks, and flows.'],
  ['Trade and globalization', 'Specialization, exchange, supply dependence, barriers, and cross-border production.'],
  ['Scaling and technological leverage', 'Miniaturization, speed, power, throughput, networks, and changing constraints.'],
  ['Innovation and improvement', 'Invention, experiments, learning curves, research, and diffusion.'],
  ['Institutions and organization', 'Incentives, ownership, standards, contracts, and coordination.'],
  ['Economics and prosperity', 'Prices, allocation, productivity, development, and living standards.'],
  ['Finance and capital', 'Funding, investment, credit, risk, markets, and allocation of capital.'],
  ['Politics, policy, and state capacity', 'Regulation, procurement, diplomacy, and public decisions.'],
  ['Military capability and operations', 'Weapons, doctrine, sustainment, and conversion of resources into capability.'],
  ['Strategy and geostrategy', 'Competition, dependence, deterrence, geography, adaptation, and strategic risk.'],
  ['Decision heuristics and practical reasoning', 'Useful abstractions, robust decisions, and generalizable principles.']
];
export const REGISTRY = [
  ...positives.map(([id, name, max, quadratic, description]) => ({ id, name, max, quadratic, description, group: 'Existing evaluation', unit: 'attainment', weight: max })),
  { id: 'T11', name: 'Unwanted central theme', max: 1, weight: -10, unit: 'flag', description: 'Repository rule 11; 1 means the deduction applies.' },
  { id: 'T12', name: 'Auxiliary domain as central topic', max: 1, weight: -10, unit: 'flag', description: 'Repository rule 12; central military, politics, finance, media, power, or philosophy.' },
  { id: 'H13', name: 'Historical-topic age', max: 300, weight: -12, unit: 'years', description: 'Review year minus the central period endpoint. Explicit non-period accounts use zero.' },
  { id: 'P14', name: 'Original publication age', max: 100, weight: -10, unit: 'years', description: 'Review year minus original production year. Reprints do not reset age.' },
  { id: 'O15', name: 'Amazon rating count', max: 1000, weight: -20, unit: 'ratings', description: 'One verified product aggregate; unknown is not zero. Default bands preserve rule 15.' },
  ...DOMAIN_IDS.map((id, i) => ({ id, name: domains[i][0], description: domains[i][1], max: 4, weight: 0, unit: 'depth', group: 'Domains' })),
  { id: 'SRC', name: 'Contributing sources', max: 10, weight: 0, unit: 'sources', group: 'Length and sources', description: 'Distinct recorded source IDs, not independent endorsements.' },
  { id: 'PG', name: 'Edition length', max: 1000, weight: 0, unit: 'pages', group: 'Length and sources', description: 'Verified pages in the identified edition or complete nominated series.' },
  { id: 'RP', name: 'Reference pages', max: 100, weight: 0, unit: 'pages', group: 'Length and sources', description: 'Documented pages of references, bibliography, or endnotes in an identified edition. Scope varies by source; excludes the index. Unknown is not zero. More pages do not establish better evidence.' },
  ...[
    ['COV', 'Target coverage', 'Weighted coverage of the desired domain depths.'],
    ['FLOOR', 'Weakest target coverage', 'Coverage of the least satisfied target domain.'],
    ['LINK', 'Connected target strength', 'Best supported connected coverage, weighted by connection strength.'],
    ['SPAN', 'Connected domain count', 'Targets meeting depth within one connected explanation.'],
    ['ORDER', 'Joint mechanism domain count', 'Targets meeting depth in one mechanism.'],
    ['FIT', 'Integrated connection fit', 'LINK × (0.5 + 0.5 × FLOOR/100). This is not overall book quality.']
  ].map(([id, name, description]) => ({ id, name, description, max: ['SPAN', 'ORDER'].includes(id) ? 20 : 100, weight: 0, unit: ['SPAN', 'ORDER'].includes(id) ? 'domains' : 'level', group: 'Connections', derived: true }))
].map(r => ({ group: 'Existing evaluation', ...r }));
export const BY_ID = Object.fromEntries(REGISTRY.map(r => [r.id, r]));
export function rawGuidance(id) {
  const r = BY_ID[id];
  if (r.unit === 'flag') return 'Raw values: 0 = does not apply; 1 = applies.';
  if (r.unit === 'depth') return 'Raw range: 0–4 in whole steps, from absent to sustained domain depth. Unknown is separate from 0.';
  if (id === 'O15') return 'Raw range: 0 and above (whole-number ratings); no fixed upper limit. Default deductions: 0–9 → −20; 10–99 → −10; 100–999 → −5; 1,000+ → 0. Unknown is separate from 0.';
  if (['years', 'ratings', 'sources', 'pages'].includes(r.unit)) return `Raw range: 0 and above (${r.unit}); no fixed upper limit. The default upper scoring anchor is ${r.max}, not a limit on raw values. Unknown is separate from 0.`;
  return `Raw range: 0–${r.max} ${r.unit === 'attainment' ? 'attainment points' : r.unit === 'level' ? 'percent' : r.unit}. ${r.derived ? 'Requires a configured target and sufficient evidence.' : 'Higher values mean greater attainment.'}`;
}
const hasID = id => typeof id === 'string' && Object.hasOwn(BY_ID, id);
export const CORE_COLUMNS = ['year', 'raw:O15', 'raw:PG', 'raw:RP', 'raw:SRC'];
export const DEFAULT_COLUMNS = [...CORE_COLUMNS];
const columnNames = { E: 'Evidence', S: 'Systems integration', U: 'Strategic utility', M: 'Causal depth', D: 'Information density',
  R: 'Durability', F: 'Domain fit', A: 'Expert authority', N: 'Narrative clarity', P: 'Prose precision', T11: 'Unwanted theme',
  T12: 'Secondary topic', H13: 'Topic age', P14: 'Publication age', O15: 'Amazon ratings', PG: 'Pages', RP: 'Reference pages', SRC: 'Sources' };
export const COLUMNS = [
  { id: 'year', label: 'Original year', short: 'Year', kind: 'metadata' },
  { id: 'periodEnd', label: 'Central historical period end', short: 'Period end', kind: 'metadata' },
  { id: 'base', label: 'Repository baseline', short: 'Baseline score', kind: 'metadata' },
  ...REGISTRY.flatMap(r => [
    { id: `raw:${r.id}`, label: `${r.name} — raw ${r.unit}`, short: columnNames[r.id] || r.name, kind: 'raw', variable: r.id },
    { id: `points:${r.id}`, label: `${r.name} — contribution to current score`, short: `${columnNames[r.id] || r.name} points`, kind: 'points', variable: r.id }
  ])
];
export const COLUMN_BY_ID = Object.fromEntries(COLUMNS.map(c => [c.id, c]));
export function displayedColumns(model) {
  const ids = model.columnsMode === 'active' ? DEFAULT_COLUMNS : model.columns || DEFAULT_COLUMNS;
  return [...CORE_COLUMNS.filter(id => ids.includes(id)), ...ids.filter(id => !CORE_COLUMNS.includes(id))];
}
export function restoreColumns(model) {
  if (!model.columnsMode) model.columnsMode = !model.columns || JSON.stringify(model.columns) === JSON.stringify(['year', 'raw:SRC', 'raw:PG']) ? 'active' : 'custom';
  model.columns = displayedColumns(model);
}
export function columnValue(row, id) {
  if (id === 'year') return row.book.year;
  if (id === 'periodEnd') return row.book.periodEnd;
  if (id === 'base') return row.base;
  const c = COLUMN_BY_ID[id];
  return c.kind === 'raw' ? row.values[c.variable] : row.terms[c.variable].c;
}
export const clone = value => JSON.parse(JSON.stringify(value));
export const clamp = (v, low, high) => Math.min(high, Math.max(low, v));
export const known = value => typeof value === 'number' && Number.isFinite(value);
export const format = value => !known(value) ? '—' : (Math.sign(value) * Math.floor(Math.abs(value) * 100 + 0.5 + 1e-9) / 100).toFixed(2);
export const fold = text => String(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
export const compareText = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const conf = { unknown: 0, low: 1, moderate: 2, high: 3 };
export const STANDARD_BANDS = [[0, 10, 1], [10, 100, .5], [100, 1000, .25], [1000, null, 0]];
export function defaultTerm(id, target = null) {
  const r = BY_ID[id];
  const high = ['SPAN', 'ORDER'].includes(id) && target ? target.domains.length : r.max;
  return { enabled: r.weight !== 0, kind: id === 'O15' ? 'bands' : 'affine', low: 0, high, signed: false, pivot: high / 2, reverse: false,
    bands: clone(STANDARD_BANDS), curve: r.quadratic ? 'quadratic' : 'linear', slope: 1, intercept: 0,
    knots: [[0, 0], [1, 1]], mode: 'weight', weight: r.weight, rate: 0, reference: 0 };
}
export function defaultModel(reviewYear = 2026) {
  return { version: VERSION, reviewYear, target: null, terms: Object.fromEntries(REGISTRY.map(r => [r.id, defaultTerm(r.id)])), filters: {},
    query: '', selectedOnly: false, selected: [], exact: '', requireKnown: false, baseMin: null, totalMin: null, plot: false, xScale: 'linear', yScale: 'linear', showFiltered: true,
    columns: [...DEFAULT_COLUMNS], columnsMode: 'active',
    axes: [{ kind: 'aggregate', id: 'BASE', direction: 'max', label: 'Repository score', terms: [] },
      { kind: 'raw', id: 'PG', direction: 'min', label: 'Pages', terms: [] }] };
}
export function restoreOptionalTerms(model) {
  if (model?.version === VERSION && model.terms && !Object.hasOwn(model.terms, 'RP')) model.terms.RP = defaultTerm('RP');
  return model;
}
export function normalize(v, t) {
  let n;
  if (t.kind === 'bands') {
    n = t.bands.find(([lo, hi]) => v >= lo && (hi === null || v < hi))?.[2];
    if (t.signed) n = 2 * n - 1;
  } else {
    const x = clamp(v, t.low, t.high);
    n = t.signed ? (x <= t.pivot ? (x - t.pivot) / (t.pivot - t.low) : (x - t.pivot) / (t.high - t.pivot)) : (x - t.low) / (t.high - t.low);
  }
  return t.reverse ? (t.signed ? -n : 1 - n) : n;
}
export function shape(n, t) {
  if (t.curve === 'quadratic') return t.signed ? n * Math.abs(n) : n * n;
  if (t.curve === 'scaled') return clamp(t.slope * n + t.intercept, t.signed ? -1 : 0, 1);
  if (t.curve === 'piecewise') {
    for (let i = 1; i < t.knots.length; i++) {
      const [x, y] = t.knots[i], [px, py] = t.knots[i - 1];
      if (n <= x) return py + (y - py) * (n - px) / (x - px);
    }
    return t.knots.at(-1)[1];
  }
  return n;
}
export function coefficients(t) {
  if (t.mode === 'weight') return { w: t.weight, b: 0 };
  const w = t.rate * (t.high - t.low) / (t.signed ? 2 : 1) * (t.reverse ? -1 : 1);
  const origin = t.signed ? t.pivot : t.reverse ? t.high : t.low;
  return { w, b: t.rate * (origin - t.reference) };
}
export function changeMode(t, mode) {
  if (mode === t.mode) return;
  if (mode === 'rate') {
    t.rate = t.weight * (t.signed ? 2 : 1) / (t.high - t.low) * (t.reverse ? -1 : 1);
    t.reference = t.signed ? t.pivot : t.reverse ? t.high : t.low;
  } else t.weight = coefficients(t).w;
  t.mode = mode;
}
export function canonicalFallback(id, t) {
  return id === 'O15' && t.kind === 'bands' && !t.signed && !t.reverse && t.curve === 'linear' && t.mode === 'weight' &&
    JSON.stringify(t.bands) === JSON.stringify(STANDARD_BANDS);
}
export function termValue(v, t, id) {
  const { w, b } = coefficients(t), active = t.enabled && w !== 0;
  if (!known(v)) return { n: null, z: null, c: 0, missing: active && !canonicalFallback(id, t), fallback: active && canonicalFallback(id, t) };
  const n = normalize(v, t), z = shape(n, t);
  return { n, z, c: active ? b + w * z : 0, missing: false, fallback: false };
}
export function validateTerm(t) {
  const errors = [], need = (ok, msg) => { if (!ok) errors.push(msg); };
  need(t && typeof t === 'object', 'Term must be an object.'); if (!t) return errors;
  need(['affine', 'bands'].includes(t.kind), 'Choose affine or bands.');
  need(['linear', 'quadratic', 'scaled', 'piecewise'].includes(t.curve), 'Unknown curve.');
  need(['rate', 'weight'].includes(t.mode), 'Unknown parameter mode.');
  for (const p of ['low', 'high', 'pivot', 'slope', 'intercept', 'weight', 'rate', 'reference']) need(known(t[p]), `${p} must be finite.`);
  for (const p of ['enabled', 'signed', 'reverse']) need(typeof t[p] === 'boolean', `${p} must be boolean.`);
  need(t.low < t.high, 'Lower anchor must be below upper anchor.');
  if (t.signed) need(t.low < t.pivot && t.pivot < t.high, 'Pivot must be between the anchors.');
  if (t.mode === 'rate') need(t.kind === 'affine' && t.curve === 'linear' && (!t.signed || Math.abs(t.pivot - (t.low + t.high) / 2) < 1e-12),
    'A direct rate requires affine, linear scaling and a midpoint signed pivot.');
  if (t.kind === 'bands') {
    need(Array.isArray(t.bands) && t.bands.length >= 1, 'At least one count band is required.');
    if (Array.isArray(t.bands)) t.bands.forEach((b, i) => {
      need(Array.isArray(b) && b.length === 3 && known(b[0]) && known(b[2]) && b[2] >= 0 && b[2] <= 1, 'Bands contain [lower, upper, level 0..1].');
      need(i === 0 ? b[0] === 0 : b[0] === t.bands[i - 1][1], 'Bands must cover counts from zero without gaps or overlaps.');
      need(i === t.bands.length - 1 ? b[1] === null : known(b[1]) && b[1] > b[0], 'Only the last upper band boundary is null.');
    });
  }
  if (t.curve === 'piecewise') {
    const k = t.knots;
    need(Array.isArray(k) && k.length >= 2, 'At least two knots are required.');
    if (Array.isArray(k) && k.length >= 2) {
      need(k[0][0] === (t.signed ? -1 : 0) && k.at(-1)[0] === 1, 'Knots must cover both normalized endpoints.');
      k.forEach((v, i) => need(Array.isArray(v) && v.length === 2 && v.every(known) && v[1] >= (t.signed ? -1 : 0) && v[1] <= 1 && (!i || v[0] > k[i - 1][0]), 'Knots must increase; outputs must stay in range.'));
    }
  }
  if (!errors.length) { const c = coefficients(t); need(known(c.w) && known(c.b), 'Compiled points exceed the numeric range.'); }
  return errors;
}
export function validateTarget(target) {
  if (target === null) return [];
  if (!target || !Array.isArray(target.domains)) return ['Invalid connection target.'];
  const errors = [];
  if (target.domains.length < 2 || target.domains.length > 20 || new Set(target.domains.map(d => d.id)).size !== target.domains.length) errors.push('Select 2–20 unique domains.');
  for (const d of target.domains) if (!DOMAIN_IDS.includes(d.id) || !Number.isInteger(d.depth) || d.depth < 1 || d.depth > 4 || !Number.isInteger(d.importance) || d.importance < 1 || d.importance > 5) errors.push('Set each target depth (1–4) and importance (1–5).');
  if (!Number.isInteger(target.strength) || target.strength < 1 || target.strength > 4 || !['low', 'moderate', 'high'].includes(target.confidence)) errors.push('Choose strength and confidence thresholds.');
  return errors;
}
export function connectionValues(book, target) {
  const result = Object.fromEntries(DERIVED_IDS.map(id => [id, null]));
  if (!target) return { values: result, reason: 'Not configured', winning: [] };
  if (target.domains.some(d => !known(book.values[d.id]))) return { values: result, reason: 'Target domain assessment missing', winning: [] };
  const total = target.domains.reduce((s, d) => s + d.importance, 0);
  const attainment = Object.fromEntries(target.domains.map(d => [d.id, Math.min(1, book.values[d.id] / d.depth)]));
  result.COV = 100 * target.domains.reduce((s, d) => s + d.importance * attainment[d.id], 0) / total;
  result.FLOOR = 100 * Math.min(...Object.values(attainment));
  if (book.connections.status !== 'complete') return { values: result, reason: 'Connection review incomplete', winning: [] };
  result.LINK = result.SPAN = result.ORDER = 0;
  let winning = [], winningLevel = 0;
  for (let level = target.strength; level <= 4; level++) {
    const nodes = book.connections.mechanisms.filter(m => m.strength >= level && conf[m.confidence] >= conf[target.confidence]);
    const byId = new Map(nodes.map(m => [m.id, m])), adj = new Map(nodes.map(m => [m.id, []]));
    for (const j of book.connections.joins) if (j.strength >= level && conf[j.confidence] >= conf[target.confidence] && byId.has(j.from) && byId.has(j.to)) {
      adj.get(j.from).push(j.to); adj.get(j.to).push(j.from);
    }
    const useful = set => target.domains.filter(d => set.has(d.id) && book.values[d.id] > 0).length >= 2;
    const satisfied = set => target.domains.filter(d => set.has(d.id) && attainment[d.id] === 1).length;
    if (level === target.strength) for (const m of nodes) if (useful(new Set(m.domains))) result.ORDER = Math.max(result.ORDER, satisfied(new Set(m.domains)));
    const seen = new Set();
    for (const node of nodes) {
      if (seen.has(node.id)) continue;
      const stack = [node.id], ids = [], domains = new Set();
      while (stack.length) {
        const id = stack.pop(); if (seen.has(id)) continue; seen.add(id); ids.push(id);
        byId.get(id).domains.forEach(d => domains.add(d)); stack.push(...adj.get(id));
      }
      if (!useful(domains)) continue;
      ids.sort(compareText);
      const link = 100 * level / 4 * target.domains.reduce((s, d) => s + (domains.has(d.id) ? d.importance * attainment[d.id] : 0), 0) / total;
      if (link > result.LINK || (link === result.LINK && (level > winningLevel || (level === winningLevel && ids.join() < winning.join())))) {
        result.LINK = link; winning = ids; winningLevel = level;
      }
      if (level === target.strength) result.SPAN = Math.max(result.SPAN, satisfied(domains));
    }
  }
  result.FIT = result.LINK * (.5 + .5 * result.FLOOR / 100);
  return { values: result, reason: '', winning, level: winningLevel };
}
export function rawValues(book, year) {
  return { ...book.values, P14: Math.max(0, year - book.year), H13: book.periodEnd === null ? 0 : Math.max(0, year - book.periodEnd) };
}
export function evaluateBook(book, model) {
  const connection = connectionValues(book, model.target), values = { ...rawValues(book, model.reviewYear), ...connection.values };
  const terms = {}, missing = [], fallback = [];
  let total = 0, active = 0;
  for (const r of REGISTRY) {
    const t = model.terms[r.id], v = termValue(values[r.id], t, r.id); terms[r.id] = v; total += v.c;
    if (t.enabled && coefficients(t).w !== 0) { active++; if (v.missing) missing.push(r.id); if (v.fallback) fallback.push(r.id); }
  }
  const result = { book, values, terms, total, missing, fallback, active, base: book.base, connection };
  result.axes = model.plot ? model.axes.map(a => axisValue(a, result, model)) : [null, null];
  return result;
}
export function axisValue(axis, row, model) {
  if (!axis) return null;
  if (axis.kind === 'aggregate') return axis.id === 'BASE' ? row.base : row.missing.length ? null : row.total;
  if (axis.kind === 'raw') return row.values[axis.id];
  if (axis.kind === 'normalized') return known(row.terms[axis.id].n) ? 100 * row.terms[axis.id].n : null;
  if (axis.kind === 'contribution') return row.terms[axis.id].missing ? null : row.terms[axis.id].c;
  let sum = 0;
  for (const term of axis.terms) {
    if (term.linked) {
      if (row.terms[term.id].missing) return null;
      sum += row.terms[term.id].c;
    } else {
      const value = termValue(row.values[term.id], term.config, term.id);
      if (value.missing) return null; sum += value.c;
    }
  }
  return sum;
}
export function filterReasons(row, model, selected = new Set(model.selected)) {
  const reasons = [];
  if (model.query && !row.book.search.includes(fold(model.query.trim()))) reasons.push('Search does not match');
  if (model.selectedOnly && !selected.has(row.book.id)) reasons.push('Not selected');
  if (model.requireKnown && row.missing.length) reasons.push(`Missing active data: ${row.missing.join(', ')}`);
  if (known(model.baseMin) && row.base < model.baseMin) reasons.push(`BASE < ${model.baseMin}`);
  if (known(model.totalMin) && row.total < model.totalMin) reasons.push(`TOTAL < ${model.totalMin}`);
  for (const [id, f] of Object.entries(model.filters)) {
    if (!f.enabled) continue;
    const raw = row.values[id], t = row.terms[id];
    const v = !known(raw) ? null : f.basis === 'normalized' ? 100 * t.n : f.basis === 'contribution' ? t.c : raw;
    if (!known(v)) { if (f.unknown === 'exclude') reasons.push(`${id} unknown`); continue; }
    if (f.unknown === 'only') { reasons.push(`${id} is known`); continue; }
    if (known(f.min) && v < f.min) reasons.push(`${id} ${format(v)} < ${f.min}`);
    if (known(f.max) && v > f.max) reasons.push(`${id} ${format(v)} > ${f.max}`);
  }
  if (model.exact && model.target) {
    if (row.values.FLOOR !== 100) reasons.push(known(row.values.FLOOR) ? 'Not every target meets its depth' : row.connection.reason);
    else if (model.exact !== 'coverage' && row.values[model.exact === 'joint' ? 'ORDER' : 'SPAN'] !== model.target.domains.length) reasons.push(row.connection.reason || `Connected ${row.values[model.exact === 'joint' ? 'ORDER' : 'SPAN']} of ${model.target.domains.length} target domains`);
  }
  return reasons;
}
export function evaluateCatalog(books, model) {
  const selected = new Set(model.selected), rows = books.map(book => evaluateBook(book, model));
  for (const row of rows) row.reasons = filterReasons(row, model, selected);
  rows.sort((a, b) => b.total - a.total || compareText(a.book.sortKey, b.book.sortKey) || compareText(a.book.id, b.book.id));
  return { rows, matching: rows.filter(r => !r.reasons.length), filtered: rows.filter(r => r.reasons.length) };
}
export function frontier(rows, axes) {
  if (axes.some(a => !a)) return new Set();
  const sx = axes[0].direction === 'min' ? -1 : 1, sy = axes[1].direction === 'min' ? -1 : 1;
  const points = rows.filter(r => r.axes.every(known)).map(r => ({ id: r.book.id, x: sx * r.axes[0], y: sy * r.axes[1] }))
    .sort((a, b) => b.x - a.x || b.y - a.y);
  const result = new Set(); let bestY = -Infinity;
  for (let i = 0; i < points.length;) {
    let j = i; while (j < points.length && points[j].x === points[i].x && points[j].y === points[i].y) j++;
    if (points[i].y > bestY) for (let k = i; k < j; k++) result.add(points[k].id);
    bestY = Math.max(bestY, points[i].y); i = j;
  }
  return result;
}
export function clearTarget(model) {
  model.target = null; model.exact = '';
  for (const id of DERIVED_IDS) { model.terms[id].enabled = false; delete model.filters[id]; }
  model.axes = model.axes.map(a => a && (DERIVED_IDS.includes(a.id) || (a.kind === 'sum' && a.terms.some(t => DERIVED_IDS.includes(t.id)))) ? null : a);
}
export function frontierLayers(rows, axes) {
  let remaining = rows;
  return Array.from({length:3}, () => {
    const layer = frontier(remaining, axes);
    remaining = remaining.filter(r => !layer.has(r.book.id));
    return layer;
  });
}
// Points are distinct frontier coordinates, sorted by increasing screen X.
// Step through the dominated corner; interpolation invents unsupported trade-offs.
export function frontierPath(points, xDirection) {
  if (points.length < 2) return '';
  let path = `M${points[0].join(',')}`;
  for (const [x, y] of points.slice(1)) {
    path += xDirection === 'min' ? `H${x}V${y}` : `V${y}H${x}`;
  }
  return path;
}
export function validateModel(m) {
  const errors = [];
  if (!m || m.version !== VERSION) return ['Settings require schema version 3. Earlier raw weights cannot be reused.'];
  if (!Number.isInteger(m.reviewYear) || m.reviewYear < 1 || m.reviewYear > 9999) errors.push('Review year must be an integer from 1 to 9999.');
  errors.push(...validateTarget(m.target));
  if (!m.terms || Object.keys(m.terms).length !== REGISTRY.length || Object.keys(m.terms).some(id => !hasID(id))) return [...errors, 'Exactly 43 registered terms are required.'];
  for (const r of REGISTRY) {
    errors.push(...validateTerm(m.terms[r.id]).map(e => `${r.id}: ${e}`));
    if (!m.target && r.derived && m.terms[r.id].enabled) errors.push(`${r.id} requires a connection target.`);
  }
  if (!m.filters || typeof m.filters !== 'object') errors.push('Invalid filters.');
  else for (const [id, f] of Object.entries(m.filters)) {
    if (!hasID(id) || !['raw', 'normalized', 'contribution'].includes(f.basis) || !['include', 'exclude', 'only'].includes(f.unknown) ||
      ![f.min, f.max].every(v => v === null || known(v)) || (known(f.min) && known(f.max) && f.min > f.max)) errors.push(`Invalid filter: ${id}.`);
    if (!m.target && DERIVED_IDS.includes(id) && f.enabled) errors.push(`${id} filter requires a target.`);
  }
  if (!['', 'coverage', 'connected', 'joint'].includes(m.exact) || (m.exact && !m.target)) errors.push('Invalid exact target filter.');
  for (const axis of ['x', 'y']) if (m[axis + 'Scale'] !== undefined && !['linear', 'log'].includes(m[axis + 'Scale'])) errors.push(`Invalid ${axis.toUpperCase()}-axis scale.`);
  if (!Array.isArray(m.axes) || m.axes.length !== 2) errors.push('Two axis slots are required.');
  else for (const a of m.axes) {
    if (a === null) continue;
    if (!['max', 'min'].includes(a.direction) || typeof a.label !== 'string' || a.label.length > 120) errors.push('Invalid axis label or direction.');
    if (!['raw', 'normalized', 'contribution', 'aggregate', 'sum'].includes(a.kind)) errors.push('Unknown axis type.');
    if (a.kind === 'aggregate' ? !['BASE', 'TOTAL'].includes(a.id) : a.kind !== 'sum' && !hasID(a.id)) errors.push('Unknown axis variable.');
    if (!m.target && DERIVED_IDS.includes(a.id)) errors.push('Axis requires a connection target.');
    if (a.kind === 'sum') {
      if (!Array.isArray(a.terms) || !a.terms.length || new Set(a.terms.map(t => t.id)).size !== a.terms.length) errors.push('Axis terms must be nonempty and unique.');
      else for (const t of a.terms) {
        if (!hasID(t.id) || (!m.target && DERIVED_IDS.includes(t.id))) errors.push('Invalid axis term.');
        if (!t.linked) errors.push(...validateTerm(t.config));
      }
    }
  }
  if (!Array.isArray(m.selected) || m.selected.some(v => typeof v !== 'string')) errors.push('Selection must contain work IDs.');
  if (m.columns !== undefined && (!Array.isArray(m.columns) || new Set(m.columns).size !== m.columns.length || m.columns.some(id => !Object.hasOwn(COLUMN_BY_ID, id)))) errors.push('Displayed columns must be unique registered fields.');
  if (m.columnsMode !== undefined && !['active', 'custom'].includes(m.columnsMode)) errors.push('Unknown column selection mode.');
  if (typeof m.query !== 'string' || m.query.length > 2000) errors.push('Invalid search.');
  for (const p of ['selectedOnly', 'requireKnown', 'plot', 'showFiltered']) if (typeof m[p] !== 'boolean') errors.push(`${p} must be boolean.`);
  if (![m.baseMin, m.totalMin].every(v => v === null || known(v))) errors.push('Score thresholds must be finite or empty.');
  return errors;
}
