import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { DOMAIN_IDS } from './model.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = 'data/enrichment_261020';
const read = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
const write = (file, data) => fs.writeFileSync(path.join(root, file), JSON.stringify(data, null, 2) + '\n');
assert.equal(read('data/catalog.json').compiled, 'data/glasp_261019/compiled.json',
  'This historical enrichment merge targets the 2026-10-19 catalog. It cannot overwrite a later source batch; use the active batch workflow.');
const current = read('data/glasp_261019/compiled.json').currentBooks.filter(b => b.status === 'recommended');
const pages = read(`${dir}/pages/pages.json`);
const pageAudit = read(`${dir}/pages/progress.json`);
const ratings = read(`${dir}/pages/missing-ratings.json`);
const pageSupplements = {};
for (const part of ['primary', 'domains_a', 'domains_b']) {
  const file = `${dir}/${part}/page-gap-results.json`;
  if (!fs.existsSync(path.join(root, file))) continue;
  for (const [id, record] of Object.entries(read(file))) {
    assert(!pageSupplements[id], `Duplicate publisher page review: ${id}`);
    assert(record.edition || record.reason, `Unfinished publisher page review: ${id}`);
    pageSupplements[id] = { ...record, audit: file };
  }
}
const additionalPages = `${dir}/pages/additional-page-results.json`;
if (fs.existsSync(path.join(root, additionalPages))) {
  for (const [id, record] of Object.entries(read(additionalPages))) {
    assert(!pageSupplements[id]?.edition, `Conflicting additional page edition: ${id}`);
    pageSupplements[id] = { ...record, audit: additionalPages };
  }
}
const parts = ['domains_a', 'domains_b'].map(part => read(`${dir}/${part}/assessments.json`));
const assessments = {};
for (const part of parts) for (const [id, record] of Object.entries(part)) {
  assert(!assessments[id], `Duplicate domain review: ${id}`);
  assessments[id] = record;
}
const ids = new Set(current.map(b => b.id));
for (const [id, record] of Object.entries(pageSupplements)) {
  assert(ids.has(id), `Unknown edition supplement: ${id}`);
  assert(record.edition || (record.reason && !/review pending\.$/i.test(record.reason)),
    `Finish publisher review before merging: ${id}`);
}
for (const id of Object.keys(assessments)) assert(ids.has(id), `Unknown reviewed book: ${id}`);
assert.equal(Object.keys(assessments).length, current.length, 'Finish the per-book review before merging.');
const primary = read(`${dir}/primary/assessments.json`);
for (const [id, supplement] of Object.entries(primary)) {
  assert(assessments[id], `Unknown primary review: ${id}`);
  assessments[id] = {
    ...assessments[id], ...supplement,
    domains: { ...assessments[id].domains, ...supplement.domains }
  };
}
const books = {}, unresolved = [];
for (const b of current) {
  const review = assessments[b.id];
  const basePage = pages[b.id], supplement = pageSupplements[b.id];
  // Exact-edition supplements supersede the automated catalog result.
  // A failed supplement cannot erase an already verified base record.
  const page = supplement?.edition ? supplement : basePage;
  assert(page, `Missing page lookup outcome: ${b.id}`);
  assert(review.researchAudit, `Missing domain audit: ${b.id}`);
  const domains = review.domains || {};
  for (const id of Object.keys(domains)) assert(DOMAIN_IDS.includes(id), `Unknown domain: ${id}`);
  const unknownDomains = DOMAIN_IDS.filter(id => !domains[id]);
  const pageReason = page.edition ? '' : supplement?.reason || page.reason || 'No verified page count in retrieved evidence.';
  books[b.id] = {
    domains,
    connections: review.connections,
    ...(page.edition ? { edition: page.edition } : {}),
    research: {
      reviewed: '2026-10-20',
      domainBasis: review.researchAudit.method || review.researchAudit.assessmentMethod,
      primaryReview: review.primaryReview || null,
      unknownDomains,
      unknownReason: review.researchAudit.unknownReason,
      pageAttempts: pageAudit.books[b.id]?.attempts?.length || 0,
      pageReason,
      newAmazonObservation: ratings.books[b.id]?.observation || null,
      amazonReviewReason: ratings.audit?.[b.id]?.reason || ratings.books[b.id]?.reason || '',
      domainAudit: `${dir}/${parts[0][b.id] ? 'domains_a' : 'domains_b'}/assessments.json`,
      pageAudit: supplement?.audit || `${dir}/pages/progress.json`
    }
  };
  if (!page.edition || unknownDomains.length || review.connections.status !== 'complete') {
    unresolved.push({ id: b.id, title: b.title, author: b.author, pages: pageReason || 'verified',
      unknownDomains, connections: review.connections.status,
      amazonCount: b.amazon?.count ?? null,
      newAmazonObservation: ratings.books[b.id]?.observation || null });
  }
}
const values = Object.values(books);
const editions = values.map(b => b.edition).filter(Boolean);
const summary = {
  reviewed: '2026-10-20', books: current.length,
  pageCounts: values.filter(b => b.edition).length,
  missingPages: values.filter(b => !b.edition).length,
  booksWithDomainEvidence: values.filter(b => Object.keys(b.domains).length).length,
  knownDomainValues: values.reduce((n,b) => n + Object.keys(b.domains).length, 0),
  possibleDomainValues: current.length * DOMAIN_IDS.length,
  completeDomainProfiles: values.filter(b => DOMAIN_IDS.every(id => b.domains[id])).length,
  mechanisms: values.reduce((n,b) => n + b.connections.mechanisms.length, 0),
  joins: values.reduce((n,b) => n + b.connections.joins.length, 0),
  completeConnectionReviews: values.filter(b => b.connections.status === 'complete').length,
  newAmazonObservations: values.filter(b => b.research.newAmazonObservation).length,
  amazonCountsStillUnavailable: ratings.counts.unknown,
  editionConfidence: Object.fromEntries(['high','moderate','low'].map(level => [level, editions.filter(e=>e.confidence===level).length])),
  unstatedEditionLanguages: editions.filter(e=>/not stated|unknown/i.test(e.language)).length,
  unstatedEditionFormats: editions.filter(e=>/not stated|unknown/i.test(e.format)).length
};
write('site/enrichment.json', { version: 1, summary, books });
write(`${dir}/review-queue.json`, { summary, unresolved });
const domainRows = DOMAIN_IDS.map(id => {
  const entries = values.map(b => b.domains[id]).filter(Boolean);
  return `| ${id} | ${entries.length} | ${entries.filter(e=>e.confidence==='high').length} | ${entries.filter(e=>e.confidence==='moderate').length} | ${entries.filter(e=>e.confidence==='low').length} | ${values.length-entries.length} |`;
});
const pageRows = unresolved.filter(b => b.pages !== 'verified').map(b =>
  `| ${b.id} | ${b.title.replaceAll('|','/')} | ${b.pages.replaceAll('|','/')} |`);
