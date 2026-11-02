import fs from 'node:fs';
const dir='data/openrouter100_261101',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),targets=read(dir+'/targets.json'),approved=read(dir+'/approved.json'),extra=[];
const norm=s=>String(s||'').normalize('NFKD').toLowerCase().replace(/[^a-z0-9 ]/g,' '),seen=new Set();
for(const f of fs.readdirSync(dir+'/raw').filter(f=>f.endsWith('.json')&&!/\.(parsed|request|error)\.json$/.test(f))){
 const raw=read(dir+'/raw/'+f),b=targets.find(t=>t.id===raw.bookId);if(!b||b.amazon!==null||approved.some(x=>x.id===b.id&&x.kind==='amazon'))continue;
 for(const a of raw.choices?.[0]?.message?.annotations?.map(x=>x.url_citation)||[]){
  if(!/amazon\./.test(a.url)||!a.content)continue;
  const asin=a.url.match(/\/(?:dp|product)\/([A-Z0-9]{10})/)?.[1];if(!asin)continue;
  const m=a.content.match(/\b([\d,]+) global ratings\b/i);if(!m)continue;
  const words=norm(b.title).split(/\s+/).filter(w=>w.length>3),identity=norm(a.title+' '+a.content.slice(0,1200));
  if(words.filter(w=>identity.includes(w)).length<Math.min(3,words.length)||!words.length)continue;
  const id=b.id+':'+asin;if(seen.has(id))continue;seen.add(id);
  const count=+m[1].replaceAll(',',''),key=f.replace('.json','')+':supplement-'+asin;
  extra.push({key,id:b.id,title:b.title,author:b.author,kind:'amazon',item:{count,asin,url:a.url,marketplace:new URL(a.url).hostname.replace('www.',''),evidence:m[0]},source:a,file:dir+'/raw/'+f,observed:m[0],identityExcerpt:a.content.slice(0,1200)});
 }
}
fs.writeFileSync(dir+'/supplement.json',JSON.stringify(extra,null,2)+'\n');
for(const [i,x]of extra.entries())console.log(JSON.stringify({i,key:x.key,title:x.title,author:x.author,count:x.item.count,sourceTitle:x.source.title,url:x.source.url,identity:x.identityExcerpt.slice(0,250)}));
