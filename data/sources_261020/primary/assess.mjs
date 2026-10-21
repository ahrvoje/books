import fs from 'node:fs';
import assert from 'node:assert/strict';
const dir='data/sources_261020/primary/';
const packet=JSON.parse(fs.readFileSync(dir+'packet.json','utf8'));
const byIndex=new Map(packet.map(b=>[+b.appearances.find(a=>a.source===136).occurrence.split(':')[1],b]));
const results=[];
const evidenceByIndex=new Map();
for(const [file,start] of [['research-01',0],['research-02',6],['research-03',18],['research-04',30],['research-05',42],['research-06',54]]){
 const d=JSON.parse(fs.readFileSync(dir+file+'.json','utf8'));
 d.results.forEach((r,i)=>{
  const text=String(r.value||'');
  const urls=[...text.matchAll(/\((https?:\/\/[^\s()]+)\)/g)].map(m=>m[1]).filter(u=>!u.includes('wikipedia'));
  evidenceByIndex.set(start+i,[...new Set(urls)].slice(0,4));
 });
}
function base(i,eligibility,reason,refs=[]){
 const b=byIndex.get(i);assert(b);
 return {id:b.id,title:b.appearances.find(a=>a.source===136).title,author:b.author,confidence:'moderate',eligibility,reason,
  evidence:[...new Set([...(refs.length?refs:(evidenceByIndex.get(i)||[]).slice(0,1)),'https://www.physics.purdue.edu/nlo/ReadingList.html'])]};
}
function exclude(i,reason,refs=[],confidence='high'){
 const a=base(i,reason,reason,refs);
 a.sourceIndex=i;
 Object.assign(a,{status:'excluded',exclusion:'H2',confidence});
 const b=byIndex.get(i);if(b.priorExcluded?.length)a.reassessment='The earlier hard exclusion is retained after checking the source nomination and the work’s teaching/reference purpose. No score is assigned.';
 results.push(a);
}
exclude(7,'The main structure combines technical analysis of medieval mechanics with extensive edited source texts. This is a specialist historical-mechanics reference, not primarily an account for readers outside specialist study. H2 applies despite its historical value.',[],'moderate');
exclude(8,'A critical edition, translation and technical analysis of Oresme’s treatise on geometrical representation of qualities and motion. Its primary use is specialist source/reference study. H2 applies.');
exclude(11,'The organizing account reconstructs Buridan’s nominalist semantics, logic and philosophical system for specialist readers. Formal theoretical reconstruction dominates biographical narrative. H2 applies to this narrow expert monograph.',['https://academic.oup.com/book/34848'],'moderate');
exclude(14,'The historical selections are organized to teach the foundations of mechanics, with quantitative worked material and problems. The publisher describes a hands-on introduction. Course/skill study remains the main structure; H2 applies.',['https://www.simonandschuster.com/books/Mechanics-from-Aristotle-to-Einstein/Michael-J-Crowe/9781888009323'],'moderate');
exclude(16,'A technical reconstruction of Euler’s mechanics for professional physical scientists and graduate/faculty readers. Scientific biography does not displace the specialist technical purpose; H2 applies.',['https://link.springer.com/book/10.1007/978-3-540-74865-6']);
exclude(17,'Boyer’s historical survey was developed as a mathematics-history course text with technical exposition and exercises. The third edition coauthored by Merzbach removes exercises, but retains the systematic textbook structure and course purpose. The two source nominations are editions of the same work; H2 applies.',['https://www.wiley.com/en-us/a-history-of-mathematics-3rd-edition-p-9780470630563','https://mathshistory.st-andrews.ac.uk/Extras/Boyer_books/'],'moderate');
exclude(20,'An edited collection of original mathematical papers on fractals. Its main function is technical primary-source/reference study for mathematically trained readers; introductory historical notes do not change that structure. H2 applies.',['https://www.routledge.com/Classics-On-Fractals/Edgar/p/book/9780367007393']);
exclude(23,'The author describes a collection of classic kinetic-theory papers with commentary, for students, teachers and researchers. The technical primary texts are the main content; H2 applies.',['https://terpconnect.umd.edu/~brush/books/The_Kinetic_Theory_of_Gases.html']);
exclude(26,'The book contains a substantial 260-page career biography, followed by about 495 pages of detailed reconstruction across Liouville’s mathematical research. On balance the dominant structure serves specialist history of mathematics and technical reference. H2 applies to the whole nominated work, before the scientific-biography V3 exception.',['https://link.springer.com/book/10.1007/978-1-4612-0989-8'],'moderate');
exclude(27,'Poincaré’s three-volume research treatise develops specialist celestial-mechanics methods. Goroff’s historical introduction does not turn the whole technical work into narrative nonfiction. H2 applies.',['https://link.springer.com/book/9781563961175']);
exclude(30,'The publisher identifies this as a graduate text on semiclassical quantum chaos. It teaches advanced methods rather than primarily explaining a historical or general argument. H2 applies.',['https://link.springer.com/book/10.1007/978-1-4612-0983-6']);
exclude(31,'The volume assembles 17 original technical quantum-mechanics papers with an expert introduction. Its primary function is specialist reference/source study. H2 applies.');
exclude(36,'The source ISBN identifies Volume I: Fundamentals, by Ángel S. Sanz and Salvador Miret-Artés. It develops Bohmian trajectory methods for graduate researchers; H2 applies.',['https://link.springer.com/book/10.1007/978-3-642-18092-7']);
exclude(38,'Brown’s edited volume centers on Feynman’s dissertation and related technical papers. Introductory historical context does not change its research-monograph purpose. H2 applies.');
exclude(42,'A systematic specialist theory of nonlinear oscillations, with mathematical methods and applications. H2 technical-reference exclusion applies.');
exclude(43,'A graduate mathematical-mechanics textbook organized around formal theory and problem solving. H2 applies; earlier exclusion remains valid.');
exclude(44,'Birkhoff’s research treatise develops dynamical-systems mathematics for specialists. It is not a general explanatory history. H2 applies.');
exclude(49,'A mathematical treatment of differential equations and their geometric methods, with proofs, stability analysis and a supplemental problem list. Primary purpose is advanced technical study/reference; H2 applies. This is the Geometric Theory volume, not Lefschetz’s different Lectures on Differential Equations.',['https://books.google.com/books/about/Differential_Equations.html?hl=en&id=Ey8hPQAACAAJ&output=html_text','https://ci.nii.ac.jp/ncid/BA01429327']);
exclude(50,'Nolte’s Introduction to Modern Dynamics is a teaching text on dynamical methods. It is distinct from his narrative Galileo Unbound. H2 applies.');
exclude(52,'The collected essays include substantial technical research, especially Differentiable Dynamical Systems, rather than forming a sustained general narrative. The primary structure is specialist mathematical reference; H2 applies.',[],'moderate');
exclude(53,'Historical chapters are used to derive and study mathematical population models, with technical boxes and textbook-supplement purpose. The main structure develops specialist modeling methods. H2 applies.',[],'moderate');
exclude(55,'A systematic history-of-economic-thought textbook organized for course study. H2 applies despite broad historical subject matter.');
exclude(56,'Nowak’s book develops mathematical tools and models of evolution for students and researchers. The main purpose is technical training/reference, not narrative nonfiction. H2 applies.');
exclude(58,'The publisher presents Sandmo’s history of economic thought as an introductory textbook. Accessible prose does not remove the course-study structure; H2 applies.',[],'moderate');
exclude(59,'Straffin’s MAA text teaches game-theoretic methods through worked cases and exercises. H2 applies.');
exclude(61,'The foundational von Neumann–Morgenstern work is a specialist mathematical theory treatise, not primarily a general-reader account. H2 applies.');
exclude(62,'Selected original research papers by Sewall Wright, edited by William B. Provine, distinct from Provine’s intellectual biography and Wright’s four-volume Genetics of Populations. The collection is technical reference material; H2 applies.',['https://www.bibliovault.org/BV.book.epl?ISBN=9780226910543']);
exclude(63,'Glass and Mackey develop quantitative physiological models for scientific and medical readers. The book’s main structure teaches the specialist modeling approach. H2 applies.',[],'moderate');
exclude(64,'A graduate-level text on neuronal dynamical systems, with mathematical analysis and exercises. H2 applies.');
exclude(65,'The accessible opening is followed by systematic nonlinear synchronization theory and specialist applications. The whole work primarily serves researchers as a technical reference. H2 applies.',[],'moderate');
exclude(67,'Winfree’s geometric treatment of biological rhythms develops technical models and methods. Its textbook/research-reference purpose triggers H2.');

