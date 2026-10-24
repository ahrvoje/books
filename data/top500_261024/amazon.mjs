import fs from 'node:fs';
import zlib from 'node:zlib';
import {amazonFields,titleMatches,authorMatches,products,clean} from '../pages_density_261021/collect.mjs';
const dir='data/top500_261024',read=p=>JSON.parse(fs.readFileSync(p)),write=(p,v)=>{fs.writeFileSync(p+'.tmp',JSON.stringify(v,null,2)+'\n');fs.renameSync(p+'.tmp',p);};
const books=read(dir+'/targets.json'),state=fs.existsSync(dir+'/amazon.json')?read(dir+'/amazon.json'):{books:{},intervalMs:45000,blockedHosts:[]};
const save=()=>write(dir+'/amazon.json',state),sleep=ms=>new Promise(r=>setTimeout(r,ms));
const isbn10=value=>{const s=String(value||'').replace(/^ISBN(?:\/ASIN)?:/,'');if(/^\d{9}[\dX]$/.test(s))return s;if(!/^978\d{10}$/.test(s))return null;const t=s.slice(3,12),n=(11-[...t].reduce((sum,c,i)=>sum+(10-i)*+c,0)%11)%11;return t+(n===10?'X':n);};
const series=new Set(['intake-0190','intake-0203','progress-0677','progress-0817','intake-0172','n88837eb597']);
for(const [i,b]of books.entries()){
 if(state.blocked)break;
 const s=state.books[b.id]||={attempts:[]};if(s.done)continue;
 if(b.amazon?.count!=null){s.done=true;s.reason='Existing verified aggregate retained.';save();continue;}
 if(series.has(b.id)){s.done=true;s.reason='No full-series product aggregate established; individual-volume counts are not applicable.';save();continue;}
 if(s.amazon?.count>0){s.done=true;s.reason='Verified positive aggregate already established; avoid redundant requests.';save();continue;}
 const library=read(dir+'/progress.json').books[b.id];
 const preferred=(library?.identities||[]).filter(x=>/paper/i.test(x.format)).flatMap(x=>x.isbn);
 const manual=Object.assign({},...fs.readdirSync(dir).filter(f=>/^manual(?:-\d+)?\.json$/.test(f)).map(f=>read(dir+'/'+f)[b.id]).filter(Boolean));
 const candidates=[manual?.productCandidate?.id,manual?.product?.id,...preferred,manual?.edition?.id,b.edition?.id,...b.edition?.isbn10||[],...b.edition?.isbn13||[],manual?.reference?.id,manual?.referenceRecord?.edition?.id,...products(b),...(library?.identities||[]).flatMap(x=>x.isbn)];
 const printIds=[...new Set(candidates.map(isbn10).filter(Boolean))];
 const ids=(printIds.length?printIds:candidates.filter(id=>/^B0[A-Z0-9]{8}$/.test(id))).filter(id=>!s.attempts.some(a=>a.url.endsWith('/'+id))).slice(0,Math.max(0,3-s.attempts.length));
 for(const id of ids){
  // Inspect up to three known editions and retain the largest single aggregate.
  if(s.attempts.some(a=>a.url.endsWith('/'+id)))continue;
  await sleep(Math.max(0,(state.lastRequest||0)+state.intervalMs-Date.now()));state.lastRequest=Date.now();save();
  const url='https://www.amazon.com.au/dp/'+id,rawFile=dir+'/raw/amazon-'+b.id+'-'+id+'.html.gz',a={url,retrieved:new Date().toISOString(),rawFile};
  try{
   const r=await fetch(url,{signal:AbortSignal.timeout(25000)}),h=await r.text();a.status=r.status;fs.writeFileSync(rawFile,zlib.gzipSync(h));
   if([403,429,503].includes(r.status)||/validateCaptcha|robot check/i.test(h)){state.blocked={...a,reason:'Access challenge or rate limit; no further automated requests.'};s.attempts.push(a);break;}
   const f=amazonFields(h);Object.assign(a,{title:f.title,byline:f.byline,format:f.format,titleMatch:titleMatches(b.title,f.title),authorMatch:authorMatches(b.author,f.byline)});
   if(r.status===200&&a.titleMatch&&a.authorMatch&&(!f.productId||f.productId===id)){
    const text=clean(h.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||'');
    const m=text.match(/([\d,]+)\s+global ratings?\b/i);
    if(m && (!s.amazon || +m[1].replaceAll(',','') > s.amazon.count))s.amazon={count:+m[1].replaceAll(',',''),url,asin:id,marketplace:'amazon.com.au',retrievedAt:a.retrieved,verifiedAt:a.retrieved,verified:true,confidence:'high',productTitle:f.title,byline:f.byline,evidence:[m[0]],sourceSnapshot:rawFile,stars:Number(h.match(/id="acrPopover"[^>]*title="([\d.]+) out of 5 stars/)?.[1])||null,status:'One matching Amazon Australia product total-rating aggregate; saved snapshot, not a live count. No counts combined across editions or marketplaces.'};
    if(/Paperback|Hardcover/i.test(f.format||'')&&f.language==='English'&&(!s.product||!/Paperback/i.test(s.product.format)&&/Paperback/i.test(f.format)))s.product={id,url,title:f.title,author:f.byline,format:f.format,language:f.language,sourceSnapshot:rawFile};
    if(!b.edition&&f.pages&&f.year&&f.language==='English'&&/Paperback|Hardcover/i.test(f.format||''))s.edition={id:'ISBN/ASIN:'+id,pages:f.pages,format:f.format,language:f.language,year:f.year,url,retrieved:a.retrieved,confidence:'high',notes:'Matching product edition metadata; '+rawFile};
   }
  }catch(e){a.error=e.message;}
  s.attempts.push(a);save();
  if(s.amazon?.count>0){s.reason='Verified positive aggregate established; remaining editions are not requested solely to refresh the same work.';break;}
 }
 s.done=true;save();console.log(JSON.stringify({i:i+1,title:b.title,count:s.amazon?.count,blocked:!!state.blocked}));
}
save();
