import fs from 'node:fs';
const dir='data/sources_261020/hn',file=`${dir}/reddit-assessments.json`;
const packet=JSON.parse(fs.readFileSync(`${dir}/reddit-transfer.json`));
const data=JSON.parse(fs.readFileSync(file));
const corrections=[
 ['g 0616','g0616'],['h 217','h217'],['q 0807','q0807'],['g 0117','g0117'],
 ['with6,599','with 6,599'],['remains0','remains 0'],['use2004','use 2004'],
 ['August12,2025','August 12, 2025'],['January6,2004','January 6, 2004'],
 ['August 12,2025','August 12, 2025'],['January 6,2004','January 6, 2004'],
 ['give256','give 256'],['figure224','figure 224']
];
for(const r of data)for(const key of ['reassessment','yearNote','periodNote'])if(r[key])for(const [a,b] of corrections)r[key]=r[key].replaceAll(a,b);
fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
const bad=[],max=[20,17,15,12,10,9,7,5,3,2],ids=new Set();
for(const r of data){
 if(ids.has(r.id))bad.push(`${r.id}: duplicate`);ids.add(r.id);
 if(!packet.some(b=>b.id===r.id))bad.push(`${r.id}: unknown identity`);
 if(!r.evidence?.length)bad.push(`${r.id}: missing evidence`);
 if(['recommended','vetoed'].includes(r.status)){
  for(const k of ['eligibility','reason','raw','notes','year','yearNote','themeNote','periodNote','amazon','enrichment'])if(r[k]===undefined)bad.push(`${r.id}: missing ${k}`);
  if(r.raw.length!==10||r.notes.length!==10||r.raw.some((n,i)=>!Number.isFinite(n)||n<0||n>max[i]))bad.push(`${r.id}: invalid score vector`);
  const id=r.enrichment.edition.id;
  if(id.length!==13||[...id].reduce((n,c,i)=>n+Number(c)*(i%2?3:1),0)%10)bad.push(`${r.id}: invalid ISBN ${id}`);
  if(!r.amazon.count||!r.amazon.attempts[0].ratingEvidence.includes('global ratings'))bad.push(`${r.id}: rating evidence`);
 }
 for(const ref of r.evidence.filter(s=>s.startsWith('analysis/'))){
  const [path,anchor]=ref.split('#');
  if(!fs.existsSync(path)||anchor&&!fs.readFileSync(path,'utf8').includes(`id="${anchor}"`))bad.push(`${r.id}: broken reference ${ref}`);
 }
}
for(const r of packet)if(!ids.has(r.id))bad.push(`${r.id}: missing decision`);
const audit={reviewed:new Date().toISOString(),assigned:packet.length,decisions:data.length,statuses:data.reduce((n,r)=>(n[r.status]=(n[r.status]||0)+1,n),{}),scoredWithExactEdition:data.filter(r=>r.enrichment?.edition).length,scoredWithVerifiedAmazon:data.filter(r=>Number.isInteger(r.amazon?.count)).length,issues:bad};
fs.writeFileSync(`${dir}/reddit-final-audit.json`,JSON.stringify(audit,null,2)+'\n');
console.log(audit);
