import fs from 'node:fs';
const dir = 'data/enrichment_261020/domains_a/';
const base = JSON.parse(fs.readFileSync(dir + 'assessments.json', 'utf8'));
const catalog = JSON.parse(fs.readFileSync(dir + 'new-catalog-evidence.json', 'utf8'));
const out = {};
const entry = id => out[id] ||= { domains: {}, mechanisms: [], joins: [], inspected: [], refs: [] };
const prior = id => base[id].researchAudit.refs[0];
const cat = id => catalog[id].url;
function inspect(id, material, refs, primary = false) {
  const b = entry(id); b.inspected.push(material); b.refs.push(...refs); b.primaryReviewed ||= primary;
}
function grade(id, domain, value, rationale, refs, confidence = 'moderate') {
  entry(id).domains[domain] = { value, rationale, refs, confidence };
}
function mechanism(id, mid, roles, statement, scope, refs, strength = 2, confidence = 'low') {
  entry(id).mechanisms.push({ id: mid, domains: Object.keys(roles), roles, statement, scope, refs, strength, confidence });
}
const efficiency = 'https://assets.stripeassets.com/fzn2n1nzq965/5jlLbEZjWfQl635f1GdGLJ/9faaf48b9d2266bc61b11ed84d90b5ad/ORIGINS-OF-EFFICIENCY-ZINE.pdf';
inspect('efficiency', 'Publisher Chapter 1 sample, main text across the 20-page PDF; no whole-book claim.', [efficiency], true);
grade('efficiency', 'MAT', 2, 'Glass composition constrains usable output.', [efficiency]);
grade('efficiency', 'ENE', 1, 'Continuous furnace fuel use affects unit cost.', [efficiency]);
grade('efficiency', 'FIN', 1, 'Work in process ties up paid capital.', [efficiency]);
grade('efficiency', 'QNT', 2, 'Explicit production-rate, buffer and yield model.', [efficiency]);
mechanism('efficiency', 'glass-yield', { MAT: 'Mixture input', ENG: 'Furnace and mold settings', QLT: 'Variation and rejection', PRD: 'Usable bulb output' },
  'Mixing and temperature variation change glass consistency and molding yield.', 'Chapter 1, glass bulb production.', [efficiency], 3, 'moderate');
mechanism('efficiency', 'buffers-capital', { PRD: 'Workstation rates', LOG: 'Intermediate inventory', FIN: 'Capital tied in unsold output' },
  'Synchronizing production steps reduces waiting inventory and its capital commitment.', 'Chapter 1, bulb factories and process buffers.', [efficiency], 3, 'moderate');
mechanism('efficiency', 'furnace-scale', { ENE: 'Continuous fuel input', PRD: 'Operating rate', SCL: 'Output volume', ECO: 'Cost per bulb' },
  'More output spreads furnace fuel and other fixed costs; technology and demand constrain feasible scale.', 'Chapter 1, bulb factory utilization.', [efficiency], 3, 'moderate');
entry('efficiency').joins.push({
  from: 'glass-yield', to: 'buffers-capital', handoff: 'Bulb blanks passed to subsequent assembly',
  statement: 'Produced blanks become inputs to later workstations; their waiting stock is work in process.',
  scope: 'Chapter 1, blank production followed by bulb assembly.', strength: 3, confidence: 'moderate', refs: [efficiency]
});
entry('efficiency').joins.push({
  from: 'glass-yield', to: 'furnace-scale', handoff: 'Usable bulb output rate',
  statement: 'Transformation rate and yield determine the output over which continuously incurred inputs are allocated.',
  scope: 'Chapter 1 process model and bulb-factory unit costs.', strength: 2, confidence: 'moderate', refs: [efficiency]
});
const arthur = 'https://www.simonandschuster.com/books/The-Nature-of-Technology/W-Brian-Arthur/9781416544067';
inspect('arthur', 'Publisher opening excerpt: existing components, natural phenomena and the jet-engine illustration; catalog contents.', [arthur, cat('arthur')], true);
mechanism('arthur', 'phenomena-components', { SCI: 'Physical effects made usable', ENG: 'Existing subsystem combinations', INN: 'New functional technology' },
  'Novel technologies combine prior components that exploit physical effects; component availability constrains possible combinations.',
  'Opening argument and jet-engine illustration; universality is not established.', [arthur, prior('arthur')], 3, 'moderate');
