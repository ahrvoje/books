import {prior,save,packet} from './assessment-utils.mjs';
const rows=[
[29,'A sustained anthropological history of sugar, consumption and production, rather than a textbook or a technical recipe collection.','Sugar links plantation organization, trade and industrial consumption. The prior slavery deduction applies; no serious allegiance-dependent argument or other veto is established.','Plantation labor and slavery are central (T11=-10); political power is a consequence of the commodity system, not a separate predominant political narrative (T12=0).','Retain 1900 as the prior approximate endpoint of the principal industrial-consumption story; low confidence because the wider synthesis crosses periods.',[
'Mintz grounds the sugar argument in historical and anthropological sources; competing explanations limit certainty.',
'Production, coercive labor, commodity exchange and consumer routines form an unusually integrated sugar system.',
'The change from luxury to staple supplies a reusable model of markets and labor discipline.',
'The account connects work schedules and cheap calories to demand, without isolating every competing cause.',
'The focused commodity argument supports high density, although cultural detail slows some passages.',
'Its account of consumption and production remains useful beyond current food debates.',
'Trade, production and industrial organization fit well, with less direct technology or engineering.',
'Mintz brings directly relevant anthropological scholarship and a durable specialist contribution.',
'The conceptual structure is cumulative but less accessible than a modern narrative history.',
'Terms about power and consumption carry a clear analytic purpose rather than ornamental rhetoric.'
]],
[31,'Narrative commodity history for general readers; recipes and fishery detail are incidental, not procedural training.','Preservation, trade and resource depletion give the cod narrative transferable mechanisms. The ecological focus reduces fit but is not itself an activism veto.','Fishery depletion and resource ecology dominate enough for T11=-10; no central T12 theme.','No single central historical period: cod fisheries are traced across a broad chronology.',[
'The prior reporting supports the main fishing history; the commodity lens does not establish every global causal claim.',
'Preservation, ocean access, trade and regulation are linked, though one fish limits the scope.',
'Resource limits and regulation failures transfer to other commodity systems.',
'The account explains preservation and incentives behind depletion more than it quantifies their interaction.',
'A compact subject gives useful density, with culinary digressions reducing maximum attainment.',
'Resource-management and trade lessons survive changes in the fishery news cycle.',
'Trade and resource management fit; ecology and food culture occupy more space than industrial technology.',
'Kurlansky has established narrative reporting experience, with less specialist fisheries authority.',
'The fish provides a clear organizing thread through widely separated historical cases.',
'Concrete descriptions make trade and preservation processes easy to follow.'
]],
[32,'Investigative nonfiction about the Troubles; neither invented narrative nor training in intelligence methods.','Information control, clandestine organization and coercion supply limited transfer beyond the Northern Irish case. No serious veto is newly established by another nomination.','Northern Irish political conflict sustains both the local-history T11 and central-politics T12 deductions.','Retain the prior low-confidence 2016 endpoint of the retrospective investigation; it is not publication age.',[
'Keefe uses extensive investigation; unresolved testimony and secret organizations prevent full evidential certainty.',
'Political institutions, family loyalties and information control connect, with little industrial integration.',
'Secrecy and coercion yield reusable institutional lessons, despite the local focus.',
'Organizational pressure and incentives receive explanation rather than only incident narration.',
'The long personal narrative is partly necessary evidence but less dense in transferable ideas.',
'The historical case retains value beyond daily Northern Irish politics.',
'Institutional power and strategic information provide fit; technology and production are peripheral.',
'The investigation supports strong journalistic authority, not omniscience about concealed events.',
'Personal stories give a cumulative and highly legible narrative.',
'Controlled prose distinguishes testimony from established facts better than a sensational account.'
]],
[34,'Multinational infrastructure and construction narrative, not engineering instruction.','Finance, engineering, labor and diplomacy interact through project bottlenecks. This remains a strong fit without a serious veto.','World-trade infrastructure is central; disease and state politics are project constraints, so neither thematic deduction applies.','1914 is the completion/opening endpoint of the canal construction narrative.',[
'The established documentary history remains well supported, although it is one major case rather than comparative causal testing.',
'Construction technology, finance, labor, health and diplomacy are tightly connected.',
'Coordination failures and project recovery offer strong lessons for other large projects.',
'The account explains interacting bottlenecks and institutional choices, with limited formal counterfactual analysis.',
'Extensive personal and diplomatic detail partly dilutes the engineering and coordination payload.',
'Large-project coordination and infrastructure constraints are durable subjects.',
'Engineering, logistics, construction and trade match the target interests directly.',
'McCullough brings recognized historical scholarship and documentary synthesis.',
'The long construction story has a clear cumulative structure.',
'Precise concrete prose supports understanding of both organizational and physical obstacles.'
]],
[35,'A personal nature memoir for general readers; not a wildlife-care manual.','Careful observation and limits on interpreting an animal give a small transferable payload. That is sufficient to retain eligibility despite low direct fit.','Nature and environmental relations trigger T11; no listed T12 central theme.','Retain the prior low-confidence 2022 endpoint of the narrated experience; the exact event chronology remains approximate.',[
'Personal observation is credible as memoir but supplies little controlled evidence for general claims.',
'Human routines and animal behavior connect locally, with little wider systems integration.',
'Restraint in interpretation has some reuse, but there are few strategic models.',
'Anecdotes illuminate behavior without establishing strong causal mechanisms.',
'The compact memoir has reasonable narrative density but limited conceptual content.',
'Observation and attention remain useful, though the specific story carries much of the value.',
'Technology, industrial systems and quantitative strategy are almost absent.',
'Direct experience supports the memoir; the evidence does not establish specialist animal-science authority.',
'The relationship with the hare supplies a coherent, memorable structure.',
'Careful descriptive language is a principal strength.'
]],
[42,'A general history of domestic life organized by rooms, not instructions for household procedures.','Objects connect materials, commerce and social habits. Anecdotal breadth limits causal depth but does not eliminate the explanatory payload.','Neither the listed negative topics nor politics/finance/philosophy predominates; retain T11=0 and T12=0.','Domestic objects are followed across many periods without a single central endpoint.',[
'Accessible secondary reporting supports the anecdotes, with limited systematic testing of larger claims.',
'Household objects connect technology, commerce and customs but the links are uneven.',
'Some design and adoption lessons transfer, though much value remains historical curiosity.',
'The room framework reports causes selectively rather than developing one integrated model.',
'Numerous interesting digressions lower information density relative to the length.',
'Long-lived domestic technologies and social changes remain informative.',
'Materials and everyday infrastructure fit partly; strategic organization is peripheral.',
'Bryson is a skilled generalist synthesizer rather than a specialist in every covered domain.',
'Rooms provide a clear and memorable route through diverse material.',
'Concrete, readable prose preserves the prior strong style assessment.'
]],
[43,'General narrative history of the United States in 1927, not fiction or specialist instruction.','The synchronized events supply cultural and technical context, but simultaneity does not establish a mechanism. Retain low utility and poor fit without a new veto.','American national history and celebrity are central (T11=-10). The broad panorama is not predominantly a political, military or financial argument (T12=0).','The title and scope explicitly identify summer 1927.',[
'Reported historical events are accessible and sourced, while the narrative selection limits causal inference.',
'Aviation, entertainment, business and culture coexist more than they form an integrated explanatory system.',
'The period offers some adoption and public-attention lessons, with modest transfer.',
'Coinciding events are not themselves causal links, keeping mechanism attainment low.',
'Sports and celebrity detail substantially dilute the desired intellectual payload.',
'The historical panorama has lasting interest independent of present controversies.',
'Aviation and technology appear, but American cultural history dominates.',
'Bryson brings practiced historical synthesis, not specialized authority across all events.',
'The single summer gives a coherent and readable structure.',
'Clear descriptive prose makes the large cast manageable.'
]],
[44,'General explanation of materials through ordinary objects; no course or specialist training structure.','Structure-property-application explanations remain strong and durable. Strategic breadth is less developed than in industrial system histories; no veto is established.','Materials and engineering are central; no T11 or T12 deduction applies.','Explanations of materials span periods and have no central historical endpoint.',[
'An expert explains established materials science; accessible simplification prevents full attainment.',
'Material properties connect to applications more strongly than to trade and institutional organization.',
'Design constraints build transferable material intuition with fewer strategic decision models.',
'Structure and properties causally explain the uses of the selected materials.',
'A compact set of examples carries a high explanatory payload.',
'The basic material mechanisms are resistant to hype and date changes.',
'Materials and engineering fit strongly, while elementary physics is less novel for this reader.',
'Miodownik has direct materials-science expertise relevant to the central claims.',
'Everyday objects anchor clear, cumulative explanations.',
'Concrete and disciplined explanations join experience to physical properties.'
]],
[47,'Argumentative national history for general readers; not fiction or instructional reference.','Retain the later V5 decision: the work deliberately organizes national history around an oppositional activist politics. This differs from the earlier insufficient-evidence V2 judgment; the counterfactual score retains the observed selection limits.','American national and racial history triggers T11; political struggle triggers T12 independently.','Retain 2000 as the prior low-confidence endpoint of the updated historical scope; original production remains 1980.',[
'Selective conflict framing limits the balance of evidence, without requiring every reported fact to be false.',
'Labor, institutions and power connect, but one recurrent conflict frame constrains system diversity.',
'Some institutional and power analysis transfers beyond the American cases.',
'Conflict and incentives explain parts of the narrative but rival causal accounts receive less weight.',
'The long accumulation of cases has modest density for this reader.',
'Its historical influence and subject matter endure despite the vetoed activist purpose.',
'Institutional power fits partly; technology and industrial mechanism remain secondary.',
'Zinn has historical standing, while authority does not resolve the selection concern.',
'A clear narrative makes the broad national story readable.',
'Polemical framing reduces conceptual precision compared with more controlled histories.'
]]
];
save(rows.map(([i,eligibility,reason,themeNote,periodNote,notes])=>prior(i,{
eligibility,reason,themeNote,periodNote,notes,
...(i===47?{veto:['V5'],vetoConfidence:'high',evidence:[...prior(i,{}).evidence,'analysis/analysis_explainworld_261017_2336.md#w090']}:{}),
reassessment:`Reread the cited prior assessment and current deduction record. Reconsidered both hard exclusions, all vetoes, all ten raw attainments, both thematic flags, original year, historical endpoint and Amazon observation. The book-specific notes support retaining the vector and deductions; this source adds a nomination rather than independent quality evidence. ${i===47?'The later V5 finding remains; the earlier report had assessed V2 evidence, a distinct question.':''} Retain the original Amazon observation date or recorded unknown-count fallback.`
})));
