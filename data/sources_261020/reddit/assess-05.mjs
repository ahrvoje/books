import {fresh,save,unknownAmazon,enrichment,edition} from './assessment-utils.mjs';
const spy='https://www.penguinrandomhouse.com/books/253399/the-spy-and-the-traitor-by-ben-macintyre/9781101904213/';
const fate='https://www.bloomsbury.com/us/hour-of-fate-9781635578447/';
const greek='https://books.google.com/books/about/The_Greek_Way.html?id=BgRKAQAAIAAJ';
const critique='https://www.thenation.com/article/culture/edith-hamilton-classics/';
const work='https://books.google.com/books?id=FlWNEAAAQBAJ';
const mummy='https://openlibrary.org/books/OL358977M/The_mummies_of_U%CC%88ru%CC%88mchi';
const genes='https://www.mpg.de/17737592/the-surprising-origins-of-the-tarim-basin-mummies';
const cat='https://www.penguinrandomhouse.com/books/92253/catastrophe-by-david-keys/';
const couney='https://www.penguinrandomhouse.com/books/318587/the-strange-case-of-dr-couney-by-dawn-raffel/';
const potato='https://yalebooks.yale.edu/book/9780300171457/potato/';
const lydia='https://profilebooks.com/work/the-disappearance-of-lydia-harvey/';
const scoff='https://books.google.com/books/about/Scoff.html?id=CxXnDwAAQBAJ';
const aristo='https://www.penguin.co.uk/books/358548/aristocrats-by-tillyardstella/9780099477112';
save([
fresh(36,{
eligibility:'Historical espionage narrative for general readers; tradecraft details support the story rather than teach a specialist procedure.',
reason:'Information asymmetry, institutional distrust and escalation risk provide a transferable payload. Hero-centered narrative and secret-source access limit verification but do not establish a serious veto.',
raw:[15,11,10,8,7,8,4,3.5,3,1.5],
notes:['Secret sources and retrospective testimony bound E15.','Intelligence agencies, diplomacy and nuclear risk support S11.','Trust and information failures offer U10.','Agency incentives and leakage explain events, supporting M8.','Suspense and personal detail reduce D to7.','Intelligence coordination remains durable, giving R8.','Strategic risk fits F4; industrial systems are peripheral.','Macintyre has substantial intelligence-history experience, supporting A3.5.','The recruitment and escape arc supports N3.','Clear operational detail supports P1.5 without full source audit.'],
year:2018,yearConfidence:'high',yearNote:'Publisher lists original ebook September18,2018; selected paperback is2019.',
T11:0,T12:-10,themeNote:'A transnational ColdWar intelligence story, not single-nation history; central intelligence independently triggers T12.',
periodEnd:1985,periodConfidence:'high',periodNote:'The central operation culminates in Gordievsky’s1985escape, as the publisher states.',
amazon:unknownAmazon(36,'research-d-1.json'),evidence:[spy],
enrichment:enrichment(spy,[['MIL',3,'Clandestine intelligence and nuclear-risk context are central.'],['INS',2,'Agency distrust and information sharing affect events.'],['STR',2,'Incomplete information shapes strategic threat perception.']],edition(384,'ISBN:9781101904213',spy,'Paperback',2019))
}),
fresh(37,{
eligibility:'Narrative economic and political history, not a finance manual or specialist legal reference.',
reason:'Railroad concentration, antitrust action and fuel supply connect capital and state capacity. The American political-financial emphasis reduces topic fit without creating an automatic veto.',
raw:[15,13,10,8,7,8,4,3.5,2.5,1.5],
notes:['Archival reporting supports E15; a personality-centered case limits inference.','Railroads, coal, banking and antitrust support S13.','Concentration and crisis bargaining offer U10.','Supply disruption and institutional response support M8.','Biographical detail lowers D to7.','Corporate power and crisis coordination remain durable, giving R8.','Infrastructure constraints fit partly, but political finance dominates F4.','Berfield brings relevant investigative reporting, supporting A3.5.','The conflict between Morgan and Roosevelt supports N2.5.','Specific events support P1.5 with limited full-text review.'],
year:2020,yearConfidence:'high',yearNote:'Bloomsbury identifies the first hardback May5,2020 and paperback May10,2022.',
T11:-10,T12:-10,themeNote:'American history and a political figure trigger T11. Political power and finance independently trigger T12.',
periodEnd:1904,periodNote:'The central Northern Securities antitrust case and1902coal-strike crisis culminate in the1904decision; later crisis material is context. Approximate assessment.',
amazon:unknownAmazon(37,'research-d-1.json'),evidence:[fate,'https://www.bloomsbury.com/in/hour-of-fate-9781635572490/'],
enrichment:enrichment(fate,[['FIN',3,'Morgan’s financing and corporate control are central.'],['INS',3,'Antitrust and labor settlement alter feasible conduct.'],['LOG',2,'Railroads and coal supply create economic leverage.']],edition(416,'ISBN:9781635578447',fate,'Paperback',2022))
}),
fresh(38,{
status:'vetoed',veto:['V2'],vetoConfidence:'moderate',
eligibility:'Interpretive essays on Greek thought and literature, not fiction or technical classroom instruction.',
reason:'The central contrast assigns cultural superiority to a unified Greek West over an undifferentiated East. Classicist Emily Wilson identifies explicit passages and missing counterevidence. This supports V2 at moderate confidence; the counterfactual score preserves the literary strengths.',
raw:[8,8,5,4,7,7,2,3,3,1],
notes:['Unqualified cultural binaries and weak sourcing sharply limit E8.','Literature, politics and thought connect within a selective civilization frame, giving S8.','Some conceptual comparisons transfer, but the cultural hierarchy limits U5.','Appeals to a national spirit substitute for mechanisms, giving M4.','Compact essays offer D7 despite unsupported generalization.','Literary interpretation has durable interest, giving R7.','Ancient culture supplies little industrial or technical fit, giving F2.','Classical-language training supports A3 but not authority over all compared civilizations.','The essays have a clear memorable N3 structure.','Rhetorical clarity coexists with imprecise categories, giving P1.'],
year:1930,yearConfidence:'high',yearNote:'Google Books identifies the original1930Norton volume.',
T11:-10,T12:-10,themeNote:'Single-civilization Greek history triggers T11; philosophy and political ideals are central enough for T12.',
periodEnd:-300,periodNote:'Approximate conservative endpoint for the classical Greek cultural focus. The exact endpoint is uncertain but all plausible ancient dates reach the H13 cap.',
amazon:unknownAmazon(38,'research-d-1.json'),evidence:[greek,critique],
enrichment:enrichment(greek,[['INS',1,'Ancient political and cultural institutions form part of the interpretation.']],null,[],'No format-specific extent verified. The cultural-superiority thesis is retained as a serious limitation, not as domain evidence.')
}),
fresh(39,{
title:"Women's Work: The First 20,000 Years: Women, Cloth, and Society in Early Times",
eligibility:'A broad archaeological account of textile production and social organization. Distinct from Barber’s specialist Prehistoric Textiles; this work is not principally a technical reference or weaving course.',
reason:'Production constraints and division of labor provide explanatory mechanisms. Reconstructing ancient practice involves uncertainty, but the topic alone does not establish activism or a veto.',
raw:[16,12,9,9,8,8,5,4,2.5,1.5],
notes:['Material and linguistic evidence support E16 while reconstruction remains uncertain.','Textile production and social organization support S12.','Production constraints and labor allocation offer U9.','Practical constraints help explain task organization, supporting M9.','A focused textile history supports D8.','Ancient production mechanisms remain durable, giving R8.','Production and craft technology fit F5 with little high technology.','Barber has directly relevant textile-archaeology expertise, supporting A4.','A long chronological explanation supports N2.5.','Material distinctions support P1.5 with bounded prose review.'],
year:1994,yearNote:'The library and publisher-supplied records distinguish original1994from the1995paperback.',
T11:0,T12:0,themeNote:'Early textile production and social organization are central; women’s work is not by itself a civil-movement theme. No T12 topic predominates.',
periodEnd:500,periodNote:'Library subject classification identifies women’s history to500. Use this broad upper boundary at low confidence; H13 reaches its cap.',
amazon:unknownAmazon(39,'research-d-1.json'),evidence:[work,'https://openlibrary.org/books/OL7453244M/Women%27s_Work_The_First_20_000_Years'],
enrichment:enrichment(work,[['PRD',3,'Cloth production is central.'],['ENG',2,'Textile tools and techniques constrain production.'],['INS',2,'Division of labor is explained through production requirements.']],null,[],'Edition records disagree between334and336pages and the inspected primary record did not clearly join extent to format. No invented extent.')
}),
fresh(40,{
title:'The Mummies of Ürümchi',
eligibility:'Accessible archaeological investigation combining textiles and migration hypotheses; not a specialist technical monograph in its main purpose.',
reason:'Textile evidence retains value, but the1999origin narrative must not be treated as current consensus. The2021genomic study rejects western-migrant origins for its sampled early Tarim group; it does not cover every mummy or determine language. Lower evidence and durability rather than infer a whole-book veto from this bounded contradiction.',
raw:[11,11,7,7,8,5,4,4,2.5,1.5],
notes:['Later genetics materially weakens the broad origin inference, limiting E11.','Textiles, migration and language connect, with uncertain causal links, giving S11.','Material evidence as a reconstruction tool offers U7.','Production clues explain some cultural contact, but ancestry inference limits M7.','The focused investigation supports D8.','Textile observations last better than population hypotheses, giving R5.','Production history supplies F4; industrial strategy is absent.','Barber’s textile expertise supports A4, without extending to later genomics.','The archaeological puzzle supports N2.5.','Clear material description supports P1.5; origin terminology needs caution.'],
year:1999,yearConfidence:'high',yearNote:'WorldCat and the first-edition library record identify1999.',
T11:0,T12:0,themeNote:'A transregional archaeological and textile inquiry; neither listed thematic group predominates.',
periodEnd:200,periodNote:'Use the broad upper boundary of the ancient mummy population described in the research context. Low confidence for the book’s exact selected set; H13 is capped either way.',
amazon:unknownAmazon(40,'research-d-2.json'),evidence:[mummy,'https://search.worldcat.org/title/468515927',genes,'https://www.nature.com/articles/s41586-021-04052-7'],
enrichment:enrichment(mummy,[['PRD',2,'Preserved textiles reveal production practices.'],['TRD',1,'Material similarities are used to investigate cultural contact.']],null,[],'No fully matched format/page extent retained. Origin and language claims require later research; the2021study concerns a specified early Tarim sample, not every regional mummy.')
}),
fresh(41,{
title:'Catastrophe: An Investigation into the Origins of the Modern World',
status:'vetoed',veto:['V1'],vetoConfidence:'moderate',
eligibility:'A public historical-scientific argument, not fiction or specialist training.',
reason:'The book makes a definitive specific535eruption and global-civilizational causal reconstruction. Later ice-core research supports separate536and540events and does not establish its asserted Krakatau explanation. The confident attribution and sweeping causal chain cross V1; the broad role of volcanism is not denied.',
raw:[7,12,6,4,7,4,4,2.5,2.5,1],
notes:['Specific attribution and excessive certainty limit E7.','Climate, agriculture, disease and institutions connect in a broad but weakly tested S12 model.','Shock propagation offers U6 only with major evidential caution.','Chronology and correlation do not establish the full chain, giving M4.','A focused thesis supports D7.','Later chronology undermines central claims, giving R4.','Systemic disruption partly fits F4; industrial mechanisms are absent.','Keys brings archaeological journalism, supporting A2.5 rather than specialist climate authority.','The global reconstruction supports N2.5.','Definitive rhetoric exceeds evidence, limiting P1.'],
year:1999,yearConfidence:'high',yearNote:'British National Bibliography states originally published London:Century,1999; US ebook2000is later.',
T11:-10,T12:0,themeNote:'Environmental shock and disease are central, triggering T11. Political change is an effect in the argument, so no separate T12 deduction.',
periodEnd:700,periodNote:'Approximate conservative boundary for the late-antique/early-medieval transformation thesis; exact endpoint uncertain and H13 capped.',
amazon:unknownAmazon(41,'research-d-2.json'),evidence:[cat,'https://obnb.uk/p10662708-catastrophe-an-investigation-into-the-origins-of-the-modern-world','https://www.ldeo.columbia.edu/sites/default/files/uploaded/image/2005_Oct_Abbott.pdf','https://www.nature.com/articles/nature14565','https://doi.org/10.1007/s10584-016-1648-7','https://pmc.ncbi.nlm.nih.gov/articles/PMC10666123/'],
enrichment:enrichment(cat,[['SCI',1,'Scientific proxy evidence is used in the disputed reconstruction.'],['INS',1,'Institutional change is linked to environmental shocks, with serious causal uncertainty.']],edition(368,'ISBN:9780345444363',cat,'Ebook',2000),[],'Do not encode the disputed specific eruption-to-civilization chain as an established mechanism.')
}),
fresh(45,{
eligibility:'Investigative historical biography, not a neonatal-care manual.',
reason:'Incubator adoption, care practices and unconventional financing offer transferable institutional lessons. Medical history lowers fit but is not an automatic veto.',
raw:[15,11,9,8,8,8,4,3,2.5,1.5],
notes:['Documents and survivor interviews support E15; uncertain identity details remain.','Care technology, publicity and financing support S11.','Adoption barriers and alternative funding offer U9.','The account connects practices and institutional acceptance, supporting M8.','A compact case supports D8.','Innovation adoption remains durable, giving R8.','Medical technology partly fits F4; clinical history dominates.','Raffel brings investigative reporting, supporting A3.','The reconstructed identity and career support N2.5.','Explicit mysteries support P1.5 rather than false certainty.'],
year:2018,yearConfidence:'high',yearNote:'Publisher lists original ebookJuly31,2018 and paperbackSeptember10,2019.',
T11:-10,T12:0,themeNote:'American medical-care history triggers T11. Finance is an enabling constraint rather than the central topic, so T12=0.',
periodEnd:1943,periodNote:'The reviewed account identifies1943as the final year of Couney’s exhibit operation; later biographical material is ancillary.',
amazon:unknownAmazon(45,'research-d-2.json'),evidence:[couney,'https://www.kirkusreviews.com/book-reviews/dawn-raffel/the-strange-case-of-dr-couney/'],
enrichment:enrichment(couney,[['ENG',2,'Incubator technology enables premature-infant care.'],['INS',2,'Medical acceptance and institutional barriers shape adoption.'],['FIN',1,'Admission revenue pays for care.']],edition(304,'ISBN:9781524744960',couney,'Paperback',2019))
}),
fresh(46,{
title:'Potato: A History of the Propitious Esculent',
eligibility:'World history of a food crop and its effects, not cultivation instruction.',
reason:'Crop productivity, adoption and dependence create transferable resource-system lessons. Avoid interpreting one crop as a sufficient cause of every linked social change.',
raw:[15,13,10,9,8,8,5,3.5,2.5,1.5],
notes:['Historical and botanical synthesis supports E15; the single-crop lens limits inference.','Food production, demography and exchange support S13.','Resource adoption and dependence offer U10.','Yield and crop vulnerability support M9.','A bounded commodity account supports D8.','Food-system constraints remain durable, giving R8.','Production and resource management support F5.','Reader has substantial anthropological reporting experience, supporting A3.5.','Regional progression supports N2.5.','Specific crop constraints support P1.5.'],
year:2008,yearConfidence:'high',yearNote:'Smithsonian records original2008UKtitle Propitious Esculent;2009USretitling and2011paperback do not reset age.',
T11:0,T12:0,themeNote:'Global crop production and diffusion are central. Famine and disease are important episodes rather than the sole organizing subject; no T12 theme predominates.',
periodEnd:null,periodNote:'From domestication through contemporary agriculture, with no single central period.',
amazon:unknownAmazon(46,'research-d-2.json'),evidence:[potato,'https://www.si.edu/object/potato-history-propitious-esculent-john-reader%3Asiris_sil_945575'],
enrichment:enrichment(potato,[['PRD',3,'Crop productivity and adoption are central.'],['TRD',2,'Crop movement links regions.'],['SCI',2,'Botany and breeding influence production.']],edition(336,'ISBN:9780300171457',potato,'Paperback',2011))
}),
fresh(48,{
author:'Julia Laite',title:'The Disappearance of Lydia Harvey: A True Story of Sex, Crime, and the Meaning of Justice',
eligibility:'Archival narrative history of trafficking and justice, not fiction or legal procedure instruction.',
reason:'Border control, criminal networks and the treatment of testimony offer a modest institutional payload. The source’s missing author is resolved by the publisher.',
raw:[16,10,7,7,7,8,3,4,2.5,1.5],
notes:['Fragmentary archives are identified as such, supporting E16 with limits.','Migration, criminal networks and justice support S10.','Institutional treatment of weak witnesses offers U7.','The case shows incentives and constraints but limited comparison, giving M7.','A personal reconstruction reduces D to7.','Evidence and justice questions remain durable, giving R8.','Institutions partly fit F3; technology is absent.','Laite has relevant historical research expertise, supporting A4.','The reconstructed life and trial support N2.5.','Attention to evidential fragments supports P1.5.'],
year:2021,yearNote:'Publisher hardback and scholarly bibliographic records identify2021; paperback2022is later.',
T11:0,T12:0,themeNote:'Transnational crime and justice are central; the checked scope is not primarily a listed racial/civil movement, single-nation history or political-power thesis.',
periodEnd:1910,periodNote:'The publisher centers the disappearance and prosecution in1910; later institutional consequences are retrospective.',
amazon:unknownAmazon(48,'research-d-3.json'),evidence:[lydia,'https://www.hachette.com.au/julia-laite/the-disappearance-of-lydia-harvey-a-true-story-of-sex-crime-and-the-meaning-of-justice'],
enrichment:enrichment(lydia,[['INS',3,'Courts, border rules and evidence shape the case.'],['TRD',1,'Transnational movement enables exploitation.']],null,[],'Identity and publication date resolved; accessible publisher metadata did not expose a verified page count.')
}),
fresh(49,{
title:'Scoff: A History of Food and Class in Britain',
eligibility:'Explanatory social history of food, not a cookbook or behavioral instruction manual.',
reason:'Status signaling and consumption conventions give a small transferable mechanism. British social history remains low fit; no serious veto is established from the checked scope.',
raw:[14,9,6,6,7,8,2,3,2.5,1.5],
notes:['Historical and literary sources support E14, with selective examples.','Food habits and class institutions support S9.','Status signaling offers U6 beyond local custom.','Social distinctions are explained more than quantitatively tested, giving M6.','Many culinary examples give D7.','Consumption conventions remain durable, giving R8.','Industrial and strategic systems are peripheral, giving F2.','Vogler has relevant food-history experience, supporting A3.','Thematic food chapters support N2.5.','Concrete social distinctions support P1.5.'],
year:2020,yearConfidence:'high',yearNote:'Publisher-supplied Google Books record dates the original November5,2020.',
T11:-10,T12:0,themeNote:'British national social history triggers T11. Class distinction does not alone make the book a central political-power argument; T12=0.',
periodEnd:null,periodNote:'A cross-period history continuing into current habits, with no single historical endpoint.',
amazon:unknownAmazon(49,'research-d-3.json'),evidence:[scoff],
enrichment:enrichment(scoff,[['INS',2,'Class conventions shape food choices and judgments.']],null,[],'Google Books supplies480pages but the inspected metadata does not clearly establish a matching print/electronic format; no assumed edition.')
}),
fresh(50,{
title:'Aristocrats: Caroline, Emily, Louisa and Sarah Lennox, 1740–1832',
eligibility:'Historical collective biography based on letters, not historical fiction or specialist instruction.',
reason:'Family networks and aristocratic constraints provide a small social-institutional payload. Personal detail remains dominant and direct fit is weak; do not turn low fit into an additional exclusion.',
raw:[16,8,5,5,6,8,2,4,3,1.5],
notes:['Contemporary letters support E16, while a surviving elite archive is selective.','Family and social institutions connect at modest S8.','Kinship and status constraints provide limited U5.','Personal choices are contextualized but broader causal testing is weak, giving M5.','Intimate biography lowers D to6 for this reader.','Historical social structures retain R8 value.','Strategic technology and production are largely absent, giving F2.','Tillyard brings relevant historical scholarship, supporting A4.','Four linked lives support a strong N3 structure.','Controlled biographical description supports P1.5.'],
year:1994,yearNote:'The original1994edition is identified by library records; publisher paperback is1995.',
T11:-10,T12:0,themeNote:'British aristocratic social history triggers T11. Elite lives are not sufficient evidence that political-power analysis predominates; T12=0.',
periodEnd:1832,periodConfidence:'high',periodNote:'The full title explicitly defines1740–1832.',
amazon:unknownAmazon(50,'research-d-3.json'),evidence:[aristo,'https://openlibrary.org/works/OL7921714W/Aristocrats?edition=ia%3Abwb_P9-ASF-283'],
enrichment:enrichment(aristo,[['INS',2,'Family and aristocratic social constraints organize the history.']],edition(528,'ISBN:9780099477112',aristo,'Paperback',1995))
})
]);
