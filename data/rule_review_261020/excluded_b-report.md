# Excluded-books B reassessment — 2026-10-20

Completed all **617 input decisions** under the current on-disk H2 and V5. The final decision array is `excluded_b-decisions.json`; `excluded_b-review.mjs` is its reproducible authoring source. No canonical ledger, historical analysis or site file was edited by this agent.

| Outcome | Distinct current works |
|---|---:|
| Recommended, newly scored | 197 |
| Vetoed, counterfactually scored | 5 |
| H1 retained | 297 |
| H2 retained | 116 |
| Secondary identity decisions merged into another input | 2 |
| Input decisions | 617 |

The two merges are the Taleb author-name variants for *Statistical Consequences of Fat Tails* (h0783 into h0782) and *The Expanse* / *The Expanse series* (h0909 into h0910). Sources and prior evidence are retained. The Taleb source union is **8, 124**; source 117 was an incorrect draft mapping and is absent from the final array. The separate Hamming books *The Art of Doing Science and Engineering* and *The Art of Probability* are different works.

The restored set includes Hamming, Jaynes, Taleb, Feynman, Conway, mathematical histories, conceptual expert accounts, Clagett’s medieval mechanics history, industrial quality and software-organization books, and broad explanatory business/reasoning books. Course origin, mathematical difficulty, practical advice and expert audience were not used alone as hard-exclusion reasons. Each retained H2 decision instead identifies a procedure, reference, problem-drill or technical-training purpose. Conceptual expert narratives remain moderate-confidence boundary judgments where appropriate.

Both Princeton Companions remain H2, moderate confidence. Their primary prefaces contain substantial narrative evidence but also explicitly state reference intent; the final proviso does not permit that explicit intended use. *The Handbook of Rationality* is retained for the same explicit-reference reason. These three have no new scores in the final decisions. The Cambridge information/computer ethics handbook remains included at moderate confidence: its stated explanatory introduction and argumentative essays are assessed individually, without treating the word “handbook” alone as decisive.

The five new V5 decisions are *Spiritual Formation*, *The Four Agreements*, *The Heart of the Buddha’s Teaching*, *Thou Shall Prosper* and *Zen Mind, Beginner’s Mind*. Their central frameworks are explicit derived religious teaching. Mild cultural or political inclination alone did not trigger V5. Theological history and scholarship were distinguished from religious instruction.

Bibliographic review checked 65 additional book dates and retains a per-title URL record in `excluded_b-dates.json`. Corrections include Kirillov’s *What Are Numbers?* to the Russian original **1993**, *Twelve Landmarks* to the French original **2009**, Harris’s *Trading and Exchanges* to Oxford’s **2002** release, *Strong Mothers, Strong Sons* to **2014**, and *Stop Letting Everything Affect You* to **2025**. Feynman selections retain **1963** original lecture production, with the later selection/edition dates explained. Vakil uses the consolidated **2009** public-course manuscript with an explicit moderate-confidence note on earlier precursors and later print publication.

There are **202 scored records**, each with ten underlying attainments, ten criterion-specific explanations, thematic decisions, publication/period notes, source provenance and an Amazon retrieval outcome. **49** retain one matching Amazon aggregate supported by explicit `global ratings` evidence. A saved `verified` flag or reviews-only label was insufficient. **153** use the required unknown-count/no-obscurity-deduction fallback. For all 83 initially uncached scored works, two actual title/author requests were made to Amazon.de and Amazon.com; all 166 failed at network transport. Their per-work URLs, errors and timestamps are in `excluded_b-amazon-attempts.json`. Some of these drafts later became retained reference exclusions or acquired an existing matching cache; no new count was inferred from a failure.

Verification: `node data/rule_review_261020/excluded_b-validate.mjs` passes 617 unique ordered input IDs, numeric source IDs, decision fields, score bounds, ten notes, years, theme values, Amazon attempts/explicit-rating evidence, veto fields, purchase-link shape and all local evidence paths. No missing local evidence reference remains. Borderline eligibility, low-confidence assessments and unresolved shorthand fiction identities are recorded in their individual decisions, rather than hidden behind a blanket rule.
