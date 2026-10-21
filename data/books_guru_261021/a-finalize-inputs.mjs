import fs from 'node:fs';
const dir='data/books_guru_261021/';
const groups=[1,2,3,4,5].map(n=>({path:dir+'a-scores'+n+'.json',rows:JSON.parse(fs.readFileSync(dir+'a-scores'+n+'.json','utf8'))}));
const rows=groups.flatMap(g=>g.rows);
const get=i=>rows.find(z=>z.i===i);
const add=(i,url)=>{if(!get(i).refs.includes(url))get(i).refs.push(url);};
get(5).v2='The inspected scripture establishes doctrinal authority under V5. A separate finding about asymmetric treatment of empirical counterevidence is not established from these passages.';
get(9).v2='The inspected gospel establishes religious healing authority under V5. No separate political or national allegiance claim is inferred from its religious form.';
get(62).v2='Gospel-based spiritual authority establishes V5; the inspected meditations do not independently establish asymmetric political argument.';
get(68).v4='The television-series setting and extraordinary claims reduce durability. The concrete primary-text defect is recorded under V1; launch publicity alone does not establish V4.';
Object.assign(get(19),{
 yearConfidence:'high',
 yearNote:'The original German publisher sample gives release 25 May 2015 on its opening publication sheet and copyright 2015 on page 4. Greystone\'s 2016 English translation does not reset original age.',
 v1:'The original German preface, page 8, treats tree pain, memory and parent-child living as established knowledge that changes the account of forest life. This social-family interpretation is central, not a decorative analogy. The specific 2023 critiques of mother-tree and fungal-network interpretations identify unsupported inferences about directed nurturing and altruistic sharing. Their criticism does not deny the existence of fungal networks or every form of resource transfer.',
 reason:'V1, moderate: the book builds its central account of forest society on confident claims about family-like care and directed cooperation. Its own preface presents pain, memory and parent-child living as established knowledge; specialist critiques identify key altruistic mother-tree interpretations as unsupported. This finding distinguishes valid fungal networks from the stronger social-purpose claims and does not assert a unanimous scientific judgment.',
 limit:'The primary German publisher sample was inspected, including the preface on page 8 and the root-feeding discussion on page 10. Specific 2023 critiques support the finding; the full ScienceDirect article returned HTTP 403, though its indexed abstract and section headings were accessible. No consensus claim is made.'
});
get(19).notes[0]='The preface makes family-like care part of its central forest account; specific expert critiques challenge the inferred altruistic cooperation, not the mere existence of fungal networks.';
add(19,'https://content.penguinrandomhouse.de/content/edition/excerpts_extended/Leseprobe_978-3-453-28067-0.pdf');
get(21).refs=get(21).refs.filter(x=>x!=='https://books.google.com/books/about/The_Humane_Economy.html');
Object.assign(get(8),{yearConfidence:'high',yearNote:'Penguin UK records publication on 7 April 2005; the US 2006 paperback and later anniversary material do not reset the original year.'});
add(8,'https://www.penguin.co.uk/books/55082/the-end-of-poverty-by-jeffrey-sachs/9780141018669');
Object.assign(get(29),{yearConfidence:'high',yearNote:'The licensed Vermilion description explicitly identifies first publication in 1959, corroborated by the WorldCat first-edition record; later reissues do not reset it.'});
add(29,'https://books.google.com/books/about/The_Magic_of_Thinking_Big.html?id=GDvCCwAAQBAJ');
add(29,'https://search.worldcat.org/title/The-magic-of-thinking-big/oclc/729571');
Object.assign(get(34),{yearConfidence:'high',yearNote:'Macmillan records the original release on 23 April 2019. Its 2021 paperback is a later edition.'});
add(34,'https://us.macmillan.com/books/9781250313577/themomentoflift/');
Object.assign(get(82),{yearConfidence:'high',yearNote:'The author identifies the first version as 1997 in her TeachLab interview. The publisher also identifies 1997 as the original publication; the 2017 twentieth-anniversary edition does not reset it.'});
add(82,'https://teachlabpodcast.simplecast.com/episodes/dr-beverly-daniel-tatum/transcript');
get(82).edition={pages:464,id:'9781541616585',url:get(82).refs[0],format:'Ebook',year:2017};
Object.assign(get(84),{yearConfidence:'high',yearNote:'Simon & Schuster records the original ebook release on 28 January 2020; its 2021 paperback is a later format.'});
add(84,'https://www.simonandschuster.com/books/Why-Were-Polarized/Ezra-Klein/9781476700397');
get(86).eligibility='The 2005 book presents broad leadership dispositions through reflective coaching stories, rather than a specific operating procedure. The official Pyramid excerpts discuss confidence, initiative, skill and cooperation. This is distinct from the later instructional Leadership Game Plan. Eligibility confidence is moderate.';
add(86,'https://coachwooden.com/pyramid-of-success');
const mechanisms=[
 [7,['HEU','INS'],{HEU:'hidden individual incentive',INS:'social coordination and enforcement'},'Unacknowledged status motives shape behavior inside institutions while public explanations stress socially approved aims.','Hidden motives and institutional conduct'],
 [65,['SCI','PRD','INS'],{SCI:'biological capability',PRD:'farm implementation',INS:'acceptance and regulatory constraint'},'Genetic tools and farming practices must work together, while regulation and public acceptance constrain which technically useful combinations reach fields.','Combining plant genetics with organic farming'],
 [66,['ECO','INS'],{ECO:'gains from proximity and exchange',INS:'constraint on housing and access'},'Proximity can improve exchange of ideas, but restrictions on building can limit access to those gains and raise housing costs.','Urban productivity and access'],
 [70,['CMP','SCL','INS'],{CMP:'digital distribution capability',SCL:'audience expansion',INS:'production and funding constraint'},'Online course materials can reach more learners at low delivery cost, but institutional production costs and funding models constrain sustainable expansion.','Early university open-courseware initiatives'],
 [72,['QNT','INS'],{QNT:'noisy performance estimate',INS:'decision and incentive mechanism'},'Using value-added estimates for consequential decisions can convert measurement error and model sensitivity into unstable judgments; limits on use reduce this risk.','Educational evaluation with value-added measures']
];
for(const [i,domains,roles,statement,scope] of mechanisms){const z=get(i);for(const d of domains)if(!z.domains.some(x=>x[0]===d))throw Error('unsupported domain '+i+' '+d);z.mechanisms=[{id:'core',domains,roles,statement,scope,strength:3,confidence:'moderate',refs:z.refs}];}
const replacements={
 'laterPRHedition':'later PRH edition','beyondCOVID':'beyond COVID','afterLIBOR':'after LIBOR','includingNewCoke':'including New Coke','establishesV5':'establishes V5','DeMello':'De Mello','specificGM':'specific GM','ColonelX':'Colonel X','ChapterXI':'Chapter XI','ChapterXII':'Chapter XII','separateV2is':'separate V2 is','theV1causal':'the V1 causal','ofRuskombank':'of Ruskombank','installingHitler':'installing Hitler','andRoosevelt':'and Roosevelt','criticizesNazism':'criticizes Nazism','throughWorldWarII':'through World War II','ofTraditionalism':'of Traditionalism','onBannon':'on Bannon','andCarvalho':'and Carvalho','contemporaryTraditionalist':'contemporary Traditionalist','beyondHollywood':'beyond Hollywood','CentralCAA-building':'Central CAA-building','andDisneytransition':'and Disney transition','andHisscase':'and Hiss case','ofKIPP':'of KIPP','centralKIPPfounding':'central KIPP founding','andRoutledge':'and Routledge','laterMOOC':'later MOOC','laterHayHouse':'later Hay House','secondedition':'second edition','ColdWarClassics':'Cold War Classics','U.S.Steel':'U.S. Steel',"original'76Press":"original '76 Press"
};
function clean(v,key=''){
 if(Array.isArray(v))return v.map(x=>clean(x,key));
 if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,x])=>[k,clean(x,k)]));
 if(typeof v!=='string'||/^https?:/.test(v)||['id','asin','attemptedAt','retrievedAt','retrieved','reviewed'].includes(key))return v;
 for(const [a,b] of Object.entries(replacements))v=v.split(a).join(b);
 v=v.replace(/(\b\d{3}0) s\b/g,'$1s').replace(/2021s econd/g,'2021 second').replace(/ISBN(?=\d)/g,'ISBN ').replace(/([a-z])(?=\d)/g,'$1 ').replace(/(\b\d{3}0)s(?=[A-Za-z])/g,'$1s ').replace(/(\d{4})(?!s\b)(?=[A-Za-z])/g,'$1 ').replace(/(\d)(?=(?!s\b)[A-Za-z])/g,'$1 ').replace(/,(?=[A-Za-z])/g,', ').replace(/(\b\d{1,2}),(?=\d{4}\b)/g,'$1, ').replace(/;(?!\s)/g,'; ');
 return v;
}
for(const g of groups)fs.writeFileSync(g.path,JSON.stringify(clean(g.rows),null,2)+'\n');
const gate=dir+'a-gate-decisions.json';fs.writeFileSync(gate,JSON.stringify(clean(JSON.parse(fs.readFileSync(gate,'utf8'))),null,2)+'\n');
