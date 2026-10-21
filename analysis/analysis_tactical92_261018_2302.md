# Tactical discovery for scores above 92

**2026-10-18 23:02, Europe/Warsaw. Sources 99–113.** This search found **no book above 92** under the current rules. It fully assessed 12 new nominations and reassessed 3 existing books. All 15 remain eligible and non-vetoed, and all 15 have a verified Amazon aggregate. The strongest new result is **The Origins of Efficiency — 88.18**. The highest reassessed result is **Material World — 91.29**. The current overall leader remains **How the World Really Works — 91.40**. This is a result of this search, not proof that a qualifying book cannot exist.

**Confidence:** high in arithmetic, checked edition identities and recorded count observations; moderate in the book-level assessments. Each work has one final score. Two-decimal display does not remove judgment from criterion attainment. [Calculation data](../data/tactical92_261018.json) · [Amazon evidence](../data/tactical_amazon_evidence_261018.json) · [Rules](../AGENTS.md).

## Exact constraints before search

Let L be the loss from the 100-point positive maximum, and d the magnitude of all five deductions. Then **score>92 exactly when L+d<8**. A ceiling of 92 does not qualify. These constraints can reject a search direction early; they are not extra exclusion rules for nominated books.

| Observed condition | Necessary condition for >92 | Practical implication |
|---|---|---|
| Either T11 or T12 applies | Impossible: ceiling at most 90 | Check the central subject before deep research |
| Amazon count below 100 | Impossible: obscurity loss at least 10 | Verify identity and count, then stop target pursuit |
| Amazon 100–999 | L + publication-age loss + historical-age loss <3 | Needs exceptional positive attainment and a recent original |
| Amazon at least 1,000 | L + publication-age loss + historical-age loss <8 | Main search pool |
| No central historic period; Amazon 100–999 | Original year later than 1996, even if L=0 | Necessary, far from sufficient |
| No central historic period; Amazon at least 1,000 | Original year later than 1946, even if L=0 | Older works cannot reach the strict target |

For a 2020 original with H13=0, the quality-loss budget is less than 7.40 points at 1,000+ ratings and less than 2.40 points at 100–999. E=18 alone loses 3.80 points after the quadratic transform. E=18, S=16 and D=8 together lose 9.341176470588 points, so that combination cannot exceed 92 even before any deduction. E=19 plus a five-point obscurity penalty leaves only 1.05 points for every other quality loss and both age penalties.

More generally, with B=8−d, each quadratic raw criterion must satisfy x>sqrt(m×(m−B)) when 0<B<m, and each linear criterion must satisfy x>m−B. These are individual necessary bounds; their combined losses must still fit B. This gives an early upper-bound test without guessing the final score.

## Realistic search filters and stop rules

1. Prioritize general-reader explanatory books about production, engineering, computing, materials, energy, logistics, reliability and scaling. Use original publication since 2006 as a broad working window; favor 2010 onward where the evidence is comparable. These dates are search priorities, not hard cutoffs.
2. Resolve title, author, original year, contents and audience first. Remove fiction and works whose main purpose is specialist training, procedure or technical reference. Do not exclude a coherent explanation merely because it is useful, difficult or divided into concepts.
3. Establish the central topic, historical endpoint and verified Amazon band. Compute the maximum remaining score before reading more reviews. Prefer 1,000+ ratings, but do not use a missing count as a way around obscurity.
4. Read a substantial excerpt and a signed specialist review. Seek a specific adverse review independently. Look for linked mechanisms, constraints, bottlenecks, complements, incentives, failure modes and limits on inference. Generic enthusiasm and repeated mentions do not verify E, S or M.
5. Assess E/S/D first because their quadratic losses often decide feasibility. Keep their meanings distinct: evidence is not a demand for randomized historical experiments; density is earned length, not ease of reading; authority includes access, practice and synthesis.
6. Stop pursuing the >92 hypothesis when established losses already exhaust the budget. Still finish and record the score of each formally nominated eligible book. Do not turn the search threshold into a new list exclusion.

The current scored corpus showed no raw E20 or D10. That compression warranted checking the reasons behind the marks, not awarding maximum scores to force a result. The reassessments below correct identified criterion mistakes and also retain or add supported reservations.

## Sources beyond Amazon: roles and order

