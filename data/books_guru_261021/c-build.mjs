import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/books_guru_261021/';
const input=JSON.parse(fs.readFileSync(dir+'c-input.json','utf8'));
const byId=new Map(input.map(x=>[x.id,x]));
const ex=fs.readFileSync(dir+'c-exclusions.txt','utf8').trim().split(/\r?\n/).map(x=>x.split('|'));
const facts=fs.existsSync(dir+'c-facts.json')?JSON.parse(fs.readFileSync(dir+'c-facts.json','utf8')):[];
const skips=fs.existsSync(dir+'c-skips.json')?JSON.parse(fs.readFileSync(dir+'c-skips.json','utf8')):[];
const amazon=fs.existsSync(dir+'c-amazon-audit.json')?JSON.parse(fs.readFileSync(dir+'c-amazon-audit.json','utf8')):{};
const max=[20,17,15,12,10,9,7,5,3,2];
const assessments=ex.map(([id,exclusion,url,reason])=>{
 const b=byId.get(id); assert(b,id);
 const gateReview={BOOK_FORM:'Pass: the cited publication record identifies this published book.',FICTION:exclusion==='FICTION'?reason:'Pass: the cited work is nonfiction.',REFERENCE:exclusion==='REFERENCE'?reason:'Not applied after the fiction exclusion.'};
 for(const code of ['V1','V2','V3','V4','V5'])gateReview[code]='Not applied after the hard exclusion; no score assigned.';
 return {id,title:b.title,author:b.author,status:'excluded',confidence:'high',eligibilityConfidence:'high',eligibility:reason,reason,gateReview,evidence:[url],exclusion};
});
for(const f of facts){
 const b=byId.get(f.id);assert(b,f.id);assert.equal(f.raw.length,10);assert.equal(f.notes.length,10);assert(f.raw.every((x,i)=>x>=0&&x<=max[i]));
 const veto=f.veto||[];
 const status=veto.length?'vetoed':'recommended';
 const a=amazon[f.id]||{count:null,status:'Amazon audit pending; source-reported counts not accepted.',attemptedAt:'2026-10-21',attempts:[]};
 const purchaseUrl=f.purchaseUrl||b.occurrences.find(x=>x.productURL)?.productURL.split('?')[0]||'https://www.amazon.de/s?k='+encodeURIComponent(b.title+' '+b.author);
 const gates={BOOK_FORM:`Pass: the cited publication evidence identifies a published ${f.kind}.`,FICTION:`Pass: ${f.kind}; not a fictional work.`,REFERENCE:`Pass: ${f.structure}`,V1:`No serious failure established in the inspected evidence. ${f.notes[0]}`,V2:`No specific allegiance-dependent exclusion of counterevidence established. ${f.caveat}`,V3:`Transferable content: ${f.notes[2]}`,V4:`No serious dependence on a passing claim established. ${f.notes[5]}`,V5:`No authoritative religious doctrine or specifically evidenced extremist advocacy established in this ${f.kind}.`};
 for(const code of veto)gates[code]=f.reason;
 const refs=f.evidence;
 const domains=Object.fromEntries((f.domains||[]).map(([id,value,rationale])=>[id,{value,confidence:'moderate',rationale,refs:[refs[0]]}]));
 const mechanisms=(f.mechanisms||[]).map((m,i)=>({id:f.id+'-m'+(i+1),domains:m.domains,roles:Array.isArray(m.roles)?Object.fromEntries(m.domains.map((d,j)=>[d,m.roles[j]])):m.roles,statement:m.statement,scope:m.scope,strength:m.strength||2,confidence:'moderate',refs:[refs[0]]}));
 const enrichment={domains,connections:{status:'partial',mechanisms,joins:[],limitations:'Only connections supported by the inspected scope are recorded; absent domains are unknown, not zero.'},research:{reviewed:'2026-10-21',unknownReason:f.limit||'Assessment uses the cited description, contents or sample rather than a new cover-to-cover reading; quality confidence is limited accordingly.'}};
 if(f.edition)enrichment.edition={...f.edition,retrieved:'2026-10-21',language:'English',confidence:f.edition.confidence||'high'};
 const out={id:f.id,title:f.title||b.title,author:f.author||b.author,status,confidence:f.confidence||'moderate',eligibilityConfidence:f.eligibilityConfidence||'high',eligibility:f.structure,reason:f.reason||`Eligible ${f.kind} with ${f.payload}.`,gateReview:gates,evidence:refs,veto,raw:f.raw,notes:f.notes,year:f.year,yearConfidence:f.yearConfidence||'high',yearNote:f.yearNote,T11:f.T11,T12:f.T12,themeNote:f.themeNote,periodEnd:f.periodEnd,periodConfidence:f.periodConfidence||'moderate',periodNote:f.periodNote,amazon:a,purchaseUrl,purchaseFormat:f.purchaseFormat||'Unknown; product locator supplied by the source has not established this format.',reader:f.reader||'Unavailable: no independently verified reader aggregate.',enrichment};
 if(veto.length)out.vetoConfidence=f.vetoConfidence||'moderate';
 assessments.push(out);
}
for(const s of skips){const pos=assessments.findIndex(x=>x.id===s.id);if(pos>=0)assessments.splice(pos,1);assessments.push(s);}
assert.equal(new Set(assessments.map(x=>x.id)).size,assessments.length);
for(const a of assessments)assert(byId.has(a.id),a.id);
fs.writeFileSync(dir+'c-assessments.json',JSON.stringify(assessments,null,2)+'\n');
console.log(JSON.stringify({completed:assessments.length,assigned:input.length,counts:assessments.reduce((a,b)=>(a[b.mergeInto?'merged':b.status]=(a[b.mergeInto?'merged':b.status]||0)+1,a),{})}));
