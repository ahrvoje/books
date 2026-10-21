import fs from 'node:fs';
const c=JSON.parse(fs.readFileSync('data/remaining_261021/compiled.json'));
for(const id of ['g0342','q0282','h0818','g0685','rem-u0235','rem-u0739','rem-u0753','rem-u1605'])console.log(JSON.stringify([...c.currentBooks,...c.exclusions].find(b=>b.id===id)));
