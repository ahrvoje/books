import fs from 'node:fs';
import assert from 'node:assert/strict';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const dir='data/intake_next_261024',pending=read('data/intake_continue_261024/pending.json');
const exclusions=[];
function add(source,start,rule,reason,title,author){const hits=pending.filter(x=>x.source===source&&x.title.startsWith(start));assert.equal(hits.length,1,start);const x=hits[0];exclusions.push({source,sourceTitle:x.title,title:title||x.title.replace(/ \([^)]*\)$/,''),author:author||x.author,rule,reason});}
for(const [start,author] of [['The Confessor','Daniel Silva'],['The Mountain in the Sea','Ray Nayler'],['Aliss at the Fire','Jon Fosse'],['Vladimir','Julia May Jonas'],['Absolute Friends','John le Carré'],['Anxious People','Fredrik Backman'],['Valuable Humans in Transit','qntm'],['White Noise','Don DeLillo'],['Silverview','John le Carré']])add(273,start,'H2','Published fiction: novel or short-story collection. Excluded before vetoes and scoring.',null,author);
for(const start of ['The Summer War','The Paris Apartment','The Fury','Polostan','Mass Effect: Revelation','The Seven Husbands of Evelyn Hugo','Love, Theoretically','The Rachel Incident','Late Bloomer','They Both Die at the End','Red, White & Royal Blue','Iron Flame','Fourth Wing','Green Rider','Laura Dean Keeps Breaking Up with Me'])add(278,start,'H2','Published fictional narrative (novel or graphic novel); excluded before vetoes and scoring.');
exclusions.find(x=>x.title==='Iron Flame').author='Rebecca Yarros';
for(const [start,reason,author] of [
 ['Probability for the Enthusiastic Beginner','Probability curriculum and worked mathematical problem solving.','David J. Morin'],
 ['Introduction to Classical Mechanics','Classical-mechanics course with formal derivations and problems.','David Morin'],
 ['Principles of Neural Science','Specialist neuroscience curriculum and reference.','Eric R. Kandel and coeditors'],
 ['Differential Equations and Linear Algebra','Mathematics curriculum teaching differential equations and linear algebra.','Gilbert Strang'],
 ['Physics: A Complete Introduction','Introductory physics curriculum; conceptual prose does not override its instructional purpose.','Jim Breithaupt'],
 ['Proof and the Art of Mathematics','Formal proof instruction and mathematical proficiency training.','Joel David Hamkins'],
 ['Mathematical Methods for Physics and Engineering','Specialist mathematical methods textbook and reference.','K. F. Riley; M. P. Hobson; S. J. Bence'],
 ['Introduction to Classical and Quantum Computing','Computing curriculum teaching classical and quantum methods.','Thomas G. Wong']
 ])add(270,start,'H3',reason,null,author);
add(274,'The Feeling of Power','H2','Fictional short story, also published in the book collection Nine Tomorrows. The nominated story is recorded, not the otherwise unmentioned collection.','The Feeling of Power','Isaac Asimov');
write(dir+'/exclusions.json',exclusions);
const resolved=read(dir+'/proposals.json');
resolved.push({source:270,title:'Elements of Euclid (Oliver Byrne Edition)',author:'Oliver Byrne',id:'progress-0156',status:'excluded',canonicalTitle:'Oliver Byrne',identityNote:'The current exclusion uses the edition designer as its title; retain that record for the already excluded Byrne edition of Euclid. No duplicate entry.'});
resolved.push({source:278,title:'The Strength of the Few (Hierarchy, #2)',author:'James Islington',id:'h0408',status:'excluded',canonicalTitle:'Hierarchy',identityNote:'Volume 2 of the already excluded Hierarchy series; no separate scored evaluation or duplicate exclusion needed.'});
write(dir+'/resolved.json',resolved);
const c=read(read('data/catalog.json').compiled),all=[...c.currentBooks,...c.exclusions];
for(const x of exclusions){const n=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();const hits=all.filter(b=>n(b.title)===n(x.title));assert.equal(hits.length,0,x.title);}
console.log(JSON.stringify({newExclusions:exclusions.length,resolved:resolved.length}));
