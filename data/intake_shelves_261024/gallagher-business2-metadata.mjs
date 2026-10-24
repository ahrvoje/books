import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,y,start,end]of[
['The Operator','OL3941900M','https://openlibrary.org/books/OL3941900M/The_operator',670,2001,595,643],
['Down the Asphalt Path','ISBN:0231083904','https://catalog.libraries.vsc.edu/cgi-bin/koha/opac-detail.pl?biblionumber=168265',288,1994,229,276]
])m[t]={evidence:[url],edition:{id,url,pages:pg,year:y,language:'English',format:'print',retrieved:'2026-10-24',confidence:'moderate'},referencePages:{pages:end-start+1,ranges:[{start,end,label:'references'}],edition:{id},url,sameEditionAsPG:true,confidence:'moderate',limitation:'Cataloged range, not physical inspection.'}};
write(dir+'/metadata-overrides.json',m);
