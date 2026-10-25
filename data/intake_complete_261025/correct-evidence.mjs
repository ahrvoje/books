import fs from 'node:fs';
const d='data/intake_complete_261025/';
const fixes={358:'https://e1-cause.science.psu.edu/cause/research/literature/inevitable-illusions-how-mistakes-reason-rule-our-minds',531:'https://search.worldcat.org/title/032925425',532:'https://yalebooks.yale.edu/book/9780300084603/almost-everyones-guide-to-science/',533:'https://books.google.com/books/about/The_Stuff_of_Thought.html?id=GN5TPgAACAAJ',542:'https://search.worldcat.org/title/1172052607'};
for(const f of fs.readdirSync(d).filter(x=>/^specs-.*json$/.test(x))){const a=JSON.parse(fs.readFileSync(d+f));for(const s of a){const i=s.indices[0];if(fixes[i])s.url=fixes[i];if(i===646)s.url='https://www.kirkusreviews.com/book-reviews/bill-maher/new-new-rules/';}fs.writeFileSync(d+f,JSON.stringify(a,null,2)+'\n');}
let p=fs.readFileSync(d+'process.mjs','utf8');p=p.replace("confidence:'high',reason,analysis:report(source)","confidence:reason.includes('moderate confidence')?'moderate':'high',reason,analysis:report(source)");
fs.writeFileSync(d+'process.mjs',p);
