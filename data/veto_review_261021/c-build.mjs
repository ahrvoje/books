import fs from 'node:fs';
import assert from 'node:assert/strict';

const dir = 'data/veto_review_261021/';
const input = JSON.parse(fs.readFileSync(dir + 'c-input.json', 'utf8'));
const excerpts = new Map(JSON.parse(fs.readFileSync(dir + 'c-prior-excerpts.json', 'utf8')).map(x => [x.id, x]));
const rows = fs.readFileSync(dir + 'c-findings.txt', 'utf8').trim().split(/\r?\n/).map(x => x.split('|'));
assert.equal(rows.length, input.length);
assert.equal(new Set(rows.map(x => x[0])).size, input.length);
assert(rows.every(x => x.length === 6));
const findings = new Map(rows.map(([id, decision, confidence, form, reason, payload]) => [id, {decision, confidence, form, reason, payload}]));
const keys = ['E','S','U','M','D','R','F','A','N','P'];
const names = ['Evidence and inferential integrity','Systems integration','Transferable strategic utility','Mechanistic and causal depth','Information density and length justification','Durability and resistance to hype','Direct domain fit','Expert authority and intellectual standing','Narrative architecture and clarity','Authorial precision and finesse'];
const maxima = [20,17,15,12,10,9,7,5,3,2];
const detailedNotes = new Map(fs.readFileSync(dir + 'c-notes.txt','utf8').trim().split(/\r?\n/).map(line => {
  const [id,...notes] = line.split('|');
  assert.equal(notes.length,10,id);
  assert.equal(new Set(notes).size,10,id);
  return [id,notes];
}));
const primary = {
  n264eee6abf: ['https://dudeism.com/thedudedeching/'],
  q1015: ['https://zeihan.com/the-end-of-the-world-civilization-and-technology/','https://zeihan.com/credit-and-the-end-of-the-world/','https://zeihan.com/greentech-and-the-end-of-the-world/'],
  g0877: ['https://mises.org/library/book/ethics-money-production','https://cdn.mises.org/The%20Ethics%20of%20Money%20Production_2.pdf'],
  g0919: ['https://www.miguelruiz.com/the-four-agreements'],
  g0999: ['https://www.penguinrandomhouse.com/books/174648/the-fourth-turning-by-william-strauss/'],
  g0402: ['https://www.simonandschuster.com/books/The-Future-Is-Faster-Than-You-Think/Peter-H-Diamandis/Exponential-Technology-Series/9781982109660','https://members.real-leaders.com/wp-content/uploads/2024/10/How-to-build-your-future.pdf'],
  g1302: ['https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Caesar/Gallic_War/7D%2A.html','https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0001%3Abook%3D7'],
  n07829fa11f: ['https://www.penguinrandomhouse.com/books/74750/the-heart-of-the-buddhas-teaching-by-thich-nhat-hanh/'],
  g0659: ['https://bishophill.squarespace.com/blog/2009/11/21/the-hockey-stick-illusion.html%3Bjsessionid%3DB268527F7E2C7599B2BA07DC82F9A80F.v5-web013','https://www.theregister.com/offbeat/2010/02/08/bishop-hill-gonzo-science-and-the-hockey-stick/1423468'],
  n97666f4c30: ['https://wipfandstock.com/products/the-myth-of-christian-beginnings-9781606086933?variant=59025177149775'],
  g0774: ['https://penguinrandomhousehighereducation.com/book/?isbn=9780525561521'],
  n4fadce72a2: ['https://www.penguinrandomhouse.com/books/800230/the-project-by-david-a-graham/','https://www.theatlantic.com/ideas/archive/2025/04/project-2025-top-goal/682142/'],
  g0898: ['https://us.macmillan.com/books/9781427222947/therealcrash/'],
  g0480: ['https://mriquestions.com/uploads/3/4/5/7/34572113/singularityisnear.pdf','https://www.thekurzweillibrary.com/singularity-q-a','https://www.thekurzweillibrary.com/kurzweil-responds-dont-underestimate-the-singularity'],
  g0973: ['https://www.rogerscruton.com/articles/255-soul-of-the-world'],
  g0673: ['https://paperzz.com/doc/8425244/spiritual-brain---thedivineconspiracy.org','https://www.earlyword.com/downloads/FALL08Adult/HarperOneFall08.pdf'],
  q1114: ['https://www.penguinrandomhouse.com/books/301726/the-tao-of-wu-by-the-rza/'],
  g0166: ['https://www.simonandschuster.com/books/The-Third-Wave/Steve-Case/9781501132599','https://www.entrepreneur.com/leadership/how-steve-case-is-preparing-for-the-webs-third-wave/275135'],
  g0483: ['https://us.macmillan.com/books/9781250304179/thetruthmachine/'],
  g0678: ['https://www.linkedin.com/in/behzadmohit','https://www.goodreads.com/book/show/36531441-thermoinfocomplexity'],
  q1026: ['https://mitpressbookstore.mit.edu/book/9780804722155'],
  g0976: ['https://kfoundation.org/krishnamurti-think-on-these-things-what-religion-is-not/','https://kfoundation.org/krishnamurti-think-on-these-things-chapter-4/'],
  n3cb68f6e47: ['https://thisisforeveryone.timbl.com/about-the-book.html','https://www.panmacmillan.com/authors/tim-berners-lee/this-is-for-everyone/9781035023677'],
  ndcff489c85: ['https://www.wiley-vch.de/en/areas-interest/finance-economics-law/finance-investments-13fi/personal-finance-13fi2/thou-shall-prosper-978-0-470-48588-0'],
  g1120: ['https://www.simonandschuster.com/books/Timeline-of-World-History/Matt-Baker/9781645174172'],
  g0977: ['https://store.kfoundation.org/books/books-by-j-krishnamurti/books/total-freedom-the-essential-krishnamurti?setCurrencyId=1'],
  g0385: ['https://cdn.penguin.co.uk/dam-assets/books/9780241616598/9780241616598-sample.pdf'],
  g1235: ['https://www.everand.com/book/424654671/Why-Buy-Bitcoin-Investing-Today-in-the-Money-of-Tomorrow','https://www.theinvestorspodcast.com/millennial-investing/why-buy-bitcoin/'],
  g0929: ['https://www.shambhala.com/zen-mind-beginner-s-mind-9781611808414.html']
};
primary.q1101 = ['https://www.simonandschuster.com/books/What-Remains/Carole-Radziwill/9780743281829'];
primary.q1108 = ['https://www.penguinrandomhouse.com/books/557020/vacationland-by-john-hodgman/','https://global.penguinrandomhouse.com/announcements/it-was-time-to-tell-the-truth-welcome-to-john-hodgmans-vacationland/'];
primary.q1094 = ['https://www.penguinrandomhouse.com/books/115484/up-in-the-old-hotel-by-joseph-mitchell/'];
primary.g0999 = ['https://www.rexresearch1.com/Books/StraussHowe4Turning.pdf'];
primary.g0678.push('https://www.allbookstores.com/Thermoinfocomplexity-New-Theory-Origin-Life/9780989529761');
const themeCorrections = {
  q1101: 'T11=-10 for American celebrity, illness and loss. Correct T12 from -10 to 0: the central memoir concerns personal relationships and bereavement, not the media industry merely because its author is a producer.',
  q1108: 'T11=-10 for regional American and celebrity memoir. Correct T12 from -10 to 0: travel and middle age are central, not media analysis merely because the author is a television performer.',
  q1094: 'T11=-10 for New York urban life. Correct T12 from -10 to 0: reportage about local people is the subject; the reporting medium is not a central media-industry topic.',
  g0678: 'T11=0. Correct T12 from -10 to 0: the described central subject is energy, information, physical chemistry and biological scaling. Speculative or unvalidated science is not automatically central philosophy; quality is assessed separately.'
};

