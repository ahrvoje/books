import fs from 'node:fs';
const dir='data/intake_261023',inputs=JSON.parse(fs.readFileSync(dir+'/inputs.json'));
const clean=s=>(s||'').replace(/<[^>]*>/g,' ').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
const audit=[];
for(const s of inputs){if(s.kind==='reddit')continue;let rows=[];
if(s.kind==='hn'){const root=JSON.parse(fs.readFileSync(`${dir}/raw/${s.source}-hn.json`));const walk=n=>{rows.push({id:n.id,text:clean(n.text),title:n.title});for(const c of n.children||[])walk(c)};walk(root);const meta=JSON.parse(fs.readFileSync(`${dir}/raw/${s.source}-firebase.json`));audit.push({source:s.source,comments:rows.length-1,readable:rows.slice(1).filter(x=>x.text).length,expected:meta.descendants});}
else {let answers=JSON.parse(fs.readFileSync(`${dir}/raw/${s.source}-answers.json`));let items=[...answers.items];let page=1;while(answers.has_more){page++;answers=await fetch(`https://api.stackexchange.com/2.3/questions/${s.id}/answers?site=${s.site}&filter=withbody&pagesize=100&page=${page}`).then(r=>r.json());fs.writeFileSync(`${dir}/raw/${s.source}-answers-${page}.json`,JSON.stringify(answers));items.push(...answers.items);}
const question=JSON.parse(fs.readFileSync(`${dir}/raw/${s.source}-question.json`));const comments=JSON.parse(fs.readFileSync(`${dir}/raw/${s.source}-comments.json`)).items;
let ac=[];for(let i=0;i<items.length;i+=50){let p=1,j;do{j=await fetch(`https://api.stackexchange.com/2.3/answers/${items.slice(i,i+50).map(a=>a.answer_id).join(';')}/comments?site=${s.site}&filter=withbody&pagesize=100&page=${p}`).then(r=>r.json());fs.writeFileSync(`${dir}/raw/${s.source}-answercomments-${i}-${p}.json`,JSON.stringify(j));ac.push(...(j.items||[]));p++;}while(j.has_more)}
rows=[...question.items,...items,...comments,...ac].map(a=>({id:a.answer_id||a.comment_id||a.question_id,text:clean(a.body),title:a.title}));audit.push({source:s.source,answers:items.length,expected:question.items[0]?.answer_count,questionComments:comments.length,answerComments:ac.length});}
fs.writeFileSync(`${dir}/${s.source}.txt`,rows.map(x=>`${x.id}: ${x.title||''}\n${x.text}`).join('\n\n'));console.log(audit.at(-1));}
fs.writeFileSync(dir+'/coverage.json',JSON.stringify(audit,null,2));
