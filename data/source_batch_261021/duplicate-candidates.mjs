import fs from 'node:fs';
const dir='data/source_batch_261021/',j=p=>JSON.parse(fs.readFileSync(p)),c=j(j('data/catalog.json').compiled),all=[...c.currentBooks,...c.exclusions];
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().replace(/^(the|a|an) /,'');
const core=s=>norm(s.split(/:|\s[—–]\s|\(/)[0]);
const rows=[];
for(const p of j(dir+'pending.json')){const title=core(p.title),words=new Set(title.split(' '));const candidates=all.filter(b=>{const t=core(b.title);if(title===t)return true;if(Math.min(title.length,t.length)<12)return false;const overlap=t.split(' ').filter(w=>words.has(w)).length;return overlap/Math.max(words.size,t.split(' ').length)>.8;});if(candidates.length)rows.push({id:p.batchId,title:p.title,author:p.author,candidates:candidates.map(b=>({id:b.id,title:b.title,author:b.author}))});}
fs.writeFileSync(dir+'duplicate-candidates.json',JSON.stringify(rows,null,2));
console.log(rows.map(p=>`${p.id}: ${p.title} / ${p.author} => ${p.candidates.map(b=>`${b.id}: ${b.title} / ${b.author}`).join(' || ')}`).join('\n'));console.log(rows.length);
