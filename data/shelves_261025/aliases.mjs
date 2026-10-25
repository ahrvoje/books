import fs from 'node:fs';
const d='data/shelves_261025',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),q=read(d+'/pending.json'),c=read('data/metadata2_261025/compiled.json'),all=[...c.currentBooks,...c.exclusions];
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim().replace(/^(the|a|an) /,'');
const base=s=>norm(s.split(':')[0]);
const indexed=all.map(z=>({z,t:norm(z.title),base:base(z.title)}));const out=[];for(const b of q){const t=norm(b.title),key=base(b.title);const options=indexed.filter(z=>key===z.base||(t.length>10&&z.t.includes(t))).map(x=>x.z);if(options.length)out.push({...b,options:options.map(z=>({id:z.id,title:z.title,author:z.author,status:z.status}))});}
fs.writeFileSync(d+'/alias-review.json',JSON.stringify(out,null,2));fs.writeFileSync(d+'/alias-review.tsv',out.map(b=>`${b.index}\t${b.source}\t${b.title} — ${b.author}\t${b.options.map(z=>z.id+': '+z.title+' — '+z.author).join(' // ')}`).join('\n'));console.log(out.length);
