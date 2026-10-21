import fs from 'node:fs';
import crypto from 'node:crypto';
const dir='data/books_guru_261021/';
const input=JSON.parse(fs.readFileSync(dir+'c-input.json','utf8'));
const excluded=new Set(fs.readFileSync(dir+'c-exclusions.txt','utf8').trim().split(/\r?\n/).map(x=>x.split('|')[0]));
const file=dir+'c-amazon.json';
const records=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):[];
const clean=s=>String(s||'').replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\s+/g,' ').trim();
let cursor=0;
const candidates=input.filter(x=>!excluded.has(x.id)&&!records.some(r=>r.id===x.id));
const save=()=>fs.writeFileSync(file,JSON.stringify(records,null,2)+'\n');
await Promise.all(Array.from({length:3},async()=>{while(cursor<candidates.length){
 const b=candidates[cursor++];
 const url=b.occurrences.map(x=>x.productURL).find(Boolean)?.split('?')[0];
 const r={id:b.id,title:b.title,author:b.author,url,attemptedAt:new Date().toISOString(),count:null,status:'Unknown; no verified total-rating aggregate. O15=0 fallback.'};
 try{
  const response=await fetch(url,{signal:AbortSignal.timeout(12000)});
  const html=await response.text();
  r.httpStatus=response.status;r.finalUrl=response.url;
  r.productTitle=clean(html.match(/id="productTitle"[^>]*>([\s\S]*?)<\/span>/)?.[1]);
  r.byline=clean(html.match(/id="bylineInfo"[^>]*>([\s\S]*?)<\/div>/)?.[1]);
  r.pageTitle=clean(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]);
  r.topSnippet=html.match(/<span[^>]*id="acrCustomerReviewText"[^>]*>[\s\S]*?<\/span>/)?.[0]||null;
  r.globalSnippet=html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||null;
  r.ratingCountSnippets=[...html.matchAll(/.{0,100}(?:global ratings|global Bewertungen|"ratingCount"\s*:).{0,100}/gi)].map(x=>x[0]).slice(0,8);
  r.snapshot=dir+'c-amazon-'+b.id+'.html';r.sha256=crypto.createHash('sha256').update(html).digest('hex');
  fs.writeFileSync(r.snapshot,html);
  r.status=r.productTitle?'Product retrieved; requires title/author and explicit total-ratings audit. Reviews-only counts are not accepted.':'No usable product identity returned; unknown aggregate, O15=0 fallback.';
 }catch(e){r.error=e.message+(e.cause?.code?' '+e.cause.code:'');}
 records.push(r);save();
 if(records.length%10===0||cursor===candidates.length)console.log(JSON.stringify({done:records.length,last:b.title,product:!!r.productTitle,ratingCandidates:r.ratingCountSnippets?.length||0,error:r.error}));
}}));
save();
