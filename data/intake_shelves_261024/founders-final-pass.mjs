import crypto from 'node:crypto';import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json'),rows=read(dir+'/rows.json'),u=read(dir+'/founders-unresolved.json');
const mapping={
'436-ari-emanuels-autobiography':['Roll the Calls','Ari Emanuel'],
'427-how-raymond-plank-built-a-50-billion-oil-company':['A Small Difference','Raymond Plank'],
'411-tortured-into-greatness-the-life-of-andre-agassi':['Open','Andre Agassi','g0020'],
'407-bruce-springsteen-repairs-the-hole-in-himself':['Born to Run','Bruce Springsteen'],
'404-how-larry-ellison-thinks':['Softwar','Matthew Symonds'],
'403-how-jensen-works':['The Nvidia Way','Tae Kim','nvidia'],
'398-steve-jobs-in-his-own-words-make-something-wonderful':['Make Something Wonderful','Steve Jobs'],
'299-steve-jobs-make-something-wonderful':['Make Something Wonderful','Steve Jobs'],
'50-marc-andreessens-blog-archive':['The Pmarca Blog Archive Ebook','Marc Andreessen']
};
const log=[];for(const ep of u){const m=mapping[ep.slug];if(!m){log.push({slug:ep.slug,status:/405-how-rockefeller|406-christian|red-bull|351-the-founder|heroes|414-how-spacex/.test(ep.slug)?'identity or publication status unresolved':'No additional identified book; interview, article, letters, compilation of existing episodes or conversation',evidence:ep.intro});continue;}
const [title,author,id]=m;let b;if(!id){b=a.find(b=>b.title.split(':')[0]===title&&(!b.author||b.author===author));if(!b){b={id:'shelf-'+crypto.createHash('sha256').update(title+'|'+author).digest('hex').slice(0,12),title,author,sources:[261],mentions:[]};a.push(b);}b.author=author;}
const r={source:261,title,author,url:'https://www.founderspodcast.com/episodes/'+ep.slug,context:ep.intro};if(id)r.id=id;else r.newId=b.id;
if(!rows.some(x=>x.source===261&&x.url===r.url&&x.title===title))rows.push(r);if(b&&!b.mentions.some(x=>x.url===r.url))b.mentions.push(r);log.push({slug:ep.slug,status:'Book recovered',title,author});}
// The short title and full subtitle refer to the same Symonds book.
const soft=a.filter(b=>b.title.startsWith('Softwar'));const first=soft.find(b=>b.title==='Softwar');for(const b of soft)if(first&&b!==first){b.mergedInto=first.id;for(const r of rows.filter(r=>r.newId===b.id))r.newId=first.id;}
write(dir+'/triaged.json',a);write(dir+'/rows.json',rows);write(dir+'/founders-final-pass.json',log);
