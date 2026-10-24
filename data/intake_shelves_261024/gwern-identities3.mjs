import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json'),rows=read(dir+'/rows.json');
for(const [title,status,author,note] of [
['Flight to the Moon','nonbook','','The source explicitly identifies an album of space-program audio recordings, not Michael Collins’s book or the unrelated George Fowler metadata match. Outside all book ledgers.'],
['Biathanatos','nonbook','Jorge Luis Borges','Source explicitly names Borges’s essay Biathanatos in a discussion of his essays. Do not replace that essay with John Donne’s identically titled book without an actual book nomination. Outside all three ledgers.'],
['Buttercup Festival','nonbook','David Troupes','Source discusses the online comic strip and original artwork. Separate book-form publication of this nominated comic was not established after retrieval attempts; author describes it as a webcomic at https://www.patreon.com/buttercupfestival/about . Do not substitute his poetry collections or other illustrated books.'],
['Dinosaur Comics','excluded','Ryan North','H2: fictional comic strips, also published in collected book form. Author lists the print collections at https://www.ryannorth.ca/print/ . The 1983 metadata match is unrelated.']
]){const b=a.find(b=>b.title===title);if(!b)throw Error(title);Object.assign(b,{status,author,note,confidence:status==='nonbook'?'moderate':'high'});delete b.metadata;}
const b=a.find(b=>b.title==='Savage Europe');for(const r of rows.filter(r=>r.newId===b.id)){r.id='q0156';r.status='recommended';r.identityNote='Source typo within the review of Keith Lowe’s Savage Continent; not a separate work.';delete r.newId;}
b.status='alias';b.note='Source typo for Savage Continent by Keith Lowe; mapped to existing q0156. Context confirmed in captured 259.txt.';
write(dir+'/triaged.json',a);write(dir+'/rows.json',rows);
