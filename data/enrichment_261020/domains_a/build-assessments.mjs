import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('data/enrichment_261020/domains_a');
const source = JSON.parse(fs.readFileSync('data/glasp_261019/compiled.json', 'utf8')).currentBooks
  .filter(b => b.status === 'recommended').sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0).slice(0, 818);
const domainIds = 'SCI QNT CMP HTC ENG ENE MAT PRD QLT LOG TRD SCL INN INS ECO FIN POL MIL STR HEU'.split(' ');
const decisions = fs.readFileSync(path.join(root, 'decisions.tsv'), 'utf8').split(/\r?\n/).filter(l => l && !l.startsWith('#'));
const supplements = fs.existsSync(path.join(root, 'supplements.json')) ? JSON.parse(fs.readFileSync(path.join(root, 'supplements.json'), 'utf8')) : {};
const catalogReviews = fs.existsSync(path.join(root, 'catalog-review.json')) ? JSON.parse(fs.readFileSync(path.join(root, 'catalog-review.json'), 'utf8')) : {};
const priorSections = fs.existsSync(path.join(root, 'prior-sections.json')) ? JSON.parse(fs.readFileSync(path.join(root, 'prior-sections.json'), 'utf8')) : {};
const out = {};
for (const line of decisions) {
  const [ordinal, codes, basis] = line.split('\t');
  const index = Number(ordinal), book = source[index];
  if (!book || out[book.id] || !basis) throw Error(`Invalid or repeated index ${ordinal}`);
  const review = book.reviewAnchor || book.currentReview || book.priorReport;
  const refs = review ? [`analysis/${review.replace(/^analysis\//, '')}`] : [];
  if (!refs.length) throw Error(`No traceable analysis: ${book.id}`);
  const domains = {};
  if (codes !== '-') for (const token of codes.split(' ')) {
    const match = /^([A-Z]{3})([0-4])$/.exec(token);
    if (!match || !domainIds.includes(match[1])) throw Error(`Invalid domain ${token}`);
    domains[match[1]] = {
      value: Number(match[2]), confidence: index < 14 && index !== 11 ? 'moderate' : 'low',
      rationale: `${basis} This ${match[1]} depth is a new interpretation of the cited prior assessment, not a full-text measurement.`, refs
    };
  }
  const supplement = supplements[book.id], catalogReview = catalogReviews[book.id];
  Object.assign(domains, supplement?.domains || {});
  const unknownDomains = domainIds.filter(d => !domains[d]);
  const evidenceText = Object.fromEntries(Object.entries({
    reason: book.reason, rationale: book.rationale, case: book.case,
    systems: book.criteria?.find(c => c.code === 'S')?.assessment || book.notes?.[1],
    mechanism: book.criteria?.find(c => c.code === 'M')?.assessment || book.notes?.[3],
    fit: book.criteria?.find(c => c.code === 'F')?.assessment || book.notes?.[6]
  }).filter(([, v]) => v));
  if (index >= 653 && !Object.keys(evidenceText).length && priorSections[book.id]?.text) evidenceText.priorAnalysisSection = priorSections[book.id].text.split(/\n## /)[0];
  out[book.id] = {
    domains,
    connections: {
      status: 'partial', mechanisms: supplement?.mechanisms || [], joins: supplement?.joins || [],
      inspected: ['Book-specific prior repository assessment: ' + refs[0], ...(supplement?.inspected || []), ...(catalogReview ? [catalogReview.scope + ' ' + catalogReview.refs[0]] : [])],
      limitations: 'Bounded review of the listed materials. The full book, all chapters and all possible cross-domain explanations have not been inspected for this schema. Missing records are not evidence of no connections.'
    },
    researchAudit: {
      reviewed: '2026-10-20', assignedOrdinal: index, method: 'Manual semantic reading of book-specific prior assessment; no title-keyword rubric or automatic grade conversion.',
      inspectedFields: Object.keys(evidenceText), inspectedEvidence: evidenceText,
      refs: [...new Set([...refs, ...(supplement?.refs || []), ...(catalogReview?.refs || [])])],
      decisionBasis: basis, unknownDomains,
      unknownReason: unknownDomains.length ? 'The inspected materials do not establish domain-specific depth for these fields. Absence of discussion in a short assessment or catalog description is not evidence of absence in the book. Further contents or full-text evidence remains necessary.' : '',
      externalVerification: supplement?.primaryReviewed ? 'New publisher material directly inspected; bounded scope is listed in connections.inspected.' : catalogReview ? 'New matching Open Library edition metadata screened. Catalog text does not constitute a full-book or independently verified primary reading.' : 'No new external source retrieval for this book. External links in the historical assessment remain prior evidence, not newly verified observations.',
      primaryReviewed: Boolean(supplement?.primaryReviewed),
      catalogReview: catalogReview || null,
      limitations: 'Coverage depth is provisional. Low confidence reflects short prior descriptions and limited evidence of chapter-level scope. Existing canonical quality scores are unchanged.'
    }
  };
}
fs.writeFileSync(path.join(root, 'assessments.json'), JSON.stringify(out, null, 2) + '\n');
const summary = {
  assigned: source.length, reviewed: Object.keys(out).length,
  knownDomainValues: Object.values(out).reduce((n, b) => n + Object.keys(b.domains).length, 0),
  unassessedDomainValues: Object.values(out).reduce((n, b) => n + b.researchAudit.unknownDomains.length, 0),
  booksWithSomeDomainEvidence: Object.values(out).filter(b => Object.keys(b.domains).length).length,
  mechanisms: Object.values(out).reduce((n, b) => n + b.connections.mechanisms.length, 0),
  booksWithMechanisms: Object.values(out).filter(b => b.connections.mechanisms.length).length,
  explicitJoins: Object.values(out).reduce((n, b) => n + b.connections.joins.length, 0),
  newPrimaryReviewed: Object.values(out).filter(b => b.researchAudit.primaryReviewed).length,
  newCatalogScreened: Object.values(out).filter(b => b.researchAudit.catalogReview).length,
  catalogTargetedFullReading: Object.values(out).filter(b => b.researchAudit.catalogReview?.scope.startsWith('Matching edition')).length,
  completeConnectionReviews: 0, partialConnectionReviews: Object.keys(out).length,
  unreviewedIds: source.filter(b => !out[b.id]).map(b => b.id),
  caution: 'Partial evidence-backed enrichment, not complete underlying data. No missing domain is assigned zero.'
};
fs.writeFileSync(path.join(root, 'audit-summary.json'), JSON.stringify(summary, null, 2) + '\n');
console.log(JSON.stringify({ ...summary, unreviewedIds: summary.unreviewedIds.length }));
