import fs from 'node:fs';
const d='data/batch250_261102',read=p=>JSON.parse(fs.readFileSync(d+'/'+p+'.json')),selected=read('selected'),seen=new Set(fs.existsSync(d+'/screened-keys.json')?read('screened-keys'):[]),out=[];
for(const x of [...read('new-candidates'),...(fs.existsSync(d+'/cross-candidates.json')?read('cross-candidates'):[])]){if(seen.has(x.key)||selected.some(y=>y.id===x.id&&y.kind===x.kind))continue;seen.add(x.key);out.push(x);}
fs.writeFileSync(d+'/pending.json',JSON.stringify(out,null,2));
const norm=x=>x.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g,'');
for(const [i,x]of out.entries())if(x.kind!=='amazon'||norm(x.sourceTitle+' '+x.sourceText.slice(0,150)).includes(norm(x.title.split(':')[0].replace(/\([^)]*\)/g,''))))console.log(JSON.stringify({i,title:x.title,author:x.author,kind:x.kind,count:x.count,evidence:x.evidence,sourceTitle:x.sourceTitle,url:x.url}));
