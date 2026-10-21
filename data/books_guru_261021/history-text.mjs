import fs from 'node:fs';
const dir='data/books_guru_261021/';
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim().replace(/^(the|a|an) /,'');
const inv=JSON.parse(fs.readFileSync(dir+'inventory.json','utf8'));
const books=inv.books.filter(b=>b.match.status!=='previously_covered');
const targets=books.map(b=>({id:b.id,title:b.title,author:b.author,key:norm(b.title),hits:[]}));
const files=fs.readdirSync('analysis').filter(f=>f.endsWith('.md'));
for(const f of files){const lines=fs.readFileSync('analysis/'+f,'utf8').split(/\r?\n/);for(let i=0;i<lines.length;i++){const line=lines[i];if(line.length<5)continue;const n=' '+norm(line)+' ';for(const t of targets){if(t.hits.length>=12)continue;if(n.includes(' '+t.key+' ')){const authorWords=norm(t.author).split(' '),sameAuthor=authorWords.some(w=>w.length>3&&n.includes(' '+w+' '));if(t.key.length<9&&!sameAuthor&&!line.includes('**'+t.title)&&!line.includes('['+t.title+']'))continue;t.hits.push({file:'analysis/'+f,line:i+1,text:line.slice(0,1400),sameAuthor});}}}}
fs.writeFileSync(dir+'history-text-candidates.json',JSON.stringify(targets.filter(t=>t.hits.length),null,2)+'\n');
console.log(JSON.stringify(targets.filter(t=>t.hits.length).map(t=>({id:t.id,title:t.title,author:t.author,hits:t.hits.length,first:t.hits[0]})),null,2));
