import fs from 'node:fs';
const a=JSON.parse(fs.readFileSync('data/sources_261020/hn/packet.json'));
for(const i of process.argv.slice(2).map(Number)){
 const b=a[i],p=b.prior;
 console.log('\nINDEX '+i+' '+b.title+' '+JSON.stringify({raw:p.raw,T11:p.T11,T12:p.T12,periodEnd:p.periodEnd,year:p.year,reason:p.reason,rationale:p.rationale,currentReview:p.currentReview,reviewAnchor:p.reviewAnchor,amazonCount:p.amazon?.count}));
 for(const name of [...new Set([p.currentReview,p.reviewAnchor?.split('#')[0]].filter(Boolean))]){
  const file='analysis/'+name;
  const lines=fs.readFileSync(file,'utf8').split('\n');
  let found=false;
  for(let j=0;j<lines.length;j++){
   if(lines[j].includes('id="'+(p.reviewAnchor?.split('#')[1]||'__none__')+'"')){let end=j+1;while(end<lines.length&&!lines[end].startsWith('<a id=')&&end<j+48)end++;console.log(lines.slice(j,end).join('\n'));found=true;}
  }
  if(!found){
   const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
   for(let j=0;j<lines.length;j++)if(norm(lines[j]).includes(norm(b.title.split(':')[0]))){if(lines[j].startsWith('### '))console.log(lines.slice(j,j+9).join('\n'));else console.log(lines[j]);}
  }
 }
}
