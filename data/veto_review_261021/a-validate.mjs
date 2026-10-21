import fs from 'node:fs';
import crypto from 'node:crypto';
const base='data/veto_review_261021/';
const input=JSON.parse(fs.readFileSync(base+'a-input.json','utf8'));
const decisions=JSON.parse(fs.readFileSync(base+'a-decisions.json','utf8'));
const seen=new Set();
const gates=['BOOK_FORM','FICTION','REFERENCE','V1','V2','V3','V4','V5'];
for(const d of decisions){
 if(!input.some(b=>b.id===d.id)||seen.has(d.id))throw Error('Identity '+d.id);
 seen.add(d.id);
 if(!['recommended','vetoed','excluded'].includes(d.status))throw Error('Status '+d.id);
 if(!gates.every(k=>typeof d.gateReview[k]==='string'&&d.gateReview[k].length>20))throw Error('Gates '+d.id);
 if(d.status!=='excluded'&&(d.notes.length!==10||new Set(d.notes).size!==10))throw Error('Notes '+d.id);
 if((d.status==='vetoed')!==(d.veto.length>0))throw Error('Veto mismatch '+d.id);
 if(!['high','moderate','low'].includes(d.eligibilityConfidence)||!['high','moderate','low'].includes(d.scoreConfidence))throw Error('Confidence '+d.id);
 if(d.evidence.some(x=>typeof x!=='string'||(!x.startsWith('https://')&&!fs.existsSync(x.split('#')[0]))))throw Error('Evidence '+d.id);
 if(/\bH[12]\b|\bnull\b/.test(JSON.stringify([d.reason,d.notes,d.reassessment,d.gateReview])))throw Error('Stale prose '+d.id);
 if(d.changes?.raw&&d.changes.raw.some((x,i)=>!Number.isFinite(x)||x<0||x>[20,17,15,12,10,9,7,5,3,2][i]))throw Error('Raw '+d.id);
}
if(seen.size!==119||seen.size!==input.length)throw Error('Missing decisions');
const counts=decisions.reduce((r,d)=>(r[d.status]=(r[d.status]||0)+1,r),{});
const hash=crypto.createHash('sha256').update(fs.readFileSync(base+'a-decisions.json')).digest('hex');
console.log(JSON.stringify({count:seen.size,counts,changes:decisions.filter(d=>d.changes).map(d=>({id:d.id,changes:d.changes})),sha256:hash},null,2));
