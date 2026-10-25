import fs from 'node:fs';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
import {referenceRanges} from './ranges.mjs';
const dir='data/metadata2_261025',read=p=>JSON.parse(fs.readFileSync(p)),books=read(dir+'/targets.json'),state=read(dir+'/extra.json'),list=v=>Array.isArray(v)?v:v?[v]:[];
const token=t=>String(t).toLowerCase().replace(/^(the|a|an) /,'').match(/[a-z0-9]+/)?.[0],index=new Map();for(const b of books){const k=token(b.title);if(!index.has(k))index.set(k,[]);index.get(k).push(b);}
for(const folder of ['data/metadata1000_261025',dir])for(const batch of read(folder+'/archive.json').batches){
 if(batch.status!==200)continue;const docs=read(batch.file).response?.docs||[];
 for(const d of docs){const title=list(d.title).join(' '),author=list(d.creator).join('; '),language=list(d.language),notes=list(d.description).join('\n'),r=referenceRanges({notes}),ids=list(d.isbn),year=+String(d.date||'').slice(0,4);
  if(!r.pages||!language.some(x=>['eng','English','hrv','Croatian'].includes(x))||/audio|large print|abridged|summary|study guide/i.test(title)||/abridg|young readers edition|adapted for young/i.test(notes))continue;
  for(const b of index.get(token(title))||[]){if(b.reference.pages!==null||state.books[b.id]?.reference||!titleMatches(b.title,title)||!authorMatches(b.author,author)||year&&year<b.year-2)continue;
   const s=state.books[b.id]||={},url='https://archive.org/details/'+d.identifier;
   s.reference={pages:r.pages,ranges:r.spans,confidence:'moderate',method:'catalogued-range-or-single-page',edition:{id:ids[0]?'ISBN:'+ids[0]:'IA:'+d.identifier,title,author,year:year||null,language:language.join(', '),isbn:ids},url,source:{url:batch.url,file:batch.file,retrieved:batch.retrieved,evidence:notes},sameEditionAsPG:false,limitation:'Explicit catalogued reference ranges or single-page extents only. Unlisted sections are not inferred. Edition match to length is unconfirmed.'};
  }
 }
}
fs.writeFileSync(dir+'/extra.json',JSON.stringify(state,null,2)+'\n');console.log({references:Object.values(state.books).filter(x=>x.reference).length});
