const fs=require('fs'),path=require('path');
const root=__dirname,inv=require('./inventory.json'),compiled=require('./compiled.json');
const docs=fs.readdirSync(path.join(root,'catalog')).filter(f=>f.endsWith('.json')).flatMap(f=>JSON.parse(fs.readFileSync(path.join(root,'catalog',f))).data?.docs||[]);
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const words=s=>norm(s).split(' ').filter(w=>w.length>2&&!['the','and'].includes(w));
const matches=(wanted,got)=>{const ws=words(wanted),gs=words(got);return ws.length&&ws.filter(w=>gs.includes(w)).length/ws.length>=0.8;};
const byId=new Map(inv.books.map(b=>[b.id,b]));
const dir=path.join(root,'editions');fs.mkdirSync(dir,{recursive:true});
async function main(){let n=0;const out=fs.existsSync(path.join(root,'paperbacks.json'))?JSON.parse(fs.readFileSync(path.join(root,'paperbacks.json'))):[],seen=new Set(out.map(x=>x.id));
 for(const b of compiled.sourceBooks.filter(b=>b.raw&&!b.purchaseAsin&&!/Paperback/i.test(b.purchaseFormat))){
  const source=byId.get(b.sourceIds[0]);
  if(seen.has(source.id))continue;
  const candidates=docs.filter(d=>source.appearances.some(a=>d.isbn?.includes(a.asin))&&matches(source.title,d.title)&&words(source.author).some(w=>words((d.author_name||[]).join(' ')).includes(w)));
  if(candidates.length!==1){out.push({id:source.id,status:'unresolved work',candidateCount:candidates.length});continue;}
  const work=candidates[0],file=path.join(dir,work.key.split('/').pop()+'.json'),url='https://openlibrary.org'+work.key+'/editions.json?limit=1000';let packet;
  if(fs.existsSync(file))packet=JSON.parse(fs.readFileSync(file));
  else {try{const r=await fetch(url,{signal:AbortSignal.timeout(30000),headers:{'User-Agent':'BookSourceResearch/1.0'}});const text=await r.text();let data;try{data=JSON.parse(text)}catch{data={error:text.slice(0,200)}}packet={url,retrievedAt:new Date().toISOString(),status:r.status,data};fs.writeFileSync(file,JSON.stringify(packet,null,2));}catch(e){packet={url,error:e.message,data:{}};fs.writeFileSync(file,JSON.stringify(packet,null,2));}await new Promise(r=>setTimeout(r,1100));}
  const editions=(packet.data?.entries||[]).filter(e=>/paperback|softcover|mass market|softback/i.test(e.physical_format||'')&&e.languages?.some(l=>l.key==='/languages/eng')&&matches(source.title,e.title)&&(e.isbn_10?.length||e.isbn_13?.some(s=>s.startsWith('978'))));
  const e=editions.find(e=>e.isbn_10?.length)||editions[0];
  out.push({id:source.id,status:e?'matched paperback':'no verified English paperback',work:work.key,workTitle:work.title,workAuthor:work.author_name,url,retrievedAt:packet.retrievedAt,selected:e?{title:e.title,subtitle:e.subtitle,format:e.physical_format,isbn:e.isbn_10?.[0]||e.isbn_13.find(s=>s.startsWith('978')),publishDate:e.publish_date,publishers:e.publishers,language:'English',url:'https://openlibrary.org'+e.key}:null});
  n++;if(n%20===0)console.log(n,'edition groups');fs.writeFileSync(path.join(root,'paperbacks.json'),JSON.stringify(out,null,2));
 }
 fs.writeFileSync(path.join(root,'paperbacks.json'),JSON.stringify(out,null,2));console.log('finished',out.length,'checked',out.filter(x=>x.selected).length,'paperbacks');
}
main();
