import fs from 'node:fs';
import {save,fresh,domain,edition,observed,packet} from './save-reviewed.mjs';
const lewis='https://wwnorton.co.uk/books/9781324074335-going-infinite';
const apollo='https://books.google.com/books/about/Apollo_the_Race_to_the_Moon.html?id=faIQAQAAMAAJ';
const alexander='https://www.patternlanguage.com/archive/timeless.html';
const alexreview='https://citeseerx.ist.psu.edu/document?doi=006ddd9b65ea8aa7157be6e6aebe8d39e0951b59&repid=rep1&type=pdf';
const r=[
fresh(24,{
 title:'Going Infinite: The Rise and Fall of a New Tycoon',author:'Michael Lewis',
 status:'vetoed',veto:'V1',vetoConfidence:'moderate',
 eligibility:'Reported financial biography for general readers, not fiction or investment training. The source’s then-untitled Lewis book about FTX is resolved to this later publication.',
 reason:'V1 at moderate confidence: a detailed primary critical reading identifies unexamined subject claims and flawed trading logic supporting the central portrait of a rational maximizer. This is more than dislike of the subject. Norton also presents a contrary reading that the portrait helps explain the alleged behavior; this disagreement is retained.',
 evidence:[lewis,'https://asteriskmag.com/issues/05/michael-lewis-s-blind-side','https://time.com/6321668/michael-lewis-sam-bankman-fried-going-infinite/','https://openlibrary.org/works/OL35710736W/Going_Infinite'],
 raw:[8,10,7,5,7,6,4,4,3,1],
 notes:['Uncritical technical framing and specific trading-analysis problems impair the central interpretation.','Connects finance, organizational culture, philanthropy and influence.','Governance failures offer lessons, often requiring the reader to reconstruct them.','Access yields observations but incomplete explanation of fraud and controls.','A compact, compelling narrative, with personality detail displacing some mechanics.','The case will outlast the news cycle, but its initial framing needs later evidence.','Finance and organizational risk fit partly; technical crypto explanation is thin.','Strong reporting access does not compensate for inadequate financial scrutiny.','Lewis constructs a very readable rise-and-collapse narrative.','Narrative simplification reduces precision about responsibility and uncertainty.'],
 year:2023,yearConfidence:'high',yearNote:'Norton gives 3 October 2023 for the first publication.',
 T11:0,T12:-10,themeNote:'T11: an international financial-enterprise case, not primarily domestic American history. T12: finance and the financial founder are central.',
 periodEnd:2023,periodConfidence:'moderate',periodNote:'The original narrative follows FTX’s 2022 collapse and pretrial aftermath through the 2023 publication; later conviction is not treated as content of that edition.',
 edition:edition(288,'9781324074335',lewis,'Hardcover',2023),
 domains:{FIN:domain(3,'Trading, cryptocurrency finance and the collapse are central.',[lewis]),INS:domain(2,'The narrative documents absent controls and blurred organizational roles.',['https://asteriskmag.com/issues/05/michael-lewis-s-blind-side'])},
 ...observed(24,'Hardcover')
}),
fresh(85,{
 title:'Apollo: The Race to the Moon',author:'Charles Murray; Catherine Bly Cox',
 eligibility:'Narrative engineering and organizational history for general readers. Technical explanations support the history rather than train the reader to build or operate spacecraft.',
 reason:'Strong fit through systems engineering, technical decisions, testing and management under deadline. Interviews and documentation support the narrative; retrospective participant accounts still require caution.',
 evidence:[apollo,'https://www.nasa.gov/wp-content/uploads/static/history/ap11ann/booksbiblio.htm','https://www2.publishersweekly.com/978-0-671-61101-9','https://www.allbookstores.com/Apollo-Charles-Murray-Catherine-Bly/9780976000808'],
 raw:[17,15,13,11,9,9,7,4,3,2],
 notes:['Combines interviews and documents, with the usual retrospective-source limitations.','Connects engineering, organizational coordination, testing, procurement and national priorities.','Offers transferable lessons about interfaces, risk and ambitious programs.','Explains hardware choices and technical improvisation within management constraints.','Detailed failures and decisions materially advance the account.','Complex-project constraints remain useful beyond spaceflight.','Engineering, reliability and technical organization closely match the profile.','Extensive research is supported by NASA’s favorable historical assessment.','The technical and organizational narrative remains accessible.','Technical explanation is clear without eliminating uncertainty.'],
 year:1989,yearConfidence:'high',yearNote:'The original Simon & Schuster record is dated 1989; the selected paperback is 2004.',
 T11:0,T12:0,themeNote:'T11: the American program is analyzed for general engineering and organizational mechanisms, with wider technological influence. T12: engineering achievement is central; state competition is context.',
 periodEnd:1970,periodConfidence:'moderate',periodNote:'Central narrative runs through the first landing and the extensively treated Apollo 13 crisis in 1970. This is an assessed central-period endpoint; later program context is not treated as equally central.',
 edition:edition(512,'9780976000808','https://www.allbookstores.com/Apollo-Charles-Murray-Catherine-Bly/9780976000808','Paperback',2004),
 domains:{ENG:domain(4,'Hardware development and design decisions receive sustained causal treatment.',[apollo,'https://www2.publishersweekly.com/978-0-671-61101-9']),QLT:domain(3,'Testing, failure and recovery constrain program performance.',['https://www2.publishersweekly.com/978-0-671-61101-9']),INS:domain(3,'Managers and technical organizations coordinate complex development.',[apollo]),HTC:domain(3,'Rocketry, guidance and spacecraft are substantial technical subjects.',['https://www2.publishersweekly.com/978-0-671-61101-9'])},
 mechanisms:[{id:'apollo-failure-feedback',domains:['ENG','QLT','INS'],roles:{ENG:'Hardware interfaces and design choices create coupled failure risks.',QLT:'Tests and operational failures reveal defects and require corrective changes.',INS:'Management coordinates the changes and decisions across program teams.'},statement:'The program’s progress depends on feeding technical failure evidence into coordinated redesign and operational decisions.',scope:'Apollo development and mission operations, including the fire and Apollo 13.',strength:3,confidence:'moderate',refs:['https://www2.publishersweekly.com/978-0-671-61101-9',apollo]}],
 ...observed(85)
}),
fresh(117,{
 eligibility:'A mixed work whose main body develops a philosophy of quality, pattern languages and design. Later process chapters supply application, but it primarily explains the rationale; the companion A Pattern Language is the more concrete reference. H2 pass has moderate confidence.',
 reason:'Useful conceptual account of reusable patterns, context and whole-system design. Claims about universal quality and intuitive wholeness are harder to test than the practical design observations.',
 evidence:[alexander,alexreview,'https://www.patternlanguage.com/bios/douglea.htm','https://www.allbookstores.com/The-Timeless-Way-Building-Alexander/9780195024029','https://www.sah.org/docs/default-source/newsletter-archive-pre-2012/dec-1979-vol-23-no-6.pdf?sfvrsn=2'],
 raw:[12,11,12,8,7,9,5,5,2,1],
 notes:['Observational examples support design insights; universal quality claims remain difficult to test.','Connects built form, local context, social use and interacting patterns.','Reusable patterns and context-sensitive composition transfer well beyond buildings.','Explains generative design and interaction among constraints, partly through analogy.','The layered presentation aids reflection but repeats core claims.','Pattern and design-quality questions remain durable.','Design and transferable systems concepts fit; architecture dominates.','Alexander is an influential architect and design theorist.','The parallel headlines and exposition help navigation but can feel incantatory.','Central intuitive terms are intentionally hard to define precisely.'],
 year:1979,yearConfidence:'high',yearNote:'The contemporary Society of Architectural Historians listing establishes the 1979 book; the author-hosted 1970 draft is earlier work, not the published edition.',
 T11:0,T12:-10,themeNote:'T11: this is design theory, not mainly urban history or environmental activism. T12: philosophy of design and quality is the central explanatory purpose.',
 periodEnd:null,periodConfidence:'high',periodNote:'General design argument using examples across time, not a central historical period.',
 edition:edition(552,'9780195024029','https://www.allbookstores.com/The-Timeless-Way-Building-Alexander/9780195024029','Hardcover',1979),
 domains:{ENG:domain(3,'Explains design through context, constraints and reusable patterns.',[alexander,alexreview]),HEU:domain(3,'Pattern recognition and context-sensitive reuse form the main reasoning model.',[alexander]),QLT:domain(2,'Quality and fit are central design concerns, though not industrial reliability metrics.',[alexreview])},
 ...observed(117,'Hardcover')
})
];
const priorSaved=JSON.parse(fs.readFileSync('data/sources_261020/hn/assessments.json'));
const utopias=priorSaved.find(x=>x.id===packet[60].id);
r.push({...utopias,...observed(60,'Hardcover')});
const question=priorSaved.find(x=>x.id===packet[92].id);
question.enrichment.edition.year=2001;
question.enrichment.research.unknownReason='Copyright is 1999; the inspected copyright page dates the Taylor & Francis electronic edition to 2001. Publisher reports 272 pages. Domain and connection review remains partial.';
r.push(question);
save(r);
