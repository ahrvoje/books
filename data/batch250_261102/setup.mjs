import fs from 'node:fs';
const old='data/value250_261102',d='data/batch250_261102';fs.mkdirSync(d+'/raw',{recursive:true});
for(const n of ['prepare','fresh-worker','scan','harvest-cross','review-candidates','select','audit','finalize','validate','screen','cache']){let s=fs.readFileSync(old+'/'+n+'.mjs','utf8').replaceAll(old,d).replace("x.name!=='value250_261102'","x.name!=='batch250_261102'").replace('analysis_values250_','analysis_batch250_');fs.writeFileSync(d+'/'+n+'.mjs',s);}
fs.writeFileSync(d+'/selected.json','[]');fs.writeFileSync(d+'/screened-keys.json','[]');
let a=fs.readFileSync(d+'/audit.mjs','utf8');a=a.replace('Print-page counts must identify a print edition, not Kindle or audio.','Only when field is pages must the edition be print. For amazon ratings, Kindle is allowed and page counts are irrelevant.');fs.writeFileSync(d+'/audit.mjs',a);
let s=fs.readFileSync(d+'/fresh-worker.mjs','utf8');const start=s.indexOf(' queue=t.map'),end=s.indexOf('\n}',start);
s=s.slice(0,start)+` queue=[];for(let i=0;i<t.length;i+=2){const books=t.slice(i,i+2);queue.push({stem:'batch-'+String(start+i).padStart(4,'0'),bookId:books[0].id,bookIds:books.map(b=>b.id),prompt:'site:amazon.com ('+books.map(b=>'"'+b.title.split(':')[0]+'" '+b.author).join(' OR ')+') "global ratings"',task:'Find Amazon product rating aggregates for both named books. Return source evidence for each.'});}`+s.slice(end);
s=s.replace('bookId:x.bookId,retrieved','bookId:x.bookId,bookIds:x.bookIds,retrieved');fs.writeFileSync(d+'/batch-worker.mjs',s);
