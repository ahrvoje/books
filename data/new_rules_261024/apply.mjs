import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { format } from '../../site/model.mjs';
const dir='data/new_rules_261024/', read=p=>fs.readFileSync(p,'utf8'), json=p=>JSON.parse(read(p));
const baseline=json(dir+'baseline.json'), old=json(baseline.previousPath), data=structuredClone(old), decisions=json(dir+'decisions.json');
const hash=p=>crypto.createHash('sha256').update(read(p)).digest('hex');
for(const [p,h] of Object.entries(baseline.files)) assert.equal(hash(p),h,'Baseline changed: '+p);
const report='analysis/analysis_newrules_261024_2005.md', date='2026-10-24';
const write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const editions=json('site/editions.json'), refs=json('site/reference-pages.json'), categories=json('site/exclusion-categories.json'), enrichment=json('site/enrichment.json');
const byId=new Map(data.currentBooks.map(b=>[b.id,b])), decisionMap=new Map(decisions.map(d=>[d.id,d]));
const removed=new Set(), archive={editions:{},referencePages:{},enrichment:{},aliases:[]};
const oldRows=p=>new Map(read(p).split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const r=l.split('|').slice(1,-1).map(s=>s.trim());return [r[2]+'|'+(r[3].match(/^\[([^\]]+)\]/)?.[1]||r[3]),{line:l,cells:r}];}));
// Recommendation enrichment can own the edition used by the score. Preserve it when moving to vetoes.
for(const d of decisions) if(d.status==='vetoed'&&enrichment.books[d.id]?.edition) editions[d.id]=enrichment.books[d.id].edition;
const recRows=oldRows('RECOMMENDED_BOOKS.md'), vetoRows=oldRows('VETOED_BOOKS.md');
for(const d of decisions){
 const b=byId.get(d.id); assert(b&&b.status===d.previousStatus); assert(d.reason&&d.priorRefs.length);
 const review={date,rule:d.rule,previousStatus:b.status,status:d.status,reason:d.reason,confidence:d.confidence,borderline:d.borderline,evidence:d.evidence,priorReviews:d.priorRefs,analysis:report+'#'+b.id};
 if(d.status==='excluded'){
  removed.add(b.id);
  data.exclusions.push({id:b.id,title:b.title,author:b.author,status:'excluded',exclusion:d.rule,reason:d.reason,confidence:d.confidence,sources:b.sources,evidence:[...d.evidence,...d.priorRefs],analysis:review.analysis,line:`- ${b.title} — ${b.author}`,categoryReview:review});
  categories[b.id]=d.rule==='H6'?'Business, Economy, Geostrategy':/computer|computing/i.test(b.title)?'Computing, IT':/machine|inven|engineer|things work|crayon|subway|planes|airplane|construction|digger|ramen|popsicle|ferris|robots|wright|jobs|musk|fire truck/i.test(b.title)?'Technology, Engineering, Innovation':/science|mathemat|element|reality|everything|noether|johnson|galile|tesla|dots|bath|carver|curie/i.test(b.title)?'Mathematics, Physics, Science':'Misc. Non-fiction';
 }else{
  b.status='vetoed'; b.veto=d.rule; b.vetoConfidence=d.confidence;b.vetoReason=d.reason;b.verdict='Vetoed; counterfactual score';b.categoryReview=review;
  b.priorReviews=[...new Set([...(b.priorReviews||[]),...d.priorRefs])];b.reviewAnchor=review.analysis;b.currentReview=report;b.scoreReview=review.analysis;
 }
}
const merges=[['rem-u0536','n80f32c33f2'],['shelf-b618de3bb1e8','q0909'],['rem-u1895','q1029']];
for(const [aliasId,keepId] of merges){
 const alias=byId.get(aliasId),b=byId.get(keepId),priorSources=[...b.sources];
 assert(alias&&b); removed.add(aliasId);
 b.sources=[...new Set([...b.sources,...alias.sources])].sort((a,b)=>a-b);
 const previousTotal=b.total, previousREL=b.bonuses.REL;
 b.bonuses.REL=2*Math.sqrt(b.sources.length-1);b.total+=b.bonuses.REL-previousREL;b.displayScore=b.total.toFixed(2);b.unroundedTotal=b.total;
 b.bonusAssessment.sources=b.sources.length;b.sourceIds=[...b.sources];
 b.aliases=[...(b.aliases||[]),{id:alias.id,title:alias.title,author:alias.author}];
 b.priorReviews=[...new Set([...(b.priorReviews||[]),alias.reviewAnchor,alias.scoreReview].filter(Boolean))];
 if(keepId==='q1029'){b.veto='V5; V8';b.vetoReason='The Tao and its implications for conduct are central religious and spiritual philosophy; V8 supplements the retained V5 decision.';b.vetoConfidence='moderate';}
 b.reviewAnchor=report+'#'+b.id;b.scoreReview=b.reviewAnchor;
 archive.aliases.push({aliasId,keepId,priorSources,addedSources:alias.sources,previousTotal,previousREL,total:b.total,reason:'Same work under alternate title. Retain the established canonical assessment and its metadata; do not average conflicting scores. Recalculate only source-coverage bonus.'});
}
data.currentBooks=data.currentBooks.filter(b=>!removed.has(b.id));
for(const b of old.currentBooks){
 if(removed.has(b.id))for(const [name,obj,key] of [['editions',editions,'editions'],['referencePages',refs,'referencePages']])if(obj[b.id]){archive[key][b.id]=obj[b.id];delete obj[b.id];}
 if((removed.has(b.id)||decisionMap.get(b.id)?.status==='vetoed')&&enrichment.books[b.id]){archive.enrichment[b.id]=enrichment.books[b.id];delete enrichment.books[b.id];}
}
data.exclusions.sort((a,b)=>(a.line||a.title).replace(/^- /,'').localeCompare((b.line||b.title).replace(/^- /,''),'en',{sensitivity:'base'}));
const counts={recommended:data.currentBooks.filter(b=>b.status==='recommended').length,vetoed:data.currentBooks.filter(b=>b.status==='vetoed').length,excluded:data.exclusions.length};
data.audit={...data.audit,rulesSha256:hash('AGENTS.md'),recommended:counts.recommended,vetoed:counts.vetoed,excluded:counts.excluded,latestEligibilityReview:{date,report,previous:baseline.previousPath,decisions:dir+'decisions.json',before:baseline.counts,after:counts,borderlineInstruction:true,aliases:archive.aliases,scope:'Collection purpose/identity screening under saved H5/H6 and V6/V7/V8, including borderline cases. Existing score assessments retained; sourceBooks remains historical provenance.'}};
const ids=new Set(data.currentBooks.map(b=>b.id)); assert.equal(ids.size,data.currentBooks.length);
assert(data.exclusions.every(b=>!ids.has(b.id)));
for(const b of data.currentBooks){
 const before=old.currentBooks.find(x=>x.id===b.id);
 assert.deepEqual(b.raw,before.raw);assert.deepEqual(b.deductions,before.deductions);assert.deepEqual(b.bonusAssessment.pages,before.bonusAssessment.pages);
 if(!merges.some(([,id])=>id===b.id))assert.equal(b.total,before.total);
}
const keepRec=data.currentBooks.filter(b=>b.status==='recommended');
write('RECOMMENDED_BOOKS.md',read('RECOMMENDED_BOOKS.md').split(/\r?\n/).filter(l=>!/^\| \d{4}-/.test(l)||keepRec.some(b=>recRows.get(b.author+'|'+b.title)?.line===l)).join('\n'));
const page=b=>editions[b.id]?`[${editions[b.id].pages}](${editions[b.id].url})`:'Unknown';
const rating=b=>b.amazon?.count==null?'Unknown':`[${b.amazon.count}](${b.amazon.url})`;
const f=format, esc=s=>String(s).replace(/\|/g,'/').replace(/[\r\n]+/g,' ');
const vetoes=data.currentBooks.filter(b=>b.status==='vetoed').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
const vetoLines=vetoes.map(b=>{
 const previous=vetoRows.get(b.author+'|'+b.title);
 if(previous&&!merges.some(([,id])=>id===b.id)&&!decisionMap.has(b.id))return previous.line;
 const r=recRows.get(b.author+'|'+b.title)?.cells;
 return `| ${b.entryDate||r?.[0]||date} | ${b.firstYear??b.year} | ${esc(b.author)} | [${esc(b.title)}](${report}#${b.id}) | ${f(b.total)} | ${b.veto} | ${b.vetoConfidence} | ${b.sources.join(', ')} | ${page(b)} | ${rating(b)} | ${f(b.bonuses.REL)} | ${f(b.bonuses.RD)} |`;
});
write('VETOED_BOOKS.md',`# Vetoed books\n\nUpdated **${date}, Europe/Warsaw**. ${counts.vetoed} unique works. [Current counterfactual breakdowns and eligibility review](${report}). Scores suspend only the veto gate. Earlier analyses remain history.\n\n| Entry date | First year | Author | Title | Counterfactual score | Veto | Veto confidence | Sources | Pages (edition) | Amazon ratings | Relevance | R&D |\n|---|---|---|---|---:|---|---|---|---:|---:|---:|---:|\n${vetoLines.join('\n')}\n`);
write('EXCLUDED_BOOKS.md','# Excluded books\n\n'+data.exclusions.map(b=>b.line||`- ${b.title}${b.author?' — '+b.author:''}`).join('\n')+'\n');
const names=['Evidence','Systems integration','Strategic utility','Causal depth','Information density','Durability','Domain fit','Authority','Narrative clarity','Precision'],max=[20,17,15,12,10,9,7,5,3,2];
const parts=[`# Eligibility review — 24 October 2026, 20:05 Europe/Warsaw\n\nApplied the saved AGENTS.md rules, including the explicit instruction to include borderline cases. This is a purpose and eligibility review, not a new full-text reading or collection-wide density audit. Confidence in clear identity changes is moderate or high; borderline decisions are low confidence. Previous assessments and external checks are distinguished below. Earlier analyses and the prior catalog remain unchanged.\n\n| Status | Before | After |\n|---|---:|---:|\n${Object.keys(counts).map(k=>`| ${k} | ${baseline.counts[k]} | ${counts[k]} |`).join('\n')}\n\n${decisions.filter(d=>d.status==='excluded').length} scored records move to hard exclusion; ${decisions.filter(d=>d.status==='vetoed').length} recommended records receive a veto before alias consolidation. Three duplicate pairs are merged. All source IDs are retained. Hard exclusions receive no score. Existing scores become counterfactual when vetoed; no quality criterion or deduction changes. Only source-union changes affect REL.\n\n## Retained boundaries\n\nMarcus Aurelius’s *Meditations* stays recommended under V7’s explicit exception. *The Future of Petrochemicals*, *The Role of Critical Minerals in Clean Energy Transitions*, *Global Material Resources Outlook to 2060*, and *Funding a Revolution* retain sustained explanations of industrial mechanisms, models or historical research decisions beyond routine reporting. Institution authorship alone does not meet H6. The four excluded H6 cases contain substantive analysis too; their removal is a low-confidence application of the user’s borderline instruction, not a claim that all institutional publications are dry administration.\n\nHistorical or social analysis of religion stays eligible when doctrine is context rather than the central explanatory object. Scientific biographies do not bypass the children’s-book gate. Adult developmental psychology does not automatically become parenting advice. Existing hard exclusions remain excluded. Unchanged scores retain their previous evidence confidence and density-calibration status.\n\n## Identity merges\n\n${archive.aliases.map(a=>`- ${byId.get(a.aliasId).title} → ${byId.get(a.keepId).title}: sources ${byId.get(a.keepId).sources.join(', ')}. Canonical score ${f(a.previousTotal)} → ${f(a.total)} through REL only. ${a.reason}`).join('\n')}\n\n## Changed decisions\n`];
for(const d of decisions){parts.push(`<a id="decision-${d.id}"></a>\n\n### ${d.title} — ${d.author}\n\n${d.previousStatus} → **${d.status} (${d.rule})**. Confidence: ${d.confidence}${d.borderline?'; borderline instruction applied':''}. Sources: ${d.sources.join(', ')}.\n\n${d.reason}\n\nEvidence basis: ${d.evidenceBasis}\n\n${d.priorContent.length?'Retained assessment context: '+esc(d.priorContent[0])+'\n\n':''}References: ${[...d.priorRefs,...d.evidence].map((r,i)=>`[${i+1}](${r.startsWith('analysis/')?'../'+r:r})`).join(', ')}.\n`);}
parts.push('## Current vetoed works: full counterfactual scores\n\nAll ten criteria retain their earlier linear attainment. Evidence, systems integration and density use the quadratic profile once. Deductions and metadata are retained. These totals do not make any vetoed work recommended.\n');
for(const b of vetoes){
 const p=b.raw.map((x,i)=>[0,1,4].includes(i)?x*x/max[i]:x), dd=b.deductions||Object.fromEntries(['T11','T12','H13','P14','O15'].map(k=>[k,b[k]||0]));
 const total=p.reduce((a,b)=>a+b,0)+Object.values(dd).reduce((a,b)=>a+b,0)+b.bonuses.REL+b.bonuses.RD;
 assert(Math.abs(total-b.total)<1e-7,'Score mismatch '+b.id);
 parts.push(`<a id="${b.id}"></a>\n\n### ${b.title} — ${b.author}\n\n**${b.veto}; ${b.vetoConfidence||b.confidence||'unknown'} confidence. Counterfactual score: ${f(b.total)}.** Sources: ${b.sources.join(', ')}.\n\n${b.vetoReason||b.reason||b.eligibility||'Retained veto; see prior analysis.'}\n\n| Criterion | Linear attainment | Contribution |\n|---|---:|---:|\n${names.map((n,i)=>`| ${n} | ${f(b.raw[i])} / ${max[i]} | ${f(p[i])} |`).join('\n')}\n\n${Object.entries(dd).map(([k,v])=>`${k}: ${f(v)}`).join('; ')}. REL: ${f(b.bonuses.REL)}; RD: ${f(b.bonuses.RD)}.\n\nR&D metadata: ${JSON.stringify(b.bonusAssessment)}\n\nPrior assessment: [retained catalog](../${baseline.previousPath}); ${b.priorReviews?.filter(r=>r!==report+'#'+b.id).slice(0,3).map((r,i)=>`[analysis ${i+1}](${r.startsWith('analysis/')?'../'+r:r.startsWith('analysis_')?'../analysis/'+r:r})`).join(', ')||'[previous scoring review](analysis_scorebonus_261024_0106.md)'}.\n`);
}
let reportText=parts.join('\n');
for(const d of decisions.filter(d=>d.status==='excluded')) reportText=reportText.replace(`<a id="decision-${d.id}"></a>`,`<a id="${d.id}"></a>`);
write(report,reportText);
write(dir+'compiled.json',data);write(dir+'archived-metadata.json',archive);
write('data/catalog.json',{compiled:dir+'compiled.json'});
write('site/editions.json',editions);write('site/reference-pages.json',refs);write('site/exclusion-categories.json',categories);write('site/enrichment.json',enrichment);
write('README.md',read('README.md').replace('The active catalog is `data/top500_261024/compiled.json`.','The active catalog is `data/new_rules_261024/compiled.json`.')+'\nThe [eligibility review]('+report+') applies H5/H6 and V6–V8, including borderline cases. The collection now has '+counts.recommended+' recommended, '+counts.vetoed+' vetoed, and '+counts.excluded+' hard-excluded works. Marcus Aurelius’s *Meditations* retains its explicit exception. Three title aliases are merged; source IDs and historical analyses are preserved.\n');
assert.equal(hash('AGENTS.md'),baseline.files['AGENTS.md']);assert.equal(hash('SOURCES.md'),baseline.files['SOURCES.md']);
write(dir+'result.json',{counts,hardExclusions:decisions.filter(d=>d.status==='excluded').length,vetoDecisions:decisions.filter(d=>d.status==='vetoed').length,report,merges});
console.log(JSON.stringify(counts));
