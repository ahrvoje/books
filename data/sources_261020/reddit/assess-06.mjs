import {prior,save} from './assessment-utils.mjs';
const rows=[
[55,'Historical investigative narrative about the Congo crisis, not fiction or intelligence instruction.','External power, intelligence incentives and weak state capacity supply mechanisms. Correct the impossible1945endpoint: the central crisis occurs in1960–1961.','Congo-centered political history triggers T11; politics and intelligence separately trigger T12.','Use1961, the central crisis and Lumumba assassination endpoint stated by the publisher; replaces the prior erroneous1945.',[
'Documentary reporting supports E17; clandestine decisions limit complete verification.',
'Intelligence, decolonization, external powers and state capacity support the prior strong S.',
'Intervention incentives and weak-state constraints support U11.',
'The account connects external pressure and institutional choices, supporting the retained causal attainment.',
'Political personalities and diplomatic detail reduce D to7.',
'State weakness and intervention remain durable subjects, supporting R8.',
'Geostrategy and institutional power support F6 despite little engineering.',
'Reid’s investigative historical synthesis supports A4.',
'The focused crisis gives a clear N3 narrative.',
'Controlled documentary storytelling supports P2.'
]],
[57,'Sustained historical argument about technology in use, not engineering training.','Maintenance, adaptation and diffusion retain strong utility. Selected counterexamples correct novelty bias without measuring every technology’s importance.','Global technology use is central; neither thematic deduction applies.','Cross-period argument about technological use; no single central interval.',[
'Historical counterexamples support E17 but do not establish all relative technology weights.',
'Use, maintenance, institutions and diffusion remain strongly integrated.',
'Separating novelty from practical contribution remains an exceptionally reusable heuristic.',
'Adaptation and maintenance explain persistence, supporting the retained causal attainment.',
'The focused corrective supports D8.',
'Its argument directly resists hype, supporting R9.',
'Technology, industry and practical usefulness support F7.',
'Edgerton’s history-of-technology expertise supports A4.',
'Thematic chapters are less cumulative than one narrative, supporting N2.',
'The distinction between invention and use is conceptually precise, supporting P2.'
]],
[63,'General explanatory reportage on oranges and their industry, not cultivation or food-processing instruction.','Botany, processing, distribution and demand supply concrete production mechanisms. Florida is a setting rather than the principal national-history subject.','The orange production system is central; retain T11=0 and T12=0.','Contemporary industry explanation with historical background, not a single central historical period.',[
'Firsthand reporting supports E16 with normal limits of a single industry portrait.',
'Botany, processing, logistics and demand support the retained strong S.',
'Production and distribution constraints offer U11.',
'The relation between fruit characteristics and processing supports the retained M.',
'Concise industry explanation supports D9.',
'Basic commodity-system constraints support R9.',
'Production and logistics fit F5; high technology is limited.',
'McPhee’s detailed reporting supports A4.',
'The bounded subject supports a clear N3 structure.',
'Exact concrete description supports P2.'
]],
[64,'Broad explanatory history for general readers, not specialist technical reference.','Retain the bounded no-veto finding: domestication, diffusion and geographic constraints remain partial mechanisms, while overclaiming and specialist objections remain reflected in low E/P.','The global comparative material argument is not automatically racial history; no listed T12 theme predominates.','Broad comparative account across periods; no single central endpoint.',[
'Specialist objections and overstated generalization keep E at12.',
'Domestication, diffusion, population and geography sustain substantial integration.',
'Material constraints provide U11 as partial rather than complete explanation.',
'Some causal chains are useful but insufficient for the whole inequality thesis.',
'The broad synthesis and repetition support D7 rather than high density.',
'Long-run material questions remain durable, giving R8.',
'Technology and civilizational mechanisms support F6.',
'Relevant biological expertise does not establish authority over every historical field, giving A3.',
'The organizing question gives N3 clarity.',
'Overconfident breadth limits P to1.'
]],
[65,'International narrative history of imperial partition, not military or administrative instruction.','Diplomacy, transport, force and trade connect across a continent. Imperial-actor emphasis limits balance and density but does not establish a serious veto on the reviewed evidence.','International imperial history is not automatically a single-nation or racial-history T11 case. Central political and military power triggers T12.','Retain1912as the prior approximate end of the imperial-partition account.',[
'Historical synthesis supports E16 while perspective and selection remain limits.',
'Diplomacy, transport, military force and trade retain very strong integration.',
'Imperial competition offers U11 beyond individual rulers.',
'Capability and bargaining constraints support the retained M.',
'The long actor-centered narrative lowers D to6.',
'The imperial-competition case supports durable R9.',
'Trade and geostrategy fit F5 with less engineering detail.',
'Pakenham’s sustained historical work supports A4.',
'The continental narrative remains readable, supporting N3.',
'Specific historical description supports P2.'
]],
[68,'General comparative archaeological and historical explanation, not a textbook or technical monograph.','Technology, institutions and population provide a real payload. Disputed reconstructions remain a limit rather than a new veto.','Multiple pre-Columbian civilizations do not automatically mean racial or single-nation history; retain both theme flags at0.','Retain1500as a broad approximate boundary around European contact; any nearby endpoint reaches H13’s cap.',[
'Research synthesis supports E16 with explicit uncertainty around reconstructions.',
'Population, technology and institutions sustain strong systems integration.',
'Revision of assumptions about societies supplies U10.',
'Material practices and institutions provide causal content without fully resolved counterfactuals.',
'The broad synthesis gives D7.',
'Long-run archaeological questions support R9.',
'Civilizational organization fits F4 with limited industrial strategy.',
'Mann’s synthesis of specialists supports A4.',
'Comparative cases form a clear N3 narrative.',
'Careful explanatory prose supports P2.'
]],
[72,'Institutional banking history, not an investment or trading manual.','Networks, trust, credit and states provide substantial strategic payload. The length cost and central-finance deduction remain.','Global banking institutions are broader than American national history. Finance centrally triggers T12.','Retain1989as the prior moderate-confidence endpoint of the bank history.',[
'Documented reporting and archival synthesis support E18.',
'Credit, states, firms and international networks sustain full systems attainment.',
'Trust, institutional continuity and crisis response support U13.',
'Banking incentives and relationships support the retained strong M.',
'Long family and institutional detail keeps D at5.',
'Credit and institutional power remain durable, giving R9.',
'Strategic finance and institutions fit F6.',
'Chernow’s detailed historical scholarship supports A5.',
'A long but cumulative institutional narrative supports N3.',
'Precise narrative distinctions support P2.'
]],
[73,'Family memoir and national history; not fiction or specialist instruction.','Testimony gives modest lessons about coercion and adaptation. It cannot by itself establish national causal claims; retain low fit without a new veto.','Chinese national history triggers T11; political coercion independently triggers T12.','Retain1978as the prior moderate-confidence endpoint of the family’s central Chinese experience.',[
'Firsthand and family testimony support E15 within their limits.',
'Family, state and ideology connect at moderate systems attainment.',
'Adaptation under coercion offers U8.',
'Anecdotes reveal incentives but only modestly establish causal mechanisms.',
'The long personal narrative keeps D at5.',
'The historical testimony has durable R9 value.',
'Technology and production are peripheral, giving F2.',
'Direct experience supports A3 without proving broad historical authority.',
'Three generations form a clear N3 structure.',
'Controlled personal narration supports P2.'
]],
[74,'Narrative historical investigation, not fiction or specialist procedure.','Concession incentives, remote accountability and campaigning provide transferable mechanisms. Demographic uncertainties remain visible; historical activism as a subject is not itself V5.','Colonial forced labor and Congo-centered racial history trigger T11. Central political power independently triggers T12.','Retain1908as the end of Leopold’s personal Congo regime and the main historical scope.',[
'Historical synthesis supports E16 with uncertainty in demographic claims.',
'Concessions, extraction, external accountability and campaigning support strong S.',
'Remote control and perverse incentives offer U10.',
'The extraction-and-response mechanism supports the retained M.',
'Narrative and campaigning detail leave D7.',
'Accountability and extraction remain durable, giving R9.',
'Institutional power fits F4 while production technology is limited.',
'Hochschild brings substantial historical reporting, supporting A4.',
'The linked investigation and campaign support N3.',
'Clear descriptions support P2, with numerical uncertainty retained.'
]]
];
save(rows.map(([i,eligibility,reason,themeNote,periodNote,notes])=>prior(i,{
eligibility,reason,themeNote,periodNote,notes,
...(i===55?{periodEnd:1961,periodConfidence:'high',evidence:[...prior(i,{}).evidence,'https://www.penguinrandomhouse.com/books/616779/the-lumumba-plot-by-stuart-a-reid/']}:{}),
reassessment:`Reread the prior book assessment and current deduction record. Reassessed H1/H2, vetoes, each of ten raw attainments, both themes, original year, central-period endpoint and Amazon evidence. Retain all attainments, gates, themes and historical Amazon observations with their original dates. ${i===55?'Correct H13 endpoint from1945to1961using the publisher’s explicit Congo-crisis chronology.':'The source adds a nomination, with no new independent evidence warranting a numerical change; retain the documented dates.'}`
})));
