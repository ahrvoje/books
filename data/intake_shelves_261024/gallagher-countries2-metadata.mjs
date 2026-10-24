import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,y,start,end]of[
['Why Switzerland?','ISBN:9780521883078','https://assets.cambridge.org/97805218/83078/toc/9780521883078_toc.pdf',404,2015,328,357],
['Distant Neighbours','ISBN:0679724419','https://iucat.iu.edu/iuc/5361823',417,2000,405,407],
['The Congo: From Leopold to Kabila','ISBN:1842770527','https://catalogue.bnf.fr/ark%3A/12148/cb389079157',304,2002,279,293]
])m[t]={...(m[t]||{}),evidence:[url],edition:{id,url,pages:pg,year:y,language:'English',format:'print',retrieved:'2026-10-24',confidence:'moderate'},referencePages:{pages:end-start+1,confidence:'moderate',ranges:[{start,end,label:'notes or bibliography'}],edition:{id},url,sameEditionAsPG:true,limitation:'Published contents/cataloged range, not physical page inspection.'}};
const url='https://kclpure.kcl.ac.uk/portal/en/publications/pakistan-a-hard-country/';
m['Pakistan: A Hard Country']={evidence:[url],edition:{id:'KCL:Pakistan2011',url,pages:560,year:2011,language:'English',format:'print',retrieved:'2026-10-24',confidence:'moderate'},referencePages:{pages:23,ranges:[{start:483,end:505,label:'bibliographical references'}],edition:{id:'KCL:Pakistan-unconfirmed'},url,sameEditionAsPG:false,confidence:'moderate',limitation:'Institutional record lists several edition ISBNs; page/reference match unconfirmed, ratio is an estimate.'}};
write(dir+'/metadata-overrides.json',m);
