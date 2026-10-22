import fs from 'node:fs';
import {read,write,norm,referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/reference_gaps_261022',targets=read(`${dir}/targets.json`),found=[];
for(const file of fs.readdirSync(`${dir}/web`)){
 const data=read(`${dir}/web/${file}`),result=data.result||data;
 if(typeof result!=='string')continue;
 for(const block of result.split(/-{30,}\n/)){
  const head=block.split('\n')[0],url=head.match(/\((https?:.*)\)\s*$/)?.[1];if(!url)continue;
  for(const b of targets){
   const title=norm(b.title.split(':')[0]).replace(/^the |^a /,'');
   if(!norm(head).includes(title)||title.length<7)continue;
   const toc=block.split('\n').map(l=>l.match(/^\s*(.{2,90}?)\s*\|\s*(?:p\.\s*)?(\d+)\s*$/)).filter(Boolean).map(m=>({title:m[1].trim(),pagenum:m[2]}));
   const r=referenceRanges({notes:block,table_of_contents:toc});
   found.push({id:b.id,title:b.title,url,file:`${dir}/web/${file}`,ranges:r.spans,pages:r.pages,hints:block.split('\n').filter(l=>/(?:notes|bibliograph|references|index|acknowledg).{0,70}\d/i.test(l)).map(l=>l.slice(0,400)),isbns:[...new Set(block.match(/\b(?:978\d{10}|979\d{10}|\d{9}[\dX])\b/g)||[])]});
  }
 }
}
write(`${dir}/candidates.json`,found);
console.log(found.filter(x=>x.pages).map(x=>JSON.stringify(x)).join('\n'));
