import fs from 'node:fs';
import {titleMatches} from '../pages_density_261021/collect.mjs';
const dir='data/top250_261023',read=p=>JSON.parse(fs.readFileSync(p)),books=read(dir+'/targets.json'),lib=read(dir+'/progress.json');
const findings=[];
for(const b of books){const key=b.edition?.id?.match(/OL\d+M/)?.[0];if(!key)continue;const a=lib.books[b.id].attempts.find(a=>a.kind==='edition');if(!a?.file)continue;const result=read(a.file);const record=Object.values(result.data||{}).map(v=>v.details).find(v=>v?.key?.endsWith('/'+key));if(!record)continue;if(!titleMatches(b.title,record.title+(record.subtitle?': '+record.subtitle:'')))findings.push({id:b.id,title:b.title,observedTitle:record.title,subtitle:record.subtitle,record:key,file:a.file});}
fs.writeFileSync(dir+'/existing-edition-audit.json',JSON.stringify(findings,null,2)+'\n');console.log(findings);
