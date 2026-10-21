import fs from 'node:fs';
const dir='data/sources_261020/primary/',out=[];
for(const file of fs.readdirSync(dir).filter(f=>/^math-research-\d+\.json$/.test(f))){
 const d=JSON.parse(fs.readFileSync(dir+file,'utf8'));
 for(let j=0;j<d.books.length;j++){
  const i=d.books[j].index;
  for(const rawText of String(d.results[j].value||'').split(/-{10,}/)){
   const text=rawText.trim();
   const url=text.match(/^.{0,500} \((https:\/\/books\.google\.[^\n]+)\)\n/)?.[1];
   if(!url)continue;
   const isbn=text.match(/\nISBN\s*\|\s*([^\n]+)/)?.[1], pages=text.match(/\nLength\s*\|\s*(\d+) pages/)?.[1];
   const pub=text.match(/\nPublisher\s*\|\s*([^\n]+)/)?.[1],title=text.match(/\nTitle\s*\|\s*([^\n]+)/)?.[1];
   if(isbn&&pages&&pub)out.push({index:i,title,pages:+pages,isbn,publisher:pub,url,capture:dir+file});
  }
 }
}
fs.writeFileSync(dir+'math-edition-candidates.json',JSON.stringify(out,null,2)+'\n');
for(const i of [...new Set(out.map(b=>b.index))])console.log(JSON.stringify({i,candidates:out.filter(b=>b.index===i).slice(0,2).map(b=>({title:b.title,pages:b.pages,isbn:b.isbn,publisher:b.publisher}))}));
