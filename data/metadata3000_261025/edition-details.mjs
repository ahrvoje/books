import fs from 'node:fs';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/metadata3000_261025',read=p=>JSON.parse(fs.readFileSync(p));
const targets=read(dir+'/targets.json'),records=new Map();
function add(d,source){
 if(!d?.key?.startsWith('/books/'))return;
 if(!records.has(d.key))records.set(d.key,{d,source});
}
function walk(path){
 for(const entry of fs.readdirSync(path,{withFileTypes:true})){
  const file=path+'/'+entry.name;
  if(entry.isDirectory()){if(entry.name!=='metadata3000_261025')walk(file);continue;}
  if(!path.endsWith('/raw')||!entry.name.endsWith('.json')||entry.name.endsWith('.meta.json')||fs.statSync(file).size>15000000)continue;
  try{
   const j=read(file),meta=fs.existsSync(file+'.meta.json')?read(file+'.meta.json'):{},data=j.data||j;
   const source={file,url:j.url||meta.url,retrieved:j.retrieved||meta.retrieved||'Archived before 2026-10-25'};
   add(data,source);for(const v of Object.values(data))add(v?.details,source);
  }catch{}
 }
}
walk('data');
const valid=s=>/^\d{9}[\dX]$/.test(s)?[...s].reduce((n,c,i)=>n+(10-i)*(c==='X'?10:+c),0)%11===0:/^\d{13}$/.test(s)&&[...s].reduce((n,c,i)=>n+(i%2?3:1)*+c,0)%10===0;
const canonical=s=>{s=String(s||'').replace(/[^0-9X]/gi,'');if(!valid(s))return null;if(s.length===10){const p='978'+s.slice(0,9),sum=[...p].reduce((n,c,i)=>n+(i%2?3:1)*+c,0);return p+(10-sum%10)%10;}return s;};
const byISBN=new Map();
for(const r of records.values())for(const isbn of [...r.d.isbn_10||[],...r.d.isbn_13||[]].map(canonical).filter(Boolean)){
 if(!byISBN.has(isbn))byISBN.set(isbn,[]);byISBN.get(isbn).push(r);
}
const changes=[];
const linkFlags=[];
for(const b of targets.filter(b=>!b.amazon)){
 const asin=b.purchaseUrl?.match(/\/dp\/([0-9]{9}[0-9X]|[0-9]{13})(?:[/?#]|$)/)?.[1];if(!asin)continue;
 const matches=byISBN.get(canonical(asin))||[];
 const identified=matches.map(r=>({...r,title:[r.d.title,r.d.subtitle].filter(Boolean).join(': '),author:(r.d.authors||[]).map(x=>x.name||'').join('; ')||r.d.by_statement||''})).filter(r=>r.author);
 if(identified.length&&!identified.some(r=>titleMatches(b.title,r.title)&&authorMatches(b.author,r.author)))linkFlags.push({id:b.id,title:b.title,author:b.author,rank:b.rank,url:b.purchaseUrl,observed:identified.map(r=>({title:r.title,author:r.author,record:r.d.key,source:r.source.file}))});
}
fs.writeFileSync(dir+'/link-identity-flags.json',JSON.stringify(linkFlags,null,2));
for(const b of targets){
 const e=b.edition;if(!e)continue;
 const olid=(e.url||'').match(/OL\d+M/)?.[0]||String(e.id).match(/OL\d+M/)?.[0];
 const ids=[...e.isbn10||[],...e.isbn13||[],...e.isbn||[],/^(ISBN|ASIN)/.test(e.id||'')?e.id.split(':').at(-1):null].map(canonical).filter(Boolean);
 const candidates=olid?[records.get('/books/'+olid)].filter(Boolean):ids.flatMap(id=>byISBN.get(id)||[]);
 for(const {d,source}of candidates){
  const title=[d.title,d.subtitle].filter(Boolean).join(': '),author=(d.authors||[]).map(x=>x.name||'').join('; ')||d.by_statement||'';
  if(!titleMatches(b.title,title)||!authorMatches(b.author,author))continue;
  if(/abridged|audio|young readers|study guide/i.test([title,d.edition_name,d.physical_format].join(' ')))continue;
  const fields={},evidence={};
  if(!e.publisher&&d.publishers?.length){fields.publisher=d.publishers.join('; ');evidence.publisher=d.publishers;}
  if(!e.pagination&&d.pagination&&/\d+\s*\]?\s*(?:p\b|pages\b|leaves\b)/i.test(d.pagination)&&(/\b[ivxlcdm]+\s*[,;]/i.test(d.pagination)||/plates|unnumbered|\[\d+\]/i.test(d.pagination))&&(!d.number_of_pages||d.number_of_pages===e.pages)){fields.pagination=d.pagination;evidence.pagination=d.pagination;}
  if((!e.format||/unspecified|not stated|not exposed|unknown|print edition$/i.test(e.format))&&d.physical_format&&!/unknown|unspecified/i.test(d.physical_format)){
   fields.format=d.physical_format;evidence.format=d.physical_format;
  }
  if(!e.year){const year=+String(d.publish_date).match(/\b(?:1\d{3}|20\d{2})\b/)?.[0];if(year&&year<=2026){fields.year=year;evidence.year=d.publish_date;}}
  const present=[...e.isbn10||[],...e.isbn13||[],...e.isbn||[]];
  const knownIds=[...ids,canonical(b.purchaseUrl?.match(/\/dp\/([0-9]{9}[0-9X]|[0-9]{13})(?:[/?#]|$)/)?.[1])].filter(Boolean);
  if(!present.length&&!knownIds.length&&(d.isbn_10?.length||d.isbn_13?.length)){
   const a=(d.isbn_10||[]).filter(valid),c=(d.isbn_13||[]).filter(valid);
   if(a.length||c.length){fields.isbn10=a;fields.isbn13=c;evidence.isbn=[...a,...c];}
  }
  if(Object.keys(evidence).length)changes.push({id:b.id,title:b.title,author:b.author,rank:b.rank,editionId:e.id,matchedRecord:d.key,matchedTitle:title,matchedAuthor:author,match:olid?'exact Open Library edition key':'matching edition ISBN',fields,evidence,source:{...source,url:source.url||'https://openlibrary.org'+d.key+'.json'},confidence:'moderate',pointCount:Object.keys(evidence).length});
  break;
 }
}
const counts={};for(const x of changes)for(const k of Object.keys(x.evidence))counts[k]=(counts[k]||0)+1;
fs.writeFileSync(dir+'/edition-details.json',JSON.stringify({books:changes,counts,total:changes.reduce((n,x)=>n+x.pointCount,0)},null,2));
console.log({records:records.size,books:changes.length,fields:counts,total:changes.reduce((n,x)=>n+x.pointCount,0)});

