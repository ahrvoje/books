import fs from 'node:fs';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/metadata2_261025',read=p=>JSON.parse(fs.readFileSync(p)),old=read('data/metadata1000_261025/library.json').books,now=read(dir+'/library.json').books,manual=read(dir+'/manual.json');
const out=[],seen=new Set(['0195168755','0309062780','0199596654','0691003971','0367136597','0691234469','0262553481','1624104029']);
for(const b of read(dir+'/targets.json').filter(b=>!b.amazon&&!manual[b.id]?.amazon).slice(0,180)){
 const variants=[...(now[b.id]?.identities||[]),...(old[b.id]?.identities||[])].filter(x=>/paperback|softcover/i.test(x.format)&&titleMatches(b.title,x.title)&&authorMatches(b.author,x.author));
 const ids=[...variants.flatMap(x=>x.isbn),b.purchaseUrl.match(/\/dp\/([A-Z0-9]{10})/)?.[1],...b.edition?.isbn10||[]].filter(x=>/^\d{9}[\dX]$/.test(x));
 for(const asin of [...new Set(ids)].slice(0,2)){if(seen.has(asin))continue;seen.add(asin);out.push({id:b.id,title:b.title,author:b.author,rank:b.rank,asin,url:'https://www.amazon.com/dp/'+asin});}
}
fs.writeFileSync(dir+'/amazon-cache-queue.json',JSON.stringify(out,null,2)+'\n');console.log(out.length);
