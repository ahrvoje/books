import fs from 'node:fs';
const dir='data/batch250_261102',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),targets=read(dir+'/targets.json'),out=[],seen=new Set();
for(const f of fs.readdirSync(dir+'/raw').filter(f=>/^(amazon|reference|pages)-\d+(?:-[a-z-]+)?\.json$/.test(f))){const raw=read(dir+'/raw/'+f),b=targets.find(b=>b.id===raw.bookId);if(!b)continue;
 for(const a of raw.choices?.[0]?.message?.annotations?.map(x=>x.url_citation)||[]){if(!a.content)continue;
  const add=(kind,count,evidence,ranges=null)=>{const key=b.id+':'+kind+':'+a.url;if(seen.has(key))return;seen.add(key);out.push({key,id:b.id,title:b.title,author:b.author,kind,count,evidence,ranges,url:a.url,sourceTitle:a.title,sourceText:a.content,file:dir+'/raw/'+f,retrieved:raw.retrieved,rank:b.rank});};
  if(b.amazon===null&&/https:\/\/[^/]*amazon\.[^/]+\/.*(?:dp|product)\/[A-Z0-9]{10}/.test(a.url)){const m=a.content.match(/\b([\d,]+) (?:global )?ratings\b/i);if(m)add('amazon',+m[1].replaceAll(',',''),m[0]);}
  if(!b.edition&&!/ebook|kindle/i.test(a.title)){const m=a.content.match(/(?:Print length[^\d]{0,20}|Number of pages[^\d]{0,20}|Page count[^\d]{0,20})(\d[\d,]*)\s*(?:pages)?/i)||a.content.match(/(\d[\d,]*) pages, (?:Paperback|Hardcover)/i);if(m)add('pages',+m[1].replaceAll(',',''),m[0]);}
  if(b.reference.pages===null){const m=a.content.match(/(?:bibliographic(?:al)? references|bibliography)\s*\(?\s*(?:p\.|pages)\s*\[?(\d+)\]?\s*[-–]\s*\[?(\d+)\]?/i);if(m&&+m[2]>=+m[1])add('reference',+m[2]-+m[1]+1,m[0],[{start:+m[1],end:+m[2],label:'Bibliographical references',evidence:m[0]}]);}
 }
}
fs.writeFileSync(dir+'/new-candidates.json',JSON.stringify(out,null,2)+'\n');console.log({candidates:out.length,unique:new Set(out.map(x=>x.id+':'+x.kind)).size,byKind:Object.fromEntries(['amazon','reference'].map(k=>[k,new Set(out.filter(x=>x.kind===k).map(x=>x.id)).size]))});
