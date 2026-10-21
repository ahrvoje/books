import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/sources_261020/primary/',read=f=>JSON.parse(fs.readFileSync(f,'utf8'));
const packet=read('data/sources_261020/hn/transfer-root-memoirs.json'),byIndex=new Map(packet.map(b=>[b.packetIndex,b])),research=[];
for(const file of fs.readdirSync(dir).filter(f=>/^memoir-research-\d+\.json$/.test(f))){
 const d=read(dir+file);d.books.forEach((b,j)=>{
  for(const raw of String(d.results[j].value||'').split(/-{10,}/)){
   const text=raw.trim(),url=text.match(/^[^\n]{0,650} \((https?:\/\/[^\n]+)\)\n/)?.[1];
   if(url)research.push({i:b.index,url,text,file:dir+file});
  }
 });
}
const results=[],resultIndex=new Map();
function add(i,year,raw,notes,reason,extra={}){
 const b=byIndex.get(i),a={id:b.id,title:b.title,author:b.author,status:'recommended',confidence:'moderate',
  eligibility:'A narrative or reflective nonfiction work for general readers. Its principal structure is not a technical course, manual or specialist reference. Fictional imagery within a memoir is not by itself a fiction classification.',
  reason,raw,notes:notes.split('|'),year,yearConfidence:'high',yearNote:'Original book publication is established in the saved publisher or catalog records; later edition dates do not reset P14.',
  T11:-10,T12:0,themeNote:'T11=-10 for the predominant celebrity, American social, racial or illness narrative described in this assessment. T12=0: the main purpose is personal or cultural narrative rather than a listed power, finance, war or philosophical argument.',
  periodEnd:null,periodConfidence:'moderate',periodNote:'Contemporary memoir or cross-period reflective account, without a single closed historical episode as its organizing subject. Publication year is not used as a topic endpoint.',
  evidence:[...new Set([...research.filter(r=>r.i===i).map(r=>r.file),...b.appearances.map(a=>a.sourcePage)])],
  amazon:{count:null,status:'Individual title-and-author Amazon.de index lookup returned no verified matching product aggregate. O15=0 unknown-count fallback; unrelated podcasts, products and review counts are rejected.',attemptedAt:'2026-10-20',attempts:[dir+'memoir-amazon.json']},
  reader:'Unavailable; no matching reader aggregate verified.',
  purchaseUrl:'https://www.amazon.de/s?k='+encodeURIComponent(b.title+' '+b.author+' paperback'),purchaseFormat:'Search locator; product and format not verified.',
  enrichment:{domains:{},connections:{status:'partial',mechanisms:[],joins:[],limitations:'Selected contents and source accounts were reviewed, not a complete mechanism inventory.'},research:{reviewed:'2026-10-20',unknownReason:'Absent domain grades remain unknown. General memoir evidence rarely supports technical domain depth.'}},...extra};
 assert(a.notes.length===10&&raw.length===10,i+' ten criteria');results.push(a);resultIndex.set(i,a);return a;
}
function veto(){return {status:'vetoed',veto:'V3',vetoConfidence:'moderate'};}
add(277,2023,[15,11,7,7,7,7,1,4,3,1.5],
 'Interviews and production history support specific cases, not a controlled social-effect estimate|Censorship production incentives and social norms interact|Institutional representation provides limited general lessons|Gatekeeping and negotiated changes explain outcomes|Selected sitcom histories have moderate explanatory density|Media-institution history outlasts current debates|Television representation has little direct technical fit|Sustained reporting on the topic supports authority|Case sequence is accessible|Celebratory framing needs separation from causal proof',
 'Retain as media history. The reviewed scope explains institutional gatekeeping, not only performer lives. A favorable view of representation does not itself establish ideological capture or make a historical account an activism manifesto.',
 {title:'Hi Honey, I’m Homo!',T12:-10,themeNote:'T11=-10: American minority and television history predominate. T12=-10 separately: media is the central domain.',periodEnd:2020,periodConfidence:'moderate',periodNote:'The main sitcom sequence ends with Modern Family, which ended in 2020; later commentary does not turn the historical series into a timeless argument.'});
