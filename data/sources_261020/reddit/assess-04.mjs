import {fresh,save,unknownAmazon,enrichment,edition} from './assessment-utils.mjs';
const frost='https://www.penguinrandomhouse.com/books/551601/frostbite-by-nicola-twilley/';
const night='https://library.usi.edu/record/438579';
const ghost='https://catalog.freelibrary.org/Record/2830215';
const venice='https://www.penguinrandomhouse.com/books/308084/venice-by-thomas-f-madden/';
const worn='https://www.penguinrandomhouse.com/books/606856/worn-by-sofi-thanhauser/';
const dagger='https://books.google.com/books?id=FiGY0AEACAAJ';
const coal='https://www.hachettebookgroup.com/titles/barbara-freese/coal/9780465057931/';
const woman='https://www.penguinrandomhouse.com/books/558307/a-woman-of-no-importance-by-sonia-purnell/';
const shared='Public explanatory or historical narrative for general readers; neither fiction nor procedural, textbook or specialist-reference training.';
save([
fresh(23,{
eligibility:shared,reason:'Thermal control links preservation, transport and scale. Environmental consequences are part of the investigation; the inspected scope does not establish that advocacy replaces explanation.',
raw:[16,15,12,10,8,8,7,3.5,2.5,1.5],
notes:['Field reporting supports E16; promotional claims of completeness are not proof.','Cooling, food production and global distribution support S15.','Storage and transport constraints give reusable U12.','Temperature control explains feasible distribution and scale, supporting M10.','A focused infrastructure subject supports D8 despite travel detail.','Preservation constraints remain durable, supporting R8.','Engineering and logistics directly support F7.','Twilley has relevant science-reporting experience, supporting A3.5.','A tour through the cold chain supplies N2.5.','Concrete reporting supports P1.5; full prose was not inspected.'],
year:2024,yearConfidence:'high',yearNote:'Publisher lists the first hardcover and ebook on June 25, 2024; paperback is 2025.',
T11:0,T12:0,themeNote:'Refrigeration infrastructure is central. Environmental effects are substantial but the checked scope does not establish predominant environmental content or a central T12 topic.',
periodEnd:null,periodNote:'Cross-period technology history and contemporary investigation, not one closed historical period.',
amazon:unknownAmazon(23,'research-b-2.json'),evidence:[frost],
enrichment:enrichment(frost,[['ENG',3,'Thermal control changes preservation.'],['LOG',3,'Cold storage and refrigerated transport constitute the central network.'],['PRD',2,'Food-processing and distribution arrangements respond to refrigeration.'],['ENE',2,'The infrastructure requires energy.']],edition(400,'ISBN:9780735223301',frost,'Paperback',2025),[{id:'cold-chain-scale',domains:['ENG','LOG','PRD'],roles:{ENG:'Cooling extends usable food lifetime.',LOG:'Storage and transport bridge distance and season.',PRD:'Supply can be organized over wider markets.'},statement:'Thermal control extends food life, enabling longer storage and travel and changing the scale of food supply.',scope:'Cold-chain system described in the publisher account.',strength:3,confidence:'moderate',refs:[frost]}])
}),
fresh(24,{
title:'In the Watches of the Night: Life in the Nocturnal City, 1820–1930',author:'Peter C. Baldwin',
eligibility:shared,reason:'Lighting alters working time, transport and social control. These mechanisms keep the urban history eligible despite the strong negative topic fit.',
raw:[16,13,9,9,8,8,5,4,2,1.5],
notes:['A documented academic history supports E16; the description is not an independent accuracy audit.','Lighting, labor, transit and regulation support S13.','Technology changing usable hours supplies U9.','Infrastructure and time constraints support M9.','A bounded nocturnal-history focus supports D8.','Technology adoption and coordination lessons support R8.','Infrastructure and labor fit F5, reduced by local urban detail.','Baldwin brings directly relevant historical research, supporting A4.','The thematic chronology supports N2.','Careful historical distinctions support P1.5 with limited prose inspection.'],
year:2012,yearNote:'The University of Southern Indiana library identifies the Chicago Press edition as 2012.',
T11:-10,T12:0,themeNote:'American urban history predominates, triggering T11. Work, leisure and lighting are broader than a central political argument, so T12=0.',
periodEnd:1930,periodConfidence:'high',periodNote:'The stated historical scope is 1820–1930.',
amazon:unknownAmazon(24,'research-b-2.json'),evidence:[night,'https://books.google.com/books?id=xmrNxCIcULQC'],
enrichment:enrichment(night,[['ENG',2,'Gas and electric lighting change the usable night.'],['LOG',2,'Night transport appears in the contents.'],['INS',2,'Regulation and work schedules respond to technical change.']],edition(284,'ISBN:9780226036038',night,'Ebook',2012))
}),
fresh(25,{
author:'Mark Harmon and Leon Carroll Jr.',
eligibility:shared,reason:'Naval intelligence cooperation with organized crime offers some lessons about information and institutional expediency. The evidence supports a historical narrative, not proof that the alliance achieved every claimed result.',
raw:[13,10,8,6,7,7,3,3,2.5,1],
notes:['The library identifies references and a historical structure; clandestine activity limits E13.','Intelligence, criminal networks and wartime institutions support S10.','Information access and alliance costs offer U8.','Operational episodes support M6, with limited counterfactual evidence.','The bounded story supports D7.','Institutional tradeoffs persist, supporting R7.','Military information is relevant, but industrial technology is peripheral, giving F3.','Carroll brings investigative practice; that is not direct wartime participation, giving A3.','Waterfront, invasion and aftermath form N2.5.','Heroic framing warrants bounded P1 rather than full precision.'],
year:2026,yearNote:'Library title, author and copyright records identify the 2026 Harper Select work.',
T11:0,T12:-10,themeNote:'The transatlantic wartime intelligence operation does not primarily concern domestic American history. Military intelligence is central, triggering T12.',
periodEnd:1945,periodNote:'The main WWII operation and its immediate institutional aftermath close around 1945; later testimony is retrospective.',
amazon:unknownAmazon(25,'research-b-2.json'),evidence:[ghost,'https://catalog.wake.gov/GroupedWork/7ff514aa-1397-4876-fd31-0907d27b27f0/Home','https://www.kirkusreviews.com/book-reviews/mark-harmon/ghosts-of-sicily/'],
enrichment:enrichment(ghost,[['MIL',3,'Wartime naval intelligence is the central subject.'],['INS',2,'An official intelligence agency cooperates with an unofficial network.']],edition(269,'ISBN:9781400252985',ghost,'Print book',2026,'Free Library records xx,269 numbered pages plus 8 pages of plates. Other metadata reports publisher extent304. Preserve the library numbered extent explicitly, without adding preliminary or plate pages.'))
}),
fresh(26,{
title:'Venice: A New History',
eligibility:shared,reason:'The maritime city-state connects exchange, institutions and regional power. The city-centered panorama limits transfer, while the checked evidence does not establish a serious veto.',
raw:[16,13,10,8,7,9,5,4.5,2.5,1.5],
notes:['A specialist historical synthesis supports E16; independent claim checking remains limited.','Maritime exchange, government and Eurasian relations support S13.','Commercial and institutional adaptations offer U10.','The broad survey gives M8 rather than a tightly tested causal model.','Art and personal history reduce D to7.','Long historical patterns support R9.','Trade and institutions support F5; urban detail limits fit.','Madden is a specialist medieval historian, supporting A4.5.','A chronological city history supports N2.5.','Clear synthesis supports P1.5 without a full-text audit.'],
year:2012,yearConfidence:'high',yearNote:'The publisher identifies the original ebook in October2012, before the 2013 paperback.',
T11:-10,T12:0,themeNote:'Urban and single-state history triggers T11. Trade, art, society and government share the broad scope; central politics is not sufficiently established for T12.',
periodEnd:null,periodNote:'The account crosses1500years into modern tourism; no single closed period is central.',
amazon:unknownAmazon(26,'research-b-2.json'),evidence:[venice],
enrichment:enrichment(venice,[['TRD',3,'The maritime commercial city is central.'],['INS',2,'The republic and its institutions organize the history.'],['POL',2,'Relations with Eurasian powers shape the city.']],edition(480,'ISBN:9780147509802',venice,'Paperback',2013))
}),
fresh(27,{
title:"Worn: A People's History of Clothing",
eligibility:shared,reason:'Material production and labor arrangements provide concrete mechanisms. The critical account of pollution and exploitation reduces topic fit but does not by itself establish V2 or V5.',
raw:[15,14,10,9,7,8,6,3,2.5,1.5],
notes:['Factory visits and historical reporting support E15; global synthesis needs independent checks.','Fibers, factories, labor and consumption support S14.','Production organization and supply opacity offer U10.','Mechanization changing household and factory labor supports M9.','Five material narratives support D7 with personal and cultural detail.','Textile production and division of labor support R8.','Industrial production fits F6 despite substantial social critique.','Direct reporting supports A3, below specialist technical authority.','Five fabrics create a coherent N2.5 structure.','Material specificity supports P1.5; normative framing remains a limit.'],
year:2022,yearConfidence:'high',yearNote:'Publisher lists the first ebook January25,2022 and paperback January10,2023.',
T11:-10,T12:0,themeNote:'Labor exploitation and environmental effects are prominent enough in the organizing social history for T11. Finance or political power is not the principal organizing topic, so T12=0.',
periodEnd:null,periodNote:'A broad500year narrative continues to contemporary production; no single central historical endpoint.',
amazon:unknownAmazon(27,'research-b-3.json'),evidence:[worn,'https://www.penguin.co.nz/books/worn-9780141990316'],
enrichment:enrichment(worn,[['PRD',3,'Spinning, weaving and garment production organize the book.'],['ENG',2,'Mechanization changes where production can occur.'],['INS',2,'Factory organization changes labor arrangements.'],['TRD',2,'International supply networks connect producing and consuming regions.']],edition(400,'ISBN:9780525566731',worn,'Paperback',2023),[{id:'cloth-factory-labor',domains:['ENG','PRD','INS'],roles:{ENG:'Mechanized spinning and weaving concentrate machinery.',PRD:'Work shifts from households to factories.',INS:'Labor schedules and family compatibility change.'},statement:'Industrial textile machinery shifts production into factories and changes the organization of labor and household work.',scope:'Author interview on the publisher page.',strength:3,confidence:'moderate',refs:[worn]}])
}),
fresh(28,{
title:'Book and Dagger: How Scholars and Librarians Became the Unlikely Spies of World War II',
eligibility:shared,reason:'The conversion of scholarly skills and collections into intelligence gives a transferable knowledge-organization theme. Wartime personalities are substantial and causal generalization remains limited.',
raw:[14,11,9,7,7,8,4,3.5,2.5,1.5],
notes:['Letters and declassified material support E14, with unseen source selection limiting confidence.','Scholarship, information collection and wartime institutions support S11.','Repurposing analytical skills offers U9.','Case histories show information work but provide limited causal testing, giving M7.','A focused institutional story supports D7.','Information organization remains useful, giving R8.','Scientific organization and intelligence partly fit F4.','Graham has relevant academic research experience, supporting A3.5.','A cast of scholars supplies N2.5.','Distinguishing scholarly expertise from adventurous action supports P1.5 provisionally.'],
year:2024,yearNote:'The publisher-supplied Google Books record identifies HarperCollins2024.',
T11:0,T12:-10,themeNote:'The international war and intelligence operation is not chiefly domestic American history. Military intelligence is central, triggering T12.',
periodEnd:1945,periodNote:'WorldWarII defines the central historical scope; postwar institutional legacy is ancillary.',
amazon:unknownAmazon(28,'research-b-3.json'),evidence:[dagger,'https://books.google.com/books?id=dw4-0AEACAAJ'],
enrichment:enrichment(dagger,[['MIL',3,'Wartime intelligence supplies the central purpose.'],['INS',2,'Academic specialists are recruited into a new organization.']],null,[],'Google Books gives376pages for ISBN9780063280847 but the accessible record did not establish format clearly; retain edition extent unknown.')
}),
fresh(30,{
title:'Coal: A Human History',
eligibility:shared,reason:'Fuel availability joins industrial capacity and social costs. The environmental-law perspective is an explicit lens, not sufficient evidence that the history depends on allegiance.',
raw:[15,14,11,9,8,8,7,3.5,2.5,1.5],
notes:['Historical synthesis supports E15 with limits from the selective fuel lens.','Fuel, industrial production, labor and pollution support S14.','Energy dependence and external costs offer U11.','Fuel constraints explain industrial choices, supporting M9.','A focused commodity narrative supports D8.','Energy-system history remains durable, giving R8.','Energy and industrialization directly support F7.','Freese brings environmental-law expertise, with less technical energy authority, giving A3.5.','A chronological fuel narrative supports N2.5.','Concrete examples support P1.5; broad claims need care.'],
year:2003,yearConfidence:'high',yearNote:'The BasicBooks original is dated January7,2003 in Google Books; the selected revised paperback is2016.',
T11:-10,T12:0,themeNote:'Pollution, disease and environmental consequences are central enough for T11. Energy and industrial production, rather than political or financial doctrine, organize the account.',
periodEnd:null,periodNote:'A long fuel history with contemporary consequences has no single central period.',
amazon:unknownAmazon(30,'research-b-3.json'),evidence:[coal,'https://books.google.com/books?id=FDMtvwEACAAJ'],
enrichment:enrichment(coal,[['ENE',4,'Coal as an energy source is the organizing subject.'],['PRD',3,'Industrial capacity depends on fuel supply.'],['ENG',2,'Mining and combustion technologies connect fuel to use.']],edition(384,'ISBN:9780465057931',coal,'Paperback',2016,'Revised edition adds contemporary material; original publication age remains2003.'))
}),
fresh(33,{
title:'A Woman of No Importance: The Untold Story of the American Spy Who Helped Win World War II',
eligibility:shared,reason:'Resistance networks, logistics and institutional obstacles preserve useful organizational lessons within a personal biography. The subject is not technical biography, so eligibility rests on this payload rather than the V3 exception.',
raw:[15,10,9,7,7,8,3,3.5,3,1.5],
notes:['Biographical research supports E15; secret operations constrain verification.','Resistance networks, intelligence and supply support S10.','Recruitment under constraint and adaptation offer U9.','Operational choices receive some explanation, supporting M7.','Personal struggle and suspense reduce density toD7.','Network organization and trust remain durable, supporting R8.','Strategic information fits partly, but engineering is peripheral, giving F3.','Purnell has relevant biographical reporting experience, supporting A3.5.','The life story supplies a strong N3 narrative.','Specific detail supports P1.5; heroic framing prevents full precision.'],
year:2019,yearConfidence:'high',yearNote:'Publisher lists original ebookApril9,2019 and paperbackMarch24,2020.',
T11:0,T12:-10,themeNote:'An American subject does not make the French-resistance operation predominantly American national history. Military intelligence and war are central, so T12=-10.',
periodEnd:1945,periodNote:'The central resistance and liberation story ends withWorldWarII; later-life material is ancillary.',
amazon:unknownAmazon(33,'research-b-3.json'),evidence:[woman],
enrichment:enrichment(woman,[['MIL',3,'Resistance and intelligence operations are central.'],['INS',2,'Spy networks organize local information and action.'],['LOG',2,'Airdropped supplies support resistance operations.']],edition(368,'ISBN:9780735225312',woman,'Paperback',2020))
})
]);
