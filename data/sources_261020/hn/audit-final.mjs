import fs from 'node:fs';
import {save,packet} from './save-reviewed.mjs';
const file='data/sources_261020/hn/assessments.json';
const a=JSON.parse(fs.readFileSync(file));
const family=a.find(b=>b.id===packet[295].id);
family.periodConfidence='moderate';
family.periodNote='The central memoir ends around the second marriage and move to Rome in 1950, corroborated by the inspected scholarly account of its narrative structure.';
family.evidence.push('https://cra.phoenixfound.it/wp-content/uploads/2019/01/48.pdf');
family.status='recommended';
delete family.veto;
delete family.vetoConfidence;
family.reason='The inspected author note establishes factual memoir despite novel marketing. The repeated family vocabulary explicitly shows how language preserves group identity and memory after dispersal. This is a modest transferable model, so the earlier V3 finding is withdrawn rather than equating literary form with no payload.';
family.raw=[13,6,6,4,8,8,1,4,3,2];
family.notes[1]='Language, family identity and social disruption are connected on a small scale.';
family.notes[2]='Shared vocabulary as a carrier of group memory is a modest transferable principle.';
family.notes[3]='The role of repeated sayings in sustaining identity is shown, though not developed as a tested causal theory.';
family.reassessment='Audit of the author note and scholarly reading changed the new V3 decision to recommended: an explicit transferable account of language and group memory is present. S/U/M rise modestly; other seven attainments, themes, original year, edition and observed rating count remain. The central endpoint remains 1950 with improved moderate confidence.';
// Repair only prose spacing; identifiers, URLs, quotes and bibliographic IDs remain untouched.
const proseKeys=new Set(['reason','eligibility','reassessment','yearNote','periodNote','themeNote','rationale','statement','scope','limitations','unknownReason','notes']);
function clean(v,key=''){
 if(Array.isArray(v))return v.map(x=>clean(x,key));
 if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,x])=>[k,clean(x,k)]));
 if(typeof v==='string'&&proseKeys.has(key))return v.replace(/([A-Za-z])((?:18|19|20)\d{2})/g,'$1 $2').replace(/((?:18|19|20)\d{2})([A-Za-z])/g,'$1 $2').replace(/(\d)(pages|volumes|page|volume)\b/g,'$1 $2').replace(/([A-Za-z])(\d{1,2},(?:19|20)\d{2})/g,'$1 $2').replace(/,((?:19|20)\d{2})\b/g,', $1');
 return v;
}
save(a.map(b=>clean(b)));
const final=JSON.parse(fs.readFileSync(file));
const bad=[];
for(const b of final){
 if(!b.evidence?.length||!b.reason||!b.eligibility)bad.push({id:b.id,issue:'Missing decision evidence'});
 const e=b.enrichment?.edition;
 if(e&&/^\d{13}$/.test(e.id)){
  const sum=[...e.id.slice(0,12)].reduce((s,n,i)=>s+Number(n)*(i%2?3:1),0);
  if((10-sum%10)%10!==Number(e.id[12]))bad.push({id:b.id,issue:'ISBN checksum',isbn:e.id});
 }
}
const audit={reviewed:'2026-10-20',ownDecisions:final.length,transferred:225,totalPacket:packet.length,remaining:JSON.parse(fs.readFileSync('data/sources_261020/hn/unreviewed.json')).length,statuses:final.reduce((c,b)=>(c[b.status]=(c[b.status]||0)+1,c),{}),invalid:bad,unresolved:final.filter(b=>['unresolved','nonbook'].includes(b.status)).map(b=>({id:b.id,title:b.title,status:b.status,reason:b.reason})),concerns:['All connection inventories are partial unless a preserved earlier record explicitly established completeness.','Family Lexicon: the author says no events were invented; retained as nonfiction despite novel marketing. Its 1950 period endpoint now has a scholarly citation.','Perec: invalid publisher ISBN rejected; exact matching 2010 edition verified.','Last Lion nomination covers the complete three-volume series, not prior g0990 volume 3; distinct canonicalId n_last_lion_series and retainPrior true.','Kershaw Hitler: nominated single-volume abridgment uses its own page count, with original 1998 production date retained.','Fatu-Hiva: 1974 rewrite retains original 1938 production date; assessment concerns the nominated revised work.','World Order: critical evidence reduced integrity and causal scores; serious V2 not established sufficiently to veto.']};
fs.writeFileSync('data/sources_261020/hn/final-audit.json',JSON.stringify(audit,null,2)+'\n');
console.log(audit);
