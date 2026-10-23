import fs from 'node:fs';
const d='data/intake_progress_261023/',read=f=>JSON.parse(fs.readFileSync(f)),write=(f,x)=>fs.writeFileSync(f,JSON.stringify(x,null,2)+'\n');
const cp=read('data/catalog.json').compiled,c=read(cp),fresh=read(d+'new-books.json'),editions=read('site/editions.json');
for(const b of fresh.filter(b=>b.edition)){
 const e=read(d+'editions/'+b.index+'.json').edition;
 b.edition.year=+e.publish_date.match(/\b(1[0-9]{3}|20[0-9]{2})\b/)[0];editions[b.id]=b.edition;
 for(const a of [c.currentBooks,c.sourceBooks]){const v=a.find(v=>v.id===b.id);if(v)v.edition=b.edition;}
}
write(cp,c);write(d+'new-books.json',fresh);write('site/editions.json',editions);
