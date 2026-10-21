const fs=require('fs'),p=require('./prior.json');
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
for(const name of ['RECOMMENDED_BOOKS.md','VETOED_BOOKS.md']){
 const rows=fs.readFileSync(name,'utf8').split('\n').filter(l=>/^\| 20\d\d-/.test(l));
 const missing=[],multi=[];
 for(const l of rows){const c=l.split('|').map(x=>x.trim()),t=c[4].match(/^\[([^\]]+)\]/)?.[1];if(!t)continue;
  const m=p.filter(x=>norm(x.title)===norm(t)&&norm(x.author)===norm(c[3]));
  if(!m.length)missing.push([t,c[3]]);if(m.length>1)multi.push([t,m.map(x=>x.id)]);
 }
 console.log(JSON.stringify({name,rows:rows.length,missing,multi}));
}
console.log(JSON.stringify({prior:p.length,latest:p.filter(x=>!x.production).slice(0,2)},null,2));
