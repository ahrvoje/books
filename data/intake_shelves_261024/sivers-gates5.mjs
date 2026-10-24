import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json');
for(const[t,note]of Object.entries({
'Hiring Smart':'H3: specialist recruitment/interview procedures organized as 45 actionable selection strategies; primary purpose is improving hiring proficiency. https://books.apple.com/us/book/hiring-smart/id422538311 and https://talentstar.com/wp-content/uploads/2021/07/AIA_HiringSmart_2005.pdf',
'Methods of Persuasion':'H3: a seven-step training process for applying psychological influence techniques. Explanatory research serves skill acquisition rather than a sustained general account of discovery. https://books.google.com/books/about/Methods_of_Persuasion.html?id=PVjUngEACAAJ',
'The Obsolete Employee':'H3: operational outsourcing manual. Captured source notes give project templates, bid requirements, interview scripts and implementation procedures as the central payload. Identity and 2007 publication: https://openlibrary.org/authors/OL3007653A/Michael_J._Russer'
})){const b=a.find(b=>b.title===t);if(!b)throw Error(t);Object.assign(b,{status:'excluded',note,confidence:'moderate'});}
write(dir+'/triaged.json',a);
const v=read(dir+'/veto-overrides.json');v['Cambodia’s Curse']={veto:'V1',vetoConfidence:'moderate',vetoReason:'The specialist Contemporary Southeast Asia review identifies concrete errors and central unsupported inference from an allegedly unchanging national culture to contemporary failure, while acknowledging valuable reporting in much of the book.'};write(dir+'/veto-overrides.json',v);
const m=read(dir+'/metadata-overrides.json');m['Conspiracy of the Rich']={...(m['Conspiracy of the Rich']||{}),evidence:['https://www.imf.org/en/-/media/files/data/2019/2019-fsi-guide.pdf'],yearConfidence:'high'};write(dir+'/metadata-overrides.json',m);
