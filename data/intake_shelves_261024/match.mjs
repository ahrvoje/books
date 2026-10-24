import fs from 'node:fs';import {dir,read,write,clean} from './capture.mjs';
export const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/^(?:the|an|a)\s+/,'').replace(/&/g,'and').replace(/[^a-z0-9]/g,'');
const c=read(read('data/catalog.json').compiled),books=[...c.currentBooks,...c.exclusions];
const nn=new Map(books.map(b=>[b,norm(b.title)])),ss=new Map(books.map(b=>[b,norm(b.title.split(':')[0])])),ff=new Map(books.map(b=>[b,norm(b.title+': '+(b.subtitle||''))]));
let rows=read(dir+'/candidate-extraction.json');
rows=rows.filter(r=>r.title&&r.title.length>2);
for(const r of rows){r.title=r.title.trim().replace(/[,.;]\s*$/,'').replace(/,?\s+(?:Clarendon Press|Cambridge University Press)$/,'');if(r.source===254){let m=r.context.match(/^(.*?)\s*\((\d{4})\)/);if(m){r.author=m[1];r.year=+m[2];}}}
const episodes=read(dir+'/261-episodes.json');const unmatched=[];
for(const e of episodes){let m=e.description.match(/(?:[Ww]hat I learn(?:ed|d) (?:by from|from|by)(?: (?:re)?reading)?|[Tt]his week I read)\s+(.+?)\s*by\s+(.+?)(?:\.(?:\s|$)|\s*\(|\s+Made possible|\s+---|$)/);if(m)rows.push({source:261,title:m[1],author:m[2],context:e.description,url:'https://www.founderspodcast.com/episodes/'+e.slug});else unmatched.push(e);}
write(dir+'/261-unparsed.json',unmatched);
if(fs.existsSync(dir+'/manual.json'))rows.push(...read(dir+'/manual.json'));
if(fs.existsSync(dir+'/episode-books.json'))rows.push(...read(dir+'/episode-books.json'));
let seen=new Set();rows=rows.filter(r=>{let k=r.source+'|'+norm(r.title)+'|'+norm(r.author);if(seen.has(k))return false;seen.add(k);return true;});
for(const r of rows){let n=norm(r.title),short=norm(r.title.split(':')[0]),hits=books.filter(b=>nn.get(b)===n||ff.get(b)===n||(short.length>3&&ss.get(b)===short));if(!hits.length&&n.length>18)hits=books.filter(b=>nn.get(b).startsWith(n)||n.startsWith(nn.get(b))&&nn.get(b).length>18);
if(hits.length>1&&r.author){let an=norm(r.author),words=String(r.author).split(/[ ,;&]+/).map(norm).filter(w=>w.length>=3&&!['and','the','eds'].includes(w));let h=hits.filter(b=>norm(b.author).includes(an)||an.includes(norm(b.author))||words.some(w=>norm(b.author).includes(w)));if(h.length)hits=h;}
if(hits.length===1){let b=hits[0],an=norm(r.author),bn=norm(b.author);let words=String(r.author||'').split(/[ ,;&]+/).map(norm).filter(w=>w.length>=3&&!['and','the','eds'].includes(w));let ok=!an||bn.includes(an)||an.includes(bn)||words.some(w=>bn.includes(w));if(ok){r.id=b.id;r.status=b.status||'excluded';r.matchedTitle=b.title;r.matchedAuthor=b.author;}else r.candidates=hits.map(b=>({id:b.id,title:b.title,author:b.author}));}else if(hits.length)r.candidates=hits.map(b=>({id:b.id,title:b.title,author:b.author}));}
write(dir+'/matched.json',rows);let pending=[];for(const r of rows.filter(r=>!r.id)){let k=norm(r.title);let b=pending.find(p=>norm(p.title)===k);if(!b){b={index:pending.length,title:r.title,author:r.author,sources:[],context:r.context,candidates:r.candidates||[]};pending.push(b);}b.sources=[...new Set([...b.sources,r.source])];}write(dir+'/pending.json',pending);
write(dir+'/pending.tsv',pending.map(b=>`${b.index}\t${b.sources}\t${b.title}\t${b.author}\t${JSON.stringify(b.candidates)}`).join('\n'));
console.log({rows:rows.length,matched:rows.filter(r=>r.id).length,pending:pending.length,episodesUnparsed:unmatched.length});
