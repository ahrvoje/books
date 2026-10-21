import fs from 'node:fs';
const dir='data/top200_261022/',j=p=>JSON.parse(fs.readFileSync(p)),s=j(dir+'captures.json'),m=j(dir+'manual.json');
const rows=[
['rem-u1660','9780241718896',400,'Hardcover',2024,'https://wp.penguin.co.uk/wp-content/uploads/2025/01/AW24-Press-Catalogue-online.pdf','Publisher autumn 2024 catalog, English translation; edition date does not reset original production age.'],
['rem-u1696','9789463823623',344,'Paperback',2024,'https://www.managementboek.nl/boek/9789463823623/focus-marc-hijink','Exact English print ISBN and extent. Publisher combined-format page mixes Dutch and English ISBNs and reports 320; use the explicit English-edition retailer record, corroborated by Hanzestudybook. Confidence moderate due to discrepancy.'],
['rem-u1833','9780394514475',242,'Print book',1982,'https://ci.nii.ac.jp/ncid/BA10205127','Library physical description and English language; binding type not specified.'],
['rem-u1666','9781839763427',336,'Hardcover',2024,'https://penguinrandomhousehighereducation.com/book/?isbn=9781839763427','Publisher exact print edition.'],
['rem-u1754','9780300273779',384,'Hardcover',2024,'https://yalebooks.yale.edu/book/9780300273779/making-sense-of-chaos/','Publisher exact US print edition.'],
['rem-u1169','9780805092639',287,'Print book',2013,'https://catalog.ocls.org/Record/.b18954261','Library first American print edition, English; binding not specified.'],
['rem-u1663','9780861543755',288,'Hardcover',2022,'https://www.simonandschuster.com/books/Volt-Rush/Henry-Sanderson/9780861543755','Publisher exact print edition.'],
['rem-u1670','9781250840547',288,'Print book',2024,'https://us.macmillan.com/books/9781250840547/undergroundempire/','Publisher print product; 2024 edition, original work remains 2023.'],
['rem-u1770','9780521871358',388,'Hardcover',2007,'https://www.cambridge.org/core/books/rationality-in-economics/803FA3EB120F98C8D32A5BD7F5B60C7E','Publisher hardback metadata: 388 pages; paperback has a separate 386-page extent.'],
['rem-u1850','9780593185742',480,'Hardcover',2024,'https://catalog.losgatosca.gov/Record/575805','Exact hardcover ISBN; extent corroborated by publisher and Kirkus edition metadata.']
];
for(const [id,isbn,pages,format,year,url,notes] of rows){s.books[id].edition={id:'ISBN:'+isbn,pages,format,language:'English',year,url,retrieved:'2026-10-22',confidence:'moderate',notes};m[id]={isbn,refs:[url]};}
const b=s.books['rem-u1661'],a=b.attempts.find(a=>a.count===8&&a.productId==='1138038385');a.authorMatch=true;a.identityNote='Decode HTML entity &ouml; to ö: Per Högselius matches the catalog author.';b.amazon=a;
const e=b.attempts.find(a=>a.pages===192&&a.format==='Paperback');b.edition={id:'ISBN:'+e.productId,pages:e.pages,format:e.format,language:e.language,year:e.year,url:e.url,retrieved:e.retrieved,confidence:'high',notes:'Exact print metadata; author entity decoded to Per Högselius.'};
fs.writeFileSync(dir+'captures.json',JSON.stringify(s,null,2)+'\n');fs.writeFileSync(dir+'manual.json',JSON.stringify(m,null,2)+'\n');
