import fs from 'node:fs';
import {packet,book,ed} from './hn-utils.mjs';
const file='data/sources_261020/reddit/hn-assessments.json';
const rows=JSON.parse(fs.readFileSync(file));
const get=i=>rows.find(r=>r.id===book(i).id);
const cite=(r,url)=>{if(!r.evidence.includes(url))r.evidence.push(url);};
for(const i of [429,481,484,546,559,576]){
 const r=get(i);
 const path=`data/sources_261020/reddit/raw/hn-amazon-corrected-${i}.json`;
 r.amazon.attempts=r.amazon.attempts.filter(a=>a.file!==path);
 r.amazon.attempts.push({type:'corrected-identity public search index',file:path,target:`${r.title} — ${r.author}`,result:'No matching product total-rating aggregate established.'});
}
const india=get(489);
india.periodEnd=null;
india.periodConfidence='low';
india.periodNote='The third edition extends the post-independence history into the recent decade, but the inspected publisher and library descriptions do not state an exact narrative endpoint. Remove the earlier unsupported 2022 estimate. H13 remains unresolved; zero in the calculation is an explicit unknown-endpoint fallback, not a timeless assessment.';
india.enrichment.edition=ed(992,'9781035014729','https://www.panmacmillan.com/authors/ramachandra-guha/india-after-gandhi/9781035014729','Paperback',2023);
cite(india,india.enrichment.edition.url);
const accidental=get(525);
accidental.periodEnd=1996;
accidental.periodConfidence='high';
accidental.periodNote='The author’s preface explicitly states that the revised edition updates the story through early 1996. Original publication remains 1992.';
cite(accidental,'https://www.cringely.com/2013/02/05/accidental-empires-part-2-preface-to-the-1996-edition/');
get(481).periodConfidence='high';
get(481).periodNote='The FBI identifies the undercover operation as ending on 26 July 1981. This is the central operation’s endpoint; later prosecutions are secondary.';
cite(get(481),'https://www.fbi.gov/history/cases-and-criminals/joe-pistone-undercover-agent');
const editions=[
 [535,ed(976,'GoogleBooks:3sC3AAAAIAAJ','https://books.google.com/books/about/The_Arms_of_Krupp_1587_1968.html?id=3sC3AAAAIAAJ','Print book; binding not recorded',1968,'Little, Brown 1968 bibliographic edition; extent is catalogued, not a work-level average.')],
 [538,ed(614,'GoogleBooks:U8y1AAAAIAAJ','https://books.google.com/books/about/The_People_s_Tycoon.html?id=U8y1AAAAIAAJ','Print book; binding not recorded',2005,'The identified Knopf 2005 library copy has 614 numbered pages. Do not substitute a different retail edition extent.')],
 [545,ed(606,'GoogleBooks:UlTLRUn1sy8C','https://books.google.com/books?id=UlTLRUn1sy8C','Print book; binding not recorded',1979,'The identified University of California Press 1979 print edition; the separately verified Dover 1999 reprint does not reset original year.')],
 [550,ed(272,'9780060840976','https://openlibrary.org/books/OL7282840M/How_we_got_here','Paperback',2005)],
 [569,ed(409,'ColoradoCollege:451852','https://catalog.coloradocollege.edu/cgi-bin/koha/opac-detail.pl?biblionumber=451852&shelfbrowse_itemnumber=472973','Print book; binding not recorded',1984,'First edition, Knopf, xviii + 409 numbered pages. Page variable uses the main numbered extent and does not add preliminaries.')]
];
for(const [i,e] of editions){get(i).enrichment.edition=e;cite(get(i),e.url);}
const extraDomains=[
 [411,[['SCI',2,'The book explains biological and metabolic claims; their disputed inferential reliability is scored separately under evidence.']]],
 [421,[['INS',2,'The biography depicts Harvard teaching, literary culture and personal mentorship.']]],
 [481,[['INS',2,'Criminal organizations and law-enforcement institutions shape the operation.'],['STR',2,'Maintaining cover and gaining trust create practical strategic constraints.']]],
 [484,[['POL',3,'FDR’s first hundred days and executive decisions are central.'],['INS',3,'The inner circle and formation of New Deal institutions are analyzed.'],['ECO',2,'Economic crisis provides the immediate policy setting.']]],
 [488,[['INS',3,'Textbook selection and educational institutions shape historical narratives.'],['HEU',2,'Comparing received accounts with historical evidence is a central practice.']]],
 [489,[['POL',4,'Post-independence Indian politics is the central narrative.'],['INS',3,'Democratic institutions and conflicts organize the history.']]],
 [490,[['POL',2,'Political speeches form a significant part of the historical anthology.']]],
 [502,[['INS',1,'The travel narrative supplies selected observations of Australian institutions and practices, not a systematic institutional account.']]]
];
for(const [i,defs] of extraDomains){
 const r=get(i),ref=r.evidence.find(x=>x.startsWith('https://'));
 for(const [id,value,rationale] of defs)r.enrichment.domains[id]={value,rationale,confidence:'low',refs:[ref]};
}
const mechanisms=[
 [401,{INS:'status rules and rewards',HEU:'judgment and behavior'},'Group status rules shape perceived rewards, changing how individuals interpret evidence and choose behavior.','Storr’s social-status argument; broad claims remain qualified.'],
 [414,{HEU:'social decision shortcuts',INS:'structured persuasive settings'},'Persuasive settings exploit familiar decision shortcuts, making behavior responsive to authority, reciprocity and social cues.','Cialdini’s explanatory account of influence.'],
 [424,{FIN:'investment and capital',INS:'organizational incentives'},'Investment practices depend on organizational incentives and long-lived institutional norms, which shape how capital is allocated.','Ellis’s history of Capital Group.'],
 [505,{CMP:'computer architectures',HTC:'device implementation',INN:'development and adoption'},'Changes in computer architecture and device capability enable new applications, which redirect subsequent development.','Ceruzzi’s historical computing account.'],
 [507,{CMP:'information-processing capability',INS:'organizational uses',INN:'adoption and redesign'},'Organizations adopt information-processing machines for practical tasks, and those uses redirect design and subsequent innovation.','Computer: A History of the Information Machine.'],
 [509,{CMP:'portable software',INS:'collaboration and standardization',SCL:'spread across systems'},'Portable software and collaboration allow Unix to spread across hardware systems, creating pressure for common standards.','Unix’s first quarter century.'],
 [511,{CMP:'software design',INS:'Bell Labs environment',INN:'iterative development'},'A collaborative research environment permits iterative software design, producing tools whose simplicity and reuse support further development.','Kernighan’s Unix history and memoir.'],
 [514,{QNT:'formal logic and computability',CMP:'general-purpose computation'},'Formal accounts of logic and computation establish what a general-purpose computer can represent and which problems it cannot decide.','Davis’s intellectual history from Leibniz to Turing.'],
 [518,{MIL:'mission demand',INS:'research funding organization',SCI:'scientific capabilities',HTC:'technology development',INN:'high-risk experimentation'},'Military mission demand and flexible research funding support risky scientific experiments whose results become enabling technologies.','DARPA’s research history; benefits and failures are both relevant.'],
 [521,{CMP:'computer systems',ENG:'engineering constraints',INS:'research and industry organization'},'Engineering constraints and organizational needs shape computer-system projects, while experience from those projects changes later practice.','Amato’s computing account, 1955–1983.']
];
for(const [i,roles,statement,scope] of mechanisms){
 const r=get(i),ds=Object.keys(roles);
 if(ds.some(d=>!(r.enrichment.domains[d]?.value>0)))throw Error(`Unsupported mechanism participant ${i}`);
 const id=`hn-${i}-reviewed-connection`;
 r.enrichment.connections.mechanisms=r.enrichment.connections.mechanisms.filter(m=>m.id!==id);
 r.enrichment.connections.mechanisms.push({id,domains:ds,roles,statement,scope,strength:2,confidence:'low',refs:[r.evidence.find(s=>s.startsWith('https://'))]});
}
const endpointFollowup=JSON.parse(fs.readFileSync('data/sources_261020/reddit/hn-endpoint-followup.json','utf8'));
for(const update of endpointFollowup.books){
 const r=rows.find(r=>r.id===update.id);
 if(!r?.raw)throw Error(`Endpoint update missing scored work ${update.id}`);
 for(const key of ['periodEnd','periodConfidence','periodApproximate','periodNote'])r[key]=update[key];
 for(const ref of update.evidence)cite(r,ref);
 r.periodEvidenceAudit='data/sources_261020/reddit/hn-endpoint-followup.json';
 delete r.periodNeedsReview;
 delete r.periodFallback;
}
const forces=get(569);
forces.status='vetoed';
forces.veto='V5';
forces.vetoConfidence='moderate';
forces.reason='V5: the original preface defines a revolutionary social purpose, the later preface identifies service to the labor movement, and the epilogue develops collective political opposition to management control. Together these establish a sustained activist purpose. The industrial history and design-choice mechanisms retain counterfactual merit.';
forces.reassessment='Additional primary-text review changes the earlier bibliography-based no-veto conclusion to V5. H1/H2 still pass: explanatory history, not fiction or technical instruction. E changes from 15 to 14 and P from 1.5 to 1 because categorical political attribution exceeds demonstrated alternatives. The other eight attainments remain. Both thematic deductions now apply to the central American labor-power argument. Original year and unknown Amazon observation remain; historical endpoint is now supported.';
forces.raw[0]=14;
forces.raw[9]=1;
forces.notes[0]='Substantial historical sources remain valuable, but the declared activist thesis and categorical attribution of management motives limit inferential balance.';
forces.notes[9]='Technical distinctions remain useful; blanket political attributions in the epilogue reduce conceptual restraint.';
forces.T11=-10;
forces.T12=-10;
forces.themeNote='T11=-10: American society and industrial labor relations are the declared central subject. T12=-10: political control of work is the central argument and activist purpose; automation supplies its cases.';
forces.gateEvidenceLocator='Original preface xiii; 2010 preface ix; epilogue 349–350. See hn-endpoint-followup.json.';
for(const r of rows.filter(r=>r.raw)){
 if(r.enrichment.edition)r.enrichment.research.unknownReason='Identified edition extent recorded; unassessed domains and connections remain unknown. Some print-catalog sources do not state binding.';
 r.periodStatus=r.periodEnd!==null?'assessed-endpoint':/unresolved|unknown|requires later review/i.test(r.periodNote)?'unknown-endpoint':'not-period-specific';
 if(r.periodStatus==='unknown-endpoint'){
  r.periodNeedsReview=true;
  r.periodFallback='H13=0 only because endpoint is unavailable; this is not evidence of a timeless topic. Manual review required.';
 }
}
const max=[20,17,15,12,10,9,7,5,3,2],domains=new Set('SCI QNT CMP HTC ENG ENE MAT PRD QLT LOG TRD SCL INN INS ECO FIN POL MIL STR HEU'.split(' '));
const errors=[];
if(rows.length!==packet.length)errors.push('Incomplete packet');
if(new Set(rows.map(r=>r.id)).size!==rows.length)errors.push('Duplicate ID');
for(const b of packet)if(!rows.some(r=>r.id===b.id))errors.push(`Missing ${b.id}`);
for(const r of rows){
 if(!r.evidence?.length||!r.eligibility||!r.reason)errors.push(`Decision evidence ${r.id}`);
 for(const ref of r.evidence||[]){if(ref.startsWith('analysis/')&&!fs.existsSync(ref.split('#')[0]))errors.push(`Missing citation ${ref}`);}
 if(['recommended','vetoed'].includes(r.status)){
  if(r.raw?.length!==10||r.notes?.length!==10)errors.push(`Criteria ${r.id}`);
  if(r.raw?.some((v,j)=>!Number.isFinite(v)||v<0||v>max[j]))errors.push(`Raw range ${r.id}`);
  if(![-10,0].includes(r.T11)||![-10,0].includes(r.T12)||!Number.isInteger(r.year)||!r.yearNote||!r.periodNote||!r.themeNote)errors.push(`Dates/deductions ${r.id}`);
  if(r.amazon.count===null)for(const a of r.amazon.attempts||[])if(a.file&&!fs.existsSync(a.file))errors.push(`Missing attempt ${a.file}`);
  for(const [d,v] of Object.entries(r.enrichment.domains)){if(!domains.has(d)||!Number.isInteger(v.value)||v.value<0||v.value>4||!v.rationale||!v.refs.length)errors.push(`Domain ${r.id}/${d}`);}
  for(const m of r.enrichment.connections.mechanisms)if(m.domains.length<2||m.domains.some(d=>!(r.enrichment.domains[d]?.value>0)||!m.roles[d]))errors.push(`Mechanism ${r.id}`);
  const e=r.enrichment.edition;
  if(e&&(!Number.isInteger(e.pages)||e.pages<1||!e.id||!e.url||!e.retrieved||!e.format||/audio|disc|cassette/i.test(e.format)||!Number.isInteger(e.year)))errors.push(`Edition ${r.id}`);
 }else if(r.raw||r.notes||r.amazon)errors.push(`Gate scored ${r.id}`);
}
if(errors.length)throw Error(JSON.stringify(errors));
fs.writeFileSync(file,JSON.stringify(rows,null,2)+'\n');
const scored=rows.filter(r=>r.raw);
const audit={
 version:1,reviewed:'2026-10-20',packet:'data/sources_261020/hn/transfer-reddit.json',output:file,
 counts:{assigned:packet.length,decisions:rows.length,...rows.reduce((a,r)=>(a[r.status]=(a[r.status]||0)+1,a),{}),scored:scored.length,verifiedEditionPages:scored.filter(r=>r.enrichment.edition).length,amazonKnown:scored.filter(r=>r.amazon.count!==null).length,amazonUnknown:scored.filter(r=>r.amazon.count===null).length,domainReviewed:scored.filter(r=>Object.keys(r.enrichment.domains).length).length,withMechanisms:scored.filter(r=>r.enrichment.connections.mechanisms.length).length},
 validation:{errors:[],ids:'Exactly the assigned 92 IDs; no other packet indices assessed.',criteria:'All scored works have ten bounded raw attainments and ten individual notes, dates and five deduction inputs.',gates:'All excluded/unresolved records are unscored.',amazon:'All 89 new candidates have individual saved public-index searches; six corrected author queries also saved. No new product total-rating count established. Three previous observations preserved with actual original dates.',edition:'Identified print/ebook edition extents only; no audio or partial nominated set. Some library print records do not specify binding.'},
 unknownEndpoints:scored.filter(r=>r.periodStatus==='unknown-endpoint').map(r=>({id:r.id,title:r.title,note:r.periodNote})),
 uncertainIdentities:rows.filter(r=>r.status==='unresolved').map(r=>({id:r.id,title:r.title,reason:r.reason})),
 reviewConcerns:[
  'All nine formerly unknown historical endpoints now have supported estimates, with explicit confidence and scope limitations in hn-endpoint-followup.json. No unknown-endpoint zero fallback remains.',
  'Some source titles were produced by an AI transcription comment. Source mention provenance remains that comment; title/author identity was checked independently where possible.',
  'Capital I/II are V5 counterfactual assessments. Science in Action, Open Circuits, Of Bicycles/Bakelites/Bulbs and The Computing Universe have explicit H2 boundary explanations; Reassembling the Social and Electric Science are H2 exclusions based on purpose and structure.',
  'Forces of Production changed to V5 after primary preface and epilogue review established a sustained activist purpose. Full counterfactual criteria remain; E/P and both thematic flags were reassessed from that evidence.',
  'Go East, Young Man identity is resolved. E/A were revised because the cited review disputes accusations previously used to discount the memoir; all other raw attainments and dated Amazon evidence were retained.',
  'Page counts may be catalogued main numbered extents rather than retail total sheets; each record states its edition and, when relevant, pagination limitation.',
  'All domain and connection reviews are partial; no absence-of-evidence values were filled with zero.'
 ]
};
fs.writeFileSync('data/sources_261020/reddit/hn-assessment-audit.json',JSON.stringify(audit,null,2)+'\n');
console.log(JSON.stringify(audit,null,2));
