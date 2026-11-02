import fs from 'node:fs';
import assert from 'node:assert/strict';
const d='data/cheapnext100_261101/',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const selected=read(d+'selected.json');
const explanations={
 'shelf-0a08fe6e8fe8':'Source explicitly labels Rationality: From AI to Zombies #2 and 310 pages, Paperback. The volume and print binding match.',
 'finish-114-20':'Ray Kurzweil and the main title match. The source supplies the full subtitle; its absence from the catalog abbreviation is not a mismatch.',
 'nbdb56daaf6':'Both catalog and source identify Jonathan Littman as author. Kevin Mitnick is the subject. The audit misread the candidate author.',
 'q0952':'The session date is 1 November 2026. The June 2026 print publication is already past; exact J. C. Maurer title and paperback ISBN match.',
 'rem-u0957':'Rudolf Vrba is the principal author in both records. Additional contributor credits do not identify a different work. The source explicitly identifies a paperback.',
 'intake-0075':'Source byline includes both Donald Trump and Kate Bohner. An author need not appear in the book title.',
 'rem-u1004':'Simon Winchester is the author in both records. The additional illustrator credit does not change work identity.',
 'naa8f588553':'Only the Amazon rating count is being filled. A matching Kindle product aggregate is allowed; print pagination is not required for this field.',
 'progress-0000':'A Penguin eSpecial from Dutton is an imprint/format designation. The source is the single Tyler Cowen work The Great Stagnation.',
 'complete-531-95':'The product identifies Lawrence M. Krauss and the exact work The Physics of Star Trek. The additional Stephen Hawking credit does not indicate a different book.'
};
const files=fs.readdirSync(d+'raw'),audit=files.filter(f=>/^audit-\d+\.parsed\.json$/.test(f)).flatMap(f=>read(d+'raw/'+f).results);
assert.equal(audit.length,100);
const resolutions={};
for(const a of audit.filter(a=>a.status!=='supported')){const x=selected.find(x=>x.key===a.key);assert(explanations[x.id],JSON.stringify(a));resolutions[a.key]={decision:'accepted after primary source review',auditReason:a.reason,reason:explanations[x.id],source:x.url,evidence:x.evidence};}
write(d+'audit-resolutions.json',resolutions);
const groups={};
for(const f of files.filter(f=>f.endsWith('.json')&&!/\.(parsed|request|error)\.json$/.test(f))){const r=read(d+'raw/'+f);if(!r.choices)continue;const k=f.startsWith('audit-')?'evidence audit':f.includes('-server')?'parallel fast server trial':r.research?`${r.research.engine}/${r.research.mode||'default'}/${r.research.max_results} results`:'exa/default/1 result';const g=groups[k]??={calls:0,costUSD:0,acceptedFields:0};g.calls++;g.costUSD+=r.usage?.cost||0;g.acceptedFields+=selected.filter(x=>x.file===d+'raw/'+f).length;}
for(const g of Object.values(groups))g.meanCostUSD=g.costUSD/g.calls;
const total=Object.values(groups).reduce((s,g)=>s+g.costUSD,0),prior=read('data/cheap100_261101/summary.json').reportedCostUSD;
write(d+'cost-learning.json',{recordedCostUSD:total,prior100RecordedCostUSD:prior,savingFraction:1-total/prior,costPerAcceptedFieldUSD:total/100,acceptedFields:100,cachedFields:selected.filter(x=>!x.file.startsWith(d)).length,groups,confidence:'High for saved response costs; moderate for general cost/yield conclusions. Not a controlled quality comparison.',costScope:'Successful saved API responses, including experiments and audits. Interrupted requests may incur additional charges; this is not an account invoice.',futureDefaults:{model:'mistralai/mistral-nemo',plugin:{id:'web',engine:'parallel',mode:'fast',max_results:10},auditModel:'mistralai/mistral-small-24b-instruct-2501'},lessons:['Reuse saved source evidence before new calls.','Search mode produced the main saving: fast search fee $0.001 versus prior default $0.005.','One-result Exa still charged $0.007; reducing results did not save its search fee.','Four server-tool trials did not establish a useful gain from larger requested excerpts.','Remap useful secondary results to their actual catalog books; do not confuse related products.','Short title plus bibliographical references found useful library ranges.','Review batches and stop research as soon as the verified target is reached.'],pricingSource:'https://github.com/OpenRouterTeam/docs/blob/main/guides/features/plugins/web-search.mdx'});
console.log({total,prior,savingFraction:1-total/prior,resolved:Object.keys(resolutions).length,groups});
