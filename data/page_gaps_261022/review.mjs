import fs from 'node:fs';
const dir='data/page_gaps_261022/',j=p=>JSON.parse(fs.readFileSync(p)), targets=j(dir+'targets.json'), results=j(dir+'candidates.json');
const output={};
for(const b of targets){
 const r=results[b.id];if(!r)continue;
 let edition=null;
 const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
 const surnames=b.author.replace(/\([^)]*\)/g,'').split(/;|,|\/| & | and /).map(n=>norm(n).split(' ').at(-1)).filter(n=>n.length>2);
 const authorOK=r.work&&surnames.some(n=>norm(r.work.author_name.join(' ')).split(' ').includes(n));
 if(authorOK){
  const p=dir+'raw/'+b.id+'-editions.json';
  if(fs.existsSync(p))for(const e of j(p).entries||[]){
   const m=String(e.pagination||'').match(/^(?:[ivxlcdm]+,\s*)?(\d+)(?:\s*p\.?|\s*pages)?\s*$/i);
   const pages=e.number_of_pages||Number(m?.[1]);
   const year=String(e.publish_date||'').match(/\b(1[5-9]\d{2}|20\d{2})\b/);
   const description=[e.physical_format,e.title,e.subtitle,e.edition_name,JSON.stringify(e.publishers),JSON.stringify(e.subjects)].join(' ');
   if(!Number.isInteger(pages)||pages<=0||!year||!e.languages?.some(l=>l.key==='/languages/eng')||/audio|abridg|large[ -](?:print|type)|summary|workbook|Thorndike|G K Hall|Diversified Publishing|Lrg edition|graded reader/i.test(description))continue;
   if(b.id==='rem-u1629'&&/illustrated/i.test(description))continue;
   if(b.id==='rem-u1282'&&/young readers|juvenile/i.test(description))continue;
   edition={pages,id:e.key,url:'https://openlibrary.org'+e.key,retrieved:'2026-10-22',language:'English',format:e.physical_format||'Book (format unspecified)',year:Number(year[0]),confidence:'moderate',title:e.title,authors:r.work.author_name.join('; '),isbn13:e.isbn_13||[],isbn10:e.isbn_10||[],pagination:e.pagination,publishers:e.publishers||[],editionName:e.edition_name||null,source:{provider:'Open Library edition record',rawFile:p},notes:'Catalog edition extent; separately numbered front matter may be excluded. Title, author and edition variants reviewed.'};break;
  }
 }
 output[b.id]={...b,edition:edition||null,reason:edition?null:(!authorOK&&r.work?'Candidate author surname does not match; rejected.':r.reason||'Candidate is a variant edition; requires separate verification.')};
}
for(const [id,pages,isbn,year,format,url,notes,confidence] of j(dir+'manual.json')){
 const b=targets.find(b=>b.id===id);output[id]={...b,edition:{pages,id:isbn.includes(':')?isbn:'ISBN:'+isbn,url,retrieved:'2026-10-22',language:'English',format,year,confidence,title:b.title,authors:id==='rem-u1865'?'Samuel Barondes':b.author,isbn13:isbn.includes(':')?[]:[isbn],notes,source:{provider:'Manually checked edition metadata',url}},reason:null};
}
const unresolved={
 n86606a9cda:'English material on the author website is an abridged translation in two parts. A verified extent for the catalog work was not established. Source: https://www2.math.upenn.edu/~kirillov/',
 n62ef81f195:'The source nominates the five-volume series (six physical books because volume III has two parts). Individual-volume counts and a 628-page abridgment were found; a consistent complete-set extent was not verified. Source: https://www.abebooks.co.uk/first-edition/BRITISH-INTELLIGENCE-SECOND-WORLD-Volumes-I-V/32500246199/bd',
 n42dad48542:'Computer History Museum releases only the first portion of the memoir. Its PDF extent is not the extent of the full work. Source: https://computerhistory.org/blog/in-his-own-words-gary-kildall/'
};
for(const [id,reason] of Object.entries(unresolved))output[id].reason=reason;
fs.writeFileSync(dir+'reviewed.json',JSON.stringify(output,null,2)+'\n');
console.log('Reviewed candidates:',Object.keys(output).length,'with pages:',Object.values(output).filter(x=>x.edition).length);
for(const b of Object.values(output))if(!b.edition)console.log(b.id+' | '+b.title+' | '+b.reason);
