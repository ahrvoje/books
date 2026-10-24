import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
const t='The Essentials of Hinduism',id='OL3957819M',url='https://openlibrary.org/books/OL3957819M/The_essentials_of_Hinduism';
m[t]={...(m[t]||{}),evidence:[url],edition:{id,url,pages:234,year:2002,language:'English',format:'print; binding unspecified',retrieved:'2026-10-24',confidence:'moderate',notes:'Second edition, numbered extent; original publication remains 1994.'},referencePages:{pages:2,confidence:'moderate',ranges:[{start:199,end:200,label:'bibliographical references'}],edition:{id},url,sameEditionAsPG:true,limitation:'Catalog range, not physical page inspection.'}};
for(const [title,label,url] of [
['The Tao of George Carlin','Goodreads 4.09/5 · 47 ratings','https://www.goodreads.com/book/show/29758213-the-tao-of-george-carlin'],
['Evolution, Thermodynamics and Information','Goodreads 5.00/5 · 4 ratings','https://www.goodreads.com/en/book/show/4342462-evolution-thermodynamics-and-information']
])m[title]={...(m[title]||{}),readerRating:{label,url,retrieved:'2026-10-24',confidence:'moderate',limitation:'Indexed snapshot; aggregate may change. Not an Amazon count and not used for O15.'}};
write(dir+'/metadata-overrides.json',m);
