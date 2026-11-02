import fs from 'node:fs';
const d='data/value250_261102/',read=p=>JSON.parse(fs.readFileSync(p)),targets=read(d+'targets.json'),norm=s=>s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g,'');
const result=[];
for(let i=0;i<20;i++)for(const mode of ['fresh','compact']){const f=d+'raw/amazon-'+String(i).padStart(4,'0')+'-parallel-fast-'+mode+'.json',r=read(f),b=targets.find(b=>b.id===r.bookId);const a=r.choices[0].message.annotations.map(x=>x.url_citation).filter(x=>/amazon\.com.*\/dp\//.test(x.url)&&norm(x.title).includes(norm(b.title.split(':')[0]))&&/\b[\d,]+ (?:global )?ratings\b/.test(x.content));result.push({i,mode,id:b.id,title:b.title,cost:r.usage.cost,matches:a.map(x=>({title:x.title,count:x.content.match(/\b[\d,]+ (?:global )?ratings\b/)[0],url:x.url}))});}
fs.writeFileSync(d+'pilot.json',JSON.stringify(result,null,2));console.log(result);
