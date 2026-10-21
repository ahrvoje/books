import fs from 'node:fs';
import crypto from 'node:crypto';
const dir='data/remaining_261021/';fs.mkdirSync(dir+'raw',{recursive:true});
const pending=JSON.parse(fs.readFileSync('data/source_batch_261021/pending.json'));
if(!fs.existsSync(dir+'pending-start.json'))fs.writeFileSync(dir+'pending-start.json',JSON.stringify(pending,null,2));
const state=fs.existsSync(dir+'metadata.json')?JSON.parse(fs.readFileSync(dir+'metadata.json')):{};
const pause=ms=>new Promise(r=>setTimeout(r,ms));let last=0;
for(const b of pending){if(state[b.batchId])continue;
 let title=b.title.split(/:|\(|\s[—–]\s/)[0].trim();
 const author=b.author?.split(/,|;|\s&\s|\sand\s|\//)[0].trim();
 const url='https://openlibrary.org/search.json?'+new URLSearchParams({title,...(author?{author}:{}),limit:'3',fields:'key,title,subtitle,author_name,first_publish_year,isbn,language,subject,edition_key'});
 await pause(Math.max(0,1150-(Date.now()-last)));last=Date.now();const retrieved=new Date().toISOString();
 try{const r=await fetch(url,{headers:{'User-Agent':'PersonalBookCatalogResearch/1.0'},signal:AbortSignal.timeout(20000)}),body=await r.text();const raw=dir+'raw/'+b.batchId+'-search.json';fs.writeFileSync(raw,body);state[b.batchId]={url,retrieved,status:r.status,sha256:crypto.createHash('sha256').update(body).digest('hex'),raw,docs:JSON.parse(body).docs};if(r.status===429){delete state[b.batchId];console.log('Rate limited; stopping without retry loop.');break;}}
 catch(e){state[b.batchId]={url,retrieved,error:String(e)};}
 fs.writeFileSync(dir+'metadata.json',JSON.stringify(state,null,2));if(Object.keys(state).length%25===0)console.log(Object.keys(state).length+'/'+pending.length,b.title);
}
console.log('Saved',Object.keys(state).length);
