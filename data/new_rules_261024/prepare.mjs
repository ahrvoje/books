import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
const dir='data/new_rules_261024/';
const read=p=>fs.readFileSync(p,'utf8'), json=p=>JSON.parse(read(p));
const seed=json(dir+'seed.json'), previousPath=json('data/catalog.json').compiled, previous=json(previousPath);
assert.equal(previousPath,'data/intake_shelves_261024/compiled.json');
const rows=read('RECOMMENDED_BOOKS.md').split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>l.split('|').slice(1,-1).map(c=>c.trim()));
const titleOf=s=>s.match(/^\[([^\]]+)\]/)?.[1]||s;
const byKey=new Map(previous.currentBooks.map(b=>[b.author+'|'+b.title,b]));
const at=i=>{const r=rows[i],b=byKey.get(r[2]+'|'+titleOf(r[3]));assert(b,'Missing index '+i);return b;};
const normRef=r=>typeof r==='string'&&r.startsWith('analysis_')?'analysis/'+r:r;
const content=b=>[b.note,b.priorRationale,b.priorReason,b.densityAssessment?.note,b.assessment?.note,b.reason,b.eligibility,...(b.criteria||[]).map(c=>c.assessment)].filter(s=>typeof s==='string'&&s.length>30);
const refs=b=>[b.reviewAnchor,b.currentReview,b.scoreReview,b.priorAssessment,b.priorReport,...(b.priorReviews||[]),...(b.evidence||[]),...(b.densityAssessment?.refs||[])].filter(x=>typeof x==='string').map(normRef);
const decisions=seed.indices.map(i=>{
 const b=at(i),rule=seed.h5.includes(i)?'H5':seed.v8.includes(i)?'V8':seed.v6.includes(i)?'V6':'V7';
 return {id:b.id,index:i,title:b.title,author:b.author,previousStatus:b.status,status:rule.startsWith('H')?'excluded':'vetoed',rule,borderline:seed.borderline.includes(i),confidence:seed.borderline.includes(i)?'low':'moderate',sources:b.sources,priorRefs:[...new Set(refs(b))],priorContent:[...new Set(content(b))],reason:'',evidence:[]};
});
for(const i of seed.h6){const b=at(i);decisions.push({id:b.id,index:i,title:b.title,author:b.author,previousStatus:b.status,status:'excluded',rule:'H6',borderline:true,confidence:'low',sources:b.sources,priorRefs:[...new Set(refs(b))],priorContent:[...new Set(content(b))],reason:'',evidence:[]});}
for(const id of seed.extraExcluded){const b=previous.currentBooks.find(b=>b.id===id);assert(b);decisions.push({id,title:b.title,author:b.author,previousStatus:b.status,status:'excluded',rule:'H5',borderline:false,confidence:'high',sources:b.sources,priorRefs:[...new Set(refs(b))],priorContent:[...new Set(content(b))],reason:'',evidence:[]});}
const baseline={previousPath,counts:{recommended:previous.currentBooks.filter(b=>b.status==='recommended').length,vetoed:previous.currentBooks.filter(b=>b.status==='vetoed').length,excluded:previous.exclusions.length},files:Object.fromEntries(['AGENTS.md','RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','SOURCES.md','data/catalog.json','site/editions.json','site/reference-pages.json','site/exclusion-categories.json','site/enrichment.json'].map(p=>[p,crypto.createHash('sha256').update(read(p)).digest('hex')]))};
fs.writeFileSync(dir+'baseline.json',JSON.stringify(baseline,null,2)+'\n');
fs.writeFileSync(dir+'decisions.json',JSON.stringify(decisions,null,2)+'\n');
fs.writeFileSync(dir+'duplicates.json',JSON.stringify(seed.duplicateIndices.map(i=>({index:i,id:at(i).id,title:at(i).title,author:at(i).author})),null,2)+'\n');
console.log(JSON.stringify({baseline:baseline.counts,decisions:decisions.length,byRule:Object.fromEntries(['H5','H6','V6','V7','V8'].map(r=>[r,decisions.filter(d=>d.rule===r).length]))}));
for(const d of decisions.filter(d=>d.rule==='H5'||d.borderline))console.log(d.index+' | '+d.id+' | '+d.title+' | '+d.priorContent.join(' ').slice(0,450));
