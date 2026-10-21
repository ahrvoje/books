import {save,fresh,domain,edition} from './save-reviewed.mjs';
const dg='https://archive.org/download/year-in-dev/YearInDev_djvu.txt';
const xerox='https://books.google.com/books/about/Fumbling_the_Future.html?id=KYa2AAAAIAAJ';
const bush='https://press.stripe.com/pieces-of-the-action';
const wiener='https://www.hachettebookgroup.com/titles/flo-conway/dark-hero-of-the-information-age/9780465013715/';
const nelson='https://faculty.washington.edu/farkas/TC510-Fall2011/NelsonDreamMachinesExcerptFromNMRsite%20-%20Copy.pdf';
const sym='https://www.jstor.org/stable/j.ctv1pzk2rq';
save([
fresh(18,{
 eligibility:'Employee accounts arranged as a year of product development. The prelude explicitly distinguishes this commemorative narrative from technical support information; it is not a procedure manual.',
 reason:'Concrete accounts of development and coordination carry useful payload. Corporate selection and celebratory framing reduce confidence; no demonstrated serious factual or ideological failure.',
 raw:[13,13,11,9,7,8,7,4,2,1],
 notes:['Participant testimony is useful but selected by the employer.','Hardware, software, manufacturing and project organization interact.','Coordination and learning from prior designs transfer.','Interface problems and implementation choices expose constraints.','Short employee pieces vary in depth.','Project interdependence remains relevant.','Computer production directly fits.','Contributors worked on the products described.','The monthly structure is clear but fragmented.','Internal jargon and praise reduce precision.'],
 year:1987,yearConfidence:'high',yearNote:'Copyright page in the archived primary text states 1987.',
 periodEnd:1985,periodConfidence:'high',periodNote:'The prelude and monthly contents explicitly cover Data General development during 1985.',
 T11:0,T12:0,themeNote:'Computer development is central; neither national social history nor the second thematic group dominates.',
 evidence:[dg,'https://archive.org/details/year-in-dev'],
 domains:{CMP:domain(3,'Operating systems, interfaces and software projects recur throughout the monthly account.',[dg]),ENG:domain(3,'Processor, board and product design decisions form major recurring cases.',[dg]),INS:domain(2,'Contributors describe coordination across development groups.',[dg]),INN:domain(2,'The final reflection explicitly links new projects to learning from earlier designs.',[dg])},
 mechanisms:[{id:'dg-learning',domains:['CMP','ENG','INN'],roles:{CMP:'Operating-system and interface implementation',ENG:'Successive processor and product designs',INN:'Reuse of experience from earlier projects'},statement:'Lessons from earlier implementations constrain and improve subsequent computer products.',scope:'Data General development in 1985',strength:2,confidence:'moderate',refs:[dg]}],
 unknownReason:'Primary OCR prelude, contents, opening and final reflections inspected. Exact printed page total and a complete connection inventory remain unverified.'
}),
fresh(19,{
 eligibility:'Narrative reconstruction of Xerox innovation and commercialization, with bibliography; not a management-method course.',
 reason:'The separation between invention and commercial adoption supplies useful mechanisms. The lost-opportunity frame can simplify the market constraints; no serious veto established.',
 raw:[16,14,13,10,8,9,7,4,2,2],
 notes:['Documented corporate history supports claims, with retrospective selection risk.','Computer development and corporate incentives are connected.','Commercialization barriers transfer across industries.','Organizational isolation explains part of the adoption failure.','The focused account earns most of its length.','Invention versus adoption remains a durable problem.','Computing innovation is a direct fit.','The authors investigated the Xerox case in depth.','The corporate chronology is accessible.','Concrete decisions support clear analysis.'],
 year:1988,yearConfidence:'high',yearNote:'The original Morrow catalog record is 1988.',
 periodEnd:1981,periodConfidence:'low',periodNote:'Use the Star commercialization phase as the approximate end of the central Alto-to-commercial-product episode. The last narrated event is not verified.',
 T11:0,T12:0,themeNote:'Computing commercialization dominates; the US corporate setting and corporate strategy alone do not trigger either deduction.',
 evidence:[xerox,'https://openlibrary.org/books/OL2036621M/Fumbling_the_future','https://tcm.computerhistory.org/CHMfiles/Greatest%20Hits%20from%20TCM%20History%20Center%202000.pdf'],
 edition:edition(274,'ISBN:9780688069599','https://openlibrary.org/books/OL2036621M/Fumbling_the_future','Print; binding not stated in the inspected library record',1988),
 domains:{CMP:domain(3,'The Alto and personal-computing developments are the central case.',[xerox]),INS:domain(3,'Corporate organization and copier-oriented decisions shape adoption.',[xerox]),INN:domain(3,'The central account distinguishes invention from successful commercialization.',[xerox])},
 mechanisms:[{id:'xerox-adoption',domains:['CMP','INS','INN'],roles:{CMP:'Personal-computing inventions',INS:'Existing corporate priorities and isolation',INN:'Commercial adoption'},statement:'An organization optimized for its established business can fail to convert new computing inventions into adopted products.',scope:'Xerox personal computing',strength:3,confidence:'moderate',refs:[xerox]}]
}),
fresh(26,{
 eligibility:'Reflective memoir essays about inventions, organizations and leadership, not a procedural management manual.',
 reason:'Firsthand scientific organization and engineering cases fit strongly. Retrospective personal selection limits causal certainty; no serious veto established.',
 raw:[16,16,14,11,7,9,7,5,2,2],
 notes:['Firsthand access is strong; memoir selection limits independence.','Research, engineering, organizations and military needs connect.','Coordination lessons transfer to complex research programs.','The account explains organizational obstacles to invention.','Personal reminiscence lowers density.','Research organization remains durable.','Scientific and technological development directly fit.','Bush led the institutions discussed.','Topical essays provide structure without a continuous plot.','Concrete anecdotes keep organizational claims clear.'],
 year:1970,yearConfidence:'high',yearNote:'Stripe identifies the original publication as 1970; 2022 is the reissue.',
 periodEnd:1945,periodConfidence:'low',periodNote:'The central development cases emphasized by the publisher concern wartime R&D through 1945. The broader career essays extend beyond this; endpoint remains a scope approximation for later review.',
 T11:0,T12:0,themeNote:'Scientific organization and invention dominate, with worldwide technical influence; military and policy are application contexts.',
 evidence:[bush,'https://books.google.com/books/about/Pieces_of_the_Action.html?id=nBjBEAAAQBAJ','https://www.thebookco.com/pieces-of-the-action/'],
 edition:edition(376,'ISBN:9781953953209','https://www.thebookco.com/pieces-of-the-action/','Hardcover',2022),
 domains:{SCI:domain(3,'Organization of scientific research recurs throughout the memoir.',[bush]),ENG:domain(3,'Radar, fuzes and other inventions supply major development cases.',[bush]),INS:domain(3,'Research organizations and coordination are central explanatory subjects.',[bush]),MIL:domain(2,'Wartime requirements and civilian-military cooperation shape major cases.',[bush]),INN:domain(3,'Moving ideas into working programs is a sustained theme.',[bush])},
 mechanisms:[{id:'bush-rd',domains:['SCI','ENG','INS','MIL'],roles:{SCI:'Civilian research capability',ENG:'Development of usable technologies',INS:'Coordination of organizations',MIL:'Operational needs and users'},statement:'Institutional coordination links civilian research to engineering work on military operational problems.',scope:'US wartime R&D organization',strength:3,confidence:'moderate',refs:[bush]}],
 unknownReason:'Publisher description and contents inspected. The linked Stripe zine is Science, the Endless Frontier, a different work; it was not treated as this memoir or used for page counts.'
}),
fresh(29,{
 eligibility:'General-reader biography of a mathematician, not cybernetics training. The science-biography exception also prevents a personality-based V3 veto.',
 reason:'Useful history of Wiener and cybernetics, but the family-centered explanation of lost scientific influence needs caution. Specialist criticism lowers confidence; a serious central factual failure is not established by the inspected material.',
 confidence:'low',raw:[13,12,9,7,6,8,7,3,3,1],
 notes:['Family access supports detail; psychological causal claims remain contested.','Mathematics, computing and scientific relationships connect.','Scientific collaboration lessons transfer only cautiously.','Personal explanations are stronger than demonstrated causal tests.','Long personal episodes reduce density.','The scientific history remains relevant.','Mathematics and early computing fit directly.','Journalistic research is substantial but specialist interpretation is disputed.','The life story supplies a readable narrative.','Heroic framing can exceed the evidence.'],
 year:2005,yearConfidence:'moderate',yearNote:'Library copyright/bibliographic record and contemporary AMS review use 2005. Open Library also reports a December 2004 release; retain the documented 2005 first-edition year with this conflict explicit.',
 periodEnd:1964,periodConfidence:'high',periodNote:'The central biography ends with Wiener’s life, 1894–1964; later influence is retrospective context.',
 T11:0,T12:0,themeNote:'Scientific biography dominates. US location and discussion of the subject’s activism do not make this an American social history or an activist manifesto.',
 evidence:[wiener,'https://librarycatalog.centralpenn.edu/cgi-bin/koha/opac-detail.pl?biblionumber=64202&shelfbrowse_itemnumber=62574','https://www.ams.org/journals/notices/200605/200605FullIssue.pdf','https://openlibrary.org/works/OL15344533W/Dark_Hero_of_the_Information_Age'],
 edition:edition(464,'ISBN:9780465013715',wiener,'Paperback',2006),
 domains:{SCI:domain(3,'Wiener’s mathematical work and scientific career supply the central subject.',[wiener]),CMP:domain(2,'Cybernetics, automation and computing receive substantial treatment.',[wiener])},
 unknownReason:'Publisher and library records inspected. AMS review opening was available in the search index; direct full-review fetch returned 403. Its objection to the wife-centered causal frame is recorded without claiming the full review was read.'
}),
fresh(34,{
 status:'vetoed',veto:'V5',vetoConfidence:'moderate',
 eligibility:'The primary introduction addresses lay readers and explicitly distinguishes understanding computers from learning programming. The paired work is explanatory advocacy, not a technical training manual.',
 reason:'The paired work is a manifesto for computer liberation and redesigned media. V5 applies to that central advocacy form; the counterfactual score retains its real technical insight.',
 raw:[11,12,10,8,6,8,7,4,1,1],
 notes:['Explicit personal vision and polemic limit evidential discipline.','Computing, media design and professional control connect.','User-centered design offers transferable ideas.','Design alternatives receive more depth than tested social causation.','The collage format is uneven.','Several design ideas remain useful beyond their period.','Computing and interface invention fit directly.','Nelson contributed directly to hypertext thinking.','Deliberate fragmentation weakens cumulative structure.','Rhetorical generalization reduces precision.'],
 year:1974,yearConfidence:'high',yearNote:'The reprinted primary excerpt identifies first self-publication in 1974; the 1987 revision is later.',
 periodEnd:null,periodConfidence:'moderate',periodNote:'A contemporary design argument and vision, not a retrospective history of a bounded period.',
 T11:0,T12:0,themeNote:'Computing and interface design are central. Political and media rhetoric is substantial but auxiliary to the technology vision.',
 evidence:[nelson,'https://www.digibarn.com/collections/books/computer-lib/','https://www.beatbooks.com/pages/books/39250/theodor-h-nelson/computer-lib-dream-machines?soldItem=true'],
 edition:edition(128,'First paired edition, 69 + 59 pages','https://www.beatbooks.com/pages/books/39250/theodor-h-nelson/computer-lib-dream-machines?soldItem=true','Paperback',1974),
 domains:{CMP:domain(3,'Personal computing, hypertext and interfaces sustain the paired work.',[nelson]),INN:domain(2,'Alternative designs and visions receive concrete extended treatment.',[nelson]),INS:domain(2,'Professional control and access to computing recur as constraints.',[nelson])}
}),
fresh(37,{
 eligibility:'A compact explanatory synthesis organized around origins, conflict, persistence and significance. The inspected chapter openings develop a sustained argument, without a course or procedural training structure; H2 passes with moderate confidence.',
 reason:'Conflict management within symbiosis offers a strong causal account. Transfer to human systems remains an analogy, not an established cross-domain result; no serious veto established.',
 raw:[18,9,9,10,9,9,3,5,2,2],
 notes:['Scientific references and explicit biological questions support inference.','The synthesis spans biology but few requested human systems.','Cooperation constraints offer cautious transferable heuristics.','Partner selection and sanctions explain persistence.','Six compact chapters advance one argument.','Evolutionary mechanisms are durable.','General science fits less directly than physical technology.','Douglas has direct specialist research authority.','The argument accumulates clearly across chapters.','Defined biological processes support precision.'],
 year:2010,yearConfidence:'high',yearNote:'Princeton’s contemporary catalog and JSTOR copyright record both state 2010.',
 periodEnd:null,periodConfidence:'high',periodNote:'General biological explanation across evolutionary and ecological timescales; no single central historical period.',
 T11:-10,T12:0,themeNote:'Ecology is central, triggering T11. Neither finance, politics, military doctrine nor philosophy is central.',
 evidence:[sym,'https://assets.press.princeton.edu/catalogs/bio10.pdf'],
 edition:edition(216,'ISBN:9780691113418','https://assets.press.princeton.edu/catalogs/bio10.pdf','Hardcover',2010),
 domains:{SCI:domain(3,'The full chapter sequence explains evolutionary symbiosis and its constraints.',[sym])},
 unknownReason:'Publisher catalog, all chapter abstracts/openings and source quotation inspected. Human institutions are not assigned from biological analogies.'
})
]);