// Each row is a separate editorial assessment. Values are linear attainments,
// never previously curved contributions. Notes follow E/S/U/M/D/R/F/A/N/P.
function score(i,year,end,raw,notes,scope,eligibility,refs=[],extra={}){
 const a=base(i,eligibility,scope,refs), b=byIndex.get(i);
 Object.assign(a,{status:'recommended',year,yearConfidence:'high',yearNote:'Original publication, distinguished from the source-linked reprint or translation; see cited bibliographic evidence.',
  raw,notes:notes.split('|'),T11:0,T12:0,themeNote:'T11=0: science, mathematics or scientific history is central; no listed unwanted theme predominates. T12=0: the central object is scientific or technological understanding, not war, politics, finance or philosophy as a separate main subject.',
  periodEnd:end,periodConfidence:end===null?'high':'moderate',periodNote:scope,...extra});
 assert.equal(a.notes.length,10,a.title);
 if(b.prior){
  const p=b.prior;
  a.reassessment='Fresh comparison with the cited prior assessment and the new source/publisher evidence retains eligibility and no veto. Each of E/S/U/M/D/R/F/A/N/P was checked against the book-specific notes below; prior linear attainments are retained because the new nomination supplies no contrary quality evidence. The two thematic flags, original year and topic endpoint remain as stated. Source frequency does not increase quality. The earlier matching Amazon snapshot is retained with its actual date; no new count is claimed.';
  a.evidence.push(...[p.reviewAnchor,p.currentReview,p.priorReport].filter(Boolean).map(x=>x.startsWith('analysis/')?x:'analysis/'+x));
 }
 results.push(a);
}
score(0,1989,1638,[18,7,8,9,9,9,6,5,2,2],
 'Drake reconstructs the development from historical texts; detailed claims have not all been rechecked|Connects geometry and mechanics, with little industry or state capacity|Shows how quantification displaces inherited assumptions|Tracks the reasoning behind accelerated motion|Compact single-argument history, separate from the bundled Two New Sciences edition|A durable history of scientific reasoning|Mechanics fits, but adds little new physics for a QFT specialist|Drake’s Galileo scholarship is directly relevant|Focused progression rather than a broad systems story|Terminology is careful within historical context',
 'Central development ends with Galileo’s mature mechanics, assessed endpoint 1638; the old-period deduction reaches its cap.',
 'A concise explanatory history of free fall, not a mechanics course or procedural manual.',
 ['https://search.worldcat.org/title/History-of-free-fall-%3A-Aristotle-to-Galileo-with-an-epilogue-on-%22Pi%22-in-the-sky/oclc/19973717']);