const buildings = 'https://www.penguinrandomhouse.com/books/320919/how-buildings-learn-by-stewart-brand/';
inspect('buildings', 'Publisher description plus prior assessment of layers, maintenance and ownership.', [buildings], true);
mechanism('buildings', 'different-change-rates', { ENG: 'Physical layers and interfaces', QLT: 'Maintenance and interface failure', INS: 'Occupant and ownership decisions' },
  'Building layers change at different rates; user and ownership choices can preserve adaptability or produce maintenance conflicts.',
  'Adaptation of occupied buildings; prior analysis supplies the layer mechanism.', [prior('buildings'), buildings], 2, 'moderate');
const city = 'https://www.penguinrandomhouse.com/books/639449/a-city-on-mars-by-kelly-and-zach-weinersmith/';
inspect('city', 'Publisher description and full catalog table of contents covering habitats, supplies, law and settlement governance.', [city, cat('city')], true);
grade('city', 'POL', 3, 'Several sections examine treaties, jurisdiction and the creation of space states; explanatory depth beyond this contents evidence remains provisional.', [cat('city'), prior('city')]);
grade('city', 'ECO', 2, 'Settlement labor, company towns and economic viability receive distinct chapters and recur in the prior systems assessment.', [cat('city'), prior('city')]);
grade('city', 'MIL', 1, 'A dedicated chapter considers space war, but this review does not establish sustained military depth.', [cat('city')], 'low');
mechanism('city', 'habitat-supply', { ENG: 'Life-support and habitat constraints', LOG: 'Inputs, outputs and resupply', SCL: 'Population viability' },
  'A settlement must sustain material flows and life support as population grows; these constraints limit plausible settlement plans.',
  'Technical settlement assessment; political-risk claims are not merged into this mechanism.', [prior('city'), cat('city')], 2, 'moderate');
const energy = 'https://mitpress.mit.edu/9780262035774/energy-and-civilization/';
inspect('energy', 'MIT Press description of conversion, agriculture, industry and transport, compared with prior assessment.', [energy], true);
mechanism('energy', 'conversion-production', { ENE: 'Available useful energy', ENG: 'Conversion equipment', PRD: 'Productive capacity', ECO: 'Material output and development' },
  'Conversion technology changes the useful energy available for production and thereby constrains material output.',
  'Cross-period energy-production explanation; energy is not treated as a sufficient cause of every historical event.', [prior('energy'), energy], 2, 'moderate');
const eghbal = 'https://press.stripe.com/working-in-public';
inspect('eghbal', 'Publisher book description, read independently of other books displayed on the same page.', [eghbal], true);
grade('eghbal', 'ECO', 2, 'Maintenance costs and scarce developer attention explain software production incentives.', [prior('eghbal'), eghbal]);
mechanism('eghbal', 'maintenance-capacity', { CMP: 'Reusable software and its maintenance', SCL: 'User growth', INS: 'Contributor capacity and incentives', ECO: 'Scarce attention and upkeep cost' },
  'Usage can expand faster than maintainer capacity, changing the cost and incentive structure of open-source production.',
  'Open-source projects; extension to all online creators remains less secure.', [prior('eghbal'), eghbal], 3, 'moderate');
mechanism('algorithms', 'bounded-computation', { CMP: 'Algorithmic resource requirements', QNT: 'Formal problem assumptions', HEU: 'Decision rule under limited resources' },
  'Formal algorithmic tradeoffs yield decision rules under time and information limits, conditional on the real task matching the model.',
  'Computational problem families in the prior review, not a claim that every life decision has a proven optimum.', [prior('algorithms')], 2, 'moderate');
