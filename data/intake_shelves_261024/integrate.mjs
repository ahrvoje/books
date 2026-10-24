import fs from 'node:fs';import assert from 'node:assert/strict';import {dir,read,write} from './capture.mjs';
import {format} from '../../site/model.mjs';
const base='data/top500_261024/compiled.json',c=read(base),rows=read(dir+'/decisions.json'),selected=read(dir+'/selected.json'),inputs=read(dir+'/inputs.json');
const stamp='261024_1455',names=['sivers','mr2024','jermyn','carroll2015','baez','physlibrary','dukephysics','gallagher','gwern','krybus','founders','ferris','mchale','svcanon','civilcourse','tomash','nobelphys'];
const sources=inputs.filter(x=>!x.existing).map((s,i)=>({...s,report:`analysis/analysis_${names[i]}_${stamp}.md`}));
const sourceMap=new Map(sources.map(s=>[s.source,s]));
const keys=['E','S','U','M','D','R','F','A','N','P'],max=[20,17,15,12,10,9,7,5,3,2],labels=['Evidence and inferential integrity','Systems integration','Transferable strategic utility','Mechanistic and causal depth','Information density and length justification','Durability and resistance to hype','Direct domain fit','Expert authority and intellectual standing','Narrative architecture and clarity','Authorial precision and finesse'];
const fmt=format,escape=s=>String(s??'').replace(/\|/g,'&#124;').replace(/\r?\n/g,' '),link=(t,u)=>`[${escape(t)}](${u})`,union=(a,b)=>[...new Set([...a,...b])].sort((a,b)=>a-b);
const editions=read('site/editions.json'),refs=read('site/reference-pages.json'),cats=read('site/exclusion-categories.json');
const metadataOverrides=fs.existsSync(dir+'/metadata-overrides.json')?read(dir+'/metadata-overrides.json'):{};
// Idempotent rebuild from the preserved pre-intake snapshot; metadata for our own IDs is replaced.
for(const map of [editions,refs,cats])for(const id of Object.keys(map))if(id.startsWith('shelf-'))delete map[id];
const all=new Map([...c.currentBooks,...c.exclusions].map(b=>[b.id,b])),updates=[];
for(const b of all.values()){
 const additions=union([],rows.filter(r=>r.id===b.id).map(r=>r.source));if(!additions.length)continue;
 const before=[...(b.sources||[])],after=union(before,additions),priorTotal=b.total;b.sources=after;
 if(b.status!=='excluded'){
  const oldREL=b.bonuses.REL;b.bonuses.REL=2*Math.sqrt(after.length-1);b.total=priorTotal-oldREL+b.bonuses.REL;
  b.unroundedTotal=b.total;b.displayScore=fmt(b.total);b.bonusAssessment.sources=after.length;
  b.scoreReview=sourceMap.get(additions[0]).report+'#'+b.id;
 }
 b.sourceIntake={date:'2026-10-24',newSources:additions,previousSources:before,previousScore:priorTotal,retainedAssessment:true};
 updates.push({id:b.id,title:b.title,status:b.status,priorTotal,total:b.total,priorSources:before,sources:after});
}
for(const b of selected){
 assert(!all.has(b.id),'New ID already exists');
 b.entryDate='2026-10-24';b.currentReview=sourceMap.get(b.sources[0]).report;b.reviewAnchor=b.currentReview+'#'+b.id;b.scoreReview=b.reviewAnchor;
 const override=metadataOverrides[b.title]||{};
 b.evidence=b.sources.map(s=>sourceMap.get(s).url);if(b.metadata?.key)b.evidence.push('https://openlibrary.org'+b.metadata.key);b.evidence.push(...(override.evidence||[]));
 b.yearConfidence=override.yearConfidence||'moderate';
 if(b.status==='excluded'){
  b.reason=b.note;b.exclusion=/H2:/.test(b.note)?'FICTION':'REFERENCE';b.line=`- ${b.title}${b.author?' — '+b.author:''}`;
  cats[b.id]=b.exclusion==='FICTION'?'Fiction':b.sources.some(s=>[254,255,256,257,267].includes(s))?'Mathematics, Physics, Science':/program|comput|software/i.test(b.title)?'Computing, IT':/business|sales|writing|management|book/i.test(b.title)?'Business, Economy, Geostrategy':'Misc. Non-fiction';
  c.exclusions.push(b);all.set(b.id,b);continue;
 }
 const file=dir+'/editions/'+b.id+'.json',e=fs.existsSync(file)?read(file):null,ed=e?.edition,year=ed?.publish_date?.match(/\b(1[5-9]\d\d|20\d\d)\b/)?.[0];
 if(ed?.number_of_pages>0&&year&&!/audio/i.test(ed.physical_format||''))editions[b.id]={id:ed.key.split('/').pop(),url:'https://openlibrary.org'+ed.key,pages:ed.number_of_pages,year:+year,language:'English',format:ed.physical_format||'print; binding unspecified',retrieved:'2026-10-24',confidence:'moderate',notes:'Matching Open Library work edition; original production date is assessed separately.'};
 refs[b.id]={pages:null,confidence:'unknown',reason:'No documented reference-page range established; RD uses the explicit zero fallback.',ranges:[],edition:null,url:'',sameEditionAsPG:false};
 const notes=typeof ed?.notes==='string'?ed.notes:ed?.notes?.value||'',match=notes.match(/bibliographical references\s*\(p(?:ages|p?\.)?\s*(\d+)\s*[-–]\s*(\d+)/i);
 if(match&&+match[2]>=+match[1]){let start=+match[1],end=+match[2];refs[b.id]={pages:end-start+1,confidence:'moderate',reason:'Explicit cataloged reference range.',ranges:[{start,end,label:'bibliographical references',evidence:match[0]}],edition:{id:ed.key.split('/').pop()},url:'https://openlibrary.org'+ed.key,sameEditionAsPG:!!editions[b.id],limitation:'Catalog metadata; the physical volume was not inspected.'};}
 if(override.edition)editions[b.id]=override.edition;if(override.referencePages)refs[b.id]=override.referencePages;
 const pg=editions[b.id]?.pages??null,rp=refs[b.id].pages,ratio=pg>0&&rp!==null?rp/pg:null;
 b.bonuses.RD=ratio===null?0:20*rp/pg;b.total=b.contributions.reduce((a,v)=>a+v,0)+b.T11+b.T12+b.H13+b.P14+b.O15+b.bonuses.REL+b.bonuses.RD;
 const sameEdition=ratio!==null&&!!editions[b.id]?.id&&editions[b.id].id===refs[b.id].edition?.id;
 b.bonusAssessment={sources:b.sources.length,pages:pg,referencePages:rp,pageEdition:editions[b.id]?.id??null,referenceEdition:refs[b.id].edition?.id??null,ratio,sameEdition,confidence:ratio===null?'unknown':sameEdition?'moderate':'low',fallback:ratio===null,reason:ratio===null?'Missing reference-page or total-page count; RD = 0 fallback.':`${sameEdition?'Catalog ratio':'Estimated ratio; editions differ or are unconfirmed'}: ${rp} reference pages / ${pg} pages; RD = ${fmt(b.bonuses.RD)}.${ratio>1?' Inconsistent reference subset exceeds total extent; retained as required, not capped.':''}`};
 b.readerRating=override.readerRating||null;
 b.purchaseUrl=override.purchaseUrl||e?.amazonURL||'https://www.amazon.de/s?k='+encodeURIComponent(b.title+' '+b.author+' paperback');
 b.titleCell=link(b.title,b.purchaseUrl);b.amazon={count:null,url:b.purchaseUrl,marketplace:'amazon.de',asin:e?.isbn??'',retrievedAt:'2026-10-24',status:e?'Retrieval attempted; no verified matching rating aggregate recovered. Unknown count; O15 = 0 fallback.':'No verified aggregate available; O15 = 0 fallback.',confidence:'unknown',attempts:e?.attempts||[]};
 b.firstYear=b.year;b.displayScore=fmt(b.total);b.unroundedTotal=b.total;b.verdict=b.status==='vetoed'?'Vetoed; counterfactual score':b.total>=85?'Recommend':b.total>=75?'Consider':b.total>=65?'Selective':b.total>=50?'Low priority':'Poor fit';
 b.criteria=keys.map((code,i)=>({code,name:labels[i],max:max[i],power:[0,1,4].includes(i)?2:1,linearPoints:b.raw[i],contribution:b.contributions[i],assessment:b.note}));
 b.deductions={T11:b.T11,T12:b.T12,H13:b.H13,P14:b.P14,O15:b.O15};b.evidenceConfidence='low';b.densityAssessment={confidence:'low',refs:b.evidence,note:'Source reader report and available bibliographic description; no broad direct-text coverage. '+b.note};
 c.currentBooks.push(b);all.set(b.id,b);
}
const currentIds=new Set(c.currentBooks.map(b=>b.id));assert.equal(currentIds.size,c.currentBooks.length);
const identity=b=>(b.author+'|'+b.title).normalize('NFKC').toLowerCase();assert.equal(new Set(c.currentBooks.map(identity)).size,c.currentBooks.length,'Duplicate scored identity');
c.exclusions.sort((a,b)=>a.title.localeCompare(b.title,'en',{sensitivity:'base'})||a.author.localeCompare(b.author));
c.audit.latestShelfIntake={date:'2026-10-24',previous:base,sources:sources.map(s=>s.source),skipped:[139],sourceMatchingComplete:true,assessmentComplete:true,sourceCoverageComplete:false,coverageLimitations:["252:24 of39comments not recovered","266:403;indexed source description only"],updatedExisting:updates.length,newVetoed:selected.filter(b=>b.status==='vetoed').length,newRecommended:selected.filter(b=>b.status==='recommended').length,newExcluded:selected.filter(b=>b.status==='excluded').length,unresolved:read(dir+'/research-queue.json').length,report:sources[0].report};
write(dir+'/compiled.json',c);write(dir+'/updates.json',updates);write('data/catalog.json',{compiled:dir+'/compiled.json'});write('site/editions.json',editions);write('site/reference-pages.json',refs);write('site/exclusion-categories.json',cats);
// Retain existing ledger cells, changing only sources and numerical bonus/score fields.
const parse=file=>fs.readFileSync(file,'utf8').split(/\r?\n/).filter(l=>/^\| \d{4}-/.test(l)).map(l=>l.split('|').slice(1,-1).map(s=>s.trim()));
const title=s=>s.match(/^\[([^\]]+)\]/)?.[1]||s,byIdentity=new Map(c.currentBooks.map(b=>[b.author+'|'+b.title,b]));
const rec=parse('RECOMMENDED_BOOKS.md').filter(r=>!r[3].includes('shelf-')),veto=parse('VETOED_BOOKS.md');
const recMap=new Map(rec.map(r=>[r[2]+'|'+title(r[3]),r]));
const recRows=c.currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total||a.title.localeCompare(b.title)).map(b=>{
 let r=recMap.get(b.author+'|'+b.title);if(!r)r=[b.entryDate,String(b.year),escape(b.author),b.titleCell,'','','','Unknown',editions[b.id]?link(editions[b.id].pages,editions[b.id].url):'Unknown',refs[b.id].pages===null?'Unknown':link(refs[b.id].pages,refs[b.id].url),''];
 if(b.id.startsWith('shelf-')){r[3]=b.titleCell;r[7]='Unknown';r[8]=editions[b.id]?link(editions[b.id].pages,editions[b.id].url):'Unknown';r[9]=refs[b.id].pages===null?'Unknown':link(refs[b.id].pages,refs[b.id].url);}
 r[4]=fmt(b.total);r[5]=fmt(b.bonuses.REL);r[6]=fmt(b.bonuses.RD);r[10]=b.sources.join(', ');return '| '+r.join(' | ')+' |';});
