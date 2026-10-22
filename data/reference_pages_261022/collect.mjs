import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
export const DIR='data/reference_pages_261022';
export const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
export const write=(p,v)=>{fs.writeFileSync(p+'.tmp',JSON.stringify(v,null,2)+'\n');fs.renameSync(p+'.tmp',p);};
export const books=read(read('data/catalog.json').compiled).currentBooks.filter(b=>['recommended','vetoed'].includes(b.status)).sort((a,b)=>(a.status==='vetoed')-(b.status==='vetoed')||b.total-a.total||a.id.localeCompare(b.id));
const editions=read('site/editions.json'), enrichment=read('site/enrichment.json').books;
export const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const base=s=>norm(String(s||'').split(/:| — | \/ /)[0]).replace(/^the |^a |^an /,'');
export function matches(b,d){
  const title=base(d.title), expected=base(b.title);
  if(!title||title!==expected)return false;
  const named=(d.authors||[]).map(a=>a.name).filter(Boolean);
  const observed=(named.length?named:String(d.by_statement||'').split(/;| and | & /)).flatMap(a=>{
    const parts=a.split(',');return parts.length>1&&norm(parts[0]).split(' ').length>1?parts:[a];
  }).map(a=>{
    const clean=a.replace(/\([^)]*\)/g,'').replace(/^by\s+/i,'').replace(/(?:,?\s+(?:Jr|Sr)\.?)$/i,'').trim();
    const n=norm(clean).split(' ');return {tokens:n,surname:clean.includes(',')?norm(clean.split(',')[0]).split(' ').at(-1):n.at(-1)};
  });
  return b.author.split(/;| and | & |,\s*|\//).some(a=>{const n=norm(a.replace(/\([^)]*\)/g,'').replace(/(?:,?\s+(?:Jr|Sr)\.?)$/i,'')).split(' ');return observed.some(o=>o.surname===n.at(-1)&&(n.length===1||n[0].length===1||o.tokens.some(x=>x===n[0]||x===n[0][0])));});
}
export function referenceRanges(d){
  const notes=typeof d.notes==='string'?d.notes:d.notes?.value||'';
  const spans=[];
  for(const m of notes.matchAll(/(?:bibliograph(?:ical references|y|ies)|references|source notes|endnotes|notes)\s*[:.]?\s*\(?\s*(?:pages?|pp?\.)\s*\[?(\d+)\]?\s*[-–—]\s*\[?(\d+)\]?/gi)){
    const start=+m[1];let end=+m[2];if(end<start&&m[2].length<m[1].length){const factor=10**m[2].length;end=Math.floor(start/factor)*factor+end;if(end<start)end+=factor;}
    if(end>=start&&end-start<2000&&(!d.number_of_pages||end<=d.number_of_pages+20))spans.push({start,end,label:m[0].replace(/\s*\(?\s*(?:pages?|pp?\.).*$/i,''),evidence:m[0],method:'catalogued-range'});
  }
  const toc=d.table_of_contents||[];
  for(let i=0;i<toc.length-1;i++){
    const item=toc[i],title=String(item.title||'').trim();
    if(!/^(?:(?:selected |select |annotated |further )?(?:bibliography|references|reading)|notes|endnotes|source notes|sources)(?:\s+and\s+(?:references|bibliography|notes))?$/i.test(title))continue;
    const next=toc[i+1];const start=/^\d+$/.test(String(item.pagenum))?+item.pagenum:null,end=/^\d+$/.test(String(next.pagenum))?+next.pagenum-1:null;
    if(start&&end>=start&&(!d.number_of_pages||end<=d.number_of_pages))spans.push({start,end,label:title,evidence:`${title} ${start}; ${next.title} ${end+1}`,method:'contents-boundary'});
  }
  const pages=new Set();for(const s of spans)for(let i=s.start;i<=s.end;i++)pages.add(i);
  return {pages:pages.size||null,spans,notes};
}
export const state=fs.existsSync(`${DIR}/progress.json`)?read(`${DIR}/progress.json`):{version:1,books:{}};
for(const [i,b]of books.entries())state.books[b.id]||={id:b.id,title:b.title,author:b.author,status:b.status,priority:i+1,pages:null,confidence:'unknown',attempts:[],reason:'No numeric reference-section extent found.'};
export function save(){write(`${DIR}/progress.json`,state);console.log(JSON.stringify({known:books.filter(b=>state.books[b.id].pages!==null).length,total:books.length,top100:books.slice(0,100).filter(b=>state.books[b.id].pages!==null).length}));}
export function accept(b,d,source){
  const s=state.books[b.id],r=referenceRanges(d);
  if(!r.pages)return false;
  const editionYear=+(String(d.publish_date||'').match(/\b(1[0-9]{3}|20[0-2][0-9])\b/)||[])[0];
  if(editionYear&&editionYear<b.year-2)return false;
  const language=(d.languages||[]).map(l=>l.key?.split('/').pop());
  if(language.length&&!language.some(l=>['eng','hrv','scr'].includes(l)))return false;
  if(/audio|large print|abridged|summary|study guide/i.test([d.title,d.physical_format,d.edition_name].join(' ')))return false;
  if(['q0220','q0484'].includes(b.id)||/\b(?:series|trilogy|volumes)\b/i.test(b.title))return false;
  const verified=editions[b.id]||enrichment[b.id]?.edition;
  const ids=[...(d.isbn_10||[]),...(d.isbn_13||[]),d.key?.split('/').pop()].filter(Boolean);
  const exact=verified&&ids.some(id=>verified.id?.includes(id)||verified.url?.includes(id));
  if(!exact&&!matches(b,d))return false;
  if(s.pages!==null&&(!exact||s.sameEditionAsPG))return false;
  Object.assign(s,{pages:r.pages,confidence:'moderate',method:r.spans.some(x=>x.method==='contents-boundary')?'contents-boundaries':'catalogued-ranges',ranges:r.spans,edition:{id:d.key?.split('/').pop()||ids[0],title:d.title,author:(d.authors||[]).map(a=>a.name||'').filter(Boolean).join('; ')||d.by_statement||b.author,year:d.publish_date||null,isbn:[...(d.isbn_10||[]),...(d.isbn_13||[])],language:language.join(', ')||'Not stated',pages:d.number_of_pages||null},sameEditionAsPG:!!exact,url:`https://openlibrary.org${d.key}`,source,reason:null,limitation:'Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.'});
  return true;
}
export const indexPath=`${DIR}/edition-index.json`;
function scan(){
  const records=new Map();let files=0;
  function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){
    if(e.isDirectory()){if(!['node_modules','.git','reference_pages_261022'].includes(e.name))walk(path.join(dir,e.name));}
    else if(dir.endsWith('raw')&&e.name.endsWith('.json')&&!e.name.endsWith('.meta.json')){
      const file=path.join(dir,e.name);if(fs.statSync(file).size>15000000)continue;
      try{const text=fs.readFileSync(file,'utf8');if(!text.includes('/books/OL'))continue;const j=JSON.parse(text);const meta=fs.existsSync(file+'.meta.json')?read(file+'.meta.json'):{};
        for(const value of Object.values(j)){const d=value?.details;if(!d?.key?.startsWith('/books/'))continue;const old=records.get(d.key);if(!old||referenceRanges(d).pages&&!referenceRanges(old.d).pages)records.set(d.key,{d,source:{file:file.replaceAll('\\','/'),url:meta.url||value.info_url||`https://openlibrary.org${d.key}`,retrieved:meta.retrieved||'Archived before 2026-10-22'}});}
        if(j.key?.startsWith('/books/'))records.set(j.key,{d:j,source:{file:file.replaceAll('\\','/'),url:meta.url||`https://openlibrary.org${j.key}`,retrieved:meta.retrieved||'Archived before 2026-10-22'}});files++;
      }catch{}
    }
  }}walk('data');write(indexPath,[...records.values()]);console.log({files,editions:records.size});
}
export async function retrieve(url,label){
  fs.mkdirSync(`${DIR}/raw`,{recursive:true});const file=`${DIR}/raw/${label}-${crypto.createHash('sha256').update(url).digest('hex').slice(0,12)}.json`;
  if(fs.existsSync(file))return {data:read(file),source:read(file+'.meta.json')};
  const source={url,retrieved:'2026-10-22',file};
  try{const r=await fetch(url,{signal:AbortSignal.timeout(20000),headers:{'User-Agent':'PersonalBookCatalogResearch/1.0'}});source.status=r.status;const data=await r.json();write(file,data);write(file+'.meta.json',source);return {data,source};}catch(e){source.error=e.message;write(file+'.meta.json',source);return {source};}
}
if(process.argv[2]==='cache'){
  scan();const index=read(indexPath),byTitle=new Map(),byId=new Map();for(const r of index){const key=base(r.d.title);if(!byTitle.has(key))byTitle.set(key,[]);byTitle.get(key).push(r);for(const id of [...r.d.isbn_10||[],...r.d.isbn_13||[],r.d.key.split('/').pop()]){if(!byId.has(id))byId.set(id,[]);byId.get(id).push(r);}}
  for(const b of books){const e=editions[b.id]||enrichment[b.id]?.edition;const ids=[e?.id?.replace(/^(?:ISBN|ASIN):/,''),e?.url?.match(/OL\d+M/)?.[0],b.amazon?.asin].filter(Boolean);const candidates=[...new Set([...ids.flatMap(id=>byId.get(id)||[]),...byTitle.get(base(b.title))||[]])];let matched=0;for(const r of candidates){if(matches(b,r.d)||ids.some(id=>[...r.d.isbn_10||[],...r.d.isbn_13||[],r.d.key.split('/').pop()].includes(id))){matched++;accept(b,r.d,r.source);}}state.books[b.id].attempts.push({kind:'archived-library-records',candidateRecords:candidates.length,matchedRecords:matched});}save();
}
if(process.argv[2]==='isbn'){
  const pending=books.filter(b=>state.books[b.id].pages===null);
  for(let i=0;i<pending.length;i+=35){const batch=pending.slice(i,i+35),map=new Map();for(const b of batch){const e=editions[b.id]||enrichment[b.id]?.edition;const ids=[e?.id?.replace(/^(?:ISBN|ASIN):/,''),e?.url?.match(/OL\d+M/)?.[0],b.amazon?.asin,...e?.isbn10||[],...e?.isbn13||[]].filter(x=>/^(?:\d{9}[\dX]|\d{13}|OL\d+M)$/.test(x||''));for(const id of [...new Set(ids)].slice(0,2)){const key=(id.startsWith('OL')?'OLID:':'ISBN:')+id;if(!map.has(key))map.set(key,[]);map.get(key).push(b);}}
    if(map.size){const r=await retrieve(`https://openlibrary.org/api/books?bibkeys=${[...map.keys()].join(',')}&jscmd=details&format=json`,'isbn');for(const [key,targets]of map)for(const b of targets){state.books[b.id].attempts.push({kind:'library-identifier-lookup',key,...r.source});if(r.data?.[key]?.details)accept(b,r.data[key].details,r.source);}}
    if(i%140===0)save();await new Promise(r=>setTimeout(r,1100));
  }save();
}