mechanism('alignment', 'proxy-decisions', { CMP: 'Training representation and objective', QNT: 'Proxy for the intended target', INS: 'Decisions delegated to the system' },
  'A learned proxy can diverge from the intended objective when institutions use model outputs to make decisions.',
  'Machine-learning alignment and institutional applications documented in the prior assessment.', [prior('alignment'), cat('alignment')], 2, 'moderate');
mechanism('evolution', 'failure-redesign', { ENG: 'Artifact constraints', MAT: 'Material form', PRD: 'Manufacturing feasibility', INN: 'Successive redesign' },
  'Dissatisfaction with an artifact prompts redesign within material and manufacturing constraints.',
  'Comparative everyday-object histories; not a universal law that failure is necessary for invention.', [prior('evolution'), cat('evolution')], 2, 'moderate');
mechanism('fictions', 'incentives-inference', { INS: 'Publication and career incentives', QNT: 'Analytical flexibility and statistical selection' },
  'Rewards for publishable results can select analyses and suppress failed studies, distorting the evidence available to later inference.',
  'Research publication practices; extreme cases cannot establish prevalence in every field.', [prior('fictions'), cat('fictions')], 2, 'moderate');

// These additions are individual judgments from the specifically inspected descriptions or contents.
const additions = [
  ['g0032', 'CMP', 2, 'Shannon information work and computing recur across the description and several contents sections; this supports substantial coverage, not a textbook-level treatment.'],
  ['g0032', 'MIL', 1, 'Fire control and wartime research are specific episodes; their depth is uncertain.'],
  ['g0192', 'QLT', 1, 'The jacket identifies Six Sigma as a concrete management initiative; it does not establish detailed reliability analysis.'],
  ['g0192', 'TRD', 1, 'Globalization is named as a concrete corporate initiative, with limited evidence of depth.'],
  ['g0273', 'LOG', 1, 'The railroad acquisition is a distinct contents chapter within the manufacturing memoir.'],
  ['g0323', 'CMP', 1, 'Digital distribution platforms change how artists reach audiences; technical computing detail is not established.'],
  ['g0374', 'ECO', 2, 'Employment displacement and the economic response recur in the description and contents.'],
  ['g0404', 'QLT', 2, 'Grid failures and operating instability recur across the account of changing generation and infrastructure.'],
  ['g0404', 'ENG', 2, 'Electricity-system components, variable generation and system adaptation are substantial explanatory objects.'],
  ['g0418', 'HTC', 2, 'Autonomous missiles, drones and robotic swarms receive repeated treatment.'],
  ['g0418', 'STR', 2, 'Arms races, operational speed and stability receive a developed contents section.'],
  ['g0418', 'POL', 2, 'Arms-control and legal-policy decisions have multiple named sections, supporting more than minor treatment.'],
  ['g0482', 'POL', 1, 'Government-backed demand is an identified enabling condition; wider policy depth is not established.'],
  ['g0588', 'ENG', 2, 'Engine, reactor, sequestration and wind-system constraints recur through the detailed contents.'],
  ['g0588', 'MAT', 1, 'Resource availability and competing fuel feedstocks receive identifiable treatment.'],
  ['g0588', 'POL', 1, 'A closing policy section translates the technical comparison into policy implications.'],
  ['g0823', 'QNT', 2, 'Measuring intangible investment and national-account effects is an explicit recurring task.'],
  ['g0823', 'POL', 1, 'A specific section examines policy questions, but its depth was not directly sampled.'],
  ['g0823', 'INN', 1, 'Research and design assets provide concrete innovation cases within the investment argument.'],
  ['g0876', 'FIN', 2, 'Financial flows, credit risk and investment implications are explicit sections; eligibility as a guide needs separate review.'],
  ['g0876', 'POL', 2, 'Regulation, intervention and fiscal policy receive developed contents sections.'],
  ['g0876', 'TRD', 2, 'Global energy markets and globalization structure several parts of the account.'],
  ['g0876', 'STR', 1, 'Energy security and geopolitics have a dedicated section, without enough sampled text for a deeper grade.'],
  ['g1089', 'FIN', 1, 'Investment flows and financing regional infrastructure are identifiable topics; sweeping predictions do not establish mechanism strength.'],
  ['q0010', 'POL', 2, 'Comparative city chapters explicitly examine political coordination of electricity systems.'],
  ['q0010', 'INN', 2, 'Invention, technology transfer and reverse salients recur across the historical structure.'],
  ['q0024', 'ENG', 1, 'Audio engineering and MP3 development form one specific narrative strand.'],
  ['q0024', 'PRD', 1, 'A compact-disc manufacturing plant provides a concrete production episode.'],
  ['q0102', 'ENG', 2, 'Design and construction of network switching equipment are substantial parts of the described history.'],
  ['q0102', 'POL', 1, 'ARPA contracts and public research funding are specific enabling conditions.']
];
for (const [id, d, v, why] of additions) grade(id, d, v, why, [cat(id), prior(id)], v === 1 ? 'low' : 'moderate');
const fullCatalog = ['alignment','arthur','city','evolution','fictions','g0032','g0192','g0234','g0273','g0288','g0290','g0319','g0323','g0374','g0404','g0418','g0435','g0482','g0588','g0823','g0876','g1089','g1198','q0005','q0010','q0024','q0102','internet','mitchell'];
for (const id of fullCatalog) inspect(id, 'Matching Open Library edition description and/or available contents read for domain scope; publisher-origin text remains a catalog observation.', [cat(id)]);

