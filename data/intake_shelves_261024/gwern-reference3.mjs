import {dir,read,write} from './capture.mjs';
const m=read(dir+'/metadata-overrides.json');
const title='The Creative Computer',id='ISBN:0670800600',url='https://obnb.uk/p11345846-the-creative-computer-machine-intelligence-and-human-knowledge';
m[title]={evidence:[url],edition:{id,url,pages:263,year:1984,language:'English',format:'hardcover',retrieved:'2026-10-24',confidence:'moderate',notes:'Numbered extent; separately listed plates excluded.'},referencePages:{pages:12,confidence:'moderate',ranges:[{start:237,end:248,label:'bibliography'}],edition:{id},url,sameEditionAsPG:true,limitation:'Catalog range, not physical page inspection.'}};
m['The Ageless Gergel']={readerRating:{label:'Goodreads 4.00/5 · 8 ratings',url:'https://www.goodreads.com/book/show/24821522-the-ageless-gergel',retrieved:'2026-10-24',confidence:'moderate',limitation:'Indexed snapshot, not Amazon; not used for O15.'}};
write(dir+'/metadata-overrides.json',m);
