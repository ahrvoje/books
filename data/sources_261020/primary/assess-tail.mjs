import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/sources_261020/primary/';
const packet=JSON.parse(fs.readFileSync('data/sources_261020/hn/transfer-root-tail.json','utf8')),byIndex=new Map(packet.map(b=>[b.packetIndex,b]));
const results=[],research=new Map();
for(const file of fs.readdirSync(dir).filter(f=>/^tail-research-\d+\.json$/.test(f))){
 const d=JSON.parse(fs.readFileSync(dir+file,'utf8'));
 for(const b of d.books){if(!research.has(b.index))research.set(b.index,[]);research.get(b.index).push(dir+file);}
}
function base(i,status,reason,extra={}){
 const b=byIndex.get(i);assert(b);
 const a={id:b.id,title:b.title,author:b.author,status,confidence:'moderate',reason,eligibility:reason,
 evidence:[...new Set([...(research.get(i)||[]),...b.appearances.map(a=>a.sourcePage)])],...extra};results.push(a);return a;
}
function exclude(i,reason){return base(i,'excluded',reason,{exclusion:'H2',confidence:'high'});}
function score(i,year,periodEnd,raw,notes,reason,extra={}){
 const b=byIndex.get(i);
 const a=base(i,'recommended',reason,{raw,notes:notes.split('|'),year,yearConfidence:'moderate',
 yearNote:'Original publication identified in the saved publisher or catalog evidence; later editions do not reset P14.',
 periodEnd,periodConfidence:periodEnd===null?'high':'low',
 periodNote:periodEnd===null?'A cross-period argument or contemporary explanatory account, not one clearly bounded historical episode. H13=0.':'Assessed central endpoint; later editions and retrospective commentary do not reset the topic period.',
 T11:0,T12:0,themeNote:'T11=0: no listed unwanted subject predominates. T12=0: the principal explanation concerns science, technology or practical systems; power and politics are secondary.',
 eligibility:'Narrative or sustained explanatory nonfiction for readers outside specialist training. Neither fiction nor a procedural course; both hard exclusions pass.',
 amazon:{count:null,status:'Individual title/author Amazon.de index lookup attempted in the saved batch. No verified matching total-rating aggregate; O15=0 unknown-count fallback. Direct access challenges elsewhere in this batch were not retried.',attemptedAt:'2026-10-20',attempts:[dir+'tail-amazon.json#'+b.id]},
 reader:'Unavailable; no matching reader aggregate verified.',
 purchaseUrl:'https://www.amazon.de/s?k='+encodeURIComponent(b.title+' '+b.author+' paperback'),purchaseFormat:'Search locator; exact product and binding not established.',
 enrichment:{domains:{},connections:{status:'partial',mechanisms:[],joins:[],limitations:'Only selected causal connections supported by the reviewed scope are recorded.'},research:{reviewed:'2026-10-20',unknownReason:'Unassessed domains remain unknown. Edition and connection coverage are documented separately.'}},...extra});
 assert(a.notes.length===10,i+' ten notes');return a;
}
exclude(601,'The publisher describes a practical toolbox for making, with rules, tools, materials, fasteners and working techniques. Memoir episodes support instruction in making projects; the dominant purpose triggers H2.');
exclude(729,'The book trains readers to detect and refute misleading quantitative claims through a sequence of causality, selection-bias and data-visualization methods. Its course-derived practical skill structure triggers H2 despite general accessibility.');
exclude(738,'Diet, movement, flow and resilience chapters give practical directions for longevity and personal change. The main purpose is a lifestyle instruction program, not a sustained explanatory history; H2 applies.');
exclude(793,'Each chapter develops a rule for changing personal behavior and living a better life. The publisher and structure establish an instructional self-help purpose; philosophical and autobiographical illustrations do not override H2.');
exclude(811,'The authors teach a systematic method for applying game theory to competition, with worked strategic cases and application rules. This is practical method training; the publisher explicitly describes a crash course. H2 applies.');
for(const [i,reason] of [
 [669,'The source explicitly nominates Borges’s short story, not a specified book edition or collection. Record the non-book literary reference here; do not invent a collection.'],
 [718,'The linked qntm.org work is a web short story explicitly nominated as such, not a book.'],
 [719,'The source explicitly names Asimov’s short story, not a nominated book collection.'],
 [720,'The full comment explicitly names Joyce’s short story The Dead. The clipped inventory quote mistakenly finds Speaker for the Dead earlier in that same comment; the full comment resolves the reference.']
])base(i,'nonbook',reason,{confidence:'high'});
for(const [i,reason] of [
 [672,'Selected poetry by William Blake does not identify an editor, selection or edition. Blake’s corpus includes lyric, prophetic and religious verse; a specific collection cannot be inferred.'],
 [674,'Captain Nemo is given with Jules Verne but without a specific work. Several novels and adaptations use the character; do not silently replace it with Twenty Thousand Leagues or The Mysterious Island.'],
 [816,'The source says all of Poe’s work, not a specific collected edition. The corpus includes fiction, poetry, criticism and essays; no single assessable work or eligible nonfiction subset is identified.'],
 [817,'The source says all of Lovecraft’s work, not a specified book. Fiction, essays and correspondence have different eligibility; do not expand an author-level recommendation into unmentioned titles.'],
 [819,'The comment conflates Adler’s reading list with the published Great Books set. The actual set includes fiction, technical treatises and explanatory nonfiction, and multiple editions differ. Neither blanket H1 nor a single quality score can represent the unspecified mixed nomination.']
])base(i,'unresolved',reason,{confidence:'low'});
score(587,1997,null,[14,8,5,5,5,8,1,4,3,1.5],
 'Reported observation and satire are not controlled evidence|Media commerce and personal experience connect|Some useful criticism of manufactured experience|Interpretation exceeds causal demonstration|Digression and verbal performance reduce density|Cultural mechanisms outlast the occasions|Little preferred technical content|Accomplished essayist not systems specialist|Distinctive memorable essays|Dense irony can obscure distinctions',
 'The essays contain transferable criticism of attention, commercial entertainment and irony. Poor subject fit does not itself establish V3.',
 {T11:-10,T12:-10,themeNote:'T11=-10: US cultural, sporting and entertainment life predominates. T12=-10: media and cultural criticism are central.'});