mechanism('g0234', 'ownership-control', { FIN: 'Shareholder capital and returns', INS: 'Directors and manager control' },
  'Conflicting owner and manager interests produce shareholder interventions into corporate decisions.',
  'The corporate disputes selected in the catalog description and prior assessment.', [cat('g0234'), prior('g0234')]);
mechanism('g0288', 'relational-pricing', { INS: 'Agent networks and evaluation communities', ECO: 'Talent prices and project transactions' },
  'Agents use relationships and shared evaluations to establish value and arrange transactions for differentiated talent.',
  'Hollywood talent markets described in the contents; generalization outside this market remains untested.', [cat('g0288'), prior('g0288')]);
mechanism('g0290', 'short-term-incentives', { INS: 'Manager compensation and reporting', FIN: 'Investment horizon and capital value' },
  'Short-horizon performance rewards can redirect managers away from longer-term investment value.',
  'Corporate and investment management incentives; this records the argument without accepting a complete explanation of the financial crisis.', [cat('g0290'), prior('g0290')]);
mechanism('g0323', 'platform-livelihood', { CMP: 'Digital publication and distribution', ECO: 'Artist income and funding', INS: 'Production and promotion responsibilities' },
  'Digital access and funding changes shift more commercial tasks onto individual artists, changing the conditions for earning a living.',
  'Artist interviews and the catalog-described argument; no universal claim about all creative work.', [cat('g0323'), prior('g0323')]);
mechanism('g0404', 'grid-inertia', { ENE: 'Variable electricity supply', ENG: 'Inherited system configuration', QLT: 'Operating failures', INS: 'Centralized utility organization' },
  'Changing generation characteristics challenge a grid built around older operating and organizational assumptions.',
  'US electricity-grid history; promotional claims of imminent collapse are not adopted as facts.', [cat('g0404'), prior('g0404')]);
mechanism('g0418', 'autonomous-control', { CMP: 'Autonomous decision software', QLT: 'Failure and control limits', MIL: 'Weapon employment', INS: 'Command authorization' },
  'Delegating weapon decisions to software changes failure modes and the human command structure needed to retain control.',
  'Autonomous-weapons safety and command sections; no claim of a fully quantified risk model.', [cat('g0418'), prior('g0418')], 2, 'moderate');
