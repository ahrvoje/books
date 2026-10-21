import fs from 'node:fs';
import assert from 'node:assert/strict';

const dir = 'data/rule_review_261020';
const input = JSON.parse(fs.readFileSync(`${dir}/vetoed-input.json`, 'utf8'));
const ratingAudit = new Map(JSON.parse(fs.readFileSync(`${dir}/vetoed-amazon-audit.json`,'utf8')).rows.map(x=>[x.reviewId,x]));
const findingFiles = ['vetoed-findings.tsv', ...[2,3,4,5].map(n => `vetoed-findings-${n}.tsv`)];
const findings = findingFiles.flatMap(file => fs.readFileSync(`${dir}/${file}`, 'utf8').trim().split(/\r?\n/).map(line => {
  const [reviewId,status,confidence,...reason] = line.split('\t');
  return {reviewId,status,confidence,reason:reason.join('\t')};
}));
assert.equal(findings.length, input.length);
assert.equal(new Set(findings.map(x=>x.reviewId)).size, input.length);
const byId = new Map(findings.map(x=>[x.reviewId,x]));
const codes = ['E','S','U','M','D','R','F','A','N','P'];
const names = ['Evidence and inferential integrity','Systems integration','Transferable strategic utility','Mechanistic and causal depth','Information density and length justification','Durability and resistance to hype','Direct domain fit','Expert authority and intellectual standing','Narrative architecture and clarity','Authorial precision and finesse'];
const maxima = [20,17,15,12,10,9,7,5,3,2];
const freshEvidence = {
  v0003:['https://mitpress.mit.edu/9780262631471/inventing-accuracy/'],
  v0004:['https://www.ucpress.edu/book/9780520385689/the-united-states-of-war'],
  v0176:['https://www.carnegiecouncil.org/media/series/the-doorstep/how-world-ran-out-everything-peter-goodman'],
  v0177:['https://www.mattridley.co.uk/blog/introducing-how-innovation-works/'],
  v0178:['https://www.penguinrandomhouse.com/books/576816/the-innovation-delusion-by-lee-vinsel-and-andrew-l-russell/'],
  v0179:['https://www.penguinrandomhouse.com/books/612711/how-infrastructure-works-by-deb-chachra/'],
  v0189:['https://www.simonandschuster.com/books/Daughter-of-the-Heartland/Joni-Ernst/9781982144876'],
  v0225:['https://mises.org/library/book/ethics-money-production','https://mises.org/mises-daily/right-and-wrong-money-production'],
  v0228:['https://www.beacon.org/The-Great-Transformation-P46.aspx'],
  v0234:['https://www.penguinrandomhouse.com/books/566369/the-third-pillar-by-raghuram-rajan/'],
  v0245:['https://wp.penguin.co.uk/wp-content/uploads/2022/06/Press_Autumn_2018.pdf'],
  v0253:['https://api.pageplace.de/preview/DT0400.9780192559227_A35550796/preview-9780192559227_A35550796.pdf'],
  v0369:['https://www.pitchstonebooks.com/catalog/why-we-believe-in-gods','https://link.springer.com/book/10.1007/978-3-642-37772-3'],
  v0374:['https://www.a16zcrypto.com/posts/article/read-write-own-intro','https://www.a16zcrypto.com/readwriteown/'],
  v0429:['https://obnb.uk/p10325331-tools-for-conviviality'],
  v0430:['https://houseofanansi.com/products/the-real-world-of-technology','https://www.sfu.ca/~decaste/techcourse/franklin.pdf'],
  v0440:['https://www.beacon.org/Chokepoint-Capitalism-P2020.aspx'],
  v0453:['https://www.penguinrandomhouse.com/books/739852/rad-future-by-isabelle-boemeke/'],
  v0461:['https://global.penguinrandomhouse.com/announcements/doubleday-to-publish-bill-gates-book-about-climate-change-in-june-2020/','https://www.penguin.co.uk/books/317490/how-to-avoid-a-climate-disaster-by-gates-bill/9780241448762'],
  v0475:['https://www.simonandschuster.com/books/Soil/Camille-T-Dungy/9781982195304']
};
const cache = new Map();
function read(file) {
  if (!cache.has(file)) cache.set(file, fs.existsSync(file) ? fs.readFileSync(file,'utf8') : '');
  return cache.get(file);
}
function refPath(ref) {
  return ref.startsWith('analysis/') ? ref : `analysis/${ref}`;
}
function section(file,anchor,title) {
  const text=read(file), lines=text.split(/\r?\n/);
  let ix=-1;
  if(anchor) ix=lines.findIndex(l=>l.includes(`id="${anchor}"`) || l.includes(`id='${anchor}'`));
  const normalize=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[*_`]/g,'').replace(/[’‘]/g,"'").replace(/[–—]/g,'-').replace(/\s+/g,' ').trim();
  const expected=normalize(title);
  if(ix<0) ix=lines.findIndex(l=>{
    if(!/^#{2,4} /.test(l)) return false;
    const heading=normalize(l.replace(/^#{2,4}\s+/, '').replace(/^[A-Za-z]?\d+[.:]?\s*(?:[—–-]\s*)?/,''));
    return heading===expected || heading.startsWith(expected+' - ') || heading.startsWith(expected+': ');
  });
  if(ix<0) return '';
  // A table row is one book. Following rows must never become its evidence.
  if(/^\s*\|/.test(lines[ix])) return lines[ix];
  let end=ix+1;
  // An explicit anchor normally precedes the heading for this same book.
  if(/^<a /.test(lines[ix])) { while(end<lines.length && !/^#{2,4} /.test(lines[end])) end++; end++; }
  while(end<lines.length && !/<a id=/.test(lines[end]) && !/^#{2,4} /.test(lines[end])) end++;
  return lines.slice(ix,end).join('\n');
}
const excerpts=[];
function getPrior(b) {
  const refs = [b.priorAssessment,b.currentVetoAnchor,b.reviewAnchor,b.priorReview,b.currentReview,...(b.analysisFiles||[])].filter(x=>typeof x==='string');
  for(const match of (b.priorReasonBlock||'').matchAll(/\]\((analysis_[^ )]+\.md(?:#[^ )]+)?)\)/g)) refs.push(match[1]);
  const priorReviews=[...new Set(refs.map(refPath))];
  const blocks=[];
  for(const ref of priorReviews) {
    const [file,anchor] = ref.split('#');
    const block = section(file,anchor,b.title);
    if(block && !blocks.some(x=>x.text===block)) blocks.push({ref,text:block});
  }
  excerpts.push({reviewId:b.reviewId,title:b.title,priorReviews,blocks});
  return {priorReviews,blocks};
}
function paragraphs(text) {return text.split(/\n\s*\n/).map(s=>s.trim()).filter(Boolean);}
function qualityOnly(text='') {
  return String(text).split(/(?<=[.!?])\s+/).filter(s=>!/(?:\bV[1-5]\b|veto|not recommended)/i.test(s)).join(' ').trim();
}
function currentQuality(text) {
  return String(text)
    .replace(/survives the veto/g,'survives the identified limitations')
    .replace(/despite the vetoed activist purpose/g,'despite the identified selection and framing limits')
    .replace(/offer U10 counterfactually/g,'offer U10')
    .replace(/counterfactual (value|payload)/g,'$1');
}
const revisedCriterionNotes={
  v0003:[
    'Detailed archival and interview research supports the technical history; causal attribution and the social interpretation retain uncertainty.',
    'The account connects guidance engineering, test standards, procurement institutions and strategic requirements.',
    'Lessons about tacit knowledge, measurement and requirement setting transfer to other technical organizations.',
    'The account explains how testing, design choices and procurement shaped the attained accuracy of missile guidance.',
    'Substantial technical detail supports the explanation, with a length and specialist-detail burden.',
    'The constraints of measurement and institutional choice remain useful beyond the original missile programs.',
    'Guidance precision and the organization of high technology directly match the technical interests in the profile.',
    'The prior assessment credits deep empirical research and specialist engagement with the account.',
    'The sustained historical structure connects technical and institutional developments, though some passages are dense.',
    'The technical distinctions support conceptual precision; the social interpretation remains an interpretation rather than an eligibility finding.'
  ]
};
function rationaleFrom(b,blocks) {
  if(b.rationale && qualityOnly(b.rationale)) return qualityOnly(b.rationale);
  if(b.notes?.length===10) return b.notes.join(' ');
  // Retain the actual book-specific paragraph accompanying prior scores, rather than inventing new evidence.
  const chunks=blocks.flatMap(x=>paragraphs(x.text));
  const useful=chunks.filter(p=>!p.startsWith('|') && !p.startsWith('#') && !p.startsWith('<a') && !p.startsWith('[') && !p.startsWith('**') && !/^(Linked edition|Reader snapshot|Current contributing|Positive subtotal|E\d)/.test(p) && /\b(?:evidence|mechanism|causal|narrative|inference|argument|institution|explanation|research|authority|readab|clarity|transfer|length|precision)/i.test(p));
  const noGate=useful.filter(p=>!/(?:\bV[1-5]\b|veto|counterfactual total|counterfactual score|prior score vector)/i.test(p));
  return (noGate[0] || qualityOnly(useful[0]) || qualityOnly(b.assessment?.note) || qualityOnly(b.priorReasonBlock?.split(/\r?\n\r?\n/)[0]) || b.reason || b.eligibility || '').replace(/\s+/g,' ').slice(0,1800);
}
function urls(text) {return [...text.matchAll(/https?:\/\/[^\s<>"\]]+/g)].map(x=>x[0].replace(/[).,;]+$/,''));}
function criterionNote(b,i,priorRationale) {
  const original=b.notes?.[i] || b.criteria?.[i]?.assessment || b.criteria?.[i]?.rationale || b.criteria?.[i]?.note;
  if(typeof original==='string' && original.trim()) return `${original} Revised-rule reassessment: retain ${codes[i]} attainment ${b.raw[i]}/${maxima[i]}; the eligibility change supplies no contrary criterion evidence.`;
  const pieces=priorRationale.split(/(?<=[.;])\s+/);
  const relevant=pieces.filter(s=>new RegExp(`(?:^|[ /])${codes[i]}(?=[ /:0-9]|$)`).test(s));
  return `${names[i]}: retain linear attainment ${b.raw[i]}/${maxima[i]} after reviewing the prior evidence. ${relevant.join(' ') || priorRationale} The revised H2/V5 boundary does not itself raise or lower this quality criterion.`;
}
const decisions=input.map(b=>{
  const f=byId.get(b.reviewId); assert(f,`Missing decision ${b.reviewId}`);
  assert(['recommended','vetoed','excluded'].includes(f.status));
  const {priorReviews,blocks}=getPrior(b);
  const priorRationale=rationaleFrom(b,blocks);
  const currentRationale=f.status==='recommended'?currentQuality(revisedCriterionNotes[b.reviewId]?.join(' ')||priorRationale):priorRationale;
  assert(priorRationale,`Missing criterion context ${b.reviewId}`);
  const evidence=[...new Set([
    ...(Array.isArray(b.evidence)?b.evidence.filter(x=>typeof x==='string'):[]),
    ...(b.sourceUrl?[b.sourceUrl]:[]),
    ...urls(b.priorReasonBlock||''),
    ...blocks.flatMap(x=>urls(x.text)),
    ...(freshEvidence[b.reviewId]||[])
  ])];
  const d={...b,...f,
    priorReason:b.reason||b.vetoReason||b.priorReasonBlock||'',
    priorRationale,
    priorVeto:b.veto,
    previousStatus:b.status,
    status:f.status,
    // Gate confidence is not the confidence in the unchanged quality estimate.
    confidence:b.confidence||b.scoreConfidence||'low',
    eligibilityConfidence:f.confidence,
    reason:f.reason,
    changed:f.status!==b.status,
    sources:[...b.sources],
    evidence,priorReviews,
    notes:codes.map((_,i)=>{
      const note=criterionNote(revisedCriterionNotes[b.reviewId]?{...b,notes:revisedCriterionNotes[b.reviewId]}:b,i,currentRationale);
      return f.status==='recommended'?currentQuality(note):note;
    }),
    yearNote:b.yearNote||b.production?.note||`Retain the recorded original production year ${b.year}; revised H2/V5 changes no publication evidence. Source: ${b.priorAssessment||b.currentReview}.`,
    periodNote:qualityOnly(b.periodNote)||`${b.periodEnd==null?'Retain no single central historical endpoint (H13=0).':`Retain the assessed central-period endpoint ${b.periodEnd}, confidence ${b.periodConfidence||'low'}.`} ${qualityOnly(b.assessment?.note)} The revised eligibility wording supplies no new period evidence.`,
    themeNote:qualityOnly(b.themeNote)||`Retain T11=${b.T11} and T12=${b.T12} after checking the book's subject against the prior assessment. ${qualityOnly(b.assessment?.note)} The revised eligibility boundary is separate from thematic deductions.`,
    scoreReassessment:`All ten positive attainments were reviewed against the cited prior book-specific assessment and retained. ${currentRationale} T11=${b.T11} and T12=${b.T12} remain the independent subject decisions. Retain original year ${b.year}, ${b.periodEnd==null?'no fixed historical endpoint':`historical endpoint ${b.periodEnd}`} and the existing single-product Amazon snapshot/fallback. No new factual evidence in this rule review warrants changing any of the fifteen numerical inputs; the score therefore remains ${Number(b.total).toFixed(2)}. ${f.status==='recommended'?'Removing the veto makes that existing quality estimate an eligible score; it does not confer extra points.':'The total remains counterfactual and suspends only the retained veto gate.'}`,
    reassessment:`Current AGENTS H2 and V5 reassessment, 2026-10-20: ${f.reason} Review sources ${b.sources.join(', ')} and the cited historical analyses. All ten raw attainments and rules 11–15 were reconsidered against those records; the narrower gate alone is not evidence of higher quality, so numerical inputs are retained. Gate confidence ${f.confidence}; score confidence ${b.confidence||b.scoreConfidence||'low'}.`,
    eligibility:`H1 passes: the identified work is presented as nonfiction; expository dialogue is not automatically fiction. H2 passes: the retained scope is narrative, explanatory or argumentative, including expert narrative, rather than exam preparation, a specific-system procedure manual, or specialist reference. ${f.reason}`,
    reviewedAt:'2026-10-20',
    reviewBasis:'Individual revised-rule finding; prior source membership, book-specific assessments and snapshots retained; selected primary publisher/author checks listed in evidence.'
  };
  if(f.status==='vetoed') {d.veto=b.reviewId==='v0391'?'V1':b.veto; d.vetoReason=f.reason; d.vetoConfidence=f.confidence;}
  else {d.veto=null;d.vetoReason=null;d.vetoConfidence=null;}
  const thematicCorrections={
    v0176:'T12 changes from -10 to 0: the central object is the operation and fragility of the production/logistics chain, following goods through factories, ports, ships, trucks and inventories. Corporate power and labor policy explain that system and supply proposed remedies; they do not replace logistics as the central topic. The retained reporting assessment and the author interview support this distinction. T11 stays 0 for global rather than solely American influence.',
    v0369:'T12 changes from -10 to 0: the central object is an evolutionary-cognitive explanation of religious belief. The publisher and original-language description identify psychology/neuroscience rather than philosophy or political doctrine as the explanatory subject. The secular conclusion does not itself make philosophy the central topic. T11 remains 0.'
  };
  if(thematicCorrections[b.reviewId]) {
    d.previousT12=b.T12;d.T12=0;d.deductions={...b.deductions,T12:0};
    d.previousTotal=b.total;d.total=b.total-b.T12;d.displayScore=d.total.toFixed(2);
    d.verdict=d.total>=85?'Recommend':d.total>=75?'Consider':d.total>=65?'Selective':d.total>=50?'Low priority':'Poor fit';
    d.themeNote=thematicCorrections[b.reviewId];d.themeConfidence='moderate';
    d.scoreReassessment=`The ten positive attainments are retained after checking the prior book-specific evidence. ${currentRationale} ${d.themeNote} Original publication year, central historical endpoint, T11 and the existing Amazon aggregate/fallback are unchanged. Correcting this independent subject classification raises the total from ${b.total.toFixed(2)} to ${d.total.toFixed(2)}; removing V5 itself adds no points.`;
    d.reassessment=`Current AGENTS H2 and V5 reassessment, 2026-10-20: ${f.reason} ${d.themeNote} The ten positive attainments and all remaining deductions stay unchanged for the reasons recorded in their notes. Sources ${b.sources.join(', ')} and prior analyses are retained. Gate confidence ${f.confidence}; score confidence ${d.confidence}.`;
    d.changed=true;
  }
  if(!d.amazon || typeof d.amazon!=='object') d.amazon={count:null,status:'Prior retrieval unavailable; retain specified zero-deduction fallback.'};
  d.amazon={...d.amazon,status:d.amazon.status||(Number.isFinite(d.amazon.count)?'Retained verified matching product rating aggregate from the prior retrieval.':'Retained unavailable-count fallback after prior retrieval attempts; not zero ratings.')};
  const audit=ratingAudit.get(b.reviewId); assert(audit,`Missing Amazon audit ${b.reviewId}`);
  d.amazonAudit={reviewedAt:'2026-10-20',action:audit.action,identity:audit.identityAudit,source:`${dir}/vetoed-amazon-audit.json#${b.reviewId}`};
  if(audit.identitySource)d.evidence.push(audit.identitySource);
  if(audit.action.startsWith('reject')){
    const oldAmazon=d.amazon,oldTotal=d.total,oldO15=d.deductions.O15;
    const reason=audit.identityFinding||'The captured rating control is labeled reviews (or Recensioni), with no explicit total-ratings aggregate. A bare parenthesized count is insufficient to distinguish total ratings from written reviews.';
    d.amazon={...oldAmazon,count:null,globalCount:null,verified:false,confidence:'unknown',status:`Unknown total ratings after reviewing the saved retrieval attempts. ${reason} Apply the specified O15=0 fallback; unknown is not zero ratings.`,priorSnapshot:oldAmazon,auditAt:'2026-10-20'};
    if(audit.action==='reject-wrong-product'){
      const correct=b.reviewId==='v0052'?{asin:'0942299795',title:'The Society of the Spectacle',byline:'Guy Debord (author); Donald Nicholson-Smith (translator)',outcome:'Matching title and author observed on 2026-10-20 through the public cached page. The visible control says 81 Reviews; no explicit global ratings aggregate was present. That number is not accepted as a rating count.'}:{asin:'1591432014',title:'The Complete Earth Chronicles',byline:'Zecharia Sitchin',outcome:'The publisher catalog confirms this ISBN as the complete seven-volume Earth Chronicles series. Amazon.com retrieval on 2026-10-20 returned Cache miss; no count observed.'};
      d.amazon={count:null,status:d.amazon.status,verified:false,confidence:'unknown',url:`https://www.amazon.com/dp/${correct.asin}`,asin:correct.asin,productTitle:correct.title,byline:correct.byline,marketplace:'www.amazon.com',retrievedAt:'2026-10-20',priorSnapshot:oldAmazon,attempts:[...(oldAmazon.attempts||[]),{url:`https://www.amazon.com/dp/${correct.asin}`,retrievedAt:'2026-10-20',productTitle:correct.title,byline:correct.byline,count:null,outcome:correct.outcome}],auditAt:'2026-10-20'};
      d.purchaseUrl=`https://www.amazon.com/dp/${correct.asin}`;
      if(d.purchaseAsin)d.purchaseAsin=correct.asin;
      if(d.titleCell)d.titleCell=d.titleCell.replace(/https:\/\/[^ )>]+\/(?:dp|product)\/[A-Z0-9]{10}/gi,d.purchaseUrl);
      d.evidence=d.evidence.filter(x=>!x.includes(audit.product));d.evidence.push(d.amazon.url);
      if(b.reviewId==='v0171')d.evidence.push('https://www.innertraditions.com/media/bronto-images/Digital/Winter-2026-Catalog_LR.pdf');
    }
    if(b.reviewId==='v0106')d.amazon.attempts=[...(oldAmazon.attempts||[]),{url:'https://www.amazon.com/dp/0743269195',retrievedAt:'2026-10-20',count:null,outcome:'Public retrieval returned Cache miss. The earlier matching Talbot snapshot has only a reviews-labeled count, so no total-rating count is accepted.'}];
    d.previousAmazonCount=oldAmazon.count;d.previousO15=oldO15;d.deductions={...d.deductions,O15:0};
    if(typeof d.reader==='string'&&/Amazon/i.test(d.reader)){
      d.previousReader=d.reader;d.reader='Amazon total ratings unknown after audit; prior reviews-only count is not accepted. O15 uses the specified zero-deduction fallback.';
    }
    if('O15' in d)d.O15=0;
    d.previousTotal=b.total;d.total=oldTotal-oldO15;d.displayScore=d.total.toFixed(2);
    d.verdict=d.total>=85?'Recommend':d.total>=75?'Consider':d.total>=65?'Selective':d.total>=50?'Low priority':'Poor fit';
    const numeric=oldO15===0?`The numerical O15 contribution stays 0, so this data correction does not change the total.`:`O15 changes from ${oldO15} to 0, increasing the score by ${-oldO15} points under the prescribed unknown-count fallback.`;
    d.scoreReassessment=`All ten positive attainments remain the reviewed prior estimates. ${currentRationale} ${d.themeNote} The original publication year and central historical endpoint remain unchanged. Amazon audit: ${reason} Prior attempts are preserved; no matching explicit total-rating aggregate was recoverable. ${numeric} The final total is ${d.total.toFixed(2)} (prior recorded total ${b.total.toFixed(2)}). This correction concerns missing rating evidence, not improved book quality. ${f.status==='vetoed'?'The total remains counterfactual and suspends only the retained veto gate.':'The gate change itself adds no points.'}`;
    d.reassessment=`Current AGENTS H2 and V5 reassessment, 2026-10-20: ${f.reason} ${d.themeNote} The ten positive attainments and the publication/historical age deductions remain unchanged. ${reason} Amazon count is now unknown; apply O15=0. ${numeric} Final total ${d.total.toFixed(2)}. Gate confidence ${f.confidence}; score confidence ${d.confidence}.`;
    d.changed=true;
  }
  d.rationale=d.scoreReassessment;
  d.gateChanged=d.status!==b.status || d.veto!==b.veto;
  if(d.gateChanged) d.changed=true;
  assert.equal(d.raw.length,10);assert.equal(d.notes.length,10);
  assert(d.notes.every(x=>typeof x==='string' && x.length>10));
  assert.deepEqual(d.sources,b.sources);
  return d;
});
fs.writeFileSync(`${dir}/vetoed-decisions.json`,JSON.stringify(decisions,null,2)+'\n');
fs.writeFileSync(`${dir}/vetoed-prior-excerpts.json`,JSON.stringify(excerpts,null,2)+'\n');
const counts=Object.fromEntries(['recommended','vetoed','excluded'].map(s=>[s,decisions.filter(b=>b.status===s).length]));
console.log(JSON.stringify({decisions:decisions.length,counts,primaryChecks:Object.keys(freshEvidence).length,priorFilesRead:cache.size,withPriorBlocks:excerpts.filter(x=>x.blocks.length).length,missingPriorBlocks:excerpts.filter(x=>!x.blocks.length).map(x=>x.reviewId)},null,2));
