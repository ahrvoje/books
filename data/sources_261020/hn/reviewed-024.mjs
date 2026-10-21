import {save,prior,fresh,domain,edition,observed} from './save-reviewed.mjs';
const a=[];
a.push(prior(314,{
 eligibility:'The chapter sequence is a popular argument about values, responsibility, uncertainty and mortality, with anecdotes and incidental advice. It is not primarily procedural training; self-help marketing alone does not establish H2.',
 reason:'No serious veto established. A small payload about choosing commitments and accepting uncertainty survives, but weak evidence and repetition make it a poor fit.',
 evidence:['https://markmanson.net/books/subtle-art','https://catalog.slcpl.org/search/title.aspx?cn=645465&pos=1'],
 reassessment:'Read H074 and the current deduction row. The new comments criticize padding; the author synopsis and complete library contents support the same limits. Reassessed all ten attainments and retained them, including low E/S/F and limited D. Retained 2016, timeless scope, T12 philosophy and the dated verified Amazon observation; no new count is claimed.',
 notes:['Anecdotes support the claims more than systematic tests.','Values and psychology connect, but material institutions barely enter.','Choosing commitments gives a modest reusable heuristic.','Failure and responsibility receive explanation without detailed causal tests.','Nine related arguments repeat a compact central insight.','Acceptance of constraints survives the current marketing.','Little physics, industry or strategic-system substance.','A practiced essayist, not an authority on the empirical claims.','A clear sequence and memorable stories make the argument readable.','Provocation and profanity reduce conceptual precision.'],
 themeNote:'T11=0: not predominantly a listed historical or issue category. T12=-10: popular philosophy of living is central.',
 periodNote:'No single central historical period; examples illustrate a general argument.'
}));
a.push(prior(320,{
 eligibility:'A continuous citizen-facing explanation of incentives and economic adjustment. Publisher purpose is understanding economic systems, not course exercises, professional certification or applying a specialist procedure; H2 does not apply merely because it introduces economics.',
 reason:'Prices, scarcity and institutional incentives remain transferable. The prior concern about selective market-favoring cases limits confidence and E/P; no new evidence establishes serious ideological dependence sufficient for V2.',
 evidence:['https://www.hachettebookgroup.com/titles/thomas-sowell/basic-economics/9780465060733/'],
 reassessment:'Read W086 and the current deduction row. Fresh publisher scope supports the prior general-reader classification. Reassessed and retained all ten attainments: explanatory mechanisms and broad economic coverage remain strengths; selection balance and length remain limits. Retained original 2000, non-period scope, both zero themes and the dated verified Amazon count.',
 notes:['Many concrete cases, but the selection is less balanced than a neutral survey.','Production, trade, prices and institutions form a connected economic account.','Opportunity costs and incentives transfer across policy and business cases.','Price signals and adjustment explain mechanisms rather than only outcomes.','A long sequence of illustrations repeats some principles.','Scarcity and substitution remain durable concepts.','Strong economics and production fit, with limited technical technology detail.','Sowell has substantial research and professional economic experience.','Plain examples and cumulative exposition aid comprehension.','Categorical framing can suppress qualifications.'],
 themeNote:'T11=0: cross-country economics, not a listed central issue. T12=0: economic coordination is central; finance and policy are applications.',
 periodNote:'Cross-period economic explanation has no single historical endpoint.'
}));
const last='https://www.panmacmillan.com/series/the-last-lion/panmac25693';
a.push(fresh(259,{
 title:'The Last Lion: Winston Spencer Churchill (three-volume biography)',author:'William Manchester; Paul Reid',
 canonicalId:'n_last_lion_series',priorId:false,retainPrior:true,
 eligibility:'Three-volume narrative biography for general readers; neither fiction nor a command manual.',
 reason:'Strategic warning, alliance dependence and military organization provide a transferable payload despite extensive personal narrative. No serious veto established.',
 evidence:[last,'https://ci.nii.ac.jp/ncid/BA1880220X','https://www.labyrinthbooks.com/last-lion-box-set/','analysis/analysis_glasphist_261019_0144.md#g0990'],
 reassessment:'The source explicitly nominates all three volumes. Read the prior g0990 assessment of volume3; it is retained separately and is not reused as the whole-series score. Its purchase ISBN was actually the complete box set. All ten attainments below assess the broader biography, with more justified contextual density than the prior volume3 D=4. Series year is first-volume1983, not final-volume2012.',
 raw:[16,13,11,8,7,9,5,5,3,2],
 notes:['Extensive documentary biography earns substantial credit; a sympathetic personal lens limits certainty.','Empire, party institutions, alliance resources and warfare interact across the life.','Warning signals and coalition dependence transfer beyond Churchill.','Explains political constraints and strategic decisions, less often with rival causal tests.','Substantial context earns much length, though private life and repeated detail remain.','The strategic record has durable historical value.','Geostrategy and military institutions fit strongly; technology is secondary.','Manchester and Reid bring prolonged research and biographical expertise.','A sustained chronology holds an unusually large narrative together.','Controlled historical prose distinguishes actors and episodes clearly.'],
 year:1983,yearConfidence:'high',yearNote:'Library series record begins1983; volumes appeared1983,1988,2012. First volume governs P14.',
 T11:-10,T12:-10,themeNote:'T11: a political figure is central. T12: politics and war are central, separately.',
 periodEnd:1965,periodConfidence:'high',periodNote:'Complete life and series end with Churchill in1965.',
 edition:edition(3008,'9780316227780','https://www.labyrinthbooks.com/last-lion-box-set/','Hardcover box set (three volumes)',2012),
 ...observed(259,'Hardcover box set (three volumes)'),
 domains:{MIL:domain(3,'Wartime command and coalition conflict are sustained subjects.',[last]),POL:domain(4,'A political life is the organizing subject.',[last]),STR:domain(3,'Threat recognition and strategic choices recur across the volumes.',[last]),INS:domain(3,'Parliament, government and empire constrain individual choices.',[last])}
}));
const family='https://www.nyrb.com/products/a_family_lexicon';
a.push(fresh(295,{
 status:'vetoed',veto:['V3'],vetoConfidence:'moderate',
 eligibility:'A mixed memoir/novel classification. Although marketed as fiction, the author expressly rejects invention and identifies real people and events. Treat as factual literary memoir at moderate confidence, not an invented story or a manual.',
 reason:'Family language and memory offer insight, but the dominant achievement is literary evocation of particular people. Little developed mechanism or strategic model remains after local detail; V3 applies at moderate confidence. This is not a veto for antifascist views.',
 evidence:[family,'https://readingintranslation.com/2021/02/22/on-humor-eccentricity-and-sound-in-family-lexicon-a-conversation-with-ginzburg-translator-jenny-mcphee/'],
 raw:[13,5,4,3,8,8,1,4,3,2],
 notes:['Firsthand recollection is valuable but reconstructed dialogue and memory are not documentary proof.','Family language and Italian political pressures connect without wider system analysis.','Shared phrases illustrate identity, but practical transfer is mostly implicit.','Shows how speech preserves belonging without sustained causal testing.','A compact narrative makes details serve its literary design.','Memory and family language remain durable subjects.','Science appears through a family member, not technical or institutional explanation.','Ginzburg has firsthand access and substantial literary standing.','Recurring phrases give the account a strong architecture.','Economical prose and controlled irony are major strengths.'],
 year:1963,yearConfidence:'high',yearNote:'Publisher and translator identify the1963 Italian original;2017 is this translation.',
 T11:-10,T12:0,themeNote:'T11: a family in Italian national history is central. T12=0: language and family memory dominate over political theory.',
 periodEnd:1950,periodConfidence:'low',periodNote:'Approximate endpoint of the central family recollections, from childhood through the postwar years. Exact final episode was not verified;1950 is an explicitly approximate scope decision.',
 edition:edition(224,'9781590178386',family,'Paperback',2017),...observed(295),
 domains:{INS:domain(1,'Family and political institutions supply narrative context rather than a developed institutional model.',[family])}
}));
save(a);
