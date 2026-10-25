import fs from 'node:fs';
const p='data/metadata2_261025/publish.mjs';let s=fs.readFileSync(p,'utf8');
s=s.replace("pagesAdded:changes.filter(x=>x.edition).length", "pagesAdded:changes.filter(x=>x.edition&&!x.editionCorrection).length,pageCountsCorrected:changes.filter(x=>x.editionCorrection).length");
s=s.replace('summary.totalChanges=summary.numericDataPoints+summary.searchLinksReplaced;', 'summary.totalChanges=summary.numericDataPoints+summary.searchLinksReplaced+summary.pageCountsCorrected;');
s=s.replace("write('site/reference-pages.json',references);", "write('site/reference-pages.json',references);if(summary.pageCountsCorrected)write('site/enrichment.json',enrichment);");
s=s.replace("if(x.edition)text+=", "if(x.editionCorrection)text+=`Page-count correction: ${x.priorEdition.pages} → ${x.edition.pages}. This correction is additional to the missing-data target. ${x.edition.notes}\\n\\n`;\n if(x.edition)text+=");
fs.writeFileSync(p,s);
