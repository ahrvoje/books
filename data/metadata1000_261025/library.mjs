import fs from 'node:fs';
import crypto from 'node:crypto';
import {titleMatches,authorMatches,products} from '../pages_density_261021/collect.mjs';
import {referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/metadata1000_261025',read=p=>JSON.parse(fs.readFileSync(p));
const books=read(dir+'/targets.json'),state=fs.existsSync(dir+'/library.json')?read(dir+'/library.json'):{books:{},requests:[],blocked:null};
const save=()=>fs.writeFileSync(dir+'/library.json',JSON.stringify(state,null,2)+'\n');
const excludedScope=b=>/\b(series|trilogy|volumes)\b/i.test(b.title)||['q0220','q0484','intake-0190','intake-0203','progress-0677','progress-0817','intake-0172','n88837eb597'].includes(b.id);
function accept(b,d,source){
 source={file:source.file,url:source.url,retrieved:source.retrieved};
 if(!d?.key?.startsWith('/books/')||excludedScope(b))return;
 const title=[d.title,d.subtitle].filter(Boolean).join(': '),author=(d.authors||[]).map(a=>a.name||'').join('; ')||d.by_statement||'';
 if(!titleMatches(b.title,title)||!authorMatches(b.author,author))return;
 if(/audio|abridged|summary|study guide|large print/i.test([title,d.physical_format,d.edition_name].join(' ')))return;
 const langs=(d.languages||[]).map(x=>x.key?.split('/').pop());if(!langs.some(x=>['eng','hrv','scr'].includes(x)))return;
 const year=+(String(d.publish_date).match(/\b(?:1\d{3}|20\d{2})\b/)||[])[0];if(year&&year<b.year-2)return;
 const s=state.books[b.id]||={attempts:[]},id=d.key.split('/').pop(),url='https://openlibrary.org'+d.key;
 if(!s.identities)s.identities=[];
 if(!s.identities.some(x=>x.id===id))s.identities.push({id,title,author,isbn:[...d.isbn_10||[],...d.isbn_13||[]],format:d.physical_format||'',url,source:source.file});
 if(!b.edition&&!s.edition&&Number.isInteger(d.number_of_pages)&&d.number_of_pages>15&&year)s.edition={id,pages:d.number_of_pages,format:d.physical_format||'Print edition (binding unspecified)',language:langs.join(', '),year,url,retrieved:source.retrieved,confidence:'moderate',title,authors:author,isbn10:d.isbn_10||[],isbn13:d.isbn_13||[],notes:'Matched title, author and English/Croatian language in library edition record.',source};
 const r=referenceRanges(d);
 if(b.reference.pages===null&&!s.reference&&r.pages)s.reference={pages:r.pages,confidence:'moderate',ranges:r.spans,method:'catalogued-range-or-contents-boundary',edition:{id,title,author,year:d.publish_date,language:langs.join(', '),pages:d.number_of_pages||null,isbn:[...d.isbn_10||[],...d.isbn_13||[]]},url,source,sameEditionAsPG:(s.edition||b.edition)?.id===id,limitation:'Only explicitly bounded reference sections counted; index excluded. Total-page and reference editions can differ.'};
}
let next=0;
async function get(url){
 const file=dir+'/raw/library-'+crypto.createHash('sha256').update(url).digest('hex').slice(0,16)+'.json';
 if(fs.existsSync(file))return read(file);
 if(state.blocked)return {error:'Stopped after access limit'};
 await new Promise(r=>setTimeout(r,Math.max(0,next-Date.now())));next=Date.now()+3500;
 const out={url,file,retrieved:new Date().toISOString()};
 try{const r=await fetch(url,{signal:AbortSignal.timeout(30000),headers:{'User-Agent':'PersonalBookCatalogResearch/1.0'}});out.status=r.status;const t=await r.text();try{out.data=JSON.parse(t);}catch{out.text=t.slice(0,3000);}}catch(e){out.error=e.message;}
 if([403,429,503].includes(out.status))state.blocked={url,status:out.status,retrieved:out.retrieved};
 fs.writeFileSync(file,JSON.stringify(out));state.requests.push({url,file,status:out.status,error:out.error});return out;
}
const stats=()=>({processed:Object.values(state.books).filter(s=>s.done).length,pages:Object.values(state.books).filter(s=>s.edition).length,refs:Object.values(state.books).filter(s=>s.reference).length,requests:state.requests.length,blocked:state.blocked});
if(process.argv[2]==='reuse'){
 const index=new Map();
 function add(d,source){if(d?.key?.startsWith('/books/'))index.set(d.key,{d,source});}
 function walk(path){for(const e of fs.readdirSync(path,{withFileTypes:true})){const p=path+'/'+e.name;if(e.isDirectory()){if(!['metadata1000_261025'].includes(e.name))walk(p);}else if(path.endsWith('/raw')&&e.name.endsWith('.json')&&!e.name.endsWith('.meta.json')&&fs.statSync(p).size<15000000){try{const j=read(p),meta=fs.existsSync(p+'.meta.json')?read(p+'.meta.json'):{},source={file:p,url:j.url||meta.url,retrieved:j.retrieved||meta.retrieved||'Archived before 2026-10-25'},data=j.data||j;add(data,source);for(const v of Object.values(data))add(v?.details,source);}catch{}}}}
 walk('data');
 const byToken=new Map();const token=t=>String(t).toLowerCase().replace(/^(the|a|an) /,'').match(/[a-z0-9]+/)?.[0];
 for(const r of index.values()){const k=token(r.d.title);if(!byToken.has(k))byToken.set(k,[]);byToken.get(k).push(r);}
 for(const b of books)for(const r of byToken.get(token(b.title))||[])accept(b,r.d,r.source);
 save();console.log({cachedEditions:index.size,...stats()});
}
if(process.argv[2]==='batch'){
 for(let i=0;i<books.length;i+=25){
  if(state.blocked)break;
  if((state.batches||[]).includes(i))continue;
  const map=new Map();
  for(const b of books.slice(i,i+25)){
   if(excludedScope(b))continue;
   const e=b.edition,olid=e?.url?.match(/OL\d+M/)?.[0]||e?.id?.match(/OL\d+M/)?.[0];
   const ids=[olid&&'OLID:'+olid,...[e?.id?.replace(/^ISBN(?:\/ASIN)?:/,''),...products(b),...e?.isbn10||[],...e?.isbn13||[]].filter(x=>/^(\d{9}[\dX]|\d{13})$/.test(x)).slice(0,2).map(x=>'ISBN:'+x)].filter(Boolean);
   for(const id of ids){if(!map.has(id))map.set(id,[]);map.get(id).push(b);}
  }
  if(map.size){const r=await get('https://openlibrary.org/api/books?bibkeys='+[...map.keys()].join(',')+'&jscmd=details&format=json');for(const [key,targets]of map)for(const b of targets){const s=state.books[b.id]||={attempts:[]};s.attempts.push(r.file);if(r.data?.[key])accept(b,r.data[key].details,r);}}
  (state.batches||=[]).push(i);save();console.log(JSON.stringify({batch:i,...stats()}));
 }
}
if(['live','gaps','pages'].includes(process.argv[2]))for(const b of books){
 if(state.blocked)break;
 const s=state.books[b.id]||={attempts:[]};if(s.done)continue;
 if(process.argv[2]==='pages'){
  const external=['manual','archive','search-pages'].map(k=>fs.existsSync(dir+'/'+k+'.json')?read(dir+'/'+k+'.json'):{});
  if(b.edition||s.edition||external.some(x=>(x.books?.[b.id]||x[b.id])?.edition))continue;
 }
 if(process.argv[2]==='gaps'&&b.rank>1200&&(b.edition||s.edition)&&/\/dp\//.test(b.titleCell||''))continue;
 if(excludedScope(b)||((b.edition||s.edition)&&(b.reference.pages!==null||s.reference))){s.done=true;continue;}
 const e=b.edition,olid=e?.url?.match(/OL\d+M/)?.[0]||e?.id?.match(/OL\d+M/)?.[0];
 const ids=[olid&&'OLID:'+olid,...products(b).filter(x=>/^\d{9}[\dX]$/.test(x)).slice(0,1).map(x=>'ISBN:'+x)].filter(Boolean);
 if(ids.length){const r=await get('https://openlibrary.org/api/books?bibkeys='+ids.join(',')+'&jscmd=details&format=json');s.attempts.push(r.file);for(const v of Object.values(r.data||{}))accept(b,v.details,r);}
 if((!b.edition&&!s.edition)||(b.reference.pages===null&&!s.reference)){
  const r=await get('https://openlibrary.org/search.json?title='+encodeURIComponent(b.title.split(':')[0])+'&author='+encodeURIComponent(b.author.split(';')[0])+'&fields=key,title,author_name,edition_key&limit=5');s.attempts.push(r.file);
  const docs=(r.data?.docs||[]).filter(d=>titleMatches(b.title.split(':')[0],d.title)&&authorMatches(b.author,(d.author_name||[]).join('; ')));
  const keys=[...new Set(docs.flatMap(d=>d.edition_key||[]))].sort((a,b)=>parseInt(a.slice(2))-parseInt(b.slice(2))).slice(0,30);
  if(keys.length){const r=await get('https://openlibrary.org/api/books?bibkeys='+keys.map(k=>'OLID:'+k).join(',')+'&jscmd=details&format=json');s.attempts.push(r.file);for(const v of Object.values(r.data||{}))accept(b,v.details,r);}
 }
 s.done=true;save();console.log(JSON.stringify({rank:b.rank,title:b.title,...stats()}));
}
save();
