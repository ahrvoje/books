import fs from 'node:fs';
const dir='data/top250_261023',books=JSON.parse(fs.readFileSync(dir+'/targets.json'));
const items=[
 ['progress-0739','9780262516822','https://mitpress.mit.edu/9780262013468/chips-and-change/'],
 ['progress-0692','9780262546263','https://mitpress.mit.edu/9780262014243/makers-of-the-microchip/'],
 ['progress-0727','9780262547826','https://mitpress.mit.edu/9780262547826/ibm/'],
 ['progress-0791','9780691292809','https://citylights.com/physical/tesla-inventor-of-the-electrical-age-2/'],
 ['progress-0618','9780691242408','https://ingramacademic.com/products/power-speed-and-form-9780691242408'],
 ['progress-0038','9780815781776','https://www.brookings.edu/books/pasteurs-quadrant/'],
 ['progress-0585','9780714869391','https://library.ines.ac.rw/bib/4652'],
 ['progress-0024','9780691147970','https://assets.press.princeton.edu/catalogs/F10Paper.pdf'],
 ['progress-0717','9783319681443','https://openlibrary.org/books/OL28243936M/The_Design_and_Engineering_of_Curiosity'],
 ['progress-0649','9783030097646','https://link.springer.com/book/10.1007/978-3-319-66219-0']
];
const manual={};
for(const [key,isbn,url]of items){const b=books.find(b=>b.id===key),t=isbn.slice(3,12),n=(11-[...t].reduce((sum,c,i)=>sum+(10-i)*+c,0)%11)%11,id=t+(n===10?'X':n);manual[key]={product:{id,isbn13:isbn,url,title:b.title,author:b.author,format:'Paperback',language:'English',retrieved:'2026-10-24',confidence:'high',limitation:'English paperback ISBN and title/author verified in publisher, distributor, or library edition record. German and US Amazon stock and availability unverified.'}};}
fs.writeFileSync(dir+'/manual-19.json',JSON.stringify(manual,null,2)+'\n');
