import fs from 'node:fs';
const dir='data/sources_261020/primary/';
const p=JSON.parse(fs.readFileSync(dir+'hn-packet.json','utf8'));
const mode=process.argv[2]||'prior',start=+(process.argv[3]||0),end=+(process.argv[4]||999);
if(mode==='prior'){
 const rows=p.filter(b=>b.prior).slice(start,end);
 for(const b of rows){
  const r=b.prior.reviewAnchor||b.prior.priorAssessment||b.prior.currentReview;
  const [file,anchor]=r.split('#'),filePath=(file.startsWith('analysis/')?'':'analysis/')+file;
  const t=fs.readFileSync(filePath,'utf8');let i=anchor?t.indexOf('id="'+anchor+'"'):t.indexOf(b.title);
  if(i<0)i=t.indexOf(b.title);
  let j=t.indexOf('\n<a id=',i+1);if(j<0)j=t.indexOf('\n## ',i+1);if(j<0)j=i+4000;
  console.log(JSON.stringify({id:b.id,title:b.title,ref:r,section:t.slice(Math.max(0,i),Math.min(j,i+4000))}));
 }
}else{
 const d=JSON.parse(fs.readFileSync(dir+mode+'.json','utf8'));
 d.books.slice(start,end).forEach((b,i)=>{
  const t=String(d.results[start+i].value),chunks=t.split(/-{20,}/);
  console.log(JSON.stringify({b,results:chunks.slice(0,8).map(c=>c.slice(0,2500))}));
 });
}
