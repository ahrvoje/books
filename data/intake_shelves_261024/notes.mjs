import fs from 'node:fs';import {dir,read,write,clean} from './capture.mjs';
const q=read(dir+'/research-queue.json').filter(b=>b.mentions?.some(r=>r.source===251)),jobs=q.map(b=>({id:b.id,url:new URL(b.mentions.find(r=>r.source===251).url,'https://sive.rs').href}));
fs.mkdirSync(dir+'/notes',{recursive:true});let index=0;
await Promise.all(Array.from({length:8},async()=>{while(index<jobs.length){const j=jobs[index++],file=dir+'/notes/'+j.id+'.json';if(fs.existsSync(file))continue;try{const r=await fetch(j.url,{signal:AbortSignal.timeout(20000)}),h=await r.text();write(file,{...j,status:r.status,text:clean(h),retrieved:new Date().toISOString()});}catch(e){write(file,{...j,error:String(e)});}if(index%50===0)console.log(index+'/'+jobs.length);}}));
