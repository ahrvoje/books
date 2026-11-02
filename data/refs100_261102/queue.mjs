import fs from 'node:fs';
const d='data/refs100_261102/',read=p=>JSON.parse(fs.readFileSync(p)),seen=new Set();
for(const entry of fs.readdirSync('data',{withFileTypes:true}).filter(x=>x.isDirectory()&&x.name!=='refs100_261102')){const raw='data/'+entry.name+'/raw';if(!fs.existsSync(raw))continue;for(const f of fs.readdirSync(raw).filter(f=>/^reference-.*\.json$/.test(f)&&!f.includes('.parsed.')&&!f.includes('.error.'))){const r=read(raw+'/'+f);if(r.bookId)seen.add(r.bookId);}}
const all=read(d+'targets.json').filter(b=>b.reference.pages===null),fresh=all.filter(b=>!seen.has(b.id));
fs.writeFileSync(d+'previous-attempts.json',JSON.stringify([...seen]));fs.writeFileSync(d+'queue.json',JSON.stringify(fresh,null,2));console.log({missing:all.length,previousAttempts:seen.size,fresh:fresh.length,first:fresh.slice(0,10).map(b=>b.title)});
