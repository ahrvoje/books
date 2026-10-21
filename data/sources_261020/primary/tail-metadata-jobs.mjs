import fs from 'node:fs';
const dir='data/sources_261020/primary/',out=[];
for(const file of fs.readdirSync(dir).filter(f=>/^tail-research-\d+\.json$/.test(f))){
 const d=JSON.parse(fs.readFileSync(dir+file,'utf8'));
 for(let j=0;j<d.books.length;j++)for(const raw of String(d.results[j].value||'').split(/-{10,}/)){
  const text=raw.trim(),url=text.match(/^.{0,600} \((https:\/\/books\.google\.[^\n]+)\)\n/)?.[1];
  if(!url)continue;
  const isbn=text.match(/\nISBN\s*\|\s*([^\n]+)/)?.[1],pages=text.match(/\nLength\s*\|\s*(\d+) pages/)?.[1];
  const publisher=text.match(/\nPublisher\s*\|\s*([^\n]+)/)?.[1],title=text.match(/\nTitle\s*\|\s*([^\n]+)/)?.[1];
  if(isbn&&pages&&publisher)out.push({index:d.books[j].index,title,pages:+pages,isbn,publisher,url,capture:dir+file});
 }
}
fs.writeFileSync(dir+'tail-edition-candidates.json',JSON.stringify(out,null,2)+'\n');
for(const i of [...new Set(out.map(b=>b.index))])console.log(JSON.stringify({i,candidates:out.filter(b=>b.index===i).slice(0,2).map(b=>({title:b.title,pages:b.pages,isbn:b.isbn,publisher:b.publisher}))}));
const assessments=JSON.parse(fs.readFileSync(dir+'hn-tail-assessments.json','utf8'));
const packet=JSON.parse(fs.readFileSync('data/sources_261020/hn/transfer-root-tail.json','utf8'));
fs.writeFileSync(dir+'tail-amazon-jobs.json',JSON.stringify(assessments.filter(a=>a.raw).map(a=>({index:packet.find(b=>b.id===a.id).packetIndex,id:a.id,q:'site:amazon.de "'+a.title+'" "'+a.author+'" ratings'})),null,2)+'\n');
