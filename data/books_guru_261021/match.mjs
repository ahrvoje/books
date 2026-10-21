import fs from 'node:fs';
const dir='data/books_guru_261021/';
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim().replace(/^(the|a|an) /,'');
const main=s=>norm(String(s).split(/[:—]/)[0]);
const read=f=>JSON.parse(fs.readFileSync(f,'utf8'));
const inventory=read(dir+'inventory.json'),catalogFile=read('data/catalog.json').compiled,catalog=read(catalogFile),records=[];
function add(b,file,loc,current=false){if(typeof b.title!=='string'||typeof b.author!=='string'||!b.title.trim())return;records.push({id:b.id??b.reviewId??null,title:b.title,author:b.author,status:b.status??null,current,file,loc,refs:[...new Set([b.currentReview,b.reviewAnchor,b.priorAssessment,b.priorReview,b.analysis,...(Array.isArray(b.analysisFiles)?b.analysisFiles:[]),...(Array.isArray(b.priorReviews)?b.priorReviews:[])].filter(x=>typeof x==='string'))]});}
for(const k of ['currentBooks','exclusions'])catalog[k].forEach((b,i)=>add(b,catalogFile,`${k}[${i}]`,true));
const files=[];function walk(path){for(const d of fs.readdirSync(path,{withFileTypes:true})){const p=path+'/'+d.name;if(d.isDirectory()){if(!p.startsWith(dir.slice(0,-1))&&!/\/(raw|pages|node_modules|\.git|cache|snapshots)$/.test(p))walk(p);}else if(p.endsWith('.json')&&p!==catalogFile&&fs.statSync(p).size<80000000)files.push(p);}}walk('data');
function visit(v,file,loc){if(!v||typeof v!=='object')return;if(!Array.isArray(v))add(v,file,loc);for(const[k,x]of Object.entries(v))if(x&&typeof x==='object')visit(x,file,loc+(Array.isArray(v)?`[${k}]`:'.'+k));}
let parsed=0;for(const file of files){try{visit(read(file),file,'$');parsed++;}catch{}}
const dedup=new Map();for(const r of records){const k=norm(r.title)+'|'+norm(r.author);if(!dedup.has(k))dedup.set(k,[]);const g=dedup.get(k);if(!g.some(x=>x.file===r.file&&x.id===r.id))g.push(r);}
const historical=[...dedup].map(([key,entries])=>({key,title:entries[0].title,author:entries[0].author,entries}));
const byTitle=new Map();for(const r of historical){for(const t of new Set([norm(r.title),main(r.title)])){if(!byTitle.has(t))byTitle.set(t,[]);byTitle.get(t).push(r);}}
const compatible=(a,b)=>{a=norm(a);b=norm(b);if(!a||!b)return false;if(a===b||a.includes(b)||b.includes(a))return true;const at=a.split(' '),bt=b.split(' ');return at.at(-1)===bt.at(-1)&&at[0][0]===bt[0][0];};
const overrides=fs.existsSync(dir+'identity-overrides.json')?read(dir+'identity-overrides.json'):{};
const candidateRows=[];
for(const b of inventory.books){
  const t=norm(b.title),m=main(b.title);let matches=[...new Set([...(byTitle.get(t)||[]),...(byTitle.get(m)||[])])].filter(r=>compatible(b.author,r.author));let basis='normalized title and compatible author';
  if(!matches.length){matches=(byTitle.get(t)||[]).filter(r=>!r.author&&r.entries.some(e=>e.current));if(matches.length)basis='exact current title whose prior exclusion omitted author; retained prior title identity, source supplies author for later identity confirmation';}
  if(overrides[b.id]?.priorId){matches=historical.filter(r=>r.entries.some(e=>e.id===overrides[b.id].priorId));basis=overrides[b.id].reason;}
  if(matches.length){const entries=matches.flatMap(m=>m.entries),prefer=entries.find(e=>e.current)??entries.find(e=>e.status)??entries[0];b.priorId=prefer.id;b.priorStatus=prefer.status??'previously covered';b.priorRefs=[...new Set(entries.flatMap(e=>[e.file+'#'+e.loc,...e.refs]))];b.match={status:'previously_covered',basis,confidence:overrides[b.id]?.confidence??'high',canonicalTitle:prefer.title,canonicalAuthor:prefer.author,current:prefer.current};}
  else{b.priorId=null;b.priorStatus=null;b.priorRefs=[];const bt=new Set(t.split(' '));const candidates=historical.map(r=>{const rt=new Set(norm(r.title).split(' ')),intersection=[...bt].filter(w=>rt.has(w)).length;const overlap=intersection/Math.max(bt.size,rt.size);const sameAuthor=compatible(b.author,r.author);return{r,overlap,sameAuthor};}).filter(x=>(x.overlap>=0.52&&(x.sameAuthor||x.overlap>=0.8))||(x.sameAuthor&&x.overlap>=0.3)).sort((a,b)=>b.overlap-a.overlap).slice(0,8).map(x=>({title:x.r.title,author:x.r.author,overlap:x.overlap,sameAuthor:x.sameAuthor,entries:x.r.entries.map(e=>({id:e.id,current:e.current,status:e.status,file:e.file,loc:e.loc})).slice(0,6)}));
    b.match={status:candidates.length?'identity_review_pending':'new_candidate',confidence:candidates.length?'low':'moderate'};if(overrides[b.id]?.new===true)b.match={status:'new_candidate',confidence:'high',basis:overrides[b.id].reason};
    if(candidates.length)candidateRows.push({id:b.id,title:b.title,author:b.author,decision:b.match.status,candidates});
  }
}
fs.writeFileSync(dir+'inventory.json',JSON.stringify(inventory,null,2)+'\n');
fs.writeFileSync(dir+'historical-index.json',JSON.stringify({parsedFiles:parsed,rawRecords:records.length,uniqueIdentities:historical.length,records:historical},null,2)+'\n');
fs.writeFileSync(dir+'match-candidates.json',JSON.stringify(candidateRows,null,2)+'\n');
fs.writeFileSync(dir+'new.json',JSON.stringify(inventory.books.filter(b=>b.match.status==='new_candidate'),null,2)+'\n');
console.log(JSON.stringify({parsedFiles:parsed,historicalIdentities:historical.length,all:inventory.books.length,covered:inventory.books.filter(b=>b.match.status==='previously_covered').length,pending:inventory.books.filter(b=>b.match.status==='identity_review_pending').length,new:inventory.books.filter(b=>b.match.status==='new_candidate').length},null,2));
