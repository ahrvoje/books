import fs from 'node:fs';
const d=JSON.parse(fs.readFileSync('data/veto_review_261021/a-input.json'));
let out='';
for(const b of d){
 out+='\n### '+b.id+' '+b.title+'\nPrior: '+b.priorRationale+'\n';
 const refs=[...(b.priorReviews||[]),...(b.analysisFiles||[])];
 let done=false;
 for(const r of refs){
  const [f,anchor]=r.split('#');
  if(!f||!fs.existsSync(f)||/deductions|pubcap|quadratic|rescore|veto5/.test(f))continue;
  const t=fs.readFileSync(f,'utf8');
  let pos=anchor?t.indexOf('id="'+anchor+'"'):-1;
  if(pos<0)pos=t.indexOf('### '+b.title);
  if(pos<0)pos=t.indexOf('## '+b.title);
  if(pos<0)pos=t.indexOf(b.id);
  if(pos<0)continue;
  const rest=t.slice(pos),next=rest.indexOf('<a id=',10),table=rest.indexOf('| Criterion');
  const end=Math.min(...[next,table,7000].filter(x=>x>0));
  out+='Read '+r+'\n'+rest.slice(0,end)+'\n';done=true;break;
 }
 if(!done)out+='No exact section; inspect retained prior record and specific evidence.\n';
}
fs.writeFileSync('data/veto_review_261021/a-prior-excerpts.md',out);
console.log(out.length);
