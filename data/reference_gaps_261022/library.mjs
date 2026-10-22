import fs from 'node:fs';
import crypto from 'node:crypto';
import {read,write,referenceRanges,norm} from '../reference_pages_261022/collect.mjs';
const dir='data/reference_gaps_261022',targets=read(`${dir}/targets.json`),out=[];
async function get(url){
 const file=`${dir}/raw/ol-${crypto.createHash('sha256').update(url).digest('hex').slice(0,16)}.json`;
 if(fs.existsSync(file))return {data:read(file),file,url};
 try{const r=await fetch(url,{signal:AbortSignal.timeout(20000)});if(!r.ok)return {url,status:r.status};const data=await r.json();write(file,data);return {data,file,url};}catch(e){return {url,error:e.message};}
}
for(let i=0;i<targets.length;i+=3){
 await Promise.all(targets.slice(i,i+3).map(async b=>{
  const s=await get(`https://openlibrary.org/search.json?title=${encodeURIComponent(b.title.split(':')[0])}&author=${encodeURIComponent(b.author.split(/;| & | with |, /)[0])}&limit=5&fields=key,title,author_name`);
  const row={...b,search:s,candidates:[]};out.push(row);
  for(const work of (s.data?.docs||[]).slice(0,2)){
   const e=await get(`https://openlibrary.org${work.key}/editions.json?limit=100`);
   row.editionSource=e.file;row.editionUrl=e.url;
   for(const d of e.data?.entries||[]){const r=referenceRanges(d);if(r.pages)row.candidates.push({work,edition:d,ranges:r.spans,pages:r.pages,file:e.file,url:e.url});}
  }
 }));write(`${dir}/library.json`,out);console.log(`${Math.min(i+3,100)}/100; candidates for ${out.filter(b=>b.candidates.length).length} books`);
 await new Promise(r=>setTimeout(r,1000));
}
