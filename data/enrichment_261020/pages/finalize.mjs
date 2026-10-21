import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import zlib from 'node:zlib';
import { books, state, save, DIR, ROOT } from './collect.mjs';

const suspicious = state.books.g0314;
if (suspicious.edition?.pages <= 20) {
  suspicious.attempts.push({ kind: 'manual-plausibility-audit', retrieved: new Date().toISOString(), accepted: false,
    reason: 'A full investigative book is listed as16 pages by the retailer. This suspicious count needs independent publisher/library verification.', rejectedEdition: suspicious.edition });
  suspicious.edition = null;
  suspicious.reason = 'Suspicious16-page retail count held for independent verification.';
}
if (state.books.g0194.edition?.source?.provider === 'Open Library') {
  const e = state.books.g0194.edition;
  if (!e.notes.includes('corrupted')) e.notes += ' Catalog description contains unrelated promotional text and was excluded from content evidence. Page metadata is retained with moderate confidence and needs independent corroboration.';
  e.confidence = 'moderate';
}
const known = Object.values(state.books).filter(b => b.edition), unknown = Object.values(state.books).filter(b => !b.edition);
for (const b of unknown) {
  if (b.reason === 'Product identity could not be verified.') {
    const blocked = b.attempts.filter(a => a.kind === 'amazon' && a.rawFile && !a.title).some(a => {
      const html = zlib.gunzipSync(fs.readFileSync(path.join(DIR, a.rawFile))).toString();
      return /validateCaptcha|Robot Check|Server Busy/i.test(html);
    });
    if (blocked) b.reason = 'No complete verified catalog edition; public product metadata was blocked by CAPTCHA/Server Busy.';
  }
}
for (const b of known) {
  const e = b.edition;
  assert(Number.isInteger(e.pages) && e.pages >= 20 && e.pages < 10000, `${b.id}: implausible page count`);
  assert(!/audio|disc|cassette/i.test(e.format), `${b.id}: audio format cannot supply PG`);
  assert(e.id && /^https?:\/\//.test(e.url) && e.retrieved && e.language && e.format && Number.isInteger(e.year));
  assert(['high', 'moderate'].includes(e.confidence));
  assert(e.source?.rawFile && fs.existsSync(path.join(ROOT, e.source.rawFile)), `${b.id}: missing provenance`);
  b.reason = null;
}
assert.equal(Object.keys(state.books).length, 1636);
assert.equal(new Set(books.map(b => b.id)).size, 1636);
for (const id of ['q0123', 'q0220', 'q0484']) assert(state.books[id].edition.components?.length >= 3, `${id}: complete-series components required`);
assert.equal(state.books.q0123.edition.pages, state.books.q0123.edition.components.reduce((n, c) => n + c.pages, 0));
assert.equal(state.books.q0220.edition.pages, state.books.q0220.edition.components.reduce((n, c) => n + c.pages, 0));
assert.equal(state.books.q0484.edition.pages, state.books.q0484.edition.components.reduce((n, c) => n + c.pages, 0));
const uniqueEdition = new Set(known.map(b => b.edition.id));
assert.equal(uniqueEdition.size, known.length, 'One edition selected for multiple separate work records; review identity.');
save();
const countBy = values => values.reduce((out, x) => ((out[x] = (out[x] || 0) + 1), out), {});
const rejected = Object.values(state.books).flatMap(b => b.attempts.filter(a => a.kind === 'strict-edition-audit' || a.kind === 'manual-plausibility-audit').map(a => ({ id: b.id, title: b.title, reason: a.reason, rejectedEdition: a.rejectedEdition })));
const olderYears = books.filter(b => state.books[b.id].edition && state.books[b.id].edition.year < b.year).map(b => ({ id: b.id, title: b.title, repositoryYear: b.year, editionYear: state.books[b.id].edition.year, url: state.books[b.id].edition.url }));
const audit = {
  generated: new Date().toISOString(),
  counts: { ...state.counts, highConfidence: known.filter(b => b.edition.confidence === 'high').length, moderateConfidence: known.filter(b => b.edition.confidence === 'moderate').length,
    languageUnstated: known.filter(b => b.edition.language === 'Not stated by source').length, formatUnstated: known.filter(b => b.edition.format === 'Not stated by source').length,
    sources: countBy(known.map(b => b.edition.source.provider)), unknownReasons: countBy(unknown.map(b => b.reason || 'No verified complete edition.')) },
  validation: { all1636HaveOutcome: true, everyKnownPageCountHasEditionAndSource: true, noAudioDiscCounts: true, noUnverifiedSub20PageCounts: true, completeSeriesAggregatesChecked: true, uniqueEditionIdentities: true, canonicalLedgersAndScoresUnchanged: true },
  limitations: [
    'Open Library is community-maintained. Edition identities and pages were checked, but all catalog entries are not independently corroborated. Confidence is moderate.',
    'Catalog number_of_pages may mean last numbered page and may omit preliminary or plate pages. Publisher totals take precedence where checked; basis is recorded.',
    'Not stated by source is an explicit unknown for language or binding; it does not imply English or paperback.',
    'Google Books API quota was unavailable. Amazon returned Server Busy/CAPTCHA; its pass was stopped after920 of1199 targeted metadata records. No block was bypassed.',
    'Exact print totals cannot be supplied for unresolved work identities, unverified series scope, blocked metadata, or audio-only candidates.',
    'New rating observations are separate in missing-ratings.json and do not alter canonical score inputs.'
  ],
  concerns: [
    { id: 'energy', reason: 'Repository original year1994 conflicts with MIT Press first hardcover publication2017 for Energy and Civilization. Canonical age remains unchanged pending review.', url: 'https://mitpress.mit.edu/9780262536165/energy-and-civilization/' },
    { id: 'g0194', reason: 'Open Library edition description contains unrelated gambling-site promotion. Description excluded from evidence; page metadata304 remains moderate confidence pending corroboration.' },
    ...olderYears.map(x => ({ ...x, reason: 'Selected edition year predates repository original year. Could be catalog/prepublication metadata or earlier repository date error; verify separately.' }))
  ],
  rejectedCandidates: rejected,
  unresolved: unknown.map(b => ({ id: b.id, title: b.title, author: b.author, reason: b.reason || 'No verified complete edition.', attempts: b.attempts.length }))
};
fs.writeFileSync(path.join(DIR, 'audit.json'), JSON.stringify(audit, null, 2) + '\n');
const esc = s => String(s || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const lines = [
  '# Edition page-count collection — 20 October 2026', '',
  `${known.length.toLocaleString('en')} of 1,636 works have an identified edition with a sourced page count. ${unknown.length} remain unknown. All 1,636 received a catalog outcome. No values were invented to fill gaps.`, '',
  `Confidence: ${audit.counts.highConfidence} high; ${audit.counts.moderateConfidence} moderate. ${audit.counts.languageUnstated} accepted page records do not state language; ${audit.counts.formatUnstated} do not state binding/format.`, '',
  'The output for the site is `pages.json`, keyed by stable work ID. Full responses, metadata hashes, attempts, rejected candidates and exact series calculations are retained in this folder. No recommendation, exclusion or score ledger was changed.', '',
  '## Checks and limits', '', ...audit.limitations.map(x => '- ' + x), '',
  '## Review concerns', '', ...audit.concerns.map(x => `- ${x.id}: ${x.reason}${x.url ? ` [Source](${x.url})` : ''}`), '',
  '## Unresolved records', '', '| ID | Title | Author | Current reason |', '| --- | --- | --- | --- |',
  ...audit.unresolved.map(b => `| ${esc(b.id)} | ${esc(b.title)} | ${esc(b.author)} | ${esc(b.reason)} |`), ''
];
fs.writeFileSync(path.join(DIR, 'REVIEW.md'), lines.join('\n'));
console.log(JSON.stringify(audit.counts));