score(588,1951,null,[12,12,9,7,8,8,4,3,3,2],
 'Broad historical analogies are selectively assembled|Identity institutions and political mobilization connect|Mobilization and group commitment offer reusable hypotheses|Proposed psychological causes lack strong comparative testing|Compact concentrated argument|Collective commitment remains relevant|Institutional power fits partly|Influential independent essayist|Clear thematic structure|Aphorisms can conceal exceptions',
 'An explanation of mass movements, not a manifesto promoting one. Its generalizations warrant lower evidence marks; political subject matter alone does not trigger V2 or V5.',
 {T12:-10,themeNote:'T11=0: comparative across societies. T12=-10: political and religious mass mobilization is central.'});
score(594,2021,null,[11,13,5,7,6,6,3,4,3,1],
 'Claims about cooperative networks face substantial counterevidence|Biology forestry and scientific institutions connect|Experimental caution transfers more than forestry advice|Network mechanisms are contested and scope-dependent|Memoir occupies much space|Methods persist but central generalizations remain unsettled|Science fits partly; ecology dominates|Relevant researcher with disputed interpretation|Strong discovery narrative|Mothering metaphors can overstate evidence',
 'Karst, Jones and Hoeksema challenge generalized resource-transfer and offspring-benefit claims; Simard’s response argues for narrower ecological scope and a metaphor rather than a universal hypothesis. Retain the book with reduced E, R and P: the reviewed evidence does not resolve a serious whole-book V1. The principal form is a scientific memoir, so stewardship concerns alone do not establish V5.',
 {T11:-10,themeNote:'T11=-10: forest ecology is the predominant subject. T12=0: scientific inquiry remains central.',confidence:'low'});
score(614,1970,null,[15,6,2,3,3,8,1,3.5,2,1.5],
 'Historical explanation is stronger than interpretive certainty|Allusions connect literature and historical settings|Little transferable model beyond textual context|Primarily explains references rather than systems|Long passage-by-passage coverage has low yield here|Historical allusions remain relevant|Very weak preferred-domain fit|Extensive general exposition, not specialist Shakespeare authority|Organized by works and passages|Generally clear explanatory prose',
 'V3, moderate: the main payload is identifying the historical and mythological references in plays and poems. Removing those local details leaves little of the mechanisms sought here. It is a lay explanatory commentary, not a specialist technical reference, so H2 is not used.',
 {status:'vetoed',veto:'V3',vetoConfidence:'moderate',eligibility:'General-reader literary and historical explanation of passages; no technical training purpose. The underlying plays are fiction, but this commentary is nonfiction.'});
score(633,1988,null,[14,14,10,9,7,9,5,4,3,1.5],
 'Documented cases but selection and causal generalization need caution|Ownership advertising sourcing and political interests connect|Institutional filters provide reusable hypotheses|Explains incentives and structural constraints|Case detail sometimes repeats the thesis|Media incentives remain relevant|Institutional power fits; technical production is secondary|Relevant scholarship and extensive specialist debate|Clear model followed by cases|Rhetoric can imply excessive uniformity',
 'The propaganda model offers testable institutional mechanisms. This review does not infer ideological capture from the authors’ politics alone; no serious veto is established by the reviewed evidence.',
 {T12:-10,themeNote:'T11=0: the US cases are used for mechanisms with international media and policy influence. T12=-10: media and political power are central.'});
