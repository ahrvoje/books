import fs from 'node:fs';
import crypto from 'node:crypto';
import {titleMatches,authorMatches,amazonFields,products,clean} from '../pages_density_261021/collect.mjs';
import {referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/top250_261023', read=p=>JSON.parse(fs.readFileSync(p)), write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
fs.mkdirSync(dir+'/raw',{recursive:true});
const books=read(dir+'/targets.json'), state=fs.existsSync(dir+'/progress.json')?read(dir+'/progress.json'):{books:{},blocked:{}};
const save=()=>write(dir+'/progress.json',state), sleep=ms=>new Promise(r=>setTimeout(r,ms));
let next=0;
async function get(url){
  const file=dir+'/raw/'+crypto.createHash('sha256').update(url).digest('hex').slice(0,16)+'.json';
  if(fs.existsSync(file))return read(file);
  await sleep(Math.max(0,next-Date.now()));next=Date.now()+1500;
  const out={url,retrieved:new Date().toISOString()};
  try{const r=await fetch(url,{signal:AbortSignal.timeout(25000),headers:{'User-Agent':'PersonalBookCatalogResearch/1.0'}});out.status=r.status;out.text=await r.text();try{out.data=JSON.parse(out.text);delete out.text;}catch{} }catch(e){out.error=e.message;}
  out.file=file;write(file,out);return out;
}
function accept(b,s,d,source,exact=false){
  if(!d)return;
  const title=[d.title,d.subtitle].filter(Boolean).join(': '),author=(d.authors||[]).map(a=>a.name||'').join('; ')||d.by_statement||'';
  if(!titleMatches(b.title,title)||(!exact&&!authorMatches(b.author,author)))return;
  if(/audio|abridged|summary|study guide|large print/i.test([title,d.physical_format,d.edition_name].join(' ')))return;
  const langs=(d.languages||[]).map(x=>x.key.split('/').pop());
  if(!langs.some(x=>['eng','hrv','scr'].includes(x)))return;
  const year=+(String(d.publish_date).match(/\b(?:1\d{3}|20\d{2})\b/)||[])[0];
  if(year&&year<b.year-2)return;
  if(/\bseries|trilogy|volumes\b/i.test(b.title)||['q0220','q0484'].includes(b.id))return;
  const url='https://openlibrary.org'+d.key,id=d.key.split('/').pop();
  if(!b.edition&&!s.edition&&Number.isInteger(d.number_of_pages)&&d.number_of_pages>15&&year)s.edition={id,pages:d.number_of_pages,format:d.physical_format||'Print edition (binding unspecified)',language:langs.join(', '),year,url,retrieved:source.retrieved,confidence:'moderate',notes:'Title and author matched library edition. Evidence: '+source.file};
  const r=referenceRanges(d);
  if(b.reference.pages===null&&!s.reference&&r.pages)s.reference={pages:r.pages,confidence:'moderate',ranges:r.spans,method:'catalogued-range-or-contents-boundary',edition:{id,title,author:author||b.author,year:d.publish_date,language:langs.join(', '),pages:d.number_of_pages||null,isbn:[...d.isbn_10||[],...d.isbn_13||[]]},url,source:{url:source.url,file:source.file,retrieved:source.retrieved},sameEditionAsPG:(s.edition||b.edition)?.id===id,limitation:'Only explicitly bounded notes and bibliography sections are counted; excludes index. Reference edition can differ from the length edition.'};
  if(!s.identities)s.identities=[];
  if(!s.identities.some(x=>x.id===id))s.identities.push({id,title,author:author||b.author,isbn:d.isbn_10||[],format:d.physical_format||'',url,source:source.file});
}
if(['library','library-more'].includes(process.argv[2]))for(const [i,b] of books.entries()){
  const s=state.books[b.id]||={attempts:[]};const more=process.argv[2]==='library-more';if(more?s.moreDone:s.libraryDone)continue;if(more&&s.reference&&(b.edition||s.edition)){s.moreDone=true;save();continue;}
  const e=b.edition,olid=e?.url?.match(/OL\d+M/)?.[0]||e?.id?.match(/OL\d+M/)?.[0];
  const ids=[olid&&'OLID:'+olid,...products(b).filter(x=>/^\d{9}[\dX]$/.test(x)).slice(0,1).map(x=>'ISBN:'+x)].filter(Boolean);
  if(ids.length&&!more){const r=await get('https://openlibrary.org/api/books?bibkeys='+ids.join(',')+'&jscmd=details&format=json');s.attempts.push({kind:'edition',file:r.file,status:r.status});for(const [k,v]of Object.entries(r.data||{}))accept(b,s,v.details,r,k==='OLID:'+olid);}
  if(!s.reference||!b.edition&&!s.edition){
    const url='https://openlibrary.org/search.json?title='+encodeURIComponent(b.title.split(':')[0])+'&author='+encodeURIComponent(b.author.split(';')[0])+'&fields=key,title,author_name,edition_key&limit=5';
    const r=await get(url);s.attempts.push({kind:'search',file:r.file,status:r.status});
    const docs=(r.data?.docs||[]).filter(d=>titleMatches(b.title.split(':')[0],d.title)&&authorMatches(b.author,(d.author_name||[]).join('; ')));
    const keys=[...new Set(docs.flatMap(d=>d.edition_key||[]))].sort((a,b)=>parseInt(a.slice(2))-parseInt(b.slice(2))).slice(more?14:0,more?42:14);
    if(keys.length){const r=await get('https://openlibrary.org/api/books?bibkeys='+keys.map(k=>'OLID:'+k).join(',')+'&jscmd=details&format=json');s.attempts.push({kind:'alternate-editions',file:r.file,status:r.status});for(const v of Object.values(r.data||{}))accept(b,s,v.details,r);}
  }
  s.libraryDone=true;if(more)s.moreDone=true;save();console.log(JSON.stringify({i:i+1,title:b.title,pages:s.edition?.pages,refs:s.reference?.pages}));
}
if(process.argv[2]==='amazon')for(const [i,b]of books.entries()){
 const s=state.books[b.id]||={attempts:[]};if(s.amazonDone)continue;
 const ids=[...new Set([...products(b),...(s.identities||[]).sort((a,b)=>Number(/paper/i.test(b.format))-Number(/paper/i.test(a.format))).flatMap(e=>e.isbn)])].slice(0,2);
 for(const host of ['www.amazon.de','www.amazon.com']){
  if(state.blocked[host])continue;
  for(const id of ids){
   if(s.amazon&&s.purchaseUrl)break;
   await sleep(Math.max(0,(state.lastAmazon||0)+20000-Date.now()));state.lastAmazon=Date.now();save();
   const url='https://'+host+'/dp/'+id,r=await get(url),h=r.text||'',f=amazonFields(h);
   const a={kind:'amazon',file:r.file,url,status:r.status,retrieved:r.retrieved,title:f.title,byline:f.byline};s.attempts.push(a);
   if([429,503].includes(r.status)||/captcha|validateCaptcha|robot check/i.test(h)){state.blocked[host]={url,status:r.status,file:r.file};save();break;}
   if(r.status===200&&titleMatches(b.title,f.title)&&authorMatches(b.author,f.byline)){
    if(/Paperback|Hardcover/i.test(f.format||''))s.purchaseUrl||=url;
    const t=clean(h.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||'');
    const m=t.match(/([\d,]+)\s+global ratings\b/i)||t.match(/([\d.]+)\s+(?:globale Bewertungen|weltweite Bewertungen)/i);
    if(m&&b.amazon?.count==null&&!s.amazon)s.amazon={count:+m[1].replace(/[,.]/g,''),url,asin:id,marketplace:host,retrievedAt:r.retrieved,verifiedAt:r.retrieved,verified:true,confidence:'high',productTitle:f.title,byline:f.byline,evidence:[m[0]],sourceSnapshot:r.file,status:'One matching Amazon product total-rating aggregate. Snapshot; no counts combined across editions or markets.'};
   }save();
  }
 }
 s.amazonDone=true;save();console.log(JSON.stringify({i:i+1,title:b.title,count:s.amazon?.count,link:s.purchaseUrl,blocked:Object.keys(state.blocked)}));
}