score(1,1993,1630,[18,9,9,9,8,9,6,5,2,2],
 'Essays use historical astronomical evidence and bibliographic investigation|Connects observation, mathematical models and scholarly transmission|Model comparison and handling recalcitrant evidence transfer well|Explains changes in astronomical explanation rather than just dates|Collected essays cause some fragmentation|Historical source analysis remains useful|Astronomy and scientific organization fit, with limited pragmatic breadth|Gingerich’s research specialty matches the subject|Essay structure is readable but less cumulative|Precise historical distinctions',
 'The central Ptolemy–Copernicus–Kepler sequence is assessed through Kepler’s death in 1630; later discussion is contextual.',
 'Historical essays about the development of astronomy, not a textbook for calculating orbits.',
 ['https://wellcomecollection.org/works/kj7a8rtt']);
score(2,2010,1642,[18,10,9,9,7,9,6,5,3,2],
 'Scholarly biography uses Galileo’s scientific and social record|Relates instruments, mathematical work, patronage and institutions|Research support and evidence disputes offer transferable lessons|Explains the scientific work and constraints on its reception|Long biography contains personal detail beyond mechanisms|Durable history of science|Strong scientific organization fit; familiar physics limits marginal value|Heilbron’s historical expertise is directly relevant|A sustained life narrative|Controlled exposition of technical and historical matters',
 'The life of Galileo is central; endpoint 1642.',
 'Scientific biography with explanatory treatment of discoveries, not specialist training.',
 ['https://academic.oup.com/hwj/article-abstract/73/1/318/654088']);
score(3,1994,1612,[18,10,9,9,8,9,6,5,2,2],
 'Reconstructs Clavius from historical and institutional evidence|Joins astronomical evidence, education and Jesuit institutions|Useful account of model revision inside established institutions|Explains why competing cosmologies could remain defensible|Focused book, though its setting is narrow|The argument about scientific change is durable|Science and institutions fit; few production or strategic links|Lattis’s specialist historical study supports authority|Cumulative scholarly argument with some narrow detail|Careful distinction between contemporary and retrospective judgments',
 'Clavius’s career and response to new astronomy are central; endpoint 1612.',
 'An explanatory historical argument about cosmological change, not a technical astronomy manual.',
 ['https://press.uchicago.edu/ucp/books/book/chicago/B/bo3635522.html']);
score(4,2001,1642,[16,8,8,7,8,8,5,4,3,2],
 'Narrative draws on the established Galileo record; less specialist documentation than Heilbron|Relates science to patronage and religious authority|Offers general lessons about evidence and institutional constraint|More biographical explanation than sustained mechanism analysis|Short readable life with limited padding|Historical subject is durable|Scientific biography fits but is largely introductory for this reader|Informed biographical synthesis, not primary Galileo research authority|Clear chronological narrative|Accessible and measured prose',
 'Galileo’s life is central; endpoint 1642.',
 'A general-reader scientific biography; discussion of religion is historical, not religious advocacy.',
 ['https://link.springer.com/book/10.1007/b138551','https://link.springer.com/book/10.1007/3-540-31251-X'],
 {yearNote:'Norwegian original appeared in 2001; the 2005 English translation does not reset publication age.'});
score(5,2014,null,[17,12,10,9,8,9,6,5,3,2],
 'Historical examples and scientific arguments are documented; broad causal claims need care|Connects musical ratios, mathematics, experimental physics and conceptual change|Shows how representations migrate between fields|Explains specific conceptual transfers, not just shared vocabulary|Wide span earns much of its length|Cross-field history is not tied to news cycles|Mathematics and physical science fit; industrial strategy is secondary|Pesic combines scientific training with musical scholarship|A coherent thematic narrative across many periods|Conceptually careful interdisciplinary prose',
 'Broad cross-period account from ancient ratios to modern science; no single central historical endpoint.',
 'Sustained explanatory history for general intellectually engaged readers, not music or physics instruction.',
 ['https://mitpress.mit.edu/9780262027274/music-and-the-making-of-modern-science/']);
score(6,1999,1642,[16,8,7,7,7,8,5,4,3,2],
 'Letters anchor the narrative, but family correspondence only partly reveals scientific causation|Connects personal support, patronage and science|Some lessons about research conditions; much family detail|Scientific mechanisms are not the main strength|Letters and family episodes reduce mechanism density|A lasting scientific life rather than a passing controversy|Scientific biography passes, but familiar physics and domestic emphasis reduce fit|Sobel is an experienced science historian and narrator|Strong narrative built around correspondence|Clear prose with occasional dramatic framing',
 'Galileo’s life is central; endpoint 1642, not merely his daughter’s death in 1634.',
 'A biographical history using letters. Faith is part of the setting, not a religious argument.');
