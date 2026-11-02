import fs from 'node:fs';
import assert from 'node:assert/strict';
const d='data/cheap100_261102/',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const s=read(d+'selected.json');
assert.equal(s.length,100);
for(const x of s){const r=read(x.file);assert(r.choices[0].message.annotations.some(a=>a.url_citation?.url===x.url&&a.url_citation.content===x.sourceText),x.key);assert(x.sourceText.includes(x.evidence),x.key);}
write(d+'approved.json',s.map(x=>({key:x.key,id:x.id,title:x.title,author:x.author,kind:x.kind,item:{count:x.count,ranges:x.ranges},source:{url:x.url,title:x.sourceTitle,content:x.sourceText},file:x.file,observed:x.evidence})));
const reasons={
 'progress-0436':'Nando Parrado is explicitly credited as author. Vince Rause is the additional credited coauthor. The shortened catalog byline does not identify a different book; the source supplies the exact rating aggregate.',
 'rem-u0984':'The nominated work is The Coming of the Third Reich, explicitly volume 1. The source identifies that same volume; no whole-series rating is inferred.',
 'g0878':'The Fatal Conceit is the nominated single work. Its publication as volume 1 of collected works does not change its identity or make it a whole-series substitution.',
 'bg4eb480423f':'Adam Smith is the pen name of George J. W. Goodman, explicitly recorded in the catalog and source text. The source is an unabridged Supermoney audio edition.',
 'progress-0427':'Julian Assange is explicitly credited. Additional coauthors do not contradict the shortened catalog byline; title and work match.',
 'g0519':'Al Ramadan is explicitly credited. The additional coauthors are omitted from the catalog byline, not absent from the source. Title and work match.',
 'g1145':'The selected field is an Amazon rating aggregate, not a print-page count. The matching Kindle edition is eligible evidence for this field.'
};
const names=fs.readdirSync(d+'raw'),audits=names.filter(f=>/^audit-\d+\.parsed\.json$/.test(f)).flatMap(f=>read(d+'raw/'+f).results),res={};
assert.equal(audits.length,100);
for(const a of audits.filter(a=>a.status!=='supported')){const x=s.find(x=>x.key===a.key);assert(reasons[x.id],JSON.stringify(a));res[a.key]={decision:'accepted after primary source review',auditReason:a.reason,reason:reasons[x.id],source:x.url,evidence:x.evidence};}
write(d+'audit-resolutions.json',res);
const raw=names.filter(f=>f.endsWith('.json')&&!/\.(parsed|request|error)\.json$/.test(f)).map(f=>({file:d+'raw/'+f,name:f,...read(d+'raw/'+f)})).filter(r=>r.choices),groups={};
for(const r of raw){const key=r.name.startsWith('audit-')?'audit':r.name.includes('-isbn')?'ISBN-only pilot':r.name.startsWith('reference-')?'reference title search':'Amazon title-author search',g=groups[key]??={calls:0,costUSD:0,acceptedFields:0};g.calls++;g.costUSD+=r.usage?.cost||0;g.acceptedFields+=s.filter(x=>x.file===r.file).length;}
for(const g of Object.values(groups))g.meanCostUSD=g.costUSD/g.calls;
const pilot=raw.filter(r=>r.name.includes('-isbn')).map(r=>{const control=raw.find(c=>c.bookId===r.bookId&&!c.name.includes('-isbn'));return {bookId:r.bookId,isbnQuery:r.query,isbnFile:r.file,controlFile:control?.file,isbnSourceTitles:r.choices[0].message.annotations.map(a=>a.url_citation?.title),acceptedFromControl:s.some(x=>x.id===r.bookId&&x.file===control?.file),isbnAccepted:false};});
const cost=raw.reduce((n,r)=>n+(r.usage?.cost||0),0),prior=read('data/cheapnext100_261101/summary.json').reportedCostUSD;
write(d+'cost-learning.json',{recordedCostUSD:cost,previous100RecordedCostUSD:prior,savingFraction:1-cost/prior,costPerAcceptedFieldUSD:cost/100,acceptedFields:100,cachedFields:s.filter(x=>!x.file.startsWith(d)).length,groups,pilot,confidence:'High for recorded usage and accepted values; moderate for strategy comparison. Batches differ in field mix and books.',scope:'Successful saved OpenRouter responses, including research, pilot and audit. Interrupted requests may be billed separately; not an invoice.',lessons:['Reuse prior evidence and remap useful secondary book results before ordering more searches.','Keep title and author in queries: all nine ISBN-only pilot searches returned irrelevant seller profiles and supplied no accepted value.','The same-book title-author controls supplied four accepted values; see pilot records.','Reference counts had lower yield in this batch. Do not infer missing counts or zero to improve yield.','Keep Mistral Nemo with Parallel fast, ten results; use Mistral Small 24B to flag evidence issues.','Human review remains necessary: low-cost models misread contributors, pen names, series labels and Kindle rating eligibility.','Compare cost by field and provenance; an Amazon-heavy round is not a controlled efficiency comparison with a more varied round.'],futureDefaults:{model:'mistralai/mistral-nemo',plugin:{id:'web',engine:'parallel',mode:'fast',max_results:10},auditModel:'mistralai/mistral-small-24b-instruct-2501'}});
console.log({cost,prior,savingFraction:1-cost/prior,cached:s.filter(x=>!x.file.startsWith(d)).length,groups,pilotControlsAccepted:pilot.filter(x=>x.acceptedFromControl).length});
