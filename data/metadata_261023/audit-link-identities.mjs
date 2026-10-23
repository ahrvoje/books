import fs from 'node:fs';
import {titleMatches} from '../pages_density_261021/collect.mjs';
import {authorMatches} from './amazon-fields.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p));
const links=read(dir+'links.json'),cache=read(dir+'amazon-cache.json').books,products=new Map();
for(const [id,records]of Object.entries(cache))for(const r of records){
 const asin=r.productId;if(!asin)continue;if(!products.has(asin))products.set(asin,[]);products.get(asin).push({id,...r});
}
let checked=0;const flagged=[];
for(const b of links){
 const asin=b.purchaseUrl.match(/\/dp\/([A-Z0-9]{10})/i)?.[1],records=products.get(asin);if(!records)continue;checked++;
 if(records.some(r=>titleMatches(b.title,r.title)&&authorMatches(b.author,r.byline)))continue;
 flagged.push({id:b.id,title:b.title,author:b.author,url:b.purchaseUrl,observed:records.slice(0,3).map(r=>({title:r.title,byline:r.byline,url:r.url,source:r.source}))});
}
fs.writeFileSync(dir+'link-identity-audit.json',JSON.stringify({checked,flagged},null,2)+'\n');console.log({checked,flagged});
