import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
const id='ISBN:9780521197205',url='https://assets.cambridge.org/97805211/97205/frontmatter/9780521197205_frontmatter.pdf';
m['Ireland: A History']={edition:{id,url,pages:625,year:2010,language:'English',format:'hardcover',retrieved:'2026-10-24',confidence:'high'},referencePages:{pages:7,ranges:[{start:580,end:586,label:'notes'}],edition:{id},url,sameEditionAsPG:true,confidence:'moderate',limitation:'Contents establish notes section before index; exact reference density within notes not inspected.'},evidence:[url,'https://catalog.libraries.vsc.edu/cgi-bin/koha/opac-detail.pl?biblionumber=426453']};
write(dir+'/metadata-overrides.json',m);
