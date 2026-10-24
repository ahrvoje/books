import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json'),rows=read(dir+'/rows.json');
const b=a.find(b=>b.title==='Only Yesterday, the 1920s in America');
if(!b)throw Error('Only Yesterday');
Object.assign(b,{status:'alias',note:'Same work as existing progress-0046; source short title verified against original 1931 contents. Retain assessment and union source IDs only.'});
for(const r of rows.filter(r=>r.newId===b.id)){r.id='progress-0046';delete r.newId;}
write(dir+'/triaged.json',a);write(dir+'/rows.json',rows);
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,y,start,end]of[
['A Financial History of Western Europe','ISBN:0043320880','https://obnb.uk/p9387566-a-financial-history-of-western-europe',525,1984,477,511],
['Deliberating American Monetary Policy','ISBN:9780262019576','https://obnb.uk/p16498849-deliberating-american-monetary-policy-a-textual-analysis',525,2013,469,492]
])m[t]={edition:{id,url,pages:pg,year:y,language:'English',format:'print',retrieved:'2026-10-24',confidence:'high'},referencePages:{pages:end-start+1,ranges:[{start,end,label:'references'}],edition:{id},url,sameEditionAsPG:true,confidence:'high',limitation:'Cataloged reference range and numbered main extent.'}};
m['The Alchemists']={yearConfidence:'high',edition:{id:'ISBN:9780143124993',url:'https://penguinrandomhousehighereducation.com/wp-content/uploads/2018/01/Business-Catalog-2017-low-res.pdf',pages:448,year:2014,language:'English',format:'paperback',retrieved:'2026-10-24',confidence:'high'},referencePages:{pages:16,ranges:[{start:399,end:414,label:'references'}],edition:{id:'OL17667243W-unconfirmed-edition'},url:'https://openlibrary.org/works/OL17667243W/The_alchemists',sameEditionAsPG:false,confidence:'moderate',limitation:'Work-page reference range paired with publisher paperback extent; edition correspondence unconfirmed, estimated ratio.'}};
write(dir+'/metadata-overrides.json',m);
