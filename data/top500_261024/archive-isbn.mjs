import fs from 'node:fs';
import {matches,referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/top500_261024/',read=p=>JSON.parse(fs.readFileSync(p)),list=v=>Array.isArray(v)?v:v?[v]:[];
const targets=read(dir+'targets.json'),review=read(dir+'review.json'),editions=read(dir+'candidate-editions.json'),enrichment=read(dir+'candidate-enrichment.json').books,library=read(dir+'progress.json');
const state=fs.existsSync(dir+'archive-isbn.json')?read(dir+'archive-isbn.json'):{batches:[],books:{},intervalMs:10000};
const save=()=>{fs.writeFileSync(dir+'archive-isbn.json.tmp',JSON.stringify(state,null,2)+'\n');fs.renameSync(dir+'archive-isbn.json.tmp',dir+'archive-isbn.json');};
const series=new Set(['intake-0190','intake-0203','progress-0677','progress-0817','intake-0172','n88837eb597']);
const queue=targets.filter(b=>review.find(x=>x.id===b.id).remaining.references&&!series.has(b.id)).map(b=>{
 const e=enrichment[b.id]?.edition||editions[b.id];
 const ids=[e?.id,...e?.isbn10||[],...e?.isbn13||[],b.amazon?.asin,...(library.books[b.id]?.identities||[]).flatMap(x=>x.isbn)];
 return {b,ids:[...new Set(ids.map(x=>String(x||'').replace(/^ISBN(?:\/ASIN)?:/,'' )).filter(x=>/^(?:\d{9}[\dX]|\d{13})$/.test(x)))]};
}).filter(x=>x.ids.length);
for(let i=0;i<queue.length;i+=10){
 if(state.blocked)break;
 const chunk=queue.slice(i,i+10),key=chunk.map(x=>x.b.id).join(',');if(state.batches.some(x=>x.key===key))continue;
 const ids=[...new Set(chunk.flatMap(x=>x.ids))],q='mediatype:texts AND isbn:('+ids.map(id=>'"'+id+'"').join(' OR ')+')';
 const url='https://archive.org/advancedsearch.php?'+new URLSearchParams({q,output:'json',rows:'100','fl[]':'identifier,title,creator,description,language,isbn,date'});
 await new Promise(r=>setTimeout(r,Math.max(0,(state.lastRequest||0)+state.intervalMs-Date.now())));state.lastRequest=Date.now();
 const batch={key,url,retrieved:new Date().toISOString(),file:dir+'raw/archive-isbn-'+i+'.json'};
 try{
  const response=await fetch(url,{signal:AbortSignal.timeout(25000)}),text=await response.text();batch.status=response.status;fs.writeFileSync(batch.file,text);
  if([403,429,503].includes(response.status)){state.blocked=batch;save();break;}
  if(response.ok){
   const result=JSON.parse(text);batch.found=result.response?.numFound;const docs=result.response?.docs||[];
   for(const {b,ids}of chunk){
    const s=state.books[b.id]={batch:key,matches:[]};
    for(const d of docs){
     if(!list(d.isbn).some(id=>ids.includes(id)))continue;
     const notes=list(d.description).join('\n'),normalized={title:d.title,authors:list(d.creator).map(name=>({name:name.replace(/,?\s+\d{4}.*$/,'')})),notes},r=referenceRanges(normalized);
     s.matches.push({identifier:d.identifier,title:d.title,creator:d.creator,language:d.language,pages:r.pages});
     if(!r.pages||!matches(b,normalized)||!list(d.language).some(x=>['eng','English','hrv','Croatian'].includes(x))||/audio|large print|abridged|summary|study guide/i.test(d.title))continue;
     if(!s.reference)s.reference={pages:r.pages,ranges:r.spans,confidence:'moderate',method:'catalogued-reference-ranges',edition:{id:'ISBN:'+list(d.isbn)[0],title:d.title,author:list(d.creator).join('; '),year:d.date?.slice(0,4)||null,language:list(d.language).join(', '),isbn:list(d.isbn)},url:'https://archive.org/details/'+d.identifier,source:{url,file:batch.file,retrieved:batch.retrieved,evidence:notes},sameEditionAsPG:false,limitation:'Explicit catalogued reference range from an ISBN lookup. Total-page and reference editions may differ; unlisted notes are not counted.'};
    }
   }
  }
 }catch(e){batch.error=e.message;}
 state.batches.push(batch);save();console.log(JSON.stringify({batch:i,books:chunk.length,found:batch.found,refs:chunk.filter(x=>state.books[x.b.id]?.reference).map(x=>({title:x.b.title,pages:state.books[x.b.id].reference.pages}))}));
}
save();
