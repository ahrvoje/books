import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,start,end]of[
['The Origins of Value','ISBN:0195175719','https://natlib.govt.nz/records/21982139',404,359,394],
['Tulipmania','Daystar:94058','https://library.daystar.ac.ke/bib/94058',425,327,397]
])m[t]={evidence:[url],edition:{id,url,pages:pg,year:t==='Tulipmania'?2007:2005,language:'English',format:'print or electronic reproduction',retrieved:'2026-10-24',confidence:'moderate',notes:'Numbered extent from matching catalog record.'},referencePages:{pages:end-start+1,confidence:'moderate',ranges:[{start,end,label:'bibliographical references'}],edition:{id},url,sameEditionAsPG:true,limitation:'Catalog range, not physical page inspection.'}};
write(dir+'/metadata-overrides.json',m);
