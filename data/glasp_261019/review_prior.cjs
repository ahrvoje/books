const fs=require('fs'),p=require('./prior.json'),i=require('./inventory.json');
const cat=process.argv[2];
let matches=[];
for(const b of i.books.filter(b=>b.appearances.some(a=>a.category===cat))){
 const candidates=b.priorCandidates.filter(c=>c.id).map(c=>p.find(x=>x.id===c.id));
 for(const x of p){if(x.title.toLowerCase()===b.title.toLowerCase()&&!candidates.includes(x))candidates.push(x)}
 for(const x of candidates.filter(Boolean)){
  console.log(JSON.stringify({glasp:b.id,priorId:x.id,title:x.title,raw:x.raw||x.linearPoints,year:x.originalYear||x.production?.year,deductions:x.deductions,period:x.periodEnd??x.assessment?.periodEnd,confidence:x.scoreConfidence||x.confidence,sources:x.sources}));
  const ref=x.priorAssessment||x.priorReport;
  if(ref){const [file,anchor]=ref.split('#');if(fs.existsSync(file)){
   const text=fs.readFileSync(file,'utf8');let pos=anchor?text.indexOf('id="'+anchor+'"'):-1;
   if(pos<0)pos=text.indexOf(x.title);const next=text.indexOf('<a id=',pos+1);console.log(text.slice(Math.max(0,pos-10),next>pos?next:pos+5000));
  }}
 }
}
