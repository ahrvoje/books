import fs from 'node:fs';import crypto from 'node:crypto';import {dir,read,write,clean} from './capture.mjs';
const rows=read(dir+'/rows.json').filter(r=>r.source!==261),fresh=read(dir+'/triaged.json'),base=read('data/top500_261024/compiled.json'),old=[...base.currentBooks,...base.exclusions],episodes=read(dir+'/261-episodes.json');
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\b(the|a|an)\b/g,'').replace(/&/g,'and').replace(/[^a-z0-9]/g,'');
const authorOK=(a,b)=>!a||!b||norm(a).includes(norm(b))||norm(b).includes(norm(a))||a.split(/[ ,;]+/).filter(w=>w.length>3).some(w=>norm(b).includes(norm(w)));
const out=[],unresolved=[];
for(const e of episodes){const path=dir+'/episodes/'+e.slug+'.html';if(!fs.existsSync(path))continue;const s=fs.readFileSync(path,'utf8'),stream=[...s.matchAll(/self.__next_f.push\((.*?)\)<\/script>/gs)].map(m=>{try{return JSON.parse(m[1])[1]||''}catch{return ''}}).join(''),m=stream.match(/[0-9a-f]+:T[0-9a-f]+,(?=<(?:p|div|h))/);
 let full='';if(m)full=stream.slice(m.index+m[0].length);else{const inline=stream.match(/"html":("(?:\\.|[^"\\])*")/);if(inline)try{full=JSON.parse(inline[1]);}catch{}}
 if(!full||full.startsWith('$')){unresolved.push(e);continue;}
 const end=full.indexOf('<hr'),h=full.slice(0,end<0?6000:end);let count=0;
 for(const a of h.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)){
  if(!/amzn\.to|amazon\.|books2read/.test(a[1]))continue;let title=clean(a[2]).trim();
  if(title.length<4||/^(here|read the letters|https?:|get |buy |order |listen|this |the book$)/i.test(title))continue;
  title=title.replace(/^Ed Thorp's excellent autobiography /,'').replace(/ written by Walter Isaacson$/,'');
  let tail=h.slice(a.index+a[0].length),author=clean(tail.split(/<\/p>|<a\b|<br|<hr/)[0]).match(/^\s*(?:by|written by)\s+(.+)/i)?.[1]||'';
  author=author.replace(/[.\s]+$/,'').replace(/\s+and\s*$/,'').replace(/\s+(?:for the|for a|again|and reading)\b.*$/,'');if(author.length>100)author='';
  out.push({source:261,title,author,url:a[1],context:clean(h),episode:'https://www.founderspodcast.com/episodes/'+e.slug});count++;
 }if(!count){const plain=clean(h).split(/Made possible|Episode sponsors| ---- /)[0],p=plain.match(/What I learned from reading (.+) by (.+?)\.\s*$/i);if(p&&!/transcripts|essays|archive|reshape|do great work|house of arnault/i.test(p[1]))out.push({source:261,title:p[1],author:p[2],url:'',context:plain,episode:'https://www.founderspodcast.com/episodes/'+e.slug});else unresolved.push({...e,intro:plain});}
}
const seen=new Set();for(const r of out){let key=norm(r.title)+'|'+norm(r.author);if(seen.has(key))continue;seen.add(key);
 let short=norm(r.title.split(':')[0]),hits=old.filter(b=>(norm(b.title)===norm(r.title)||norm(b.title+': '+(b.subtitle||''))===norm(r.title)||norm(b.title.split(':')[0])===short)&&authorOK(r.author,b.author));
 if(hits.length===1&&(!r.author&&short.length<15?norm(r.context).includes(norm(hits[0].author.split(/[ ;]+/).pop())):true)){r.id=hits[0].id;r.status=hits[0].status||'excluded';r.matchedTitle=hits[0].title;r.matchedAuthor=hits[0].author;}
 else{let candidates=fresh.filter(b=>(norm(b.title)===norm(r.title)||norm(b.title.split(':')[0])===short)&&authorOK(r.author,b.author));let b=candidates.length===1?candidates[0]:candidates.find(b=>norm(b.author)===norm(r.author)&&r.author);
 if(!b){b={id:'shelf-'+crypto.createHash('sha256').update(r.title+'|'+r.author).digest('hex').slice(0,12),title:r.title,author:r.author,sources:[261],mentions:[r]};fresh.push(b);}else{if(r.author)b.author=r.author;b.mentions||=[];if(!b.mentions.some(x=>x.episode===r.episode))b.mentions.push(r);}
 while(b.mergedInto)b=fresh.find(x=>x.id===b.mergedInto);r.newId=b.id;}
 rows.push(r);
}
write(dir+'/rows.json',rows);write(dir+'/triaged.json',fresh);write(dir+'/founders-clean.json',out);write(dir+'/founders-unresolved.json',unresolved);console.log({titles:out.length,unresolvedEpisodes:unresolved.length,distinctTitles:seen.size,matched:rows.filter(r=>r.source===261&&r.id).length});
