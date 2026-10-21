import fs from 'node:fs';
const dir='data/sources_261020/primary/',packet=JSON.parse(fs.readFileSync(dir+'math-packet.json','utf8'));
const scored=JSON.parse(fs.readFileSync(dir+'math-assessments.json','utf8')).filter(a=>a.raw);
const wanted=process.argv.slice(2).map(Number),out=[];
for(const a of scored){
 const b=packet.find(b=>b.id===a.id),i=b.packetIndex;
 if(wanted.length&&!wanted.includes(i))continue;
 if(!wanted.length&&b.priorEnrichment?.edition)continue;
 const all=[];
 for(const f of fs.readdirSync(dir).filter(f=>/^math-research-\d+\.json$/.test(f))){
  const d=JSON.parse(fs.readFileSync(dir+f,'utf8'));
  d.books.forEach((book,j)=>{
   if(book.index!==i)return;
   for(const rawText of String(d.results[j].value||'').split(/-{10,}/)){
    const t=rawText.trim();
    const url=t.match(/^[^\n]{0,600} \((https?:\/\/[^\n]+)\)\n/)?.[1];if(!url)continue;
    if(!/books\.google|penguinrandomhouse|hachettebookgroup|simonandschuster|mitpress|springer|yalebooks|openlibrary|bibliovault|academic\.oup|penguin\.co\.uk|worldcat/.test(url))continue;
    const lines=t.split('\n').filter(s=>/ISBN|[0-9] pages|[0-9] Pages|[0-9] pp\.|Published on|Paperback|Hardcover|Number of pages|Number of Pages|Publisher\s*\||Pub Date|Pub date/i.test(s)).map(s=>s.slice(0,240));
    if(lines.length)all.push({url,header:t.split('\n')[0],lines:lines.slice(0,12),file:f});
   }
  });
 }
 out.push({i,title:a.title,candidates:all.slice(0,3)});
}
console.log(JSON.stringify(out,null,2));
