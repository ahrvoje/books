import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/sources_261020/primary/',read=f=>JSON.parse(fs.readFileSync(dir+f,'utf8').replace(/^\uFEFF/,''));
const a=read('hn-assessments.json'),packet=read('hn-packet.json'),byIndex=new Map(packet.map(b=>[b.packetIndex,a.find(a=>a.id===b.id)]));
function edition(i,pages,isbn,year,format,url,note='Publisher/catalog count for this exact edition; not a work-level average.'){
 const b=byIndex.get(i);assert(b?.raw);
 b.enrichment.edition={pages,id:'ISBN:'+isbn,url,retrieved:'2026-10-20',language:'English',format,year,confidence:'high',title:b.title,authors:b.author,notes:note};
 b.evidence=[...new Set([...b.evidence,url])];
 // ISBN conversion is only a locator, not a claim that Amazon stock was verified.
 const digits=isbn.replaceAll('-','');
 if(digits.startsWith('978')&&digits.length===13){
  const body=digits.slice(3,12),c=(11-[...body].reduce((s,x,i)=>s+(10-i)*+x,0)%11)%11;
  b.purchaseUrl='https://www.amazon.de/dp/'+body+(c===10?'X':c);
  b.purchaseFormat=format+' ISBN locator; publisher verifies the edition, Amazon stock is unverified.';
 }
}
edition(121,400,'9781493006496',2015,'Paperback','https://www.simonandschuster.com/books/Deadly-Times/Lew-Irwin/9781493006496');
edition(122,448,'9780525435648',2023,'Paperback','https://www.penguinrandomhouse.com/books/561375/river-of-the-gods-by-candice-millard/9780525435648/');
edition(123,237,'9781841580449',2000,'Print; binding unverified','https://books.google.com/books/about/The_Fleet_that_Had_to_Die.html?id=IEjw8a2ungcC','Birlinn complete-work edition; do not substitute the 158/159-page 1963 abridgment.');
edition(124,432,'9780307886736',2015,'Paperback','https://www.penguinrandomhouse.com/books/209340/trapped-under-the-sea-by-neil-swidey/9780307886743/');
edition(134,368,'9781541702110',2025,'Paperback','https://www.hbglibrary.com/titles/brendan-ballou/plunder/9781541702110/');
edition(146,128,'9780787947354',1999,'Hardcover','https://uat.store.wiley.com/en-us/let-your-life-speak-listening-for-the-voice-of-vocation-p-9780787947354');
edition(149,320,'9781529103410',2021,'Paperback','https://www.penguin.com.au/books/kilo-9781529103410');
edition(150,384,'9780593315613',2024,'Paperback','https://www.penguinrandomhouse.com/books/690603/tracers-in-the-dark-by-andy-greenberg/');
edition(154,320,'9781839765841',2022,'Paperback','https://www.penguinrandomhouse.com/books/697232/the-future-is-degrowth-by-matthias-schmelzer-aaron-vansintjan-andrea-vetter/');
edition(156,272,'9781538754160',2023,'Paperback','https://www.hachettebookgroup.com/titles/moiya-mctier/the-milky-way-3/9781538754160/','The paperback has 272 pages; the separately indexed ebook has 192. Use the paperback count only.');
edition(158,150,'9780889467675',1986,'Print; binding unverified','https://books.google.com/books/about/Political_Religions.html?hl=en&id=5OfYAAAAMAAJ&output=html_text','Standalone English translation, not the collected three-work Modernity without Restraint.');
edition(160,208,'9780892815739',1996,'Paperback','https://www.innertraditions.com/books/the-mystery-of-the-grail');
edition(171,784,'9780345349576',1987,'Paperback','https://www.penguinrandomhouse.com/books/180834/a-distant-mirror-by-barbara-w-tuchman/');
edition(181,368,'9780593490501',2023,'Hardcover','https://www.penguinrandomhouse.com/books/703238/end-times-by-peter-turchin/');
edition(183,416,'9781783787326',2023,'Paperback','https://granta.com/products/different/');
edition(189,352,'9781982190217',2023,'Hardcover','https://www.simonandschuster.com/books/Everyday-Utopia/Kristen-R-Ghodsee/9781982190217');
edition(190,352,'9780593312643',2023,'Paperback','https://www.penguinrandomhouse.com/books/669716/the-persuaders-by-anand-giridharadas/');
edition(191,240,'9781782799467',2021,'Paperback','https://www.simonandschuster.com/books/No-Bosses/Michael-Albert/9781782799467');
edition(214,432,'9780593493205',2025,'Paperback','https://www.penguinrandomhouse.com/books/712961/the-identity-trap-by-yascha-mounk/');
edition(218,432,'9780802122285',2014,'Paperback','https://groveatlantic.com/book/exploding-the-phone/','Publisher count for paperback; hardcover has 448 pages and some catalogs count only numbered pages.');
edition(226,288,'9780300234817',2022,'Hardcover','https://yalebooks.yale.edu/book/9780300234817/the-illusion-of-control/','Publisher print count is 288; Google catalog’s 276 corresponds to numbered content.');
edition(227,352,'9781541674202',2024,'Paperback','https://www.hachettebookgroup.com/titles/edward-shawcross/the-last-emperor-of-mexico/9781541674202/?lens=basic-books');
edition(228,352,'9781250872500',2023,'Paperback','https://academic.macmillan.com/academictrade/9781250872500/superinfinite/');
edition(229,288,'9781876485900',2002,'Print; binding unverified','https://books.google.com/books/about/Stasiland.html?id=K4VmHAAACAAJ');
edition(244,304,'9781982159320',2023,'Paperback','https://www.simonandschuster.com/books/How-to-Be-Perfect/Michael-Schur/9781982159320');
edition(246,416,'9780062997463',2021,'Print; binding unverified','https://books.google.com/books/about/First_Principles.html?id=DEQ1zgEACAAJ');
byIndex.get(202).enrichment.research.unknownReason='The retrieved catalog editions include other Platonic works or specialist commentary. They are not a valid page count for the standalone nominated Apology; a matching standalone print edition remains to verify.';
byIndex.get(171).evidence.push('https://search.worldcat.org/title/A-distant-mirror-%3A-the-calamitous-14th-century/oclc/3870107');
byIndex.get(122).evidence.push('https://www.publishersweekly.com/9780385543101');
byIndex.get(122).periodConfidence='moderate';
byIndex.get(228).evidence.push('https://www.publishersweekly.com/9780374607401');
function domains(i,rows){
 const b=byIndex.get(i);
 for(const [code,value,rationale] of rows)b.enrichment.domains[code]={value,confidence:'moderate',rationale,refs:b.evidence.filter(u=>u.startsWith('http')&&!u.includes('news.ycombinator')&&!u.includes('reddit.com')).slice(0,3)};
}
domains(121,[['INS',3,'Labor organizations, law enforcement and courts shape the conflict.'],['PRD',2,'Industrial labor and ownership supply the conflict’s economic setting.'],['POL',3,'Labor politics and coercion govern the central events.']]);
domains(122,[['LOG',3,'Supply, transport and local expedition expertise constrain exploration.'],['SCI',3,'Geographic observation and disputed evidence organize the search.'],['INS',2,'Geographical societies and imperial sponsorship allocate credit and resources.']]);
domains(123,[['MIL',4,'Naval readiness and battle are the central system.'],['LOG',3,'Coaling and a long voyage constrain combat readiness.'],['ENG',2,'Ship capability, maintenance and equipment constrain operations.'],['STR',3,'Command decisions connect resources to military objectives.']]);
domains(124,[['ENG',4,'Tunnel design and implementation govern the failure.'],['QLT',3,'Safety, reliability and operational preparation are substantial.'],['INS',3,'Contractual responsibility and regulation interact with design choices.'],['LOG',2,'Access and human-support constraints shape the final operation.']]);
domains(134,[['FIN',4,'Leverage, fees and ownership structure are central.'],['INS',3,'Legal liability and regulatory treatment affect incentives.'],['PRD',2,'Effects on operating businesses connect finance to productive capability.']]);
domains(146,[['HEU',1,'Reflection on personal limits offers limited informal heuristics.']]);
domains(149,[['PRD',3,'The account follows a product from raw cultivation through processing.'],['LOG',4,'Distribution and smuggling give the book its structure.'],['TRD',3,'Cross-border exchange and market roles are substantial.'],['ECO',3,'Margins and risks shape participant incentives.']]);
domains(150,[['CMP',4,'Transaction data and computational tracing are central.'],['FIN',3,'Cryptocurrency flows provide the system being traced.'],['INS',3,'Investigation and jurisdiction turn technical evidence into enforcement.'],['HTC',3,'New analytic capability changes what can be investigated.']]);
domains(154,[['ECO',4,'Growth and allocation are central arguments.'],['POL',4,'The book advances a postcapitalist political program.'],['PRD',3,'Work and material production are substantial parts of the proposal.'],['ENE',2,'Energy and material throughput constrain the proposal.']]);
domains(156,[['SCI',4,'Galactic formation and evolution organize the book.'],['QNT',1,'Scale comparisons appear, but it is not quantitative modeling instruction.']]);
domains(158,[['POL',4,'Political order and allegiance are the central objects.'],['INS',2,'Community and authority appear in the interpretation of political religion.']]);
domains(160,[['POL',1,'Imperial symbolism appears within esoteric interpretation.']]);
domains(171,[['MIL',3,'Warfare repeatedly shapes the medieval institutions.'],['POL',3,'Dynastic and ecclesiastical power drive the narrative.'],['INS',3,'Feudal, religious and financial arrangements connect the cases.'],['FIN',2,'Ransoms and revenue constrain action.']]);
domains(181,[['QNT',3,'Structural-demographic patterns and historical data support the model.'],['POL',4,'Instability and elite competition are central.'],['ECO',3,'Wealth flows and inequality enter the causal framework.'],['INS',3,'Institutional settlement mediates elite and popular conflict.'],['STR',2,'The model proposes conditional warning indicators.']]);
domains(183,[['SCI',4,'Comparative primate behavior supplies the main evidence.'],['HEU',1,'Cross-species comparison gives a limited reasoning lesson.']]);
domains(189,[['INS',4,'Communal household and governance arrangements organize the history.'],['ECO',2,'Work and shared resources support the case comparisons.'],['POL',3,'Institutional alternatives are promoted as a political project.']]);
domains(190,[['POL',4,'Activism and political persuasion are central.'],['INS',2,'Movements and organizations shape the cases.'],['HEU',2,'Framing and listening appear as persuasion practices.']]);
domains(191,[['ECO',4,'Participatory allocation is the central proposal.'],['INS',4,'Workplace decision rules are central.'],['POL',4,'The proposed replacement of capitalism is explicitly political.'],['PRD',2,'Production is discussed through institutional design.']]);
domains(202,[['HEU',2,'Questioning assumed knowledge and examining claims form the argument.'],['POL',1,'Civic authority is the setting for the defense.']]);
domains(214,[['POL',4,'Identity ideologies and liberal political principles are central.'],['INS',2,'The spread of ideas through institutions is a substantial thread.']]);
domains(218,[['ENG',4,'Telephone switching and signaling form the technical system.'],['CMP',3,'Manipulation of information and network control is substantial.'],['HTC',3,'Electronic techniques alter access to infrastructure.'],['INS',3,'Monopoly and enforcement shape technical responses.'],['SCL',3,'Network size and shared design create widespread vulnerabilities.']]);
domains(226,[['FIN',4,'Financial stability and systemic risk are central.'],['QNT',3,'Risk measures and their limits are major components.'],['INS',3,'Regulation changes behavior and system stability.'],['HEU',3,'Model uncertainty and feedback offer reusable reasoning tools.'],['STR',3,'Diversity and resilience are strategic implications.']]);
domains(227,[['POL',4,'Imperial intervention and regime legitimacy are central.'],['MIL',3,'External military backing determines the project’s viability.'],['FIN',2,'Debt and imperial funding constrain the regime.'],['STR',2,'External dependency yields limited strategic lessons.']]);
domains(228,[['INS',1,'Patronage and religious institutions condition the literary biography.']]);
domains(229,[['INS',4,'The surveillance institution and its aftermath organize the account.'],['POL',4,'State coercion and intelligence are central.'],['HEU',1,'Testimony illustrates incentives to comply and conceal.']]);
domains(244,[['HEU',2,'Comparing ethical frameworks offers limited decision heuristics.']]);
domains(246,[['POL',4,'American constitutional founding is central.'],['INS',3,'Education and classical models influence institutional design.'],['HEU',1,'Use and misuse of historical analogy appear in the argument.']]);
function mechanism(i,id,name,scope,roles,strength,explanation){
 const b=byIndex.get(i);
 b.enrichment.connections.mechanisms=b.enrichment.connections.mechanisms.filter(m=>m.id!==id);
 b.enrichment.connections.mechanisms.push({id,name,domains:Object.keys(roles),roles,scope,strength,confidence:'moderate',statement:explanation,refs:b.evidence.filter(u=>u.startsWith('http')&&!u.includes('reddit.com')).slice(0,3)});
}
mechanism(123,'fleet-coaling','Supply constraints reduce fighting readiness','The Baltic Fleet’s long-distance deployment',{LOG:'Coal and resupply constrain route and time.',ENG:'Ship condition and machinery constrain sustained operation.',MIL:'Arrival condition limits combat capability.',STR:'Command must match objectives to available readiness.'},3,'Operational readiness is a joint result of machinery, logistics and decisions; nominal fleet strength alone is insufficient.');
mechanism(124,'tunnel-handoffs','Fragmented responsibility creates operational risk','Boston outfall tunnel completion',{ENG:'Design defines the constrained working environment.',INS:'Contracts divide responsibility across organizations.',QLT:'Safety checks and ownership of failure modes can be lost at handoffs.',LOG:'Access and life support limit recovery options.'},3,'Local decisions can remain individually plausible while their combination creates an unsafe operation.');
mechanism(150,'blockchain-tracing','Persistent records change the cost of concealment','Cryptocurrency investigations',{CMP:'Transaction graphs preserve links for analysis.',FIN:'Transfers expose flows between actors and services.',HTC:'Analytic tools make large-scale tracing feasible.',INS:'Investigators and jurisdictions turn links into action.'},3,'A system perceived as anonymous can become traceable when computation and institutional access join persistent records.');
mechanism(218,'telephone-trust','Shared signaling creates a scalable trust failure','Mid-century telephone network',{ENG:'Control signals share accessible communication paths.',CMP:'Reproduced signals alter network state.',SCL:'Common infrastructure spreads the same flaw.',INS:'Monopoly incentives and enforcement shape the response.'},3,'A local control-channel weakness can become a network-wide vulnerability when the same design is deployed at scale.');
mechanism(226,'endogenous-risk','Measurement changes the risk being measured','Financial-system regulation and common models',{QNT:'Metrics define observed and permitted risk.',FIN:'Institutions adjust positions in response.',INS:'Common rules coordinate those adjustments.',STR:'Homogeneous responses can reduce resilience.'},4,'Feedback from shared measurement to coordinated behavior can make locally safer decisions systemically fragile.');
// Add observations only after title/author identity and the global aggregate
// have been inspected. Never add counts from different products.
const observationFile=dir+'hn-amazon-direct-02.json';
if(fs.existsSync(observationFile)){
 const rows=JSON.parse(fs.readFileSync(observationFile,'utf8').replace(/^\uFEFF/,''));
 for(const o of (Array.isArray(rows)?rows:[rows])){
  const b=a.find(b=>b.id===o.id);if(!b||o.challenge)continue;
  // Manually inspected matching title, author, ISBN and global-rating label.
  if(o.id!=='n374878c55f')continue;
  if(Number.isInteger(o.globalRatings)){
   b.amazon={count:o.globalRatings,url:o.url,marketplace:new URL(o.url).hostname,asin:o.asin,verifiedAt:o.retrieved,status:'One matching public Amazon product global-rating aggregate. No counts combined.',attempts:[o.file]};
   b.reader=`[Amazon ${o.globalRatings.toLocaleString('en-US')} ratings](${o.url})`;
  }
 }
}
for(const b of a)if(b.raw){
 assert(b.notes.length===10);
 b.enrichment??={};
 b.enrichment.connections??={status:'unreviewed',mechanisms:[],joins:[],limitations:'Prior vetoed work has no verified domain/connection enrichment; no zero is inferred.'};
 if(b.amazon.count===null)b.amazon.attempts=[...(b.amazon.attempts||[]),'data/sources_261020/primary/hn-amazon-direct.json','data/sources_261020/primary/hn-amazon-direct-02.json'];
}
fs.writeFileSync(dir+'hn-assessments.json',JSON.stringify(a,null,2)+'\n');
console.log(JSON.stringify({scored:a.filter(b=>b.raw).length,pages:a.filter(b=>b.raw&&b.enrichment?.edition?.pages).length,ratings:a.filter(b=>b.raw&&Number.isInteger(b.amazon?.count)).length}));
