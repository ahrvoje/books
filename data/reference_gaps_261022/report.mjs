import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/reference_gaps_261022',read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const targets=read(`${dir}/targets.json`),accepted=read(`${dir}/accepted.json`),before=read(`${dir}/before-reference-pages.json`),after=read('site/reference-pages.json');
const changed=Object.keys(after).filter(id=>JSON.stringify(before[id])!==JSON.stringify(after[id]));
assert.deepEqual(changed.sort(),Object.keys(accepted).sort());
assert.equal(targets.length,100);assert.equal(new Set(targets.map(b=>b.id)).size,100);
for(let i=0;i<targets.length;i++){assert.equal(before[targets[i].id].pages,null);if(i)assert(targets[i-1].score>=targets[i].score);}
const reasons={
 q0035:'A numeric range was found only for a large-print edition; not substituted for a standard-print count.',
 witt:'The publisher sample lists acknowledgments but no bounded reference section; absence from contents does not prove zero.',
 'rem-u1660':'Publisher sample gives notes starting at 221, but no verified ending boundary.',
 'rem-u1555':'Publisher sample uses deliberately unusual page numbering; no reliable reference-section extent established.',
 bg54bbe35a65:'Catalogs disagree: references page 194 versus pages 194–195. Retained unknown pending inspection.',
 g0586:'An Open Library numeric match belonged to Energy in World History, a different book; rejected.',
 q0147:'Search produced a numeric match for Do Nothing, a different book; rejected.',
 g0657:'A newer edition lists notes starting at 187 without a reliable ending boundary.',
 q0155:'Reader report of a note-page count lacks verified edition and section boundaries.'
};
const missing=targets.filter(b=>!accepted[b.id]);
const esc=s=>String(s).replaceAll('|','\\|');
let report=`# Reference-page gap review — 22 October 2026\n\nSelected the 100 highest-scoring recommended books whose reference-page count was unknown at the start. The fixed selection and unrounded scores are in [targets.json](targets.json).\n\nAdded **${changed.length} verified counts**; **${missing.length} remain unknown**. This is a partial completion of the requested 100 counts. No value was inferred from book length, absent contents headings, or an unbounded final section. Confidence: **moderate** for added counts; **unknown** for unresolved entries.\n\nCounts are the union of inclusive printed-page ranges in the documented reference sections. Indexes, image credits, acknowledgments, and disclosures are excluded. Contents boundaries can include a blank final page. Catalog-only records can omit separately unlisted notes. Counts are edition-specific; they must not be divided by an unrelated edition's total pages.\n\nThe search covered title/author web queries, Open Library editions, catalog records, and publisher samples where available. Search results and failed retrievals are retained in web/, library.json, samples.json, and bwb.json. An unsuccessful retrieval does not establish that a book lacks references.\n\n## Added counts\n\n| Priority among gaps | Book | Pages | Documented ranges | Edition/source |\n|---:|---|---:|---|---|\n`;
for(const [i,b] of targets.entries()){const a=accepted[b.id];if(a)report+=`| ${i+1} | ${esc(b.title)} — ${esc(b.author)} | ${after[b.id].pages} | ${a.ranges.map(r=>`${r.label} ${r.start}–${r.end}`).join('; ')} | [${a.editionId}](${a.url}) |\n`;}
report+='\n## Unresolved\n\n| Priority among gaps | Book | Result |\n|---:|---|---|\n';
for(const b of missing)report+=`| ${targets.indexOf(b)+1} | ${esc(b.title)} — ${esc(b.author)} | ${reasons[b.id]||'No reliable numeric reference-section extent found in the inspected records and available samples.'} |\n`;
report+='\n## Verification\n\nExactly the 28 accepted records changed in site/reference-pages.json; all were previously unknown. Each count equals the union of its recorded ranges. The site was rebuilt. All 17 model tests, three range-parser tests, focused reference-page browser checks, and catalog validation passed. Default scores and eligibility decisions are unchanged.\n\nThe complete browser suite retains its previously documented header expectation mismatch; the focused browser checks passed. Evidence snapshots are named in [accepted.json](accepted.json), and the pre-update reference metadata is preserved in [before-reference-pages.json](before-reference-pages.json).\n';
fs.writeFileSync(`${dir}/REPORT.md`,report);
fs.writeFileSync(`${dir}/validation.json`,JSON.stringify({date:'2026-10-22',targets:100,filled:changed.length,unresolved:missing.length,onlyAcceptedRecordsChanged:true,confidence:'moderate',scoresUnchanged:true},null,2)+'\n');
console.log(`${changed.length} additions verified; ${missing.length} unresolved.`);
