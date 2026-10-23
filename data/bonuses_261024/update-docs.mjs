import fs from 'node:fs';
const edit=(file,changes)=>{let s=fs.readFileSync(file,'utf8');for(const[a,b]of changes){if(!s.includes(a))throw Error('Missing text in '+file+': '+a);s=s.replace(a,b);}fs.writeFileSync(file,s);};
edit('site/methodology.html',[
 ['Total = sum of ten contributions + T11 + T12 + H13 + P14 + O15','Total = sum of ten contributions + T11 + T12 + H13 + P14 + O15 + REL + RD'],
 ['<h4>Apply five separate deductions</h4>','<h4>Add Relevance and R&amp;D</h4><p><strong>Relevance (REL)</strong> = <code>2 × √(s − 1)</code>, with s distinct recorded sources. Repeated mentions within one source count once. <strong>R&amp;D (RD)</strong> = <code>20 × reference pages / total pages</code>, or one point per 5%, including fractional points. For example, 30 reference pages in 400 total pages give 1.50 points. Use available counts; differing or unconfirmed editions give an estimate with low confidence. Missing inputs contribute zero and remain unknown. Both bonuses are enabled by default, have no explicit cap, and are added once after deductions. Final scores can exceed 100; they are not percentages.</p><h4>Apply five separate deductions</h4>'],
 ['Do not combine their page counts unless the editions match.','R&amp;D uses the available counts even when edition matching is unconfirmed; such ratios are labelled estimates.'],
 ['These values supplement the 15-rule evaluation','These values supplement the 17-rule evaluation'],
 ['Default book columns show year, pages, Amazon ratings and sources alongside score, title and author, selection, and Details.','Default book columns show year, Amazon ratings, pages, reference pages and sources alongside score, title and author, and Details. Relevance and R&amp;D raw points and contributions are available in Columns, filters and Pareto axes. Their scoring controls use an uncapped multiplier, with 1 preserving each formula.'],
 ['Custom totals are not forced into 0–100.','Neither repository nor custom totals are forced into 0–100. For the two bonuses, the normalized display uses 20 raw points = 100 and can exceed 100; it does not cap the contribution.']
]);
edit('README.md',[
 ["The initial ranking uses the repository's existing 15-rule evaluation.","The initial ranking uses the repository's 17-rule evaluation, including Relevance and R&D. Scores can exceed 100."],
 ['Do not combine RP and total pages unless their editions match.','R&D uses the available RP and total-page counts. Ratios from differing or unconfirmed editions are labelled estimates with low confidence.'],
 ['More reference pages do not establish better evidence.','More reference pages do not establish better evidence. Raw RP remains an optional separate term; the R&D ratio bonus is enabled by default.'],
 ['The active catalog is `data/top250_261023/compiled.json`.','That metadata snapshot is retained at `data/top250_261023/compiled.json`; the active catalog now includes the scoring bonuses.']
]);
edit('IMPLEMENTATION_REVIEW.md',[
 ['The 44-variable model','The 46-variable model'],
 ['The initial ranking reproduces the current 15-rule evaluation. Domain variables, page counts, source-count scoring and connection measures start inactive.','The initial ranking reproduces the current 17-rule evaluation. Relevance and R&D start enabled with multiplier 1 and no clipping. Domain variables, direct page-count and source-count terms, and connection measures start inactive.']
]);
edit('site/app.js',[
 ["${anchor(b.analysis, 'Repository analysis ↗')}</div>","${anchor(b.analysis, 'Repository analysis ↗')}${anchor(b.scoreReview, 'Current score update ↗')}</div>"],
 ["<p>Contributing sources: ${esc(b.sources)}.</p><div class=\"details-links\">", "<p>Contributing sources: ${esc(b.sources)}.</p><p>Relevance: ${format(b.bonuses.REL)} points. R&amp;D: ${format(b.bonuses.RD)} points. ${esc(b.bonusAssessment.reason)}</p><div class=\"details-links\">${anchor(b.scoreReview,'Current score breakdown')} "]
]);
