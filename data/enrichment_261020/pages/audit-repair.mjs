import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { books, state, save, DIR, ROOT, acceptOL, amazonFields, titleMatches, authorMatches } from './collect.mjs';

const snapshot = path.join(DIR, 'before-audit.json');
if (!fs.existsSync(snapshot)) fs.writeFileSync(snapshot, JSON.stringify(state, null, 2));
const cache = new Map(), changes = [];
function raw(file) {
  const relative = file.replace(/^data\/enrichment_261020\/pages\//, '');
  if (!cache.has(relative)) {
    const buffer = fs.readFileSync(path.join(DIR, relative));
    const data = relative.endsWith('.gz') ? zlib.gunzipSync(buffer).toString() : JSON.parse(buffer);
    const meta = JSON.parse(fs.readFileSync(path.join(DIR, relative + '.meta.json')));
    cache.set(relative, { data, ...meta, rawFile: relative });
  }
  return cache.get(relative);
}
function amazonCandidate(b, source) {
  const f = amazonFields(source.data), titleMatch = titleMatches(b.title, f.title), authorMatch = authorMatches(b.author, f.byline);
  if (!titleMatch || !authorMatch || !f.pages || f.pages < 16 || !f.year || !f.language || !f.format || /audio|disc|cassette/i.test(f.format)) return null;
  if (['q0220', 'q0484', 'q0123'].includes(b.id)) return null;
  const product = f.productId || source.url.match(/\/dp\/([A-Z0-9]{10})/i)?.[1];
  if (!product) return null;
  return {
    pages: f.pages, id: `ASIN:${product}`, url: `https://${new URL(source.url).hostname}/dp/${product}`, retrieved: source.retrieved, language: f.language, format: f.format, year: f.year,
    confidence: 'high', title: f.title, authors: f.byline, isbn10: f.isbn10 ? [f.isbn10.replace(/[^0-9X]/gi, '')] : [], isbn13: f.isbn13 ? [f.isbn13.replace(/\D/g, '')] : [],
    notes: 'Page count, title, author, language, format and edition year observed on the same product page. Product ID verified from the landing page when available; original request URL retained in provenance.',
    source: { provider: new URL(source.url).hostname, rawFile: `data/enrichment_261020/pages/${source.rawFile}`, sha256: source.sha256, requestedUrl: source.url }
  };
}
for (const b of books) {
  const s = state.books[b.id], e = s.edition;
  if (!e) continue;
  let accepted = true, reason = '';
  if (e.source?.provider === 'Open Library') {
    const source = raw(e.source.rawFile), found = Object.values(source.data).find(x => x.details?.key === e.source.editionKey);
    const check = acceptOL(b, found, source, e.id.startsWith('ISBN:') ? e.id.slice(5) : undefined);
    accepted = check.accepted; reason = check.reason;
  } else if (/amazon\./.test(e.source?.provider || '')) {
    const replacement = amazonCandidate(b, raw(e.source.rawFile));
    accepted = !!replacement; reason = 'Strict title/subtitle, format, page-count or edition metadata audit rejected this candidate.';
    if (replacement) s.edition = replacement;
  }
  if (!accepted) {
    changes.push({ id: b.id, title: b.title, old: e, reason });
    s.attempts.push({ kind: 'strict-edition-audit', accepted: false, retrieved: new Date().toISOString(), reason, rejectedEdition: e });
    s.edition = null; s.reason = reason;
  }
}
// Revisit already downloaded alternatives that the first-success collector
// had not needed to evaluate. This performs no network calls.
for (const b of books.filter(b => !state.books[b.id].edition)) {
  const s = state.books[b.id];
  for (const a of s.attempts.filter(a => a.kind === 'amazon' && a.rawFile)) {
    const candidate = amazonCandidate(b, raw(a.rawFile));
    if (candidate) { s.edition = candidate; s.attempts.push({ kind: 'cached-product-recheck', rawFile: a.rawFile, accepted: true, retrieved: new Date().toISOString() }); break; }
  }
  if (s.edition) continue;
  for (const a of s.attempts.filter(a => a.kind === 'ol-isbn' && a.rawFile)) {
    const source = raw(a.rawFile), check = acceptOL(b, source.data?.['ISBN:' + a.isbn], source, a.isbn);
    if (check.accepted) { s.attempts.push({ kind: 'cached-isbn-recheck', rawFile: a.rawFile, accepted: true, retrieved: new Date().toISOString() }); break; }
  }
}
const selected = fs.existsSync(path.join(DIR, 'search-candidates.json')) ? JSON.parse(fs.readFileSync(path.join(DIR, 'search-candidates.json'))) : {};
const editionSources = fs.readdirSync(path.join(DIR, 'raw')).filter(f => /^ol-editions-.*\.json$/.test(f) && !f.endsWith('.meta.json'));
for (const file of editionSources) {
  const source = raw('raw/' + file);
  for (const [key, value] of Object.entries(source.data)) for (const id of selected[key.replace(/^OLID:/, '')] || []) {
    const s = state.books[id];
    if (s.edition) continue;
    const b = books.find(b => b.id === id), check = acceptOL(b, value, source);
    if (check.accepted) s.attempts.push({ kind: 'cached-alternative-recheck', editionKey: key, rawFile: source.rawFile, accepted: true, retrieved: new Date().toISOString() });
  }
}
for (const s of Object.values(state.books)) if (s.edition) s.reason = null;
state.serviceLimits = { amazon: 'Collection stopped after public product responses changed to Server Busy / CAPTCHA. No CAPTCHA was bypassed. Cached verified successes retained.', googleBooks: 'Public API returned quota exceeded429; no usable API quota.' };
save();
const report = {
  generated: new Date().toISOString(), counts: state.counts, rejected: changes,
  extremes: books.filter(b => state.books[b.id].edition && (state.books[b.id].edition.pages < 20 || state.books[b.id].edition.pages > 2000)).map(b => ({ id: b.id, title: b.title, author: b.author, edition: state.books[b.id].edition })),
  olderThanRepositoryYear: books.filter(b => state.books[b.id].edition && state.books[b.id].edition.year < b.year).map(b => ({ id: b.id, title: b.title, repositoryOriginalYear: b.year, edition: state.books[b.id].edition })),
  volumeCandidates: books.filter(b => state.books[b.id].edition && /\b(?:vol(?:ume)?\.?|part)\s*(?:[1-9]|[IVX])|\babridged|condensed|young readers/i.test(state.books[b.id].edition.title || '')).map(b => ({ id: b.id, title: b.title, author: b.author, edition: state.books[b.id].edition }))
};
fs.writeFileSync(path.join(DIR, 'identity-audit.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ counts: state.counts, rejected: changes.length, extremes: report.extremes.map(x => ({ id: x.id, title: x.title, pages: x.edition.pages })), olderYear: report.olderThanRepositoryYear.length, volumeCandidates: report.volumeCandidates.length }));
export { amazonCandidate };
