import fs from 'node:fs';
const d='data/shelves_261025',read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const entries=read(d+'/nonbooks.json'),inputs=read(d+'/inputs.json'),stamp=read(d+'/stamp.json').stamp;
for(const b of entries){const path=`analysis/analysis_${inputs.find(s=>s.source===b.source).short}_${stamp}.md`,anchor=`nonbook-${b.index}`;if(fs.readFileSync(path,'utf8').includes(`id="${anchor}"`))continue;fs.appendFileSync(path,`\n<a id="${anchor}"></a>\n\n### Non-book: ${b.title} — ${b.author}\n\n${b.reason} Confidence: ${b.confidence}. [Identity evidence](${b.evidence}).\n`);}
const closed=new Set(entries.map(b=>b.index));const pending=read(d+'/pending.json').filter(b=>!closed.has(b.index));fs.writeFileSync(d+'/pending.json',JSON.stringify(pending,null,2)+'\n');console.log({nonbooks:entries.length,pending:pending.length});
