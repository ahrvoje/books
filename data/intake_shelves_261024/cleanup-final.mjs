import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json'),rows=read(dir+'/rows.json'),c=read('data/top500_261024/compiled.json'),old=[...c.currentBooks,...c.exclusions];
const n=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const technical=['Principles of Mathematical Analysis','Street Fighting Mathematics','Elementary Analysis: The Theory of Calculus','Fundamentals of Complex Analysis','First Course in Abstract Algebra','Mathematical Methods in Physical Sciences','Probability Theory and Random Processes','Modern Fortran Explained','Probabilistic Reasoning in Intelligent Systems','How Things Work','Exercises for the Feynman Lectures','Statistical Mechanics by Feynman','Feynman’s Lost Lecture','Law and Economics','Analyzing Congress','Identification Problems in the Social Sciences','Advanced Nutrition and Human Metabolism','The Psychology of Eating','The Sense of Style','How to Take Smart Notes','Cool Tools','The Mature Optimization Handbook','The Physical Principles of Thermonuclear Explosives, Inertial Confinement Fusion, and the Quest for Fourth Generation Nuclear Weapons'];
for(const b of a){
 if(!b.status&&technical.includes(b.title)){b.status='excluded';b.note='H3: technical curriculum, specialist methods, procedural instruction, or a reference catalog is the primary purpose. The title, author and source context identify the training/reference work.';b.confidence='high';}
 if(!b.status&&['Image source','Scholar’s Stage','Marginal Revolution','LessWrong','Slate Star Codex/Astral Codex Ten','Ribbonfarm','Your support makes this blog possible','X1, . . . , Xn','Wang tiles','Bayesian','I know: this is philosophy'].includes(b.title)||b.title.startsWith('To get updates on new posts')||b.title.startsWith('Fukuyama was right.')){b.status='nonbook';b.note='Site name, navigation text, mathematical notation or prose emphasis; not a book nomination.';}
 if(!b.status&&b.title==='Strange Planet'){b.status='excluded';b.note='H2: fictional humorous comics about alien characters.';b.confidence='high';}
 if(!b.status&&b.title==='The World of Edena'){b.status='excluded';b.author='Moebius';b.note='H2: science-fiction graphic narrative.';b.confidence='high';}
}
const aliases={
 'The Rise and Fall of Great Powers':'The Rise and Fall of the Great Powers',
 'Success and Failure in the World’s Most Dynamic Region':'How Asia Works',
 'Rise and Decline of Natuons':'The Rise and Decline of Nations',
 'The Evolution of the Islamic Polity':'Slaves on Horses',
 'Why Washington Stopped Working':'Government’s End',
 'The Wars For Asia, 1911-1945':'The Wars For Asia, 1911-1949',
 'The History of the Decline and Fall of the Roman Empire':'The Decline and Fall of the Roman Empire',
 'Reflections sur le Violence':'Reflections on Violence',
 'Gespräche mit Goethe':'Conversations With Goethe',
 'Life of Johnson':'The Life of Samuel Johnson',
 'Don’t Sleep':'Don’t Sleep, There Are Snakes',
 'The Vaccinators: Smallpox, Medical Knowledge, and the ‘Opening’ of Japan':'The Vaccinators',
 'Drugs 2.0: The Web Revolution That’s Changing How the World Gets High':'Drugs 2.0',
 'The Midas Paradox: Financial Markets, Government Policy Shocks, and the Great Depression':'The Midas Paradox',
 'The Book of Lord Shang—A Classic of the Chinese School of Law':'The Book of Lord Shang',
 'The Chicago World’s Fair of 1893133ya: A Photographic Record':'The Chicago World’s Fair of 1893',
 'Millionaire’s Gospel':'The Japanese Family Storehouse',
 'Travelers':'Travelers of 100 Ages',
 'The Pillow Book':'Pillow book of Sei Shonagon'
};
for(const[from,to]of Object.entries(aliases)){const target=old.find(b=>n(b.title)===n(to))||a.find(b=>n(b.title)===n(to)&&!b.mergedInto);if(!target)continue;for(const r of rows.filter(r=>r.title===from)){if(old.includes(target)){r.id=target.id;r.status=target.status;delete r.newId;}else{delete r.id;r.newId=target.id;}}}
for(const r of rows.filter(r=>r.source===253&&r.title==='Six Easy Pieces')){const b=old.find(b=>b.title==='Six Easy Pieces'&&b.author.includes('Feynman'));if(b){r.id=b.id;r.status=b.status;delete r.newId;}}
write(dir+'/triaged.json',a);write(dir+'/rows.json',rows);
