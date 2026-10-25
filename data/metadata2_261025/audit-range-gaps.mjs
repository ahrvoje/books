import fs from 'node:fs';
import {referenceRanges} from '../reference_pages_261022/collect.mjs';
const dir='data/metadata2_261025',out=[];
for(const f of fs.readdirSync(dir+'/raw').filter(f=>/^archive-\d+\.json$/.test(f))){
 const j=JSON.parse(fs.readFileSync(dir+'/raw/'+f));
 for(const d of j.response?.docs||[]){const notes=[d.description].flat().filter(Boolean).join('\n');if(referenceRanges({notes}).pages)continue;
  const snippets=notes.split('\n').filter(x=>/bibliograph|references|endnotes/i.test(x)&&/\d/.test(x)&&x.length<500);if(snippets.length)out.push({title:d.title,author:d.creator,snippets,file:f});
 }
}
fs.writeFileSync(dir+'/range-gaps.json',JSON.stringify(out,null,2));console.log(JSON.stringify(out.slice(0,45),null,2));console.log('Total',out.length);
