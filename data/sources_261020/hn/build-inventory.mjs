import fs from 'node:fs';
const dir='data/sources_261020/hn';
const coverage=JSON.parse(fs.readFileSync(`${dir}/coverage.json`));
const compiled=JSON.parse(fs.readFileSync('data/glasp_261019/compiled.json'));
const excluded=fs.readFileSync('EXCLUDED_BOOKS.md','utf8').split('\n').filter(x=>x.startsWith('- '));
const norm=s=>String(s||'').normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/^the |^a |^an /,'').replace(/[^a-z0-9]/g,'');
const decode=s=>String(s||'').replace(/<p>/g,'\n').replace(/<[^>]+>/g,'').replace(/&#x([0-9a-f]+);/gi,(_,x)=>String.fromCodePoint(parseInt(x,16))).replace(/&#([0-9]+);/g,(_,x)=>String.fromCodePoint(+x)).replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const rows=fs.readFileSync(`${dir}/mentions.tsv`,'utf8').trim().split(/\r?\n/).slice(1).map(x=>x.split('\t'));
const review=fs.existsSync(`${dir}/review-status.json`)?JSON.parse(fs.readFileSync(`${dir}/review-status.json`)):{128:'complete',129:'complete',130:'complete',132:'partial',133:'pending',134:'pending',135:'pending'};
const auxiliary=fs.existsSync(`${dir}/auxiliary-books.json`)?JSON.parse(fs.readFileSync(`${dir}/auxiliary-books.json`)):[];
const nonbooks=fs.existsSync(`${dir}/nonbooks.json`)?JSON.parse(fs.readFileSync(`${dir}/nonbooks.json`)):[];
const sources=coverage.map(c=>{
 const nodes=JSON.parse(fs.readFileSync(`${dir}/${c.source}-nodes.json`));
 const books=new Map();
 for(const [source,title,author,ids,identityNotes] of rows.filter(r=>+r[0]===c.source)){
  const key=norm(title)+'|'+norm(author), b=books.get(key)||{title,author:author||undefined,commentIds:[],sourceQuotes:[],sourceUrls:[],identityNotes:[]};
  for(const id of ids.split(',').filter(Boolean).map(Number)){
   const n=nodes.find(n=>n.id===id);if(!n)throw Error(`Unknown comment ${source}:${id}`);
   if(!b.commentIds.includes(id))b.commentIds.push(id);
   const t=decode(n.text||n.title||c.title);
   const needle=title.split(':')[0].toLowerCase();const pos=t.toLowerCase().indexOf(needle);
   const quote=pos>=0?t.slice(Math.max(0,pos-50),Math.min(t.length,pos+needle.length+100)):t.slice(0,280);
   b.sourceQuotes.push({commentId:id,quote});
   b.sourceUrls.push(`https://news.ycombinator.com/item?id=${id}`);
   for(const m of (n.text||'').matchAll(/href="([^"]+)"/g))b.sourceUrls.push(decode(m[1]));
  }
  b.identityNotes.push(identityNotes);books.set(key,b);
 }
 for(const b of books.values()){
  b.sourceUrls=[...new Set(b.sourceUrls)];
  b.sourceQuotes=b.sourceQuotes.filter((x,i,a)=>a.findIndex(y=>y.commentId===x.commentId)===i);
  b.identityNotes=[...new Set(b.identityNotes)].join(' ');
  b.priorMatches=compiled.currentBooks.filter(x=>norm(x.title)===norm(b.title)).map(x=>({id:x.key,title:x.title,author:x.author,status:x.status,match:'normalized exact title; author and edition require assessment verification'}));
  b.exclusionMatches=excluded.filter(x=>norm(x).includes(norm(b.title))&&norm(b.title).length>7);
 }
 const out=[...books.values()].filter(b=>!nonbooks.some(n=>n.source===c.source&&norm(n.title)===norm(b.title)));
 return {source:c.source,url:c.url,title:c.title,retrieved:c.retrieved,coverage:{comments:c.algoliaComments,readableComments:c.readableComments,firebaseDescendants:c.firebaseDescendants,countsAgree:c.algoliaComments===c.firebaseDescendants,manualReview:review[c.source],raw:`raw/${c.id}-algolia.json`,readable:`${c.source}-${c.id}.md`},books:out,nonbooks:nonbooks.filter(n=>n.source===c.source),noncandidateAuxiliaryAudit:auxiliary.filter(a=>a.source===c.source).map(a=>({...a,candidate:false,reason:'Indirect linked-page mention; not explicitly named as an individual work in supplied HN page/comments. Preserved for identity research only.'}))};
});
fs.writeFileSync(`${dir}/inventory.json`,JSON.stringify({status:Object.values(review).every(x=>x==='complete')?'complete':'partial',sources},null,2)+'\n');
console.log(sources.map(s=>`${s.source}: ${s.books.length} books (${s.coverage.manualReview})`).join('\n'));
