import fs from 'node:fs';
import assert from 'node:assert/strict';
import {format} from '../../site/model.mjs';
const dir='data/v3_review_261103',report='analysis/analysis_v3review_261103_2142.md';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const c=read(dir+'/compiled.json'),changes=read(dir+'/changes.json'),screen=read(dir+'/screening-ledger.json');
const decisions=[
 {id:'q0414',character:'Political biography connecting Stalin’s ascent with imperial institutions, social change and revolutionary power.',reason:'The publisher’s opening excerpt situates the individual within a diverse empire and rapid technological and political change. The recovered earlier assessment identifies institutional and ideological explanations. This supports retaining the substantial contextual and causal contribution; it is not merely a personality portrait. The sample does not establish whole-book density or settle disputed interpretations, so all existing numerical assessments and their limits remain.',urls:['https://penguinrandomhouselibrary.com/book/?isbn=9780143127864']},
 {id:'nb2806edfbc',character:'A biography explaining the interaction of Hitler’s aims, personal authority and institutional competition.',reason:'The author’s account of his method and the one-volume contents identify a developed explanation: officials anticipate the leader’s wishes and compete to act on them, which can intensify policy without a separate command for every step. A recurring framework can add understanding through distinct decisions and constraints. Retain V3 eligibility and all scores; this focused check is not a new full-text or density audit.',urls:['https://www.thebritishacademy.ac.uk/documents/831/BAR26-09-Kershaw_0.pdf','https://books.google.com/books/about/Hitler_A_Biography.html?id=YadFavyLuGEC']},
 {id:'shelf-2597656a480c',character:'Six comparative life histories showing how social origin, education, work and family expectations constrain young adults in China.',reason:'The author describes linked life narratives, while Schmitz’s review identifies differences in family privilege, rural access to education and career opportunities. It also notes missing social groups and the tension between personal rebellion and parental approval. These comparisons add understanding beyond six isolated personalities. The cases are not a representative survey, and narrative form alone neither passes nor fails V3. Retain the existing modest transfer and causal attainments and the density confidence limit.',urls:['https://theanthill.org/wish-lanterns','https://pacific-geographies.org/wp-content/uploads/2019/09/PG52_2223.pdf']}
];
assert(decisions.every(d=>!changes.some(x=>x.id===d.id)),'Boundary checks already applied');
let text=fs.readFileSync(report,'utf8')+'\n## Checks against an overbroad single-subject veto\n\nThese retained cases test the rule against substantial explanation within a political biography and learning through contrasting lives. Gate confidence is moderate; existing score confidence is unchanged.\n\n';
const codes=['E','S','U','M','D','R','F','A','N','P'],max=[20,17,15,12,10,9,7,5,3,2];
for(const d of decisions){
 const b=c.currentBooks.find(b=>b.id===d.id);assert(b.status==='recommended');
 const prior=b.scoreReview||b.reviewAnchor||b.currentReview,anchor=report+'#'+b.id;
 const x={...d,decision:'retain',confidence:'moderate',title:b.title,author:b.author,previousStatus:b.status,status:b.status,previousScore:b.total,score:b.total,previousRaw:[...b.raw],raw:[...b.raw],changes:{},sources:[...b.sources],prior,analysis:anchor,priorEvidence:b.priorPurposeEvidence?.paragraphs||[b.note||b.reason||'See prior assessment.'],evidence:d.urls,contributions:b.raw.map((v,i)=>[0,1,4].includes(i)?v*v/max[i]:v),deductions:b.deductions,bonuses:b.bonuses,bonusAssessment:b.bonusAssessment};
 changes.push(x);b.priorReviews=[...new Set([...(b.priorReviews||[]),b.reviewAnchor,b.currentReview,b.scoreReview].filter(Boolean))];
 b.intellectualReview={date:'2026-11-03',decision:'retain',character:d.character,reason:d.reason,confidence:'moderate',analysis:anchor,method:'Prior content assessment plus the cited author account, excerpt, contents or independent review; no new full-text coverage.'};
 b.note=d.character+' '+d.reason;b.reviewAnchor=anchor;b.currentReview=report;delete b.priorPurposeEvidence;
 const s=screen.find(s=>s.id===b.id);Object.assign(s,{reviewLevel:'focused decision',mainCharacteristic:d.character,finding:d.reason,confidence:'moderate',needsDirectReview:false,refs:[anchor,...d.urls]});delete s.recoveredPurposeRef;delete s.recoveredPurposeEvidence;
 text+=`<a id="${b.id}"></a>\n\n### ${b.title} — ${b.author}\n\n**Retain; moderate gate confidence.** ${d.character}\n\n${d.reason}\n\n[Prior score/review](${prior?.replace(/^analysis\//,'')}). Sources: ${b.sources.join(', ')}. ${d.urls.map((u,i)=>`[Inspected evidence ${i+1}](${u})`).join('; ')}.\n\n**Score ${format(b.total)}; ${b.verdict}**, unchanged.\n\n| Criterion | Linear attainment | Contribution |\n|---|---:|---:|\n`;
 codes.forEach((code,i)=>text+=`| ${code} | ${format(b.raw[i])} / ${max[i]} | ${format(x.contributions[i])} |\n`);
 text+='\nDeductions: '+JSON.stringify(b.deductions)+'. Bonuses: '+JSON.stringify(b.bonuses)+'. R&D metadata: '+JSON.stringify(b.bonusAssessment)+'.\n\n';
}
const a=c.audit.latestV3Review,old={focused:a.focused,recovered:a.recoveredPurpose,direct:a.needsDirectReview};
a.focused=changes.length;a.recoveredPurpose=c.currentBooks.filter(b=>b.priorPurposeEvidence).length;a.needsDirectReview=screen.filter(s=>s.needsDirectReview).length;
for(const file of [report,'README.md','IMPLEMENTATION_REVIEW.md']){
 let t=file===report?text:fs.readFileSync(file,'utf8');
 t=t.replaceAll(`${old.focused} explicit focused decisions`,`${a.focused} explicit focused decisions`).replaceAll(`${old.focused} focused decisions`,`${a.focused} focused decisions`).replaceAll(`**${old.focused} focused decisions**`,`**${a.focused} focused decisions**`).replaceAll(String(old.recovered),String(a.recoveredPurpose)).replaceAll(String(old.direct),String(a.needsDirectReview)).replaceAll(old.direct.toLocaleString('en-US'),a.needsDirectReview.toLocaleString('en-US'));
 fs.writeFileSync(file,t);
}
write(dir+'/compiled.json',c);write(dir+'/changes.json',changes);write(dir+'/screening-ledger.json',screen);console.log(a);