score(9,2003,1620,[17,12,11,9,8,9,7,4,3,2],
 'Scientific biography grounded in Stevin’s documented work; broad influence claims remain interpretive|Joins decimal notation, measurement, mechanics and practical administration|Shows how mathematical standardization improves practical work|Explains links between calculation and engineering problems|Varied examples mostly serve one intellectual life|The mechanisms outlast the historical setting|Mathematics serving engineering and practical organization fits closely|Authors have relevant scientific and historical expertise|Wide-ranging but coherent biography|Clear explanation of unfamiliar historical concepts',
 'Stevin’s life and practical work are central; endpoint 1620.',
 'Publisher explicitly addresses a wide readership through a scientific biography; not a calculation manual.',
 ['https://biblio.ugent.be/publication/210027','https://www.witpress.com/books/978-1-84564-092-7'],
 {yearNote:'Dutch original is documented in 2003 in the author’s university bibliography; the 2008 English edition does not reset production age.'});
score(10,2013,1600,[16,10,9,8,8,9,6,4,3,2],
 'Historical synthesis across medieval traditions; causal compression limits certainty|Connects intellectual transmission, institutions and early physical science|Useful lessons about preservation and transfer of knowledge|Explains precursors to scientific change with less technical depth|Broad narrative is relatively economical|Long-run history is durable|Science and knowledge organization fit, though not high-tech production|Freely’s physics and historical writing provide relevant grounding|Readable progression through traditions|Generally clear synthesis',
 'The central medieval-to-pre-Galilean development is assessed to about 1600; endpoint approximate and capped under H13.',
 'Narrative history of scientific development, not a medieval-science technical reference.',
 ['https://books.google.com/books?id=MfhjAAAAQBAJ'],{periodConfidence:'low'});
score(12,2002,1800,[17,10,10,10,7,9,6,4,2,2],
 'Historical conceptual reconstruction makes its interpretive dependence visible|Connects physical concepts, metaphysics and changing mathematical practice|Shows how a useful concept can survive a change of conceptual foundation|Sustained analysis of what force and mechanics meant|Abstract historical detail lowers density for this reader|Conceptual change remains a durable topic|Mechanics and model formation fit; direct operational utility is limited|Specialist historical scholarship supports the argument|Dense but sustained argument|Careful conceptual vocabulary',
 'The change from seventeenth-century mechanics through Lagrange is central; assessed endpoint 1800.',
 'A sustained historical/philosophical argument about mechanics, not instruction in solving mechanics problems. It is scholarly, but its main object is explanatory conceptual history.',
 ['https://link.springer.com/book/10.1007/978-94-017-3672-5']);
score(13,2010,null,[18,12,12,10,8,9,7,4,3,2],
 'Historical examples and physics support the account; a full source audit was not possible|Relates energy concepts to engines, work, heat and technological practice|Conservation and efficiency constraints transfer across systems|Explains how competing measures became one physical concept|Substantial history mostly advances the central problem|Energy constraints are durable|Energy, engineering and quantitative thinking fit closely|Physics expertise and a documented historical synthesis|Cumulative story around a difficult concept|Precise explanation without making the book a methods course',
 'Cross-period history of the energy concept and its uses, not one bounded historical episode; H13=0.',
 'Explanatory history for science and non-science readers, distinct from a thermodynamics textbook.',
 ['https://academic.oup.com/book/8337','https://academic.oup.com/book/8337/chapter/153980127'],
 {yearNote:'Oxford copyright page states first publication 2010; the 2015 revised edition does not reset P14.'});
score(15,2002,1759,[18,11,10,9,7,9,6,5,3,2],
 'Archival intellectual biography supports scientific and social claims|Connects geodetic measurement, expeditions, institutions and patronage|Shows how measurement becomes accepted authority|Explains evidential disputes and the organization of inquiry|A long life contains detail beyond transferable mechanisms|Scientific institution-building remains relevant|Measurement and research organization fit|Specialist historical scholarship and documented reception|Well-structured life and scientific controversy|Careful handling of context',
 'Maupertuis’s life is central; endpoint 1759.',
 'Narrative intellectual biography, not geodesy training.',
 ['https://press.uchicago.edu/ucp/books/book/chicago/M/bo3631449.html']);
score(18,1967,1910,[18,10,10,9,8,9,6,5,2,2],
 'History traces competing formalisms through original mathematical literature|Connects notation, physical applications and disciplinary adoption|Useful example of why usable representations defeat elegant alternatives|Explains adoption and technical tradeoffs|Focused historical study with some specialist notation|The representation-selection problem is durable|Mathematics and physics fit; little new technical content for the user|Crowe’s scholarship is directly on the subject|A coherent historical sequence|Exact distinctions between vector and quaternion approaches',
 'Central nineteenth-century development and the Gibbs–Heaviside transition extend into the early twentieth century; assessed endpoint 1910, approximate.',
 'Historical explanation of a conceptual change, not a vector-calculus course.',
 ['https://books.google.com/books/about/A_History_of_Vector_Analysis.html?id=xFLvAAAAMAAJ'],{periodConfidence:'low'});