score(649,1997,1995,[16,8,5,4,6,8,2,3,3,2],
 'Identified interviews preserve perspectives but memories differ|Workplace norms public response and sect membership connect|Some insight into conformity and institutional response|Witness experience exceeds causal analysis|Many interviews repeat themes|Institutional failures and testimony endure|Limited preferred technical content|Direct interviewer with literary skill|Careful polyphonic structure|Avoids a single simple villain narrative',
 'The account examines social conformity and response to an attack through interviews. It reports religion without preaching it; the source’s clipped fictional wording is corrected by the full comment.',
 {T11:-10,T12:-10,themeNote:'T11=-10: Japanese society and local urban aftermath dominate. T12=-10: sect power and coercive violence are central.',periodNote:'The central event is the March 1995 Tokyo attack; later interviews are evidence about that event, not a new topic endpoint.'});
score(660,1966,1945,[16,5,1,2,5,8,0,4,3,2],
 'First-person oral history with retrospective-memory limits|Team and league context remains mostly local|Few reusable mechanisms beyond baseball experience|Personal recollections dominate causal analysis|Many anecdotes have low marginal value here|Historical testimony is durable|No substantial preferred technical domain|Careful oral historian|Memorable voices and organization|Clear preserved speech',
 'V3: baseball memories and personalities are the principal payload. The assessed 1945 endpoint allows later playing careers in the expanded interview collection; exact central scope remains low confidence.',
 {status:'vetoed',veto:'V3',vetoConfidence:'moderate',T11:-10,themeNote:'T11=-10: US-centered sporting history. T12=0: neither strategy nor politics is the central explanatory topic.',periodNote:'Use 1945 as an approximate end of the veteran playing-era recollections, including later careers in expanded editions; interviews decades later do not reset H13.'});
score(662,1776,1776,[12,10,5,5,8,8,3,4,3,2],
 'Persuasion and selective premises limit evidential balance|Government legitimacy and economic dependence connect|Some reusable institutional arguments|More exhortation than tested causal explanation|Compact focused pamphlet|Historical arguments retain influence|Political institutions partly fit|Major historical pamphleteer|Forceful cumulative case|Rhetorical certainty exceeds qualification',
 'V5: a direct manifesto for American independence and republican government. Its historical influence does not override the veto.',
 {status:'vetoed',veto:'V5',vetoConfidence:'high',T11:-10,T12:-10,themeNote:'T11=-10: American political history. T12=-10: independence and government are central.',periodNote:'The pamphlet addresses the American political choice in 1776.'});
score(670,2015,null,[16,11,8,8,8,8,4,5,3,1.5],
 'Research-grounded exposition with popular compression|Neural mechanisms social behavior and technology connect|Perception and decision limits have reuse|Explains mechanisms at introductory depth|Concise broad survey|Core neuroscience endures; projections date|Cognitive science partly fits quantitative interests|Active relevant neuroscientist|Clear question-led structure|Some brain-as-storytelling metaphors',
 'A popular explanatory account of neuroscience, not a clinical manual or course. Disease cases illustrate wider mechanisms and do not predominate.');
score(680,350,null,[4,8,3,2,3,9,1,3,2,1],
 'Revelation and miracle claims do not meet empirical standards|Law authority and community norms interact|Some social lessons survive counterfactually|Theological explanation dominates tested causation|Large heterogeneous corpus with repetition|Long cultural persistence|Very limited preferred technical content|Canonical influence is not factual validation|Mixed genres with uneven continuity|Translation has literary control but interpretive ambiguity',
 'V5: the nominated King James Bible is religious scripture. Assess the corpus as scripture rather than treating every parable as a separate fiction book.',
 {title:'The Holy Bible (King James Version)',author:'Various ancient authors; King James translators',status:'vetoed',veto:'V5',vetoConfidence:'high',
 yearConfidence:'low',yearNote:'Use approximately 350 CE as a recorded compilation-era proxy for the Christian biblical corpus, based on fourth-century Bible codices. Individual texts are older and canons differ; this is not the 1611 translation year. All plausible ancient compilation dates reach the P14 cap.',
 T12:-10,themeNote:'T11=0: broad cross-period religious corpus, not one national history. T12=-10: religious moral philosophy, law and authority are central.'});
score(683,1883,1882,[13,10,6,6,5,8,4,4,3,2],
 'Memoir and humorous embellishment require caution|Navigation transport technology and river commerce connect|Tacit knowledge and infrastructure change have reuse|Explains piloting constraints amid anecdote|Long travel digressions lower density|Transport and expertise lessons endure|Logistics partly fits|Direct practical experience|Strong episodic narrative|Literary exaggeration limits precision',
 'A nonfiction memoir and return journey, with humorous and fictional interpolations. The main account of piloting and transport remains nonfiction and contains operational constraints.',
 {T11:-10,themeNote:'T11=-10: American river and urban history predominates. T12=0: transport and lived work are central.',periodNote:'The return journey of 1882 completes the central comparison with the earlier steamboat years.'});
