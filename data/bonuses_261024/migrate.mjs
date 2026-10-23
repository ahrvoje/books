import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {REGISTRY, bonusValues, format} from '../../site/model.mjs';
const dir='data/bonuses_261024', read=p=>JSON.parse(fs.readFileSync(p)), write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const pointer=read('data/catalog.json');
assert.notEqual(pointer.compiled,dir+'/compiled.json','Migration already applied; never add bonuses twice.');
const inputFiles=['AGENTS.md','RECOMMENDED_BOOKS.md','VETOED_BOOKS.md','EXCLUDED_BOOKS.md','site/editions.json','site/reference-pages.json','site/enrichment.json','data/catalog.json',pointer.compiled];
const hashes=Object.fromEntries(inputFiles.map(p=>[p,crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')]));
if(fs.existsSync(dir+'/inputs.json'))assert.deepEqual(read(dir+'/inputs.json'),hashes,'Migration inputs changed.');else write(dir+'/inputs.json',hashes);
write(dir+'/baseline.json',pointer);
const compiled=read(pointer.compiled),editions=read('site/editions.json'),enrichment=read('site/enrichment.json'),references=read('site/reference-pages.json');
const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Warsaw',year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).map(x=>[x.type,x.value]));
const report=`analysis/analysis_scorebonus_${parts.year}${parts.month}${parts.day}_${parts.hour}${parts.minute}.md`;
const records=[];
for(const b of compiled.currentBooks){
 assert(!b.bonuses,'Already adjusted: '+b.id);
 const s=new Set(b.sources).size, e=b.status==='recommended'?(enrichment.books[b.id]?.edition||editions[b.id]):editions[b.id],r=references[b.id];
 assert(s>=1&&r,'Missing provenance: '+b.id);
 const v=bonusValues(s,e?.pages??null,r.pages),before=b.total;
 const matching=!!r.sameEditionAsPG;
 const ratio=v.RD===null?null:r.pages/e.pages;
 const reason=v.RD===null?'R&D input unavailable; zero-point fallback. Page counts remain unknown.':`${r.pages} reference pages / ${e.pages} total pages = ${format(100*ratio)}%; R&D = ${format(v.RD)} points. ${matching?'Edition recorded as matching.':'Estimate from available counts; editions differ or matching is unconfirmed.'}${ratio>1?' Reference count exceeds total pages; inconsistent ratio flagged, not capped.':''}`;
 b.bonuses={REL:v.REL??0,RD:v.RD??0};
 b.bonusAssessment={sources:s,pages:e?.pages??null,referencePages:r.pages,pageEdition:e?.id??null,referenceEdition:r.edition?.id??null,ratio,sameEdition:matching,confidence:ratio===null?'unknown':matching?'moderate':'low',fallback:v.RD===null,reason};
 b.total=before+b.bonuses.REL+b.bonuses.RD;b.displayScore=format(b.total);
 if(Object.hasOwn(b,'unroundedTotal'))b.unroundedTotal=b.total;
 b.verdict=b.total>=85?'Recommend':b.total>=75?'Consider':b.total>=65?'Selective':b.total>=50?'Low priority':'Poor fit';
 b.scoreReview=report+'#'+b.id;
 const contributions=Object.fromEntries(REGISTRY.slice(0,10).map((r,i)=>[r.id,(b.points||b.contributions)[i]]));
 const deductions=Object.fromEntries(['T11','T12','H13','P14','O15'].map(k=>[k,b.deductions?.[k]??b[k]]));
 assert(Math.abs(Object.values(contributions).reduce((a,b)=>a+b,0)+Object.values(deductions).reduce((a,b)=>a+b,0)-before)<1e-9,b.id+' prior breakdown');
 records.push({id:b.id,title:b.title,author:b.author,status:b.status,sources:b.sources,before,contributions,deductions,bonuses:b.bonuses,assessment:b.bonusAssessment,after:b.total,verdict:b.verdict,contentConfidence:b.evidenceConfidence||b.confidence||b.scoreConfidence||'unknown',pageURL:e?.url??null,referenceURL:r.url??null,prior:b.reviewAnchor||b.currentReview||b.priorReport});
}
const ordered=status=>compiled.currentBooks.filter(b=>b.status===status).sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title));
const rowMap=file=>new Map(fs.readFileSync(file,'utf8').split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const c=l.split('|').slice(1,-1).map(x=>x.trim());return [c[2]+'|'+c[3].match(/^\[([^\]]+)\]/)[1],c];}));
const rows=rowMap('RECOMMENDED_BOOKS.md'),vetoRows=rowMap('VETOED_BOOKS.md');
const recommended='| Entry date | First publication year | Author | Title | Score | Relevance | R&D | Amazon ratings | Pages (edition) | Reference pages | Sources |\n|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|\n'+ordered('recommended').map(b=>{const r=rows.get(b.author+'|'+b.title);assert(r);return '| '+[...r.slice(0,4),format(b.total),format(b.bonuses.REL),format(b.bonuses.RD),...r.slice(5)].join(' | ')+' |';}).join('\n')+'\n';
const veto='# Vetoed books\n\nUpdated **2026-10-24, Europe/Warsaw**. '+ordered('vetoed').length+' unique works. [Current scoring breakdown]('+report+'). Scores remain counterfactual and do not override vetoes. Earlier assessments remain linked per title.\n\n| Entry date | First year | Author | Title | Counterfactual score | Veto | Veto confidence | Sources | Pages (edition) | Amazon ratings | Relevance | R&D |\n|---|---|---|---|---:|---|---|---|---:|---:|---:|---:|\n'+ordered('vetoed').map(b=>{const r=vetoRows.get(b.author+'|'+b.title);assert(r);r[4]=format(b.total);return '| '+[...r,format(b.bonuses.REL),format(b.bonuses.RD)].join(' | ')+' |';}).join('\n')+'\n';
const summary={recommended:ordered('recommended').length,vetoed:ordered('vetoed').length,relevancePositive:records.filter(r=>r.bonuses.REL>0).length,rdKnown:records.filter(r=>!r.assessment.fallback).length,rdEstimated:records.filter(r=>!r.assessment.fallback&&!r.assessment.sameEdition).length,rdUnknown:records.filter(r=>r.assessment.fallback).length,inconsistentRatios:records.filter(r=>r.assessment.ratio>1).map(r=>r.id),above100:records.filter(r=>r.after>100).length,report};
let text='# Relevance and R&D scoring update\n\n24 October 2026, Europe/Warsaw. All current recommended and vetoed scores are recalculated. Historical analyses and exclusions are preserved. The original criteria, deductions, and content confidence are unchanged. Verdict thresholds remain 85 / 75 / 65 / 50; vetoes remain in force regardless of counterfactual scores.\n\nRelevance = `2 × sqrt(distinct sources − 1)`. R&D = `20 × reference pages / total pages`. Both use fractional points and are added once after deductions; totals can exceed 100. Available page counts are used without requiring edition confirmation, as requested. Cross-edition or unconfirmed ratios are estimates with low confidence; unavailable inputs contribute zero and remain unknown.\n\n'+`Reviewed: ${summary.recommended} recommended and ${summary.vetoed} vetoed. Relevance is positive for ${summary.relevancePositive} works. R&D inputs are available for ${summary.rdKnown}, including ${summary.rdEstimated} estimated ratios; ${summary.rdUnknown} receive the missing-data fallback. ${summary.above100} totals exceed 100. ${summary.inconsistentRatios.length} reference/total ratios exceed one and are flagged without clipping.\n\n`;
text+='The [complete audit](../'+dir+'/scores.json) records every input, both edition identities and URLs, confidence, fallback, prior analysis, all ten contributions, five deductions, two bonuses, and before/after totals. Column names identify criteria; REL is Relevance and RD is R&D.\n\n';
for(const status of ['recommended','vetoed']){
 text+='## '+(status==='recommended'?'Ranked recommendations':'Counterfactual vetoed scores')+'\n\n| Book — author | E | S | U | M | D | R | F | A | N | P | T11 | T12 | H13 | P14 | O15 | Relevance | R&D | Prior | Score |\n|---|'+Array(19).fill('---:').join('|')+'|\n';
 for(const b of ordered(status)){const r=records.find(r=>r.id===b.id);text+='| '+[`<a id="${b.id}"></a>${b.title.replaceAll('|','/')} — ${b.author.replaceAll('|','/')}`,...Object.values(r.contributions).map(format),...Object.values(r.deductions).map(format),format(r.bonuses.REL),format(r.bonuses.RD)+(r.assessment.fallback?' (unknown)':!r.assessment.sameEdition?' (estimate)':''),format(r.before),format(r.after)].join(' | ')+' |\n';}
 text+='\n';
}
compiled.audit={...compiled.audit,previous:pointer.compiled,rulesSha256:hashes['AGENTS.md'],scoreBonusReview:report,scoringProfile:'17 rules: quadratic E/S/D, five deductions, uncapped REL/RD'};
write(dir+'/compiled.json',compiled);write(dir+'/scores.json',records);write(dir+'/summary.json',summary);write(dir+'/analysis.md',text);write(dir+'/recommended.md',recommended);write(dir+'/vetoed.md',veto);
if(process.argv.includes('--write')){assert(!fs.existsSync(report));write(report,text);write('RECOMMENDED_BOOKS.md',recommended);write('VETOED_BOOKS.md',veto);write('data/catalog.json',{compiled:dir+'/compiled.json'});}
console.log(summary);