mechanism('g0418', 'speed-stability', { CMP: 'Machine-speed interaction', MIL: 'Competing weapon systems', STR: 'Escalation and strategic stability' },
  'Competing autonomous systems can create pressures for faster action that affect escalation control.',
  'The speed-race and stability sections; strength is limited by contents-level evidence.', [cat('g0418'), prior('g0418')], 1);
mechanism('g0435', 'uncertain-preferences', { CMP: 'Objective design for AI', QNT: 'Uncertainty about preferences', HEU: 'Deference to human decisions' },
  'The proposed design makes uncertainty about human preferences a reason for a system to seek guidance instead of rigidly pursuing a fixed objective.',
  'Russell proposed design framework; the catalog does not verify every claimed proof or deployment guarantee.', [cat('g0435'), prior('g0435')]);
mechanism('g0444', 'adoption-resistance', { ENG: 'Changed operating technology', INS: 'Organizational routines and resistance', INN: 'Adoption or delayed adoption' },
  'Existing routines and institutional commitments can obstruct adoption even when a technical change offers operational gains.',
  'Historical adoption essays; strength is limited by short case summaries.', [prior('g0444'), cat('g0444')]);
mechanism('g0482', 'supercomputer-development', { CMP: 'Computational architecture', ENG: 'Physical implementation constraints', INS: 'Small teams and corporate autonomy', HTC: 'Realized supercomputer capability' },
  'Architecture and implementation choices develop within organizational arrangements that can enable or obstruct a high-performance machine.',
  'Cray industry history; the short review does not justify a universal superiority claim for small teams.', [prior('g0482'), cat('g0482')]);
mechanism('g0588', 'transition-rate', { ENE: 'Replacement energy supply', LOG: 'Required new infrastructure', SCL: 'Deployment volume and pace', ECO: 'Cost constraints' },
  'Large installed systems and the expense of replacement infrastructure constrain how quickly energy supply can change.',
  'Energy-transition comparisons; historical technology forecasts are not treated as current facts.', [prior('g0588'), cat('g0588')], 2, 'moderate');
mechanism('g0823', 'intangible-capital', { FIN: 'Intangible investment', SCL: 'Reuse and spillovers', INS: 'Firm organization and complements', ECO: 'Productivity and returns' },
  'Scalability, sunk costs and spillovers make intangible investments behave differently from physical assets, changing financing and firm incentives.',
  'Intangible-capital explanation; measurement uncertainty and outcome attribution remain limits.', [prior('g0823'), cat('g0823')], 2, 'moderate');
mechanism('g0872', 'relative-productivity', { PRD: 'Unequal output growth per worker', ECO: 'Relative wages and service prices' },
  'Unequal productivity growth changes the relative cost of labor-intensive services as wages respond to the wider economy.',
  'Baumol cost-disease mechanism; not an exhaustive cause of every health or education price increase.', [prior('g0872'), cat('g0872')]);
mechanism('g1141', 'noise-and-selection', { QNT: 'Skill, luck and regression', HEU: 'Judging observed performance' },
  'Separating noise from skill changes how observed success should guide future choices.',
  'Cross-activity performance inference, with simpler models than many real decisions require.', [prior('g1141'), cat('g1141')]);
mechanism('g1198', 'horizon-mismatch', { FIN: 'Long-lived investment commitments', INS: 'Fund-manager incentives and planning' },
  'Internal incentives and investor constraints can prevent long-horizon capital from being managed on a genuinely long horizon.',
  'The book-described institutional-investment cases; the description does not establish effect sizes.', [cat('g1198'), prior('g1198')]);
mechanism('q0005', 'lean-system', { PRD: 'Factory flow', QLT: 'Production quality', LOG: 'Supplier coordination', INS: 'Work organization' },
  'Production flow and quality depend jointly on supplier coordination and the organization of factory work.',
  'Comparative lean-production account; success narratives do not prove universal transfer.', [prior('q0005'), cat('q0005')], 2, 'moderate');
