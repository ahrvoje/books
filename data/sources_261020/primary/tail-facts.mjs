import fs from 'node:fs';
const ids=new Set(process.argv.slice(2).map(Number));
const seen=new Set();
for(const f of fs.readdirSync('data/sources_261020/primary').filter(f=>/^tail-research-\d+\.json$/.test(f))){
 const d=JSON.parse(fs.readFileSync('data/sources_261020/primary/'+f,'utf8'));
 d.books.forEach((b,j)=>{
  if(!ids.has(b.index))return;
  for(const raw of String(d.results[j].value||'').split(/-{10,}/)){
   const lines=raw.split('\n'),head=lines.find(l=>l.includes('(http'));
   if(!head||seen.has(head)||!/(books\.google|penguinrandomhouse|mitpress|ams\.org|canongate|nyrb|hachette|openlibrary)/.test(head))continue;
   seen.add(head);
   const facts=lines.filter(l=>/ISBN|Pages|pages|Publication Date|Published on|Publisher  \||Length  \||Originally|first published/i.test(l)).map(l=>l.slice(0,450));
   if(facts.length)console.log(JSON.stringify({i:b.index,file:f,head,facts:[...new Set(facts)].filter(s=>!s.includes('cite')).slice(0,6)}));
  }
 });
}
