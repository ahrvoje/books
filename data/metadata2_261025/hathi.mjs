import fs from 'node:fs';
import {titleMatches,authorMatches,clean,products} from '../pages_density_261021/collect.mjs';
import {referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/metadata2_261025',read=p=>JSON.parse(fs.readFileSync(p)),books=read(dir+'/targets.json'),old=read('data/metadata1000_261025/library.json').books;
const state=fs.existsSync(dir+'/hathi.json')?read(dir+'/hathi.json'):{books:{},batches:[]};
const save=()=>fs.writeFileSync(dir+'/hathi.json',JSON.stringify(state,null,2)+'\n');
const isbn13=s=>{s=String(s||'').replace(/^ISBN(?:\/ASIN)?:/,'');if(/^\d{13}$/.test(s))return s;if(!/^\d{9}[\dX]$/.test(s))return null;const p='978'+s.slice(0,9);return p+(10-[...p].reduce((a,c,i)=>a+(i%2?3:1)*+c,0)%10)%10;};
const queue=books.filter(b=>(!b.edition||b.reference.pages===null)&&!/\b(series|trilogy|volumes)\b/i.test(b.title));
let last=0;
for(let i=0;i<queue.length;i+=5){
 if(state.blocked)break;if(state.batches.some(x=>x.offset===i))continue;
 const map=new Map();for(const b of queue.slice(i,i+5)){const e=b.edition,ids=[...new Set([...products(b),e?.id,...e?.isbn||[],...e?.isbn10||[],...e?.isbn13||[],...(old[b.id]?.identities||[]).flatMap(x=>x.isbn)].map(isbn13).filter(Boolean))].slice(0,3);for(const id of ids){if(!map.has(id))map.set(id,[]);map.get(id).push(b);}}
 if(!map.size){state.batches.push({offset:i,reason:'No usable ISBN'});save();continue;}
 const url='https://catalog.hathitrust.org/api/volumes/full/json/'+[...map.keys()].map(x=>'isbn:'+x).join('|'),file=dir+'/raw/hathi-'+i+'.json',batch={offset:i,url,file,retrieved:new Date().toISOString()};
 await new Promise(r=>setTimeout(r,Math.max(0,last+10000-Date.now())));last=Date.now();
 try{
  const response=await fetch(url,{signal:AbortSignal.timeout(30000)});batch.status=response.status;const text=await response.text();fs.writeFileSync(file,text);if([403,429,503].includes(response.status)){state.blocked=batch;save();break;}
  if(response.ok){const data=JSON.parse(text);for(const [key,value]of Object.entries(data)){
   const ids=key.match(/\d{13}/g)||[];const bs=ids.flatMap(id=>map.get(id)||[]);for(const d of Object.values(value.records||{})){
    const xml=d['marc-xml']||'',field=tag=>[...xml.matchAll(new RegExp('<datafield[^>]*tag="'+tag+'"[^>]*>([\\s\\S]*?)</datafield>','g'))].map(m=>m[1]),sub=(x,c)=>[...x.matchAll(new RegExp('<subfield[^>]*code="'+c+'"[^>]*>([\\s\\S]*?)</subfield>','g'))].map(m=>clean(m[1])).join(' ');
    const title=field('245').map(x=>sub(x,'a')+' '+sub(x,'b')).join(' ').replace(/\s*\/$/,''),author=[...field('100'),...field('110'),...field('700')].map(x=>sub(x,'a')).join('; ')||field('245').map(x=>sub(x,'c')).join('; '),extent=field('300').map(x=>sub(x,'a')).join('; '),notes=[...field('500'),...field('504')].map(x=>sub(x,'a')).join('\n'),language=xml.match(/<controlfield tag="008">([^<]+)<\/controlfield>/)?.[1]?.slice(35,38)||field('041').map(x=>sub(x,'a')).join(''),year=+(d.publishDates||[]).find(x=>/^\d{4}$/.test(x));
    if(!['eng','hrv','scr'].includes(language)||/abridg|young readers edition|adapted for young/i.test(notes)||/\bvolumes?\b|\bv\./i.test(extent))continue;
    const pages=+(extent.match(/^(?:[ivxlcdm]+,?\s*)?(\d+)\s*(?:p\.|pages)/i)||[])[1],r=referenceRanges({notes}),id='HathiTrust:'+d.recordURL.split('/').at(-1),source={file,url,retrieved:batch.retrieved,evidence:extent+'; '+notes};
    for(const b of bs){if(!titleMatches(b.title,title)||!authorMatches(b.author,author)||year<b.year-2||year>2026)continue;const s=state.books[b.id]||={};
     if(!b.edition&&!s.edition&&pages&&year)s.edition={id,title,authors:author,pages,year,format:'Print-source edition (digitized catalog record)',language,isbn:d.isbns,url:d.recordURL,source,confidence:'moderate',notes:'Numbered extent from MARC 300; Roman preliminaries excluded.'};
     if(b.reference.pages===null&&!s.reference&&r.pages)s.reference={pages:r.pages,ranges:r.spans,edition:{id,title,author,year,language,isbn:d.isbns,pages:pages||null},url:d.recordURL,source,confidence:'moderate',sameEditionAsPG:false,method:'HathiTrust-MARC-reference-ranges',limitation:'Explicit bibliography ranges in the source catalog record; unlisted sections are not inferred.'};
    }
   }
  }}
 }catch(e){batch.error=e.message;}
 state.batches.push(batch);save();console.log(JSON.stringify({offset:i,status:batch.status,error:batch.error,pages:Object.values(state.books).filter(x=>x.edition).length,refs:Object.values(state.books).filter(x=>x.reference).length}));
}
save();
