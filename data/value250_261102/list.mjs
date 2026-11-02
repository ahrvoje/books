import fs from 'node:fs';
const d='data/value250_261102/',p=JSON.parse(fs.readFileSync(d+'pending.json')),norm=s=>s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g,'');
for(const [i,x]of p.entries()){const main=norm(x.title.split(':')[0].replace(/\([^)]*\)/g,''));if(main.length>7&&norm(x.sourceTitle).includes(main)&&x.author.split(/[ ;,]+/).filter(w=>w.length>4).some(w=>norm(x.sourceTitle+' '+x.sourceText.slice(0,600)).includes(norm(w))))console.log(i,x.kind,x.count,x.title,'|',x.author,'|',x.sourceTitle);}
