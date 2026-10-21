import fs from 'node:fs';
const dir='data/remaining_261021/';
const p=JSON.parse(fs.readFileSync(dir+'prepared.json'));
const c=JSON.parse(fs.readFileSync(p.baseline));
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const title=s=>norm(s.split(/[:—]/)[0]).replace(/^the /,'');
const all=[...c.currentBooks,...c.exclusions];
for(const b of p.records.filter(b=>['assessed','excluded'].includes(b.disposition))){
 const matches=all.filter(x=>title(x.title)===title(b.title));
 if(matches.length)console.log(b.batchId,b.title,'=>',matches.map(m=>m.id+' '+m.title+' / '+m.author).join('; '));
}
console.log('BATCH SAME TITLES');
const seen=new Map();for(const b of p.records.filter(b=>['assessed','excluded'].includes(b.disposition))){let k=title(b.title);if(seen.has(k))console.log(b.batchId,b.title,'=>',seen.get(k));seen.set(k,b.batchId+' '+b.author);}
