import fs from 'node:fs';
for(const [id,term] of [[177,'Stephen Hawking'],[177,'"title"'],[192,'Virtual Bookshelf']]){const s=fs.readFileSync('data/source_batch_261021/raw/'+id+'.html','utf8'),p=s.indexOf(term);console.log(id,term,p,s.slice(Math.max(0,p-300),p+700));}
const e=JSON.parse(fs.readFileSync('site/editions.json'));console.log(e.bg96a7ccad34);
const c=JSON.parse(fs.readFileSync(JSON.parse(fs.readFileSync('data/catalog.json')).compiled));console.log(c.currentBooks.filter(b=>/Give and Take|Nexus|Caesars/i.test(b.title)).map(b=>[b.title,b.author]));
