import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/sources_261020/primary/';
const packet=JSON.parse(fs.readFileSync(dir+'math-packet.json','utf8')),byIndex=new Map(packet.map(b=>[b.packetIndex,b]));
const results=[],research=new Map();
for(const f of fs.readdirSync(dir).filter(f=>/^math-research-\d+\.json$/.test(f))){
 const d=JSON.parse(fs.readFileSync(dir+f,'utf8'));
 d.books.forEach((b,j)=>{if(!research.has(b.index))research.set(b.index,[]);research.get(b.index).push({file:dir+f,text:String(d.results[j].value||'')});});
}
const references=i=>[...new Set((research.get(i)||[]).map(r=>r.file+'#index-'+i))];
function base(i,status,eligibility,reason,extra={}){
 const b=byIndex.get(i);assert(b);
 const a={id:b.id,title:b.title,author:b.author,status,confidence:'moderate',eligibility,reason,
 evidence:[...references(i),...new Set(b.appearances.map(a=>a.sourcePage))],...extra};results.push(a);return a;
}
function exclude(i,reason,extra={}){
 return base(i,'excluded',reason,reason,{exclusion:'H2',confidence:'high',...extra});
}
const narrative='Historical or biographical nonfiction with a sustained account of discovery and its setting. It is not a technical training course or specialist methods reference; both hard exclusions pass.';
const explanation='A sustained explanation or argument for nonspecialist readers. Mathematical examples illustrate the account; they do not form a course or procedure-training sequence. Both hard exclusions pass.';
function score(i,year,periodEnd,raw,notes,reason,extra={}){
 const b=byIndex.get(i),prior=b.prior;
 const a=base(i,'recommended',periodEnd===null?explanation:narrative,reason,{
  raw,notes:notes.split('|'),year,yearConfidence:'moderate',
  yearNote:'Original production year identified in the saved publisher/catalog research. Later editions do not reset P14.',
  periodEnd,periodConfidence:periodEnd===null?'high':'moderate',
  periodNote:periodEnd===null?'A cross-period history, contemporary scientific explanation or timeless argument has no single central historical period. H13=0.':'Assessed endpoint of the central historical account; peripheral later developments do not reset the topic date.',
  T11:0,T12:0,themeNote:'T11=0: no listed unwanted theme predominates. T12=0: science, mathematics or technical development is central; philosophy, politics and military uses are secondary.',
  amazon:prior?.amazon||{count:null,status:'The individual title/author Amazon.de index query returned no verified matching book aggregate. Unknown count; O15=0 fallback. Direct batch retrieval had already reached an access challenge and was stopped; this does not claim that this product was fetched directly.',attemptedAt:'2026-10-20',attempts:[dir+`math-amazon-${i<130?'01':i<175?'02':'03'}.json#`+b.id]},
  purchaseUrl:prior?.purchaseUrl||'https://www.amazon.de/s?k='+encodeURIComponent(b.title+' '+b.author+' paperback'),
  purchaseFormat:prior?.purchaseFormat||'Search locator; exact product and format not established.',
  reader:prior?.reader||'Unavailable; no matching reader aggregate verified.',
  enrichment:structuredClone(b.priorEnrichment||{domains:{},connections:{status:'partial',mechanisms:[],joins:[],limitations:'Publisher scope and selected contents reviewed. No complete mechanism inventory is claimed.'},research:{reviewed:'2026-10-20',unknownReason:'Only supported dimensions are graded; absent values remain unknown.'}}),
  ...extra});
 assert.equal(a.notes.length,10,i+' requires ten specific criterion reasons');return a;
}
exclude(96,'Quantum Mechanics: The Theoretical Minimum is a structured self-study course in states, operators, entanglement and dynamics, with mathematical exercises. Its purpose is technical skill development, not merely a narrative about quantum theory.');
exclude(104,'The Theoretical Minimum develops mechanics through a sequenced mathematical course with exercises, preparing readers to do physics. Accessible presentation and self-study do not remove its instructional purpose.');
exclude(105,'Special Relativity and Classical Field Theory: The Theoretical Minimum teaches the mathematical apparatus and calculations of relativity and fields through a course sequence. H2 applies.');
exclude(106,'General Relativity: The Theoretical Minimum develops differential geometry and Einstein equations for readers learning to perform relativity calculations. It remains a technical self-study course.');
exclude(131,'Ryden’s Introduction to Cosmology is an undergraduate textbook with progressive derivations and end-of-chapter problems. Its principal use is course study.');
exclude(132,'Owocki’s Fundamentals of Astrophysics is a university textbook, organized to teach stellar and galactic physics through calculations and problems. H2 applies.');
exclude(135,'Perlov and Vilenkin’s Cosmology for the Curious explicitly addresses undergraduate study, with a systematic course and problem exercises. Its accessible language does not change the textbook purpose.');
exclude(139,'Liddle’s An Introduction to Modern Cosmology is a structured undergraduate course text with exercises and mathematical extensions. It is hard-excluded before scoring.');
exclude(140,'Weinberg’s Lectures on Astrophysics is a university-level mathematical course covering stellar structure, radiation, interstellar matter and galaxies. Its teaching and calculation purpose triggers H2.');
exclude(141,'Weinberg’s Cosmology is a graduate textbook and specialist technical reference with extensive derivations. Author standing and relevance to the reader cannot override H2.');
exclude(176,'Stillwell’s Mathematics and Its History belongs to Undergraduate Texts in Mathematics and develops mathematical topics with exercises. History supplies the teaching structure; this is primarily course study.');
exclude(177,'Hodgkin’s publisher identifies advanced undergraduates and postgraduates as the intended audience. Mathematical activities, exercises and their solutions organize a history-of-mathematics course; H2 applies.',{confidence:'moderate'});
exclude(181,'Burton’s The History of Mathematics: An Introduction is a college textbook with mathematical problem sets and chronological lesson units. Historical content does not remove its primary instructional structure.');
exclude(190,'A specialist sourcebook of translated ancient mathematical texts, commentaries and technical source apparatus, intended for sustained reference and source study. It is not primarily a continuous general-reader narrative.',{author:'Victor J. Katz; Clemency Montelle (editors)',confidence:'moderate'});
exclude(219,'The Feynman Lectures on Physics is the three-volume undergraduate physics course, organized around technical mastery. Its clarity, historical discussion and broad reputation do not override H2.');

