import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
const t='Critical Assembly',url='https://openlibrary.org/books/OL1732038M/Critical_assembly',id='OL1732038M';
m[t]={...(m[t]||{}),evidence:[url],edition:{id,url,pages:509,year:1993,language:'English',format:'hardcover',retrieved:'2026-10-24',confidence:'moderate',notes:'Numbered extent from catalog; preliminary pages excluded consistently.'},referencePages:{pages:75,confidence:'moderate',ranges:[{start:418,end:492,label:'bibliographical references'}],edition:{id},url,sameEditionAsPG:true,limitation:'Catalog range, not physical page inspection.'}};
write(dir+'/metadata-overrides.json',m);