add(278,2023,[15,9,7,7,8,8,1,4,3,1.5],
 'Reporting and interviews support the theft chronology; motive rests partly on the offender|Security routines collecting and institutional response connect|Complacency and repeat exploitation offer modest transferable lessons|Explains opportunities and concealment more than a general crime theory|A focused case keeps length justified|Institutional vulnerabilities remain useful|Art collecting has weak direct domain fit|Experienced narrative reporter with case access|Clear escalation and consequences|Dramatic characterization exceeds certainty about motives',
 'Retain at low priority. Repeated exploitation of museum routines provides some transferable institutional payload despite the strong personal-crime focus. No serious factual or ideological veto is established.',
 {T11:0,themeNote:'T11=0: a cross-border art-theft case, not a listed national, racial, environmental or celebrity theme. T12=0: theft and obsession rather than a central listed domain.',periodEnd:2001,periodConfidence:'high',periodNote:'The main theft sequence ends with the 2001 arrest. Subsequent legal and personal aftermath is secondary.'});
add(279,2023,[12,6,3,4,6,5,0,3,2.5,1],
 'First-person testimony is relevant but partly uncorroborated|Abusive institutions celebrity and commercial image appear|General lessons remain secondary to personal experience|Institutional harm is narrated more than causally tested|Personal and celebrity detail dominates|Some testimony endures but celebrity context carries much value|No substantial technical domain fit|Direct witness to her own experience|Readable memoir with a clear personal arc|Retrospective image management limits precision',
 'V3: the reviewed memoir is mainly a personal account of abuse, fame and self-definition. It contains institutional observations, but little sustained general explanation after the individual narrative is removed. This is a moderate-confidence purpose judgment, not a denial of the testimony.',{...veto(),title:'Paris: The Memoir'});
add(280,2022,[13,5,3,4,6,6,0,3,3,1.5],
 'Personal recollection supplies testimony, not independent causal verification|Family entertainment and illness overlap without a systems account|Coping observations are tied to one life|Explores experience more than mechanisms|Memoir detail outweighs general explanation|Personal testimony has lasting but narrow value|No central target domain|Direct participant authority|Childhood-to-adulthood narrative is clear|Self-observation is more exact than broad inference',
 'V3: childhood, celebrity and illness are the organizing content. The reviewed evidence does not establish enough general mechanisms or strategic lessons to pass the payload gate.',veto());
add(281,2021,[13,7,4,4,6,6,1,3,3,1.5],
 'Autobiographical testimony is valuable within its limits|Family religion race and entertainment intersect|Access barriers offer a few lessons but the personal arc dominates|Explains experienced constraints rather than testing causes|Extended personal episodes have limited model density|Life testimony outlasts publicity|Institutional access is a minor fit|First-person artistic experience supports authority|A coherent survival and career narrative|Rhetorical force sometimes exceeds analytical precision',
 'V3: the main payload is an individual survival and performance career. Institutional barriers are present but do not become a sustained reusable account. Identity and politics alone do not trigger V2 or V5.',veto());
add(282,2021,[13,5,3,3,6,5,0,3,2.5,1.5],
 'A participant memoir with limited independent sourcing|Music work family and parenting are juxtaposed|Personal balance observations have little strategic reach|Reflects on choices rather than causal systems|Domestic and career detail is central|Interest partly follows the performer|No substantial target-domain content|Direct experience of the reported life|Thematic reflections remain readable|Conversational prose is clear but not conceptually exact',
 'V3: music career and family reflection predominate. Incidental advice does not make the book a primary instruction manual, but does not establish a strong general intellectual payload either.',veto());
add(283,2023,[13,7,4,4,6,6,1,3,2.5,1.5],
 'Personal testimony requires the usual memory qualifications|Family identity and entertainment institutions connect descriptively|Social constraint lessons are present but limited|Experiential account rather than tested institutional causation|Personal detail carries most of the book|Memoir testimony retains value beyond its release|Little direct technical fit|Participant knowledge of the acting industry|Nonlinear memory structure is vivid but less cumulative|Intimate description is stronger than general analysis',
 'V3: the dominant structure remains an individual life and identity memoir. The reviewed scope does not support enough transferable analysis; this conclusion does not rest on the author’s identity or a political-allegiance assumption.',veto());
