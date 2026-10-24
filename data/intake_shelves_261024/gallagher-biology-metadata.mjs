import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,y,start,end]of[
['The Emergence of Life on Earth','OL36849M','https://openlibrary.org/books/OL36849M/The_emergence_of_life_on_Earth',327,2000,285,300],
['The Path to the Double Helix','ISBN:0333140176','https://wellcomecollection.org/works/bmuvu3wg',510,1974,445,496],
["Mendel's Demon",'ISBN:0743201612','https://wellcomecollection.org/works/fj7deggu',324,2001,304,315]
])m[t]={evidence:[url],edition:{id,url,pages:pg,year:y,language:'English',format:'print',retrieved:'2026-10-24',confidence:'moderate'},referencePages:{pages:end-start+1,ranges:[{start,end,label:'bibliographical references'}],edition:{id},url,sameEditionAsPG:true,confidence:'moderate',limitation:'Cataloged numbered range, not physical inspection.'}};
write(dir+'/metadata-overrides.json',m);