score(19,1979,1918,[18,8,8,9,7,9,6,5,2,2],
 'Detailed mathematical biography based on correspondence and historical sources|Links mathematical ideas, philosophy and professional reception|Offers lessons about abstraction and disciplinary resistance|Reconstructs the conceptual disputes around infinity|Extensive life and technical detail reduce economy|Foundational history remains durable|Mathematical biography fits, with modest practical breadth|Dauben is a specialist historian of mathematics|Sustained but demanding intellectual biography|Careful mathematical-historical language',
 'Cantor’s life and work are central; endpoint 1918.',
 'An intellectual biography and historical account, not a set-theory training text.');
score(21,1997,1899,[18,9,9,10,8,9,6,5,2,2],
 'Reconstructs Poincaré’s memoir, error and revision from historical documents|Connects mathematics with prizes, publication and scientific standards|Error correction and nonlinear reasoning transfer beyond the case|Strong account of the conceptual failure and recovery|A focused study, though mathematically demanding|The story of instability and correction is durable|Dynamical systems and research practice fit|Specialist historical scholarship|Coherent sequence around one research episode|Precise technical-historical exposition',
 'The late-nineteenth-century three-body episode is central; assessed endpoint 1899 for the completed New Methods sequence and immediate legacy.',
 'A historical analysis of Poincaré’s research and its correction. Formal material serves the history; it is not a course in celestial-mechanics methods.',[],{periodConfidence:'low'});
score(22,1976,1915,[18,10,10,10,7,9,6,5,2,2],
 'Extensive documentary history of atomism and statistical physics|Connects physical models, philosophy of evidence and scientific acceptance|Useful lessons about indirect evidence and statistical explanation|Explains emergence of kinetic and irreversible-process reasoning|Two-volume detail is justified for history but expensive for this reader|A durable conceptual history|Statistical physics fits; marginal novelty for a specialist is limited|Brush’s research specialty closely matches the work|Two-volume thematic structure is demanding|Careful distinction between historical and modern concepts',
 'The history centers on nineteenth-century kinetic theory but the author’s contents explicitly extend foundations of statistical mechanics through 1915; endpoint 1915.',
 'A sustained historical account in two volumes. Technical exposition supports historical explanation rather than a course or method handbook.',
 ['https://terpconnect.umd.edu/~brush/books/The_Kind_of_Motion_We_Call_Heat.html','https://doi.org/10.1086/351987'],
 {yearNote:'The author’s own bibliography confirms original two-volume publication in 1976 and reprint in 1986. The 1975 date in some catalog records is not adopted.'});
score(24,1998,1906,[18,9,9,10,7,9,6,5,2,2],
 'Technical understanding and historical evidence support the biography|Connects mechanics, probability and scientific disputes|Statistical reasoning and model acceptance offer reusable lessons|Deep explanation of Boltzmann’s physical argument|Dense physics can exceed what a biographical reader needs|The scientific problems and history are durable|Strong physics fit but much may be familiar|Cercignani’s kinetic-theory authority is directly relevant|Scientific life is coherent but demanding|Careful physical exposition',
 'Boltzmann’s life is central; endpoint 1906.',
 'Publisher explicitly addresses the general public as well as scientists. This is a scientific biography with substantial explanation, not primarily specialist training.',
 ['https://academic.oup.com/book/34859','https://openlibrary.org/books/OL357823M/Ludwig_Boltzmann']);
score(25,2001,1906,[17,9,9,9,8,9,6,4,3,2],
 'Biographical synthesis uses the documented atomism controversy|Connects evidence, theoretical models and professional reception|Illustrates how indirect evidence and explanatory power change consensus|Explains the statistical-atomic argument at a broad level|Compact narrative relative to technical biographies|Long-run history is durable|Physics and reasoning fit, though little strategic breadth|Experienced physicist and science writer|Strong narrative focus|Clear explanation with some simplification',
 'Boltzmann’s scientific life is central; endpoint 1906.',
 'General-reader intellectual biography, not kinetic-theory instruction.');
score(28,1927,null,[14,6,6,7,9,6,4,5,3,2],
 'A primary historical exposition by a major participant; several physical interpretations are now obsolete|Connects atomic physics and stellar structure within science|Some lasting dimensional reasoning, limited current novelty|Explains stellar constraints at a popular level|Three concise lectures|Historical value endures, but scientific currency does not|Mostly familiar popular astrophysics for this reader|Eddington was a leading participant|Clear lecture sequence|Controlled, memorable explanatory prose',
 'Conceptual lectures about stars and atoms, not an account of one historical period. P14 captures age; H13=0.',
 'Popular lectures, distinct from Eddington’s technical stellar-structure treatise. Evaluate as a dated primary exposition; no claim that 1927 theory is current.',
 ['https://www.gutenberg.org/files/73362/73362-h/73362-h.htm']);
