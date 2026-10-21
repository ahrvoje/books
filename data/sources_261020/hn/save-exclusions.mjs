import fs from 'node:fs';
const dir='data/sources_261020/hn';
const packet=JSON.parse(fs.readFileSync(`${dir}/packet.json`));
const file=`${dir}/assessments.json`;
const current=fs.existsSync(file)?JSON.parse(fs.readFileSync(file)):[];
const decisions=fs.readFileSync(`${dir}/exclusion-decisions.tsv`,'utf8').trim().split(/\r?\n/).slice(1).map(x=>x.split('\t'));
for(const [index,exclusion,confidence,reason,refs] of decisions){
 const b=packet[+index];
 if(!b)throw Error(`Missing ${index}`);
 if(b.prior)throw Error(`Scored prior requires individual reassessment: ${index} ${b.id}`);
 const evidence=[...new Set([...b.appearances.flatMap(a=>(a.commentIds||[]).map(id=>`https://news.ycombinator.com/item?id=${id}`)),...(refs||'').split('|').filter(Boolean)])];
 const result={id:b.id,title:b.title,author:b.author,status:'excluded',confidence,exclusion,eligibility:reason,reason:`${reason} Apply ${exclusion} before vetoes or numerical assessment; no score assigned.`,evidence,reassessment:b.priorExcluded.length?'The prior hard exclusion remains. The newly inspected source identifies the same work and supplies no evidence that its primary form or purpose changes.':'New source work; primary form assessed before any quality or preference score.',audit:{reviewed:'2026-10-20',reviewedMaterials:b.appearances.map(a=>({source:a.source,commentIds:a.commentIds,readableThread:`data/sources_261020/hn/${a.source}-nodes.json`})),priorExclusion:b.priorExcluded,limitations:confidence==='moderate'?'Source context supports the genre, but exact translated-title or edition identity remains less secure.':'The gate depends on the identified narrative form, not judgments of literary merit.'}};
 if(+index===391)result.mergeInto=packet[225].id;
 if(+index===447)result.mergeInto=packet[294].id;
 if(+index===671)result.mergeInto=packet[476].id;
 if(+index===700)result.mergeInto=packet[200].id;
 const at=current.findIndex(x=>x.id===b.id);if(at>=0)current[at]=result;else current.push(result);
}
fs.writeFileSync(file,JSON.stringify(current,null,2)+'\n');
const done=new Set(current.map(x=>x.id));
fs.writeFileSync(`${dir}/unreviewed.json`,JSON.stringify(packet.filter(x=>!done.has(x.id)).map(x=>({id:x.id,title:x.title,author:x.author,priorStatus:x.prior?.status||null})),null,2)+'\n');
console.log({decisions:current.length,remaining:packet.length-done.size,statuses:current.reduce((a,x)=>(a[x.status]=(a[x.status]||0)+1,a),{})});