// Each retained prior attainment is reassessed below by criterion, not inferred from repeated mentions.
function prior(i,notes,reason,extra={}){
 const b=byIndex.get(i),p=b.prior;assert(p);
 const a=score(i,p.year,p.periodEnd,p.raw.slice(),notes,reason,{
  status:p.status,T11:p.T11,T12:p.T12,
  veto:p.veto,vetoConfidence:p.vetoConfidence,
  yearConfidence:p.yearConfidence||'moderate',periodConfidence:p.periodConfidence||'moderate',
  ...extra});
 a.evidence.push(...new Set([p.reviewAnchor,p.currentReview].filter(Boolean).map(f=>'analysis/'+f)));
 a.reassessment='The prior book section and current deduction record were read. The new source adds a mention, not independent evidence of quality. The ten criterion judgments below retain the prior raw attainments after comparison with the newly checked purpose and scope. The eligibility and veto gates, separate themes, original year, topic endpoint and verified Amazon observation are retained unless a specific change is stated here. The current profile is applied once to raw attainment; the result is not an average of reviews.';
 return a;
}
prior(94,'A defended interpretation is not established experimentally|Quantum foundations connect few practical layers|Small marginal use for this reader|Explains formal implications better than empirical selection|Some introductory material is redundant here|Foundational questions persist|Direct quantum-physics fit|Specialist author with relevant research|Clear cumulative exposition|Interpretive preference needs qualification',
 'Many-worlds is presented as an argued interpretation. Its empirical underdetermination limits E and U but does not itself establish a serious veto.',
 {T12:-10,themeNote:'T11=0. T12=-10: the ontology and interpretation of quantum mechanics organize the argument.',periodNote:'A timeless interpretation argument, not a single historical episode.'});
prior(95,'Authoritative public explanation of QED|Light-matter theory has limited institutional integration|Little new practical material for a QFT specialist|Amplitude addition gives a clear causal account|Brief but familiar material|Established theory remains useful|Direct QFT fit|Foundational practitioner|Carefully cumulative lectures|Controlled analogies',
 'Public lectures explain the theory without training readers in specialist calculation; H2 does not apply. Familiarity limits usefulness, not eligibility.');
