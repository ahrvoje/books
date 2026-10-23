import fs from 'node:fs';
import {matches} from '../reference_pages_261022/collect.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p)),links=read(dir+'links.json'),files=new Map();
const flagged=[];let checked=0;
for(const b of links){
 const asin=b.purchaseUrl.match(/\/dp\/([A-Z0-9]{10})/i)?.[1],file=b.edition?.source?.rawFile;if(!asin||!file?.endsWith('.json')||!fs.existsSync(file))continue;
 if(!files.has(file)){const r=read(file);files.set(file,r.data||r);}
 const data=files.get(file),d=data['ISBN:'+asin]?.details;if(!d?.title||!(d.authors?.some(a=>a.name)||d.by_statement))continue;checked++;
 if(!matches(b,d))flagged.push({id:b.id,title:b.title,author:b.author,url:b.purchaseUrl,observed:{title:d.title,subtitle:d.subtitle,authors:d.authors,by:d.by_statement,key:d.key},file});
}
const confirmedWrongBooks=['g0198','g0175','g0355','g0006','g0282'];
for(const row of flagged)row.review=confirmedWrongBooks.includes(row.id)?'Different work and author; correction required.':'Reviewed title or author variant of the same work; no link change justified.';
fs.writeFileSync(dir+'library-link-audit.json',JSON.stringify({checked,flagged,confirmedWrongBooks},null,2)+'\n');console.log({checked,flags:flagged.length,confirmedWrongBooks});
