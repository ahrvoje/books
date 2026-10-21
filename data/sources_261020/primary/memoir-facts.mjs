import fs from 'node:fs';
const ids=new Set(process.argv.slice(2).map(Number));
for(const file of ['memoir-research-01.json','memoir-research-02.json']){
 const d=JSON.parse(fs.readFileSync('data/sources_261020/primary/'+file,'utf8'));
 d.books.forEach((b,j)=>{
  if(ids.size&&!ids.has(b.index))return;
  const chunks=String(d.results[j].value||'').split(/-{10,}/).filter(s=>/\((https?:\/\/[^ ]*(?:penguinrandomhouse|simonandschuster|macmillan|hachette|harper|joandidion|scottjurek|books\.google|openlibrary)[^\n]*)\)/.test(s));
  for(const s of chunks.slice(0,3))console.log(JSON.stringify({i:b.index,head:s.trim().split('\n')[0],facts:s.split('\n').filter(l=>/ISBN|Pages|pages|Published on|Publisher:|Publication Date/.test(l)&&!l.includes('cite')).map(l=>l.slice(0,250)).slice(0,10)}));
 });
}
