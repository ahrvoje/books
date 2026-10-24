import {dir,read,write} from './capture.mjs';
const v=read(dir+'/veto-overrides.json');
for(const t of ['Chased by the Light','100 Suns','Suspiria De Profundis'])v[t]={veto:'V3',vetoConfidence:'moderate',vetoReason:'Visual or literary experience dominates; isolated observations and framing provide too little transferable explanatory payload across the work.'};
v['The Doors of Perception']={veto:'V1',vetoConfidence:'moderate',vetoReason:'The central inference from an altered subjective experience to universal awareness filtered by the brain is not supported by evidence distinguishing it from competing explanations.'};write(dir+'/veto-overrides.json',v);
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,y,start,end]of[
['Haikai Poet Yosa Buson And The Bashō Revival','BnF:cb41029050r','https://catalogue.bnf.fr/ark:/12148/cb41029050r',308,2007,292,300],
['Japanese Court Poetry','NDL:000006142302','https://ndlsearch.ndl.go.jp/en/books/R100000002-I000006142302',527,1961,489,502]
])m[t]={edition:{id,url,pages:pg,year:y,language:'English',format:'hardcover',retrieved:'2026-10-24',confidence:'high'},referencePages:{pages:end-start+1,ranges:[{start,end,label:'bibliography'}],edition:{id},url,sameEditionAsPG:true,confidence:'high',limitation:'Cataloged bibliography range and numbered page extent.'}};
write(dir+'/metadata-overrides.json',m);
const a=read(dir+'/triaged.json');
for(const[t,author,note]of[
['Practical Criticism','I. A. Richards','H3: specialist literary critical training built around student interpretation exercises and corrective close-reading methods. https://www.english.cam.ac.uk/classroom/pracrit.htm identifies its pedagogical aim. Accessible examples and historical importance do not override the proficiency purpose.'],
['Go-Toba no in Gokuden','Emperor Go-Toba','H3: historical specialist poetic-craft teachings prescribing standards of composition and evaluation. The source points to Brower 1972 translation/commentary in https://gwern.net/doc/japan/poetry/teika/1972-brower-exemperorgotobassecretteachings.pdf . Original treatise has book-form transmission; exclusion rests on specialist instruction, not the English article format.']
]){const b=a.find(b=>b.title===t);if(!b)throw Error(t);Object.assign(b,{status:'excluded',author,note,confidence:'moderate'});}
write(dir+'/triaged.json',a);
