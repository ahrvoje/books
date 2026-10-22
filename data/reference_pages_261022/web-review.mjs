import fs from 'node:fs';
import {read,write,DIR,norm,referenceRanges} from './collect.mjs';
const candidates=[];
for(const file of fs.readdirSync(`${DIR}/web`)){
 const data=read(`${DIR}/web/${file}`);
 for(const block of data.result.split(/-{40,}\n/)){
  const headline=block.split('\n')[0],url=headline.match(/\((https?:.*)\)\s*$/)?.[1];if(!url)continue;
  for(const b of data.targets){
   const title=norm(b.title.split(/:| — /)[0]).replace(/^the |^a |^an /,'');
   if(!norm(headline).includes(title))continue;
   const toc=block.split('\n').map(l=>l.match(/^\s*([A-Za-z][A-Za-z ',:’&–-]{1,80}?)\s*(?:\|\s*(?:p\.\s*)?|\(pg\.\s*|\t+| {2,}| · )(\d+)\)?\s*$/)).filter(Boolean).map(m=>({title:m[1].trim(),pagenum:m[2]}));
   const r=referenceRanges({notes:block,table_of_contents:toc});
   const lines=block.split('\n').filter(l=>/(?:notes|bibliograph|references|index|acknowledg).{0,40}\d|\d.{0,10}(?:notes|bibliograph|references|index)/i.test(l));
   if(r.pages||lines.length)candidates.push({id:b.id,title:b.title,url,rangePages:r.pages,ranges:r.spans,authorPresent:norm(block).split(' ').includes(norm(b.author.split(/;| and /)[0]).split(' ').at(-1)),adaptation:/young readers|adapted for children|abridged|large print/i.test(block),lines:lines.map(l=>l.slice(0,600)).slice(0,8),isbn:[...new Set([...block.matchAll(/\b(?:97[89][-\d ]{10,17}|\d{9}[\dX])\b/g)].map(m=>m[0]))].slice(0,8),file:`${DIR}/web/${file}`});
  }
 }
}
write(`${DIR}/web-candidates.json`,candidates);
for(const c of candidates)console.log(JSON.stringify(c));
