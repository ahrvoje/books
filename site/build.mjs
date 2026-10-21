import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { REGISTRY, DOMAIN_IDS, defaultModel, evaluateBook, format, fold, known } from './model.mjs';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const OUTPUT_DIR = path.join(ROOT, 'docs');
export const HTML_FILE = path.join(OUTPUT_DIR, 'index.html');
const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const json = file => JSON.parse(read(file));
const clean = s => String(s).normalize('NFKC').replace(/\s+/g, ' ').trim();
const titleOf = s => s.match(/^\[([^\]]+)\]/)?.[1] || s;
const key = (author, title) => clean(author) + '|' + clean(title);
const link = s => s.match(/\]\(([^)]+)\)/)?.[1] || '';
const rows = text => text.split(/\r?\n/).filter(l => /^\| \d{4}-/.test(l)).map(l => l.split('|').slice(1, -1).map(s => s.trim()));
const safeURL = u => /^(https?:\/\/|analysis\/)/.test(u || '') ? u : '';
function analysisPath(value) {
  if (!value) return '';
  return safeURL(value.startsWith('analysis/') ? value : 'analysis/' + value);
}
export function validateConnections(book) {
  const c = book.connections, ids = new Set();
  assert(['unreviewed', 'partial', 'complete'].includes(c.status), 'Invalid review status');
  for (const m of c.mechanisms) {
    assert(typeof m.id === 'string' && !ids.has(m.id)); ids.add(m.id);
    assert(m.domains.length >= 2 && m.domains.length <= 20 && new Set(m.domains).size === m.domains.length);
    assert(Number.isInteger(m.strength) && m.strength >= 1 && m.strength <= 4);
    assert(['high', 'moderate', 'low'].includes(m.confidence));
    assert(m.statement && m.scope && m.refs?.length);
    for (const d of m.domains) assert(DOMAIN_IDS.includes(d) && book.values[d] > 0 && m.roles[d], `Missing supported participant ${d}`);
  }
  for (const j of c.joins) {
    assert(ids.has(j.from) && ids.has(j.to) && j.from !== j.to);
    assert(j.statement && j.scope && j.handoff && j.refs?.length);
    assert(Number.isInteger(j.strength) && j.strength >= 1 && j.strength <= 4 && ['high', 'moderate', 'low'].includes(j.confidence));
  }
}
export function buildDataset() {
  const compiled = json(json('data/catalog.json').compiled), ledger = rows(read('RECOMMENDED_BOOKS.md'));
  if (compiled.audit.rulesSha256) assert.equal(crypto.createHash('sha256').update(read('AGENTS.md')).digest('hex'), compiled.audit.rulesSha256,
    'Repository rules changed after the recorded review; reconcile catalog judgments before rebuilding.');
  const eligible = compiled.currentBooks.filter(b => b.status === 'recommended');
  const byKey = new Map(eligible.map(b => [key(b.author, titleOf(b.titleCell || b.title)), b]));
  assert.equal(byKey.size, eligible.length, 'Duplicate work identity');
  assert.equal(ledger.length, eligible.length, 'Ledger membership changed; update the adapter.');
  const vetoRecords = new Map(compiled.currentBooks.filter(b => b.status === 'vetoed').map(b => [key(b.author, titleOf(b.titleCell || b.title)), b]));
  const vetoed = rows(read('VETOED_BOOKS.md')).map(row => {
    const b = vetoRecords.get(key(row[2], titleOf(row[3]))), score = row[4].replace(/\*/g, '');
    assert(b && format(b.total) === score, `Unmatched veto ledger score: ${row[3]}`);
    return { id: b.id, title: titleOf(row[3]), author: row[2], year: row[1], score,
      veto: row[5], confidence: row[6], sources: row[7], analysis: analysisPath(link(row[3])),
      reason: b.vetoReason || b.reason || b.eligibility || b.assessment?.note || 'See the retained assessment for the veto rationale.' };
  });
  assert.equal(vetoed.length, vetoRecords.size, 'Veto ledger membership mismatch');
  const forbidden = new Set(vetoRecords.keys());
  const exclusions = read('EXCLUDED_BOOKS.md').split(/\r?\n/).filter(l => l.startsWith('- ')).map(l => clean(l.slice(2)));
  assert.deepEqual(exclusions, compiled.exclusions.map(b => clean((b.line || `- ${b.title}${b.author ? ' — ' + b.author : ''}`).replace(/^- /, ''))),
    'Excluded ledger membership differs from the reviewed catalog.');
  const sourceMap = {};
  for (const line of read('SOURCES.md').split(/\r?\n/).filter(l => /^\| \d+ \|/.test(l))) {
    const cells = line.split('|').slice(1, -1).map(s => s.trim());
    const sourceURL = link(cells[2]);
    assert(!sourceMap[cells[0]], `Duplicate source ${cells[0]}`);
    assert(/^\d{4}-\d{2}-\d{2}$/.test(cells[1]), `Invalid source date: ${cells[1]}`);
    sourceMap[cells[0]] = { id: +cells[0], date: cells[1], url: /^data\/[^/\\]+\.md$/.test(sourceURL) ? sourceURL : safeURL(sourceURL), label: titleOf(cells[2]), analysis: analysisPath(link(cells[3])) };
    assert(sourceMap[cells[0]].url && sourceMap[cells[0]].analysis, `Missing source or analysis link: ${cells[0]}`);
  }
  const enrichment = json('site/enrichment.json');
  assert.equal(enrichment.version, 1);
  const issues = [], seen = new Set(), baseline = defaultModel(2026);
  const books = ledger.map(row => {
    const identity = key(row[2], titleOf(row[3])), b = byKey.get(identity);
    assert(b && !forbidden.has(identity), `Unmatched or ineligible ledger work: ${row[3]}`);
    assert(!seen.has(b.id)); seen.add(b.id);
    assert(!exclusions.includes(clean(titleOf(row[3]) + ' — ' + row[2])), 'Excluded work in recommendations');
    assert(b.raw?.length === 10 && b.raw.every(known));
    assert([0, -10].includes(b.T11) && [0, -10].includes(b.T12));
    assert(known(b.year) && (b.periodEnd === null || known(b.periodEnd)));
    const sources = [...new Set(row[5].match(/\d+/g).map(Number))].sort((a, c) => a - c);
    sources.forEach(id => assert(sourceMap[id], `Unknown source ${id}`));
    const extra = enrichment.books[b.id] || {}, values = Object.fromEntries(REGISTRY.map(r => [r.id, null]));
    REGISTRY.slice(0, 10).forEach((r, i) => { assert(b.raw[i] >= 0 && b.raw[i] <= r.max); values[r.id] = b.raw[i]; });
    Object.assign(values, { T11: -b.T11 / 10, T12: -b.T12 / 10, SRC: sources.length, O15: b.amazon?.count ?? null, PG: extra.edition?.pages ?? null });
    for (const id of DOMAIN_IDS) {
      const e = extra.domains?.[id]; if (!e) continue;
      assert(Number.isInteger(e.value) && e.value >= 0 && e.value <= 4 && e.refs?.length && e.rationale && ['high', 'moderate', 'low'].includes(e.confidence));
      values[id] = e.value;
    }
    if (extra.edition) assert(Number.isInteger(extra.edition.pages) && extra.edition.pages > 0 && extra.edition.id &&
      safeURL(extra.edition.url) && extra.edition.retrieved && extra.edition.language && extra.edition.format && Number.isInteger(extra.edition.year));
    const evidence = {};
    REGISTRY.slice(0, 10).forEach((r, i) => {
      const c = b.criteria?.find(c => c.code === r.id);
      evidence[r.id] = { rationale: c?.assessment || b.notes?.[i] || 'Retained current repository assessment.', confidence: b.evidenceConfidence || b.confidence || b.scoreConfidence || 'moderate', refs: [analysisPath(b.reviewAnchor || b.currentReview || b.priorReport)].filter(Boolean) };
    });
    Object.assign(evidence, extra.domains || {});
    if (extra.edition) evidence.PG = {
      rationale: `${extra.edition.pages} pages in ${extra.edition.id}; ${extra.edition.language}, ${extra.edition.format}, edition year ${extra.edition.year}. ${extra.edition.notes || extra.edition.note || ''}`,
      confidence: extra.edition.confidence || 'moderate', refs: [extra.edition.url]
    };
    const book = {
      id: b.id, title: titleOf(row[3]), author: row[2], year: b.year, entryDate: row[0], purchaseUrl: safeURL(link(row[3])),
      subtitle: b.subtitle || '', sources, values, periodEnd: b.periodEnd, scope: b.periodEnd === null ? 'No numeric historical endpoint; see assessment' : 'Central historical period',
      scopeNote: [b.yearNote || b.production?.note, b.periodNote || b.assessment?.note || b.theme].filter(Boolean).join(' '), confidence: b.confidence || b.scoreConfidence || 'moderate',
      yearConfidence: b.yearConfidence || b.production?.confidence || 'moderate', periodConfidence: b.periodConfidence || 'moderate',
      verdict: b.verdict || '', evidence, analysis: analysisPath(b.reviewAnchor || b.currentReview || b.priorReport),
      amazon: { count: values.O15, url: safeURL(b.amazon?.url), marketplace: b.amazon?.marketplace || '', product: b.amazon?.asin || b.amazon?.productIdentifier || b.amazon?.product || '', retrieved: b.amazon?.verifiedAt || b.amazon?.retrievedAt || b.amazon?.retrieved || b.amazon?.attemptedAt || '', limitations: b.amazon?.status || 'See source assessment.' },
      reader: b.reader || '', edition: extra.edition || null, research: extra.research || null,
      connections: extra.connections || { status: 'unreviewed', mechanisms: [], joins: [], limitations: 'Domain and connection evidence has not been coded under this model.' },
      base: b.total, ledgerScore: +row[4], ledgerMismatch: false
    };
    validateConnections(book);
    book.search = fold([book.title, book.subtitle, book.author].join(' '));
    book.sortKey = fold(book.title) + '\0' + fold(book.author);
    const score = evaluateBook(book, baseline).total;
    assert(Math.abs(score - b.total) < 1e-10, `${b.id}: baseline mismatch`);
    book.base = score;
    assert.equal(format(score), row[4], `${b.id}: ledger score display mismatch`);
    return book;
  });
  for (const id of Object.keys(enrichment.books)) assert(seen.has(id), `Enrichment for an unknown work: ${id}`);
  const documents = {}, refs = new Set([...Object.values(sourceMap).flatMap(s=>[s.url,s.analysis]), ...vetoed.map(b=>b.analysis)]);
  for (const b of compiled.sourceBooks || []) for (const value of [...(b.priorReviews || []), ...(b.evidence || [])]) {
    if (typeof value === 'string' && value.startsWith('analysis/')) refs.add(value);
  }
  for (const b of books) {
    refs.add(b.analysis);
    for (const e of Object.values(b.evidence)) for (const ref of e.refs || []) refs.add(ref);
    for (const e of [...b.connections.mechanisms,...b.connections.joins]) for (const ref of e.refs || []) refs.add(ref);
  }
  for (const ref of refs) {
    const file = typeof ref === 'string' ? ref.split('#')[0] : '';
    if (!/^(analysis|data)\/[^/\\]+\.md$/.test(file) || documents[file]) continue;
    assert(fs.existsSync(path.join(ROOT,file)), `Missing cited document: ${file}`);
    documents[file] = read(file);
    for (const match of documents[file].matchAll(/\]\((?:\.\.\/)?(?:analysis\/)?(analysis_[^/#\s)]+\.md)(?:#[^\s)]*)?\)/g)) {
      const cited = 'analysis/' + match[1];
      if (fs.existsSync(path.join(ROOT,cited))) refs.add(cited);
    }
  }
  const hash = crypto.createHash('sha256').update(JSON.stringify(books)).digest('hex').slice(0, 16);
  return { version: 2, modelVersion: 3, reviewYear: 2026, datasetHash: hash, generated: new Date().toISOString(), books, vetoed, excluded: exclusions, sources: sourceMap, issues, documents,
    coverage: {
      books: books.length, pages: books.filter(b => b.edition).length,
      domains: books.filter(b => DOMAIN_IDS.every(id => known(b.values[id]))).length,
      domainBooks: books.filter(b => DOMAIN_IDS.some(id => known(b.values[id]))).length,
      domainValues: books.reduce((n,b) => n + DOMAIN_IDS.filter(id => known(b.values[id])).length, 0),
      reviewed: books.filter(b => b.research).length,
      mechanisms: books.reduce((n,b) => n + b.connections.mechanisms.length, 0),
      connections: books.filter(b => b.connections.status === 'complete').length
    } };
}
export function build() {
  const dataset = buildDataset();
  const model = read('site/model.mjs').replace(/^export /gm, '');
  const rules = read('AGENTS.md'), escape = text => text.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
  const rule = (heading, prefix) => {
    const section = rules.split(heading)[1]?.split('\n## ')[0];
    const line = section?.split(/\r?\n/).map(line => line.replace(/^\d+\. /, '')).find(line => line.startsWith(prefix));
    assert(line, `Missing ${heading} rule: ${prefix}`);
    return escape(line);
  };
  const html = read('site/template.html')
    .replace('/* METHODOLOGY */', () => read('site/methodology.html')
      .replace('/* CRITERIA */', () => REGISTRY.slice(0,10).map(r=>`<tr><td>${r.name}</td><td>${r.max}</td><td>${r.quadratic?'Quadratic':'Linear'}</td><td>${r.description}</td></tr>`).join(''))
      .replace('/* BOOK_FORM */', () => rule('## Hard exclusion rules', 'Works which do not represent a book'))
      .replace('/* FICTION */', () => rule('## Hard exclusion rules', 'Exclude fiction books'))
      .replace('/* REFERENCE */', () => rule('## Hard exclusion rules', 'Exclude textbooks'))
      .replace('/* V4 */', () => rule('## Veto rules', 'Hype or ephemerality dependence'))
      .replace('/* V5 */', () => rule('## Veto rules', 'Religious doctrine or ideological extremism'))
      .replace('/* RULES */', () => escape(rules)))
    .replace('/* STYLES */', () => read('site/style.css'))
    .replace('/* DATA */', () => JSON.stringify(dataset).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029'))
    .replace('/* APPLICATION */', () => model + '\n' + read('site/app.js'));
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(HTML_FILE, html);
  fs.writeFileSync(path.join(OUTPUT_DIR, '.nojekyll'), '');
  console.log(`Built docs/index.html: ${dataset.books.length} books, ${Buffer.byteLength(html).toLocaleString('en')} bytes, dataset ${dataset.datasetHash}`);
  return dataset;
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) build();
