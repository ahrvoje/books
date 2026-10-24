import fs from 'node:fs';
import {referenceRanges} from '../reference_pages_261022/collect.mjs';
const read=p=>JSON.parse(fs.readFileSync(p)),dir='data/top500_261024/';
const targets=read(dir+'targets.json'),state=read(dir+'archive.json'),review=read(dir+'review.json');
for(const b of targets){
 const s=state.books[b.id];if(!s?.file||!fs.existsSync(s.file))continue;
 if(process.argv.includes('--accepted')){if(s.reference)console.log(JSON.stringify({id:b.id,title:b.title,reference:s.reference}));continue;}
 if(s.reference||!review.find(x=>x.id===b.id).remaining.references)continue;
 try {for(const d of read(s.file).response?.docs||[]){
  const notes=Array.isArray(d.description)?d.description.join('\n'):d.description||'',r=referenceRanges({notes});
  if(r.pages)console.log(JSON.stringify({id:b.id,expected:b.title,author:b.author,observed:d.title,creator:d.creator,language:d.language,isbn:d.isbn,identifier:d.identifier,pages:r.pages,ranges:r.spans}));
 }}catch{}
}
