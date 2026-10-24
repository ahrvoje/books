import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,y,start,end]of[
['Sorting Things Out','ISBN:0262024616','https://countycat.mcfls.org/Record/.b27101174',377,1999,335,365],
['Into the Cool','ISBN:0226739368','https://opac.ramapo.edu/cgi-bin/koha/opac-detail.pl?biblionumber=184494',362,2005,331,345]
])m[t]={evidence:[url],edition:{id,url,pages:pg,year:y,language:'English',format:'hardcover',retrieved:'2026-10-24',confidence:'moderate'},referencePages:{pages:end-start+1,ranges:[{start,end,label:'bibliographical references'}],edition:{id},url,sameEditionAsPG:true,confidence:'moderate',limitation:'Cataloged range, not physical inspection.'}};
write(dir+'/metadata-overrides.json',m);
