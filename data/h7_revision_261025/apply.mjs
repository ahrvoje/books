import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {restore} from './decisions.mjs';
const dir='data/h7_revision_261025',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,x)=>fs.writeFileSync(p,typeof x==='string'?x:JSON.stringify(x,null,2)+'\n');
const previous='data/rules_audit_261025/compiled.json';
assert.equal(read('data/catalog.json').compiled,previous,'One-time migration: catalog already advanced.');
const c=read(previous),before=structuredClone(c),old=read('data/intake_finish_261025/compiled.json'),older=read('data/intake_rest_261025/compiled.json');
const ids=new Set(Object.keys(restore)),targets=c.exclusions.filter(b=>/H7/.test(b.exclusion||''));
assert.equal(targets.length,117);
const sourcesHash=crypto.createHash('sha256').update(fs.readFileSync('SOURCES.md')).digest('hex');
const now=new Date(),stamp=new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Warsaw',year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).format(now).replace(/[-:]/g,'').replace(' ','_');
const report=`analysis/analysis_h7revision_${stamp}.md`;
const books=Object.keys(restore).map(id=>{const b=structuredClone(old.currentBooks.find(b=>b.id===id)||older.currentBooks.find(b=>b.id===id));assert(b?.status==='recommended',id);assert(c.exclusions.some(x=>x.id===id),id);return b;});
const editions=read('site/editions.json'),refs=read('site/reference-pages.json'),enrichment=read('site/enrichment.json'),archived=read('data/rules_audit_261025/archived-enrichment.json'),categories=read('site/exclusion-categories.json');
// Recover documented metadata, never infer reference counts from a book's length.
const candidates=new Map(),editionCandidates=[];
function visit(x){if(!x||typeof x!=='object')return;if(x.id&&x.pages>0&&x.url&&x.format&&x.retrieved)editionCandidates.push(x);if(x.id&&ids.has(x.id)){if(!candidates.has(x.id))candidates.set(x.id,[]);candidates.get(x.id).push(x);}for(const [k,v] of Object.entries(x)){if(ids.has(k)&&v&&typeof v==='object'){if(!candidates.has(k))candidates.set(k,[]);candidates.get(k).push(v);}if(v&&typeof v==='object')visit(v);}}
for(const d of fs.readdirSync('data',{withFileTypes:true}).filter(x=>x.isDirectory()&&x.name!=='h7_revision_261025'))for(const f of fs.readdirSync('data/'+d.name)){const p='data/'+d.name+'/'+f;if(!f.endsWith('.json')||/compiled|screen|changes|prior-evidence|pending|resolved|baseline/.test(f))continue;const s=fs.statSync(p);if(s.isFile()&&s.size<16000000)visit(read(p));}
const metadataRecovery=[];
for(const b of books){
 const prior=b.scoreReview||b.reviewAnchor,bonus=b.bonusAssessment,list=candidates.get(b.id)||[];
 if(archived[b.id])enrichment.books[b.id]=archived[b.id];
 const pg=bonus.pages;
 if(pg>0){let e=[b.edition,archived[b.id]?.edition,...list.flatMap(x=>[x.edition,x]),...editionCandidates].find(e=>e&&e.pages===pg&&e.id===bonus.pageEdition&&e.url&&e.format&&e.retrieved);
  e=e?structuredClone(e):{id:bonus.pageEdition,pages:pg,url:prior,year:null,language:'Unknown in recovered edition record',format:'Print; binding unverified',retrieved:'2026-10-25',confidence:'low',notes:'Recovered documented page count and edition identity from the prior score assessment. Remaining edition details are unknown; no new bibliographic lookup is claimed.'};
  editions[b.id]=e;metadataRecovery.push({id:b.id,kind:'pages',method:e.url===prior?'prior assessment':'saved edition evidence',pages:pg});
 }
 const rp=bonus.referencePages;
 let r=list.find(x=>x.pages===rp&&rp!==null&&x.edition?.id===bonus.referenceEdition&&x.url&&(x.ranges?.length||x.documentedCounts?.length));
 if(r)r=Object.fromEntries(['pages','confidence','method','ranges','documentedCounts','edition','url','source','sameEditionAsPG','limitation','reason'].filter(k=>k in r).map(k=>[k,r[k]]));
 else r=rp==null?{pages:null,confidence:'unknown',reason:'Prior assessment has no documented count; retain explicit zero RD fallback.'}:{pages:rp,confidence:bonus.confidence==='unknown'?'low':bonus.confidence,edition:{id:bonus.referenceEdition},url:prior,documentedCounts:[{pages:rp,label:'Previously documented reference-page count',evidence:prior}],limitation:'Recovered count from the prior assessment; section-level evidence remains in that historical review. No new count inferred.'};
 refs[b.id]=r;delete categories[b.id];
 b.categoryReview={date:'2026-10-25',rule:'H7 revised',previousStatus:'excluded',status:'recommended',reason:restore[b.id],confidence:'moderate',prior,analysis:report+'#'+b.id};
 b.reviewAnchor=report+'#'+b.id;b.currentReview=report;
 c.currentBooks.push(b);
}
const decisions=targets.map(b=>({id:b.id,title:b.title,author:b.author,previous:'excluded',status:ids.has(b.id)?'recommended':'excluded',reason:restore[b.id]||(b.id==='g1278'?'Italian architectural monograph remains excluded as art appreciation/monograph; no eligible-language edition verified. H4 moderate confidence remains.':/art|poe|liter|paint|cinema|Shakespeare|Pictures|Montmartre|Civilisation|Nude|Ukraine|Birds/i.test(b.reason+' '+b.title)?'Main purpose remains art appreciation, artistic/literary criticism, narrow art history or poetry. No central qualifying design or creative-production explanation is established in the retained evidence.':'Main purpose remains routine interpersonal or commercial advice, techniques or practice. Incidental explanations and examples do not establish a central qualifying contribution.'),prior:b.analysis,sources:b.sources,confidence:ids.has(b.id)?'moderate':b.confidence,evidence:b.evidence||[]}));
// Keep the current excluded records consistent with the revised rule; preserve older reports as history.
for(const d of decisions.filter(d=>d.status==='excluded')){const b=c.exclusions.find(b=>b.id===d.id);b.reason=d.reason;b.analysis=report+'#'+b.id;}
c.exclusions=c.exclusions.filter(b=>!ids.has(b.id));
c.audit.rulesSha256=crypto.createHash('sha256').update(fs.readFileSync('AGENTS.md')).digest('hex');
const counts={reviewed:targets.length,restored:books.length,recommended:c.currentBooks.filter(b=>b.status==='recommended').length,vetoed:c.currentBooks.filter(b=>b.status==='vetoed').length,excluded:c.exclusions.length};
c.audit.latestRulesAudit={date:'2026-10-25',previous,report,rule:'H7 purpose-based revision',...counts,sourceCountChanges:0,scope:'All recorded H7 exclusions reassessed. Other gates and quality scores retained after review of saved purpose evidence; not a fresh full-text or specialist-criticism audit.'};
const link=(t,u)=>`[${String(t).replace(/\|/g,'&#124;')}](${u})`,fmt=n=>n.toFixed(2),rating=b=>b.amazon?.count==null?'Unknown':link(b.amazon.count,b.amazon.url);
let lines=fs.readFileSync('RECOMMENDED_BOOKS.md','utf8').split(/\r?\n/),rows=lines.filter(l=>/^\| \d{4}-/.test(l));
for(const b of books){const e=editions[b.id],r=refs[b.id];rows.push('| '+[b.entryDate,b.year,b.author,b.titleCell||link(b.title,b.purchaseUrl),fmt(b.total),fmt(b.bonuses.REL),fmt(b.bonuses.RD),rating(b),e?link(e.pages,e.url):'Unknown',r.pages==null?'Unknown':link(r.pages,r.url),b.sources.join(', ')].join(' | ')+' |');}
rows.sort((a,b)=>Number(b.split('|')[5])-Number(a.split('|')[5]));
assert.equal(rows.length,counts.recommended);
write('RECOMMENDED_BOOKS.md',lines.filter(l=>!/^\| \d{4}-/.test(l)).join('\n').trimEnd()+'\n'+rows.join('\n')+'\n');
write('EXCLUDED_BOOKS.md','# Excluded books\n\n'+c.exclusions.map(b=>b.line||'- '+b.title+' — '+b.author).join('\n')+'\n');
write(dir+'/decisions.json',decisions);write(dir+'/metadata-recovery.json',metadataRecovery);write(dir+'/compiled.json',c);write('data/catalog.json',{compiled:dir+'/compiled.json'});
write('site/editions.json',editions);write('site/reference-pages.json',refs);write('site/enrichment.json',enrichment);write('site/exclusion-categories.json',categories);
let text=`# Revised H7: purpose-based review\n\n25 October 2026, Europe/Warsaw. Reviewed all ${counts.reviewed} recorded H7 exclusions; restored ${counts.restored} recommendations. Current membership: ${counts.recommended} recommended, ${counts.vetoed} vetoed, ${counts.excluded} excluded.\n\nThe user-approved revision distinguishes routine advice and art appreciation from sustained explanation of design, creative production, technological adoption and skilled work. All five user examples return. Other exclusions and vetoes still apply. Prior scores, deductions, confidence limits, documented metadata counts and distinct sources are preserved; no new source or relevance credit is added. Restorations have moderate gate confidence; this is a purpose reassessment, not a new full-text quality audit.\n\n[All decisions](../${dir}/decisions.json); [validation](../${dir}/verification.json). The old H7 audit remains dated history and is superseded for the decisions below.\n\nFresh supporting checks: [Roussel publisher](https://press.uchicago.edu/ucp/books/book/chicago/R/bo26773990.html), [Coyle author and sample](https://danielcoyle.com/the-culture-code/), [Tennov publisher](https://www.simonandschuster.com/books/Love-and-Limerence/Dorothy-Tennov/9780812862867). Other decisions use retained source descriptions, prior content assessments and cited evidence. Unknown metadata is not filled by inference.\n\n## Decisions\n\n`;
for(const d of decisions){text+=`<a id="${d.id}"></a>\n\n### ${d.title} — ${d.author}\n\n**${d.status}; confidence ${d.confidence}.** ${d.reason}\n\n[Previous gate decision](${d.prior.replace(/^analysis\//,'')}). Sources: ${d.sources.join(', ')}.\n\n`;if(d.status==='recommended'){const b=books.find(b=>b.id===d.id);text+=`[Retained scoring assessment](${b.scoreReview.replace(/^analysis\//,'')}). Score **${fmt(b.total)}**; ${b.verdict}.\n\n| Criterion | Linear attainment | Contribution |\n|---|---:|---:|\n`;b.raw.forEach((v,i)=>{const m=[20,17,15,12,10,9,7,5,3,2][i];text+=`| ${['E','S','U','M','D','R','F','A','N','P'][i]} | ${fmt(v)} / ${m} | ${fmt([0,1,4].includes(i)?v*v/m:v)} |\n`;});text+='\nDeductions: '+JSON.stringify(b.deductions||{T11:b.T11,T12:b.T12,H13:b.H13,P14:b.P14,O15:b.O15})+'. Bonuses: '+JSON.stringify(b.bonuses)+'. Reference metadata: '+JSON.stringify(b.bonusAssessment)+'.\n\n';}}
write(report,text);
for(const b of before.currentBooks)assert.deepEqual(c.currentBooks.find(x=>x.id===b.id),b);
for(const b of books){const prior=old.currentBooks.find(x=>x.id===b.id)||older.currentBooks.find(x=>x.id===b.id);for(const k of ['raw','total','bonuses','deductions','sources','bonusAssessment'])assert.deepEqual(b[k],prior[k]);assert(!c.exclusions.some(x=>x.id===b.id));}
assert.equal(new Set([...c.currentBooks,...c.exclusions].map(x=>x.id)).size,c.currentBooks.length+c.exclusions.length);
assert.equal(sourcesHash,crypto.createHash('sha256').update(fs.readFileSync('SOURCES.md')).digest('hex'));
write(dir+'/verification.json',{...counts,report,sourceCounts:'unchanged',scores:'preserved exactly',membership:'unique and disjoint',rulesHash:c.audit.rulesSha256,tests:'pending'});
console.log({report,...counts});
