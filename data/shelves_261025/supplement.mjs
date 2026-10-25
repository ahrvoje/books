import fs from 'node:fs';
const d='data/shelves_261025',read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const q=read(d+'/extracted.json'),add=(source,title,author='',extra={})=>q.push({source,title,author,...extra});
const sec=read(d+'/sections.json');for(const x of sec[291]){const m=x.text.match(/^(.+?) by (.+)$/);if(m&&!q.some(b=>b.source===291&&b.title===m[1]))add(291,m[1],m[2]);}
add(293,'The Color of Law: A Forgotten History of How Our Government Segregated America','Richard Rothstein');add(293,'Plato, Socrates, and the Dialogues','',{unparsed:true});add(300,'The Sugar Beet Story','',{unparsed:true});
for(const [title,author] of [['Remarkably Bright Creatures','Shelby Van Pelt'],['Clearing the Air','Hannah Ritchie'],['Who Knew','Barry Diller'],['When Everyone Knows That Everyone Knows','Steven Pinker'],['Abundance','Ezra Klein and Derek Thompson'],['Everything Is Tuberculosis','John Green'],['Personal History','Katharine Graham'],['Chasing Hope','Nicholas Kristof'],['How to Feed the World','Vaclav Smil'],['An Unfinished Love Story','Doris Kearns Goodwin'],['Source Code','Bill Gates']])add(296,title,author,{evidence:'https://www.gatesnotes.com/books/all-book-reviews',coverage:'First ten rendered entries plus Source Code on the supplied landing page. Remaining list unavailable.'});
fs.writeFileSync(d+'/extracted.json',JSON.stringify(q,null,2)+'\n');
