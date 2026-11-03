import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const dir='data/v3_review_261103';
const read=p=>fs.readFileSync(p,'utf8'), json=p=>JSON.parse(read(p));
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
assert(!fs.existsSync(dir+'/baseline.json'),'Never regenerate an existing review baseline');
const previous=json('data/catalog.json').compiled, data=json(previous);
const files=['AGENTS.md','SOURCES.md','RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','site/enrichment.json','site/editions.json','site/reference-pages.json','site/exclusion-categories.json',previous];
const baseline={previous,started:'2026-11-03T20:42:10Z',files:Object.fromEntries(files.map(p=>[p,hash(p)])),analyses:Object.fromEntries(fs.readdirSync('analysis').filter(f=>f.endsWith('.md')).map(f=>['analysis/'+f,hash('analysis/'+f)]))};
fs.writeFileSync(dir+'/baseline.json',JSON.stringify(baseline,null,2)+'\n');
const generic=/^(Reliability of the described|Breadth and coherence|Reuse of the identified|Extent to which the described|Estimated distinct|Expected usefulness|Fit to the requested|Relevant scholarly|Estimated cumulative|Estimated conceptual|Retained current repository)/;
const clean=s=>typeof s==='string'?s.replace(/\s+/g,' ').trim():'';
const inputs=data.currentBooks.map(b=>{
 const texts=[b.note,b.assessment?.note,b.reason,b.eligibility,b.vetoReason,b.theme,b.scopeNote,b.densityAssessment?.learning,b.densityAssessment?.note,...(b.notes||[]),...(b.criteria||[]).map(c=>c.assessment)].map(clean).filter(s=>s&&!generic.test(s));
 const unique=[...new Set(texts)];
 return {id:b.id,title:b.title,author:b.author,status:b.status,veto:b.veto||null,raw:b.raw,total:b.total,
   character:unique[0]||'',evidence:unique,confidence:b.evidenceConfidence||b.scoreConfidence||b.confidence||'low',
   refs:[...new Set([...(b.evidence||[]),b.analysis,b.reviewAnchor,b.currentReview,b.scoreReview,...(b.priorReviews||[])].filter(x=>typeof x==='string'))],
   priority:(/no payload at all|total absence|some .*prevent|enough .*avoid V3|little .*causal|quips|motivational repetition|small idea|small payload/i.test(unique.join(' '))?100:0)+(b.raw[2]<=5?30:0)+(b.raw[3]<=4?20:0)+(b.raw[4]<=5?10:0)};
});
inputs.sort((a,b)=>b.priority-a.priority||a.raw[2]-b.raw[2]||a.id.localeCompare(b.id));
fs.writeFileSync(dir+'/inputs.json',JSON.stringify(inputs,null,2)+'\n');
console.log({books:inputs.length,recommended:inputs.filter(b=>b.status==='recommended').length,existingV3:inputs.filter(b=>/V3/.test(b.veto)).length,noCharacter:inputs.filter(b=>!b.character).length,priority:inputs.filter(b=>b.priority>=30).length});
