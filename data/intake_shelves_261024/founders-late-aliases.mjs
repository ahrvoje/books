import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json'),rows=read(dir+'/rows.json');
for(const[t,id]of[["Sam Walton's book",'g0173'],["Bob Dylan's autobiography",'q0926'],["Ted Turner's Autobiography.",'g0225'],["Claude Hopkins' autobiography My Life In Advertising and his legendary book Scientific Advertising",'rem-u0154']]){const b=a.find(b=>b.title===t);for(const r of rows.filter(r=>r.newId===b.id)){r.id=id;r.status='recommended';delete r.newId;}}
const lauder=a.find(b=>b.title==='Estée Lauder: A Success Story');for(const t of ['Estée: A Success Story','A Success Story by Estee Lauder']){const b=a.find(b=>b.title===t);b.mergedInto=lauder.id;for(const r of rows.filter(r=>r.newId===b.id))r.newId=lauder.id;}
for(const[t,note]of[
['Amazon Investor Relations','Non-book corporate website linking the shareholder letters; source also nominates their book collection Invent and Wander separately.'],
['Constellation Software Inc. President\'s Letters','Non-book investor-relations letters. Searches found corporate PDFs and an informal digital collection, not publication in book form. https://www.csisoftware.com/docs/default-source/investor-relations/presidents-letter/presidents-letter-april-2018-final.pdf ; https://jeremyrosmarin.com/mark-leonards-constellation-software-letters/ .']
]){const b=a.find(b=>b.title===t);Object.assign(b,{status:'nonbook',note,confidence:'moderate'});}
const del=a.find(b=>b.title.startsWith('Leonardo Del Vecchio by Thomas'));del.title='Leonardo Del Vecchio';del.author='Tommaso Ebhardt';del.status='excluded';del.confidence='moderate';del.note='H4: Italian biography; 2026 publisher rights catalog offers only an English sample, not a complete English edition. No Croatian edition identified. https://uklitag.com/wp-content/uploads/2026/04/2026-Spring_SperlingKupfer-Piemme_NON-FICTION.pdf . The accompanying Spectacle of Big Lens by Sam Knight is an article, not a second book.';
const ferr=a.find(b=>b.title==='Michele Ferrero');Object.assign(ferr,{status:'excluded',confidence:'moderate',note:'H4: Italian biography, with a Spanish translation but no identified published English/Croatian edition. Publisher https://www.duomoediciones.com/libro/michele-ferrero-compartir-valores-para-crear-valor/ ; source companion https://foundersreadingindex.com/books/michele-ferrero-condividere-valori-per-creare-valore/ explicitly reports a private English translation used for the podcast, not an available English book.'});
for(const[t,title,author]of[
['Inside Steve\'s Brian','Inside Steve\'s Brain','Leander Kahney'],
['The Life of Kobe Bryant','Showboat: The Life of Kobe Bryant','Roland Lazenby'],
['Bloomberg by Michael Bloomberg','Bloomberg by Bloomberg','Michael R. Bloomberg and Matthew Winkler'],
['Hardball: Are You Playing to Play or Playing to Win','Hardball: Are You Playing to Play or Playing to Win?','George Stalk and Rob Lachenauer'],
['The Merchant Bankers','The Merchant Bankers','Joseph Wechsberg']
]){const b=a.find(b=>b.title===t);Object.assign(b,{title,author});delete b.metadata;}
write(dir+'/triaged.json',a);write(dir+'/rows.json',rows);
const log=read(dir+'/founders-final-pass.json');for(const e of log)if(e.slug.includes('red-bull')){e.status='Book recovered; English edition verified';e.title='The Red Bull Story';e.evidence='English 2025 edition ISBN 9781964205052; https://books.apple.com/gb/book/the-red-bull-story/id6745795351';}write(dir+'/founders-final-pass.json',log);
