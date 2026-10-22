import fs from 'node:fs';
import zlib from 'node:zlib';
import {amazonFields,titleMatches,authorMatches,products,clean} from '../pages_density_261021/collect.mjs';
const dir='data/rating_gaps_261022/',read=p=>JSON.parse(fs.readFileSync(p));
fs.mkdirSync(dir+'raw',{recursive:true});
const baseline=read('data/catalog.json').compiled,c=read(baseline),ed=read('site/editions.json'),en=read('site/enrichment.json');
if(!fs.existsSync(dir+'before.json')){fs.copyFileSync(baseline,dir+'before.json');fs.copyFileSync('RECOMMENDED_BOOKS.md',dir+'before-ledger.txt');}
const ranked=read(dir+'before.json').currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
const targets=ranked.map((b,i)=>({...b,rank:i+1})).filter(b=>b.amazon?.count==null).slice(0,250);
fs.writeFileSync(dir+'targets.json',JSON.stringify(targets,null,2)+'\n');
const state=fs.existsSync(dir+'captures.json')?read(dir+'captures.json'):{baseline,books:Object.fromEntries(targets.map(b=>[b.id,{id:b.id,title:b.title,author:b.author,rank:b.rank,attempts:[]}]))};
const save=()=>fs.writeFileSync(dir+'captures.json',JSON.stringify(state,null,2)+'\n');
const isbn10=s=>{s=String(s||'').replace(/^.*:/,'');if(/^(?:\d{9}[\dX]|B[A-Z0-9]{9})$/.test(s))return s;if(!/^978\d{10}$/.test(s))return null;const t=s.slice(3,12),v=(11-[...t].reduce((a,n,i)=>a+Number(n)*(10-i),0)%11)%11;return t+(v===10?'X':v);};
const prior=read('data/top200_261022/captures.json');
const discovery=fs.existsSync(dir+'discovery.json')?read(dir+'discovery.json'):{};
for(const b of targets){const e=en.books[b.id]?.edition||ed[b.id];const found=(discovery[b.id]?.docs||[]).filter(d=>titleMatches(b.title.split(':')[0],d.title)&&authorMatches(b.author,(d.author_name||[]).join('; ')));state.books[b.id].candidateIds=[...new Set([...products(b),...(e?.isbn13||[]),...(e?.isbn10||[]),e?.id,...(prior.books[b.id]?.candidateIds||[]),...found.flatMap(d=>d.isbn||[])].map(isbn10).filter(Boolean))].slice(0,10);}
save();
console.log('Frozen',targets.length,'targets; rank range',targets[0].rank,targets.at(-1).rank);
if(process.argv.includes('--setup'))process.exit(0);
let cursor=0,done=0;
const markets=process.argv.includes('--alternate')?['www.amazon.co.uk','www.amazon.de','www.amazon.ca']:['www.amazon.com.au','www.amazon.com'];
await Promise.all(Array.from({length:3},async()=>{while(cursor<targets.length){const b=targets[cursor++],r=state.books[b.id];
 for(const productId of r.candidateIds.slice(0,process.argv.includes('--discovered')?10:process.argv.includes('--alternate')?3:2)){if(r.amazon)break;for(const host of markets){if(r.amazon)break;const url='https://'+host+'/dp/'+productId;if(r.attempts.some(a=>a.url===url))continue;const retrieved=new Date().toISOString();
 try{const response=await fetch(url,{signal:AbortSignal.timeout(12000)}),html=await response.text(),f=amazonFields(html),rawFile=dir+'raw/'+b.id+'-'+host+'-'+productId+'.html.gz';fs.writeFileSync(rawFile,zlib.gzipSync(html));
 const block=clean(html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||'');
 const m=block.match(/([\d,.]+)\s+(?:global ratings|globale Bewertungen|weltweite Bewertungen)\b/i),count=m?Number(m[1].replace(/[,.]/g,'')):null;
 const a={url:response.url,status:response.status,retrieved,rawFile,...f,productId:f.productId||productId,count,evidence:m?.[0]||null,titleMatch:titleMatches(b.title,f.title),authorMatch:authorMatches(b.author,f.byline.replaceAll('&ouml;','ö'))};r.attempts.push(a);
 if(response.status===200&&a.titleMatch&&a.authorMatch&&Number.isSafeInteger(count)&&count>=0&&!/Spanish edition|French edition|German edition|Italian edition|Chinese edition/i.test(a.byline))r.amazon=a;
 }catch(err){r.attempts.push({url,retrieved,error:String(err)});}save();}}
 done++;if(done%10===0)console.log('Checked',done,'captured',Object.values(state.books).filter(x=>x.amazon).length);save();
}}));
console.log('Complete; captured',Object.values(state.books).filter(x=>x.amazon).length);
