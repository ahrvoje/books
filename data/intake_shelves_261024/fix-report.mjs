import fs from 'node:fs';
const file='data/intake_shelves_261024/integrate.mjs';let s=fs.readFileSync(file,'utf8');
const edits=[
["b.verdict=b.total>=85?", "b.verdict=b.status==='vetoed'?'Vetoed; counterfactual score':b.total>=85?"],
["newRecommended:selected.filter", "newVetoed:selected.filter(b=>b.status==='vetoed').length,newRecommended:selected.filter"],
[".join('\\n').trimEnd()+'\\n'+vetoRows", ".join('\\n').replace(/\\d+ unique works/,c.currentBooks.filter(b=>b.status==='vetoed').length+' unique works').trimEnd()+'\\n'+vetoRows"],
["Eligibility: nonfiction explanatory work, with no established hard exclusion or serious veto in the inspected source report and available bibliographic evidence.", "${b.status==='vetoed'?'Veto '+b.veto+'; confidence '+b.vetoConfidence+'. '+b.vetoReason:'Eligibility: nonfiction explanatory work, with no established hard exclusion or serious veto in the inspected source report and available bibliographic evidence.'}"],
["(original year ${b.year}, confidence moderate)","(original year ${b.year}, confidence ${b.yearConfidence})"],
["**Score ${fmt(b.total)};", "**${b.status==='vetoed'?'Counterfactual score':'Score'} ${fmt(b.total)};"]
];for(const [a,b] of edits){if(!s.includes(a))throw Error('Missing '+a);s=s.replace(a,b);}fs.writeFileSync(file,s);
