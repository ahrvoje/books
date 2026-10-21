import {save,fresh,domain,edition,observed} from './save-reviewed.mjs';
const feenberg='https://www.routledge.com/Questioning-Technology/Feenberg/p/book/9780203022313';
const beck='https://uk.sagepub.com/en-gb/asi/book/risk-society';
const berger='https://www.penguinrandomhouse.com/books/12390/the-social-construction-of-reality-by-peter-l-berger/9780385058988/';
const feyerabend='https://www.versobooks.com/en-gb/products/1041-against-method';
const fuller='https://us.macmillan.com/books/9780312174910/criticalpath/';
save([
fresh(92,{
 status:'vetoed',veto:'V5',vetoConfidence:'moderate',
 eligibility:'A sustained philosophical argument about technology and society, accessible beyond specialist training. It is neither fiction nor a procedure manual.',
 reason:'V5: the author frames the work as a political project to democratize technology, not simply an explanation of technical institutions. The author’s preface and chapter sequence establish that programmatic purpose. Counterfactual credit remains for substantive analysis; V2 is not inferred merely from left affiliation.',
 evidence:[feenberg,'https://www.researchgate.net/publication/296706069_Questioning_Technology','https://tirl.org/pc/readings/feenberg--questioning-technology_ch1.pdf','https://www.unm.edu/~ithomson/QuestTech.pdf'],
 raw:[13,13,9,8,7,8,6,4,2,2],
 notes:['Argues through cases and philosophical interpretation rather than broad causal tests.','Makes technical design, institutions and political authority interact.','Useful for identifying social choices embedded in designs.','Explains agency and design selection, with less detail on engineering constraints.','Substantive conceptual chapters, though terminology adds overhead.','Control over technology remains a durable issue.','Technology and institutional power fit directly.','Feenberg has established scholarly expertise in technology criticism.','The three-part progression is coherent but academic.','Conceptual distinctions are careful, with politically loaded framing.'],
 year:1999,yearConfidence:'high',yearNote:'The copyright page and Routledge record both identify the original 1999 edition.',
 T11:0,T12:-10,themeNote:'T11: environmentalism is one case domain, not the majority subject. T12: political philosophy of technology is central.',
 periodEnd:null,periodConfidence:'high',periodNote:'General argument using multiple cases, rather than one historical period.',
 edition:edition(272,'9780203022313',feenberg,'E-book',1999),
 domains:{ENG:domain(2,'Technical design is analyzed as a selection among social possibilities.',[feenberg]),INS:domain(3,'Institutional control over design is central.',[feenberg]),POL:domain(3,'Democratizing technical decision-making is the central political project.',[feenberg])},
 ...observed(92)
}),
fresh(93,{
 eligibility:'A broad explanatory social theory, not an occupational reference or a course-skills manual. The publisher addresses scholars and patient general readers.',
 reason:'Useful for thinking about the distribution and political interpretation of technical risk. Its sweeping transition thesis is more interpretive than quantitatively established; environmental-policy relevance alone does not establish an activism veto.',
 evidence:[beck,'https://uk.sagepub.com/sites/default/files/upm-assets/66827_book_item_66827.pdf','https://www.amazon.com/dp/0803983468'],
 raw:[12,14,9,8,7,8,4,5,2,1],
 notes:['Large social claims receive illustrative rather than decisive comparative tests.','Links technical production, institutions, inequality and political conflict.','Risk allocation and knowledge dependence transfer across institutions.','Explains how produced hazards alter responsibility and conflict.','Dense theoretical development contains some repetition.','Risk governance remains relevant beyond its original examples.','Technological risk fits, while ecological and social themes dominate.','Beck is a major contributor to sociological theory.','The three-part structure is clear despite abstract prose.','Memorable formulations sometimes obscure measurable distinctions.'],
 year:1986,yearConfidence:'high',yearNote:'SAGE explicitly identifies the German original as 1986; the English edition is 1992.',
 T11:-10,T12:-10,themeNote:'T11: ecological hazards are a central organizing concern. T12: political and social organization of risk is central, with technology analyzed through it.',
 periodEnd:null,periodConfidence:'high',periodNote:'A general diagnosis of modernity, not a bounded historical narrative; publication age handles the dated perspective.',
 edition:edition(272,'9780803983465','https://www.amazon.com/dp/0803983468','Paperback',1992),
 domains:{INS:domain(3,'Responsibility, expertise and institutional response organize the argument.',[beck]),POL:domain(3,'Distribution of risk reshapes political conflict.',[beck]),SCI:domain(2,'Scientific knowledge is needed to recognize and contest many hazards.',[beck]),PRD:domain(2,'Industrial production generates both wealth and associated risks.',[beck])},
 ...observed(93)
}),
fresh(104,{
 eligibility:'An explanatory argument about how everyday knowledge and institutions arise. It is theoretical but addresses a broad social question rather than teaching specialist procedures or functioning as a narrow technical reference.',
 reason:'Provides a durable model of institutionalization and legitimation. Treat the model as interpretive social theory, not proof that physical reality is arbitrary or that empirical claims are equally valid.',
 evidence:[berger,'https://search.worldcat.org/title/The-social-construction-of-reality-%3A-a-treatise-in-the-sociology-of-knowledge/oclc/1100386872','https://www.pengpedia.org/edition/the-social-construction-of-reality-peter-l-berger-and-thomas-luckmann-3445'],
 raw:[14,10,10,9,8,9,4,5,2,2],
 notes:['Coherent conceptual argument, but not a controlled empirical demonstration.','Connects interpersonal action, language, shared knowledge and institutions.','Useful for recognizing how conventions become accepted constraints.','Develops institutionalization, legitimation and socialization as linked processes.','A compact and sustained theoretical treatment.','Basic institutional processes remain durable.','Institutional power and models fit; physical production receives little treatment.','Both authors have strong standing in social theory.','The conceptual sequence is cumulative but demanding.','Terminology is deliberate, though easily overextended by readers.'],
 year:1966,yearConfidence:'high',yearNote:'First-edition library record and scanned printing history establish 1966; the current paperback is 1967.',
 T11:0,T12:-10,themeNote:'T11: no listed negative subject predominates. T12: philosophical social theory is central.',
 periodEnd:null,periodConfidence:'high',periodNote:'A general account of social knowledge and institutions with no single central historical period.',
 edition:edition(240,'9780385058988',berger,'Paperback',1967),
 unknownReason:'Publisher gives 240 total pages; Amazon lists 219, consistent with numbered-text rather than total-page reporting. Publisher total retained. No complete domain review claimed.',
 domains:{INS:domain(3,'Institutionalization and legitimation form the core explanatory account.',[berger]),HEU:domain(2,'Provides concepts for distinguishing socially maintained conventions from natural constraints.',[berger])},
 ...observed(104)
}),
fresh(115,{
 eligibility:'A polemical philosophical argument using scientific history, not a scientific training manual. Course use and difficult argument do not by themselves trigger H2.',
 reason:'A useful challenge to rigid methodological rules. Its historical examples do not justify treating every method as equally reliable; that overreach limits evidence and precision without establishing that the whole argument has no payload.',
 evidence:[feyerabend,'https://philpapers.org/rec/FEYAMT','https://anarcho-copy.org/libre/paul-feyerabend-against-method.pdf'],
 raw:[12,10,10,7,7,9,6,5,2,1],
 notes:['Selective historical counterexamples challenge universal rules but underdetermine stronger conclusions.','Connects scientific practice, historical context and epistemology.','Encourages checking whether methodological rules obstruct discovery.','Shows interactions between evidence and theory without a robust replacement model.','Substantial arguments coexist with digression and polemic.','Questions about scientific method remain durable.','Directly relevant to scientific reasoning, though little practical quantitative technique.','A major philosopher of science with sustained specialist engagement.','Provocative structure is engaging but less cumulative than a systematic account.','Rhetorical absolutism can exceed the narrower defensible argument.'],
 year:1975,yearConfidence:'high',yearNote:'The publisher identifies first book publication in 1975; earlier essays and later revisions do not reset the book date.',
 T11:0,T12:-10,themeNote:'T11: none of its negative topics predominates. T12: philosophy of science is the central subject.',
 periodEnd:null,periodConfidence:'high',periodNote:'Cross-period methodological argument; Galileo is an important case, not the sole central historical scope.',
 edition:edition(336,'9781844674428',feyerabend,'Paperback',2010),
 domains:{SCI:domain(3,'Scientific practice and discovery are the central case material.',[feyerabend]),HEU:domain(3,'Critiques fixed rules of inference and inquiry.',[feyerabend])},
 ...observed(115)
}),
fresh(116,{
 author:'R. Buckminster Fuller; Kiyoshi Kuromiya (adjuvant)',
 status:'vetoed',veto:'V5',vetoConfidence:'moderate',
 eligibility:'A broad synthesis and proposal about humanity’s technical future, not an engineering textbook or practical project-management manual despite the title.',
 reason:'V5: the book advances a global social and environmental redesign program. Its critical-path proposal and resource-allocation vision are central, so this is more than neutral engineering history. The counterfactual assessment credits its technical imagination while limiting speculative claims.',
 evidence:[fuller,'https://books.google.com/books/about/Critical_Path.html?id=UoXfmCOUcLAC','https://www.ratical.org/co-globalize/CriticalPath-1981.pdf'],
 raw:[9,14,8,6,5,7,6,4,1,1],
 notes:['Speculative prehistory and sweeping forecasts exceed the demonstrated evidence.','Integrates energy, resources, engineering, economics and political organization.','Resource efficiency and whole-system accounting suggest transferable questions.','Technical insights coexist with weakly established global causal claims.','Long autobiographical and speculative sections dilute the practical content.','Efficiency themes endure; specific future schemes age less well.','Engineering, resources and global scaling strongly match the domains.','Fuller’s design achievements lend authority but do not establish every social claim.','The argument ranges widely and can be hard to follow.','Coined terms and sweeping formulations reduce precision.'],
 year:1981,yearConfidence:'high',yearNote:'Macmillan explicitly distinguishes the first 1981 publication from the 1982 paperback.',
 T11:-10,T12:0,themeNote:'T11: environmental/resource survival is central to the redesign program. T12: technological and resource-system redesign remains central; political power is a major auxiliary layer.',
 periodEnd:null,periodConfidence:'high',periodNote:'Cross-period and forward-looking argument rather than a bounded historical account.',
 edition:edition(512,'9780312174910',fuller,'Paperback',1982),
 domains:{ENG:domain(3,'Design and technical capability are central to the proposed reconstruction.',[fuller]),ENE:domain(2,'Energy systems enter the world-resource proposal.',['https://books.google.com/books/about/Critical_Path.html?id=UoXfmCOUcLAC']),MAT:domain(3,'Material resource constraints organize the argument.',[fuller]),SCL:domain(3,'Global coordination and doing more with fewer resources are central.',[fuller]),POL:domain(2,'Power structures are analyzed as constraints on technical possibilities.',['https://www.ratical.org/co-globalize/CriticalPath-1981.pdf'])},
 ...observed(116)
})
]);
