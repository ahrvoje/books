import fs from 'node:fs';
const dir='data/enrichment_261020/domains_b/';
const books=JSON.parse(fs.readFileSync('data/glasp_261019/compiled.json','utf8')).currentBooks.filter(b=>b.status==='recommended').sort((a,b)=>a.id<b.id?-1:a.id>b.id?1:0).slice(818,1636);
const files=new Map();
function section(ref,title){
 if(!ref)return '';
 const [f,anchor]=ref.replace(/^analysis\//,'').split('#');
 const p='analysis/'+f;if(!fs.existsSync(p))return '';
 if(!files.has(p))files.set(p,fs.readFileSync(p,'utf8'));
 const txt=files.get(p);if(!anchor){
  const exact=txt.split(/\r?\n/).filter(l=>l.toLowerCase().includes(title.toLowerCase()));
  return exact.filter(l=>!l.startsWith('|') || l.length>150).join('\n\n');
 }
 let at=txt.indexOf('id="'+anchor+'"');if(at<0)at=txt.indexOf('### '+anchor.toUpperCase());if(at<0)return '';
 let end=txt.indexOf('<a id=',at+1);if(end<0)end=txt.indexOf('\n### ',at+20);if(end<0)end=Math.min(txt.length,at+8000);
 return txt.slice(at,end);
}
const pack=books.map(b=>{
 const refs=[...new Set([b.reviewAnchor,b.priorAssessment,b.priorReview,b.currentReview,b.priorReport].filter(Boolean))].map(r=>r.startsWith('analysis/')?r:'analysis/'+r);
 const sections=refs.map(r=>section(r,b.title)).filter(Boolean);
 const direct=[b.reason,b.rationale,b.theme,b.case,b.scope,b.assessment?.note,...(b.notes||[]),...(b.criteria||[]).map(c=>c.assessment)].filter(x=>typeof x==='string'&&x.trim());
 const paras=sections.flatMap(s=>s.split(/\n\s*\n/)).filter(p=>!/^\s*(id=|<a|###|\*\*E \/|\*\*Raw|\*\*Linear|\*\*Attainments|\*\*Contributions|\*\*Deductions|\*\*Records|\*\*Reader|\*\*Identity|\*\*Prior|\*\*Sources|\*\*Score|\| Criterion)/.test(p)).map(s=>s.replace(/\*\*/g,'').replace(/\[[^\]]+\]\([^)]+\)/g,'').replace(/\s+/g,' ').trim()).filter(p=>!(/^(Veto screen|Reassessment:|Dates and deductions|Positive subtotal|Thematic deduction|Hard exclusions|Veto:|Eligibility|Original production|Counterfactual|Evidence and edition|Retained |Source occurrences)/.test(p)));
 const material=[...new Set([...direct,...paras])];
 return {id:b.id,title:b.title,author:b.author,refs,material,externalRefs:b.evidence||[],description:b.amazon?.description||'',reviewed:false};
});
fs.writeFileSync(dir+'evidence.json',JSON.stringify(pack,null,2)+'\n');
const start=Number(process.argv[2]||0),end=Number(process.argv[3]||start+50);
for(let i=start;i<Math.min(end,pack.length);i++){const b=pack[i]; const m=b.material.filter(x=>!(/^[^|]*[·;].*(Score confidence|score confidence|Pasted occurrences|original production|Source occurrences)/.test(x))).filter(x=>!(/^(\||Amazon and readers|Evidence:|Purchase locator:|Reader display:)/.test(x)));console.log(i+' '+b.id+' | '+b.title+' | '+m.join(' ').slice(0,650));}