score(32,1939,null,[14,8,7,8,6,6,4,4,2,2],
 'Careful contemporary exposition, but prewar physical interpretation is not a present-day account|Connects mechanics, thermodynamics, relativity and quantum concepts|Historical model-comparison value exceeds practical novelty|Substantial explanatory reasoning without a modern treatment|Two-volume scope is long for familiar concepts|History of understanding lasts; scientific coverage is dated|Mostly introductory or historical physics for this user|Serious synthesis, less direct research authority than leading practitioners|Large cumulative exposition is demanding|Generally disciplined conceptual language',
 'A broad conceptual exposition across theories, not a single-period history. The original 1939 production date governs P14.',
 'Explanatory account for readers without advanced mathematics, not a specialist methods course. Retitled reprints remain the same work.',
 ['https://ci.nii.ac.jp/ncid/BA01617440'],
 {yearNote:'First published in 1939 as The Decline of Mechanism in Modern Physics; The Rise of the New Physics is the retitled unabridged reprint.'});
score(34,2011,2010,[17,10,10,9,8,8,6,4,3,2],
 'Forty documented episodes give context; compressed interpretation limits certainty|Connects experiments, theory and scientific organization|Useful cases of competing explanations and evidential shifts|Explains pivotal concepts more than technical procedures|Episode structure keeps the large span manageable|Most history is durable; late frontier interpretations can date|Physics history fits, but much is familiar to the user|Experienced physicist and science writer|Clear chronological architecture|Readable conceptual exposition',
 'The forty-moment historical sequence runs from 1900 to March 2010; endpoint 2010 from the contents.',
 'Narrative history of quantum theory, not a quantum-mechanics course.');
score(35,1966,1930,[15,7,7,8,9,8,5,5,3,2],
 'Participant recollection has value but anecdotal reconstruction needs corroboration|Connects a few experiments and theoretical advances within physics|Some reusable lessons about conceptual change|Accessible explanation of quantum innovations|Short focused account|Historical value remains, with dated framing|Familiar popular quantum history limits marginal value|Gamow was a participant and physicist|Engaging narrative of a bounded period|Clear but sometimes playful simplification',
 'The central thirty-year quantum revolution is 1900–1930; endpoint 1930.',
 'Participant history for general readers, not technical training.',
 ['https://openlibrary.org/books/OL23250236M/Thirty_years_that_shook_physics']);
score(37,1980,1974,[17,9,9,9,8,9,6,5,3,2],
 'Participant knowledge supports the portraits; recollections remain selective evidence|Connects instruments, experiments and physical discoveries|Research judgment and experimental constraints transfer|Explains how discoveries arose, beyond a list of names|Focused portraits convey much history economically|A durable history, with late scientific coverage dated|Particle-physics organization fits; technical content is familiar|Segrè’s experimental authority is directly relevant|Readable portraits rather than a fully integrated systems argument|Clear physical and biographical description',
 'Central modern-physics history extends from X-rays to the quark era; 1974 is an assessed approximate endpoint for the late discovery phase, not an asserted last event. Endpoint confidence is low.',
 'Scientific portraits and recollections, not a particle-physics textbook.',
 ['https://openlibrary.org/books/OL4092459M/From_x-rays_to_quarks'],{periodConfidence:'low'});
score(39,2009,1976,[18,12,10,9,8,9,7,5,3,2],
 'Updated archival evidence informs a contested scientific biography|Connects quantum research, institutions, national constraints and wartime programs|Shows how scientific agency interacts with political institutions|Explains constraints and choices without making every event a single-cause story|Substantial but focused reconstruction|Historical argument outlasts current controversy|Science organization and strategic research fit strongly|Cassidy’s long Heisenberg scholarship supports authority|Accessible life narrative with an explicit interpretive problem|Careful treatment of uncertainty and responsibility',
 'Heisenberg’s scientific life is central; endpoint 1976.',
 'The author explicitly describes a new broadly accessible biography based on his earlier book and new sources. It is not a physics course or a simple reprint.',
 ['https://www.dcassidybooks.com/uncertainty.html'],
 {yearNote:'Author identifies Beyond Uncertainty as a new book published in 2009, based on the earlier Uncertainty and new sources. It is treated as a distinct work, not a dated reprint. Confidence moderate because the relationship is substantial.',yearConfidence:'moderate'});
score(40,2009,null,[16,7,9,9,9,8,5,5,2,2],
 'Argument is informed by physics, but interpretation of reality is not experimentally settled|Links physical theories with epistemological questions, few material systems|Useful distinctions between models, observation and reality|Explains the logical relation between theory and evidence|Short sustained argument|Conceptual questions endure|Physics foundations fit but largely overlap the user’s expertise|Newton’s theoretical-physics expertise is directly relevant|Compact argument, somewhat abstract|Disciplined conceptual distinctions',
 'A timeless interpretive argument about physical reality; no single historical endpoint.',
 'Preface addresses nonscientific readers through an explanatory argument, not specialist technical methods.',[],
 {T12:-10,themeNote:'T11=0: no listed unwanted theme predominates. T12=-10: the central sustained argument concerns philosophy of physical reality and knowledge; physics supplies its examples.'});
