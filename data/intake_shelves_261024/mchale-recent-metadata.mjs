import fs from 'node:fs';import {dir,read,write} from './capture.mjs';
const p=dir+'/mchale-recent-decisions.tsv';fs.writeFileSync(p,fs.readFileSync(p,'utf8').replace('The Last Days of Socrates|1954|0|10|399|','The Last Days of Socrates|1954|0|10|-399|').replace('Approximate setting endpoint -399; supplied positive 399 placeholder is corrected by metadata script before calculation.','Setting endpoint -399 for the trial/death; the philosophical arguments also range beyond that setting.'));
const v=read(dir+'/veto-overrides.json');v['Meditations on First Philosophy']={veto:'V5',vetoConfidence:'high',vetoReason:'The dedication explicitly states a central aim of proving God and the soul to persuade unbelievers and secure religious truth; representative Meditations III and V carry it out.'};write(dir+'/veto-overrides.json',v);
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,y,start,end]of[
['Why The Allies Won','AWM:LIB54155','https://www.awm.gov.au/collection/LIB54155',396,1995,367,379],
['The Making of the English Working Class (Modern Classics)','Wellcome:jmzpty3n','https://wellcomecollection.org/works/jmzpty3n',848,1963,833,836],
['Meditations for Mortals: Four weeks to embrace your limitations and make time for what counts','MarkTwain:4575041','https://marktwain.biblio.org/eg/opac/record/4575041',177,2024,165,169]
])m[t]={edition:{id,url,pages:pg,year:y,language:'English',format:'hardcover',retrieved:'2026-10-24',confidence:'high'},referencePages:{pages:end-start+1,ranges:[{start,end,label:'bibliographic references'}],edition:{id},url,sameEditionAsPG:true,confidence:'high',limitation:'Only the cataloged reference section counted; uncounted scattered notes are not inferred.'}};
write(dir+'/metadata-overrides.json',m);
const a=read(dir+'/triaged.json');
for(const[t,note]of[
['An Everlasting Meal: Cooking with Economy and Grace','H3: primary aim is practical cooking proficiency and kitchen procedures, despite philosophical/essay form. Publisher-described lessons and recipes are central: https://search.worldcat.org/title/756363907 and https://books.apple.com/us/book/an-everlasting-meal/id427556669 .'],
['How to Keep House While Drowning','H3: primary aim is to teach cleaning/organization procedures and care-task skills, as shown by the five-things tidying method and practical routines. https://www.kpl.gov/catalog/item/?i=ent%3A%2FSD_ILS%2F0%2FSD_ILS%3A1963240 . Philosophical framing does not change that instructional purpose.']
]){const b=a.find(b=>b.title===t);if(!b)throw Error(t);Object.assign(b,{status:'excluded',note,confidence:'moderate'});}
const soc=a.find(b=>b.title==='The Last Days of Socrates');delete soc.metadata;soc.author='Plato; Hugh Tredennick, translator';
write(dir+'/triaged.json',a);