write('RECOMMENDED_BOOKS.md',fs.readFileSync('RECOMMENDED_BOOKS.md','utf8').split(/\r?\n/).slice(0,2).join('\n')+'\n'+recRows.join('\n')+'\n');
const vetoMap=new Map(veto.map(r=>[r[2]+'|'+title(r[3]),r]));
const vetoRows=c.currentBooks.filter(b=>b.status==='vetoed').sort((a,b)=>b.total-a.total).map(b=>{let r=vetoMap.get(b.author+'|'+b.title);if(!r)r=[b.entryDate,String(b.year),b.author,link(b.title,b.reviewAnchor),'',b.veto,b.vetoConfidence,'',editions[b.id]?link(editions[b.id].pages,editions[b.id].url):'Unknown','Unknown','',''];r[4]=fmt(b.total);r[7]=b.sources.join(', ');r[10]=fmt(b.bonuses.REL);r[11]=fmt(b.bonuses.RD);if(b.id.startsWith('shelf-'))r[8]=editions[b.id]?link(editions[b.id].pages,editions[b.id].url):'Unknown';return '| '+r.join(' | ')+' |';});
write('VETOED_BOOKS.md',fs.readFileSync('VETOED_BOOKS.md','utf8').split(/\r?\n/).filter(l=>!/^\| \d{4}-/.test(l)).join('\n').replace(/\d+ unique works/,c.currentBooks.filter(b=>b.status==='vetoed').length+' unique works').trimEnd()+'\n'+vetoRows.join('\n')+'\n');
const exHeader=fs.readFileSync('EXCLUDED_BOOKS.md','utf8').split(/\r?\n/).filter(l=>!l.startsWith('- ')).join('\n').trim();write('EXCLUDED_BOOKS.md',exHeader+'\n\n'+c.exclusions.map(b=>b.line||`- ${b.title}${b.author?' — '+b.author:''}`).join('\n')+'\n');
let sourceLedger=fs.readFileSync('SOURCES.md','utf8').split(/\r?\n/).filter(l=>!/^\| (25[1-9]|26[0-7]) \|/.test(l)).join('\n').trimEnd();
for(const s of sources)sourceLedger+=`\n| ${s.source} | 2026-10-24 | ${link(new URL(s.url).hostname+' '+names[s.source-251],s.url)} | ${link('Source analysis',s.report)} |`;
write('SOURCES.md',sourceLedger+'\n');
const queue=read(dir+'/research-queue.json');
for(const s of sources){
 const sr=rows.filter(r=>r.source===s.source),ids=union([],sr.map(r=>r.id||r.newId).filter(id=>all.has(id))),books=ids.map(id=>all.get(id)),pending=queue.filter(b=>sr.some(r=>r.newId===b.id));
 let out=`# ${new URL(s.url).hostname}: source ${s.source}\n\nReviewed 2026-10-24, Europe/Warsaw. Source: ${link('original page',s.url)}. Tracking parameters are not part of source identity.\n\n**Intake completed for recovered material.** ${books.length} distinct catalog works linked; ${pending.length} extracted candidates remain unassessed. Raw source evidence and extraction records are retained under [the intake directory](../${dir}/). Coverage limits, where present, are stated below.\n\nThe user requested reuse of existing assessments. Existing hard exclusions and vetoes are retained. Existing scored books receive only distinct-source REL recalculation; repeated titles, comments, episodes and editions within this source count once. No repeated mention is treated as independent evidence of quality. New judgments have low confidence unless stated otherwise.\n\n`;
 if(s.source===252)out+='Coverage limitation: the page declares 39 comments; 15 were recovered from its public comments feed. Paging requests repeated those same 15, so 24 comments remain unrecovered. Main article titles were recovered separately.\n\n';
 if(s.source===251)out+='The complete captured reading index contained486book entries; linked reader notes were used for new judgments.\n\n';
 if(s.source===261)out+='Captured462episode pages and audited additional book links throughout their notes. All episodes form one source ID261. Author-store links are not book nominations. The SpaceX episode links an essay and announces an unreleased book; publication was not established, so it contributes no catalog book. The Koenigsegg episode is based on a documentary and interviews. Compilation episodes reuse the same book identities.\n\n';
 if(s.source===265)out+='The25comment bodies were captured with the main reading course.\n\n';
 if(s.source===267)out+='All13book cards on the nominated category page were captured. Related category links were not treated as book nominations.\n\n';
 if(s.source===254)out+='The main page and second comment page were captured; 33 comments were collected.\n\n';
 if(s.source===264)out+='Comment counts reconciled: 26 comment bodies plus 12 pingbacks match the displayed total of 38. The explicitly named book in a pingback was matched to its existing entry; linked articles were not treated as additional book nominations.\n\n';
 if(s.source===266)out+='Direct access returned HTTP 403; the indexed source page supplied the catalog description and the named Geometry of Compasses caption. The linked catalog itself was not expanded into thousands of separately nominated books.\n\n';
 out+='## Ranked eligible books\n\nScore is not a percentage. Reader aggregates are unknown unless an existing verified rating is retained. Search links are explicitly a fallback when no paperback product was established.\n\n| Score · verdict | Reader rating | Author | Original year | Title |\n|---:|---|---|---:|---|\n';
 for(const b of books.filter(b=>b.status==='recommended').sort((a,b)=>b.total-a.total))out+=`| ${fmt(b.total)} · ${escape(b.verdict||'retained verdict')} | ${b.readerRating?link(b.readerRating.label,b.readerRating.url):b.amazon?.count!=null?link('Amazon '+b.amazon.count+' ratings',b.amazon.url):'Unknown'} | ${escape(b.author)} | ${b.year} | ${link(b.title,b.purchaseUrl||b.titleCell?.match(/\]\(([^)]+)\)/)?.[1]||s.url)} |\n`;
 out+='\n## Work-level decisions\n';
 for(const b of books){
 out+=`\n<a id="${b.id}"></a>\n### ${escape(b.title)} — ${escape(b.author)}\n\nStatus: **${b.status}**. Sources: ${b.sources.join(', ')}.\n\n`;
 const u=updates.find(u=>u.id===b.id);
 if(u){out+=`Prior assessment retained under the explicit reuse instruction: ${link('prior analysis',(b.reviewAnchor||b.analysis||b.currentReview||b.priorReport||'').startsWith('analysis/')?'../'+(b.reviewAnchor||b.analysis||b.currentReview||b.priorReport):'../analysis/'+(b.reviewAnchor||b.analysis||b.currentReview||b.priorReport||''))}. `;if(b.status==='excluded')out+='No score assigned.\n';else out+=`Prior score ${fmt(u.priorTotal)}; current ${b.status==='vetoed'?'counterfactual ':''}score ${fmt(b.total)}. REL ${fmt(b.bonuses.REL)} from ${b.sources.length} distinct sources; all other judgments and RD ${fmt(b.bonuses.RD)} retained.\n`;continue;}
 if(b.status==='excluded'){out+=`${b.note} Confidence: ${b.confidence}. No score assigned.\n`;continue;}
 out+=`${b.note}\n\n${b.status==='vetoed'?'Veto '+b.veto+'; confidence '+b.vetoConfidence+'. '+b.vetoReason:'Eligibility: nonfiction explanatory work, with no established hard exclusion or serious veto in the inspected source report and available bibliographic evidence.'} Overall and density confidence: **low**; no full-text density audit is claimed.\n\n| Criterion | Linear attainment | Contribution |\n|---|---:|---:|\n`;
 b.criteria.forEach(k=>out+=`| ${k.code}: ${k.name} | ${fmt(k.linearPoints)} / ${k.max} | ${fmt(k.contribution)} |\n`);
 out+=`\nT11 ${fmt(b.T11)}; T12 ${fmt(b.T12)}; H13 ${fmt(b.H13)} (endpoint ${b.periodEnd??'none; cross-period or timeless'}, confidence ${b.periodEnd===null?'moderate':'low'}); P14 ${fmt(b.P14)} (original year ${b.year}, confidence ${b.yearConfidence}); O15 ${fmt(b.O15)} (unknown Amazon aggregate after attempted retrieval; fallback). REL ${fmt(b.bonuses.REL)}. RD ${fmt(b.bonuses.RD)}. **${b.status==='vetoed'?'Counterfactual score':'Score'} ${fmt(b.total)}; ${b.verdict}.**\n\nReference metadata: ${b.bonusAssessment.referencePages??'unknown'} reference pages; ${b.bonusAssessment.pages??'unknown'} total pages; reference edition ${b.bonusAssessment.referenceEdition??'unknown'}; total-page edition ${b.bonusAssessment.pageEdition??'unknown'}; ratio ${b.bonusAssessment.ratio===null?'unknown':fmt(100*b.bonusAssessment.ratio)+'%'}; confidence ${b.bonusAssessment.confidence}. ${b.bonusAssessment.reason}\n\nEvidence: ${b.evidence.map((u,i)=>/^https?:/.test(u)?link('record '+(i+1),u):escape(u)).join('; ')}. The source supplies a reader report, not an independent measurement. ${b.purchaseUrl.includes('/s?')?'Purchase link is an Amazon.de search; a paperback product has not been confirmed.':''}\n`;
 }
 const nonbooks=read(dir+'/triaged.json').filter(b=>b.status==='nonbook'&&sr.some(r=>r.newId===b.id));
 if(nonbooks.length){out+='\n## Non-book references\n\nThese items are outside all three book ledgers.\n\n';for(const b of nonbooks)out+='- '+escape(b.title)+': '+escape(b.note)+'\n';}
 write(s.report,out);
}
console.log(c.audit.latestShelfIntake);

