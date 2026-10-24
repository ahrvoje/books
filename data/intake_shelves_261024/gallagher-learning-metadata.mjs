import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json');
for(const[t,author,note,confidence]of[
['The Luxury Strategy','Jean-Noël Kapferer and Vincent Bastien','H3: professional luxury-brand management training, explicitly providing a blueprint and rules for marketing, distribution, pricing and brand operation. Historical examples support a specialist proficiency purpose. Evidence: https://books.google.com/books/about/The_Luxury_Strategy.html?id=PecJAQAAMAAJ and publisher https://cdn.koganpage.com/files/2025/02/47b49610-f382-11ef-8244-c7410f20b324-Trade%20Mailer%20Autumn%202025%20Catalogue_US_Web.pdf .','high'],
["The Lifetime Learner's Guide to Reading and Learning",'Gary Hoover','H3: procedural reading/study guide centered on selecting, extracting, retaining and connecting information, supplemented by a recommended-book list. Main purpose is a method of practice, not sustained explanation of discoveries. Evidence: direct reader report https://www.jermainebrown.org/books/the-lifetime-learners-guide-to-reading-and-learning ; publication verified https://openlibrary.org/authors/OL8653745A/Gary_Hoover . Eligibility confidence moderate because full text was not available.','moderate']
]){const b=a.find(b=>b.title===t);if(!b)throw Error(t);Object.assign(b,{author,status:'excluded',note,confidence});}
write(dir+'/triaged.json',a);
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,y,start,end]of[
['Investing: The Last Liberal Art','OL3320461M','https://openlibrary.org/works/OL2394150W/Investing',224,2000,197,214],
['A History of Interest Rates','ISBN:9780471732839','https://www.wiley.com/en-ca/a-history-of-interest-rates-4th-edition-p-9780471732839',736,2005,673,692]
])m[t]={evidence:[url],edition:{id,url,pages:pg,year:y,language:'English',format:'print',retrieved:'2026-10-24',confidence:'moderate'},referencePages:{pages:end-start+1,ranges:[{start,end,label:'references or notes'}],edition:{id},url,sameEditionAsPG:true,confidence:'moderate',limitation:'Cataloged or publisher contents range, not physical inspection.'}};
write(dir+'/metadata-overrides.json',m);