add(287,2022,[12,5,3,3,6,5,0,3,2.5,1],
 'A self-report of addiction and fame needs corroboration|Treatment celebrity and personal relations appear without a coherent model|General insight is mostly cautionary|Repeated crises are described more than causally separated|Personal repetition reduces explanatory density|Cautionary testimony has durable but narrow value|No direct target-domain contribution|Direct witness, not addiction research authority|Readable but repetitive personal arc|Retrospective self-explanation can overstate causes',
 'V3: a celebrity addiction memoir whose main value is personal testimony and caution. No transferable model sufficient for this gate was established; the memoir is not a treatment manual.',veto());
add(288,2023,[13,7,4,5,6,6,1,3,3,1.5],
 'First-person account requires separation from independently verified events|Family commercial control media and legal authority connect|Control and dependency have some general relevance|Institutional experience is narrated rather than systematically explained|Private-life detail remains dominant|Testimony may endure beyond current celebrity interest|Limited fit through institutional power|Participant access is strong within her own experience|Clear personal narrative|Memory and advocacy create uncertainty about some causal attributions',
 'V3 at moderate confidence: the life account dominates over general analysis of conservatorship or the entertainment business. Retain those partial merits in the counterfactual score rather than call the entire book unreliable.',veto());
add(292,1968,[15,10,7,7,8,8,1,4,3,2],
 'Close reporting supports local observations; selection is not representative measurement|Media social norms and American institutions connect|Useful scrutiny of narratives and belonging|Shows local incentives and dislocation without a unified causal model|Compact essays carry high observational density|The essays outlast their immediate events|Cultural criticism has weak direct fit|Established reporting and literary control|Individual essays are strong though the collection is not one argument|Exact observation and disciplined prose',
 'Retain. The essays offer more than local detail through their scrutiny of social narratives, conformity and institutional behavior. Low domain fit and the American theme reduce the score rather than create an exclusion.',
 {T12:-10,themeNote:'T11=-10: American cultural and social history predominate. T12=-10: media and social-political criticism are central.',periodEnd:1967,periodConfidence:'moderate',periodNote:'The collected reporting concerns the 1960s through the 1967 title essay; publication in 1968 is separate.'});
add(310,2001,[16,12,8,8,7,8,3,5,3,1.5],
 'Field experience and scientific observation support the account; anecdotes are not experiments|Physiology primate social hierarchy and field institutions interact|Observation and social-context lessons have moderate reach|Explains stress and social behavior amid travel episodes|Travel and character passages reduce scientific density|Field-research constraints remain durable|Scientific organization and biology fit partially, not the main technical profile|Direct research authority in stress physiology|Scientific and personal strands are readable|Anthropomorphic narration needs qualification',
 'Retain under both its field-science payload and the science-memoir exception. It is a narrative of research, not primatology training. Disease and environmental incidents do not dominate the whole account.',
 {T11:0,themeNote:'T11=0: a scientific field memoir, with disease and environmental incidents secondary. T12=0: social hierarchy is part of biological observation, not a central political doctrine.',periodEnd:1999,periodConfidence:'low',periodNote:'Approximate end of the reported twenty-one-year field span begun in 1978. This is an assessed span, not the 2001 publication year; exact closing episode remains uncertain.'});
add(317,1958,[10,6,5,4,7,7,1,2,2.5,1],
 'Anonymous firsthand experience is difficult to independently verify|Perception social interaction and recovery are linked descriptively|The difference between experienced reality and external evidence transfers cautiously|Retrospective explanations of recovery are not established causal mechanisms|A short account concentrates on the experience|Historical testimony remains useful but is not current clinical science|Little direct fit beyond epistemic limits|Experiential rather than specialist clinical authority|Unusual first-person sequence is accessible|Theoretical claims need stronger qualification than testimony',
 'Retain with low confidence as experiential nonfiction. Described hallucinations are not presented as verified external beings. The account can illuminate limits of introspection; its proposed recovery explanation is not accepted as established science.',
 {confidence:'low',periodEnd:1955,periodNote:'Circa 1955 is a declared midpoint estimate within the 1950s, the decade stated by the reissue publisher for the six-month episode. The exact year is unknown. This is an approximate historical assessment, not the 1958 publication date or a non-period fallback.',periodConfidence:'low'});
