import fs from 'node:fs';
const d='data/refs100_261102/',read=p=>JSON.parse(fs.readFileSync(p)),q=read(d+'queue.json'),ids=new Set(q.map(b=>b.id)),selected=new Set(read(d+'selected.json').map(b=>b.id));
const extra=read(d+'targets.json').filter(b=>b.reference.pages===null&&!ids.has(b.id)&&!selected.has(b.id));fs.writeFileSync(d+'queue.json',JSON.stringify([...q,...extra],null,2));fs.writeFileSync(d+'recovery-queue.json',JSON.stringify(extra,null,2));console.log({original:q.length,recovery:extra.length});
