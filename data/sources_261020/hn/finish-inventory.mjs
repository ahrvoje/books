import fs from 'node:fs';
const dir='data/sources_261020/hn';
const p=`${dir}/mentions.tsv`;
let rows=fs.readFileSync(p,'utf8').trimEnd().split(/\r?\n/).map(x=>x.split('\t'));
for(const r of rows){
 if(r[0]==='130'&&r[1]==='Information Operations'){r[1]='Info-Ops: Build the Right Thing';r[2]='Daniel Markham';r[4]='Author’s explicit Leanpub link resolves title and author: https://leanpub.com/info-ops ; publisher lists366pages and2020update.';}
 if(r[0]==='130'&&r[1]==='The Intentional Engineer'){r[2]='Jeff Perry';r[4]='Identity confirmed by author’s site https://www.theintentionalengineer.com/ ; practical career exercises.';}
 if(r[0]==='135'&&r[1].startsWith('Charles Proteus Steinmetz')){r[2]='Robert W. Bly';r[4]='Source title-author verified at official publisher https://www.simonandschuster.com/books/Charles-Proteus-Steinmetz/Robert-W-Bly/9781610353267 ;180pages,2018paperback. Do not confuse with Hammond biography.';}
 if(r[0]==='135'&&r[1]==='Scrum')r[4]='Source names Sutherland; edition coauthors require verification.';
 if(r[0]==='134'&&r[1].startsWith('Cybersecurity 101')){r[1]='CyberSecurity 101: Fundamentals for Junior Engineers and Job Seekers';r[2]='Andreas';r[4]='Author’s Medium page confirms book and print/digital links; author’s full name unverified. https://medium.com/@oandreasc/cybersecurity-101-fundamentals-for-junior-engineers-and-job-seekers-b3efbc0a98bd';}
}
fs.writeFileSync(p,rows.map(x=>x.join('\t')).join('\n')+'\n');
const aux=[
 [128,'In Cold Blood','Truman Capote','Article comparison names the1965nonfiction novel.','https://auxiliarymemory.com/2017/01/06/rereading-the-soul-of-a-new-machine-by-tracy-kidder/','In Cold Blood',33792217],
 [128,'The Electric Kool-Aid Acid Test','Tom Wolfe','Article misspells The Electric Kool-Acid Test; article comment13corrects it.','https://auxiliarymemory.com/2017/01/06/rereading-the-soul-of-a-new-machine-by-tracy-kidder/','The Electric Kool-Acid Test',33792217],
 [128,'Cryptonomicon','Neal Stephenson','Article comment11explicitly mentions novel; not an imported recommendation from unrelated linked lists.','https://auxiliarymemory.com/2017/01/06/rereading-the-soul-of-a-new-machine-by-tracy-kidder/','no Cryptonomicon',33792217],
 [128,'Uncanny Valley','Anna Wiener','Article pingback explicitly identifies title and author; auxiliary mention, not a positive HN recommendation.','https://auxiliarymemory.com/2017/01/06/rereading-the-soul-of-a-new-machine-by-tracy-kidder/','Uncanny Valley by Anna Wiener',33792217],
 [129,'Communication Theory','W. Jackson (editor)','Main linked Licklider paper reference4identifies1953book as container for a paper; likely technical proceedings.','https://groups.csail.mit.edu/medg/people/psz/Licklider.html','W. Jackson, Communication Theory',40864249],
 [129,'Webster’s New International Dictionary','','Main linked Licklider paper reference27names2ndedition1958dictionary; technical/reference eligibility review.','https://groups.csail.mit.edu/medg/people/psz/Licklider.html',"Webster's New International Dictionary",40864249],
 [135,'The Shaping of North America: From Earliest Times to1763','Isaac Asimov','HN explicitly nominates Asimov North America/USA series and links this review; review identifies1973volume.','https://sursumcorda.salemsattic.com/archives/2018/06/19/isaac-asimov-s-american-history-series','The Shaping of North America',29463582],
 [135,'The Birth of the United States:1763–1816','Isaac Asimov','Explicitly nominated series resolved by linked review;1974volume.','https://sursumcorda.salemsattic.com/archives/2018/06/19/isaac-asimov-s-american-history-series','The Birth of the United States',29463582],
 [135,'Our Federal Union: The United States from1816to1865','Isaac Asimov','Explicitly nominated series resolved by linked review;1975volume.','https://sursumcorda.salemsattic.com/archives/2018/06/19/isaac-asimov-s-american-history-series','Our Federal Union',29463582],
 [135,'The Golden Door: The United States from1865to1918','Isaac Asimov','Explicitly nominated series resolved by linked review;1977volume.','https://sursumcorda.salemsattic.com/archives/2018/06/19/isaac-asimov-s-american-history-series','The Golden Door',29463582],
].map(([source,title,author,identityNotes,url,quote,id])=>({source,title,author:author||undefined,commentIds:[id],sourceQuotes:[{commentId:id,url,quote}],sourceUrls:[url,`https://news.ycombinator.com/item?id=${id}`],identityNotes,mentionScope:'linked source or explicitly identified auxiliary book'}));
fs.writeFileSync(`${dir}/auxiliary-books.json`,JSON.stringify(aux,null,2)+'\n');
const exclusions=[
 [128,'Nand2Tetris','course; no named companion book nominated'],
 [128,'Data General History: The Fair Bastards','web memoir article; no book edition identified'],
 [128,'Nova advertising brochure','advertising brochure'],
 [128,'Oxide and Friends','podcast'],
 [129,'Man-Computer Symbiosis','1960journal paper, main source'],
 [129,'As We May Think','magazine essay'],
 [129,'The Computer as a Communication Device','paper'],
 [129,'The Extended Mind','paper'],
 [129,'Augmenting Human Intellect','research report'],
 [129,'Characteristica Universalis','philosophical notation project, not specific book'],
 [130,'You and Your Research','lecture/transcript'],
 [130,'The Humble Programmer','Turing lecture'],
 [130,'The Question Concerning Technology','essay linked as essay, not named book collection'],
 [130,'A City Is Not a Tree','linked1965essay, not later anthology edition'],
 [130,'Do Artifacts Have Politics?','essay'],
 [130,'How Complex Systems Fail','paper/talk'],
 [130,'Programming as Theory Building','paper'],
 [130,'Interpretation, Interaction, and Reality Construction','paper'],
 [130,'Outline of a Paradigm Change in Software Engineering','paper'],
 [130,'Do Committees Invent?','paper'],
 [130,'Doing a Job','Rickover essay'],
 [130,'Is Software Engineering Real Engineering?','Hillel Wayne talk'],
 [132,'If Books Could Kill','podcast'],
 [132,'Current Value Line Binder','periodical investment research binder, not specified book'],
 [132,'Heathers / Seinfeld / Saltburn / Pose','screen-work comparisons, not books'],
 [134,'Connections','explicitly TV documentary; unnamed author bibliography link does not name a specific Burke book'],
 [134,'Secret History of Silicon Valley','Steve Blank lecture/video'],
 [134,'Technology and Culture / ICON','journals'],
 [135,'Blade Runner2049','film review motivating main question; no PKD title named'],
 [135,'Paddy Dracula','podcast episode'],
].map(([source,title,reason])=>({source,title,reason,confidence:'high'}));
fs.writeFileSync(`${dir}/nonbooks.json`,JSON.stringify(exclusions,null,2)+'\n');
