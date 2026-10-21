import fs from 'node:fs/promises';
const dir='data/sources_261020/hn';
const jobs=JSON.parse(await fs.readFile(`${dir}/research-jobs.json`));
let results={};try{results=JSON.parse(await fs.readFile(`${dir}/research-results.json`));}catch{}
for(const[name,url]of jobs){
 if(results[name]?.status)continue;
 const r0={url,retrieved:new Date().toISOString()};
 try{const r=await fetch(url,{signal:AbortSignal.timeout(25000)});const raw=Buffer.from(await r.arrayBuffer());r0.status=r.status;r0.bytes=raw.length;r0.rawFile=`${dir}/raw/research-${name}`;await fs.writeFile(r0.rawFile,raw);}catch(e){r0.error=String(e);}
 results[name]=r0;await fs.writeFile(`${dir}/research-results.json`,JSON.stringify(results,null,2));console.log(r0);
}
