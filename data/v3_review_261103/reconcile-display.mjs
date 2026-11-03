import fs from 'node:fs';
import assert from 'node:assert/strict';
import {format} from '../../site/model.mjs';
const c=JSON.parse(fs.readFileSync('data/v3_review_261103/compiled.json','utf8'));
for(const [file,status] of [['RECOMMENDED_BOOKS.md','recommended'],['VETOED_BOOKS.md','vetoed']]){
 const byKey=new Map(c.currentBooks.filter(b=>b.status===status).map(b=>[b.author+'|'+b.title,b]));
 const text=fs.readFileSync(file,'utf8').split(/\r?\n/).map(line=>{
  if(!/^\| \d{4}-/.test(line))return line;
  const a=line.split('|').slice(1,-1).map(s=>s.trim()),b=byKey.get(a[2]+'|'+a[3].match(/^\[([^\]]+)\]/)[1]);assert(b);
  a[4]=format(b.total);return '| '+a.join(' | ')+' |';
 }).join('\n');fs.writeFileSync(file,text);
}
