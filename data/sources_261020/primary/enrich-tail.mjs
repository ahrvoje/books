import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/sources_261020/primary/',read=f=>JSON.parse(fs.readFileSync(f,'utf8'));
const packet=read('data/sources_261020/hn/transfer-root-tail.json'),results=read(dir+'hn-tail-assessments.json');
const byIndex=new Map(packet.map(b=>[b.packetIndex,results.find(a=>a.id===b.id)])),research=[];
for(const file of fs.readdirSync(dir).filter(f=>/^tail-research-\d+\.json$/.test(f))){
 const d=read(dir+file);
 d.books.forEach((b,j)=>{
  for(const raw of String(d.results[j].value||'').split(/-{10,}/)){
   const text=raw.trim(),url=text.match(/^[^\n]{0,650} \((https?:\/\/[^\n]+)\)\n/)?.[1];
   if(url)research.push({i:b.index,url,text,file:dir+file});
  }
 });
}
function edition(i,pages,year,id,token,format='Format not specified in catalog',note=''){
 const a=byIndex.get(i),r=research.find(r=>r.i===i&&(r.url.includes(token)||r.text.includes(token)));
 assert(a.raw&&r,i+' edition evidence '+token);
 a.enrichment.edition={pages,year,id,url:r.url,retrieved:'2026-10-20',language:'English',format,confidence:'moderate',
  notes:'Extent of one identified edition, not an average across formats. '+note,source:{capture:r.file}};
 a.evidence.push(r.url);
 if(id.startsWith('ISBN:')){
  const isbn=id.slice(5).replace(/-/g,'');let asin=isbn;
  if(isbn.length===13&&isbn.startsWith('978')){
   const s=isbn.slice(3,12),v=(11-[...s].reduce((n,c,j)=>n+Number(c)*(10-j),0)%11)%11;asin=s+(v===10?'X':v);
  }
  if(asin.length===10){a.purchaseUrl='https://www.amazon.de/dp/'+asin;a.purchaseFormat=format+'; ISBN-based Amazon.de locator. Availability and product-page binding were not verified.';}
 }
}
edition(587,368,1998,'ISBN:9780316925280','9780316925280','paperback','Complete essay collection, not the later single-essay release.');
edition(588,176,1951,'GoogleBooks:0KnZAAAAMAAJ','0KnZAAAAMAAJ');
edition(594,384,2022,'ISBN:9780525565994','9780525565994','paperback');
edition(614,1513,1978,'ISBN:9780517268254','QUYgAQAAIAAJ',undefined,'Complete two-volume work in the identified edition.');
edition(633,480,2002,'ISBN:9780375714498','penguinrandomhousehighereducation.com/book/?isbn=9780375714498','paperback');
edition(649,384,2001,'ISBN:9780375725807','underground-by-haruki-murakami','paperback','English collection combines selected victim interviews and later cult-member interviews; its extent is not the Japanese edition extent.');
edition(660,384,2013,'GoogleBooks:DXJgvIwXW6MC','DXJgvIwXW6MC');
edition(662,112,2026,'ISBN:9798217198894','9798217198894','hardcover','Standalone Common Sense, not a collected-writings volume.');
edition(670,256,2017,'ISBN:9780525433446','the-brain-by-david-eagleman','paperback');
edition(680,1274,1998,'ISBN:9780521508827','9780521508827','hardcover','Cambridge Emerald/Standard Text KJV. The Cambridge catalog gives extent; Christianbook dates this printing to 1998. Edition date has moderate confidence.');
edition(683,448,1985,'ISBN:9780140390506','life-on-the-mississippi-by-mark-twain','paperback');
edition(684,888,2011,'ISBN:9780520268173','ucpress.edu/books/roughing-it/paper','paperback','Complete annotated edition; notes and original illustrations materially enlarge the physical extent.');
edition(692,352,2005,'ISBN:9780316156110','9780316156110','hardcover');
edition(693,494,2007,'ISBN:9780262693561','mitpress.mit.edu/9780262693561','paperback','Publisher total extent; numbered-text counts in other catalogs differ.');
edition(716,296,1996,'ISBN:9780679406419','9780679406419','hardcover','Complete Maus, both parts.');
edition(717,352,2007,'ISBN:9780375714832','results88.html','paperback','Complete Persepolis; archived bookseller record, corroborated by the publisher description of the complete work.');
edition(725,320,1998,'ISBN:9780688152475','Kt67QgAACAAJ');
edition(727,329,2015,'ISBN:9781447238324','J4xjrgEACAAJ');
edition(733,534,2001,'ISBN:9780714834498','y5PsF5M-WdYC');
edition(737,241,1975,'ISBN:9780156717205','1FCc8dxclXcC');
edition(757,240,1999,'ISBN:9780446675529','9780446675529','paperback');
edition(760,180,2018,'ISBN:9781610353267','9781610353267','paperback');
edition(761,400,1992,'ISBN:9780679743897','SeBG0iWBzq4C');
edition(762,368,1991,'ISBN:9780671683221','lq8ZAQAAIAAJ');
edition(763,432,2011,'ISBN:9780316134477','p-nRxITKc34C');
edition(764,324,1996,'ISBN:9780786862108','Am8EAQAAIAAJ');
edition(765,416,1997,'ISBN:9780316528696','9780316528696','paperback');
edition(766,328,1996,'ISBN:9780440222057','9780440222057','paperback');
edition(767,416,2005,'ISBN:9781416507789','OL8456717M','paperback','Open Library identifies the 2005 Pocket paperback; 399 is its numbered-text count in other records.');
edition(768,352,2013,'ISBN:9780143124047','how-to-create-a-mind-by-ray-kurzweil','paperback');
edition(771,421,2006,'ISBN:9781581129892','juj30GyFzOUC');
edition(772,320,2003,'ISBN:9780393003383','ams.org/journals/notices/200406/200406FullIssue.pdf','hardcover','The contemporaneous Harris review identifies the 2003 edition and its extent.');
edition(780,352,2018,'ISBN:9781771644426','gLByDwAAQBAJ');
edition(792,105,2013,'ISBN:9781940051000','4nMOmwEACAAJ');
edition(828,1024,2009,'ISBN:9781400031146','9781400031146','paperback');
edition(833,344,2005,'ISBN:9781590171653','nyrb.com/products/a-time-of-gifts','paperback');
edition(834,280,2005,'ISBN:9781590171660','nyrb.com/products/between-the-woods-and-the-water','paperback');
edition(835,392,2015,'ISBN:9781590177792','9781590177792','paperback');
const series=byIndex.get(779);
series.year=1973;series.yearConfidence='moderate';
series.yearNote='First volume, The Shaping of North America, appeared in 1973 according to the library record and Asimov bibliography. The earlier draft 1972 attribution was not supported; later British editions do not reset the year.';
series.evidence.push('https://openlibrary.org/books/OL21000900M/The_shaping_of_North_America');
series.enrichment.research.unknownReason='The nominated four-volume history is identified, but no verified complete-set edition and total extent was found. A single volume’s page count is not used.';
byIndex.get(721).enrichment.research.unknownReason='Canongate confirms a standalone Ecclesiastes text with a Lessing introduction. Retrieved records did not establish a reliable print extent and edition year together; commentary and complete-Bible extents are rejected.';
// Book-specific explanatory scope, not grades generated from title words.
const rows=[
[587,'ECO1:consumer services and commercial incentives;INS1:service work and entertainment institutions;HEU2:attention self-deception and observed behavior'],
[588,'POL3:mass movements and authoritarian allegiance;INS2:group formation and belonging;HEU3:psychological appeal of certainty;STR1:movement recruitment'],
[594,'SCI3:forest ecology and mycorrhizal research with contested inferences;INS2:research access and forestry institutions;MAT1:resource exchange in forests;HEU1:interpretation of experiments'],
[614,'POL1:historical political context of the plays;INS1:customs and institutions behind literary references'],
[633,'ECO3:media revenue and ownership incentives;INS3:news production and source dependence;POL3:agenda selection and state interests;STR2:information filtering'],
[649,'INS2:cult organization and social conformity;POL1:responses to violence;HEU2:contrasting participant and victim perspectives'],
[660,'INS1:professional baseball clubs and labor relations'],
[662,'POL3:independence and legitimacy of government;INS2:representation and constitutional design;STR2:arguments for political separation'],
[670,'SCI3:neural construction of experience;HEU2:limits of introspection and conscious control;CMP1:brain and machine comparisons'],
[680,'INS2:religious law community and authority;POL2:kingship and communal rule;HEU1:moral maxims and parables as claims'],
[683,'LOG3:river navigation and transport constraints;ENG2:steamboat operation in its historical setting;TRD2:river commerce;ECO2:changing regional transport economy;HEU2:expert perception of changing conditions'],
[684,'MAT2:prospecting and mineral speculation;LOG2:western transport and communication;ECO2:resource booms and unstable local markets;HEU1:expectations and experience'],
[692,'HEU2:attention ethics and rationalization;INS2:media and commercial settings;POL1:political reporting'],
[693,'SCI4:physical energy constraints across systems;ENE4:energy flows conversions and efficiencies;QNT4:comparative energetic accounting;MAT3:resource limits;PRD3:energy requirements of production;ENG3:conversion technologies;LOG2:transport energy;ECO3:energy and economic output;SCL3:scale effects in energy use'],
[716,'INS2:persecution concealment and survival networks;POL2:state persecution;MIL1:wartime constraints;HEU1:memory and retrospective testimony'],
[717,'POL2:revolution war and state repression;INS2:schools family and imposed rules;HEU1:identity and competing social norms'],
[721,'HEU2:limits of knowledge ambition and control;INS1:religious interpretation of conduct'],
[725,'SCI3:neurological evidence about perception and self;HEU2:causal inference from unusual clinical cases'],
[727,'HEU1:personal coping observations'],
[733,'HEU2:visual associations and changes of perspective;INN2:creative recombination;ENG1:design examples'],
[737,'ECO1:celebrity and commercial art;HEU1:personal observations on work and consumption'],
[757,'LOG2:emergency dispatch and response constraints;INS2:crew coordination under urban conditions;STR2:decisions under immediate risk;HEU2:experience-based judgment;ENG1:equipment constraints'],
[760,'SCI3:electrical theory and magnetic losses;QNT2:mathematical representation of alternating currents;ENG3:power-system development;ENE3:electrification;INN3:industrial research;PRD2:electrical manufacturing;INS2:research organization'],
[761,'CMP3:simulation of adaptive systems;SCI3:biological self-organization;QNT2:rules and emergent patterns;INN2:computational research programs;HEU2:model versus organism distinctions'],
[762,'CMP3:network access and intrusion;HTC2:communications infrastructure;INS2:security and enforcement institutions;STR2:attacker and defender behavior;HEU1:trust exploited through social engineering'],
[763,'CMP3:intrusion and access controls;HTC2:telecommunications systems;INS2:organizational weaknesses and enforcement;STR3:adversarial adaptation;HEU2:manipulation of trust;QLT2:security failure modes'],
[764,'CMP3:network traces and intrusion;HTC2:communications tracking;INS2:law-enforcement coordination;STR2:pursuit and evasion;QLT2:detection weaknesses'],
[765,'CMP2:hacking cases and network access;INS2:legal and media framing of computer crime;STR2:pursuit and evasion;HEU1:competing participant accounts'],
[766,'CMP3:intrusion and tracing;HTC2:network infrastructure;INS2:investigation and legal response;STR2:attacker-defender interaction;QLT2:security weaknesses'],
[767,'CMP4:network intrusion and forensic tracing;HTC2:distributed communications infrastructure;INS3:coordination across agencies and organizations;STR3:adaptive pursuit and deception;QLT3:anomaly detection and logging;QNT2:accounting discrepancies as evidence;MIL1:espionage demand'],
[768,'CMP3:pattern-recognition theory as claimed;SCI2:neocortical explanation with serious disputed foundations;HTC2:claimed artificial-intelligence trajectory;SCL2:claims about computation growth;HEU1:analogy between models and minds'],
[771,'CMP3:pattern-based artificial-intelligence theory;SCI1:mind and complexity analogies;QNT2:formal pattern concepts;HEU2:proposed account of cognition'],
[772,'QNT3:infinity and set theory with serious explanatory errors;INS1:historical mathematical debates'],
[779,'POL3:formation and expansion of the United States;INS2:state institutions;TRD1:colonial trade interests;MIL2:war and territorial change;ECO1:economic setting'],
[780,'ENG2:polar ships and material limits;LOG3:provisioning and polar expedition constraints;INS2:naval organization;STR2:exploration choices under uncertainty;SCI1:survey and magnetic observations'],
[792,'HEU3:truthfulness and foreseeable consequences;INS1:trust within social relationships'],
[828,'POL3:imperial expansion and political organization;MIL3:campaign decisions;STR2:power rivalry and strategic constraints;LOG1:campaign supply and geography;INS2:customs and forms of rule'],
[833,'INS1:customs and historical social strata;POL1:interwar political background'],
[834,'INS1:regional communities and inherited customs;POL1:interwar borders and political setting'],
[835,'INS1:local social and religious institutions;POL1:historical setting of Balkan travel']
];
for(const [i,line] of rows){
 const a=byIndex.get(i);
 for(const clause of line.split(';')){
  const [,code,value,rationale]=clause.match(/^([A-Z]+)([1-4]):(.+)$/)||[];assert(code);
  a.enrichment.domains[code]={value:+value,confidence:a.confidence==='low'?'low':'moderate',rationale,
   refs:a.evidence.filter(s=>!s.includes('amazon')).slice(0,5)};
 }
}
function mechanism(i,id,statement,scope,roles,strength=2){
 const a=byIndex.get(i),domains=Object.keys(roles);assert(domains.every(d=>a.enrichment.domains[d]?.value>0));
 a.enrichment.connections.mechanisms=a.enrichment.connections.mechanisms.filter(m=>m.id!==id);
 a.enrichment.connections.mechanisms.push({id,statement,scope,domains,roles,strength,confidence:'moderate',refs:a.evidence.filter(s=>!s.includes('amazon')).slice(0,5)});
}
mechanism(633,'media-incentive-filter','Ownership, revenue dependence and access to official sources can shape which stories reach audiences without requiring a direct command to each journalist.','The proposed propaganda model; selection and counterexamples remain part of the assessment',{ECO:'revenue incentives',INS:'newsroom and source routines',POL:'agenda effects',STR:'selection of persuasive information'},3);
mechanism(693,'energy-conversion-scale','Conversion efficiencies and physical energy requirements constrain production and transport; increasing output therefore depends on resource flows and technology as well as monetary demand.','Comparative energy accounting across natural and industrial systems',{SCI:'physical constraints',ENE:'conversion and flows',QNT:'comparative accounting',MAT:'resource inputs',PRD:'output requirements',ENG:'conversion devices',LOG:'transport demand',ECO:'output and cost',SCL:'scale dependence'},3);
mechanism(760,'electrical-loss-industry','Quantifying magnetic loss makes electrical-machine behavior more predictable, linking theoretical representations to design choices and industrial power use.','Steinmetz’s electrical research and its industrial setting',{SCI:'loss mechanisms',QNT:'mathematical representation',ENG:'machine design',ENE:'power conversion',INN:'research translation',PRD:'manufacture'},3);
mechanism(763,'trust-intrusion','Access depends on both technical controls and people; manipulating trusted staff can defeat a protection scheme that appears sound when judged only as software.','Mitnick’s participant account, subject to self-report limits',{CMP:'access controls',INS:'staff authority and routines',HEU:'manipulation of trust',QLT:'failure modes',STR:'adversarial adaptation'},2);
mechanism(767,'small-anomaly-investigation','A small accounting anomaly motivates logging and tracing; useful technical evidence becomes an effective response only when separate organizations coordinate.','Stoll’s investigation of network intrusion',{QNT:'accounting discrepancy',CMP:'network tracing',QLT:'logging and anomaly detection',INS:'cross-agency coordination',STR:'adaptive pursuit',HTC:'communications path'},3);
for(const a of results){
 a.evidence=[...new Set(a.evidence.map(s=>s.replace(/#index-\d+$/,'')))];
 if(!a.raw)continue;
 a.amazon.attempts=a.amazon.attempts.map(s=>s.split('#')[0]);
 a.enrichment.research.unknownDomains='SCI QNT CMP HTC ENG ENE MAT PRD QLT LOG TRD SCL INN INS ECO FIN POL MIL STR HEU'.split(' ').filter(d=>!a.enrichment.domains[d]);
}
fs.writeFileSync(dir+'hn-tail-assessments.json',JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify({assessments:results.length,scored:results.filter(a=>a.raw).length,editions:results.filter(a=>a.enrichment?.edition).length,domains:results.reduce((n,a)=>n+Object.keys(a.enrichment?.domains||{}).length,0)}));
