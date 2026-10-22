import fs from 'node:fs';
import {read,write,referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/reference_gaps_261022';
const targets=read(`${dir}/targets.json`),ed=read('site/editions.json'),en=read('site/enrichment.json').books;
fs.mkdirSync(`${dir}/raw`,{recursive:true});
const clean=s=>s.replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const results=[];
for(let i=0;i<targets.length;i+=4){
 await Promise.all(targets.slice(i,i+4).map(async b=>{
  const e=ed[b.id]||en[b.id]?.edition;
  const isbn=[...(e?.isbn13||[]),e?.id?.replace(/^(?:ISBN|ASIN|ISBN\/ASIN):/,''),...(e?.isbn10||[])].find(x=>/^(?:\d{13}|\d{9}[\dX])$/.test(x));
  const r={...b,isbn,url:isbn?`https://www.betterworldbooks.com/product/detail/${isbn}`:null};results.push(r);
  if(!isbn)return;
  const file=`${dir}/raw/${b.id}.html`;r.file=file;
  try{
   let html;if(fs.existsSync(file))html=fs.readFileSync(file,'utf8');else {const res=await fetch(r.url,{signal:AbortSignal.timeout(20000)});r.status=res.status;html=await res.text();fs.writeFileSync(file,html);}
   r.heading=clean(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]||'');
   r.toc=[...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map(m=>[...m[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)].map(x=>clean(x[1]))).filter(x=>x.length>=2).map(x=>({title:x[0],pagenum:x[1].replace(/^p\.\s*/,'' )}));
   r.ranges=referenceRanges({table_of_contents:r.toc});
   r.hints=clean(html).match(/.{0,80}(?:Bibliography|References|Notes|Index).{0,100}/g)?.slice(-30);
  }catch(err){r.error=err.message;}
 }));
 write(`${dir}/bwb.json`,results);console.log(`${Math.min(i+4,100)}/100: ${results.filter(r=>r.ranges?.pages).length} numeric candidates`);
}