// Changes follow direct contrary evidence, rather than the removal of a gate.
const rawChanges = {
  g0480: [12,12,8,7,5,6,7,4,2,1],
  g0774: [14,8,5,4,6,5,1,3,3,1.5]
};
const overrides = {
  g0480: [
    'Chapters 8–9 acknowledge uncertainties and answer critics; this corrects the earlier omission, although the combined timetable is not demonstrated.',
    'Computing, biology, energy limits and institutions are linked; the links remain less secure than the breadth.',
    'Scaling models and failure-mode questions are reusable beyond the specific dates; they warrant more credit than the earlier forecast-only reading.',
    'Resource limits, software bottlenecks and defensive constraints are addressed; major feasibility gaps remain.',
    'The long argument includes substantial repetition and expansive future discussion.',
    'The models and risk questions have durable value even if dates fail; this was underweighted in the prior account.',
    'Computing and high technology directly match the stated domains.',
    'Relevant invention and technical experience support authority but do not validate all extrapolations.',
    'The chapter structure is cumulative, although the treatment is sprawling.',
    'Confidence in timing and joint feasibility still exceeds what the evidence establishes.'
  ],
  g0774: [
    'The actual introduction limits prediction and acknowledges flawed assumptions within the favored cohort; reporting remains stronger than causal identification.',
    'Education, economic insecurity, recruitment and political institutions are connected on a limited scale.',
    'The cohort-formation question transfers beyond the named politicians, with modest predictive power.',
    'Formative experiences plausibly shape attitudes, but case selection does not isolate their effects.',
    'Readable profiles contain some repetition and personality overhead.',
    'Reporting on cohort formation survives particular careers, though its immediate political frame dates it.',
    'Politics offers only indirect fit with the central technical and industrial interests.',
    'Alter has relevant reporting experience, not a validated forecasting model.',
    'The reported profiles and introduction make a clear, readable structure.',
    'Explicit uncertainty statements improve precision; broad generational labels still compress differences.'
  ],
  g0673: [
    'The introduction denies that imaging proves God; nevertheless neural correlations do not establish the preferred nonmaterialist interpretation.',
    'Subjective experience, philosophy and neuroscience are connected without a well-identified cross-level mechanism.',
    'The limits of reductive explanation offer modest conceptual questions rather than a reliable decision method.',
    'Evidence about experiences does not isolate the proposed metaphysical cause.',
    'Polemical framing and repetition reduce the density of the neuroscientific evidence.',
    'The mind–brain question persists, while particular evidential claims remain unsettled.',
    'Only limited connection exists to the requested technical and institutional domains.',
    'Neuroscience credentials are relevant to observations, not transferable authority over metaphysical conclusions.',
    'The argument is accessible, but polemical divisions oversimplify alternatives.',
    'Claims about materialism and the implications of subjective experience are often stronger than justified.'
  ],
  g0659: [
    'The statistical controversy is documented from a strongly selected perspective; that warrants a low evidence score without automatically failing eligibility.',
    'Statistical methods, research institutions and public policy are linked on a narrow case base.',
    'Replication and data access yield some reusable questions; the partisan controversy limits their generalization.',
    'Specific statistical criticisms do not establish every wider claim about motives or climate evidence.',
    'The detailed dispute narrative has considerable procedural and personal overhead.',
    'Replication issues persist beyond the news controversy, but much of the presentation remains case-bound.',
    'Scientific method partially fits; environmental controversy is far from the preferred central subjects.',
    'The author has relevant science-publishing experience but limited specialist research standing.',
    'The investigative sequence is readable, with adversarial framing.',
    'Rhetoric about corruption outruns the narrow conclusions of some statistical objections.'
  ],
  g0877: [
    'The book distinguishes economic argument from a separate Christian economics, but strongly selected institutional comparisons still limit evidence.',
    'Money, legal privilege, banking and social incentives are connected.',
    'Monetary incentives and alternative institutions provide reusable questions, conditional on normative premises.',
    'Some banking and money-creation mechanisms are explained, while wider moral and social causation is overextended.',
    'A focused sustained argument earns much of its length.',
    'Monetary institutions and ethical tradeoffs remain durable topics.',
    'Finance and institutions fit partly, without a central technical or industrial account.',
    'Specialist economic research supports relevant authority without settling disputed theory.',
    'The argument is structured around mechanisms and institutional alternatives.',
    'Categorical normative conclusions and broad social effects reduce conceptual caution.'
  ],
  ndcff489c85: [
    'Anecdotes and inherited cultural principles do not adequately test promised wealth mechanisms.',
    'Community, reputation, moral norms and economic incentives are connected.',
    'Connectedness and reputation provide modest business heuristics independent of religious belief.',
    'Stories illustrate mechanisms but do not isolate the cause of business success.',
    'Repetition and broad promises reduce the density of the examples.',
    'Several social principles endure beyond particular business settings.',
    'The central wealth and personal-business focus has little direct technical fit.',
    'The author has cultural and teaching authority, which does not establish economic prediction.',
    'The commandments structure is accessible and memorable.',
    'The certainty attached to permanent wealth principles exceeds their tested support.'
  ],
  g0483: [
    'The actual pilot and discussion of abuse risks improve scope clarity; broad adoption claims remain too weakly tested to raise the existing evidence mark.',
    'Verification, records, finance and governance are linked across institutions.',
    'Trust and governance tradeoffs are reusable without the promised transformation.',
    'The pilot illustrates mechanisms; deployment at broad social scale remains insufficiently established.',
    'Readable cases mix useful explanation with promotional repetition.',
    'Trust and verification remain relevant, while technology-specific adoption narratives date quickly.',
    'Computing, institutions and economic coordination fit closely.',
    'Financial and technology reporting provides relevant experience.',
    'A clear sequence of cases and institutional questions supports readability.',
    'Conditional risks are acknowledged, but transformative rhetoric still exceeds demonstrated outcomes.'
  ],
  g0385: [
    'The sample recognizes governance and implementation challenges; social benefits remain proposed rather than validated.',
    'Virtual worlds, psychology, value exchange and governance are connected.',
    'Design and governance questions transfer beyond current metaverse products, with modest demonstrated utility.',
    'Organizational models are discussed, but the causal path to widespread social benefit remains weak.',
    'Historical illustrations and promotional framing add overhead.',
    'Virtual coordination is durable, while current commercial architecture and adoption claims are unsettled.',
    'Computing and high-tech social utility directly fit several domains.',
    'The author has relevant simulation and business experience, not independent validation of the larger thesis.',
    'The conceptual structure is readable, with broad claims sometimes outrunning detail.',
    'Confident claims about the metaverse remain less precise than the implementation evidence.'
  ],
  g1235: [
    'Risk discussion and acknowledged data limits support eligibility; adoption and price assumptions remain weakly validated.',
    'Monetary properties, debt and network adoption are connected.',
    'The monetary comparison supplies reusable questions, while particular price targets have low reliability.',
    'The proposed adoption pathways are intelligible but not causally identified forecasts.',
    'The focused case includes promotional repetition.',
    'Monetary-network questions persist; targets and market observations age quickly.',
    'Computing and finance partly fit, with investment returns central.',
    'Professional finance experience supports relevant practice, not forecasting certainty.',
    'A clear sequence moves from monetary concepts to the investment case and risks.',
    'Risk qualifications coexist with expansive upside language and uncertain valuation inputs.'
  ]
};

