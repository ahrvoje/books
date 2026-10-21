import fs from 'node:fs';
const dir='data/enrichment_261020/domains_b/',pd='data/enrichment_261020/pages/';
const pack=JSON.parse(fs.readFileSync(dir+'evidence.json','utf8')),a=JSON.parse(fs.readFileSync(dir+'assessments.json','utf8'));
const progress=JSON.parse(fs.readFileSync(pd+'progress.json','utf8')).books;
const cache=new Map(),out=[];
for(const [index,b] of pack.entries()){
 const r=progress[b.id];if(!r)continue;
 const seen=new Set();
 for(const t of r.attempts||[]){
  if(t.kind!=='ol-isbn'||!(t.accepted||(t.idMatch&&t.titleMatch&&t.authorMatch)))continue;
  const f=t.rawFile.startsWith('data/')?t.rawFile:pd+t.rawFile;if(!fs.existsSync(f))continue;
  if(!cache.has(f))cache.set(f,JSON.parse(fs.readFileSync(f,'utf8')));
  const d=cache.get(f)['ISBN:'+t.isbn]?.details;if(!d||seen.has(d.key))continue;seen.add(d.key);
  const desc=typeof d.description==='string'?d.description:d.description?.value||'';
  const toc=(d.table_of_contents||[]).map(x=>typeof x==='string'?x:[x.label,x.title,x.pagenum].filter(Boolean).join(' ')).join('; ');
  if(!desc&&!toc)continue;
  out.push({index,id:b.id,title:b.title,refs:['https://openlibrary.org'+d.key],rawFile:f,description:desc,contents:toc,alreadyGraded:Object.keys(a[b.id].domains).length>0});
 }
}
fs.writeFileSync(dir+'extra-evidence.json',JSON.stringify(out,null,2)+'\n');
const unknown=out.filter(b=>!b.alreadyGraded);console.log('metadata records',out.length,'ungraded',unknown.length);
const start=+process.argv[2]||0,end=+process.argv[3]||unknown.length;
for(const b of unknown.slice(start,end))console.log(b.index,b.id,b.title,'| D:',b.description.slice(0,1200),'| TOC:',b.contents.slice(0,1500));
