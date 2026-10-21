import fs from 'node:fs';
const ids=new Set(process.argv.slice(2).map(Number));
for(const file of fs.readdirSync('data/sources_261020/primary').filter(f=>/^final-research-\d+\.json$/.test(f))){
 const d=JSON.parse(fs.readFileSync('data/sources_261020/primary/'+file,'utf8'));
 d.books.forEach((b,j)=>{
  if(!ids.has(b.index))return;
  console.log(JSON.stringify({i:b.index,file,text:String(d.results[j].value).slice(0,12500)}));
 });
}
