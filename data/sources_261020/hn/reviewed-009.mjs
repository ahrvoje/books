import {save,fresh,domain,edition} from './save-reviewed.mjs';
const loop='https://www.hachettebookgroup.com/titles/douglas-r-hofstadter/i-am-a-strange-loop/9780465030798/';
const slit='https://www.penguinrandomhouse.com/books/550744/through-two-doors-at-once-by-anil-ananthaswamy/';
const ancient='https://www.penguinrandomhouse.com/books/38486/the-ancient-engineers-by-l-sprague-de-camp/';
const eye='https://mitpress.mit.edu/9780262560788/engineering-and-the-minds-eye/';
const simon='https://mitpress.mit.edu/9780262537537/the-sciences-of-the-artificial/';
const failure='https://www.hachettebookgroup.com/titles/dietrich-dorner/the-logic-of-failure/9780201479485/';
save([
fresh(53,{
 eligibility:'General philosophical argument about selfhood and symbols, using autobiographical material. No technical training structure.',
 reason:'Levels of description and self-reference offer conceptual value. Analogies do not establish an empirical theory of consciousness; no serious veto established on the inspected evidence.',
 raw:[13,10,8,7,6,8,5,5,3,2],
 notes:['Analogical argument has limited empirical verification.','Physical, symbolic and personal levels connect.','Levels of description are useful but weakly operational.','Feedback is explanatory scaffolding rather than a tested neural mechanism.','Personal passages and repetition lower density.','The identity problem remains durable.','Formal and computational ideas fit partially.','Hofstadter has relevant cognitive-science authority.','Personal and conceptual threads provide clear structure.','Careful examples clarify difficult concepts.'],
 year:2007,yearConfidence:'high',yearNote:'First-edition university library record states 2007; the publisher paperback is 2008.',
 periodEnd:null,periodConfidence:'high',periodNote:'General consciousness argument, not historical narration.',
 T11:0,T12:-10,themeNote:'Philosophy of selfhood is central, triggering T12. Neither disease nor American social history dominates the personal examples.',
 evidence:[loop,'https://library.usi.edu/record/320228'],
 edition:edition(436,'ISBN:9780465030798',loop,'Paperback',2008),
 domains:{QNT:domain(2,'Self-reference and levels of formal representation support the central argument.',[loop]),SCI:domain(2,'The account connects brains, matter and consciousness, with speculative limits.',[loop])}
}),
fresh(54,{
 eligibility:'Narrative explanation of quantum experiments and their interpretation for nonspecialists, not a physics textbook.',
 reason:'A focused experiment-based survey has value, but a QFT researcher gains limited novelty or strategic utility. No serious veto established.',
 raw:[17,8,5,9,7,8,7,4,3,2],
 notes:['Experimental cases support the account; interpretation remains open.','The synthesis stays mostly within physics.','Much of the explanatory content is familiar to this reader.','Experimental distinctions supply real causal constraints.','Popular exposition reduces density for an expert.','Core experiments endure while frontier details age.','Physics fits directly.','Ananthaswamy has relevant science-reporting experience.','One experimental motif gives a clear narrative.','Competing interpretations can be separated without false resolution.'],
 year:2018,yearConfidence:'high',yearNote:'Publisher lists the original ebook in August 2018; 2019 is paperback publication.',
 periodEnd:null,periodConfidence:'moderate',periodNote:'A cross-period explanation of an ongoing experimental problem; no single central historical episode.',
 T11:0,T12:0,themeNote:'Quantum experiments dominate; interpretive philosophy is auxiliary.',
 evidence:[slit,'https://openlibrary.org/books/OL26974487M/Through_two_doors_at_once'],
 edition:edition(304,'ISBN:9781101986103',slit,'Paperback',2019),
 domains:{SCI:domain(3,'The sustained account compares quantum experiments and interpretations.',[slit])}
}),
fresh(57,{
 eligibility:'Historical narrative of invention and building across civilizations. The author’s fiction career does not make this nonfiction work a novel or a training manual.',
 reason:'Material constraints and accumulated invention offer useful historical payload. The older popular synthesis needs caution about superseded details; no specific serious central failure established.',
 confidence:'low',raw:[14,13,10,8,7,8,7,3,3,1],
 notes:['Older synthesis and uneven reconstruction limit confidence.','Engineering, resources and political demands connect.','Constraint-driven invention provides reusable examples.','Methods are explained more than systematically compared.','Numerous historical facts dilute mechanism.','Basic material constraints endure.','Engineering history fits directly.','Technical training supports the author, but not expertise in every civilization.','Civilizational chapters are readable.','Broad historical generalization reduces precision.'],
 year:1963,yearConfidence:'high',yearNote:'The contemporary 1963 Caltech notice identifies the new Doubleday work; later paperbacks do not reset origin.',
 periodEnd:1500,periodConfidence:'low',periodNote:'Approximate Renaissance endpoint for the explicitly ancient-to-Renaissance history. Exact final-event year is unverified; the age deduction is capped regardless.',
 T11:0,T12:0,themeNote:'Cross-civilization engineering is central; military structures and rulers supply applications.',
 evidence:[ancient,'https://books.google.com/books/about/The_Ancient_Engineers.html?id=cauMt9vJLs0C','https://calteches.library.caltech.edu/2227/1/books.pdf'],
 edition:edition(480,'ISBN:9780345482877',ancient,'Paperback',1995),
 domains:{ENG:domain(3,'Building and mechanical design across civilizations sustain the narrative.',[ancient]),INN:domain(2,'The historical progression follows inventions and their adoption.',['https://calteches.library.caltech.edu/2227/1/books.pdf'])}
}),
fresh(64,{
 eligibility:'Historical and argumentative essay on how engineers think. It does not teach drawing or design procedures.',
 reason:'The gap between mathematical models and visual knowledge is directly useful. The critique of engineering education remains an argument, not proof that analysis is dispensable; no serious veto.',
 raw:[17,12,13,10,8,9,7,5,2,2],
 notes:['Historical cases support the thesis, with selection limits.','Visual reasoning, technical models and education connect.','Model limits and tacit knowledge transfer widely.','Cases explain why formal models miss design conditions.','Illustrations and examples mostly advance the argument.','The distinction between model and object endures.','Engineering judgment fits directly.','Ferguson combines engineering and historical experience.','The essay is cumulative but demanding.','Concrete contrasts support clear distinctions.'],
 year:1992,yearConfidence:'high',yearNote:'MIT Press identifies the original hardcover date as August 1992.',
 periodEnd:null,periodConfidence:'high',periodNote:'A general argument illustrated across five centuries, not one central period.',
 T11:0,T12:0,themeNote:'Engineering cognition dominates; educational criticism is auxiliary.',
 evidence:[eye,'https://books.google.com/books/about/Engineering_and_the_Mind_s_Eye.html?id=9OCxQgAACAAJ'],
 edition:edition(258,'ISBN:9780262560788',eye,'Paperback',1994),
 domains:{ENG:domain(3,'Engineering design and model limitations sustain the account.',[eye]),HEU:domain(3,'Visual and nonverbal reasoning are the central explanatory subject.',[eye])},
 mechanisms:[{id:'visual-design',domains:['ENG','HEU'],roles:{ENG:'Design under physical constraints',HEU:'Visual and nonverbal reasoning'},statement:'Visual knowledge supplies design information that mathematical models alone can omit.',scope:'Historical engineering-design cases',strength:3,confidence:'moderate',refs:[eye]}]
}),
fresh(88,{
 eligibility:'A broad scientific argument about designed systems, originating in lectures. It proposes an explanatory framework rather than a specialist design curriculum.',
 reason:'Bounded adaptation and common structure across artificial systems fit well. The physical-symbol-system thesis remains a contestable claim, not a proven general law; no serious veto established.',
 raw:[17,16,13,10,8,9,7,5,2,2],
 notes:['Clear models support explanation, with broad theoretical claims unsettled.','Computing, economics, organizations and design connect.','Bounded adaptation offers reusable models.','Interfaces and system structure provide explicit explanation.','Compact lectures are dense but abstract.','Design constraints remain durable.','Computing and engineering fit directly.','Simon has direct research authority across the main fields.','The conceptual sequence is coherent but demanding.','Definitions and model distinctions are precise.'],
 year:1969,yearConfidence:'high',yearNote:'MIT’s first-hardcover record states January 1969; the 1996 third edition and 2019 reissue do not reset origin.',
 periodEnd:null,periodConfidence:'high',periodNote:'General theory of artificial systems, not a bounded historical account.',
 T11:0,T12:0,themeNote:'Computing and designed systems are central. Philosophy of science is the framework rather than the dominant separate subject.',
 evidence:[simon,'https://mitpress.mit.edu/9780262190510/the-sciences-of-the-artificial/'],
 edition:edition(256,'ISBN:9780262537537',simon,'Paperback',2019),
 domains:{CMP:domain(3,'Artificial intelligence and information processing are major explanatory cases.',[simon]),ENG:domain(3,'Design and artificial systems form the central framework.',[simon]),INS:domain(2,'Business firms and organizations are substantial applications.',[simon]),ECO:domain(2,'Economic systems are explicitly integrated into the argument.',[simon])}
}),
fresh(95,{
 eligibility:'A sustained explanation of human error using reported simulation experiments. Practical conclusions follow the causal account; it is not mainly a specialist procedure or training curriculum.',
 reason:'Feedback, time delays and narrow goals explain reusable failure patterns. Simulation behavior does not establish universal real-world performance; no serious veto.',
 raw:[17,14,14,11,8,9,6,5,3,2],
 notes:['Experiments support the mechanisms, with external-validity limits.','Cognition, models and complex management interact.','Feedback-aware judgment transfers widely.','Interacting consequences and delays explain failures.','Compact experimental cases support density.','The reasoning errors are durable.','Modeling and strategic risk fit well.','Dörner conducted the relevant cognitive research.','Experiments create a clear explanatory sequence.','Specific failure patterns support precision.'],
 year:1989,yearConfidence:'high',yearNote:'Rowohlt explicitly dates the first German edition to 1989; the 1996 English translation is later.',
 periodEnd:null,periodConfidence:'high',periodNote:'General decision-error explanation; dated examples are illustrative.',
 T11:0,T12:0,themeNote:'Cognitive modeling is central. Urban planning, disease and policy are examples rather than dominant themes.',
 evidence:[failure,'https://www.rowohlt.de/buch/dietrich-doerner-die-logik-des-misslingens-9783644011618','https://iucat.iu.edu/iub/1060496'],
 edition:edition(240,'ISBN:9780201479485',failure,'Paperback',1997),
 domains:{HEU:domain(3,'The full account explains recurrent reasoning errors.',[failure]),QNT:domain(2,'Computer simulations and dynamic models provide the experimental framework.',[failure]),STR:domain(2,'Planning under interacting consequences is a substantial application.',[failure])},
 mechanisms:[{id:'feedback-blindness',domains:['HEU','QNT','STR'],roles:{HEU:'Narrow goals and simplified mental models',QNT:'Dynamic simulations with interacting variables',STR:'Planning decisions and delayed consequences'},statement:'Local decisions based on simplified models can accumulate delayed adverse effects in interacting systems.',scope:'Dörner’s simulation-based decision studies',strength:3,confidence:'moderate',refs:[failure]}]
})
]);
