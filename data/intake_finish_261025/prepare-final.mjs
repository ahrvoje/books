import fs from 'node:fs';
const d='data/intake_finish_261025/';
let b=fs.readFileSync('data/intake_rest_261025/build-inputs.mjs','utf8').replaceAll('data/intake_rest_261025/','data/intake_finish_261025/').replaceAll('data/intake_large_261024/compiled.json','data/intake_rest_261025/compiled.json').replace("id:'rest-'","id:'finish-'");
b=b.replace("[[111,['g0950']],[130,['bg188b3be3cd','shelf-57f1c44d2300']]]","[]");
fs.writeFileSync(d+'build-inputs.mjs',b);
fs.writeFileSync(d+'nonbooks.json','[]\n');
let s=fs.readFileSync('data/intake_rest_261025/process.mjs','utf8').replaceAll('data/intake_rest_261025','data/intake_finish_261025').replaceAll('data/intake_large_261024/compiled.json','data/intake_rest_261025/compiled.json').replaceAll('261025_0116','261025_0122').replaceAll("'rest-ex-'","'finish-ex-'");
// Preserve a documented ratio even when edition matching cannot be confirmed.
s=s.replace('referenceEdition:b.referencePages==null?null:edition','referenceEdition:b.referencePages==null?null:(b.referenceEdition||edition)').replace('sameEdition:b.referencePages!=null','sameEdition:b.referencePages!=null&&b.sameEdition!==false').replace("confidence:b.referencePages==null?'unknown':'moderate'","confidence:b.referencePages==null?'unknown':b.sameEdition===false?'low':'moderate'");
s=s.replace(" if(b.pages>0)editions[b.id]",` if(b.referencePages!=null&&b.sameEdition===false)b.bonusAssessment.reason='Estimate: documented reference count '+b.referencePages+' and total pages '+b.pages+'; matching editions are unconfirmed. RD = '+fmt(b.bonuses.RD)+'. Reference count source: '+b.referenceUrl;
 if(b.pages>0)editions[b.id]`);
s=s.replace("edition:b.referencePages==null?null:{id:edition}","edition:b.referencePages==null?null:{id:b.referenceEdition||edition}").replace("url:b.referencePages==null?'':b.metadata","url:b.referencePages==null?'':(b.referenceUrl||b.metadata)").replace("sameEditionAsPG:b.referencePages!=null","sameEditionAsPG:b.referencePages!=null&&b.sameEdition!==false");
fs.writeFileSync(d+'process.mjs',s);
let v=fs.readFileSync('data/intake_rest_261025/verify.mjs','utf8').replaceAll('data/intake_rest_261025/','data/intake_finish_261025/').replaceAll('data/intake_large_261024/','data/intake_rest_261025/').replace('closedCandidates,629','closedCandidates,479');
fs.writeFileSync(d+'verify.mjs',v);
