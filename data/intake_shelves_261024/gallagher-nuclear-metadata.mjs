import {dir,read,write} from './capture.mjs';
const v=read(dir+'/veto-overrides.json');v['The Nuclear Express']={veto:'V1',vetoConfidence:'moderate',vetoReason:'Specialist review documents numerous factual errors and unsupported central proliferation claims, with uncertainty presented as settled.'};write(dir+'/veto-overrides.json',v);
const m=read(dir+'/metadata-overrides.json');
const title='Building the H-Bomb',id='OL27182162M',url='https://openlibrary.org/books/OL27182162M/Building_the_H_bomb';
m[title]={evidence:[url],edition:{id,url,pages:221,year:2015,language:'English',format:'print; binding unspecified',retrieved:'2026-10-24',confidence:'moderate',notes:'Numbered extent, catalog record lists multiple ISBNs.'},referencePages:{pages:4,confidence:'moderate',ranges:[{start:205,end:208,label:'bibliographical references'}],edition:{id},url,sameEditionAsPG:true,limitation:'Catalog range, not physical page inspection.'}};
m['Igniting the Light Elements']={purchaseUrl:'https://www.amazon.de/dp/128882498X',yearConfidence:'high',evidence:['https://www.abebooks.com/9781288824984/Igniting-Light-Elements-Alamos-Thermonuclear-128882498X/plp']};
write(dir+'/metadata-overrides.json',m);
