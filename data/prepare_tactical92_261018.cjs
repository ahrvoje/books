const fs=require('fs'),assert=require('assert/strict');
const read=n=>JSON.parse(fs.readFileSync('data/'+n+'_261018.json','utf8'));
const write=(n,d)=>fs.writeFileSync('data/'+n+'_261018.json',JSON.stringify(d,null,2)+'\n');
const codes=['E','S','U','M','D','R','F','A','N','P'];
const social=read('tactical_social'),energy=read('tactical_energy'),audit=read('tactical_reassessments_constraints');
const books=[...read('tactical_root_assessments').books,...read('tactical_platform_normalized').books];
for(const id of ['liftoff','reentry']){
 const b=social.candidates.find(b=>b.id===id);
 books.push({id,source:id==='liftoff'?101:102,status:'recommended',confidence:b.confidence,
 sourceUrl:id==='liftoff'?'https://books.google.com/books/about/Liftoff.html?id=DQ7jDwAAQBAJ':b.publisher_url,
 reviews:[['Primary excerpt',b.primary_excerpt],['Jeff Foust, The Space Review',b.review_positive??b.review],['Author on narrative chronology',b.author_reply??b.period_source],...(b.review_adverse?[['Gary Schroeder, critical review',b.review_adverse]]:[])],
 purchaseAsin:id==='liftoff'?'0062979981':'1637745273',format:id==='liftoff'?'paperback':'hardcover; no English paperback verified',raw:b.raw_proposal,notes:b.raw_rationale,
 case:b.positive_evidence+' Evidence scope: '+b.evidence_scope,objection:b.adverse_evidence,eligibility:b.eligibility,
 T11:0,T12:0,periodEnd:id==='liftoff'?2008:2020,periodConfidence:'high',theme:id==='liftoff'?'T11=0: the American company is the narrative setting, but the launch-industry influence is global. T12=0: aerospace development is central; military and financial matters are supporting constraints. The central period ends in2008; a2019 framing scene does not reset it. H13=-0.72, high endpoint confidence. P14 uses the2021 original. Thematic classification confidence is moderate.':'T11=0: the company history explains global launch-industry capabilities. T12=0: procurement, finance and founder behaviour support a central account of engineering and reuse. The author identifies the main period as November2008–2020, so H13=-0.24, high endpoint confidence. P14 uses2024. Thematic classification confidence is moderate.'});
}
const o=energy.origins_of_efficiency;
books.push({id:'efficiency',source:99,status:'recommended',confidence:o.assessment_confidence,
 sourceUrl:'https://books.google.com/books/about/The_Origins_of_Efficiency.html?id=YRZ4EQAAQBAJ',
 reviews:o.sources.map((s,i)=>[['Publisher chapter excerpt','Michael Watson, operations review','Scott Hampton, manufacturing review','Tom MacWright, adverse review'][i],s.url]),
 purchaseAsin:'1953953522',format:'hardcover; no English paperback verified',raw:codes.map(c=>o.proposed_raw[c]),notes:codes.map(c=>o.criterion_reasons[c]),
 case:'A common production model connects physical transformations, throughput, inventory and product design. The detailed practitioner reviews identify actual tradeoffs and failed improvements. '+o.evidence_scope,
 objection:'A direct reader found repetitive theory and weak alternation between framework and cases. One positive reviewer explicitly selects only books he likes. These are reasons to inspect specific mechanisms rather than count favourable reviews.',
 eligibility:o.hard_exclusion.reason+' '+o.veto.reason,T11:0,T12:0,periodEnd:null,
 theme:'Production and improvement are central; political and financial matters are auxiliary. T11=T12=0. Cross-period mechanisms give H13=0. P14 uses the 2025 original; 186 observed Amazon ratings give O15=-5.'});