score(684,1872,1866,[12,9,4,4,4,8,2,3.5,3,1.5],
 'Tall tales and retrospective reconstruction weaken factual precision|Mining speculation travel and settlement connect|Some lessons about incentives and failed ventures|Causal explanation is secondary to humor|Substantial episodic digression|Historical observations remain useful|Limited resource and transport fit|Firsthand experience with literary embellishment|Lively travel sequence|Exaggeration is integral to style',
 'The principal work is a humorous travel memoir; isolated inventions do not convert its full structure into a novel. Mining and speculative incentives provide enough transferable material to avoid V3, at low confidence.',
 {T11:-10,themeNote:'T11=-10: American western life and expansion dominate. T12=0: travel and economic ventures rather than political doctrine.',periodNote:'The main western and Hawaiian travels run through 1866.',confidence:'low'});
score(692,2005,null,[14,9,5,5,5,8,1,4,3,1.5],
 'Reported cases support reflection more than general causal claims|Media incentives language and moral judgment connect|Some transferable scrutiny of public narratives|Interpretive essays rather than tested models|Digressions consume substantial space|Attention and ethical questions endure|Little preferred technical material|Established essayist|Memorable varied essays|Dense self-conscious prose',
 'The ethical and media arguments supply some transferable reasoning. This is a collection of nonfiction essays, not a single activist manifesto.',
 {T11:-10,T12:-10,themeNote:'T11=-10: American public and celebrity culture predominates. T12=-10: media, politics and moral philosophy are central.'});
score(693,2007,null,[18,16,13,11,9,9,7,5,2,2],
 'Quantitative evidence and explicit real-world limits|Physical flows production society and prosperity integrate|Energy constraints and comparative metrics transfer strongly|Explains conversion bottlenecks and dependencies|Dense with earned numerical detail|Physical constraints remain durable|Direct energy scaling and industrial fit|Authoritative interdisciplinary scholar|Systematic but demanding|Precise measures with caveats',
 'The main structure develops a broad explanatory synthesis of natural and industrial energy flows. Course use and reference value alone do not establish a specialist training purpose; H2 is assessed as not triggered, moderate confidence.',
 {yearNote:'MIT Press dates release of this title to December 2007; the copyright/catalog imprint is 2008. Its preface discusses the earlier General Energetics (1991), but the reviewed evidence does not establish that this is merely a retitled edition. Use the verified release of this title and retain the lineage question for review.',
 themeNote:'T11=0: ecological energetics is part of an account spanning natural flows and industrial civilization, not a predominant environmental campaign. T12=0: energy and production are central.'});
score(716,1986,1945,[17,10,5,5,8,9,2,4,3,2],
 'Recorded testimony and visible memory conflicts|Coercion identity and survival constraints connect|Some general lessons in institutions and memory|Narrative testimony exceeds system modeling|Concentrated visual account|Historical evidence and memory problems endure|Limited institutional-risk fit|Direct interviews and sustained documentary work|Strong nested narrative|Signals limits and conflicts in testimony',
 'Nonfiction testimony and memoir; animal imagery does not make the work fiction. Coercive institutions and the limits of memory provide a modest transferable payload.',
 {title:'Maus (complete two-part work)',T11:-10,T12:-10,themeNote:'T11=-10: racial persecution is central. T12=-10: wartime coercion and state power are central.',yearNote:'Use the first collected volume’s original year, 1986. The second volume and later omnibus do not reset the series year; earlier magazine serialization is not substituted for the book edition.',periodNote:'The father’s central persecution and survival account ends in 1945; the later interview frame does not reset H13.'});
score(717,2000,1994,[15,10,4,4,7,8,2,3.5,3,2],
 'Personal memory is clear about viewpoint|Family public conformity and state coercion connect|Some reusable insight into institutional constraints|Lived episodes exceed systematic explanation|Compact but much personal development|Authority and private-public conflict endure|Limited institutional-power fit|Firsthand memoirist|Clear visual sequence|Expressive without technical overclaim',
 'A nonfiction graphic memoir of life under political and religious coercion, rather than a fabricated graphic novel. The original narrative is not converted into a manifesto by later promotional descriptions.',
 {title:'Persepolis (complete memoir)',T11:-10,T12:-10,themeNote:'T11=-10: Iranian national and personal history predominates. T12=-10: revolution, war and political authority structure the account.',yearNote:'First French volume published in 2000; English translation and collected editions do not reset P14.',periodNote:'The complete memoir ends with the author’s departure from Iran in 1994; the 1984 endpoint would cover only the first part.'});
