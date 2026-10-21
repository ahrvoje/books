import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const dir='data/source_batch_261021/',read=p=>JSON.parse(fs.readFileSync(p));
const c=read(dir+'maintenance-compiled.json'),lines=fs.readFileSync('EXCLUDED_BOOKS.md','utf8').trim().split('\n'),map=new Map(c.exclusions.map(b=>[b.line,b]));c.exclusions=lines.map(l=>{const b=map.get(l);if(!b)throw Error(l);return b;});fs.writeFileSync(dir+'maintenance-compiled.json',JSON.stringify(c,null,2)+'\n');
const changes=read(dir+'maintenance-changes.json'),removed=changes.excluded.filter(b=>b.previousStatus==='vetoed');
let veto=execFileSync('git',['-c','safe.directory=C:/repos/books','show','HEAD:VETOED_BOOKS.md'],{encoding:'utf8'});
for(const b of removed){veto=veto.split('\n').filter(l=>!(l.startsWith('|')&&l.includes(b.title))).join('\n');}
veto=veto.replace(/\*\*205 unique source works\*\*/,'**'+c.currentBooks.filter(b=>b.status==='vetoed').length+' unique source works**');
veto=veto.replace('\n\n','\n\n[Language exclusion update]('+changes.report+').\n\n');
fs.writeFileSync('VETOED_BOOKS.md',veto);console.log({removedVetoes:removed});
