import fs from 'node:fs';
import zlib from 'node:zlib';
import {amazonFields,titleMatches,authorMatches,clean} from '../pages_density_261021/collect.mjs';
import exclusions from './exclusion-decisions.mjs';
import {existing,aliases,corrections} from './identity.mjs';
const dir='data/remaining_261021/',read=p=>JSON.parse(fs.readFileSync(p)),state=fs.existsSync(dir+'ratings.json')?read(dir+'ratings.json'):{},enriched=read(dir+'enriched.json'),metadata=read(dir+'metadata.json');
const gr=fs.existsSync(dir+'goodreads.json')?read(dir+'goodreads.json'):{};
const skip=new Set([...exclusions.map(x=>x.batchId),...Object.keys(existing),...Object.keys(aliases)]);
const books=read(dir+'prepared.json').records.filter(b=>b.disposition==='assessed'&&!['u0209','u0352'].includes(b.batchId));
const isbn10=s=>{s=String(s||'');if(/^(?:\d{9}[\dX]|B[A-Z0-9]{9})$/.test(s))return s;if(!/^978\d{10}$/.test(s))return null;const t=s.slice(3,12),v=(11-[...t].reduce((a,n,i)=>a+Number(n)*(10-i),0)%11)%11;return t+(v===10?'X':v);};
let cursor=0;
await Promise.all(Array.from({length:3},async()=>{while(cursor<books.length){const b=books[cursor++];if(state[b.batchId]?.accepted)continue;
 const docs=[enriched[b.batchId]?.candidate,...(metadata[b.batchId]?.docs||[])].filter(Boolean).filter(d=>titleMatches(b.title,d.title)&&authorMatches(b.author,(d.author_name||[]).join('; ')));
 const gd=gr[b.batchId],gi=gd?.titleMatch&&gd?.authorMatch?isbn10(gd.ld?.isbn):null;
 const ids=[...new Set([gi,...docs.flatMap(d=>(d.isbn||[]).map(isbn10))].filter(Boolean))].slice(0,2);
 const record=state[b.batchId]||{id:b.batchId,title:b.title,author:b.author,attempts:[]};
 if(!ids.length&&!record.attempts.some(a=>a.kind==='product search')){
  const url='https://www.amazon.com/s?k='+encodeURIComponent(b.title+' '+b.author),retrieved=new Date().toISOString();
  try{const r=await fetch(url,{signal:AbortSignal.timeout(18000)}),html=await r.text(),rawFile=dir+'raw/amazon-search-'+b.batchId+'.html.gz';fs.writeFileSync(rawFile,zlib.gzipSync(html));record.attempts.push({kind:'product search',requestedUrl:url,url:r.url,status:r.status,retrieved,rawFile,result:'No verified matching product aggregate extracted. Search-result counts are not accepted as product ratings.'});}
  catch(e){record.attempts.push({kind:'product search',requestedUrl:url,retrieved,error:String(e)});}
 }
 for(const id of ids){if(record.accepted)break;const url='https://www.amazon.com.au/dp/'+id;if(record.attempts.some(a=>a.requestedUrl===url))continue;const retrieved=new Date().toISOString();try{
 const r=await fetch(url,{signal:AbortSignal.timeout(18000)}),html=await r.text(),f=amazonFields(html),rawFile=dir+'raw/amazon-'+b.batchId+'-'+id+'.html.gz';fs.writeFileSync(rawFile,zlib.gzipSync(html));
 const explicit=clean(html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||'').match(/([\d,]+)\s+global ratings\b/i),count=explicit?Number(explicit[1].replaceAll(',','')):null;
 const a={requestedUrl:url,url:r.url,status:r.status,retrieved,rawFile,productId:id,...f,count,evidence:explicit?.[0]||null,titleMatch:titleMatches(b.title,f.title),authorMatch:authorMatches(b.author,f.byline)};
 a.stars=Number(html.match(/id="acrPopover"[^>]*title="([\d.]+) out of 5 stars/)?.[1])||null;
 a.accepted=r.status===200&&a.titleMatch&&a.authorMatch&&Number.isSafeInteger(count);record.attempts.push(a);if(a.accepted)record.accepted=a;
 }catch(e){record.attempts.push({requestedUrl:url,retrieved,error:String(e)});}}
 state[b.batchId]=record;fs.writeFileSync(dir+'ratings.json',JSON.stringify(state,null,2)+'\n');if(Object.keys(state).length%25===0)console.log(Object.keys(state).length,'attempted; verified',Object.values(state).filter(x=>x.accepted).length);
}}));
console.log('Attempted',Object.keys(state).length,'verified',Object.values(state).filter(x=>x.accepted).length);