score(721,-250,null,[9,6,6,3,8,9,1,3,3,2],
 'Wisdom observations are not systematic evidence|Work power and mortality are considered together|Useful reflections on limits and uncertainty|Few causal mechanisms|Compact reflective text|Human finitude remains relevant|Little preferred scientific content|Historical influence rather than empirical authority|Strong thematic voice|Poetic precision with interpretive ambiguity',
 'V5: a canonical religious wisdom book, even when read as skeptical philosophy. It is not hard-excluded as a technical manual or a modern fictional narrative.',
 {author:'Qoheleth (anonymous ancient author)',status:'vetoed',veto:'V5',vetoConfidence:'high',T12:-10,
 yearConfidence:'low',yearNote:'Approximate composition year -250 represents the third-century BCE dating described by the USCCB introduction. It is an explicit estimate, not a precise known year; NIV translation does not reset P14.',
 themeNote:'T11=0: timeless reflection. T12=-10: religious moral philosophy is central.'});
score(725,1998,null,[15,11,10,9,8,7,4,5,3,1.5],
 'Clinical observations are valuable but small-sample extrapolation needs care|Perception body representation and reasoning connect|Ingenious low-cost experiments have reusable value|Explains mechanisms through neurological cases|Compact cases largely serve ideas|Experimental logic endures; specific theories can age|Science and heuristic experimentation fit partly|Relevant experimental neurologist|Clear problem-led accounts|Speculative interpretations need qualification',
 'Clinical stories explain cognition through simple experiments; this is neither a treatment manual nor a course. Neurological disorder cases dominate, so the disease deduction applies.',
 {T11:-10,themeNote:'T11=-10: neurological disorders are the dominant case material. T12=0: experimental neuroscience is central.'});
score(727,2015,null,[12,4,1,2,4,6,0,3,3,1.5],
 'Personal testimony with deliberate comic exaggeration|Mostly individual and family experience|Little model beyond personal coping|Stories rarely test causes|Many comic detours|Some lasting memoir value|No substantial preferred domain|Authority on own experience|Energetic memorable anecdotes|Hyperbole limits precision',
 'V3, moderate: the principal payload is personal comic experience with mental illness, rather than transferable explanatory models. It is memoir, not primarily a therapy instruction manual.',
 {status:'vetoed',veto:'V3',vetoConfidence:'moderate',T11:-10,themeNote:'T11=-10: mental illness is central. T12=0: personal memoir rather than a sustained philosophical system.'});
score(733,2001,null,[14,8,6,5,5,9,2,5,2,1.5],
 'Examples illustrate perception more than prove general laws|Visual form language and cognition connect|Reframing and visual analogy offer some reuse|Demonstrations explain some perceptual effects|Large miscellany has uneven explanatory yield|Perceptual principles endure|Design reasoning fits partly|Leading practicing designer|Loose thematic organization|Compact but often aphoristic',
 'Visual examples form an exploration of perception and design, not a sequence of production instructions. The publisher explicitly distinguishes the book from lessons. Retain moderate confidence in this mixed-form eligibility judgment.');
score(737,1975,null,[11,6,2,2,4,7,0,3,2,1],
 'Personal opinions and performed persona limit evidence|Art commerce and celebrity life connect loosely|Few robust reusable models|Aphorisms replace causal analysis|Riffs and personal details dominate|Cultural document persists|Very weak preferred-domain fit|Direct artist perspective|Loose conversational organization|Irony makes literal claims ambiguous',
 'V3: the main payload is celebrity persona, tastes and aphoristic opinions. The work is neither a technical art manual nor a science biography.',
 {status:'vetoed',veto:'V3',vetoConfidence:'moderate',T11:-10,T12:-10,themeNote:'T11=-10: celebrity and New York cultural life predominate. T12=-10: personal philosophy and media fame are central.'});
score(757,1972,null,[15,10,6,6,7,8,3,4,3,1.5],
 'Firsthand working account with memoir limitations|Emergency work institutions and urban conditions connect|Coordination and risk under pressure have some reuse|Practical constraints emerge from incidents|Narrative detail mostly supports the work|Operational lessons persist|Reliability and operations partly fit|Experienced firefighter|Clear incident-based narrative|Some dramatic compression',
 'The work explains emergency operations through a working memoir, rather than teaching firefighting procedures. Its central contemporary working conditions are not assigned a historical endpoint from publication year alone.',
 {T11:-10,themeNote:'T11=-10: Bronx urban and American social conditions dominate. T12=0: emergency work and its constraints, not political doctrine.'});
