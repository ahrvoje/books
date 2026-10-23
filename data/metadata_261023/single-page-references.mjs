import fs from 'node:fs';
import {matches} from '../reference_pages_261022/collect.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p));
const t=read(dir+'targets.json'),refs=read('site/reference-pages.json'),changes=read(dir+'changes.json'),done=new Set(changes.references.map(x=>x.id)),found={};
for(const file of fs.readdirSync(dir+'raw').filter(f=>/^(library|more-refs)-.*\.json$/.test(f))){
 const r=read(dir+'raw/'+file);
 for(const value of Object.values(r.data||{})){
  const d=value?.details;if(!d||!(d.languages||[]).some(l=>l.key==='/languages/eng'))continue;
  const notes=typeof d.notes==='string'?d.notes:d.notes?.value||'';
  const m=notes.match(/bibliograph(?:y|ical references)\s*:\s*p\.\s*\[?(\d+)\]?(?=\s*(?:[.;)]|$))/i);if(!m)continue;
  for(const b of t.books){if(found[b.id]||done.has(b.id)||refs[b.id]?.pages!==null||!matches(b,d))continue;
   found[b.id]={id:b.id,title:b.title,edition:d.key,source:r.source,url:'https://openlibrary.org'+d.key,page:+m[1],evidence:m[0],notes};
  }
 }
}
fs.writeFileSync(dir+'single-page-candidates.json',JSON.stringify(found,null,2)+'\n');console.log(found);
