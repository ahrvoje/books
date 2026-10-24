import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,y,start,end,confidence]of[
['The Blazing World: A New History of Revolutionary England','Folger:1152836','https://catalog.folger.edu/record/1152836',492,2023,439,472,'moderate'],
['Our Posthuman Future: Consequences of the Biotechnology Revolution','NLM:101158706','https://www.ncbi.nlm.nih.gov/nlmcatalog/101158706',256,2002,243,256,'high'],
['Friends: Understanding the Power of our Most Important Relationships','IUCAT:19478856','https://iucat.iu.edu/iub/19478856',424,2021,361,404,'high']
])m[t]={edition:{id,url,pages:pg,year:y,language:'English',format:'hardcover',retrieved:'2026-10-24',confidence},referencePages:{pages:end-start+1,ranges:[{start,end,label:'bibliographic references'}],edition:{id},url,sameEditionAsPG:true,confidence}};
m['The Gospels: A New Translation']={yearConfidence:'low'};write(dir+'/metadata-overrides.json',m);
const a=read(dir+'/triaged.json'),rows=read(dir+'/rows.json');
const b=a.find(b=>b.title.startsWith('Building a Second Brain:'));Object.assign(b,{status:'excluded',note:'H3: main purpose is instruction in digital knowledge-management procedures, the CODE workflow and organizational habits, not sustained explanation of discoveries. Contents: https://library.mycc.gov.my/cgi-bin/koha/opac-detail.pl?biblionumber=838 ; publisher https://www.simonandschuster.com/books/Building-a-Second-Brain/Tiago-Forte/9781982167387 .',confidence:'moderate'});
const d=a.find(b=>b.title==='Meditations on First Philosophy'),variant=a.find(b=>b.title==='Meditations on First Philosophy, with Selections from the Objections and Replies');
if(d&&variant){variant.mergedInto=d.id;for(const r of rows.filter(r=>r.newId===variant.id))r.newId=d.id;}
write(dir+'/triaged.json',a);write(dir+'/rows.json',rows);
const v=read(dir+'/veto-overrides.json');v['The Gospels: A New Translation']={veto:'V5',vetoConfidence:'high',vetoReason:'The nominated work is the four canonical Christian Gospels, scripture; historical translation notes do not change the primary scriptural content. Explicit V5 scripture rule.'};write(dir+'/veto-overrides.json',v);
