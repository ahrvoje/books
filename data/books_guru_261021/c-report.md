# Books Guru packet C — final assessment report

Reviewed on 21 October 2026, Europe/Warsaw. The current on-disk AGENTS rules and the batch assessment contract govern this packet. The user's instruction to avoid reassessing previously covered works takes priority over the normal repeat-source rule.

## Coverage

All 115 assigned IDs have exactly one output in `c-assessments.json`:

| Result | Count |
| --- | ---: |
| Recommended, including low-scoring and uncertain eligible works | 79 |
| Vetoed, with full counterfactual inputs | 4 |
| Hard excluded, without scores or enrichment | 29 |
| Merged into an existing assessment, without reassessment | 3 |

The three Culture novels merge into the previously covered whole-series identity `h0242`, as confirmed by the collector. No additional titles were introduced. Canonical ledgers, historical analyses and site files were not edited.

## Main decisions

- **My Life and Work:** included with a substantially limited evidence score. The full primary text's chapter XVII contains a hateful collective-conspiracy assertion about Jews. Its stated remedy is exposure and assimilation, rather than an established call for persecution or violent domination. The central manufacturing mechanisms do not depend on that aside. The narrow V5 threshold was reviewed with the parent agent; no substitute V1/V2 was invented. The serious flaw remains explicit in the active assessment.
- **Joseph McCarthy, Arthur Herman:** vetoed under V1/V2 at moderate confidence. The detailed Tanenhaus review identifies a concrete Lattimore intelligence inference that the cited source's coauthor says their work does not support. It also documents treatment of security-risk categories and asymmetric excuses for McCarthy versus condemnation of Welch. Kirkus independently identifies one-sided characterizations. This finding concerns the book's central rehabilitation argument, not the author's political affiliation. All ten counterfactual criteria retain the flaw.
- **Meditation in Action:** V5, high confidence. The inspected contents and publisher account explain a Buddhist path through the Buddha's life, transmission, compassion and six paramitas. The account is sustained religious teaching, not primarily a sequence of meditation procedures; it passes the reference gate before the doctrine veto.
- **The Circle of Fire:** V5, high confidence. The publisher explicitly identifies a devotional prayer collection, first published as *Prayers: A Communion with Our Creator* in 2001. The 2013 title is a retitle, not a new original publication.
- **Lazy Man's Guide to Enlightenment:** V5, moderate confidence. Inspected passages on pages 54 and 63 present an infinite conscious universe and spiritual identity as truths to realize. Secular compassion advice is present, but does not replace the central enlightenment doctrine. This boundary has lower confidence than the two explicitly traditional/devotional works above.
- **Limits to Growth:** corrected to **Limits to Growth: The 30-Year Update**. The source image and ASIN identify the distinct 2004 follow-up. The collector found no prior exact-work identity. Conditional model scenarios are not treated as unconditional forecasts; assumptions and validation limits reduce the evidence assessment rather than automatically trigger V4.
- **Public Choice Theory and the Illusion of Grand Strategy**, **Rules for Radicals**, **Let My People Go Surfing** and **The Captive Mind:** political position, advocacy or institutional criticism is not by itself a V5 reason. Their other gates and thematic deductions are assessed separately.
- **String Theory** is David Foster Wallace's tennis essay collection. **Showing Up for Life** is by Bill Gates Sr., with Mary Ann Mackin. These identities are not inferred from misleading title words or the more famous family member.

## Evidence and data limits

The assessments use publisher and author records, contents, samples, primary public-domain text, library metadata and substantive reviews as available. `c-search-1.md` through `c-search-170.md` retain retrieval outputs, including empty or unsuccessful queries; only relevant inspected evidence is cited in an assessment. The Books Guru cards establish occurrence, not reliable descriptions, endorsements, quality or Amazon counts. This is not a claim to have newly read all books cover to cover.

All 83 scored books have ten separate criterion reasons, original-year and central-period findings, both thematic decisions and recorded Amazon attempts. Where a historical narrative's exact final year could not be established, the uncertainty is explicit; a publication year is not silently substituted as the topic endpoint. Named period approximations have lower confidence. Original-year checks distinguish a first release from a copyright year or later edition, including Hanania's December 2021 release, Merridale's 2016 UK edition, Brest/Harvey's 2008 original and the 2001 Ruiz work.

All 83 Amazon counts are unknown, with the prescribed O15=0 fallback. The direct requests each recorded their actual product URL and timestamp, but encountered a shared transport `EACCES` failure; this is not represented as inspecting the product content. Eight records also have public web attempts. Four accessible products exposed written-review labels without an explicit total-rating aggregate; those numbers were rejected. The other four public web attempts failed. The source's unverified numbers were never substituted. Provenance is retained in `c-amazon.json`, `c-amazon-web-01.md` and `c-amazon-audit.json`.

42 scored records include an identified edition page count. The others explicitly state that a matching page count was not established. Four Google Books edition identifiers are recorded as Google Books IDs, not guessed ISBNs. Supported domains remain partial; absent domains are unknown, not zero. Seventeen causal mechanisms have supported participants and distinct domain-keyed roles. No unsupported complete domain vector or total-coverage claim is supplied.

## Verification and freeze

`node data/books_guru_261021/c-validate.mjs` passes: 115 unique assigned IDs; 83 complete scored records; 29 unscored exclusions; 3 merges; valid maxima; ten distinct notes per score; all eight named gate findings; documented rating attempts; 42 page counts; 17 mechanisms with supported domains and domain-keyed roles. The parent publisher also reports structural preflight passing.

`c-assessments.json` and this report are final and frozen for integration. The publisher should compute contributions and totals from the unrounded raw inputs; this packet does not replace the canonical score calculation.
