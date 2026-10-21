import fs from 'node:fs';
const dir='data/sources_261020/primary/';
const packet=JSON.parse(fs.readFileSync(dir+'math-packet.json','utf8'));
const mode=process.argv[2];
if(mode==='prior'){
 for(const i of process.argv.slice(3).map(Number)){
  const b=packet.find(b=>b.packetIndex===i),p=b.prior;console.log(JSON.stringify({i,title:b.title,prior:p}));
  if(!p)continue;
  for(const ref of [...new Set([p.reviewAnchor,p.currentReview])].filter(Boolean)){
   const [f,id]=ref.split('#'),t=fs.readFileSync('analysis/'+f,'utf8');
   let k=id?t.indexOf(`<a id="${id}"`):t.indexOf('### '+b.title);
   if(k<0)k=t.indexOf(b.title,t.indexOf(b.title)+b.title.length);
   const end=t.indexOf('<a id=',k+1);
   console.log(ref,t.slice(k,end>k?Math.min(end,k+6500):k+6500));
  }
 }
}else if(mode==='mentions'){
 for(const i of process.argv.slice(3).map(Number)){const b=packet.find(b=>b.packetIndex===i);console.log(JSON.stringify({i,title:b.title,author:b.author,appearances:b.appearances},null,2));}
}else{
 const wanted=process.argv.slice(3).map(Number);
 for(const n of ['01','02','03','04','05','06','07','08','09','10']){
  const f=dir+'math-research-'+n+'.json';if(!fs.existsSync(f))continue;
  const d=JSON.parse(fs.readFileSync(f,'utf8'));
  for(let j=0;j<d.books.length;j++){const b=d.books[j];if(!wanted.includes(b.index))continue;
   const v=String(d.results[j].value||'');const pieces=v.split(/-{10,}/).map(s=>s.trim());
   console.log(JSON.stringify({i:b.index,title:b.title,results:pieces.filter(s=>!/^.{0,150}https:\/\/(?:[a-z]+\.)?wikipedia/.test(s)).slice(0,mode==='full'?4:2).map(s=>s.slice(0,mode==='full'?9000:1300))}));
  }
 }
}
