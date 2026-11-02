import fs from 'node:fs';
const d='data/reuse100b_261102/',seen=new Set(),counts={};
for(const dir of ['data/openrouter100_261101','data/openrouter100_final_261101','data/cheap100_261101','data/cheapnext100_261101','data/cheap100_261102','data/cheapnext100_261102']){
 if(!fs.existsSync(dir+'/raw'))continue;
 for(const f of fs.readdirSync(dir+'/raw').filter(f=>/^amazon-.*\.json$/.test(f)&&!f.includes('.parsed.')&&!f.includes('.error.'))){const r=JSON.parse(fs.readFileSync(dir+'/raw/'+f));if(r.bookId){seen.add(r.bookId);counts[dir]=(counts[dir]||0)+1;}}
}
fs.writeFileSync(d+'attempted-amazon.json',JSON.stringify([...seen],null,2));
let s=fs.readFileSync(d+'short-worker.mjs','utf8');
s=s.replace("let queue=[];","const attempted=new Set(read(dir+'/attempted-amazon.json'));\nlet queue=[];");
s=s.replace(".slice(start,start+limit);",".filter(b=>mode!=='amazon'||!attempted.has(b.id)).slice(start,start+limit);");
s=s.replace("+'-short',bookId","+'-fresh',bookId");
fs.writeFileSync(d+'fresh-worker.mjs',s);
console.log({previouslyAttempted:seen.size,remainingFresh:JSON.parse(fs.readFileSync(d+'targets.json')).filter(b=>b.amazon===null&&!seen.has(b.id)).length,counts});
