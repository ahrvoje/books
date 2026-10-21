import fs from 'node:fs';
import zlib from 'node:zlib';
import {titleMatches,authorMatches,clean} from '../pages_density_261021/collect.mjs';
import {corrections} from './identity.mjs';
const dir='data/remaining_261021/',read=p=>JSON.parse(fs.readFileSync(p)),state=fs.existsSync(dir+'goodreads.json')?read(dir+'goodreads.json'):{};
const books=read(dir+'pending-start.json').filter(b=>b.mentions.some(m=>m.url?.includes('/book/show')));let cursor=0;
await Promise.all(Array.from({length:3},async()=>{while(cursor<books.length){const original=books[cursor++],b={...original,...corrections[original.batchId]};if(state[b.batchId])continue;const url=b.mentions.find(m=>m.url?.includes('/book/show')).url,retrieved=new Date().toISOString();
 try{const r=await fetch(url,{signal:AbortSignal.timeout(20000)}),h=await r.text();const raw=dir+'raw/goodreads-'+b.batchId+'.html.gz';fs.writeFileSync(raw,zlib.gzipSync(h));const next=h.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/)?.[1],a=next?JSON.parse(next).props.pageProps.apolloState:{};
 const id=Number(url.match(/\/show\/(\d+)/)?.[1]),book=Object.values(a).find(x=>x.__typename==='Book'&&x.legacyId===id),work=book?.work?a[book.work.__ref]:Object.values(a).find(x=>x.__typename==='Work'&&x.bestBook?.__ref&&a[x.bestBook.__ref]?.legacyId===id),ld=JSON.parse(h.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1]||'null');
 const author=book?.primaryContributorEdge?a[book.primaryContributorEdge.node.__ref]?.name:ld?.author?.map(x=>x.name).join('; ');
 state[b.batchId]={url:r.url,requestedUrl:url,status:r.status,retrieved,raw,title:book?.title||ld?.name,author,description:clean(book?.description||ld?.description),details:book?.details,originalYear:work?.details?.publicationTime?new Date(work.details.publicationTime).getUTCFullYear():null,stats:work?.stats,genres:book?.bookGenres?.map(x=>x.genre.name),ld,titleMatch:titleMatches(b.title,book?.title||ld?.name||''),authorMatch:authorMatches(b.author,author||'')};
 }catch(e){state[b.batchId]={url,retrieved,error:String(e)};}
 fs.writeFileSync(dir+'goodreads.json',JSON.stringify(state,null,2)+'\n');if(Object.keys(state).length%25===0)console.log('Goodreads',Object.keys(state).length+'/'+books.length);
}}));
console.log('Saved',Object.keys(state).length);
