// Explicit assessments from the sources below. This is a data transcription,
// not a keyword classifier or conversion of the repository's quality scores.
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const reviews = {};
function review(id, refs, grades, mechanisms, joins = []) {
  reviews[id] = {
    domains: Object.fromEntries(grades.map(([domain,value,rationale]) => [domain,{
      value, confidence: 'moderate', rationale, refs
    }])),
    connections: {
      status: 'partial',
      mechanisms: mechanisms.map(m => ({...m, domains: Object.keys(m.roles), strength: 3, confidence: 'moderate', refs})),
      joins: joins.map(j => ({...j, strength: 3, confidence: 'moderate', refs})),
      limitations: 'Primary sample or publisher/author description and the cited prior assessment were inspected. These records establish specific explanations, not an exhaustive inventory of the book. No absent domains are inferred from an excerpt.'
    },
    primaryReview: {
      retrieved: '2026-10-20', refs,
      method: 'Manual semantic assessment; numerical depth and strength are interpretations of the cited evidence, not publisher ratings.',
      confidence: 'moderate'
    }
  };
}

review('material', [
  'https://cdn.penguin.co.uk/dam-assets/books/9780753559154/9780753559154-sample.pdf',
  'analysis/analysis_physcanon_261018_0147.md#p077'
], [
  ['MAT',4,'Six material chains structure the account.'],
  ['ENE',3,'Energy costs constrain material transformation.'],
  ['PRD',4,'Extraction and industrial processing form sustained explanations.'],
  ['LOG',3,'Supplier dependence and downstream shortages recur.'],
  ['ECO',3,'Prices transmit constraints across industries.'],
  ['TRD',3,'International specialization supports the material chains.'],
  ['SCL',3,'Industrial capacity and concentrated suppliers constrain expansion.']
], [{
  id:'gas-ammonia-co2',
  statement:'Gas price rises curtailed ammonia production; the lost CO2 by-product then constrained food preservation and handling.',
  scope:'Introduction, printed pp. 9–10: British fertilizer plants and food-sector dependence.',
  roles:{ENE:'Gas input',ECO:'Price incentive to stop',PRD:'Ammonia plant operation',MAT:'CO2 by-product',LOG:'Food preservation and handling'}
}]);

review('q0004', [
  'https://assets.press.princeton.edu/chapters/s9383.pdf',
  'analysis/analysis_glaspbiz_261019_0144.md#g0204'
], [
  ['LOG',4,'Intermodal freight is the central system.'],
  ['INS',3,'Standards and labor coordination enable adoption.'],
  ['FIN',2,'Complementary capital investment changes industry viability.'],
  ['PRD',3,'Lower freight costs change production locations.'],
  ['TRD',4,'Global supply chains are a sustained explanatory outcome.'],
  ['ECO',3,'Transport costs alter economic geography.'],
  ['SCL',3,'Network scale changes the reach of producers.'],
  ['ENG',2,'Container handling requires compatible physical systems.']
], [{
  id:'intermodal-system',
  statement:'Compatible equipment, standards and investment make the container part of a cheaper transport system.',
  scope:'Chapter 1 and prior standards/investment assessment.',
  roles:{ENG:'Compatible handling equipment',INS:'Standards and labor coordination',FIN:'Complementary investment',LOG:'Transport cost and time'}
},{
  id:'production-geography',
  statement:'Lower freight costs permit dispersed specialist plants to exchange components and serve distant markets.',
  scope:'Chapter 1, pp. 2–3.',
  roles:{LOG:'Cheaper transport',PRD:'Dispersed specialist plants',TRD:'International supply chains',ECO:'Location incentives',SCL:'Market reach'}
}], [{
  from:'intermodal-system',to:'production-geography',handoff:'Lower transport cost',
  statement:'The cheaper freight service changes viable production locations and supply-chain reach.',
  scope:'Chapter 1 follows container-system costs into industrial geography.'
}]);

review('q0011', [
  'https://www.christophermiller.net/books',
  'analysis/analysis_physcanon_261018_0147.md#p072'
], [
  ['HTC',4,'Semiconductors organize the entire account.'],
  ['CMP',3,'Computing capability explains chip demand and applications.'],
  ['PRD',4,'Design and manufacturing capabilities drive competition.'],
  ['TRD',3,'International specialization creates dependencies.'],
  ['POL',3,'State competition shapes semiconductor access.'],
  ['MIL',3,'Military applications explain strategic value.'],
  ['STR',3,'Control of supply and capability changes strategic options.']
], [{
  id:'chips-to-power',
  statement:'Control of chip design and manufacture determines access to computing capabilities used in military systems, making supply dependence strategically important.',
  scope:'Author synopsis and prior semiconductor-supply assessment.',
  roles:{HTC:'Semiconductor capability',CMP:'Computing performance',PRD:'Manufacturing control',TRD:'Cross-border dependence',MIL:'Military applications',POL:'State competition',STR:'Supply-control choices'}
}]);

