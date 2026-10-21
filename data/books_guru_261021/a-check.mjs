import fs from 'node:fs';
import crypto from 'node:crypto';
const dir='data/books_guru_261021/';
const bytes=fs.readFileSync(dir+'a-assessments.json');
const assessments=JSON.parse(bytes);
const input=JSON.parse(fs.readFileSync(dir+'a-final-input.json','utf8'));
const transferred=new Set([89,90,91,93,97,101,103,105,106,108,112,114,115,116,117,118,119,121,123,124].map(i=>input[i].id));
const expected=new Map(input.filter(x=>!transferred.has(x.id)).map(x=>[x.id,x]));
const seen=new Set();
const errors=[];
const max=[20,17,15,12,10,9,7,5,3,2];
const gates=['BOOK_FORM','FICTION','REFERENCE','V1','V2','V3','V4','V5'];
const check=(condition,message)=>{if(!condition)errors.push(message);};
for(const d of assessments){
 check(expected.has(d.id),'Unexpected '+d.id);check(!seen.has(d.id),'Duplicate '+d.id);seen.add(d.id);
 for(const k of gates)check(typeof d.gateReview?.[k]==='string'&&d.gateReview[k].length>15,'Missing gate '+d.id+' '+k);
 check(d.evidence?.length>0,'Missing evidence '+d.id);for(const url of d.evidence||[])check(/^https?:\/\//.test(url),'Non-URL evidence '+d.id);
 check(['high','moderate','low'].includes(d.confidence)&&['high','moderate','low'].includes(d.eligibilityConfidence),'Missing confidence '+d.id);
 if(d.status==='excluded'){
  check(['FICTION','REFERENCE'].includes(d.exclusion),'Bad exclusion '+d.id);
  for(const k of ['raw','notes','year','periodEnd','T11','T12','amazon','enrichment'])check(!(k in d),'Scored exclusion '+d.id+' '+k);
  continue;
 }
 check(['recommended','vetoed'].includes(d.status),'Bad status '+d.id);
 check(d.raw?.length===10&&d.notes?.length===10,'Missing criteria '+d.id);
 d.raw?.forEach((x,i)=>check(Number.isFinite(x)&&x>=0&&x<=max[i],'Attainment bound '+d.id+' '+i));
 check(d.notes.every(x=>typeof x==='string'&&x.length>15),'Empty criterion note '+d.id);
 check(Number.isInteger(d.year)&&d.year<=2026,'Year '+d.id);
 check(d.periodEnd===null||Number.isInteger(d.periodEnd),'Period '+d.id);
 check([0,-10].includes(d.T11)&&[0,-10].includes(d.T12),'Deduction flag '+d.id);
 for(const k of ['yearNote','periodNote','themeNote'])check(typeof d[k]==='string'&&d[k].length>15,'Missing rationale '+d.id+' '+k);
 check(d.amazon?.count===null&&d.amazon?.attempts?.length>0,'Rating fallback '+d.id);
 for(const a of d.amazon.attempts)check(fs.existsSync(a.evidence),'Missing actual attempt '+d.id);
 check(d.status==='vetoed'?d.veto.length>0:d.veto.length===0,'Veto inconsistency '+d.id);
 for(const m of d.enrichment.connections.mechanisms){
  check(m.domains.length>=2,'Mechanism domains '+d.id);
  check(new Set(Object.values(m.roles)).size>=m.domains.length,'Mechanism roles '+d.id);
  for(const domain of m.domains)check(d.enrichment.domains[domain]&&m.roles[domain],'Unsupported mechanism domain '+d.id+' '+domain);
 }
}
for(const id of expected.keys())check(seen.has(id),'Missing '+id);
const scored=assessments.filter(d=>d.raw);
const result={valid:errors.length===0,errors,total:assessments.length,expected:expected.size,counts:Object.fromEntries(['recommended','vetoed','excluded'].map(s=>[s,assessments.filter(d=>d.status===s).length])),exclusions:Object.fromEntries(['FICTION','REFERENCE'].map(s=>[s,assessments.filter(d=>d.exclusion===s).length])),scored:scored.length,editionPages:scored.filter(d=>d.enrichment.edition?.pages).length,mechanisms:scored.reduce((n,d)=>n+d.enrichment.connections.mechanisms.length,0),unknownRatings:scored.filter(d=>d.amazon.count===null).length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')};
fs.writeFileSync(dir+'a-validation.json',JSON.stringify(result,null,2)+'\n');console.log(result);if(errors.length)process.exitCode=1;
