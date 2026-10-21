import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/books_guru_261021/';
const input=JSON.parse(fs.readFileSync(dir+'c-input.json'));
const a=JSON.parse(fs.readFileSync(dir+'c-assessments.json'));
assert.equal(a.length,input.length);assert.equal(new Set(a.map(x=>x.id)).size,input.length);
assert.deepEqual(a.map(x=>x.id).sort(),input.map(x=>x.id).sort());
const maxima=[20,17,15,12,10,9,7,5,3,2];let scored=0,mechanisms=0,pages=0;
for(const b of a){
 if(b.mergeInto){assert(b.reason&&b.evidence.length);continue;}
 for(const k of ['BOOK_FORM','FICTION','REFERENCE','V1','V2','V3','V4','V5'])assert(b.gateReview[k],b.id+' '+k);
 assert(b.evidence.length&&b.confidence&&b.eligibilityConfidence);
 if(b.status==='excluded'){assert(!('raw'in b)&&!('year'in b)&&!('enrichment'in b));continue;}
 scored++;assert.equal(b.raw.length,10);assert.equal(b.notes.length,10);assert(new Set(b.notes).size===10);
 b.raw.forEach((x,i)=>assert(Number.isFinite(x)&&x>=0&&x<=maxima[i]));
 assert(Number.isInteger(b.year)&&b.year<=2026);assert(b.yearNote&&b.periodNote&&b.themeNote);
 assert([0,-10].includes(b.T11)&&[0,-10].includes(b.T12));
 assert(b.amazon.count===null&&b.amazon.attempts.length>0);
 for(const m of b.enrichment.connections.mechanisms){mechanisms++;assert(m.domains.length>=2);assert(!Array.isArray(m.roles));assert(new Set(Object.values(m.roles)).size===m.domains.length);for(const d of m.domains){assert(b.enrichment.domains[d],b.id+' '+d);assert(m.roles[d]);}}
 for(const [id,d] of Object.entries(b.enrichment.domains)){assert(d.value>=0&&d.value<=4&&d.rationale&&d.refs.length,id);}
 if(b.enrichment.edition){pages++;assert(Number.isInteger(b.enrichment.edition.pages)&&b.enrichment.edition.pages>0);}
 if(b.status==='vetoed')assert(b.veto.length&&b.vetoConfidence);
 else assert(!b.veto.length);
}
console.log(JSON.stringify({records:a.length,scored,mechanisms,pageCounts:pages,counts:a.reduce((x,b)=>(x[b.mergeInto?'merged':b.status]=(x[b.mergeInto?'merged':b.status]||0)+1,x),{})}));