add(351,1967,[15,10,8,7,8,8,2,4,3,2],
 'Direct observation and photographs support the portrait; generalizations exceed one case|Medical work community and social recognition interact|Professional judgment and listening have transferable value|Explains relational constraints rather than clinical procedures|Short concentrated observational work|Professional responsibility remains durable|Institutions and judgment fit only partly|Close observational and photographic access|A cumulative portrait with philosophical reflection|Precise language supports distinctions',
 'Retain. The doctor’s work is used to examine professional responsibility and recognition of people within institutions. It is neither a medical manual nor merely a sequence of biographical facts.',
 {author:'John Berger; Jean Mohr',T12:-10,themeNote:'T11=-10: illness and medical encounters organize the account. T12=-10: the central argument concerns the philosophy of professional care.',periodEnd:1966,periodConfidence:'high',periodNote:'The central observation of the country doctor took place in 1966; later introductions do not reset it.'});
add(354,1984,[12,6,3,3,6,7,0,3,2.5,2],
 'Reflective propositions are interpretive rather than evidential claims|Art memory place and love are associated, not integrated causally|Few operationally transferable models|Meditation replaces mechanism|Compressed prose and poetry are dense aesthetically, less so analytically|Literary reflection can endure|Minimal direct target-domain fit|Established art criticism, not authority on a general theory|Fragmented forms weaken cumulative explanation|Controlled lyrical prose',
 'V3: the hybrid essays, letters and poems principally provide literary meditation. The main structure is reflective nonfiction rather than a fictional narrative, but little reusable explanation survives removal of the personal and aesthetic detail.',
 {...veto(),T11:0,T12:-10,themeNote:'T11=0: no listed unwanted historical or social theme predominates. T12=-10: philosophical and aesthetic reflection is central.'});
add(367,2012,[12,6,4,4,6,6,0,3,3,1.5],
 'Participant race testimony is stronger than general nutrition claims|Training food and personal motivation are related|Lessons are mainly sport-specific persistence|Individual success cannot isolate causal effects of diet or practice|Race episodes dominate general explanation|The life story endures more than performance prescriptions|Sports is outside the desired domains|Elite running experience is not nutrition research authority|Chronological races provide a clear structure|Inspirational rhetoric limits inference precision',
 'V3: the contents are mainly a chronological athletic memoir with recipes and incidental advice. Therefore H2 does not apply, but general encouragement and sport-specific observations do not supply the required transferable payload.',
 {...veto(),author:'Scott Jurek; Steve Friedman',T11:0,themeNote:'T11=0: sports is a stated preference mismatch but is not itself a T11 category; the races are international. T12=0: no listed central-domain penalty.',periodEnd:2010,periodConfidence:'high',periodNote:'The author’s contents end with the 2010 World 24-Hour Championships.'});
add(368,2021,[12,5,3,3,6,5,0,3,2.5,1.5],
 'Memoir essays include obvious imagined comic scenes, not factual proof|Dance career family and identity are juxtaposed|Little general model beyond personal experience|Anecdote and humor dominate explanation|Some essays are concentrated, but intellectual density is low for this profile|Value relies partly on performer interest|No substantial target-domain fit|Participant authority in ballet|An essay collection rather than a cumulative argument|Comic exaggeration is explicit but analytically imprecise',
 'V3: memoir and comic fantasy serve an entertainment-career account. The main work is presented as autobiographical essays, so incidental imagined scenes do not make the whole book fiction. No substantial reusable mechanism was established.',veto());