score(41,2000,1980,[16,10,9,8,8,9,6,5,2,2],
 'First-person recollections provide access but need cross-checking|Connects mathematics, experiments, computing and scientific communities|Research heuristics and disciplinary change offer reusable lessons|Recollections show discovery paths more than systematic causal proofs|Eleven accounts offer distinct material with some overlap|Discovery history remains useful|Nonlinear science and computation fit|Contributors participated in the developments|Edited recollections are less cumulative than one argument|Technical vocabulary is generally precise',
 'The contents center on the founding research phase from the late 1950s through the 1970s, rather than contemporary chaos research. Assessed endpoint 1980 is approximate; H13 applies.',
 'Scientific memoir collection. Mathematical passages support recollection rather than a systematic methods course.',[],
 {periodConfidence:'low',yearConfidence:'moderate',yearNote:'Publisher/copyright records give 2000; some source and catalog citations give 2001. Use 2000 original production and retain the discrepancy.'});
score(47,1987,null,[16,12,10,8,8,9,6,4,3,2],
 'Reported history and interviews support the account, though a unifying revolution narrative simplifies differences|Connects mathematical ideas, computing and applications across physical and biological systems|Useful intuition about feedback, nonlinear sensitivity and models|Explains core mechanisms without detailed specialist derivations|Rich examples generally advance the main theme|Nonlinear principles remain durable|Good modeling fit, but introductory for a physicist|Gleick’s reporting is strong; technical authority comes from sources|Memorable narrative architecture|Clear analogies with some simplification',
 'Thematic cross-field account of nonlinear science, not one bounded historical episode; H13=0.',
 'General-reader history and explanation of chaos; not a methods textbook. Distinct from Tom O’Neill’s Chaos.');
score(48,1972,1955,[17,12,11,10,8,9,7,5,2,2],
 'Insider evidence is valuable but personal institutional perspective can be selective|Connects mathematics, engineering, wartime needs and early computing institutions|Explains architecture choices and research organization|Substantial account of constraints behind computer designs|Dense history with some older technical detail|The origin of computing retains long-term value|Computing, mathematical tools and engineering fit closely|Goldstine was a central participant|Long historical sequence is coherent but uneven|Technically controlled exposition',
 'The central history runs from Pascal to early electronic computers and von Neumann’s projects; assessed endpoint 1955 for the early-1950s phase, approximate.',
 'Historical narrative of computing development, not a programming or hardware-design manual.',
 ['https://search.worldcat.org/title/The-computer-from-Pascal-to-von-Neumann/oclc/494973'],{periodConfidence:'low'});
score(51,1991,null,[18,10,11,10,9,9,6,5,3,2],
 'Expert exposition distinguishes deterministic laws from limits of prediction|Connects probability, nonlinear physics and broader explanatory examples|Strong reusable cautions about prediction and uncertainty|Explains sensitivity and randomness without procedural training|Short essays are dense with concepts|Core limitations of prediction remain durable|Modeling and heuristics fit, though physics is familiar|Ruelle is a major contributor to the subject|Compact, readable progression|Precise conceptual exposition',
 'Conceptual account of chance and nonlinear behavior; no single historical period.',
 'General explanatory essays, not a dynamical-systems methods course.');
score(57,1986,1985,[18,9,9,10,7,9,5,5,2,2],
 'Detailed intellectual biography uses scientific and personal records|Connects population models, experiments and institutional careers|Shows how model assumptions and evidence shape scientific disagreement|Explains competing mechanisms of evolution|Long technical biography has a considerable reading cost|Historical model disputes remain instructive|Quantitative science fits, but biology is less central to the user|Provine’s history-of-evolution scholarship is directly relevant|Sustained life-and-ideas structure|Careful scientific-historical distinctions',
 'The life and work extend through Wright’s Madison years before the 1986 book. Endpoint 1985 is a low-confidence assessment of covered late work; it is not his 1988 death and is not claimed as a verified final event.',
 'An intellectual biography; technical discussion serves historical explanation. Distinct from the selected research papers.',
 ['https://press.uchicago.edu/ucp/books/book/chicago/S/bo5963711.html'],{periodConfidence:'low'});
score(60,2009,1844,[17,8,8,8,8,9,5,4,3,2],
 'Historical biography reconstructs influences and early notebooks|Connects education, travel, observation and model formation|Offers lessons about incubation and integrating observations|Explains how early experiences led toward natural selection|Focused early-life scope avoids a full-life chronicle|History of inquiry remains durable|Scientific reasoning fits; biological detail is less central|Thomson’s scientific and historical expertise is relevant|Clear formation-to-theory narrative|Measured biographical prose',
 'Main focus is Darwin’s formative years through early theory drafts; assessed endpoint 1844. Later Origin publication is contextual, not the central period endpoint. Confidence low.',
 'Narrative scientific biography, not evolutionary-biology instruction.',
 ['https://www.degruyterbrill.com/document/doi/10.12987/9780300156188/html'],{periodConfidence:'low'});
score(68,2018,null,[17,13,12,10,8,9,7,5,3,2],
 'Explanatory history tied to explicit mathematical concepts; broad analogies need careful scope|Connects trajectories, phase space, nonlinear science and biological models|A transferable way to organize dynamic systems|Explains how state spaces generalize physical trajectories|Wide scope is unified by one conceptual thread|Dynamical representations are durable|Quantitative modeling across domains fits strongly|Nolte’s dynamics expertise directly supports the account|A cumulative conceptual journey|Clear distinction between physical paths and abstract state spaces',
 'Cross-period and cross-domain account from Galileo to modern dynamics; no single central period.',
 'Oxford presents a narrative conceptual history, distinct from Nolte’s textbook Introduction to Modern Dynamics.',
 ['https://academic.oup.com/book/26790']);

