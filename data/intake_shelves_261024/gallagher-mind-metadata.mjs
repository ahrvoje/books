import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,y,start,end]of[
['The Emotional Brain','ISBN:0684803828','https://www.ncbi.nlm.nih.gov/nlmcatalog/9704030',384,1996,335,372],
["Descartes's Error",'LCCN:94028473','https://www.loc.gov/item/94028473/',312,1994,269,297],
['Evolving the Mind','OL1113466M','https://openlibrary.org/books/OL1113466M/Evolving_the_mind',329,1996,299,315],
['A History of the Mind','Wellcome:h5bra2b6','https://wellcomecollection.org/works/h5bra2b6',238,1999,229,234]
])m[t]={...(m[t]||{}),evidence:[url],edition:{id,url,pages:pg,year:y,language:'English',format:'print; binding unspecified',retrieved:'2026-10-24',confidence:'moderate',notes:'Cataloged numbered extent.'},referencePages:{pages:end-start+1,confidence:'moderate',ranges:[{start,end,label:'bibliography or references'}],edition:{id},url,sameEditionAsPG:true,limitation:'Catalog range, not physical page inspection.'}};
m['Evolving the Mind'].readerRating={label:'Goodreads 3.52/5 · 23 ratings',url:'https://www.goodreads.com/en/book/show/789114.Evolving_the_Mind',retrieved:'2026-10-24',confidence:'moderate',limitation:'Indexed aggregate snapshot; not Amazon and not used for O15.'};
write(dir+'/metadata-overrides.json',m);
