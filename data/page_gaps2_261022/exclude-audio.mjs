import fs from 'node:fs';
import assert from 'node:assert/strict';
const read=p=>JSON.parse(fs.readFileSync(p));
const dir='data/page_gaps2_261022/', path=read('data/catalog.json').compiled,c=read(path);
const b=c.currentBooks.find(b=>b.id==='g0742');
const analysis='analysis/analysis_audiopages_261022_0958.md';
const line='- On Power — Robert A. Caro';
const enrichment=read('site/enrichment.json');
if(enrichment.books.g0742){
 fs.writeFileSync(dir+'excluded-enrichment.json',JSON.stringify({g0742:enrichment.books.g0742},null,2)+'\n');
 delete enrichment.books.g0742;
 fs.writeFileSync('site/enrichment.json',JSON.stringify(enrichment,null,2)+'\n');
}
if(b){
 c.currentBooks=c.currentBooks.filter(b=>b.id!=='g0742');
 c.exclusions.push({id:b.id,reviewId:b.id,reviewIds:[b.id],title:b.title,author:b.author,status:'excluded',exclusion:'H1',reason:'Original audio-only work adapted from two speeches. No print or ebook edition found; later ISBN 9781978664968 is MP3 CD.',confidence:'high',sources:b.sources,sourceIds:b.sourceIds,evidence:['https://www.audible.com/es_US/pd/On-Power-Audiolibro/B06XNKVH16','https://www.latimes.com/books/jacketcopy/la-et-jc-on-power-20170320-story.html','https://www.abebooks.co.uk/9781978664968/Power-Reflections-Fifty-Years-Studying-1978664966/plp'],priorReviews:b.priorReviews,previousStatuses:[b.status],analysis:analysis+'#g0742',line});
}
let excluded=fs.readFileSync('EXCLUDED_BOOKS.md','utf8');
if(!excluded.includes(line))excluded=excluded.replace('- On Protracted War',line+'\n- On Protracted War');
assert(excluded.includes(line));
const order=excluded.split(/\r?\n/).filter(l=>l.startsWith('- '));
c.exclusions.sort((a,b)=>order.indexOf(a.line||`- ${a.title} — ${a.author}`)-order.indexOf(b.line||`- ${b.title} — ${b.author}`));
c.audit.audioOnlyReview={date:'2026-10-22',analysis,excluded:['g0742']};
fs.writeFileSync(path,JSON.stringify(c,null,2)+'\n');
fs.writeFileSync('EXCLUDED_BOOKS.md',excluded);
let ledger=fs.readFileSync('RECOMMENDED_BOOKS.md','utf8');
ledger=ledger.split(/\r?\n/).filter(l=>!l.includes('| [On Power](')).join('\n');
assert(!ledger.includes('| [On Power]('));
fs.writeFileSync('RECOMMENDED_BOOKS.md',ledger);
let report=fs.readFileSync(dir+'report.html','utf8').replace('Filled 247; 3 remain unknown. Scores and ordering are unchanged.','Filled 247; 2 remain unknown; 1 audio-only work is hard-excluded. Retained scores and relative ordering are unchanged.').replace('<td>Unknown</td><td>—</td><td>unknown</td><td>H1:','<td>Excluded</td><td>—</td><td>high</td><td>H1:');
fs.writeFileSync(dir+'report.html',report);
console.log('Excluded On Power; 247 filled, 2 unknown, 1 excluded.');
