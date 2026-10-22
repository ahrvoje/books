import fs from 'node:fs';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/rating_gaps_261022/',s=JSON.parse(fs.readFileSync(dir+'captures.json'));
const out=fs.existsSync(dir+'discovery.json')?JSON.parse(fs.readFileSync(dir+'discovery.json')):{};
for(const b of Object.values(s.books).filter(b=>!b.amazon)){
 if(out[b.id])continue;
 const url='https://openlibrary.org/search.json?title='+encodeURIComponent(b.title.split(':')[0])+'&author='+encodeURIComponent(b.author.split(/;|,/)[0])+'&fields=key,title,author_name,isbn&limit=5';
 try{const r=await fetch(url,{signal:AbortSignal.timeout(12000)}),d=await r.json();out[b.id]={url,retrieved:new Date().toISOString(),docs:d.docs||[]};}catch(e){out[b.id]={url,error:String(e)};}
 fs.writeFileSync(dir+'discovery.json',JSON.stringify(out,null,2)+'\n');
 console.log(b.id,out[b.id].docs?.length||0);
 await new Promise(r=>setTimeout(r,1100));
}
