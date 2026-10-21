import fs from 'node:fs';
const c=JSON.parse(fs.readFileSync('data/remaining_261021/compiled.json')),a=[...c.currentBooks,...c.exclusions],norm=s=>s.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]/g,'');
for(const b of a.filter(b=>b.id.startsWith('rem-'))){const title=norm(b.title.split(':')[0]);for(const old of a.filter(o=>!o.id.startsWith('rem-'))){const ot=norm(old.title.split(':')[0]);if(title.length>7&&(title===ot||norm(b.title).startsWith(norm(old.title))||norm(old.title).startsWith(norm(b.title))))console.log(b.id,b.title,'|',b.author,'=>',old.id,old.title,'|',old.author);}}
