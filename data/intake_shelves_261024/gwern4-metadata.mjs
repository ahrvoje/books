import {dir,read,write} from './capture.mjs';
const v=read(dir+'/veto-overrides.json');
for(const[t,rule,confidence,reason]of[
['The Book of Lord Shang','V5','high','The original political text prescribes systematic popular weakness, harsh coercion and subordination to conquest and ruler power. Analytical commentary does not turn the underlying advocacy into a merely descriptive history.'],
['Born to Rebel','V1','moderate','The broad birth-order personality and historical-rebellion explanation exceeds support from stronger subsequent studies. Some later associations and smaller supportive studies are acknowledged; the veto is against causal overreach, not a claim of exactly zero possible birth-order effects.'],
['Hereditary Genius','V1','high','The central inference from reputation and elite family concentration to inherited natural ability, extended to racial hierarchy, fails to separate shared environment, access and selection. A genuine heritable component to ability does not rescue these particular inferences.'],
['Provincial Letters','V5','high','The central polemical purpose is to defend Jansenist religious doctrine and establish correct Christian morality against Jesuit positions, verified in representative text.'],
['Zen Flesh, Zen Bones','V5','high','Primary religious teachings and enlightenment practices are offered for spiritual realization rather than examined only historically.']
])v[t]={veto:rule,vetoConfidence:confidence,vetoReason:reason};write(dir+'/veto-overrides.json',v);
const m=read(dir+'/metadata-overrides.json');
m['The Book of Lord Shang']={yearConfidence:'low'};
m['Good and Real']={edition:{id:'Strathmore:142184',url:'https://library.strathmore.edu/Record/142184',pages:347,year:2006,language:'English',format:'print-based electronic',retrieved:'2026-10-24',confidence:'high'},referencePages:{pages:5,ranges:[{start:333,end:337,label:'references'}],edition:{id:'Strathmore:142184'},url:'https://library.strathmore.edu/Record/142184',sameEditionAsPG:true,confidence:'high',limitation:'Cataloged main numbered extent and bibliography range.'}};
m['Ketamine']={edition:{id:'OL9502283M',url:'https://openlibrary.org/books/OL9502283M/Ketamine',pages:354,year:2001,language:'English',format:'paperback',retrieved:'2026-10-24',confidence:'moderate'},referencePages:{pages:34,ranges:[{start:302,end:335,label:'references'}],edition:{id:'MAPS:2004-PDF'},url:'https://maps.org/images/pdf/books/K-DreamsKJansenMAPS.pdf',sameEditionAsPG:false,confidence:'high',limitation:'2004 PDF contents paired with 2001 catalog extent; cross-edition estimated ratio.'}};
write(dir+'/metadata-overrides.json',m);
