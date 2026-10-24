import crypto from 'node:crypto';
import {dir,read,write} from './capture.mjs';
const rows=read(dir+'/rows.json'), fresh=read(dir+'/triaged.json');
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/^(the|a|an) /,'').replace(/&/g,'and').replace(/[^a-z0-9]/g,'');
function assign(r,title,author,status,note){
 delete r.id;delete r.status;delete r.matchedTitle;delete r.matchedAuthor;
 let b=fresh.find(b=>norm(b.title)===norm(title)&&norm(b.author)===norm(author));
 if(!b){b={id:'shelf-'+crypto.createHash('sha256').update(title+'|'+author).digest('hex').slice(0,12),title,author,sources:[r.source],mentions:[r]};fresh.push(b);}
 r.newId=b.id;if(status)Object.assign(b,{status,note,confidence:'high'});
}
for(const r of rows){
 if(r.source===253&&r.title.startsWith('The Atlantic:'))assign(r,r.title,'', 'nonbook','Magazine article, not the Simon Winchester book Atlantic.');
 if(r.source===264&&r.title==='Essays')assign(r,'Essays (web collection)','Paul Graham','nonbook','The linked web essay collection is not Francis Bacon’s book; individual published collections require a separate source nomination.');
 if(r.source===259&&r.title==='Challenger')assign(r,'Challenger (space shuttle)','', 'nonbook','The passage names a disaster case, not Adam Higginbotham’s book.');
 if(r.source===259&&r.title==='Confessions')assign(r,'Confessions of an English Opium Eater','Thomas De Quincey');
 if(r.source===259&&r.title==='Memoirs')assign(r,'Memoirs Found in a Bathtub','Stanisław Lem','excluded','H2: the source discusses Lem’s fictional satire; not Sakharov’s memoir.');
 if(r.source===261&&r.title.startsWith('The Formula:'))assign(r,r.title,'Joshua Robinson; Jonathan Clegg');
 if(r.source===261&&r.title.startsWith('Invention: A Life'))assign(r,'Invention: A Life','James Dyson');
}
// Metadata work identifiers merge edition/title variants only when author evidence agrees.
const log=[];
for(const b of fresh){
 if(b.mergedInto||b.matchedExisting)continue;
 const candidates=fresh.filter(a=>a!==b&&!a.mergedInto&&!a.matchedExisting&&fresh.indexOf(a)<fresh.indexOf(b)&&
  ((b.metadata?.key&&a.metadata?.key===b.metadata.key)||
   (norm(a.title.split(':')[0])===norm(b.title.split(':')[0])&&norm(a.title).length>12&&
    (norm(a.author)===norm(b.author)||!a.author||!b.author))));
 if(candidates.length!==1)continue;
 const a=candidates[0];
 if(a.author&&b.author&&norm(a.author)!==norm(b.author)&&a.metadata?.key!==b.metadata?.key)continue;
 b.mergedInto=a.id;for(const r of rows.filter(r=>r.newId===b.id))r.newId=a.id;
 if(!a.author&&b.author)a.author=b.author;
 if(!a.metadata&&b.metadata)a.metadata=b.metadata;
 if(!a.status&&b.status)Object.assign(a,{status:b.status,note:b.note,confidence:b.confidence});
 log.push({from:b.id,to:a.id,title:b.title});
}
write(dir+'/rows.json',rows);write(dir+'/triaged.json',fresh);write(dir+'/identity-audit.json',log);
console.log({merged:log.length});