score(760,2018,1923,[15,13,9,8,8,9,7,3.5,3,1.5],
 'Short researched biography with limited specialist scrutiny verified|Mathematics electrical engineering industry and institutions connect|Turning analysis into electrical systems transfers|Explains practical consequences of AC work|Compact life-and-work account|Electrification mechanisms endure|Direct engineering and energy biography|Technically informed author|Clear career narrative|Genius rhetoric simplifies collaboration',
 'A science and engineering biography, not a technical handbook. The subject’s politics are contextual rather than an ideological program.',
 {periodNote:'The full Steinmetz biography ends with his death in 1923.'});
score(761,1992,null,[15,13,10,8,7,7,7,4,3,1.5],
 'Research reporting is stronger than life-as-software rhetoric|Computation biological models and research practice connect|Simulation emergence and model design transfer|Explains simple rules and emergent behavior|Personalities and future claims take space|Methods endure; frontier expectations age|Direct computing modeling and complexity fit|Experienced technology reporter|Coherent research narrative|Simulation and life are sometimes blurred',
 'A report on the development of artificial-life research. Its methods history retains value independent of launch-era forecasts; V4 is not established.');
score(762,1991,1990,[12,12,8,7,6,8,7,3.5,3,1],
 'Conflicting accounts of the Mitnick case reduce confidence|Networks institutions and adversaries connect|Authentication and organizational failures transfer|Some concrete intrusion mechanisms|Personality and chase scenes reduce density|Basic security failures remain relevant|Direct computing and strategic-risk fit|Experienced reporters with contested framing|Readable linked cases|Threat rhetoric needs restraint',
 'The source itself flags disputed Mitnick reporting. Retain with lower evidence and precision scores; the other technical cases and security mechanisms remain substantive. Source warnings alone do not establish a whole-book V1.',
 {periodNote:'Use 1990 as the approximate culmination of the original 1980s intrusion and Morris-worm cases; the 1995 epilogue is secondary.'});
score(763,2011,2000,[13,12,10,8,7,8,7,4,3,1.5],
 'Participant access is offset by self-exculpatory incentives|Human trust networks and enforcement interact|Social-engineering failure modes transfer|Explains how institutional trust bypasses technical controls|Chase narrative has some padding|Human security weaknesses persist|Direct computing and security fit|Direct practitioner|Strong chronological memoir|Retrospective motive claims need care',
 'A technical life memoir, not a hacking instruction course. The reviewed record supports a useful account with participant-bias limits, not independent validation of every disputed claim.',
 {periodNote:'Use 2000, release from prison, as the end of the central fugitive-and-incarceration account; later professional work is aftermath.'});
score(764,1996,1995,[11,11,7,7,5,8,7,4,3,1],
 'Participant and commercial conflicts weaken balance|Technical tracing and enforcement institutions connect|Incident-response coordination has reuse|Explains tracing constraints amid a heroic narrative|Personal scenes and self-promotion reduce density|Basic investigative constraints endure|Direct computer-security fit|Direct technical participant|Fast chronological account|Moral polarization and certainty need caution',
 'The contemporary review identifies self-promotion and conflicted framing. Lower E, D and P accordingly; documented tracing mechanisms retain value, and the evidence does not show that the whole technical account depends on a proven fabrication.',
 {periodNote:'The central pursuit ends with Mitnick’s February 1995 arrest.'});
score(765,1996,1995,[13,12,8,6,6,8,6,3.5,3,1.5],
 'Direct contact offers access but creates source dependence|Networks law enforcement and media incentives connect|Comparing rival narratives and incentives transfers|More reporting than technical mechanism|Long case detail has uneven yield|Security and narrative incentives endure|Computing and institutional risk fit|Experienced reporter with unusual access|Clear competing-perspective narrative|Sympathy for the subject requires qualification',
 'A reported counterperspective on the Mitnick case, not an independent ground truth. Its divergence from other accounts is preserved as an evidence concern.',
 {periodNote:'The central fugitive story ends in the February 1995 arrest.'});
score(766,1996,1995,[14,12,8,7,5,8,6,3.5,3,1.5],
 'Reported technical detail with limits of reconstructed scenes|Communications policing and media incentives connect|Security failures and hype incentives transfer|Explains cellular tracing and organizational constraints|Too many personalities slow the mechanism|Technical and institutional lessons persist|Computing and strategic risk fit|Experienced investigative journalist|Chase structure with digressions|Some sensational framing',
 'The publisher/catalog’s Fiction subject conflicts with its Dell Non-Fiction series and the contemporary reviewer’s explicit nonfiction description. Treat it as reported nonfiction; do not classify from one catalog tag.',
 {periodNote:'The central chase ends in February 1995.'});
