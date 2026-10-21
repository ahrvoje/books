import fs from 'node:fs';
const keys=process.argv.slice(2);
for(const folder of ['primary','hn','math','reddit']){
 for(const file of fs.readdirSync('data/sources_261020/'+folder).filter(f=>f.endsWith('assessments.json'))){
  const data=JSON.parse(fs.readFileSync('data/sources_261020/'+folder+'/'+file,'utf8'));
  for(const a of data.filter(a=>keys.some(k=>a.id===k||a.title?.toLowerCase().includes(k.toLowerCase())))){
   console.log(JSON.stringify({file:folder+'/'+file,id:a.id,title:a.title,raw:a.raw,notes:a.notes,year:a.year,reason:a.reason,connections:a.enrichment?.connections}).slice(0,4500));
  }
 }
}
