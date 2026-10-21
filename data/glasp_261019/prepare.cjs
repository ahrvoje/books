const fs=require('fs'),assert=require('assert/strict'),crypto=require('crypto');
const dir='data/glasp_261019/';
const cats=['biographies-memoirs','business','technology','strategy','science','politics','economics','philosophy','history','investing','math','design','war'];
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]/g,'').replace(/^the/,'');
const fix=s=>/[ÃÂ]/.test(s)?Buffer.from(s,'latin1').toString('utf8'):s;
let records=[],sources=[];
for(const [i,cat] of cats.entries()){
 const text=fs.readFileSync(dir+cat+'.txt','utf8'),part=text.split('## Books in ')[1]?.split('### Apps & Extensions')[0]; assert(part,cat);
 const count=+part.match(/\((\d+)\)/)[1];
 const entries=[...part.matchAll(/\[!\[Image \d+: (.*?) by (.*?)\]\((.*?)\) ([^\n]*?)\]\((https:\/\/glasp.co\/books\/p\/[^)]+)\)/g)].map(m=>({title:fix(m[1]),author:fix(m[2]),imageUrl:m[3],sourceLabel:fix(m[4]),url:m[5],asin:m[3].match(/%2F([A-Z0-9]{10})\.webp/)?.[1]||null,source:114+i,category:cat}));
 assert.equal(entries.length,count,cat);records.push(...entries); sources.push({number:114+i,category:cat,url:'https://glasp.co/books/category/'+cat,count,sha256:crypto.createHash('sha256').update(text).digest('hex')});
}
const priorFiles=['data/single_scores_261018.json','data/discovery90_261018.json','data/research92_261018.json','data/tactical92_261018.json'];
let prior=[];
for(const f of priorFiles){let d=JSON.parse(fs.readFileSync(f));for(let b of d.books){b={...b,priorFile:f,priorReport:d.review};let ix=prior.findIndex(p=>norm(p.title)===norm(b.title)&&norm(p.author)===norm(b.author));if(ix<0)prior.push(b);else prior[ix]=b;}}
const exclusions=fs.readFileSync('EXCLUDED_BOOKS.md','utf8').split('\n').filter(l=>l.startsWith('- ')).map(l=>{let [title,author]=l.slice(2).split(' — ');return {title,author:author||'',status:'excluded',line:l}});
const unique=new Map();for(let r of records){const key=norm(r.title)+'|'+norm(r.author);let b=unique.get(key);if(b){b.appearances.push(r);continue}b={id:'g'+String(unique.size+1).padStart(4,'0'),title:r.title,author:r.author,appearances:[r]};unique.set(key,b);}
let books=[...unique.values()];
for(let b of books){
 const title=norm(b.title),author=norm(b.author);
 const candidates=[...prior,...exclusions].filter(p=>{const t=norm(p.title),a=norm(p.author);return (title===t||title.length>12&&t.startsWith(title)||t.length>12&&title.startsWith(t))&&(!a||author===a||a.includes(author)||author.includes(a)||a.slice(-6)===author.slice(-6));});
 b.priorCandidates=candidates.map(p=>({title:p.title,author:p.author,id:p.id,status:p.status,priorFile:p.priorFile,priorReport:p.priorReport,line:p.line}));
}
const config={date:'2026-10-19',timeZone:'Europe/Warsaw',sources,records,books};fs.writeFileSync(dir+'inventory.json',JSON.stringify(config,null,2)+'\n');fs.writeFileSync(dir+'prior.json',JSON.stringify(prior,null,2)+'\n');
const baselineFile=dir+'baseline.json';if(!fs.existsSync(baselineFile)){const files=['SOURCES.md','RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md',...fs.readdirSync('.').filter(f=>/^analysis_.*\.md$/.test(f))];fs.writeFileSync(baselineFile,JSON.stringify(Object.fromEntries(files.map(f=>[f,{sha256:crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex'),text:fs.readFileSync(f,'utf8')}]))));}
console.log(JSON.stringify({sources,records:records.length,books:books.length,priorMatches:books.filter(b=>b.priorCandidates.length===1).length,ambiguous:books.filter(b=>b.priorCandidates.length>1).map(b=>[b.id,b.title,b.priorCandidates.map(p=>p.title)]),new:books.filter(b=>!b.priorCandidates.length).length},null,2));
