import fs from 'node:fs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const dir='data/v3_review_261103',changes=read(dir+'/changes.json'),archive=read(dir+'/archived-metadata.json'),editions=read('site/editions.json');
const moved=[];
for(const x of changes.filter(x=>x.status==='vetoed')){
 const edition=archive[x.id]?.enrichment?.edition;
 if(edition){editions[x.id]=edition;moved.push(x.id);}
}
fs.writeFileSync('site/editions.json',JSON.stringify(editions,null,2)+'\n');
const c=read(dir+'/compiled.json'),byKey=new Map(c.currentBooks.filter(b=>b.status==='vetoed').map(b=>[b.author+'|'+b.title,b]));
const file='VETOED_BOOKS.md';
const text=fs.readFileSync(file,'utf8').split(/\r?\n/).map(l=>{
 if(!/^\| \d{4}-/.test(l))return l;
 const a=l.split('|').slice(1,-1).map(s=>s.trim()),b=byKey.get(a[2]+'|'+a[3].match(/^\[([^\]]+)\]/)[1]);
 const e=editions[b.id];a[8]=e?`[${e.pages}](${e.url})`:'Unknown';return '| '+a.join(' | ')+' |';
}).join('\n');fs.writeFileSync(file,text);
console.log({preservedPreferredEditions:moved});
