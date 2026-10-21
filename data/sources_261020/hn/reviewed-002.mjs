import {save,fresh,domain,edition} from './save-reviewed.mjs';
const show='https://www.simonandschuster.com/books/Showstopper!/G-Pascal-Zachary/9798993755359';
const beam='https://mitpress.mit.edu/9780262539760/racing-the-beam/';
const consoleBook='https://atlantic-books.co.uk/book/console-wars/';
const blood='https://www.amazon.com/dp/0062651234';
const house='https://play.google.com/store/books/details/?PAffiliateID=1101lHGm&id=JACf1PPCf6oC';
save([
fresh(1,{
 eligibility:'Observed software-development narrative for general readers; not operating-system instruction.',
 reason:'The NT project exposes coordination and reliability constraints. Heroic overwork should not be treated as a universal prescription; no serious veto established.',
 raw:[17,14,13,10,8,9,7,4,3,2],
 notes:['Access to developers supports detail, with one-project selection limits.','Software complexity, management and market deadlines interact.','Coordination and defect control transfer to other projects.','Bug fixing and release pressure explain delivery constraints.','The bounded project sustains useful detail.','Development constraints outlast this operating-system release.','Computing production is a direct fit.','Zachary reported Microsoft at close range.','A release deadline supplies a clear narrative spine.','Concrete reporting keeps technical choices legible.'],
 year:1994,yearConfidence:'high',yearNote:'The original Free Press 1994 record is distinct from the 2026 reissue.',
 T11:0,T12:0,themeNote:'Global computing development dominates the US corporate setting; neither listed thematic class is central.',
 periodEnd:1993,periodConfidence:'high',periodNote:'Central development reaches the 1993 NT release; later forewords do not shift the project period.',
 evidence:[show,'https://books.google.com/books/about/Show_stopper.html?id=k8ISAQAAMAAJ'],
 edition:edition(496,'ISBN:9798993755359',show,'Paperback',2026),
 domains:{CMP:domain(3,'Operating-system development and debugging form the main explanatory thread.',[show]),INS:domain(3,'Team coordination, leadership and deadlines shape delivery.',[show]),QLT:domain(2,'Defects and release readiness repeatedly constrain the project.',[show])},
 mechanisms:[{id:'nt-release',domains:['CMP','INS','QLT'],roles:{CMP:'Complex interacting software',INS:'Team coordination and deadlines',QLT:'Defect detection and release readiness'},statement:'Software interdependence makes bug removal a coordination problem under release pressure.',scope:'Windows NT development through 1993',strength:3,confidence:'moderate',refs:[show]}]
}),
fresh(2,{
 eligibility:'Sustained historical explanation of platform constraints and creative choices. Technical detail supports analysis, not a programming curriculum.',
 reason:'Hardware limits explain software forms and interface choices. The narrow platform limits breadth, but not transferable payload; no serious veto established.',
 raw:[17,11,12,11,9,9,7,5,2,2],
 notes:['Specific machine and game cases permit concrete checking.','Hardware, software and creative choices connect; institutions receive less depth.','Constraint-driven design transfers beyond this console.','The hardware-to-game relationship supplies strong mechanism.','Six focused cases keep the short study dense.','Physical and computational tradeoffs remain durable.','Computer architecture and engineering fit directly.','The authors combine computing and media scholarship.','Case progression is clear but specialist detail slows reading.','Explicit technical relationships support precision.'],
 year:2009,yearConfidence:'high',yearNote:'MIT Press lists the original hardcover in January 2009; 2020 is the paperback date.',
 T11:0,T12:0,themeNote:'Platform engineering is central; neither American social history nor media politics is the main account.',
 periodEnd:1983,periodConfidence:'low',periodNote:'Approximate endpoint for the early VCS commercial era and selected game cases, not a verified last narrated event. Later platform comparisons are contextual.',
 evidence:[beam,'https://mitpress.mit.edu/a-lunch-bit-from-racing-the-beam-by-nick-montfort-and-ian-bogost/','https://openlibrary.org/books/OL19287771M/Racing_the_Beam'],
 purchaseUrl:'https://www.amazon.de/dp/0262539764',purchaseFormat:'Paperback, ISBN 9780262539760; publisher-verified edition, stock unverified.',
 edition:edition(192,'ISBN:9780262539760',beam,'Paperback',2020),
 domains:{CMP:domain(4,'The study sustains an explanation of how the VCS platform shapes six programs.',[beam]),ENG:domain(3,'Design constraints and interface tradeoffs repeatedly shape solutions.',[beam])},
 mechanisms:[{id:'vcs-affordances',domains:['CMP','ENG'],roles:{CMP:'Platform capabilities and constraints',ENG:'Program and interface design choices'},statement:'Fixed platform limits constrain feasible designs and induce creative software techniques.',scope:'Six early Atari VCS game studies',strength:3,confidence:'moderate',refs:[beam]}]
}),
fresh(4,{
 eligibility:'Narrative business history of Sega and Nintendo. The dramatic form is nonfiction reconstruction, not an identified fictional story or training manual.',
 reason:'Competition and organizational decisions offer payload, but the underdog framing and reconstructed dialogue weaken neutrality and precision. No sufficiently established serious veto.',
 raw:[12,12,10,8,5,8,5,3,3,1],
 notes:['Retrospective reconstruction warrants caution about dialogue and motives.','Platforms, firms and competitive positioning connect.','Market-entry and positioning lessons transfer with limits.','Competitive responses are clearer than deep technical causes.','Long dramatic scenes reduce density.','Platform competition remains useful after the products age.','Technology business fits, although engineering is secondary.','Interview reporting supports access without proving all reconstructions.','The rivalry gives a strong narrative spine.','Dramatized certainty limits precision.'],
 year:2014,yearConfidence:'high',yearNote:'Publisher and first-edition catalog agree on 2014.',
 T11:0,T12:0,themeNote:'T11=0: US–Japan business competition has wider scope. T12=0: computer-platform competition is central; corporate strategy alone is not one of the listed central-theme penalties.',
 periodEnd:1996,periodConfidence:'moderate',periodNote:'Central Kalinske-era Sega narrative ends around his 1996 departure, rather than at the 2014 publication.',
 evidence:[consoleBook,'https://openlibrary.org/books/OL25665197M/Console_Wars','https://www.wired.com/2014/05/console-wars-book-sega/'],
 edition:edition(558,'ISBN:9780062276698','https://openlibrary.org/books/OL25665197M/Console_Wars','Hardcover',2014),
 domains:{STR:domain(3,'Competitive positioning and responses sustain the corporate rivalry.',[consoleBook]),INS:domain(2,'Management choices and US/Japan organizational relations affect competition.',[consoleBook])}
}),
fresh(8,{
 eligibility:'Reported accounts of game-production projects for general readers, not instruction in programming or game design.',
 reason:'Comparison of solo and large-team projects exposes production limits and organizational incentives. Selected prominent projects limit inference; no serious veto established.',
 raw:[16,13,12,10,8,8,7,4,3,2],
 notes:['Reported developer experiences support detail, with selection and recollection limits.','Software, creative work, organizations and market deadlines interact.','Scope control and team coordination transfer beyond games.','Schedules, technical obstacles and corporate decisions explain failures and recovery.','Separate project chapters provide varied cases without a full comparative model.','Production tradeoffs outlast individual games.','Computing and development organization fit directly.','Schreier’s specialist reporting supports authority.','Project stories remain accessible and memorable.','Concrete obstacles support clear prose.'],
 year:2017,yearConfidence:'high',yearNote:'First-edition library record and matching print-product record establish 2017.',
 T11:0,T12:0,themeNote:'Software production is central; games as products do not by themselves trigger media or US-history penalties.',
 periodEnd:2016,periodConfidence:'moderate',periodNote:'Modern development cases include Stardew Valley and Uncharted 4 through their 2016 releases; use 2016 for this bounded production period.',
 evidence:[blood,'https://jasonschreier.com/','https://openlibrary.org/books/OL26934492M/Blood_Sweat_and_Pixels'],
 purchaseUrl:'https://www.amazon.de/dp/0062651234',purchaseFormat:'English paperback ISBN 9780062651235; matching public product record, stock unverified.',
 edition:edition(304,'ISBN:9780062651235',blood,'Paperback',2017),
 domains:{CMP:domain(3,'Several software-development projects expose technical limitations.',[blood]),INS:domain(3,'Team scale, publisher decisions and work schedules affect delivery.',[blood]),ENG:domain(2,'Scope and technical feasibility require repeated design tradeoffs.',[blood])},
 mechanisms:[{id:'game-delivery',domains:['CMP','INS','ENG'],roles:{CMP:'Software implementation obstacles',INS:'Team capacity and deadlines',ENG:'Scope and feasibility choices'},statement:'Technical obstacles under fixed schedules force changes to scope and work organization.',scope:'Reported modern game-development cases',strength:3,confidence:'moderate',refs:[blood]}],
 unknownReason:'Amazon’s cached page exposes 5,348 labeled Reviews but not an explicit global-rating label; direct retrieval reached a challenge. Count remains unknown. Library main-text pagination 278 differs from the product’s 304 total print pages; use the stated matching print edition.'
}),
fresh(14,{
 eligibility:'Observed construction narrative, not a building-procedure manual.',
 reason:'Craft skill, client demands and coordination supply transferable lessons beyond a local house. US domestic detail lowers fit; no serious veto established.',
 raw:[17,10,10,9,7,8,5,4,3,2],
 notes:['Close observation supports the case; one house limits generalization.','Design, craft work and client relationships connect.','Coordination and quality-cost tensions transfer to other projects.','Construction choices expose concrete constraints and competing priorities.','Personal detail lowers density but explains decisions.','Craft and coordination problems remain durable.','Engineering and quality fit; advanced technology is absent from the reviewed scope.','Kidder’s sustained reporting supports case authority.','Blueprint-to-completion structure is clear.','Concrete work descriptions support precise prose.'],
 year:1985,yearConfidence:'high',yearNote:'Original Houghton Mifflin bibliographic record is 1985; the 1999 ebook does not reset age.',
 T11:-10,T12:0,themeNote:'T11=-10: the domestic American social setting is a large part of the account. T12=0: construction and work, not politics or finance, are central.',
 periodEnd:1983,periodConfidence:'moderate',periodNote:'The primary-text opening locates construction in 1983; contemporary reporting identifies the May–October 1983 build.',
 evidence:[house,'https://www.everand.com/book/861540571/House','https://books.google.com/books/about/House.html?id=EziVEy4cAl4C','https://www.latimes.com/archives/la-xpm-1985-11-12-vw-4987-story.html'],
 edition:edition(352,'GooglePlay:JACf1PPCf6oC',house,'Ebook',1999),
 domains:{ENG:domain(3,'The full project reveals design choices and construction constraints.',[house]),INS:domain(2,'Client, architect and builders coordinate conflicting priorities.',[house]),QLT:domain(2,'Craft standards repeatedly shape construction decisions.',[house])}
})
]);
