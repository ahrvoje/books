import fs from 'node:fs';
import assert from 'node:assert/strict';
const d='data/intake_rest_261025/', read=p=>JSON.parse(fs.readFileSync(p,'utf8')), write=(p,x)=>fs.writeFileSync(d+p,JSON.stringify(x,null,2)+'\n');
const q=read(d+'pending-input.json'), byIndex=new Map(q.map(x=>[x.index,x]));
const c=read('data/intake_large_261024/compiled.json'), all=[...c.currentBooks,...c.exclusions];
const norm=s=>String(s).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim();
const specs=fs.readdirSync(d).filter(x=>/^specs-.*json$/.test(x)).sort().flatMap(x=>read(d+x));
const decisions=[], exclusions=[];
for(const [i,s] of specs.entries()){
 const x=byIndex.get(s.indices[0]);assert(x);
 const b={...s,id:'rest-'+x.index+'-'+i,title:s.title||x.title,author:s.author||x.author,sources:[...new Set(s.indices.map(i=>byIndex.get(i).source))].sort((a,b)=>a-b),metadata:s.url,extraEvidence:s.extraEvidence||[],T11:s.T11||0,T12:s.T12||0,pages:s.pages||null,periodEnd:s.periodEnd??null,editionYear:s.editionYear||null,format:'Unknown; metadata deferred'};
 if(s.indices.includes(106)){b.periodEnd=1500;b.note+=' Correction: the central historical account ends around the Age of Exploration, assessed endpoint 1500; H13 capped at -12.';}
 assert(!all.some(z=>norm(z.title)===norm(b.title)),`Existing title: ${b.title}`);
 if(s.status==='excluded'){exclusions.push({index:x.index,indices:s.indices,title:b.title,author:b.author,source:x.source,sources:b.sources,sourceTitle:x.title,rule:s.rule,reason:s.note+' Evidence: '+s.url});continue;}
 assert.equal(b.raw.length,10);assert(Number.isFinite(b.year));
 b.notes=[`Evidence and inference: estimated attainment ${b.raw[0]}/20; see the book-specific evidence and limitations above.`,`Systems integration: ${b.raw[1]}/17; assessed from the connected domains described above.`,`Transferable utility: ${b.raw[2]}/15; reflects the stated mechanisms or comparisons.`,`Causal depth: ${b.raw[3]}/12; distinguishes explanatory mechanisms from descriptive coverage.`,`Density: ${b.raw[4]}/10, low confidence; inspected material and learning yield are stated above. No full-text density audit claimed.`,`Durability: ${b.raw[5]}/9; estimated persistence of the explanatory or historical value.`,`Direct fit: ${b.raw[6]}/7; target-domain value assessed separately from the thematic deductions.`,`Authority: ${b.raw[7]}/5; expert or practitioner standing does not override evidence flaws.`,`Narrative clarity: ${b.raw[8]}/3; low-confidence estimate from the inspected material.`,`Prose precision: ${b.raw[9]}/2; low-confidence estimate, not a claim of full-text review.`];
 if(b.status==='vetoed')b.vetoReason=b.note;
 decisions.push(b);
}
const resolved=[];
for(const [index,ids] of [[111,['g0950']],[130,['bg188b3be3cd','shelf-57f1c44d2300']]])for(const id of ids){const x=byIndex.get(index),b=all.find(b=>b.id===id);assert(b);resolved.push({...x,id,status:b.status,reason:'Reviewed alternate title or explicit two-work nomination; prior decision retained.'});}
for(const b of decisions){assert(!decisions.some(z=>z!==b&&norm(z.title)===norm(b.title)),`New duplicate: ${b.title}`);assert(!exclusions.some(z=>norm(z.title)===norm(b.title)));}
write('decisions.json',decisions);write('exclusions.json',exclusions);write('resolved.json',resolved);write('cleaned.json',q);
console.log({scored:decisions.length,excluded:exclusions.length,aliases:resolved.length});
