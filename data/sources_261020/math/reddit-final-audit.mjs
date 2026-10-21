import fs from 'node:fs';
const dir='data/sources_261020/math/';
const packet=JSON.parse(fs.readFileSync(dir+'reddit-packet.json'));
const all=JSON.parse(fs.readFileSync(dir+'reddit-assessments.json'));
const lizard=all.find(x=>x.id===packet[28].id);
lizard.evidence.push('https://www.justice.gov/archive/opa/pr/2001/June/255enrd.htm');
lizard.periodNote='Approximate end of the principal enforcement story: the DOJ confirms Wong’s 2001 sentencing. The final chapter boundary was not available, so the endpoint retains low confidence.';
const flight=all.find(x=>x.id===packet[35].id);
flight.evidence.push('https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR-90-06.pdf?lang=en');
flight.periodNote='The 1989 crash and investigation form the central arc. The NTSB final report is dated November 1, 1990; later survivor anniversaries are secondary.';
const bickel=all.find(x=>x.id===packet[94].id);
bickel.year=1982;
bickel.yearConfidence='moderate';
bickel.yearNote='The Lost Men author’s bibliography/review page explicitly corrects the date of Bickel’s Shackleton’s Forgotten Men to 1982. This is consistent with the separately cataloged Shackleton’s Forgotten Argonauts (Macmillan, 1982). Treat the 2000 American title as a retitled edition. Original copyright-page comparison remains unavailable, so confidence is moderate.';
bickel.evidence.push('https://www.thelostmen.com/reviews/');
const max=[20,17,15,12,10,9,7,5,3,2];
const codes=new Set('SCI QNT CMP HTC ENG ENE MAT PRD QLT LOG TRD SCL INN INS ECO FIN POL MIL STR HEU'.split(' '));
const errors=[];
const seen=new Set();
for(const r of all){
 r.evidence=[...new Set(r.evidence||[])];
 if(seen.has(r.id))errors.push([r.id,'duplicate']);
 seen.add(r.id);
 if(!r.author)errors.push([r.id,'author']);
 if(['recommended','vetoed'].includes(r.status)){
  if(r.raw?.length!==10||r.notes?.length!==10)errors.push([r.id,'criterion vector']);
  r.raw.forEach((x,i)=>{if(!Number.isFinite(x)||x<0||x>max[i])errors.push([r.id,'criterion bound',i,x]);});
  if(!Number.isInteger(r.year))errors.push([r.id,'original year']);
  for(const [k,v]of Object.entries(r.enrichment?.domains||{}))if(!codes.has(k)||!Number.isInteger(v.value)||v.value<0||v.value>4)errors.push([r.id,'domain',k]);
  for(const m of r.enrichment?.connections?.mechanisms||[])if(m.domains.length<2||m.domains.some(k=>!m.roles[k]||!r.enrichment.domains[k]))errors.push([r.id,'mechanism participant',m.id]);
 }
 if(['excluded','unresolved'].includes(r.status)&&r.raw)errors.push([r.id,'score on unscored status']);
}
for(const q of packet.slice(0,120))if(!seen.has(q.id))errors.push([q.id,'missing assigned decision']);
if(all.length!==120)errors.push(['ownership','expected 120 records']);
if(errors.length)throw Error(JSON.stringify(errors));
fs.writeFileSync(dir+'reddit-assessments.json',JSON.stringify(all,null,2)+'\n');
const audit={
 reviewed:'2026-10-20',ownedRange:'Reddit packet local indices 0–119 inclusive',assigned:120,completed:120,
 transferred:[{range:'120–133',owner:'/root',packet:'math/transfer-root-final.json'},{range:'134–153',owner:'/root/domains_a',packet:'math/reddit-packet.json, local indices 134–153'}],
 statuses:all.reduce((o,r)=>(o[r.status]=(o[r.status]||0)+1,o),{}),
 newPrimaryScopeReviews:117,
 unresolvedIdentityReviews:3,
 verifiedEditionRecords:all.filter(x=>x.enrichment?.edition).length,
 verifiedAmazonAggregates:all.filter(x=>x.amazon?.count!=null).length,
 domainEntries:all.reduce((s,x)=>s+Object.keys(x.enrichment?.domains||{}).length,0),
 mechanismRecords:all.reduce((s,x)=>s+(x.enrichment?.connections?.mechanisms?.length||0),0),
 checks:{completeOwnership:true,uniqueIds:true,tenBookSpecificNotes:true,attainmentBounds:true,knownDomainCodes:true,mechanismParticipantRoles:true,noScoresOnHardExclusions:true},
 limitations:'Publisher/library descriptions, contents, selected excerpts, original research and prior book assessments were reviewed. This is not a full-text review of every book. Domain profiles remain partial; uncoded fields are unknown, not absent. Amazon native retrieval stopped at a shopping/CAPTCHA challenge; later searches and earlier explicit global-rating snapshots are individually recorded.',
 unresolved:all.filter(x=>x.status==='unresolved').map(x=>({id:x.id,title:x.title,reason:x.reason})),
 reviewConcerns:[
 'Quantum Computing Since Democritus retained at moderate eligibility confidence: mixed lecture-derived technical structure, but explicit cross-field explanatory purpose.',
 'Doing Good Better excluded H2 at moderate confidence: its main structure trains readers to apply five decision questions to choices.',
 'Shackleton’s Forgotten Men uses 1982 at moderate confidence based on an explicit specialist-author date correction and the earlier alternate-title record; original copyright-page comparison was unavailable.',
 'Some historical endpoints are bounded judgments from the dominant narrative, marked low confidence when final chapter scope was not verified.'
 ]
};
fs.writeFileSync(dir+'reddit-audit.json',JSON.stringify(audit,null,2)+'\n');
console.log(JSON.stringify(audit,null,2));