const retainedNotes={
 q0097:'Historical and mathematical sources still support the careful account|Crosses celestial mechanics and nonlinear-system thinking, with little production or institutional breadth|Persistence and perturbation limits remain reusable|Conceptual explanation of stability is substantial|Detailed historical context earns much of the length|The stability problem is durable|Direct mathematics and physics fit remains high|Author expertise remains directly relevant|Technical-historical structure is demanding|The mathematical distinctions remain precise',
 q0114:'Historical and mathematical evidence still supports the account|Links astronomy, mathematics and nonlinear behavior within a limited domain range|Predictability and stability are reusable ideas|The relation between orbital motion and chaos remains explained|Compact narrative and explanation justify most of the length|The underlying conceptual problems remain durable|Strong dynamical-systems fit|Authors have direct subject expertise|A coherent story links historical episodes|Technical vocabulary remains controlled',
 q0149:'Detailed source-based scientific biography remains the evidence base|Connects physical ideas with research communities but limited wider systems|Conceptual invention offers utility, with much biography-specific detail|The reconstruction of physical reasoning remains substantial|Long biography includes material beyond reusable mechanisms|Einstein’s scientific development retains historical value|Direct physics and scientific-organization fit|Pais combines expertise and personal access|Strong intellectual-life architecture|Exact discussion of physical concepts',
 q0167:'Documented conceptual history remains the basis of evidence confidence|Connects experiments, mathematical ideas and interpretations|Model formation and interpretation retain transferable value|The conceptual development is explained without being a methods course|Detailed historical argument creates a reading cost|The history remains useful after current disputes|Direct quantum-physics fit, despite familiarity|Jammer’s specialist historical authority is relevant|Demanding scholarly narrative|Precise conceptual distinctions',
 g1003:'Natural selection is a serious evidential argument; nineteenth-century inheritance assumptions limit current reliability|Connects variation, selection and biogeography more than industrial systems|Selection and constraint offer transferable models|Sustained causal argument, with mechanisms unavailable in Darwin’s time|Long cumulative cases can repeat for a modern expert|The central scientific argument has durable historical value|Biology is secondary to the user’s main domains|Foundational primary scientific authority|Cumulative argument is readable but Victorian in structure|Careful qualifications within the period’s vocabulary',
 sync:'Scientific explanations and examples still support the high evidence assessment|Coherently links synchronization across physical, biological and engineered systems|Coupling and collective behavior yield reusable models|Mechanisms of entrainment and emergence are central|Examples mostly develop the central account|Core nonlinear mechanisms are durable|Strong science and modeling fit|Strogatz has direct research authority|Clear cumulative narrative|Precise explanations without excessive formalism'
};
for(const [id,notes] of Object.entries(retainedNotes)){
 const b=packet.find(b=>b.id===id),p=b.prior;
 const i=+b.appearances.find(a=>a.source===136).occurrence.split(':')[1];
 score(i,p.year,p.periodEnd,p.raw,notes,
  p.periodEnd===null?'Rechecked as a conceptual or broad cross-period account; no single central historical period.':'Rechecked central historical scope; retained endpoint '+p.periodEnd+'.',
  id==='q0097'?'Publisher describes a semipopular historical and explanatory account for mathematically literate nonspecialists. Formal content serves the story; it is not a specialist methods course.':
  id==='q0149'?'Scientific intellectual biography; physical derivations serve the history rather than course instruction.':
  id==='g1003'?'A sustained primary scientific argument for a broad audience, not a textbook. Evaluate in its historical scientific context, not as a current genetics reference.':
  'Sustained explanatory science/history for readers beyond specialist training; no hard exclusion applies.',
  [],{T11:p.T11,T12:p.T12,amazon:p.amazon,reader:p.reader,yearConfidence:p.yearConfidence||'high',periodConfidence:p.periodConfidence||'moderate'});
}
assert.equal(results.length,69);
assert.equal(new Set(results.map(x=>x.id)).size,69);
for(const a of results)if(a.status==='recommended'){
 const b=packet.find(b=>b.id===a.id);
 const source=b.appearances.find(x=>x.source===136);
 a.sourceIndex=+source.occurrence.split(':')[1];
 a.purchaseUrl=b.prior?.purchaseUrl||source.sourceUrls?.find(u=>u.includes('amazon.'))||'https://www.amazon.de/s?k='+encodeURIComponent(a.title+' '+a.author);
 a.purchaseFormat='Source-linked edition locator; format and stock require verification. Search locator is used where no product was resolved.';
 a.reader=a.reader||'Unavailable: no verified aggregate from the five requested reader services.';
 a.reason='No serious V1–V5 veto is established by the retrieved evidence. '+a.reason+' The numerical assessment is editorial judgment with moderate confidence, not a publisher rating.';
}
fs.writeFileSync(dir+'assessments-draft.json',JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify({total:results.length,excluded:results.filter(x=>x.status==='excluded').length,eligible:results.filter(x=>x.status==='recommended').length}));
