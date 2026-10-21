import fs from 'node:fs';
const p=JSON.parse(fs.readFileSync('data/glasp_261019/compiled.json','utf8'));
for(const b of p.currentBooks.filter(b=>b.id==='g0990'||b.title.includes('Almost Perfect'))){
 console.log(JSON.stringify({id:b.id,title:b.title,year:b.year,listYear:b.listYear,url:b.purchaseUrl,titleCell:b.titleCell,amazon:b.amazon,production:b.production}).slice(0,4500));
}
const e=JSON.parse(fs.readFileSync('site/enrichment.json','utf8'));
console.log(JSON.stringify({g0990:e.books.g0990}));
