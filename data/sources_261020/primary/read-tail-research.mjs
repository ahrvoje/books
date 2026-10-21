import fs from 'node:fs';
const ids=process.argv.slice(2).filter(x=>/^\d+$/.test(x)).map(Number);
const only=process.argv.find(x=>x.startsWith('--file='))?.split('=')[1];
for(const f of fs.readdirSync('data/sources_261020/primary/').filter(f=>/^tail-research-\d+\.json$/.test(f))){
 if(only&&!f.includes('-'+only+'.'))continue;
 const d=JSON.parse(fs.readFileSync('data/sources_261020/primary/'+f,'utf8'));
 d.books.forEach((b,j)=>{
  if(!ids.includes(b.index))return;
  const blocks=String(d.results[j].value).split(/-{10,}/).map(s=>s.trim());
  const chosen=blocks.filter(s=>/penguin|hachette|simonandschuster|mitpress|wwnorton|phaidon|macmillan|yalebooks|harpercollins|cambridge|oup\.com|princeton|newyorker|ams\.org|physicstoday|nature\.com|publishersweekly|four.?elephants|sursumcorda|books\.google|britannica|scientificamerican/i.test(s.split('\n')[0]));
  console.log(JSON.stringify({i:b.index,file:f,results:(chosen.length?chosen:blocks).slice(0,3).map(s=>s.slice(0,8500))}));
 });
}
