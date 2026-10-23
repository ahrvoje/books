import fs from 'node:fs';
import crypto from 'node:crypto';
import {matches,referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p)),write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const targets=read(dir+'targets.json'),library=read(dir+'library.json'),changes=read(dir+'changes.json');
const pending=changes.unresolved.references.map(x=>targets.books.find(b=>b.id===x.id));
const cached=new Map(),searches=[];
for(const file of fs.readdirSync(dir+'raw').filter(f=>/^library-.*\.json$/.test(f))){
 const r=read(dir+'raw/'+file);if(r.data?.docs)searches.push(r);
 for(const value of Object.values(r.data||{}))if(value?.details?.key)cached.set(value.details.key.split('/').at(-1),{d:value.details,source:r.source});
}
const out=fs.existsSync(dir+'more-references.json')?read(dir+'more-references.json'):{books:{},attempts:[],stopped:null};
const candidates=new Map();
for(const b of pending){
 const ids=[...new Set(searches.flatMap(r=>(r.data.docs||[]).filter(d=>matches(b,{title:d.title,authors:(d.author_name||[]).map(name=>({name}))})).flatMap(d=>d.edition_key||[])))];
 for(const id of ids.filter(id=>cached.has(id)))accept(b,cached.get(id));
 if(out.books[b.id])continue;
 for(const id of ids.filter(id=>!cached.has(id)).sort((a,b)=>parseInt(b.slice(2))-parseInt(a.slice(2))).slice(0,24)){
  if(!candidates.has(id))candidates.set(id,[]);candidates.get(id).push(b);
 }
}
function accept(b,{d,source}){
 if(out.books[b.id]||!matches(b,d)||!(d.languages||[]).some(l=>['/languages/eng','/languages/hrv','/languages/scr'].includes(l.key)))return;
 if(/audio|abridged|summary|study guide/i.test([d.title,d.physical_format,d.edition_name].join(' ')))return;
 const r=referenceRanges(d);if(!r.pages)return;
 out.books[b.id]={pages:r.pages,confidence:'moderate',method:'catalogued-ranges-or-contents',ranges:r.spans,edition:{id:d.key,title:[d.title,d.subtitle].filter(Boolean).join(': '),author:(d.authors||[]).map(a=>a.name).filter(Boolean).join('; ')||d.by_statement,language:'English',year:d.publish_date,isbn:[...d.isbn_10||[],...d.isbn_13||[]]},url:'https://openlibrary.org'+d.key,source,limitation:'Only explicitly bounded reference sections counted; not inline citations or indexes. Edition may differ from the print-page edition.'};
 console.log('Found',b.id,b.title,r.pages,r.spans.map(s=>s.evidence));
}
const ids=[...candidates.keys()];console.log('Additional edition records',ids.length,'books',pending.length);
let last=0;
if(!out.stopped)for(let i=0;i<ids.length;i+=30){
 const batch=ids.slice(i,i+30).filter(id=>candidates.get(id).some(b=>!out.books[b.id]));if(!batch.length)continue;
 const url='https://openlibrary.org/api/books?bibkeys='+batch.map(id=>'OLID:'+id).join(',')+'&jscmd=details&format=json';
 const file=dir+'raw/more-refs-'+crypto.createHash('sha256').update(url).digest('hex').slice(0,16)+'.json';let r;
 if(fs.existsSync(file))r=read(file);else{
  await new Promise(resolve=>setTimeout(resolve,Math.max(0,last+3000-Date.now())));last=Date.now();
  r={source:{url,file,retrieved:new Date().toISOString()},data:null};
  try{const response=await fetch(url,{signal:AbortSignal.timeout(25000),headers:{'User-Agent':'PersonalBookCatalogResearch/1.0'}});r.source.status=response.status;if(response.ok)r.data=await response.json();if([403,429,503].includes(response.status))out.stopped=r.source;}catch(e){r.source.error=e.message;}
  write(file,r);
 }
 out.attempts.push(r.source);
 for(const id of batch)for(const b of candidates.get(id)){const d=r.data?.['OLID:'+id]?.details;if(d)accept(b,{d,source:r.source});}
 write(dir+'more-references.json',out);console.log('Batch',i+batch.length,'/',ids.length,'found',Object.keys(out.books).length);
 if(out.stopped)break;
}
write(dir+'more-references.json',out);
