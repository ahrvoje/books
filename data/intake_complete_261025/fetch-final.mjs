import fs from 'node:fs';
const jobs=[['evolution','https://blog.ashodnakashian.com/library/stephen-jay-gould/evolution/'],['renaissance','https://archive.org/download/cu31924029761305/cu31924029761305_djvu.txt']];
for(const [name,url]of jobs){try{const r=await fetch(url,{signal:AbortSignal.timeout(25000)});const t=await r.text();fs.writeFileSync('data/intake_complete_261025/identity-'+name+(name==='renaissance'?'.txt':'.html'),t);console.log(name,r.status,t.length);}catch(e){console.log(name,String(e));}}
