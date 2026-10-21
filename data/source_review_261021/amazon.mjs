import fs from 'node:fs';
import zlib from 'node:zlib';
import {amazonFields,titleMatches,authorMatches,products,clean} from '../pages_density_261021/collect.mjs';
const dir='data/source_review_261021/',read=p=>JSON.parse(fs.readFileSync(p));
const books=read(dir+(process.argv[2]||'top100.json')).filter(b=>!process.argv[2]||b.amazon?.count==null),editions={...Object.fromEntries(Object.entries(read('site/enrichment.json').books).map(([id,b])=>[id,b.edition])),...read('site/editions.json')},out=[];
const isbn10=s=>{s=String(s||'').replace(/^(?:ASIN|ISBN):/,'');if(/^(?:\d{9}[\dX]|B[A-Z0-9]{9})$/.test(s))return s;if(!/^978\d{10}$/.test(s))return null;const t=s.slice(3,12),v=(11-[...t].reduce((a,n,i)=>a+Number(n)*(10-i),0)%11)%11;return t+(v===10?'X':v);};
let cursor=0;
await Promise.all(Array.from({length:3},async()=>{while(cursor<books.length){const b=books[cursor++],e=editions[b.id];
const ids=[...new Set([...products(b),e?.id,...(e?.isbn10||[]),...(e?.isbn13||[])].map(isbn10).filter(Boolean))].slice(0,2);
const record={id:b.id,title:b.title,author:b.author,previousCount:b.amazon?.count??null,attempts:[]};
for(const id of ids){if(record.accepted)break;const url='https://www.amazon.com.au/dp/'+id,retrieved=new Date().toISOString();try{
const r=await fetch(url,{signal:AbortSignal.timeout(20000)}),html=await r.text(),f=amazonFields(html),rawFile=dir+'raw/'+(process.argv[3]||'amazon-au')+'-'+b.id+'-'+id+'.html.gz';fs.writeFileSync(rawFile,zlib.gzipSync(html));
const explicit=clean(html.match(/<span[^>]*data-hook="total-review-count"[^>]*>[\s\S]*?<\/span>/)?.[0]||'').match(/([\d,]+)\s+global ratings\b/i),count=explicit?Number(explicit[1].replaceAll(',','')):null;
const a={url:r.url,status:r.status,retrieved,rawFile,productId:id,title:f.title,byline:f.byline,count,evidence:explicit?.[0]||null,titleMatch:titleMatches(b.title,f.title),authorMatch:authorMatches(b.author,f.byline)};
a.accepted=r.status===200&&a.titleMatch&&a.authorMatch&&Number.isSafeInteger(count);record.attempts.push(a);if(a.accepted)record.accepted=a;
}catch(e){record.attempts.push({url,retrieved,error:String(e)});}}
out.push(record);fs.writeFileSync(dir+(process.argv[3]||'amazon-au')+'.json',JSON.stringify(out,null,2));console.log(b.id,record.accepted?.count??'unknown');
}}));
