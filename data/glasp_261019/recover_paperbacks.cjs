const fs=require('fs'),path=require('path');
const root=__dirname,rows=require('./paperbacks.json'),inv=require('./inventory.json');
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const words=s=>norm(s).split(' ').filter(w=>w.length>2&&!['the','and'].includes(w));
const matches=(a,b)=>{const x=words(a),y=words(b);return x.length&&x.filter(w=>y.includes(w)).length/x.length>=0.8;};
const isbn13=s=>{if(s.length===13)return s;if(s.length!==10)return null;const b='978'+s.slice(0,9),v=(10-[...b].reduce((n,d,i)=>n+Number(d)*(i%2?3:1),0)%10)%10;return b+v;};
const isbns=e=>[...(e.isbn_10||[]),...(e.isbn_13||[])].map(isbn13).filter(Boolean);
const english=e=>e.languages?.some(x=>x.key==='/languages/eng');
const paperback=e=>/paperback|softcover|softback|mass market|\bpbk\b/i.test([e.physical_format,e.edition_name].join(' '));
const out=[];
for(const row of rows.filter(x=>x.work&&!x.selected)){
 const source=inv.books.find(x=>x.id===row.id),p=JSON.parse(fs.readFileSync(path.join(root,'editions',row.work.split('/').pop()+'.json'))),editions=p.data?.entries||[];
 for(const e of editions.filter(e=>paperback(e)&&matches(source.title,e.title)&&isbns(e).length)){
  const language=english(e)?e:editions.find(x=>english(x)&&isbns(x).some(i=>isbns(e).includes(i)));
  if(!language)continue;
  const isbn=e.isbn_10?.[0]||e.isbn_13?.find(s=>s.startsWith('978'));if(!isbn)continue;
  out.push({id:row.id,asin:isbn,format:'English paperback',evidence:'https://openlibrary.org'+e.key,languageEvidence:'https://openlibrary.org'+language.key,title:e.title,publisher:e.publishers,edition:e.physical_format||e.edition_name,retrievedAt:p.retrievedAt});break;
 }
}
fs.writeFileSync(path.join(root,'supplemental_paperbacks.json'),JSON.stringify(out,null,2));
console.log('Recovered',out.length,'documented English paperbacks.');
