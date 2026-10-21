const fs=require('fs'),path=require('path'),assert=require('assert/strict'),crypto=require('crypto');
const root=__dirname,repo=path.resolve(root,'../..');
const inv=require('./inventory.json'),prior=require('./prior.json'),baseline=require('./baseline.json');
const commit=process.argv.includes('--write');
const codes=['E','S','U','M','D','R','F','A','N','P'];
const maxima=[20,17,15,12,10,9,7,5,3,2];
const names=['Evidence and inferential integrity','Systems integration','Transferable strategic utility','Mechanistic and causal depth','Information density and length justification','Durability and resistance to hype','Direct domain fit','Expert authority and intellectual standing','Narrative architecture and clarity','Authorial precision and finesse'];
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]/g,'').replace(/^the/,'');
const oldReasonBlocks=new Map([...baseline['VETOED_BOOKS.md'].text.matchAll(/^### (.+)\r?\n([\s\S]*?)(?=^#{1,3} |$(?![\s\S]))/gm)].map(m=>[norm(m[1].replace(/ — source \d+.*$/,'')),m[2].trim()]));
for(const file of ['RECOMMENDED_BOOKS.md','VETOED_BOOKS.md'])for(const line of baseline[file].text.split('\n').filter(x=>/^\| 20\d\d-/.test(x))){
 const c=line.split('|').map(x=>x.trim()),title=c[4].match(/^\[([^\]]+)\]/)?.[1];if(!title)continue;
 const p=prior.find(x=>norm(x.title)===norm(title)&&norm(x.author)===norm(c[3]));assert(p,'baseline row missing '+title);
 p.sources=c[file==='RECOMMENDED_BOOKS.md'?6:8].split(',').map(x=>+x.trim());p.entryDate=c[1];p.listYear=+c[2];
 if(file==='RECOMMENDED_BOOKS.md')p.purchaseUrl=c[4].match(/\]\(([^)]+)\)/)?.[1];
 else {p.currentVetoAnchor=c[4].match(/\]\(([^)]+)\)/)?.[1];p.veto=c[6];p.vetoConfidence=c[7];}
}
const clean=s=>String(s??'').replace(/\|/g,'\\|').replace(/\r?\n/g,' ');
const f=n=>(Math.abs(n)<1e-10?0:n).toFixed(2);
const sum=a=>a.reduce((x,y)=>x+y,0);
const verdict=t=>t>=85?'Recommend':t>=75?'Consider':t>=65?'Selective':t>=50?'Low priority':'Poor fit';
const order=(a,b)=>b.total-a.total||a.title.localeCompare(b.title,'en');
const unique=a=>[...new Set(a)];
const publicationFile=path.join(root,'publication.json');
const now=fs.existsSync(publicationFile)?new Date(JSON.parse(fs.readFileSync(publicationFile,'utf8')).reviewedAt):new Date();
const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Warsaw',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now).map(x=>[x.type,x.value]));
const date=`${parts.year}-${parts.month}-${parts.day}`,stamp=`${parts.year.slice(2)}${parts.month}${parts.day}_${parts.hour}${parts.minute}`;
const short=['glaspbio','glaspbiz','glasptech','glaspstrat','glaspsci','glasppol','glaspecon','glaspphil','glasphist','glaspinvest','glaspmath','glaspdesign','glaspwar'];
const reports=new Map(inv.sources.map((s,i)=>[s.number,`analysis_${short[i]}_${stamp}.md`]));
const all=fs.readdirSync(root).filter(x=>/^assess_.*\.cjs$/.test(x)).flatMap(file=>require(path.join(root,file)).map(a=>({...a,assessmentFile:file})));
assert.equal(unique(all.map(a=>a.id)).length,all.length,'duplicate assessment IDs');
const byId=new Map(all.map(a=>[a.id,a])),sourceById=new Map(inv.books.map(b=>[b.id,b]));
const missing=inv.books.filter(b=>!byId.has(b.id));
if(commit)assert.equal(missing.length,0,'all source books must be assessed before publication');
for(const a of all){assert(sourceById.has(a.id),a.id);assert(a.evidence?.length,a.id+' evidence');assert(a.reason,a.id+' reason');}
const overrides=fs.existsSync(path.join(root,'identity_overrides.json'))?require('./identity_overrides.json'):{};
const paperbacks=fs.existsSync(path.join(root,'paperbacks.json'))?new Map(require('./paperbacks.json').filter(x=>x.selected).map(x=>[x.id,x])):new Map();
const purchaseOverrides=fs.existsSync(path.join(root,'purchase_overrides.json'))?require('./purchase_overrides.json'):{};
for(const row of fs.existsSync(path.join(root,'supplemental_paperbacks.json'))?require('./supplemental_paperbacks.json'):[])if(!purchaseOverrides[row.id])purchaseOverrides[row.id]=row;
const oldById=new Map(prior.map(p=>[p.id,p]));
function resolvePrior(b,a){
 const explicit=overrides[b.id]?.priorId??a.priorId;
 if(explicit===false)return null;
 if(explicit){assert(oldById.has(explicit),b.id+' invalid prior');return oldById.get(explicit);}
 const cs=b.priorCandidates.filter(c=>c.id);
 assert(cs.length<2,b.id+' ambiguous prior identity');
 return cs.length?oldById.get(cs[0].id):null;
}
function isbn10(s){s=String(s).replace(/[^0-9X]/g,'');if(s.length===10)return s;if(s.length!==13||!s.startsWith('978'))return null;const b=s.slice(3,12),v=(11-sum([...b].map((d,i)=>+d*(10-i)))%11)%11;return b+(v===10?'X':v);}
function amazonFor(ids,p){
 const packets=ids.map(id=>JSON.parse(fs.readFileSync(path.join(root,'amazon',id+'.json'),'utf8')));
 const a=packets.map(x=>x.selected).find(x=>x?.verified&&Number.isFinite(x.count));
 if(a)return {...a,marketplace:new URL(a.url).hostname,asin:a.asin||a.url.match(/\/dp\/([A-Z0-9]{10})/)?.[1],snapshot:'Direct public product page; Amazon may aggregate linked editions.',attemptFiles:ids.map(id=>'data/glasp_261019/amazon/'+id+'.json')};
 if(p?.amazon&&Number.isFinite(p.amazon.count)&&p.amazon.url){return {...p.amazon,retrievedAt:p.amazon.retrievedAt||p.amazon.verifiedAt||p.amazon.attemptedAt,snapshot:'Retained matching prior snapshot; current attempts did not expose a replacement count.',attemptFiles:ids.map(id=>'data/glasp_261019/amazon/'+id+'.json')};}
 return {count:null,status:'unknown',snapshot:'No verified count after the recorded public retrieval attempts. O15=0 is the prescribed unknown-count fallback.',attemptFiles:ids.map(id=>'data/glasp_261019/amazon/'+id+'.json')};
}
function enrichScore(a){
 assert.equal(a.raw.length,10,a.title+' raw count');
 a.raw.forEach((x,i)=>assert(Number.isFinite(x)&&x>=0&&x<=maxima[i],a.title+' '+codes[i]));
 assert(Number.isFinite(a.year),a.title+' original year');
 assert([0,-10].includes(a.T11)&&[0,-10].includes(a.T12),a.title+' thematic deduction');
 assert(a.periodEnd===null||Number.isFinite(a.periodEnd),a.title+' period endpoint');
 a.points=a.raw.map((x,i)=>[0,1,4].includes(i)?x*x/maxima[i]:x);
 const count=a.amazon?.count;
 a.deductions={T11:a.T11,T12:a.T12,H13:a.periodEnd===null?0:-Math.min(12,Math.max(0,2026-a.periodEnd)/25),P14:-Math.min(10,Math.max(0,2026-a.year)/10),O15:!Number.isFinite(count)?0:count<10?-20:count<100?-10:count<1000?-5:0};
 a.positive=sum(a.points);a.total=a.positive+sum(Object.values(a.deductions));a.verdict=verdict(a.total);
 return a;
}
function oldRecord(p){
 const a={...p,raw:p.raw||codes.map(k=>p.linearPoints[k]),year:p.originalYear??p.production?.year,T11:p.T11??p.deductions.T11,T12:p.T12??p.deductions.T12,periodEnd:p.periodEnd??p.assessment?.periodEnd??null,confidence:p.confidence||p.scoreConfidence,periodConfidence:p.periodConfidence||p.assessment?.periodConfidence||'moderate',yearConfidence:p.yearConfidence||p.production?.confidence||'moderate',sources:[...p.sources],currentReview:p.priorReport||p.priorAssessment?.split('#')[0],reviewAnchor:p.currentVetoAnchor||p.priorAssessment,sourceIds:[],entryDate:p.entryDate,notes:p.notes,priorReasonBlock:oldReasonBlocks.get(norm(p.title))};
 a.purchaseUrl=p.purchaseUrl||p.titleCell?.match(/\]\((https:\/\/www\.amazon\.[^)]+)\)/)?.[1]||p.amazon?.url;
 return enrichScore(a);
}
const current=new Map(prior.map(p=>[p.id,oldRecord(p)]));
const groups=new Map();
for(const a of all){const b=sourceById.get(a.id),p=resolvePrior(b,a),alias=overrides[a.id]?.sameWorkAs||a.sameWorkAs||a.canonicalId||a.duplicateOf;
 const key=alias||a.id;let group=groups.get(key);if(!group){group={key,items:[],priorIds:new Set()};groups.set(key,group);}group.items.push({a,b,p});if(p)group.priorIds.add(p.id);
}
// A named alias can precede its primary row; fold both into the same group.
for(const [key,g] of [...groups]){if(!byId.has(key))continue;const primary=byId.get(key);if(!g.items.some(x=>x.a.id===key)){const b=sourceById.get(key),p=resolvePrior(b,primary);g.items.push({a:primary,b,p});if(p)g.priorIds.add(p.id);}}
const sourceRecords=[],warnings=[],seenPrior=new Map();
for(const g of groups.values()){
 const primary=g.items.find(x=>x.a.id===g.key)||g.items[0];
 assert(g.priorIds.size<2,g.key+' multiple prior works');
 const {a,b}=primary,p=primary.p||oldById.get([...g.priorIds][0]);
 if(p){assert(!seenPrior.has(p.id),g.key+' and '+seenPrior.get(p.id)+' resolve to the same prior work; use an explicit canonical identity');seenPrior.set(p.id,g.key);}
 for(const x of g.items){assert.equal(x.a.status,a.status,g.key+' alias status mismatch');if(a.status!=='excluded'&&a.status!=='nonbook')assert.deepEqual(x.a.raw,a.raw,g.key+' alias score mismatch');}
 const ids=unique([g.key,...g.items.map(x=>x.a.id)]),appearances=g.items.flatMap(x=>x.b.appearances);
 const sources=unique([...(p?.sources||[]),...appearances.map(x=>x.source)]).sort((a,b)=>a-b);
 const rec={...a,id:p?.id||g.key,sourceIds:ids,title:a.title||b.title,author:a.author||b.author,priorId:p?.id,sources,appearances,entryDate:p?.entryDate||date,listYear:a.listYear??(p&&p.originalYear===a.year?p.listYear:a.year),yearConfidence:a.yearConfidence||'moderate',periodConfidence:a.periodConfidence||(a.periodEnd===null?'high':'low'),priorReview:p?.priorReport,priorAssessment:p?.priorAssessment,previousTotal:p?.total,previousStatus:p?.status,priorReader:p?.reader,reviewAnchor:reports.get(appearances[0].source)+'#'+g.key,currentReview:reports.get(appearances[0].source)};
 if(a.status==='excluded'||a.status==='nonbook'){if(p)current.delete(p.id);sourceRecords.push(rec);continue;}
 rec.amazon=amazonFor(ids,p);
 const paperback=ids.map(id=>paperbacks.get(id)).find(Boolean);
 const purchaseOverride=ids.map(id=>purchaseOverrides[id]).find(Boolean);
 const requestedAsin=isbn10(purchaseOverride?.asin||a.purchaseAsin||paperback?.selected.isbn)||a.purchaseAsin;
 const priorUrl=p?.purchaseUrl||p?.titleCell?.match(/\]\((https:\/\/www\.amazon\.[^)]+)\)/)?.[1];
 const defaultAsin=requestedAsin||priorUrl?.match(/\/dp\/([A-Z0-9]{10})/)?.[1]||rec.amazon.asin||b.appearances[0].asin;
 const deAttempt=ids.flatMap(id=>JSON.parse(fs.readFileSync(path.join(root,'amazon',id+'.json'))).attempts||[]).find(x=>x.verified&&x.asin===defaultAsin&&x.url.includes('amazon.de'));
 rec.purchaseUrl=requestedAsin?'https://www.amazon.de/dp/'+requestedAsin:priorUrl||deAttempt?.url||(defaultAsin?'https://www.amazon.com/dp/'+defaultAsin:null);
 rec.purchaseFormat=purchaseOverride?`${purchaseOverride.format}; [edition evidence](${purchaseOverride.evidence}). Amazon stock is not established by the edition record.`:a.purchaseFormat||a.format||(a.purchaseAsin?'Paperback edition locator supplied by the assessment; see cited edition evidence.':paperback?`English paperback: [library edition](${paperback.selected.url}), ISBN ${paperback.selected.isbn}, ${paperback.selected.publishDate}; retrieved ${paperback.retrievedAt}. Amazon stock is not established by this library record.`:priorUrl?'Prior edition locator retained.':/paperback|taschenbuch|softcover/i.test(rec.amazon.byline||'')?'Paperback':'Source edition; format/stock not independently established.');
 assert(rec.purchaseUrl,rec.title+' purchase locator');
 enrichScore(rec);current.set(rec.id,rec);sourceRecords.push(rec);
}
const mapped=new Map(sourceRecords.flatMap(r=>r.sourceIds.map(id=>[id,r])));
assert.equal(mapped.size,all.length,'source IDs lost during grouping');
// Existing exclusions are retained unless a verified matching work changes status.
let exclusions=baseline['EXCLUDED_BOOKS.md'].text.split('\n').filter(x=>x.startsWith('- ')).map(line=>{const [title,...author]=line.slice(2).split(' — ');return {title,author:author.join(' — '),line};});
for(const r of sourceRecords){
 const matchedLines=new Set(r.sourceIds.flatMap(id=>sourceById.get(id).priorCandidates.filter(c=>c.status==='excluded').map(c=>c.line)));
 const titleMatches=exclusions.filter(e=>norm(e.title)===norm(r.title)&&(!e.author||norm(e.author)===norm(r.author)));
 for(const e of titleMatches)matchedLines.add(e.line);
 exclusions=exclusions.filter(e=>!matchedLines.has(e.line));
 if(r.status==='excluded')exclusions.push({title:r.title,author:r.author,line:'- '+r.title+(r.author?' — '+r.author:''),sourceIds:r.sourceIds});
}
const exMap=new Map();for(const e of exclusions){const k=norm(e.title)+'|'+norm(e.author);assert(!exMap.has(k),'duplicate exclusion '+e.title);exMap.set(k,e);}
exclusions=[...exMap.values()].sort((a,b)=>a.title.localeCompare(b.title,'en',{sensitivity:'base',numeric:true}));
const currentRecords=[...current.values()];
for(const r of currentRecords){const conflict=exclusions.find(e=>norm(e.title)===norm(r.title)&&(!e.author||norm(e.author)===norm(r.author)));assert(!conflict,'scored/excluded conflict '+r.title);}
const byIdentity=new Map();for(const r of currentRecords){const key=norm(r.title)+'|'+norm(r.author);assert(!byIdentity.has(key),'duplicate current identity '+r.title);byIdentity.set(key,r.id);}
function reader(r){
 const a=r.amazon||{},n=a.count;
 let star=typeof a.stars==='number'?a.stars:Number(String(a.star||'').match(/(\d[.,]\d)/)?.[1]?.replace(',','.'));
 if(Number.isFinite(n)&&a.url)return `[Am ${Number.isFinite(star)?star.toFixed(2)+'/5 · ':''}${n.toLocaleString('en-US')} ratings](${a.url})`;
 const previous=r.priorReader||r.reader;
 if(typeof previous==='string'&&previous.includes('https://')&&!previous.includes('/author/'))return previous+' (prior snapshot)';
 return 'Unavailable';
}
function amazonNote(r){const a=r.amazon||{};if(!Number.isFinite(a.count))return `${a.snapshot||'Amazon count unavailable; O15=0 fallback.'} Attempts: ${(a.attemptFiles||[]).map((x,i)=>`[packet ${i+1}](${x})`).join(', ')}.`;
 return `[${a.marketplace||new URL(a.url).hostname}: ${a.asin||a.url.match(/\/dp\/([^/?]+)/)?.[1]||'product'}](${a.url}); ${a.count.toLocaleString('en-US')} total ratings; retrieved ${a.retrievedAt||a.attemptedAt||'2026-10-18'}. ${a.snapshot||a.sourceSnapshot||'Prior recorded snapshot.'} One product aggregate is used; counts are not added across editions or markets.`;}
