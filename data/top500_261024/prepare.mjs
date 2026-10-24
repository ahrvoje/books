import fs from 'node:fs';
import crypto from 'node:crypto';
const dir='data/top500_261024',read=p=>JSON.parse(fs.readFileSync(p)),write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
fs.mkdirSync(dir+'/raw',{recursive:true});
if(fs.existsSync(dir+'/targets.json'))throw Error('Cohort already fixed.');
const baseline=read('data/catalog.json'),c=read(baseline.compiled),e=read('site/editions.json'),r=read('site/reference-pages.json'),n=read('site/enrichment.json').books;
const ranked=c.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
const targets=ranked.map((b,i)=>({...b,rank:i+1,year:b.year||b.production?.year||+b.firstYear,edition:n[b.id]?.edition||e[b.id]||null,reference:r[b.id]||{pages:null}})).filter(b=>!b.edition||b.amazon?.count==null||b.reference.pages==null).slice(0,500);
write(dir+'/baseline.json',baseline);write(dir+'/targets.json',targets);
write(dir+'/input-hashes.json',Object.fromEntries(['AGENTS.md','RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','site/editions.json','site/reference-pages.json','site/enrichment.json','data/catalog.json',baseline.compiled].map(p=>[p,crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')])));
for(const name of ['collect.mjs','google.mjs']){
 let s=fs.readFileSync('data/top250_261023/'+name,'utf8').replaceAll('data/top250_261023',dir);
 s=s.replace('Date.now()+1500','Date.now()+3000').replace('last+2500','last+4000');
 // Stop on access limits; never retry a challenged host in this run.
 if(name==='collect.mjs'){
  s=s.replace("if(fs.existsSync(file))return read(file);","if(fs.existsSync(file))return read(file);\n  const host=new URL(url).host;if(state.blocked[host])return {url,error:'Host paused after access limit'};");
  s=s.replace('out.file=file;write(file,out);return out;',"if([403,429,503].includes(out.status))state.blocked[new URL(url).host]={url,status:out.status};out.file=file;write(file,out);return out;");
 }
 fs.writeFileSync(dir+'/'+name,s);
}
console.log({selected:targets.length,rankRange:[targets[0].rank,targets.at(-1).rank],missingPages:targets.filter(b=>!b.edition).length,missingRatings:targets.filter(b=>b.amazon?.count==null).length,missingReferences:targets.filter(b=>b.reference.pages==null).length});
