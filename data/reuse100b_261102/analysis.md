# Further metadata with previously attempted books filtered — 2026-11-02

Completed **100 additional previously missing numeric values**: 0 total-page counts, 100 Amazon rating aggregates, and 0 reference-page counts. 100 books updated; 63 score totals changed.

## Evidence and confidence

The primary assistant checked source identity, explicit numeric evidence, scope, and arithmetic. OpenRouter workers used Mistral Nemo for research and Mistral Small 24B for a separate evidence audit. Source text, not worker-generated numbers, determines acceptance. Metadata confidence is moderate. Amazon counts describe one matched product snapshot; the original indexed snapshot date is unknown. Counts are not guaranteed live and are not sums across products or written-review totals. Print counts identify a print edition. Reference counts use explicit inclusive bibliographical ranges, including catalogued pagination for digital editions where stated. Ratios across different or unconfirmed editions are low-confidence estimates. Unknown inputs retain their prescribed zero-bonus fallback.

Content assessments, eligibility, source memberships, and purchase links are retained. Only missing metadata and its resulting O15/RD scores change. [External audit resolutions](../data/reuse100b_261102/audit-resolutions.json) explain the primary assistant’s decisions on model flags.

## Cost and reusable findings

Saved successful OpenRouter responses report **$0.260857** in usage, including experiments and audit calls. This is recorded API usage, not an invoice. [Machine-readable cost and yield results](../data/reuse100b_261102/cost-learning.json) record the comparison.

The best tested base setup remains Mistral Nemo with Parallel fast search and ten results, using source annotations with a one-token reply limit. A separate Mistral Small 24B worker audits batches of five candidates. The primary assistant checks source identity and resolves audit flags.

This round excluded 854 previously attempted Amazon book IDs and made 220 fresh Amazon queries, with no repeated book queries. One accepted value came from a saved response. Secondary results were matched to their actual works before acceptance. Twenty reference searches supplied no accepted counts; no total-page count was accepted.

Recorded cost was $0.260857, 11.0% below the previous round. This is not a controlled test: search difficulty, field mix and cached evidence differ. The result supports testing the no-repeat filter further, not a claim that it alone caused the saving. Confidence in that generalization is moderate.

Reuse evidence first, avoid repeated failed searches, retain title and author in queries, and inspect useful secondary results. Fast search mode is the main established cost saving. The previous paired reply-length pilot saved only 0.40% overall; token trimming has limited additional value. Keep source review and the full audit output budget.

## Accepted values

