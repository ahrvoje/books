import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,y,start,end]of[
['On Politics','CiNii:BB10933711','https://ci.nii.ac.jp/ncid/BB10933711',1114,2012,1029,1052],
['Down Girl: The Logic of Misogyny','IUCAT:16620863','https://iucat.iu.edu/lilly/16620863',338,2018,309,325]
])m[t]={edition:{id,url,pages:pg,year:y,language:'English',format:'hardcover',retrieved:'2026-10-24',confidence:'high'},referencePages:{pages:end-start+1,ranges:[{start,end,label:'bibliographic references'}],edition:{id},url,sameEditionAsPG:true,confidence:'high'}};
write(dir+'/metadata-overrides.json',m);
