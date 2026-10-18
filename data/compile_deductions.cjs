const fs=require('fs');
const assert=require('assert/strict');
const baseline=require('./deductions_baseline_261018.json');
const blocks=require('./deductions_classification.cjs');
const ids=s=>(s||'').split(/\s+/).filter(Boolean).map(Number);
const assessments=new Map(),issues=[];
for(const block of blocks){
  const [start,end]=block.range;
  for(let i=start;i<=end;i++){
    assert(!assessments.has(i));
    const b=baseline.books[i-1];
    assessments.set(i,{index:i,id:b.id,title:b.title,author:b.author,theme12:null,periodEnd:null,periodConfidence:'moderate',themeConfidence:'moderate',priorAssessment:b.priorAssessment,note:block.notes?.[i]||null});
  }
  const item=i=>{assert(i>=start&&i<=end,'Outside block: '+i);return assessments.get(i);};
  for(const [theme,list] of Object.entries(block.themes))for(const i of ids(list)){
    const b=item(i);if(b.theme12&&!block.themeOverrides?.[i])issues.push({type:'theme conflict',i,old:b.theme12,next:theme});b.theme12=theme;
  }
  const seen=new Map();
  for(const [year,list] of block.endpoints)for(const i of ids(list)){
    const b=item(i);if(seen.has(i)&&seen.get(i)!==year)issues.push({type:'endpoint conflict',i,old:seen.get(i),next:year});seen.set(i,year);b.periodEnd=year;b.periodConfidence='low';
  }
  for(const i of ids(block.unknownPeriod)){const b=item(i);b.periodEnd='?';b.periodConfidence='unknown';}
  for(const [i,value] of Object.entries(block.endpointOverrides||{})){const b=item(+i);b.periodEnd=value;b.periodConfidence=value==='?'?'unknown':value===null?'moderate':'low';}
  for(const [i,value] of Object.entries(block.themeOverrides||{}))item(+i).theme12=value;
}
const correction=require('./deductions_corrections.cjs');
for(const [year,list] of correction.endpoints)for(const i of ids(list)){const b=assessments.get(i);assert(b);b.periodEnd=year;b.periodConfidence='low';}
for(const i of ids(correction.unknownPeriod)){const b=assessments.get(i);b.periodEnd='?';b.periodConfidence='unknown';}
for(const i of ids(correction.timeless)){const b=assessments.get(i);b.periodEnd=null;b.periodConfidence='moderate';}
for(const [theme,list] of Object.entries(correction.theme12))for(const i of ids(list))assessments.get(i).theme12=theme==='none'?null:theme;
for(const [i,note] of Object.entries(correction.notes))assessments.get(+i).note=note;
for(const [i,check] of Object.entries(require('./deductions_scope_checks_261018.json'))){const b=assessments.get(+i);b.periodEnd=check.periodEnd;b.periodConfidence=check.confidence;b.scopeEvidence=check.url;b.note=check.note;}
const books=[...assessments.values()];
assert.equal(books.length,baseline.books.length);
fs.writeFileSync('data/deductions_assessments_261018.json',JSON.stringify({date:'2026-10-18',basis:'New rule-12 judgments and assessed central-period endpoints using prior scope evidence; endpoints are estimates unless expressly verified. No publication-age proxy.',books},null,2)+'\n');
console.log(JSON.stringify({issues,theme12:books.filter(b=>b.theme12).length,periods:books.filter(b=>typeof b.periodEnd==='number').length,unknownPeriods:books.filter(b=>b.periodEnd==='?').length,notPeriodBound:books.filter(b=>b.periodEnd===null).length},null,2));
if(process.argv.includes('--unbounded'))console.log(books.filter(b=>b.periodEnd===null).map(b=>b.index+' '+b.title).join('\n'));