score(767,1989,1989,[18,14,12,10,9,9,7,5,3,2],
 'Firsthand investigation with traceable technical observations|Accounting networks institutions and espionage connect|Anomaly detection and persistent verification transfer|Shows causal tracing and coordination constraints|Most detail advances the investigation|Security reasoning remains durable|Direct computing and quantitative investigation|Direct technically skilled participant|Clear escalating investigation|Precise separation of evidence and suspicion',
 'A narrative investigation, not a system-administration manual. The computing-security mechanism remains central despite the espionage context.',
 {periodNote:'Use 1989 for the case’s legal resolution and concluding account; the main intrusion tracing occurred in 1986–1987.',periodConfidence:'moderate'});
score(768,2012,null,[8,12,5,5,6,4,7,4,3,1],
 'Central inference from engineered systems to minds is insufficiently tested|AI neuroscience and scaling are linked conjecturally|Some algorithm history survives counterfactually|Pattern recognition is not a complete validated mind mechanism|Forecasts and repetition reduce density|Central breakthrough claims lack secure durability|Direct AI and technological leverage fit|Significant engineering experience, less cognitive validation|Clear explanatory sections|Revealed-secret certainty is unsupported',
 'V1/V4, moderate: Gary Marcus’s direct review identifies a central leap from the author’s engineering systems to a general mind theory without discriminating behavioral tests. This finding concerns the claimed explanation of minds, not a claim that hierarchical computation cannot work.',
 {status:'vetoed',veto:'V1, V4',vetoConfidence:'moderate'});
score(771,2006,null,[10,12,4,4,5,6,5,3,2,1],
 'Broad pattern ontology lacks clear discriminating evidence|AI cognition and metaphysics connect conceptually|Few operationally testable lessons|Pattern terminology often redescribes rather than explains|Long synthesis with uneven payoff|Some conceptual questions endure|AI and modeling partly fit|Relevant AI practitioner, limited validation of wider claims|Wide-ranging but loose structure|Terms extend across incompatible levels',
 'The central work is a philosophical argument rather than technical AI training. Vedantic and other references alone do not establish religious advocacy; retain a low score and low confidence rather than inventing a serious veto.',
 {T12:-10,themeNote:'T11=0: no listed unwanted historical theme dominates. T12=-10: philosophy of mind is central.',confidence:'low'});
score(772,2003,1918,[7,9,4,4,4,7,7,2,2,0.5],
 'Specialist review reports pervasive mathematical errors|Mathematical ideas and intellectual history connect|Some intuition remains counterfactually useful|Errors damage the account of infinity|Digressions and corrections reduce density|Subject endures but this treatment is unreliable|Direct mathematical subject|Literary standing does not establish mathematical authority|Energetic but difficult to follow|Ambiguous and incorrect formulations',
 'V1: Michael Harris’s AMS review identifies pervasive mathematical mistakes in the book’s central account of infinity. This is a general-reader history, not primarily a technical course, so the veto is assessed after H2 passes.',
 {status:'vetoed',veto:'V1',vetoConfidence:'high',periodNote:'Use 1918, Cantor’s death, for the central historical life-and-infinity account; later foundational discussion is secondary.',periodConfidence:'low'});
score(779,1972,1918,[13,10,5,5,6,8,2,3.5,3,1.5],
 'Broad historical synthesis with documented interpretive bias concerns|Geography expansion trade and state formation connect|Some general institutional context|Narrative chronology exceeds causal testing|Four volumes include much local detail|Historical context remains useful|Limited direct technical content|Strong expositor outside specialist historical research|Clear chronological account|Occasional editorial judgment exceeds evidence',
 'The source’s direct link identifies the four-volume American-history sequence. Treat that nominated sequence once, without adding its individually named volumes as new source nominations. A reader’s disagreement with political commentary is not enough to prove V2.',
 {title:'American history series (four volumes, North America to 1918)',T11:-10,T12:-10,
 themeNote:'T11=-10: single-nation American history predominates. T12=-10: state formation and politics organize the sequence.',
 yearNote:'Use the first volume’s original US year, 1972, rather than the 1973 Dobson edition named in the source-linked review. Later volumes do not reset P14.',periodNote:'The source-linked four-volume scope ends in 1918.'});
score(780,2018,1848,[16,13,8,8,7,9,5,3.5,3,2],
 'Researched ship history distinguishes some missing evidence|Ship design logistics exploration and institutions connect|Preparation and failure constraints have reuse|Explains limits of equipment and supply|Travel and personalities take some space|Exploration logistics remain useful|Engineering and logistics partly fit|Experienced researcher and traveler|Clear vessel-centered narrative|Generally careful about uncertainty',
 'A historical account of exploration and ship capability, not a sailing manual. The naval origin does not make military doctrine its central subject.',
 {periodNote:'Use 1848, abandonment of the Franklin expedition ships, as the central operating-history endpoint. The 2014 rediscovery is an evidential epilogue rather than a reset to the ship’s working era.'});
