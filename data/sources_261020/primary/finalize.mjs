import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/sources_261020/primary/';
const read=f=>JSON.parse(fs.readFileSync(dir+f,'utf8').replace(/^\uFEFF/,''));
const books=read('assessments-draft.json'),packet=read('packet.json');
const libraries=read('library-editions.json').flatMap(r=>Object.values(r.data||{}));
const direct=read('amazon-direct.json'),extra=fs.existsSync(dir+'amazon-extra.json')?read('amazon-extra.json'):[];
const clean=s=>s.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&(?:#39|apos);/g,"'").replace(/&amp;/g,'&').replace(/&[^;]+;/g,' ').replace(/\s+/g,' ').trim();
function observation(o){
 if(!o?.file)return null;
 const html=fs.readFileSync(o.file,'utf8');
 const title=clean(html.match(/id=.productTitle.[^>]*>([\s\S]*?)<\/span>/)?.[1]||'');
 const byline=clean(html.match(/id=.bylineInfo.[^>]*>([\s\S]*?)<\/div>/)?.[1]||'');
 const i=html.search(/id=.detailBullets_feature_div./),details=clean(html.slice(i,i+15000));
 const global=html.match(/([0-9,]+)\s+global ratings?/);
 return {...o,globalRatings:global?Number(global[1].replaceAll(',','')):undefined,title,byline,stars:Number(html.match(/id=.acrPopover.[^>]*title=.([\d.]+) out of 5 stars/)?.[1])||null,
  format:byline.match(/Format: (.*)$/)?.[1]||null,pages:Number(details.match(/Print length\s*:\s*(\d+)\s+pages/)?.[1])||null,
  editionYear:Number(details.match(/Publication date\s*:\s*[^:]*?\b((?:19|20)\d\d)\b/)?.[1])||null,details};
}
const obs=[...direct,...extra].map(observation).filter(Boolean);
fs.writeFileSync(dir+'edition-observations.json',JSON.stringify(obs,null,2)+'\n');
const manualPages={
 0:{pages:106,id:'ISBN 9780921332268',url:'https://search.worldcat.org/title/History-of-free-fall-%3A-Aristotle-to-Galileo-with-an-epilogue-on-%22Pi%22-in-the-sky/oclc/19973717',year:1989,format:'Paperback',notes:'Standalone Drake work; the source-linked 474-page Galileo/Drake bundle is rejected. Catalog pagination includes 99 numbered pages plus preliminary material.'},
 5:{pages:356,id:'ISBN 9780262543903',url:'https://mitpress.mit.edu/9780262543903/music-and-the-making-of-modern-science/',year:2022,format:'Paperback',notes:'Publisher-listed paperback; differs from the 2014 hardcover pagination.'},
 9:{pages:352,id:'ISBN 9781845640927',url:'https://www.witpress.com/books/978-1-84564-092-7',year:2008,format:'Hardcover',notes:'English print edition, not the Kindle product used for the initial rating observation.'},
 12:{pages:296,id:'ISBN 9781402002335',url:'https://link.springer.com/book/10.1007/978-94-017-3672-5',year:2002,format:'Hardcover',notes:'XVI preliminary plus 280 numbered pages.'},
 22:{pages:808,id:'North-Holland 1976, complete two-volume work',url:'https://terpconnect.umd.edu/~brush/books/The_Kind_of_Motion_We_Call_Heat.html',year:1976,format:'Print, two volumes',notes:'Author bibliography gives xxxix + 769 pages for both books together. One-volume listings are not used for the whole nomination.'},
 28:{pages:127,id:'Stars and Atoms, Clarendon Press 1927',url:'https://www.gutenberg.org/files/73362/73362-h/73362-h.htm',year:1927,format:'Original print text represented by digitization',notes:'Numbered text pagination; preliminary pages and six plates are not added.'},
 32:{pages:982,id:'Dover complete two-volume reprint, OL10342845M',url:'https://openlibrary.org/books/OL10342845M/Rise_of_the_New_Physics',year:1951,format:'Paperback, two volumes',notes:'Complete two-volume scope; library numbered pagination. The source Amazon product also explicitly says two volumes.'},
 35:{pages:224,id:'ISBN 9780486248950',url:'https://openlibrary.org/books/OL23250236M/Thirty_years_that_shook_physics',year:1985,format:'Paperback',notes:'Dover reprint; original production remains 1966.'},
 41:{pages:221,id:'ISBN 9789812386472',url:'https://books.google.com/books/about/The_Chaos_Avant_garde.html?id=0E667XpBq1UC',year:2000,format:'Catalog edition; binding not specified in cited record',notes:'Catalog numbered pagination for the full edited volume.'},
 68:{pages:352,id:'ISBN 9780198805847',url:'https://www.kennys.ie/shop/galileo-unbound-a-path-across-life-the-universe-and-everything',year:2018,format:'Hardcover',notes:'Publisher bibliographic identity cross-checked with Oxford; bookseller explicitly identifies ISBN, binding and length.'}
};
// Selected domain evidence. Omitted domains remain unknown rather than zero.
const domains={
 0:{SCI:[3,'Sustained reconstruction of how free-fall explanations changed.'],QNT:[2,'Geometrical and quantitative representation of accelerated motion.'],INN:[2,'Replaces inherited descriptions with testable mathematical explanations.']},
 1:{SCI:[3,'Astronomical theories and evidence are the main historical problem.'],QNT:[2,'Compares mathematical descriptions of celestial motion.'],INN:[2,'Explains conceptual change through observations and textual transmission.']},
 2:{SCI:[3,'Scientific biography explains Galileo’s discoveries and reasoning.'],INS:[3,'Patronage and scientific/religious institutions constrain the career.'],INN:[3,'Scientific instruments and experiments change what can be observed.'],QNT:[2,'Mathematical treatment of motion is repeatedly explained.']},
 3:{SCI:[3,'The explanatory object is the collapse of Ptolemaic cosmology.'],INS:[3,'Jesuit educational and scholarly organization shapes reception.'],INN:[2,'New evidence changes accepted models inside existing institutions.']},
 4:{SCI:[2,'Explains the major scientific work in an accessible biography.'],INS:[2,'Patronage and religious authority materially shape the scientific career.'],INN:[2,'Instruments and observation support scientific change.']},
 5:{SCI:[3,'Sustained history of physical-science concepts influenced by music.'],QNT:[3,'Ratios, mathematical harmony and formal representations are major explanatory threads.'],INN:[3,'Tracks specific transfers of concepts across music and science.']},
 6:{SCI:[2,'Galileo’s work receives concrete explanation within family history.'],INS:[2,'Patronage and religious institutions constrain the research life.'],INN:[1,'Some discoveries and changes in evidence are explained.']},
 9:{SCI:[3,'Stevin’s mechanics and hydrostatics receive explanatory treatment.'],QNT:[3,'Decimal calculation and mathematical representation are a major thread.'],ENG:[2,'Practical engineering is explained as an application of mathematical work.'],QLT:[2,'Calculation and measurement standardization improve practical precision.'],INN:[3,'A sustained scientific life links mathematical invention with use.']},
 10:{SCI:[3,'Explains medieval sources of later scientific ideas.'],INS:[2,'Knowledge transmission depends on educational and scholarly settings.'],INN:[2,'Preservation, translation and adaptation enable later discovery.']},
 12:{SCI:[3,'Force and mechanics are the sustained historical object.'],QNT:[3,'Changing mathematical representation affects what physical concepts mean.'],HEU:[2,'The concept-change argument supports careful model interpretation.']},
 13:{SCI:[3,'Physical reasoning unifies heat, work and energy.'],ENE:[4,'Energy conversion and efficiency form the sustained conceptual account.'],ENG:[2,'Engines provide concrete problems that drive theoretical change.'],QNT:[3,'Quantitative equivalence and conservation explain apparently different effects.'],INN:[2,'Practical and theoretical advances reshape the energy concept.']},
 15:{SCI:[3,'Geodetic measurement and scientific controversy form the core biography.'],QLT:[3,'Precision and measurement evidence decide the Earth-shape question.'],INS:[3,'Patronage, academies and expeditions organize the inquiry.'],INN:[2,'New measurements and public arguments alter accepted knowledge.']},
 18:{QNT:[4,'Sustained account of vector representations, alternatives and their uses.'],SCI:[2,'Physical applications help select mathematical representations.'],INN:[3,'Adoption of a usable formalism is the central historical mechanism.']},
 19:{QNT:[4,'Cantor’s mathematical concepts and their foundations are sustained subjects.'],SCI:[1,'Scientific intellectual life provides explanatory context.'],INS:[2,'Professional reception and correspondence shape the development of ideas.'],INN:[2,'Explains the creation and reception of new abstractions.']},
 21:{QNT:[4,'The three-body problem, error and revised reasoning are central.'],SCI:[2,'Celestial mechanics provides the physical problem.'],INN:[3,'Research error, correction and publication form a major explanatory thread.'],HEU:[2,'The historical case supports caution about perturbative reasoning.']},
 22:{SCI:[4,'Sustained history of kinetic theory, atomism and irreversibility.'],QNT:[3,'Statistical reasoning and its assumptions are repeatedly explained.'],INN:[2,'Scientific acceptance changes with indirect evidence and new models.']},
 24:{SCI:[4,'Boltzmann’s physical reasoning is a sustained explanatory object.'],QNT:[3,'Probability and statistical inference connect mechanics to macroscopic behavior.'],INN:[2,'Acceptance of atomic models changes with scientific argument.']},
 25:{SCI:[3,'Explains the physical and evidential atomism debate.'],QNT:[2,'Statistical explanation receives concrete treatment.'],INN:[2,'Shows model acceptance through indirect evidence.']},
 28:{SCI:[2,'Stellar and atomic concepts are explained, but much is familiar or dated for this reader.'],QNT:[1,'Physical estimates illustrate constraints on stars.']},
 29:{SCI:[4,'Einstein’s theoretical development is reconstructed in depth.'],QNT:[3,'Mathematical formulation and physical interpretation are major threads.'],INN:[3,'Formation and testing of new theories organize the intellectual biography.'],INS:[2,'Research communities and institutions provide substantive context.']},
 32:{SCI:[2,'Broad physical exposition is substantial but dated and mostly familiar.'],QNT:[2,'Explains mathematical and conceptual structures without specialist procedures.'],HEU:[1,'Contrasts model assumptions and interpretations.']},
 33:{SCI:[4,'A sustained account of the conceptual development of quantum physics.'],QNT:[3,'Formal representations and competing interpretations are repeatedly connected.'],INN:[3,'Experiments and conceptual revisions explain the development of theory.']},
 34:{SCI:[3,'Quantum history is explained through forty scientific episodes.'],QNT:[2,'Models and observations are compared repeatedly.'],INN:[3,'Evidence-driven changes of theoretical framework form the main narrative.']},
 35:{SCI:[2,'Explains the early quantum revolution at a broad level.'],QNT:[1,'Quantization and models are explained without extensive new structure for this reader.'],INN:[2,'Participant recollections show how ideas changed.']},
 37:{SCI:[3,'Experimental discoveries and their physical interpretation are central.'],HTC:[2,'Scientific instruments enable concrete discoveries.'],INN:[3,'Research decisions and evidence organize the portraits.']},
 39:{SCI:[3,'Heisenberg’s scientific contributions receive substantial explanation.'],INS:[3,'Research institutions and national constraints shape scientific action.'],POL:[2,'State authority constrains the wartime research program.'],MIL:[2,'Nuclear-weapons research is an explained application context.'],HTC:[2,'Nuclear capability depends on scientific and technical feasibility.'],INN:[3,'Scientific development and institutional choices form major threads.']},
 40:{SCI:[2,'Physical theories supply the objects of the argument.'],QNT:[2,'Models and observations are distinguished carefully.'],HEU:[3,'Reasoning about what theories warrant is the central transferable account.']},
 41:{SCI:[3,'Pioneers explain the emergence of nonlinear science.'],QNT:[3,'Attractors and nonlinear models recur as explanatory structures.'],CMP:[2,'Analog and numerical experiments enable discoveries.'],INN:[3,'First-person accounts explain research pathways and cross-field discovery.']},
 45:{QNT:[4,'Stability and persistence under perturbation form a sustained account.'],SCI:[3,'Celestial and physical applications give the mathematical problem meaning.'],INN:[2,'Historical development of the result is substantively explained.']},
 46:{QNT:[4,'Stability, chaos and predictability are sustained explanatory subjects.'],SCI:[3,'Celestial motion connects mathematical ideas to physical behavior.'],INN:[2,'Discovery and conceptual development connect the historical episodes.']},
 47:{SCI:[3,'Multiple physical and biological systems are explained through nonlinear behavior.'],QNT:[3,'Sensitivity, scaling and nonlinear models are major threads.'],CMP:[2,'Computer experiments make new patterns visible.'],INN:[3,'Cross-field discovery and diffusion are central.'],HEU:[2,'Cases support reusable caution about linear extrapolation.']},
 48:{CMP:[4,'Computer architecture and information processing form the sustained account.'],ENG:[3,'Design constraints and engineering choices repeatedly explain machine development.'],QNT:[3,'Mathematical demands shape computational design.'],INS:[2,'Early projects depend on research institutions and organization.'],MIL:[2,'Wartime needs provide explained demands for computation.'],INN:[3,'Cumulative invention connects calculating machines to electronic computers.']},
 51:{SCI:[3,'Physical examples explain chance and deterministic dynamics.'],QNT:[4,'Prediction, randomness and nonlinear sensitivity receive sustained treatment.'],HEU:[3,'Limits of prediction yield reusable reasoning principles.']},
 54:{SCI:[3,'Sustained argument for selection, variation and adaptation, evaluated historically.'],HEU:[2,'Selection under constraints supplies a transferable explanatory model.']},
 57:{SCI:[3,'Evolutionary mechanisms and their historical development are central.'],QNT:[3,'Population models and assumptions form a major explanatory thread.'],INS:[2,'Research settings and scientific disputes shape model development.'],INN:[2,'Explains competition between theoretical frameworks.']},
 60:{SCI:[3,'Scientific formation and the development of evolutionary explanation are central.'],INN:[3,'Observation, mentors and notebooks explain the formation of a theory.'],HEU:[2,'The biography supplies cases of integrating observations over time.']},
 68:{SCI:[3,'Trajectories and dynamical explanations span physical and biological systems.'],QNT:[4,'State spaces, nonlinear dynamics and high-dimensional representations are sustained subjects.'],INN:[3,'Historical changes in representation expand the reach of explanation.'],HEU:[3,'The common representation supports thinking across different systems.']}
};
for(const b of books){
 if(b.status==='excluded')continue;
 const previous=packet.find(x=>x.id===b.id)?.priorEnrichment;
 const oldAmazon=b.amazon;
 const candidates=obs.filter(o=>o.id===b.id&&o.title);
 // Manual scope rejection: Galileo/Drake combined edition is not the nominated work.
 const valid=candidates.filter(o=>!(b.sourceIndex===0&&o.asin==='0921332505'));
 const countObservation=valid.find(o=>Number.isInteger(o.globalRatings));
 const chosen=valid.find(o=>o.format==='Paperback')||valid.find(o=>o.format==='Hardcover')||valid[0];
 if(countObservation){
  b.amazon={count:countObservation.globalRatings,rating:countObservation.stars,marketplace:'amazon.com',asin:countObservation.asin,url:countObservation.url,verifiedAt:countObservation.retrieved,
   status:'Verified matching title and author; product’s explicit global ratings aggregate, not written-review count. One product only; linked editions may be aggregated by Amazon.',
   evidenceFile:countObservation.file,attempts:['data/sources_261020/primary/amazon-direct.json','data/sources_261020/primary/amazon-extra.json']};
  b.reader=`Amazon.com ${countObservation.stars?.toFixed(1)||'—'}/5 · ${countObservation.globalRatings.toLocaleString('en')} ratings · ${countObservation.retrieved.slice(0,10)}. Other requested services unavailable.`;
  if(b.id==='g1003')b.reassessment=b.reassessment.replace('The earlier matching Amazon snapshot is retained with its actual date; no new count is claimed.','A newly retrieved, matching first-edition facsimile product has 3 global ratings; replace the previous unknown-count fallback with O15=-20. This is one edition product aggregate, not a count across all Darwin editions.');
 }else if(!Number.isFinite(oldAmazon?.count)){
  b.amazon={count:null,status:'Unavailable after recorded public Amazon.de search and available product retrievals; O15=0 prescribed fallback. No count is inferred from missing data.',
   attemptedAt:'2026-10-20',attempts:['data/sources_261020/primary/amazon-search-01.json','data/sources_261020/primary/amazon-search-02.json','data/sources_261020/primary/amazon-products.json','data/sources_261020/primary/amazon-direct.json']};
  if(b.sourceIndex===0)b.amazon.status+=' The source-linked combined Galileo/Drake volume was rejected for scope; standalone product did not expose an explicit total-ratings count.';
 }
 if(chosen){
  b.purchaseUrl=chosen.url;
  b.purchaseFormat=`${chosen.format||'Format not established'}; matching title and author verified on the public product page. Amazon.de search did not resolve an available product; Amazon.com fallback. Stock is not guaranteed.`;
 }else if(b.sourceIndex===0){
  b.purchaseUrl='https://www.amazon.de/s?k='+encodeURIComponent('9780921332268 Stillman Drake');
  b.purchaseFormat='Standalone ISBN search locator; product availability unresolved. Do not substitute the combined Galileo volume.';
 }
 const sourceAsin=b.purchaseUrl.match(/\/dp\/(\d{9}[\dX])/i)?.[1];
 const lib=libraries.find(e=>e.bib_key==='ISBN:'+sourceAsin);
 let edition=previous?.edition||null;
 if(manualPages[b.sourceIndex])edition={...manualPages[b.sourceIndex],retrieved:'2026-10-20',language:'English',confidence:'moderate'};
 else if(lib?.details.number_of_pages){
  const e=lib.details,year=Number(e.publish_date?.match(/\b(?:19|20)\d\d\b/)?.[0]);
  if(Number.isInteger(year))edition={pages:e.number_of_pages,id:'ISBN '+sourceAsin,url:'https://openlibrary.org'+e.key,retrieved:'2026-10-20',language:'English',
   format:chosen?.format||e.physical_format||'Print; binding unspecified in library record',year,confidence:'moderate',
   notes:'Exact source ISBN and matching work checked. Library page count may be numbered pagination rather than publisher total. '+(chosen?.pages&&chosen.pages!==e.number_of_pages?`Retailer lists ${chosen.pages}; retain the cited library record and flag this discrepancy.`:'')};
 }else if(chosen?.pages&&chosen.editionYear&&chosen.format!=='Kindle Edition'){
  edition={pages:chosen.pages,id:'ASIN '+chosen.asin,url:chosen.url,retrieved:chosen.retrieved,language:'English',format:chosen.format||'Print',year:chosen.editionYear,confidence:'moderate',notes:'Matching title/author and product details checked; retailer edition snapshot.'};
 }
 const ds={...(previous?.domains||{})};
 for(const [id,[value,rationale]] of Object.entries(domains[b.sourceIndex]||{}))ds[id]={value,rationale,confidence:'moderate',refs:b.evidence.filter(x=>/^https:/.test(x)).slice(0,1)};
 b.enrichment={...(previous||{}),edition,domains:ds,connections:previous?.connections||{status:'partial',mechanisms:[],joins:[],limitations:'Publisher contents, descriptions and source evidence establish selected domains. A complete review of all mechanisms has not been made.'},
  research:{reviewed:'2026-10-20',unknownReason:'Selected domains have evidence; uncoded domains are unknown. Page/edition conflicts and low-confidence topic endpoints are stated in the assessment. No automatic pair or connection inference.'}};
}
function mechanism(i,id,statement,roles,scope){
 const b=books.find(x=>x.sourceIndex===i);assert(b);
 b.enrichment.connections={status:'partial',mechanisms:[{id,statement,domains:Object.keys(roles),roles,scope,strength:3,confidence:'moderate',refs:b.evidence.filter(x=>x.startsWith('https:')).slice(0,1)}],joins:[],limitations:'One principal mechanism coded from the explanatory account. Other mechanisms and joins remain unreviewed; this does not certify complete connection coverage.'};
}
mechanism(9,'decimal-practice','Decimal representation reduces calculation friction and supports more precise practical measurement and engineering work.',
 {QNT:'Provides a tractable numerical representation.',QLT:'Makes measurement and calculation more consistent.',ENG:'Uses the improved calculation in practical problems.',INN:'Spreads the mathematical improvement into applications.'},'Stevin’s decimal and practical mathematical work; not a claim that every engineering application used the same causal chain.');
mechanism(13,'work-heat','Engine performance and the comparison of work with heat force a common quantitative account of energy and conversion limits.',
 {ENG:'Provides engines and concrete performance problems.',ENE:'Supplies conversion and efficiency constraints.',QNT:'Relates measured quantities through equivalence and conservation.',SCI:'Explains the unified physical concept.'},'Historical development of the energy concept; a conceptual feedback between practical machines and theory.');
mechanism(15,'measure-earth','An organized expedition turns precise measurement into evidence that can discriminate between competing Earth-shape models.',
 {INS:'Organizes support and authority for the expedition.',QLT:'Controls the precision of the measurements.',SCI:'Uses the measurements to test physical claims.'},'Maupertuis’s geodetic expedition and its scientific reception.');
mechanism(48,'computational-demand','Demand for large calculations exposes limits of existing methods, which shapes computer architecture, engineering choices and institutional projects.',
 {QNT:'Defines the calculation burden.',CMP:'Provides an architecture for processing the calculation.',ENG:'Constrains what hardware can implement reliably.',INS:'Coordinates the development project.',MIL:'Supplies important wartime calculation demands.'},'Early electronic-computer development in Goldstine’s account; military demand is one context, not the sole cause of all computing.');
mechanism(68,'state-space','Representing a system by its evolving state permits common dynamical concepts to explain physical motion and more complex biological behavior.',
 {QNT:'Provides state spaces, trajectories and stability concepts.',SCI:'Supplies physical and biological systems whose behavior is explained.',HEU:'Supports reuse of the same representation across distinct problems.'},'The book’s generalization from physical paths to abstract dynamical spaces; analogy is limited by each model’s assumptions.');
for(const b of books.filter(b=>b.status==='recommended')){
 assert(b.amazon&&b.enrichment&&b.raw.length===10);
 if(b.enrichment.edition)assert(Number.isInteger(b.enrichment.edition.year)&&b.enrichment.edition.pages>0);
}
fs.writeFileSync(dir+'assessments.json',JSON.stringify(books,null,2)+'\n');
console.log(JSON.stringify({assessed:books.length,eligible:books.filter(b=>b.status==='recommended').length,pages:books.filter(b=>b.enrichment?.edition).length,ratings:books.filter(b=>Number.isFinite(b.amazon?.count)).length}));
