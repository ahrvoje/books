import fs from 'node:fs';
import zlib from 'node:zlib';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p));
const t=read(dir+'targets.json'),publishers=read(dir+'publishers.json'),out={};
for(const [id,p]of Object.entries(publishers)){
 const book=t.books.find(b=>b.id===id);if(!book||!p.source.file||!fs.existsSync(p.source.file))continue;
 const html=zlib.gunzipSync(fs.readFileSync(p.source.file)).toString();
 for(const m of html.matchAll(/var format\d+ = (.*);/g)){
  let formats;try{formats=JSON.parse(m[1]);}catch{continue;}
  for(const f of Object.values(formats)){
   if(!titleMatches(book.title,f.title)||!authorMatches(book.author,f.author)||!/paperback|hardcover/i.test(f.format?.name))continue;
   const asin=f.vendorIds?.Amazon;if(!/^[A-Z0-9]{10}$/.test(asin))continue;
   (out[id]||=[]).push({title:f.title,author:f.author,isbn:String(f.isbn),asin,url:'https://www.amazon.com/dp/'+asin,format:f.format.name,pages:f.totalPages,year:+f.onSaleDate.date.slice(0,4),source:p.source,evidence:'Publisher structured edition record explicitly maps the matching print edition to this Amazon vendor identifier.'});
  }
 }
}
fs.writeFileSync(dir+'publisher-products.json',JSON.stringify(out,null,2)+'\n');console.log(out);
