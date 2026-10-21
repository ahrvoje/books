import fs from 'node:fs';
import assert from 'node:assert/strict';
import {duplicates,fictionIds,canonical,technical} from './decisions.mjs';
import assessments from './assessments.mjs';
const j=p=>JSON.parse(fs.readFileSync(p)),dir='data/source_review_261021/',baseline=j('data/catalog.json').compiled,c=j(baseline),pending=j('data/source_batch_261021/pending.json'),map=new Map(pending.map(b=>[b.batchId,b]));
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().replace(/^(the|a|an) /,'');
const core=s=>norm(s.split(/:|\(|, (?:10th|New|Restored)/)[0]);
const selected=[...Object.keys(duplicates),...fictionIds,...Object.keys(technical),...assessments.map(b=>b.batchId)];assert.equal(new Set(selected).size,selected.length);
const resolved=[],newEx=[],seen=new Map();
for(const id of selected){const w=map.get(id);assert(w,id);if(assessments.some(b=>b.batchId===id))continue;
 let [title,author]=canonical[id]||[w.title.replace(/\s*\([^)]*(?:#\d|Trilogy|Chronicles of Narnia)[^)]*\)/g,'').trim(),w.author];
 let target=duplicates[id]?.[0],reason=duplicates[id]?.[1],rule=technical[id]?'H3':'H2';
 if(!target){const candidates=c.exclusions.filter(b=>core(b.title)===core(title)&&norm(b.author).split(' ').filter(t=>t.length>3).some(t=>norm(author).split(' ').includes(t)));assert(candidates.length<2,'Ambiguous: '+id);target=candidates[0]?.id;}
 const duplicateKey=core(title)+'|'+norm(author);target||=seen.get(duplicateKey);
 if(!target){target='sr-'+id;seen.set(duplicateKey,target);reason=technical[id]?.reason||'H2: fictional narrative or drama. Educational value, historical setting and awards do not override the fiction exclusion.';
 const refs=[...new Set(w.mentions.map(m=>m.sourceURL)),...(technical[id]?.refs||[])];if(Number(id.slice(1))>=610&&Number(id.slice(1))<=699&&!['u0662','u0666','u0673'].includes(id))refs.push('https://www.pulitzer.org/prize-winners-by-category/219');if(['u0662','u0666'].includes(id))refs.push('https://www.pulitzer.org/prize-winners-by-category/218');
 newEx.push({id:target,title,author,status:'excluded',exclusion:rule,reason,confidence:'high',sources:[],evidence:refs,line:`- ${title} — ${author}`});}
 resolved.push({batchId:id,catalogId:target,title,author,reason:reason||'Same work: normalized title and author identity agree with the existing exclusion.',rule,prior:c.exclusions.find(b=>b.id===target)?.analysis||null,sources:[...new Set(w.mentions.map(m=>m.source))]});
}
const artifact={baseline,selected,newExclusions:newEx,resolved,assessmentIds:assessments.map(b=>b.batchId)};fs.writeFileSync(dir+'prepared.json',JSON.stringify(artifact,null,2)+'\n');
console.log({selected:selected.length,newExclusions:newEx.length,newAssessments:assessments.length,duplicates:resolved.filter(b=>!newEx.some(e=>e.id===b.catalogId)).map(b=>[b.batchId,b.title,b.catalogId]),withinBatchMerges:resolved.length-newEx.length});
for(const id of Object.values(duplicates).map(v=>v[0])){const b=c.exclusions.find(b=>b.id===id),[p]=b.analysis.split('#'),s=fs.readFileSync(p,'utf8'),i=s.indexOf(`<a id="${id}"`);assert(i>=0);console.log(s.slice(i,i+650));}
