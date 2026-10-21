import fs from 'node:fs';
const jobs=[
 {prefix:'math',index:114,host:'scottaaronson.com'},
 {prefix:'math',index:218,host:'thespacereview.com'},
 {prefix:'tail',index:768,host:'newyorker.com'},
 {prefix:'tail',index:764,host:'newyorker.com'},
 {prefix:'tail',index:594,host:'nature.com'},
 {prefix:'tail',index:594,host:'frontiersin.org'}
];
for(const job of jobs){
 const refs=[];
 for(const file of fs.readdirSync('data/sources_261020/primary').filter(f=>new RegExp('^'+job.prefix+'-research-\\d+\\.json$').test(f))){
  const d=JSON.parse(fs.readFileSync('data/sources_261020/primary/'+file,'utf8'));
  d.books.forEach((b,j)=>{
   if(b.index!==job.index)return;
   for(const text of String(d.results[j].value).split(/-{10,}/)){
    const head=text.trim().split('\n')[0],url=head.match(/\((https?:\/\/[^\n]+)\)$/)?.[1];
    if(url?.includes(job.host)&&!text.includes('Failed to fetch'))refs.push(url);
   }
  });
 }
 console.log(JSON.stringify({...job,refs:[...new Set(refs)]}));
}
for(const file of ['math-research-08.json','math-research-09.json']){
 const d=JSON.parse(fs.readFileSync('data/sources_261020/primary/'+file,'utf8'));
 d.books.forEach((b,j)=>{if(b.index!==114)return;const s=String(d.results[j].value),pos=s.indexOf('scottaaronson');if(pos>=0)console.log(JSON.stringify({file,text:s.slice(Math.max(0,pos-400),pos+1000)}));});
}