const report = `# Catalog enrichment audit

Reviewed 2026-10-20. Each of the ${summary.books.toLocaleString('en')} recommended works has a metadata lookup outcome and a domain review.

| Field | Available | Still unknown or incomplete |
|---|---:|---:|
| Edition page count | ${summary.pageCounts} | ${summary.missingPages} |
| Individual domain depths | ${summary.knownDomainValues} | ${summary.possibleDomainValues-summary.knownDomainValues} |
| Complete 20-domain profiles | ${summary.completeDomainProfiles} | ${summary.books-summary.completeDomainProfiles} |
| Complete connection reviews | ${summary.completeConnectionReviews} | ${summary.books-summary.completeConnectionReviews} |
| New Amazon counts among 499 baseline gaps | ${summary.newAmazonObservations} | ${summary.amazonCountsStillUnavailable} |

${summary.booksWithDomainEvidence} books have at least one assessed domain. There are ${summary.mechanisms} explicit mechanisms and ${summary.joins} explicit joins. These counts measure recorded evidence, not full-text reading or verified absence of other domains.

Page evidence confidence: ${summary.editionConfidence.high} high, ${summary.editionConfidence.moderate} moderate and ${summary.editionConfidence.low} low. Among accepted page records, ${summary.unstatedEditionLanguages} sources do not state language and ${summary.unstatedEditionFormats} do not state binding/format. Those attributes are labelled unknown; a known page extent does not imply complete edition metadata.

The existing 15-rule assessments, original years, historical endpoints, source counts and Amazon counts are imported from the current repository evaluation. New enrichment does not change those judgments or the initial ranking.

New Amazon observations appear separately in book details, with product, date and limitations. They are pending a canonical evaluation update. Public product retrieval eventually returned CAPTCHA or Server Busy responses and was stopped; no count was invented or borrowed from a different book.

## Method and limits

- Edition lookups use ISBNs or matched title and author. Page counts belong to the named edition, not a work-level average. Source URL, retrieval time, identity, format, language, year and confidence accompany each accepted count. Missing edition attributes remain explicitly unknown.
- Open Library catalog pagination can count numbered pages differently from a publisher's total extent. Publisher checks resolve selected conflicts; the source and basis remain recorded.
- Domain grades are manual interpretations of book-specific prior assessments and available new contents, samples or descriptions. They are not converted from title keywords, the old systems score, or popularity.
- A missing domain is not graded zero. Source descriptions usually support presence better than absence. Full domain profiles and exhaustive connection reviews require broader evidence than a short description.
- Connection records name each participant's role, a common causal account, scope, strength, confidence and sources. A shared label does not create a join.
- An incomplete connection review cannot establish the exact best connection score or absence of a connection. The interface keeps those derived values unknown. Known individual domain values can already be filtered and scored.

## Domain evidence coverage

| Domain | Known | High | Moderate | Low | Unknown |
|---|---:|---:|---:|---:|---:|
${domainRows.join('\n')}

## Evidence and remaining work

- [Page lookup attempts and provenance](pages/progress.json)
- [Page collector and edition audit](pages/)
- [First domain review set](domains_a/assessments.json)
- [Second domain review set](domains_b/assessments.json)
- [Primary-source supplements](primary/assessments.json)
- [Primary publisher page reviews](primary/page-gap-results.json)
- [First publisher gap review set](domains_a/page-gap-results.json)
- [Second publisher gap review set](domains_b/page-gap-results.json)
- [Complete-work edition follow-up](pages/additional-page-results.json)
- [New rating observations and unresolved attempts](pages/missing-ratings.json)
- [Per-book unresolved fields](review-queue.json)

## Remaining page gaps

| ID | Work | Reason |
|---|---|---|
${pageRows.join('\n')}

Confidence is high that coverage counts match the embedded data. Bibliographic and judgment confidence belongs to each record. This audit does not claim that all missing facts have been recovered.
`;
fs.writeFileSync(path.join(root,dir,'REPORT.md'),report);
console.log(JSON.stringify(summary, null, 2));
