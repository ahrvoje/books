import fs from 'node:fs';
let s=fs.readFileSync('data/intake_large_261024/process.mjs','utf8');
s=s.replace("const dir='data/intake_large_261024'","const dir='data/intake_rest_261025'")
 .replace("const previous='data/intake_next_261024/compiled.json'","const previous='data/intake_large_261024/compiled.json'")
 .replaceAll('261024_2353','261025_0116').replaceAll('2026-10-24','2026-10-25')
 .replace("const id='large-ex-'","const id='rest-ex-'")
 .replace('malformedEntriesRepaired:421','malformedEntriesRepaired:0')
 .replace('421 malformed source-283 title/author records repaired.','No source record is renumbered; previously repaired source text is reused.')
 .replace('(fiction or technical curriculum)','(documented hard-exclusion rules)')
 .replace("...read(dir+'/exclusions.json').map(x=>x.index)","...read(dir+'/exclusions.json').flatMap(x=>x.indices||[x.index])")
 .replace("for(const {title,author,reason,source,sourceTitle,rule}","for(const {title,author,reason,source,sources:contributingSources,sourceTitle,rule}")
 .replace("status:'excluded',sources:[source]","status:'excluded',sources:contributingSources||[source]")
 .replace("b.pageEdition||(b.isbn?'ISBN:'+b.isbn:b.title+' ('+b.editionYear+')')","b.pageEdition||(b.isbn?'ISBN:'+b.isbn:b.pages?b.title+'; edition date unverified':'unknown')")
 .replace("b.yearConfidence='moderate'","b.yearConfidence=b.year<1000?'low':'moderate'")
 .replace('Original year: ${b.year}, confidence moderate.','Original year: ${b.year}, confidence ${b.yearConfidence}.')
 .replace("Assessment confidence: low. Eligibility confidence: moderate.","Assessment confidence: low. Eligibility confidence: moderate; explicit gate confidence stated separately.");
// Add preflight checks before any catalog or ledger write.
const marker="// Apply only individually reviewed identity matches; keep ambiguous candidates pending.";
s=s.replace(marker,`const preflightBooks=read(dir+'/decisions.json'), preflightExclusions=read(dir+'/exclusions.json');
const proposed=[...preflightBooks,...preflightExclusions];
assert.equal(new Set(proposed.map(b=>norm(b.title))).size,proposed.length,'Duplicate new title');
for(const b of proposed)assert(!all.some(x=>norm(x.title)===norm(b.title)),b.title);
for(const b of preflightBooks){assert(b.raw.every((v,i)=>v>=0&&v<=[20,17,15,12,10,9,7,5,3,2][i]));assert(b.sources.length>0);if(b.referencePages!=null)assert(b.pages>0&&b.referencePages<=b.pages);}
${marker}`);
s=s.replace("norm(x.title)===norm(b.title)||norm(x.title)===norm(b.title.split(':')[0])","norm(x.title)===norm(b.title)||(norm(x.title)===norm(b.title.split(':')[0])&&norm(x.author)===norm(b.author))");
fs.writeFileSync('data/intake_rest_261025/process.mjs',s);
let v=fs.readFileSync('data/intake_large_261024/verify.mjs','utf8').replaceAll('data/intake_large_261024/','data/intake_rest_261025/').replaceAll('data/intake_next_261024/','data/intake_large_261024/').replace('closedCandidates,952','closedCandidates,629').replace('newScoreCalculationsVerified:40',"newScoreCalculationsVerified:read(d+'new-books.json').length").replace('remainingCandidates:629','remainingCandidates:result.pendingCandidates');
fs.writeFileSync('data/intake_rest_261025/verify.mjs',v);
