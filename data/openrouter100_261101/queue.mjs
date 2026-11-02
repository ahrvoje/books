import fs from 'node:fs';
const dir='data/openrouter100_261101',out=[];
const targets=JSON.parse(fs.readFileSync(dir+'/targets.json'));
const norm=s=>String(s||'').normalize('NFKD').toLowerCase().replace(/[^a-z0-9]/g,'');
for(const file of fs.readdirSync(dir+'/raw').filter(f=>f.endsWith('.parsed.json'))){
 const p=JSON.parse(fs.readFileSync(dir+'/raw/'+file)),raw=JSON.parse(fs.readFileSync(dir+'/raw/'+file.replace('.parsed',''))),t=targets.find(t=>t.id===raw.bookId);if(!t)continue;
 const anns=raw.choices[0].message.annotations?.map(a=>a.url_citation)||[];
 for(const kind of ['amazon','pages','reference']){
  const item=p[kind];if(!Number.isInteger(item?.count)||item.count<1)continue;
  if(kind==='amazon'&&t.amazon!==null||kind==='pages'&&t.edition||kind==='reference'&&t.reference.pages!==null)continue;
  const asin=u=>u?.match(/\/(?:dp|product)\/([A-Z0-9]{10})/)?.[1];
  const a=anns.find(a=>a.url===item.url)|| (kind==='amazon'?anns.find(a=>asin(a.url)&&asin(a.url)===asin(item.url)):null)|| (kind==='reference'&&typeof item.evidence==='string'?anns.find(a=>a.content?.includes(item.evidence)):null);
  if(!a?.content)continue;
  const text=a.content;
  const count=String(item.count),numberPattern=count.length>3?count.slice(0,-3)+'[ ,.]?'+count.slice(-3):count;
  let observed=kind==='amazon'?text.match(new RegExp('(?:'+numberPattern+')\\s+(?:global\\s+)?ratings\\b','i'))?.[0]:kind==='pages'?text.match(new RegExp('.{0,50}'+numberPattern+'.{0,60}','i'))?.[0]:null;
  if(kind==='reference'){
   if(!item.ranges?.length||item.ranges.some(r=>!Number.isInteger(r.start)||!Number.isInteger(r.end)||r.end<r.start))continue;
   const pages=new Set(item.ranges.flatMap(r=>Array.from({length:r.end-r.start+1},(_,i)=>r.start+i)));if(pages.size!==item.count)continue;
   observed=item.ranges.map(r=>text.match(new RegExp('.{0,60}'+r.start+'.{0,100}'))?.[0]).filter(Boolean).join(' / ');
   if(!observed)continue;
  }
  if(!observed)continue;
  out.push({key:file.replace('.parsed.json','')+':'+kind,id:t.id,title:t.title,author:t.author,kind,item,source:{...a},file:dir+'/raw/'+file.replace('.parsed',''),observed,identityExcerpt:text.slice(0,650)});
 }
}
fs.writeFileSync(dir+'/queue.json',JSON.stringify(out,null,2)+'\n');
const kind=process.argv[2],lo=+(process.argv[3]||0),hi=+(process.argv[4]||9999);
const rows=out.filter(x=>!kind||x.kind===kind);
console.log({candidates:out.length,amazon:out.filter(x=>x.kind==='amazon').length,pages:out.filter(x=>x.kind==='pages').length,reference:out.filter(x=>x.kind==='reference').length});
for(const [i,x]of rows.entries())if(i>=lo&&i<hi)console.log(JSON.stringify({i,key:x.key,id:x.id,title:x.title,author:x.author,count:x.item.count,edition:x.item.editionId,year:x.item.editionYear,format:x.item.format,language:x.item.language,sourceTitle:x.source.title,url:x.source.url,observed:x.observed,evidence:x.item.evidence,ranges:x.item.ranges,identity:x.identityExcerpt.slice(0,350)}));
