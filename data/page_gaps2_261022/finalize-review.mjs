import fs from 'node:fs';
const dir='data/page_gaps2_261022/', read=p=>JSON.parse(fs.readFileSync(p));
const extra=read(dir+'manual-extra.json');
for(const row of [
 ['rem-u1569',400,'9780307473349',2015,'Paperback','https://www.penguinrandomhouse.com/books/89414/the-future-of-the-mind-by-michio-kaku/','Publisher exact edition.','high'],
 ['rem-u1445',192,'9780684826806',1995,'Paperback','https://www.simonandschuster.com/books/Survival-In-Auschwitz/Primo-Levi/9780684826806','Publisher edition including conversation with Philip Roth.','high'],
 ['rem-u0745',546,'9780374528492',2002,'Paperback','https://openlibrary.org/books/OL18392838M/The_Metaphysical_Club','Library pagination xii, 546; excludes front matter. Corroborated by https://library.aarome.org/bib/110746 . Rejects conflicting 384-page ebook record.','moderate']
]) {const i=extra.findIndex(r=>r[0]===row[0]);if(i>=0)extra[i]=row;else extra.push(row);}
fs.writeFileSync(dir+'manual-extra.json',JSON.stringify(extra,null,2)+'\n');
const selected=read(dir+'selected.json');selected['rem-u1396']='/books/OL32050644M';
fs.writeFileSync(dir+'selected.json',JSON.stringify(selected,null,2)+'\n');
