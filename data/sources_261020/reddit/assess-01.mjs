import {fresh,save,unknownAmazon,enrichment,edition} from './assessment-utils.mjs';
const sierra='https://www.govinfo.gov/app/details/GOVPUB-D301-PURL-LPS47806';
const red='https://secretmigs.com/red-eagles-book';
const stealth='https://books.google.com/books/about/Stealth.html?hl=en&id=xu_GDwAAQBAJ&output=html_text';
const map='https://www.penguinrandomhouse.com/books/317939/the-new-map-by-daniel-yergin/';
const glasses='https://www.bloomsbury.com/us/history-of-the-world-in-6-glasses-9780802715524/';
const sheep='https://www.bloomsbury.com/uk/short-history-of-the-world-according-to-sheep-9781789544213/';
const proto='https://www.bloomsbury.com/us/proto-9781639732593/';
const sirens='https://www.penguinrandomhouse.com/books/719661/the-sirens-call-by-chris-hayes/';
const breakneck='https://www.penguin.co.uk/books/465161/breakneck-by-wang-dan/9781802067798';
const web='https://www.panmacmillan.com/authors/tim-berners-lee/this-is-for-everyone/9781035023677';
const plastic='https://www.penguinrandomhouse.com/books/747797/plastic-inc-by-beth-gardiner/9780593717103/';
save([
fresh(0,{
  eligibility:"An authorized illustrated history of an aircraft-development organization. The inspected assessment describes a historical account with technical chapters, not an operating manual; H2 passes with moderate confidence.",
  reason:"The history links classified aircraft programs, organization and technical tradeoffs. Official access helps factual detail but can favor the institution's own story. No serious veto is established from the limited evidence.",
  raw:[15,13,11,9,7,9,7,4,2,1.5],
  notes:["Authorized access supports detail, but institutional selection limits E15.","Aircraft programs, government demand and organization support S13.","Program tradeoffs offer U11 beyond aviation chronology.","Technical chapters support M9; comparative causal testing is not established.","Illustrations and model detail cost reading space, giving D7.","Development history remains durable, supporting R9.","Aerospace engineering directly fits F7.","Miller's aerospace-historical work supports A4.","Illustrated program history supports N2 rather than a tightly cumulative argument.","Technical specificity supports P1.5; prose was not fully inspected."],
  year:1993,yearNote:"The Huntington library record identifies the 1993 edition, ISBN 9780942548563.",
  T11:0,T12:0,themeNote:"T11=0: the central subject is aircraft development with wider technical use. T12=0: military customers are applications of engineering history.",
  periodEnd:1993,periodNote:"The nominated first-fifty-years history covers 1943–1993; endpoint follows that explicitly identified scope.",
  amazon:unknownAmazon(0,'research-new-amazon.json'),
  evidence:['https://www.huntington.org/collections/lib-753594','https://secure.afa.org/Mitchell/reports/MP9_ATF_0612.pdf'],
  enrichment:enrichment('https://secure.afa.org/Mitchell/reports/MP9_ATF_0612.pdf',[['HTC',3,'Classified aircraft development is the historical subject.'],['ENG',3,'The cited assessment identifies technical development chapters, including F-22.'],['INS',2,'Authorized organization history explains program setting.']],edition(216,'ISBN:9780942548563','https://www.amazon.com/Lockheeds-Skunk-Works-First-Fifty/dp/0942548566','Paperback',1994,'Matching Amazon product title and Jay Miller byline verified. Product details give 216 pages, English, January 1, 1994. The Huntington dates this ISBN to 1993; edition-date conflict remains explicit and original year uses library 1993. Raw snapshot: data/sources_261020/reddit/raw/amazon-n1d652d9db1.html.'))
}),
fresh(2,{
  title:'Sierra Hotel: Flying Air Force Fighters in the Decade After Vietnam',author:'C. R. Anderegg',
  eligibility:"Historical narrative of changes in fighter technology, training and organization. It describes how training changed rather than teaching readers to operate an aircraft.",
  reason:"A firsthand institutional account connects equipment shortcomings, testing and organizational learning. Interview-memory and insider-selection limits remain; useful reform mechanisms prevent V3.",
  raw:[15,13,12,10,8,8,6,4,2.5,1.5],
  notes:["Interviews and official history support E15; memory limits are explicit.","Aircraft, weapons, training and institutions support S13.","Feedback from operational failure supports U12.","Training and testing changes provide M10 causal substance.","A focused postwar decade supports D8.","Organizational learning remains useful, supporting R8.","Testing and aviation systems support F6.","Anderegg's fighter and institutional experience support A4.","The chronological reform narrative supports N2.5.","Practical terminology supports P1.5; full prose quality remains uncertain."],
  year:2001,yearNote:"GovInfo's federal publication record gives Anderegg and date issued 2001.",
  T11:-10,T12:-10,themeNote:"T11=-10: American military institutional experience dominates. T12=-10 independently: military training and doctrine are central.",
  periodEnd:1983,periodNote:"Approximate end of the decade after US withdrawal from Vietnam; later legacy material is ancillary. Low confidence.",
  amazon:unknownAmazon(2,'research-new-amazon.json'),evidence:[sierra,'https://www.govinfo.gov/content/pkg/GOVPUB-D301-PURL-LPS47806/pdf/GOVPUB-D301-PURL-LPS47806.pdf'],
  enrichment:enrichment(sierra,[['MIL',3,'Fighter-force development and training form the central history.'],['QLT',2,'Operational shortcomings motivate better testing and training.'],['ENG',2,'Aircraft and guided-weapon performance constrain the reform.'],['INS',2,'The Air Force changes its training arrangements.']],null,[],'GovInfo identifies the work, but the PDF timed out; the Defense-hosted PDF returned 403. No verified edition extent retained.')
}),
fresh(4,{
  eligibility:"Narrative history of acquiring, maintaining and flying secret Soviet aircraft. Technical descriptions serve the program story, not a pilot-training curriculum.",
  reason:"Maintenance constraints, realistic adversary testing and secrecy create transferable lessons. Firsthand testimony is useful but does not remove retrospective selection.",
  raw:[15,13,12,9,7,8,6,3.5,2.5,1.5],
  notes:["Declassified material and participant interviews support E15.","Foreign aircraft, maintenance, training and secrecy support S13.","Realistic testing against unfamiliar equipment supports U12.","Operational constraints and improvisation support M9.","Program and aircraft detail give D7.","Testing and institutional-learning lessons support R8.","Aerospace and organizational systems support F6.","Davies's sustained aviation reporting supports A3.5.","A program-history structure supports N2.5.","Technical detail supports P1.5; anecdote precision is bounded."],
  year:2008,yearNote:"WorldCat identifies the original Osprey print book in 2008. The selected revised paperback is 2012.",
  T11:-10,T12:-10,themeNote:"T11=-10: the US fighter institution dominates the narrative and influence. T12=-10: combat training is central, despite substantial technical content.",
  periodEnd:1991,periodNote:"Approximate end-of-Cold-War endpoint follows the library summary; it is not a claim that every program operated until 1991.",
  amazon:unknownAmazon(4,'research-new-amazon.json'),evidence:[red,'https://search.worldcat.org/title/1303868890','https://obnb.uk/p15904371-red-eagles-americas-secret-migs','https://books.google.com/books?id=twhhvgAACAAJ'],
  enrichment:enrichment(red,[['MIL',3,'The history centers on adversary-aircraft training.'],['ENG',2,'Acquired aircraft need maintenance and technical adaptation.'],['QLT',2,'Realistic evaluation changes readiness and risk.'],['INS',2,'Secrecy affects organization and daily improvisation.']],edition(400,'ISBN:9781846039706','https://books.google.com/books?id=twhhvgAACAAJ','Paperback',2012,'The revised paperback is explicitly identified. BNB records 400 numbered pages plus 32 pages of plates; 400 is the publisher-reported length, not a sum across editions.'))
}),
fresh(5,{
  eligibility:"An explanatory history of stealth-aircraft invention and competing development programs, not a radar-design or aircraft-operating text.",
  reason:"Radar physics, design geometry and organizational rivalry offer strong mechanisms. The bounded evidence supports a high-fit history, with no serious veto established.",
  raw:[17,15,13,11,8,9,7,4.5,2.5,2],
  notes:["Archival and aerospace-historical synthesis supports E17, with secrecy limits.","Radar, geometry, firms and strategy support S15.","Competing designs and institutional constraints support U13.","Radar cross-section tradeoffs and development decisions support M11.","Focused invention history supports D8.","The technical and institutional mechanisms support R9.","Physics, high technology and engineering directly support F7.","Westwick's aerospace-history research supports A4.5.","The competing-project structure supports N2.5.","Technical distinctions support P2, with low overall inspection confidence."],
  year:2019,yearNote:"The publisher-supplied Google Books record gives December 30, 2019; the copyright/LC description says 2020. Use the earlier recorded release, with this date conflict retained for review.",
  T11:0,T12:0,themeNote:"T11=0: engineering invention is central despite the American setting. T12=0: warfare supplies requirements and applications, while the main account is technology development.",
  periodEnd:1991,periodNote:"Use the first major combat application in 1991 as an approximate end of the central development narrative; later legacy extends beyond it.",
  amazon:unknownAmazon(5,'research-new-amazon.json'),evidence:[stealth,'https://api.pageplace.de/preview/DT0400.9780190677459_A39086803/preview-9780190677459_A39086803.pdf'],
  enrichment:enrichment(stealth,[['SCI',3,'Electromagnetic scattering underlies stealth.'],['ENG',3,'Geometry, flight controls and radar visibility create coupled design constraints.'],['HTC',3,'F-117 and B-2 development is central.'],['INS',2,'Firm rivalry and procurement shape designs.']],null,[],'The Google Books record reports 336 pages, but format-specific edition identification was not established from the accessible Oxford page. Keep extent unknown pending a verified print/digital edition.')
}),
fresh(6,{
  eligibility:"A narrative analysis of energy production, markets and international relations; it does not train specialists in extraction or trading.",
  reason:"Energy supply changes trade and state options. The mechanism is useful; contemporary projections and an industry-centered viewpoint limit durability and inferential confidence.",
  raw:[16,16,13,10,7,7,7,4,3,2],
  notes:["Extensive industry reporting supports E16; forecasting remains uncertain.","Energy, extraction, trade and state power support S16.","Supply dependence and infrastructure constraints support U13.","Shale expansion and trade leverage support M10.","A wide survey includes geopolitical digressions, giving D7.","Durable constraints coexist with dated current forecasts, giving R7.","Energy, industrial systems and geostrategy support F7.","Yergin's energy scholarship and practice support A4.","The regional map structure supports N3.","Clear industry explanation supports P2."],
  year:2020,yearNote:"The publisher records the original ebook on September 15, 2020; selected paperback is 2021.",
  T11:0,T12:0,themeNote:"T11=0: global energy systems dominate; climate is one connected strand. T12=0: political power follows the centrally energy-focused account.",
  periodEnd:null,periodNote:"A contemporary structural survey with historical background, not one central closed historical period.",
  amazon:unknownAmazon(6,'research-other-amazon-a.json'),evidence:[map],
  enrichment:enrichment(map,[['ENE',4,'Energy supply is the organizing subject.'],['ENG',2,'Shale extraction technology changes feasible supply.'],['TRD',3,'Energy flows and trade routes create dependence.'],['POL',3,'Supply changes alter international bargaining.']],edition(544,'ISBN:9780143111153',map,'Paperback',2021),[{id:'shale-supply-power',domains:['ENG','ENE','TRD','POL'],roles:{ENG:'Extraction technology expands recoverable resources.',ENE:'New supply changes the energy balance.',TRD:'Imports and exports adjust.',POL:'Changed dependence alters state options.'},statement:'Extraction innovation changes energy supply, which changes trade dependence and the bargaining options of states.',scope:'The book’s shale revolution and global energy-market account.',strength:3,confidence:'moderate',refs:[map]}])
}),
fresh(12,{
  eligibility:"A public explanatory world history organized around drinks, not a beverage-production manual.",
  reason:"Production, exchange and social coordination provide mechanisms. The six-drink framing can overstate a single explanatory lens, so evidence and causal scores remain bounded.",
  raw:[14,13,10,8,8,8,5,3,3,1.5],
  notes:["A selective commodity lens limits E14.","Production, commerce and institutions support S13.","Exchange and coordination examples support U10.","Specific beverage mechanisms support M8, below a unified causal model.","Compact thematic chapters support D8.","Long historical mechanisms support R8.","Production and trade support F5; culinary history lowers fit.","Standage's historical technology reporting supports A3.","Six linked eras support N3.","A neat framing risks overstatement, giving P1.5."],
  year:2005,yearNote:"The publisher-supplied author bibliography identifies the work as 2005; selected paperback was published May 16, 2006.",
  T11:0,T12:0,themeNote:"T11=0: global cross-period commodity history. T12=0: politics and empire are linked applications, not the organizing subject.",
  periodEnd:null,periodNote:"The narrative ranges from agriculture to contemporary globalization; no single central period.",
  amazon:unknownAmazon(12,'research-other-amazon-a.json'),evidence:[glasses,'https://books.google.com/books/about/A_History_of_the_World_in_6_Glasses.html?id=sSugAwAAQBAJ'],
  enrichment:enrichment(glasses,[['PRD',2,'Beverage production helps organize historical change.'],['TRD',2,'Export and global distribution connect societies.'],['INS',2,'Drinks accompany urban and social institutions.']],edition(336,'ISBN:9780802715524',glasses,'Paperback',2006,'Publisher reports 336 pages. Google Books reports 311 for the same ISBN; retain the publisher extent and flag the metadata disagreement.'))
}),
fresh(13,{
  eligibility:"A narrative popular history of sheep and human societies, not an animal-husbandry guide.",
  reason:"Food, fiber, commerce and conquest provide a modest systems payload. Anecdotal breadth limits depth; poor direct fit alone is not an exclusion.",
  raw:[13,11,8,7,7,8,4,2.5,2.5,1.5],
  notes:["Popular synthesis and anecdotes support E13 with limited specialist checking.","Food, wool, money and expansion support S11.","Resource dependence supplies U8.","Domestication and fiber economics support M7.","Many short anecdotes limit D to 7.","Long-run resource history supports R8.","Materials and production support F4.","Coulthard's natural-history writing supports A2.5.","The recurring animal lens supports N2.5.","Anecdotal generalization limits P1.5."],
  year:2020,yearNote:"Publisher-supplied Google Books metadata gives August 6, 2020; paperback edition is 2021. Follow the Flock is the US title alias, not an additional work.",
  T11:0,T12:0,themeNote:"T11=0: sheep as a productive resource and historical influence predominate, not environmental activism. T12=0: conquest is auxiliary to food and fiber history.",
  periodEnd:null,periodNote:"Neolithic-to-modern global account without one central period.",
  amazon:unknownAmazon(13,'research-other-amazon-a.json'),evidence:[sheep,'https://books.google.com/books?id=TqyfEAAAQBAJ'],
  enrichment:enrichment(sheep,[['MAT',2,'Wool is a recurring resource.'],['PRD',2,'Food and fiber production underpin the account.'],['TRD',2,'Animal products support trade and expansion.']],edition(320,'ISBN:9781789544213',sheep,'Paperback',2021))
}),
fresh(14,{
  eligibility:"A narrative account of linguistic reconstruction, archaeology and genetics for general readers, not a language or specialist linguistics course.",
  reason:"Triangulation between independent evidence streams supplies useful inference lessons. The linguistic diaspora is much closer to historical science than to operational technology.",
  raw:[16,12,9,9,8,8,4,3.5,2.5,1.5],
  notes:["Multiple research fields support E16; reconstructed ancient claims retain uncertainty.","Language, archaeology, genetics and movement support S12.","Triangulation across fragmentary evidence supports U9.","Migration and language spread support M9.","A focused diaspora narrative supports D8.","Research methods persist beyond individual hypotheses, supporting R8.","Scientific inference supports F4; linguistic history is indirect fit.","Spinney's science reporting and specialist interviews support A3.5.","Travel and reconstruction provide N2.5.","Popular reconstruction risks false precision, limiting P1.5."],
  year:2025,yearNote:"Bloomsbury identifies first publication in 2025; the retrieved ebook is dated May 13, 2025.",
  T11:0,T12:0,themeNote:"T11=0: cross-regional language and scientific reconstruction. T12=0: scientific explanation and language spread are central.",
  periodEnd:-2000,periodConfidence:'low',periodNote:"Approximate endpoint for the ancient Proto-Indo-European diaspora that organizes the account; ancient scope is clear, exact boundary is uncertain. H13 reaches its -12 cap.",
  amazon:unknownAmazon(14,'research-other-amazon-a.json'),evidence:[proto],
  enrichment:enrichment(proto,[['SCI',3,'Genetic, archaeological and linguistic research reconstructs the past.'],['HEU',2,'Independent traces are combined to infer missing histories.']],edition(352,'ISBN:9781639732593',proto,'Ebook',2025))
}),
fresh(16,{
  eligibility:"A sustained public argument about the attention economy, not a technical media course or a set of operating instructions.",
  reason:"Commercial incentives and scarce attention offer a transferable model. Political framing and a sweeping social analogy lower evidence and durability; no serious veto is established merely from the author's political role.",
  raw:[14,12,10,8,7,6,4,3,2.5,1.5],
  notes:["A broad attention-capitalism analogy limits E14.","Media business, cognition and politics support S12.","Attention allocation and incentive conflict support U10.","Commercial capture of attention supports M8.","A book-length social argument supports D7.","Platform-specific urgency lowers R6.","Computing institutions and heuristics support F4.","Hayes brings media experience, supporting A3.","A coherent scarce-resource frame supports N2.5.","Rhetorical framing limits P1.5."],
  year:2025,yearNote:"Publisher identifies first hardcover January 28, 2025; selected paperback is January 27, 2026.",
  T11:0,T12:-10,themeNote:"T11=0: the focus is media systems rather than a celebrity biography or American-only local history. T12=-10: media and political power are central.",
  periodEnd:null,periodNote:"Contemporary structural argument rather than one central historical episode.",
  amazon:unknownAmazon(16,'research-other-amazon-b.json'),evidence:[sirens],
  enrichment:enrichment(sirens,[['ECO',2,'Attention is treated as an economic resource.'],['CMP',2,'Online platforms mediate attention capture.'],['HEU',2,'Cognitive allocation and distraction are discussed.'],['POL',2,'The attention model is extended to politics.']],edition(336,'ISBN:9780593653135',sirens,'Paperback',2026))
}),
fresh(17,{
  eligibility:"Reported comparative analysis of Chinese and American development and institutions; not an engineering textbook or a policy procedure manual.",
  reason:"Construction capacity and institutional veto points provide useful comparisons. The engineering-state/lawyerly-society contrast is a strong simplification, so it is assessed as a heuristic rather than a demonstrated complete theory.",
  raw:[15,14,12,9,8,6,7,3.5,3,1.5],
  notes:["Firsthand reporting supports E15; the two-country contrast is selective.","Infrastructure, manufacturing, law and governance support S14.","Institutional constraints on building support U12.","Capacity and veto-point explanations support M9.","The compact comparative account supports D8.","Current rivalry and policy examples limit R6.","Industry, infrastructure and technology directly support F7.","Wang's technology analysis supports A3.5.","A clear comparative frame supports N3.","The engineering-versus-lawyers shorthand limits P1.5."],
  year:2025,yearNote:"Publisher identifies the original ebook/audio in 2025; the selected paperback is July 2, 2026.",
  T11:0,T12:-10,themeNote:"T11=0: explicit comparison and international industrial competition exceed isolated single-nation history. T12=-10: governance and political institutional choice are central, not merely applications.",
  periodEnd:null,periodNote:"A current structural comparison with recent reportage, not one closed historical period.",
  amazon:unknownAmazon(17,'research-other-amazon-b.json'),evidence:[breakneck],
  enrichment:enrichment(breakneck,[['PRD',3,'Manufacturing capacity is central to the comparison.'],['ENG',3,'Infrastructure construction is the main material case.'],['INS',3,'Institutional permission and constraint explain different build rates.'],['POL',3,'Political governance is part of the central comparison.']],edition(288,'ISBN:9781802067798',breakneck,'Paperback',2026))
}),
fresh(18,{
  status:'vetoed',veto:'V5',vetoConfidence:'moderate',
  eligibility:"A general memoir and argument by the web's inventor, not a computing textbook. The high-tech memoir passes H2, but that does not override V5.",
  reason:"The publisher explicitly presents the memoir as a manifesto for the future, with a program to restore user control of technology. Retain the substantial technical payload in a counterfactual score; V5 applies to this programmatic component with moderate confidence.",
  raw:[16,14,12,9,7,8,7,5,2.5,1.5],
  notes:["Firsthand design access supports E16, with retrospective self-selection.","Web architecture, collaboration, firms and governance support S14.","Open standards and adoption choices support U12.","Creation and coordination choices support M9.","Memoir and future advocacy cost density, giving D7.","Web-design history retains R8 beyond current platforms.","Computing invention directly supports F7.","The inventor's direct authority supports A5.","A creation-to-present narrative supports N2.5.","Forward-looking advocacy limits P1.5."],
  year:2025,yearNote:"Pan Macmillan identifies September 9, 2025 as publication.",
  T11:0,T12:0,themeNote:"T11=0: global computing invention rather than excluded local themes. T12=0: technological creation is central even though advocacy triggers the separate V5 gate.",
  periodEnd:2025,periodNote:"The memoir reaches the contemporary web and current projects; 2025 is an approximate narrated-life endpoint, not a substitute for publication age in a timeless argument.",
  amazon:unknownAmazon(18,'research-other-amazon-b.json'),evidence:[web,'https://thisisforeveryone.timbl.com/about-the-book.html'],
  enrichment:enrichment(web,[['CMP',4,'Creation and evolution of the web are central.'],['INN',3,'Open invention and adoption choices are discussed.'],['INS',3,'Control and governance of the web form the argument.']],edition(400,'ISBN:9781035023677',web,'Hardback',2025))
}),
fresh(19,{
  eligibility:"Investigative narrative about the plastics industry and its effects, not a polymer-science textbook or a recycling instruction manual.",
  reason:"Industry incentives, marketing and production expansion supply a systems payload. The publisher's hostile framing does not alone prove V1/V2/V5; environmental predominance is separately penalized.",
  raw:[15,13,10,9,7,6,5,3.5,2.5,1.5],
  notes:["Investigative reporting supports E15; promotional claims do not establish factual reliability.","Petrochemicals, growth incentives and health/environment effects support S13.","Externalities and incentive conflict support U10.","Production and marketing mechanisms support M9.","A reported industry narrative supports D7.","Current evidence and disputes limit R6.","Materials and industrial systems support F5 despite environmental focus.","Gardiner's environmental reporting supports A3.5.","A connected industry account supports N2.5.","Strong exposé framing limits P1.5."],
  year:2026,yearNote:"Publisher identifies the original hardcover on February 24, 2026.",
  T11:-10,T12:0,themeNote:"T11=-10: pollution, ecological harms and health effects are central. T12=0: the industrial material and its effects, not a listed political/financial subject alone, organize the account.",
  periodEnd:null,periodNote:"Contemporary industry investigation spanning its development; no single closed central period.",
  amazon:unknownAmazon(19,'research-other-amazon-b.json'),evidence:[plastic],
  enrichment:enrichment(plastic,[['MAT',3,'Plastics and petrochemicals are the central resource.'],['PRD',3,'Production expansion and industry organization are investigated.'],['ECO',2,'Profit and external-cost incentives are part of the account.']],edition(352,'ISBN:9780593717103',plastic,'Hardcover',2026))
})
]);
