import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {format as fmt} from '../../site/model.mjs';
const dir='data/intake_continue_261024', priorDir='data/intake_batch_261024';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')), write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const previous=priorDir+'/compiled.json', c=read(previous), baseline=structuredClone(c), all=[...c.currentBooks,...c.exclusions];
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim();
const unique=a=>[...new Set(a)], names=Object.fromEntries(read(priorDir+'/inputs.json').map(s=>[s.source,s]));
const short={268:'aerobooks',269:'binder',270:'fabioxie',272:'ezrascience',273:'koch',274:'friedan',276:'misiti',278:'sinclarius',284:'precision',285:'aspe'};
const stamp='261024_2325', report=s=>`analysis/analysis_${short[s]}_${stamp}.md`;
const esc=s=>String(s??'').replace(/\|/g,'&#124;').replace(/\n/g,' '), link=(t,u)=>`[${esc(t)}](${u})`;
const verdict=b=>b.status==='vetoed'?'Vetoed; counterfactual score':b.total>=85?'Recommend':b.total>=75?'Consider':b.total>=65?'Selective':b.total>=50?'Low priority':'Poor fit';
const priorLink=p=>p?.startsWith('analysis/')?'../'+p:'../analysis/'+p;
// Keep the ambiguous audio program pending instead of treating a title prefix as proof of identity.
const resolved=read(dir+'/resolved.json').filter(x=>!x.title.startsWith('Flow: Living'));
resolved.push({source:274,id:'intake-0889',title:'Niels Bohr’s times in physics, philosophy, and polity',author:'Abraham Pais',canonicalTitle:"Niels Bohr's Times",status:'recommended'});
for(const x of resolved){const b=all.find(b=>b.id===x.id);assert(b);assert.equal(b.status,x.status);}
const updates=[];
for(const b of c.currentBooks){
 const added=unique(resolved.filter(x=>x.id===b.id).map(x=>x.source)).filter(s=>!b.sources.includes(s));
 if(!added.length)continue;
 const oldSources=[...b.sources], oldTotal=b.total, oldREL=b.bonuses.REL, priorReview=b.scoreReview||b.reviewAnchor;
 b.sources=unique([...b.sources,...added]).sort((a,b)=>a-b);b.sourceIds=[...b.sources];
 b.bonuses.REL=2*Math.sqrt(b.sources.length-1);b.total=oldTotal-oldREL+b.bonuses.REL;b.unroundedTotal=b.total;b.displayScore=fmt(b.total);b.verdict=verdict(b);b.bonusAssessment.sources=b.sources.length;b.scoreReview=report(added[0])+'#'+b.id;
 updates.push({id:b.id,title:b.title,status:b.status,oldSources,sources:b.sources,added,oldTotal,total:b.total,oldREL,REL:b.bonuses.REL,priorReview});
}
const editions=read('site/editions.json'), refs=read('site/reference-pages.json'), categories=read('site/exclusion-categories.json');
const newBooks=read(dir+'/decisions.json'), keys=['E','S','U','M','D','R','F','A','N','P'], max=[20,17,15,12,10,9,7,5,3,2];
for(const b of newBooks){
 assert(!all.some(x=>norm(x.title)===norm(b.title)||norm(x.title)===norm(b.title.split(':')[0])),b.title);
 b.status='recommended';b.entryDate='2026-10-24';b.firstYear=b.year;b.sourceIds=[...b.sources];b.confidence='low';b.evidenceConfidence='low';b.yearConfidence='moderate';b.periodConfidence=b.id==='continue-valley'?'low':'moderate';
 b.reviewAnchor=report(b.sources[0])+'#'+b.id;b.scoreReview=b.reviewAnchor;b.currentReview=report(b.sources[0]);
 b.purchaseUrl=b.isbn?'https://www.amazon.de/dp/'+b.isbn:'https://www.amazon.de/s?k='+encodeURIComponent(b.title+' '+b.author);b.titleCell=link(b.title,b.purchaseUrl);
 b.evidence=[names[b.sources[0]].url,b.metadata,...b.extraEvidence];
 b.criteria=keys.map((code,i)=>({code,max:max[i],linearPoints:b.raw[i],contribution:[0,1,4].includes(i)?b.raw[i]**2/max[i]:b.raw[i],assessment:b.notes[i]}));
 b.deductions={T11:b.T11,T12:b.T12,H13:b.periodEnd==null?0:-Math.min(12,Math.max(0,2026-b.periodEnd)/25),P14:-Math.min(10,Math.max(0,2026-b.year)/10),O15:0};
 b.bonuses={REL:2*Math.sqrt(b.sources.length-1),RD:b.referencePages==null?0:20*b.referencePages/b.pages};
 b.total=b.criteria.reduce((s,x)=>s+x.contribution,0)+Object.values(b.deductions).reduce((s,x)=>s+x,0)+b.bonuses.REL+b.bonuses.RD;b.unroundedTotal=b.total;b.displayScore=fmt(b.total);b.verdict=verdict(b);
 b.amazon={count:null,url:b.purchaseUrl,asin:b.isbn||null,marketplace:'amazon.de',retrievedAt:'2026-10-24',confidence:'unknown',status:'No verified aggregate obtained; O15 = 0 fallback. Auxiliary ratings deferred.'};
 const edition=b.pageEdition||(b.isbn?'ISBN:'+b.isbn:b.title+' ('+b.editionYear+')');
 b.bonusAssessment={sources:b.sources.length,pages:b.pages,referencePages:b.referencePages??null,pageEdition:edition,referenceEdition:b.referencePages==null?null:edition,ratio:b.referencePages==null?null:b.referencePages/b.pages,sameEdition:b.referencePages!=null,confidence:b.referencePages==null?'unknown':'moderate',fallback:b.referencePages==null,reason:b.referencePages==null?'Reference pages unknown; RD = 0 explicit fallback. No count inferred.':`${b.referencePages} bibliography pages / ${b.pages} total pages from the same library edition record; RD = ${fmt(b.bonuses.RD)}. In-text notes are not counted without documented spans.`};
 editions[b.id]={id:edition,url:b.metadata,pages:b.pages,year:b.editionYear,language:'English',format:b.format,retrieved:'2026-10-24',confidence:'moderate'};
 refs[b.id]={pages:b.referencePages??null,confidence:b.referencePages==null?'unknown':'moderate',reason:b.bonusAssessment.reason,ranges:b.referenceRange?[{start:b.referenceRange[0],end:b.referenceRange[1],label:'Bibliography'}]:[],edition:b.referencePages==null?null:{id:edition},url:b.referencePages==null?'':b.metadata,sameEditionAsPG:b.referencePages!=null,limitation:'Documented bibliography only; no inferred reference-page count.'};
 c.currentBooks.push(b);all.push(b);
}
const newExcluded=[];
for(const [title,author,reason] of read(dir+'/exclusions.json')){
 const old=all.find(b=>norm(b.title)===norm(title));assert(!old,`Already present: ${title}`);
 const id='continue-ex-'+crypto.createHash('sha256').update(title).digest('hex').slice(0,10);
 const b={id,title,author,status:'excluded',sources:[285],exclusion:'H3',confidence:'high',reason,analysis:report(285)+'#'+id,evidence:[names[285].url],line:`- ${title} — ${author}`};
 c.exclusions.push(b);all.push(b);newExcluded.push(b);categories[id]='Technology, Engineering, Innovation';
}
c.exclusions.sort((a,b)=>a.title.localeCompare(b.title,'en',{sensitivity:'base'})||a.author.localeCompare(b.author));
const queue=read(priorDir+'/pending.json');
const aliasEx={'formulae for stress and strain':"roark s formulas for stress and strain",'development in nanotechnology volume 2 foundations of ultraprecision mechanism design':'foundations of ultraprecision mechanism design'};
const eq=(a,b)=>norm(a)===norm(b)||norm(a).replace(/^the /,'')===norm(b).replace(/^the /,'');
const done=x=>resolved.some(r=>r.source===x.source&&eq(r.title,x.title))||newBooks.some(b=>b.sources.includes(x.source)&&(eq(b.title,x.title)||eq(b.title.split(':')[0],x.title)))||newExcluded.some(b=>x.source===285&&(eq(b.title,x.title)||aliasEx[norm(x.title)]===norm(b.title)));
let pending=queue.filter(x=>!done(x));
// The earlier extractor omitted table rows on the small museum page. Preserve these named candidates explicitly.
for(const [source,title,author] of [[284,'Muskets to Mass Production: The Men and the Times that Shaped American Manufacturing','Edwin A. Battison'],[284,'Arming the Union: Gunmakers in Windsor, Vermont','Carrie Brown'],[284,'Vermont’s Gunsmiths & Gunmakers to 1900','Harry Phillips; Terry Tyler'],[274,'The Feeling of Power','Isaac Asimov']]){
 if(!all.some(b=>eq(b.title,title))&&!pending.some(x=>x.source===source&&eq(x.title,title)))pending.push({source,title,author,status:'Unreviewed candidate; no recommendation or source bonus awarded.'});
}
write(dir+'/pending.json',pending);write(dir+'/applied-aliases.json',resolved);write(dir+'/updates.json',updates);write(dir+'/new-books.json',newBooks);write(dir+'/new-excluded.json',newExcluded);
const byId=new Map(all.map(b=>[b.id,b]));
const rowKey=r=>r[2]+'|'+(r[3].match(/^\[([^\]]+)\]/)?.[1]||r[3]);
for(const [file,status] of [['RECOMMENDED_BOOKS.md','recommended'],['VETOED_BOOKS.md','vetoed']]){
 const lines=fs.readFileSync(file,'utf8').split(/\r?\n/), rows=new Map(lines.filter(l=>/^\| \d{4}-/.test(l)).map(l=>{const r=l.split('|').slice(1,-1).map(s=>s.trim());return[rowKey(r),r];}));
 const out=c.currentBooks.filter(b=>b.status===status).sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title)).map(b=>{
  let r=rows.get(b.author+'|'+b.title);
  if(!r){assert.equal(status,'recommended');r=[b.entryDate,''+b.year,b.author,b.titleCell,'','','','Unknown',link(b.pages,b.metadata),b.referencePages==null?'Unknown':link(b.referencePages,b.metadata),''];}
  r[4]=fmt(b.total);if(status==='recommended'){r[5]=fmt(b.bonuses.REL);r[6]=fmt(b.bonuses.RD);r[10]=b.sources.join(', ');}else{r[7]=b.sources.join(', ');r[10]=fmt(b.bonuses.REL);r[11]=fmt(b.bonuses.RD);}return '| '+r.join(' | ')+' |';
 });
 write(file,lines.filter(l=>!/^\| \d{4}-/.test(l)).join('\n').trimEnd()+'\n'+out.join('\n')+'\n');
}
write('EXCLUDED_BOOKS.md','# Excluded books\n\n'+c.exclusions.map(b=>b.line||`- ${b.title} — ${b.author}`).join('\n')+'\n');
const touched=unique([...resolved.map(x=>x.source),...newBooks.flatMap(b=>b.sources),285]).sort((a,b)=>a-b);
for(const source of touched){
 const ids=unique([...resolved.filter(x=>x.source===source).map(x=>x.id),...newBooks.filter(b=>b.sources.includes(source)).map(b=>b.id),...newExcluded.filter(b=>b.sources.includes(source)).map(b=>b.id)]), books=ids.map(id=>byId.get(id));
 let out=`# Source ${source}: continuation\n\nReviewed 2026-10-24, Europe/Warsaw. ${link('Source',names[source].url)}. Existing source ID retained; no source row added.\n\nThis is a partial supplement to ${link('the earlier intake',`analysis_${short[source]}_261024_2307.md`)}. It covers the decisions below, not the full source. ${link('Captured source text','../'+priorDir+'/'+source+'.txt')}; ${link('current pending queue','../'+dir+'/pending.json')}. Existing status, raw criteria, deductions and R&D are retained under the user’s explicit instruction. Repeated mentions do not add another source bonus.\n\n## Ranked eligible books handled in this continuation\n\n| Score / verdict | Reader rating | Author | Year | Title |\n|---|---|---|---:|---|\n`;
 for(const b of books.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total))out+=`| ${fmt(b.total)} · ${b.verdict} | ${b.reader||'Unknown; auxiliary lookup deferred'} | ${esc(b.author)} | ${b.year} | ${link(b.title,b.purchaseUrl||names[source].url)} |\n`;
 out+='\n## Decision audit\n\n';
 for(const b of books){
  out+=`<a id="${b.id}"></a>\n\n### ${esc(b.title)} — ${esc(b.author)}\n\n`;
  const aliases=resolved.filter(x=>x.source===source&&x.id===b.id).map(x=>x.title);if(aliases.length)out+='Source wording: '+aliases.join('; ')+'. Same work; subtitle, punctuation or edition wording does not create a new identity.\n\n';
  if(b.status==='excluded'){out+=`Hard excluded; no score. ${b.reason||b.exclusion||'Prior exclusion retained.'} Confidence: ${b.confidence||'retained'}. `+(newExcluded.includes(b)?'Source bibliography identifies the technical work. H3 applies before vetoes.':'Existing exclusion retained; no second list entry or score created.')+'\n\n';continue;}
  const u=updates.find(x=>x.id===b.id);
  if(newBooks.includes(b))out+=b.note+' Assessment confidence: low. Eligibility confidence: moderate. Density estimates are not recalibrations of the existing catalog.\n\n';
  else if(u)out+=`Prior decision and assessment retained: ${link('prior analysis',priorLink(u.priorReview))}. Sources ${u.oldSources.join(', ')} → ${b.sources.join(', ')}. REL ${fmt(u.oldREL)} → ${fmt(b.bonuses.REL)}; score ${fmt(u.oldTotal)} → ${fmt(b.total)}. Confidence retained: ${b.evidenceConfidence||b.confidence||'unknown'}.\n\n`;
  else out+=`Already counted for this source. No score or source-count change. ${link('Existing assessment',priorLink(b.scoreReview||b.reviewAnchor))}.\n\n`;
  if(b.status==='vetoed')out+=`Veto retained: ${b.veto}; confidence ${b.vetoConfidence||'retained'}. Counterfactual score only; this is not a recommendation. ${b.vetoReason||b.categoryReview?.reason||'See linked prior analysis for the retained rationale.'}\n\n`;
  out+='Criteria E, S, U, M, D, R, F, A, N, P. Linear attainment: '+b.raw.map(fmt).join(', ')+'. Contributions: '+b.raw.map((v,i)=>fmt([0,1,4].includes(i)?v*v/max[i]:v)).join(', ')+'.\n\n';
  const d=b.deductions||{T11:b.T11,T12:b.T12,H13:b.periodEnd==null?0:-Math.min(12,Math.max(0,2026-b.periodEnd)/25),P14:-Math.min(10,Math.max(0,2026-b.year)/10),O15:b.amazon?.count==null?0:b.amazon.count<10?-20:b.amazon.count<100?-10:b.amazon.count<1000?-5:0};out+=Object.entries(d).map(([k,v])=>`${k} ${fmt(v)}`).join('; ')+`; REL ${fmt(b.bonuses.REL)}; RD ${fmt(b.bonuses.RD)}; **score ${fmt(b.total)}**. Distinct source IDs: ${b.sources.join(', ')}.\n\n`;
  if(newBooks.includes(b)){
   out+=b.criteria.map(x=>`- ${x.code}: ${x.assessment}`).join('\n')+'\n\n';
   out+=`Original year: ${b.year}, confidence moderate. Historical endpoint: ${b.periodEnd??'none (broad cross-period or non-period account)'}, confidence ${b.periodConfidence}. RD: ${b.referencePages??'unknown'} reference pages / ${b.pages} pages; page edition ${b.bonusAssessment.pageEdition}; reference edition ${b.bonusAssessment.referenceEdition??'unknown'}; ratio ${b.bonusAssessment.ratio==null?'unknown':(100*b.bonusAssessment.ratio).toFixed(4)+'%'}; confidence ${b.bonusAssessment.confidence}. ${b.bonusAssessment.reason}\n\nReader ratings and matching Amazon aggregates unavailable; O15 = 0 fallback, not a claim of zero ratings. Product availability is unverified. ${b.isbn?'Purchase link uses the documented print ISBN; paperback preferred where identified.':'No verified product ISBN; Amazon search link is a deferred purchase-link fallback.'}\n\nEvidence: `+b.evidence.map((u,i)=>link('evidence '+(i+1),u)).join('; ')+'.\n\n';
  }
 }
 if(source===278)out+='Flow: Living at the Peak of Your Abilities remains pending: an audio-original listing makes identity with the printed Flow uncertain. No new source credit from this alias. Evidence: [Google Play](https://play.google.com/store/audiobooks/details/Mihaly_Csikszentmihalyi_Flow?id=AQAAAECG7xCvhM); [audio-original catalog](https://www.learnoutloud.com/Catalog/Self-Development/Creativity/Flow/3286).\n';
 if(source===274)out+='\nPowers of Ten is a film; Quantum is a magazine; the two Feynman character essays are articles. These are not added as books. The Feeling of Power remains pending for book-form identity handling. Generic warnings about authors do not nominate additional titles.\n';
 if(source===285)out+='\nThe duplicate Foundations of Ultraprecision Mechanism Design entries are one work. The two Coordinate Measuring Machines and Systems entries are editions of one work. Technical theses, articles, ambiguous proceedings and mixed historical/technical collections remain unprocessed; no book or source credit is inferred from a bibliography entry alone.\n';
 write(report(source),out);
}
let sources=fs.readFileSync('SOURCES.md','utf8').split(/\r?\n/);
for(const source of touched){const i=sources.findIndex(l=>l.startsWith(`| ${source} |`));assert(i>=0);const cell=sources[i].split('|');if(!sources[i].includes(report(source)))cell[4]=' '+link('Continuation (partial)',report(source))+'; '+cell[4].trim()+' ';sources[i]=cell.join('|');}
write('SOURCES.md',sources.join('\n'));
const result={date:'2026-10-24',previous,sources:touched,newSourceIds:0,aliasesResolved:resolved.length,updatedWorks:updates.length,newSourceLinks:updates.reduce((s,u)=>s+u.added.length,0),newRecommended:newBooks.length,newVetoed:0,newExcluded:newExcluded.length,pendingCandidates:pending.length,coverage:'partial',pendingFile:dir+'/pending.json'};
c.audit.latestContinuation=result;
// Verify preservation of all earlier gate decisions and scoring inputs, and exact once-only source increments.
for(const before of baseline.currentBooks){const after=c.currentBooks.find(b=>b.id===before.id);assert(after);for(const k of ['status','raw','deductions','T11','T12','periodEnd','year'])assert.deepEqual(after[k],before[k]);assert.equal(after.bonuses.RD,before.bonuses.RD);assert(Math.abs(after.total-(before.total-before.bonuses.REL+2*Math.sqrt(after.sources.length-1)))<1e-9);}
assert.equal(new Set(all.map(b=>b.id)).size,all.length);for(const b of c.currentBooks)assert.equal(b.sources.length,new Set(b.sources).size);
for(const b of newBooks)assert(!c.exclusions.some(e=>norm(e.title)===norm(b.title)));
write(dir+'/compiled.json',c);write('site/editions.json',editions);write('site/reference-pages.json',refs);write('site/exclusion-categories.json',categories);write('data/catalog.json',{compiled:dir+'/compiled.json'});write(dir+'/result.json',result);
write(`analysis/analysis_continuation_${stamp}.md`,`# Batch continuation\n\nPartial continuation of the supplied source batch. No new source IDs. ${resolved.length} aliases resolved; ${updates.length} existing works updated with ${result.newSourceLinks} new distinct book/source links. Existing gates and criterion assessments retained. ${newBooks.length} new eligible books scored, ${newExcluded.length} technical books hard excluded. No new veto decisions.\n\n${link('Current pending queue','../'+dir+'/pending.json')}: ${pending.length} source/title candidates; this is not an exhaustive inventory or a count of unique new books. Earlier queue files are history. Flow audio identity is deliberately unresolved.\n\n${touched.map(s=>'- '+link('Source '+s,report(s).replace('analysis/',''))).join('\n')}\n\n${link('Machine-readable change audit','../'+dir+'/result.json')} and ${link('source-link changes','../'+dir+'/updates.json')}. Original source captures reused; no whole-source rescan.\n`);
console.log(JSON.stringify(result));
