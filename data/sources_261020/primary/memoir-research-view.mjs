import fs from 'node:fs';
const ids=new Set(process.argv.slice(2).map(Number));
const d=JSON.parse(fs.readFileSync('data/sources_261020/primary/memoir-research-01.json','utf8'));
d.books.forEach((b,j)=>{
 if(!ids.has(b.index))return;
 const chunks=String(d.results[j].value||'').split(/-{10,}/).filter(s=>/\((https?:\/\/[^ ]*(?:penguinrandomhouse|simonandschuster|macmillan|hachette|harper|joandidion|scottjurek|books\.google)[^\n]*)\)/.test(s));
 console.log(JSON.stringify({i:b.index,results:chunks.slice(0,2).map(s=>s.slice(0,8500))}));
});
