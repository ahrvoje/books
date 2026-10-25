import fs from 'node:fs';
import {titleMatches,authorMatches} from '../pages_density_261021/collect.mjs';
const dir='data/metadata1000_261025',read=p=>JSON.parse(fs.readFileSync(p)),books=read(dir+'/targets.json');
const state=fs.existsSync(dir+'/google.json')?read(dir+'/google.json'):{books:{}};
const save=()=>fs.writeFileSync(dir+'/google.json',JSON.stringify(state,null,2)+'\n');
for(const b of books){
 if(state.blocked)break;
 if(b.edition||/\bseries|trilogy|volumes\b/i.test(b.title)||state.books[b.id])continue;
 const l=read(dir+'/library.json').books[b.id],a=read(dir+'/archive.json').books[b.id];if(l?.edition||a?.edition)continue;
 const q='intitle:'+b.title.split(':')[0]+' inauthor:'+b.author.split(';')[0],url='https://www.googleapis.com/books/v1/volumes?'+new URLSearchParams({q,maxResults:'5',printType:'books',langRestrict:'en'});
 await new Promise(r=>setTimeout(r,Math.max(0,(state.lastRequest||0)+5000-Date.now())));state.lastRequest=Date.now();
 const s=state.books[b.id]={url,retrieved:new Date().toISOString(),file:dir+'/raw/google-'+b.id+'.json'};
 try{
  const r=await fetch(url,{signal:AbortSignal.timeout(25000)}),text=await r.text();s.status=r.status;fs.writeFileSync(s.file,text);
  if([403,429,503].includes(r.status)){state.blocked={url,status:r.status};save();break;}
  if(r.ok)for(const d of JSON.parse(text).items||[]){const v=d.volumeInfo,title=[v.title,v.subtitle].filter(Boolean).join(': '),author=(v.authors||[]).join('; '),year=+v.publishedDate?.slice(0,4);
   if(!titleMatches(b.title,title)||!authorMatches(b.author,author)||!['en','hr'].includes(v.language)||/audio|abridged|summary|study guide|large print/i.test(title)||!Number.isInteger(v.pageCount)||v.pageCount<16||!year||year<b.year-2)continue;
   s.edition={id:'GoogleBooks:'+d.id,pages:v.pageCount,format:'Google Books edition (binding unspecified)',language:v.language,year,url:'https://books.google.com/books?id='+d.id,title,authors:author,isbn10:(v.industryIdentifiers||[]).filter(x=>x.type==='ISBN_10').map(x=>x.identifier),isbn13:(v.industryIdentifiers||[]).filter(x=>x.type==='ISBN_13').map(x=>x.identifier),retrieved:s.retrieved,confidence:'moderate',source:{file:s.file,url,retrieved:s.retrieved},notes:'Matched title, author, language and dated Google Books edition. Page extent is the catalogued edition count; print binding is not established.'};break;
  }
 }catch(e){s.error=e.message;}
 save();console.log(JSON.stringify({rank:b.rank,title:b.title,pages:s.edition?.pages,known:Object.values(state.books).filter(x=>x.edition).length}));
}
save();
