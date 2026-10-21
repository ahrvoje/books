import fs from 'node:fs';
const all=[];
for(const folder of ['primary','hn','math','reddit'])for(const file of fs.readdirSync('data/sources_261020/'+folder).filter(f=>f.endsWith('assessments.json')))all.push(...JSON.parse(fs.readFileSync('data/sources_261020/'+folder+'/'+file,'utf8')));
for(const title of ['Energy and Civilization','Ultralearning','Atomic Habits','The Energy World Is Flat','The Extension of Man']){
 console.log(JSON.stringify({title,decisions:all.filter(b=>b.title?.toLowerCase().includes(title.toLowerCase())).map(({id,title,status,reason,year,yearNote})=>({id,title,status,reason,year,yearNote}))}));
}
