import fs from 'node:fs';
import {clean} from './readable.mjs';
const dir='data/sources_261020/math/';
const urls={
 136:'https://www.physics.purdue.edu/nlo/ReadingList.html',
 137:'https://www.reddit.com/r/math/comments/ovw4f7/what_book_made_gave_you_the_aha_moment/',
 138:'https://www.reddit.com/r/math/comments/18uy6dv/wellwritten_textbooks_with_a_midlevel_of_rigor/',
 139:'https://people.uncw.edu/hermanr/booklist.htm',
 140:'https://mathoverflow.net/questions/322987/good-casual-advanced-math-books'
};
const titles={136:'Reading List for Galileo Unbound',137:'What book made gave you the Aha! Moment?',138:'Well-written textbooks with a "midlevel" of rigor',139:'Reading List for Physics & Mathematics Majors — R. L. Herman, UNCW',140:'Good "casual" advanced math books'};
const sources=Object.keys(urls).map(id=>({source:Number(id),url:urls[id],title:titles[id],retrieved:'2026-10-20',coverage:{status:'in-progress'},books:[],nonbooks:[],unresolvedReferences:[]}));
const source=id=>sources.find(s=>s.source===id);
function book(id,title,author,loc,quote,extraUrls=[],identityNotes=''){
 const entry={title,...author?{author}:{},sourceLocators:[loc],sourceQuotes:[quote],sourceUrls:[urls[id],...extraUrls],identityNotes};
 const prior=source(id).books.find(b=>b.title===title);
 if(prior){prior.sourceLocators.push(loc);prior.sourceQuotes.push(quote);prior.sourceUrls=[...new Set([...prior.sourceUrls,...extraUrls])];}
 else source(id).books.push(entry);
 return prior||entry;
}
const h136=fs.readFileSync(dir+'raw/136-page.html','utf8');
const p136=[...h136.matchAll(/<p\b[^>]*>([\s\S]*?)(?=<p\b|<h1\b|<\/body>|$)/gi)].map(m=>m[1]).filter(s=>clean(s).trim());
const rows136=`
0|History of Free Fall: Aristotle to Galileo|Stillman Drake
1|The Eye of Heaven: Ptolemy, Copernicus, Kepler|Owen Gingerich
2|Galileo|John L. Heilbron
3|Between Copernicus and Galileo: Christoph Clavius and the Collapse of Ptolemaic Cosmology|James M. Lattis
4|Galileo Galilei: When the World Stood Still|Atle Næss
5|Music and the Making of Modern Science|Peter Pesic
6|Galileo's Daughter: A Historical Memoir of Science, Faith, and Love|Dava Sobel
7|The Science of Mechanics in the Middle Ages|Marshall Clagett
8|Nicole Oresme and the Medieval Geometry of Qualities and Motions|Marshall Clagett
9|Magic Is No Magic: The Wonderful World of Simon Stevin 1548–1620|Jozef T. Devreese; Guido Vanden Berghe
10|History of Free Fall: Aristotle to Galileo|Stillman Drake
11|Before Galileo: The Birth of Modern Science in Medieval Europe|John Freely
12|John Buridan|Gyula Klima
13|Galileo Galilei: When the World Stood Still|Atle Næss
14|Galileo's Daughter: A Historical Memoir of Science, Faith, and Love|Dava Sobel
15|What Was Mechanical about Mechanics: The Concept of Force between Metaphysics and Mechanics from Newton to Lagrange|J. C. Boudri
16|Energy, the Subtle Concept: The Discovery of Feynman's Blocks from Leibniz to Einstein|Jennifer Coopersmith
17|Mechanics from Aristotle to Einstein|Michael J. Crowe
18|The Man Who Flattened the Earth: Maupertuis and the Sciences in the Enlightenment|Mary Terrall
19|Euler as Physicist|Dieter Suisky
20|A History of Mathematics|Carl B. Boyer
21|A History of Vector Analysis: The Evolution of the Idea of a Vectorial System|Michael J. Crowe
22|Georg Cantor: His Mathematics and Philosophy of the Infinite|Joseph Warren Dauben
23|Classics on Fractals|Gerald A. Edgar (editor)
24|Poincaré and the Three Body Problem|June Barrow-Green
25|The Kind of Motion We Call Heat: A History of the Kinetic Theory of Gases in the 19th Century|Stephen G. Brush
26|The Kinetic Theory of Gases|Stephen G. Brush
27|Ludwig Boltzmann: The Man Who Trusted Atoms|Carlo Cercignani
28|Boltzmann's Atom: The Great Debate That Launched a Revolution in Physics|David Lindley
29|Joseph Liouville 1809–1882: Master of Pure and Applied Mathematics|Jesper Lützen
30|New Methods of Celestial Mechanics|Henri Poincaré; Daniel L. Goroff (editor)
31|Stars and Atoms|Arthur S. Eddington
32|Subtle Is the Lord: The Science and the Life of Albert Einstein|Abraham Pais
33|Chaos in Classical and Quantum Mechanics|Martin C. Gutzwiller
34|Sources of Quantum Mechanics|B. L. van der Waerden (editor)
35|The Rise of the New Physics: Its Mathematical and Physical Theories|A. d'Abro
36|The Conceptual Development of Quantum Mechanics|Max Jammer
37|The Quantum Story: A History in 40 Moments|Jim Baggott
38|Thirty Years That Shook Physics: The Story of Quantum Theory|George Gamow
39|A Trajectory Description of Quantum Processes|A. S. Sanz
40|From X-Rays to Quarks: Modern Physicists and Their Discoveries|Emilio Segrè
41|Feynman's Thesis: A New Approach to Quantum Theory|Richard P. Feynman; Laurie M. Brown (editor)
42|Beyond Uncertainty: Heisenberg, Quantum Physics, and the Bomb|David C. Cassidy
43|How Physics Confronts Reality: Einstein Was Correct, but Bohr Won the Game|Roger G. Newton
44|The Chaos Avant-Garde: Memories of the Early Days of Chaos Theory|Ralph Abraham; Yoshisuke Ueda (editors)
45|Theory of Oscillators|A. A. Andronov; A. A. Vitt; S. E. Khaikin
46|Mathematical Methods of Classical Mechanics|V. I. Arnold
47|Dynamical Systems|George D. Birkhoff
48|The KAM Story: A Friendly Introduction to the Content, History, and Significance of Classical Kolmogorov–Arnold–Moser Theory|H. Scott Dumas
49|Celestial Encounters: The Origins of Chaos and Stability|Florin Diacu; Philip Holmes
50|Chaos: Making a New Science|James Gleick
51|The Computer from Pascal to von Neumann|Herman H. Goldstine
53|Differential Equations: Geometric Theory|Solomon Lefschetz
54|Introduction to Modern Dynamics: Chaos, Networks, Space and Time|David D. Nolte
55|Chance and Chaos|David Ruelle
56|The Mathematics of Time|Stephen Smale
57|A Short History of Mathematical Population Dynamics|Nicolas Bacaër
58|On the Origin of Species|Charles Darwin
59|A History of Economic Theory and Method|Robert B. Ekelund; Robert F. Hébert
60|Evolutionary Dynamics: Exploring the Equations of Life|Martin A. Nowak
61|Sewall Wright and Evolutionary Biology|William B. Provine
62|Economics Evolving: A History of Economic Thought|Agnar Sandmo
63|Game Theory and Strategy|Philip D. Straffin
64|The Young Charles Darwin: Influences and Ideas|Keith Thomson
65|Theory of Games and Economic Behavior|John von Neumann; Oskar Morgenstern
66|Evolution: Selected Papers|Sewall Wright
67|From Clocks to Chaos|Leon Glass; Michael C. Mackey
68|Chaos: Making a New Science|James Gleick
69|Dynamical Systems in Neuroscience: The Geometry of Excitability and Bursting|Eugene M. Izhikevich
70|Introduction to Modern Dynamics: Chaos, Networks, Space and Time|David D. Nolte
71|Synchronization: A Universal Concept in Nonlinear Sciences|Arkady Pikovsky; Michael Rosenblum; Jürgen Kurths
72|Sync: How Order Emerges from Chaos in the Universe, Nature, and Daily Life|Steven H. Strogatz
73|The Geometry of Biological Time|Arthur T. Winfree`.trim().split('\n');
for(const row of rows136){
 const [index,title,author]=row.split('|'),p=p136[Number(index)];
 book(136,title,author,'bibliography paragraph '+index,clean(p.split(/<a\b/i)[0]),[...p.matchAll(/href=["']([^"']+)/g)].map(m=>m[1]),'Author initials expanded where identity is unambiguous; source citation preserved. No eligibility decision.');
}
book(136,'Galileo Unbound',null,'page heading','Reading List for Galileo Unbound',[],'The parent book is explicitly named in the heading; author is not stated on this page.');
source(136).nonbooks.push({title:'Moon–Earth–Sun: The Oldest Three-Body Problem',author:'Martin C. Gutzwiller',sourceLocators:['bibliography paragraph 52'],sourceQuotes:[clean(p136[52])],sourceUrls:[urls[136]],identityNotes:'Explicitly cited as Reviews of Modern Physics 70(2), April 1998: journal article, not a book.'});
source(136).coverage={status:'complete',method:'Full public HTML; all 74 nonempty bibliography paragraphs and page heading inspected.',raw:'raw/136-page.html',readable:'136-readable.txt',limitations:[]};
const h139=fs.readFileSync(dir+'raw/139-page.html','utf8');
const li139=[...h139.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map(m=>m[1]);
const aliases={
 'Quantum':'Quantum',
 'Fermat\'s Enigma':'Fermat\'s Enigma',
 'Zero':'Zero: The Biography of a Dangerous Idea',
 'Infinitesimal':'Infinitesimal: How a Dangerous Mathematical Theory Shaped the Modern World',
 'The Secret Lives of Numbers':'The Secret Lives of Numbers: A Global History of Mathematics & Its Unsung Trailblazers',
 'QED':'QED: The Strange Theory of Light and Matter',
 'Theoretical Minimum: QM':'Quantum Mechanics: The Theoretical Minimum'
};
for(const [i,li] of li139.entries()){
 const ems=[...li.matchAll(/<em\b[^>]*>([\s\S]*?)<\/em>/gi)];
 if(!ems.length)continue;
 const authorHtml=li.match(/<span class="author">([\s\S]*?)<\/span>/i)?.[1];
 let author=authorHtml?clean(authorHtml).replace(/^—\s*/,'').replace(/,\s*(?:19|20)\d{2}\b.*$/,'').replace(/,\s*(?:Penguin|Yale University Press|Princeton University Press)\s+\d{4}.*$/,'').replace(/,\s*3 vols\.$/,''):clean(li).split(' — ')[1]?.replace(/\s*\(.*$/,'');
 if(!author&&li.includes("Susskind's"))author='Leonard Susskind; Art Friedman';
 const quote=clean(li).replace(/\[LINK [^\]]+\]\s*/g,'');
 for(const em of ems){
  let title=clean(em[1]).replace(/\[LINK [^\]]+\]\s*/g,'').trim();
  title=aliases[title]||title;
  if(title==='The Joy of Why'){
   source(139).nonbooks.push({title,author,sourceLocators:['HTML li '+i],sourceQuotes:[quote],sourceUrls:[urls[139],'https://www.quantamagazine.org/tag/the-joy-of-why/'],identityNotes:'The source labels this a 2023 Strogatz book. The exact title is the Quanta Magazine podcast hosted by Steven Strogatz and Janna Levin, confirmed on the publisher page on 2026-10-20. No matching book was established; classified as the podcast, not invented as a book.'});
   continue;
  }
  const entry=book(139,title,author,'HTML li '+i,quote,[...li.matchAll(/href=["']([^"']+)/g)].map(m=>m[1]),'Source author spelling and shortened titles retained; some source metadata may need correction before assessment.');
  if(authorHtml)entry.author=author;
 }
}
source(139).coverage={status:'complete',method:'Full public HTML, including repeated introductory lists, all topical sections, and linked reading/video labels; source says last updated May 2026.',raw:'raw/139-page.html',readable:'139-readable.txt',limitations:['External linked bibliographies were not expanded into new source titles.']};
source(139).books.push({title:'The Feynman Lectures on Physics',author:'Richard P. Feynman; Robert B. Leighton; Matthew Sands',sourceLocators:['QM Reading & Videos'],sourceQuotes:['Feynman Lectures (online)'],sourceUrls:[urls[139],'http://www.feynmanlectures.caltech.edu/'],identityNotes:'Explicitly linked online book; included despite being in the reading/videos box.'});
source(139).nonbooks.push(...['Susskind: Theoretical Minimum Lectures','Feynman Robb Lectures','Goodreads Physics Shelf','Herman’s 2012 Book List'].map(title=>({title,sourceLocators:['QM Reading & Videos / Online Lists'],sourceUrls:[urls[139]],identityNotes:'Lecture/video series or external reading-list link; not an additional individual book.'})));
for(const id of [137,138,140]){
 const path=dir+id+'-inventory.json';
 if(fs.existsSync(path))Object.assign(source(id),JSON.parse(fs.readFileSync(path,'utf8')));
}
fs.writeFileSync(dir+'inventory.json',JSON.stringify({sources},null,2)+'\n');
console.log(sources.map(s=>({source:s.source,books:s.books.length,status:s.coverage.status,unresolved:s.unresolvedReferences.length})));
