import fs from 'node:fs';const d='data/top200_261022/',s=JSON.parse(fs.readFileSync(d+'captures.json')),m=JSON.parse(fs.readFileSync(d+'manual.json'));
s.books['rem-u0512'].edition={id:'ISBN:9780544716940',pages:304,format:'Hardcover',language:'English',year:2017,url:'https://services.raincoast.com/scripts/b2b.wsc/featured?hh_isbn=9780544716940&ht_orig_from=raincoast',retrieved:'2026-10-22',confidence:'moderate',notes:'Distributor print extent. Library collation is xx + 281 numbered pages; the publisher/distributor extent includes front matter and unnumbered pages.'};
m['ndd372f9d84']={isbn:'9780804136716',refs:['https://www.penguinrandomhouse.com/books/227815/superforecasting-by-philip-e-tetlock-and-dan-gardner/']};
m['rem-u1770']={isbn:'9780521133388',refs:['https://www.cambridge.org/core/books/rationality-in-economics/803FA3EB120F98C8D32A5BD7F5B60C7E']};
fs.writeFileSync(d+'captures.json',JSON.stringify(s,null,2)+'\n');fs.writeFileSync(d+'manual.json',JSON.stringify(m,null,2)+'\n');
const p=d+'collect.mjs';let t=fs.readFileSync(p,'utf8').replaceAll('.sort((a,b)=>b.total-a.total)', '.sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title))');fs.writeFileSync(p,t);
