import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
const id='OL27087635M',url='https://openlibrary.org/books/OL27087635M/Simple_heuristics_that_make_us_smart';
m['Simple Heuristics that Make Us Smart']={edition:{id,url,pages:416,year:1999,language:'English',format:'electronic edition of 1999 text',retrieved:'2026-10-24',confidence:'moderate'},referencePages:{pages:30,ranges:[{start:367,end:396,label:'references'}],edition:{id},url,sameEditionAsPG:true,confidence:'moderate',limitation:'Cataloged page range; not a physical page audit.'},evidence:[url]};
write(dir+'/metadata-overrides.json',m);
