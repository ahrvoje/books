import fs from 'node:fs';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import {referenceRanges,matches} from '../reference_pages_261022/collect.mjs';
import {clean} from '../pages_density_261021/collect.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p));
const t=read(dir+'targets.json'),library=read(dir+'library.json'),prior=read('data/reference_pages_261022/google-progress.json');
const state=fs.existsSync(dir+'google.json')?read(dir+'google.json'):{};
const save=()=>fs.writeFileSync(dir+'google.json',JSON.stringify(state,null,2)+'\n');
const cached=new Map();for(const r of Object.values(prior))for(const a of r.attempts||[])if(a.url&&a.file&&fs.existsSync(a.file))cached.set(a.url,a);
let last=0,blocked=false;
async function get(url){
 if(cached.has(url)){const source=cached.get(url);return {html:zlib.gunzipSync(fs.readFileSync(source.file)).toString(),source};}
 await new Promise(r=>setTimeout(r,Math.max(0,last+5000-Date.now())));last=Date.now();
 const file=dir+'raw/google-'+crypto.createHash('sha256').update(url).digest('hex').slice(0,16)+'.html.gz',source={url,file,retrieved:new Date().toISOString()};
 let html='';try{const r=await fetch(url,{signal:AbortSignal.timeout(22000)});source.status=r.status;html=await r.text();if([403,429].includes(r.status)||/unusual traffic|automated queries/i.test(html)){blocked=true;source.limitation='Rate-limit response; stopped further requests.';}fs.writeFileSync(file,zlib.gzipSync(html));}catch(e){source.error=e.message;}
 return {html,source};
}
for(const id of t.references){
 if(state[id]||library[id].reference)continue;
 const b=t.books.find(b=>b.id===id),r=state[id]={title:b.title,attempts:[],reference:null};
 if(/\b(series|trilogy|volumes)\b/i.test(b.title)){r.reason='An incomplete series cannot receive a single-volume reference count.';continue;}
 const e=b.edition||library[id].editions[0],isbn=[e?.id?.replace(/^.*:/,''),...e?.isbn||[],b.purchaseUrl.match(/\/dp\/(\d{9}[\dX])/i)?.[1]].find(x=>/^(?:\d{13}|\d{9}[\dX])$/.test(x||''));
 if(!isbn){r.reason='No verified ISBN for a Google Books edition lookup.';save();continue;}
 const url='https://books.google.com/books?vid=ISBN'+isbn+'&hl=en';
 const got=await get(url);r.attempts.push(got.source);
 const heading=clean(got.html.match(/<title>([\s\S]*?)<\/title>/)?.[1]),title=heading.split(' - ')[0],author=heading.split(' - ').slice(1,-1).join(' ');
 if(matches(b,{title,by_statement:author})){
  const toc=[...got.html.matchAll(/<td class="toc_entry"[^>]*>([\s\S]*?)<td class="toc_number"[^>]*>(\d+)<\/td>/g)].map(m=>({title:clean(m[1]),pagenum:m[2]}));
  const ranges=referenceRanges({table_of_contents:[...new Map(toc.map(r=>[r.title+'|'+r.pagenum,r])).values()].sort((a,b)=>+a.pagenum-+b.pagenum)});
  r.contents=toc;
  if(ranges.pages)r.reference={pages:ranges.pages,confidence:'moderate',method:'google-contents-boundaries',ranges:ranges.spans,edition:{id:'ISBN:'+isbn,title,author,language:e?.language||'English'},url,source:got.source,sameEditionAsPG:!!b.edition&&b.edition.id===e.id,limitation:'Only numbered reference sections with an explicit next-section boundary counted; contents can omit sections or include a final blank page.'};
 }
 if(!r.reference)r.reason='No matched, numbered reference section with a closing boundary in the retrieved edition.';
 save();console.log(id,r.reference?.pages??'unknown',got.source.status??'cached');if(blocked)break;
}
save();
