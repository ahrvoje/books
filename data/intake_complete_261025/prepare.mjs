import fs from 'node:fs';
import assert from 'node:assert/strict';
const d='data/intake_complete_261025/',old='data/intake_resume_261025/',read=p=>JSON.parse(fs.readFileSync(p,'utf8')),put=(p,x)=>fs.writeFileSync(d+p,JSON.stringify(x,null,2)+'\n');
const q=read(old+'pending.json');put('pending-input.json',q);
// Correct an exact duplicate and a same-title/different-author collision before integration.
let ss=read(d+'specs-009.json');ss=ss.filter(s=>!s.indices.includes(234));put('specs-009.json',ss);
ss=read(d+'specs-007.json');ss.find(s=>s.indices.includes(767)).title='A History of Rome from 753 B.C. to A.D. 410';
const catton=ss.find(s=>s.indices.includes(241));catton.extraEvidence=[catton.url];catton.url=catton.referenceUrl;catton.sameEdition=true;put('specs-007.json',ss);
const reasons={
341:'Source has this title/author pair but no ISBN or product link. Exact-title/author search found no corroborating book. Do not substitute David Blatner or an unrelated Flash in the Pan.',
350:'Bare Blockchain with unknown author and no source product link cannot distinguish technical manuals from explanatory books.',
354:'Fear and Loathing may refer to the Las Vegas fiction or the Campaign Trail nonfiction. The source gives no subtitle or product identity. No gate inferred.',
355:'Getting Read has no author or product link. Cannot distinguish a typo, a book, or a publishing-advice work.',
377:'A History of Finance lacks author, year and product link. Multiple possible works; no source credit inferred.',
390:'Exact wording has no corroborating book identity after search; source supplies no author or product link. Could be a report or an abbreviated book title.',
586:'Source product ASIN 1879557487 identifies Goulds Evolution & Extinction Essays audio anthology, not Carl Zimmers Evolution. Exact constituent print works not established; do not merge with Zimmer or infer a new print book. Source HTML and ISBN evidence saved.',
751:'Identity established as Audio Connoisseur 2004 narration by Charlton Griffin. Possible adaptation of the authors History of Civilization, but no verified edition mapping or separate print work found. Book-form eligibility remains unconfirmed.',
886:'Individual source page contains no author, ISBN or real cover (no-image placeholder). Generic Economics cannot be identified safely.',
890:'Individual source page contains no author, ISBN or real cover (no-image placeholder). Many Hitler biographies exist; no match inferred.',
900:'Individual source page contains no author, ISBN or real cover (no-image placeholder). Generic Inequality cannot be identified safely.'};
const unresolved=q.filter(x=>reasons[x.index]).map(x=>({...x,status:'Reviewed; blocked on source identity or book-form evidence. No recommendation, exclusion, veto, score or source credit inferred.',reason:reasons[x.index],confidence:'unknown',reviewedAt:'2026-10-25'}));
put('unresolved.json',unresolved);
put('nonbooks.json',[{...q.find(x=>x.index===422),status:'non-book',rule:'H1',reason:'Nightingales Flow: Living at the Peak of Your Abilities is an original 12-session audio learning program, 5 hours 31 minutes, not the print book Flow. H1 non-book reference; no entry in any book list and no source credit to Flow. Evidence: https://www.nightingale.com/products/flow'}]);
const resolved=[[234,'n55f4397a7e','Source Waste Land by Oliver Franklin-Wallis is the already evaluated Wasteland, confirmed by publisher title/author. Prior assessment retained; only distinct source coverage recalculated. https://www.hbglibrary.com/titles/oliver-franklin-wallis/wasteland/9780306827112/'],[349,'progress-0749','Bill Dollar Lessons is assessed as a shortened/mistyped Billion Dollar Lessons by Paul B. Carroll and Chunka Mui (moderate identity confidence); publisher and coauthor identify the matching work. No second book created. https://www.penguinrandomhouse.com/books/301328/billion-dollar-lessons-by-paul-b-carroll-and-chunka-mui/']].map(([index,id,reason])=>{const b=read(old+'compiled.json').currentBooks.find(x=>x.id===id);assert(b);return{...q.find(x=>x.index===index),id,status:b.status,reason};});
put('resolved.json',resolved);
let b=fs.readFileSync(old+'build-inputs.mjs','utf8').replaceAll(old,d).replaceAll('data/h7_revision_261025/compiled.json',old+'compiled.json').replace("id:'resume-'","id:'complete-'");
const a=b.indexOf('const resolved=[];'),z=b.indexOf('for(const b of decisions)',a);assert(a>0&&z>a);b=b.slice(0,a)+"const resolved=read(d+'resolved.json');\n"+b.slice(z);
fs.writeFileSync(d+'build-inputs.mjs',b);
const stamp=new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Warsaw',year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date()).replaceAll('-','').replace(' ','_').replace(':','');
put('run.json',{stamp,startingCandidates:q.length,sourceLedgerBefore:fs.readFileSync('SOURCES.md','utf8').split(/\r?\n/).filter(l=>/^\| \d+ \|/.test(l)).map(l=>l.split('|').slice(1,4))});
let p=fs.readFileSync(old+'process.mjs','utf8').replaceAll('data/intake_resume_261025','data/intake_complete_261025').replaceAll('data/h7_revision_261025/compiled.json',old+'compiled.json').replaceAll('261025_1104',stamp).replaceAll("'resume-ex-'","'complete-ex-'");
p=p.replace("const pending=queue.filter(x=>!closed.has(x.index));","const pending=queue.filter(x=>!closed.has(x.index)).map(x=>read(dir+'/unresolved.json').find(y=>y.index===x.index)||x);");
p=p.replace("categories[id]=rule==='H2'?'Fiction':'Business, Economy, Geostrategy'","categories[id]=rule==='H2'?'Fiction':rule==='H3'?'Technology, Engineering, Innovation':'Misc. Non-fiction'");
p=p.replace("link(b.referencePages,b.metadata)","link(b.referencePages,b.referenceUrl||b.metadata)");
p=p.replace('The earlier Flow audio identity remains unresolved; no new source credit is inferred.','Every starting entry has now been reviewed. Remaining entries have explicit unresolved identity or format evidence; Flow is resolved as a non-book program, without credit to the separate book.');
p=p.replace("coverage:'partial'","coverage:'all starting entries reviewed; unresolved identities retained explicitly'");
p=p.replace("Evidence: `+b.evidence.map((u,i)=>link('evidence '+(i+1),u))","Evidence: `+b.evidence.map((u,i)=>link('evidence '+(i+1),u.startsWith('analysis/')?'../'+u:u))");
fs.writeFileSync(d+'process.mjs',p);
let v=fs.readFileSync(old+'verify.mjs','utf8').replaceAll(old,d).replaceAll('data/h7_revision_261025/',old).replace('closedCandidates,447','closedCandidates,408');fs.writeFileSync(d+'verify.mjs',v);
console.log({stamp,unresolved:unresolved.length,aliases:resolved.length});
