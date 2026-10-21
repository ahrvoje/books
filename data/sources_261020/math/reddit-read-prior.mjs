import fs from 'node:fs';
const dir='data/sources_261020/math/';
const packet=JSON.parse(fs.readFileSync(dir+'reddit-packet.json','utf8'));
const indices=process.argv.slice(2).map(Number);
let report='';
for(const index of indices){
 const item=packet[index];
 report+=`\nBOOK ${index} ${item.id}: ${item.title}\n`;
 if(!item.prior){report+='No prior scored record supplied.\n';continue;}
 const refs=[item.prior.reviewAnchor,item.prior.priorAssessment,item.prior.priorReview||item.prior.priorReport||item.prior.currentReview].filter(Boolean);
 for(const ref of [...new Set(refs)]){
  const [name,anchor]=ref.replace(/^analysis\//,'').split('#');
  const path='analysis/'+name;
  if(!fs.existsSync(path)){report+=`MISSING ${path}\n`;continue;}
  const text=fs.readFileSync(path,'utf8');
  report+=`\nREF ${ref}\n`;
  if(anchor){
   const at=text.indexOf(`<a id="${anchor.toLowerCase()}">`);
   if(at<0){report+='ANCHOR NOT FOUND\n';continue;}
   const tail=text.slice(at);
   const end=tail.indexOf('<a id=',7);
   report+=tail.slice(0,end<0?tail.length:end)+'\n';
  } else {
   const title=item.title.toLowerCase().replace(/[’']/g,'');
   const lines=text.split('\n');
   const matches=lines.filter(x=>x.toLowerCase().replace(/[’']/g,'').includes(title));
   report+=matches.length?matches.join('\n')+'\n':'NO EXACT TITLE MATCH; inspect file separately.\n';
  }
 }
 report+=`\nCURRENT ${JSON.stringify({raw:item.prior.raw,T11:item.prior.T11,T12:item.prior.T12,periodEnd:item.prior.periodEnd,year:item.prior.year,amazon:item.prior.amazon?.count})}\n`;
}
fs.writeFileSync(dir+'reddit-prior-'+indices.join('-')+'.txt',report);
console.log(report);