review('q0030', [
  'https://www.simonandschuster.com/books/The-Making-of-the-Atomic-Bomb/Richard-Rhodes/9781451677614',
  'analysis/analysis_glasphist_261019_0144.md#g1097'
], [
  ['SCI',3,'Discovery is connected to applied nuclear physics; some exposition is familiar to this reader.'],
  ['HTC',4,'Nuclear weapon development forms the sustained central account.'],
  ['PRD',3,'Industrial scale connects discovery to weapons.'],
  ['INS',3,'Scientific organization enables coordinated development.'],
  ['MIL',3,'Wartime urgency shapes the development programme.'],
  ['ENG',3,'The account follows scientific ideas into working devices.']
], [{
  id:'discovery-to-production',
  statement:'Wartime nuclear capability required discovery, device engineering, industrial production and coordinated scientific work within one programme.',
  scope:'Manhattan Project synthesis in the publisher overview and prior assessment.',
  roles:{SCI:'Nuclear discoveries',HTC:'Weapon capability',ENG:'Working device',PRD:'Industrial scale',INS:'Scientific coordination',MIL:'Wartime objective'}
}]);
reviews.q0030.primaryReview.limitations = 'The publisher blurb misdates nuclear fission to the nineteenth century. That statement is rejected; it is not used to set dates or domain grades.';

review('q0069', [
  'https://www.hachettebookgroup.com/titles/ben-r-rich/skunk-works/9780316246934/',
  'analysis/analysis_glasptech_261019_0144.md#g0462'
], [
  ['HTC',4,'Advanced aircraft programmes are the central account.'],
  ['ENG',4,'Design and testing explain technical delivery.'],
  ['INS',3,'Team autonomy and procurement shape execution.'],
  ['MIL',3,'Mission requirements set design objectives.'],
  ['INN',3,'Development work explains how new capabilities emerge.'],
  ['QLT',2,'Testing and dependable performance are substantial threads.']
], [{
  id:'mission-to-aircraft',
  statement:'Mission requirements, design choices, testing and team autonomy jointly shape delivery of advanced aircraft.',
  scope:'Aircraft development programmes; insider account with the limits recorded in the prior assessment.',
  roles:{MIL:'Mission objectives',HTC:'Advanced aircraft capability',ENG:'Design choices',QLT:'Testing',INS:'Autonomy and procurement',INN:'Capability development'}
}]);

review('smil', [
  'https://penguinrandomhousehighereducation.com/2025/02/13/how-the-world-really-works/',
  'https://www.penguinrandomhouse.com/books/666342/how-the-world-really-works-by-vaclav-smil/',
  'analysis/analysis_widerd_261018_2208.md'
], [
  ['ENE',4,'Energy conversion is a central sustained explanation.'],
  ['QNT',3,'Units, rates and per-capita comparisons test claims.'],
  ['ENG',3,'Conversion technology mediates useful output.'],
  ['MAT',4,'Essential industrial materials structure the account.'],
  ['PRD',4,'Food and material production link inputs to output.'],
  ['LOG',3,'Physical supply dependence constrains production.'],
  ['SCL',3,'Throughput and scale limit substitution.'],
  ['ECO',3,'Useful energy and material output support prosperity.']
], [{
  id:'useful-energy',
  statement:'Fuel availability and conversion efficiency jointly determine useful energy; this limits the scale of physical work and production.',
  scope:'Chapter 1 excerpt and repository assessment of industrial inputs.',
  roles:{ENE:'Primary energy',ENG:'Conversion efficiency',QNT:'Comparable useful-energy quantities',PRD:'Physical production',SCL:'Available throughput',ECO:'Material output'}
},{
  id:'material-inputs',
  statement:'Large-scale material production depends on energy inputs and connected supply systems, which constrain substitution.',
  scope:'Publisher overview and repository assessment; alternative pathways are incompletely treated.',
  roles:{ENE:'Process energy',MAT:'Industrial materials',PRD:'Production routes',LOG:'Supply systems',SCL:'Required scale'}
}], [{
  from:'useful-energy',to:'material-inputs',handoff:'Available useful process energy',
  statement:'Energy after conversion supplies the industrial processes assessed in the material account.',
  scope:'Shared physical-input argument; no universal prediction about future technologies is assumed.'
}]);

fs.writeFileSync(fileURLToPath(new URL('assessments.json',import.meta.url)),JSON.stringify(reviews,null,2)+'\n');
console.log(`Recorded ${Object.keys(reviews).length} primary-source supplements.`);
