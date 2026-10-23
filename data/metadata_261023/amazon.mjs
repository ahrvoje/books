import fs from 'node:fs';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import {titleMatches,clean} from '../pages_density_261021/collect.mjs';
import {fields,authorMatches} from './amazon-fields.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p));
const t=read(dir+'targets.json'),library=read(dir+'library.json'),manual=read(dir+'manual.json');
for(const file of ['manual-more.json','manual-final.json','manual-last.json','manual-corrections.json'])if(fs.existsSync(dir+file))for(const [id,pages,isbn,format,year,url,confidence,notes]of read(dir+file))manual[id]={pages,id:isbn.includes(':')?isbn:'ISBN:'+isbn,format,year,url,confidence,notes,language:'English'};
const state=fs.existsSync(dir+'amazon.json')?read(dir+'amazon.json'):{spacingSeconds:30,marketplace:'www.amazon.com.au',books:{},stopped:null};
const retry=process.argv.includes('--alternative'),manualVerified=fs.existsSync(dir+'manual-amazon.json')?read(dir+'manual-amazon.json'):{};
const productIds=fs.existsSync(dir+'manual-product-ids.json')?read(dir+'manual-product-ids.json'):{};
const rejected=read(dir+'rejected-products.json');
const save=()=>fs.writeFileSync(dir+'amazon.json',JSON.stringify(state,null,2)+'\n');
state.spacingSeconds=60;
if(process.argv.includes('--resume-after-cooldown')&&state.stopped){
 if(Date.now()-Date.parse(state.stopped.retrieved)<30*60*1000)throw Error('The 30-minute cooldown is not complete.');
 (state.pauseHistory||=[]).push({stopped:state.stopped,attempt:state.books[state.stopped.id],resumed:new Date().toISOString(),reason:'One ordinary retry of the same URL after at least 30 minutes. Same marketplace; no challenge bypass.'});
 delete state.books[state.stopped.id];state.stopped=null;save();
}
function asin(s){s=String(s||'').replace(/^.*:/,'').replace(/[- ]/g,'');if(/^(?:\d{9}[\dX]|B[A-Z0-9]{9})$/.test(s))return s;if(!/^978\d{10}$/.test(s))return null;const n=s.slice(3,12),v=(11-[...n].reduce((a,c,i)=>a+(10-i)*+c,0)%11)%11;return n+(v===10?'X':v);}
let last=Date.parse(state.lastRequestAt||'')||0;
if(!state.stopped)for(const id of t.ratings){
 const previous=state.books[id];
 if(previous&&(!retry||previous.amazon&&!rejected[id]||manualVerified[id]||previous.attempts.length>=2||rejected[id]?.retry===false))continue;
 if(retry&&!previous)continue;
 const b=t.books.find(b=>b.id===id),editions=library[id].editions.filter(e=>e.language==='English'&&!/(?:electronic|ebook|digital|audio|CD-ROM|microform)/i.test(e.format));
 const preferred=productIds[id]||manual[id]||editions.find(e=>/paper|soft/i.test(e.format))||editions.find(e=>/hardcover/i.test(e.format))||editions[0]||b.edition;
 const ids=[...new Set([preferred?.id,...preferred?.isbn||[],...editions.flatMap(e=>e.isbn||[]),b.purchaseUrl.match(/\/dp\/([A-Z0-9]{10})/i)?.[1]].map(asin).filter(Boolean))].filter(product=>!retry||!previous.attempts.some(p=>p.url?.endsWith('/'+product)));
 if(retry&&!ids.length)continue;
 const r=state.books[id]={title:b.title,author:b.author,attempts:previous?.attempts||[],amazon:null,edition:null};
 if(!ids.length){r.reason='No matched product identifier available.';save();continue;}
 const product=ids[0],url='https://www.amazon.com.au/dp/'+product;
 let html='',source;
 if(id==='intake-0171'&&fs.existsSync(dir+'amazon-au-probe.html')){html=fs.readFileSync(dir+'amazon-au-probe.html','utf8');source={...read(dir+'amazon-au-probe.json'),rawFile:dir+'amazon-au-probe.html'};}
 else{
  await new Promise(resolve=>setTimeout(resolve,Math.max(0,last+state.spacingSeconds*1000-Date.now())));last=Date.now();state.lastRequestAt=new Date(last).toISOString();
  source={url,retrieved:new Date().toISOString(),rawFile:dir+'raw/amazon-'+id+'-'+product+'.html.gz'};
  try{const response=await fetch(url,{signal:AbortSignal.timeout(25000)});source.status=response.status;source.finalUrl=response.url;html=await response.text();source.sha256=crypto.createHash('sha256').update(html).digest('hex');fs.writeFileSync(source.rawFile,zlib.gzipSync(html));}catch(e){source.error=e.message;}
 }
 const f=fields(html);r.attempts.push({...source,...f});
 if([403,429,503].includes(source.status)||/validateCaptcha|Robot Check|Server Busy/i.test(html)){
  state.stopped={id,...source,reason:'Access check or rate-limit response. Stopped without retry or marketplace rotation.'};r.reason=state.stopped.reason;save();console.log('STOP',id,state.stopped.reason);break;
 }
 const matched=source.status===200&&titleMatches(b.title,f.title)&&authorMatches(b.author,f.byline)&&(!f.language||/English|Croatian/i.test(f.language))&&!/\b(Spanish|German|French|Italian|Portuguese|Russian|Dutch) edition\b/i.test(f.byline);
 r.matched=matched;
 if(matched){
  r.product={url,title:f.title,byline:f.byline,format:f.format,productId:f.productId||product,...source};
  const evidence=clean(html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||''),m=evidence.match(/([\d,]+)\s+global ratings?\b/i);
  if(m)r.amazon={count:+m[1].replaceAll(',',''),url,asin:f.productId||product,marketplace:'amazon.com.au',retrievedAt:source.retrieved,verifiedAt:source.retrieved,verified:true,confidence:'high',productTitle:f.title,byline:f.byline,evidence:[m[0]],sourceSnapshot:source.rawFile,status:'Explicit total-rating aggregate from one matching English/Croatian product. Snapshot only; editions and marketplaces are not summed.'};
  if(f.pages&&f.year&&f.language&&/paperback|hardcover|spiral|leather/i.test(f.format||''))r.edition={pages:f.pages,id:'ASIN:'+(f.productId||product),url,retrieved:source.retrieved,language:f.language,format:f.format,year:f.year,confidence:'high',title:f.title,authors:f.byline,source,notes:'Page count, title, author and print-edition details inspected in the same archived product response.'};
 }
 r.reason=r.amazon?'Verified total ratings.':matched?'Matched product but no explicit total-rating aggregate.':'No matching English/Croatian product metadata returned.';
 save();console.log(id,'ratings',r.amazon?.count??'unknown','pages',r.edition?.pages??'unknown',r.reason);
 if(process.argv.includes('--one'))break;
}
save();console.log('Progress',Object.keys(state.books).length,'ratings',Object.values(state.books).filter(r=>r.amazon).length,'stopped',!!state.stopped);
