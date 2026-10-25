import fs from 'node:fs';
import zlib from 'node:zlib';
import {amazonFields,titleMatches,authorMatches,products,clean} from '../pages_density_261021/collect.mjs';
const dir='data/metadata1000_261025',read=p=>JSON.parse(fs.readFileSync(p)),books=read(dir+'/targets.json');
const state=fs.existsSync(dir+'/amazon.json')?read(dir+'/amazon.json'):{books:{},intervalMs:60000};
const save=()=>fs.writeFileSync(dir+'/amazon.json',JSON.stringify(state,null,2)+'\n');
const isbn10=value=>{const s=String(value||'').replace(/^ISBN(?:\/ASIN)?:/,'');if(/^\d{9}[\dX]$/.test(s))return s;if(!/^978\d{10}$/.test(s))return null;const t=s.slice(3,12),n=(11-[...t].reduce((sum,c,i)=>sum+(10-i)*+c,0)%11)%11;return t+(n===10?'X':n);};
for(const b of books){
 if(state.blocked)break;
 if(b.amazon?.count!=null||/\bseries|trilogy|volumes\b/i.test(b.title))continue;
 const s=state.books[b.id]||={attempts:[]};if(s.done)continue;
 const lib=read(dir+'/library.json').books[b.id];
 const ids=[...new Set([...products(b),b.edition?.id,...b.edition?.isbn10||[],...b.edition?.isbn13||[],...(lib?.identities||[]).sort((a,b)=>Number(/paper/i.test(b.format))-Number(/paper/i.test(a.format))).flatMap(x=>x.isbn)].map(isbn10).filter(Boolean))].slice(0,3);
 for(const id of ids){
  await new Promise(r=>setTimeout(r,Math.max(0,(state.lastRequest||0)+state.intervalMs-Date.now())));state.lastRequest=Date.now();save();
  const url='https://www.amazon.com/dp/'+id,rawFile=dir+'/raw/amazon-'+b.id+'-'+id+'.html.gz',a={url,rawFile,retrieved:new Date().toISOString()};
  try{
   const r=await fetch(url,{signal:AbortSignal.timeout(25000)}),h=await r.text();a.status=r.status;fs.writeFileSync(rawFile,zlib.gzipSync(h));
   if([403,429,503].includes(r.status)||/validateCaptcha|robot check/i.test(h)){state.blocked={...a,reason:'Access challenge; direct Amazon requests stopped without changing region or identity.'};s.attempts.push(a);save();break;}
   const f=amazonFields(h);Object.assign(a,{title:f.title,byline:f.byline,format:f.format,titleMatch:titleMatches(b.title,f.title),authorMatch:authorMatches(b.author,f.byline)});
   if(r.status===200&&a.titleMatch&&a.authorMatch&&(!f.productId||f.productId===id)){
    const text=clean(h.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||''),m=text.match(/([\d,]+)\s+global ratings?\b/i);
    if(m&&+m[1].replaceAll(',','')>0)s.amazon={count:+m[1].replaceAll(',',''),url,asin:id,marketplace:'amazon.com',retrievedAt:a.retrieved,verifiedAt:a.retrieved,verified:true,confidence:'high',productTitle:f.title,byline:f.byline,evidence:[m[0]],sourceSnapshot:rawFile,status:'Single matching product aggregate. No claim to exhaustive edition comparison. Zero requires a separate best-edition review.'};
    if(/Paperback|Hardcover/i.test(f.format||'')&&f.language==='English')s.product={id,url,title:f.title,author:f.byline,format:f.format,language:f.language,sourceSnapshot:rawFile};
    if(!b.edition&&f.pages&&f.year&&f.language==='English'&&/Paperback|Hardcover/i.test(f.format||''))s.edition={id:'ISBN/ASIN:'+id,pages:f.pages,format:f.format,language:f.language,year:f.year,url,retrieved:a.retrieved,confidence:'high',notes:'Matching English print product; '+rawFile};
    a.zeroCandidate=/no customer reviews|0 global ratings/i.test(h);
   }
  }catch(e){a.error=e.message;}
  s.attempts.push(a);save();if(s.amazon)break;
 }
 s.done=true;save();console.log(JSON.stringify({rank:b.rank,title:b.title,count:s.amazon?.count,blocked:!!state.blocked}));
}
save();
