import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json'),rows=read(dir+'/rows.json'),c=read('data/top500_261024/compiled.json'),old=[...c.currentBooks,...c.exclusions];
const aliases={'shelf-fefea8e84a4c':'q0258','shelf-2a0ba2f51b51':'q0294','shelf-caedb6076a2e':'intake-0053','shelf-969561e6d94f':'g0046'};
for(const b of a.filter(b=>b.sources.includes(259))){if(b.title==='Titan: The Life of John D. Rockefeller, Sr')aliases[b.id]='g0987';if(b.title==='Autobiography')aliases[b.id]='q0748';}
for(const[id,target]of Object.entries(aliases)){const o=old.find(b=>b.id===target);if(!o)throw Error(target);for(const r of rows.filter(r=>r.newId===id)){r.id=target;r.status=o.status||'excluded';delete r.newId;}}
const pairs=[['Tombstone','Tombstone: The Untold Story of Mao’s Great Famine','Yang Jisheng'],['Ketamine','Ketamine: Dreams and Realities','Karl Jansen'],['Clever Hans','Clever Hans (The horse of Mr. Von Osten): A contribution to experimental animal and human psychology','Oskar Pfungst'],['Donald Michie','Donald Michie: On Machine Intelligence, Biology and More','Ashwin Srinivasan and Donald Michie']];
for(const[t,full,author]of pairs){const b=a.find(b=>b.title===t&&b.sources.includes(259)),d=a.find(b=>b.title===full&&b.sources.includes(259));if(!b||!d)throw Error(t);b.author=author;delete b.metadata;d.mergedInto=b.id;for(const r of rows.filter(r=>r.newId===d.id))r.newId=b.id;}
write(dir+'/triaged.json',a);write(dir+'/rows.json',rows);write(dir+'/alias-repair.json',aliases);
