import fs from 'node:fs';
import {existing} from './identity.mjs';
const c=JSON.parse(fs.readFileSync('data/source_review_261021/compiled.json'));
const ids=[...new Set(Object.values(existing))];
const start=Number(process.argv[2]||0), count=Number(process.argv[3]||10);
for(const id of ids.slice(start,start+count)){
 const b=[...c.currentBooks,...c.exclusions].find(x=>x.id===id);
 const refs=[b.currentReview,b.reviewAnchor,b.analysis,...(b.densityAssessment?.refs||[])].filter(Boolean).filter(s=>s.startsWith('analysis'));
 console.log('\n'+id+' '+b.title+' '+JSON.stringify(b.raw)+' '+JSON.stringify(b.deductions));
 for(let file of [...new Set(refs.map(x=>x.split('#')[0]))]){
  if(!file.startsWith('analysis/'))file='analysis/'+file;
  if(!fs.existsSync(file)){console.log('MISSING '+file);continue;}
  const t=fs.readFileSync(file,'utf8');let at=t.indexOf('id="'+id+'"'); if(at<0)at=t.indexOf('id="d-'+id+'"');
  if(at<0){const part=t.split(/(?=^#{2,4} )/m).find(s=>s.split('\n')[0].toLowerCase().includes(b.title.toLowerCase()));at=part?t.indexOf(part):t.indexOf(b.title);}
  console.log(file+'\n'+t.slice(Math.max(0,at-30),Math.max(0,at-30)+1250));
 }
}
