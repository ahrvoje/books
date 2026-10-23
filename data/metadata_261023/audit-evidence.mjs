import fs from 'node:fs';
import {titleMatches,authorMatches,norm} from '../pages_density_261021/collect.mjs';
const dir='data/metadata_261023/',read=p=>JSON.parse(fs.readFileSync(p));
const changes=read(dir+'changes.json'),targets=read(dir+'targets.json'),books=new Map(targets.books.map(b=>[b.id,b]));
let checked=0;const flagged=[];
function records(value,out=[]){
 if(!value||typeof value!=='object')return out;
 if(value.key?.startsWith('/books/'))out.push(value);
 for(const v of Object.values(value))if(v&&typeof v==='object')records(v,out);
 return out;
}
for(const kind of ['pages','references'])for(const x of changes[kind]){
 const e=x.after;if(!e)continue;const file=e.notes?.match(/checked in (data\/[^ ]+\.json)/)?.[1]||e.source?.file;if(!file?.endsWith('.json')||!e.id?.startsWith('/books/')&&kind==='pages')continue;
 if(!fs.existsSync(file))continue;
 const id=e.id||e.edition?.id,d=records(read(file)).find(d=>d.key===id);if(!d)continue;
 const b=books.get(x.id),title=[d.title,d.subtitle].filter(Boolean).join(': '),names=(d.authors||[]).map(a=>a.name||''),author=[d.by_statement,...names].filter(Boolean).join('; ');checked++;
 if(!titleMatches(b.title,title)||!authorMatches(b.author,author)&&!names.some(name=>norm(name)===norm(b.author)))flagged.push({kind,id:x.id,title:b.title,author:b.author,recordTitle:title,recordAuthor:author,edition:id,file});
}
console.log({checked,flagged});
fs.writeFileSync(dir+'identity-audit.json',JSON.stringify({checked,flagged},null,2)+'\n');
