import fs from 'node:fs';const c=JSON.parse(fs.readFileSync(JSON.parse(fs.readFileSync('data/catalog.json')).compiled));
for(const q of process.argv.slice(2)){console.log(q,[...c.currentBooks,...c.exclusions].filter(b=>JSON.stringify([b.title,b.author]).toLowerCase().includes(q.toLowerCase())).map(b=>[b.id,b.title,b.author]));}
