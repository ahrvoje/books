import fs from 'node:fs';
const d='data/shelves_261025',read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const reviewed=read(d+'/triage.json').filter(b=>b.screeningEvidence.length);
// Individually reviewed exceptions: non-fiction, existing-work aliases, or unresolved book publication.
const omit=new Set([596,1039,2259,4231,4413,1130,1178,1205,1150,1151,1153,8606,1173,1123,1158,1160,1166,4027]);
const chosen=reviewed.filter(b=>!omit.has(b.index));
const canonical=b=>b.title.replace(/\s*\([^)]*#[^)]*\)/g,'').replace(/: The Complete Novel$/,'');
const norm=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const groups=new Map();for(const b of chosen){const title=canonical(b),key=norm(title);if(!groups.has(key))groups.set(key,{title,author:b.author,indices:[],sources:[],rule:'H2',evidence:[],note:'Published fiction; hard exclusion H2 applies before vetoes and scores. Source wording and supporting genre evidence were inspected. No score assigned.'});const g=groups.get(key);g.indices.push(b.index);g.sources.push(b.source);g.evidence.push(...b.screeningEvidence.map(e=>e.url||read(d+'/inputs.json').find(s=>s.source===b.source).url));}
for(const g of groups.values()){g.sources=[...new Set(g.sources)];g.evidence=[...new Set(g.evidence)];if(g.title==='Ubik')g.author='Philip K. Dick';if(g.title==='Faust')g.author='Johann Wolfgang von Goethe';if(g.title==='Fine Structure'){g.author='qntm (Sam Hughes)';g.evidence.push('https://openlibrary.org/books/OL55776183M/Fine_Structure');}if(g.title==='The Wild Party'){g.author='Joseph Moncure March; Art Spiegelman (illustrator)';g.rule='H7';g.note='Narrative poem with illustrations; poetry is hard-excluded under H7. Source credits the illustrator.';}if(g.title==='Go the F—k to Sleep')g.author='Adam Mansbach; Ricardo Cortés (illustrator)';}
fs.writeFileSync(d+'/exclusions-fiction.json',JSON.stringify([...groups.values()],null,2)+'\n');console.log({sourceEntries:chosen.length,works:groups.size});
