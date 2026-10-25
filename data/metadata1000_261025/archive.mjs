import fs from 'node:fs';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
import {referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/metadata1000_261025',read=p=>JSON.parse(fs.readFileSync(p)),books=read(dir+'/targets.json');
const state=fs.existsSync(dir+'/archive.json')?read(dir+'/archive.json'):{books:{},batches:[]};
const save=()=>fs.writeFileSync(dir+'/archive.json',JSON.stringify(state,null,2)+'\n'),list=v=>Array.isArray(v)?v:v?[v]:[];
const queue=books.filter(b=>(!b.edition||b.reference.pages===null)&&!/\bseries|trilogy|volumes\b/i.test(b.title));
for(let i=0;i<queue.length;i+=8){
 if(state.blocked)break;
 const chunk=queue.slice(i,i+8);if(state.batches.some(x=>x.offset===i))continue;
 const q='mediatype:texts AND ('+chunk.map(b=>' (title:("'+b.title.split(':')[0].replaceAll('"','')+'") AND creator:("'+b.author.split(';')[0].replace(/\([^)]*\)/g,'').trim().split(/\s+/).at(-1).replaceAll('"','')+'"))').join(' OR ')+')';
 const url='https://archive.org/advancedsearch.php?'+new URLSearchParams({q,output:'json',rows:'250','fl[]':'identifier,title,creator,description,language,isbn,date'});
 await new Promise(r=>setTimeout(r,Math.max(0,(state.lastRequest||0)+10000-Date.now())));state.lastRequest=Date.now();
 const batch={offset:i,ids:chunk.map(b=>b.id),url,retrieved:new Date().toISOString(),file:dir+'/raw/archive-'+i+'.json'};
 try{
  const response=await fetch(url,{signal:AbortSignal.timeout(30000)}),text=await response.text();batch.status=response.status;fs.writeFileSync(batch.file,text);
  if([403,429,503].includes(response.status)){state.blocked=batch;save();break;}
  if(response.ok){
   const result=JSON.parse(text);batch.found=result.response?.numFound;batch.truncated=batch.found>250;
   for(const b of chunk){const s=state.books[b.id]||={matches:[]};
    for(const d of result.response?.docs||[]){
     const title=list(d.title).join(' '),author=list(d.creator).join('; '),language=list(d.language);
     if(!titleMatches(b.title,title)||!authorMatches(b.author,author)||!language.some(x=>['eng','English','hrv','Croatian'].includes(x))||/audio|large print|abridged|summary|study guide/i.test(title))continue;
     const notes=list(d.description).join('\n'),r=referenceRanges({notes}),ids=list(d.isbn),year=+String(d.date||'').slice(0,4);
     if(year&&year<b.year-2)continue;
     const url='https://archive.org/details/'+d.identifier,source={url:batch.url,file:batch.file,retrieved:batch.retrieved,evidence:notes};
     s.matches.push({identifier:d.identifier,title,author,language,year,isbn:ids});
     if(b.reference.pages===null&&!s.reference&&r.pages)s.reference={pages:r.pages,ranges:r.spans,confidence:'moderate',method:'catalogued-reference-ranges',edition:{id:ids[0]?'ISBN:'+ids[0]:'IA:'+d.identifier,title,author,year:year||null,language:language.join(', '),isbn:ids},url,source,sameEditionAsPG:false,limitation:'Explicit catalogued reference ranges only. Unlisted notes may remain uncounted. Edition match to the length record is unconfirmed.'};
     const extent=notes.match(/^(?:[ivxlcdm]+,?\s+)?(\d{2,4})\s+(?:p\.|pages\b)[^\n]*/i);
     if(!b.edition&&!s.edition&&extent&&year)s.edition={id:ids[0]?'ISBN:'+ids[0]:'IA:'+d.identifier,pages:+extent[1],format:'Print edition (binding unspecified)',language:language.join(', '),year,url,title,authors:author,isbn:ids,retrieved:batch.retrieved,confidence:'moderate',source,notes:'Catalogued numbered print extent: '+extent[0]+'. Preliminaries and separately numbered plates are not added.'};
    }
   }
  }
 }catch(e){batch.error=e.message;}
 state.batches.push(batch);save();console.log(JSON.stringify({offset:i,found:batch.found,error:batch.error,pages:Object.values(state.books).filter(x=>x.edition).length,refs:Object.values(state.books).filter(x=>x.reference).length}));
}
save();
