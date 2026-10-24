import fs from 'node:fs';
import {referenceRanges} from '../reference_pages_261022/collect.mjs';
import {authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/top500_261024',read=p=>JSON.parse(fs.readFileSync(p));
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const candidates=[];
for(const file of fs.readdirSync(dir).filter(f=>/^search-ref-\d+\.json$/.test(f))){
 const search=read(dir+'/'+file);
 for(const b of search.books)for(const block of search.result.split('--------------------------------------------------------------------------------')){
  const heading=block.trim().split('\n')[0],base=norm(b.title.split(':')[0]);
  if(base.length<5||!norm(heading).includes(base)||!authorMatches(b.author,block))continue;
  const r=referenceRanges({notes:block});if(!r.pages)continue;
  const url=heading.match(/\((https?:\/\/.*)\)$/)?.[1];if(!url)continue;
  candidates.push({id:b.id,title:b.title,author:b.author,pages:r.pages,ranges:r.spans,url,file:dir+'/'+file,heading,record:block});
 }
}
fs.writeFileSync(dir+'/reference-candidates.json',JSON.stringify(candidates,null,2)+'\n');
console.log(candidates.map((c,i)=>({i,id:c.id,title:c.title,pages:c.pages,ranges:c.ranges.map(s=>s.evidence),url:c.url})));