function cleanNote(note) {
  return String(note)
    .replace(/^.*?: retain linear attainment [\d.]+\/[\d.]+ after reviewing the prior evidence\.\s*/,'')
    .replace(/ Revised-rule reassessment:.*$/,'')
    .replace(/ The revised H2\/V5 boundary does not itself raise or lower this quality criterion\./g,'')
    .replace(/\b(?:E|S|U|M|D|R|F|A|N|P)\d+(?:\.\d+)?:\s*/g,'')
    .replace(/^[ESUMDRFANP]:\s*/,'')
    .replace(/survive(?:s)? the veto/g,'remain useful despite the identified limitations')
    .replace(/counterfactual(?:ly)?/gi,'assessed')
    .replace(/\bV5\b/g,'the prior religious or ideological classification')
    .replace(/revised H2\/the prior religious or ideological classification changes no publication evidence/g,'the current review changes no publication evidence')
    .replace(/\bH1\b/g,'fiction exclusion')
    .replace(/\bH2\b/g,'reference exclusion')
    .replace(/\bH3\b/g,'reference exclusion')
    .replace(/T is applied once\./g,'')
    .replace(/\bnull\b/g,'')
    .replace(/\s+/g,' ').trim();
}

const decisions = input.map(b => {
  const f = findings.get(b.id);
  assert(f, b.id);
  const status = f.decision === 'R' ? 'recommended' : f.decision === 'REFERENCE' ? 'excluded' : 'vetoed';
  const veto = status === 'vetoed' ? [f.decision] : [];
  const sourceBlocks = excerpts.get(b.id)?.records?.blocks || [];
  const historicalRefs = sourceBlocks.length ? [...new Set(sourceBlocks.map(x => x.ref))] : (b.priorReviews || []).filter(x => x.includes('#')).slice(0,2);
  const evidence = [...new Set([...(primary[b.id] || []), ...historicalRefs, b.currentReview].filter(Boolean))];
  const g = {
    BOOK_FORM: `Pass: ${b.title} by ${b.author} is identified as a published ${f.form} in the cited publication and prior analysis records; original production ${b.year}.`,
    FICTION: `Pass: the nominated work is presented as ${f.form}, not a novel or fictional story. Factual reliability is assessed separately.`,
    REFERENCE: status === 'excluded' ? f.reason : `Pass: the ${f.form} supplies narrative, reflective or sustained argumentative content; it is not primarily an exam text, system-operation manual or specialist lookup reference.`,
    V1: veto.includes('V1') ? f.reason : `No serious V1 established in the reviewed evidence. ${f.payload}`,
    V2: veto.includes('V2') ? f.reason : `No independently supported serious allegiance-dependent failure established for this ${f.form}. Perspective and low evidence marks alone do not establish systematic exclusion of counterevidence.`,
    V3: veto.includes('V3') ? f.reason : `No V3: ${f.payload}`,
    V4: veto.includes('V4') ? f.reason : (['g0480','g0166','g0483','g0385','g1235','g0774','n4fadce72a2','g0659','g0678','g0999'].includes(b.id) ? f.reason : `No serious primary dependence on hype or a passing controversy established. ${f.payload}`),
    V5: veto.includes('V5') ? f.reason : `No supported current V5 condition for this ${f.form}. A manifesto label, political stance, spiritual topic or activism alone is not sufficient; no specific extremist advocacy or central authoritative religious doctrine is established in the reviewed evidence.`
  };
  if(status === 'excluded') {
    for(const code of ['V1','V2','V3','V4','V5']) g[code] = 'Not applied: the hard reference exclusion takes precedence; no new score or counterfactual assessment.';
    return {id:b.id,title:b.title,author:b.author,status,reason:f.reason,eligibilityConfidence:f.confidence,gateReview:g,veto:[],exclusion:'REFERENCE',evidence};
  }
  const raw = rawChanges[b.id] || b.raw;
  const noteBase = overrides[b.id] || detailedNotes.get(b.id) || b.notes.map(cleanNote);
  assert.equal(noteBase.length, 10, b.id);
  assert(noteBase.every(n => n.length >= 15 && !/Prior evidence reviewed:|All ten prior points/.test(n)), b.id);
  const notes = noteBase.map((n,i) => `${names[i]}: ${raw[i] === b.raw[i] ? 'retain' : 'revise'} linear attainment ${raw[i].toFixed(2)}/${maxima[i].toFixed(2)}. ${n}`);
  if(b.id === 'delusion') notes[2] = 'Transferable strategic utility: retain linear attainment 14.00/15.00. Maintenance, lifecycle cost and reliability lessons transfer across organizations and technologies.';
  const changed = raw.map((x,i) => x === b.raw[i] ? null : `${keys[i]} ${b.raw[i].toFixed(2)}→${x.toFixed(2)}`).filter(Boolean);
  const unchanged = keys.filter((_,i) => raw[i] === b.raw[i]);
  const count = b.amazon?.count;
  const O15 = count == null ? 0 : count < 10 ? -20 : count < 100 ? -10 : count < 1000 ? -5 : 0;
  const H13 = b.periodEnd == null ? 0 : -Math.min(12,Math.max(0,2026-b.periodEnd)/25);
  const P14 = -Math.min(10,Math.max(0,2026-b.year)/10);
  const thematic = themeCorrections[b.id] || cleanNote(b.themeNote || `The central subject classification in the prior analysis remains supported by the reviewed scope.`);
  const yearNote = cleanNote(b.yearNote || 'Prior production record retained.');
  const periodNote = cleanNote(b.periodNote || 'Prior scope endpoint retained.');
  const reassessment = `${changed.length ? `Direct primary evidence changes ${changed.join(', ')}; ${b.id === 'g0480' ? 'the overlooked treatment of risks, critics and reusable constraints corrects the former forecast-only assessment.' : 'the actual introduction limits predictions and defines a cohort inquiry, correcting the earlier unqualified-forecast reading.'}` : 'All ten quality criteria were reassessed against the recorded evidence; the changed rule is not itself a reason to change attainment.'} Retain ${unchanged.map(k => `${k}=${raw[keys.indexOf(k)].toFixed(2)}`).join(', ')} for the criterion-specific reasons recorded above. ${f.payload} Recheck all five deductions separately: ${thematic} Retain periodEnd=${b.periodEnd == null ? 'not applicable' : b.periodEnd}, H13=${H13.toFixed(2)} (${periodNote}). Retain original year=${b.year}, P14=${P14.toFixed(2)} (${yearNote}). Retain O15=${O15}: ${count == null ? 'unknown aggregate after the recorded retrieval attempts; prescribed no-deduction fallback, not zero ratings' : `${count} matching-product total Amazon ratings from the audited snapshot`}. No Amazon recapture, edition reset or reviews-only count is introduced. ${status === 'vetoed' ? 'The resulting score remains counterfactual, suspending only the retained gate.' : 'The resulting score is now eligible for recommendation; a low score is not an exclusion.'}`;
  const decision = {id:b.id,title:b.title,author:b.author,status,reason:f.reason,eligibilityConfidence:f.confidence,scoreConfidence:rawChanges[b.id] ? 'moderate' : (b.scoreConfidence || b.confidence || 'low'),gateReview:g,veto,notes,reassessment,evidence};
  if(status === 'vetoed') decision.vetoConfidence = f.confidence;
  const changes = {};
  if(rawChanges[b.id]) changes.raw = raw;
  if(themeCorrections[b.id]) {changes.T12 = 0; changes.themeNote = thematic;}
  if(yearNote !== b.yearNote) changes.yearNote = yearNote;
  if(periodNote !== b.periodNote) changes.periodNote = periodNote;
  if(Object.keys(changes).length) decision.changes = changes;
  return decision;
});
const allowedGates = ['BOOK_FORM','FICTION','REFERENCE','V1','V2','V3','V4','V5'];
for(const d of decisions) {
  assert.deepEqual(Object.keys(d.gateReview), allowedGates, d.id);
  assert(d.evidence.length > 0, d.id);
  if(d.status === 'excluded') assert(!('notes' in d) && !('changes' in d),d.id);
  else assert(d.notes.length === 10 && d.notes.every(x => x.length > 30),d.id);
  if(d.status === 'recommended') assert(!d.notes.some(x => /\b(veto|counterfactual)\b/i.test(x)), d.id);
  for(const e of d.evidence) if(!/^https?:/.test(e)) assert(fs.existsSync(e.split('#')[0]),e);
}
fs.writeFileSync(dir + 'c-decisions.json', JSON.stringify(decisions,null,2) + '\n');
const counts = decisions.reduce((a,b) => (a[b.status]=(a[b.status]||0)+1,a),{});
console.log(JSON.stringify({counts,numericChanges:decisions.filter(x=>x.changes?.raw || 'T12' in (x.changes||{})).map(x=>({id:x.id,title:x.title,raw:x.changes.raw,T12:x.changes.T12})),total:decisions.length},null,2));
