import fs from 'node:fs';
const d='data/shelves_261025',q=JSON.parse(fs.readFileSync(d+'/pending.json','utf8'));
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const groups=[...new Map(q.map(x=>[norm(x.title)+'|'+norm(x.author),x])).values()];
fs.mkdirSync(d+'/metadata',{recursive:true});
let cursor=0,done=0;const cap=Number(process.argv[2]||60);
const work=groups.filter(x=>!fs.existsSync(`${d}/metadata/${x.index}.json`)).slice(0,cap);
await Promise.all(Array.from({length:3},async()=>{while(cursor<work.length){const b=work[cursor++];const title=b.title.split(':')[0].replace(/\s*\([^)]*\)/g,'').replace(/, (Revised|Second|Third).*$/,'');const author=b.author.split(/\s+(?:and|with|&)\s+|,|\(/)[0].trim().split(/\s+/).at(-1)||'';const url='https://openlibrary.org/search.json?title='+encodeURIComponent(title)+'&author='+encodeURIComponent(author)+'&limit=3&fields=key,title,author_name,first_publish_year,subject,language,number_of_pages_median,isbn';try{const r=await fetch(url,{signal:AbortSignal.timeout(25000),headers:{'User-Agent':'BookCollectionResearch/1.0 (public bibliographic metadata)'}});const text=await r.text();if(!r.ok)throw Error(r.status+' '+text.slice(0,50));const data=JSON.parse(text);fs.writeFileSync(`${d}/metadata/${b.index}.json`,JSON.stringify({title:b.title,author:b.author,url,retrieved:'2026-10-25',data},null,2));console.log(++done,b.index,data.numFound,b.title);}catch(e){console.log('ERROR',b.index,e.message);}await new Promise(r=>setTimeout(r,600));}}));
