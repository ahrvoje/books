import {save,scored,domain,edition} from './reddit-save.mjs';
const love='https://s3.amazonaws.com/files.commons.gc.cuny.edu/wp-content/blogs.dir/43483/files/2025/07/hooks-all-about-love-preface-and-intro.pdf';
const land='https://www.penguinrandomhouse.com/books/647961/the-cost-of-free-land-by-rebecca-clarren/9780593655078/';
const family='https://www.hachettebookgroup.com/titles/susan-golombok/we-are-family/9781541758643/?lens=publicaffairs';
const rage='https://www.simonandschuster.com/books/Rage-Becomes-Her/Soraya-Chemaly/9781501189562';
const money='https://penguinrandomhouselibrary.com/book/?isbn=9780593716625';
const wmd='https://penguinrandomhousesecondaryeducation.com/book/?isbn=9780553418835';
save([
scored(0,{status:'vetoed',veto:'V5',vetoConfidence:'moderate',
 eligibility:'Thirteen linked cultural and ethical essays, with personal recollection, form an argument rather than a procedural course. H1 and H2 pass.',
 reason:'V5 applies to its central spiritual and feminist program for remaking intimate and national life. The preface and introduction frame redemption through love as the governing answer. This is a purpose finding, not a claim that every observation is false.',
 raw:[11,6,6,4,7,8,1,4,3,2],
 notes:['Personal testimony is clear; universal claims about love exceed the displayed evidence.','Links family conditioning, cultural norms and public life, with little material-system analysis.','Treating care as conduct can transfer to relationships, less to technical strategy.','Socialization is an explanatory theme, but causal alternatives remain thin.','The compact thematic essays earn some space; exhortation reduces density.','The ethical subject is durable despite periodic renewed popularity.','Institutional and strategic domains are marginal.','An established cultural critic has relevant interpretive standing, not clinical validation.','Recurring concepts give the essays a clear architecture.','The prose is controlled; broad absolutes reduce conceptual precision.'],
 year:1999,yearConfidence:'moderate',yearNote:'The first hardcover release is recorded as December 22, 1999; library records also use its 2000 imprint/copyright year. Use the earlier actual release, not the 2001 paperback or later reissues.',
 T11:-10,T12:-10,themeNote:'T11: the explicit national cultural diagnosis is predominantly American. T12: ethical philosophy and social power are central.',
 periodEnd:null,periodNote:'A general ethical argument; childhood episodes do not define a single central historical period.',
 evidence:[love,'https://www.goodreads.com/book/show/218042.All_About_Love','https://openlibrary.org/books/OL9240421M/All_About_Love','https://www.amazon.com/dp/0060959479'],
 edition:edition(272,'9780060959470','https://www.amazon.com/dp/0060959479','Paperback',2001),
 domains:{HEU:domain(2,'Recurring reflection on motives and the difference between stated affection and conduct.',[love]),INS:domain(1,'Family and cultural norms are discussed as learned structures, without a developed institutional model.',[love])}
}),
scored(1,{
 eligibility:'Investigative family and social history follows land, legal records and descendants. Narrative inquiry predominates over instructions or specialist reference.',
 reason:'Passes the veto gates at moderate confidence. Dispossession and restitution are morally framed, but the principal work reconstructs transfers of property and their continuing consequences; an activist manifesto is not established as the dominant form.',
 raw:[16,11,8,8,8,8,3,4,3,2],
 notes:['Reporting and family records support the chain of ownership; the complete source apparatus was not audited.','Connects migration, law, land allocation and inherited wealth.','Makes inherited advantage and hidden asset transfers portable questions.','Explains how legal allocation creates cumulative family resources.','The family narrative supports the inquiry, though local detail limits density for this reader.','Property transmission and historical accounting remain durable.','Institutional allocation fits partly; industrial and technical systems are peripheral.','Clarren brings sustained reporting experience on the American West.','Parallel family histories provide a coherent route through the issue.','Distinguishes individual experience from inheritance with readable, deliberate prose.'],
 year:2023,yearConfidence:'high',yearNote:'Publisher identifies the first hardcover publication in October 2023.',
 T11:-10,T12:-10,themeNote:'T11: American Indigenous dispossession and racial history predominate. T12: legal and political control over land and inherited power is central.',
 periodEnd:null,periodNote:'Connects settlement history to living descendants and present restitution questions; no single closed historical period defines the book.',
 evidence:[land,'https://www.penguinrandomhouse.com/books/647961/the-cost-of-free-land-by-rebecca-clarren/readers-guide/'],
 edition:edition(352,'9780593655078',land,'Hardcover',2023),
 domains:{INS:domain(3,'Treaties and homestead rules govern the transfer of land.',[land]),ECO:domain(3,'Contrasts dispossession with accumulated settler family wealth.',[land]),POL:domain(3,'State policy and authority structure the allocation.',[land])},
 mechanisms:[{id:'land-transfer',domains:['INS','POL','ECO'],roles:{INS:'Property and treaty rules determine entitlement.',POL:'Government enforces removal and settlement.',ECO:'Land becomes an inherited resource and source of wealth.'},statement:'State-backed changes in property rights transfer productive assets and compound unequal family resources across generations.',scope:'The Sinykin homestead and Lakota dispossession examined in the book.',strength:3,confidence:'moderate',refs:[land]}]
}),
scored(2,{
 eligibility:'A research-based narrative about changing family forms for general readers; not a parenting procedure manual or research-method textbook.',
 reason:'Passes the veto gates. Advocacy for recognition follows reported family research and does not alone establish ideological capture. Limited relevance is reflected in the score.',
 raw:[16,8,7,6,8,8,2,5,3,2],
 notes:['Decades of relevant research are stronger than anecdote alone; sample selection and causal controls remain unverified here.','Brings reproductive technology, family relations and law together.','Distinguishing relationship quality from formal family structure is a reusable inference check.','Explores pathways through secrecy, disclosure and social treatment; exact causal estimates are not established.','Cases illustrate a common research question without a technical apparatus.','Family formation and social treatment outlast the current controversy.','Scientific and institutional interfaces are present but remote from the main desired domains.','Golombok has direct academic expertise in family research.','Research questions and family stories provide accessible structure.','Clear distinctions between biological relationship and caregiving help precision.'],
 year:2020,yearConfidence:'high',yearNote:'Publisher records the 2020 first publication; UK and US subtitles differ, not the underlying work.',
 T11:-10,T12:0,themeNote:'T11: minority and nontraditional family recognition is a predominant concern. T12: family development is central; political authority is secondary.',
 periodEnd:null,periodNote:'A contemporary, cross-case research synthesis; the history of research does not supply a bounded central endpoint.',
 evidence:[family],edition:edition(320,'9781541758643',family,'Hardcover',2020),
 domains:{SCI:domain(3,'Sustained synthesis of developmental and family research.',[family]),INS:domain(2,'Legal recognition and family status shape the cases.',[family]),HTC:domain(1,'IVF and donor reproduction enable some studied family forms; technology is contextual.',[family])}
}),
scored(3,{status:'vetoed',veto:'V5',vetoConfidence:'high',
 eligibility:'A sustained cultural argument, with studies and personal cases; it is not primarily a workbook or narrow technical method.',
 reason:'The stated governing purpose is to mobilize women’s anger as an instrument for social change. This is civil and political activism at the center of the work, so V5 applies independently of its empirical merits.',
 raw:[14,8,7,6,7,7,2,4,3,2],
 notes:['Cites research and social cases; wide generalizations need more qualification than the opening gives.','Connects emotional norms, work and public authority, with limited technological integration.','Awareness of penalties for emotional expression can inform negotiation.','Norm enforcement supplies a mechanism, though competing causes receive less attention.','The substantial length contains many parallel examples and some repetition.','Gendered sanctions are durable; contemporary political framing is less so.','Power and institutional behavior are relevant auxiliary domains.','Chemaly has relevant reporting and advocacy experience; neither substitutes for independent causal validation.','Personal scenes lead clearly into a common argument.','Forceful language is readable but occasionally more categorical than the evidence warrants.'],
 year:2018,yearConfidence:'high',yearNote:'The first publication is 2018; this paperback followed in 2019.',
 T11:-10,T12:-10,themeNote:'T11: gender discrimination and civil activism predominate. T12: power and political mobilization are central.',
 periodEnd:null,periodNote:'Contemporary and general argument, not an account of one closed historical period.',
 evidence:[rage,'https://www.simonandschuster.co.uk/books/Rage-Becomes-Her/Soraya-Chemaly/9781471172113'],
 edition:edition(416,'9781501189562',rage,'Paperback',2019),
 domains:{POL:domain(3,'Public voice and mobilization are central applications of anger.',[rage]),INS:domain(2,'Workplace and cultural sanctions regulate expression.',[rage]),HEU:domain(2,'Examines how readers label and evaluate anger.',[rage])}
}),
scored(4,{
 eligibility:'Linked explanatory essays about status, satisfaction, identity and financial behavior. Advice is present, but the contents do not organize a prescribed budgeting or investment procedure; H2 passes with moderate confidence.',
 reason:'Passes the veto gates. The portable distinction between utility and status provides intellectual content; the evidence is anecdotal and the self-improvement emphasis lowers fit.',
 raw:[14,7,10,7,8,8,3,4,3,2],
 notes:['Examples clarify motives but do not establish universal spending rules.','Connects money, identity and social comparison more than production or institutions.','Status versus utility and financial independence are reusable decision distinctions.','Explains expectation and comparison effects with limited formal testing.','Short focused essays are efficient, though the central thesis recurs.','The behavioral issues should remain useful beyond current products and markets.','Financial decision heuristics overlap with interests, but technical leverage is sparse.','Housel has substantial financial writing experience, not experimental authority.','A sequence of short thematic essays is easy to follow.','Plain language makes distinctions memorable without much technical detail.'],
 year:2025,yearConfidence:'high',yearNote:'Publisher records October 7, 2025 as the original hardcover release.',
 T11:0,T12:-10,themeNote:'T11: no listed negative theme predominates. T12: personal finance is central.',
 periodEnd:null,periodNote:'General behavioral essays rather than a bounded historical account.',
 evidence:[money,'https://harriman.house/books/the-art-of-spending-money/','https://kohaopac.mtpl.org/bib/466142'],
 edition:edition(256,'9780593716625',money,'Hardcover',2025),
 domains:{FIN:domain(3,'Spending, saving and independence organize the essays.',[money]),HEU:domain(3,'Explains social comparison, identity and regret in financial decisions.',['https://kohaopac.mtpl.org/bib/466142'])},
 mechanisms:[{id:'status-spending',domains:['FIN','HEU'],roles:{FIN:'Purchases and savings allocate resources.',HEU:'Social comparison and expectations determine perceived reward.'},statement:'Spending intended to impress others can raise the comparison target without durable satisfaction; retained savings can instead preserve future choice.',scope:'The book’s behavioral account of personal spending.',strength:2,confidence:'moderate',refs:['https://harriman.house/books/the-art-of-spending-money/']}]
}),
scored(5,{
 eligibility:'A public explanatory investigation of algorithmic decisions across sectors. It does not train readers to implement models and is not a textbook despite classroom adoption.',
 reason:'Passes the veto gates with moderate confidence. Reform proposals accompany a substantial mechanism-based account of model opacity and feedback. The inspected material does not establish serious factual failure or an activist purpose that replaces explanation.',
 raw:[16,13,12,10,8,8,6,5,3,2],
 notes:['Specific institutional cases ground the critique; the selection favors failures and is not a balanced prevalence estimate.','Connects computation, statistical models, credit, work and institutional authority.','Proxy choice, contestability and feedback are useful checks in many model deployments.','Shows how model outputs reshape opportunities and then feed later classifications.','Compact cases give a high mechanism-to-length ratio.','Model incentives and feedback endure even as particular algorithms change.','Computing, quantification and institutional risk closely fit the requested domains.','O’Neil combines mathematical training with quantitative-finance and data-science practice.','A common framework connects otherwise separate sector cases.','Definitions are accessible, though the weapons metaphor can flatten differences among models.'],
 year:2016,yearConfidence:'high',yearNote:'First published in 2016; the cited paperback is the 2017 edition.',
 T11:-10,T12:0,themeNote:'T11: predominantly American institutional inequality and civil outcomes. T12: computational models are central; finance and political power are applications.',
 periodEnd:null,periodNote:'A general diagnosis of contemporary modeling systems; historical cases do not define a closed period.',
 evidence:[wmd],
 edition:edition(288,'9780553418835',wmd,'Paperback',2017),
 domains:{QNT:domain(3,'Predictive scoring, proxies and model evaluation recur throughout.',[wmd]),CMP:domain(3,'Automated decision systems are the central subject.',[wmd]),INS:domain(3,'Schools, employers, insurers and justice systems operationalize models.',[wmd]),FIN:domain(2,'Credit and lending supply consequential applications.',[wmd]),SCL:domain(2,'Automation spreads model decisions over large populations.',[wmd])},
 mechanisms:[{id:'model-exclusion-loop',domains:['QNT','CMP','INS','FIN'],roles:{QNT:'Risk proxies assign scores.',CMP:'Software applies scores repeatedly at scale.',INS:'Opaque decisions are difficult to challenge.',FIN:'Lending access changes the opportunities available to the scored person.'},statement:'A credit model can deny opportunity on a weak proxy, worsening the conditions that later appear to validate its initial risk classification.',scope:'The lending and opportunity feedback described in the publisher’s account of the book.',strength:3,confidence:'moderate',refs:[wmd]}]
})
]);
