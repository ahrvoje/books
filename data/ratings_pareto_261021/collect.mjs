import fs from 'node:fs';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import {amazonFields,titleMatches,authorMatches,products,clean} from '../pages_density_261021/collect.mjs';
const dir='data/ratings_pareto_261021/', read=p=>JSON.parse(fs.readFileSync(p));
fs.mkdirSync(dir+'raw',{recursive:true});
const catalog=read(read('data/catalog.json').compiled), books=catalog.currentBooks.filter(b=>b.amazon?.count==null);
const editions={...Object.fromEntries(Object.entries(read('site/enrichment.json').books).map(([id,b])=>[id,b.edition])),...read('site/editions.json')};
const state=fs.existsSync(dir+'ratings.json')?read(dir+'ratings.json'):{books:{},started:new Date().toISOString()};
for(const b of books)state.books[b.id]||={id:b.id,title:b.title,author:b.author,status:b.status,count:null,attempts:[]};
const save=()=>fs.writeFileSync(dir+'ratings.json',JSON.stringify(state,null,2)+'\n');
const log=stage=>{save();console.log(JSON.stringify({stage,total:books.length,recovered:Object.values(state.books).filter(b=>b.count!==null).length,attempted:Object.values(state.books).filter(b=>b.attempts.length).length,stop:state.stop}));};
function assess(b,html,meta){
 const f=amazonFields(html), text=clean(html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||""), match=text.match(/([\d,]+)\s+global ratings\b/i);
 const count=match?Number(match[1].replaceAll(',','')):null;
 const titleMatch=titleMatches(b.title,f.title),authorMatch=authorMatches(b.author,f.byline);
 const accepted=meta.status===200&&titleMatch&&authorMatch&&Number.isSafeInteger(count)&&count>=0;
 const a={...meta,title:f.title,byline:f.byline,productId:f.productId||meta.url.match(/\/dp\/([A-Z0-9]{10})/)?.[1],titleMatch,authorMatch,count,evidence:match?.[0]||null,accepted};
 state.books[b.id].attempts.push(a);
 if(accepted)Object.assign(state.books[b.id],{count,verified:a});
}
if(process.argv[2]==='cache'){
 const pages=read('data/pages_density_261021/progress.json');
 for(const b of books)for(const a of pages.books[b.id]?.attempts||[]){
  if(state.books[b.id].count!==null||a.kind!=='amazon'||!a.rawFile||a.status!==200)continue;
  const file='data/pages_density_261021/'+a.rawFile;if(!fs.existsSync(file)||state.books[b.id].attempts.some(x=>x.rawFile===file))continue;
  assess(b,zlib.gunzipSync(fs.readFileSync(file)).toString(),{url:a.url,retrieved:a.retrieved,status:200,rawFile:file,origin:'Saved public product response'});
 }
 log('Cached product evidence');
}
function isbn10(s){s=String(s||'').replace(/[^\dX]/gi,'');if(s.length===10)return s;if(s.length!==13||!s.startsWith('978'))return null;const t=s.slice(3,12),c=(11-[...t].reduce((a,v,i)=>a+Number(v)*(10-i),0)%11)%11;return t+(c===10?'X':c);}
if(process.argv[2]==='fetch'){
 if(state.stop){log('Stopped; recorded service access limit');process.exit(0);}
 let cursor=0,next=0;const pending=books.filter(b=>state.books[b.id].count===null);
 await Promise.all(Array.from({length:3},async()=>{while(cursor<pending.length&&!state.stop){
  const b=pending[cursor++],e=editions[b.id],ids=[...new Set([...products(b),e?.id?.replace(/^(?:ASIN|ISBN):/,''),...(e?.isbn10||[]),...(e?.isbn13||[])].map(x=>x&&(/^[A-Z0-9]{10}$/.test(x)?x:isbn10(x))).filter(Boolean))].slice(0,3);
  if(!ids.length)state.books[b.id].reason='No verified product identifier in retained book or edition records.';
  for(const id of ids){
   if(state.books[b.id].count!==null||state.stop)break;
   const url='https://www.amazon.com.au/dp/'+id;
   if(state.books[b.id].attempts.some(a=>a.url===url&&a.origin==='Current public product response'))continue;
   const wait=Math.max(Date.now(),next);next=wait+500;await new Promise(r=>setTimeout(r,wait-Date.now()));if(state.stop)break;
   const meta={url,retrieved:new Date().toISOString(),origin:'Current public product response'};
   try{
    const res=await fetch(url,{signal:AbortSignal.timeout(20000),headers:{'User-Agent':'PersonalBookCatalogResearch/1.0'}}),html=await res.text();
    meta.url=res.url;meta.status=res.status;meta.rawFile=dir+'raw/'+b.id+'-'+id+'.html.gz';meta.sha256=crypto.createHash('sha256').update(html).digest('hex');fs.writeFileSync(meta.rawFile,zlib.gzipSync(html));
    if(/validateCaptcha|Robot Check|Server Busy/i.test(html)||res.status===429){state.stop='Public product access challenge or rate limit; collection stopped without bypass.';state.books[b.id].attempts.push({...meta,accepted:false,reason:state.stop});break;}
    assess(b,html,meta);
   }catch(error){state.books[b.id].attempts.push({...meta,accepted:false,error:error.message});}
  }
  if(cursor%25===0)log('Live products '+cursor+'/'+pending.length);
 }}));log('Collection finished');
}
