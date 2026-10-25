# Queue review completion

All 408 entries in the starting queue were reviewed; 397 were resolved. No new source IDs. 2 aliases resolved; 2 existing works updated with 2 new distinct book/source links. Existing gates and criterion assessments retained. 295 new eligible books scored, 79 new vetoes with full counterfactual scores, and 19 works hard excluded (documented hard-exclusion rules). 1 non-book references removed from the queue. 397 source/title candidates resolved; No source record is renumbered; previously repaired source text is reused. These counts overlap and must not be added together.

[Current pending queue](../data/intake_complete_261025/pending.json): 11 source/title candidates; this is not an exhaustive inventory or a count of unique new books. Earlier queue files are history. Every starting entry has now been reviewed. Remaining entries have explicit unresolved identity or format evidence; Flow is resolved as a non-book program, without credit to the separate book.

- [Source 268](analysis_aerobooks_261025_1223.md)
- [Source 270](analysis_fabioxie_261025_1223.md)
- [Source 272](analysis_ezrascience_261025_1223.md)
- [Source 273](analysis_koch_261025_1223.md)
- [Source 276](analysis_misiti_261025_1223.md)
- [Source 278](analysis_sinclarius_261025_1223.md)
- [Source 283](analysis_ashod_261025_1223.md)
- [Source 284](analysis_precision_261025_1223.md)
- [Source 285](analysis_aspe_261025_1223.md)

[Machine-readable change audit](../data/intake_complete_261025/result.json) and [source-link changes](../data/intake_complete_261025/updates.json). Original source captures reused; no whole-source rescan.

## Unresolved identities and formats

These entries remain unscored and receive no inferred source credit. Confidence in their exact book identity or eligibility is unknown.

| Source | Title | Author | Remaining evidence gap |
|---|---|---|---|
| 276 | Flash in the Pan | David Blot | Source has this title/author pair but no ISBN or product link. Exact-title/author search found no corroborating book. Do not substitute David Blatner or an unrelated Flash in the Pan. |
| 276 | Blockchain | Unknown | Bare Blockchain with unknown author and no source product link cannot distinguish technical manuals from explanatory books. |
| 276 | Fear and Loathing | Hunter S. Thompson | Fear and Loathing may refer to the Las Vegas fiction or the Campaign Trail nonfiction. The source gives no subtitle or product identity. No gate inferred. |
| 276 | Getting Read | Unknown | Getting Read has no author or product link. Cannot distinguish a typo, a book, or a publishing-advice work. |
| 276 | A History of Finance | Unknown | A History of Finance lacks author, year and product link. Multiple possible works; no source credit inferred. |
| 276 | Reducing Drug Violence in America | Unknown | Exact wording has no corroborating book identity after search; source supplies no author or product link. Could be a report or an abbreviated book title. |
| 283 | Evolution | Stephen Jay Gould | Source product ASIN 1879557487 identifies Goulds Evolution & Extinction Essays audio anthology, not Carl Zimmers Evolution. Exact constituent print works not established; do not merge with Zimmer or infer a new print book. Source HTML and ISBN evidence saved. |
| 283 | A History of the Middle Ages | Crane Brinton, John Christopher, Robert Wolff | Identity established as Audio Connoisseur 2004 narration by Charlton Griffin. Possible adaptation of the authors History of Civilization, but no verified edition mapping or separate print work found. Book-form eligibility remains unconfirmed. |
| 283 | Economics | Unknown | Individual source page contains no author, ISBN or real cover (no-image placeholder). Generic Economics cannot be identified safely. |
| 283 | Hitler | Unknown | Individual source page contains no author, ISBN or real cover (no-image placeholder). Many Hitler biographies exist; no match inferred. |
| 283 | Inequality | Unknown | Individual source page contains no author, ISBN or real cover (no-image placeholder). Generic Inequality cannot be identified safely. |

New score estimates have low confidence. Description and sample evidence do not establish full-text density. Missing Amazon counts use O15 = 0; missing reference-page ratios use RD = 0. Existing assessments are preserved; the two new distinct-source links change Relevance only.


Validation: all 21 model tests passed; all 374 new score calculations and analysis anchors passed; prior assessments and exclusions were preserved. Offline Chromium checks passed at six widths (320–1440 px), with no page errors, network requests or horizontal overflow. Exact output and rule hashes are in [qa.json](../data/intake_complete_261025/qa.json).