prior(97,'Researched biography with qualified remembered dialogue|Proof culture, education and institutions interact|Lessons in collaboration and talent recognition|Explains constraints on mathematical discovery|Personal history uses substantial space|Research relationships are durable|Mathematical biography directly fits|Established biographer with research access|Coherent life narrative|Generally precise exposition',
 'Ramanujan and Hardy provide a substantive account of mathematical work and institutional access. The science-biography exception also prevents V3.',{periodNote:'The central life ends with Ramanujan’s death in 1920.'});
prior(107,'Participant history needs caution on priority claims|Theory, experiments and institutions interlock|Model consistency and research selection transfer|Explains symmetry and renormalization constraints|Technical history earns much of its length|Established discovery history is durable|QFT history directly fits|Specialist physicist and historian|Coherent problem sequence|Clear technical distinctions',
 'A historical explanation of the development of gauge theory, not a technical methods course. The earlier 1971 central endpoint is retained; later discovery epilogues are secondary.',{periodNote:'The central theory-development narrative culminates in the 1971 renormalizability breakthrough; later Higgs discovery updates are epilogues.'});
prior(129,'Vacuum and absolute nothing are not equivalent|Cosmology connects few other layers|Little new utility for this specialist|Physical models are clearer than metaphysical conclusions|Familiar account and polemical passages reduce density|Core cosmology endures more than the rhetorical claim|Direct cosmology subject|Relevant theoretical-physics expertise|Accessible argument|Nothing is used too broadly',
 'The title’s metaphysical reach exceeds the physical argument. Retain reduced E and P and the philosophy deduction; the available evidence does not establish a whole-book V1.',
 {T12:-10,themeNote:'T11=0. T12=-10: the argument about why anything exists is central.'});
prior(136,'Reliable foundations with dated frontier conjectures|Mostly within fundamental physics|Very little new material for the reader|Accessible but shallow treatment of mechanisms|Length partly spent on familiar basics|Established results endure; conjectures remain dated|Direct cosmology subject|Author is a foundational contributor|Compression sometimes impedes clarity|Careful distinctions in the core science',
 'General explanatory nonfiction, not course study. The present review keeps basic-science usefulness low for the specified expert reader.');
prior(156,'Researched dual biography|Experiment, mathematics and communication connect|Combining methods and representation has reuse|Shows how fields displaced action-at-distance models|Focused scientific life stories|Foundational work is durable|Direct physics and engineering fit|Relevant science-writing and engineering background|Two careers form a coherent progression|Clear conceptual exposition',
 'The dual biography links experimental constraints to mathematical representation. No exclusion or serious veto is established.',{periodNote:'The central paired lives end with Maxwell’s death in 1879.'});
prior(157,'Archival research is stronger than retrospective diagnosis|Research networks and mathematical theory connect|Intellectual taste and persistence transfer|Explains choices without proving a theory of genius|Long life story has some low-yield detail|Historical physics is durable|Direct theoretical-physics biography|Specialist physicist and biographer|Strong life-and-work sequence|Psychological interpretations need qualification',
 'The prior scientific-biography judgment remains supported. Do not treat retrospective personality claims as equally secure as the documented scientific record.',{periodNote:'Full Dirac biography ends with his death in 1984.'});
prior(161,'Detailed reporting and interviews|Research practices and institutions connect|Model-building and productive doubt transfer|Explains problem-solving episodes and constraints|Long but much work-related evidence|Scientific practice remains useful|Direct physics biography|Experienced science reporter|Clear cumulative life story|Strong explanatory control',
 'The research-centered Feynman biography has transferable material and also qualifies for the science-biography exception.',{periodNote:'The central life ends with Feynman’s death in 1988.'});
prior(172,'Biographical research, not a causal experiment|Mathematics, electronics and research institutions interact|Play and problem choice yield transferable lessons|Explains productive settings and conceptual shifts|Focused biography with some personal detail|Information theory and research organization endure|Direct computing and mathematical fit|Experienced biographers with access|Clear narrative arc|Controlled explanations',
 'Shannon’s work connects abstract representation to communications practice. The existing moderate evidence confidence remains appropriate.',{periodNote:'Full Shannon biography ends in 2001.'});
