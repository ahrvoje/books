import {packet,save,fresh,domain,edition,observed} from './save-reviewed.mjs';
const culture='https://books.google.com/books/about/The_Culture_of_Cities.html?id=gxg0AQAAIAAJ';
const utopia='https://www.gutenberg.org/files/75654/75654-h/75654-h.htm';
const dude='https://dudeism.com/thedudedeching/';
const zen='https://groveatlantic.com/book/the-zen-teaching-of-huang-po/';
const efficacy='https://uhpress.hawaii.edu/title/a-treatise-on-efficacy-between-western-and-chinese-thinking/?attribute_pa_format=hardback';
const gall='https://mail.panarchy.org/gall/systemantics.html';
const records=[
fresh(59,{
 eligibility:'Broad historical interpretation of urban civilization for general readers, not a planning procedure manual. Its normative planning conclusions do not make the whole historical account a political manifesto.',
 reason:'Useful synthesis of urban form, economic activity and institutions. Selective civilizational interpretation and the strong urban focus reduce fit; no serious veto is established from the inspected material.',
 evidence:[culture,'https://books.google.com/books?id=SkMFAQAAIAAJ','https://openlibrary.org/books/OL21159883M/The_culture_of_cities','https://booksrun.com/9780156233019-the-culture-of-cities'],
 raw:[14,14,10,9,7,8,4,5,3,2],
 notes:['Extensive historical interpretation, with selective normative framing rather than controlled comparisons.','Relates city form to production, commerce, authority and social organization.','Offers reusable questions about spatial constraints and institutional design.','Explains how protection, concentration and economic organization reshape settlements.','Large comparative scope earns much of the length; interpretation sometimes expands beyond evidence.','Urban dependence and concentration remain durable issues.','Infrastructure and institutions fit, but urban history dominates.','Mumford brings substantial urban and technological scholarship.','A cumulative historical arc makes the comparisons intelligible.','Forceful prose is clear, though evaluative language can overstate distinctions.'],
 year:1938,yearConfidence:'high',yearNote:'Original Harcourt, Brace edition is dated 1938 in the digitized bibliographic record.',
 T11:-10,T12:0,themeNote:'T11: urban history and urban form are central. T12: political power is one explanatory layer, not the main subject.',
 periodEnd:null,periodConfidence:'high',periodNote:'Comparative urban history spanning medieval to contemporary cities; no single bounded central period.',
 edition:edition(640,'9780156233019','https://booksrun.com/9780156233019-the-culture-of-cities','Paperback',1970),
 domains:{INS:domain(3,'City institutions organize collective life and development.',[culture]),PRD:domain(2,'Industrial organization is compared across urban forms.',[culture]),TRD:domain(2,'Commercial activity helps explain urban concentration.',[culture]),POL:domain(2,'Political authority shapes urban form and administration.',[culture])},
 ...observed(59)
}),
fresh(60,{
 eligibility:'Nonfiction history and criticism of utopian writings; discussing fictional commonwealths does not make this book fiction. Its main structure is comparative interpretation, not technical training.',
 reason:'A useful account of how imagined social orders encode material and institutional assumptions. The later reform argument is explicit but does not erase the comparative criticism or establish allegiance-dependent reasoning.',
 evidence:[utopia,'https://www.berkshirepublishing.com/title/story-of-utopias-100th-anniversary-edition/','https://www.northshire.com/book/9781614720508','https://www.wook.pt/en/livro/the-story-of-utopias-lewis-mumford/27241734'],
 raw:[14,12,9,7,8,8,3,4,3,2],
 notes:['Direct engagement with named texts supports the comparisons; the survey is selective.','Links imagined institutions, labor, property and industrial organization.','Helps expose hidden assumptions in ideal-system proposals.','Distinguishes escape from reconstruction but gives limited empirical causal testing.','The compact survey sustains its comparative purpose.','Utopian assumptions remain relevant beyond the original political moment.','Institutional design and industrialization provide some fit.','An influential early synthesis by a major social critic.','The chronological comparison leads clearly into explicit criticism.','Interpretive distinctions are memorable, though broad.'],
 year:1922,yearConfidence:'high',yearNote:'The centenary publisher explicitly dates first publication to 1922; the inspected Gutenberg text is the 1923 British edition.',
 T11:0,T12:-10,themeNote:'T11: no listed negative theme predominates. T12: social and political philosophy is central.',
 periodEnd:null,periodConfidence:'high',periodNote:'Cross-period comparison from Plato through modern utopias, not one central historical episode.',
 edition:edition(324,'9781614720508','https://www.wook.pt/en/livro/the-story-of-utopias-lewis-mumford/27241734','Hardcover',2022),
 domains:{INS:domain(3,'Compares institutional arrangements in proposed societies.',[utopia]),ECO:domain(2,'Property, division of labor and industrial organization are recurrent comparisons.',[utopia]),HEU:domain(2,'Uses the escape/reconstruction distinction to examine social models.',[utopia])}
}),
fresh(66,{
 author:'Oliver Benjamin; The Church of the Latter-Day Dude',
 status:'vetoed',veto:'V5',vetoConfidence:'high',
 eligibility:'A humorous religious and philosophical adaptation with explanatory essays, rather than a fictional narrative or a technical training manual.',
 reason:'V5: the issuing organization explicitly presents this adaptation as its religious scripture. The playful treatment does not change its central religious purpose. Scores below are counterfactual.',
 evidence:[dude,'https://aui.me/text/the-dude-de-ching/4/','https://search.worldcat.org/title/The-dude-de-ching-%3A-a-Dudeist-holy-book-inspired-by-the-Tao-te-ching-of-Lao-Tzu-and-the-Big-Lebowski-of-Joel-and-Ethan-Coen/oclc/702692231'],
 raw:[8,3,4,2,5,6,0,2,2,1],
 notes:['Relies on interpretive analogy and spiritual assertion, not tested claims.','Connects Taoist themes to one film, not relevant material systems.','Some reflections on restraint transfer, but offer little strategic detail.','Metaphor replaces causal explanation.','Short verses gain commentary but repeat a narrow outlook.','Some philosophical themes endure; film references date the presentation.','No substantial science, production or infrastructure account.','The author knows his own movement; independent scholarly authority is limited.','The verse-and-commentary arrangement is easy to follow.','Humor helps recall but reduces conceptual precision.'],
 year:2010,yearConfidence:'high',yearNote:'The author dates the original publication to 2010 and distinguishes the rewritten and annotated 2016 editions.',
 T11:0,T12:-10,themeNote:'T11: the film supplies an idiom, not predominantly celebrity history. T12: religious philosophy is central.',
 periodEnd:null,periodConfidence:'high',periodNote:'Timeless religious reflection, not a history of a defined period.',
 edition:edition(220,'9781539451051','https://www.amazon.com/dp/1539451054','Paperback',2016),
 ...observed(66)
}),
fresh(67,{
 author:'Huang Po; P’ei Hsiu (compiler); John Blofeld (translator)',
 status:'vetoed',veto:'V5',vetoConfidence:'high',
 eligibility:'Collected religious sermons, dialogues and anecdotes. It primarily expounds a doctrine rather than teaching a procedural specialist method; the hard exclusions do not apply.',
 reason:'V5: a primary Zen religious text, built around the doctrine of One Mind and awakening. Its historical and philosophical importance does not override the explicit religious-book veto.',
 evidence:[zen,'https://books.google.com/books/about/The_Zen_Teaching_of_Huang_Po.html?id=2a3SDwAAQBAJ','https://mail.selfdefinition.org/zen/huang-po/transmission/publishing-notes.htm'],
 raw:[8,3,4,2,7,9,0,4,2,1],
 notes:['Preserves attributed teachings but does not empirically establish its metaphysical claims.','Little integration of the relevant material or institutional domains.','Questions attachment to concepts, with limited operational strategic guidance.','Paradox and direct assertion do not supply testable causal models.','The compact dialogues keep the doctrinal focus.','A historically durable philosophical and religious text.','No substantive technological or quantitative domain fit.','The teacher and translation have established standing within this tradition.','Brief exchanges are memorable, though deliberately difficult.','Translation is controlled; core claims remain intentionally paradoxical.'],
 year:857,yearConfidence:'low',yearNote:'Approximate compilation anchor: the transmitted collection carries P’ei Hsiu’s preface dated 857. Textual transmission may be later; Blofeld’s 1958 translation does not reset composition age.',
 T11:0,T12:-10,themeNote:'T11: not predominantly one nation’s history. T12: religious philosophy is central.',
 periodEnd:null,periodConfidence:'high',periodNote:'Doctrinal teaching rather than an account of Tang-period events.',
 edition:edition(144,'9780802150929',zen,'Paperback',1959),
 ...observed(67)
}),
fresh(68,{
 eligibility:'A sustained comparative philosophical argument about action and effectiveness, not a military procedure manual or training course.',
 reason:'Strong material for comparing deliberate plans with exploiting a situation’s tendencies. Treat the China/West contrast as an interpretive model, not a universal empirical division of civilizations.',
 evidence:[efficacy,'https://www.grasset.fr/livre/traite-de-lefficacite-9782246540618/','https://ci.nii.ac.jp/ncid/BA68752475'],
 raw:[14,9,12,8,8,9,4,5,2,2],
 notes:['Close textual interpretation supports the contrast; civilizational generalization needs caution.','Connects strategic action, political practice and philosophical assumptions.','A reusable distinction between forcing outcomes and shaping conditions.','Explains effectiveness through situation, transformation and timing.','A concentrated argument earns its short length.','The strategic comparison is independent of current events.','Strategic reasoning fits; technical production mechanisms are sparse.','Jullien has strong expertise in Chinese thought.','The comparison accumulates coherently but is conceptually demanding.','Fine distinctions are central, although the binary framing simplifies.'],
 year:1996,yearConfidence:'moderate',yearNote:'Bibliographic records identify the French original as 1996; Grasset’s current page dates the print release 8 January 1997. Use 1996 production/copyright year, with this one-year discrepancy retained for review.',
 T11:0,T12:-10,themeNote:'T11: neither national history nor another negative theme predominates. T12: strategy and philosophy are the central subjects.',
 periodEnd:null,periodConfidence:'high',periodNote:'Cross-period philosophical comparison, not a single historical narrative.',
 edition:edition(216,'9780824828301',efficacy,'Paperback',2004),
 domains:{STR:domain(3,'Effectiveness through positioning, timing and shaping conditions is central.',[efficacy]),MIL:domain(2,'Military action supplies substantive comparative cases.',[efficacy]),POL:domain(2,'Political action and diplomacy test the contrast.',[efficacy]),HEU:domain(3,'Offers a conceptual heuristic contrasting planned action and situational transformation.',[efficacy])},
 ...observed(68)
}),
fresh(81,{
 title:'Systemantics / The Systems Bible',
 eligibility:'An aphoristic, partly satirical explanatory essay about failure in systems. Despite “handbook” language in early subtitles, its organizing purpose is criticism and general heuristics, not teaching a specialist procedure.',
 reason:'High strategic usefulness from recurring failure patterns, but the “laws” are experience-based heuristics, not established universal scientific laws. The limits are reflected in evidence and causal-depth scores.',
 evidence:[gall,'https://books.google.com/books/about/General_Systemantics.html?id=6FgeAAAAMAAJ','https://openlibrary.org/books/OL3571874M/The_Systems_Bible','https://openlibrary.org/books/OL4904457M/Systemantics'],
 raw:[11,13,13,8,8,9,6,3,3,1],
 notes:['Anecdotes and humorous axioms provide weaker support than systematic testing.','Relates technical systems, administrative behavior, information and incentives.','Incremental growth and unintended effects are widely reusable heuristics.','Identifies feedback and failure patterns without a fully specified predictive model.','Compact laws and examples deliver substantial conceptual material.','Complexity and institutional failure remain durable problems.','Systems design and organizational constraints fit closely.','The synthesis has influence, but authorial authority does not validate every maxim.','Aphorisms make the argument memorable and accessible.','Deliberately sweeping jokes blur the scope of some claims.'],
 year:1975,yearConfidence:'high',yearNote:'The 1975 General Systemantics original is recorded in Google Books and the 1977 library edition note; 2002/2003 is the expanded third edition.',
 T11:0,T12:0,themeNote:'T11: no listed negative theme dominates. T12: system behavior and design are central; institutional power is an application.',
 periodEnd:null,periodConfidence:'high',periodNote:'General systems argument using scattered examples, not a bounded historical period.',
 edition:edition(316,'9780961825171','https://www.amazon.com/dp/0961825170','Paperback',2003),
 unknownReason:'The 2003 product reports 316 pages; the 2002 library record describes xxv + 314 numbered pages. The stored edition uses the observed 2003 product, not a sum of conflicting pagination conventions. Domain review is partial.',
 domains:{ENG:domain(3,'Examines design and failure of complex working systems.',[gall]),INS:domain(3,'Organizational goals and administrative behavior can diverge from actual system performance.',[gall]),HEU:domain(3,'Failure-pattern heuristics are the book’s main intellectual device.',[gall])},
 ...observed(81)
})
];
const b=packet[70];
records.push({id:b.id,title:b.title,author:b.author,status:'excluded',confidence:'moderate',exclusion:'H2',eligibility:'The author’s preview states a practical aim of awakening the reader through techniques drawn from Gurdjieff and other disciplines. The diagnostic chapters culminate in a substantial practice sequence on observation, remembering, prayer, teachers and choosing a path.',reason:'H2: its main purpose is guidance for applying a spiritual-development method. This takes precedence over a possible religious veto. The philosophical diagnostic material makes this a mixed case, so confidence is moderate.',evidence:['https://journals.macewan.ca/lucidity/article/download/729/671/2172','https://www.everand.com/book/353550926/Waking-Up-Overcoming-the-Obstacles-to-Human-Potential',...b.appearances.flatMap(a=>a.commentIds.map(id=>`https://news.ycombinator.com/item?id=${id}`))],reassessment:'New source work. Author preview and complete chapter sequence inspected; no score assigned.'});
save(records);
