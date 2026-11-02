import fs from 'node:fs';
const d='data/value250_261102/',read=n=>JSON.parse(fs.readFileSync(d+n+'.json','utf8')),p=read('pending'),s=read('selected'),k=read('screened-keys');
const add=process.argv.slice(2).map(Number).map(i=>p[i]);
for(const x of add){if(!x||s.some(y=>y.id===x.id&&y.kind===x.kind))throw Error('Invalid or repeated selection');s.push(x);}
fs.writeFileSync(d+'selected.json',JSON.stringify(s,null,2));
fs.writeFileSync(d+'screened-keys.json',JSON.stringify([...new Set([...k,...p.map(x=>x.key)])]));
console.log({selected:s.length});
