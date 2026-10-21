# Books Guru packet B review — 2026-10-21

Frozen deliverable: `b-assessments.json`. Regenerate with `node data/books_guru_261021/b-finalize.mjs` (which first runs `b-author.mjs`). Canonical ledgers and site files were not edited.

## Coverage and validation

- 115 input IDs, exactly one output per input, no added IDs.
- 8 previously covered identities skipped under the user override. These are 1984, Buffett & Munger, Deng Xiaoping, Genghis Khan, Consider Phlebas, Inversions, Death’s End, and God Emperor of Dune. Series component identities follow the collector’s frozen `assigned-skips.json`; no new score or gate decision is assigned to them.
- 107 new works assessed: 73 recommended, 6 vetoed, 28 hard-excluded.
- 79 scored works each have ten independent raw attainments, ten reasons, all named gates, separate T11/T12 findings, original-year and historical-endpoint notes, and an actual Amazon retrieval record. Excluded works have no scores, dates, deductions, Amazon objects or enrichment.
- Raw ranges, note counts, all eight gate keys, one-status identity coverage, valid years and deduction values pass the local validator in `b-finalize.mjs`.
- Every external evidence URL in the output occurs in the saved research/retrieval corpus. Source occurrence and edition identity were kept distinct from work identity.

## Research and metadata

The review uses actual publisher and author descriptions, contents, accessible prefaces/samples, publication records and focused specialist reviews. It is a bounded assessment, not a claim to have read every full book. Search captures are in `b-raw-r*.txt`; targeted text checks are in `b-primary-*.txt`, `b-boundary-*.txt` and `b-detail-*.txt`.

All 80 potentially scored titles received a direct source-linked Amazon product retrieval and search for explicit global-rating text. One was subsequently hard-excluded. The 79 scored works retain their individual attempt URLs and raw logs in `b-am-<input-index>.txt`; no unambiguous total-rating aggregate was recovered. Every count is unknown, with O15 fallback 0. Ambiguous “Reviews” labels were not accepted as ratings, and no third-party count was imported. Product URLs remain source locators; live availability is not asserted. Edition format is stated only when independently matched.

26 scored works have edition-specific page counts supported by inspected bibliographic records. There are 258 positive domain assessments across all 79 scored works. Missing domains are unknown, not zero. No unsupported multi-domain mechanism joins were fabricated; connections explicitly remain partial. Remaining page counts and detailed connection evidence are not claimed complete.

## Main boundary findings

- **A Gentle Introduction to Unqualified Reservations:** recommended, low gate confidence. The initial tentative V5 was removed after root review. Chapter 11 proposes constitutional termination but expressly assumes a nonviolent transition and permits members’ own opinions. Those passages do not establish violent domination or suppression of dissent under the revised rule. The polemical frame and weak historical inference remain in the low scores; no replacement V1/V2 was inferred merely from its politics. Evidence: author chapter 11 and saved `b-detail-0.txt`, particularly paragraphs beginning “Can democracy terminate democracy?”, “You support a coup”, and “Two, the Party enforces an ideological standard.”
- **China Coup:** V4, high confidence. The primary preface predicts Xi’s removal before the November 2022 party congress. The author separates imagined scenarios from the main analytical claim, so it is not a fiction exclusion. Its generic uncertainty caveat does not constitute elaborate balanced guardrails for the central dated prediction. Evidence: publisher page and primary preface reproduced in the linked sample.
- **A New Kind of Science:** recommended, moderate confidence. Reproducible computational material has value independent of revolutionary claims. Specialist criticisms lower evidence, density and precision; no blanket veto merely for speculative physics or an ambitious title.
- **Animal Eyes** and **Global Warming:** recommended, moderate eligibility confidence. Primary prefaces and contents support sustained explanatory accounts beyond specialist lookup or exam preparation. Course compatibility and technical content alone do not defeat the exception.
- **Energies:** recommended. The publisher’s integrated explanatory essays establish broad synthesis. One endorsement’s “reference” wording does not turn it into a specialist reference corpus.
- **Hindu Mysticism:** recommended. Its primary preface identifies historical development and rejects uncritical faith in infallible scripture; analytical religious discussion is not devotional doctrine.
- **Be Here Now**, **Das Energi**, and **Cosmic Consciousness:** V5. The first is devotional teaching; the latter two present divine consciousness as authoritative truth in the inspected text. Cosmic Consciousness also receives V1 for converting selected testimony into universal metaphysical/biological conclusions.
- **A Champion’s Mind** and **Dad Is Fat:** V3, moderate confidence. The inspected personal or comic structures leave little explicit transferable model beyond their particular situations. These are judgments about payload, not automatic rejection of memoir or low fit. Counterfactual scores retain all identified limitations.
- **Hyperbole and a Half:** recommended after root’s substantive challenge and a primary-text check. The publisher confirms Depression Part Two belongs to the collection. The essay distinguishes anhedonia from sadness and explains how reassurance based on inaccessible positive feelings can intensify misunderstanding and isolation. This specific transferable model defeats V3. E/S/U/M/R and the ten reasons were revised; overall analytical density and direct fit remain low. The primary blog text and publisher confirmation are saved in `b-hyperbole-*.txt`.
- **Diet for a Small Planet:** REFERENCE, moderate confidence. The original edition’s operational core is recipes, protein tables and diet instructions; explanatory environmental framing does not displace that main cookbook function. Other general business or policy arguments were not excluded merely for advice or a “guide” subtitle.
- **Hitler: A Global Biography:** recommended, low gate/score confidence. Specialist reviews conflict materially about the central interpretation. This bounded review records serious evidential limitations without treating scholarly disagreement itself as a proven central failure or Nazi advocacy.

## Date and theme concerns retained for review

- **Every Cradle Is a Grave:** year 2014 follows the matching ISBN record. Current publisher page gives 2013. The conflict remains explicit; confidence low.
- **Collapse:** year 2004 follows the publisher’s December 2004 audio production, before the standard 2005 print edition. Later revisions do not reset it; confidence moderate.
- **Berkshire Hathaway Letters to Shareholders:** year 2013 is the first published collection, established by editor Max Olson’s dated announcement. Letters themselves began in 1965; the source-linked product is a later expanded collection.
- **Energies:** first hardcover date is December 1998 on MIT Press, despite 1999 library dates and the 2000 paperback.
- **Apprentice to Genius:** historical endpoint 1980 is an explicit low-confidence approximation for the late-century research lineage; a precise final event was not recovered. Other inferred endpoints are marked moderate, not falsely presented as exact publication facts.
- No T11 deduction is imposed simply for poverty/hunger, sports, or the presence of a minority/disease strand. Forty Chances and A Champion’s Mind have T11 0; Hyperbole and a Half also has T11 0 because depression’s predominance across the collection is not established. Political or environmental advocacy alone never supplies V5.

The strongest profile matches in this packet are Creating the Twentieth Century, Energies, Energy at the Crossroads, Vance’s Elon Musk, Animal Eyes and Broken Genius. Scores remain single-valued; uncertainty is recorded in confidence and evidence notes rather than ranges.
