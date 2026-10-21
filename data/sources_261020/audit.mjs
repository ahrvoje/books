import fs from 'node:fs';
import path from 'node:path';
const root='data/sources_261020/',read=f=>JSON.parse(fs.readFileSync(f,'utf8').replace(/^\uFEFF/,'')),all=[];
for(const folder of ['primary','hn','math','reddit'])for(const file of fs.readdirSync(root+folder).filter(f=>f.endsWith('assessments.json'))){
 for(const b of read(root+folder+'/'+file))all.push({...b,file:folder+'/'+file});
}
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const byId=new Map(all.map(a=>[a.id,a])),identities=new Map(),issues=[];
for(const b of all){
 if(b.mergeInto){if(!byId.has(b.mergeInto))issues.push({type:'missing-alias-target',id:b.id,target:b.mergeInto});continue;}
 const k=norm(b.title)+'|'+norm(b.author);
 if(identities.has(k))issues.push({type:'duplicate-identity',ids:[identities.get(k),b.id],title:b.title});
 identities.set(k,b.id);
 const refs=[...(b.evidence||[]),...(b.amazon?.attempts||[]),...(b.amazon?.attemptFiles||[]),
  ...Object.values(b.enrichment?.domains||{}).flatMap(d=>d.refs||[]),...(b.enrichment?.connections?.mechanisms||[]).flatMap(m=>m.refs||[])];
 for(const ref of [...new Set(refs.filter(r=>typeof r==='string'))]){
  if(!/^(analysis\/|data\/)/.test(ref))continue;
  const [file,anchor]=ref.split('#');
  if(!fs.existsSync(file)){issues.push({type:'missing-local-reference',id:b.id,ref});continue;}
  if(anchor&&file.endsWith('.json'))issues.push({type:'json-fragment',id:b.id,ref});
  if(anchor&&file.endsWith('.md')){
   const text=fs.readFileSync(file,'utf8');
   if(!text.includes(`id="${anchor}"`)&&!text.includes(`id='${anchor}'`)&&!text.toLowerCase().includes(anchor.replace(/-/g,' ')))
    issues.push({type:'unverified-markdown-anchor',id:b.id,ref});
  }
 }
}
const inventory=read(root+'inventory.json');
const report={assessments:all.length,uniqueIds:byId.size,issues,missing:inventory.books.filter(b=>!byId.has(b.id)).map(b=>({id:b.id,title:b.title,owner:b.owner}))};
fs.writeFileSync(root+'audit.json',JSON.stringify(report,null,2)+'\n');
const types={};for(const i of issues)types[i.type]=(types[i.type]||0)+1;
console.log(JSON.stringify({assessments:all.length,uniqueIds:byId.size,missing:report.missing.length,issues:types,sample:issues.slice(0,12)}));
if(process.argv[2])console.log(JSON.stringify(issues.filter(i=>i.type===process.argv[2])));
