import fs from 'node:fs';import {dir,read,write} from './capture.mjs';
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/^(?:the|a|an)\s+/,'').replace(/[^a-z0-9]/g,'');
const fresh=read(dir+'/triaged.json'),rows=read(dir+'/rows.json'),c=read('data/top500_261024/compiled.json'),old=[...c.currentBooks,...c.exclusions];
const cache=fs.readdirSync(dir+'/metadata').map(f=>({...read(dir+'/metadata/'+f),file:dir+'/metadata/'+f}));const verified=[];
for(const b of fresh){const m=cache.find(m=>m.title===b.title&&m.author===b.author)||cache.find(m=>m.title===b.title);if(!m)continue;let docs=m.search?.docs||[];const short=norm(b.title.replace(/\s*\([^)]*\)/g,'').split(':')[0]);
let z=docs.find(z=>{const t=norm(z.title.split(':')[0]),words=b.author.split(/[ ,;&]+/).filter(w=>w.length>3&&!['with','editor','editors'].includes(w));return (t===short||(short.length>12&&(t.startsWith(short)||short.startsWith(t))))&&(!b.author||words.some(w=>(z.author_name||[]).some(a=>norm(a).includes(norm(w)))))});
if(!z)continue;b.metadata={file:m.file,key:z.key,title:z.title,author:z.author_name?.join('; '),year:z.first_publish_year,language:z.language,subjects:z.subject||[],isbn:z.isbn||[],description:m.work?.key===z.key?(typeof m.work.description==='string'?m.work.description:m.work.description?.value)||'':''};
// Use the returned full identity to resolve short-title collisions; never accept a search hit on title alone.
const hits=old.filter(a=>norm(a.title.split(':')[0])===norm(z.title.split(':')[0])&&(z.author_name||[]).some(name=>norm(name)===norm(a.author)||norm(a.author).includes(norm(name))));
if(hits.length===1){b.matchedExisting=hits[0].id;for(const r of rows.filter(r=>r.newId===b.id)){r.id=hits[0].id;r.status=hits[0].status||'excluded';delete r.newId;}verified.push({id:b.id,existing:hits[0].id,evidence:m.file});continue;}
const subjects=z.subject||[],explicitFiction=subjects.some(s=>/^(fiction|science fiction|fantasy fiction|historical fiction|novels|love stories|detective and mystery stories|juvenile fiction)$/i.test(s));
const conflicting=subjects.some(s=>/^(authorship|fiction, technique|literary criticism|criticism and interpretation|fiction writing|biography|biographies|science, popular works)$/i.test(s));
if(!b.status&&explicitFiction&&!conflicting){b.status='excluded';b.note='H2: catalog identifies this matching title and author as fiction. Evidence: '+m.url+'. Genre metadata inspected; not inferred from subject matter alone.';b.confidence='moderate';b.author=z.author_name?.join('; ')||b.author;verified.push({id:b.id,status:'excluded',evidence:m.file,subjects:subjects.filter(s=>/fiction|novel/i.test(s)).slice(0,8)});}
}
write(dir+'/triaged.json',fresh);write(dir+'/rows.json',rows);write(dir+'/metadata-resolutions.json',verified);console.log({metadata: fresh.filter(b=>b.metadata).length,matched:verified.filter(x=>x.existing).length,fictionExclusions:verified.filter(x=>x.status==='excluded').length});