prior(187,'Sound calculus exposition|Mathematics links to computing and physical applications|Basic ideas are familiar to this reader|Explains accumulation and approximation|Introductory sections reduce marginal density|Calculus applications are durable|Direct mathematical fit|Research mathematician with strong exposition record|Clear conceptual progression|Precise analogies',
 'This is a general history and explanation of calculus, not a sequence of training exercises. The prior scope and attainments remain appropriate.');
prior(191,'Documented institutional and individual history|Numerical work, aeronautics and labor institutions connect|Talent allocation and barriers have reusable lessons|Mechanisms receive less space than lives|Substantial biographical context|Institutional lessons endure|Computation and aerospace fit directly|Specialist archival access|Clear collective narrative|Generally controlled claims',
 'The adult nonfiction book explains numerical work at NACA/NASA. Racial and civil-rights history is central, so T11 stays -10; historical description alone does not make it an activist manifesto.',
 {T11:-10,themeNote:'T11=-10: African-American racial and civil-rights history predominates alongside the technical work. T12=0: the central work is scientific and computational.',periodNote:'Retain 1970 as the assessed end of the central NACA/NASA cohort narrative, with later life events secondary.'});
prior(207,'Archival detail is stronger than the rescue-of-physics thesis|Funding, institutions and quantum ideas connect|Outsider networks and agenda selection have reuse|Causal influence is less secure than chronology|Colorful context takes space|Scientific institutions remain relevant|Direct physics and science-organization fit|Historian and physicist|Clear story|Title overstates causal necessity',
 'Reporting counterculture and paranormal beliefs does not endorse them. Retain lowered E/P and no veto; the author’s archival case remains narrower than the title.',{periodNote:'Retain 1979 as the assessed endpoint of the central 1970s quantum-foundations revival.'});
prior(210,'Historian’s documented optical and adoption history|Optics, manufacture, navigation and institutions integrate|Turning an invention into infrastructure is highly transferable|Explains manufacturing and adoption constraints|Compact account with useful technical context|Diffusion and standardization lessons endure|Direct engineering and logistics fit|Historian of science|Coherent invention-to-use structure|Precise account',
 'Fresnel’s lens becomes useful through manufacturing, financing and lighthouse adoption. The earlier life-only endpoint was already corrected in the current ledger; retain 1865 for the wider adoption account.',{periodNote:'The central lens-adoption account extends to the end of the American Civil War in 1865; it does not end with Fresnel’s death.'});
prior(211,'Identified technical and institutional errors undermine inference|Science, military institutions and recruitment connect|Some institutional lessons survive counterfactually|Reconstruction often outruns evidence|Sensational detail reduces density|Historical subject is durable despite flaws|Technology and strategic recruitment fit|Reporting access does not cure documented errors|Strong narrative momentum|Uncertainty is insufficiently separated',
 'V1 retained: the prior review cites specialist historian Michael Neufeld’s detailed criticism of substantive technical and institutional errors. A new source mention supplies no correction.',
 {veto:'V1',vetoConfidence:'high',T12:-10,themeNote:'T11=0: transnational strategic technology transfer has wider influence. T12=-10: intelligence recruitment and state power organize the account.',periodNote:'Retain 1970 as the assessed end of the central recruitment-program account.'});
prior(215,'Forecast certainty exceeds evidence from prototypes|Several technologies are surveyed|Few decision-ready constraints|Deployment mechanisms are weaker than possibilities|Repeated futures reduce density|Century-scale predictions date quickly|High-tech subject fits|Physics standing is not authority across all forecasts|Readable thematic sequence|Possibility and adoption blur',
 'V4 retained: the organizing promise is a century of technological predictions. Interviews and real prototypes do not establish the asserted route to broad adoption.',
 {veto:'V4',vetoConfidence:'moderate',periodNote:'A forecast, not a historical period; H13=0.'});
prior(216,'Feasibility categories are conditional rather than demonstrated|Several technologies and physical constraints connect|Some reusable constraint reasoning|Explains relevant physical limits|Popular examples take space|Basic limits outlast current prototypes|Direct physics and technology fit|Relevant physicist, uneven engineering authority|Clear topical structure|Engineering feasibility needs more qualification',
 'The central exercise distinguishes physical possibility from impossibility. Fictional examples do not make the explanatory book fiction; the evidence does not establish the same forecast dependence as Physics of the Future.');

export {score,base,exclude,results,byIndex,references,dir,narrative,explanation};
