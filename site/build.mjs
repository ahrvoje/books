import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { gzipSync } from 'node:zlib';
import { REGISTRY, DOMAIN_IDS, defaultModel, evaluateBook, format, fold, known, bonusValues } from './model.mjs';

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
export function referenceRangeCount(ranges) {
  const pages = new Set(), multiVolume = ranges.some(span => span.volume != null);
  for (const span of ranges) {
    assert(Number.isInteger(span.start) && Number.isInteger(span.end) && span.start > 0 && span.end >= span.start, 'Invalid reference range');
    if (multiVolume) assert(typeof span.volume === 'string' && span.volume.trim(), 'Every range must identify its volume');
    for (let p = span.start; p <= span.end; p++) pages.add(`${span.volume || ''}:${p}`);
  }
  return pages.size;
}
export function buildDataset() {
  const compiled = json(json('data/catalog.json').compiled), ledger = rows(read('RECOMMENDED_BOOKS.md'));
  const ledgerHeaders = read('RECOMMENDED_BOOKS.md').split(/\r?\n/)[0].split('|').slice(1, -1).map(s => s.trim());
  const ledgerColumn = name => {
    const index = ledgerHeaders.indexOf(name);
    assert(index >= 0, `Missing recommended ledger column: ${name}`);
    return index;
  };
  const editions = json('site/editions.json');
  const referencePages = json('site/reference-pages.json');
  const currentIds = new Set(compiled.currentBooks.map(b=>b.id));
  assert.deepEqual(Object.keys(referencePages).sort(), [...currentIds].sort(), 'Reference-page coverage differs from current scored membership');
  for (const [id,r] of Object.entries(referencePages)) {
    assert(r.pages === null || Number.isInteger(r.pages) && r.pages >= 0, `Invalid reference-page count: ${id}`);
    assert(['unknown','low','moderate','high'].includes(r.confidence), `Invalid reference confidence: ${id}`);
    if (r.pages !== null) {
      assert(r.edition?.id && safeURL(r.url) && (r.ranges?.length || r.documentedCounts?.length), `Missing reference-page evidence: ${id}`);
      if (r.ranges?.length) assert.equal(r.pages, referenceRangeCount(r.ranges), `Reference range arithmetic mismatch: ${id}`);
      else {
        assert(r.documentedCounts.every(c => Number.isInteger(c.pages) && c.pages >= 0 && c.label && c.evidence), `Invalid documented reference count: ${id}`);
        assert.equal(r.pages, r.documentedCounts.reduce((sum, c) => sum + c.pages, 0), `Documented reference count mismatch: ${id}`);
      }
    }
  }
  for(const [id,e] of Object.entries(editions)){
    assert(currentIds.has(id), `Edition for a non-current scored work: ${id}`);
    assert(Number.isInteger(e.pages) && e.pages>0 && e.id && safeURL(e.url) && e.retrieved && e.language && e.format && (e.year === null || Number.isInteger(e.year)), `Incomplete edition: ${id}`);
    assert(!/audio/i.test(e.format), `Audio is not a page-count edition: ${id}`);
  }
  const pageCell = e => e ? `[${e.pages}](${e.url})` : 'Unknown';
  const ratingCell = a => a?.count == null ? 'Unknown' : `[${a.count}](${a.url})`;
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
    assert.equal(row[8],pageCell(editions[b.id]), `Vetoed page-count mismatch: ${b.id}`);
    assert.equal(row[9],ratingCell(b.amazon), `Vetoed rating-count mismatch: ${b.id}`);
    const bonus = bonusValues(new Set(row[7].match(/\d+/g)).size, editions[b.id]?.pages ?? null, referencePages[b.id].pages);
    for (const [i,id] of ['REL','RD'].entries()) {
      assert.equal(b.bonuses[id], bonus[id] ?? 0, `${b.id}: stale counterfactual ${id}`);
      assert.equal(row[10+i], format(b.bonuses[id]), `${b.id}: counterfactual bonus ledger mismatch`);
    }
    return { id: b.id, title: titleOf(row[3]), author: row[2], year: row[1], score, sourceCount: new Set(row[7].match(/\d+/g)).size,
      veto: row[5], confidence: row[6], sources: row[7], analysis: analysisPath(link(row[3])),
      purchaseUrl: [b.purchaseUrl, link(b.titleCell || ''), b.amazon?.url, editions[b.id]?.url].find(u => /^https?:\/\//.test(u || '')) || `https://www.amazon.de/s?k=${encodeURIComponent(titleOf(row[3]) + ' ' + row[2])}`,
      edition: editions[b.id] || null,
      referencePages: referencePages[b.id],
      ratingReview: b.ratingReview?.analysis || '',
      scoreReview: b.scoreReview || '', bonuses: b.bonuses, bonusAssessment: b.bonusAssessment,
      amazon: {count:b.amazon?.count ?? null,url:safeURL(b.amazon?.url),marketplace:b.amazon?.marketplace || '',product:b.amazon?.asin || '',retrieved:b.amazon?.retrievedAt || b.amazon?.retrieved || b.amazon?.verifiedAt || '',limitations:b.amazon?.status || 'No verified count.'},
      reason: b.vetoReason || b.reason || b.eligibility || b.assessment?.note || 'See the retained assessment for the veto rationale.' };
  }).sort((a, b) => compiled.currentBooks.find(v => v.id === b.id).total - compiled.currentBooks.find(v => v.id === a.id).total || a.title.localeCompare(b.title));
  assert.equal(vetoed.length, vetoRecords.size, 'Veto ledger membership mismatch');
  const forbidden = new Set(vetoRecords.keys());
  const exclusions = read('EXCLUDED_BOOKS.md').split(/\r?\n/).filter(l => l.startsWith('- ')).map(l => clean(l.slice(2)));
  assert.deepEqual(exclusions, compiled.exclusions.map(b => clean((b.line || `- ${b.title}${b.author ? ' — ' + b.author : ''}`).replace(/^- /, ''))),
    'Excluded ledger membership differs from the reviewed catalog.');
  const categories = json('site/exclusion-categories.json');
  const categoryNames = ['Mathematics, Physics, Science', 'Technology, Engineering, Innovation', 'Computing, IT', 'Business, Economy, Geostrategy', 'Misc. Non-fiction', 'Fiction'];
  assert.deepEqual(Object.keys(categories).sort(), compiled.exclusions.map(b => b.id).sort(), 'Every excluded book needs one category');
  for (const category of Object.values(categories)) assert(categoryNames.includes(category), 'Invalid exclusion category');
  const excludedGroups = categoryNames.map(name => ({ name, books: compiled.exclusions.filter(b => categories[b.id] === name)
    .map(b => clean((b.line || `- ${b.title}${b.author ? ' — ' + b.author : ''}`).replace(/^- /, '')))
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })) }));
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
    const sources = [...new Set(row[ledgerColumn(ledgerHeaders.includes('Sources') ? 'Sources' : 'Source')].match(/\d+/g).map(Number))].sort((a, c) => a - c);
    sources.forEach(id => assert(sourceMap[id], `Unknown source ${id}`));
    const extra = { ...(enrichment.books[b.id] || {}) }, values = Object.fromEntries(REGISTRY.map(r => [r.id, null]));
    extra.edition ||= editions[b.id];
    assert.equal(row[ledgerColumn('Pages (edition)')],pageCell(extra.edition), `Recommended page-count mismatch: ${b.id}`);
    assert.equal(row[ledgerColumn('Amazon ratings')],ratingCell(b.amazon), `Recommended rating-count mismatch: ${b.id}`);
    if (ledgerHeaders.includes('Reference pages')) {
      const rp = referencePages[b.id];
      assert.equal(row[ledgerColumn('Reference pages')],rp.pages === null ? 'Unknown' : `[${rp.pages}](${rp.url})`, `Recommended reference-page mismatch: ${b.id}`);
    }
    REGISTRY.slice(0, 10).forEach((r, i) => { assert(b.raw[i] >= 0 && b.raw[i] <= r.max); values[r.id] = b.raw[i]; });
    Object.assign(values, { T11: -b.T11 / 10, T12: -b.T12 / 10, SRC: sources.length, O15: b.amazon?.count ?? null, PG: extra.edition?.pages ?? null, RP: referencePages[b.id].pages });
    Object.assign(values, bonusValues(values.SRC, values.PG, values.RP));
    for (const id of ['REL','RD']) {
      assert.equal(b.bonuses[id], values[id] ?? 0, `${b.id}: stale ${id} bonus`);
      assert.equal(row[ledgerColumn(id === 'REL' ? 'Relevance' : 'R&D')], format(b.bonuses[id]), `${b.id}: bonus ledger mismatch`);
    }
    for (const id of DOMAIN_IDS) {
      const e = extra.domains?.[id]; if (!e) continue;
      assert(Number.isInteger(e.value) && e.value >= 0 && e.value <= 4 && e.refs?.length && e.rationale && ['high', 'moderate', 'low'].includes(e.confidence));
      values[id] = e.value;
    }
    if (extra.edition) assert(Number.isInteger(extra.edition.pages) && extra.edition.pages > 0 && extra.edition.id &&
      safeURL(extra.edition.url) && extra.edition.retrieved && extra.edition.language && extra.edition.format && (extra.edition.year === null || Number.isInteger(extra.edition.year)));
    const evidence = {};
    REGISTRY.slice(0, 10).forEach((r, i) => {
      const c = b.criteria?.find(c => c.code === r.id);
      evidence[r.id] = { rationale: c?.assessment || b.notes?.[i] || 'Retained current repository assessment.', confidence: b.evidenceConfidence || b.confidence || b.scoreConfidence || 'moderate', refs: [analysisPath(b.reviewAnchor || b.currentReview || b.priorReport)].filter(Boolean) };
      if (r.id === 'D') {
        evidence.D.confidence = b.densityAssessment?.confidence || 'low';
        evidence.D.rationale = (b.densityAssessment ? 'Reviewed learning yield. ' : 'Prior estimate; not recalibrated under the learning-yield protocol. ') + evidence.D.rationale;
        if (b.densityAssessment) evidence.D.refs = b.densityAssessment.refs;
      }
    });
    Object.assign(evidence, extra.domains || {});
    const rp = referencePages[b.id];
    evidence.RP = { confidence: rp.confidence, refs: [rp.url].filter(Boolean),
      rationale: rp.pages === null ? rp.reason : `${rp.pages} documented reference pages in ${rp.edition.id}: ${(rp.ranges?.map(s=>`${s.label} ${s.start}–${s.end}`) || rp.documentedCounts.map(s=>`${s.label}: ${s.pages} pages`)).join('; ')}. ${rp.sameEditionAsPG ? 'Same edition as the length field.' : 'R&D uses these available counts as an estimate; matching editions are not confirmed.'} ${rp.limitation}` };
    evidence.REL = {confidence:'high', refs:[b.scoreReview], rationale:`${sources.length} distinct recorded sources; 2 × √(${sources.length} − 1) = ${format(values.REL)} points. Source coverage is not independent evidence of quality.`};
    evidence.RD = {confidence:b.bonusAssessment.confidence, refs:[b.scoreReview, rp.url, extra.edition?.url].filter(Boolean), rationale:b.bonusAssessment.reason};
    if(b.ratingReview) evidence.O15={rationale:b.amazon.status,confidence:b.amazon.confidence,refs:[b.ratingReview.analysis,b.amazon.url]};
    if (extra.edition) evidence.PG = {
      rationale: `${extra.edition.pages} pages in ${extra.edition.id}; ${extra.edition.language}, ${extra.edition.format}, edition year ${extra.edition.year ?? 'unknown'}. ${extra.edition.notes || extra.edition.note || ''}`,
      confidence: extra.edition.confidence || 'moderate', refs: [extra.edition.url]
    };
    const book = {
      id: b.id, title: titleOf(row[3]), author: row[2], year: b.year, entryDate: row[0], purchaseUrl: safeURL(link(row[3])),
      subtitle: b.subtitle || '', sources, values, periodEnd: b.periodEnd, scope: b.periodEnd === null ? 'No numeric historical endpoint; see assessment' : 'Central historical period',
      scopeNote: [b.yearNote || b.production?.note, b.periodNote || b.assessment?.note || b.theme].filter(Boolean).join(' '), confidence: b.confidence || b.scoreConfidence || 'moderate',
      yearConfidence: b.yearConfidence || b.production?.confidence || 'moderate', periodConfidence: b.periodConfidence || 'moderate',
      verdict: b.verdict || '', evidence, analysis: analysisPath(b.reviewAnchor || b.currentReview || b.priorReport),
      amazon: { count: values.O15, url: safeURL(b.amazon?.url), marketplace: b.amazon?.marketplace || '', product: b.amazon?.asin || b.amazon?.productIdentifier || b.amazon?.product || '', retrieved: b.amazon?.verifiedAt || b.amazon?.retrievedAt || b.amazon?.retrieved || b.amazon?.attemptedAt || '', limitations: b.amazon?.status || 'See source assessment.' },
      reader: b.reader || '', edition: extra.edition || null, research: extra.research || null, ratingReview: b.ratingReview?.analysis || '',
      referencePages: rp, scoreReview: b.scoreReview,
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
  return { version: 2, modelVersion: 3, reviewYear: 2026, datasetHash: hash, generated: new Date().toISOString(), books, vetoed, excluded: exclusions, excludedGroups, sources: sourceMap, issues, documents,
    coverage: {
      books: books.length, pages: books.filter(b => b.edition).length,
      referencePages: books.filter(b => known(b.values.RP)).length,
      domains: books.filter(b => DOMAIN_IDS.every(id => known(b.values[id]))).length,
      domainBooks: books.filter(b => DOMAIN_IDS.some(id => known(b.values[id]))).length,
      domainValues: books.reduce((n,b) => n + DOMAIN_IDS.filter(id => known(b.values[id])).length, 0),
      reviewed: books.filter(b => b.research).length,
      mechanisms: books.reduce((n,b) => n + b.connections.mechanisms.length, 0),
      connections: books.filter(b => b.connections.status === 'complete').length
    } };
}
// Explicit page schema: research archives stay in the repository, not the browser.
export function portableDataset(dataset) {
  const pick = (value, keys) => value == null ? value : Object.fromEntries(keys.split(' ').filter(k => k in value).map(k => [k, value[k]]));
  const edition = value => pick(value, 'pages id url retrieved language format year confidence notes');
  return {
    ...pick(dataset, 'reviewYear datasetHash generated coverage sources excludedGroups'),
    books: dataset.books.map(b => ({
      ...pick(b, 'id title author year purchaseUrl subtitle sources values periodEnd scope scopeNote confidence yearConfidence periodConfidence verdict analysis amazon reader ratingReview scoreReview base ledgerMismatch search sortKey'),
      edition: edition(b.edition),
      connections: pick(b.connections, 'status mechanisms joins limitations'),
      evidence: Object.fromEntries(Object.entries(b.evidence).map(([id, e]) => [id, pick(e, 'rationale confidence refs')])),
      research: b.research && {
        ...pick(b.research, 'reviewed domainBasis unknownDomains unknownReason pageReason amazonReviewReason'),
        primaryReview: pick(b.research.primaryReview, 'method limitations'),
        newAmazonObservation: pick(b.research.newAmazonObservation, 'count url marketplace product retrieved confidence limitations')
      }
    })),
    vetoed: dataset.vetoed.map(b => ({
      ...pick(b, 'id title author year score sourceCount veto confidence sources analysis purchaseUrl ratingReview scoreReview bonuses amazon reason'),
      edition: edition(b.edition),
      bonusAssessment: pick(b.bonusAssessment, 'reason'),
      referencePages: {
        ...pick(b.referencePages, 'pages confidence url limitation reason'),
        edition: pick(b.referencePages.edition, 'id'),
        ranges: b.referencePages.ranges?.map(r => pick(r, 'label start end'))
      }
    }))
  };
}
export function build() {
  const dataset = buildDataset();
  // Keep displayed evidence offline; full historical reports stay in the repository.
  const portable = portableDataset(dataset);
  const payload = gzipSync(JSON.stringify(portable), { level: 9 }).toString('base64');
  const model = read('site/model.mjs').replace(/^export /gm, '');
  const rules = read('AGENTS.md'), escape = text => text.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
  const rule = (heading, prefix) => {
    const section = rules.split(heading)[1]?.split('\n## ')[0];
    const line = section?.split(/(?:^|\r?\n)\d+\. /).map(line => line.split(/\r?\n\s*\r?\n/)[0].replace(/\r?\n/g, ' ').trim()).find(line => line.startsWith(prefix));
    assert(line, `Missing ${heading} rule: ${prefix}`);
    return escape(line);
  };
  const html = read('site/template.html')
    .replace('/* METHODOLOGY */', () => read('site/methodology.html')
      .replace('/* CRITERIA */', () => REGISTRY.slice(0,10).map(r=>`<tr><td>${r.name}</td><td>${r.max}</td><td>${r.quadratic?'Quadratic':'Linear'}</td><td>${r.description}</td></tr>`).join(''))
      .replace('/* BOOK_FORM */', () => rule('## Hard exclusion rules', 'Works which do not represent a book'))
      .replace('/* FICTION */', () => rule('## Hard exclusion rules', 'Exclude all fiction'))
      .replace('/* REFERENCE */', () => rule('## Hard exclusion rules', 'Technical training and reference exclusion'))
      .replace('/* LANGUAGE */', () => rule('## Hard exclusion rules', 'Exclude books not available in English or Croatian'))
      .replace('/* H5 */', () => rule('## Hard exclusion rules', 'Exclude children books'))
      .replace('/* H6 */', () => rule('## Hard exclusion rules', 'Exclude dry and routine'))
      .replace('/* H7 */', () => rule('## Hard exclusion rules', 'Exclude books primarily devoted to art appreciation'))
      .replace('/* V4 */', () => rule('## Veto rules', 'Hype or ephemerality dependence'))
      .replace('/* V5 */', () => rule('## Veto rules', 'Religious doctrine or ideological extremism'))
      .replace('/* V6 */', () => rule('## Veto rules', 'Partisan mobilization'))
      .replace('/* V7 */', () => rule('## Veto rules', 'Spirituality, meditation'))
      .replace('/* V8 */', () => rule('## Veto rules', 'Veto works whose central purpose'))
      .replace('/* V9 */', () => rule('## Veto rules', 'Highly disputed foundations'))
      .replace('/* RULES */', () => escape(rules)))
    .replace('/* STYLES */', () => read('site/style.css'))
    .replace('/* DATA */', () => payload)
    .replace('/* APPLICATION */', () => model + '\n' + read('site/app.js'));
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  assert(Buffer.byteLength(html) <= 1500 * (dataset.books.length + dataset.vetoed.length), 'Standalone HTML exceeds 1,500 bytes per recommended or vetoed book.');
  fs.writeFileSync(HTML_FILE, html);
  fs.writeFileSync(path.join(OUTPUT_DIR, '.nojekyll'), '');
  console.log(`Built docs/index.html: ${dataset.books.length} books, ${Buffer.byteLength(html).toLocaleString('en')} bytes, dataset ${dataset.datasetHash}`);
  return dataset;
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) build();
