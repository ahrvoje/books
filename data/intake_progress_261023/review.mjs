import fs from 'node:fs';
const d='data/intake_progress_261023',p=JSON.parse(fs.readFileSync(d+'/pending.json'));
const start=+(process.argv[2]||0),end=+(process.argv[3]||start+50);
for(const b of p.slice(start,end)){let m={};try{m=JSON.parse(fs.readFileSync(d+'/metadata/'+b.index+'.json'));}catch{}let doc=m.search?.docs?.[0],w=m.work;let desc=w?.description?.value||w?.description||'';console.log(JSON.stringify({i:b.index,title:b.title,source:b.sources,author:b.author,match:doc&&[doc.title,doc.author_name,doc.first_publish_year,doc.key],description:desc.slice(0,+(process.argv[4]||650)),subjects:w?.subjects?.slice(0,12)}));}
