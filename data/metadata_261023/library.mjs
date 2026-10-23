import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {referenceRanges,matches,norm} from '../reference_pages_261022/collect.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p)),write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const targets=read(dir+'targets.json'), books=targets.books;
const state=fs.existsSync(dir+'library.json')?read(dir+'library.json'):Object.fromEntries(books.map(b=>[b.id,{title:b.title,author:b.author,attempts:[],editions:[],reference:null}]));
const base=s=>norm(String(s||'').split(/:| — | \/ /)[0]).replace(/^(the|a|an) /,'');
const byTitle=new Map();for(const b of books){const k=base(b.title);if(!byTitle.has(k))byTitle.set(k,[]);byTitle.get(k).push(b);}
const save=()=>write(dir+'library.json',state);
function accept(b,d,source,exact=false){
  if(!exact&&!matches(b,d))return;
  const langs=(d.languages||[]).map(l=>l.key?.split('/').pop());
  if(langs.length&&!langs.some(l=>['eng','hrv','scr'].includes(l)))return;
  if(/audio|abridged|summary|study guide/i.test([d.title,d.physical_format,d.edition_name].join(' ')))return;
  if(/\b(series|trilogy|volumes)\b/i.test(b.title))return;
  const year=+(String(d.publish_date||'').match(/\b(?:1\d{3}|20\d{2})\b/)||[])[0];
  const r=state[b.id],isbn=[...d.isbn_10||[],...d.isbn_13||[]];
  const edition={pages:d.number_of_pages,id:d.key,url:'https://openlibrary.org'+d.key,retrieved:source.retrieved||'2026-10-23',language:langs.includes('eng')?'English':langs.includes('hrv')||langs.includes('scr')?'Croatian':'Not stated by catalog; English title and matched work',format:d.physical_format||'Print (library record; binding not stated)',year,confidence:'moderate',isbn,source,notes:'Catalogued pagination of this edition; may omit preliminary Roman-numbered pages. Identity checked against title and author or previously verified edition identifier.'};
  if(Number.isInteger(d.number_of_pages)&&d.number_of_pages>0&&year&&d.key&&!r.editions.some(e=>e.id===d.key))r.editions.push(edition);
  const rr=referenceRanges(d);
  if(rr.pages&&!r.reference)r.reference={pages:rr.pages,confidence:'moderate',method:'catalogued-ranges-or-contents',ranges:rr.spans,edition:{id:d.key,title:d.title,author:d.by_statement||(d.authors||[]).map(a=>a.name).join('; ')||b.author,year,language:edition.language,isbn},url:edition.url,source,sameEditionAsPG:b.edition?.id===d.key,limitation:'Only explicitly bounded reference sections counted; not inline citations, a citation count, or a measure of quality. Edition can differ from total-page edition.'};
}
const summary=()=>console.log({reviewed:Object.values(state).filter(r=>r.attempts.length).length,pageTargetsResolved:targets.pages.filter(id=>state[id].editions.length).length,referenceTargetsResolved:targets.references.filter(id=>state[id].reference).length});
if(process.argv[2]==='cached'){
 let files=0,records=0;
 function record(d,source){if(!d?.key?.startsWith('/books/'))return;records++;for(const b of byTitle.get(base(d.title))||[])accept(b,d,source);}
 function walk(folder){for(const e of fs.readdirSync(folder,{withFileTypes:true})){
  if(e.isDirectory()){if(!['metadata_261023','node_modules','.git'].includes(e.name))walk(path.join(folder,e.name));continue;}
  if(!e.name.endsWith('.json')||e.name.endsWith('.meta.json')||!/(?:raw|editions)$/.test(folder))continue;
  const file=path.join(folder,e.name);if(fs.statSync(file).size>16000000)continue;
  try{const text=fs.readFileSync(file,'utf8');if(!text.includes('/books/OL'))continue;const j=JSON.parse(text),source={file:file.replaceAll('\\','/'),retrieved:j.retrieved||'Archived before 2026-10-23'};record(j,source);record(j.edition,source);for(const v of Object.values(j))record(v?.details,source);for(const d of j.entries||[])record(d,source);files++;}catch{}
 }}walk('data');for(const b of books)state[b.id].attempts.push({kind:'cached-library-records',files,records});save();summary();
}
let last=0;
async function get(url){
 fs.mkdirSync(dir+'raw',{recursive:true});const file=dir+'raw/library-'+crypto.createHash('sha256').update(url).digest('hex').slice(0,16)+'.json';
 if(fs.existsSync(file))return read(file);
 await new Promise(r=>setTimeout(r,Math.max(0,last+3000-Date.now())));last=Date.now();
 const source={url,retrieved:new Date().toISOString(),file};let data=null;
 try{const r=await fetch(url,{signal:AbortSignal.timeout(25000),headers:{'User-Agent':'PersonalBookCatalogResearch/1.0'}});source.status=r.status;if(r.ok)data=await r.json();if([403,429].includes(r.status))throw Error('Library rate limit; stop this run');}catch(e){source.error=e.message;if(e.message.includes('rate limit')){write(file,{source,data});save();throw e;}}
 write(file,{source,data});return {source,data};
}
if(process.argv[2]==='lookup'){
 const pending=books.filter(b=>targets.pages.includes(b.id)&&!state[b.id].editions.length||targets.references.includes(b.id)&&!state[b.id].reference);
 for(let i=0;i<pending.length;i+=8){
  const batch=pending.slice(i,i+8),clauses=batch.map(b=>`(title:"${b.title.split(/:| — | \/ /)[0].replace(/["()]/g,' ')}" AND author:"${norm(b.author.split(/;| and | & /)[0].replace(/\([^)]*\)/g,'')).split(' ').at(-1)}")`);
  const r=await get('https://openlibrary.org/search.json?q='+encodeURIComponent(clauses.join(' OR '))+'&fields=key,title,author_name,edition_key,isbn&limit=100');
  const candidates=new Map();
  for(const b of batch){
   const docs=(r.data?.docs||[]).filter(d=>matches(b,{title:d.title,authors:(d.author_name||[]).map(name=>({name}))}));
   const ids=[...new Set(docs.flatMap(d=>d.edition_key||[]))].sort((a,b)=>parseInt(a.slice(2))-parseInt(b.slice(2))).slice(0,12);
   const own=b.edition?.id?.match(/OL\d+M/)?.[0];if(own&&!ids.includes(own))ids.unshift(own);
   state[b.id].attempts.push({kind:'library-title-search',...r.source,candidates:ids});
   for(const id of ids){if(!candidates.has(id))candidates.set(id,[]);candidates.get(id).push(b);}
  }
  const ids=[...candidates.keys()];
  for(let j=0;j<ids.length;j+=30){const keys=ids.slice(j,j+30),r=await get('https://openlibrary.org/api/books?bibkeys='+keys.map(id=>'OLID:'+id).join(',')+'&jscmd=details&format=json');for(const id of keys)for(const b of candidates.get(id)){const d=r.data?.['OLID:'+id]?.details;if(d)accept(b,d,r.source,b.edition?.id?.endsWith(id));state[b.id].attempts.push({kind:'library-edition',id,...r.source});}}
  save();console.log('Library batch',Math.min(i+8,pending.length),'/',pending.length);summary();
 }
}