mechanism('q0010', 'electric-system-growth', { ENE: 'Electricity supply and load', ENG: 'Bottleneck and network design', FIN: 'System investment', INS: 'Institutional control', SCL: 'Interconnected-system growth' },
  'Load balancing and technical bottlenecks shape investment needs, while institutional control conditions how interconnected electricity systems expand.',
  'Comparative electrification histories; the framework is interpretive, not a predictive law.', [prior('q0010'), cat('q0010')], 2, 'moderate');
mechanism('q0054', 'failure-assumptions', { ENG: 'Design extrapolation', QLT: 'Safety margin and failure', HEU: 'Revision of design judgment' },
  'Failures expose where design assumptions or safety margins fail to transfer, prompting changes in subsequent judgment.',
  'Selected engineering histories; selection of accidents does not establish statistical base rates.', [prior('q0054'), cat('q0054')]);
mechanism('q0099', 'organizational-failure', { ENG: 'Component interactions', QLT: 'Weak warning signs and failure', INS: 'Schedule pressure and response' },
  'Organizational pressure and response to weak signals can amplify failures produced by interacting components.',
  'Reconstructed accident cases; uncertainty about counterfactual control remains.', [prior('q0099'), cat('q0099')]);
mechanism('q0102', 'funded-network', { CMP: 'Protocols and resource sharing', ENG: 'Switching equipment', INS: 'Research collaboration and contracts', POL: 'Public research support' },
  'Publicly funded collaboration joins switching hardware and communication protocols to make remote computer-resource sharing possible.',
  'Early ARPANET history; not a claim that military operations governed every technical design.', [prior('q0102'), cat('q0102')], 2, 'moderate');
mechanism('q0142', 'attack-defense', { CMP: 'Cipher and key-distribution design', QNT: 'Mathematical attack constraints', STR: 'Adversarial adaptation' },
  'Attacks reveal weaknesses that motivate new defensive designs and key-distribution methods.',
  'Historical cryptography; no assurance about current cryptographic security.', [prior('q0142'), cat('q0142')]);

for (const b of Object.values(out)) b.refs = [...new Set(b.refs)];
fs.writeFileSync(dir + 'supplements.json', JSON.stringify(out, null, 2) + '\n');
const notes = {
  g0194: 'Rejected corrupted description containing unrelated gambling-site promotion. Contents headings were screened but do not add a new domain grade.',
  g0121: 'Description is only physical extent metadata, not evidence of subject coverage.',
  g0259: 'Description is only physical extent metadata, not evidence of subject coverage.',
  g0982: 'Description is only physical extent metadata, not evidence of subject coverage.',
  g0994: 'Description is only physical extent metadata, not evidence of subject coverage.',
  q0145: 'Description is only physical extent metadata, not evidence of subject coverage.',
  g0654: 'Description identifies collected first-year physics lectures. Flag for separate hard-exclusion review; no eligibility change is made by this enrichment.',
  g0876: 'Description calls the work an investment guide. Flag for separate hard-exclusion review; domain coding does not resolve eligibility.',
  g1064: 'Contents exhibit repeated or damaged numbering; description is usable only as a limited scope signal.'
};
fs.writeFileSync(dir + 'catalog-review.json', JSON.stringify(Object.fromEntries(Object.entries(catalog).map(([id,b]) => [id, {
  reviewed: '2026-10-20', refs: [b.url], rawFile: b.rawFile,
  scope: fullCatalog.includes(id) ? 'Matching edition description and available contents, with targeted full reading.' : 'Bounded screen of first 500 description characters and first eight contents entries where available.',
  finding: notes[id] || (Object.keys(out[id]?.domains || {}).length ? 'Additional domain judgments saved separately with specific rationale.' : 'No additional domain-depth judgment from this catalog screen; retain prior evidence and unknowns.'),
  primarySource: false
}])) , null, 2) + '\n');
console.log(JSON.stringify({ booksSupplemented: Object.keys(out).length, mechanisms: Object.values(out).reduce((n,b)=>n+b.mechanisms.length,0), primaryReviewed: Object.values(out).filter(b=>b.primaryReviewed).length, catalogScreened: Object.keys(catalog).length }));
