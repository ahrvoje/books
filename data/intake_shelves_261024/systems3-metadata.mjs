import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
const t='Hidden Order',id='ISBN:0201407930',url='https://catalogue.umu.ac.ug/cgi-bin/koha/opac-detail.pl?biblionumber=37738';
m[t]={evidence:[url],edition:{id,url,pages:185,year:1995,language:'English',format:'print; binding unspecified',retrieved:'2026-10-24',confidence:'moderate',notes:'Numbered extent; preliminary pages excluded.'},referencePages:{pages:3,confidence:'moderate',ranges:[{start:173,end:175,label:'bibliography'}],edition:{id},url,sameEditionAsPG:true,limitation:'Catalog range, not physical page inspection.'}};
write(dir+'/metadata-overrides.json',m);