add(369,1996,[14,8,4,5,7,7,1,3,3,2],
 'Family interviews and remembered experience support testimony|Family religion race and social belonging connect descriptively|Identity and resilience insights remain largely personal|Explains family choices more than social mechanisms|A focused dual memoir earns much of its length|Family testimony has durable literary value|Little direct strategic or technical fit|Direct family access, limited wider analytical authority|Alternating mother-son narratives are coherent|Controlled narrative voice',
 'V3 at moderate confidence: a family and racial-identity memoir, with literary and testimonial value but limited reusable explanation under the stated payload gate. It is not vetoed merely for depicting race or religion.',veto());
add(375,2023,[16,9,5,5,6,7,1,4,3,1.5],
 'Interviews archives and music reporting support the biography|Urban artistic networks business and personal life connect|Some creative-network lessons, but the musician remains central|Career development receives more explanation than general industrial mechanisms|Long life detail dilutes transferable content|Musical history has durable but narrow value|Creative industry fits only at the margin|Experienced music journalist with documentary access|A coherent career and city narrative|Biographical interpretation has uncertainty',
 'V3: the life, works and artistic milieu of a musician remain the main payload. The science and high-tech biography exception does not apply; substantial research quality does not by itself remove this gate.',
 {...veto(),periodEnd:2013,periodConfidence:'high',periodNote:'The biographical subject died in 2013; later reception is secondary.'});
add(389,2023,[14,11,8,7,8,7,2,3,3,1.5],
 'Insider observation supports cases but cannot represent all wealthy groups|Schooling family wealth access and social exclusion interact|Gatekeeping and inherited advantage have transferable institutional relevance|Shows how routine selection reproduces access|Short focused social memoir|Reproduction of privilege is durable beyond current personalities|Institutional power is a partial fit|Insider access and reporting experience, limited systematic sample|Focused return to childhood institutions|Moral judgment is stronger than causal identification',
 'Retain with moderate confidence. Insider examples expose mechanisms of access and social reproduction; this provides payload beyond the narrator. Critical tone and quoted calls for change do not alone make the main work an activism manifesto.',
 {T12:-10,themeNote:'T11=-10: American elite social and urban life dominate. T12=-10: wealth and institutional power are central.'});
const excluded=byIndex.get(371);
results.push({id:excluded.id,title:excluded.title,author:excluded.author,status:'excluded',exclusion:'H2',confidence:'high',
 eligibility:'The six-part structure trains the reader to change creative behavior through courage, permission, persistence and trust. The author’s own activity guide confirms its practical self-help purpose.',
 reason:'Hard-exclude before considering supernatural claims or other vetoes. Anecdotes and reflective essays support personal creative instruction rather than a sustained explanatory account.',
 evidence:[dir+'memoir-research-01.json',dir+'memoir-research-02.json','https://elizabethgilbert.com/wp-content/uploads/2015/09/Printable-Big-Magic-Guide-Final.pdf',...excluded.appearances.map(a=>a.sourcePage)]});