score(792,2011,null,[13,8,8,5,9,9,2,3,3,2],
 'Thought experiments support an argument, not universal causal proof|Trust individual choices and social consequences connect|Honesty and commitment offer reusable reasoning|Consequences are argued more than tested|Brief focused essay|Trust problems are durable|Practical reasoning fits partly|Philosophical and neuroscience background|Clear compact case|Controlled prose with an overly broad thesis',
 'A sustained ethical argument, not a procedural course. Advocacy for honesty is not a political or religious manifesto under V5.',
 {T12:-10,themeNote:'T11=0: timeless argument. T12=-10: moral philosophy is central.',yearNote:'The author’s September 2011 announcement documents the original Kindle Single. The 2013 print expansion does not reset P14.'});
score(828,-430,-479,[10,12,7,6,5,9,4,4,3,1.5],
 'Reports and traditions are often unverified, with some uncertainty acknowledged|Geography institutions and military action connect|Comparative power and strategic constraints have reuse|Mixed explanation and anecdotal causation|Long ethnographic digressions|Historical comparison remains durable|Geostrategy and institutional power partly fit|Foundational historian, limited modern verification|Large coherent conflict with digressions|Reported marvels need explicit separation',
 'Ancient narrative inquiry, not fiction simply because some reported traditions are unreliable. The modern Landmark apparatus does not turn the original narrative into a specialist technical manual. Retain reduced E and low confidence rather than treating all reported hearsay as authorial certainty.',
 {title:'The Histories (Landmark Herodotus edition)',author:'Herodotus; Robert B. Strassler (editor); Andrea L. Purvis (translator)',
 yearConfidence:'low',yearNote:'Use approximately 430 BCE as the composition-era estimate for Herodotus’s work; the 2007 Landmark translation does not reset P14.',T12:-10,themeNote:'T11=0: cross-cultural history, not one nation. T12=-10: imperial politics and the Greek–Persian wars are central.',periodNote:'Approximately 479 BCE, the end of the principal Persian-war campaign and Sestos narrative; exact year is low confidence and H13 is capped regardless.',confidence:'low'});
score(833,1977,1934,[14,7,2,3,5,8,1,4,3,2],
 'Retrospective memory and reconstruction need caution|Geography language and local society connect descriptively|Few reusable mechanisms beyond cultural observation|Description dominates causal analysis|Long scenic and historical digressions|Travel testimony retains literary value|Very weak preferred systems fit|Experienced traveler and writer|Strong literary journey|Precise evocation, less precise remembered dialogue',
 'V3, moderate: the central payload is remembered places, encounters and literary observation rather than transferable models. It is a travel memoir, not a travel instruction book.',
 {status:'vetoed',veto:'V3',vetoConfidence:'moderate',themeNote:'T11=0: a journey across several nations. T12=0: travel and cultural observation, not political or military explanation.',periodNote:'The first leg reaches the middle Danube in 1934.'});
score(834,1986,1934,[14,8,2,3,5,8,1,4,3,2],
 'Long-delayed recollection limits historical precision|Geography estates and regional cultures connect|Little explicit general model|Descriptive context exceeds causal explanation|Extended encounters and landscape detail|Historical travel writing remains durable|Little preferred technical content|Direct traveler with wide reading|Clear stage of the journey|Rich prose but reconstructed detail',
 'V3, moderate: the second travel volume mainly preserves encounters and a lost social world. It does not establish a substantial transferable mechanism after local detail is removed.',
 {status:'vetoed',veto:'V3',vetoConfidence:'moderate',themeNote:'T11=0: Hungary and Transylvania in a cross-border journey. T12=0: travel, not political doctrine.',periodNote:'The second leg covers the 1934 walk to the Iron Gates.'});
score(835,2013,1935,[13,7,2,3,5,8,1,3.5,2,2],
 'Unfinished posthumous drafts require editorial reconstruction|Balkan geography culture and religion connect descriptively|Few generalizable mechanisms|Narrative observation dominates explanation|Incomplete structure and digressions reduce density|Historical travel testimony persists|Weak preferred technical-domain fit|Direct experience with editorial mediation|Less finished than earlier volumes|Literary skill remains but continuity is uneven',
 'V3, moderate: the final travel account and Mount Athos journal primarily deliver local cultural and personal observation. Reporting monasteries does not make it religious advocacy.',
 {status:'vetoed',veto:'V3',vetoConfidence:'moderate',themeNote:'T11=0: cross-national journey. T12=0: cultural travel rather than political or religious doctrine.',periodNote:'The closing Mount Athos diary extends into early 1935.'});
assert.equal(results.length,packet.length,'Every transferred source candidate needs a decision');
assert.equal(new Set(results.map(a=>a.id)).size,results.length);
fs.writeFileSync(dir+'hn-tail-assessments.json',JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify({decisions:results.length,scored:results.filter(a=>a.raw).length}));
