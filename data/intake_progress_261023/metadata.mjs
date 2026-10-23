import fs from 'node:fs';
const d='data/intake_progress_261023';fs.mkdirSync(d+'/metadata',{recursive:true});
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'').replace(/^the/,'');
const rows=JSON.parse(fs.readFileSync(d+'/matched.json'));let pending=[];
for(const r of rows.filter(r=>!r.id)){let key=norm(r.title);let b=pending.find(b=>b.key===key);if(!b){b={...r,key,index:pending.length,sources:[]};pending.push(b);}b.sources.push(r.source);if(!b.author&&r.author)b.author=r.author;}
fs.writeFileSync(d+'/pending.json',JSON.stringify(pending,null,2));
let next=0;
const cache=fs.existsSync(d+'/metadata-cache.json')?JSON.parse(fs.readFileSync(d+'/metadata-cache.json')):[];
for(const b of pending){const f=d+'/metadata/'+b.index+'.json';if(fs.existsSync(f)&&JSON.parse(fs.readFileSync(f)).title!==b.title)fs.unlinkSync(f);const old=cache.find(x=>x.title===b.title);if(old&&!fs.existsSync(f))fs.writeFileSync(f,JSON.stringify({...old,index:b.index},null,2));}
async function worker(){while(next<pending.length){let b=pending[next++],file=d+'/metadata/'+b.index+'.json';if(fs.existsSync(file))continue;let isbn=b.url?.match(/\/dp\/([0-9X]{10})/)?.[1];let url='https://openlibrary.org/search.json?'+(isbn?'isbn='+isbn:'title='+encodeURIComponent(b.title)+(b.author?'&author='+encodeURIComponent(b.author.split(';')[0].replace(/, editor$/,'')):''))+'&limit=3&fields=key,title,author_name,first_publish_year,isbn,language';let out={index:b.index,title:b.title,url,retrievedAt:new Date().toISOString()};try{let r=await fetch(url,{signal:AbortSignal.timeout(20000)});out.status=r.status;out.search=await r.json();if(out.search.docs?.[0]?.key){let wr=await fetch('https://openlibrary.org'+out.search.docs[0].key+'.json',{signal:AbortSignal.timeout(20000)});if(wr.ok)out.work=await wr.json();}}catch(e){out.error=String(e)}fs.writeFileSync(file,JSON.stringify(out,null,2));if(b.index%25===0)console.log(b.index,b.title);}}
await Promise.all([worker(),worker(),worker()]);
