import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json'),id='ISBN:9781107069879',url='https://assets.cambridge.org/97811070/69879/frontmatter/9781107069879_frontmatter.pdf';
m['The Qing Empire and the Opium War']={evidence:[url,'https://books.google.com/books?id=DVIYDQAAQBAJ'],yearConfidence:'high',edition:{id,url,pages:549,year:2016,language:'English',format:'hardcover',retrieved:'2026-10-24',confidence:'high'},referencePages:{pages:6,ranges:[{start:531,end:536,label:'select bibliography'}],edition:{id},url,sameEditionAsPG:true,confidence:'high',limitation:'Counted bibliography section only; dispersed notes not quantified.'}};
write(dir+'/metadata-overrides.json',m);
