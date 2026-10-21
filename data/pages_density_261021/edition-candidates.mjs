import fs from 'node:fs';
import path from 'node:path';
import {books,state,save,log,retrieve,acceptOL,titleMatches,authorMatches,DIR} from './collect.mjs';
// Work records often omit subtitles. Relax only candidate selection; edition
// acceptance still checks the complete title/subtitle and author.
const candidates=new Map();
for(const b of books.filter(b=>!state.books[b.id].edition)){
 for(const a of state.books[b.id].attempts.filter(a=>a.kind==='ol-work-search')){
  if(!a.rawFile||!fs.existsSync(path.join(DIR,a.rawFile)))continue;
  const r=JSON.parse(fs.readFileSync(path.join(DIR,a.rawFile)));
  for(const d of r.docs||[]){
   if(!titleMatches(b.title.split(':')[0],d.title.split(':')[0])||!authorMatches(b.author,(d.author_name||[]).join('; ')))continue;
   for(const key of (d.edition_key||[]).slice(0,25)){if(!candidates.has(key))candidates.set(key,new Map());candidates.get(key).set(b.id,b);}
  }
 }
}
const keys=[...candidates.keys()];
for(let i=0;i<keys.length;i+=35){const group=keys.slice(i,i+35),r=await retrieve(`https://openlibrary.org/api/books?bibkeys=${group.map(k=>'OLID:'+k).join(',')}&jscmd=details&format=json`,`ol-subtitle-${i}`);
 for(const key of group)for(const b of candidates.get(key).values()){const s=state.books[b.id];if(s.edition)continue;
  const check=r.status===200?acceptOL(b,r.data?.['OLID:'+key],r):{accepted:false,reason:r.error||`HTTP ${r.status}`};
  s.attempts.push({kind:'ol-full-edition-check',editionKey:key,rawFile:r.rawFile,retrieved:r.retrieved,...check});if(!s.edition)s.reason=check.reason;
 }log(`Full edition candidates ${Math.min(i+35,keys.length)}/${keys.length}`);
}
save();
