import {save,scored,domain,edition,packet} from './reddit-save.mjs';
const stroke='https://www.penguinrandomhouse.com/books/304515/my-stroke-of-insight-by-jill-bolte-taylor/';
const rad='https://www.penguinrandomhouse.com/books/739852/rad-future-by-isabelle-boemeke/9780593716328/';
const bad='https://www.thenewpress.com/sites/default/files/catalogs/SPR%202025.pdf';
const earth='https://www.penguinrandomhouse.com/books/586541/the-uninhabitable-earth-by-david-wallace-wells/';
const will='https://www.simonandschuster.com/books/The-Will-to-Change/bell-hooks/9780743456081';
const willExcerpt='https://www.simonandschuster.com/books/The-Will-to-Change/bell-hooks/9780743480338';
save([
scored(15,{
 eligibility:'A scientist’s first-person account of stroke and recovery, with later reflection and advice. The narrative remains the main structure; it is not a clinical rehabilitation manual.',
 reason:'Retain the non-vetoed judgment and low confidence in its generalizations. The science-memoir exception and observed adaptation provide content, while universal left/right-brain prescriptions receive little causal credit.',
 reassessment:'Read the earlier g0616 section and compared it with the publisher’s account. Retain all ten raw attainments, H1/H2 pass, non-vetoed status, T11=-10, T12=0, original2006 and endpoint2004. The publisher explicitly gives a1996 stroke followed by eight years of recovery, improving endpoint confidence. Replace unknown Amazon count with6,599 global ratings on one verified product; O15 remains0. Replace incomplete2008 edition metadata with a verified224-page2009 paperback.',
 raw:packet[15].prior.raw,
 notes:['Direct experience is relevant testimony; one stroke cannot establish general mental prescriptions.','Links brain function, subjective experience and recovery, with limited wider institutional analysis.','Adaptation and caregiver observation offer some reuse outside the individual case.','The recovery sequence is informative; hemispheric generalizations remain weakly tested.','A short narrative contains useful observations but also inspirational extension.','Personal adaptation endures; specific popular-neuroscience claims need caution.','Science memoir has partial fit, with no strong industrial or strategic analysis.','Relevant neuroanatomical expertise does not validate every inference from personal experience.','The acute event and recovery create a clear chronological arc.','The distinction between felt experience and general brain theory is not always disciplined.'],
 year:2006,yearConfidence:'moderate',yearNote:'Retain the prior sourced first self-publication year2006. The publisher’s2008 trade release and2009 paperback do not reset it.',
 T11:-10,T12:0,themeNote:'T11: disease and recovery dominate. T12: philosophy is secondary to the scientific memoir.',
 periodEnd:2004,periodConfidence:'moderate',periodNote:'The central event occurred in1996 and the publisher gives eight years to recovery; use2004 as the inferred endpoint of the principal recovery narrative.',
 evidence:['analysis/analysis_glaspsci_261019_0144.md#g0616',stroke],
 edition:edition(224,'9780452295544',stroke,'Paperback',2009),
 domains:{SCI:domain(3,'Brain injury, function and recovery are sustained subjects.',[stroke]),HEU:domain(2,'Attention and interpretation are discussed through the recovery experience, with limited general validation.',[stroke])}
}),
scored(16,{author:'Isabelle Boemeke',status:'vetoed',veto:'V5',vetoConfidence:'moderate',
 eligibility:'A public narrative and argument about nuclear electricity, with science and history; not technical reactor training.',
 reason:'Correct the packet’s author to Isabelle Boemeke from the matching publisher and print product. V5 applies because the governing purpose is a campaign to adopt nuclear power as the answer to environmental crisis. This is not a veto of nuclear technology or an allegation that its technical claims are false.',
 raw:[12,11,9,7,8,6,6,2,3,1],
 notes:['The description promises scientific evidence but strongly favors one solution; independent claim verification is limited.','Connects reactors, energy supply, public fear and state decisions.','Risk perception and technology acceptance supply useful strategic questions.','Explains electricity generation and barriers, with less demonstrated comparison of system tradeoffs.','A compact public narrative keeps the argument accessible.','Nuclear fundamentals endure; future-abundance advocacy is less durable.','Energy and high technology strongly fit the desired subject areas.','A communicator and advocate has relevant access but less technical authority than a reactor specialist.','Science and history lead into a clear public-policy argument.','Promotional certainty and casual rhetoric reduce analytical precision.'],
 year:2025,yearConfidence:'high',yearNote:'Publisher gives August12,2025 as the first hardcover publication.',
 T11:0,T12:0,themeNote:'T11: environmental urgency motivates the argument, but nuclear electricity and its technological history are the principal subject. T12: energy technology is central; politics is an application.',
 periodEnd:null,periodNote:'Moves from nuclear history to current and future deployment; no single closed central historical period.',
 evidence:[rad,'https://www.kirkusreviews.com/book-reviews/isabelle-boemeke/rad-future/'],
 edition:edition(272,'9780593716328',rad,'Hardcover',2025),
 domains:{ENE:domain(3,'Nuclear electricity is the organizing subject.',[rad]),SCI:domain(2,'Nuclear science is explained for the public.',[rad]),ENG:domain(2,'Reactor designs and applications receive substantive treatment.',[rad]),POL:domain(2,'Cold War associations and public decisions shape deployment.',[rad]),HEU:domain(2,'Risk perception and public fear are recurring explanations.',[rad])},
 mechanisms:[{id:'nuclear-perception-deployment',domains:['ENE','POL','HEU'],roles:{ENE:'Reactors provide a possible electricity supply.',POL:'Public decisions authorize or restrict deployment.',HEU:'Association with weapons and accidents influences perceived danger.'},statement:'Risk associations can constrain political permission for deployment even when an advocate’s assessment of comparative energy risks favors nuclear power.',scope:'Boemeke’s stated explanation of barriers; this records her causal claim, not independent validation of every comparison.',strength:2,confidence:'moderate',refs:[rad]}]
}),
scored(17,{status:'vetoed',veto:'V5',vetoConfidence:'high',
 eligibility:'A public argumentative examination of ten laws. It is not legal practice instruction or a specialist reference.',
 reason:'The work organizes a repeal program around current American civil and political controversies. That explicit reform campaign is central, so V5 applies; the veto does not require treating all legal criticism as false.',
 raw:[12,8,6,6,8,5,2,4,3,1],
 notes:['Legal examples are concrete, but sweeping claims about legitimacy and motives reduce inferential restraint.','Connects legal design, representation and social outcomes, within a national frame.','Examining statutory incentives transfers modestly; proposals remain highly jurisdiction-specific.','Explains how selected rules create harms, with limited symmetrical treatment of tradeoffs.','Ten bounded cases keep the polemic concentrated.','Some legal mechanisms endure, but specific repeal priorities can age quickly.','Institutions and power overlap with interests; technical production systems are peripheral.','Legal training and sustained legal reporting give relevant authority.','The ten-law structure makes the argument easy to navigate.','Snark and categorical political labels reduce precision.'],
 year:2025,yearConfidence:'high',yearNote:'First publication March2025; publisher catalog and matched print product agree.',
 T11:-10,T12:-10,themeNote:'T11: American civil and racial issues predominate. T12: law and political power are central.',
 periodEnd:null,periodNote:'Current legal criticism uses earlier enactments as background, not one closed historical period.',
 evidence:[bad,'https://thenewpress.org/author/tnp_admin/page/2/','https://www.marcialpons.es/libros/bad-law/9781620978580/','https://www.amazon.com/dp/162097858X'],
 edition:{...edition(256,'9781620978580','https://www.amazon.com/dp/162097858X','Hardcover',2025),notes:'The final matching product and bookseller give256 pages. The earlier publisher/advance review figure224 is not used.'},
 domains:{INS:domain(3,'Statutes and representation rules form the book’s structure.',[bad]),POL:domain(3,'Legislative power and a reform program are central.',[bad])}
}),
scored(18,{status:'vetoed',veto:'V5',vetoConfidence:'high',
 eligibility:'A general-reader explanatory and argumentative account of projected climate effects; not fiction, a textbook or a technical modeling manual.',
 reason:'The publisher explicitly frames the book as an urgent environmental call to action, with future catastrophe driving the argument. V5 applies to the central activist purpose. No separate V1 finding is made from criticism of an earlier magazine article.',
 raw:[13,11,6,7,7,6,3,3,3,1],
 notes:['Draws on climate research, but its emphasis on severe possible outcomes can obscure probability and scenario distinctions.','Links physical change to food, migration, conflict and economic effects.','Cascading risk is a useful concept; the book supplies less operational decision analysis.','Connects stresses across systems, with uncertain quantitative causal links.','Many consequences broaden coverage but repeat the urgency argument.','Climate constraints endure; particular projections and rhetoric require updating.','Physical risk and systems effects partly fit; industrial mechanisms are less central.','Wallace-Wells is a journalist synthesizing specialist work rather than a climate researcher.','The sequence of consequences creates a strong cumulative narrative.','Vivid prose can blur the boundary between possible, likely and inevitable outcomes.'],
 year:2019,yearConfidence:'high',yearNote:'The original book appeared in2019. The2017 magazine article is antecedent material, not a prior edition; the paperback is2020.',
 T11:-10,T12:0,themeNote:'T11: environment and climate change dominate. T12: physical and environmental risks are central; politics and conflict are consequences.',
 periodEnd:null,periodNote:'A present and future risk argument, not a bounded historical account.',
 evidence:[earth,'https://www.penguinrandomhouse.com/the-read-down/the-must-read-books-of-2019'],
 edition:edition(384,'9780525576716',earth,'Paperback',2020),
 domains:{SCI:domain(3,'Physical climate change and its consequences organize the book.',[earth]),ECO:domain(2,'Economic disruption is a substantial downstream consequence.',[earth]),POL:domain(2,'Migration, conflict and collective response connect climate effects to politics.',[earth])}
}),
scored(19,{status:'vetoed',veto:'V5',vetoConfidence:'high',
 eligibility:'A sustained cultural and psychological argument with personal examples. It is not a stepwise therapy method despite its practical aspirations.',
 reason:'The opening chapter makes radical feminist transformation the central route to changing masculinity and intimate life. V5 applies to this ideological program. The text’s criticism of women’s complicity is acknowledged; no separate V2 finding is needed.',
 raw:[11,7,6,5,8,8,1,4,3,2],
 notes:['Experience and cultural readings support observations, but broad claims about all men or women exceed direct evidence.','Connects gender norms, family life and power without substantial material-system depth.','Emotional suppression and norm enforcement offer reusable questions about behavior.','Explains learned responses through social sanctions, with limited tests of alternatives.','A relatively short set of linked essays keeps the thesis concentrated.','The socialization problem is durable despite changing terminology.','Power and reasoning have only peripheral overlap with the desired domains.','Established cultural criticism provides interpretive authority, not experimental psychology evidence.','Personal cases lead into a clear recurring argument.','Memorable prose is controlled but often categorical.'],
 year:2004,yearConfidence:'high',yearNote:'The publisher’s original ebook records January6,2004 and the excerpt copyright is2004. The paperback followed in December2004.',
 T11:-10,T12:-10,themeNote:'T11: predominantly American gender relations and civil-cultural reform. T12: social power and normative philosophy are central.',
 periodEnd:null,periodNote:'General cultural argument with retrospective examples, not a single central historical period.',
 evidence:[will,willExcerpt],edition:edition(224,'9780743456081',will,'Paperback',2004),
 domains:{INS:domain(2,'Family and cultural norms sanction emotional conduct.',[willExcerpt]),HEU:domain(2,'Explores how suppression and interpretation shape emotional behavior.',[willExcerpt]),POL:domain(2,'Patriarchal power is the organizing political explanation.',[willExcerpt])}
})
]);
