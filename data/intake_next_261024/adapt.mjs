import fs from 'node:fs';
import assert from 'node:assert/strict';
let s=fs.readFileSync('data/intake_continue_261024/process.mjs','utf8');
function replace(a,b){assert(s.includes(a),a);s=s.replace(a,b);}
replace("const dir='data/intake_continue_261024'","const dir='data/intake_next_261024'");
replace("const previous=priorDir+'/compiled.json'","const previous='data/intake_continue_261024/compiled.json'");
replace("const stamp='261024_2325'","const stamp='261024_2330'");
replace("const resolved=read(dir+'/resolved.json').filter(x=>!x.title.startsWith('Flow: Living'));","const resolved=read(dir+'/resolved.json');");
s=s.split('\n').filter(l=>!l.startsWith('resolved.push(')&&!l.startsWith(' if(source===')).join('\n');
replace("for(const [title,author,reason] of read(dir+'/exclusions.json')){","for(const {title,author,reason,source,sourceTitle,rule} of read(dir+'/exclusions.json')){");
replace("const id='continue-ex-'","const id='next-ex-'");
replace("sources:[285],exclusion:'H3'","sources:[source],sourceTitle,exclusion:rule");
replace("analysis:report(285)+'#'+id,evidence:[names[285].url]","analysis:report(source)+'#'+id,evidence:[names[source].url]");
replace("categories[id]='Technology, Engineering, Innovation'","categories[id]=rule==='H2'?'Fiction':'Technology, Engineering, Innovation'");
replace("const queue=read(priorDir+'/pending.json')","const queue=read('data/intake_continue_261024/pending.json')");
replace("x.source===285&&(eq(b.title,x.title)||aliasEx[norm(x.title)]===norm(b.title))","b.sources.includes(x.source)&&(eq(b.sourceTitle,x.title)||eq(b.title,x.title)||aliasEx[norm(x.title)]===norm(b.title))");
replace("...newBooks.flatMap(b=>b.sources),285]","...newBooks.flatMap(b=>b.sources),...newExcluded.flatMap(b=>b.sources)]");
replace("'Source bibliography identifies the technical work. H3 applies before vetoes.'","`Source entry identifies the work. ${b.exclusion} applies before vetoes.`");
replace("Source wording: '+aliases.join('; ')+'. Same work; subtitle, punctuation or edition wording does not create a new identity.","Source wording: '+aliases.join('; ')+'. Existing identity or explicitly excluded series coverage resolved; no new work entry.");
replace("${newExcluded.length} technical books hard excluded.","${newExcluded.length} works hard excluded (fiction or technical curriculum).");
replace("Flow audio identity is deliberately unresolved.","The earlier Flow audio identity remains unresolved; no new source credit is inferred.");
// Metadata conflicts stay visible, without treating a preferred count as high-confidence verification.
replace("b.periodConfidence=b.id==='continue-valley'?'low':'moderate'", "b.periodConfidence=b.id==='next-rivas'?'low':'moderate'");
replace("format:b.format,retrieved:'2026-10-24',confidence:'moderate'", "format:b.format,retrieved:'2026-10-24',confidence:['next-canberras','next-rivas'].includes(b.id)?'low':'moderate'");
s=s.replace("// Keep the ambiguous audio program pending instead of treating a title prefix as proof of identity.","// Apply only individually reviewed identity matches; keep ambiguous candidates pending.");
// Name the prior supplement as well as the initial source analysis where it exists.
s=s.replace("It covers the decisions below, not the full source.","It covers the decisions below, not the full source. The preceding catalog snapshot and its analysis links remain history.");
fs.writeFileSync('data/intake_next_261024/process.mjs',s);
