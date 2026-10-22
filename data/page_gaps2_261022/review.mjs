import fs from 'node:fs';
const dir='data/page_gaps2_261022/',j=p=>JSON.parse(fs.readFileSync(p)), targets=j(dir+'targets.json'), results=j(dir+'candidates.json');
const output={}, selected=j(dir+'selected.json');
for(const b of targets){
 const r=results[b.id];if(!r)continue;
 let edition=null;
 const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
 const surnames=b.author.replace(/\([^)]*\)/g,'').split(/;|,|\/| & | and /).map(n=>norm(n).split(' ').at(-1)).filter(n=>n.length>2);
 const authorOK=r.work&&surnames.some(n=>norm(r.work.author_name.join(' ')).split(' ').includes(n));
 if(authorOK){
  const p=dir+'raw/'+b.id+'-editions.json';
  if(fs.existsSync(p))for(const e of j(p).entries||[]){
   if(selected[b.id]&&e.key!==selected[b.id])continue;
   const m=String(e.pagination||'').match(/^(?:[ivxlcdm]+,\s*)?(\d+)(?:\s*p\.?|\s*pages)?\s*$/i);
   const pages=e.number_of_pages||Number(m?.[1]);
   const year=String(e.publish_date||'').match(/\b(1[5-9]\d{2}|20\d{2})\b/);
   if(year&&Number(year[0])>2026)continue;
   const description=[e.physical_format,e.title,e.subtitle,e.edition_name,e.pagination,JSON.stringify(e.publishers),JSON.stringify(e.subjects)].join(' ');
   if(!Number.isInteger(pages)||pages<20||!year||!e.languages?.some(l=>l.key==='/languages/eng')||/audio|abridg|large[ -](?:print|type)|summary|workbook|Thorndike|G K Hall|Diversified Publishing|Lrg edition|graded reader/i.test(description))continue;
   if(b.id==='rem-u1629'&&/illustrated/i.test(description))continue;
   if(b.id==='rem-u1282'&&/young readers|juvenile/i.test(description))continue;
   edition={pages,id:e.key,url:'https://openlibrary.org'+e.key,retrieved:'2026-10-22',language:'English',format:e.physical_format||'Book (format unspecified)',year:Number(year[0]),confidence:'moderate',title:e.title,authors:r.work.author_name.join('; '),isbn13:e.isbn_13||[],isbn10:e.isbn_10||[],pagination:e.pagination,publishers:e.publishers||[],editionName:e.edition_name||null,source:{provider:'Open Library edition record',rawFile:p},notes:'Catalog edition extent; separately numbered front matter may be excluded. Title, author and edition variants reviewed.'};break;
  }
 }
 output[b.id]={...b,edition:edition||null,reason:edition?null:(!authorOK&&r.work?'Candidate author surname does not match; rejected.':r.reason||'Candidate is a variant edition; requires separate verification.')};
}
for(const [id,pages,isbn,year,format,url,notes,confidence] of [...j(dir+'manual.json'),...j(dir+'manual-extra.json')]){
 const b=targets.find(b=>b.id===id);output[id]={...b,edition:{pages,id:isbn.includes(':')?isbn:'ISBN:'+isbn,url,retrieved:'2026-10-22',language:'English',format,year,confidence,title:b.title,authors:id==='rem-u1865'?'Samuel Barondes':b.author,isbn13:isbn.includes(':')?[]:[isbn],notes,source:{provider:'Manually checked edition metadata',url}},reason:null};
}
output.g0742.status='excluded';
output.g0742.reason='H1: audio-only original; no print or ebook edition found. Later ISBN is MP3 CD. High-confidence exclusion; see analysis/analysis_audiopages_261022_0958.md#g0742.';
output.q0760.reason='Leon Edel wrote both a multi-volume Henry James biography and a one-volume version. The source does not resolve the intended work; no count assigned.';
output.q0952.reason='Print listing found: English paperback ISBN 9798182244497 (2026), https://www.zvab.com/buch-suchen/autor/j-maurer/ . No verified page extent. ElevenReader also describes an ebook with audio; not excluded as audio-only.';
fs.writeFileSync(dir+'reviewed.json',JSON.stringify(output,null,2)+'\n');
console.log('Reviewed candidates:',Object.keys(output).length,'with pages:',Object.values(output).filter(x=>x.edition).length);
for(const b of Object.values(output))if(!b.edition)console.log(b.id+' | '+b.title+' | '+b.reason);
