import fs from 'node:fs';
const dir='data/rule_review_261020/';
const read=f=>JSON.parse(fs.readFileSync(f,'utf8'));
const inputs=read(dir+'excluded_b-input.json');
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]/g,'');
const cats=fs.readdirSync('data/glasp_261019/catalog').flatMap(f=>read('data/glasp_261019/catalog/'+f).data?.docs||[]);
const inv=read('data/glasp_261019/inventory.json').books;
const out=inputs.map(b=>{
 const ids=[...new Set([...b.priorRecords.map(p=>p.id),...(b.sourceIds||[])])];
 const cached=ids.filter(id=>fs.existsSync('data/glasp_261019/amazon/'+id+'.json')).map(id=>({file:'data/glasp_261019/amazon/'+id+'.json',...read('data/glasp_261019/amazon/'+id+'.json')}));
 const isbns=ids.flatMap(id=>inv.find(x=>x.id===id)?.appearances?.map(x=>x.asin)||[]);
 const matches=cats.filter(c=>isbns.some(isbn=>c.isbn?.includes(isbn)) || norm(c.title)===norm(b.title));
 const lines=b.analysisFiles.flatMap(f=>fs.readFileSync(f,'utf8').split(/\r?\n/).filter(l=>norm(l).includes(norm(b.title))).map(text=>({file:f,text})));
 return {reviewId:b.reviewId,title:b.title.trim(),author:b.author.trim(),sources:[...new Set(b.priorRecords.flatMap(p=>p.sources||[]))],priorReasons:b.priorRecords.map(p=>p.eligibility||p.reason),evidence:[...new Set(b.priorRecords.flatMap(p=>p.evidence||[]))],catalog:matches.map(c=>({key:c.key,title:c.title,author_name:c.author_name,first_publish_year:c.first_publish_year,publish_year:c.publish_year,isbn:c.isbn})),amazon:cached,analysisLines:lines};
});
fs.writeFileSync(dir+'excluded_b-evidence.json',JSON.stringify(out,null,2)+'\n');
console.log(out.length+' evidence packets');
