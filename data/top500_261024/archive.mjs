import fs from 'node:fs';
import {matches,referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/top500_261024',read=p=>JSON.parse(fs.readFileSync(p)),save=()=>{fs.writeFileSync(dir+'/archive.json.tmp',JSON.stringify(state,null,2)+'\n');fs.renameSync(dir+'/archive.json.tmp',dir+'/archive.json');};
const targets=read(dir+'/targets.json'),review=read(dir+'/review.json'),state=fs.existsSync(dir+'/archive.json')?read(dir+'/archive.json'):{books:{},intervalMs:10000};
const series=new Set(['intake-0190','intake-0203','progress-0677','progress-0817','intake-0172','n88837eb597']);
const list=v=>Array.isArray(v)?v:v?[v]:[];
for(const [i,b]of targets.entries()){
 if(state.blocked)break;
 if(!review.find(x=>x.id===b.id).remaining.references||series.has(b.id))continue;
 const s=state.books[b.id]||={};if(s.done)continue;
 const author=b.author.split(';')[0].replace(/\([^)]*\)/g,'').trim().split(/\s+/).at(-1).replace(/[^\p{L}\p{N}]/gu,'');
 const title=b.title.split(':')[0].replace(/[“”‘’]/g,"'").replaceAll('"','');
 const q=`title:("${title}") AND creator:("${author}") AND mediatype:texts`;
 const url='https://archive.org/advancedsearch.php?'+new URLSearchParams({q,output:'json',rows:'12','fl[]':'identifier,title,creator,description,language,isbn,date'});
 await new Promise(r=>setTimeout(r,Math.max(0,(state.lastRequest||0)+state.intervalMs-Date.now())));state.lastRequest=Date.now();
 s.url=url;s.retrieved=new Date().toISOString();s.file=dir+'/raw/archive-'+b.id+'.json';
 try{
  const response=await fetch(url,{signal:AbortSignal.timeout(20000)});s.status=response.status;
  const text=await response.text();fs.writeFileSync(s.file,text);
  if([403,429,503].includes(response.status)){state.blocked={url,status:response.status};save();break;}
  if(response.ok){
   const docs=JSON.parse(text).response?.docs||[];s.found=docs.length;
   for(const d of docs){
    const language=list(d.language);if(!language.some(x=>['eng','English','hrv','Croatian'].includes(x)))continue;
    if(/audio|large print|abridged|summary|study guide/i.test(d.title))continue;
    const normalized={title:d.title,authors:list(d.creator).map(name=>({name:name.replace(/,?\s+\d{4}.*$/,'')})),notes:list(d.description).join('\n')};
    if(!matches(b,normalized))continue;
    const ranges=referenceRanges(normalized);if(!ranges.pages)continue;
    const ids=list(d.isbn),same=ids.some(id=>String(b.edition?.id||'').includes(id));
    const record={pages:ranges.pages,confidence:'moderate',ranges:ranges.spans,method:'catalogued-reference-ranges',edition:{id:ids[0]?'ISBN:'+ids[0]:'IA:'+d.identifier,title:d.title,author:list(d.creator).join('; '),year:d.date?.slice(0,4)||null,language:language.join(', '),isbn:ids},url:'https://archive.org/details/'+d.identifier,source:{url,file:s.file,retrieved:s.retrieved,evidence:normalized.notes},sameEditionAsPG:same,limitation:'Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.'};
    if(!s.reference||same&&!s.reference.sameEditionAsPG)s.reference=record;
   }
  }
 }catch(e){s.error=e.message;}
 s.done=true;save();console.log(JSON.stringify({i:i+1,title:b.title,found:s.found,refs:s.reference?.pages,error:s.error}));
}
save();
