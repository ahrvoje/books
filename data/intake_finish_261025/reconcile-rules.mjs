import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const path=read('data/catalog.json').compiled,c=read(path),editions=read('site/editions.json'),refs=read('site/reference-pages.json'),categories=read('site/exclusion-categories.json');
const report='analysis/analysis_gatefinal_261025_0125.md';
const reasons={
 'rest-15-13':'Research on motives for sexual relations is centrally about interpersonal relationships. H7 applies even though it is descriptive research rather than advice.',
 'rest-18-16':'Infidelity and marriage are the central subject. H7 excludes relationship books regardless of whether they are analytical or prescriptive.',
 'rest-21-18':'The central subject is how criminals communicate through signals. H7 explicitly excludes communication books; analytical and strategic value does not override the gate.',
 'rest-100-126':'The central purpose concerns couple rivalry and repairing relationships. H7 precedes the earlier V7 decision; no current counterfactual score remains.',
 'rest-116-96':'Literary criticism of Shakespeare is a book about artistic works. H7 applies to art analysis even when the interpretive method is philosophical.',
 'rest-124-104':'Art history and interpretation of artworks are the central purpose. H7 directly applies.',
 'rest-175-132':'The central subject is persuasive communication through videogames. H7 explicitly excludes communication books, even when computational mechanisms are discussed.'
};
const moved=[],touched=new Set();
for(const [id,reason] of Object.entries(reasons)){
 const b=c.currentBooks.find(x=>x.id===id);assert(b,id);moved.push({id,title:b.title,author:b.author,previousStatus:b.status,previousReview:b.scoreReview,sources:b.sources,reason,evidence:b.evidence});
 c.currentBooks=c.currentBooks.filter(x=>x.id!==id);
 c.exclusions.push({id,title:b.title,author:b.author,status:'excluded',sources:b.sources,exclusion:'H7',confidence:'high',reason,analysis:report+'#'+id,evidence:b.evidence,line:'- '+b.title+' — '+b.author});
 delete editions[id];delete refs[id];categories[id]='Misc. Non-fiction';b.sources.forEach(s=>touched.add(s));
}
c.exclusions.sort((a,b)=>a.title.localeCompare(b.title,'en',{sensitivity:'base'})||a.author.localeCompare(b.author));
for(const file of ['RECOMMENDED_BOOKS.md','VETOED_BOOKS.md']){
 let lines=fs.readFileSync(file,'utf8').split(/\r?\n/).filter(l=>!moved.some(b=>l.includes('['+b.title+']')&&l.includes(b.author)));
 const count=lines.filter(l=>/^\| \d{4}-/.test(l)).length;
 fs.writeFileSync(file,lines.join('\n').replace(/\d+ unique works\./,count+' unique works.'));
}
fs.writeFileSync('EXCLUDED_BOOKS.md','# Excluded books\n\n'+c.exclusions.map(b=>b.line||'- '+b.title+' — '+b.author).join('\n')+'\n');
c.audit.rulesReconciliation={date:'2026-10-25',scope:'Newly assessed titles in this turn; prior catalog decisions retained under the user\'s explicit duplicate-first instruction.',change:'Local AGENTS.md adds hard exclusion H7 for art, relationships, communication and related subjects.',movedToExcluded:moved.map(b=>b.id),priorCatalogH7Audit:'Not performed; outside the narrowed finalization scope.',report};
c.audit.rulesSha256=crypto.createHash('sha256').update(fs.readFileSync('AGENTS.md')).digest('hex');
write(path,c);write('site/editions.json',editions);write('site/reference-pages.json',refs);write('site/exclusion-categories.json',categories);write('data/intake_finish_261025/rule-reconciliation.json',moved);
let text='# Final gate reconciliation\n\nThe local AGENTS.md now includes hard exclusion H7 for art, relationships, communication and related subjects. This supersedes the earlier decisions below. No current score or counterfactual score is retained for these books. Earlier analyses remain historical records. Other prior catalog decisions remain unchanged under the user’s explicit instruction to avoid repeated evaluation. A catalog-wide H7 migration is not claimed.\n\n';
for(const b of moved)text+=`<a id="${b.id}"></a>\n\n## ${b.title} — ${b.author}\n\nHard excluded under H7; confidence high. ${b.reason}\n\nDistinct source IDs: ${b.sources.join(', ')}. [Earlier analysis](${b.previousReview.replace('analysis/','')}). Evidence: ${b.evidence.map((u,i)=>'[source '+(i+1)+']('+u+')').join('; ')}.\n\n`;
fs.writeFileSync(report,text);
const sourceLines=fs.readFileSync('SOURCES.md','utf8').split(/\r?\n/).map(l=>{const id=Number(l.split('|')[1]);if(!touched.has(id))return l;const a=l.split('|');a[4]=' [Final gate corrections]('+report+'); '+a[4].trim()+' ';return a.join('|');});
fs.writeFileSync('SOURCES.md',sourceLines.join('\n'));
console.log({moved:moved.length,sources:[...touched],rulesSha256:c.audit.rulesSha256});
