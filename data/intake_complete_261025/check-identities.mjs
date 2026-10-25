import fs from 'node:fs';
const d='data/intake_complete_261025/',q=JSON.parse(fs.readFileSync('data/intake_resume_261025/pending.json')),c=JSON.parse(fs.readFileSync('data/intake_resume_261025/compiled.json'));
const n=s=>String(s).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const all=[...c.currentBooks,...c.exclusions];const specs=fs.readdirSync(d).filter(f=>f.startsWith('specs-')).flatMap(f=>JSON.parse(fs.readFileSync(d+f)));
for(const s of specs){const x=q.find(x=>x.index===s.indices[0]);const t=s.title||x.title,a=s.author||x.author;const matches=all.filter(b=>n(b.title)===n(t)||(n(b.title.split(':')[0])===n(t.split(':')[0])&&n(b.author).includes(n(a.split(';')[0]))));if(matches.length)console.log(x.index,t,matches.map(b=>({id:b.id,title:b.title,status:b.status,sources:b.sources})));}
console.log({assessed:specs.length,entries:specs.flatMap(s=>s.indices).length,remaining:q.length-specs.flatMap(s=>s.indices).length});
