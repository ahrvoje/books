import fs from 'node:fs';
import crypto from 'node:crypto';
import {titleMatches,authorMatches,products} from '../pages_density_261021/collect.mjs';
import {referenceRanges} from './ranges.mjs';
const dir='data/metadata2_261025',read=p=>JSON.parse(fs.readFileSync(p));
const books=read(dir+'/targets.json'),state=fs.existsSync(dir+'/extra.json')?read(dir+'/extra.json'):{books:{},requests:[],blocked:null};
const save=()=>fs.writeFileSync(dir+'/extra.json',JSON.stringify(state,null,2)+'\n');
const excludedScope=b=>/\b(series|trilogy|volumes)\b/i.test(b.title)||['q0220','q0484','intake-0190','intake-0203','progress-0677','progress-0817','intake-0172','n88837eb597'].includes(b.id);
function accept(b,d,source){
 source={file:source.file,url:source.url,retrieved:source.retrieved};
 if(!d?.key?.startsWith('/books/')||excludedScope(b))return;
 const title=[d.title,d.subtitle].filter(Boolean).join(': '),author=(d.authors||[]).map(a=>a.name||'').join('; ')||d.by_statement||'';
 if(!titleMatches(b.title,title)||!authorMatches(b.author,author))return;
 if(/audio|abridged|summary|study guide|large print/i.test([title,d.physical_format,d.edition_name].join(' ')))return;
 const langs=(d.languages||[]).map(x=>x.key?.split('/').pop());if(!langs.some(x=>['eng','hrv','scr'].includes(x)))return;
 if(/abridg|young readers edition|adapted for young/i.test(typeof d.notes==='string'?d.notes:d.notes?.value||''))return;
 const year=+(String(d.publish_date).match(/\b(?:1\d{3}|20\d{2})\b/)||[])[0];if(year&&year<b.year-2)return;
 const s=state.books[b.id]||={attempts:[]},id=d.key.split('/').pop(),url='https://openlibrary.org'+d.key;
 if(!s.identities)s.identities=[];
 if(!s.identities.some(x=>x.id===id))s.identities.push({id,title,author,isbn:[...d.isbn_10||[],...d.isbn_13||[]],format:d.physical_format||'',url,source:source.file});
 if(!b.edition&&!s.edition&&Number.isInteger(d.number_of_pages)&&d.number_of_pages>15&&year)s.edition={id,pages:d.number_of_pages,format:d.physical_format||'Print edition (binding unspecified)',language:langs.join(', '),year,url,retrieved:source.retrieved,confidence:'moderate',title,authors:author,isbn10:d.isbn_10||[],isbn13:d.isbn_13||[],notes:'Matched title, author and English/Croatian language in library edition record.',source};
 const r=referenceRanges(d);
 if(b.reference.pages===null&&!s.reference&&r.pages)s.reference={pages:r.pages,confidence:'moderate',ranges:r.spans,method:'catalogued-range-or-contents-boundary',edition:{id,title,author,year:d.publish_date,language:langs.join(', '),pages:d.number_of_pages||null,isbn:[...d.isbn_10||[],...d.isbn_13||[]]},url,source,sameEditionAsPG:(s.edition||b.edition)?.id===id,limitation:'Only explicitly bounded reference sections counted; index excluded. Total-page and reference editions can differ.'};
}
if(process.argv[2]==='reuse'){
 const index=new Map();
 function add(d,source){if(d?.key?.startsWith('/books/'))index.set(d.key,{d,source});}
 function walk(path){for(const e of fs.readdirSync(path,{withFileTypes:true})){const p=path+'/'+e.name;if(e.isDirectory()){walk(p);}else if(path.endsWith('/raw')&&e.name.endsWith('.json')&&!e.name.endsWith('.meta.json')&&fs.statSync(p).size<15000000){try{const j=read(p),meta=fs.existsSync(p+'.meta.json')?read(p+'.meta.json'):{},source={file:p,url:j.url||meta.url,retrieved:j.retrieved||meta.retrieved||'Archived before 2026-10-25'},data=j.data||j;add(data,source);for(const v of Object.values(data))add(v?.details,source);}catch{}}}}
 walk('data');
 const byToken=new Map();const token=t=>String(t).toLowerCase().replace(/^(the|a|an) /,'').match(/[a-z0-9]+/)?.[0];
 for(const r of index.values()){const k=token(r.d.title);if(!byToken.has(k))byToken.set(k,[]);byToken.get(k).push(r);}
 for(const b of books)for(const r of byToken.get(token(b.title))||[])accept(b,r.d,r.source);
 save();console.log({cachedEditions:index.size,books:Object.keys(state.books).length});
}
