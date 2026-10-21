import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import zlib from 'node:zlib';
import { state, save, DIR, clean } from './collect.mjs';

function source(prefix) {
  const file = fs.readdirSync(path.join(DIR, 'raw')).find(f => f.startsWith(prefix + '-') && f.endsWith('.html.gz'));
  const meta = JSON.parse(fs.readFileSync(path.join(DIR, 'raw', file + '.meta.json')));
  const html = zlib.gunzipSync(fs.readFileSync(path.join(DIR, 'raw', file))).toString();
  assert.equal(meta.status, 200);
  return { ...meta, text: clean(html), rawFile: `data/enrichment_261020/pages/raw/${file}` };
}
function apply(id, edition, rationale, sourceRecords) {
  const b = state.books[id];
  b.attempts.push({ kind: 'manual-primary-source-review', retrieved: new Date().toISOString(), accepted: true, reason: rationale, previousEdition: b.edition, sources: sourceRecords.map(({ text, ...x }) => x) });
  b.edition = edition;
  b.reason = null;
}
const mit = source('manual-0');
assert(mit.text.includes('9780262536165') && mit.text.includes('568 pp.') && mit.text.includes('November 13, 2018') && mit.text.includes('May 12, 2017'));
apply('energy', {
  pages: 568, id: 'ISBN:9780262536165', url: mit.url, retrieved: mit.retrieved,
  language: 'English', format: 'Paperback', year: 2018, confidence: 'high', title: 'Energy and Civilization: A History', authors: 'Vaclav Smil',
  isbn13: ['9780262536165'], isbn10: ['0262536161'],
  notes: 'MIT Press lists 568 pages for this paperback. Prefer the publisher total over the catalog record of 562 numbered pages. Hardcover original publication is 2017; repository original-year1994 is retained for baseline fidelity but requires identity/year review.',
  source: { provider: 'MIT Press', rawFile: mit.rawFile, sha256: mit.sha256 },
  originalYearEvidence: { year: 2017, url: mit.url, basis: 'Publisher hardcover publication date: 12 May2017', confidence: 'high' }
}, 'Publisher page total and original-year conflict checked.', [mit]);

const set = source('manual-2'), setProduct = source('manual-3');
assert(set.text.includes('four-volume hardcover set') && set.text.includes('9780385351478'));
const caro = [
  ['The Path to Power', '9780394499734', 912, 1982, source('manual-5')],
  ['Means of Ascent', '9780394528359', 560, 1990, source('manual-6')],
  ['Master of the Senate', '9780394528366', 1200, 2002, source('manual-7')],
  ['The Passage of Power', '9780679405078', 736, 2012, source('manual-8')]
];
for (const [title, isbn, pages, year, s] of caro) assert(s.text.includes(title) && s.text.includes(`${pages} Pages`) && s.text.includes(isbn) && s.text.includes(`${year}`));
assert.equal(caro.reduce((sum, x) => sum + x[2], 0), 3408);
apply('q0220', {
  pages: 3408, id: 'ISBN:9780385351478', url: set.url, retrieved: set.retrieved, language: 'English', format: 'Four-volume hardcover set', year: 2013,
  confidence: 'moderate', title: "Robert A. Caro's The Years of Lyndon Johnson Set", authors: 'Robert A. Caro', isbn13: ['9780385351478'], isbn10: ['038535147X'],
  notes: 'Derived sum for the four published narrative volumes in the publisher’s2013 set: 912+560+1200+736=3408 pages. Uses each specified Knopf hardcover edition, not one volume or a cross-edition median. The author’s planned fifth volume is not included; this represents the four-volume set available at review.',
  components: caro.map(([title, isbn, pages, year, s]) => ({ title, isbn, pages, year, url: s.url, rawFile: s.rawFile })),
  source: { provider: 'Penguin Random House / Knopf', rawFile: set.rawFile, sha256: set.sha256, method: 'Sum of publisher page counts of all four named hardcover volumes; set scope corroborated by the publisher.' }
}, 'All four currently published volumes have edition-specific publisher page counts; aggregate calculated explicitly.', [set, setProduct, ...caro.map(x => x[4])]);

