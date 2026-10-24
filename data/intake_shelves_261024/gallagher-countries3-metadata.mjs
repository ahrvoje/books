import {dir,read,write} from './capture.mjs';
const v=read(dir+'/veto-overrides.json');v['Czechoslovakia: The State That Failed']={veto:'V1',vetoConfidence:'moderate',vetoReason:'Central causal narrative overextends an undefined nationalist explanation across distinct regimes and underweights contrary democratic evidence, corroborated by two specialist critiques; revisionist conclusions alone are not the veto.'};write(dir+'/veto-overrides.json',v);
const m=read(dir+'/metadata-overrides.json');
const id='OL2337647M',url='https://openlibrary.org/books/OL2337647M';
m['Patriot Game']={evidence:[url],edition:{id,url,pages:310,year:1986,language:'English',format:'print',retrieved:'2026-10-24',confidence:'moderate'},referencePages:{pages:7,ranges:[{start:293,end:299,label:'bibliography'}],edition:{id},url,sameEditionAsPG:true,confidence:'moderate',limitation:'Cataloged range, not physical inspection.'}};
m['Czechoslovakia: The State That Failed']={readerRating:{label:'Goodreads 3.60/5 · 163 ratings',url:'https://www.goodreads.com/en/book/show/7111838-czechoslovakia',retrieved:'2026-10-24',confidence:'moderate',limitation:'Indexed snapshot; not an Amazon aggregate and not used for O15.'}};
m['Netherlands: The Low Sky']={readerRating:{label:'Goodreads 3.56/5 · 57 ratings (edition)',url:'https://www.goodreads.com/work/editions/1911317-the-low-sky-understanding-the-dutch',retrieved:'2026-10-24',confidence:'moderate',limitation:'Indexed 1996 edition snapshot; not summed across editions or used for O15.'}};
write(dir+'/metadata-overrides.json',m);
