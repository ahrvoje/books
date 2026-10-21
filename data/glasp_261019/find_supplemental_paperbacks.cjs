const fs=require('fs'),root=__dirname;
const books=require('./compiled.json').sourceBooks.filter(b=>b.status==='recommended'&&/Source edition;/.test(b.purchaseFormat||''));
const paperbacks=require('./paperbacks.json'),canon=s=>{s=String(s).replace(/[^0-9X]/gi,'');if(s.length===10){const a='978'+s.slice(0,9);return a+((10-[...a].reduce((t,c,i)=>t+Number(c)*(i%2?3:1),0)%10)%10)}return s};
const isbns=e=>[...(e.isbn_10||[]),...(e.isbn_13||[])].map(canon);
const eng=e=>e.languages?.some(l=>l.key==='/languages/eng');
const note=e=>typeof e.notes==='string'?e.notes:e.notes?.value||'';
const out=[];
for(const b of books){
 const p=paperbacks.find(p=>b.sourceIds.includes(p.id));if(!p?.work)continue;
 const path=root+'/editions/'+p.work.split('/').pop()+'.json';if(!fs.existsSync(path))continue;
 const entries=JSON.parse(fs.readFileSync(path)).data?.entries||[];
 for(const e of entries){
  const ids=isbns(e);if(!ids.length)continue;
  const en=eng(e)?e:entries.find(x=>eng(x)&&isbns(x).some(i=>ids.includes(i)));
  if(!en)continue;
  const fmt=/paperback|softcover|mass market|softback/i.test(e.physical_format||'');
  const notes=note(e),bindingNote=/paperback|paper-back|pbk\.?|softcover|softback/i.test(notes);
  if(!fmt&&!bindingNote)continue;
  out.push({id:p.id,sourceTitle:b.title,sourceAuthor:b.author,total:b.total,key:e.key,title:e.title,by_statement:e.by_statement,format:e.physical_format,notes,isbn10:e.isbn_10,isbn13:e.isbn_13,languageFrom:en.key,languageIsbn10:en.isbn_10,languageIsbn13:en.isbn_13,languages:e.languages,publishers:e.publishers,publish_date:e.publish_date,kind:fmt?'format plus ISBN language match':'binding mentioned in notes'});
 }
}
fs.writeFileSync(root+'/supplemental_paperback_candidates.json',JSON.stringify(out,null,2));
console.log('unknown eligible',books.length,'candidates',out.length,'books',new Set(out.map(x=>x.id)).size);
for(const x of out.sort((a,b)=>b.total-a.total))console.log(JSON.stringify(x));
