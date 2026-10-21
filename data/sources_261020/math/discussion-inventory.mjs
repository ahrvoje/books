import fs from 'node:fs';
import {clean} from './readable.mjs';
const dir='data/sources_261020/math/';
const base=JSON.parse(fs.readFileSync(dir+'inventory.json','utf8')).sources;
function fresh(id){return {...base.find(s=>s.source===id),books:[],nonbooks:[],unresolvedReferences:[]};}
function add(s,title,author,locator,quote,notes='',extraUrls=[]){
 const e={title,...author?{author}:{},sourceLocators:[locator],sourceQuotes:[quote],sourceUrls:[s.url,...extraUrls],identityNotes:notes};
 const prior=s.books.find(b=>b.title===title);
 if(prior){prior.sourceLocators.push(locator);prior.sourceQuotes.push(quote);prior.sourceUrls=[...new Set([...prior.sourceUrls,...extraUrls])];}
 else s.books.push(e);
}
function reddit(s,rows){
 const lines=new Map(fs.readFileSync(dir+s.source+'-readable.txt','utf8').split('\n').map(l=>{const m=l.match(/^L(\d+):\s*(.*)$/);return m?[Number(m[1]),m[2]]:[-1,''];}));
 for(const row of rows.trim().split('\n')){
  const [n,title,author,notes]=row.split('|');
  add(s,title,author,'indexed thread line '+n,lines.get(Number(n))||'',notes||'Book identity expanded from the source title and author; edition not specified.');
 }
 s.coverage={
  status:'partial',
  method:'All lines of the publicly indexed main thread were collected. Every visible More replies link and its ordinary comment permalink was attempted through web retrieval.',
  visibleSourceLineRange:s.source===137?'L0–L921':'L0–L189',
  fullIndexedPageLines:s.source===137?1326:566,
  visibleExpansionLinksAttempted:s.source===137?33:4,
  expansionResult:'All returned cache misses. Direct HTML presented an anti-bot challenge and public JSON endpoint returned403; no challenge was bypassed.',
  raw:[`raw/${s.source}-page.html`,`raw/${s.source}-comments.json`,`raw/${s.source}-web-*.json`,`raw/${s.source}-expand-*.json`,'raw/reddit-permalinks-*.json'],
  readable:s.source+'-readable.txt',
  limitations:['Hidden replies and deleted/unavailable content could not be verified. Related-post recommendation widgets are preserved in raw text but are not treated as titles from this thread. No claim of complete thread coverage.']
 };
}
const r137=fresh(137);
reddit(r137,`
19|Real and Complex Analysis|Walter Rudin
49|Introduction to Probability|Joseph K. Blitzstein; Jessica Hwang|Source misspells Blitzstein as Blizstein.
75|Lectures on Probability Theory and Mathematical Statistics|Marco Taboga|Source shorthand: Taboga’s lecture on probability.
75|Statistical Inference|George Casella; Roger L. Berger|Source calls it Casella & burger’s mathematical statistics; exact title inferred from distinctive author pair, to verify before assessment.
99|Probability Theory: The Logic of Science|E. T. Jaynes
116|Primes of the Form x² + ny²|David A. Cox
131|Algebraic Number Theory|J. W. S. Cassels; A. Fröhlich (editors)|Distinctive Cassels and Fröhlich author/editor shorthand in a class-field-theory comparison.
138|A Gentle Course in Local Class Field Theory|Pierre Guillot
264|Thermodynamics and an Introduction to Thermostatistics|Herbert B. Callen
273|Algebraic Geometry and Arithmetic Curves|Qing Liu
273|Algebraic Geometry|Robin Hartshorne|Mentioned as Hartshorne, in an explicit comparison of scheme/cohomology textbooks.
273|The Rising Sea: Foundations of Algebraic Geometry|Ravi Vakil|Mentioned as Vakil, in an explicit comparison of scheme/cohomology texts; manuscript version/date not given.
280|Algebra: Chapter 0|Paolo Aluffi
297|Book of Proof|Richard Hammack
306|Calculus on Manifolds|Michael Spivak
308|Curso de Análise, Volume 1|Elon Lages Lima|Probable identity from Brazilian single-variable analysis and nickname Elão; source does not print full title. Needs edition/identity confirmation.
329|Curso de Análise, Volume 2|Elon Lages Lima|Source explicitly adds Elão volume 2; title expansion remains to verify.
309|Structure and Interpretation of Computer Programs|Harold Abelson; Gerald Jay Sussman; Julie Sussman|Source uses SICP and links the MIT Press book.
350|Abstract Algebra|I. N. Herstein
365|Topics in Algebra|I. N. Herstein
384|Numerical Linear Algebra|Lloyd N. Trefethen; David Bau III
395|Vector Calculus, Linear Algebra, and Differential Forms: A Unified Approach|John H. Hubbard; Barbara Burke Hubbard
397|Mathematical Omnibus: Thirty Lectures on Classic Mathematics|Dmitry Fuchs; Serge Tabachnikov
399|Basic Notions of Algebra|Igor R. Shafarevich
401|A Singular Mathematical Promenade|Étienne Ghys
403|Introduction to Representation Theory|Pavel Etingof et al.
405|Gauge Fields, Knots, and Gravity|John C. Baez; Javier P. Muniain
407|The KAM Story: A Friendly Introduction to the Content, History, and Significance of Classical Kolmogorov–Arnold–Moser Theory|H. Scott Dumas
409|All of Statistics: A Concise Course in Statistical Inference|Larry Wasserman
410|Quantum Theory for Mathematicians|Brian C. Hall
412|Introduction to Quantum Mechanics|Alexander Givental|Source misspells Mechanics.
414|Mathematical Methods of Classical Mechanics|V. I. Arnold
416|Teichmüller Theory, Volume 1|John H. Hubbard
418|Homotopical Topology|Anatoly T. Fomenko; Dmitry Fuchs
420|Introduction to the Modern Theory of Dynamical Systems|Anatole Katok; Boris Hasselblatt
422|Princeton Lectures in Analysis|Elias M. Stein; Rami Shakarchi|Explicit series nomination; source says portions of different volumes. Do not create unspecified new individual volume nominations.
424|The Road to Reality: A Complete Guide to the Laws of the Universe|Roger Penrose
425|A Course in Mathematics for Students of Physics, Volume 2|Paul Bamberg; Shlomo Sternberg
427|Introduction to Modern Number Theory: Fundamental Problems, Ideas and Theories|Yuri I. Manin; Alexei A. Panchishkin
429|Discriminants, Resultants, and Multidimensional Determinants|I. M. Gelfand; M. M. Kapranov; A. V. Zelevinsky
432|Computers, Rigidity, and Moduli|Shmuel Weinberger
434|Abel's Theorem in Problems and Solutions|V. B. Alekseev
436|Groups and Symmetries|Yvette Kosmann-Schwarzbach
438|Random Walk and the Heat Equation|Gregory F. Lawler
440|The Mathematical Theory of Communication|Claude E. Shannon; Warren Weaver
442|On Numbers and Games|John H. Conway
442|Surreal Numbers|Donald E. Knuth
443|Conjugate Duality and Optimization|R. Tyrrell Rockafellar
489|Introduction to Commutative Algebra|Michael F. Atiyah; I. G. Macdonald|Title-only nomination; author expansion is the standard book identity, to confirm if necessary.
524|Complex Analysis|Lars Ahlfors
539|Concrete Mathematics|Ronald L. Graham; Donald E. Knuth; Oren Patashnik
596|Journey through Genius|William Dunham
613|Naive Set Theory|Paul R. Halmos
613|Algebra|Michael Artin
613|Combinatorial Set Theory: With a Gentle Introduction to Forcing|Lorenz J. Halbeisen
639|Linear Algebra Done Right|Sheldon Axler
646|A Book of Abstract Algebra|Charles C. Pinter|Source shorthand Pinter’s Abstract Algebra.
656|Morse Theory|John Milnor
657|Real Analysis: Measure Theory, Integration, and Hilbert Spaces|Elias M. Stein; Rami Shakarchi|Explicitly volume3 of Princeton Lectures in Analysis; not a duplicate of the unspecified full-series nomination.
659|Introduction to 3-Manifolds|Jennifer Schultens
665|Regularity Theory for Elliptic PDE|Xavier Fernández-Real; Xavier Ros-Oton|Source gives Fernandez; manuscript/edition identity needs confirmation because comment predates some print editions.
667|Stochastic Calculus|Paolo Baldi
669|Brownian Motion|Peter Mörters; Yuval Peres|Source misspells Mörters as Mortens.
671|Functions of Bounded Variation and Free Discontinuity Problems|Luigi Ambrosio; Nicola Fusco; Diego Pallara
678|Visual Group Theory|Nathan Carter
724|Series on Mathematical Analysis|Elias Zakon|Source nominates a series without naming individual volumes; do not silently choose one.
731|Contemporary Abstract Algebra|Joseph A. Gallian
750|Rapid Interpretation of EKGs|Dale Dubin
770|Foundations of Analysis|Edmund Landau
780|Calculus, Volume 1|Tom M. Apostol
788|Noncommutative Geometry|Alain Connes
795|Commutative Algebra with a View toward Algebraic Geometry|David Eisenbud
795|Foundations of Stable Homotopy Theory|David Barnes; Constanze Roitzheim
835|Molecular Thermodynamics|Donald A. McQuarrie; John D. Simon
843|Elementary Linear Algebra|Howard Anton; Chris Rorres
846|Elementary Differential Geometry|Andrew Pressley
850|Mathematics for Computer Science|Eric Lehman; F. Thomson Leighton; Albert R. Meyer
858|Div, Grad, Curl, and All That|H. M. Schey
881|A First Course in Algebraic Topology|Czes Kosniowski
905|Darwin's Dangerous Idea|Daniel C. Dennett
921|Basic Economics|Thomas Sowell`);
r137.nonbooks.push(
 {title:'Sign and Geometric Meaning of Curvature',author:'Mikhail Gromov',sourceLocators:['indexed thread lines431,663'],sourceQuotes:['Gromov, "Sign and geometric meaning of curvature".'],sourceUrls:[r137.url,'https://www.ihes.fr/~gromov/wp-content/uploads/2018/08/177.pdf','https://doi.org/10.1007/BF02925201'],identityNotes:'Author-hosted text and journal DOI identify a long journal article/expanded lecture, not an individual book.'},
 {title:'Harvard Stat 110 lectures',sourceLocators:['indexed thread line66'],sourceUrls:[r137.url],identityNotes:'Online lecture course.'},
 {title:'this one — YouTube link',sourceLocators:['indexed thread line913'],sourceUrls:[r137.url],identityNotes:'Video link, not an identified book.'}
);
r137.unresolvedReferences.push(
 {title:'Convex geometry',author:'R. Tyrrell Rockafellar',sourceLocators:['indexed thread line443'],sourceQuotes:['Rokafellar’s "Convex geometry" and "Conjugate duality and optimization"'],sourceUrls:[r137.url],identityNotes:'No confident exact Rockafellar work under the first supplied title. Possible misnaming of Convex Analysis; not silently substituted.'},
 {title:'Serre’s typical books',author:'Jean-Pierre Serre',sourceLocators:['indexed thread line138'],sourceUrls:[r137.url],identityNotes:'Author-only comparison; no particular title specified.'},
 {title:'Unnamed mathematics-history book about Egyptian fractions',sourceLocators:['indexed thread lines568–604'],sourceUrls:[r137.url],identityNotes:'Commenter cannot remember title; another participant separately nominates Journey through Genius, captured above, but identity is not established.'},
 {title:'Unnamed book about converting decimals into fractions',sourceLocators:['indexed thread line570'],sourceUrls:[r137.url],identityNotes:'No title or author provided.'},
 {title:'All the O’Reilly books',sourceLocators:['indexed thread line866'],sourceUrls:[r137.url],identityNotes:'Open publisher-level recommendation; not enumerable source books.'}
);
fs.writeFileSync(dir+'137-inventory.json',JSON.stringify(r137,null,2)+'\n');
const r138=fresh(138);
reddit(r138,`
19|Nonlinear Dynamics and Chaos|Steven H. Strogatz
48|The Elements of Statistical Learning|Trevor Hastie; Robert Tibshirani; Jerome Friedman
50|An Introduction to Statistical Learning|Gareth James; Daniela Witten; Trevor Hastie; Robert Tibshirani|R/Python edition not specified; author set may vary by edition.
76|The Symmetries of Things|John H. Conway; Heidi Burgiel; Chaim Goodman-Strauss
103|The KAM Story: A Friendly Introduction to the Content, History, and Significance of Classical Kolmogorov–Arnold–Moser Theory|H. Scott Dumas
112|All the Mathematics You Missed: But Need to Know for Graduate School|Thomas A. Garrity|Source shorthand “All the math you need.”
120|A Panoramic View of Riemannian Geometry|Marcel Berger
131|Visual Group Theory|Nathan Carter
140|Complex Analysis|Theodore W. Gamelin
148|Visual Complex Analysis|Tristan Needham
156|High-Dimensional Probability|Roman Vershynin
164|An Introduction to Manifolds|Loring W. Tu|Identifiable from Tu’s manifolds textbook shorthand.
171|Differential Geometry: Connections, Curvature, and Characteristic Classes|Loring W. Tu|Source explicitly identifies Tu’s 2017 Differential Geometry book.
188|Elliptic Curves, Modular Forms and Their L-Functions|Álvaro Lozano-Robledo
188|The Road to Reality: A Complete Guide to the Laws of the Universe|Roger Penrose|Source says “The Royal Road by Roger Penrose”; likely title conflation with Holme’s separately named Royal Road. Resolve before assessment.
188|Gödel, Escher, Bach: An Eternal Golden Braid|Douglas R. Hofstadter
189|Introduction to Modern Number Theory: Fundamental Problems, Ideas and Theories|Yuri I. Manin; Alexei A. Panchishkin
189|A Royal Road to Algebraic Geometry|Audun Holme
189|The Princeton Companion to Mathematics|Timothy Gowers; June Barrow-Green; Imre Leader (editors)|Source calls this “Princeton’s Companion”; field context supports pure-mathematics volume, but exact volume is not stated.`);
r138.nonbooks.push(
 {title:'Differential Geometry course notes',author:'Lia Vaš',sourceLocators:['indexed thread line123'],sourceUrls:[r138.url,'https://liavas.net/courses/math430/'],identityNotes:'Explicit course notes link; no standalone book nominated.'},
 {title:'Differential Geometry course notes',author:'Theodore Shifrin',sourceLocators:['indexed thread line123'],sourceUrls:[r138.url,'http://alpha.math.uga.edu/~shifrin/'],identityNotes:'Explicit course notes link; no standalone book title specified.'},
 {title:'What Is a ...?',sourceLocators:['indexed thread line189'],sourceUrls:[r138.url],identityNotes:'AMS column, not a single book.'}
);
r138.unresolvedReferences.push({title:'AMS Student Mathematical Library',sourceLocators:['indexed thread line84'],sourceQuotes:['Most of the AMS student library texts are like this.'],sourceUrls:[r138.url,'https://bookstore.ams.org/'],identityNotes:'Open series-wide suggestion; individual titles not specified.'});
fs.writeFileSync(dir+'138-inventory.json',JSON.stringify(r138,null,2)+'\n');
const mo=fresh(140);
const posts=new Map();
for(const kind of ['question','answers','comments','answer-comments']){
 const items=JSON.parse(fs.readFileSync(dir+`raw/140-${kind}-api.json`,'utf8')).items;
 for(const p of items)posts.set(String(p.answer_id||p.comment_id||p.question_id),{...p,kind});
}
const rows140=`
322995|Galois' Dream|Michio Kuga
322995|Indra's Pearls: The Vision of Felix Klein|David Mumford; Caroline Series; David Wright
322995|Symmetry|Hermann Weyl
322995|Geometry Revealed|Marcel Berger
322995|Geometry and the Imagination|David Hilbert; S. Cohn-Vossen
322995|Fourier Analysis|T. W. Körner
322995|The Pleasures of Counting|T. W. Körner
322995|What Are Numbers?|A. A. Kirillov
322995|Huygens and Barrow, Newton and Hooke|V. I. Arnold
322995|Classical Mechanics with Calculus of Variations and Optimal Control|Mark Levi
322995|Group Theory and Physics|Shlomo Sternberg
322995|Celestial Mechanics|Shlomo Sternberg
322995|Number Theory: An Approach through History from Hammurapi to Legendre|André Weil
322995|The Road to Reality: A Complete Guide to the Laws of the Universe|Roger Penrose
323091|Computing the Continuous Discretely|Matthias Beck; Sinai Robins
323091|Never a Dull Moment: Hassler Whitney, Mathematics Pioneer|Keith Kendig
323091|Learning Modern Algebra from Early Attempts to Prove Fermat's Last Theorem|Al Cuoco; Joseph Rotman
323091|Möbius and His Band: Mathematics and Astronomy in Nineteenth-Century Germany|John Fauvel; Raymond Flood; Robin Wilson (editors)
323025|A Singular Mathematical Promenade|Étienne Ghys
323025|Leçons de mathématiques d'aujourd'hui||Explicit five-volume collection nomination; no individual volume selected.
323062|What's Happening in the Mathematical Sciences||Explicit AMS series nomination, not an invitation to discover unrelated titles.
434498|Fearless Symmetry|Avner Ash; Robert Gross
434498|Elliptic Tales|Avner Ash; Robert Gross
434498|Summing It Up|Avner Ash; Robert Gross
434487|The Symmetries of Things|John H. Conway; Heidi Burgiel; Chaim Goodman-Strauss
403679|Number Theory Revealed: A Masterclass|Andrew Granville
403679|p-adic Analysis Compared with Real|Svetlana Katok
403679|p-adic Numbers: An Introduction|Fernando Q. Gouvêa
403679|Problems from the Book|Titu Andreescu; Gabriel Dospinescu
403679|Straight from the Book|Titu Andreescu; Gabriel Dospinescu
403676|Galois Theory|David A. Cox
395833|Change and Variations|Jeremy Gray|Source spells author Grey; linked Springer book identifies Gray.
331789|Modern Cryptography and Elliptic Curves: A Beginner's Guide|Thomas R. Shemanske
331784|Office Hours with a Geometric Group Theorist|Matt Clay; Dan Margalit (editors)
331256|Moonshine beyond the Monster|Terry Gannon
323070|Proofs from THE BOOK|Martin Aigner; Günter M. Ziegler
323059|Algebraic Topology|Allen Hatcher
323045|Chaos: Making a New Science|James Gleick
322996|Birth of a Theorem: A Mathematical Adventure|Cédric Villani
322996|Ten Great Ideas about Chance|Persi Diaconis; Brian Skyrms
323039|Number Theory in Science and Communication|Manfred R. Schroeder
323027|The Code Book|Simon Singh
323026|The Development of Prime Number Theory: From Euclid to Hardy and Littlewood|Władysław Narkiewicz
323026|Rational Number Theory in the 20th Century: From PNT to FLT|Władysław Narkiewicz
323026|Twelve Landmarks of Twentieth-Century Analysis|Didier Choimet; Hervé Queffélec
323024|Calculus Made Easy|Silvanus P. Thompson
323004|Number Theory 1: Fermat's Dream|Kazuya Kato; Nobushige Kurokawa; Takeshi Saito
323004|Number Theory 2: Introduction to Class Field Theory|Kazuya Kato; Nobushige Kurokawa; Takeshi Saito
323004|Number Theory 3: Iwasawa Theory and Modular Forms|Nobushige Kurokawa; Masato Kurihara; Takeshi Saito
323016|The Irrationals|Julian Havil
323016|Gamma: Exploring Euler's Constant|Julian Havil|Answer’s “Exploring Gamma” corrected by comment806187.
323007|How to Bake Pi|Eugenia Cheng
323006|Elementary Applied Topology|Robert Ghrist
323005|A Mathematical Gift: The Interplay between Topology, Functions, Geometry, and Algebra|Kenji Ueno; Koji Shiga; Shigeyuki Morita|Source nominates three-volume set and includes Toshikazu Sunada in its byline; exact volume contributor roles require publisher check.
322997|The KAM Story: A Friendly Introduction to the Content, History, and Significance of Classical Kolmogorov–Arnold–Moser Theory|H. Scott Dumas
1348173|The Princeton Companion to Mathematics|Timothy Gowers; June Barrow-Green; Imre Leader (editors)
1348173|The Princeton Companion to Applied Mathematics|Nicholas J. Higham et al. (editors)
807191|Mathematical Thought from Ancient to Modern Times|Morris Kline
807191|Mathematics: Form and Function|Saunders Mac Lane
806958|Neural Networks and Deep Learning|Michael Nielsen|Source explicitly links the online textbook, not a generic topic.
806641|Everything and More: A Compact History of Infinity|David Foster Wallace
806585|Visual Complex Analysis|Tristan Needham
806304|A Comprehensive Introduction to Differential Geometry|Michael Spivak|Source particularly recommends volume2 of the multivolume work.
806211|The Calculus Gallery|William Dunham
806026|The Princeton Companion to Mathematics|Timothy Gowers; June Barrow-Green; Imre Leader (editors)
805890|An Elementary Primer for Gauge Theory|K. Moriyasu|Source misspells author Moriasu.
805818|History of Topology|I. M. James (editor)
805804|Love and Math|Edward Frenkel
805803|Mathematical Omnibus: Thirty Lectures on Classic Mathematics|Dmitry Fuchs; Serge Tabachnikov|Bare source link bookstore.ams.org/mbk-46 resolved using AMS mbk046-endmatter.pdf.
805801|Grothendieck–Serre Correspondence|Alexander Grothendieck; Jean-Pierre Serre|Collection of correspondence explicitly named; editor/edition not specified.
805801|Birth of a Theorem: A Mathematical Adventure|Cédric Villani
1122248|The Skeleton Key of Mathematics: A Simple Account of Complex Algebraic Theories|Dudley E. Littlewood
826024|Fermat's Last Theorem|Simon Singh|Author inherited from parent answer323027; US title Fermat's Enigma is the same work.
805968|The Story of Algebraic Numbers in the First Half of the 20th Century: From Hilbert to Tate|Władysław Narkiewicz
805883|Random Walks and Electric Networks|Peter G. Doyle; J. Laurie Snell`.trim().split('\n');
for(const row of rows140){
 const [id,title,author,notes]=row.split('|'),p=posts.get(id);
 const text=clean(p.body).replace(/\[LINK [^\]]+\]\s*/g,'');
 const needle=title.split(':')[0].toLowerCase();
 let line=text.split('\n').find(l=>l.toLowerCase().includes(needle));
 if(!line)line=text.split('\n').find(l=>author&&l.toLowerCase().includes(author.split(/[;,]/)[0].split(' ').at(-1).toLowerCase()))||text;
 const quote=line.split(/\s+/).slice(0,25).join(' ');
 const link=p.kind.includes('comments')?mo.url+'#comment'+id+'_'+p.post_id:'https://mathoverflow.net/a/'+id;
 const extra=[link,...[...p.body.matchAll(/href=["']([^"']+)/g)].map(m=>m[1])];
 add(mo,title,author,p.kind+' '+id,quote,notes||'Title explicitly named in this answer/comment; no eligibility decision.',extra);
}
mo.unresolvedReferences.push(
 {title:'An unidentified book possibly by John Milnor',author:'John Milnor (uncertain)',commentIds:[1119085],sourceUrls:[mo.url+'#comment1119085_322987'],identityNotes:'Commenter explicitly uncertain about both title and author; not merged with Morse Theory.'},
 {title:'Dieudonné’s history books on algebraic geometry',author:'Jean Dieudonné',commentIds:[805801],sourceUrls:[mo.url+'#comment805801_322987'],identityNotes:'No titles specified; repeated subject wording may be a typo. Do not invent individual works.'},
 {title:'Carus Mathematical Monographs',commentIds:[323016],sourceUrls:['https://mathoverflow.net/a/323016'],identityNotes:'Open series-level recommendation; explicit individual nominations are separately captured.'}
);
mo.nonbooks.push(
 {title:'Zeros of Entire Fourier Transforms',author:'Dimitar K. Dimitrov; Peter K. Rusev',sourceLocators:['answer323091'],sourceUrls:[mo.url,'https://repositorio.unesp.br/entities/publication/5e82f870-eed5-4a72-974e-850e576ad149'],identityNotes:'University repository explicitly classifies the 2011 East Journal on Approximations item as a journal article.'},
 {title:'Möbius and His Band chapter titles',sourceLocators:['answer323091'],sourceQuotes:['A Saxon mathematician; The German mathematical community; The astronomical revolution; Möbius’s geometrical mechanics; The development of topology; Möbius’s modern legacy'],sourceUrls:[mo.url],identityNotes:'Six explicitly listed constituent essays of the captured collection; not six separate books.'},
 {title:'On the Hypotheses Which Lie at the Foundations of Geometry',author:'Bernhard Riemann',commentIds:[806305],sourceUrls:[mo.url+'#comment806305_322987'],identityNotes:'Source explicitly identifies an essay, discussed inside Spivak.'},
 {title:'Disquisitiones circa superficies curvas',author:'Carl Friedrich Gauss',commentIds:[806304],sourceUrls:[mo.url+'#comment806304_322987'],identityNotes:'Historical mathematical memoir cited as an embedded text inside Spivak, not a separately nominated book edition.'},
 {title:'ICM surveys',commentIds:[805869],sourceUrls:[mo.url+'#comment805869_322987','https://impa.br/icm2018/'],identityNotes:'Comment explicitly says “Not a book.”'},
 {title:'Other MathOverflow recommendation thread',commentIds:[806990],sourceUrls:[mo.url+'#comment806990_323091','https://mathoverflow.net/questions/31879/are-there-other-nice-math-books-close-to-the-style-of-tristan-needham/102712#102712'],identityNotes:'External discussion link; titles outside this source were not added.'}
);
mo.coverage={status:'complete',method:'Public Stack Exchange API question, all 26 answers, all 19 question comments and all 20 answer comments; every response has has_more=false. Main HTML preserved independently.',answerCount:26,questionCommentCount:19,answerCommentCount:20,raw:['raw/140-page.html','raw/140-question-api.json','raw/140-answers-api.json','raw/140-comments-api.json','raw/140-answer-comments-api.json'],readable:'140-readable.txt',imageInspection:[{answerId:323006,url:'https://i.sstatic.net/53XKq.png',localFile:'raw/140-answer323006.png',inspected:'2026-10-20',result:'Viewed full image: sphere with latitude curves, arrows and marked points; no text, book cover or additional title.'}],limitations:['Deleted or moderator-only content is not publicly available. External recommendation threads not expanded into new nominations.']};
fs.writeFileSync(dir+'140-inventory.json',JSON.stringify(mo,null,2)+'\n');
console.log([r137,r138,mo].map(s=>({source:s.source,books:s.books.length,nonbooks:s.nonbooks.length,unresolved:s.unresolvedReferences.length})));