| Source | Best use | What to verify separately |
|---|---|---|
| [Focused Hacker News threads](https://news.ycombinator.com/item?id=42268774) | Find technical cases, engineer objections and follow-up discussion | Votes are discovery signals; inspect every reply in a selected short thread. The [official API](https://github.com/HackerNews/API) exposes child IDs for complete traversal. |
| [Engineering Reddit discussions](https://www.reddit.com/r/MechanicalEngineering/comments/18ucxsq/what_books_not_textbooks_would_you_recommend/) | Ask for narrative engineering books with useful mechanisms | A no-textbooks question still attracts manuals. Anonymous profession claims are not verified expertise. |
| [Roots of Progress bibliography](https://blog.rootsofprogress.org/bibliography); [Construction Physics](https://www.construction-physics.com/p/construction-physics-table-of-contents) | High topical concentration in industrial change, production and technology | These are curated perspectives, not independent factual audits; many old works fail the age/count ceiling. |
| [Five Books expert interviews](https://fivebooks.com/category/technology/) | Follow the expert’s reason for choosing a work, then trace the book | Subject lists mix narrative, fiction and textbooks; expert selection alone does not pass the gates. |
| [LibraryThing](https://www.librarything.com/topic/347682) | Use tags, date ranges and similar books to expand from good seeds | Dates can describe later editions; verify original production at the publisher or library. |
| [The StoryGraph](https://www.thestorygraph.com/); [Goodreads editions](https://www.goodreads.com/work/editions/45489188-algorithms-to-live-by-the-computer-science-of-human-decisions) | Find detailed reader objections and distinguish editions; use nonfiction/topic filters | Reader enjoyment is not technical integrity. Do not substitute these counts for Amazon counts. |
| [Book Marks](https://bookmarks.reviews/bookmarks-how-it-works/) | Locate mixed/negative professional reviews and open the originals | Its early-review window can miss later corrections; review counts are not independent replications. |
| [The Space Review](https://www.thespacereview.com/archive/4130-1.html); [Society of Professional Economists](https://www.spe.org.uk/reading-room/book-reviews/material-world/); [MAA Reviews](https://old.maa.org/press/maa-reviews/the-theory-that-would-not-die) | Use named reviewers to test causal depth, novelty, coverage and errors | A review is evidence about reception, not a complete audit. Read its concrete reservations. |
| [British Academy shortlists](https://www.thebritishacademy.ac.uk/news/british-academy-book-prize-2024-shortlist-announced/); [Royal Society science prize](https://royalsociety.org/medals-and-prizes/science-book-prize/) | Discover researched general nonfiction with serious attention | Many prize books have unwanted central topics or introductory physics; prestige cannot override fit. |

The efficient sequence is **specialist discovery → primary contents/excerpt → age/topic/count ceiling → adverse specialist check → complete scoring**. Amazon is essential to the prescribed obscurity calculation, but weak as the sole source of candidate selection or technical judgment.

Useful targeted queries include `site:news.ycombinator.com "books" "manufacturing"`, `site:reddit.com/r/MechanicalEngineering "books" "not textbooks"`, `"TITLE" review bottlenecks`, `"TITLE" review errors`, and `"TITLE" contents excerpt`. Search dates concern the discussion, not the original book year. Search terms such as logistics or scaling are clues to investigate, not reliable classification rules.

## Tactical allocation and observed search yield

Use expected verified qualifiers per research hour as the objective. The relevant chain is P(eligible) × P(topic/age/count ceiling survives | eligible) × P(positive quality clears remaining budget | surviving). These probabilities are not measured here; attaching precise numbers would invent precision. Start with small batches from distinct source families, record unique new titles and ceiling survivors, then give more effort to sources with demonstrated yield. Maintain some coverage of a different subject family to avoid repeatedly finding the same books.

The social-search packet records 12 inspected sources and 8 distinct candidate leads. Five leads entered this 15-book assessment: The Origins of Efficiency, Liftoff, Reentry, The Things We Make and Mitchell’s Artificial Intelligence. The remaining leads—Why Machines Learn, How to Build a Car and Faster, Better, Cheaper in the History of Manufacturing—were deprioritized pending fit, genre or evidence checks; they are not declared excluded or given invented scores. Broad best-book threads mainly repeated existing classics, fiction, self-help and manuals. Narrow engineering discussions gave more useful new leads. This purposive sample is not a measured population success rate.

| Scouted source | Actual inspection scope | Useful result |
|---|---|---|
| [Scout 1](https://blog.rootsofprogress.org/bibliography) | Opened bibliography and inspected main technology, materials, energy, transport and information sections; 100-title page, not a full nomination. Author explicitly says inclusion does not mean every book is good. | Mostly already assessed books or old historical works. Provides domain vocabulary and adjacent-book discovery; no numerical endorsement imported. |
| [Scout 2](https://www.construction-physics.com/p/construction-physics-table-of-contents) | Search-index overview and relevant book-review links, not entire archive. | Led to The Origins of Efficiency and practitioner reviews. |
| [Scout 3](https://news.ycombinator.com/item?id=10027102) | Opened 486-line high-signal-to-noise thread and inspected selected comment blocks. Not all comments examined. | Many textbooks/manuals and old or already assessed books. Low yield for new >92 candidates under the current hard exclusions. |
| [Scout 4](https://www.reddit.com/r/MechanicalEngineering/comments/18ucxsq/what_books_not_textbooks_would_you_recommend/) | Opened indexed 1,068-line page and inspected main comment blocks through the end of the visible discussion. Collapsed More replies were not fully expanded; no claim of complete thread collection. | The Things We Make; How to Build a Car. Also many existing recommendations, fiction and manuals. |
| [Scout 5](https://news.ycombinator.com/item?id=42268774) | Complete focused comment subtree returned: lead comment plus three replies; not the surrounding annual recommendation thread. | Liftoff and Reentry. Readers praise engineering histories while also noting the working conditions make them unwilling to join SpaceX. |
| [Scout 6](https://www.reddit.com/r/spacex/comments/m9cdrq/interested_in_the_new_spacex_book_liftoff_author/) | Opened indexed author-and-launch-director AMA, 1,764 lines; inspected introduction and relevant search extracts, not all replies. | First-person source-verification channel for Liftoff; no additional titles nominated. |
| [Scout 7](https://www.reddit.com/r/SpaceXLounge/comments/19a4mxr) | Inspected author-reader exchange on narrative structure and historical period; other comments not exhaustively collected. | Berger accepts criticism of Liftoff chronology and says Reentry runs mainly November 2008–2020 with dates and subheadings added. |
| [Scout 8](https://news.ycombinator.com/item?id=20784550) | Search returned main comments from a 14-comment manufacturing thread; not independently verified as complete. | Low yield: explicit manufacturing textbooks and Machinery's Handbook are excluded genres. |
| [Scout 9](https://news.ycombinator.com/item?id=40001222) | Search excerpt of manufacturing-learning discussion. | Faster, Better, Cheaper in the History of Manufacturing, but likely specialist/audience and obscurity obstacles need early checks. |
| [Scout 10](https://news.ycombinator.com/item?id=22736545) | Search excerpt of supply-chain self-study discussion. | The Goal is fiction; Lean Thinking and training books require hard-exclusion review. This search phrasing selects the wrong genre for the user's objective. |
| [Scout 11](https://news.ycombinator.com/item?id=22023490) | Search excerpt of comments on a Bayesian deep-learning article, including a discussion of Mitchell's book. | Artificial Intelligence: A Guide for Thinking Humans; commenter distinguishes explanatory overview from practitioner instruction. |
| [Scout 12](https://news.ycombinator.com/item?id=42508087) | Search excerpt of best-reading-in-2024 thread. | Material World and How the World Really Works, both already in the repository. Repeated praise alone does not warrant a score increase. |

The short HN comment subtree about Liftoff/Reentry was read through its three replies. Large threads and comment sections were only partly inspected where stated above; full coverage is not claimed. The formally nominated sources 99–113 are the specific main book records below, following the repository’s discovery workflow. Scouting pages are not represented as exhaustive source analyses. Incidental titles, related products and bibliographies in supporting pages do not expand this nomination set.

Assessments use publisher records, inspected excerpts and named reviews; they are not claims of full-book reading. Detailed access limits and the research trail are preserved in the [social packet](../data/tactical_social_261018.json), [platform packet](../data/tactical_platform_261018.json), [energy and efficiency packet](../data/tactical_energy_261018.json) and [reassessment packet](../data/tactical_reassessments_constraints_261018.json). Preliminary proposals in those packets are superseded by the final decisions in this report.

## Complete ranked set

A means Amazon stars out of 5 and total ratings, not written reviews. A dash means no separately verified star average. No cross-platform average is invented. Verdict bands retain the previous convention: Recommend≥85; Consider≥75; Selective≥65; Low priority≥50; Poor fit<50. Every eligible book is retained regardless of band. All score confidence levels below are moderate.

| Quality · verdict · confidence | Readers | Author | Original year | Title |
|---|---|---|---:|---|
| **91.29** · Recommend · moderate | [A 4.7/5 · 3,305](https://www.amazon.com.au/dp/0593467426) | Ed Conway | 2023 | [Material World](https://www.amazon.com/dp/0593467426) |
| **90.70** · Recommend · moderate | [A 4.7/5 · 1,061](https://www.amazon.com/dp/1541617622) | Virginia Postrel | 2020 | [The Fabric of Civilization](https://www.amazon.com/dp/1541617622) |
| **88.39** · Recommend · moderate | [A 4.5/5 · 1,203](https://www.amazon.com.au/dp/0262536161) | Vaclav Smil | 1994 | [Energy and Civilization](https://www.amazon.com/dp/0262536161) |
| **88.18** · Recommend · moderate | [A 4.6/5 · 186](https://www.amazon.com.au/dp/1953953522) | Brian Potter | 2025 | [The Origins of Efficiency](https://www.amazon.com/dp/1953953522) |
| **87.95** · Recommend · moderate | [A —/5 · 6,642](https://www.amazon.com/dp/0007547978) | Brian Christian; Tom Griffiths | 2016 | [Algorithms to Live By](https://www.amazon.com/dp/1250118360) |
| **87.68** · Recommend · moderate | [A 4.8/5 · 3,589](https://www.amazon.com.au/dp/0062979973) | Eric Berger | 2021 | [Liftoff](https://www.amazon.com/dp/0062979981) |
| **87.61** · Recommend · moderate | [A 4.6/5 · 716](https://www.amazon.com.au/dp/0393635821) | Brian Christian | 2020 | [The Alignment Problem](https://www.amazon.com/dp/0393868338) |
| **85.97** · Recommend · moderate | [A 4.4/5 · 443](https://www.amazon.com.au/dp/1728280451) | Bill Hammack | 2023 | [The Things We Make](https://www.amazon.com/dp/1728280451) |
| **84.98** · Consider · moderate | [A 4.6/5 · 1,344](https://www.amazon.it/dp/0374257833) | Melanie Mitchell | 2019 | [Artificial Intelligence](https://www.amazon.com/dp/1250758041) |
| **84.91** · Consider · moderate | [A 4.7/5 · 864](https://www.amazon.com.au/dp/1637745273) | Eric Berger | 2024 | [Reentry](https://www.amazon.com/dp/1637745273) |
| **84.19** · Consider · moderate | [A —/5 · 450](https://www.amazon.com/dp/1324130725) | David Spiegelhalter | 2024 | [The Art of Uncertainty](https://www.amazon.com/dp/1324130725) |
| **83.35** · Consider · moderate | [A 4.7/5 · 327](https://www.amazon.com.au/dp/1250222699) | Stuart Ritchie | 2020 | [Science Fictions](https://www.amazon.com/dp/1250841860) |
| **82.09** · Consider · moderate | [A 4.5/5 · 589](https://www.amazon.com.au/dp/014100763X) | Steven Strogatz | 2003 | [Sync](https://www.amazon.com/dp/0786887214) |
| **78.13** · Consider · moderate | [A 4.6/5 · 840](https://www.amazon.com.au/dp/0141989300) | Stanislas Dehaene | 2018 | [How We Learn](https://www.amazon.com/dp/0525559906) |
| **74.77** · Selective · moderate | [A 4.2/5 · 928](https://www.amazon.com.au/dp/0300188226) | Sharon Bertsch McGrayne | 2011 | [The Theory That Would Not Die](https://www.amazon.com/dp/0300188226) |

Original year means the production origin used for rule 14. Energy and Civilization is the 2017 named title of a major revision whose origin is1994; the main recommendation list retains the title’s 2017 bibliographic year, while the calculation explicitly uses 1994. Translations, new prefaces and paperbacks do not reset age. Purchase editions are paperback except The Origins of Efficiency and Reentry, for which only hardcovers were verified. Amazon.de is used where its matching page was verified; otherwise Amazon.com is the access fallback. Failed German retrieval is not proof of no German availability. Verified edition identity does not establish current stock at every linked marketplace.

## What changed in existing recommendations

| Book | Prior current score | New score | Evidence-led change |
|---|---:|---:|---|
| [Material World](analysis_physcanon_261018_0147.md#p077) | 89.59 | 91.29 | D: 8 → 9. New structural and review evidence supports earned length; old rationale named no substantial padding. A: 4 → 4.5. Credit documented access and substantive specialist reception under the actual criterion. P: 2 → 1.5. New primary-text inspection shows looseness between elements and compounds and an overstated organizing metaphor. |
| [The Fabric of Civilization](analysis_widerd_261018_2208.md) | 90.70 | 90.70 | A: 4 → 4.5. Remove an unsupported own-research ceiling; credit documented access and specialist engagement. N: 3 → 2.5. New adverse reviews identify real limits of process exposition and continuity. |
| [Energy and Civilization](analysis_pastefollow_261018_0130.md#f059) | 87.49 | 88.39 | D: 7 → 9. Correct the prior use of reading difficulty as a density defect; new reviews support earned detail. P14: -0.9 → -3.2. Use the documented 1994 original-work lineage, rather than the 2017 revised title. |

These three books were checked again against both hard exclusions and all vetoes. Their production mechanisms remain transferable; no serious central factual failure or ideological dependence was established. Local errors and interpretive limits reduce positive attainment rather than automatically triggering V1. Original source numbers and entry dates are preserved, with the new source appended. Earlier analyses remain historical records.

## Amazon retrieval: reproducible evidence

Begin with the publisher’s identified English print ISBN, derive or verify its ASIN, and inspect matching public product records across .com, .it, .de and .com.au. Require matching title and author, reject a conflicting language, and extract the product’s total-rating aggregate. Where both top and global counters appear, require agreement. Reject blank challenge pages and unavailable products. Record URL, ASIN, market, timestamp, title/byline, count snippet and response hash. Do not infer a count from written-review totals or search snippets about an unrelated product.

Selection follows the existing repository method: the largest actually observed verified aggregate for one matching English product on this review date. Counts are never summed. The fresh retrieval file is preserved separately from the combined evidence packet. For Fabric, the earlier same-day US product showed 1,061; Italy showed 998 both then and now. The later US response was blank, so it did not supersede the verified 1,061 with a lower US observation. The preserved US timestamp, product and associated 4.7 stars are used together. This market difference warrants clear provenance; it does not authorize adding counts.

| Work | Selected verified aggregate | ASIN | Observed counts | O15 |
|---|---|---|---|---:|
| Material World | [3,305 · www.amazon.com.au](https://www.amazon.com.au/dp/0593467426) | 0593467426 | 3305 | 0.00 |
| The Fabric of Civilization | [1,061 · www.amazon.com](https://www.amazon.com/dp/1541617622) | 1541617622 | 998, 1061 | 0.00 |
| Energy and Civilization | [1,203 · www.amazon.com.au](https://www.amazon.com.au/dp/0262536161) | 0262536161 | 1203 | 0.00 |
| The Origins of Efficiency | [186 · www.amazon.com.au](https://www.amazon.com.au/dp/1953953522) | 1953953522 | 186 | -5.00 |
| Algorithms to Live By | [6,642 · www.amazon.com](https://www.amazon.com/dp/0007547978) | 0007547978 | 6472, 6642 | 0.00 |
| Liftoff | [3,589 · www.amazon.com.au](https://www.amazon.com.au/dp/0062979973) | 0062979973 | 3589 | 0.00 |
| The Alignment Problem | [716 · www.amazon.com.au](https://www.amazon.com.au/dp/0393635821) | 0393635821 | 271, 716 | -5.00 |
| The Things We Make | [443 · www.amazon.com.au](https://www.amazon.com.au/dp/1728280451) | 1728280451 | 443 | -5.00 |
| Artificial Intelligence | [1,344 · www.amazon.it](https://www.amazon.it/dp/0374257833) | 0374257833 | 1343, 1344 | 0.00 |
| Reentry | [864 · www.amazon.com.au](https://www.amazon.com.au/dp/1637745273) | 1637745273 | 864 | -5.00 |
| The Art of Uncertainty | [450 · www.amazon.com](https://www.amazon.com/dp/1324130725) | 1324130725 | 441, 443, 450 | -5.00 |
| Science Fictions | [327 · www.amazon.com.au](https://www.amazon.com.au/dp/1250222699) | 1250222699 | 289, 327 | -5.00 |
| Sync | [589 · www.amazon.com.au](https://www.amazon.com.au/dp/014100763X) | 014100763X | 589 | -5.00 |
| How We Learn | [840 · www.amazon.com.au](https://www.amazon.com.au/dp/0141989300) | 0141989300 | 840 | -5.00 |
| The Theory That Would Not Die | [928 · www.amazon.com.au](https://www.amazon.com.au/dp/0300188226) | 0300188226 | 928 | -5.00 |

The Origins of Efficiency and The Alignment Problem lose five points at 186 and 716 ratings. Neither has a missing-count fallback. Both are useful future count-band checks: excluding O15, their other assessed losses total less than eight points. Their present verified counts therefore decide the current target failure. A future assessment must verify the new count and update age and evidence; no unobserved increase is assumed.

## Formula and complete criterion assessments

`total = E²/20 + S²/17 + U + M + D²/10 + R + F + A + N + P + T11 + T12 + H13 + P14 + O15`.

Only E, S and D are quadratic. H13 uses the central period’s end at 1 point per 25 years, capped at 12. P14 uses original production at 1 point per 10 years, capped at 10. Both use fractional years measured against 2026. T11 and T12 apply separately. Liftoff uses 2008 and Reentry 2020 as historical endpoints, high confidence. All other nominations explain broad cross-period or ongoing systems without one central historic interval. Sorting and the strict >92 test use unrounded values; criterion contributions and totals display two decimals. Migrated M=192/17 remains exact in Material World and Energy and Civilization.

<a id="material"></a>
## Source 110 — Material World

**Ed Conway; production origin 2023. 91.29 — Recommend; moderate confidence. Reassessment; contributing sources 8, 9, 11, 12, 110.**

Evidence: [nominated record](https://penguinrandomhousehighereducation.com/2023/11/16/excerpt-from-material-world/); [Official publisher excerpt](https://penguinrandomhousehighereducation.com/2023/11/16/excerpt-from-material-world/); [Arno Hantzsche, Society of Professional Economists](https://www.spe.org.uk/reading-room/book-reviews/material-world/); [British Academy shortlist announcement](https://www.thebritishacademy.ac.uk/news/british-academy-book-prize-2024-shortlist-announced/); [Kirkus](https://www.kirkusreviews.com/book-reviews/ed-conway/material-world-six-raw-materials/); [Lloyd Earickson, IGC Publishing](https://igcpublishing.com/2024/06/20/material-world-review/); [Google Books contents](https://books.google.com/books/about/Material_World.html?id=BSesEAAAQBAJ); [Hull and colleagues, Science2020: Chicxulub timescale](https://escholarship.org/content/qt5sr2q5tr/qt5sr2q5tr_noSplash_4747c20fd8550f0d921ed121688eb3c7.pdf).

Six material chains connect extraction, transformation, energy, specialist suppliers and global production. New professional and academic-prize attention supports earned length and access. Primary-text spot checks also found local mistakes; the new attention does not justify perfect evidence marks.

**Strongest objection:** The publisher excerpt has a wrong geological time interval and loose silicon/silica wording. The sharp material/ethereal contrast also overstates the distinction. These are bounded flaws, not proof that the central supply-chain account fails.

**Hard exclusions and vetoes:** Sustained explanatory nonfiction for general readers, not a processing manual. The isolated chronology error does not invalidate the central industrial-dependency account, so no V1. No serious V2-V5 established. Environmental impacts are auxiliary constraints, not the predominant subject or activist purpose.

Prior evidence: [original detailed assessment](analysis_physcanon_261018_0147.md#p077); [current rules11–15 baseline](analysis_pubcap_261018_2125.md). D: New structural and review evidence supports earned length; old rationale named no substantial padding. A: Credit documented access and substantive specialist reception under the actual criterion. P: New primary-text inspection shows looseness between elements and compounds and an overstated organizing metaphor. Unchanged criterion attainments are reassessed and justified below; repetition of recommendations is not independent validation.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 18.00 | 16.20 | Retain 18 with a corrected rationale: primary reporting and explicit uncertainty support the core material-supply account. The official excerpt contains a peripheral chronology error, comparing a 29 Ma event with the dinosaur impact 60 million years earlier. E does not require a fully quantified causal model. |
| S · Systems integration | 17.00 | 17.00 | 17.00 | Retain 17: geology, transformation processes, energy, capital, specialization and global supply dependence form a connected explanation. |
| U · Transferable strategic utility | 15.00 | 14.00 | 14.00 | Retain 14: scarcity of suitable inputs, concentrated suppliers and scaling constraints transfer well. The SPE review identifies risk modelling and policy choices that remain open. |
| M · Mechanistic and causal depth | 12.00 | 11.29 | 11.29 | Retain 11.294117647058824: preserve the prior attainment while recognizing that production links are concrete but some technical explanations are introductory. The new review evidence does not justify altering this migrated allocation. |
| D · Information density and length justification | 10.00 | 9.00 | 8.10 | Raise 8 to 9: the contents and new reviews support distinct extraction, transformation, distribution and recycling material across the six chains. Length alone is not padding. Repeated reminders of material dependence prevent a maximum. |
| R · Durability and resistance to hype | 9.00 | 9.00 | 9.00 | Retain 9: material properties and industrial interdependence are durable, even as current production shares change. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Retain 7: directly addresses industrial inputs, supply chains, production and technological scale. |
| A · Expert authority and intellectual standing | 5.00 | 4.50 | 4.50 | Raise 4 to 4.5: new British Academy and Society of Professional Economists attention supports research, access and unusual synthesis. A technical doctorate or original laboratory programme is not required by the rubric. |
| N · Narrative architecture and clarity | 3.00 | 3.00 | 3.00 | Retain 3: the material-based structure gives a clear route through a complex system; specialist and trade reviews support its readability. |
| P · Authorial precision and finesse | 2.00 | 1.50 | 1.50 | Lower 2 to 1.5: the inspected excerpt slides between silicon and silica and uses an overdrawn ethereal/material contrast. This is a conceptual-wording limitation, separate from the dated-event error charged under E. |

Contemporary and cross-period material systems, not one bounded historic episode. Original 2023. Matching Amazon count verified above 1000 in the linked evidence packet.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 91.59 | 0.00 | 0.00 | 0.00 | -0.30 | 0.00 | **91.29** |

Amazon: [3,305 total ratings](https://www.amazon.com.au/dp/0593467426), ASIN 0593467426; observed 2026-10-18T20:48:00.526Z. Purchase edition: [0593467426](https://www.amazon.com/dp/0593467426), paperback. Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

<a id="fabric"></a>
## Source 111 — The Fabric of Civilization

**Virginia Postrel; production origin 2020. 90.70 — Recommend; moderate confidence. Reassessment; contributing sources 55, 111.**

Evidence: [nominated record](https://www.hachettebookgroup.com/titles/virginia-postrel/the-fabric-of-civilization/9781541617629/); [Primary endnotes](https://www.vpostrel.com/the-fabric-of-civilization/references); [Claire Nesbitt, Antiquity](https://www.cambridge.org/core/journals/antiquity/article/new-book-chronicle/606437ADD7F560F554D915AC1C534A55); [David Chaffetz, Asian Review of Books](https://asianreviewofbooks.com/content/the-fabric-of-civilization-how-textiles-made-the-world-by-virginia-postrel/); [Publishers Weekly](https://www.publishersweekly.com/978-1-5416-1760-5); [Book Marks: original-review links and excerpts](https://bookmarks.reviews/reviews/all/the-fabric-of-civilization-how-textiles-made-the-world/).

The textile production sequence joins materials, labour, machinery, chemistry and exchange. The primary notes acknowledge uncertainty and competing explanations. New specialist and adverse reviews support the synthesis while identifying concrete exposition limits.

**Strongest objection:** A primary endnote converts 1,836,000 inches to 34.9 miles; the correct conversion is 28.98 miles. Reviews also identify difficult process descriptions and digressions. A controlled historical experiment is not required by the rubric.

**Hard exclusions and vetoes:** A sustained general-reader explanatory history, not a textile training manual. The arithmetic error is peripheral and does not establish V1. Political preferences noted by a reviewer do not establish dependence on allegiance; the notes engage competing explanations. No V2-V5 is established at a serious level. V3 is clearly passed through production mechanisms.

Prior evidence: [original detailed assessment](analysis_widerd_261018_2208.md); [current rules11–15 baseline](analysis_pubcap_261018_2125.md). A: Remove an unsupported own-research ceiling; credit documented access and specialist engagement. N: New adverse reviews identify real limits of process exposition and continuity. Unchanged criterion attainments are reassessed and justified below; repetition of recommendations is not independent validation.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 18.00 | 16.20 | Primary endnotes expose sources, calculations, uncertainty and competing interpretations. Retain 18: a spot-check of chapter 2 note 16 finds 1,836,000 in converted to 34.9 mi instead of 28.98 mi; broad causal claims and labour coverage also warrant care. |
| S · Systems integration | 17.00 | 17.00 | 17.00 | Retain 17: the production sequence connects biological materials, labour, mathematics, machinery, chemistry, trade and institutions. |
| U · Transferable strategic utility | 15.00 | 14.00 | 14.00 | Retain 14: bottlenecks, process improvement, specialized complements and demand transfer across industries. Some civilizational associations do less work than the concrete production cases. |
| M · Mechanistic and causal depth | 12.00 | 11.00 | 11.00 | Retain 11: the book explains manufacturing steps and labour constraints. Its larger claims about the causes of civilizational change remain less fully separated from correlation. |
| D · Information density and length justification | 10.00 | 9.00 | 8.10 | Retain 9: seven process-based chapters earn a compact structure. Chaffetz identifies finance passages that drift from the strongest technical explanations, so maximum density is not supported. |
| R · Durability and resistance to hype | 9.00 | 9.00 | 9.00 | Retain 9: its main value concerns durable production and exchange mechanisms rather than forecasts. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Retain 7: manufacturing, scaling, process technology and industrial interdependence are directly relevant. |
| A · Expert authority and intellectual standing | 5.00 | 4.50 | 4.50 | Raise 4 to 4.5: explicit specialist interviews and substantive Antiquity assessment support unusual synthesis and access. The old requirement for the author's own technical research programme is not in the rubric. |
| N · Narrative architecture and clarity | 3.00 | 2.50 | 2.50 | Lower 3 to 2.5: the overall sequence is strong, but Chaffetz and Thomas independently identify difficult process descriptions and digressions. For this reader the diagrams help, yet the concrete clarity objections deserve some weight. |
| P · Authorial precision and finesse | 2.00 | 2.00 | 2.00 | Retain 2: precise terms and distinctions generally support the account. The specific arithmetic error is charged to evidence, not counted again as a prose defect. |

Cross-period global production account; institutions and politics are auxiliary. Original 2020. The preserved same-day matching US Amazon aggregate is1,061; O15=0.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 91.30 | 0.00 | 0.00 | 0.00 | -0.60 | 0.00 | **90.70** |

Amazon: [1,061 total ratings](https://www.amazon.com/dp/1541617622), ASIN 1541617622; observed 2026-10-18T20:00:40.498Z. Purchase edition: [1541617622](https://www.amazon.com/dp/1541617622), paperback. Linked product page verified. No missing-count fallback.

<a id="energy"></a>
## Source 112 — Energy and Civilization

**Vaclav Smil; production origin 1994. 88.39 — Recommend; moderate confidence. Reassessment; contributing sources 10, 11, 112.**

Evidence: [nominated record](https://mitpress.mit.edu/9780262035774/energy-and-civilization/); [Author's preface, official MIT Press Scholarship Online distribution](https://academic.oup.com/mit-press-scholarship-online/book/13253/chapter-abstract/166570345); [Signed engineering-publication review: Dominic Lenton, September 5, 2017](https://eandt.theiet.org/2017/09/05/book-review-energy-and-civilization-history-vaclav-smil); [Charles R. Warren's accepted specialist review, Local Environment, 2018](https://research-repository.st-andrews.ac.uk/bitstream/handle/10023/16970/Warren_2018_LE_Smilreview_AAM.pdf?sequence=1); [Adverse signed specialist review: Roberto Cantoni, Journal of Energy History, 2018, issue 1](https://stm.cairn.info/journal-of-energy-history-2018-1-page-1i?lang=en); [National Diet Library edition record](https://ndlsearch.ndl.go.jp/books/R100000002-I027957012).

Physical energy conversion, power density and infrastructure constraints are connected across agriculture and industry. Engineering and historical reviews support the quantitative scope. The author explicitly limits energetic determinism. Evidence scopes for partially accessible reviews are recorded in data/tactical_energy_261018.json.

**Strongest objection:** Cantoni questions the selection of historical causes and the limited account of human agency. Warren praises the data but finds factual overload. These support retained evidence, mechanism and clarity reservations, not a low density score merely because the book is demanding.

**Hard exclusions and vetoes:** Sustained interdisciplinary explanatory history for readers beyond specialist training. Calculations, detail and use in teaching do not make the book instructional. The adverse review identifies interpretive limitations but does not establish a serious central factual failure. Other specialist evidence confirms that the author expressly limits energy determinism. Do not treat either praise or criticism alone as conclusive.

Prior evidence: [original detailed assessment](analysis_pastefollow_261018_0130.md#f059); [current rules11–15 baseline](analysis_pubcap_261018_2125.md). D: Correct the prior use of reading difficulty as a density defect; new reviews support earned detail. P14: Use the documented 1994 original-work lineage, rather than the 2017 revised title. Unchanged criterion attainments are reassessed and justified below; repetition of recommendations is not independent validation.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 18.00 | 16.20 | Retain 18. Quantitative source synthesis is strong, and explicit limits on energy-based explanation matter. Historical reconstruction and contested framing still prevent a near-perfect empirical-integrity claim. The new reviews do not audit all estimates or resolve the adverse historian's causal reservations. |
| S · Systems integration | 17.00 | 17.00 | 17.00 | Retain 17. Physical energy, conversion technology, agricultural production, transport, industrial scale and economic development are connected throughout the account. The rubric requires integration of several relevant layers, not exhaustive coverage of every social-history subfield. Limited human agency is still a constraint on the scope of the causal explanation. |
| U · Transferable strategic utility | 15.00 | 14.00 | 14.00 | Retain 14. Orders of magnitude, power density, conversion losses and infrastructure inertia transfer broadly. These constraints are more directly reusable than the book's ability to explain which political choices prevail. |
| M · Mechanistic and causal depth | 12.00 | 11.29 | 11.29 | Retain 11.294117647058824. Strong mechanisms of energy conversion, productive limits and technology diffusion. Do not raise this to 12 while specialist criticism of historical context and causal selection remains unresolved. |
| D · Information density and length justification | 10.00 | 9.00 | 8.10 | Raise 7 to 9. The earlier reason was density and reading difficulty, which misapplies this criterion. New reviews, including the adverse review, support a large amount of useful information in a coherent account. Boxes reduce disruption. Keep a one-point loss because the wide catalog of technical comparisons does not always yield an equally strong integrated historical explanation; there is no complete chapter-by-chapter audit establishing perfect economy. |
| R · Durability and resistance to hype | 9.00 | 9.00 | 9.00 | Retain 9. Long-run physical and infrastructure constraints provide durable value even as current energy shares change. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Retain 7. Energy, engineering, industry, production and the material basis of civilization are central. |
| A · Expert authority and intellectual standing | 5.00 | 5.00 | 5.00 | Retain 5. Established specialist synthesis with sustained serious engagement, including critical attention rather than only publicity blurbs. |
| N · Narrative architecture and clarity | 3.00 | 2.00 | 2.00 | Retain 2. Clear overall chronology and helpful boxes coexist with factual overload and a demanding reading experience. This is the appropriate place to retain the prior reading-access reservation. |
| P · Authorial precision and finesse | 2.00 | 2.00 | 2.00 | Retain 2. The conceptual and quantitative language is disciplined. Dryness is not imprecision. |

T11=T12=H13=0: energy systems across broad periods are central. MIT Press and the National Diet Library classify the 2017 title as an expanded revision of Energy in World History (1994). Smil calls it a substantially new book with a new title and describes the extensive enlargement. This is real counterevidence to treating the texts as interchangeable, but it does not erase the documented revision lineage under rule 14. The scoring origin is1994 and P14=-3.20. The named title remains dated 2017 in the main list. The two nominated texts retain separate content and reader evidence.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 91.59 | 0.00 | 0.00 | 0.00 | -3.20 | 0.00 | **88.39** |

Amazon: [1,203 total ratings](https://www.amazon.com.au/dp/0262536161), ASIN 0262536161; observed 2026-10-18T20:48:04.860Z. Purchase edition: [0262536161](https://www.amazon.com/dp/0262536161), paperback (2018 edition of the 2017 revision). Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

<a id="efficiency"></a>
## Source 99 — The Origins of Efficiency

**Brian Potter; production origin 2025. 88.18 — Recommend; moderate confidence. New nomination.**

Evidence: [nominated record](https://books.google.com/books/about/The_Origins_of_Efficiency.html?id=YRZ4EQAAQBAJ); [Publisher chapter excerpt](https://assets.stripeassets.com/fzn2n1nzq965/5jlLbEZjWfQl635f1GdGLJ/9faaf48b9d2266bc61b11ed84d90b5ad/ORIGINS-OF-EFFICIENCY-ZINE.pdf); [Michael Watson, operations review](https://miketalksai.substack.com/p/brian-potters-the-origins-of-efficiency); [Scott Hampton, manufacturing review](https://www.cdm.expert/blog/originsefficiency); [Tom MacWright, adverse review](https://macwright.com/2026/04/19/origins-of-efficiency).

A common production model connects physical transformations, throughput, inventory and product design. The detailed practitioner reviews identify actual tradeoffs and failed improvements. Read the main text across the 20-page publisher Chapter 1 excerpt and the full accessible Watson, Hampton and MacWright reviews. This is not a full-book reading or an audit of all historical source notes.

**Strongest objection:** A direct reader found repetitive theory and weak alternation between framework and cases. One positive reviewer explicitly selects only books he likes. These are reasons to inspect specific mechanisms rather than count favourable reviews.

**Hard exclusions and vetoes:** The observed purpose and structure explain how production efficiency developed through mechanisms and historical cases. No exercises, certification sequence or operating procedure dominate the inspected material. Full contents would strengthen the judgment; practical utility and classroom adoption alone do not trigger rule 2. No serious factual failure or necessary ideological premise established. Publisher/funder affiliations by themselves do not prove ideological capture.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 19.00 | 18.05 | 19: The excerpt shows bounded claims, explicit simplifications and concrete history; specialist readers confirm detailed research. Not 20: no full audit of the historical source chain or broad record of correction and rebuttal was available. |
| S · Systems integration | 17.00 | 17.00 | 17.00 | 17: Physical transformations, process engineering, labor, inventory, product design, transport, markets and scale are connected through a common production account. Stronger than merely listing industries. |
| U · Transferable strategic utility | 15.00 | 15.00 | 15.00 | 15: The central classifications and tradeoffs are designed to explain recurrent gains across industries. Practitioner and teaching use independently supports transfer. |
| M · Mechanistic and causal depth | 12.00 | 12.00 | 12.00 | 12: The available chapter and detailed reviews directly explain constraints, queues, variation, coupled production steps and why apparent improvements can fail. Full attainment here does not imply perfect historical evidence in E. |
| D · Information density and length justification | 10.00 | 8.50 | 7.23 | 8.5: Concrete cases support the length, but a direct reader's account of repeated theory and uneven theory/example balance is real contrary evidence. Do not erase it to reach the target. |
| R · Durability and resistance to hype | 9.00 | 9.00 | 9.00 | 9: Production constraints and mechanisms should survive present firms and policy fashions. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | 7: Direct match to production, industrial quality, engineering, logistics and improvement. |
| A · Expert authority and intellectual standing | 5.00 | 4.00 | 4.00 | 4: Relevant engineering practice and useful unusual synthesis, with some direct expert engagement. A recent first book has not yet accumulated the same specialist record as Smil's established synthesis. |
| N · Narrative architecture and clarity | 3.00 | 2.50 | 2.50 | 2.5: A clear framework joins the material, but the alternating structure does not work equally well for all readers. |
| P · Authorial precision and finesse | 2.00 | 1.50 | 1.50 | 1.5: The sample is concrete and conceptually careful, while repeated or obvious formulations reported by the adverse reader prevent full prose-finesse attainment. |

Production and improvement are central; political and financial matters are auxiliary. T11=T12=0. Cross-period mechanisms give H13=0. P14 uses the 2025 original; 186 observed Amazon ratings give O15=-5.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 93.28 | 0.00 | 0.00 | 0.00 | -0.10 | -5.00 | **88.18** |

Amazon: [186 total ratings](https://www.amazon.com.au/dp/1953953522), ASIN 1953953522; observed 2026-10-18T20:43:57.684Z. Purchase edition: [1953953522](https://www.amazon.com/dp/1953953522), hardcover; no English paperback verified. Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

<a id="algorithms"></a>
## Source 113 — Algorithms to Live By

**Brian Christian; Tom Griffiths; production origin 2016. 87.95 — Recommend; moderate confidence. New nomination.**

Evidence: [nominated record](https://us.macmillan.com/books/9781627790369/algorithmstoliveby/); [Russ Allbery, full review by a computer-science reader](https://www.eyrie.org/~eagle/reviews/books/1-62779-037-3.html); [Author's original-year and scope record](https://brianchristian.org/algorithms-to-live-by/); [Publisher introduction and original 2016 publication](https://us.macmillan.com/books/9781627790369/algorithmstoliveby/).

The publisher introduction develops a general argument about decisions under limited time, information and computational resources. Allbery reports that chapters explain algorithms, compare human decisions and examine empirical studies; their explanatory value survives even where practical advice adds little. This supports eligibility as narrative computational science. Its main limit is the gap between a formal optimum and a realistic decision problem.

**Strongest objection:** Optimal-stopping prescriptions can sound more generally valid than their assumptions allow. Familiar computer-science concepts and thin coverage of industrial institutions also limit the incremental value for this reader.

**Hard exclusions and vetoes:** Pass hard rule 2 with moderate confidence. The strongest exclusion evidence is the explicit promise of practical guidance for everyday decisions. However, the full stated argument and independently described chapter structure prioritize explaining computational problems, constraints and human cognition. Practical applications do not establish instructional primacy. This supersedes the earlier proposed exclusion, which over-weighted practical marketing and method-labelled chapters. No serious veto is established.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 18.50 | 17.11 | Established computational results support the argument, and a technically experienced reviewer finds few errors in familiar topics; mapping ideal assumptions to ordinary decisions is sometimes too confident. |
| S · Systems integration | 17.00 | 15.00 | 13.24 | Connects computing, mathematical decision problems, cognitive science, operations research and everyday coordination; production and large institutions receive less attention. |
| U · Transferable strategic utility | 15.00 | 14.00 | 14.00 | Resource limits, exploration, scheduling and approximate decisions offer reusable heuristics, although several concepts will be familiar to this reader. |
| M · Mechanistic and causal depth | 12.00 | 11.00 | 11.00 | Explains problem structure, computational constraints and tradeoffs; real-world applications do not always retain the assumptions of the formal result. |
| D · Information density and length justification | 10.00 | 9.00 | 8.10 | Compact chapter development and clear examples sustain useful content; some introductory material has lower novelty for an experienced modeller. |
| R · Durability and resistance to hype | 9.00 | 9.00 | 9.00 | The core results concern enduring constraints on computation and decision making, rather than a current technology cycle. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Computing, quantification, resource allocation and efficient heuristics directly fit the stated interests. |
| A · Expert authority and intellectual standing | 5.00 | 5.00 | 5.00 | Griffiths supplies direct research authority in computational cognition, complemented by Christian's synthesis and practitioner scrutiny. |
| N · Narrative architecture and clarity | 3.00 | 3.00 | 3.00 | Eleven connected problem families support a cumulative argument about bounded decisions. |
| P · Authorial precision and finesse | 2.00 | 1.50 | 1.50 | Clear and controlled explanation overall; categorical promises about optimal everyday choices occasionally exceed the stated model assumptions. |

Computational decision problems and resource constraints are central. Philosophical implications and daily-life advice support the explanatory argument rather than make it a philosophical treatise. T11=T12=0. It is not about a bounded historical period, so H13=0. P14 uses the original 2016 work; the US paperback published in 2017 does not reset age.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 88.95 | 0.00 | 0.00 | 0.00 | -1.00 | 0.00 | **87.95** |

Amazon: [6,642 total ratings](https://www.amazon.com/dp/0007547978), ASIN 0007547978; observed 2026-10-18T20:59:05.808Z. Purchase edition: [1250118360](https://www.amazon.com/dp/1250118360), paperback. Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

<a id="liftoff"></a>
## Source 101 — Liftoff

**Eric Berger; production origin 2021. 87.68 — Recommend; moderate confidence. New nomination.**

Evidence: [nominated record](https://books.google.com/books/about/Liftoff.html?id=DQ7jDwAAQBAJ); [Primary excerpt](https://arstechnica.com/science/2021/03/after-two-failures-spacex-needed-a-win-in-2008-would-it-get-one/); [Jeff Foust, The Space Review](https://www.thespacereview.com/archive/4130-1.html); [Author on narrative chronology](https://www.reddit.com/r/SpaceXLounge/comments/19a4mxr); [Gary Schroeder, critical review](https://www.gschroeder.com/blog/2023/6/29/notes-on-liftoff-by-eric-berger).

The excerpt traces a physical failure through a changed engine design to residual thrust and stage collision, then shows diagnosis using data. Foust confirms extensive interviews with engineers as well as executives, and links launch-site constraints to company development. Evidence scope: Read the accessible Chapter 8 excerpt; Foust review; publisher-supplied description; signed adverse reader review; selected author AMA/comment material. Not the full book.

**Strongest objection:** Gary Schroeder challenges inferences from company success to the founder's management quality. The primary excerpt contains substantial island-life anecdotes before its technical episode. Berger accepts a reader's criticism of Liftoff's flashback structure in the linked Reentry announcement discussion.

**Hard exclusions and vetoes:** Pass hard exclusions: narrative technological history rather than instructions. No serious veto established. Do not equate Musk's prominence with political ideology in the book.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 18.50 | 17.11 | Detailed source access, but retrospective selection and heroic framing limit causal confidence. |
| S · Systems integration | 17.00 | 16.00 | 15.06 | Strong engineering, logistics, finance, institutions and organization within one development programme. |
| U · Transferable strategic utility | 15.00 | 14.00 | 14.00 | Reusable testing, failure-learning and constraint-management lessons; not every management inference transfers. |
| M · Mechanistic and causal depth | 12.00 | 11.00 | 11.00 | Specific physical and organizational causal chains, short of a full technical or comparative causal treatment. |
| D · Information density and length justification | 10.00 | 8.50 | 7.23 | Relevant technical scenes coexist with appreciable lifestyle and personality material. |
| R · Durability and resistance to hype | 9.00 | 9.00 | 9.00 | Established development history retains value independently of current launch publicity. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Direct aerospace engineering, scaling and scientific-organization fit. |
| A · Expert authority and intellectual standing | 5.00 | 4.50 | 4.50 | Specialist space reporter with sustained access and signed specialist reception. |
| N · Narrative architecture and clarity | 3.00 | 2.50 | 2.50 | Clear launch arc but author-acknowledged chronology/flashback friction. |
| P · Authorial precision and finesse | 2.00 | 1.50 | 1.50 | Readable reporting with rhetorical and heroic language rather than uniformly exact prose. |

T11=0: the American company is the narrative setting, but the launch-industry influence is global. T12=0: aerospace development is central; military and financial matters are supporting constraints. The central period ends in 2008; a 2019 framing scene does not reset it. H13=-0.72, high endpoint confidence. P14 uses the 2021 original. Thematic classification confidence is moderate.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 88.90 | 0.00 | 0.00 | -0.72 | -0.50 | 0.00 | **87.68** |

Amazon: [3,589 total ratings](https://www.amazon.com.au/dp/0062979973), ASIN 0062979973; observed 2026-10-18T20:44:01.236Z. Purchase edition: [0062979981](https://www.amazon.com/dp/0062979981), paperback. Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

<a id="alignment"></a>
## Source 100 — The Alignment Problem

**Brian Christian; production origin 2020. 87.61 — Recommend; moderate confidence. New nomination.**

Evidence: [nominated record](https://brianchristian.org/the-alignment-problem/); [Publisher excerpt: introduction and chapter 1](https://cpb-us-e1.wpmucdn.com/sites.psu.edu/dist/0/110933/files/2022/08/Christian-Alignment-Problem-Intro-and-Ch1.pdf); [Rohin Shah, Alignment Forum](https://www.alignmentforum.org/posts/gYfgWSxCpFdk2cZfE/the-alignment-problem-machine-learning-and-human-values); [Dan Elton, direct review](https://www.moreisdifferent.com/2021/07/21/book-review-alignment-problem.html); [Michael Haiden, Intergenerational Justice Review](https://igjr.org/ojs/index.php/igjr/article/download/1354/1288/2471).

Publisher excerpts explain training representations, proxy objectives and failure modes rather than offering a generic warning about AI. Rohin Shah's specialist review supports the three-part synthesis of machine learning, behavioral learning and alignment. Other technical readers found important counterarguments addressed, including in the COMPAS discussion. The tradeoff is limited industrial-system coverage and some dated frontier techniques.

**Strongest objection:** Some reader criticism concerns narrative digressions and connections between sections. Frontier details will date. No serious factual or ideological veto established.

**Hard exclusions and vetoes:** Three-part explanatory narrative about machine learning representation, learning and alignment. Historical and biographical scenes support mechanisms; no course, exercises or procedural training structure. Bias and law are application cases, not a political manifesto. Computing remains central. No serious veto is established.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 19.00 | 18.05 | Strong documentation and explicit opposing cases; sampled technical readers found key objections addressed. Not every empirical claim independently audited. |
| S · Systems integration | 17.00 | 16.00 | 15.06 | Links machine learning, neuroscience, behavior, institutional decisions and law. Production/trade/industrial scaling are secondary. |
| U · Transferable strategic utility | 15.00 | 15.00 | 15.00 | General lessons in proxy optimization, specification, feedback, distribution shift and uncertainty. |
| M · Mechanistic and causal depth | 12.00 | 12.00 | 12.00 | Explains why learning systems fail and how proposed fixes work, including their limits. |
| D · Information density and length justification | 10.00 | 9.00 | 8.10 | Substantive 329-page text within a longer volume of notes; some biography reduces maximum density. |
| R · Durability and resistance to hype | 9.00 | 8.00 | 8.00 | Enduring specification problems; frontier implementations and proposed solutions age. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Direct computing and strategic-risk fit. |
| A · Expert authority and intellectual standing | 5.00 | 5.00 | 5.00 | Unusual synthesis survived substantive technical attention; full score does not mean the author is a leading algorithm inventor. |
| N · Narrative architecture and clarity | 3.00 | 3.00 | 3.00 | Cumulative three-part organization. |
| P · Authorial precision and finesse | 2.00 | 2.00 | 2.00 | Clear and controlled technical prose. |

Computing is central; fairness, law and value questions are applications of machine-learning design. T11=T12=0. Historical examples serve ongoing computational problems, so H13=0. P14 uses the 2020 original, not the later paperback.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 93.21 | 0.00 | 0.00 | 0.00 | -0.60 | -5.00 | **87.61** |

Amazon: [716 total ratings](https://www.amazon.com.au/dp/0393635821), ASIN 0393635821; observed 2026-10-18T20:44:02.100Z. Purchase edition: [0393868338](https://www.amazon.com/dp/0393868338), paperback. Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

<a id="hammack"></a>
## Source 104 — The Things We Make

**Bill Hammack; production origin 2023. 85.97 — Recommend; moderate confidence. New nomination.**

Evidence: [nominated record](https://www.sourcebooks.com/the-things-we-make.html); [Publisher-supplied contents via bookseller](https://www.betterworldbooks.com/product/detail/the-things-we-make-the-unknown-history-of-invention-from-cathedrals-to-soda-cans-9781728215754/ebook); [Michael de Podesta, physicist's review](https://protonsforbreakfast.wordpress.com/2023/07/16/the-things-we-make-a-review/); [Publishers Weekly review](https://www.publishersweekly.com/9781728215754); [Original Booklist reviewer](https://johnthelibrarian.com/2023/01/01/book-review-the-things-we-make-by-bill-hammack/).

The publisher contents organize engineering cases around uncertainty, resources, science, mathematics and invention. Reviews by a physicist and professional book reviewers support its usefulness for understanding how engineering differs from applying scientific laws. The coherent cross-industry argument is stronger than a loose invention catalogue, although its universal-method framing goes beyond what case histories alone prove.

**Strongest objection:** The universal-method framing is too strong to justify maximum evidence attainment. Useful cross-industry principles do not by themselves support full strategic or mechanistic attainment.

**Hard exclusions and vetoes:** Coherent explanatory argument about engineering under uncertainty, with international cases spanning centuries. Chapter themes concern resources, science, mathematics and invention; a limited strategies chapter does not make the main work a manual. No serious veto is established.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 18.50 | 17.11 | Well-supported cases and experienced author, but framing one universal engineering method is broader than the evidence can strictly prove. |
| S · Systems integration | 17.00 | 16.00 | 15.06 | Connects engineering practice, resources, scientific knowledge, social constraints and invention across industries. |
| U · Transferable strategic utility | 15.00 | 14.00 | 14.00 | Reusable tradeoffs, uncertainty and constraint-based design judgment. |
| M · Mechanistic and causal depth | 12.00 | 11.00 | 11.00 | Explains heuristics and engineering constraints; not a complete causal theory of innovation. |
| D · Information density and length justification | 10.00 | 9.00 | 8.10 | Short cumulative account; limited narrative slack. |
| R · Durability and resistance to hype | 9.00 | 9.00 | 9.00 | Durable engineering distinctions and cases. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Engineering, production and innovation are central. |
| A · Expert authority and intellectual standing | 5.00 | 5.00 | 5.00 | Engineering professor and experienced public explainer. |
| N · Narrative architecture and clarity | 3.00 | 3.00 | 3.00 | Clear thematic arc built from cases. |
| P · Authorial precision and finesse | 2.00 | 2.00 | 2.00 | Precise accessible explanation. |

Engineering, resources and invention are central. Ethical considerations and environmental examples do not dominate the work, so T11=T12=0. Cross-period cases explain enduring engineering judgment, so H13=0. P14 uses the 2023 original.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 91.27 | 0.00 | 0.00 | 0.00 | -0.30 | -5.00 | **85.97** |

Amazon: [443 total ratings](https://www.amazon.com.au/dp/1728280451), ASIN 1728280451; observed 2026-10-18T20:47:51.073Z. Purchase edition: [1728280451](https://www.amazon.com/dp/1728280451), paperback. Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

<a id="mitchell"></a>
## Source 103 — Artificial Intelligence

**Melanie Mitchell; production origin 2019. 84.98 — Consider; moderate confidence. New nomination.**

Evidence: [nominated record](https://melaniemitchell.me/aibook/); [Publisher description and excerpt](https://us.macmillan.com/books/9781250758040/artificialintelligence/); [Didem Ozkiziltan, scholarly review](https://d-nb.info/1265087067/34); [Author's 2025 preface, reader-hosted copy](https://www.sackett.net/MitchellAI2025Preface.pdf); [Henrik Warne, software developer review](https://henrikwarne.com/2020/05/19/artificial-intelligence-a-guide-for-thinking-humans/).

The author contents and publisher excerpt show a cumulative account of perception, reinforcement learning, language and abstraction. A scholarly review supports its clarity and depth for general readers. The 2025 preface explicitly acknowledges that newer systems solve several earlier examples; it preserves the conceptual account without claiming the 2019 capability frontier is current.

**Strongest objection:** Limited industrial/institutional synthesis and aging AI examples keep this well below the target despite strong authority. No claim that the 2025 preface rewrites the full body.

**Hard exclusions and vetoes:** General explanatory treatment of AI, perception, reinforcement learning, language and meaning. No technical training or operating instructions. The 2025 preface updates the framing; it does not reset original age. No serious veto is established.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 19.00 | 18.05 | Expert treatment with candid limits and a new preface acknowledging changed capabilities; broad claims about cognition remain debated. |
| S · Systems integration | 17.00 | 14.00 | 11.53 | Connects computing, cognition, neuroscience and scientific research; limited production/trade/institutional integration. |
| U · Transferable strategic utility | 15.00 | 13.00 | 13.00 | Strong judgment of AI claims, less broad industrial strategy. |
| M · Mechanistic and causal depth | 12.00 | 11.00 | 11.00 | Detailed explanation of perception, learning and abstraction without a formal technical course. |
| D · Information density and length justification | 10.00 | 9.00 | 8.10 | Compact, structured exposition with useful diagrams. |
| R · Durability and resistance to hype | 9.00 | 7.00 | 7.00 | Capability claims in the original body age; new preface recognizes rather than conceals this. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Computing fits directly. |
| A · Expert authority and intellectual standing | 5.00 | 5.00 | 5.00 | Established AI and complex-systems researcher. |
| N · Narrative architecture and clarity | 3.00 | 3.00 | 3.00 | Clear cumulative topical structure. |
| P · Authorial precision and finesse | 2.00 | 2.00 | 2.00 | Measured explanatory prose. |

Computing and machine intelligence are central; cognition and philosophical questions support that explanation. T11=T12=0. There is no bounded central historical period, so H13=0. P14 uses the 2019 original; neither the 2020 paperback nor the 2025 preface resets age.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 85.68 | 0.00 | 0.00 | 0.00 | -0.70 | 0.00 | **84.98** |

Amazon: [1,344 total ratings](https://www.amazon.it/dp/0374257833), ASIN 0374257833; observed 2026-10-18T20:47:50.860Z. Purchase edition: [1250758041](https://www.amazon.com/dp/1250758041), paperback. Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

<a id="reentry"></a>
## Source 102 — Reentry

**Eric Berger; production origin 2024. 84.91 — Consider; moderate confidence. New nomination.**

Evidence: [nominated record](https://benbellabooks.com/shop/reentry/); [Primary excerpt](https://arstechnica.com/features/2024/09/in-the-room-where-it-happened-when-nasa-nearly-gave-boeing-all-the-crew-funding/); [Jeff Foust, The Space Review](https://thespacereview.com/article/4871/1); [Author on narrative chronology](https://www.reddit.com/r/SpaceXLounge/comments/19a4mxr).

Publisher cases connect rocket hardware, reuse, shipping, faults and institutional competition. Chapter 11 demonstrates how cost, technical grades, organizational familiarity and procurement constraints interact in a consequential decision. Foust confirms dozens of interviews inside and around the company. Evidence scope: Read publisher description and bibliographic details, complete Foust review and accessible Chapter 11 excerpt. Read indexed author reply establishing principal chronology. Not the whole book. Peter Hague review opened but returned title-only content, so no substantive claims are based on that page.

**Strongest objection:** Foust describes many anecdotes and central reliance on Musk's management, while also reporting burnout and the book's own concern about distraction. Excerpt evidence is strong for one institutional episode; it cannot prove every chapter's density or general causal validity.

**Hard exclusions and vetoes:** Pass hard exclusions: explanatory development narrative. No serious veto established. Political context is auxiliary to technology and commercial launch capability.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 18.50 | 17.11 | Many attributable interviews and institutional detail; hindsight and insider access still constrain causal certainty. |
| S · Systems integration | 17.00 | 16.50 | 16.01 | Combines hardware, logistics, market structure, procurement, safety and organizational culture across several vehicles. |
| U · Transferable strategic utility | 15.00 | 14.00 | 14.00 | Strong transferable constraints and failure lessons; extreme founder-led company is an unusual sample. |
| M · Mechanistic and causal depth | 12.00 | 11.00 | 11.00 | Explains mechanisms and trade-offs, but remains reporting rather than exhaustive comparison. |
| D · Information density and length justification | 10.00 | 8.50 | 7.23 | Anecdotal 400-page history does not support near-perfect density from the available evidence. |
| R · Durability and resistance to hype | 9.00 | 9.00 | 9.00 | Reusable rockets and procurement decisions remain instructive beyond current publicity. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Direct match to high-tech development, scaling and industrial capability. |
| A · Expert authority and intellectual standing | 5.00 | 4.50 | 4.50 | Experienced specialist reporter with independent space-sector review. |
| N · Narrative architecture and clarity | 3.00 | 3.00 | 3.00 | Added chronology markers and a sustained programme-development arc support clarity. |
| P · Authorial precision and finesse | 2.00 | 1.50 | 1.50 | Precise operational reporting is mixed with dramatic characterization. |

T11=0: the company history explains global launch-industry capabilities. T12=0: procurement, finance and founder behaviour support a central account of engineering and reuse. The author identifies the main period as November 2008–2020, so H13=-0.24, high endpoint confidence. P14 uses 2024. Thematic classification confidence is moderate.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 90.35 | 0.00 | 0.00 | -0.24 | -0.20 | -5.00 | **84.91** |

Amazon: [864 total ratings](https://www.amazon.com.au/dp/1637745273), ASIN 1637745273; observed 2026-10-18T20:44:01.364Z. Purchase edition: [1637745273](https://www.amazon.com/dp/1637745273), hardcover; no English paperback verified. Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

<a id="uncertainty"></a>
## Source 109 — The Art of Uncertainty

**David Spiegelhalter; production origin 2024. 84.19 — Consider; moderate confidence. New nomination.**

Evidence: [nominated record](https://www.publishersweekly.com/9781324106111); [Ian Bright, Society of Professional Economists](https://www.spe.org.uk/reading-room/book-reviews/the-art-of-uncertainty/); [Tim Denvir, BCS FACS Facts, pages 63–64](https://www.bcs.org/media/vt3p4h4v/facs-feb25.pdf); [Chalkdust review](https://chalkdustmagazine.com/book-of-the-year/the-art-of-uncertainty/).

The strongest contribution is disciplined treatment of what a number does and does not tell us. Reviews by professional economists and computing specialists connect its lessons to forecasting and communication. The book's difficulty is not itself a density defect; its lower utility mark reflects the user's existing mathematical expertise.

**Strongest objection:** A wide survey of uncertainty does not necessarily give a physicist much new mathematics or a complete account of industrial and institutional systems.

**Hard exclusions and vetoes:** A sustained explanatory account for general readers, not a technical statistics course or a procedural manual. Philosophical questions support the statistical argument rather than defining an independent philosophical treatise. No serious veto established.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 19.00 | 18.05 | Explicit treatment of uncertainty, evidence quality and model limits; the subjective-probability position remains an argued view. |
| S · Systems integration | 17.00 | 15.00 | 13.24 | Links statistical inference, forecasting, communication and institutional decisions, with less industrial-system integration. |
| U · Transferable strategic utility | 15.00 | 13.00 | 13.00 | Useful risk-communication and calibration lessons; basic probability is familiar to this reader. |
| M · Mechanistic and causal depth | 12.00 | 11.00 | 11.00 | Explains sources of uncertainty and how evidence changes a judgment; not every case supplies a complete causal model. |
| D · Information density and length justification | 10.00 | 9.00 | 8.10 | Most cases advance the argument; some historical and everyday examples are less efficient for an expert. |
| R · Durability and resistance to hype | 9.00 | 9.00 | 9.00 | Uncertainty representation and model humility remain useful beyond the examples. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Quantification, modelling and strategic risk are direct fits. |
| A · Expert authority and intellectual standing | 5.00 | 5.00 | 5.00 | Leading statistician with direct work on public risk communication and specialist scrutiny. |
| N · Narrative architecture and clarity | 3.00 | 3.00 | 3.00 | Chapter structure and summaries make a demanding argument navigable. |
| P · Authorial precision and finesse | 2.00 | 2.00 | 2.00 | Precise distinctions and worked examples support controlled prose. |

Statistical uncertainty is central; finance, health, policy and philosophical definitions are applications or foundations. T11=T12=0; this classification has moderate confidence. H13=0. P14 uses the UK original in 2024, not the US release in 2025.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 89.39 | 0.00 | 0.00 | 0.00 | -0.20 | -5.00 | **84.19** |

Amazon: [450 total ratings](https://www.amazon.com/dp/1324130725), ASIN 1324130725; observed 2026-10-18T20:48:04.559Z. Purchase edition: [1324130725](https://www.amazon.com/dp/1324130725), paperback. Linked product page verified. No missing-count fallback.

<a id="fictions"></a>
## Source 105 — Science Fictions

**Stuart Ritchie; production origin 2020. 83.35 — Consider; moderate confidence. New nomination.**

Evidence: [nominated record](https://us.macmillan.com/books/9781250841865/sciencefictions/); [Sally Larsen, Frontiers in Psychology review](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.666441/pdf); [Publishers Weekly review](https://www.publishersweekly.com/9781250222695); [Author's original-publication record](https://www.sciencefictions.org/p/book).

The publisher chapter explains how funding, publication and professional incentives shape research. Sally Larsen's scholarly review supports the account of publication bias and statistical errors but questions its selection of extreme cases and whether proposed remedies reach underlying causes. The result is useful institutional analysis with material limits on inferential breadth.

**Strongest objection:** Larsen's substantive criticism lowers evidence and mechanistic attainment; it does not establish that the documented institutional failures are false or that the central argument is ideological.

**Hard exclusions and vetoes:** Narrative analysis of scientific institutions and research failures for general readers. Methodological explanations and proposed reforms serve the argument; the main work is not statistical training or a procedural manual. Scientific organization, not philosophy or political activism, is central. Medical examples do not make disease the primary topic. No serious veto is established.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 18.50 | 17.11 | Substantial documented cases, but selection of extreme failures and uncertain extrapolation limit generality. |
| S · Systems integration | 17.00 | 15.00 | 13.24 | Links research practice, statistical inference, publication, funding, reputation and incentives; production and economic systems less developed. |
| U · Transferable strategic utility | 15.00 | 14.00 | 14.00 | Useful evidence-audit and incentive lessons across research and organizations, though some are familiar to this reader. |
| M · Mechanistic and causal depth | 12.00 | 11.00 | 11.00 | Explains publication bias, analytical flexibility and incentive failures; remedies less fully developed. |
| D · Information density and length justification | 10.00 | 9.00 | 8.10 | Cumulative thematic organization with substantial cases. |
| R · Durability and resistance to hype | 9.00 | 9.00 | 9.00 | Research-integrity mechanisms survive present controversies. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Scientific organization, quantification and institutional reliability fit. |
| A · Expert authority and intellectual standing | 5.00 | 4.50 | 4.50 | Researcher with direct replication experience and serious specialist attention; narrower standing than maximum. |
| N · Narrative architecture and clarity | 3.00 | 3.00 | 3.00 | Clear four-failure organization. |
| P · Authorial precision and finesse | 2.00 | 2.00 | 2.00 | Controlled and readable explanation. |

Scientific organization and research reliability are central. Medicine, media and philosophical norms are examples or supporting layers, so T11=T12=0. The analysis spans ongoing and historical research practices without one bounded central period, so H13=0. P14 uses the 2020 original, not the 2021 paperback.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 88.95 | 0.00 | 0.00 | 0.00 | -0.60 | -5.00 | **83.35** |

Amazon: [327 total ratings](https://www.amazon.com.au/dp/1250222699), ASIN 1250222699; observed 2026-10-18T20:47:51.593Z. Purchase edition: [1250841860](https://www.amazon.com/dp/1250841860), paperback. Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

<a id="sync"></a>
## Source 107 — Sync

**Steven Strogatz; production origin 2003. 82.09 — Consider; moderate confidence. New nomination.**

Evidence: [nominated record](https://www.hachettebookgroup.com/titles/steven-h-strogatz/sync/9780786887217/); [Rachel Thomas, Plus mathematics review](https://plus.maths.org/issue51/reviews/book2/2pdf/index.html/op.pdf); [Original release and scope, Kirkus](https://www.kirkusreviews.com/book-reviews/steven-strogatz/sync/).

The mathematical-reader review identifies a coherent bridge between very different synchronising systems and a useful account of research itself. It is a stronger intellectual fit than a generic physics introduction. The central limitation is that explanations aimed at broad readers provide less new technical and industrial insight for an experienced theoretical physicist.

**Strongest objection:** A common mathematical phenomenon across many examples is not the same as integrating production, institutions and economic constraints.

**Hard exclusions and vetoes:** Narrative popular mathematics, not a textbook, problem course or technical reference. No serious veto is established. A desired-profile example is assessed by the same gates as every other nomination.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 19.00 | 18.05 | A field contributor explains mathematical results and their limits; the survey is selective rather than exhaustive. |
| S · Systems integration | 17.00 | 15.00 | 13.24 | Connects nonlinear mathematics, biological timing, physical order and engineered networks; production and institutional layers are thinner. |
| U · Transferable strategic utility | 15.00 | 13.00 | 13.00 | Coupling and collective behaviour transfer well, but much underlying physics will be familiar to this reader. |
| M · Mechanistic and causal depth | 12.00 | 11.00 | 11.00 | Explains how synchronisation arises and fails, without the mathematical detail of a specialist treatment. |
| D · Information density and length justification | 10.00 | 9.00 | 8.10 | Examples advance the common mechanism; research portraits create some narrative overhead. |
| R · Durability and resistance to hype | 9.00 | 9.00 | 9.00 | The main mechanisms and research history remain durable. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Applied mathematics, physical models and networks fit directly. |
| A · Expert authority and intellectual standing | 5.00 | 5.00 | 5.00 | Direct research authority and serious mathematical reception justify full authority attainment. |
| N · Narrative architecture and clarity | 3.00 | 3.00 | 3.00 | A clear progression from living to physical and exploratory systems. |
| P · Authorial precision and finesse | 2.00 | 2.00 | 2.00 | Controlled explanations distinguish intuition from mathematical detail. |

The central subject is synchronisation, not disease, ecology or philosophy. T11=T12=0. Scientific history serves a cross-period explanation, so H13=0. P14 uses the original 2003 work, not the 2004 paperback.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 89.39 | 0.00 | 0.00 | 0.00 | -2.30 | -5.00 | **82.09** |

Amazon: [589 total ratings](https://www.amazon.com.au/dp/014100763X), ASIN 014100763X; observed 2026-10-18T20:47:56.667Z. Purchase edition: [0786887214](https://www.amazon.com/dp/0786887214), paperback. Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

<a id="learn"></a>
## Source 106 — How We Learn

**Stanislas Dehaene; production origin 2018. 78.13 — Consider; moderate confidence. New nomination.**

Evidence: [nominated record](https://penguinrandomhousehighereducation.com/book/?isbn=9780525559900); [Original French publisher and 2018 publication date](https://www.odilejacob.fr/catalogue/sciences-humaines/education-enseignement-pedagogie/apprendre-_9782738145420.php); [Roslyn Neilson, Learning Difficulties Australia review](https://www.ldaustralia.org/wp-content/uploads/2021/03/Book-Review-Dehaene-Ros-Neilson.pdf); [Kirkus review](https://www.kirkusreviews.com/book-reviews/stanislas-dehaene/how-we-learn-dehaene/).

The original French publisher verifies the 2018 date. The English excerpt explains internal models, neural-network hierarchies and error correction. Roslyn Neilson's review identifies two explanatory parts on learning and brain plasticity followed by educational applications. This offers coherent computational and cognitive mechanisms, with less integration of industrial or strategic systems.

**Strongest objection:** No evidence for a serious veto. Human/machine comparisons are date-sensitive and educational implications are not a complete theory of institutions or production. This cannot justify near-perfect systems integration for the stated profile.

**Hard exclusions and vetoes:** First two parts explain learning models and brain plasticity; the final part derives educational applications. Main structure is sustained explanatory neuroscience, not lessons, exercises or specialist procedure training. Placement on a higher-education publisher portal does not itself exclude it. No serious veto is established.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 18.50 | 17.11 | Expert research synthesis with explicit mechanisms; broad brain-to-education and human-to-machine comparisons require care. |
| S · Systems integration | 17.00 | 13.50 | 10.72 | Computing, cognitive psychology, neuroscience and education integrate well; industrial, production and institutional layers are limited. |
| U · Transferable strategic utility | 15.00 | 13.00 | 13.00 | Useful learning and feedback principles, but narrower strategic and industrial payload. |
| M · Mechanistic and causal depth | 12.00 | 11.00 | 11.00 | Models, error correction, attention, plasticity and consolidation explained. |
| D · Information density and length justification | 10.00 | 9.00 | 8.10 | Substantial compact explanatory content. |
| R · Durability and resistance to hype | 9.00 | 8.00 | 8.00 | Learning mechanisms durable; machine comparisons and capability boundaries age. |
| F · Direct domain fit | 7.00 | 6.00 | 6.00 | Computational learning and knowledge acquisition fit; central neuroscience less direct than technology/production. |
| A · Expert authority and intellectual standing | 5.00 | 5.00 | 5.00 | Established neuroscientist and relevant leading researcher. |
| N · Narrative architecture and clarity | 3.00 | 3.00 | 3.00 | Cumulative three-part organization. |
| P · Authorial precision and finesse | 2.00 | 2.00 | 2.00 | Clear conceptual explanation. |

Computational and human learning are central, not disease or a philosophical treatise. T11=T12=0. This is a general explanation with no bounded historical period, so H13=0. P14 uses Apprendre!, the French original published in 2018; the English translation in 2020 does not reset age.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 83.93 | 0.00 | 0.00 | 0.00 | -0.80 | -5.00 | **78.13** |

Amazon: [840 total ratings](https://www.amazon.com.au/dp/0141989300), ASIN 0141989300; observed 2026-10-18T20:47:57.012Z. Purchase edition: [0525559906](https://www.amazon.com/dp/0525559906), paperback. Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

<a id="bayes"></a>
## Source 108 — The Theory That Would Not Die

**Sharon Bertsch McGrayne; production origin 2011. 74.77 — Selective; moderate confidence. New nomination.**

Evidence: [nominated record](https://yalebooks.yale.edu/book/9780300188226/the-theory-that-would-not-die/); [Robert W. Hayden, Mathematical Association of America](https://old.maa.org/press/maa-reviews/the-theory-that-would-not-die); [Scott L. Zeger, Physics Today](https://physicstoday.aip.org/reviews/the-theory-that-would-not-die-how-bayes-rule-cracked-the-enigma-code-hunted-down-russian-submarines-and-emerged-triumphant-from-two-centuries-of-controversy).

This is a history of Bayesian ideas in practice, rather than training in Bayesian computation. Zeger values its connections to real applications. Hayden's independent mathematical review is more reserved about technical explanation and identifies errors and vague passages. Those reservations matter for this reader even though the history remains worthwhile.

**Strongest objection:** An engaging history of a method cannot substitute for a deep explanation of the method's limits; the apparent conflict between rival statistical camps can also become too neat.

**Hard exclusions and vetoes:** A general-reader explanatory history passes the hard exclusions. No serious central epistemic failure or other veto is established from the local weaknesses reported by the reviewers.

| Criterion | Maximum | Raw x | Contribution | Assessment |
|---|---:|---:|---:|---|
| E · Evidence and inferential integrity | 20.00 | 17.50 | 15.31 | Substantial research and references, but a mathematical reviewer identifies minor technical errors and vagueness. |
| S · Systems integration | 17.00 | 15.00 | 13.24 | Connects inference, computing, scientific institutions and operational applications across fields. |
| U · Transferable strategic utility | 15.00 | 12.00 | 12.00 | The history of adoption transfers; the mathematical method will add less for an experienced modeller. |
| M · Mechanistic and causal depth | 12.00 | 9.00 | 9.00 | Some application stories show why inference helped, but technical explanation is uneven. |
| D · Information density and length justification | 10.00 | 8.50 | 7.23 | A coherent narrative with considerable personality and controversy material. |
| R · Durability and resistance to hype | 9.00 | 9.00 | 9.00 | History of inference and its institutional acceptance is durable. |
| F · Direct domain fit | 7.00 | 7.00 | 7.00 | Probability, computing and strategic estimation are directly relevant. |
| A · Expert authority and intellectual standing | 5.00 | 4.00 | 4.00 | Careful science journalism with specialist attention, below direct methodological authority. |
| N · Narrative architecture and clarity | 3.00 | 3.00 | 3.00 | Engaging historical narrative and readable application stories. |
| P · Authorial precision and finesse | 2.00 | 1.50 | 1.50 | Technical imprecision and occasionally dramatic opposition narratives reduce precision. |

Statistics is the central topic; war, intelligence, medicine and elections are applications. T11=T12=0. The account spans several centuries of an evolving method rather than one central bounded episode, so H13=0. P14 uses 2011, not the 2012 paperback.

| Positive subtotal | T11 | T12 | H13 | P14 | O15 | Final total |
|---:|---:|---:|---:|---:|---:|---:|
| 81.27 | 0.00 | 0.00 | 0.00 | -1.50 | -5.00 | **74.77** |

Amazon: [928 total ratings](https://www.amazon.com.au/dp/0300188226), ASIN 0300188226; observed 2026-10-18T20:47:57.743Z. Purchase edition: [0300188226](https://www.amazon.com/dp/0300188226), paperback. Edition identity verified on another market; linked-market stock not verified. No missing-count fallback.

## Eligibility boundary and verification

Algorithms to Live By passes rule 2 with moderate confidence. Its main explanatory structure concerns computation, bounded resources and human decision-making. Explicit practical advice creates a real boundary question, but method-labelled chapters and useful applications do not alone establish specialist training. The authorized introduction and detailed review show a conceptual argument that remains useful even where the advice is weak. This differs from a work whose main structure teaches a procedure or operating method. It receives a complete score rather than disappearing from the assessment.

No new hard exclusion or veto is established in this nomination set. The lowest scored nomination is retained in the ranked table. Search leads not nominated are recorded as unresolved/deprioritized, not entered into the exclusion list.

Verification recalculates every score independently in integer units of 1/6800, including the preserved migrated M fractions; checks all maxima, deductions, strict thresholds, identities and list ordering; and verifies every selected count against its saved page evidence. All 28 previous analyses and the scoring rules are preserved. The result is1,022 recommendations,177 vetoed works,307 hard exclusions and 113 source records. Twelve recommendations are new; three are reassessed. VETOED_BOOKS.md and EXCLUDED_BOOKS.md remain unchanged.
