import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/books_guru_261021/';
const f=JSON.parse(fs.readFileSync(dir+'c-facts.json','utf8'));
for(const b of f){
 if(b.themeNote.includes('the main subject'))b.themeNote=`T11=${b.T11}: this ${b.kind} centers on ${b.payload}; no predominant listed unwanted theme was established. T12=${b.T12}: its central account concerns ${b.payload}, with political power and finance at most auxiliary.`;
 if(b.id==='bg4ea98dc691')b.reason=b.reason.replace('onpp54and63','on pages 54 and 63');
 if(b.id==='bg67806b87bb')b.structure='The contents and publisher account begin with the Buddha\'s life and develop transmission, compassion and the six paramitas as a sustained religious explanation. Meditation practice appears within that account; it is not primarily a sequential sitting, breathing or technique-procedure manual. The reference gate therefore passes before V5 is applied.';
 if(b.id==='bg43f098cd3c')b.themeNote='T11=-10: dying patients and disease-related clinical experience are central. T12=0: a qualitative clinical inquiry, not political power, finance or philosophical doctrine.';
 if(b.id==='bg42f64a41aa')b.themeNote='T11=-10: aging framed as disease and biomedical intervention is central. T12=0: biological research and translation, not politics or finance, organize the account.';
}
fs.writeFileSync(dir+'c-facts.json',JSON.stringify(f,null,2)+'\n');
