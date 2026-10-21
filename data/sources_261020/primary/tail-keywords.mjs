import fs from 'node:fs';
const idx=+process.argv[2],needle=process.argv[3];
for(const f of fs.readdirSync('data/sources_261020/primary/').filter(f=>/^tail-research-\d+\.json$/.test(f))){
 const d=JSON.parse(fs.readFileSync('data/sources_261020/primary/'+f,'utf8'));
 d.books.forEach((b,j)=>{if(b.index!==idx)return;const text=String(d.results[j].value);
 for(const m of [...text.matchAll(new RegExp(needle,'gi'))].slice(0,2))console.log(JSON.stringify({f,text:text.slice(Math.max(0,m.index-150),m.index+1000)}));});
}
