import fs from 'node:fs';
const d='data/batch250_261102/',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),targets=read(d+'targets.json'),seen=new Set(),out=[],attempted=new Set();
for(const entry of fs.readdirSync('data',{withFileTypes:true}).filter(x=>x.isDirectory()&&x.name!=='batch250_261102')){
 const dir='data/'+entry.name;
 for(const n of ['new-candidates.json','cross-candidates.json'])if(fs.existsSync(dir+'/'+n))for(const x of read(dir+'/'+n)){const b=targets.find(b=>b.id===x.id);if(!b||!x.sourceText||seen.has(x.key)||(x.kind==='amazon'?b.amazon!==null:x.kind==='reference'?b.reference.pages!==null:!!b.edition))continue;seen.add(x.key);out.push({...x,rank:b.rank});}
 if(fs.existsSync(dir+'/raw'))for(const f of fs.readdirSync(dir+'/raw').filter(f=>/^(?:amazon|batch)-.*\.json$/.test(f)&&!f.includes('.parsed.')&&!f.includes('.error.'))){const r=read(dir+'/raw/'+f);for(const id of r.bookIds||[r.bookId])if(id)attempted.add(id);}
}
fs.writeFileSync(d+'cached-candidates.json',JSON.stringify(out,null,2));fs.writeFileSync(d+'cross-candidates.json',JSON.stringify(out,null,2));fs.writeFileSync(d+'new-candidates.json','[]');fs.writeFileSync(d+'attempted-amazon.json',JSON.stringify([...attempted]));console.log({cached:out.length,attempted:attempted.size});
