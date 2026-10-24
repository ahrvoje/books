import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
for(const[t,isbn,year,pages,start,end,url,format]of [
['Instant: The Story of Polaroid','1616890851',2012,192,177,183,'https://books.google.com/books/about/Instant.html?hl=en&id=6tCg3VZeP5wC','hardcover'],
['The Match King: Ivar Kreuger, The Financial Genius Behind a Century of Wall Street Scandals','1586487434',2009,272,230,235,'https://lawcat.berkeley.edu/record/80151','hardcover'],
['Pragmatism: An Introduction','0745646646',2012,221,202,207,'https://books.google.com/books/about/Pragmatism.html?hl=en&id=L4TBMejHk_YC&output=html_text','paperback']
])m[t]={purchaseUrl:'https://www.amazon.de/dp/'+isbn,evidence:[url],edition:{id:'ISBN:'+isbn,url,pages,year,language:'English',format,retrieved:'2026-10-24',confidence:'moderate',notes:'Numbered extent from catalog or contents.'},referencePages:{pages:end-start+1,confidence:'moderate',ranges:[{start,end,label:'bibliography or works cited'}],edition:{id:'ISBN:'+isbn},url,sameEditionAsPG:true,limitation:'Catalog or contents ranges, not physical page inspection.'}};
write(dir+'/metadata-overrides.json',m);
// A general cultural compendium is not necessarily a technical reference.
const a=read(dir+'/triaged.json');const b=a.find(b=>b.title==='An Incomplete Education');if(b?.status==='excluded'&&b.note.includes('encyclopedic cultural-literacy')){delete b.status;delete b.note;delete b.confidence;}write(dir+'/triaged.json',a);
