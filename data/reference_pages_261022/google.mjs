import fs from 'node:fs';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import {books,read,write,DIR,referenceRanges,matches} from './collect.mjs';
const editions=read('site/editions.json'),enrichment=read('site/enrichment.json').books,known=read('site/reference-pages.json'),manual=read(`${DIR}/manual.json`);
const file=`${DIR}/google-progress.json`,state=fs.existsSync(file)?read(file):{};
const clean=s=>String(s||'').replace(/<[^>]*>/g,' ').replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&#x([\da-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim();
function parse(html,url,b){
 const heading=clean(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]);
 const title=heading.split(' - ')[0],author=heading.split(' - ').slice(1,-1).join(' ');
 if(!matches(b,{title,by_statement:author}))return null;
 const toc=[...html.matchAll(/<td class="toc_entry"[^>]*>([\s\S]*?)<td class="toc_number"[^>]*>(\d+)<\/td>/g)].map(m=>({title:clean(m[1]),pagenum:m[2]}));
 const sorted=[...new Map(toc.map(r=>[r.title+'|'+r.pagenum,r])).values()].sort((a,b)=>+a.pagenum-+b.pagenum);
 const ranges=referenceRanges({table_of_contents:sorted});if(!ranges.pages)return null;
 const id=html.match(/"volume_id":"([^"]+)"/)?.[1]||new URL(url).searchParams.get('id');
 return {pages:ranges.pages,confidence:'moderate',method:'google-contents-boundaries',ranges:ranges.spans,edition:{id:`GoogleBooks:${id}`,title,author,language:'English title and numbered contents; edition language not separately catalogued'},url:`https://books.google.com/books?id=${id}&hl=en`,sameEditionAsPG:false,limitation:'Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.'};
}
let blocked=0;
async function fetchPage(url){
 const key=crypto.createHash('sha256').update(url).digest('hex').slice(0,16),file=`${DIR}/raw/google-${key}.html.gz`;
 if(fs.existsSync(file))return {html:zlib.gunzipSync(fs.readFileSync(file)).toString(),source:read(file+'.meta.json')};
 const source={url,file,retrieved:'2026-10-22'};
 try{const r=await fetch(url,{signal:AbortSignal.timeout(18000)});source.status=r.status;const html=await r.text();fs.writeFileSync(file,zlib.gzipSync(html));write(file+'.meta.json',source);if(r.status===429||r.status===403)blocked++;return {html,source};}catch(e){source.error=e.message;write(file+'.meta.json',source);return {html:'',source};}
}
const pending=books.filter(b=>!state[b.id]&&(known[b.id].pages===null&&!manual[b.id]||books.indexOf(b)<100&&!manual[b.id]));
async function collect(b){
 const e=editions[b.id]||enrichment[b.id]?.edition;
 const isbn=[e?.id?.replace(/^(ISBN|ASIN):/,''),...e?.isbn13||[],...e?.isbn10||[],b.amazon?.asin].find(s=>/^(\d{13}|\d{9}[\dX])$/.test(s||''));
 const record={id:b.id,title:b.title,pages:null,attempts:[]};state[b.id]=record;
 if(!isbn){record.reason='No edition ISBN available for Google Books lookup.';return;}
 if(['q0220','q0484'].includes(b.id)||/\b(?:series|trilogy|volumes)\b/i.test(b.title)){record.reason='A series requires complete-set reference counts.';return;}
 const r=await fetchPage(`https://books.google.com/books?vid=ISBN${isbn}&hl=en`);record.attempts.push(r.source);
 const accepted=parse(r.html,r.source.url,b);if(accepted){Object.assign(record,accepted,{source:r.source});return;}
 const json=r.html.match(/fn\('book_other_versions',\s*(\[[\s\S]*?\])\);/)?.[1];
 let alternatives=[];try{alternatives=JSON.parse(json||'[]');}catch{}
 const alternative=alternatives.find(a=>['partial','full'].includes(a.preview)&&matches(b,{title:a.title,by_statement:a.authors}));
 if(alternative?.info_url){const url=new URL(alternative.info_url);url.hostname='books.google.com';url.searchParams.set('hl','en');const r=await fetchPage(url.href);record.attempts.push(r.source);const accepted=parse(r.html,r.source.url,b);if(accepted)Object.assign(record,accepted,{source:r.source});}
 if(record.pages===null)record.reason='No matching, numbered reference section with a closing boundary in the inspected Google Books edition.';
}
for(let i=0;i<pending.length;i+=4){
 await Promise.all(pending.slice(i,i+4).map(collect));
 write(file,state);if(i%40===0)console.log(JSON.stringify({processed:i+4,total:pending.length,known:Object.values(state).filter(r=>r.pages!==null).length,blocked}));
 if(blocked>=3){console.log('Stopping Google Books retrieval after repeated access blocks.');break;}
 await new Promise(r=>setTimeout(r,700));
}
write(file,state);