const hillsdale = source('manual-1');
const churchill = [
  { volume: 1, title: 'Youth, 1874–1900', front: 36, text: 608, plates: 32, year: 2006 },
  { volume: 2, title: 'Young Statesman, 1901–1914', front: 30, text: 776, plates: 34, year: 2007 },
  { volume: 3, title: 'The Challenge of War, 1914–1916', front: 38, text: 988, plates: 34, year: 2007 },
  { volume: 4, title: 'World in Torment, 1916–1922', front: 16, text: 968, plates: 32, year: 2008 },
  { volume: 5, title: 'The Prophet of Truth, 1922–1939', front: 28, text: 1168, plates: 32, year: 2009 },
  { volume: 6, title: 'Finest Hour, 1939–1941', front: 20, text: 1308, plates: 26, year: 2011 },
  { volume: 7, title: 'Road to Victory, 1941–1945', front: 20, text: 1418, plates: 24, year: 2013 },
  { volume: 8, title: 'Never Despair, 1945–1965', front: 28, text: 1438, plates: 24, year: 2013 }
];
assert(hillsdale.text.includes('Hillsdale College Press editions retain the original pagination'));
for (const c of churchill) assert(hillsdale.text.includes(`${c.text} pp.`));
const total = churchill.reduce((sum, c) => sum + c.front + c.text + c.plates, 0);
assert.equal(total, 9126);
apply('q0484', {
  pages: total, id: 'Hillsdale:Winston-S-Churchill:narrative-volumes-I-VIII:2006-2013', url: hillsdale.url, retrieved: hillsdale.retrieved,
  language: 'English', format: 'Eight hardcover narrative volumes', year: 2013, confidence: 'moderate', title: 'Winston S. Churchill (official biography, eight narrative volumes)', authors: 'Randolph S. Churchill; Martin Gilbert',
  notes: 'Complete eight-volume narrative set, Hillsdale reprints2006–2013 retaining original pagination. Derived total9126 includes8672 main-numbered pages,216 preliminary pages and238 plate pages. Excludes all companion/document volumes. Edition year2013 is completion of this reprint set; it does not reset the original1966 work year.',
  components: churchill.map(c => ({ ...c, pages: c.front + c.text + c.plates })),
  source: { provider: 'Hillsdale College, The Churchill Project', rawFile: hillsdale.rawFile, sha256: hillsdale.sha256, method: 'Sum of separately enumerated preliminary, text and plate pages for all eight narrative volumes.' }
}, 'Complete-set pagination explicitly calculated from the publisher bibliography, including front matter and plates.', [hillsdale]);

const reich = [
  ['The Coming of the Third Reich', '9780143034698', 656, 2005, source('manual-9')],
  ['The Third Reich in Power', '9780143037903', 976, 2006, source('manual-10')],
  ['The Third Reich at War', '9780143116714', 960, 2010, source('manual-11')]
];
for (const [title, isbn, pages, year, s] of reich) assert(s.text.includes(title) && s.text.includes(`${pages} Pages`) && s.text.includes(isbn) && s.text.includes(`${year}`));
assert.equal(reich.reduce((sum, x) => sum + x[2], 0), 2592);
apply('q0123', {
  pages: 2592, id: 'ISBN-set:9780143034698+9780143037903+9780143116714', url: reich[0][4].url, retrieved: reich[0][4].retrieved,
  language: 'English', format: 'Three Penguin US paperback volumes', year: 2010, confidence: 'high', title: 'The Third Reich Trilogy (complete three-volume paperback collection)', authors: 'Richard J. Evans',
  notes: 'Sum of all three named Penguin US paperback editions:656+976+960=2592 pages. This is a specified collection of the three paperbacks, not the2008 limited hardcover giftset linked in the old ledger. Collection year2010 is the final paperback edition year and does not change original publication age.',
  components: reich.map(([title, isbn, pages, year, s]) => ({ title, isbn, pages, year, url: s.url, rawFile: s.rawFile })),
  source: { provider: 'Penguin Random House', rawFile: reich[0][4].rawFile, sha256: reich[0][4].sha256, method: 'Sum of all three edition-specific publisher page counts.' }
}, 'Complete trilogy scope established; all three specified paperback edition counts verified at the publisher.', reich.map(x => x[4]));

const publisherFixes = [
  ['q0560', 'A Short History of Nearly Everything', 'Bill Bryson', '9780767908184', 560, 2004, 'Paperback', source('manual-12')],
  ['q0395', 'Being Mortal', 'Atul Gawande', '9781250076229', 304, 2017, 'Trade paperback', source('manual-13')],
  ['q0400', "God, Human, Animal, Machine", "Meghan O'Gieblyn", '9780525562719', 304, 2022, 'Paperback', source('manual-15')],
  ['q0369', 'Doom Guy: Life in First Person', 'John Romero', '9781419770173', 384, 2024, 'Paperback', source('manual-16')]
];
for (const [id, title, author, isbn, pages, year, format, s] of publisherFixes) {
  assert(s.text.includes(isbn) && s.text.includes(String(pages)));
  apply(id, { pages, id: `ISBN:${isbn}`, url: s.url, retrieved: s.retrieved, language: 'English', format, year, confidence: 'high', title, authors: author, isbn13: [isbn],
    notes: 'Named English print edition and page total verified on the publisher page. Edition year does not replace original work year.',
    source: { provider: new URL(s.url).hostname, rawFile: s.rawFile, sha256: s.sha256 }
  }, 'Publisher edition facts independently checked by both research agents.', [s]);
}
const webFile = path.join(DIR, 'raw/manual-web-metadata.json'), webFacts = JSON.parse(fs.readFileSync(webFile));
for (const [id, b] of Object.entries(webFacts.books)) {
  apply(id, { pages: b.pages, id: `ISBN:${b.isbn13}`, url: b.url, retrieved: webFacts.retrieved, language: b.language, format: b.format, year: +b.publicationDate.slice(0, 4),
    confidence: id === 'q0434' ? 'high' : 'moderate', title: b.title, authors: b.author, isbn13: [b.isbn13], notes: `Edition metadata observed via web-page extraction. ${webFacts.method}`,
    source: { provider: new URL(b.url).hostname, rawFile: 'data/enrichment_261020/pages/raw/manual-web-metadata.json', method: 'Structured observations from rendered webpage; direct HTTP snapshot unavailable.' }
  }, 'Exact ISBN, page count, format, language, title, author and date checked in the rendered publisher/retailer page.', []);
}
save();
console.log(state.counts);