| Book | Field | Count | Source | Confidence |
|---|---|---:|---|---|
| The Laws of Human Nature — Robert Greene | amazon | 18992 | [evidence](https://www.amazon.com/dp/014311137X) | moderate |
| Bad Science — Ben Goldacre | amazon | 3894 | [evidence](https://www.amazon.com/dp/0865479186) | moderate |
| Energy for Future Presidents: The Science Behind the Headlines — Richard A. Muller | amazon | 198 | [evidence](https://www.amazon.com/dp/0393345106) | moderate |
| Birdmen: The Wright Brothers, Glenn Curtiss, and the Battle to Control the Skies — Lawrence Goldstone | amazon | 548 | [evidence](https://www.amazon.com/dp/0345538056) | moderate |
| The Attention Merchants — Tim Wu | amazon | 1034 | [evidence](https://www.amazon.com/dp/0385352018) | moderate |
| Code Dependent: Living in the Shadow of AI — Madhumita Murgia | amazon | 226 | [evidence](https://www.amazon.com/dp/1250867398) | moderate |
| A History of the Bible — John Barton | amazon | 1147 | [evidence](https://www.amazon.com/dp/0525428771) | moderate |
| Against the Odds: An Autobiography by James Dyson — James Dyson | amazon | 58 | [evidence](https://www.amazon.com/dp/1587991705) | moderate |
| Creativity — Mihaly Csikszentmihalyi | amazon | 737 | [evidence](https://www.amazon.com/dp/0062283251) | moderate |
| The Precipice — Toby Ord | amazon | 1112 | [evidence](https://www.amazon.com/dp/031648492X) | moderate |
| The Philosophical Baby — Alison Gopnik | amazon | 304 | [evidence](https://www.amazon.com/dp/0312429843) | moderate |
| The First Three Minutes — S. Weinberg | amazon | 727 | [evidence](https://www.amazon.com/dp/0465024378) | moderate |
| The Theory of Evolution — John Maynard Smith | amazon | 11 | [evidence](https://www.amazon.com/dp/0521451280) | moderate |
| The Meat Racket — Christopher Leonard | amazon | 345 | [evidence](https://www.amazon.com/dp/1451645813) | moderate |
| The Myth of the Strong Leader — Archie Brown | amazon | 301 | [evidence](https://www.amazon.com/dp/0465027660) | moderate |
| Fundamentals: Ten Keys to Reality — Frank Wilczek | amazon | 1421 | [evidence](https://www.amazon.com/dp/0735223793) | moderate |
| Under a White Sky — Elizabeth Kolbert | amazon | 1947 | [evidence](https://www.amazon.com/dp/0593136276) | moderate |
| Belt and Road — Bruno Maçães | amazon | 262 | [evidence](https://www.amazon.com/dp/1787380025) | moderate |
| Devil Take the Hindmost — Edward Chancellor | amazon | 427 | [evidence](https://www.amazon.com/dp/0374138583) | moderate |
| Leading By Design: The Ikea Story — Ingvar Kamprad and Bertil Torekull | amazon | 17 | [evidence](https://www.amazon.com/dp/0066620384) | moderate |
| The Master Switch — Tim Wu | amazon | 685 | [evidence](https://www.amazon.com/dp/0307390993) | moderate |
| The Age of Surveillance Capitalism — Shoshana Zuboff | amazon | 4060 | [evidence](https://www.amazon.com/dp/1541758005) | moderate |
| Portfolios of the Poor — Daryl Collins; Jonathan Morduch; Stuart Rutherford; Orlanda Ruthven | amazon | 193 | [evidence](https://www.amazon.com/dp/0691148198) | moderate |
| Moonwalking with Einstein — Joshua Foer | amazon | 10936 | [evidence](https://www.amazon.com/dp/0143120530) | moderate |
| Nature via Nurture (also The Agile Gene) — Matt Ridley | amazon | 304 | [evidence](https://www.amazon.com/dp/0060006781) | moderate |
| The Elephant in the Brain — Kevin Simler, Robin Hanson | amazon | 1642 | [evidence](https://www.amazon.com/dp/0197551955) | moderate |
| What Is Life? How Chemistry Becomes Biology — Addy Pross | amazon | 569 | [evidence](https://www.amazon.com/dp/0198784791) | moderate |
| Life Is Simple — Johnjoe McFadden | amazon | 173 | [evidence](https://www.amazon.com/dp/1541620445) | moderate |
| The Origins of Value — William N. Goetzmann and K. Geert Rouwenhorst, editors | amazon | 22 | [evidence](https://www.amazon.com/dp/0195175719) | moderate |
| A Brief History of Everyone Who Ever Lived: The Stories in Our Genes — Adam Rutherford | amazon | 3832 | [evidence](https://www.amazon.com/dp/0297609378) | moderate |
| Just Six Numbers — Martin J. Rees | amazon | 608 | [evidence](https://www.amazon.com/dp/0753810220) | moderate |
| The Periodic Table — Primo Levi | amazon | 662 | [evidence](https://www.amazon.com/dp/0805210415) | moderate |
| Into the Cool — Eric D. Schneider and Dorion Sagan | amazon | 67 | [evidence](https://www.amazon.com/dp/0226739376) | moderate |
| Enlightenment Now — Steven Pinker | amazon | 7045 | [evidence](https://www.amazon.com/dp/0143111388) | moderate |
| Rule Makers, Rule Breakers — Michele Gelfand | amazon | 322 | [evidence](https://www.amazon.com/dp/1501152947) | moderate |
| The Joy of X: A Guided Tour of Math, from One to Infinity — Steven Strogatz | amazon | 2584 | [evidence](https://www.amazon.com/dp/0547517653) | moderate |
| Not the End of the World: How We Can Be the First Generation to Build a Sustainable Planet — Hannah Ritchie | amazon | 1756 | [evidence](https://www.amazon.com/dp/031653675X) | moderate |
| Emotional Design — Donald A. Norman | amazon | 938 | [evidence](https://www.amazon.com/dp/0465051367) | moderate |
| Leviathan and the Air-Pump: Hobbes, Boyle, and the Experimental Life — Steven Shapin, Simon Schaffer | amazon | 62 | [evidence](https://www.amazon.com/dp/0691150206) | moderate |
| Surfing Uncertainty: Prediction, Action, and the Embodied Mind — Andy Clark | amazon | 169 | [evidence](https://www.amazon.com/dp/0190217014) | moderate |
| Learn or Die — Edward Hess | amazon | 129 | [evidence](https://www.amazon.com/dp/0231170246) | moderate |
| Social Physics: How Good Ideas Spread -Lessons from a New Science — Alex Pentland | amazon | 211 | [evidence](https://www.amazon.com/dp/0143126334) | moderate |
| Boom - Bubbles and the End of Stagnation — Byrne Hobart; Tobias Huber | amazon | 150 | [evidence](https://www.amazon.com/dp/B0D9BZ7899) | moderate |
| The Invention of Nature: Alexander von Humboldt's New World — Andrea Wulf | amazon | 4895 | [evidence](https://www.amazon.com/dp/038535066X) | moderate |
| Self Comes to Mind — Antonio Damasio | amazon | 354 | [evidence](https://www.amazon.com/dp/030747495X) | moderate |
| What Is Real? — Adam Becker | amazon | 1219 | [evidence](https://www.amazon.com/dp/0465096050) | moderate |
| Dawn of Eurasia — Bruno Maçães | amazon | 44 | [evidence](https://www.amazon.com/dp/0300235933) | moderate |
| The Red Queen — Matt Ridley | amazon | 1102 | [evidence](https://www.amazon.com/dp/0060556579) | moderate |
| The Better Angels of Our Nature — Steven Pinker | amazon | 3817 | [evidence](https://www.amazon.com/dp/0670022950) | moderate |
| Bloomberg by Bloomberg — Michael R. Bloomberg and Matthew Winkler | amazon | 160 | [evidence](https://www.amazon.com/dp/0471155454) | moderate |
| The Grand Design — Stephen Hawking; Leonard Mlodinow | amazon | 4317 | [evidence](https://www.amazon.com/dp/0553805371) | moderate |
| Survival in Auschwitz — Primo Levi | amazon | 1830 | [evidence](https://www.amazon.com/dp/B007CKW8L0) | moderate |
| Jerusalem: The Biography — Simon Sebag Montefiore | amazon | 2964 | [evidence](https://www.amazon.com/dp/1474614396) | moderate |
| Upheaval — Jared Diamond | amazon | 1666 | [evidence](https://www.amazon.com/dp/0316409138) | moderate |
| Cosmos — Carl Sagan | amazon | 8712 | [evidence](https://www.amazon.com/dp/0394715969) | moderate |
| The Emotional Brain — Joseph E. LeDoux | amazon | 340 | [evidence](https://www.amazon.com/dp/0684836599) | moderate |
| Just for Fun — Linus Torvalds; David Diamond | amazon | 413 | [evidence](https://www.amazon.com/dp/0066620732) | moderate |
| Lean Software Development — Mary Poppendieck; Tom Poppendieck | amazon | 294 | [evidence](https://www.amazon.com/dp/0321150783) | moderate |
| War and Peace and War — Peter Turchin | amazon | 469 | [evidence](https://www.amazon.com/dp/0452288193) | moderate |
| The Light Ages — Seb Falk | amazon | 543 | [evidence](https://www.amazon.com/dp/0393868400) | moderate |
| Incognito: The Secret Lives of the Brain — David Eagleman | amazon | 3470 | [evidence](https://www.amazon.com/dp/0307389928) | moderate |
| Innumeracy: Mathematical Illiteracy and Its Consequences — John Allen Paulos | amazon | 845 | [evidence](https://www.amazon.com/dp/0809058405) | moderate |
| The Evolution of Physics — Albert Einstein; Leopold Infeld | amazon | 253 | [evidence](https://www.amazon.com/dp/0671201565) | moderate |
| CrowdSourcing — Jeff Howe | amazon | 61 | [evidence](https://www.amazon.com/dp/0307396215) | moderate |
| Sneaker Wars: The Enemy Brothers Who Founded Adidas and Puma and The Family Feud That Forever Changed The Business of Sports — Barbara Smit | amazon | 284 | [evidence](https://www.amazon.com/dp/0061246581) | moderate |
| Inside the Box: The fascinating New York Times bestseller that reveals the hidden power of limits — David Epstein | amazon | 21 | [evidence](https://www.amazon.com/dp/0593715713) | moderate |
| The Eastern Front — Nick Lloyd | amazon | 377 | [evidence](https://www.amazon.com/dp/1324092718) | moderate |
| Being You — Anil Seth | amazon | 2115 | [evidence](https://www.amazon.com/dp/0571337708) | moderate |
| High Conflict: Why We Get Trapped and How We Get Out — Amanda Ripley | amazon | 1282 | [evidence](https://www.amazon.com/dp/1982128569) | moderate |
| The Rise and Fall of Nations: Forces of Change in the Post-Crisis World — Ruchir Sharma | amazon | 1052 | [evidence](https://www.amazon.com/dp/0393248895) | moderate |
| Triumph of the City — Edward Glaeser | amazon | 841 | [evidence](https://www.amazon.com/dp/159420277X) | moderate |
| Humans Need Not Apply — Jerry Kaplan | amazon | 456 | [evidence](https://www.amazon.com/dp/0300213557) | moderate |
| Decisive — Chip Heath; Dan Heath | amazon | 2414 | [evidence](https://www.amazon.com/dp/B009JU6UPG) | moderate |
| Engineering in the Ancient World — John G. Landels | amazon | 69 | [evidence](https://www.amazon.com/dp/0520227824) | moderate |
| Secrets of Sand Hill Road — Scott Kupor | amazon | 1186 | [evidence](https://www.amazon.com/dp/0753553961) | moderate |
| Future Perfect — Steven Johnson | amazon | 109 | [evidence](https://www.amazon.com/dp/1594488207) | moderate |
| Charles Darwin: Voyaging — Janet Browne | amazon | 95 | [evidence](https://www.amazon.com/dp/0394579429) | moderate |
| In This Economy? — Kyla Scanlon | amazon | 631 | [evidence](https://www.amazon.com/dp/0593727878) | moderate |
| The Fabric of the Cosmos — Brian Greene | amazon | 2268 | [evidence](https://www.amazon.com/dp/0375412883) | moderate |
| Four Seasons: The Story of a Business Philosophy — Isadore Sharp | amazon | 497 | [evidence](https://www.amazon.com/dp/0143170880) | moderate |
| Stumbling on Happiness — Daniel Gilbert | amazon | 3801 | [evidence](https://www.amazon.com/dp/1400042666) | moderate |
| Making Great Decisions in Business and Life — David R. Henderson and Charles L. Hooper | amazon | 43 | [evidence](https://www.amazon.com/dp/0976854112) | moderate |
| The Half-Life of Facts — Samuel Arbesman | amazon | 260 | [evidence](https://www.amazon.com/dp/159184472X) | moderate |
| The Soviet Biological Weapons Program — Milton Leitenberg; Raymond A. Zilinskas; Jens H. Kuhn | amazon | 24 | [evidence](https://www.amazon.com/dp/0674047702) | moderate |
| Black Holes: The Key to Understanding the Universe — Brian Cox; Jeff Forshaw | amazon | 1225 | [evidence](https://www.amazon.com/dp/0062936697) | moderate |
| Collapse — Jared Diamond | amazon | 3628 | [evidence](https://www.amazon.com/dp/0143036556) | moderate |
| The Elegant Universe — Brian Greene | amazon | 4208 | [evidence](https://www.amazon.com/dp/0393058581) | moderate |
| The Secret Lives of Color — Kassia St. Clair | amazon | 4596 | [evidence](https://www.amazon.com/dp/0143131141) | moderate |
| Extra Life — Steven Johnson | amazon | 332 | [evidence](https://www.amazon.com/dp/0525538852) | moderate |
| Breakout Nations: In Pursuit of the Next Economic Miracles — Ruchir Sharma | amazon | 435 | [evidence](https://www.amazon.com/dp/0393080269) | moderate |
| A Beautiful Mind — Sylvia Nasar | amazon | 1259 | [evidence](https://www.amazon.com/dp/0743224574) | moderate |
| Until the End of Time — Brian Greene | amazon | 3265 | [evidence](https://www.amazon.com/dp/1524731676) | moderate |
| Mathematics: The Loss of Certainty — Morris Kline | amazon | 59 | [evidence](https://www.amazon.com/dp/0195030850) | moderate |
| The Culture of Education — Jerome Bruner | amazon | 46 | [evidence](https://www.amazon.com/dp/0674179528) | moderate |
| Hive Mind — Garett Jones | amazon | 139 | [evidence](https://www.amazon.com/dp/0804785961) | moderate |
| A Theory of Fun for Game Design — Raph Koster | amazon | 171 | [evidence](https://www.amazon.com/dp/1932111972) | moderate |
| e: The Story of a Number — Eli Maor | amazon | 357 | [evidence](https://www.amazon.com/dp/0691168482) | moderate |
| Too Much to Know — Ann M. Blair | amazon | 40 | [evidence](https://www.amazon.com/dp/0300112513) | moderate |
| The Age of Extraction — Tim Wu | amazon | 99 | [evidence](https://www.amazon.com/dp/0593321243) | moderate |
| Why The Allies Won — Richard Overy | amazon | 657 | [evidence](https://www.amazon.com/dp/039331619X) | moderate |
<a id="nd8c9c1a4ab"></a>

## The Laws of Human Nature — Robert Greene

Sources: 144, 293. Prior review: analysis/analysis_mcateer_261025_2011.md#nd8c9c1a4ab. 

Added amazon: **18992**. [Source](https://www.amazon.com/dp/014311137X); [saved evidence](../data/cheapnext100_261102/raw/amazon-1918-parallel-fast-short.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 10.00 | 5.00 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 5.00 | 2.50 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 2.00 | 2.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.80; O15 0.00; REL 2.00; RD 0.13.

R&D inputs: reference pages 4 (OL26974419M); total pages 609 (OL26974419M). 4 / 609 = 0.66%; R&D 0.13. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **34.95 → 34.95**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1523"></a>

## Bad Science — Ben Goldacre

Sources: 204, 293, 294, 301, 303. Prior review: analysis/analysis_karpathy_261025_2011.md#rem-u1523. 

Added amazon: **3894**. [Source](https://www.amazon.com/dp/0865479186); [saved evidence](../data/reuse100b_261102/raw/amazon-0005-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.80; O15 0.00; REL 4.00; RD 0.92.

R&D inputs: reference pages 14 (OL23393749M); total pages 304 (/books/OL37360586M). 14 / 304 = 4.61%; R&D 0.92. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **66.66 → 66.66**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelves-energyfuturepresidents"></a>

## Energy for Future Presidents: The Science Behind the Headlines — Richard A. Muller

Sources: 294. Prior review: analysis/analysis_karpathy_261025_2011.md#shelves-energyfuturepresidents. 

Added amazon: **198**. [Source](https://www.amazon.com/dp/0393345106); [saved evidence](../data/reuse100b_261102/raw/amazon-0007-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 -5.00; REL 0.00; RD 0.87.

R&D inputs: reference pages 16 (ISBN:9780393083941; electronic contents pagination); total pages 367 (ISBN:9780393081619; xvii + 350 pages). 16 / 367 = 4.36%; R&D 0.87. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **66.61 → 61.61**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-cc7d7baafdf7"></a>

## Birdmen: The Wright Brothers, Glenn Curtiss, and the Battle to Control the Skies — Lawrence Goldstone

Sources: 261. Prior review: analysis/analysis_founders_261024_1455.md#shelf-cc7d7baafdf7. 

Added amazon: **548**. [Source](https://www.amazon.com/dp/0345538056); [saved evidence](../data/reuse100b_261102/raw/amazon-0008-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 6.65 | 6.65 |
| Expert authority | 3.75 | 3.75 |
| Narrative architecture | 2.55 | 2.55 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -4.36; P14 -1.20; O15 -5.00; REL 0.00; RD 0.84.

R&D inputs: reference pages 18 (OL27156842M); total pages 428 (OL27156842M). 18 / 428 = 4.21%; R&D 0.84. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **66.61 → 61.61**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0481"></a>

## The Attention Merchants — Tim Wu

Sources: 215, 258, 293, 300, 301. Prior review: analysis/analysis_cheap100_261101_2340.md#intake-0481. 

Added amazon: **1034**. [Source](https://www.amazon.com/dp/0385352018); [saved evidence](../data/reuse100b_261102/raw/amazon-0010-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.00; O15 0.00; REL 4.00; RD 1.81.

R&D inputs: reference pages 39 (Source:https://searchworks.stanford.edu/view/11858828); total pages 432 (/books/OL27406142M). 39 / 432 = 9.03%; R&D 1.81. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **66.60 → 66.60**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-435-317"></a>

## Code Dependent: Living in the Shadow of AI — Madhumita Murgia

Sources: 278. Prior review: analysis/analysis_cheap100_261101_2340.md#complete-435-317. 

Added amazon: **226**. [Source](https://www.amazon.com/dp/1250867398); [saved evidence](../data/reuse100b_261102/raw/amazon-0013-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.20; O15 -5.00; REL 0.00; RD 1.35.

R&D inputs: reference pages 21 (Source:http://cnl.nsw.gov.au/cgi-bin/spydus.exe/FULL/WPAC/BIBENQ/35777739/15012485,1); total pages 311 (GoogleBooks:jDAL0AEACAAJ). 21 / 311 = 6.75%; R&D 1.35. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **66.47 → 61.47**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-68-60"></a>

## A History of the Bible — John Barton

Sources: 269. Prior review: analysis/analysis_metadata2_261025_1921.md#rest-68-60. 

Added amazon: **1147**. [Source](https://www.amazon.com/dp/0525428771); [saved evidence](../data/reuse100b_261102/raw/amazon-0014-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.70; O15 0.00; REL 0.00; RD 1.94.

R&D inputs: reference pages 62 (GoogleBooks:qLyWDwAAQBAJ); total pages 640 (A History of the Bible; edition date unverified). 62 / 640 = 9.69%; R&D 1.94. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **66.46 → 66.46**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-a86bbb5039a5"></a>

## Against the Odds: An Autobiography by James Dyson — James Dyson

Sources: 261. Prior review: analysis/analysis_metadata2_261025_1921.md#shelf-a86bbb5039a5. 

Added amazon: **58**. [Source](https://www.amazon.com/dp/1587991705); [saved evidence](../data/reuse100b_261102/raw/amazon-0015-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 12.75 | 12.75 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.25 | 4.25 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 -1.16; P14 -2.90; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 288 (ISBN:0752809814). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **65.80 → 55.80**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-093afeaac936"></a>

## Creativity — Mihaly Csikszentmihalyi

Sources: 258. Prior review: analysis/analysis_gallagher_261024_1455.md#shelf-093afeaac936. 

Added amazon: **737**. [Source](https://www.amazon.com/dp/0062283251); [saved evidence](../data/reuse100b_261102/raw/amazon-0016-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 5.25 | 5.25 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.00; O15 -5.00; REL 0.00; RD 0.61.

R&D inputs: reference pages 14 (ISBN:0060171332); total pages 456 (ISBN:0060171332). 14 / 456 = 3.07%; R&D 0.61. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **65.75 → 60.75**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0558"></a>

## The Precipice — Toby Ord

Sources: 118, 144, 160, 263, 271, 272, 276, 290, 294, 303. Prior review: analysis/analysis_subcritical_261025_2011.md#g0558. 

Added amazon: **1112**. [Source](https://www.amazon.com/dp/031648492X); [saved evidence](../data/reuse100b_261102/raw/amazon-0018-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.60; O15 0.00; REL 6.00; RD 1.58.

R&D inputs: reference pages 38 (Harvard:99156377081503941); total pages 480 (ISBN:9780316484893). 38 / 480 = 7.92%; R&D 1.58. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **65.71 → 65.71**; Selective. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-97ae5df6939b"></a>

## The Philosophical Baby — Alison Gopnik

Sources: 251, 301. Prior review: analysis/analysis_czarandy_261025_2011.md#shelf-97ae5df6939b. 

Added amazon: **304**. [Source](https://www.amazon.com/dp/0312429843); [saved evidence](../data/reuse100b_261102/raw/amazon-0020-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.05 | 7.18 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.70; O15 -5.00; REL 2.00; RD 1.11.

R&D inputs: reference pages 16 (CiNii:BA90881779); total pages 288 (ISBN:9780374231965). 16 / 288 = 5.56%; R&D 1.11. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **65.62 → 60.62**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n3f243f8e24"></a>

## The First Three Minutes — S. Weinberg

Sources: 139, 205, 256, 257, 267, 290, 292, 302, 303. Prior review: analysis/analysis_subcritical_261025_2011.md#n3f243f8e24. 

Added amazon: **727**. [Source](https://www.amazon.com/dp/0465024378); [saved evidence](../data/reuse100b_261102/raw/amazon-0025-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.90; O15 -5.00; REL 5.66; RD 0.36.

R&D inputs: reference pages 4 (OL1036857M); total pages 224 (ISBN:9780465024377). 4 / 224 = 1.79%; R&D 0.36. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **65.48 → 60.48**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-b7b5436a7df2"></a>

## The Theory of Evolution — John Maynard Smith

Sources: 258. Prior review: analysis/analysis_gallagher_261024_1455.md#shelf-b7b5436a7df2. 

Added amazon: **11**. [Source](https://www.amazon.com/dp/0521451280); [saved evidence](../data/reuse100b_261102/raw/amazon-0026-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 5.25 | 5.25 |
| Expert authority | 4.75 | 4.75 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -6.80; O15 -10.00; REL 0.00; RD 0.11.

R&D inputs: reference pages 2 (OL1411530M); total pages 354 (OL1411530M). 2 / 354 = 0.56%; R&D 0.11. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **65.48 → 55.48**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-737545879260"></a>

## The Meat Racket — Christopher Leonard

Sources: 258. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-737545879260. 

Added amazon: **345**. [Source](https://www.amazon.com/dp/1451645813); [saved evidence](../data/reuse100b_261102/raw/amazon-0028-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.60 | 1.60 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.20; O15 -5.00; REL 0.00; RD 1.41.

R&D inputs: reference pages 27 (ISBN:9781451645811); total pages 384 (OL33432796M). 27 / 384 = 7.03%; R&D 1.41. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **65.38 → 60.38**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1101"></a>

## The Myth of the Strong Leader — Archie Brown

Sources: 122, 148, 293. Prior review: analysis/analysis_mcateer_261025_2011.md#g1101. 

Added amazon: **301**. [Source](https://www.amazon.com/dp/0465027660); [saved evidence](../data/reuse100b_261102/raw/amazon-0030-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.20; O15 -5.00; REL 2.83; RD 3.09.

R&D inputs: reference pages 72 (ISBN:9780465027668); total pages 466 (OL28338663M). 72 / 466 = 15.45%; R&D 3.09. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **65.36 → 60.36**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="nc97887258a"></a>

## Fundamentals: Ten Keys to Reality — Frank Wilczek

Sources: 144, 270, 276, 294. Prior review: analysis/analysis_karpathy_261025_2011.md#nc97887258a. 

Added amazon: **1421**. [Source](https://www.amazon.com/dp/0735223793); [saved evidence](../data/reuse100b_261102/raw/amazon-0032-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 3.00 | 3.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 0.00; REL 3.46; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 272 (ISBN:9780735223905). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **65.33 → 65.33**; Selective. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="bg7bdb79df18"></a>

## Under a White Sky — Elizabeth Kolbert

Sources: 148, 204, 272, 289. Prior review: analysis/analysis_nikomc_261025_2011.md#bg7bdb79df18. 

Added amazon: **1947**. [Source](https://www.amazon.com/dp/0593136276); [saved evidence](../data/reuse100b_261102/raw/amazon-0035-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.50; O15 0.00; REL 3.46; RD 1.91.

R&D inputs: reference pages 26 (Harvard:99155272698203941); total pages 272 (9780593136287). 26 / 272 = 9.56%; R&D 1.91. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **65.20 → 65.20**; Selective. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-71c74d824965"></a>

## Belt and Road — Bruno Maçães

Sources: 251, 258, 263. Prior review: analysis/analysis_metadata2_261025_1921.md#shelf-71c74d824965. 

Added amazon: **262**. [Source](https://www.amazon.com/dp/1787380025); [saved evidence](../data/reuse100b_261102/raw/amazon-0040-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.80; O15 -5.00; REL 2.83; RD 0.69.

R&D inputs: reference pages 10 (GoogleBooks:NcmGDwAAQBAJ); total pages 288 (OL28692529M). 10 / 288 = 3.47%; R&D 0.69. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **65.09 → 60.09**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1181"></a>

## Devil Take the Hindmost — Edward Chancellor

Sources: 123, 258. Prior review: analysis/analysis_gallagher_261024_1455.md#g1181. 

Added amazon: **427**. [Source](https://www.amazon.com/dp/0374138583); [saved evidence](../data/reuse100b_261102/raw/amazon-0041-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.70; O15 -5.00; REL 2.00; RD 1.00.

R&D inputs: reference pages 20 (ISBN:0374138583); total pages 400 (ISBN:0452281806). 20 / 400 = 5.00%; R&D 1.00. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **65.09 → 60.09**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-e7125b40a6c9"></a>

## Leading By Design: The Ikea Story — Ingvar Kamprad and Bertil Torekull

Sources: 261. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-e7125b40a6c9. 

Added amazon: **17**. [Source](https://www.amazon.com/dp/0066620384); [saved evidence](../data/reuse100b_261102/raw/amazon-0046-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 12.75 | 12.75 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 -1.12; P14 -2.80; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 244 (OL21514488M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **64.99 → 54.99**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0406"></a>

## The Master Switch — Tim Wu

Sources: 116, 175, 191, 232, 245, 258, 259, 264, 290, 292, 293, 298, 299. Prior review: analysis/analysis_subcritical_261025_2011.md#g0406. 

Added amazon: **685**. [Source](https://www.amazon.com/dp/0307390993); [saved evidence](../data/reuse100b_261102/raw/amazon-0048-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -1.60; O15 -5.00; REL 6.93; RD 1.67.

R&D inputs: reference pages 32 (OL25122620M); total pages 384 (ISBN:9780307594655). 32 / 384 = 8.33%; R&D 1.67. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **64.93 → 59.93**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="q0972"></a>

## The Age of Surveillance Capitalism — Shoshana Zuboff

Sources: 9, 146, 175, 191, 262, 293, 299. Prior review: analysis/analysis_cheap100_261101_2340.md#q0972. 

Added amazon: **4060**. [Source](https://www.amazon.com/dp/1541758005); [saved evidence](../data/reuse100b_261102/raw/amazon-0059-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.18 | 9.18 |
| Information density | 4.00 | 1.60 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.70; O15 0.00; REL 4.90; RD 3.61.

R&D inputs: reference pages 127 (Source:https://librarysearch.temple.edu/catalog/991036985407903811); total pages 704 (ISBN:1541758005). 127 / 704 = 18.04%; R&D 3.61. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **64.67 → 64.67**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g0858"></a>

## Portfolios of the Poor — Daryl Collins; Jonathan Morduch; Stuart Rutherford; Orlanda Ruthven

Sources: 120, 259. Prior review: analysis/analysis_gwern_261024_1455.md#g0858. 

Added amazon: **193**. [Source](https://www.amazon.com/dp/0691148198); [saved evidence](../data/reuse100b_261102/raw/amazon-0060-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.70; O15 -5.00; REL 2.00; RD 0.57.

R&D inputs: reference pages 8 (OL30648157M); total pages 283 (ISBN:0691141487). 8 / 283 = 2.83%; R&D 0.57. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **64.66 → 59.66**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0550"></a>

## Moonwalking with Einstein — Joshua Foer

Sources: 118, 135, 148, 177, 185, 205, 207, 251, 262, 276, 283, 293, 299. Prior review: analysis/analysis_mcateer_261025_2011.md#g0550. 

Added amazon: **10936**. [Source](https://www.amazon.com/dp/0143120530); [saved evidence](../data/reuse100b_261102/raw/amazon-0066-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -0.80; P14 -1.50; O15 0.00; REL 6.93; RD 6.45.

R&D inputs: reference pages 99 (OL32126727M); total pages 307 (ISBN:0143120530). 99 / 307 = 32.25%; R&D 6.45. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **64.54 → 64.54**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g0617"></a>

## Nature via Nurture (also The Agile Gene) — Matt Ridley

Sources: 118, 283. Prior review: analysis/analysis_ashod_261024_2353.md#g0617. 

Added amazon: **304**. [Source](https://www.amazon.com/dp/0060006781); [saved evidence](../data/reuse100b_261102/raw/amazon-0067-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.30; O15 -5.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 326 (ISBN:9780060006792). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **64.52 → 59.52**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bgd9a02a3e7a"></a>

## The Elephant in the Brain — Kevin Simler, Robin Hanson

Sources: 160, 166, 251, 269, 290, 293, 300, 301. Prior review: analysis/analysis_subcritical_261025_2011.md#bgd9a02a3e7a. 

Added amazon: **1642**. [Source](https://www.amazon.com/dp/0197551955); [saved evidence](../data/reuse100b_261102/raw/amazon-0069-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.80; O15 0.00; REL 5.29; RD 3.37.

R&D inputs: reference pages 70 (GoogleBooks:mcM9DwAAQBAJ); total pages 416 (OL32212307M). 70 / 416 = 16.83%; R&D 3.37. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **64.50 → 64.50**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-cedaa1931544"></a>

## What Is Life? How Chemistry Becomes Biology — Addy Pross

Sources: 254, 292, 300. Prior review: analysis/analysis_kamdar_261025_2011.md#shelf-cedaa1931544. 

Added amazon: **569**. [Source](https://www.amazon.com/dp/0198784791); [saved evidence](../data/reuse100b_261102/raw/amazon-0074-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 -5.00; REL 2.83; RD 0.58.

R&D inputs: reference pages 6 (ISBN:0198784791); total pages 208 (ISBN:0198784791). 6 / 208 = 2.88%; R&D 0.58. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **64.34 → 59.34**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0325"></a>

## Life Is Simple — Johnjoe McFadden

Sources: 214. Prior review: analysis/analysis_metadata2_261025_1921.md#intake-0325. 

Added amazon: **173**. [Source](https://www.amazon.com/dp/1541620445); [saved evidence](../data/reuse100b_261102/raw/amazon-0078-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 -5.00; REL 0.00; RD 0.89.

R&D inputs: reference pages 17 (Harvard:99155805064803941); total pages 384 (/books/OL33944705M). 17 / 384 = 4.43%; R&D 0.89. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **64.23 → 59.23**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-96d274c8a7ae"></a>

## The Origins of Value — William N. Goetzmann and K. Geert Rouwenhorst, editors

Sources: 258. Prior review: analysis/analysis_gallagher_261024_1455.md#shelf-96d274c8a7ae. 

Added amazon: **22**. [Source](https://www.amazon.com/dp/0195175719); [saved evidence](../data/reuse100b_261102/raw/amazon-0083-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.10; O15 -10.00; REL 0.00; RD 1.78.

R&D inputs: reference pages 36 (ISBN:0195175719); total pages 404 (ISBN:0195175719). 36 / 404 = 8.91%; R&D 1.78. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **64.16 → 54.16**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1014"></a>

## A Brief History of Everyone Who Ever Lived: The Stories in Our Genes — Adam Rutherford

Sources: 190, 205, 292, 300. Prior review: analysis/analysis_kamdar_261025_2011.md#rem-u1014. 

Added amazon: **3832**. [Source](https://www.amazon.com/dp/0297609378); [saved evidence](../data/reuse100b_261102/raw/amazon-0092-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.00; O15 0.00; REL 3.46; RD 0.94.

R&D inputs: reference pages 15 (OL26935136M); total pages 320 (/books/OL48159988M). 15 / 320 = 4.69%; R&D 0.94. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.98 → 63.98**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0430"></a>

## Just Six Numbers — Martin J. Rees

Sources: 232, 257, 283, 303. Prior review: analysis/analysis_elitescience_261025_2011.md#progress-0430. 

Added amazon: **608**. [Source](https://www.amazon.com/dp/0753810220); [saved evidence](../data/reuse100b_261102/raw/amazon-0095-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.50 | 7.23 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.70; O15 -5.00; REL 3.46; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 176 (/books/OL17599501M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **63.95 → 58.95**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0562"></a>

## The Periodic Table — Primo Levi

Sources: 232, 301, 303. Prior review: analysis/analysis_czarandy_261025_2011.md#progress-0562. 

Added amazon: **662**. [Source](https://www.amazon.com/dp/0805210415); [saved evidence](../data/reuse100b_261102/raw/amazon-0096-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -2.08; P14 -5.10; O15 -5.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 241 (/books/OL972082M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **63.94 → 58.94**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-3912890756f4"></a>

## Into the Cool — Eric D. Schneider and Dorion Sagan

Sources: 258, 289. Prior review: analysis/analysis_nikomc_261025_2011.md#shelf-3912890756f4. 

Added amazon: **67**. [Source](https://www.amazon.com/dp/0226739376); [saved evidence](../data/reuse100b_261102/raw/amazon-0098-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 9.75 | 9.75 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.50 | 5.63 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 5.25 | 5.25 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.10; O15 -10.00; REL 2.00; RD 0.83.

R&D inputs: reference pages 15 (ISBN:0226739368); total pages 362 (ISBN:0226739368). 15 / 362 = 4.14%; R&D 0.83. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **63.93 → 53.93**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="q0974"></a>

## Enlightenment Now — Steven Pinker

Sources: 5, 120, 142, 144, 148, 156, 172, 183, 205, 229, 276, 289, 290, 293, 294, 295, 300, 303. Prior review: analysis/analysis_nikomc_261025_2011.md#q0974. 

Added amazon: **7045**. [Source](https://www.amazon.com/dp/0143111388); [saved evidence](../data/reuse100b_261102/raw/amazon-0099-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.76 | 7.76 |
| Information density | 5.00 | 2.50 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.80; O15 0.00; REL 8.25; RD 2.43.

R&D inputs: reference pages 70 (GoogleBooks:J6grDwAAQBAJ); total pages 576 (ISBN:0143111388). 70 / 576 = 12.15%; R&D 2.43. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.88 → 63.88**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-53789037d51d"></a>

## Rule Makers, Rule Breakers — Michele Gelfand

Sources: 251. Prior review: analysis/analysis_metadata2_261025_1921.md#shelf-53789037d51d. 

Added amazon: **322**. [Source](https://www.amazon.com/dp/1501152947); [saved evidence](../data/reuse100b_261102/raw/amazon-0101-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 2.80 | 2.80 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.80; O15 -5.00; REL 0.00; RD 5.63.

R&D inputs: reference pages 108 (CiNii:BB30079292); total pages 384 (OL34039596M). 108 / 384 = 28.13%; R&D 5.63. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.86 → 58.86**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="ncaa247ed7e"></a>

## The Joy of X: A Guided Tour of Math, from One to Infinity — Steven Strogatz

Sources: 139, 298. Prior review: analysis/analysis_computepod_261025_2011.md#ncaa247ed7e. 

Added amazon: **2584**. [Source](https://www.amazon.com/dp/0547517653); [saved evidence](../data/reuse100b_261102/raw/amazon-0102-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 0.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 336 (ISBN:9780547517667). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **63.83 → 63.83**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="complete-441-320"></a>

## Not the End of the World: How We Can Be the First Generation to Build a Sustainable Planet — Hannah Ritchie

Sources: 278, 289, 303. Prior review: analysis/analysis_nikomc_261025_2011.md#complete-441-320. 

Added amazon: **1756**. [Source](https://www.amazon.com/dp/031653675X); [saved evidence](../data/reuse100b_261102/raw/amazon-0123-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.20; O15 0.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 341 (CiNii:BD1379287X). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **63.36 → 63.36**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0404"></a>

## Emotional Design — Donald A. Norman

Sources: 215. Prior review: analysis/analysis_metadata2_261025_1921.md#intake-0404. 

Added amazon: **938**. [Source](https://www.amazon.com/dp/0465051367); [saved evidence](../data/reuse100b_261102/raw/amazon-0124-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.20; O15 -5.00; REL 0.00; RD 0.47.

R&D inputs: reference pages 6 (CiNii:BA71879521); total pages 257 (/books/OL8531187M). 6 / 257 = 2.33%; R&D 0.47. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.35 → 58.35**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1011"></a>

## Leviathan and the Air-Pump: Hobbes, Boyle, and the Experimental Life — Steven Shapin, Simon Schaffer

Sources: 190, 214, 289. Prior review: analysis/analysis_nikomc_261025_2011.md#rem-u1011. 

Added amazon: **62**. [Source](https://www.amazon.com/dp/0691150206); [saved evidence](../data/reuse100b_261102/raw/amazon-0127-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -12.00; P14 -4.10; O15 -10.00; REL 2.83; RD 1.55.

R&D inputs: reference pages 34 (CiNii:BB07553654); total pages 440 (/books/OL29200122M). 34 / 440 = 7.73%; R&D 1.55. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.32 → 53.32**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1090"></a>

## Surfing Uncertainty: Prediction, Action, and the Embodied Mind — Andy Clark

Sources: 192, 294. Prior review: analysis/analysis_karpathy_261025_2011.md#rem-u1090. 

Added amazon: **169**. [Source](https://www.amazon.com/dp/0190217014); [saved evidence](../data/reuse100b_261102/raw/amazon-0128-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.00; O15 -5.00; REL 2.00; RD 3.49.

R&D inputs: reference pages 70 (GoogleBooks:Yoh2CgAAQBAJ); total pages 401 (/books/OL26326755M). 70 / 401 = 17.46%; R&D 3.49. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.31 → 58.31**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0606"></a>

## Learn or Die — Edward Hess

Sources: 118. Prior review: analysis/analysis_scorebonus_261024_0106.md#g0606. 

Added amazon: **129**. [Source](https://www.amazon.com/dp/0231170246); [saved evidence](../data/reuse100b_261102/raw/amazon-0138-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.20; O15 -5.00; REL 0.00; RD 2.25.

R&D inputs: reference pages 30 (OL27184986M); total pages 267 (ISBN:0231170246). 30 / 267 = 11.24%; R&D 2.25. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **63.22 → 58.22**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0306"></a>

## Social Physics: How Good Ideas Spread -Lessons from a New Science — Alex Pentland

Sources: 178. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u0306. 

Added amazon: **211**. [Source](https://www.amazon.com/dp/0143126334); [saved evidence](../data/reuse100b_261102/raw/amazon-0139-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.20; O15 -5.00; REL 0.00; RD 2.00.

R&D inputs: reference pages 30 (OL27157787M); total pages 300 (/books/OL27157787M). 30 / 300 = 10.00%; R&D 2.00. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **63.20 → 58.20**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1831"></a>

## Boom - Bubbles and the End of Stagnation — Byrne Hobart; Tobias Huber

Sources: 193, 289. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1831. 

Added amazon: **150**. [Source](https://www.amazon.com/dp/B0D9BZ7899); [saved evidence](../data/reuse100b_261102/raw/amazon-0105-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.20; O15 -5.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 303 (ISBN:9781953953476). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **62.69 → 57.69**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0991"></a>

## The Invention of Nature: Alexander von Humboldt's New World — Andrea Wulf

Sources: 190, 201, 204, 207, 232, 272, 301, 303. Prior review: analysis/analysis_czarandy_261025_2011.md#rem-u0991. 

Added amazon: **4895**. [Source](https://www.amazon.com/dp/038535066X); [saved evidence](../data/reuse100b_261102/raw/amazon-0092-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -6.68; P14 -1.10; O15 0.00; REL 5.29; RD 3.85.

R&D inputs: reference pages 111 (OL26883631M); total pages 576 (ISBN:9780345806291). 111 / 576 = 19.27%; R&D 3.85. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.16 → 61.16**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-0292ed0d982e"></a>

## Self Comes to Mind — Antonio Damasio

Sources: 254. Prior review: analysis/analysis_or100done_261101_2321.md#shelf-0292ed0d982e. 

Added amazon: **354**. [Source](https://www.amazon.com/dp/030747495X); [saved evidence](../data/reuse100b_261102/raw/amazon-0080-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.60; O15 -5.00; REL 0.00; RD 1.31.

R&D inputs: reference pages 24 (Source:https://catalog.ocls.org/Record/.b17528161); total pages 367 (ISBN:9780307378750). 24 / 367 = 6.54%; R&D 1.31. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **58.03 → 53.03**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="ne439a68a5d"></a>

## What Is Real? — Adam Becker

Sources: 139, 182, 256, 303. Prior review: analysis/analysis_metadata3000_261025_2354.md#ne439a68a5d. 

Added amazon: **1219**. [Source](https://www.amazon.com/dp/0465096050); [saved evidence](../data/reuse100b_261102/raw/amazon-0081-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.80; O15 0.00; REL 3.46; RD 0.68.

R&D inputs: reference pages 13 (CiNii:BC10553580); total pages 384 (ISBN:9780465096060). 13 / 384 = 3.39%; R&D 0.68. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.66 → 56.66**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-ce81d507ad50"></a>

## Dawn of Eurasia — Bruno Maçães

Sources: 251, 258, 263, 290. Prior review: analysis/analysis_subcritical_261025_2011.md#shelf-ce81d507ad50. 

Added amazon: **44**. [Source](https://www.amazon.com/dp/0300235933); [saved evidence](../data/reuse100b_261102/raw/amazon-0040-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.80; O15 -10.00; REL 3.46; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 281 (OL26975056M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **56.34 → 46.34**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1004"></a>

## The Red Queen — Matt Ridley

Sources: 122, 205, 283, 290, 291, 293, 300. Prior review: analysis/analysis_subcritical_261025_2011.md#g1004. 

Added amazon: **1102**. [Source](https://www.amazon.com/dp/0060556579); [saved evidence](../data/reuse100b_261102/raw/amazon-0067-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.30; O15 0.00; REL 4.90; RD 1.23.

R&D inputs: reference pages 25 (OL3683555M); total pages 405 (ISBN:0060556579). 25 / 405 = 6.17%; R&D 1.23. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **55.57 → 55.57**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="nf4e0a8e1ff"></a>

## The Better Angels of Our Nature — Steven Pinker

Sources: 144, 148, 183, 201, 205, 215, 229, 254, 256, 259, 276, 283, 290, 293, 294, 297, 300, 301, 303. Prior review: analysis/analysis_subcritical_261025_2011.md#nf4e0a8e1ff. 

Added amazon: **3817**. [Source](https://www.amazon.com/dp/0670022950); [saved evidence](../data/reuse100b_261102/raw/amazon-0099-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 6.00 | 3.60 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.50; O15 0.00; REL 8.49; RD 1.83.

R&D inputs: reference pages 76 (OL25690739M); total pages 832 (9780143122012). 76 / 832 = 9.13%; R&D 1.83. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **53.58 → 53.58**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-199bf8849f16"></a>

## Bloomberg by Bloomberg — Michael R. Bloomberg and Matthew Winkler

Sources: 261. Prior review: analysis/analysis_founders_261024_1455.md#shelf-199bf8849f16. 

Added amazon: **160**. [Source](https://www.amazon.com/dp/0471155454); [saved evidence](../data/reuse100b_261102/raw/amazon-0113-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 0.00; H13 -1.16; P14 -2.90; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 256 (OL33735429M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **50.97 → 45.97**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="nae12d9795b"></a>

## The Grand Design — Stephen Hawking; Leonard Mlodinow

Sources: 139, 203, 228, 254, 283, 292, 293, 303. Prior review: analysis/analysis_kamdar_261025_2011.md#nae12d9795b. 

Added amazon: **4317**. [Source](https://www.amazon.com/dp/0553805371); [saved evidence](../data/reuse100b_261102/raw/amazon-0103-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 3.00 | 3.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.60; O15 0.00; REL 5.29; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 208 (ISBN:9780553384666). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **41.81 → 41.81**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rem-u1445"></a>

## Survival in Auschwitz — Primo Levi

Sources: 201. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1445. 

Added amazon: **1830**. [Source](https://www.amazon.com/dp/B007CKW8L0); [saved evidence](../data/reuse100b_261102/raw/amazon-0096-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 -3.24; P14 -7.90; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 192 (ISBN:9780684826806). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **40.55 → 40.55**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1318"></a>

## Jerusalem: The Biography — Simon Sebag Montefiore

Sources: 200. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1318. 

Added amazon: **2964**. [Source](https://www.amazon.com/dp/1474614396); [saved evidence](../data/reuse100b_261102/raw/amazon-0031-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -1.50; O15 0.00; REL 0.00; RD 0.55.

R&D inputs: reference pages 19 (OL26643965M); total pages 696 (/books/OL32159470M). 19 / 696 = 2.73%; R&D 0.55. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **39.44 → 39.44**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1123"></a>

## Upheaval — Jared Diamond

Sources: 122, 148, 200, 289, 297. Prior review: analysis/analysis_nikomc_261025_2011.md#g1123. 

Added amazon: **1666**. [Source](https://www.amazon.com/dp/0316409138); [saved evidence](../data/reuse100b_261102/raw/amazon-0018-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 9.00 | 4.05 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 5.00 | 5.00 |
| Information density | 5.00 | 2.50 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.70; O15 0.00; REL 4.00; RD 0.60.

R&D inputs: reference pages 15 (ISBN:9780141977782); total pages 502 (ISBN:0316409146). 15 / 502 = 2.99%; R&D 0.60. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **38.92 → 38.92**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0577"></a>

## Cosmos — Carl Sagan

Sources: 118, 144, 183, 190, 203, 215, 242, 248, 253, 256, 290, 293, 294, 303. Prior review: analysis/analysis_subcritical_261025_2011.md#g0577. 

Added amazon: **8712**. [Source](https://www.amazon.com/dp/0394715969); [saved evidence](../data/reuse100b_261102/raw/amazon-0103-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 5.00 | 5.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.60; O15 0.00; REL 7.21; RD 0.28.

R&D inputs: reference pages 6 (OL24740450M); total pages 432 (9780345539434). 6 / 432 = 1.39%; R&D 0.28. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.82 → 63.82**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-c8b51cff095c"></a>

## The Emotional Brain — Joseph E. LeDoux

Sources: 258, 292. Prior review: analysis/analysis_kamdar_261025_2011.md#shelf-c8b51cff095c. 

Added amazon: **340**. [Source](https://www.amazon.com/dp/0684836599); [saved evidence](../data/reuse100b_261102/raw/amazon-0106-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 11.05 | 7.18 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 7.50 | 5.63 |
| Durability | 6.75 | 6.75 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.00; O15 -5.00; REL 2.00; RD 1.98.

R&D inputs: reference pages 38 (ISBN:0684803828); total pages 384 (ISBN:0684803828). 38 / 384 = 9.90%; R&D 1.98. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **63.79 → 58.79**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0584"></a>

## Just for Fun — Linus Torvalds; David Diamond

Sources: 218, 219, 244, 260, 261, 298. Prior review: analysis/analysis_computepod_261025_2011.md#intake-0584. 

Added amazon: **413**. [Source](https://www.amazon.com/dp/0066620732); [saved evidence](../data/reuse100b_261102/raw/amazon-0108-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.04; P14 -2.50; O15 -5.00; REL 4.47; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 288 (/books/OL8826539M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **63.75 → 58.75**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0746"></a>

## Lean Software Development — Mary Poppendieck; Tom Poppendieck

Sources: 219. Prior review: analysis/analysis_top500data_261024_1353.md#intake-0746. 

Added amazon: **294**. [Source](https://www.amazon.com/dp/0321150783); [saved evidence](../data/reuse100b_261102/raw/amazon-0111-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.30; O15 -5.00; REL 0.00; RD 0.67.

R&D inputs: reference pages 8 (GoogleBooks:UalKAgAAQBAJ); total pages 240 (/books/OL9784944M). 8 / 240 = 3.33%; R&D 0.67. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.71 → 58.71**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bg6f76a21b88"></a>

## War and Peace and War — Peter Turchin

Sources: 167, 265, 290. Prior review: analysis/analysis_subcritical_261025_2011.md#bg6f76a21b88. 

Added amazon: **469**. [Source](https://www.amazon.com/dp/0452288193); [saved evidence](../data/reuse100b_261102/raw/amazon-0116-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.10; O15 -5.00; REL 2.83; RD 1.54.

R&D inputs: reference pages 32 (OL3480556M); total pages 416 (9780452288195). 32 / 416 = 7.69%; R&D 1.54. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.55 → 58.55**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="intake-0320"></a>

## The Light Ages — Seb Falk

Sources: 214. Prior review: analysis/analysis_metadata2_261025_1921.md#intake-0320. 

Added amazon: **543**. [Source](https://www.amazon.com/dp/0393868400); [saved evidence](../data/reuse100b_261102/raw/amazon-0117-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -12.00; P14 -0.60; O15 -5.00; REL 0.00; RD 0.75.

R&D inputs: reference pages 15 (CiNii:BC0863212X); total pages 400 (/books/OL29494131M). 15 / 400 = 3.75%; R&D 0.75. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.52 → 58.52**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1581"></a>

## Incognito: The Secret Lives of the Brain — David Eagleman

Sources: 204, 215, 254, 258, 292, 300, 303. Prior review: analysis/analysis_kamdar_261025_2011.md#rem-u1581. 

Added amazon: **3470**. [Source](https://www.amazon.com/dp/0307389928); [saved evidence](../data/reuse100b_261102/raw/amazon-0118-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.50; O15 0.00; REL 4.90; RD 1.79.

R&D inputs: reference pages 26 (OL24921290M); total pages 290 (/books/OL24903634M). 26 / 290 = 8.97%; R&D 1.79. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.50 → 63.50**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="nf427e62692"></a>

## Innumeracy: Mathematical Illiteracy and Its Consequences — John Allen Paulos

Sources: 142, 167, 251, 301. Prior review: analysis/analysis_czarandy_261025_2011.md#nf427e62692. 

Added amazon: **845**. [Source](https://www.amazon.com/dp/0809058405); [saved evidence](../data/reuse100b_261102/raw/amazon-0119-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 9.00 | 8.10 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.80; O15 -5.00; REL 3.46; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 208 (OL37039936M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **63.48 → 58.48**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0328"></a>

## The Evolution of Physics — Albert Einstein; Leopold Infeld

Sources: 214, 228, 254, 258, 291, 303. Prior review: analysis/analysis_bretvictor_261025_2011.md#intake-0328. 

Added amazon: **253**. [Source](https://www.amazon.com/dp/0671201565); [saved evidence](../data/reuse100b_261102/raw/amazon-0121-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -8.80; O15 -5.00; REL 4.47; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 1 (/books/OL7645861M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **63.40 → 58.40**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-f2b0d3bf3afb"></a>

## CrowdSourcing — Jeff Howe

Sources: 251. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-f2b0d3bf3afb. 

Added amazon: **61**. [Source](https://www.amazon.com/dp/0307396215); [saved evidence](../data/reuse100b_261102/raw/amazon-0122-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.80; O15 -10.00; REL 0.00; RD 0.71.

R&D inputs: reference pages 11 (ISBN:9780307396211); total pages 311 (OL22382422M). 11 / 311 = 3.54%; R&D 0.71. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.39 → 53.39**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-44bd054edf88"></a>

## Sneaker Wars: The Enemy Brothers Who Founded Adidas and Puma and The Family Feud That Forever Changed The Business of Sports — Barbara Smit

Sources: 261. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-44bd054edf88. 

Added amazon: **284**. [Source](https://www.amazon.com/dp/0061246581); [saved evidence](../data/reuse100b_261102/raw/amazon-0143-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.50 | 5.63 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 3.75 | 3.75 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 -0.80; P14 -2.00; O15 -5.00; REL 0.00; RD 0.21.

R&D inputs: reference pages 4 (OL22860884M); total pages 384 (OL22860884M). 4 / 384 = 1.04%; R&D 0.21. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **63.15 → 58.15**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-0842be7ee59c"></a>

## Inside the Box: The fascinating New York Times bestseller that reveals the hidden power of limits — David Epstein

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-0842be7ee59c. 

Added amazon: **21**. [Source](https://www.amazon.com/dp/0593715713); [saved evidence](../data/reuse100b_261102/raw/amazon-0145-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 0.00; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 433 (OL62083497M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **63.13 → 53.13**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-df7c6c4a5b62"></a>

## The Eastern Front — Nick Lloyd

Sources: 252. Prior review: analysis/analysis_metadata3000_261025_2354.md#shelf-df7c6c4a5b62. 

Added amazon: **377**. [Source](https://www.amazon.com/dp/1324092718); [saved evidence](../data/reuse100b_261102/raw/amazon-0148-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 -4.32; P14 -0.20; O15 -5.00; REL 0.00; RD 2.53.

R&D inputs: reference pages 89 (CiNii:BD08647474); total pages 704 (GoogleBooks:YPLMEAAAQBAJ). 89 / 704 = 12.64%; R&D 2.53. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.09 → 58.09**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-142-128"></a>

## Being You — Anil Seth

Sources: 272. Prior review: analysis/analysis_metadata1000_261025_1546.md#rest-142-128. 

Added amazon: **2115**. [Source](https://www.amazon.com/dp/0571337708); [saved evidence](../data/reuse100b_261102/raw/amazon-0149-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 0.00; REL 0.00; RD 1.01.

R&D inputs: reference pages 18 (GoogleBooks:arVCEAAAQBAJ); total pages 358 (GoogleBooks:q8mfzgEACAAJ). 18 / 358 = 5.03%; R&D 1.01. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.09 → 63.09**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1876"></a>

## High Conflict: Why We Get Trapped and How We Get Out — Amanda Ripley

Sources: 193. Prior review: analysis/analysis_top500data_261024_1353.md#rem-u1876. 

Added amazon: **1282**. [Source](https://www.amazon.com/dp/1982128569); [saved evidence](../data/reuse100b_261102/raw/amazon-0150-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 0.00; REL 0.00; RD 0.76.

R&D inputs: reference pages 14 (ISBN:9781982128562); total pages 368 (/books/OL36353780M). 14 / 368 = 3.80%; R&D 0.76. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **63.08 → 63.08**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1232"></a>

## The Rise and Fall of Nations: Forces of Change in the Post-Crisis World — Ruchir Sharma

Sources: 196, 197, 232. Prior review: analysis/analysis_metadata2_261025_1921.md#rem-u1232. 

Added amazon: **1052**. [Source](https://www.amazon.com/dp/0393248895); [saved evidence](../data/reuse100b_261102/raw/amazon-0157-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.00; O15 0.00; REL 2.83; RD 1.20.

R&D inputs: reference pages 29 (CiNii:BB23262040); total pages 482 (ISBN:9780393354157). 29 / 482 = 6.02%; R&D 1.20. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.90 → 62.90**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bg0b1dcb7765"></a>

## Triumph of the City — Edward Glaeser

Sources: 162, 290, 300. Prior review: analysis/analysis_hendricks_261025_2011.md#bg0b1dcb7765. 

Added amazon: **841**. [Source](https://www.amazon.com/dp/159420277X); [saved evidence](../data/reuse100b_261102/raw/amazon-0158-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.50; O15 -5.00; REL 2.83; RD 0.92.

R&D inputs: reference pages 17 (ISBN:9781594202773); total pages 368 (9780143120544). 17 / 368 = 4.62%; R&D 0.92. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **62.89 → 57.89**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g0436"></a>

## Humans Need Not Apply — Jerry Kaplan

Sources: 116, 292, 294. Prior review: analysis/analysis_kamdar_261025_2011.md#g0436. 

Added amazon: **456**. [Source](https://www.amazon.com/dp/0300213557); [saved evidence](../data/reuse100b_261102/raw/amazon-0159-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.10; O15 -5.00; REL 2.83; RD 1.49.

R&D inputs: reference pages 18 (GoogleBooks:yatJCgAAQBAJ); total pages 241 (ISBN:0300213557). 18 / 241 = 7.47%; R&D 1.49. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.89 → 57.89**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-a9480733b203"></a>

## Decisive — Chip Heath; Dan Heath

Sources: 251, 263, 300. Prior review: analysis/analysis_hendricks_261025_2011.md#shelf-a9480733b203. 

Added amazon: **2414**. [Source](https://www.amazon.com/dp/B009JU6UPG); [saved evidence](../data/reuse100b_261102/raw/amazon-0163-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 8.00 | 6.40 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.30; O15 0.00; REL 2.83; RD 0.13.

R&D inputs: reference pages 2 (ISBN:9780307956392); total pages 315 (OL39223017M). 2 / 315 = 0.63%; R&D 0.13. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.88 → 62.88**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-4ac29bdcd15c"></a>

## Engineering in the Ancient World — John G. Landels

Sources: 262. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-4ac29bdcd15c. 

Added amazon: **69**. [Source](https://www.amazon.com/dp/0520227824); [saved evidence](../data/reuse100b_261102/raw/amazon-0165-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.80 | 10.80 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 -12.00; P14 -4.80; O15 -10.00; REL 0.00; RD 0.27.

R&D inputs: reference pages 3 (OL19662973M); total pages 224 (OL19662973M). 3 / 224 = 1.34%; R&D 0.27. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **62.84 → 52.84**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1138"></a>

## Secrets of Sand Hill Road — Scott Kupor

Sources: 123, 193, 262. Prior review: analysis/analysis_ferris_261024_1455.md#g1138. 

Added amazon: **1186**. [Source](https://www.amazon.com/dp/0753553961); [saved evidence](../data/reuse100b_261102/raw/amazon-0169-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.70; O15 0.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 320 (ISBN:059308358X). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **62.77 → 62.77**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="progress-0384"></a>

## Future Perfect — Steven Johnson

Sources: 232. Prior review: analysis/analysis_top500data_261024_1353.md#progress-0384. 

Added amazon: **109**. [Source](https://www.amazon.com/dp/1594488207); [saved evidence](../data/reuse100b_261102/raw/amazon-0176-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 -5.00; REL 0.00; RD 0.51.

R&D inputs: reference pages 7 (ISBN:9781594488207); total pages 272 (ISBN:9781101596975). 7 / 272 = 2.57%; R&D 0.51. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.71 → 57.71**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-34e6d72419d6"></a>

## Charles Darwin: Voyaging — Janet Browne

Sources: 258. Prior review: analysis/analysis_metadata2_261025_1921.md#shelf-34e6d72419d6. 

Added amazon: **95**. [Source](https://www.amazon.com/dp/0394579429); [saved evidence](../data/reuse100b_261102/raw/amazon-0179-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 9.75 | 9.75 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.50 | 5.63 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 5.25 | 5.25 |
| Expert authority | 4.75 | 4.75 |
| Narrative architecture | 2.55 | 2.55 |
| Authorial precision | 1.70 | 1.70 |

T11 0.00; T12 0.00; H13 -6.80; P14 -3.10; O15 -10.00; REL 0.00; RD 0.69.

R&D inputs: reference pages 21 (CiNii:BA29977420); total pages 608 (OL7698873M). 21 / 608 = 3.45%; R&D 0.69. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.68 → 52.68**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-6e90dabf0c38"></a>

## In This Economy? — Kyla Scanlon

Sources: 251. Prior review: analysis/analysis_cheap100_261101_2340.md#shelf-6e90dabf0c38. 

Added amazon: **631**. [Source](https://www.amazon.com/dp/0593727878); [saved evidence](../data/reuse100b_261102/raw/amazon-0184-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.20; O15 -5.00; REL 0.00; RD 0.53.

R&D inputs: reference pages 8 (Source:https://quincy.ocln.org/Record/498195); total pages 304 (OL62500216M). 8 / 304 = 2.63%; R&D 0.53. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.61 → 57.61**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n1781c138fd"></a>

## The Fabric of the Cosmos — Brian Greene

Sources: 139, 204, 215, 254, 263, 283, 292, 303. Prior review: analysis/analysis_kamdar_261025_2011.md#n1781c138fd. 

Added amazon: **2268**. [Source](https://www.amazon.com/dp/0375412883); [saved evidence](../data/reuse100b_261102/raw/amazon-0189-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.20; O15 0.00; REL 5.29; RD 0.07.

R&D inputs: reference pages 2 (ISBN:0375412883); total pages 569 (ISBN:9780375412882). 2 / 569 = 0.35%; R&D 0.07. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **62.48 → 62.48**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-42f068080cc6"></a>

## Four Seasons: The Story of a Business Philosophy — Isadore Sharp

Sources: 261. Prior review: analysis/analysis_founders_261024_1455.md#shelf-42f068080cc6. 

Added amazon: **497**. [Source](https://www.amazon.com/dp/0143170880); [saved evidence](../data/reuse100b_261102/raw/amazon-0191-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 4.55 | 4.55 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.70; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 302 (OL35347164M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **62.46 → 57.46**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-b377b0e6ee8c"></a>

## Stumbling on Happiness — Daniel Gilbert

Sources: 251, 269, 293, 297, 300, 303. Prior review: analysis/analysis_mcateer_261025_2011.md#shelf-b377b0e6ee8c. 

Added amazon: **3801**. [Source](https://www.amazon.com/dp/1400042666); [saved evidence](../data/reuse100b_261102/raw/amazon-0192-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 8.50 | 4.25 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 8.00 | 6.40 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 2.10 | 2.10 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.00; O15 0.00; REL 4.47; RD 2.53.

R&D inputs: reference pages 35 (ISBN:9781400077427); total pages 277 (OL22732105M). 35 / 277 = 12.64%; R&D 2.53. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.45 → 62.45**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-ad50945784ac"></a>

## Making Great Decisions in Business and Life — David R. Henderson and Charles L. Hooper

Sources: 263. Prior review: analysis/analysis_metadata2_261025_1921.md#shelf-ad50945784ac. 

Added amazon: **43**. [Source](https://www.amazon.com/dp/0976854112); [saved evidence](../data/reuse100b_261102/raw/amazon-0196-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 11.05 | 7.18 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 5.25 | 5.25 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.00; O15 -10.00; REL 0.00; RD 0.49.

R&D inputs: reference pages 7 (CiNii:BA81855665); total pages 287 (OL8589239M). 7 / 287 = 2.44%; R&D 0.49. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.42 → 52.42**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0658"></a>

## The Half-Life of Facts — Samuel Arbesman

Sources: 118, 289. Prior review: analysis/analysis_nikomc_261025_2011.md#g0658. 

Added amazon: **260**. [Source](https://www.amazon.com/dp/159184472X); [saved evidence](../data/reuse100b_261102/raw/amazon-0198-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 -5.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 256 (ISBN:159184472X). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **62.42 → 57.42**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-64-57"></a>

## The Soviet Biological Weapons Program — Milton Leitenberg; Raymond A. Zilinskas; Jens H. Kuhn

Sources: 269. Prior review: analysis/analysis_metadata1000_261025_1546.md#rest-64-57. 

Added amazon: **24**. [Source](https://www.amazon.com/dp/0674047702); [saved evidence](../data/reuse100b_261102/raw/amazon-0205-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 -1.36; P14 -1.40; O15 -10.00; REL 0.00; RD 3.28.

R&D inputs: reference pages 151 (ISBN:9780674047709); total pages 921 (ISBN:9780674047709). 151 / 921 = 16.40%; R&D 3.28. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **62.35 → 52.35**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="nf2ad2a110b"></a>

## Black Holes: The Key to Understanding the Universe — Brian Cox; Jeff Forshaw

Sources: 139, 303. Prior review: analysis/analysis_elitescience_261025_2011.md#nf2ad2a110b. 

Added amazon: **1225**. [Source](https://www.amazon.com/dp/0062936697); [saved evidence](../data/reuse100b_261102/raw/amazon-0141-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.40; O15 0.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 288 (ISBN:9780008390648). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **62.21 → 62.21**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="bg2f942d83e9"></a>

## Collapse — Jared Diamond

Sources: 148, 180, 199, 204, 259, 263, 279, 283, 291, 294, 297, 299. Prior review: analysis/analysis_bretvictor_261025_2011.md#bg2f942d83e9. 

Added amazon: **3628**. [Source](https://www.amazon.com/dp/0143036556); [saved evidence](../data/reuse100b_261102/raw/amazon-0185-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -2.20; O15 0.00; REL 6.63; RD 1.08.

R&D inputs: reference pages 32 (ISBN:0670033375); total pages 592 (ISBN:0143117009). 32 / 592 = 5.41%; R&D 1.08. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.74 → 61.74**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="n8fdc7ed7fa"></a>

## The Elegant Universe — Brian Greene

Sources: 139, 203, 256, 257, 283, 292, 302, 303. Prior review: analysis/analysis_kamdar_261025_2011.md#n8fdc7ed7fa. 

Added amazon: **4208**. [Source](https://www.amazon.com/dp/0393058581); [saved evidence](../data/reuse100b_261102/raw/amazon-0189-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.70; O15 0.00; REL 5.29; RD 0.09.

R&D inputs: reference pages 2 (OL365370M); total pages 448 (ISBN:9780099289920). 2 / 448 = 0.45%; R&D 0.09. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **60.65 → 60.65**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="intake-0216"></a>

## The Secret Lives of Color — Kassia St. Clair

Sources: 212. Prior review: analysis/analysis_metadata1000_261025_1546.md#intake-0216. 

Added amazon: **4596**. [Source](https://www.amazon.com/dp/0143131141); [saved evidence](../data/reuse100b_261102/raw/amazon-0162-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.00; O15 0.00; REL 0.00; RD 1.88.

R&D inputs: reference pages 30 (OL26932840M); total pages 320 (ISBN:9780143131144). 30 / 320 = 9.38%; R&D 1.88. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **59.96 → 59.96**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0734"></a>

## Extra Life — Steven Johnson

Sources: 248. Prior review: analysis/analysis_metadata2_261025_1921.md#progress-0734. 

Added amazon: **332**. [Source](https://www.amazon.com/dp/0525538852); [saved evidence](../data/reuse100b_261102/raw/amazon-0176-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.50; O15 -5.00; REL 0.00; RD 0.46.

R&D inputs: reference pages 10 (Harvard:99155351871003941); total pages 432 (GoogleBooks:BBrZzQEACAAJ). 10 / 432 = 2.31%; R&D 0.46. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **59.84 → 54.84**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1233"></a>

## Breakout Nations: In Pursuit of the Next Economic Miracles — Ruchir Sharma

Sources: 196, 197, 283. Prior review: analysis/analysis_metadata1000_261025_1546.md#rem-u1233. 

Added amazon: **435**. [Source](https://www.amazon.com/dp/0393080269); [saved evidence](../data/reuse100b_261102/raw/amazon-0157-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 5.00 | 5.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 -0.56; P14 -1.40; O15 -5.00; REL 2.83; RD 0.34.

R&D inputs: reference pages 5 (ISBN:9780393080261); total pages 292 (/books/OL40383252M). 5 / 292 = 1.71%; R&D 0.34. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.88 → 51.88**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0441"></a>

## A Beautiful Mind — Sylvia Nasar

Sources: 182, 214, 283, 290, 292. Prior review: analysis/analysis_subcritical_261025_2011.md#rem-u0441. 

Added amazon: **1259**. [Source](https://www.amazon.com/dp/0743224574); [saved evidence](../data/reuse100b_261102/raw/amazon-0161-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.28; P14 -2.80; O15 0.00; REL 4.00; RD 2.16.

R&D inputs: reference pages 50 (GoogleBooks:-xLpDslDLfsC); total pages 464 (/books/OL44145186M). 50 / 464 = 10.78%; R&D 2.16. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.81 → 56.81**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n4fda4a1d71"></a>

## Until the End of Time — Brian Greene

Sources: 139, 204. Prior review: analysis/analysis_scorebonus_261024_0106.md#n4fda4a1d71. 

Added amazon: **3265**. [Source](https://www.amazon.com/dp/1524731676); [saved evidence](../data/reuse100b_261102/raw/amazon-0189-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 5.00 | 5.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 6.00 | 3.60 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.60; O15 0.00; REL 2.00; RD 0.80.

R&D inputs: reference pages 18 (GoogleBooks:2RaZDwAAQBAJ); total pages 448 (ISBN:9780525432173). 18 / 448 = 4.02%; R&D 0.80. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **49.02 → 49.02**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="n7214faee4d"></a>

## Mathematics: The Loss of Certainty — Morris Kline

Sources: 139, 223, 291. Prior review: analysis/analysis_bretvictor_261025_2011.md#n7214faee4d. 

Added amazon: **59**. [Source](https://www.amazon.com/dp/0195030850); [saved evidence](../data/reuse100b_261102/raw/amazon-0147-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -4.60; O15 -10.00; REL 2.83; RD 0.32.

R&D inputs: reference pages 6 (GoogleBooks:RNwnUL33epsC); total pages 376 (ISBN:0195030850). 6 / 376 = 1.60%; R&D 0.32. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **46.63 → 36.63**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="progress-0167"></a>

## The Culture of Education — Jerome Bruner

Sources: 232. Prior review: analysis/analysis_metadata1000_261025_1546.md#progress-0167. 

Added amazon: **46**. [Source](https://www.amazon.com/dp/0674179528); [saved evidence](../data/reuse100b_261102/raw/amazon-0204-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.00; O15 -10.00; REL 0.00; RD 2.17.

R&D inputs: reference pages 26 (ISBN:0674179528); total pages 240 (/books/OL34142388M). 26 / 240 = 10.83%; R&D 2.17. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.36 → 52.36**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bgd79dff6f2a"></a>

## Hive Mind — Garett Jones

Sources: 166, 259. Prior review: analysis/analysis_gwern_261024_1455.md#bgd79dff6f2a. 

Added amazon: **139**. [Source](https://www.amazon.com/dp/0804785961); [saved evidence](../data/reuse100b_261102/raw/amazon-0207-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.10; O15 -5.00; REL 2.00; RD 0.89.

R&D inputs: reference pages 10 (OL27197175M); total pages 224 (9780804797054). 10 / 224 = 4.46%; R&D 0.89. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.33 → 57.33**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="progress-0180"></a>

## A Theory of Fun for Game Design — Raph Koster

Sources: 232, 291. Prior review: analysis/analysis_bretvictor_261025_2011.md#progress-0180. 

Added amazon: **171**. [Source](https://www.amazon.com/dp/1932111972); [saved evidence](../data/reuse100b_261102/raw/amazon-0209-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.20; O15 -5.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 250 (/books/OL8807047M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **62.33 → 57.33**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0825"></a>

## e: The Story of a Number — Eli Maor

Sources: 223, 232. Prior review: analysis/analysis_top500data_261024_1353.md#intake-0825. 

Added amazon: **357**. [Source](https://www.amazon.com/dp/0691168482); [saved evidence](../data/reuse100b_261102/raw/amazon-0213-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.20; O15 -5.00; REL 2.00; RD 0.25.

R&D inputs: reference pages 3 (ISBN:0691033900); total pages 242 (/books/OL7757433M). 3 / 242 = 1.24%; R&D 0.25. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.28 → 57.28**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-da5093cc6970"></a>

## Too Much to Know — Ann M. Blair

Sources: 258. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-da5093cc6970. 

Added amazon: **40**. [Source](https://www.amazon.com/dp/0300112513); [saved evidence](../data/reuse100b_261102/raw/amazon-0215-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 5.95 | 5.95 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 -12.00; P14 -1.60; O15 -10.00; REL 0.00; RD 2.97.

R&D inputs: reference pages 59 (ISBN:9780300112511); total pages 397 (OL24422423M). 59 / 397 = 14.86%; R&D 2.97. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.26 → 52.26**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="resume-189-21"></a>

## The Age of Extraction — Tim Wu

Sources: 272. Prior review: analysis/analysis_cheap100_261101_2340.md#resume-189-21. 

Added amazon: **99**. [Source](https://www.amazon.com/dp/0593321243); [saved evidence](../data/reuse100b_261102/raw/amazon-0218-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.10; O15 -10.00; REL 0.00; RD 1.43.

R&D inputs: reference pages 16 (Source:https://link.deschuteslibrary.org/resource/nypAQyt9S_c); total pages 224 (ISBN:9780593321256). 16 / 224 = 7.14%; R&D 1.43. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.23 → 52.23**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-c6eb891ba416"></a>

## Why The Allies Won — Richard Overy

Sources: 263, 290. Prior review: analysis/analysis_subcritical_261025_2011.md#shelf-c6eb891ba416. 

Added amazon: **657**. [Source](https://www.amazon.com/dp/039331619X); [saved evidence](../data/reuse100b_261102/raw/amazon-0216-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 12.75 | 12.75 |
| Mechanistic and causal depth | 10.20 | 10.20 |
| Information density | 8.00 | 6.40 |
| Durability | 8.55 | 8.55 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 4.75 | 4.75 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.70 | 1.70 |

T11 0.00; T12 -10.00; H13 -3.24; P14 -3.10; O15 -5.00; REL 2.00; RD 0.66.

R&D inputs: reference pages 13 (AWM:LIB54155); total pages 396 (AWM:LIB54155). 13 / 396 = 3.28%; R&D 0.66. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **68.64 → 63.64**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

