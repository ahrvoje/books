import fs from 'node:fs';
const dir='data/cheapnext100_261101',old='data/cheapnext100_261101/raw',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),targets=read(dir+'/targets.json');
const norm=s=>String(s||'').normalize('NFKD').toLowerCase().replace(/[^a-z0-9]/g,'');
const names=targets.map(b=>({...b,main:norm(b.title.split(':')[0].replace(/\([^)]*\)/g,'')),full:norm(b.title),authorWords:b.author.replace(/\([^)]*\)/g,'').split(/[ ;,]+/).map(norm).filter(w=>w.length>=5)}));
const out=[],seen=new Set();
for(const f of fs.readdirSync(old).filter(f=>f.endsWith('.json')&&!/\.(parsed|request|error)\.json$/.test(f))){const raw=read(old+'/'+f);
 for(const a of raw.choices?.[0]?.message?.annotations?.map(x=>x.url_citation)||[]){
  if(!a.content)continue;const label=norm(a.title),lead=norm(a.content.slice(0,500)),all=norm(a.content);
  for(const b of names){if(b.main.length<8||!b.authorWords.some(w=>all.includes(w))||!label.includes(b.main)&&!(lead.includes(b.full)&&b.full.length>15))continue;
   const add=(kind,count,evidence,ranges=null)=>{const key=b.id+':'+kind+':'+a.url;if(seen.has(key))return;seen.add(key);out.push({key,id:b.id,title:b.title,author:b.author,kind,count,evidence,ranges,url:a.url,sourceTitle:a.title,sourceText:a.content,file:old+'/'+f,retrieved:raw.retrieved,rank:b.rank});};
   if(b.amazon===null&&/https:\/\/[^/]*amazon\.[^/]+\/.*(?:dp|product)\/[A-Z0-9]{10}/.test(a.url)){
    const m=a.content.match(/\b([\d,]+) (?:global )?ratings\b/i);if(m)add('amazon',+m[1].replaceAll(',',''),m[0]);
   }
   if(b.reference.pages===null){
    const m=a.content.match(/(?:bibliographic(?:al)? references|bibliography)\s*\(?\s*(?:p\.|pages)\s*\[?(\d+)\]?\s*[-–]\s*\[?(\d+)\]?/i);
    if(m&&+m[2]>=+m[1])add('reference',+m[2]-+m[1]+1,m[0],[{start:+m[1],end:+m[2],label:'Bibliographical references',evidence:m[0]}]);
   }
   if(!b.edition&&!/ebook|kindle/i.test(a.title)){
    const m=a.content.match(/(?:Print length[^\d]{0,20}|Number of pages[^\d]{0,20}|Page count[^\d]{0,20})(\d[\d,]*)\s*(?:pages)?/i)||a.content.match(/(\d[\d,]*) pages, (?:Paperback|Hardcover)/i);
    if(m)add('pages',+m[1].replaceAll(',',''),m[0]);
   }
  }
 }
}
out.sort((a,b)=>a.rank-b.rank||a.kind.localeCompare(b.kind));fs.writeFileSync(dir+'/cross-candidates.json',JSON.stringify(out,null,2)+'\n');
console.log({candidates:out.length,uniqueFields:new Set(out.map(x=>x.id+':'+x.kind)).size,byKind:Object.fromEntries(['amazon','reference','pages'].map(k=>[k,new Set(out.filter(x=>x.kind===k).map(x=>x.id)).size]))});
const start=+(process.argv[2]||0),end=+(process.argv[3]||0);
for(const [i,x]of out.entries())if(i>=start&&i<end)console.log(JSON.stringify({i,id:x.id,title:x.title,author:x.author,kind:x.kind,count:x.count,evidence:x.evidence,sourceTitle:x.sourceTitle,url:x.url,lead:x.sourceText.slice(0,200)}));
