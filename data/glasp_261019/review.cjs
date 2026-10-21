const fs=require('fs');
const dir=__dirname;
const inventory=require('./inventory.json');
const catalogs=fs.readdirSync(dir+'/catalog').filter(f=>f.endsWith('.json')).flatMap(f=>{const b=JSON.parse(fs.readFileSync(dir+'/catalog/'+f));return (b.data?.docs||[]).map(d=>({...d,evidence:b.url}));});
const args=process.argv.slice(2), category=args[0];
const books=inventory.books.filter(b=>b.appearances[0].category===category).slice(+(args[1]||0),args[2]?+args[2]:undefined);
for(const b of books){const amazon=JSON.parse(fs.readFileSync(dir+'/amazon/'+b.id+'.json'));const a=amazon.selected;const c=catalogs.filter(c=>c.isbn?.includes(b.appearances[0].asin));console.log(JSON.stringify({id:b.id,title:b.title,author:b.author,prior:b.priorCandidates.map(p=>[p.id,p.status,p.title]),year:c.map(c=>[c.first_publish_year,c.title,c.author_name,c.key]),description:a?.description?.replace(/^.*?>/,'').slice(0,2200),details:a?.details,count:a?.count,star:a?.star,url:a?.url}));}
