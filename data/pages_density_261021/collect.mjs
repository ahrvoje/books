import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(DIR, '../..');
const books = JSON.parse(fs.readFileSync(path.join(ROOT, JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'))).compiled))).currentBooks;
fs.mkdirSync(path.join(DIR, 'raw'), { recursive: true });
const statePath = path.join(DIR, 'progress.json');
const state = fs.existsSync(statePath) ? JSON.parse(fs.readFileSync(statePath)) : { version: 1, books: {} };
const clean = x => String(x || '').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([a-f\d]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, ' ').replace(/<[^>]+>/g, ' ').replace(/[\u200e\u200f\u202a-\u202e]/g, '').replace(/\s+/g, ' ').trim();
const norm = x => clean(x).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/behaviour/g, 'behavior').replace(/civilisation/g, 'civilization').replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, ' ').trim();
const tokens = x => norm(x).split(' ').filter(x => x.length > 1 && !['the', 'and', 'of', 'in', 'to', 'an', 'a'].includes(x));
const simpleTitle = x => x.split(/:| — /)[0].replace(/\s*\((?:version unresolved|.*edition.*|.*series.*)\)/gi, '').trim();
function titleMatches(expected, observed) {
  if (/\b(summary|study guide|workbook|analysis of|overview of)\b/i.test(observed) && !/\b(summary|study guide|workbook|analysis of|overview of)\b/i.test(expected)) return false;
  if (/\b(abridged|condensed|adapted|young readers?|children(?:'s)? edition)\b/i.test(observed) && !/\b(abridged|condensed|adapted|young readers?|children(?:'s)? edition)\b/i.test(expected)) return false;
  const volume = x => [...norm(x).matchAll(/\b(?:volume|vol|part|book) ([1-9][0-9]*|[ivx]+)\b/g)].map(m => m[1]).join(',');
  const ev = volume(expected), ov = volume(observed);
  if (ev && ov && ev !== ov) return false;
  if (!ev && ov && /\bvolume|vol\.|part\b/i.test(observed) && !/\bseries|trilogy|volumes\b/i.test(expected) &&
    !/\bStory of Civilization|Routledge Classics|Very Short Introduction\b/i.test(observed)) return false;
  // A shared series title cannot override conflicting volume subtitles.
  const expectedSubtitle = expected.split(':').slice(1).join(':'), observedSubtitle = observed.split(':').slice(1).join(':');
  if (expectedSubtitle) {
    const a = tokens(expectedSubtitle), b = tokens(observedSubtitle || observed);
    if (a.length >= 2 && a.filter(t => b.includes(t)).length / a.length < 0.45) return false;
  }
  return expected.split(' / ').some(alias => {
    const titleTokens = x => norm(x).split(' ').filter(x => x && !['the', 'and', 'of', 'in', 'to', 'an', 'a'].includes(x));
    const a = titleTokens(simpleTitle(alias)), b = titleTokens(simpleTitle(observed));
    if (!a.length || !b.length) return false;
    const hits = a.filter(t => b.includes(t)).length;
    return (hits / a.length >= 0.9 && hits / b.length >= 0.8) ||
      (a.length >= 2 && b.slice(0, a.length).join(' ') === a.join(' '));
  });
}
function authorMatches(expected, observed) {
  const names = expected.split(/;| and | & /).map(x => norm(x.replace(/\([^)]*\)/g, '')).split(' ').filter(x => !['jr', 'sr', 'et', 'al', 'editor', 'editors'].includes(x))).filter(x => x.length);
  const obs = tokens(observed);
  return names.some(n => {
    const last = n.at(-1);
    return last.length >= 3 && obs.includes(last) && (n.length === 1 || n[0].length === 1 || obs.includes(n[0]) || obs.some(t => t[0] === n[0][0]));
  });
}
function identity(b, title, author) {
  return { titleMatch: titleMatches(b.title, title), authorMatch: authorMatches(b.author, author) };
}
function products(b) {
  return [...new Set([b.amazon?.asin, ...[b.amazon?.url, b.titleCell, b.purchaseUrl].flatMap(x => [...String(x || '').matchAll(/(?:dp|product)\/([A-Z0-9]{10})/gi)].map(m => m[1]))].filter(Boolean))];
}
function isISBN(s) {
  if (/^\d{9}[\dX]$/i.test(s)) return [...s].reduce((a, c, i) => a + (c.toUpperCase() === 'X' ? 10 : +c) * (10 - i), 0) % 11 === 0;
  if (/^\d{13}$/.test(s)) return [...s].reduce((a, c, i) => a + +c * (i % 2 ? 3 : 1), 0) % 10 === 0;
  return false;
}
function canonicalISBN(value) {
  const s = String(value || '').replace(/[^0-9X]/gi, '').toUpperCase();
  if (!isISBN(s)) return s;
  if (s.length === 13) return s;
  const base = '978' + s.slice(0, 9), sum = [...base].reduce((a, c, i) => a + +c * (i % 2 ? 3 : 1), 0);
  return base + ((10 - sum % 10) % 10);
}
function isbns(b) {
  return [...new Set([b.isbn13, b.isbn, ...products(b)].filter(x => typeof x === 'string' && isISBN(x)))];
}
for (const b of books) state.books[b.id] ||= { id: b.id, title: b.title, author: b.author, edition: null, attempts: [] };
function save() {
  state.updated = new Date().toISOString();
  const completed = Object.values(state.books).filter(x => x.edition);
  state.counts = { total: books.length, pages: completed.length, remaining: books.length - completed.length, attempted: Object.values(state.books).filter(x => x.attempts.length).length };
  fs.writeFileSync(statePath, JSON.stringify(state, null, 2) + '\n');
  fs.writeFileSync(path.join(DIR, 'pages.json'), JSON.stringify(Object.fromEntries(books.map(b => [b.id, { edition: state.books[b.id].edition, reason: state.books[b.id].edition ? null : state.books[b.id].reason || 'Collection pending.' }])), null, 2) + '\n');
}
function log(stage) { save(); console.log(JSON.stringify({ stage, ...state.counts })); }
const sleep = ms => new Promise(r => setTimeout(r, ms));
let lastOL = 0;
async function retrieve(url, prefix, kind = 'json') {
  if (url.includes('openlibrary.org')) { await sleep(Math.max(0, 1100 - (Date.now() - lastOL))); lastOL = Date.now(); }
  const requested = new Date().toISOString();
  const key = crypto.createHash('sha256').update(url).digest('hex').slice(0, 16);
  const file = `raw/${prefix}-${key}.${kind === 'json' ? 'json' : 'html.gz'}`;
  const meta = { url, retrieved: requested, rawFile: file };
  const metaPath = path.join(DIR, file + '.meta.json');
  if (fs.existsSync(metaPath) && fs.existsSync(path.join(DIR, file))) {
    const prior = JSON.parse(fs.readFileSync(metaPath));
    if (prior.status === 200) return { ...prior, data: kind === 'json' ? JSON.parse(fs.readFileSync(path.join(DIR, file))) : zlib.gunzipSync(fs.readFileSync(path.join(DIR, file))).toString() };
  }
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(25000), headers: { 'User-Agent': 'PersonalBookCatalogResearch/1.0' } });
    const text = await response.text();
    Object.assign(meta, { url: response.url, status: response.status, sha256: crypto.createHash('sha256').update(text).digest('hex') });
    fs.writeFileSync(path.join(DIR, file), kind === 'json' ? text : zlib.gzipSync(text));
    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
    return { ...meta, data: kind === 'json' ? JSON.parse(text) : text };
  } catch (e) {
    meta.error = e.message; fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2)); return meta;
  }
}
function yearOf(s) { const ys = [...String(s || '').matchAll(/\b(1[0-9]{3}|20[0-2][0-9])\b/g)]; return ys.length ? +ys.at(-1)[0] : null; }
function acceptOL(b, found, source, queriedISBN) {
  const d = found?.details;
  if (!d) return { accepted: false, reason: 'No edition record.' };
  if (['q0220', 'q0484'].includes(b.id)) return { accepted: false, reason: 'Series nomination requires a verified complete-set page total; an individual volume cannot supply PG.' };
  const title = [d.title, d.subtitle].filter(Boolean).join(': ');
  let author = (d.authors || []).map(x => x.name || '').filter(Boolean).join('; ') || d.by_statement || '';
  const priorAmazon = queriedISBN && canonicalISBN(b.amazon?.asin) === canonicalISBN(queriedISBN) && b.amazon?.verifiedAt &&
    titleMatches(b.title, b.amazon.productTitle || '') && authorMatches(b.author, b.amazon.byline || '');
  const usedPriorAuthor = !author && priorAmazon;
  if (usedPriorAuthor) author = b.amazon.byline;
  const checks = identity(b, title, author);
  const pages = d.number_of_pages, year = yearOf(d.publish_date);
  const language = (d.languages || []).map(x => x.key?.split('/').pop()).filter(Boolean).join(', ');
  const idMatch = !queriedISBN || [...(d.isbn_10 || []), ...(d.isbn_13 || [])].some(x => canonicalISBN(x) === canonicalISBN(queriedISBN));
  const audio = /audio|cassette|mp3|compact disc|cd-rom|sound recording/i.test([d.physical_format, d.pagination, ...(d.publishers || [])].join(' '));
  const accepted = !audio && checks.titleMatch && checks.authorMatch && idMatch && Number.isInteger(pages) && pages >= 16 && pages < 10000 && year !== null;
  if (accepted) {
    state.books[b.id].edition = {
      pages, id: queriedISBN ? `ISBN:${queriedISBN}` : d.key?.split('/').pop(), url: String(found.info_url || `https://openlibrary.org${d.key}`).replace(/^http:/, 'https:'),
      retrieved: source.retrieved, language: language === 'eng' ? 'English' : language || 'Not stated by source',
      format: d.physical_format || (priorAmazon ? b.amazon.byline.match(/\bFormat:\s*(Hardcover|Paperback|Kindle(?: Edition)?|Mass Market Paperback|Leather Bound|Audio CD|Audiobook|Spiral-bound)/i)?.[1] : null) || 'Not stated by source', year, confidence: 'moderate',
      title, authors: author, publisher: (d.publishers || []).join('; '), isbn10: d.isbn_10 || [], isbn13: d.isbn_13 || [],
      notes: `Exact catalogued edition. Page count is number_of_pages, not a work-level median. ${d.pagination ? `Source pagination: ${d.pagination}. ` : ''}${!language ? 'Language is not recorded. ' : ''}${usedPriorAuthor ? 'Author identity is corroborated by the existing verified Amazon snapshot for the same ISBN. ' : ''}Source: ${source.rawFile}`,
      source: { provider: 'Open Library', api: source.url, rawFile: `data/pages_density_261021/${source.rawFile}`, sha256: source.sha256, editionKey: d.key, ...(priorAmazon ? { corroboration: { url: b.amazon.url, retrieved: b.amazon.verifiedAt, title: b.amazon.productTitle, byline: b.amazon.byline } } : {}) }
    };
  }
  return { accepted, title, author, pages: pages ?? null, year, language, idMatch, ...checks, reason: accepted ? 'Matched exact edition.' : audio ? 'Audio edition: catalog number_of_pages is not a print page count.' : !checks.titleMatch || !checks.authorMatch || !idMatch ? 'Edition identity mismatch or insufficient author/title evidence.' : !pages ? 'Edition has no page count.' : !year ? 'Edition year is not recorded.' : 'Implausible page count needs specific verification.' };
}
async function openLibraryISBN() {
  const keys = [...new Set(books.filter(b => !state.books[b.id].edition).flatMap(isbns))];
  for (let i = 0; i < keys.length; i += 35) {
    const group = keys.slice(i, i + 35), query = group.map(x => 'ISBN:' + x).join(',');
    const source = await retrieve(`https://openlibrary.org/api/books?bibkeys=${query}&jscmd=details&format=json`, `ol-isbn-${i}`);
    for (const b of books.filter(b => isbns(b).some(x => group.includes(x)))) {
      const s = state.books[b.id];
      for (const isbn of isbns(b).filter(x => group.includes(x))) {
        if (s.attempts.some(a => a.kind === 'ol-isbn' && a.isbn === isbn)) continue;
        const check = source.status === 200 ? acceptOL(b, source.data?.['ISBN:' + isbn], source, isbn) : { accepted: false, reason: source.error || `HTTP ${source.status}` };
        s.attempts.push({ kind: 'ol-isbn', isbn, rawFile: source.rawFile, retrieved: source.retrieved, ...check });
        if (!s.edition) s.reason = check.reason;
      }
    }
    log(`Open Library ISBN ${Math.min(i + 35, keys.length)}/${keys.length}`);
  }
  for (const b of books.filter(b => !isbns(b).length)) {
    const s = state.books[b.id];
    if (!s.attempts.some(a => a.kind === 'ol-isbn')) s.attempts.push({ kind: 'ol-isbn', accepted: false, reason: 'No valid ISBN in source records.', retrieved: new Date().toISOString() });
  }
  log('Open Library ISBN complete');
}
function amazonFields(html) {
  const fields = {};
  for (const m of html.matchAll(/id="rpi-attribute-([^"]+)"[\s\S]*?class="[^"]*rpi-attribute-value[^"]*">([\s\S]*?)<\/div>/g)) fields[m[1]] = clean(m[2]);
  const block = html.match(/id="detailBullets_feature_div"[\s\S]*?<\/ul>/)?.[0] || '';
  for (const m of block.matchAll(/<li>[\s\S]*?<span class="a-text-bold">([\s\S]*?)<\/span>([\s\S]*?)<\/li>/g)) fields[clean(m[1]).replace(/\s*:\s*$/, '')] = clean(m[2]);
  const title = clean(html.match(/id="productTitle"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
  const byline = clean(html.match(/id="bylineInfo"[^>]*>([\s\S]*?)<\/div>/)?.[1]);
  const format = byline.match(/\bFormat:\s*(Hardcover|Paperback|Kindle(?: Edition)?|Mass Market Paperback|Leather Bound|Audio CD|Audiobook|Spiral-bound)/i)?.[1] ||
    clean(html.match(/id="productSubtitle"[^>]*>([\s\S]*?)<\/span>/)?.[1]).match(/Hardcover|Paperback|Kindle(?: Edition)?|Mass Market Paperback|Leather Bound|Audio CD|Audiobook|Spiral-bound/i)?.[0];
  const pagesText = fields['book_details-fiona_pages'] || fields['Print length'] || fields['Paperback'] || fields['Hardcover'];
  const pages = pagesText?.match(/([\d,]+)\s*pages?/i)?.[1];
  const date = fields['book_details-publication_date'] || fields['Publication date'] || fields['Publisher'];
  const landing = html.match(/<input\b(?=[^>]*(?:name|id)="landingAsinValue")[^>]*>/)?.[0] || html.match(/<input\b(?=[^>]*(?:name|id)="ASIN")[^>]*>/)?.[0];
  const productId = landing?.match(/value="([A-Z0-9]{10})"/i)?.[1];
  return { title, byline, format, productId, pages: pages ? +pages.replace(/,/g, '') : null, language: fields.language || fields.Language, year: yearOf(date), isbn10: fields['book_details-isbn10'] || fields['ISBN-10'], isbn13: fields['book_details-isbn13'] || fields['ISBN-13'], fields };
}
async function amazon(metadata = false) {
  if (state.serviceLimits?.amazon) {
    console.log('Amazon collection is paused after a public CAPTCHA/Server Busy response. Review service availability before clearing this recorded stop condition.');
    return;
  }
  const pending = books.filter(b => !state.books[b.id].edition || metadata && [state.books[b.id].edition.language, state.books[b.id].edition.format].includes('Not stated by source'));
  let cursor = 0, done = 0, nextRequest = 0, blocked = false;
  await Promise.all(Array.from({ length: 3 }, async () => {
    while (cursor < pending.length && !blocked) {
      const b = pending[cursor++], s = state.books[b.id], ids = products(b).slice(0, 2);
      let acceptedHere = false;
      if (!ids.length && !s.attempts.some(a => a.kind === 'amazon')) s.attempts.push({ kind: 'amazon', reason: 'No exact product identifier.', accepted: false, retrieved: new Date().toISOString() });
      for (const id of ids) {
        if (acceptedHere) break;
        for (const host of ['www.amazon.com.au', 'www.amazon.com']) {
          if (acceptedHere || blocked) break;
          const url = `https://${host}/dp/${id}`;
          if (s.attempts.some(a => a.kind === 'amazon' && a.url === url)) continue;
          const scheduled = Math.max(Date.now(), nextRequest); nextRequest = scheduled + 1100;
          await sleep(scheduled - Date.now());
          if (blocked) break;
          const source = await retrieve(url, `amazon-${b.id}-${id}-${host}`, 'html'), f = amazonFields(source.data || ''), checks = identity(b, f.title, f.byline);
          if (/validateCaptcha|Robot Check|Server Busy/i.test(source.data || '')) {
            blocked = true;
            state.serviceLimits ||= {};
            state.serviceLimits.amazon = 'Public product response returned CAPTCHA/Server Busy. Collection stopped; no challenge bypassed.';
          }
          const accepted = !['q0220', 'q0484'].includes(b.id) && source.status === 200 && checks.titleMatch && checks.authorMatch && Number.isInteger(f.pages) && f.pages > 0 && f.pages < 10000 && f.year !== null && f.language && f.format && !/Audio/i.test(f.format);
          s.attempts.push({ kind: 'amazon', url, retrieved: source.retrieved, rawFile: source.rawFile, status: source.status, ...f, ...checks, accepted: !!accepted, reason: accepted ? 'Product title, author, pages, language, format and edition year observed together.' : source.error || 'No complete matching edition metadata.' });
          if (accepted) { acceptedHere = true; s.edition = {
            pages: f.pages, id: `ASIN:${f.productId || source.url.match(/\/dp\/([A-Z0-9]{10})/i)?.[1] || id}`, url: source.url, retrieved: source.retrieved, language: f.language, format: f.format, year: f.year, confidence: 'high', title: f.title, authors: f.byline,
            isbn10: f.isbn10 ? [f.isbn10.replace(/[^0-9X]/gi, '')] : [], isbn13: f.isbn13 ? [f.isbn13.replace(/\D/g, '')] : [],
            notes: 'Page count and edition metadata observed on the same matching product page. Other editions can have different pagination.',
            source: { provider: host, rawFile: `data/pages_density_261021/${source.rawFile}`, sha256: source.sha256 }
          }; }
          else if (!s.edition) s.reason = !checks.titleMatch || !checks.authorMatch ? 'Product identity could not be verified.' : 'Matching product page did not expose all required edition metadata.';
        }
      }
      done++; if (done % 20 === 0 || done === pending.length) log(`Amazon ${done}/${pending.length}`);
    }
  }));
  log(blocked ? 'Amazon stopped at public access challenge' : 'Amazon complete');
}
const stage = path.resolve(process.argv[1] || '') === fileURLToPath(import.meta.url) ? process.argv[2] || 'isbn' : 'library';
if (stage === 'isbn') await openLibraryISBN();
if (stage === 'amazon') await amazon();
if (stage === 'amazon-metadata') await amazon(true);
if (stage === 'audit') log('audit');
if (stage === 'reconcile') {
  const cache = new Map();
  for (const b of books.filter(b => !state.books[b.id].edition)) for (const a of state.books[b.id].attempts.filter(x => x.kind === 'ol-isbn')) {
    if (!a.rawFile) continue;
    if (!cache.has(a.rawFile)) cache.set(a.rawFile, { data: JSON.parse(fs.readFileSync(path.join(DIR, a.rawFile))), ...JSON.parse(fs.readFileSync(path.join(DIR, a.rawFile + '.meta.json'))) });
    const source = cache.get(a.rawFile), wasKnown = !!state.books[b.id].edition;
    const check = acceptOL(b, source.data?.['ISBN:' + a.isbn], source, a.isbn);
    Object.assign(a, check);
    if (!wasKnown && !state.books[b.id].edition) state.books[b.id].reason = check.reason;
  }
  log('Reconciled ISBN-10/13 equivalents and exact prior identity evidence');
}
export { books, state, save, log, retrieve, acceptOL, titleMatches, authorMatches, amazonFields, products, isbns, clean, norm, DIR, ROOT };
