import {books,state,save,log,retrieve,titleMatches,authorMatches} from './collect.mjs';
let stopped=false;
for(const b of books.filter(b=>!state.books[b.id].edition)){
 if(stopped)break;
 const q=`intitle:"${b.title.split(':')[0].replace(/\([^)]*\)/g,'').trim()}" inauthor:"${b.author.split(/;| with | and /)[0].replace(/\([^)]*\)/g,'').trim()}"`;
 const r=await retrieve('https://www.googleapis.com/books/v1/volumes?q='+encodeURIComponent(q)+'&maxResults=5',`google-${b.id}`),s=state.books[b.id];
 s.attempts.push({kind:'google-books',url:r.url,status:r.status,rawFile:r.rawFile,retrieved:r.retrieved});
 if(r.status===429){stopped=true;log('Google Books quota response; stopped');break;}
 for(const item of r.data?.items||[]){const v=item.volumeInfo||{},authors=(v.authors||[]).join('; '),title=[v.title,v.subtitle].filter(Boolean).join(': '),year=Number(v.publishedDate?.slice(0,4));
  if(!titleMatches(b.title,title)||!authorMatches(b.author,authors)||!Number.isInteger(v.pageCount)||v.pageCount<16||!Number.isInteger(year)||year<1||v.printType!=='BOOK')continue;
  if(/series|volumes|trilogy|version unresolved|probable|likely /i.test(b.title))continue;
  s.edition={pages:v.pageCount,id:'GoogleBooks:'+item.id,url:v.infoLink?.replace(/^http:/,'https:')||'https://books.google.com/books?id='+item.id,retrieved:r.retrieved,language:v.language||'Not stated by source',format:'Book; binding not stated by source',year,confidence:'moderate',title,authors,publisher:v.publisher||'',isbn13:(v.industryIdentifiers||[]).filter(x=>x.type==='ISBN_13').map(x=>x.identifier),notes:'Identified Google Books volume record; page count is edition-specific. Binding is not given. Other editions can differ.',source:{provider:'Google Books',api:r.url,rawFile:'data/pages_density_261021/'+r.rawFile,sha256:r.sha256}};break;
 }
 save();await new Promise(r=>setTimeout(r,350));
}
log('Google Books complete');
