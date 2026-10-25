import fs from 'node:fs';
import assert from 'node:assert/strict';
const d='data/intake_large_261024/',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const c=read('data/intake_next_261024/compiled.json'),all=[...c.currentBooks,...c.exclusions],q=read(d+'cleaned.json'),r=read(d+'resolved.json');
for(const [index,id] of [[834,'h0318'],[53,'q0226'],[53,'n22132d6148'],[369,'g1153']]){if(r.some(x=>x.index===index&&x.id===id))continue;const x=q.find(x=>x.index===index),b=all.find(b=>b.id===id);assert(x&&b);r.push({...x,id,status:b.status,canonicalTitle:b.title,canonicalAuthor:b.author,identityNote:'Manually resolved existing work; compound nomination at index 53 contains two distinct named books.'});}
const e=read(d+'exclusions.json').filter(x=>![834,168,452].includes(x.index));
for(const [i,title] of [[378,'Bayesian Methods for Hackers'],[379,'Python for Data Analysis'],[381,'Interactive Data Visualization for the Web'],[385,'iOS Programming: The Big Nerd Ranch Guide'],[932,'Selected Papers on Optomechanical Design']])e.find(x=>x.index===i).title=title;
const n=read(d+'nonbooks.json');for(const i of [29,73])if(!n.some(x=>x.index===i))n.push({...q.find(x=>x.index===i),reason:'Unbounded author recommendation (Anything/Everything), not a named book. No titles inferred.',status:'Non-book reference; omitted from book lists.'});
const books=read(d+'decisions.json'),groups=[r.map(x=>x.index),e.map(x=>x.index),n.map(x=>x.index),books.flatMap(x=>x.indices)];
for(let i=0;i<groups.length;i++)for(let j=i+1;j<groups.length;j++)assert(!groups[i].some(x=>groups[j].includes(x)),'overlapping decisions');
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\([^)]*\)/g,'').replace(/[^a-z0-9]+/g,' ').trim().replace(/^the /,'');
for(const b of [...e,...books])assert(!all.some(x=>norm(x.title)===norm(b.title)||norm(x.title.split(':')[0])===norm(b.title.split(':')[0])),b.title);
write(d+'resolved.json',r);write(d+'exclusions.json',e);write(d+'nonbooks.json',n);write(d+'collisions.json',[]);
console.log({resolved:r.length,exclusions:e.length,nonbooks:n.length,newBooks:books.length,closedCandidates:new Set(groups.flat()).size});
