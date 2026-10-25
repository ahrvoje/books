import fs from 'node:fs';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/metadata3000_261025',read=p=>JSON.parse(fs.readFileSync(p));
const seen=new Set(['0195168755','0309062780','0199596654','0691127557']);
for(const base of ['data/metadata2_261025/raw','data/metadata1000_261025/raw'])for(const f of fs.readdirSync(base).filter(f=>/^amazon-cache-.*\.json$/.test(f))){try{const j=read(base+'/'+f);if(j.book?.asin)seen.add(j.book.asin);}catch{}}
const identities=[read('data/metadata2_261025/library.json').books,read('data/metadata1000_261025/library.json').books,read(dir+'/library.json').books];
const out=[];
for(const b of read(dir+'/targets.json').filter(b=>!b.amazon)){
 const variants=identities.flatMap(s=>s[b.id]?.identities||[]).filter(x=>titleMatches(b.title,x.title)&&authorMatches(b.author,x.author)&&/paperback|softcover/i.test(x.format));
 const ids=[b.purchaseUrl?.match(/\/dp\/([A-Z0-9]{10})/)?.[1],...b.edition?.isbn10||[],...variants.flatMap(x=>x.isbn)].filter(x=>/^\d{9}[\dX]$/.test(x));
 const asin=[...new Set(ids)].find(x=>!seen.has(x));if(!asin)continue;
 seen.add(asin);out.push({id:b.id,title:b.title,author:b.author,rank:b.rank,asin,url:'https://www.amazon.com/dp/'+asin});
}
fs.writeFileSync(dir+'/amazon-queue.json',JSON.stringify(out,null,2));
console.log(JSON.stringify(out.slice(0,120)));
