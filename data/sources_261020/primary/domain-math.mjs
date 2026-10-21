import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/sources_261020/primary/',read=f=>JSON.parse(fs.readFileSync(dir+f,'utf8'));
const packet=read('math-packet.json'),results=read('math-assessments.json');
const byIndex=new Map(packet.map(b=>[b.packetIndex,results.find(a=>a.id===b.id)]));
// Explicit judgments from the reviewed contents and accounts, not title-word tags.
// Each clause states the explanatory scope used for that particular domain.
const rows=[
[90,'SCI3:quantum measurement and experimental conflict;QNT2:Bell constraints on hidden-variable models;INS1:debate within research communities'],
[91,'SCI3:interpretations and their physical assumptions;INS2:research conformity and neglected programs;HEU1:distinguishing consensus from empirical selection'],
[92,'SCI3:entanglement experiments and signaling limits;QNT2:Bell-test correlations;CMP2:teleportation and quantum-information tasks;ENG1:experimental arrangements'],
[93,'SCI3:entanglement and experimental tests;INS2:collaboration and scientific disagreement;INN1:experimental changes that made the tests possible'],
[98,'QNT3:zero infinity and representation;SCI1:physical uses of zero and infinity;HEU1:how notation changes reasoning'],
[99,'QNT3:indivisibles and infinitesimal arguments;INS3:institutional acceptance and suppression of methods;POL2:religious and political authority constraining inquiry;INN2:diffusion of new mathematical practice'],
[100,'QNT2:development of mathematical ideas across cultures;INS2:barriers to access and recognition;INN1:transmission of mathematical knowledge'],
[101,'QNT3:historical development of mathematical concepts;INS1:social settings of mathematical practice'],
[102,'QNT1:mathematical examples supporting the humanistic argument;INS1:access to mathematical communities;HEU2:play persistence and intellectual motivation'],
[103,'QNT3:primes and the Riemann problem;CMP1:cryptographic applications;SCI1:physical analogies in spectral ideas;INN1:research paths toward a difficult conjecture'],
[108,'SCI3:measurement and uncertainty;QNT2:limits of simultaneous prediction;INS1:research disagreement'],
[109,'SCI2:entanglement and measurement;CMP2:quantum-information applications;ENG1:experimental tests'],
[110,'SCI3:unified-field research and constraints;INS2:collaboration and competition;HEU1:commitment to a failing research program'],
[111,'SCI2:physical meaning of quantum claims;HEU2:limits of exporting scientific metaphors;INS1:communication of scientific ideas'],
[112,'SCI2:relational interpretation of quantum mechanics;QNT1:relational state descriptions;HEU1:assumptions behind an interpretation'],
[113,'SCI2:elementary quantum concepts;QNT1:probability in measurement'],
[114,'CMP3:quantum-computing capabilities as claimed;HTC2:quantum processors and applications;SCI2:physical basis of qubits;SCL1:claimed computational speedups'],
[115,'SCI3:cosmological time and physical limits;QNT2:model assumptions for alternative cosmic endings;HEU1:separating scenarios from forecasts'],
[116,'SCI3:particle physics and matter origins;HTC2:accelerators and detectors;ENG1:measurement apparatus;INN1:experimental discovery'],
[117,'SCI3:galaxy rotation and dark-matter evidence;ENG2:spectroscopic instruments;INS2:access and acceptance within astronomy;INN2:measurement-led change'],
[118,'SCI3:stellar classification and astronomy;QNT2:measurement and classification of stellar data;CMP2:human computation and tabulation;INS3:organization of observatory labor;ENG1:photographic observation'],
[119,'SCI3:cosmic acceleration and cosmological constraints;QNT2:comparison of competing models;HEU1:the role and limits of aesthetic model choice'],
[120,'SCI3:primordial cosmology and observational limits;QNT2:inference from indirect evidence;HTC1:instruments probing early-universe signals'],
[121,'SCI3:extragalactic distances and cosmic expansion;ENG2:telescope capabilities;INS2:observatory competition and research;INN1:improved distance measurement'],
[122,'SCI3:dark-energy evidence;QNT2:cosmological parameter inference;ENG2:supernova observation;INS2:competing survey teams;HEU1:independent convergence of evidence'],
[123,'SCI3:entropy and the arrow of time;QNT3:statistical-mechanical reasoning;HEU1:testing explanatory assumptions'],
[124,'SCI3:cyclic-cosmology proposal;QNT3:geometric and entropy constraints;HEU1:distinction between consistency and empirical support'],
[125,'SCI2:physical-law and cosmological arguments;QNT1:model dependence of descriptions;HEU1:limits of inference about ultimate explanation'],
[126,'SCI3:multiverse frameworks and physical assumptions;QNT2:consistency and empirical constraints;HEU1:distinguishing different meanings of multiple universes'],
[127,'SCI3:conditions and development of physical theories;QNT2:assumptions in cosmological inference;HEU2:model criticism and empirical restraint'],
[128,'SCI3:research programs in fundamental physics;INS2:incentives and community structure;HEU2:judging evidence under theoretical uncertainty;INN1:selection of research directions'],
[130,'SCI3:scientific claims about existence and knowledge;QNT1:limits of inference from models;HEU2:separating established conclusions from speculation'],
[133,'SCI3:probabilistic physical explanations across scales;QNT3:conditional inference and uncertainty;HEU2:comparing explanations with evidence'],
[134,'SCI3:cosmological models and key observations;QNT2:relationships among physical parameters;ENG1:observational limitations'],
[137,'SCI2:popular account of space time and cosmology;QNT1:qualitative model assumptions'],
[138,'SCI4:empirical formation of modern cosmology;QNT4:competing models and independent observational constraints;INS2:research practice and cooperation;INN2:paths from uncertain ideas to tested models;ENG2:observational capabilities;HEU2:convergence and rejected alternatives'],
[142,'SCI3:black-hole formation accretion and cosmic roles;QNT2:physical constraints on models;ENG1:observational capabilities'],
[143,'SCI3:cosmological discoveries and their acceptance;INS2:scientific communities evaluating new evidence;ENG1:observational instruments;INN2:interaction of discoveries and model revision'],
[144,'SCI3:gravitational waves and astrophysical sources;ENG3:interferometer design constraints;QLT3:noise suppression and signal validation;HTC3:advanced interferometric instruments;INS2:international research coordination'],
[145,'SCI3:gravitational-wave theory and detection;ENG3:instrument integration;QLT3:noise and experimental reliability;INS3:long-term collaboration and research organization;HTC2:LIGO instrument capabilities'],
[146,'SCI3:relativistic constraints on film scenarios;QNT2:model assumptions and feasible extrapolation;CMP1:visual representation of physical simulations;HEU2:labeling established extrapolated and speculative claims'],
[147,'SCI3:development and tests of general relativity;QNT2:mathematical models and empirical constraints;INS2:research groups and acceptance;INN2:theory maturation and delayed uses'],
[148,'SCI3:black-hole theory and evidence;INS2:scientific acceptance and resistance;INN2:changes in observational possibilities'],
[149,'SCI3:black-hole information and quantum consistency;QNT3:information and holographic constraints;HEU1:using contradictions to refine models'],
[150,'SCI3:gravitational-wave search;ENG3:detector design;QLT3:noise rejection and validation;INS2:organization of long experiments;HTC2:interferometry capabilities'],
[151,'SCI3:particle-physics anomalies and experimental limits;ENG2:detector capabilities;QNT2:statistical interpretation of anomalies;HEU2:resisting premature claims'],
[152,'SCI3:symmetry breaking and the Higgs mechanism;INS2:credit and collaboration in theory and experiment;INN2:path from theoretical proposal to detection'],
[153,'SCI3:Higgs mechanism and experimental tests;ENG3:accelerators and detector constraints;HTC3:LHC capabilities;QNT2:signal significance;QLT2:background rejection;INS2:collaboration at large scale'],
[154,'SCI3:Higgs search and particle-physics principles;ENG2:accelerator and detector constraints;INS2:coordination of theory and experiment;INN2:testing a proposed mechanism'],
[155,'SCI3:particle physics at the LHC;ENG2:accelerator design;HTC3:collider and detector capabilities;INS1:international research cooperation'],
[158,'SCI3:Einstein’s quantum contributions and objections;QNT2:probability and locality assumptions;HEU1:productive objections to a framework'],
[159,'SCI3:Fermi’s theoretical and experimental physics;ENG2:reactor development;ENE2:controlled nuclear chain reactions;INS2:team research;INN2:combining theory and experiment'],
[160,'SCI3:Fermi’s science and experimental reasoning;QNT2:estimation and simplified models;ENG2:nuclear development;ENE2:chain-reaction control;INS2:research teams;HEU2:efficient physical estimates'],
[162,'SCI3:Feynman’s scientific work;QNT2:representations and approximate reasoning;HEU2:problem choice and model-building;INN2:ways of approaching difficult problems'],
[163,'SCI3:quantum research of Feynman and Wheeler;QNT2:alternative representations;INS2:mentorship and collaboration;INN2:exchange of exploratory ideas'],
[164,'SCI3:Hawking’s cosmology and black-hole work;INS2:scientific collaboration and support;HEU1:research persistence under constraints'],
[165,'SCI1:scientific career context;INS1:care and practical support around research'],
[166,'SCI3:electromagnetic theory;QNT3:operational methods and representation;ENG3:transmission-line constraints;HTC2:telecommunications capabilities;INN2:translation of abstract methods into applications'],
[167,'QLT3:coin precision and detection of counterfeiting;PRD2:minting and recoinage;FIN2:trust in currency;INS2:mint organization and enforcement;MAT1:coin metal and adulteration;STR1:adversarial adaptation'],
[168,'SCI3:Oppenheimer’s scientific work;INS3:research leadership and security institutions;HTC2:nuclear technology;POL2:state decisions about science;MIL2:nuclear weapons programs;STR1:nuclear policy choices'],
[169,'SCI3:physics constraints of bomb development;ENG3:integration of a novel weapon;PRD3:industrial realization;LOG2:project supply and coordination;INS3:military-scientific organization;MIL2:weapon requirements;SCL2:moving from laboratory to production;MAT2:fissile inputs'],
[170,'SCI3:Pontecorvo’s nuclear and neutrino physics;INS2:scientific networks and security;POL2:defection and state intelligence;STR1:Cold War information risks'],
[171,'SCI2:nuclear knowledge sought by intelligence;INS2:security institutions and access;MIL2:nuclear-weapons programs;POL3:espionage and state decision-making;STR2:adversarial transfer of technical secrets'],
[173,'SCI2:electromagnetism in Tesla’s work;ENG2:electrical systems and designs;ENE3:alternating-current power;INN2:invention and commercialization;FIN1:funding constraints'],
[174,'QNT3:computability and mathematical reasoning;CMP4:computation and machine intelligence;INS2:wartime and research organizations;MIL2:cryptanalytic applications;INN2:new computational concepts'],
[175,'QNT3:Noether’s mathematical ideas;SCI3:symmetry and conservation;INS2:institutional barriers and research networks;INN1:cross-field use of abstract results'],
[178,'QNT3:mathematical practice and ways of proof;INS2:communities and mathematical culture;HEU2:limits and uses of mathematical reasoning'],
[179,'QNT3:foundations and rival conceptions of mathematics;HEU2:limits of formal certainty;INS1:research schools and acceptance'],
[180,'QNT4:development of mathematical concepts and structures;SCI2:physical problems shaping mathematical work;INN2:successive changes in methods and representations'],
[182,'QNT2:Erdős’s mathematical problems and results;INS2:collaboration networks;HEU1:problem choice and persistence;INN1:distributed mathematical discovery'],
[183,'QNT3:symmetry and the Langlands program;INS2:mathematical education and access;SCI1:connections with physical ideas'],
[184,'QNT3:Fermat problem and proof constraints;INS2:mathematical communities and collaboration;INN2:combining previously separate results'],
[185,'QNT3:Riemann hypothesis and prime distribution;SCI1:physical analogies;INN1:research strategies across a difficult problem'],
[186,'QNT3:algebraic representations and abstraction;SCI1:applications motivating algebra;INN1:changes in mathematical notation and methods'],
[188,'QNT2:explanations of mathematical ideas;HEU1:useful ways to interpret everyday quantities'],
[189,'QNT2:combinatorics and structural analysis;HEU1:using a formal representation to reveal literary patterns'],
[192,'QNT1:elementary account of Noether’s work;SCI1:symmetry and conservation at picture-book depth;INS1:academic access barriers'],
[193,'QNT3:Lovelace’s mathematical development;CMP2:the analytical-engine concept;INS2:education and collaboration;HEU1:testing biographical claims against documents'],
[194,'QNT3:equations symmetry and insolubility;SCI2:physical uses of symmetry;INN1:development of abstract mathematical structures'],
[195,'SCI3:eternal inflation and cosmological models;QNT2:probability and measure problems;HEU1:inference under observational limits'],
[196,'SCI3:cyclic cosmology;QNT2:assumptions and constraints of competing models;HEU1:distinguishing a proposal from a selected explanation'],
[197,'SCI3:string theory and its physical motivation;QNT2:consistency and dimensional assumptions'],
[198,'SCI3:space time and quantum principles;QNT2:constraints behind physical models'],
[199,'SCI3:physical evolution and entropy;QNT1:limits and timescales;HEU2:distinguishing empirical explanation from meaning claims'],
[200,'QNT3:probability selection effects and randomness;HEU3:avoiding false attribution of success;FIN1:market examples;INS1:evaluation and selection practices'],
[201,'SCI3:physical laws and experimental tests;QNT3:mathematical representation symmetry and conservation;HEU3:model criticism and uncertainty'],
[202,'SCI2:cosmology and speculative worlds;QNT1:physical constraints on the scenarios'],
[203,'SCI3:particle physics and extra-dimensional models;QNT3:geometry scales and consistency;HEU1:model constraints versus physical existence'],
[204,'SCI2:astronomy and environmental physical constraints;QNT1:estimates of what an observer would see'],
[205,'SCI2:time and cosmological assumptions;QNT2:modeling evolving laws;HEU2:critique of model assumptions'],
[206,'SCI1:outsider models and their relation to established physics;INS2:scientific boundaries and communication;HEU2:evidence and standards for acceptance'],
[208,'SCI3:physical limits behind public choices;ENE3:energy sources and constraints;QNT3:order-of-magnitude risk comparisons;HTC2:nuclear and space technologies;POL2:policy choices informed by physical constraints;HEU2:quantitative comparison of options'],
[209,'SCI3:symmetry and conservation in physics;QNT3:mathematical constraints and asymmetry'],
[212,'SCI3:empirical foundations and speculative theories;HEU3:testability and evidential limits;INS1:research incentives'],
[213,'SCI3:nuclear science;ENG3:weapon and reactor development;PRD3:nuclear production;MAT2:fissile materials;INS3:state research organization;MIL3:nuclear capability;STR2:international arms competition;SCL2:industrial scale-up'],
[214,'SCI2:Einstein’s ideas and discoveries;QNT2:thought experiments and physical models;HEU1:conceptual reasoning'],
[217,'SCI3:particle physics and accelerator experiments;ENG3:accelerator constraints;HTC3:colliders and detectors;INS2:research cooperation;QLT1:measurement limitations'],
[218,'HTC2:reconnaissance aircraft and nuclear test capabilities;ENG1:aircraft constraints in the historical narrative;MIL3:secret military programs;POL2:state secrecy and intelligence;INS2:security organization']
];
for(const [i,line] of rows){
 const a=byIndex.get(i);assert(a?.raw,i+' must be scored');
 for(const clause of line.split(';')){
  const [,code,value,rationale]=clause.match(/^([A-Z]+)([1-4]):(.+)$/)||[];assert(code,i+' '+clause);
  a.enrichment.domains[code]={value:+value,confidence:'moderate',rationale,refs:[...new Set(a.evidence.filter(s=>!s.includes('amazon')).map(s=>s.replace(/#index-\d+$/,'')))].slice(0,5)};
 }
}
function mechanism(i,id,statement,scope,roles,strength=2){
 const a=byIndex.get(i),domains=Object.keys(roles);
 assert(domains.every(d=>a.enrichment.domains[d]?.value>0));
 a.enrichment.connections??={status:'partial',mechanisms:[],joins:[]};
 a.enrichment.connections.mechanisms.push({id,statement,domains,roles,scope,strength,confidence:'moderate',refs:a.evidence.filter(s=>!s.includes('amazon')).map(s=>s.replace(/#index-\d+$/,'')).slice(0,5)});
}
mechanism(117,'rubin-instrument-evidence','Improved spectra make galaxy rotation measurable; repeated results then constrain mass models and challenge institutional acceptance.','Rubin and collaborators’ rotation-curve program',{ENG:'instrument capability',SCI:'mass-model constraint',INS:'acceptance of repeated evidence',INN:'measurement-led revision'});
mechanism(145,'ligo-noise-coordination','A predicted signal becomes detectable only when coordinated instrument development suppresses noise and validates coincident observations.','LIGO development through the first detection',{SCI:'signal prediction',ENG:'instrument integration',QLT:'noise rejection and validation',INS:'long-term coordination',HTC:'interferometric capability'},3);
mechanism(153,'lhc-higgs-validation','Theoretical signatures determine detector requirements; large collaborative instruments separate rare candidate events from backgrounds before accepting a discovery.','LHC Higgs search through 2012',{SCI:'predicted signature',ENG:'detector design',HTC:'collider capability',QNT:'signal significance',QLT:'background discrimination',INS:'collaboration'},3);
mechanism(166,'heaviside-telecom','A mathematical representation of electromagnetic propagation exposes distortion constraints that guide transmission-line design.','Heaviside’s transmission-line work',{SCI:'electromagnetic law',QNT:'operational representation',ENG:'line design',HTC:'telecommunication capability'},3);
mechanism(167,'newton-coin-trust','Coin manufacture and inspection constrain counterfeiting, while enforcement and currency institutions determine whether physical precision produces monetary trust.','Newton’s mint work and the Chaloner case',{PRD:'minting process',QLT:'precision and detection',FIN:'currency trust',INS:'enforcement',MAT:'metal content'},2);
mechanism(169,'manhattan-production','Weapon requirements tie uncertain physics to engineering, material production and supply; a coordinated organization must resolve these constraints together to deliver a usable device.','Groves and Oppenheimer’s Manhattan Project roles',{SCI:'physical feasibility',ENG:'device integration',PRD:'industrial output',MAT:'fissile inputs',LOG:'supply coordination',INS:'project decisions',MIL:'weapon requirements',SCL:'laboratory-to-industrial transition'},3);
mechanism(200,'randomness-selection','Selection on noisy outcomes can reward chance as if it were skill; probability reasoning changes how market success and institutional performance should be judged.','Illustrative success and performance cases',{QNT:'sampling variation',HEU:'attribution check',FIN:'market outcomes',INS:'performance selection'},2);
const codes='SCI QNT CMP HTC ENG ENE MAT PRD QLT LOG TRD SCL INN INS ECO FIN POL MIL STR HEU'.split(' ');
for(const a of results.filter(a=>a.raw)){
 a.enrichment.research??={};a.enrichment.research.reviewed='2026-10-20';
 a.enrichment.research.unknownDomains=codes.filter(c=>!a.enrichment.domains[c]);
 a.enrichment.research.unknownReason='Graded domains reflect the reviewed explanatory scope. Absent domains remain unknown, not zero; the evidence does not justify a complete twenty-domain audit.';
 a.enrichment.connections??={status:'partial',mechanisms:[],joins:[]};
 a.enrichment.connections.status='partial';
 a.enrichment.connections.limitations='Selected causal connections are recorded where the reviewed contents support distinct domain roles. This is not a complete connection inventory.';
 a.evidence=[...new Set(a.evidence.map(s=>s.replace(/#index-\d+$/,'')))];
}
fs.writeFileSync(dir+'math-assessments.json',JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify({scored:results.filter(a=>a.raw).length,domains:results.reduce((n,a)=>n+Object.keys(a.enrichment?.domains||{}).length,0),mechanisms:results.reduce((n,a)=>n+(a.enrichment?.connections?.mechanisms?.length||0),0)}));