for(const b of audit.books){
 const id=b.title==='Material World'?'material':'fabric';
 books.push({id,source:id==='material'?110:111,status:'recommended',confidence:b.confidence,
 sourceUrl:id==='material'?'https://penguinrandomhousehighereducation.com/2023/11/16/excerpt-from-material-world/':'https://www.hachettebookgroup.com/titles/virginia-postrel/the-fabric-of-civilization/9781541617629/',
 reviews:b.sources.map(s=>[s.label,s.url]),purchaseAsin:id==='material'?'0593467426':'1541617622',format:'paperback',raw:b.raw,notes:b.notes,
 case:id==='material'?'Six material chains connect extraction, transformation, energy, specialist suppliers and global production. New professional and academic-prize attention supports earned length and access. Primary-text spot checks also found local mistakes; the new attention does not justify perfect evidence marks.':'The textile production sequence joins materials, labour, machinery, chemistry and exchange. The primary notes acknowledge uncertainty and competing explanations. New specialist and adverse reviews support the synthesis while identifying concrete exposition limits.',
 objection:id==='material'?'The publisher excerpt has a wrong geological time interval and loose silicon/silica wording. The sharp material/ethereal contrast also overstates the distinction. These are bounded flaws, not proof that the central supply-chain account fails.':'A primary endnote converts 1,836,000 inches to 34.9 miles; the correct conversion is 28.98 miles. Reviews also identify difficult process descriptions and digressions. A controlled historical experiment is not required by the rubric.',
 eligibility:b.eligibility,T11:0,T12:0,periodEnd:null,theme:b.deductionReason.replace('Root verified matching Amazon aggregate remains at least1000.','The preserved same-day matching US Amazon aggregate is1,061; O15=0.').replace('by root','in the linked evidence packet'),
 priorAssessment:b.priorAssessment,changes:b.changes});
}
const e=energy.energy_and_civilization;
books.push({id:'energy',source:112,status:'recommended',confidence:e.assessment_confidence,
 sourceUrl:e.sources[0].url,reviews:[...e.sources.slice(1).map(s=>[s.kind,s.url]),['National Diet Library edition record','https://ndlsearch.ndl.go.jp/books/R100000002-I027957012']],purchaseAsin:'0262536161',format:'paperback (2018 edition of the 2017 revision)',
 raw:codes.map(c=>e.proposed_raw[c]),notes:codes.map(c=>e.criterion_decisions[c]),
 case:'Physical energy conversion, power density and infrastructure constraints are connected across agriculture and industry. Engineering and historical reviews support the quantitative scope. The author explicitly limits energetic determinism. Evidence scopes for partially accessible reviews are recorded in data/tactical_energy_261018.json.',
 objection:'Cantoni questions the selection of historical causes and the limited account of human agency. Warren praises the data but finds factual overload. These support retained evidence, mechanism and clarity reservations, not a low density score merely because the book is demanding.',
 eligibility:e.eligibility.reason+' '+e.veto.reason,T11:0,T12:0,periodEnd:null,
 theme:'T11=T12=H13=0: energy systems across broad periods are central. MIT Press and the National Diet Library classify the2017 title as an expanded revision of Energy in World History (1994). Smil calls it a substantially new book with a new title and describes the extensive enlargement. This is real counterevidence to treating the texts as interchangeable, but it does not erase the documented revision lineage under rule14. The scoring origin is1994 and P14=-3.20. The named title remains dated2017 in the main list. The two nominated texts retain separate content and reader evidence.',
 priorAssessment:e.prior_assessment,changes:[{criterion:'D',old:7,new:9,reason:'Correct the prior use of reading difficulty as a density defect; new reviews support earned detail.'},{criterion:'P14',old:-0.9,new:-3.2,reason:'Use the documented 1994 original-work lineage, rather than the 2017 revised title.'}]});
books.push(read('tactical_algorithms').books[0]);
books.sort((a,b)=>a.source-b.source);assert.equal(books.length,15);
write('tactical_assessments',{books,excluded:[]});
// Preserve the fresh retrieval file. Merge an independently saved same-day observation into a separate evidence packet.
const evidence=read('tactical_amazon'),old=read('discovery_amazon').find(b=>b.id==='postrel');
const f=evidence.find(b=>b.id==='fabric'),fresh=structuredClone(f);
assert.equal(old.count,1061);assert(old.attempts.some(a=>a.verified&&(a.globalCount??a.topCount)===1061));
Object.assign(f,old,{id:'fabric',attempts:[...old.attempts,...fresh.attempts],provenance:{fresh:'data/tactical_amazon_261018.json',earlierSameDay:'data/discovery_amazon_261018.json',note:'Retain the largest verified matching single-product aggregate observed on this review date. The later US request was blank, not a verified lower count. Italian998 and US1061 are not summed.'}});
evidence.find(b=>b.id==='energy').year=1994;
write('tactical_amazon_evidence',evidence);
console.log(JSON.stringify({books:books.length,exclusions:0}));
