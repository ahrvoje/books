import fs from 'node:fs';
const p='data/metadata3000_261025/publish.mjs';let s=fs.readFileSync(p,'utf8');
s=s.replace('pageCountsCorrected:changes.filter(x=>x.editionCorrection).length', 'pageCountsCorrected:changes.filter(x=>x.editionCorrection&&x.edition.pages!==x.priorEdition.pages).length,otherEditionCorrections:changes.filter(x=>x.editionCorrection&&x.edition.pages===x.priorEdition.pages).length');
s=s.replace('summary.editionLinksUpdated+summary.pageCountsCorrected;', 'summary.editionLinksUpdated+summary.pageCountsCorrected+summary.otherEditionCorrections;');
s=s.replace('Page-count correction: ${x.priorEdition.pages} → ${x.edition.pages}.', 'Edition correction: pages ${x.priorEdition.pages} → ${x.edition.pages}; edition year ${x.priorEdition.year} → ${x.edition.year}.');
s=s.replace('Only newly populated page, reference-page and Amazon aggregate counts count toward the target. Link changes and score updates are separate.', 'New page counts, reference-page counts and Amazon aggregates are counted separately from supporting edition metadata. Link changes, corrections to known fields and score updates are separate; none are counted as newly filled numeric gaps.');
fs.writeFileSync(p,s);