function breakdown(r){let out='| Criterion | Raw attainment | Contribution |\n|---|---:|---:|\n';for(let i=0;i<10;i++)out+=`| ${codes[i]} — ${names[i]} | ${f(r.raw[i])} / ${maxima[i]} | ${f(r.points[i])} |\n`;return out+`\nPositive subtotal **${f(r.positive)}**. T11 **${f(r.deductions.T11)}**; T12 **${f(r.deductions.T12)}**; H13 **${f(r.deductions.H13)}**; P14 **${f(r.deductions.P14)}**; O15 **${f(r.deductions.O15)}**. **${r.status==='vetoed'?'Counterfactual total':'Total'} ${f(r.total)} / 100.**\n`;}
function details(r,source){
 const anchor=r.sourceIds[0];let out=`<a id="${anchor}"></a>\n### ${r.title}\n\n**${r.author}; original production ${r.year}. ${r.status==='vetoed'?'Veto '+r.veto+'; counterfactual ':''}${f(r.total)}/100; ${r.status==='vetoed'?'not recommended':r.verdict}. Score confidence: ${r.confidence}.**\n\n${r.reason}\n\n${r.rationale||''}\n`;
 if(r.notes?.length)out+='\n'+r.notes.map((n,i)=>`- **${codes[i]}:** ${n}`).join('\n')+'\n';
 out+='\n'+breakdown(r);
 out+=`\n**Dates and deductions:** Original production ${r.year} (${r.yearConfidence} confidence). Historical endpoint ${r.periodEnd===null?'not applicable: timeless or broad cross-period account':r.periodEnd+' ('+r.periodConfidence+' confidence)'}. The separate theme decisions are explained in the assessment above.\n\n**Amazon and readers:** ${amazonNote(r)} Reader display: ${reader(r)}.\n\n**Purchase locator:** [Amazon](${r.purchaseUrl}). ${r.purchaseFormat}\n`;
 if(r.status==='vetoed')out+=`\n**Veto confidence:** ${r.vetoConfidence||r.confidence}. Only the veto gate is suspended in the counterfactual calculation; identified flaws remain in all criterion marks.\n`;
 if(r.priorId)out+=`\n**Reassessment:** ${r.previousStatus} ${f(r.previousTotal)} → ${r.status} ${f(r.total)}. Prior sources: ${oldById.get(r.priorId).sources.join(', ')}; all contributing sources now ${r.sources.join(', ')}. Reviewed prior record: [latest calculation](${r.priorReview}); [book assessment](${r.priorAssessment||r.priorReview}). Changes or retention of the criterion attainments, gates and themes are explained above; any remaining total change follows the recorded deductions.\n`;
 else out+=`\n**Provenance:** New cumulative work; contributing sources ${r.sources.join(', ')}.\n`;
 if(r.relatedPriorIds?.length)out+=`\n**Related prior scope:** ${r.relatedPriorIds.map(id=>{const p=oldById.get(id);assert(p,'missing related prior '+id);return `[${p.title}](${p.priorAssessment||p.priorReport}), sources ${p.sources.join(', ')}`;}).join('; ')}. This is a related but distinct scope; its source numbers are not merged into this work. The scope difference and criterion reassessment are explained above.\n`;
 out+=`\n**Evidence:** ${r.evidence.map((url,i)=>`[${i+1}](${url})`).join(' · ')}. [Assessment data](data/glasp_261019/${r.assessmentFile}).\n`;
 const apps=r.appearances.filter(a=>a.source===source);out+=`\n**Source entries:** ${apps.map(a=>`[${a.sourceLabel}](${a.url})`).join(' · ')}.\n\n`;
 return out;
}
const output={};
for(const s of inv.sources){
 const records=unique(inv.books.filter(b=>b.appearances.some(a=>a.source===s.number)).map(b=>mapped.get(b.id)).filter(Boolean));
 const eligible=records.filter(r=>r.status==='recommended').sort(order),vetoed=records.filter(r=>r.status==='vetoed').sort(order),excluded=records.filter(r=>r.status==='excluded').sort((a,b)=>a.title.localeCompare(b.title)),nonbooks=records.filter(r=>r.status==='nonbook');
 const pending=inv.books.filter(b=>b.appearances.some(a=>a.source===s.number)&&!mapped.has(b.id));
 let out=`# Glasp: ${s.category}\n\nReviewed **${date} ${parts.hour}:${parts.minute}, Europe/Warsaw**. Repository source **${s.number}**: [category](${s.url}).\n\nThe saved category snapshot contains **${s.count} listed records**. This report accounts for **${records.length} distinct works**: ${eligible.length} eligible, ${vetoed.length} vetoed, ${excluded.length} hard-excluded and ${nonbooks.length} non-book references.${pending.length?' **Draft: '+pending.length+' records remain unassessed.**':''}\n\nThe complete rendered category was retrieved through a public reader after direct access failed. The listed-record count matches the page total. The captured page exposes no comment thread or pagination controls; live browser expansion could not be verified. [Saved source](data/glasp_261019/${s.category}.txt) · [Full inventory](data/glasp_261019/inventory.json). Titles come only from the supplied source pages; publisher, library and critical sources establish identity, purpose and assessment evidence. Publisher promotion is not independent proof of quality.\n\n## Method and reading priority\n\nFiction and primarily instructional or specialist technical works are removed before vetoes. All remaining non-vetoed works are scored, including poor fits. E, S and D use their own quadratic profiles; the other seven criteria remain linear. T11 and T12 are separate thematic deductions. H13 uses the assessed historical endpoint, P14 the original production year, and O15 one verified Amazon rating aggregate. Unknown Amazon counts receive the required zero-deduction fallback, not a claim of popularity. Calculations and sorting retain full precision; displayed values use two decimals.\n\nVerdicts: Recommend ≥85; Consider ≥75; Selective ≥65; Low priority ≥50; Poor fit <50. Confidence describes evidence strength, not statistical probability. Reader aggregates are separate from the quality score. A missing rating is shown as unavailable; no rating is invented for Book Marks, LibraryThing, StoryGraph, Goodreads or Amazon.\n\n`;
 if(eligible.length)out+=`The highest-ranked eligible works are ${eligible.slice(0,5).map(r=>`*${r.title}* (${f(r.total)})`).join(', ')}. The lowest-ranked eligible works are ${eligible.slice(-3).map(r=>`*${r.title}* (${f(r.total)})`).join(', ')}; low scores do not remove them from the recommendation ledger.\n\n`;
 out+='## Ranked eligible books\n\n| Score · verdict · confidence | Readers | Author | Year | Title · Amazon locator |\n|---|---|---|---:|---|\n';
 for(const r of eligible)out+=`| **${f(r.total)}** · ${r.verdict} · ${r.confidence} | ${clean(reader(r))} | ${clean(r.author)} | ${r.listYear??r.year} | [${clean(r.title)}](${r.purchaseUrl}) |\n`;
 out+='\n## Hard exclusions\n\nNo scores are assigned to these works. One underlying work can have several source-edition entries.\n\n| Work | Rule · confidence | Reason and evidence |\n|---|---|---|\n';
 for(const r of excluded)out+=`| ${clean(r.title)} — ${clean(r.author)} | ${r.exclusion} · ${r.confidence} | ${clean(r.reason)} ${r.evidence.map((u,i)=>`[${i+1}](${u})`).join(' ')}${r.priorId?` Prior status: ${r.previousStatus}; [prior assessment](${r.priorAssessment||r.priorReview}).`:''} Source entries: ${r.appearances.filter(a=>a.source===s.number).map(a=>`[${clean(a.sourceLabel)}](${a.url})`).join('; ')}. |\n`;
 out+='\n## Vetoed works\n\nThese totals suspend only the veto gate and retain the identified defects. They do not make a book recommended.\n\n| Work | Veto · confidence | Counterfactual score |\n|---|---|---:|\n';
 for(const r of vetoed)out+=`| [${clean(r.title)}](#${r.sourceIds[0]}) — ${clean(r.author)} | ${r.veto} · ${r.vetoConfidence||r.confidence} | ${f(r.total)} |\n`;
 if(nonbooks.length)out+='\n## Non-book references\n\n'+nonbooks.map(r=>`- ${r.title}: ${r.reason} Confidence: ${r.confidence}. ${r.evidence.map((u,i)=>`[Evidence ${i+1}](${u})`).join(' ')}.`).join('\n')+'\n';
 out+='\n## Full assessments\n\n'+[...eligible,...vetoed].map(r=>details(r,s.number)).join('\n');
 out+=`\n## Coverage and status audit\n\nAll ${s.count} captured source records map to the work identities in the inventory. ${pending.length?'The draft is incomplete.':'Every eligible non-vetoed work above is included in RECOMMENDED_BOOKS.md; every vetoed work is included only in VETOED_BOOKS.md; every hard-excluded work is included only in EXCLUDED_BOOKS.md.'} Earlier analysis files are preserved as history. [Compiled records](data/glasp_261019/compiled.json) retain source occurrences, raw attainments, contributions and deductions.\n`;
 output[reports.get(s.number)]=out;
}
const recs=currentRecords.filter(r=>r.status==='recommended').sort(order),vetos=currentRecords.filter(r=>r.status==='vetoed').sort(order);
output['RECOMMENDED_BOOKS.md']='| Entry date | First publication year | Author | Title | Score / 100 | Source |\n|---|---|---|---|---:|---:|\n'+recs.map(r=>`| ${r.entryDate} | ${r.listYear??r.year} | ${clean(r.author)} | [${clean(r.title)}](${r.purchaseUrl}) | ${f(r.total)} | ${r.sources.join(', ')} |`).join('\n')+'\n';
output['EXCLUDED_BOOKS.md']='# Excluded books\n\nHard-excluded source books under [AGENTS.md](AGENTS.md). One alphabetized entry per underlying work; no scores. Original exclusions retain their historical evidence in [the earlier review](analysis_exclusions_261018_0045.md). New and revised decisions are documented in the Glasp source analyses linked from [SOURCES.md](SOURCES.md).\n\n'+exclusions.map(e=>e.line).join('\n')+'\n';
let veto='# Vetoed books\n\nUpdated **'+date+' '+parts.hour+':'+parts.minute+', Europe/Warsaw**. **'+vetos.length+' unique source works** remain vetoed. Counterfactual scores suspend only the veto gate and retain identified flaws. Raw attainments and contributions remain separate; full-precision totals determine order.\n\n| Entry date | First year | Author | Title | Counterfactual /100 | Veto | Veto confidence | Sources |\n|---|---|---|---|---:|---|---|---|\n';
for(const r of vetos)veto+=`| ${r.entryDate} | ${r.listYear??r.year} | ${clean(r.author)} | [${clean(r.title)}](${r.reviewAnchor||r.priorAssessment||r.currentReview}) | **${f(r.total)}** | ${r.veto||'See assessment'} | ${r.vetoConfidence||r.confidence} | ${r.sources.join(', ')} |\n`;
veto+='\n## Full counterfactual score table\n\nE/S/D are quadratic; U/M/R/F/A/N/P are linear. Each positive cell is **raw → contribution**. The linked assessment gives the veto reason, evidence, confidence and deduction classification.\n\n| Work | E | S | U | M | D | R | F | A | N | P | T11 | T12 | H13 | P14 | O15 | Total |\n|---|'+Array(16).fill('---:').join('|')+'|\n';
for(const r of vetos)veto+=`| [${clean(r.title)}](${r.reviewAnchor||r.priorAssessment||r.currentReview}) | ${r.raw.map((x,i)=>f(x)+' → '+f(r.points[i])).join(' | ')} | ${Object.values(r.deductions).map(f).join(' | ')} | **${f(r.total)}** |\n`;
veto+='\n## Reasons and evidence\n\n';
for(const r of vetos){const reason=r.reason||r.eligibility||r.case;assert(reason||r.priorReasonBlock,'missing veto reason '+r.title);veto+=`### ${r.title}\n\n**${r.veto||'Veto retained'}; veto confidence ${r.vetoConfidence||r.confidence}; score confidence ${r.confidence}.** ${reason||''}\n\n[Full assessment](${r.reviewAnchor||r.priorAssessment||r.currentReview}). Original production ${r.year}; historical endpoint ${r.periodEnd??'not applicable'}. ${amazonNote(r)}\n\n`;if(!r.sourceIds.length&&r.priorReasonBlock)veto+='Preserved decision and evidence from the previous ledger follow. Any historical score or old criterion order in this passage is superseded by the current counterfactual table above.\n\n'+r.priorReasonBlock+'\n\n';}
output['VETOED_BOOKS.md']=veto.replace(/[ \t]+$/gm,'').trimEnd()+'\n';
output['SOURCES.md']=baseline['SOURCES.md'].text.trimEnd()+'\n'+inv.sources.map(s=>`| ${s.number} | ${date} | [Glasp — ${s.category}](${s.url}) | [Full analysis](${reports.get(s.number)}) |`).join('\n')+'\n';
const audit={reviewedAt:now.toISOString(),date,stamp,inputRecords:inv.records.length,inputIdentities:inv.books.length,assessed:all.length,pending:missing.map(b=>b.id),newWorks:sourceRecords.length,sourceStatus:Object.fromEntries(['recommended','vetoed','excluded','nonbook'].map(s=>[s,sourceRecords.filter(r=>r.status===s).length])),currentRecommended:recs.length,currentVetoed:vetos.length,currentExcluded:exclusions.length,reports:Object.fromEntries(reports),warnings};
fs.writeFileSync(path.join(root,'compiled.json'),JSON.stringify({audit,sourceBooks:sourceRecords,currentBooks:currentRecords,exclusions},null,2));
const staging=path.join(root,'draft');fs.mkdirSync(staging,{recursive:true});
for(const file of fs.readdirSync(staging).filter(f=>/^analysis_glasp[a-z]+_\d{6}_\d{4}\.md$/.test(f)&&!output[f])){const target=path.resolve(staging,file);assert(target.startsWith(path.resolve(repo,'data/glasp_261019/draft')+path.sep));fs.unlinkSync(target);}
for(const file of Object.keys(output))output[file]=output[file].trimEnd()+'\n';
for(const [file,text] of Object.entries(output))fs.writeFileSync(path.join(staging,file),text);
if(commit){
 for(const [file,record] of Object.entries(baseline)){if(!file.startsWith('analysis_'))continue;assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(repo,file))).digest('hex'),record.sha256,'historical file changed: '+file);}
 for(const [file,text] of Object.entries(output))fs.writeFileSync(path.join(repo,file),text);
 fs.writeFileSync(path.join(root,'publication.json'),JSON.stringify(audit,null,2));
}
console.log(JSON.stringify({...audit,pending:audit.pending.length},null,2));
