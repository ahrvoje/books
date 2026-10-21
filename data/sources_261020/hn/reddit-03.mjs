import {save,scored,domain,edition,packet} from './reddit-save.mjs';
const stamp='https://www.hachettebookgroup.com/titles/jason-reynolds/stamped-racism-antiracism-and-you/9780316453684/';
const berry='https://www.simonandschuster.com/books/The-Serviceberry/Robin-Wall-Kimmerer/9781668072240';
const frankl='https://www.beacon.org/Mans-Search-for-Meaning-P602.aspx';
const mother='https://www.penguinrandomhouse.com/books/714054/matrescence-by-lucy-jones/';
const choice='https://www.simonandschuster.com/books/The-Choice/Edith-Eva-Eger/9781501130793';
const thom='https://www.penguinrandomhouse.com/books/716349/falling-back-in-love-with-being-human-by-kai-cheng-thom/9780593594988/';
save([
scored(6,{title:'Stamped: Racism, Antiracism, and You',author:'Jason Reynolds; Ibram X. Kendi',status:'vetoed',veto:'V5',vetoConfidence:'high',
 eligibility:'A narrative reinterpretation of racial history for young general readers. The separately supplied educator guide does not make the book itself a textbook.',
 reason:'Its explicit purpose is to recruit readers to antiracist action and remove racist ideas, not only describe their history. This central civil-activist purpose triggers V5; it is a distinct youth adaptation, not the original Stamped from the Beginning.',
 raw:[12,7,5,5,8,7,1,4,3,1],
 notes:['Draws on a historical research base, but the compressed classification of ideas loses nuance.','Links racial categories, institutions and political power within a mainly national frame.','Offers a way to inspect legitimating narratives, with limited strategic or technical transfer.','Connects ideas to power, but the activist categories can substitute for competing causal explanations.','The adaptation is compact and fast moving, with less historical qualification.','Historical ideology persists, though current mobilization shapes the presentation.','Little direct technology, production or quantitative modeling content.','Kendi supplies historical scholarship and Reynolds narrative craft; their roles differ.','Conversational narrative makes a long chronology approachable.','Memorable rhetoric sometimes outruns analytical distinctions.'],
 year:2020,yearConfidence:'high',yearNote:'The Reynolds/Kendi youth remix first appeared in 2020. It is a separately authored adaptation, not a reprint of Kendi’s 2016 adult book; this print edition is 2025.',
 T11:-10,T12:-10,themeNote:'T11: American racial history and civil activism dominate. T12: politics and social power are central.',
 periodEnd:null,periodNote:'A historical survey directed at present-day ideas rather than one closed period; no historical-age deduction.',
 evidence:[stamp,'https://www.hachettebookgroup.com/titles/jason-reynolds/stamped-racism-antiracism-and-you/9780316453707/?lens=little-brown-books-for-young-readers'],
 edition:edition(336,'9780316453684',stamp,'Paperback',2025),
 domains:{POL:domain(3,'Racial classification and political authority organize the historical argument.',[stamp]),INS:domain(2,'Social institutions transmit and reinforce racial ideas.',[stamp])}
}),
scored(7,{author:'Robin Wall Kimmerer',status:'vetoed',veto:'V5',vetoConfidence:'moderate',
 eligibility:'A short sustained ecological and economic essay for general readers, not fiction or an instruction manual.',
 reason:'The central proposal is an environmental and ethical reorientation toward a gift economy. V5 applies to that normative activist purpose. The natural-world analogy has intellectual interest but does not independently validate an economic system.',
 raw:[12,8,6,5,9,7,2,4,3,2],
 notes:['Ecological observation has a concrete basis; economic conclusions rely substantially on analogy.','Connects natural reciprocity, community relations and exchange.','Reciprocity and relationship wealth offer modest transferable questions.','Describes mutual dependence but gives limited treatment of institutions that sustain large-scale exchange.','The short essay format keeps its single argument concentrated.','Mutual dependence is durable; its normative prescription is contestable.','Resource sharing has some fit, without industrial or technical depth.','Kimmerer has relevant botanical expertise, narrower than the economic claim.','A recurring plant example holds the argument together.','Clear lyrical prose helps memory while sometimes blurring metaphor and mechanism.'],
 year:2024,yearConfidence:'high',yearNote:'First book edition published November 2024. An earlier magazine essay is antecedent material, not a prior edition of this book.',
 T11:-10,T12:-10,themeNote:'T11: ecology and environmental ethics predominate. T12: economic and moral philosophy is the central interpretive argument.',
 periodEnd:null,periodNote:'A general argument about reciprocity, not a bounded historical narrative.',
 evidence:[berry],edition:edition(128,'9781668072240',berry,'Hardcover',2024),
 domains:{SCI:domain(2,'Serviceberry ecology supplies sustained examples.',[berry]),ECO:domain(3,'Gift exchange and definitions of wealth form the main social claim.',[berry]),INS:domain(2,'Community relationships are proposed as a basis for exchange.',[berry])}
}),
scored(8,{
 eligibility:'Survival memoir followed by an explanatory account of logotherapy for general readers; the main work is not therapist training.',
 reason:'Retain the non-vetoed decision. The testimony and reflection on agency supply transferable content, while therapeutic generalization remains weak evidence.',
 reassessment:'Read h217 and the current q0807 deduction record. Retain all ten raw attainments after comparison with the publisher’s scope: strong testimony, low causal validation, limited systems fit. Retain T11=-10, T12=-10, 1946 and no single topic period. Replace the old 4,089 top-widget observation with one freshly verified 100,881-global-rating paperback aggregate; no counts are summed. Poor-fit conclusion is retained.',
 raw:packet[8].prior.raw,
 notes:['Witness testimony is strong for experience, not proof that meaning causes survival.','The camp and clinical accounts offer limited integration of wider systems.','Separating external constraints from chosen responses is reusable.','Logotherapy is explained, but the memoir does not establish a controlled causal test.','The short book keeps recollection and interpretation concentrated.','The question of purpose under adversity remains durable.','Little direct computing, industrial or technical-system content.','Frankl has clinical and first-person authority within the stated limits.','The move from experience to interpretation is clear and memorable.','Compact language supports precise personal testimony, less secure universal claims.'],
 year:1946,yearConfidence:'high',yearNote:'Beacon identifies 1946 as the first publication. Translations, revised introductions and later gift editions do not reset it.',
 T11:-10,T12:-10,themeNote:'T11: Holocaust racial persecution is a major governing subject. T12: existential philosophy and the search for meaning are central.',
 periodEnd:null,periodNote:'Retain the current judgment: the camp narrative supports an argument about meaning and psychotherapy; it does not alone determine the entire work’s period.',
 evidence:['analysis/analysis_readlately_261017_2316.md#h217','analysis/analysis_pubcap_261018_2125.md#d-q0807',frankl],
 edition:edition(184,'9780807014271',frankl,'Paperback',2006),
 domains:{HEU:domain(2,'Examines how interpretation and attention can affect responses to constraint.',[frankl])}
}),
scored(9,{
 eligibility:'Combines memoir with reporting on maternal development and social conditions. It investigates a transition rather than teaching a childbirth or parenting procedure.',
 reason:'Passes the veto gates with moderate confidence. Social criticism and ecological passages are present, but the central form is personal and scientific inquiry. Biological and social mechanisms provide more than local memoir detail.',
 raw:[14,9,7,7,8,8,2,4,3,2],
 notes:['Research and interviews broaden personal experience; emerging neuroscience warrants caution.','Connects bodily change, work, social expectations and caregiving structures.','The mismatch between changing capacity and fixed expectations transfers modestly.','Explores interacting biological and social pressures, with limited causal separation.','Multiple kinds of evidence advance the main inquiry, though nature writing is less directly useful.','The transition to motherhood is durable; individual research claims may change.','Science and institutional conditions have partial fit; industrial systems do not.','Jones has science-journalism experience rather than clinical authority.','The personal transition provides a readable path across disciplines.','Reflective prose preserves ambivalence better than a simple prescription.'],
 year:2023,yearConfidence:'high',yearNote:'UK publisher lists the 2023 original; the US hardcover appeared in 2024 and the cited paperback in 2026.',
 T11:0,T12:0,themeNote:'T11: motherhood is not itself disease; ecology and political issues do not dominate the whole inquiry. T12: maternal development is central, with philosophy and politics auxiliary.',
 periodEnd:null,periodNote:'Contemporary research and personal experience serve a general developmental inquiry, not one bounded historical period.',
 evidence:[mother,'https://www.penguin.co.uk/books/443864/matrescence-by-jones-lucy/9781802061307','https://ci.nii.ac.jp/ncid/BD0803697X'],
 edition:edition(320,'9780593469309',mother,'Paperback',2026),
 domains:{SCI:domain(3,'Neuroscience and evolutionary/developmental biology are sustained sources.',[mother]),INS:domain(2,'Caregiving expectations and social support shape the account.',[mother])},
 mechanisms:[{id:'maternal-support-mismatch',domains:['SCI','INS'],roles:{SCI:'Pregnancy and early motherhood change bodily and psychological demands.',INS:'Work and caregiving arrangements determine the support available.'},statement:'Rapid developmental changes can produce distress when social expectations and support fail to adjust to the new demands.',scope:'The book’s account of intensive, isolated motherhood; not an independently validated universal causal estimate.',strength:2,confidence:'moderate',refs:[mother]}]
}),
scored(11,{
 eligibility:'A survival memoir interwoven with later therapeutic case reflection. Narrative inquiry predominates over a procedural treatment program.',
 reason:'Retain the non-vetoed decision: adaptation and choice under constraint offer modest transferable content. Clinical anecdotes justify limited causal credit, not universal treatment claims.',
 reassessment:'Read the prior g0117 section and publisher excerpt/description. Retain all ten attainments, the non-vetoed gate, T11=-10, T12=0 and original 2017. Correct the former low-confidence 2017 period endpoint to null: the publisher describes decades of life and later clinical cases, not a historical period ending at publication. Replace the old top-widget count with a fresh 32,849 total-global-rating aggregate. The resulting conclusion remains poor fit.',
 raw:packet[11].prior.raw,
 notes:['First-person recollection is evidence of experience; clinical success stories do not establish treatment efficacy.','Connects survival, adaptation and later therapy on a limited system scale.','Choice under severe constraint gives some portable reflection.','Therapeutic inference remains predominantly anecdotal.','Personal scenes are readable but not all advance a reusable explanation.','Trauma and adaptation remain enduring subjects.','Very little direct fit with technical and industrial systems.','Clinical practice and survivor experience give relevant authority.','The life story and later cases form a clear narrative arc.','Controlled personal narration is stronger than broad healing generalizations.'],
 year:2017,yearConfidence:'high',yearNote:'Original 2017 publication retained; the verified paperback is 2018.',
 T11:-10,T12:0,themeNote:'T11: Holocaust persecution and trauma are central. T12: political or military analysis is not the organizing purpose.',
 periodEnd:null,periodConfidence:'moderate',periodNote:'Correct the prior publication-year endpoint. The book links wartime experience, decades of recovery and later therapy without one closed central historical period.',
 evidence:['analysis/analysis_glaspbio_261019_0144.md#g0117',choice],
 edition:edition(336,'9781501130793',choice,'Paperback',2018),
 domains:{HEU:domain(2,'Reflects on interpretation, agency and habitual responses after trauma.',[choice])}
}),
scored(13,{status:'vetoed',veto:'V5',vetoConfidence:'high',
 eligibility:'Reflective letters, prayers and prose poems are presented as sincere personal and ethical expression, not an invented narrative. No technical instruction structure is evident; H1/H2 do not establish exclusion.',
 reason:'Spiritual healing, intrinsic sacredness and renewed faith are central rather than incidental. V5 applies to the devotional and activist orientation. This decision does not equate the author’s identity with an eligibility rule.',
 raw:[8,4,3,2,7,6,0,3,3,2],
 notes:['Sincere testimony provides little evidential support for universal claims of healing or sacredness.','Connects personal hurt and community relations, with little systems analysis.','Forgiveness offers reflection but few strategic models.','Prayer and affirmation do not explain causal pathways in detail.','The brief form limits repetition, though much content is expressive rather than informational.','The ethical concerns persist; the argument relies on belief.','The desired science, industry and quantitative domains are largely absent.','Psychotherapy and mediation experience support observation, not the spiritual premises.','The letter sequence sustains an emotional progression.','Deliberate lyrical expression is clear within its chosen form.'],
 year:2023,yearConfidence:'high',yearNote:'Publisher records the first paperback publication in August 2023.',
 T11:-10,T12:-10,themeNote:'T11: marginalized identity and civil-community injury are predominant contexts. T12: spiritual and ethical philosophy is central.',
 periodEnd:null,periodNote:'Contemporary and general reflections, not a bounded historical account.',
 evidence:[thom],edition:edition(176,'9780593594988',thom,'Paperback',2023),
 domains:{HEU:domain(1,'Some reflection on emotional interpretation and forgiveness; not a formal decision framework.',[thom])}
})
]);
