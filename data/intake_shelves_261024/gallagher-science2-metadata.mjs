import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
const id='ISBN:0060171332',url='https://catalog.libraries.vsc.edu/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=182184';
m['Creativity']={evidence:[url],edition:{id,url,pages:456,year:1996,language:'English',format:'hardcover',retrieved:'2026-10-24',confidence:'moderate'},referencePages:{pages:14,ranges:[{start:429,end:442,label:'bibliographical references'}],edition:{id},url,sameEditionAsPG:true,confidence:'moderate',limitation:'Cataloged section, not physical inspection.'}};
m['The New Spaniards']={...(m['The New Spaniards']||{}),evidence:['https://www.john-hooper.com/books/the-new-spaniards/','https://www.penguinrandomhouse.com/books/300349/the-new-spaniards-by-john-hooper/'],yearConfidence:'high'};
write(dir+'/metadata-overrides.json',m);