function edition(i,pages,year,id,token,format='Format not specified in catalog'){
 const a=resultIndex.get(i),r=research.find(r=>r.i===i&&(r.url.includes(token)||r.text.includes(token)));assert(r,i+' edition '+token);
 a.evidence.push(r.url);a.enrichment.edition={pages,year,id,url:r.url,retrieved:'2026-10-20',language:'English',format,confidence:'moderate',notes:'One identified edition; format and total extent are not averaged across editions.'};
 if(id.startsWith('ISBN:')){
  let isbn=id.slice(5),asin=isbn;
  if(isbn.length===13&&isbn.startsWith('978')){const s=isbn.slice(3,12),v=(11-[...s].reduce((n,c,j)=>n+Number(c)*(10-j),0)%11)%11;asin=s+(v===10?'X':v);}
  if(asin.length===10){a.purchaseUrl='https://www.amazon.de/dp/'+asin;a.purchaseFormat=format+'; ISBN-based locator, availability and Amazon format binding unverified.';}
 }
}
edition(277,288,2023,'ISBN:9781637743010','9781637743010','paperback');
edition(278,240,2024,'ISBN:9781984898456','the-art-thief-by-michael-finkel','paperback');
edition(279,336,2023,'ISBN:9780008524463','o7hfzwEACAAJ');
edition(280,320,2023,'ISBN:9780593082775','mean-baby-by-selma-blair','paperback');
edition(281,288,2021,'ISBN:9781683359548','i8QdEAAAQBAJ');
edition(282,336,2021,'ISBN:9781529363784','OL33902382M');
edition(283,288,2023,'ISBN:9781250878359','us.macmillan.com/books/9781250878359','hardcover');
edition(287,272,2022,'ISBN:9781250879547','qeKEzwEACAAJ');
edition(288,288,2023,'ISBN:9781668009048','15p5zwEACAAJ','hardcover');
edition(292,236,1981,'GoogleBooks:1fzpAAAAMAAJ','1fzpAAAAMAAJ');
edition(310,304,2001,'ISBN:9780743202473','vZjuAAAAMAAJ');
edition(317,157,1958,'GoogleBooks:nVQx0gEACAAJ','nVQx0gEACAAJ');
edition(351,168,1981,'ISBN:9780394739991','zN45AQAAIAAJ');
edition(354,120,2026,'ISBN:9798896230571','and-our-faces-my-heart-brief-as-photos','paperback');
edition(367,273,2012,'GoogleBooks:WDwS3NAS26gC','WDwS3NAS26gC');
edition(368,256,2021,'ISBN:9780593297841','center-center-by-james-whiteside','ebook');
edition(369,336,2006,'ISBN:9781594481925','the-color-of-water-by-james-mcbride','paperback');
edition(375,560,2023,'ISBN:9780241971642','XnagEAAAQBAJ');
edition(389,240,2023,'ISBN:9780593316795','quiet-street-by-nick-mcdonell','ebook');
const domains=[
[277,'INS3:network censorship and production decisions;POL2:representation and social change;ECO1:commercial broadcasting incentives'],
[278,'INS2:museum security routines;QLT2:repeated weaknesses in protection;HEU2:rationalization and offender self-explanation;STR1:opportunistic adaptation'],
[279,'INS1:institutional confinement and entertainment careers;HEU1:self-presentation and retrospective interpretation'],
[280,'HEU1:personal observation of memory and coping'],
[281,'INS1:barriers within entertainment work'],
[282,'HEU1:personal work-family choices'],
[283,'INS1:acting-industry expectations and family constraints'],
[287,'HEU1:limits of personal control as experienced'],
[288,'INS2:legal and commercial control of an entertainment career'],
[292,'INS2:social conformity and cultural institutions;POL2:American social-political narratives;HEU3:attention to contradictions between stories and observation'],
[310,'SCI3:stress physiology and primate behavior;INS2:field-research practice;HEU2:observation and interpretation;LOG1:constraints of remote research'],
[317,'HEU2:experienced certainty versus external evidence;SCI1:unverified retrospective clinical interpretation'],
[351,'INS3:doctor-community relationship;HEU3:attention listening and professional judgment;SCI1:clinical work as observed rather than taught'],
[354,'HEU1:reflection on memory time and belonging'],
[367,'HEU1:persistence and personal experience'],
[368,'INS1:performance-career setting'],
[369,'INS1:family and religious institutions;HEU1:retrospective identity interpretation'],
[375,'INS2:artistic networks and music business;INN1:creative experimentation'],
[389,'INS3:elite education and access;ECO2:intergenerational advantage;POL2:class power;HEU1:recognition of inherited assumptions']
];
for(const [i,line] of domains){const a=resultIndex.get(i);for(const clause of line.split(';')){
 const [,code,value,rationale]=clause.match(/^([A-Z]+)([1-4]):(.+)$/);
 a.enrichment.domains[code]={value:+value,confidence:'moderate',rationale,refs:a.evidence.slice(0,4)};
}}
for(const a of results){a.evidence=[...new Set(a.evidence)];if(a.raw)a.enrichment.research.unknownDomains='SCI QNT CMP HTC ENG ENE MAT PRD QLT LOG TRD SCL INN INS ECO FIN POL MIL STR HEU'.split(' ').filter(d=>!a.enrichment.domains[d]);}
fs.writeFileSync(dir+'hn-memoir-assessments.json',JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify({decisions:results.length,scored:results.filter(a=>a.raw).length,editions:results.filter(a=>a.enrichment?.edition).length}));
