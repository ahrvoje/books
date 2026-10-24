# Metadata review of 500 highest-scoring recommendations with missing data

2026-10-24, Europe/Warsaw. The cohort was fixed before collection: the first 500 recommended books with at least one missing field, sorted by unrounded repository score and then title. Initial ranks 12–1086. This is repository quality rank, not Amazon star rank.

| Field | Newly established | Still unknown in cohort |
|---|---:|---:|
| Total pages | 27 | 3 |
| Amazon total ratings | 107 | 119 |
| Reference pages | 151 | 271 |
| Purchase links corrected or moved to verified print identities | 54 | — |

231 books gained metadata or a corrected product link; 204 scores changed. Each of the 500 has an audit entry below. Library records, publisher pages, numbered contents, public PDFs and Google Books supplied the bibliographic data. Amazon requests were spaced at least 45 seconds apart, with at most three known edition products per initial review. A second pass, if recorded, uses newly verified identifiers. The highest explicit aggregate among identity-verified inspected editions is retained; counts are never added across editions or marketplaces. This is not a claim that every possible edition was found. No zero-rating claim was established. Missing counts, unavailable pages, and zero written-review messages remain unknown.

1 existing reference-page count was expanded after additional sections were inspected. Edition metadata corrections are described under the affected books. The early Amazon pass stopped further edition requests at 1,000 ratings. After 256 cohort positions, it stopped at any verified positive aggregate to avoid redundant requests. Unavailable or ambiguous products still received alternative-edition checks, within the three-product limit. No claim is made to have inspected every edition or found the largest aggregate anywhere.

Access limits: German and US Amazon probes returned challenges and were paused. Amazon Australia supplied the recorded aggregates. Open Library returned a 503 and was paused: later entries can record skipped lookups, not successful live checks. Cached records remain usable. There were 189 recorded Amazon product attempts and 726 Google Books steps. Exact requests, dates, snapshots, failures and skipped reasons are retained in [review.json](../data/top500_261024/review.json), [library progress](../data/top500_261024/progress.json), [Amazon progress](../data/top500_261024/amazon.json) and Google review files.

Amazon Australia subsequently returned an access challenge at 2026-10-24T11:49:34.540Z, and collection stopped. Direct Amazon attempts covered 141 works. Of the original missing-rating cohort, 85 works received no new direct Amazon request because of the stop, ambiguous series scope, or lack of a usable product identifier. These are not successful rating checks. Alternative catalog and search evidence was retained. Newly identified paperback links can remain untested; each such case is labelled below.

Scoring: content criteria, density estimates, thematic and age deductions, source membership and eligibility decisions are preserved. O15 is recalculated from one verified Amazon aggregate. R&D is recalculated as `20 × reference_pages / total_pages`, using documented counts with no edition-match requirement. Unknown inputs contribute zero. Relevance is unchanged. Totals are rebuilt from the ten original contributions, all five deductions and both bonuses, so neither bonus is added twice. Full revised breakdowns appear for books with new scored metadata. Unmatched or cross-edition R&D ratios have low confidence; underlying catalog/contents counts usually have moderate confidence and inspected PDF ranges high confidence. Reference counts are counts of documented pages, not citations; unlisted sections can remain uncounted.

Unresolved identity cases: a single volume cannot supply a full-series page or rating count. History of Programming Languages and What’s Happening in the Mathematical Sciences retain unknown lengths because the nominated scope is not specific enough. What Are Numbers? retains unknown length: the source identity needs reconciliation with the technical-course work associated with Kirillov. This metadata pass does not silently change its eligibility. A Singular Mathematical Promenade has distributed marginal references in the inspected draft; no defensible bounded reference-page total was established.

An additional Internet Archive public-catalog pass made 294 paced title-and-author lookups, at least ten seconds apart. Its documented reference ranges, exact query responses and any access limit are saved in [archive.json](../data/top500_261024/archive.json). No reference total is inferred merely from a statement that a book includes references.

A further 26 paced ISBN query batches checked unresolved works using known edition identifiers. Responses and matched records are saved in [archive-isbn.json](../data/top500_261024/archive-isbn.json). Each batch contains at most ten works; product and author identities are checked before accepting a reference range.


<a id="liftoff"></a>
## Liftoff — Eric Berger

Initial rank 12. Sources: 101, 116, 180, 182, 198, 207. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0441). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#liftoff).

Total pages: [288](https://openlibrary.org/books/OL32869872M/Liftoff); ISBN:0062979981; paperback; Not stated by source; 2022. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [3589](https://www.amazon.com.au/dp/0062979981); www.amazon.com.au; product 0062979981; retrieved 2026-10-18T22:28:14.649Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0062979981; reference edition: unknown. Ratio confidence: unknown.

Score retained: **92.15**. Verdict: Recommend. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="reentry"></a>
## Reentry — Eric Berger

Initial rank 33. Sources: 102, 198, 207. [Prior content assessment](../analysis/analysis_tactical92_261018_2302.md). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#reentry).

Total pages: [450](https://openlibrary.org/books/OL50554881M/Reentry); ISBN:1637745273; Hardcover; Not stated by source; 2024. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [864](https://www.amazon.com.au/dp/1637745273); www.amazon.com.au; product 1637745273; retrieved 2026-10-18T20:44:01.364Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1637745273; reference edition: unknown. Ratio confidence: unknown.

Score retained: **87.74**. Verdict: Recommend. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="ignition"></a>
## Ignition! — John Drury Clark

Initial rank 39. Sources: 93, 118, 143, 198, 207, 208, 246, 248. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#ignition). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#ignition).

Total pages: [216](https://utpdistribution.com/9780813595832/ignition/); ISBN:9780813595832; Paperback; English; 2018. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1657](https://www.amazon.com.au/dp/0813595835); www.amazon.com.au; product 0813595835; retrieved 2026-10-21T14:58:00.258Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780813595832; reference edition: unknown. Ratio confidence: unknown.

Score retained: **86.69**. Verdict: Recommend. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="eghbal"></a>
## Working in Public — Nadia Eghbal

Initial rank 40. Sources: 66, 116, 167. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0412). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#eghbal).

Total pages: [256](https://openlibrary.org/books/OL28341888M/Working_in_Public); ISBN:9780578675862; Hardcover; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [416](https://www.amazon.com/dp/0578675862); www.amazon.com; product 0578675862; retrieved 2026-10-18T19:56:54.292Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780578675862; reference edition: unknown. Ratio confidence: unknown.

Score retained: **86.59**. Verdict: Recommend. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0732"></a>
## Funding a Revolution: Government Support for Computing Research — National Research Council

Initial rank 41. Sources: 248. [Prior content assessment](../analysis/analysis_smb17gvgkq_261023_2134.md#progress-0732). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0732).

Total pages: [273](https://openlibrary.org/books/OL9766327M); /books/OL9766327M; Paperback; English; 1999. Confidence: moderate. Existing count retained.

Reference pages: [38](https://worrydream.com/refs/NRC_1999_-_Funding_a_Revolution%2C_Government_Support_for_Computing_Research.pdf); edition ISBN:9780309062787; Chapter notes 14–14; Chapter notes 36–39; Chapter notes 51–51; Chapter notes 81–84; Chapter notes 134–135; Chapter notes 168–168; Chapter notes 182–183; Chapter notes 197–197; Chapter notes 222–225; Chapter notes 248–249; Bibliography 250–265. Confidence: high. New count. Ten note sections and bibliography; pages shared with prose counted once. Blank page 266 and committee biographies 267–273 excluded. 299 physical PDF pages versus 273 numbered pages; total-page edition remains as documented separately.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

Reference coverage expanded: 16 → 38 pages after direct inspection of additional note sections.

R&D: 38 reference pages / 273 total pages = 13.92%; R&D = 2.78 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL9766327M; reference edition: ISBN:9780309062787. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 19.00 | 18.05 |
| Systems integration | 16.00 | 15.06 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.24; P14 -2.70; O15 0.00; REL 0.00; RD 2.78. Score **86.57 → 88.18**. Verdict: Recommend. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="q0038"></a>
## The Soul of A New Machine — Tracy Kidder

Initial rank 48. Sources: 8, 10, 116, 128, 129, 133, 134, 143, 168, 182, 191, 198, 207, 208, 211, 216, 217, 219, 232, 244, 246. [Prior content assessment](../analysis/analysis_hn33792217_261020_1731.md#q0038). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0038).

Total pages: [320](https://www.amazon.com.au/dp/0316491977); ASIN:0316491977; Paperback; English; 2000. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1748](https://www.amazon.com/dp/0316491977); www.amazon.com; product 0316491977; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0316491977; reference edition: unknown. Ratio confidence: unknown.

Score retained: **85.89**. Verdict: Recommend. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="witt"></a>
## The Thinking Machine — Stephen Witt

Initial rank 51. Sources: 70. [Prior content assessment](../analysis/analysis_widerd_261018_2208.md). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#witt).

Total pages: [248](https://www.amazon.com/dp/1529936527); ASIN:1529936527; Paperback; English; 2026. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2043](https://www.amazon.com/dp/1529936527); www.amazon.com; product 1529936527; retrieved 2026-10-18T20:00:43.641Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:1529936527; reference edition: unknown. Ratio confidence: unknown.

Score retained: **85.43**. Verdict: Recommend. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0024"></a>
## How Music Got Free — Stephen Witt

Initial rank 57. Sources: 3. [Prior content assessment](../analysis/analysis_obscurebooks_261017_1936.md). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0024).

Total pages: [306](https://openlibrary.org/books/OL27220028M/How_music_got_free); ISBN:0143109340; Paperback; English; 2016. Confidence: moderate. Existing count retained.

Reference pages: [16](https://archive.org/details/howmusicgotfreew0000witt); edition ISBN:9781847923363; bibliographical references 271–286. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [1291](https://www.amazon.com.au/dp/0143109340); www.amazon.com.au; product 0143109340; retrieved 2026-10-18T18:28:12.847Z. Existing verified snapshot retained.

R&D: 16 reference pages / 306 total pages = 5.23%; R&D = 1.05 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0143109340; reference edition: ISBN:9781847923363. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 17.00 | 17.00 |
| Transferable strategic utility | 14.00 | 14.00 |
| Mechanistic and causal depth | 10.59 | 10.59 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -0.48; P14 -1.10; O15 0.00; REL 0.00; RD 1.05. Score **84.86 → 85.90**. Verdict: Recommend. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0069"></a>
## Skunk Works — Ben R. Rich; Leo Janos

Initial rank 63. Sources: 11, 116, 127, 128, 129, 130, 143, 193, 198, 208, 210, 232, 244, 246, 248. [Prior content assessment](../analysis/analysis_skunkbooks_261020_1731.md#q0069). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0069).

Total pages: [400](https://openlibrary.org/books/OL9757195M/Skunk_Works); OL9757195M; Paperback; English; 1996. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [5086](https://www.amazon.com/dp/0316743003); www.amazon.com; product 0316743003; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL9757195M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **84.41**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0065"></a>
## Countdown to Zero Day — Kim Zetter

Initial rank 71. Sources: 10, 175, 213. [Prior content assessment](../analysis/analysis_pastedlists_261018_0118.md#p045). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0065).

Total pages: [448](https://www.amazon.com.au/dp/0770436196); ASIN:0770436196; Paperback; English; 2015. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2439](https://www.amazon.com/dp/0770436196); www.amazon.com; product 0770436196; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0770436196; reference edition: unknown. Ratio confidence: unknown.

Score retained: **83.71**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0813"></a>
## The Future of Petrochemicals — International Energy Agency

Initial rank 89. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0813). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0813).

Total pages: [152](https://www.oecd.org/en/publications/the-future-of-petrochemicals_9789264307414-en.html); ISBN:9789264307414; PDF edition; English; 2018. Confidence: high. Existing count retained.

Reference pages: [7](https://iea.blob.core.windows.net/assets/bee4ef3a-8876-4566-98cf-7a130c013805/The_Future_of_Petrochemicals.pdf); edition IEA:2018-publisher-PDF-132-pages; Chapter1 references 26–26; Chapter2 references 48–48; Chapter3 references 66–67; Chapter4 references 91–91; Chapter5 references 118–118; Chapter6 references 128–128. Confidence: high. Existing count retained. Counts the six explicitly titled chapter reference sections; excludes scattered footnotes. PDF pagination differs from OECD catalog extent.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 7 reference pages / 152 total pages = 4.61%; R&D = 0.92 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9789264307414; reference edition: IEA:2018-publisher-PDF-132-pages. Ratio confidence: low.

Score retained: **82.28**. Verdict: Consider. Content confidence: low.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="progress-0717"></a>
## The Design and Engineering of Curiosity — Emily Lakdawalla

Initial rank 91. Sources: 246. [Prior content assessment](../analysis/analysis_ae1ay7rjs_261023_2134.md#progress-0717). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0717).

Total pages: [408](https://link.springer.com/book/10.1007/978-3-319-68146-7); ISBN:9783319681443; Softcover; English; 2018. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [180](https://www.amazon.com.au/dp/3319681443); amazon.com.au; product 3319681443; retrieved 2026-10-23T22:46:00.692Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9783319681443; reference edition: unknown. Ratio confidence: unknown.

Score retained: **82.15**. Verdict: Consider. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0027"></a>
## Uncommon Carriers — John McPhee

Initial rank 93. Sources: 3, 7, 208, 216. [Prior content assessment](../analysis/analysis_anysubject_261017_2227.md#a014). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0027).

Total pages: [248](https://openlibrary.org/books/OL8317354M/Uncommon_Carriers); ISBN:0865477396; Paperback; English; 2007. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [339](https://www.amazon.com.au/dp/0865477396); www.amazon.com.au; product 0865477396; retrieved 2026-10-18T18:28:16.461Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0865477396; reference edition: unknown. Ratio confidence: unknown.

Score retained: **81.94**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0158"></a>
## Creativity, Inc. — Ed Catmull

Initial rank 100. Sources: 96, 115, 165, 186, 188, 193, 244. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0231). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0158).

Total pages: [400](https://openlibrary.org/books/OL31844609M/Creativity_Inc.); OL31844609M; paperback; Not stated by source; 2020. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [10364](https://www.amazon.com.au/dp/0812993012); www.amazon.com.au; product 0812993012; retrieved 2026-10-18T22:27:04.359Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL31844609M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **81.43**. Verdict: Consider. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="ncc9f754730"></a>
## Numbers Don’t Lie — Vaclav Smil

Initial rank 105. Sources: 145, 148. [Prior content assessment](../analysis/analysis_ratings2025_261020_1731.md#ncc9f754730). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#ncc9f754730).

Total pages: [368](https://www.penguinrandomhouse.com/books/663649/numbers-dont-lie-by-vaclav-smil/); ISBN:9780143136224; Paperback; English; 2021. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [3601](https://www.amazon.com.au/dp/0143136224); www.amazon.com.au; product 0143136224; retrieved 2026-10-21T20:29:02.017Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780143136224; reference edition: unknown. Ratio confidence: unknown.

Score retained: **81.14**. Verdict: Consider. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0148"></a>
## The Simple Science of Flight — Henk Tennekes

Initial rank 112. Sources: 232, 242. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0148). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0148).

Total pages: [152](https://openlibrary.org/books/OL9703150M); /books/OL9703150M; Paperback; English; 1997. Confidence: moderate. Existing count retained.

Reference pages: [1](https://ci.nii.ac.jp/ncid/BA88243430); edition ISBN:9780262700658; Bibliographical references 133–133. Confidence: moderate. Existing count retained. Count covers the named reference sections only; excludes the index. Contents boundaries can include a final blank page. Edition may differ from the page-count edition.

Amazon ratings: [84](https://www.amazon.com.au/dp/0262513137); amazon.com.au; product 0262513137; retrieved 2026-10-24T10:39:49.149Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0262513137); previously https://www.amazon.de/dp/0262700654. [Product evidence](https://www.amazon.com.au/dp/0262513137). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 1 reference pages / 152 total pages = 0.66%; R&D = 0.13 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL9703150M; reference edition: ISBN:9780262700658. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.40; O15 -10.00; REL 2.00; RD 0.13. Score **80.60 → 70.60**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 3 new Amazon attempts. 

<a id="rem-u1252"></a>
## How To Build A Car — Adrian Newey

Initial rank 114. Sources: 198, 210. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1252). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1252).

Total pages: [400](https://www.goodreads.com/book/show/35657708-how-to-build-a-car); ISBN:000819680X; Hardcover; English; 2019. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [8966](https://www.amazon.com.au/dp/0008271100); www.amazon.com.au; product 0008271100; retrieved 2026-10-21T22:49:17.576Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:000819680X; reference edition: unknown. Ratio confidence: unknown.

Score retained: **80.58**. Verdict: Consider. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0364"></a>
## The Innovator’s Dilemma — Clayton M. Christensen

Initial rank 119. Sources: 116, 132, 149, 153, 162, 168, 188, 191, 192, 193, 215, 219. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#g0364). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0364).

Total pages: [288](https://openlibrary.org/books/OL27581964M/The_Innovator's_Dilemma); OL27581964M; hardcover; English; 2013. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [3953](https://www.amazon.com.au/dp/142219602X); www.amazon.com.au; product 142219602X; retrieved 2026-10-18T22:28:00.971Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL27581964M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **80.41**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0590"></a>
## Engineers: A History of Engineering and Structural Design — Matthew Wells

Initial rank 123. Sources: 233. [Prior content assessment](../analysis/analysis_locenghist_261023_2134.md#progress-0590). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0590).

Total pages: [244](https://openlibrary.org/books/OL33721712M); OL33721712M; Print edition (binding unspecified); eng; 2010. Confidence: moderate. Existing count retained.

Reference pages: [27](https://books.google.com/books/about/Engineers.html?id=VNp_AgAAQBAJ); edition ISBN:9781134343256; Notes and bibliography 208–234. Confidence: moderate. Existing count retained. Count covers the named reference sections only; excludes the index. Contents boundaries can include a final blank page. Edition may differ from the page-count edition.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 27 reference pages / 244 total pages = 11.07%; R&D = 2.21 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL33721712M; reference edition: ISBN:9781134343256. Ratio confidence: low.

Score retained: **80.24**. Verdict: Consider. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 3 new Amazon attempts. 

<a id="necf7390c86"></a>
## The Art of Doing Science and Engineering — Richard W. Hamming

Initial rank 132. Sources: 116, 130, 173, 193, 207, 211, 232. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0836). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#necf7390c86).

Total pages: [364](https://openlibrary.org/books/OL19020228M/The_art_of_doing_science_and_engineering); ISBN:9056995014; Not stated by source; English; 1997. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [13](https://www.amazon.com.au/dp/9056995014); www.amazon.com.au; product 9056995014; retrieved 2026-10-18T22:28:07.990Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9056995014; reference edition: unknown. Ratio confidence: unknown.

Score retained: **79.81**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0280"></a>
## Out of the Crisis — W. Edwards Deming

Initial rank 142. Sources: 115, 232. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0634). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0280).

Total pages: [507](https://openlibrary.org/books/OL22322511M/Out_of_the_crisis); OL22322511M; Not stated by source; English; 1986. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [500](https://www.amazon.com.au/dp/B08FZLVM1D); www.amazon.com.au; product B08FZLVM1D; retrieved 2026-10-18T22:27:40.650Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL22322511M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **79.01**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0363"></a>
## Zero to One — Peter Thiel; Blake Masters

Initial rank 162. Sources: 116, 151, 162, 175, 177, 178, 180, 188, 191, 192, 193, 215. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h1234). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0363).

Total pages: [320](https://openlibrary.org/books/OL33541083M/Zero_to_One); OL33541083M; Not stated by source; English; 2014. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [36636](https://www.amazon.com.au/dp/0804139296); www.amazon.com.au; product 0804139296; retrieved 2026-10-18T22:28:00.910Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL33541083M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **78.02**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0423"></a>
## Code — Charles Petzold

Initial rank 166. Sources: 116, 175, 190, 191, 211, 218, 219, 232. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0423). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0423).

Total pages: [393](https://openlibrary.org/books/OL17703091M/Code); OL17703091M; Not stated by source; English; 1999. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2786](https://www.amazon.com/dp/0735611319); www.amazon.com; product 0735611319; retrieved 2026-10-18T22:28:11.834Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL17703091M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **77.92**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0586"></a>
## Energy: A Beginner’s Guide — Vaclav Smil

Initial rank 169. Sources: 118, 148. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0586). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0586).

Total pages: [192](https://openlibrary.org/books/OL34019369M/Energy); OL34019369M; Not stated by source; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [974](https://www.amazon.com.au/dp/1851684522); www.amazon.com.au; product 1851684522; retrieved 2026-10-21T20:28:49.720Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL34019369M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **77.83**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0147"></a>
## Working — Robert A. Caro

Initial rank 171. Sources: 6, 132, 207. [Prior content assessment](../analysis/analysis_hn38556188_261020_1731.md#q0147). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0147).

Total pages: [240](https://www.amazon.com.au/dp/0593081919); ASIN:0593081919; Paperback; English; 2020. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1487](https://www.amazon.com.au/dp/0593081919); www.amazon.com.au; product 0593081919; retrieved 2026-10-18T18:28:56.174Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0593081919; reference edition: unknown. Ratio confidence: unknown.

Score retained: **77.68**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0075"></a>
## Carrying the Fire — Michael Collins

Initial rank 173. Sources: 2, 3, 182, 207. [Prior content assessment](../analysis/analysis_obscurebooks_261017_1936.md). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0075).

Total pages: [528](https://www.amazon.com.au/dp/1509896570); ASIN:1509896570; Paperback; English; 2019. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1686](https://www.amazon.com.au/dp/1509896570); www.amazon.com.au; product 1509896570; retrieved 2026-10-18T18:28:31.541Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:1509896570; reference edition: unknown. Ratio confidence: unknown.

Score retained: **77.57**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1696"></a>
## Focus: The ASML Way — Marc Hijink

Initial rank 175. Sources: 193. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1696). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1696).

Total pages: [344](https://www.managementboek.nl/boek/9789463823623/focus-marc-hijink); ISBN:9789463823623; Paperback; English; 2024. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [424](https://www.amazon.com.au/dp/946382362X); www.amazon.com.au; product 946382362X; retrieved 2026-10-21T22:49:15.656Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9789463823623; reference edition: unknown. Ratio confidence: unknown.

Score retained: **77.49**. Verdict: Consider. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0815"></a>
## The Role of Critical Minerals in Clean Energy Transitions — International Energy Agency

Initial rank 180. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0815). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0815).

Total pages: [287](https://www.oecd.org/en/publications/the-role-of-critical-minerals-in-clean-energy-transitions_f262b91c-en.html); ISBN:9789264679948; PDF edition; English; 2021. Confidence: high. Existing count retained.

Reference pages: [26](https://iea.blob.core.windows.net/assets/ffd2a83b-8c30-4e9d-980a-52b6d9a86fdc/TheRoleofCriticalMineralsinCleanEnergyTransitions.pdf); edition ISBN:9789264679948; References 254–279. Confidence: high. Existing count retained. Counts the named References section only; excludes the preceding technology-source table and scattered footnotes. CorrectedMarch2022 version of2021 report.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 26 reference pages / 287 total pages = 9.06%; R&D = 1.81 points. Edition recorded as matching. Page edition: ISBN:9789264679948; reference edition: ISBN:9789264679948. Ratio confidence: moderate.

Score retained: **77.30**. Verdict: Consider. Content confidence: low.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="progress-0418"></a>
## Moon Lander — Thomas J. Kelly

Initial rank 191. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0418). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0418).

Total pages: [283](https://openlibrary.org/books/OL8635092M); OL8635092M; Hardcover; eng; 2001. Confidence: moderate. Existing count retained.

Reference pages: [8](https://campusstore.miamioh.edu/moon-lander-how-we-developed-apollo-lunar/bk/9781560989981); edition ISBN:156098998X; Notes 267–274. Confidence: moderate. New count. Bounded reference sections only; index excluded. Contents boundaries can include a final blank page. Edition matching is unconfirmed.

Amazon ratings: [456](https://www.amazon.com.au/dp/1588342735); amazon.com.au; product 1588342735; retrieved 2026-10-23T21:50:36.988Z. Existing verified snapshot retained.

R&D: 8 reference pages / 283 total pages = 2.83%; R&D = 0.57 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL8635092M; reference edition: ISBN:156098998X. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 14.00 | 14.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -2.16; P14 -2.50; O15 -5.00; REL 0.00; RD 0.57. Score **77.00 → 77.57**. Verdict: Consider. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="n8b3892bf9a"></a>
## Failure Is Not an Option: Mission Control from Mercury to Apollo 13 and Beyond — Gene Kranz

Initial rank 205. Sources: 143, 182, 198, 207, 208. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#n8b3892bf9a). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n8b3892bf9a).

Total pages: [416](https://www.simonandschuster.com/books/Failure-Is-Not-an-Option/Gene-Kranz/9781439148815); ISBN:9781439148815; Paperback; English; 2009. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2899](https://www.amazon.com.au/dp/1439148813); www.amazon.com.au; product 1439148813; retrieved 2026-10-22T08:12:25.322Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781439148815; reference edition: unknown. Ratio confidence: unknown.

Score retained: **76.38**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g1282"></a>
## Visual Explanations — Edward Tufte

Initial rank 210. Sources: 125, 219, 232. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h1194). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1282).

Total pages: [158](https://openlibrary.org/books/OL45129207M/Visual_Explanations); OL45129207M; paperback; Not stated by source; 1997. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [216](https://www.amazon.com.au/dp/0961392126); www.amazon.com.au; product 0961392126; retrieved 2026-10-21T20:40:18.500Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL45129207M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **76.01**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0159"></a>
## Crossing the Chasm — Geoffrey Moore

Initial rank 211. Sources: 115, 168, 175, 188, 191, 193, 219. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0238). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0159).

Total pages: [222](https://openlibrary.org/books/OL8917887M/Crossing_the_Chasm); OL8917887M; Paperback; English; 1998. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2582](https://www.amazon.com.au/dp/0062292986); www.amazon.com.au; product 0062292986; retrieved 2026-10-18T22:27:04.445Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL8917887M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **75.99**. Verdict: Consider. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1254"></a>
## 747: Creating the World's First Jumbo Jet and Other Adventures from a Life in Aviation — Joe Sutter; Jay Spenser

Initial rank 212. Sources: 198, 210. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1254). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1254).

Total pages: [272](https://www.amazon.com.au/dp/0060882417); ISBN/ASIN:0060882417; Hardcover; English; 2006. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [222](https://www.amazon.com.au/dp/0060882417); www.amazon.com.au; product 0060882417; retrieved 2026-10-21T22:48:27.104Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN/ASIN:0060882417; reference edition: unknown. Ratio confidence: unknown.

Score retained: **75.99**. Verdict: Consider. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nc31a516e68"></a>
## Blood, Sweat, and Pixels — Jason Schreier

Initial rank 220. Sources: 128, 244. [Prior content assessment](../analysis/analysis_hn33792217_261020_1731.md#nc31a516e68). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nc31a516e68).

Total pages: [304](https://www.amazon.com/dp/0062651234); ISBN:9780062651235; Paperback; English; 2017. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [5241](https://www.amazon.com.au/dp/0062651234); www.amazon.com.au; product 0062651234; retrieved 2026-10-22T08:12:09.168Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780062651235; reference edition: unknown. Ratio confidence: unknown.

Score retained: **75.84**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nbbc2087dc6"></a>
## Show Stopper! — G. Pascal Zachary

Initial rank 232. Sources: 128, 129, 207, 211, 217, 244. [Prior content assessment](../analysis/analysis_hn33792217_261020_1731.md#nbbc2087dc6). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nbbc2087dc6).

Total pages: [496](https://www.simonandschuster.com/books/Showstopper!/G-Pascal-Zachary/9798993755359); ISBN:9798993755359; Paperback; English; 2026. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [442](https://www.amazon.com.au/dp/0316911135); amazon.com.au; product 0316911135; retrieved 2026-10-23T08:48:02.845Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9798993755359; reference edition: unknown. Ratio confidence: unknown.

Score retained: **75.33**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nf47d68e25a"></a>
## Fly by Wire — William Langewiesche

Initial rank 235. Sources: 143. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#nf47d68e25a). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nf47d68e25a).

Total pages: [208](https://academic.macmillan.com/academictrade/9780312655389/flybywire/); ISBN:9780312655389; Paperback; English; 2010. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [350](https://www.amazon.com.au/dp/031265538X); www.amazon.com.au; product 031265538X; retrieved 2026-10-21T20:28:51.286Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780312655389; reference edition: unknown. Ratio confidence: unknown.

Score retained: **75.26**. Verdict: Consider. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n328d031d68"></a>
## UNIX: A History and a Memoir — Brian W. Kernighan

Initial rank 240. Sources: 133, 134, 211. [Prior content assessment](../analysis/analysis_hn42157034_261020_1731.md#n328d031d68). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n328d031d68).

Total pages: [198](https://mitpressbookstore.mit.edu/book/9781695978553); 9781695978553; Print; binding unspecified; English; 2019. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [761](https://www.amazon.com.au/dp/1695978552); www.amazon.com.au; product 1695978552; retrieved 2026-10-21T20:41:22.009Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 9781695978553; reference edition: unknown. Ratio confidence: unknown.

Score retained: **75.15**. Verdict: Consider. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0022"></a>
## A Short Bright Flash — Theresa Levitt

Initial rank 244. Sources: 3, 139. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#q0022). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0022).

Total pages: [288](https://www.amazon.com.au/dp/0393350894); ASIN:0393350894; Paperback; English; 2015. Confidence: high. Existing count retained.

Reference pages: [29](https://archive.org/details/shortbrightflash0000levi_o4h5); edition ISBN:9780393068795; bibliographical references 235–263. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [116](https://www.amazon.com.au/dp/0393350894); www.amazon.com.au; product 0393350894; retrieved 2026-10-18T18:28:15.317Z. Existing verified snapshot retained.

R&D: 29 reference pages / 288 total pages = 10.07%; R&D = 2.01 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:0393350894; reference edition: ISBN:9780393068795. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -6.44; P14 -1.30; O15 -5.00; REL 2.00; RD 2.01. Score **75.03 → 77.04**. Verdict: Consider. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1663"></a>
## Volt Rush — Henry Sanderson

Initial rank 256. Sources: 179, 230, 231. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1663). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1663).

Total pages: [288](https://www.simonandschuster.com/books/Volt-Rush/Henry-Sanderson/9780861543755); ISBN:9780861543755; Hardcover; English; 2022. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [378](https://www.amazon.com.au/dp/0861543750); www.amazon.com.au; product 0861543750; retrieved 2026-10-22T08:11:48.613Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780861543755; reference edition: unknown. Ratio confidence: unknown.

Score retained: **74.51**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n6092737d47"></a>
## Quantum Computing Since Democritus — Scott Aaronson

Initial rank 258. Sources: 144, 222, 232. [Prior content assessment](../analysis/analysis_reasonbooks_261020_1731.md#n6092737d47). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n6092737d47).

Total pages: [370](https://obnb.uk/p16195327-quantum-computing-since-democritus); ISBN:9780521199568; Paperback; English; 2013. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [269](https://www.amazon.com.au/dp/0521199565); www.amazon.com.au; product 0521199565; retrieved 2026-10-22T08:11:48.846Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780521199568; reference edition: unknown. Ratio confidence: unknown.

Score retained: **74.41**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0362"></a>
## The Hard Thing About Hard Things — Ben Horowitz

Initial rank 259. Sources: 116, 162, 165, 175, 188, 191, 192, 193, 207, 215. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0949). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0362).

Total pages: [304](https://www.amazon.com.au/dp/0062273205); ASIN:0062273205; Hardcover; English; 2014. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [15700](https://www.amazon.com.au/dp/0062273205); www.amazon.com.au; product 0062273205; retrieved 2026-10-21T14:21:05.617Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0062273205; reference edition: unknown. Ratio confidence: unknown.

Score retained: **74.39**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0589"></a>
## The Engineer in History — John Rae; Rudi Volti

Initial rank 261. Sources: 233. [Prior content assessment](../analysis/analysis_locenghist_261023_2134.md#progress-0589). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0589).

Total pages: [267](https://openlibrary.org/books/OL1413583M); /books/OL1413583M; Print format unspecified; English; 1993. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL1413583M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **74.33**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 2 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1833"></a>
## The Sporty Game — John Newhouse

Initial rank 270. Sources: 193, 235. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1833). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1833).

Total pages: [242](https://ci.nii.ac.jp/ncid/BA10205127); ISBN:9780394514475; Print book; English; 1982. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [15](https://www.amazon.com.au/dp/0394514475); www.amazon.com.au; product 0394514475; retrieved 2026-10-22T08:11:43.100Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780394514475; reference edition: unknown. Ratio confidence: unknown.

Score retained: **74.08**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0185"></a>
## An Astronaut's Guide to Life on Earth — Chris Hadfield

Initial rank 271. Sources: 4, 118, 182, 204. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0568). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0185).

Total pages: [320](https://www.amazon.com.au/dp/0316253030); ASIN:0316253030; Paperback; English; 2015. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [8805](https://www.amazon.com/dp/0316253030); www.amazon.com; product 0316253030; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0316253030; reference edition: unknown. Ratio confidence: unknown.

Score retained: **74.03**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0527"></a>
## The Innovator's Solution — Clayton Christensen

Initial rank 278. Sources: 117, 149, 215. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0965). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0527).

Total pages: [301](https://openlibrary.org/books/OL31144564M/The_innovator's_solution); ISBN:1422196577; Not stated by source; English; 2013. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [694](https://www.amazon.com.au/dp/1422196577); www.amazon.com.au; product 1422196577; retrieved 2026-10-22T08:11:50.160Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1422196577; reference edition: unknown. Ratio confidence: unknown.

Score retained: **73.91**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0157"></a>
## Ship of Gold in the Deep Blue Sea — Gary Kinder

Initial rank 281. Sources: 3, 6, 143, 207. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#q0157). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0157).

Total pages: [528](https://groveatlantic.com/book/ship-of-gold-in-the-deep-blue-sea/); ISBN:9780802144256; Paperback; English; 2009. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1936](https://www.amazon.com.au/dp/080214425X); www.amazon.com.au; product 080214425X; retrieved 2026-10-20T14:40:35.140Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780802144256; reference edition: unknown. Ratio confidence: unknown.

Score retained: **73.87**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0636"></a>
## More: The 10,000-Year Rise of the World Economy — Philip Coggan

Initial rank 283. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0636). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0636).

Total pages: [480](https://openlibrary.org/books/OL29456700M); OL29456700M; Print edition (binding unspecified); eng; 2020. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [160](https://www.amazon.com.au/dp/1781258082); amazon.com.au; product 1781258082; retrieved 2026-10-23T22:47:00.729Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL29456700M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **73.81**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0560"></a>
## What Do You Care What Other People Think? — Richard P. Feynman; Ralph Leighton

Initial rank 287. Sources: 118, 182, 193, 205, 228. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0560). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0560).

Total pages: [256](https://openlibrary.org/books/OL7825951M/What_Do_You_Care_What_Other_People_Think); ISBN:0553347845; Paperback; English; 1989. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2575](https://www.amazon.com.au/dp/0553347845); www.amazon.com.au; product 0553347845; retrieved 2026-10-22T08:12:56.503Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0553347845; reference edition: unknown. Ratio confidence: unknown.

Score retained: **73.57**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0806"></a>
## 100+ Years of Plastics — E. Thomas Strom; Seth C. Rasmussen (editors)

Initial rank 290. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0806). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0806).

Total pages: [208](https://books.rakuten.co.jp/rb/12240427/); ISBN:9780841226777; Hardcover; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780841226777; reference edition: unknown. Ratio confidence: unknown.

Score retained: **73.54**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0037"></a>
## The Smartest Guys in the Room — Bethany McLean; Peter Elkind

Initial rank 293. Sources: 6, 150, 244. [Prior content assessment](../analysis/analysis_bestever_261017_2138.md#b007). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0037).

Total pages: [480](https://www.amazon.com.au/dp/1591846609); ASIN:1591846609; Paperback; English; 2013. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [4446](https://www.amazon.com/dp/1591846609); www.amazon.com; product 1591846609; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:1591846609; reference edition: unknown. Ratio confidence: unknown.

Score retained: **73.50**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0803"></a>
## The Economics of the Second World War: Seventy-Five Years On — Stephen Broadberry; Mark Harrison (editors)

Initial rank 294. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0803). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0803).

Total pages: [132](https://cepr.org/system/files/publication-files/60043-the_economics_of_the_second_world_war_seventy_five_years_on.pdf); ISBN:9781912179312; PDF edition; English; 2020. Confidence: high. Existing count retained.

Reference pages: [33](https://kclpure.kcl.ac.uk/ws/portalfiles/portal/128186764/The_Economics_of_the_Second_World_War_Seventy_Five_Years_On_.pdf); edition CEPRPDF:WWII:2020; Chapter references 7–7; Chapter references 16–17; Chapter references 21–22; Chapter references 28–29; Chapter references 36–37; Chapter references 45–45; Chapter references 51–52; Chapter references 56–57; Chapter references 63–64; Chapter references 71–71; Chapter references 79–80; Chapter references 85–85; Chapter references 89–90; Chapter references 96–99; Chapter references 105–106; Chapter references 111–112; Chapter references 120–122. Confidence: high. New count. Seventeen chapter reference sections. Counts pages occupied by references, including pages shared with prose or author biography; excludes pages containing only biographies. Physical PDF extent is 133; page-count edition match remains unconfirmed.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 33 reference pages / 132 total pages = 25.00%; R&D = 5.00 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781912179312; reference edition: CEPRPDF:WWII:2020. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 19.00 | 18.05 |
| Systems integration | 16.00 | 15.06 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -3.24; P14 -0.60; O15 0.00; REL 0.00; RD 5.00. Score **73.49 → 78.49**. Verdict: Consider. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="progress-0750"></a>
## Weaving the Web — Tim Berners-Lee; Mark Fischetti

Initial rank 302. Sources: 244. [Prior content assessment](../analysis/analysis_hn17204467_261023_2134.md#progress-0750). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0750).

Total pages: [256](https://openlibrary.org/books/OL9245413M); /books/OL9245413M; Paperback; English; 2000. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [101](https://www.amazon.com.au/dp/006251587X); amazon.com.au; product 006251587X; retrieved 2026-10-23T21:59:37.156Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL9245413M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **73.31**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="ne6f78bd25a"></a>
## The Sciences of the Artificial — Herbert A. Simon

Initial rank 305. Sources: 130. [Prior content assessment](../analysis/analysis_hn39057219_261020_1731.md#ne6f78bd25a). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#ne6f78bd25a).

Total pages: [256](https://mitpress.mit.edu/9780262537537/the-sciences-of-the-artificial/); ISBN:9780262537537; Paperback; English; 2019. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [104](https://www.amazon.com.au/dp/0262537532); www.amazon.com.au; product 0262537532; retrieved 2026-10-21T20:40:18.456Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780262537537; reference edition: unknown. Ratio confidence: unknown.

Score retained: **73.21**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0697"></a>
## Sensors in Automotive — Junko Yoshida (editor)

Initial rank 307. Sources: 237. [Prior content assessment](../analysis/analysis_chips147622_261023_2134.md#progress-0697). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0697).

Total pages: [152](https://www.eetimes.com/why-a-book-on-sensors-in-automotive/); AspenCore:Sensors-in-Automotive:2020; Book edition (binding unspecified); English; 2020. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: AspenCore:Sensors-in-Automotive:2020; reference edition: unknown. Ratio confidence: unknown.

Score retained: **73.19**. Verdict: Selective. Content confidence: low.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nf19a141734"></a>
## A Singular Mathematical Promenade — Étienne Ghys

Initial rank 308. Sources: 137, 140. [Prior content assessment](../analysis/analysis_mathaha_261020_1731.md#nf19a141734). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nf19a141734).

Total pages: [302](https://perso.ens-lyon.fr/ghys/reviews/Tabachnikov.pdf); ISBN:9782847889390; paperback; English; 2017. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9782847889390; reference edition: unknown. Ratio confidence: unknown.

Score retained: **73.16**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1555"></a>
## Humble Pi: A Comedy of Maths Errors — Matt Parker

Initial rank 316. Sources: 204. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1555). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1555).

Total pages: [336](https://www.penguin.co.uk/books/300640/humble-pi-by-parker-matt/9780141989143); ISBN:9780141989143; Paperback; English; 2020. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [4855](https://www.amazon.com.au/dp/0141989149); www.amazon.com.au; product 0141989149; retrieved 2026-10-22T08:12:20.083Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780141989143; reference edition: unknown. Ratio confidence: unknown.

Score retained: **72.95**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nf754668e17"></a>
## Exploding the Phone — Phil Lapsley

Initial rank 317. Sources: 132. [Prior content assessment](../analysis/analysis_hn38556188_261020_1731.md#nf754668e17). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nf754668e17).

Total pages: [432](https://groveatlantic.com/book/exploding-the-phone/); ISBN:9780802122285; Paperback; English; 2014. Confidence: high. Existing count retained.

Reference pages: [56](https://archive.org/details/explodingphoneun0000laps_s8y2); edition ISBN:9780802122285; bibliographical references 337–392. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. ISBN matches the total-page edition.

Amazon ratings: [480](https://www.amazon.com.au/dp/0802122280); www.amazon.com.au; product 0802122280; retrieved 2026-10-21T20:40:20.101Z. Existing verified snapshot retained.

R&D: 56 reference pages / 432 total pages = 12.96%; R&D = 2.59 points. Edition recorded as matching. Page edition: ISBN:9780802122285; reference edition: ISBN:9780802122285. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -1.88; P14 -1.30; O15 -5.00; REL 0.00; RD 2.59. Score **72.91 → 75.50**. Verdict: Consider. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0763"></a>
## Flight: My Life in Mission Control — Chris Kraft

Initial rank 319. Sources: 244. [Prior content assessment](../analysis/analysis_hn17204467_261023_2134.md#progress-0763). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0763).

Total pages: [384](https://openlibrary.org/books/OL7590949M); /books/OL7590949M; Print format unspecified; English; 2002. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [161](https://www.amazon.com.au/dp/0452283043); amazon.com.au; product 0452283043; retrieved 2026-10-23T22:01:37.184Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL7590949M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **72.87**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="s49"></a>
## Inventing Accuracy — Donald MacKenzie

Initial rank 323. Sources: 49. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#v0003). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#s49).

Total pages: [478](https://openlibrary.org/books/OL9792976M/Inventing_Accuracy); ISBN:0262631474; Paperback; English; 1993. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [32](https://www.amazon.com.au/dp/0262631474); www.amazon.com.au; product 0262631474; retrieved 2026-10-21T20:28:35.741Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0262631474; reference edition: unknown. Ratio confidence: unknown.

Score retained: **72.81**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0677"></a>
## Imperial Chemical Industries: A History: Vols 1 and 2 — W. J. Reader

Initial rank 326. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0677). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0677).

Total pages: [1132](https://wellcomecollection.org/works/cdk28waz); ISBN:0192159372+0192159445; Hardcover, complete two-volume set; English; 1975. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. Individual-volume aggregates are not used for the nominated series.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0192159372+0192159445; reference edition: unknown. Ratio confidence: unknown.

Score retained: **72.78**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. 

<a id="n47ca1851b4"></a>
## The Secret Horsepower Race — Calum E. Douglas

Initial rank 327. Sources: 143. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#n47ca1851b4). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n47ca1851b4).

Total pages: [480](https://www.casematepublishers.com/9781911658900/the-secret-horsepower-race/); ISBN:9781911658504; Hardcover; English; 2020. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [457](https://www.amazon.com.au/dp/1911658506); www.amazon.com.au; product 1911658506; retrieved 2026-10-21T20:40:21.912Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781911658504; reference edition: unknown. Ratio confidence: unknown.

Score retained: **72.75**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0817"></a>
## World Energy Outlook — International Energy Agency

Initial rank 331. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0817). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0817).

Total pages: [352](https://openlibrary.org/books/OL12902280M); /books/OL12902280M; Paperback; English; 1996. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. Individual-volume aggregates are not used for the nominated series.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL12902280M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **72.66**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 3 new Amazon attempts. 

<a id="nc7402e44f9"></a>
## Turing’s Cathedral — George Dyson

Initial rank 333. Sources: 133, 134, 207, 211, 238. [Prior content assessment](../analysis/analysis_hn42157034_261020_1731.md#nc7402e44f9). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nc7402e44f9).

Total pages: [401](https://openlibrary.org/books/OL25011031M/Turing's_cathedral); OL25011031M; Not stated by source; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: [37](https://archive.org/details/turingscathedral0000dyso_m6h3); edition ISBN:9780713997507; bibliographical references 341–377. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [389](https://www.amazon.com.au/dp/0713997508); www.amazon.com.au; product 0713997508; retrieved 2026-10-22T08:12:15.184Z. Existing verified snapshot retained.

R&D: 37 reference pages / 401 total pages = 9.23%; R&D = 1.85 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL25011031M; reference edition: ISBN:9780713997507. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 6.00 | 3.60 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -2.76; P14 -1.40; O15 -5.00; REL 4.00; RD 1.85. Score **72.63 → 74.47**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0458"></a>
## Revolution in The Valley — Andy Hertzfeld

Initial rank 336. Sources: 116, 128, 207, 211, 244. [Prior content assessment](../analysis/analysis_hn33792217_261020_1731.md#g0458). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0458).

Total pages: [297](https://openlibrary.org/books/OL25329399M/Revolution_in_the_valley); ISBN:1449316247; Not stated by source; English; 2011. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [316](https://www.amazon.com.au/dp/1449316247); www.amazon.com.au; product 1449316247; retrieved 2026-10-22T08:12:14.804Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1449316247; reference edition: unknown. Ratio confidence: unknown.

Score retained: **72.48**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="h0315"></a>
## Engineering in Plain Sight — Grady Hillhouse

Initial rank 338. Sources: 97. [Prior content assessment](../analysis/analysis_categories_261021_1600.md#h0315). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#h0315).

Total pages: [224](https://openlibrary.org/books/OL37783137M/Engineering_in_Plain_Sight); ISBN:171850232X; hardcover; Not stated by source; 2022. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1295](https://www.amazon.com.au/dp/171850232X); www.amazon.com.au; product 171850232X; retrieved 2026-10-22T08:12:23.770Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:171850232X; reference edition: unknown. Ratio confidence: unknown.

Score retained: **72.42**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bg5ca24349c5"></a>
## Play Nice But Win — Michael Dell with James Kaplan

Initial rank 339. Sources: 148, 162. [Prior content assessment](../analysis/analysis_bgbillgates_261021_0210.md#bg5ca24349c5). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bg5ca24349c5).

Total pages: [336](https://www.penguinrandomhouse.com/books/622986/play-nice-but-win-by-michael-dell/); 9780593087749; hardcover; English; 2021. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1316](https://www.amazon.com.au/dp/0593087747); www.amazon.com.au; product 0593087747; retrieved 2026-10-22T08:12:44.555Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 9780593087749; reference edition: unknown. Ratio confidence: unknown.

Score retained: **72.41**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0010"></a>
## Sunburst and Luminary — Don Eyles

Initial rank 343. Sources: 207, 211. [Prior content assessment](../analysis/analysis_hn42614722_261023_0229.md#intake-0010). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0010).

Total pages: [376](https://openlibrary.org/books/OL27849851M); /books/OL27849851M; hardcover; English; 2018. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [285](https://www.amazon.com.au/dp/0986385905); amazon.com.au; product 0986385905; retrieved 2026-10-23T08:49:02.847Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL27849851M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **72.33**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0190"></a>
## The Digital Hand — James W. Cortada

Initial rank 346. Sources: 211. [Prior content assessment](../analysis/analysis_hn22692281_261023_0229.md#intake-0190). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0190).

Total pages: [1647](https://openlibrary.org/books/OL15585180M); EditionSet:OL15585180M+OL17187010M+OL17247026M; Complete three-volume print set; English; 2008. Confidence: moderate. Existing count retained.

Reference pages: [277](https://books.google.com/books?id=iHXjswEACAAJ); edition EditionSet:0195165888+019516587X+0195165861; Volume I: Notes and bibliographic essay 397–474; Volume II: Bibliographical references 491–600; Volume III: Bibliographical references 364–452. Confidence: moderate. Existing count retained. Complete three-volume reference count. The linked preview identifies volume I; volume II and III evidence is retained in the saved library records. Excludes indexes.

Amazon ratings: unknown; O15=0 fallback. Individual-volume aggregates are not used for the nominated series.

R&D: 277 reference pages / 1647 total pages = 16.82%; R&D = 3.36 points. Edition recorded as matching. Page edition: EditionSet:OL15585180M+OL17187010M+OL17247026M; reference edition: EditionSet:0195165888+019516587X+0195165861. Ratio confidence: moderate.

Score retained: **72.22**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 3 new Amazon attempts. 

<a id="q0281"></a>
## The University: A History in Stone, Silk, and Blood — William Whyte

Initial rank 349. Sources: 7. [Prior content assessment](../analysis/analysis_anysubject_261017_2227.md#a060). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0281).

Total pages: [448](https://www.amazon.com.au/dp/0674495187); ASIN:0674495187; Hardcover; English; 2026. Confidence: high. Existing count retained.

Reference pages: [78](https://books.google.com/books?id=KuLLEQAAQBAJ&hl=en); edition GoogleBooks:KuLLEQAAQBAJ; Notes 331–408. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 78 reference pages / 448 total pages = 17.41%; R&D = 3.48 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:0674495187; reference edition: GoogleBooks:KuLLEQAAQBAJ. Ratio confidence: low.

Score retained: **72.16**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="q0258"></a>
## Shoe Dog — Phil Knight

Initial rank 351. Sources: 6, 115, 148, 150, 168, 176, 180, 192, 193, 207. [Prior content assessment](../analysis/analysis_glaspbiz_261019_0144.md#g0149). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0258).

Total pages: [400](https://www.amazon.com/dp/1501135910); ASIN:1501135910; Hardcover; English; 2016. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [62908](https://www.amazon.com.au/dp/1501135910); www.amazon.com.au; product 1501135910; retrieved 2026-10-18T22:27:01.770Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:1501135910; reference edition: unknown. Ratio confidence: unknown.

Score retained: **72.14**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0092"></a>
## The Big Short — Michael Lewis

Initial rank 353. Sources: 11, 123, 128, 143, 207. [Prior content assessment](../analysis/analysis_hn33792217_261020_1731.md#q0092). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0092).

Total pages: [320](https://www.amazon.com.au/dp/0393338827); ASIN:0393338827; Paperback; English; 2011. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [17193](https://www.amazon.com/dp/0393338827); www.amazon.com; product 0393338827; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0393338827; reference edition: unknown. Ratio confidence: unknown.

Score retained: **72.05**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g1254"></a>
## Mathematics: Its Content, Methods and Meaning — A. D. Aleksandrov; A. N. Kolmogorov; M. A. Lavrentyev (eds.)

Initial rank 359. Sources: 124, 222, 232. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0554). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1254).

Total pages: [377](https://openlibrary.org/books/OL17484401M/Mathematics); OL17484401M; Not stated by source; English; 1963. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [256](https://www.amazon.com.au/dp/0486409163); www.amazon.com.au; product 0486409163; retrieved 2026-10-18T22:28:07.725Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL17484401M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **71.96**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n5492aa5512"></a>
## The Effective Executive — Peter F. Drucker

Initial rank 362. Sources: 135, 149, 188, 192. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0904). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n5492aa5512).

Total pages: [183](https://openlibrary.org/books/OL17374528M/The_effective_executive); OL17374528M; Not stated by source; English; 1970. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [3613](https://www.amazon.com.au/dp/0330025074); www.amazon.com.au; product 0330025074; retrieved 2026-10-22T08:13:07.911Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL17374528M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **71.93**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0894"></a>
## The Power Of Productivity — William W. Lewis

Initial rank 366. Sources: 120, 162, 232. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0894). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0894).

Total pages: [370](https://openlibrary.org/books/OL9564923M/The_Power_of_Productivity); OL9564923M; Hardcover; English; 2004. Confidence: moderate. Existing count retained.

Reference pages: [2](https://books.google.com/books?id=lSwLll6GNNcC&source=gbs_book_other_versions&hl=en); edition GoogleBooks:lSwLll6GNNcC; Recommended Readings 323–324. Confidence: moderate. New count. Bounded reference sections only; index excluded. Contents boundaries can include a final blank page. Edition matching is unconfirmed.

Amazon ratings: [27](https://www.amazon.com.au/dp/B003SE6BWQ); www.amazon.com.au; product B003SE6BWQ; retrieved 2026-10-21T20:29:03.608Z. Existing verified snapshot retained.

R&D: 2 reference pages / 370 total pages = 0.54%; R&D = 0.11 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL9564923M; reference edition: GoogleBooks:lSwLll6GNNcC. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 16.00 | 15.06 |
| Transferable strategic utility | 14.00 | 14.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.20; O15 -10.00; REL 2.83; RD 0.11. Score **71.89 → 72.00**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="nb06e887b70"></a>
## Apollo 13 (originally Lost Moon: The Perilous Voyage of Apollo 13) — Jim Lovell; Jeffrey Kluger

Initial rank 375. Sources: 143. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#nb06e887b70). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nb06e887b70).

Total pages: [390](https://catalog.wake.gov/Record/787235); ISBN:9780618619580; Paperback; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2141](https://www.amazon.com.au/dp/0618619585); www.amazon.com.au; product 0618619585; retrieved 2026-10-22T08:12:32.459Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780618619580; reference edition: unknown. Ratio confidence: unknown.

Score retained: **71.70**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g1050"></a>
## Kelly: More Than My Share of It All — Clarence L. “Kelly” Johnson; Maggie Smith

Initial rank 385. Sources: 122, 127, 198, 244, 246. [Prior content assessment](../analysis/analysis_skunkbooks_261020_1731.md#g1050). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1050).

Total pages: [224](https://openlibrary.org/books/OL8085264M/Kelly); ISBN:0874744911; Paperback; English; 1989. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [898](https://www.amazon.com.au/dp/0874744911); www.amazon.com.au; product 0874744911; retrieved 2026-10-22T08:12:23.536Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0874744911; reference edition: unknown. Ratio confidence: unknown.

Score retained: **71.44**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0246"></a>
## American Kingpin — Nick Bilton

Initial rank 394. Sources: 6, 116. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0369). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0246).

Total pages: [352](https://www.amazon.com/dp/1591848148); ASIN:1591848148; Hardcover; English; 2017. Confidence: high. Existing count retained.

Reference pages: [1](https://gc.wyldcatalog.org/Record/a2212683); edition ISBN:9781591848141; Bibliographical references 329–329. Confidence: moderate. New count. Documented reference sections only; excludes index. Page and reference editions can differ; ratio is an estimate.

Amazon ratings: [11991](https://www.amazon.com.au/dp/1591848148); www.amazon.com.au; product 1591848148; retrieved 2026-10-18T22:28:01.800Z. Existing verified snapshot retained.

R&D: 1 reference pages / 352 total pages = 0.28%; R&D = 0.06 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:1591848148; reference edition: ISBN:9781591848141. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.17 | 11.81 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.47 | 8.47 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 -0.44; P14 -0.90; O15 0.00; REL 2.00; RD 0.06. Score **71.14 → 71.19**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="intake-0031"></a>
## Eccentric Orbits — John Bloom

Initial rank 403. Sources: 207. [Prior content assessment](../analysis/analysis_hn42614722_261023_0229.md#intake-0031). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0031).

Total pages: [537](https://openlibrary.org/books/OL26414807M); /books/OL26414807M; Hardcover; English; 2016. Confidence: moderate. Existing count retained.

Reference pages: [15](https://archive.org/details/eccentricorbitsi0000bloo); edition ISBN:1611855357; bibliographical references 495–509. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [432](https://www.amazon.com.au/dp/0802121683); amazon.com.au; product 0802121683; retrieved 2026-10-23T08:46:02.831Z. Existing verified snapshot retained.

R&D: 15 reference pages / 537 total pages = 2.79%; R&D = 0.56 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL26414807M; reference edition: ISBN:1611855357. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.00; P14 -1.00; O15 -5.00; REL 0.00; RD 0.56. Score **70.94 → 71.49**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n86606a9cda"></a>
## What Are Numbers? — A. A. Kirillov

Initial rank 407. Sources: 140. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h1210). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n86606a9cda).

Total pages: unknown; no unambiguous supported edition extent established.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: unknown; reference edition: unknown. Ratio confidence: unknown.

Score retained: **70.92**. Verdict: Selective. Content confidence: moderate.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0055"></a>
## ASML's Architects — René Raaijmakers

Initial rank 413. Sources: 43. [Prior content assessment](../analysis/analysis_fourbooks_261018_1025.md#asml). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0055).

Total pages: [664](https://www.amazon.com/dp/908270742X); ASIN:908270742X; Hardcover; English; 2018. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [15](https://www.amazon.com.au/dp/908270742X); www.amazon.com.au; product 908270742X; retrieved 2026-10-18T18:28:29.091Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:908270742X; reference edition: unknown. Ratio confidence: unknown.

Score retained: **70.83**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0650"></a>
## War of Invention — Guy Hartcup

Initial rank 415. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0650). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0650).

Total pages: [226](https://openlibrary.org/books/OL20970601M); /books/OL20970601M; Print format unspecified; English; 1988. Confidence: moderate. Existing count retained.

Reference pages: [3](https://openlibrary.org/books/OL2397007M); edition OL2397007M; Bibliography: 216–218. Confidence: moderate. Existing count retained. Only explicitly bounded notes and bibliography sections are counted; excludes index. Reference edition can differ from the length edition.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 3 reference pages / 226 total pages = 1.33%; R&D = 0.27 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL20970601M; reference edition: OL2397007M. Ratio confidence: low.

Score retained: **70.77**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="intake-0131"></a>
## Sidewinder — Ron Westrum

Initial rank 419. Sources: 210. [Prior content assessment](../analysis/analysis_mech1sy03cs_261023_0229.md#intake-0131). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0131).

Total pages: [352](https://images.abovethetreeline.com/ea/NAVB/pdfs/TCatalogFull_lowres.pdf); ISBN:9781591149811; Paperback; English; 2013. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [64](https://www.amazon.com.au/dp/1591149819); amazon.com.au; product 1591149819; retrieved 2026-10-23T08:05:56.614Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781591149811; reference edition: unknown. Ratio confidence: unknown.

Score retained: **70.70**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0382"></a>
## The Emperor of All Maladies — Siddhartha Mukherjee

Initial rank 420. Sources: 2, 4, 6, 7, 11, 12, 129, 143, 144, 148, 184, 186, 190, 192, 200, 205, 207, 214. [Prior content assessment](../analysis/analysis_hn40864249_261020_1731.md#q0382). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0382).

Total pages: [608](https://www.amazon.com/dp/1439170916); ASIN:1439170916; Paperback; English; 2011. Confidence: high. Existing count retained.

Reference pages: [5](https://discover.aclib.us/Record/1166984); edition ISBN:9781439107959; bibliographical references 537–541. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [9908](https://www.amazon.com/dp/1439170916); www.amazon.com; product 1439170916; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: 5 reference pages / 608 total pages = 0.82%; R&D = 0.16 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:1439170916; reference edition: ISBN:9781439107959. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.17 | 11.81 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.60; O15 0.00; REL 8.25; RD 0.16. Score **70.68 → 70.85**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="n5b9201e509"></a>
## The Character of Physical Law — Richard Feynman

Initial rank 424. Sources: 139, 204, 228, 232. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n5b9201e509). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n5b9201e509).

Total pages: [184](https://mitpress.mit.edu/9780262533416/the-character-of-physical-law/); ISBN:9780262533416; paperback; English; 2017. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [377](https://www.amazon.com.au/dp/0262533413); www.amazon.com.au; product 0262533413; retrieved 2026-10-22T08:12:27.162Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780262533416; reference edition: unknown. Ratio confidence: unknown.

Score retained: **70.63**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n02580139f6"></a>
## Breaking Through: My Life in Science — Katalin Karikó

Initial rank 426. Sources: 132, 182. [Prior content assessment](../analysis/analysis_hn38556188_261020_1731.md#n02580139f6). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n02580139f6).

Total pages: [336](https://www.penguinrandomhouse.com/books/706251/breaking-through-by-katalin-kariko/); 9780593443187; Paperback; English; 2024. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [900](https://www.amazon.com/dp/0593443187); amazon.com; product unspecified; retrieved 2026-10-20T17:31:39.7190723Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 9780593443187; reference edition: unknown. Ratio confidence: unknown.

Score retained: **70.60**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0155"></a>
## Dreamland: The Secret History of Area 51 — Peter W. Merlin

Initial rank 428. Sources: 7. [Prior content assessment](../analysis/analysis_anysubject_261017_2227.md#a104). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0155).

Total pages: [560](https://www.amazon.com.au/dp/0764367099); ASIN:0764367099; Hardcover; English; 2023. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [130](https://www.amazon.com.au/dp/0764367099); www.amazon.com.au; product 0764367099; retrieved 2026-10-18T18:28:54.435Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0764367099; reference edition: unknown. Ratio confidence: unknown.

Score retained: **70.58**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0186"></a>
## Founders at Work — Jessica Livingston

Initial rank 429. Sources: 115, 134, 135, 165, 207, 211, 217, 244. [Prior content assessment](../analysis/analysis_hn36581241_261020_1731.md#g0186). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0186).

Total pages: [506](https://www.amazon.com/dp/1430210788); ASIN:1430210788; Paperback; English; 2008. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [610](https://www.amazon.com.au/dp/1430210788); www.amazon.com.au; product 1430210788; retrieved 2026-10-18T22:27:12.989Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:1430210788; reference edition: unknown. Ratio confidence: unknown.

Score retained: **70.57**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0115"></a>
## The Origins of Political Order — Francis Fukuyama

Initial rank 432. Sources: 12, 119, 144, 201. [Prior content assessment](../analysis/analysis_reasonbooks_261020_1731.md#q0115). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0115).

Total pages: [608](https://academic.macmillan.com/academictrade/9780374533229/theoriginsofpoliticalorder/); ISBN:9780374533229; Paperback; English; 2012. Confidence: high. Existing count retained.

Reference pages: [21](https://catalogue.bnf.fr/ark:/12148/cb424813485); edition ISBN:9781846682568; Bibliographical references 535–555. Confidence: moderate. New count. Documented reference sections only; excludes index. Page and reference editions can differ; ratio is an estimate.

Amazon ratings: [1466](https://www.amazon.com.au/dp/0374533229); www.amazon.com.au; product 0374533229; retrieved 2026-10-20T14:40:03.956Z. Existing verified snapshot retained.

R&D: 21 reference pages / 608 total pages = 3.45%; R&D = 0.69 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780374533229; reference edition: ISBN:9781846682568. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 6.00 | 3.60 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.50; O15 0.00; REL 3.46; RD 0.69. Score **70.53 → 71.22**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g0274"></a>
## My Years with General Motors — Alfred Sloan

Initial rank 433. Sources: 115, 193, 232. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#g0274). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0274).

Total pages: [472](https://openlibrary.org/books/OL1851610M/My_years_with_General_Motors); ISBN:0385042353; Not stated by source; English; 1990. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [198](https://www.amazon.com.au/dp/0385042353); www.amazon.com.au; product 0385042353; retrieved 2026-10-18T22:27:38.973Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0385042353; reference edition: unknown. Ratio confidence: unknown.

Score retained: **70.49**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nbf00ea4047"></a>
## Influence — Robert B. Cialdini

Initial rank 442. Sources: 132, 135, 164, 169, 173, 185, 192, 193, 215, 216, 232. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#nbf00ea4047). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nbf00ea4047).

Total pages: [302](https://openlibrary.org/books/OL3179378M/Influence); OL3179378M; Not stated by source; English; 1984. Confidence: moderate. Existing count retained.

Reference pages: [26](https://openlibrary.org/books/OL3179378M); edition OL3179378M; Bibliography: 282–294; Notes 269–281; Bibliography 282–294. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [12586](https://www.amazon.com.au/dp/006124189X); amazon.com.au; product 006124189X; retrieved 2026-10-24T09:32:33.449Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/006124189X); previously https://www.amazon.de/s?k=Influence%20Robert%20B.%20Cialdini%20paperback. [Product evidence](https://www.amazon.com.au/dp/006124189X). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 26 reference pages / 302 total pages = 8.61%; R&D = 1.72 points. Edition recorded as matching. Page edition: OL3179378M; reference edition: OL3179378M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.20; O15 0.00; REL 6.32; RD 1.72. Score **70.31 → 70.31**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 3 new Amazon attempts. 

<a id="progress-0197"></a>
## Beautiful Evidence — Edward R. Tufte

Initial rank 446. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0197). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0197).

Total pages: [213](https://openlibrary.org/books/OL23240698M); /books/OL23240698M; Print format unspecified; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [226](https://www.amazon.com.au/dp/0961392177); amazon.com.au; product 0961392177; retrieved 2026-10-23T22:12:37.354Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL23240698M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **70.15**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1748"></a>
## In Pursuit of Unicorns: A Journey Through 50 Years of Biotechnology — Tim Harris

Initial rank 449. Sources: 193. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1748). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1748).

Total pages: [548](https://www.amazon.com.au/dp/1621825612); ISBN/ASIN:1621825612; Paperback; English; 2026. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [12](https://www.amazon.com.au/dp/1621824985); www.amazon.com.au; product 1621824985; retrieved 2026-10-22T08:11:45.243Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN/ASIN:1621825612; reference edition: unknown. Ratio confidence: unknown.

Score retained: **70.09**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0657"></a>
## The Great Mental Models — Shane Parrish; Rhiannon Beaubien

Initial rank 451. Sources: 118. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0944). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0657).

Total pages: [190](https://openlibrary.org/books/OL28115347M/The_Great_Mental_Models); OL28115347M; hardcover; Not stated by source; 2020. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [4623](https://www.amazon.com.au/dp/1999449002); www.amazon.com.au; product 1999449002; retrieved 2026-10-22T08:12:49.724Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL28115347M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **70.03**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0203"></a>
## Commodore — Brian Bagnall

Initial rank 454. Sources: 211, 244. [Prior content assessment](../analysis/analysis_hn22692281_261023_0229.md#intake-0203). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0203).

Total pages: [1640](https://www.abebooks.com/9780994031013/Commodore-Company-Edge-Bagnall-Brian-0994031017/plp); EditionSet:9780994031013+9780994031020+9780994031037; Complete three-volume hardcover set; English; 2019. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. Individual-volume aggregates are not used for the nominated series.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: EditionSet:9780994031013+9780994031020+9780994031037; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.99**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 3 new Amazon attempts. 

<a id="q0138"></a>
## Into the Deep — Robert D. Ballard; Christopher Drew

Initial rank 457. Sources: 3. [Prior content assessment](../analysis/analysis_obscurebooks_261017_1936.md). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0138).

Total pages: [336](https://openlibrary.org/books/OL32641333M/Into_the_Deep); ISBN:1426220995; hardcover; English; 2021. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [490](https://www.amazon.it/dp/1426220995); www.amazon.it; product 1426220995; retrieved 2026-10-18T18:55:21.474Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1426220995; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.94**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0804"></a>
## The Wealth of Nations — Adam Smith

Initial rank 458. Sources: 120, 151, 168, 183, 187, 232. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0804). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0804).

Total pages: [1184](https://www.penguinrandomhouse.com/books/168734/the-wealth-of-nations-by-adam-smith/); ISBN:9780679783367; Paperback; English; 2000. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1766](https://www.amazon.com.au/dp/0679783369); www.amazon.com.au; product 0679783369; retrieved 2026-10-21T14:59:20.503Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780679783367; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.93**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0352"></a>
## Empire of Pain — Patrick Radden Keefe

Initial rank 459. Sources: 2, 4, 5, 6, 7, 131, 193, 200, 212. [Prior content assessment](../analysis/analysis_chipwarbooks_261020_1731.md#q0352). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0352).

Total pages: [640](https://www.amazon.com/dp/1984899015); ASIN:1984899015; Paperback; English; 2022. Confidence: high. Existing count retained.

Reference pages: [63](https://library.usi.edu/record/1354469); edition ISBN:9780385545693; Bibliographical references 453–515. Confidence: moderate. New count. Documented reference sections only; excludes index. Page and reference editions can differ; ratio is an estimate.

Amazon ratings: [14061](https://www.amazon.com/dp/1984899015); www.amazon.com; product 1984899015; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: 63 reference pages / 640 total pages = 9.84%; R&D = 1.97 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:1984899015; reference edition: ISBN:9780385545693. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.17 | 11.81 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 -0.28; P14 -0.50; O15 0.00; REL 5.66; RD 1.97. Score **69.91 → 71.88**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g0825"></a>
## Complexity and the Economy — W. Brian Arthur

Initial rank 461. Sources: 120. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0207). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0825).

Total pages: [211](https://openlibrary.org/books/OL27190613M/Complexity_and_the_economy); ISBN:0199334293; Not stated by source; English; 2015. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [32](https://www.amazon.com.au/dp/0199334293); www.amazon.com.au; product 0199334293; retrieved 2026-10-21T20:28:55.571Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0199334293; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.89**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0037"></a>
## Scientists Against Time — James Phinney Baxter

Initial rank 464. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0037). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0037).

Total pages: [473](https://openlibrary.org/books/OL5616957M); OL5616957M; Print edition (binding unspecified); eng; 1968. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1](https://www.amazon.com.au/dp/0262520125); amazon.com.au; product 0262520125; retrieved 2026-10-24T10:42:49.168Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0262520125); previously https://www.amazon.de/s?k=Scientists%20Against%20Time%20James%20Phinney%20Baxter. [Product evidence](https://www.amazon.com.au/dp/0262520125). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL5616957M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -3.24; P14 -8.00; O15 -20.00; REL 0.00; RD 0.00. Score **69.85 → 49.85**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0163"></a>
## Command and Control — Eric Schlosser

Initial rank 470. Sources: 10, 11, 12, 143, 198, 208. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#q0163). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0163).

Total pages: [656](https://www.penguinrandomhouse.com/books/303337/command-and-control-by-eric-schlosser/); ISBN:9780143125785; Paperback; English; 2014. Confidence: high. Existing count retained.

Reference pages: [29](https://ci.nii.ac.jp/ncid/BB16296326); edition ISBN:9780141037912; Bibliographical references 583–611. Confidence: moderate. New count. Documented reference sections only; excludes index. Page and reference editions can differ; ratio is an estimate.

Amazon ratings: [4035](https://www.amazon.com.au/dp/0143125788); www.amazon.com.au; product 0143125788; retrieved 2026-10-21T14:56:30.063Z. Existing verified snapshot retained.

R&D: 29 reference pages / 656 total pages = 4.42%; R&D = 0.88 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780143125785; reference edition: ISBN:9780141037912. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 17.00 | 17.00 |
| Transferable strategic utility | 14.00 | 14.00 |
| Mechanistic and causal depth | 11.29 | 11.29 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 -10.00; H13 -1.84; P14 -1.30; O15 0.00; REL 4.47; RD 0.88. Score **69.73 → 70.61**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="bgaa87d10c3d"></a>
## The General Theory of Employment, Interest, and Money — John Maynard Keynes

Initial rank 471. Sources: 150. [Prior content assessment](../analysis/analysis_bgwarrenbuff_261021_0210.md#bgaa87d10c3d). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bgaa87d10c3d).

Total pages: [403](https://books.google.com/books/about/The_general_theory_of_employment_interes.html?id=rfUeAAAAIAAJ); GoogleBooks:rfUeAAAAIAAJ; print edition; binding unspecified; English; 1936. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1105](https://www.amazon.com.au/dp/0230004768); amazon.com.au; product 0230004768; retrieved 2026-10-23T09:32:12.445Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: GoogleBooks:rfUeAAAAIAAJ; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.68**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="h0174"></a>
## Chasing the Rabbit — Steven J. Spear

Initial rank 473. Sources: 11. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0174). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#h0174).

Total pages: [404](https://openlibrary.org/books/OL22501255M/Chasing_the_rabbit); OL22501255M; Not stated by source; English; 2009. Confidence: moderate. Existing count retained.

Reference pages: [28](https://archive.org/details/chasingrabbithow0000spea); edition ISBN:9780071499880; bibliographical references 365–392. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [36](https://www.amazon.com.au/dp/0071499881); www.amazon.com.au; product 0071499881; retrieved 2026-10-21T20:28:57.062Z. Existing verified snapshot retained.

R&D: 28 reference pages / 404 total pages = 6.93%; R&D = 1.39 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL22501255M; reference edition: ISBN:9780071499880. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 14.00 | 14.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.80; O15 -10.00; REL 0.00; RD 1.39. Score **69.64 → 71.02**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0669"></a>
## Energy to the World: The Story of Saudi Aramco — Scott McMurray

Initial rank 474. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0669). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0669).

Total pages: [562](https://www.aramcolife.com/-/media/aramco-life/publications/history-books/history-book-english-v-1.pdf); ISBN:9781882771141; Complete two-volume PDF edition; English; 2025. Confidence: high. Existing count retained.

Reference pages: [14](https://www.aramcolife.com/-/media/aramco-life/publications/history-books/history-book-english-v-1.pdf); edition ISBN:9781882771141; Volume1: Notes on sources 242–247; Volume2: Notes on sources and bibliography 218–225. Confidence: high. Existing count retained. Numbered section spans from the 2025 second edition. Includes any blank final section pages; excludes credits and indexes.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 14 reference pages / 562 total pages = 2.49%; R&D = 0.50 points. Edition recorded as matching. Page edition: ISBN:9781882771141; reference edition: ISBN:9781882771141. Ratio confidence: moderate.

Score retained: **69.59**. Verdict: Selective. Content confidence: low.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="q0256"></a>
## Moneyball — Michael Lewis

Initial rank 477. Sources: 2, 128, 132, 135, 244. [Prior content assessment](../analysis/analysis_hn33792217_261020_1731.md#q0256). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0256).

Total pages: [336](https://www.amazon.com/dp/0393324818); ASIN:0393324818; Paperback; English; 2004. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [7509](https://www.amazon.com/dp/0393324818); www.amazon.com; product 0393324818; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0393324818; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.50**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0119"></a>
## Spacesuit: Fashioning Apollo — Nicholas de Monchaux

Initial rank 480. Sources: 208. [Prior content assessment](../analysis/analysis_enguvq9h4_261023_0229.md#intake-0119). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0119).

Total pages: [380](https://mitpress.mit.edu/9780262015202/spacesuit/); ISBN:9780262015202; Paperback (publisher current listing); English; 2011. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [69](https://www.amazon.com.au/dp/026201520X); amazon.com.au; product 026201520X; retrieved 2026-10-23T08:07:26.641Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780262015202; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.38**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0854"></a>
## One Billion Hungry — Gordon Conway, with Katy Wilson

Initial rank 481. Sources: 120, 148. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0854). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0854).

Total pages: [439](https://librarycatalog.sps.edu/bib/29637); ISBN:9780801478024; Paperback; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: [80](https://api.pageplace.de/preview/DT0400.9780801466083_A29962791/preview-9780801466083_A29962791.pdf); edition ISBN:9780801466083; References 349–428. Confidence: moderate. New count. Documented reference sections only; excludes index. Page and reference editions can differ; ratio is an estimate.

Amazon ratings: [23](https://www.amazon.com.au/dp/0801478022); www.amazon.com.au; product 0801478022; retrieved 2026-10-21T20:41:46.296Z. Existing verified snapshot retained.

R&D: 80 reference pages / 439 total pages = 18.22%; R&D = 3.64 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780801478024; reference edition: ISBN:9780801466083. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 16.00 | 15.06 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 -10.00; REL 2.00; RD 3.64. Score **69.36 → 73.00**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1666"></a>
## Crude Capitalism — Adam Hanieh

Initial rank 487. Sources: 179. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1666). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1666).

Total pages: [336](https://penguinrandomhousehighereducation.com/book/?isbn=9781839763427); ISBN:9781839763427; Hardcover; English; 2024. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [25](https://www.amazon.com.au/dp/1839763426); www.amazon.com.au; product 1839763426; retrieved 2026-10-22T08:11:44.627Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781839763427; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.21**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0092"></a>
## Project Azorian — Norman Polmar; Michael White

Initial rank 489. Sources: 208. [Prior content assessment](../analysis/analysis_enguvq9h4_261023_0229.md#intake-0092). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0092).

Total pages: [264](https://openlibrary.org/books/OL28497666M); /books/OL28497666M; Print format unspecified; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [325](https://www.amazon.com.au/dp/1591146682); amazon.com.au; product 1591146682; retrieved 2026-10-23T09:00:02.928Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL28497666M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.20**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0552"></a>
## Six Easy Pieces — Richard P. Feynman

Initial rank 490. Sources: 118, 177, 205, 228. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0757). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0552).

Total pages: [146](https://openlibrary.org/books/OL25535172M/Six_easy_pieces); ISBN:0465025277; Not stated by source; English; 2011. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [4784](https://www.amazon.com.au/dp/0465025277); www.amazon.com.au; product 0465025277; retrieved 2026-10-22T08:13:41.152Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0465025277; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.20**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u0900"></a>
## HBR's 10 Must Reads on Strategy (including featured article “What Is Strategy?” by Michael E. Porter) — Harvard Business Review, Michael E. Porter, W. Chan Kim, Renée A. Mauborgne

Initial rank 492. Sources: 188. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u0900). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u0900).

Total pages: [288](https://www.harvard.com/book/9781422157985); ISBN:9781422157985; Paperback; English; 2011. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1312](https://www.amazon.com.au/dp/1422157989); www.amazon.com.au; product 1422157989; retrieved 2026-10-22T08:13:00.554Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781422157985; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.14**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n3cb68f6e47"></a>
## This Is for Everyone — Tim Berners-Lee

Initial rank 494. Sources: 141. [Prior content assessment](../analysis/analysis_vetogates_261021_0047.md#n3cb68f6e47). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n3cb68f6e47).

Total pages: [400](https://www.panmacmillan.com/authors/tim-berners-lee/this-is-for-everyone/9781035023677); ISBN:9781035023677; Hardback; English; 2025. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [336](https://www.amazon.com.au/dp/1035023679); www.amazon.com.au; product 1035023679; retrieved 2026-10-22T08:12:03.737Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781035023677; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.09**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bga6834f601a"></a>
## Railroader — Howard Green

Initial rank 496. Sources: 148. [Prior content assessment](../analysis/analysis_bgbillgates_261021_0210.md#bga6834f601a). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bga6834f601a).

Total pages: [336](https://books.google.com/books/about/_.html?id=shs7EAAAQBAJ); 9781989025048; print; binding unverified; English; 2018. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [250](https://www.amazon.com.au/dp/1989025048); www.amazon.com.au; product 1989025048; retrieved 2026-10-22T08:12:05.519Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 9781989025048; reference edition: unknown. Ratio confidence: unknown.

Score retained: **69.02**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0163"></a>
## Range — David Epstein

Initial rank 500. Sources: 115, 132, 148, 177, 188, 193. [Prior content assessment](../analysis/analysis_hn38556188_261020_1731.md#g0163). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0163).

Total pages: [352](https://openlibrary.org/books/OL29482836M/Range); OL29482836M; Not stated by source; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: [32](https://catalog.losgatosca.gov/Record/519236); edition ISBN:9780735214484; bibliographical references 297–328. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [12658](https://www.amazon.com.au/dp/0735214484); www.amazon.com.au; product 0735214484; retrieved 2026-10-18T22:27:05.564Z. Existing verified snapshot retained.

R&D: 32 reference pages / 352 total pages = 9.09%; R&D = 1.82 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL29482836M; reference edition: ISBN:9780735214484. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.70; O15 0.00; REL 4.47; RD 1.82. Score **68.89 → 70.71**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="q0179"></a>
## How Africa Works — Joe Studwell

Initial rank 501. Sources: 10. [Prior content assessment](../analysis/analysis_pastedlists_261018_0118.md#p017). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0179).

Total pages: [448](https://www.amazon.com.au/dp/1788167996); ASIN:1788167996; Hardcover; English; 2026. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [127](https://www.amazon.com.au/dp/1788167996); www.amazon.com.au; product 1788167996; retrieved 2026-10-18T18:29:05.064Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:1788167996; reference edition: unknown. Ratio confidence: unknown.

Score retained: **68.87**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0391"></a>
## Empires of Light — Jill Jonnes

Initial rank 502. Sources: 116, 207, 229, 230, 231, 245. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0391). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0391).

Total pages: [464](https://openlibrary.org/books/OL7427531M/Empires_of_Light); ISBN:0375758844; Not stated by source; English; 2004. Confidence: moderate. Existing count retained.

Reference pages: [23](https://lib.ccsdetroit.edu/bib/50738); edition ISBN:9780375758843; bibliographical references 375–397. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [901](https://www.amazon.com.au/dp/0375758844); www.amazon.com.au; product 0375758844; retrieved 2026-10-18T22:28:05.815Z. Existing verified snapshot retained.

R&D: 23 reference pages / 464 total pages = 4.96%; R&D = 0.99 points. Edition recorded as matching. Page edition: ISBN:0375758844; reference edition: ISBN:9780375758843. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -5.20; P14 -2.30; O15 -5.00; REL 4.47; RD 0.99. Score **68.85 → 69.84**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g0533"></a>
## Who Says Elephants Can't Dance? — Louis V. Gerstner Jr.

Initial rank 505. Sources: 117. [Prior content assessment](../analysis/analysis_glaspstrat_261019_0144.md#g0533). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0533).

Total pages: [292](https://openlibrary.org/books/OL7277772M/Who_Says_Elephants_Can't_Dance); ISBN:0060523808; Not stated by source; English; 2003. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1120](https://www.amazon.com/dp/0060523808); www.amazon.com; product 0060523808; retrieved 2026-10-18T22:28:28.175Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0060523808; reference edition: unknown. Ratio confidence: unknown.

Score retained: **68.82**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g1140"></a>
## The Most Important Thing — Howard Marks

Initial rank 506. Sources: 123, 150, 168, 187, 192, 215. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h1014). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1140).

Total pages: [180](https://openlibrary.org/books/OL24906038M/The_most_important_thing); ISBN:0231153686; Not stated by source; English; 2011. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [4013](https://www.amazon.com.au/dp/0231153686); www.amazon.com.au; product 0231153686; retrieved 2026-10-22T08:13:54.835Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0231153686; reference edition: unknown. Ratio confidence: unknown.

Score retained: **68.81**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0132"></a>
## X, Y & Z — Dermot Turing

Initial rank 507. Sources: 43. [Prior content assessment](../analysis/analysis_fourbooks_261018_1025.md#xyz). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0132).

Total pages: [320](https://www.amazon.com.au/dp/0750993936); ASIN:0750993936; Paperback; English; 2021. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [621](https://www.amazon.com.au/dp/0750993936); www.amazon.com.au; product 0750993936; retrieved 2026-10-18T18:28:44.357Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0750993936; reference edition: unknown. Ratio confidence: unknown.

Score retained: **68.79**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nddeeef2037"></a>
## The Pope of Physics: Enrico Fermi and the Birth of the Atomic Age — Gino Segrè; Bettina Hoerlin

Initial rank 512. Sources: 139. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#nddeeef2037). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nddeeef2037).

Total pages: [374](https://books.google.com/books/about/The_Pope_of_Physics.html?id=dDsKDAAAQBAJ); ISBN:9781627790062; Format not specified in catalog; English; 2016. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [498](https://www.amazon.com.au/dp/1627790055); www.amazon.com.au; product 1627790055; retrieved 2026-10-22T08:12:11.371Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781627790062; reference edition: unknown. Ratio confidence: unknown.

Score retained: **68.66**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u0145"></a>
## The Worlds I See — Fei-Fei Li

Initial rank 517. Sources: 176. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u0145). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u0145).

Total pages: [336](https://us.macmillan.com/books/9781250897930/theworldsisee/); ISBN:9781250897930; Hardcover; English; 2023. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1469](https://www.amazon.com.au/dp/1250897939); www.amazon.com.au; product 1250897939; retrieved 2026-10-22T08:13:05.304Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781250897930; reference edition: unknown. Ratio confidence: unknown.

Score retained: **68.60**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0272"></a>
## Monetizing Innovation — Madhavan Ramanujam

Initial rank 518. Sources: 115, 168. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0572). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0272).

Total pages: [241](https://openlibrary.org/books/OL27213013M/Monetizing_innovation); ISBN:1119240867; Not stated by source; English; 2016. Confidence: moderate. Existing count retained.

Reference pages: [8](https://www.wiley.com/en-gb/monetizing-innovation-how-smart-companies-design-the-product-around-the-price-p-9781119240884); edition ISBN:9781119240884; Notes 219–226. Confidence: moderate. New count. Only documented reference sections are counted; excludes index. Edition matching is unconfirmed; R&D ratio is an estimate.

Amazon ratings: [523](https://www.amazon.com.au/dp/1119240867); www.amazon.com.au; product 1119240867; retrieved 2026-10-18T22:27:38.324Z. Existing verified snapshot retained.

R&D: 8 reference pages / 241 total pages = 3.32%; R&D = 0.66 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:1119240867; reference edition: ISBN:9781119240884. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.00; O15 -5.00; REL 2.00; RD 0.66. Score **68.59 → 69.26**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="n4d0716e7af"></a>
## The Nature and Art of Workmanship — David Pye

Initial rank 520. Sources: 132. [Prior content assessment](../analysis/analysis_hn38556188_261020_1731.md#n4d0716e7af). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n4d0716e7af).

Total pages: [144](https://www.bloomsbury.com/us/nature-and-art-of-workmanship-9780713689310/); 9780713689310; Paperback; English; 2008. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [117](https://www.amazon.com/dp/0713689315); amazon.com; product unspecified; retrieved 2026-10-20T17:31:42.3321543Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 9780713689310; reference edition: unknown. Ratio confidence: unknown.

Score retained: **68.57**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0137"></a>
## Between Silk and Cyanide — Leo Marks

Initial rank 522. Sources: 4. [Prior content assessment](../analysis/analysis_mustreads_261017_2010.md#m154). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0137).

Total pages: [613](https://openlibrary.org/books/OL7722770M/Between_Silk_and_Cyanide); ISBN:068486780X; Paperback; English; 2000. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1450](https://www.amazon.com.au/dp/068486780X); www.amazon.com.au; product 068486780X; retrieved 2026-10-18T18:29:00.765Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:068486780X; reference edition: unknown. Ratio confidence: unknown.

Score retained: **68.50**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0172"></a>
## No Rules Rules — Reed Hastings

Initial rank 523. Sources: 115, 155. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0596). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0172).

Total pages: [460](https://openlibrary.org/books/OL29849909M/No_Rules_Rules); ISBN:0593152387; Not stated by source; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: [4](https://discover.knoxcountylibrary.org/Record/26893); edition ISBN:9781984877864; bibliographical references 275–278. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [8429](https://www.amazon.com.au/dp/0593152387); www.amazon.com.au; product 0593152387; retrieved 2026-10-18T22:27:08.419Z. Existing verified snapshot retained.

R&D: 4 reference pages / 460 total pages = 0.87%; R&D = 0.17 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0593152387; reference edition: ISBN:9781984877864. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.60; O15 0.00; REL 2.00; RD 0.17. Score **68.49 → 68.67**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="n22e674a3b0"></a>
## Noise: A Flaw in Human Judgment — Daniel Kahneman, Olivier Sibony and Cass R. Sunstein

Initial rank 534. Sources: 142, 178. [Prior content assessment](../analysis/analysis_rationality_261020_1731.md#n22e674a3b0). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n22e674a3b0).

Total pages: [464](https://www.hachettebookgroup.com/titles/daniel-kahneman/noise/9780316451390/); ISBN:9780316451390; Paperback; English; 2022. Confidence: moderate. Existing count retained.

Reference pages: [40](https://library.usi.edu/record/1385438?ln=en&p=subjectheading%3A%5BPSYCHOLOGY+%2F+Cognitive+Psychology+%26+Cognition.%5D); edition ISBN:9780316451406; bibliographical references 399–438. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [4734](https://www.amazon.com.au/dp/0316451398); www.amazon.com.au; product 0316451398; retrieved 2026-10-22T08:13:32.256Z. Existing verified snapshot retained.

R&D: 40 reference pages / 464 total pages = 8.62%; R&D = 1.72 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780316451390; reference edition: ISBN:9780316451406. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 0.00; REL 2.00; RD 1.72. Score **68.37 → 70.09**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="q0193"></a>
## The Ancestor's Tale — Richard Dawkins; Yan Wong (revised edition)

Initial rank 535. Sources: 9, 204, 232. [Prior content assessment](../analysis/analysis_explainworld_261017_2336.md#w084). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0193).

Total pages: [673](https://www.amazon.com/dp/061861916X); ASIN:061861916X; Paperback; English; 2005. Confidence: high. Existing count retained.

Reference pages: [19](https://archive.org/details/ancestorstale00rich_0); edition ISBN:061861916X; bibliographical references 624–642. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [504](https://www.amazon.it/dp/061861916X); www.amazon.it; product 061861916X; retrieved 2026-10-18T18:29:12.025Z. Existing verified snapshot retained.

R&D: 19 reference pages / 673 total pages = 2.82%; R&D = 0.56 points. Edition recorded as matching. Page edition: ASIN:061861916X; reference edition: ISBN:061861916X. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.17 | 11.81 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 6.00 | 3.60 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.20; O15 -5.00; REL 2.83; RD 0.56. Score **68.37 → 68.93**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0090"></a>
## The Structure of Scientific Revolutions — Thomas S. Kuhn

Initial rank 543. Sources: 5, 118, 153, 185, 190, 193, 204, 212, 214, 215, 232. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0546). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0090).

Total pages: [264](https://www.amazon.com.au/dp/0226458113); ASIN:0226458113; Hardcover; English; 2012. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2054](https://www.amazon.com/dp/0226458113); www.amazon.com; product 0226458113; retrieved 2026-10-18T22:28:30.170Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0226458113; reference edition: unknown. Ratio confidence: unknown.

Score retained: **68.27**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0476"></a>
## The Master Algorithm — Pedro Domingos

Initial rank 547. Sources: 116, 178. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0476). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0476).

Total pages: [352](https://openlibrary.org/books/OL27362042M/The_Master_Algorithm); ISBN:0465094279; paperback; Not stated by source; 2018. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1682](https://www.amazon.com.au/dp/0465094279); www.amazon.com.au; product 0465094279; retrieved 2026-10-22T08:13:33.368Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0465094279; reference edition: unknown. Ratio confidence: unknown.

Score retained: **68.17**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0418"></a>
## Army Of None — Paul Scharre

Initial rank 549. Sources: 116, 148, 193. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0418). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0418).

Total pages: [436](https://openlibrary.org/books/OL26959079M/Army_of_none); ISBN:0393608980; Not stated by source; English; 2018. Confidence: moderate. Existing count retained.

Reference pages: [55](https://catalog.iavalley.edu/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=30778); edition ISBN:9780393356588; bibliographical references 369–423. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [746](https://www.amazon.com.au/dp/0393608980); www.amazon.com.au; product 0393608980; retrieved 2026-10-18T22:28:10.392Z. Existing verified snapshot retained.

R&D: 55 reference pages / 436 total pages = 12.61%; R&D = 2.52 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0393608980; reference edition: ISBN:9780393356588. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.80; O15 -5.00; REL 2.83; RD 2.52. Score **68.16 → 70.68**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="intake-0271"></a>
## The Sum of the People — Andrew Whitby

Initial rank 554. Sources: 212. [Prior content assessment](../analysis/analysis_smb1hg08ou_261023_0229.md#intake-0271). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0271).

Total pages: [368](https://www.hachettebookgroup.com/titles/andrew-whitby/the-sum-of-the-people/9781541619340/); ISBN:9781541619340; Hardcover; English; 2020. Confidence: high. Existing count retained.

Reference pages: [61](https://archive.org/details/sumofpeoplehowce0000whit); edition ISBN:9781541619340; bibliographical references 275–335. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. ISBN matches the total-page edition.

Amazon ratings: [28](https://www.amazon.com.au/dp/154161934X); amazon.com.au; product 154161934X; retrieved 2026-10-23T08:39:02.787Z. Existing verified snapshot retained.

R&D: 61 reference pages / 368 total pages = 16.58%; R&D = 3.32 points. Edition recorded as matching. Page edition: ISBN:9781541619340; reference edition: ISBN:9781541619340. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.60; O15 -10.00; REL 0.00; RD 3.32. Score **68.03 → 71.34**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0017"></a>
## When the Heavens Went on Sale — Ashlee Vance

Initial rank 555. Sources: 207. [Prior content assessment](../analysis/analysis_hn42614722_261023_0229.md#intake-0017). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0017).

Total pages: [544](https://www.penguin.com.au/books/when-the-heavens-went-on-sale-9780753557761); ISBN:9780753557761; Paperback; English; 2024. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [391](https://www.amazon.com.au/dp/0753557762); amazon.com.au; product 0753557762; retrieved 2026-10-23T09:03:02.943Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780753557761; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.99**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0143"></a>
## The Dictator’s Handbook — Bruce Bueno de Mesquita; Alastair Smith

Initial rank 556. Sources: 8, 9, 11, 166, 196, 197, 215. [Prior content assessment](../analysis/analysis_pastefollow_261018_0130.md#f004). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0143).

Total pages: [352](https://www.amazon.com.au/dp/1610391845); ASIN:1610391845; Paperback; English; 2012. Confidence: high. Existing count retained.

Reference pages: [13](https://archive.org/details/dictatorshandboo0000buen); edition ISBN:9781610390446; bibliographical references 287–299. Confidence: moderate. New count. Explicit library reference range. The compound surname Bueno de Mesquita was reconciled manually. Total-page edition may differ; unlisted notes are not counted.

Amazon ratings: [2462](https://www.amazon.com/dp/1610391845); www.amazon.com; product 1610391845; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: 13 reference pages / 352 total pages = 3.69%; R&D = 0.74 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:1610391845; reference edition: ISBN:9781610390446. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 14.17 | 11.81 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 10.59 | 10.59 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.50; O15 0.00; REL 4.90; RD 0.74. Score **67.99 → 68.73**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nd00d2fb0cf"></a>
## The Human Use of Human Beings — Norbert Wiener

Initial rank 557. Sources: 144, 215, 232. [Prior content assessment](../analysis/analysis_reasonbooks_261020_1731.md#nd00d2fb0cf). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nd00d2fb0cf).

Total pages: [200](https://dl.kli.re.kr/library/10110/contents/6026017); ISBN:9780306803208; Paperback; English; 1988. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [283](https://www.amazon.com.au/dp/0306803208); www.amazon.com.au; product 0306803208; retrieved 2026-10-22T08:12:47.969Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780306803208; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.96**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nf2334e4f10"></a>
## Every Tool’s a Hammer — Adam Savage

Initial rank 558. Sources: 135, 182. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0325). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nf2334e4f10).

Total pages: [320](https://openlibrary.org/books/OL29425045M/Every_Tool's_a_Hammer); OL29425045M; Hardcover; English; 2019. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2809](https://www.amazon.com.au/dp/1471185117); www.amazon.com.au; product 1471185117; retrieved 2026-10-22T08:13:37.387Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL29425045M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.92**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0660"></a>
## The Language Instinct — Steven Pinker

Initial rank 559. Sources: 118, 164, 185, 203, 232. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0660). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0660).

Total pages: [525](https://openlibrary.org/books/OL17013665M/The_language_instinct); ISBN:0060958332; Not stated by source; English; 2000. Confidence: moderate. Existing count retained.

Reference pages: [34](https://openlibrary.org/books/OL17013665M); edition OL17013665M; bibliographical references 469–502. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [1287](https://www.amazon.com.au/dp/0060958332); amazon.com.au; product 0060958332; retrieved 2026-10-24T09:44:19.936Z. Newly established count from a saved snapshot; confidence high.

R&D: 34 reference pages / 525 total pages = 6.48%; R&D = 1.30 points. Edition recorded as matching. Page edition: ISBN:0060958332; reference edition: OL17013665M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.20; O15 0.00; REL 4.00; RD 1.30. Score **67.91 → 67.91**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 3 new Amazon attempts. 

<a id="intake-0345"></a>
## Making Modern Science — Peter J. Bowler; Iwan Rhys Morus

Initial rank 560. Sources: 214. [Prior content assessment](../analysis/analysis_hn30489142_261023_0229.md#intake-0345). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0345).

Total pages: [464](https://openlibrary.org/books/OL7415497M); /books/OL7415497M; Print format unspecified; English; 2005. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [72](https://www.amazon.com.au/dp/0226068609); amazon.com.au; product 0226068609; retrieved 2026-10-23T08:40:02.799Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL7415497M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.88**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0473"></a>
## The Inmates Are Running the Asylum — Alan Cooper

Initial rank 561. Sources: 116, 219, 220, 232. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0964). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0473).

Total pages: [255](https://openlibrary.org/books/OL3699613M/The_inmates_are_running_the_asylum); ISBN:0672326140; Not stated by source; English; 2004. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [307](https://www.amazon.com.au/dp/0672326140); www.amazon.com.au; product 0672326140; retrieved 2026-10-22T08:12:58.032Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0672326140; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.86**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0230"></a>
## Confessions of a Pricing Man — Hermann Simon

Initial rank 562. Sources: 115. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0217). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0230).

Total pages: [236](https://openlibrary.org/books/OL28132613M/Confessions_of_the_Pricing_Man); ISBN:3319203991; paperback; Not stated by source; 2015. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [474](https://www.amazon.com.au/dp/3319203991); www.amazon.com.au; product 3319203991; retrieved 2026-10-18T22:27:25.657Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:3319203991; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.84**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0197"></a>
## Why Greatness Cannot Be Planned — Kenneth O. Stanley; Joel Lehman

Initial rank 565. Sources: 8, 173, 177, 193. [Prior content assessment](../analysis/analysis_readlately_261017_2316.md#h024). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0197).

Total pages: [150](https://www.amazon.com.au/dp/3319155237); ASIN:3319155237; Paperback; English; 2015. Confidence: high. Existing count retained.

Reference pages: [5](https://library.kaist.ac.kr/search/ctlgSearch/posesn/view.do?bibctrlno=827437&se=b0&ty=B); edition ISBN:9783319155234; bibliographical references 137–141. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [362](https://www.amazon.com/dp/3319155237); www.amazon.com; product 3319155237; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: 5 reference pages / 150 total pages = 3.33%; R&D = 0.67 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:3319155237; reference edition: ISBN:9783319155234. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 11.33 | 7.56 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 9.18 | 9.18 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.10; O15 -5.00; REL 3.46; RD 0.67. Score **67.75 → 68.41**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="q0183"></a>
## Capital in the Twenty-First Century — Thomas Piketty

Initial rank 566. Sources: 12, 120, 148, 161, 185, 187. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0805). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0183).

Total pages: [816](https://www.amazon.com.au/dp/0674979850); ASIN:0674979850; Paperback; English; 2017. Confidence: high. Existing count retained.

Reference pages: [77](https://www.loc.gov/item/2013036024/); edition Catalog:https://www.loc.gov/item/2013036024/; bibliographical references 579–655. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [5773](https://www.amazon.com/dp/0674979850); www.amazon.com; product 0674979850; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: 77 reference pages / 816 total pages = 9.44%; R&D = 1.89 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:0674979850; reference edition: Catalog:https://www.loc.gov/item/2013036024/. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.30; O15 0.00; REL 4.47; RD 1.89. Score **67.74 → 69.63**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="q0212"></a>
## The Control of Nature — John McPhee

Initial rank 567. Sources: 7, 229. [Prior content assessment](../analysis/analysis_anysubject_261017_2227.md#a098). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0212).

Total pages: [288](https://www.amazon.com.au/dp/0374522596); ASIN:0374522596; Paperback; English; 1990. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [700](https://www.amazon.com/dp/0374522596); www.amazon.com; product 0374522596; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0374522596; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.72**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u0940"></a>
## Postwar: A History of Europe Since 1945 — Tony Judt

Initial rank 568. Sources: 189, 199. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u0940). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u0940).

Total pages: [960](https://openlibrary.org/books/OL40385404M); /books/OL40385404M; Book (format unspecified); English; 2011. Confidence: moderate. Existing count retained.

Reference pages: [44](https://www.cca.qc.ca/fr/recherche/details/library/publication/71333824); edition ISBN:9780143037750; bibliographical references 835–878. Confidence: moderate. New count. Documented sections only; index excluded. Search-index snapshot. Edition may differ from total-page edition. 

Amazon ratings: [1301](https://www.amazon.com.au/dp/0143037757); amazon.com.au; product 0143037757; retrieved 2026-10-23T10:24:12.704Z. Existing verified snapshot retained.

R&D: 44 reference pages / 960 total pages = 4.58%; R&D = 0.92 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL40385404M; reference edition: ISBN:9780143037750. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -0.84; P14 -2.10; O15 0.00; REL 2.00; RD 0.92. Score **67.72 → 68.64**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="rem-u0184"></a>
## Invent and Wander — Jeff Bezos

Initial rank 570. Sources: 177. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u0184). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u0184).

Total pages: [288](https://www.amazon.com.au/dp/1647820715); ISBN/ASIN:1647820715; Hardcover; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [3479](https://www.amazon.com.au/dp/1647820715); www.amazon.com.au; product 1647820715; retrieved 2026-10-21T21:28:55.389Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN/ASIN:1647820715; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.72**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0059"></a>
## Fate Is The Hunter — Ernest K. Gann

Initial rank 573. Sources: 114, 143, 152, 182, 198, 216, 232. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#g0059). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0059).

Total pages: [416](https://www.simonandschuster.ca/books/Fate-is-the-Hunter/Ernest-K-Gann/9780671636036); ISBN:9780671636036; Paperback; English; 1986. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2418](https://www.amazon.com.au/dp/0671636030); www.amazon.com.au; product 0671636030; retrieved 2026-10-18T22:26:33.584Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780671636036; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.68**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0074"></a>
## The Unbound Prometheus — David S. Landes

Initial rank 577. Sources: 39, 241. [Prior content assessment](../analysis/analysis_web80_261018_0229.md#w39). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0074).

Total pages: [576](https://openlibrary.org/books/OL18889067M/The_unbound_Prometheus); ISBN:052153402X; Paperback; English; 2003. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [36](https://www.amazon.com.au/dp/052153402X); www.amazon.com.au; product 052153402X; retrieved 2026-10-18T18:28:26.731Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:052153402X; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.66**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n173dd4c6a8"></a>
## Darwin Among the Machines — George Dyson

Initial rank 578. Sources: 134, 238. [Prior content assessment](../analysis/analysis_hn36581241_261020_1731.md#n173dd4c6a8). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n173dd4c6a8).

Total pages: [286](https://openlibrary.org/books/OL16181109M/Darwin_among_the_machines); OL16181109M; Not stated by source; English; 1998. Confidence: moderate. Existing count retained.

Reference pages: [33](https://openlibrary.org/books/OL655810M); edition OL655810M; bibliographical references 229–261. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [74](https://www.amazon.com.au/dp/0738200301); amazon.com.au; product 0738200301; retrieved 2026-10-24T09:47:19.968Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://books.google.com/books/about/Darwin_Among_The_Machines.html?hl=en&id=bd6bAnApnJUC&output=html_text). Google Books identifies ISBN 0738200301 as George B. Dyson, Basic Books, 1998. Amazon abbreviates the author as Dyson. This product has 74 ratings, versus 2 for ISBN 0713992050; neither count is summed.

Purchase link: [updated product](https://www.amazon.de/dp/0738200301); previously https://www.amazon.de/s?k=Darwin%20Among%20the%20Machines%20George%20Dyson%20paperback. [Product evidence](https://www.amazon.com.au/dp/0738200301). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 33 reference pages / 286 total pages = 11.54%; R&D = 2.31 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL16181109M; reference edition: OL655810M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.90; O15 -10.00; REL 2.00; RD 2.31. Score **67.64 → 57.64**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 3 new Amazon attempts. 

<a id="n7323020521"></a>
## Dance of the Photons — Anton Zeilinger

Initial rank 579. Sources: 139, 193. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n7323020521). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n7323020521).

Total pages: [305](https://iucat.iu.edu/iub/9277560); ISBN:9780374239664; hardcover; English; 2010. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [140](https://www.amazon.com.au/dp/0374239665); www.amazon.com.au; product 0374239665; retrieved 2026-10-22T08:12:43.799Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780374239664; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.62**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u0448"></a>
## The Undoing Project: A Friendship That Changed Our Minds — Michael Lewis

Initial rank 580. Sources: 182, 208. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u0448). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u0448).

Total pages: [320](https://openlibrary.org/books/OL29742579M); /books/OL29742579M; Book (format unspecified); English; 2016. Confidence: moderate. Existing count retained.

Reference pages: [8](https://archive.org/details/undoingprojectfr0000lewi_u6c1); edition ISBN:9780393254594; bibliographical references 353–360. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [11703](https://www.amazon.com.au/dp/1410496457); amazon.com.au; product 1410496457; retrieved 2026-10-23T10:26:12.719Z. Existing verified snapshot retained.

R&D: 8 reference pages / 320 total pages = 2.50%; R&D = 0.50 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL29742579M; reference edition: ISBN:9780393254594. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.20; P14 -1.00; O15 0.00; REL 2.00; RD 0.50. Score **67.62 → 68.12**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0884"></a>
## The Great Wave — David Hackett Fischer

Initial rank 581. Sources: 120, 167. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0884). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0884).

Total pages: [552](https://openlibrary.org/books/OL7388480M/The_Great_Wave); OL7388480M; Not stated by source; English; 1999. Confidence: moderate. Existing count retained.

Reference pages: [139](https://openlibrary.org/books/OL814657M); edition OL814657M; bibliographical references 363–501. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [145](https://www.amazon.com.au/dp/019512121X); amazon.com.au; product 019512121X; retrieved 2026-10-24T09:48:49.978Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/019512121X); previously https://www.amazon.com/dp/B002TQKS0K. [Product evidence](https://www.amazon.com.au/dp/019512121X). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 139 reference pages / 552 total pages = 25.18%; R&D = 5.04 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL7388480M; reference edition: OL814657M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.00; O15 -5.00; REL 2.00; RD 5.04. Score **67.62 → 62.62**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 2 new Amazon attempts. 

<a id="g0848"></a>
## Misbehaving — Richard H. Thaler

Initial rank 582. Sources: 120, 215. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0848). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0848).

Total pages: [432](https://www.amazon.com/dp/039335279X); ASIN:039335279X; Paperback; English; 2016. Confidence: high. Existing count retained.

Reference pages: [33](https://catalog.duchesnelibraries.org/Record/197047?page=1&recordIndex=3&referred=resultIndex&searchId=51358723); edition ISBN:9780393080940; bibliographical references 359–391. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [4685](https://www.amazon.com.au/dp/039335279X); www.amazon.com.au; product 039335279X; retrieved 2026-10-22T08:13:44.256Z. Existing verified snapshot retained.

R&D: 33 reference pages / 432 total pages = 7.64%; R&D = 1.53 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:039335279X; reference edition: ISBN:9780393080940. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -0.48; P14 -1.10; O15 0.00; REL 2.00; RD 1.53. Score **67.59 → 69.12**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="q0277"></a>
## The Death and Life of Great American Cities — Jane Jacobs

Initial rank 583. Sources: 3, 7, 9, 10, 215, 232. [Prior content assessment](../analysis/analysis_pastedlists_261018_0118.md#p013). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0277).

Total pages: [480](https://www.amazon.com.au/dp/067974195X); ASIN:067974195X; Paperback; English; 1992. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1701](https://www.amazon.com/dp/067974195X); www.amazon.com; product 067974195X; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:067974195X; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.55**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0201"></a>
## Startup — Jerry Kaplan

Initial rank 584. Sources: 115, 168, 207, 217. [Prior content assessment](../analysis/analysis_glaspbiz_261019_0144.md#g0201). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0201).

Total pages: [336](https://openlibrary.org/books/OL7351449M/Startup); ISBN:0140257314; Not stated by source; English; 1996. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [71](https://www.amazon.com.au/dp/0140257314); www.amazon.com.au; product 0140257314; retrieved 2026-10-18T22:27:17.072Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0140257314; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.52**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0771"></a>
## The Making of Prince of Persia — Jordan Mechner

Initial rank 585. Sources: 244. [Prior content assessment](../analysis/analysis_hn17204467_261023_2134.md#progress-0771). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0771).

Total pages: [336](https://newsouthbooks.com.au/books/the-making-of-prince-of-persia/); ISBN:9780578627311; Hardcover; English; 2020. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1035](https://www.amazon.com.au/dp/0578627310); amazon.com.au; product 0578627310; retrieved 2026-10-23T22:44:37.997Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780578627311; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.50**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0313"></a>
## The Big Score — Michael S. Malone

Initial rank 586. Sources: 115, 232, 237. [Prior content assessment](../analysis/analysis_glaspbiz_261019_0144.md#g0313). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0313).

Total pages: [442](https://openlibrary.org/books/OL21336636M/The_big_score); OL21336636M; Not stated by source; English; 1985. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [104](https://www.amazon.com.au/dp/1953953166); www.amazon.com.au; product 1953953166; retrieved 2026-10-18T22:27:48.846Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL21336636M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.48**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0592"></a>
## Landmarks in Mechanical Engineering — ASME History and Heritage Committee

Initial rank 587. Sources: 234. [Prior content assessment](../analysis/analysis_locmechan_261023_2134.md#progress-0592). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0592).

Total pages: [364](https://books.google.com/books?id=402OzgEACAAJ); ISBN:9781557530936; Print edition (binding unspecified); English; 1997. Confidence: moderate. Existing count retained.

Reference pages: [2](https://studylib.net/doc/28030087/landmarks-in-mechanical-engineering); edition ISBN:1557530947; Further reading 351–352. Confidence: moderate. Existing count retained. Count covers the named reference sections only; excludes the index. Contents boundaries can include a final blank page. Edition may differ from the page-count edition.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 2 reference pages / 364 total pages = 0.55%; R&D = 0.11 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781557530936; reference edition: ISBN:1557530947. Ratio confidence: low.

Score retained: **67.43**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="g0444"></a>
## Men, Machines, and Modern Times — Elting E. Morison

Initial rank 591. Sources: 116, 232. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0444). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0444).

Total pages: [344](https://openlibrary.org/books/OL29310542M/Men_Machines_and_Modern_Times_50th_Anniversary_Edition); ISBN:0262529319; Not stated by source; English; 2016. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [33](https://www.amazon.com.au/dp/0262529319); www.amazon.com.au; product 0262529319; retrieved 2026-10-22T08:11:53.114Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0262529319; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.38**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bgad3afd847e"></a>
## What We Owe the Future — William MacAskill

Initial rank 593. Sources: 151, 194, 195. [Prior content assessment](../analysis/analysis_bgelonmusk_261021_0210.md#bgad3afd847e). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bgad3afd847e).

Total pages: [352](https://www.hachettebookgroup.com/titles/william-macaskill/what-we-owe-the-future/9781541618626/); 9781541618626; hardcover; English; 2022. Confidence: high. Existing count retained.

Reference pages: [52](https://openlibrary.org/books/OL36841100M); edition OL36841100M; Notes 265–316. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [1184](https://www.amazon.com.au/dp/1541618629); amazon.com.au; product 1541618629; retrieved 2026-10-24T09:51:04.990Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1541618629); previously https://www.amazon.de/s?k=What%20We%20Owe%20the%20Future%20William%20MacAskill%20paperback. [Product evidence](https://www.amazon.com.au/dp/1541618629). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 52 reference pages / 352 total pages = 14.77%; R&D = 2.95 points. Edition recorded as matching. Page edition: 9781541618626; reference edition: OL36841100M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.60 | 2.60 |
| Authorial precision | 1.70 | 1.70 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.40; O15 0.00; REL 2.83; RD 2.95. Score **67.32 → 67.32**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 3 new Amazon attempts. 

<a id="intake-0091"></a>
## The Right Kind of Crazy — Adam Steltzner; William Patrick

Initial rank 595. Sources: 208. [Prior content assessment](../analysis/analysis_enguvq9h4_261023_0229.md#intake-0091). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0091).

Total pages: [246](https://openlibrary.org/books/OL27205534M); /books/OL27205534M; Print format unspecified; English; 2016. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [267](https://www.amazon.com.au/dp/1591846927); amazon.com.au; product 1591846927; retrieved 2026-10-23T09:07:02.976Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL27205534M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.31**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0770"></a>
## The Making of Karateka — Jordan Mechner

Initial rank 596. Sources: 244. [Prior content assessment](../analysis/analysis_hn17204467_261023_2134.md#progress-0770). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0770).

Total pages: [236](https://books.google.com/books/about/The_Making_of_Karateka.html?id=m0utlAEACAAJ); ISBN:9781480297234; Print; English; 2012. Confidence: moderate. New count. Google Books bibliographic record for CreateSpace edition; binding not inferred from the conflicting hardcover/paperback labels in a secondary source.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [344](https://www.amazon.com.au/dp/1480297232); amazon.com.au; product 1480297232; retrieved 2026-10-24T09:53:19.998Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1480297232); previously https://www.amazon.de/dp/1962413225. [Product evidence](https://www.amazon.com.au/dp/1480297232). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781480297234; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.64; P14 -1.40; O15 -5.00; REL 0.00; RD 0.00. Score **67.28 → 62.28**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 2 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0133"></a>
## A History of Civilizations — Fernand Braudel

Initial rank 597. Sources: 7. [Prior content assessment](../analysis/analysis_anysubject_261017_2227.md#a038). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0133).

Total pages: [600](https://openlibrary.org/books/OL26910932M/A_history_of_civilizations); ISBN:0140124896; Paperback; English; 1995. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [151](https://www.amazon.com.au/dp/0140124896); www.amazon.com.au; product 0140124896; retrieved 2026-10-18T18:28:40.077Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0140124896; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.28**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0811"></a>
## Material Resources, Productivity and the Environment — OECD

Initial rank 599. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0811). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0811).

Total pages: [172](https://www.oecd.org/en/publications/material-resources-productivity-and-the-environment_9789264190504-en.html); ISBN:9789264190504; Publisher PDF; English; 2015. Confidence: high. New count. Publisher extent; print ISBN 9789264190498. Publisher PDF and print pagination can differ.

Reference pages: [27](https://www.oecd.org/content/dam/oecd/en/publications/reports/2015/02/material-resources-productivity-and-the-environment_g1g27386/9789264190504-en.pdf); edition ISBN:9789264190504; Endnotes and references 32–33; Endnotes and references 43–44; Endnotes and references 58–59; Endnotes and references 67–68; Endnotes and references 102–106; Endnotes and references 117–118; Endnotes and references 128–129; Endnotes and references 138–139; Endnotes and references 147–148; Endnotes and references 155–157; Endnotes and references 164–165; Endnotes and references 171–171. Confidence: high. New count. Counts twelve bounded endnote/reference sections, including glossary references; shared prose/reference pages counted once. Blank separators and glossary prose excluded. Publisher extent 172, PDF physical extent 176.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 27 reference pages / 172 total pages = 15.70%; R&D = 3.14 points. Edition recorded as matching. Page edition: ISBN:9789264190504; reference edition: ISBN:9789264190504. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.10; O15 0.00; REL 0.00; RD 3.14. Score **67.24 → 70.37**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 2 new Amazon attempts. 

<a id="progress-0772"></a>
## Progress: Ten Reasons to Look Forward to the Future — Johan Norberg

Initial rank 600. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0772). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0772).

Total pages: [304](https://openlibrary.org/books/OL29314201M); /books/OL29314201M; Print format unspecified; English; 2016. Confidence: moderate. Existing count retained.

Reference pages: [19](https://openlibrary.org/books/OL26928239M); edition OL26928239M; bibliographical references 219–237. Confidence: moderate. New count. Only explicitly bounded notes and bibliography sections are counted; excludes index. Reference edition can differ from the length edition.

Amazon ratings: [831](https://www.amazon.com.au/dp/1786070650); amazon.com.au; product 1786070650; retrieved 2026-10-24T09:57:05.023Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1786070650); previously https://www.amazon.de/dp/1780749511. [Product evidence](https://www.amazon.com.au/dp/1786070650). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 19 reference pages / 304 total pages = 6.25%; R&D = 1.25 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL29314201M; reference edition: OL26928239M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.00; O15 -5.00; REL 0.00; RD 1.25. Score **67.23 → 63.48**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 3 new Amazon attempts. 

<a id="intake-0172"></a>
## History of Programming Languages — Richard L. Wexelblat; Thomas J. Bergin; Richard G. Gibson; subsequent editors

Initial rank 603. Sources: 211, 221. [Prior content assessment](../analysis/analysis_hn22692281_261023_0229.md#intake-0172). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0172).

Total pages: unknown; no unambiguous supported edition extent established.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. Individual-volume aggregates are not used for the nominated series.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: unknown; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.19**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. 

<a id="q0026"></a>
## The Deltoid Pumpkin Seed — John McPhee

Initial rank 604. Sources: 3. [Prior content assessment](../analysis/analysis_obscurebooks_261017_1936.md). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0026).

Total pages: [192](https://www.amazon.com.au/dp/0374516359); ASIN:0374516359; Paperback; English; 1992. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [42](https://www.amazon.com.au/dp/0374516359); www.amazon.com.au; product 0374516359; retrieved 2026-10-18T18:28:21.784Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0374516359; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.18**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0083"></a>
## Einstein's Clocks, Poincaré's Maps — Peter Galison

Initial rank 605. Sources: 12, 190. [Prior content assessment](../analysis/analysis_physcanon_261018_0147.md#p032). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0083).

Total pages: [389](https://openlibrary.org/books/OL7454133M/Einstein's_Clocks_Poincare's_Maps); ISBN:0393326047; Paperback; English; 2004. Confidence: moderate. Existing count retained.

Reference pages: [16](https://openlibrary.org/books/OL15550346M); edition ISBN:0393020010; bibliographical references 355–370. Confidence: moderate. New count. Documented sections only; index excluded. Search-index snapshot. Edition may differ from total-page edition. 

Amazon ratings: [78](https://www.amazon.com.au/dp/0393326047); www.amazon.com.au; product 0393326047; retrieved 2026-10-18T18:28:30.756Z. Existing verified snapshot retained.

R&D: 16 reference pages / 389 total pages = 4.11%; R&D = 0.82 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0393326047; reference edition: ISBN:0393020010. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.18 | 9.18 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -4.84; P14 -2.30; O15 -10.00; REL 2.00; RD 0.82. Score **67.17 → 67.99**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="n6674bc90ee"></a>
## A World Without Email — Cal Newport

Initial rank 606. Sources: 145. [Prior content assessment](../analysis/analysis_ratings2025_261020_1731.md#n6674bc90ee). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n6674bc90ee).

Total pages: [320](https://www.penguinrandomhouse.com/books/575655/a-world-without-email-by-cal-newport/9780525536550/); ISBN:9780525536550; Hardcover; English; 2021. Confidence: moderate. Existing count retained.

Reference pages: [17](https://ci.nii.ac.jp/ncid/BC09374868); edition Catalog:https://ci.nii.ac.jp/ncid/BC09374868; bibliographical references 265–281. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [1838](https://www.amazon.com.au/dp/0525536558); www.amazon.com.au; product 0525536558; retrieved 2026-10-22T08:13:23.550Z. Existing verified snapshot retained.

R&D: 17 reference pages / 320 total pages = 5.31%; R&D = 1.06 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780525536550; reference edition: Catalog:https://ci.nii.ac.jp/ncid/BC09374868. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 0.00; REL 0.00; RD 1.06. Score **67.12 → 68.18**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g1153"></a>
## The (Mis)Behavior of Markets — Benoît B. Mandelbrot; Richard L. Hudson

Initial rank 607. Sources: 123. [Prior content assessment](../analysis/analysis_glaspinvest_261019_0144.md#g1153). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1153).

Total pages: [328](https://openlibrary.org/books/OL7593673M/The_(Mis)_Behavior_of_Markets); ISBN:0465043577; Not stated by source; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: [39](https://books.google.com/books?id=zg91TAIs6bgC&hl=en); edition GoogleBooks:zg91TAIs6bgC; Notes 277–302; Bibliography 303–315. Confidence: moderate. New count. Only displayed, bounded reference sections are counted. Google Books may omit other sections from its contents list; a boundary may include a final blank page. Edition can differ from the length edition. Chosen over a bibliography-only catalog count because this contents record also gives a bounded notes section.

Amazon ratings: [1412](https://www.amazon.com.au/dp/0465043577); www.amazon.com.au; product 0465043577; retrieved 2026-10-22T08:13:23.751Z. Existing verified snapshot retained.

R&D: 39 reference pages / 328 total pages = 11.89%; R&D = 2.38 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0465043577; reference edition: GoogleBooks:zg91TAIs6bgC. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.20; O15 0.00; REL 0.00; RD 2.38. Score **67.12 → 69.50**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="q0170"></a>
## Oranges — John McPhee

Initial rank 608. Sources: 7, 122, 141. [Prior content assessment](../analysis/analysis_interesting_261020_1731.md#q0170). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0170).

Total pages: [168](https://openlibrary.org/books/OL34537034M/Oranges); ISBN:190797086X; Paperback; English; 2016. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [545](https://www.amazon.com.au/dp/190797086X); www.amazon.com.au; product 190797086X; retrieved 2026-10-18T18:28:59.193Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:190797086X; reference edition: unknown. Ratio confidence: unknown.

Score retained: **67.10**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0145"></a>
## The Narrow Corridor — Daron Acemoglu; James A. Robinson

Initial rank 610. Sources: 9, 120. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0890). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0145).

Total pages: [576](https://openlibrary.org/books/OL29875181M/Narrow_Corridor); ISBN:0735224404; Paperback; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: [23](https://ci.nii.ac.jp/ncid/BC09454661); edition ISBN:9780735224407; bibliographical references 517–539. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [1026](https://www.amazon.com.au/dp/0735224404); www.amazon.com.au; product 0735224404; retrieved 2026-10-18T18:28:55.794Z. Existing verified snapshot retained.

R&D: 23 reference pages / 576 total pages = 3.99%; R&D = 0.80 points. Edition recorded as matching. Page edition: ISBN:0735224404; reference edition: ISBN:9780735224407. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 10.59 | 10.59 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.70; O15 0.00; REL 2.00; RD 0.80. Score **67.02 → 67.82**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="q0296"></a>
## Origin — Jennifer Raff

Initial rank 612. Sources: 7. [Prior content assessment](../analysis/analysis_anysubject_261017_2227.md#a145). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0296).

Total pages: [368](https://www.amazon.com.au/dp/1538749696); ASIN:1538749696; Paperback; English; 2023. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1161](https://www.amazon.com.au/dp/1538749696); www.amazon.com.au; product 1538749696; retrieved 2026-10-18T18:29:43.132Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:1538749696; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.98**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1784"></a>
## Supremacy: AI, ChatGPT, and the Race that Will Change the World — Parmy Olson

Initial rank 613. Sources: 193. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1784). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1784).

Total pages: [304](https://openlibrary.org/books/OL57544870M); /books/OL57544870M; Book (format unspecified); English; 2025. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1860](https://www.amazon.com.au/dp/1035038242); www.amazon.com.au; product 1035038242; retrieved 2026-10-22T08:13:26.919Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL57544870M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.97**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0327"></a>
## The Wizard and the Prophet — Charles C. Mann

Initial rank 615. Sources: 5, 8, 214, 229. [Prior content assessment](../analysis/analysis_readlately_261017_2316.md#h183). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0327).

Total pages: [640](https://www.amazon.com/dp/0345802845); ASIN:0345802845; Paperback; English; 2019. Confidence: high. Existing count retained.

Reference pages: [106](https://libcatalog.sacredheart.edu/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=32107); edition Catalog:https://libcatalog.sacredheart.edu/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=32107; bibliographical references 479–584. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [836](https://www.amazon.com.au/dp/0345802845); www.amazon.com.au; product 0345802845; retrieved 2026-10-18T18:29:31.957Z. Existing verified snapshot retained.

R&D: 106 reference pages / 640 total pages = 16.56%; R&D = 3.31 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:0345802845; reference edition: Catalog:https://libcatalog.sacredheart.edu/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=32107. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 17.00 | 17.00 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 6.00 | 3.60 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.80; O15 -5.00; REL 3.46; RD 3.31. Score **66.95 → 70.26**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g0691"></a>
## Expert Political Judgment — Philip E. Tetlock

Initial rank 618. Sources: 119, 162, 193, 232. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#g0691). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0691).

Total pages: [352](https://openlibrary.org/books/OL7759322M/Expert_Political_Judgment); ISBN:0691128715; Paperback; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [107](https://www.amazon.com.au/dp/0691128715); www.amazon.com.au; product 0691128715; retrieved 2026-10-22T08:13:08.183Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0691128715; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.91**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="s46"></a>
## Inside the Black Box — Nathan Rosenberg

Initial rank 619. Sources: 46. [Prior content assessment](../analysis/analysis_discover91_261018_1528.md#rosenberg). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#s46).

Total pages: [320](https://www.amazon.com/dp/0521273676); ASIN:0521273676; Paperback; English; 1983. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1](https://www.amazon.com.au/dp/0521273676); www.amazon.com.au; product 0521273676; retrieved 2026-10-18T18:28:06.548Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0521273676; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.90**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n8b6681b163"></a>
## Physics for Future Presidents — Richard A. Muller

Initial rank 620. Sources: 139, 193. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n8b6681b163). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n8b6681b163).

Total pages: [380](https://books.google.com/books?id=ynStlj6R1lIC); ISBN:9780393066272; Format not specified in catalog; English; 2008. Confidence: moderate. Existing count retained.

Reference pages: [13](https://ci.nii.ac.jp/ncid/BA90107286?l=en); edition ISBN:9780393066272; bibliographical references 347–359. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [466](https://www.amazon.com.au/dp/0393066274); www.amazon.com.au; product 0393066274; retrieved 2026-10-22T08:12:51.278Z. Existing verified snapshot retained.

R&D: 13 reference pages / 380 total pages = 3.42%; R&D = 0.68 points. Edition recorded as matching. Page edition: ISBN:9780393066272; reference edition: ISBN:9780393066272. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.80; O15 -5.00; REL 2.00; RD 0.68. Score **66.88 → 67.56**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="nb0b9b5e594"></a>
## The Never-Ending Challenge of Engineering — Hyman G. Rickover; Paul E. Cantonwine (compiler)

Initial rank 621. Sources: 130. [Prior content assessment](../analysis/analysis_hn39057219_261020_1731.md#nb0b9b5e594). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nb0b9b5e594).

Total pages: [273](https://openlibrary.org/books/OL27538025M/The_Never-Ending_Challenge_of_Engineering); OL27538025M; hardcover; Not stated by source; 2013. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [57](https://www.amazon.com.au/dp/0894485776); www.amazon.com.au; product 0894485776; retrieved 2026-10-22T08:11:47.348Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL27538025M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.88**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1001"></a>
## The Invention of Science: A New History of the Scientific Revolution — David Wootton

Initial rank 622. Sources: 190, 214. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1001). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1001).

Total pages: [769](https://openlibrary.org/books/OL30857388M); /books/OL30857388M; Book (format unspecified); English; 2015. Confidence: moderate. Existing count retained.

Reference pages: [68](https://openlibrary.org/books/OL30857388M); edition OL30857388M; bibliography 655–722. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [348](https://www.amazon.com.au/dp/1846142105); amazon.com.au; product 1846142105; retrieved 2026-10-24T09:59:20.036Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1846142105); previously https://www.amazon.de/s?k=The%20Invention%20of%20Science%3A%20A%20New%20History%20of%20the%20Scientific%20Revolution%20David%20Wootton%20paperback. [Product evidence](https://www.amazon.com.au/dp/1846142105). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 68 reference pages / 769 total pages = 8.84%; R&D = 1.77 points. Edition recorded as matching. Page edition: /books/OL30857388M; reference edition: OL30857388M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -12.00; P14 -1.10; O15 -5.00; REL 2.00; RD 1.77. Score **66.87 → 61.87**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 3 new Amazon attempts. 

<a id="progress-0017"></a>
## Plastic: The Making of a Synthetic Century — Stephen Fenichell

Initial rank 623. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0017). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0017).

Total pages: [320](https://openlibrary.org/books/OL9512351M); /books/OL9512351M; Paperback; English; 1997. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [5](https://www.amazon.com.au/dp/0887308627); amazon.com.au; product 0887308627; retrieved 2026-10-24T10:01:35.045Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://books.google.com/books?id=8BxiGwAACAAJ). Google Books confirms full title and author for this ISBN; Amazon shortens the title to Plastic. Both inspected print editions report 5 ratings.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL9512351M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.00; O15 -20.00; REL 0.00; RD 0.00. Score **66.87 → 46.87**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 2 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n90a5d24630"></a>
## The Music of the Primes — Marcus du Sautoy

Initial rank 624. Sources: 139, 214, 222, 223. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n90a5d24630). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n90a5d24630).

Total pages: [335](https://books.google.com/books/about/The_Music_of_the_Primes.html?id=x1Jlf9e3EgsC); ISBN:9780060935580; Format not specified in catalog; English; 2004. Confidence: moderate. Existing count retained.

Reference pages: [6](https://openlibrary.org/books/OL3319126M); edition OL3319126M; bibliographical references 317–322. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [531](https://www.amazon.com.au/dp/1841155802); amazon.com.au; product 1841155802; retrieved 2026-10-24T10:03:05.052Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1841155802); previously https://www.amazon.de/dp/0060935588. [Product evidence](https://www.amazon.com.au/dp/1841155802). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 6 reference pages / 335 total pages = 1.79%; R&D = 0.36 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780060935580; reference edition: OL3319126M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.30; O15 -5.00; REL 3.46; RD 0.36. Score **66.84 → 61.84**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 3 new Amazon attempts. 

<a id="progress-0587"></a>
## Encyclopedia of Architectural and Engineering Feats — Donald Langmead; Christine Garnaut

Initial rank 626. Sources: 233. [Prior content assessment](../analysis/analysis_locenghist_261023_2134.md#progress-0587). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0587).

Total pages: [388](https://books.google.com/books?id=T5J6GKvGbmMC&printsec=frontcover); ISBN:157607112X; Hardcover; English; 2001. Confidence: moderate. New count. Google Books identifies both authors, publisher and ISBN. The alternate ISBN 1576075699 is the ebook.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

Purchase link: [updated product](https://www.amazon.de/dp/157607112X); previously https://www.amazon.de/dp/1280719982. [Product evidence](https://www.amazon.com.au/dp/157607112X). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:157607112X; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.50; O15 0.00; REL 0.00; RD 0.00. Score **66.82 → 66.82**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 3 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0103"></a>
## Barbarians At The Gate — Bryan Burrough; John Helyar

Initial rank 627. Sources: 6, 115, 188, 189, 207. [Prior content assessment](../analysis/analysis_glaspbiz_261019_0144.md#g0219). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0103).

Total pages: [592](https://www.amazon.com.au/dp/0061655546); ASIN:0061655546; Hardcover; English; 2008. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [5092](https://www.amazon.com/dp/0061655546); www.amazon.com; product 0061655546; retrieved 2026-10-18T22:27:22.892Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0061655546; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.82**. Verdict: Selective. Content confidence: moderate.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1521"></a>
## The Rise and Reign of the Mammals: A New History, from the Shadow of the Dinosaurs to Us — Steve Brusatte

Initial rank 628. Sources: 204. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1521). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1521).

Total pages: [528](https://www.panmacmillan.com/authors/steve-brusatte/the-rise-and-reign-of-the-mammals/9781529034233); ISBN:9781529034233; Paperback; English; 2023. Confidence: high. Existing count retained.

Reference pages: [62](https://catalog.freelibrary.org/Record/2608733); edition ISBN:9780062951519; bibliographical references 409–470. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [2186](https://www.amazon.com.au/dp/152903423X); www.amazon.com.au; product 152903423X; retrieved 2026-10-22T08:13:28.706Z. Existing verified snapshot retained.

R&D: 62 reference pages / 528 total pages = 11.74%; R&D = 2.35 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781529034233; reference edition: ISBN:9780062951519. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.40; O15 0.00; REL 0.00; RD 2.35. Score **66.82 → 69.17**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="intake-0071"></a>
## Changing How the World Does Business — Roger Frock

Initial rank 631. Sources: 207. [Prior content assessment](../analysis/analysis_hn42614722_261023_0229.md#intake-0071). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0071).

Total pages: [239](https://openlibrary.org/books/OL8748640M); /books/OL8748640M; Hardcover; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [131](https://www.amazon.com.au/dp/1576754138); amazon.com.au; product 1576754138; retrieved 2026-10-23T09:11:02.993Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL8748640M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.79**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nc848a956e9"></a>
## Flight 232 — Laurence Gonzales

Initial rank 635. Sources: 143. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#nc848a956e9). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nc848a956e9).

Total pages: [432](https://wwnorton.co.uk/books/9780393351262-flight-232-44f76e93-4898-463c-abca-f4253dd7b2f0); ISBN:9780393351262; Paperback; English; 2015. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1170](https://www.amazon.com.au/dp/0393351262); www.amazon.com.au; product 0393351262; retrieved 2026-10-22T08:13:29.618Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780393351262; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.74**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0623"></a>
## Parasite Rex — Carl Zimmer

Initial rank 637. Sources: 118, 172, 204. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0623). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0623).

Total pages: [298](https://openlibrary.org/books/OL24765327M/Parasite_rex); OL24765327M; Not stated by source; English; 2000. Confidence: moderate. Existing count retained.

Reference pages: [22](https://openlibrary.org/books/OL24765327M); edition OL24765327M; bibliographical references 265–286. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [688](https://www.amazon.com.au/dp/0684856387); amazon.com.au; product 0684856387; retrieved 2026-10-24T10:44:19.177Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0684856387); previously https://www.amazon.com/dp/B000FC0SMS. [Product evidence](https://www.amazon.com.au/dp/0684856387). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 22 reference pages / 298 total pages = 7.38%; R&D = 1.48 points. Edition recorded as matching. Page edition: OL24765327M; reference edition: OL24765327M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.60; O15 -5.00; REL 2.83; RD 1.48. Score **66.67 → 61.67**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 2 new Amazon attempts. 

<a id="progress-0337"></a>
## The Scientist as Rebel — Freeman J. Dyson

Initial rank 638. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0337). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0337).

Total pages: [400](https://openlibrary.org/books/OL8845318M); /books/OL8845318M; Hardcover; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: [4](https://ci.nii.ac.jp/ncid/BB00411935); edition ISBN:9781590172940; bibliographical references 357–360. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [129](https://www.amazon.com.au/dp/1590172949); amazon.com.au; product 1590172949; retrieved 2026-10-24T10:07:35.094Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1590172949); previously https://www.amazon.de/dp/1590172167. [Product evidence](https://www.amazon.com.au/dp/1590172949). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 4 reference pages / 400 total pages = 1.00%; R&D = 0.20 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL8845318M; reference edition: ISBN:9781590172940. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.00; O15 -5.00; REL 0.00; RD 0.20. Score **66.67 → 61.87**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 2 new Amazon attempts. 

<a id="q0310"></a>
## Surely You're Joking Mr. Feynman — Richard Feynman

Initial rank 641. Sources: 12, 114, 130, 170, 182, 183, 185, 190, 203, 215, 219, 228. [Prior content assessment](../analysis/analysis_hn39057219_261020_1731.md#q0310). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0310).

Total pages: [352](https://www.amazon.com/dp/0393019217); ASIN:0393019217; Hardcover; English; 1985. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [12694](https://www.amazon.com.au/dp/0393019217); www.amazon.com.au; product 0393019217; retrieved 2026-10-18T22:26:16.396Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0393019217; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.64**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0035"></a>
## A Year in Development — Data General Corporation

Initial rank 642. Sources: 207. [Prior content assessment](../analysis/analysis_hn42614722_261023_0229.md#intake-0035). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0035).

Total pages: [106](https://archive.org/details/year-in-dev); Archive:year-in-dev; Print book scan; binding not established; English; 1987. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: Archive:year-in-dev; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.64**. Verdict: Selective. Content confidence: moderate.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0812"></a>
## Global Material Resources Outlook to 2060 — OECD

Initial rank 643. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0812). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0812).

Total pages: [212](https://www.oecd.org/en/publications/global-material-resources-outlook-to-2060_9789264307452-en.html); ISBN:9789264307452; Publisher PDF; English; 2019. Confidence: high. New count. 

Reference pages: [21](https://www.oecd.org/content/dam/oecd/en/publications/reports/2019/02/global-material-resources-outlook-to-2060_g1g98d7d/9789264307452-en.pdf); edition ISBN:9789264307452; Chapter notes and references 28–29; Chapter notes and references 50–54; Chapter notes and references 77–78; Chapter notes and references 109–111; Chapter notes and references 138–138; Chapter notes and references 156–157; Chapter notes and references 177–178; Chapter notes and references 199–202. Confidence: high. New count. Eight chapter note/reference sections; pages shared with prose counted once. Printed total 212 pages; PDF has 214 physical pages including covers. No annex or blank separator pages counted.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

Purchase link: [updated product](https://www.amazon.de/dp/9264307443); previously https://www.amazon.de/s?k=Global%20Material%20Resources%20Outlook%20to%202060%20OECD. [Product evidence](https://www.amazon.com.au/dp/9264307443). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 21 reference pages / 212 total pages = 9.91%; R&D = 1.98 points. Edition recorded as matching. Page edition: ISBN:9789264307452; reference edition: ISBN:9789264307452. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.70; O15 0.00; REL 0.00; RD 1.98. Score **66.64 → 68.62**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 2 new Amazon attempts. 

<a id="progress-0095"></a>
## The Printing Press as an Agent of Change — Elizabeth L. Eisenstein

Initial rank 644. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0095). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0095).

Total pages: [818](https://openlibrary.org/books/OL53950170M); /books/OL53950170M; Print format unspecified; English; 1980. Confidence: moderate. Existing count retained.

Reference pages: [59](https://openlibrary.org/books/OL21421601M/The_printing_press_as_an_agent_of_change); edition ISBN:0521220440; bibliographical references 709–767. Confidence: moderate. New count. Catalog explicitly identifies bibliographical references on pages 709–767. The section is named Bibliographical Index in the contents; it is distinct from the general index. Two-volume work with continuous pagination.

Amazon ratings: [38](https://www.amazon.com.au/dp/0521299551); amazon.com.au; product 0521299551; retrieved 2026-10-24T10:10:35.110Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://www.cca.qc.ca/en/search/details/library/publication/16584351). Library record confirms author, title, paperback ISBN and that this edition contains both volumes. Amazon abbreviates the title.

R&D: 59 reference pages / 818 total pages = 7.21%; R&D = 1.44 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL53950170M; reference edition: ISBN:0521220440. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -12.00; P14 -4.70; O15 -10.00; REL 0.00; RD 1.44. Score **66.64 → 58.08**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 2 new Amazon attempts. 

<a id="q0203"></a>
## Bad Samaritans — Ha-Joon Chang

Initial rank 646. Sources: 9, 215. [Prior content assessment](../analysis/analysis_explainworld_261017_2336.md#w024). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0203).

Total pages: [288](https://www.amazon.com.au/dp/1596915986); ASIN:1596915986; Paperback; English; 2009. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [734](https://www.amazon.com/dp/1596915986); www.amazon.com; product 1596915986; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:1596915986; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.62**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bg71256ae033"></a>
## A New Kind of Science — Stephen Wolfram

Initial rank 647. Sources: 154, 215. [Prior content assessment](../analysis/analysis_bgnassimnich_261021_0210.md#bg71256ae033). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bg71256ae033).

Total pages: [1197](https://openlibrary.org/books/OL24748518M/A_new_kind_of_science); ISBN:1579550088; Not stated by source; English; 2002. Confidence: moderate. Existing count retained.

Reference pages: [349](https://openlibrary.org/books/OL24748518M); edition OL24748518M; bibliographical references 849–1197. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [508](https://www.amazon.com.au/dp/1579550088); amazon.com.au; product 1579550088; retrieved 2026-10-24T10:11:20.115Z. Newly established count from a saved snapshot; confidence high.

R&D: 349 reference pages / 1197 total pages = 29.16%; R&D = 5.83 points. Edition recorded as matching. Page edition: ISBN:1579550088; reference edition: OL24748518M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 5.00 | 2.50 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.40; O15 -5.00; REL 2.00; RD 5.83. Score **66.60 → 61.60**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="progress-0713"></a>
## History of Strength of Materials — Stephen Timoshenko

Initial rank 648. Sources: 245. [Prior content assessment](../analysis/analysis_engbs2rtp_261023_2134.md#progress-0713). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0713).

Total pages: [452](https://openlibrary.org/books/OL24365100M); /books/OL24365100M; Print format unspecified; English; 1983. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [92](https://www.amazon.com.au/dp/0486611876); amazon.com.au; product 0486611876; retrieved 2026-10-24T10:12:05.117Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL24365100M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 19.00 | 18.05 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -3.04; P14 -7.30; O15 -10.00; REL 0.00; RD 0.00. Score **66.58 → 56.58**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0410"></a>
## Technology, Management, and Society — Peter F. Drucker

Initial rank 649. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0410). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0410).

Total pages: [184](https://www.routledge.com/Technology-Management-and-Society/Drucker/p/book/9780434903962); ISBN:9780434903962; Print; English; 1986. Confidence: high. New count. Publisher edition extent; original year unchanged.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [6](https://www.amazon.com.au/dp/0434903965); amazon.com.au; product 0434903965; retrieved 2026-10-24T10:12:50.121Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0434903965); previously https://www.amazon.de/dp/1422131610. [Product evidence](https://www.amazon.com.au/dp/0434903965). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780434903962; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -5.60; O15 -20.00; REL 0.00; RD 0.00. Score **66.54 → 46.54**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 2 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n4aaeea7834"></a>
## A History of the World in 6 Glasses — Tom Standage

Initial rank 650. Sources: 141, 201, 212, 213. [Prior content assessment](../analysis/analysis_interesting_261020_1731.md#n4aaeea7834). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n4aaeea7834).

Total pages: [336](https://www.bloomsbury.com/us/history-of-the-world-in-6-glasses-9780802715524/); ISBN:9780802715524; Paperback; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: [9](https://openlibrary.org/books/OL3310815M); edition OL3310815M; bibliographical references 291–299. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [4026](https://www.amazon.com.au/dp/0802715524); amazon.com.au; product 0802715524; retrieved 2026-10-24T10:14:20.129Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0802715524); previously https://www.amazon.de/s?k=A%20History%20of%20the%20World%20in%206%20Glasses%20Tom%20Standage%20paperback. [Product evidence](https://www.amazon.com.au/dp/0802715524). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 9 reference pages / 336 total pages = 2.68%; R&D = 0.54 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780802715524; reference edition: OL3310815M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.10; O15 0.00; REL 3.46; RD 0.54. Score **66.54 → 66.54**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="progress-0775"></a>
## Aftermath — Flying Magazine

Initial rank 651. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0775). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0775).

Total pages: [225](https://openlibrary.org/books/OL1417895M); /books/OL1417895M; Print format unspecified; English; 1994. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [3](https://www.amazon.com.au/dp/0830642838); amazon.com.au; product 0830642838; retrieved 2026-10-24T10:15:05.135Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://www.ebay.com/itm/336354857207). Exact ISBN identifies Aftermath by Flying Magazine Editors, not the unrelated work by Harald Jähner. Amazon omits the byline.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL1417895M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.20; O15 -20.00; REL 0.00; RD 0.00. Score **66.53 → 46.53**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0774"></a>
## Salt: Grain of Life — Pierre Laszlo

Initial rank 652. Sources: 230, 231. [Prior content assessment](../analysis/analysis_conwayread_261023_2134.md#progress-0774). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0774).

Total pages: [224](https://openlibrary.org/books/OL9229408M); /books/OL9229408M; Paperback; English; 2002. Confidence: moderate. Existing count retained.

Reference pages: [21](https://archive.org/details/saltgrainoflife00lasz); edition ISBN:0060084685; bibliographical references 172–192. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [7](https://www.amazon.com.au/dp/0060084685); amazon.com.au; product 0060084685; retrieved 2026-10-24T10:16:30.369Z. Newly established count from a saved snapshot; confidence high.

R&D: 21 reference pages / 224 total pages = 9.38%; R&D = 1.88 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL9229408M; reference edition: ISBN:0060084685. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.80; O15 -20.00; REL 2.00; RD 1.88. Score **66.52 → 48.40**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u0260"></a>
## Exit, Voice, and Loyalty — Albert O. Hirschman

Initial rank 653. Sources: 177. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u0260). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u0260).

Total pages: [176](https://www.amazon.com.au/dp/0674276604); ISBN/ASIN:0674276604; Paperback; English; 1972. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [168](https://www.amazon.com.au/dp/0674276604); www.amazon.com.au; product 0674276604; retrieved 2026-10-21T21:29:09.412Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN/ASIN:0674276604; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.52**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0469"></a>
## The Boy Who Harnessed The Wind — William Kamkwamba; Bryan Mealer

Initial rank 654. Sources: 116, 181, 182. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0469). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0469).

Total pages: [288](https://openlibrary.org/books/OL24091145M/The_Boy_Who_Harnessed_the_Wind); ISBN:0061730335; Paperback; Not stated by source; 2010. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [4240](https://www.amazon.com.au/dp/0061730327); amazon.com.au; product 0061730327; retrieved 2026-10-23T11:34:13.141Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0061730335; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.49**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0065"></a>
## Metals, Energy and Sustainability: The Story of Doctor Copper and King Coal — Barry Golding; Suzanne D. Golding

Initial rank 656. Sources: 230, 231. [Prior content assessment](../analysis/analysis_conwayread_261023_2134.md#progress-0065). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0065).

Total pages: [215](https://link.springer.com/book/10.1007/978-3-319-51175-7); ISBN:9783319511733; Hardcover; English; 2017. Confidence: high. New count. Publisher extent XIX + 196 = 215 physical pages including front matter.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

Purchase link: [updated product](https://www.amazon.de/dp/3319511734); previously https://www.amazon.de/s?k=Metals%2C%20Energy%20and%20Sustainability%3A%20The%20Story%20of%20Doctor%20Copper%20and%20King%20Coal%20Barry%20Golding%3B%20Suzanne%20D.%20Golding. [Product evidence](https://www.amazon.com.au/dp/3319511734). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9783319511733; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.90; O15 0.00; REL 2.00; RD 0.00. Score **66.48 → 66.48**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g1129"></a>
## Antifragile — Nassim Nicholas Taleb

Initial rank 659. Sources: 123, 135, 173, 177, 188, 193, 215, 232. [Prior content assessment](../analysis/analysis_hn29462663_261020_1731.md#g1129). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1129).

Total pages: [544](https://openlibrary.org/books/OL28789662M/Antifragile); ISBN:0812979680; Not stated by source; English; 2014. Confidence: moderate. Existing count retained.

Reference pages: [24](https://librarycatalog.folsom.ca.us/Record/.b22033749); edition ISBN:9781400067824; bibliographical references 481–504. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [8087](https://www.amazon.com.au/dp/0812979680); amazon.com.au; product 0812979680; retrieved 2026-10-24T10:18:00.385Z. Newly established count from a saved snapshot; confidence high.

R&D: 24 reference pages / 544 total pages = 4.41%; R&D = 0.88 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0812979680; reference edition: ISBN:9781400067824. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 14.00 | 14.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 5.00 | 2.50 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.40; O15 0.00; REL 5.29; RD 0.88. Score **66.43 → 67.31**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="progress-0595"></a>
## Various and Ingenious Machines (2 Vols. ) — Bryan Lawton

Initial rank 661. Sources: 234. [Prior content assessment](../analysis/analysis_locmechan_261023_2134.md#progress-0595). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0595).

Total pages: [1320](https://openlibrary.org/books/OL9084798M); /books/OL9084798M; Hardcover; English; 2004. Confidence: moderate. Existing count retained.

Reference pages: [14](https://archive.org/details/earlyhistoryofme0000lawt); edition ISBN:9789004136090; bibliographical references 1275–1288. Confidence: moderate. New count. The catalog explicitly records the two-volume set and references on pages 1275–1288. Only that documented section is counted; any other reference sections remain uncounted. Alternate title and set ISBN confirmed by the publisher copyright page: https://brill.com/display/book/9789004531680/front-1.pdf and Library of Congress guide https://guides.loc.gov/engineering-in-history/mechanical-engineering. Total-page edition match is unconfirmed.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 14 reference pages / 1320 total pages = 1.06%; R&D = 0.21 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL9084798M; reference edition: ISBN:9789004136090. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -11.04; P14 -2.20; O15 0.00; REL 0.00; RD 0.21. Score **66.39 → 66.60**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n1fea7be87f"></a>
## Trapped Under the Sea — Neil Swidey

Initial rank 662. Sources: 132, 143, 212. [Prior content assessment](../analysis/analysis_hn38556188_261020_1731.md#n1fea7be87f). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n1fea7be87f).

Total pages: [432](https://www.penguinrandomhouse.com/books/209340/trapped-under-the-sea-by-neil-swidey/9780307886743/); ISBN:9780307886736; Paperback; English; 2015. Confidence: high. Existing count retained.

Reference pages: [24](https://books.google.com/books?id=jQCHAAAAQBAJ&hl=en); edition GoogleBooks:jQCHAAAAQBAJ; NOTES 383–406. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: [675](https://www.amazon.com.au/dp/0307886735); amazon.com.au; product 0307886735; retrieved 2026-10-24T10:19:30.389Z. Newly established count from a saved snapshot; confidence high.

R&D: 24 reference pages / 432 total pages = 5.56%; R&D = 1.11 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780307886736; reference edition: GoogleBooks:jQCHAAAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.08; P14 -1.20; O15 -5.00; REL 2.83; RD 1.11. Score **66.39 → 61.39**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="progress-0016"></a>
## Cotton: The Biography of a Revolutionary Fiber — Stephen Yafa

Initial rank 664. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0016). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0016).

Total pages: [416](https://openlibrary.org/books/OL7361620M); /books/OL7361620M; Print format unspecified; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: [6](https://books.google.com/books?id=DZoxe0aO9AEC&hl=en); edition GoogleBooks:DZoxe0aO9AEC; Bibliography 375–380. Confidence: moderate. New count. Only displayed, bounded reference sections are counted. Google Books may omit other sections from its contents list; a boundary may include a final blank page. Edition can differ from the length edition.

Amazon ratings: [49](https://www.amazon.com.au/dp/0143037226); amazon.com.au; product 0143037226; retrieved 2026-10-24T10:20:15.393Z. Newly established count from a saved snapshot; confidence high.

R&D: 6 reference pages / 416 total pages = 1.44%; R&D = 0.29 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL7361620M; reference edition: GoogleBooks:DZoxe0aO9AEC. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.10; O15 -10.00; REL 0.00; RD 0.29. Score **66.35 → 56.64**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="g0886"></a>
## The Idealist — Nina Munk

Initial rank 668. Sources: 120, 148. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0886). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0886).

Total pages: [288](https://openlibrary.org/books/OL28538518M/Idealist); ISBN:076792942X; Not stated by source; English; 2014. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [297](https://www.amazon.com.au/dp/076792942X); www.amazon.com.au; product 076792942X; retrieved 2026-10-22T08:12:58.436Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:076792942X; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.28**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0741"></a>
## The War Below — Ernest Scheyder

Initial rank 669. Sources: 250. [Prior content assessment](../analysis/analysis_nf1vutaba_261023_2134.md#progress-0741). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0741).

Total pages: [384](https://www.simonandschuster.com/books/The-War-Below/Ernest-Scheyder/9781668011812); ISBN:9781668011812; Paperback; English; 2025. Confidence: high. New count. 

Reference pages: [53](https://library.clamsnet.org/Record/554031); edition ISBN:9781668011805; bibliographical references 305–357. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [388](https://www.amazon.com.au/dp/1668011816); amazon.com.au; product 1668011816; retrieved 2026-10-24T10:21:00.398Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1668011816); previously https://www.amazon.de/s?k=The%20War%20Below%20Ernest%20Scheyder. [Product evidence](https://www.amazon.com.au/dp/1668011816). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 53 reference pages / 384 total pages = 13.80%; R&D = 2.76 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781668011812; reference edition: ISBN:9781668011805. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -0.12; P14 -0.20; O15 -5.00; REL 0.00; RD 2.76. Score **66.27 → 64.03**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 2 new Amazon attempts. 

<a id="progress-0499"></a>
## The Computer and the Brain — John von Neumann

Initial rank 670. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0499). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0499).

Total pages: [96](https://openlibrary.org/books/OL9606048M); /books/OL9606048M; Paperback; English; 1979. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [126](https://www.amazon.com.au/dp/0300181116); amazon.com.au; product 0300181116; retrieved 2026-10-24T10:45:49.185Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL9606048M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.50 | 7.23 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -6.80; O15 -5.00; REL 0.00; RD 0.00. Score **66.24 → 61.24**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 2 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0153"></a>
## A Game of Birds and Wolves — Simon Parkin

Initial rank 671. Sources: 8. [Prior content assessment](../analysis/analysis_readlately_261017_2316.md#h025). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0153).

Total pages: [320](https://openlibrary.org/books/OL30067358M/Game_of_Birds_and_Wolves); ISBN:031649206X; Paperback; English; 2021. Confidence: moderate. Existing count retained.

Reference pages: [22](https://catalog.freelibrary.org/Record/2541096); edition ISBN:9780316494311; bibliographical references 281–302. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [924](https://www.amazon.com.au/dp/031649206X); www.amazon.com.au; product 031649206X; retrieved 2026-10-18T18:28:57.845Z. Existing verified snapshot retained.

R&D: 22 reference pages / 320 total pages = 6.88%; R&D = 1.38 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:031649206X; reference edition: ISBN:9780316494311. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.17 | 11.81 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.18 | 9.18 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -3.24; P14 -0.70; O15 -5.00; REL 0.00; RD 1.38. Score **66.24 → 67.62**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="progress-0006"></a>
## Dreams of Iron and Steel: Seven Wonders of the Modern Age, from the Building of the London Sewers to the Panama Canal — Deborah Cadbury

Initial rank 672. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0006). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0006).

Total pages: [352](https://openlibrary.org/books/OL9217544M); /books/OL9217544M; Paperback; English; 2005. Confidence: moderate. Existing count retained.

Reference pages: [22](https://openlibrary.org/books/OL3323285M/Dreams_of_iron_and_steel); edition OL3323285M; bibliographical references 267–288. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [6](https://www.amazon.com.au/dp/000716307X); amazon.com.au; product 000716307X; retrieved 2026-10-24T10:23:15.408Z. Newly established count from a saved snapshot; confidence high.

R&D: 22 reference pages / 352 total pages = 6.25%; R&D = 1.25 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL9217544M; reference edition: OL3323285M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -3.60; P14 -2.30; O15 -20.00; REL 0.00; RD 1.25. Score **66.24 → 47.49**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="g0797"></a>
## The Rational Optimist — Matt Ridley

Initial rank 674. Sources: 120, 148, 162, 168. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0797). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0797).

Total pages: [438](https://openlibrary.org/books/OL24383287M/The_rational_optimist); OL24383287M; Not stated by source; English; 2010. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [3189](https://www.amazon.com.au/dp/0061452068); www.amazon.com.au; product 0061452068; retrieved 2026-10-21T14:58:54.163Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL24383287M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.20**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0025"></a>
## Sextant: A Young Man's Daring Sea Voyage and the Men Who Mapped the World's Oceans — David Barrie

Initial rank 675. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0025). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0025).

Total pages: [340](https://dai.mun.ca/pdfs/acmla/Number147NewsletterAssociationofCanadianMapLibraries.pdf); ISBN:9780062279347; Hardcover; English; 2014. Confidence: moderate. New count. Association of Canadian Map Libraries new-books record; independently corroborated by Washington Map Society bibliography. A prepublication retailer listing of 288 pages is not used.

Reference pages: [5](https://archive.org/details/sextantyoungmans0000barr); edition ISBN:9780062279347; bibliographical references 313–317. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. ISBN matches the total-page edition.

Amazon ratings: [1046](https://www.amazon.com.au/dp/0062279343); amazon.com.au; product 0062279343; retrieved 2026-10-24T10:24:00.414Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://www.alibris.co.uk/Sextant-A-Young-Mans-Daring-Sea-Voyage-and-the-Men-Who-Mapped-the-Worlds-Oceans-David-Barrie/book/28129406). Exact ISBN and full title identify David Barrie’s hardcover. Amazon omits the byline.

Purchase link: [updated product](https://www.amazon.de/dp/0062279343); previously https://www.amazon.de/dp/0007516576. [Product evidence](https://www.amazon.com.au/dp/0062279343). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 5 reference pages / 340 total pages = 1.47%; R&D = 0.29 points. Edition recorded as matching. Page edition: ISBN:9780062279347; reference edition: ISBN:9780062279347. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.20; O15 0.00; REL 0.00; RD 0.29. Score **66.20 → 66.49**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 2 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0600"></a>
## The Physicists: The History of a Scientific Community in Modern America — Daniel J. Kevles

Initial rank 677. Sources: 239. [Prior content assessment](../analysis/analysis_fbphysics_261023_2134.md#progress-0600). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0600).

Total pages: [489](https://openlibrary.org/books/OL1098966M); /books/OL1098966M; Print format unspecified; English; 1995. Confidence: moderate. Existing count retained.

Reference pages: [30](https://archive.org/details/physicistshist00kevl); edition ISBN:0394726693; Bibliography: 435–464. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [6](https://www.amazon.com.au/dp/0674666569); amazon.com.au; product 0674666569; retrieved 2026-10-24T10:25:30.424Z. Newly established count from a saved snapshot; confidence high.

R&D: 30 reference pages / 489 total pages = 6.13%; R&D = 1.23 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL1098966M; reference edition: ISBN:0394726693. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 19.00 | 18.05 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 -2.24; P14 -4.80; O15 -20.00; REL 0.00; RD 1.23. Score **66.15 → 47.37**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0189"></a>
## First Steps — Jeremy DeSilva

Initial rank 678. Sources: 3. [Prior content assessment](../analysis/analysis_obscurebooks_261017_1936.md). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0189).

Total pages: [360](https://www.amazon.com.au/dp/0062938509); ASIN:0062938509; Paperback; English; 2022. Confidence: high. Existing count retained.

Reference pages: [52](https://catalog.losgatosca.gov/Record/532506?page=1&recordIndex=19&searchId=12895234); edition ISBN:9780062938497; bibliographical references 273–324. Confidence: moderate. New count. Documented catalog range only. It may omit separate notes or other reference sections; the index is excluded. Search-index snapshot; source edition and total-page edition may differ.

Amazon ratings: [509](https://www.amazon.it/dp/0062938509); www.amazon.it; product 0062938509; retrieved 2026-10-18T18:55:24.631Z. Existing verified snapshot retained.

R&D: 52 reference pages / 360 total pages = 14.44%; R&D = 2.89 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:0062938509; reference edition: ISBN:9780062938497. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 -5.00; REL 0.00; RD 2.89. Score **66.14 → 69.03**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="n40a6a75e2d"></a>
## Ten Great Ideas about Chance — Persi Diaconis; Brian Skyrms

Initial rank 681. Sources: 140. [Prior content assessment](../analysis/analysis_casualmath_261020_1731.md#n40a6a75e2d). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n40a6a75e2d).

Total pages: [272](https://assets.press.princeton.edu/catalogs/math18.pdf); ISBN:9780691174167; Hardcover; English; 2017. Confidence: high. Existing count retained.

Reference pages: [22](https://old.maa.org/press/maa-reviews/ten-great-ideas-about-chance); edition ISBN:9780691174167; Notes 225–238; Annotated Select Bibliography 239–246. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. ISBN matches the total-page edition.

Amazon ratings: [65](https://www.amazon.com/dp/0691174164); amazon.com; product 0691174164; retrieved 2026-10-20T16:39:44.1806280Z. Existing verified snapshot retained.

R&D: 22 reference pages / 272 total pages = 8.09%; R&D = 1.62 points. Edition recorded as matching. Page edition: ISBN:9780691174167; reference edition: ISBN:9780691174167. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.80 | 1.80 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.90; O15 -10.00; REL 0.00; RD 1.62. Score **66.12 → 67.74**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="progress-0168"></a>
## Libraries of the Future — J. C. R. Licklider

Initial rank 682. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0168). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0168).

Total pages: [219](https://openlibrary.org/books/OL5942946M); /books/OL5942946M; Print format unspecified; English; 1965. Confidence: moderate. Existing count retained.

Reference pages: [4](https://openlibrary.org/works/OL10471033W/Libraries_of_the_future); edition ISBN:026212016X; References 205–208. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 4 reference pages / 219 total pages = 1.83%; R&D = 0.37 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL5942946M; reference edition: ISBN:026212016X. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -2.44; P14 -6.10; O15 0.00; REL 0.00; RD 0.37. Score **66.10 → 66.47**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. 

<a id="progress-0080"></a>
## Pop Internationalism — Paul R. Krugman

Initial rank 686. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0080). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0080).

Total pages: [221](https://openlibrary.org/books/OL799381M); OL799381M; Print edition (binding unspecified); eng; 1996. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [27](https://www.amazon.com.au/dp/0262112108); amazon.com.au; product 0262112108; retrieved 2026-10-23T22:09:57.322Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL799381M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.04**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0367"></a>
## The Accidental Theorist — Paul R. Krugman

Initial rank 687. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0367). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0367).

Total pages: [204](https://openlibrary.org/books/OL7457091M); /books/OL7457091M; Print format unspecified; English; 1999. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [102](https://www.amazon.com.au/dp/0393318877); amazon.com.au; product 0393318877; retrieved 2026-10-24T10:27:00.427Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL7457091M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.80; O15 -5.00; REL 0.00; RD 0.00. Score **66.02 → 61.02**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0044"></a>
## iWoz — Steve Wozniak; Gina Smith

Initial rank 688. Sources: 207, 244. [Prior content assessment](../analysis/analysis_hn42614722_261023_0229.md#intake-0044). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0044).

Total pages: [336](https://wwnorton.co.uk/books/9780393330434-iwoz-f94ffaea-ad42-4a40-b9b4-dbd566745ff4); ISBN:9780393330434; Paperback; English; 2007. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1474](https://www.amazon.com.au/dp/0393330435); amazon.com.au; product 0393330435; retrieved 2026-10-23T11:12:13.001Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780393330434; reference edition: unknown. Ratio confidence: unknown.

Score retained: **66.02**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0374"></a>
## AI Superpowers — Kai-Fu Lee

Initial rank 689. Sources: 116, 167, 179, 187, 191. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0374). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0374).

Total pages: [253](https://openlibrary.org/books/OL26575450M/AI_superpowers); ISBN:132854639X; Not stated by source; English; 2018. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [3793](https://www.amazon.com.au/dp/132854639X); www.amazon.com.au; product 132854639X; retrieved 2026-10-18T22:28:02.524Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:132854639X; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.99**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n99a0799831"></a>
## Fire in the Valley — Paul Freiberger; Michael Swaine

Initial rank 690. Sources: 133, 134, 193, 207, 211, 244, 247. [Prior content assessment](../analysis/analysis_hn42157034_261020_1731.md#n99a0799831). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n99a0799831).

Total pages: [463](https://openlibrary.org/books/OL58211M/Fire_in_the_valley); OL58211M; Not stated by source; English; 2000. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [35](https://www.amazon.com.au/dp/0071358927); amazon.com.au; product 0071358927; retrieved 2026-10-24T10:28:30.437Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0071358927); previously https://www.amazon.de/s?k=Fire%20in%20the%20Valley%20Paul%20Freiberger%3B%20Michael%20Swaine%20paperback. [Product evidence](https://www.amazon.com.au/dp/0071358927). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL58211M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.08; P14 -4.20; O15 -10.00; REL 4.90; RD 0.00. Score **65.99 → 55.99**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 2 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0159"></a>
## The Planet Remade — Oliver Morton

Initial rank 692. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0159). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0159).

Total pages: [428](https://openlibrary.org/books/OL26061476M); /books/OL26061476M; Print format unspecified; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: [22](https://library.wur.nl/WebQuery/titel/2103990); edition ISBN:9780691148250; bibliographical references 393–414. Confidence: moderate. New count. Documented sections only; index excluded. Search-index snapshot. Edition may differ from total-page edition. 

Amazon ratings: [146](https://www.amazon.com.au/dp/0691148252); amazon.com.au; product 0691148252; retrieved 2026-10-24T10:29:15.440Z. Newly established count from a saved snapshot; confidence high.

R&D: 22 reference pages / 428 total pages = 5.14%; R&D = 1.03 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL26061476M; reference edition: ISBN:9780691148250. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.10; O15 -5.00; REL 0.00; RD 1.03. Score **65.99 → 62.01**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="intake-0259"></a>
## The God Machine — James R. Chiles

Initial rank 693. Sources: 212. [Prior content assessment](../analysis/analysis_smb1hg08ou_261023_0229.md#intake-0259). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0259).

Total pages: [368](https://openlibrary.org/books/OL7850570M); /books/OL7850570M; Hardcover; English; 2007. Confidence: moderate. Existing count retained.

Reference pages: [42](https://books.google.com/books?id=jBOhU4tU0wgC); edition GoogleBooks:jBOhU4tU0wgC; Bibliography and subsequent reference apparatus 299–340. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: [34](https://www.amazon.com.au/dp/0553804472); amazon.com.au; product 0553804472; retrieved 2026-10-23T08:45:02.830Z. Existing verified snapshot retained.

R&D: 42 reference pages / 368 total pages = 11.41%; R&D = 2.28 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL7850570M; reference edition: GoogleBooks:jBOhU4tU0wgC. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.90; O15 -10.00; REL 0.00; RD 2.28. Score **65.98 → 68.26**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="progress-0036"></a>
## Inventing Temperature: Measurement and Scientific Progress — Hasok Chang

Initial rank 694. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0036). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0036).

Total pages: [304](https://openlibrary.org/books/OL9461616M); /books/OL9461616M; Paperback; English; 2007. Confidence: moderate. Existing count retained.

Reference pages: [16](https://catalog.libraries.vsc.edu/cgi-bin/koha/opac-detail.pl?biblionumber=257819&shelfbrowse_itemnumber=355320); edition ISBN:0195171276; Bibliographical references 259–274. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: [37](https://www.amazon.com.au/dp/0195171276); amazon.com.au; product 0195171276; retrieved 2026-10-24T10:30:00.445Z. Newly established count from a saved snapshot; confidence high.

R&D: 16 reference pages / 304 total pages = 5.26%; R&D = 1.05 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL9461616M; reference edition: ISBN:0195171276. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 19.00 | 18.05 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -5.04; P14 -2.20; O15 -10.00; REL 0.00; RD 1.05. Score **65.98 → 57.03**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 2 new Amazon attempts. 

<a id="g0306"></a>
## That Will Never Work — Marc Randolph

Initial rank 695. Sources: 115. [Prior content assessment](../analysis/analysis_glaspbiz_261019_0144.md#g0306). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0306).

Total pages: [336](https://openlibrary.org/books/OL28926924M/That_Will_Never_Work); ISBN:0316530204; Not stated by source; English; 2019. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [5063](https://www.amazon.com.au/dp/0316530204); www.amazon.com.au; product 0316530204; retrieved 2026-10-18T22:27:47.004Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0316530204; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.97**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nf5dc5a1ea8"></a>
## Smart Choices — John S. Hammond; Ralph L. Keeney; Howard Raiffa

Initial rank 696. Sources: 142. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0762). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nf5dc5a1ea8).

Total pages: [244](https://openlibrary.org/books/OL348898M/Smart_choices); OL348898M; Not stated by source; English; 1999. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [486](https://www.amazon.com.au/dp/0875848575); www.amazon.com.au; product 0875848575; retrieved 2026-10-22T08:12:39.506Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL348898M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.97**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0368"></a>
## Blitzscaling — Reid Hoffman; Chris Yeh

Initial rank 698. Sources: 116, 148, 177, 188. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0132). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0368).

Total pages: [325](https://openlibrary.org/books/OL26614275M/Blitzscaling); ISBN:1524761419; Not stated by source; English; 2018. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1982](https://www.amazon.com.au/dp/1524761419); amazon.com.au; product 1524761419; retrieved 2026-10-24T10:31:30.458Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1524761419; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.80; O15 0.00; REL 3.46; RD 0.00. Score **65.96 → 65.96**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0897"></a>
## Establishing Quantum Physics in Berlin — Hubert Goenner; Giuseppe Castagnetti

Initial rank 699. Sources: 227. [Prior content assessment](../analysis/analysis_hsmquantum_261023_0229.md#intake-0897). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0897).

Total pages: [133](https://link.springer.com/book/10.1007/978-3-030-63122-2); ISBN:9783030631215; Softcover; English; 2021. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9783030631215; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.93**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0773"></a>
## How We Got Here: From Bows and Arrows to the Space Age — Christopher Hallpike

Initial rank 700. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0773). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0773).

Total pages: [624](https://www.authorhouse.com/en/bookstore/bookdetails/272566-How-We-Got-Here); ISBN:9781438908335; Paperback; English; 2008. Confidence: moderate. New count. Publisher softcover count; its ebook placeholder of 1 page is not used.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [10](https://www.amazon.com.au/dp/1438908334); amazon.com.au; product 1438908334; retrieved 2026-10-24T10:33:00.463Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1438908334); previously https://www.amazon.de/s?k=How%20We%20Got%20Here%3A%20From%20Bows%20and%20Arrows%20to%20the%20Space%20Age%20Christopher%20Hallpike. [Product evidence](https://www.amazon.com.au/dp/1438908334). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781438908335; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.80; O15 -10.00; REL 0.00; RD 0.00. Score **65.93 → 55.93**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0084"></a>
## Orality and Literacy: 30th Anniversary Edition (New Accents) — Walter J. Ong

Initial rank 701. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0084). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0084).

Total pages: [201](https://openlibrary.org/books/OL7481176M); /books/OL7481176M; Print format unspecified; English; 1982. Confidence: moderate. Existing count retained.

Reference pages: [24](https://ci.nii.ac.jp/ncid/BB11283236); edition ISBN:9780415538381; bibliographical references 177–193; bibliographical references 222–228. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [115](https://www.amazon.com.au/dp/0415538386); amazon.com.au; product 0415538386; retrieved 2026-10-24T10:33:45.466Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0415538386); previously https://www.amazon.de/dp/0415027969. [Product evidence](https://www.amazon.com.au/dp/0415538386). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 24 reference pages / 201 total pages = 11.94%; R&D = 2.39 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL7481176M; reference edition: ISBN:9780415538381. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.40; O15 -5.00; REL 0.00; RD 2.39. Score **65.92 → 63.31**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 2 new Amazon attempts. 

<a id="n117091cdd5"></a>
## Pieces of the Action — Vannevar Bush

Initial rank 702. Sources: 129, 229. [Prior content assessment](../analysis/analysis_hn40864249_261020_1731.md#n117091cdd5). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n117091cdd5).

Total pages: [376](https://www.thebookco.com/pieces-of-the-action/); ISBN:9781953953209; Hardcover; English; 2022. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [51](https://www.amazon.com.au/dp/1953953204); www.amazon.com.au; product 1953953204; retrieved 2026-10-22T08:12:06.657Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781953953209; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.92**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g1223"></a>
## The Tycoons — Charles R. Morris

Initial rank 703. Sources: 123, 162, 215. [Prior content assessment](../analysis/analysis_glaspinvest_261019_0144.md#g1223). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1223).

Total pages: [382](https://openlibrary.org/books/OL18910704M/The_tycoons); OL18910704M; Hardcover; English; 2005. Confidence: moderate. Existing count retained.

Reference pages: [33](https://openlibrary.org/books/OL18910704M); edition OL18910704M; bibliographical references 335–367. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [690](https://www.amazon.com.au/dp/0805075992); amazon.com.au; product 0805075992; retrieved 2026-10-24T10:35:15.475Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://books.google.com/books?id=1g60MM3ogpAC). Google Books confirms title, Charles R. Morris and this ISBN; Amazon omits the author byline.

R&D: 33 reference pages / 382 total pages = 8.64%; R&D = 1.73 points. Edition recorded as matching. Page edition: OL18910704M; reference edition: OL18910704M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 -4.48; P14 -2.10; O15 -5.00; REL 2.83; RD 1.73. Score **65.91 → 60.91**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="g0939"></a>
## Explaining Social Behavior — Jon Elster

Initial rank 704. Sources: 121. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0334). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0939).

Total pages: [516](https://openlibrary.org/books/OL29271878M/Explaining_Social_Behavior); ISBN:1107416418; Not stated by source; English; 2015. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [25](https://www.amazon.com.au/dp/1107416418); www.amazon.com.au; product 1107416418; retrieved 2026-10-22T08:11:51.399Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1107416418; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.89**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0045"></a>
## The Rickover Effect — Theodore Rockwell

Initial rank 706. Sources: 207. [Prior content assessment](../analysis/analysis_hn42614722_261023_0229.md#intake-0045). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0045).

Total pages: [411](https://openlibrary.org/books/OL787535M); /books/OL787535M; Print format unspecified; English; 1995. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [10](https://www.amazon.com.au/dp/0471122963); amazon.com.au; product 0471122963; retrieved 2026-10-23T08:47:02.845Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL787535M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.88**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0973"></a>
## Stuffed and Starved — Raj Patel

Initial rank 709. Sources: 5. [Prior content assessment](../analysis/analysis_vetogates_261021_0047.md#q0973). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0973).

Total pages: [272](https://openlibrary.org/books/OL28226220M/Stuffed_and_Starved); ISBN:1846270111; paperback; Not stated by source; 2008. Confidence: moderate. Existing count retained.

Reference pages: [36](https://openlibrary.org/books/OL27174215M); edition OL27174215M; bibliographical references 367–402. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [62](https://www.amazon.com.au/dp/1846270111); amazon.com.au; product 1846270111; retrieved 2026-10-24T10:36:00.475Z. Newly established count from a saved snapshot; confidence high.

R&D: 36 reference pages / 272 total pages = 13.24%; R&D = 2.65 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:1846270111; reference edition: OL27174215M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.47 | 8.47 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.90; O15 -10.00; REL 0.00; RD 2.65. Score **65.85 → 55.85**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="q0395"></a>
## Being Mortal — Atul Gawande

Initial rank 710. Sources: 2, 5, 6, 165, 186, 203. [Prior content assessment](../analysis/analysis_bestever_261017_2138.md#b108). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0395).

Total pages: [304](https://academic.macmillan.com/academictrade/9781250076229/beingmortal/); ISBN:9781250076229; Trade paperback; English; 2017. Confidence: high. Existing count retained.

Reference pages: [13](https://library.wasatchcounty.gov/Record/194311); edition ISBN:9780805095159; bibliographical references 265–277. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [49743](https://www.amazon.com/dp/1250076226); www.amazon.com; product 1250076226; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: 13 reference pages / 304 total pages = 4.28%; R&D = 0.86 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781250076229; reference edition: ISBN:9780805095159. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.33 | 7.56 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 8.47 | 8.47 |
| Information density | 9.00 | 8.10 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.20; O15 0.00; REL 4.47; RD 0.86. Score **65.85 → 66.70**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g0162"></a>
## Measure What Matters — John Doerr

Initial rank 711. Sources: 115, 148, 176, 188. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0557). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0162).

Total pages: [320](https://www.amazon.com.au/dp/0525536221); ASIN:0525536221; Hardcover; English; 2018. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [9689](https://www.amazon.com.au/dp/0525536221); www.amazon.com.au; product 0525536221; retrieved 2026-10-18T22:27:05.475Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0525536221; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.83**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bga9e0514be0"></a>
## House on Fire — William H. H. Foege

Initial rank 712. Sources: 148, 207. [Prior content assessment](../analysis/analysis_bgbillgates_261021_0210.md#bga9e0514be0). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bga9e0514be0).

Total pages: [240](https://www.ucpress.edu/book/9780520274471/house-on-fire); 9780520274471; paperback; en; 2011. Confidence: high. Existing count retained.

Reference pages: [9](https://openlibrary.org/books/OL24881350M); edition OL24881350M; bibliographical references 199–207. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [59](https://www.amazon.com.au/dp/0520274474); amazon.com.au; product 0520274474; retrieved 2026-10-24T10:36:45.484Z. Newly established count from a saved snapshot; confidence high.

R&D: 9 reference pages / 240 total pages = 3.75%; R&D = 0.75 points. Estimate: editions differ or matching is unconfirmed. Page edition: 9780520274471; reference edition: OL24881350M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.96; P14 -1.50; O15 -10.00; REL 2.00; RD 0.75. Score **65.83 → 55.83**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="progress-0358"></a>
## Slack — Tom DeMarco

Initial rank 713. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0358). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0358).

Total pages: [240](https://openlibrary.org/books/OL8064497M); /books/OL8064497M; Hardcover; English; 2001. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [364](https://www.amazon.com.au/dp/076790768X); amazon.com.au; product 076790768X; retrieved 2026-10-24T10:37:30.487Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://books.google.com.br/books?id=XPQJAQAAMAAJ). Google Books confirms Slack, Tom DeMarco and this ISBN; Amazon omits the author byline.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL8064497M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.50; O15 -5.00; REL 0.00; RD 0.00. Score **65.82 → 60.82**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n1d28d21315"></a>
## Elusive: How Peter Higgs Solved the Mystery of Mass — Frank Close

Initial rank 714. Sources: 139. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n1d28d21315). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n1d28d21315).

Total pages: [304](https://www.hachettebookgroup.com/titles/frank-close/elusive/9781541620803/?lens=basic-books); ISBN:9781541620803; hardcover; English; 2022. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [266](https://www.amazon.com.au/dp/1541620801); www.amazon.com.au; product 1541620801; retrieved 2026-10-22T08:12:40.803Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781541620803; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.80**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0746"></a>
## The Open Organization — Jim Whitehurst

Initial rank 715. Sources: 244. [Prior content assessment](../analysis/analysis_hn17204467_261023_2134.md#progress-0746). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0746).

Total pages: [227](https://openlibrary.org/books/OL25889272M); /books/OL25889272M; Hardcover; English; 2015. Confidence: moderate. Existing count retained.

Reference pages: [8](https://books.google.com/books?id=WmPhBwAAQBAJ&hl=en); edition GoogleBooks:WmPhBwAAQBAJ; Notes 203–208; Bibliography 209–210. Confidence: moderate. New count. Only displayed, bounded reference sections are counted. Google Books may omit other sections from its contents list; a boundary may include a final blank page. Edition can differ from the length edition.

Amazon ratings: [346](https://www.amazon.com.au/dp/1625275277); amazon.com.au; product 1625275277; retrieved 2026-10-24T10:38:15.491Z. Newly established count from a saved snapshot; confidence high.

R&D: 8 reference pages / 227 total pages = 3.52%; R&D = 0.70 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL25889272M; reference edition: GoogleBooks:WmPhBwAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.10; O15 -5.00; REL 0.00; RD 0.70. Score **65.80 → 61.50**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="progress-0014"></a>
## Steel: From Mine to Mill, the Metal that Made America — Brooke C. Stoddard

Initial rank 718. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0014). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0014).

Total pages: [304](https://openlibrary.org/books/OL26806950M); /books/OL26806950M; Print format unspecified; English; 2015. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [33](https://www.amazon.com.au/dp/0760347425); amazon.com.au; product 0760347425; retrieved 2026-10-24T10:39:00.496Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL26806950M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.10; O15 -10.00; REL 0.00; RD 0.00. Score **65.78 → 55.78**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0149"></a>
## Subtle Is the Lord: The Science and the Life of Albert Einstein — Abraham Pais

Initial rank 719. Sources: 12, 136, 190, 226. [Prior content assessment](../analysis/analysis_purdueread_261020_1731.md#q0149). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0149).

Total pages: [576](https://openlibrary.org/books/OL7383461M); ISBN 0192806726; Print; binding unspecified in library record; English; 2005. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [142](https://www.amazon.com/dp/0192806726); www.amazon.com; product 0192806726; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN 0192806726; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.76**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u0807"></a>
## The White Man's Burden: Why the West's Efforts to Aid the Rest Have Done So Much Ill and So Little Good — William Easterly

Initial rank 720. Sources: 187. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u0807). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u0807).

Total pages: [380](https://openlibrary.org/books/OL23942709M); /books/OL23942709M; Book (format unspecified); English; 2006. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [330](https://www.amazon.com.au/dp/0199210829); www.amazon.com.au; product 0199210829; retrieved 2026-10-22T08:12:42.425Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL23942709M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.73**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0695"></a>
## Fabless — Daniel Nenni; Paul McLellan

Initial rank 722. Sources: 237. [Prior content assessment](../analysis/analysis_chips147622_261023_2134.md#progress-0695). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0695).

Total pages: [220](https://booksrun.com/9781497525047-fabless-the-transformation-of-the-semiconductor-industry); ISBN:9781497525047; Paperback; English; 2014. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [72](https://www.amazon.com.au/dp/1497525047); amazon.com.au; product 1497525047; retrieved 2026-10-23T22:10:57.336Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781497525047; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.72**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u0829"></a>
## Bottle of Lies: The Inside Story of the Generic Drug Boom — Katherine Eban

Initial rank 723. Sources: 187. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u0829). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u0829).

Total pages: [512](https://openlibrary.org/books/OL30203199M); /books/OL30203199M; Book (format unspecified); English; 2020. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1419](https://www.amazon.com.au/dp/0062338781); www.amazon.com.au; product 0062338781; retrieved 2026-10-21T21:29:38.055Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL30203199M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.68**. Verdict: Selective. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0321"></a>
## Shadow Divers — Robert Kurson

Initial rank 726. Sources: 2, 6, 8, 143, 207. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#q0321). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0321).

Total pages: [432](https://www.penguinrandomhouse.com/books/96300/shadow-divers-by-robert-kurson/); ISBN:9780375760983; Paperback; English; 2005. Confidence: high. Existing count retained.

Reference pages: [8](https://cmc.marmot.org/Record/.b25048260); edition ISBN:0375508589; bibliographical references 337–344. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [5261](https://www.amazon.com.au/dp/0375760989); www.amazon.com.au; product 0375760989; retrieved 2026-10-21T14:56:36.654Z. Existing verified snapshot retained.

R&D: 8 reference pages / 432 total pages = 1.85%; R&D = 0.37 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780375760983; reference edition: ISBN:0375508589. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.33 | 7.56 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 7.76 | 7.76 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -1.16; P14 -2.20; O15 0.00; REL 4.00; RD 0.37. Score **65.66 → 66.03**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="q0202"></a>
## A Place for Everything — Judith Flanders

Initial rank 728. Sources: 3. [Prior content assessment](../analysis/analysis_obscurebooks_261017_1936.md). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0202).

Total pages: [368](https://www.amazon.com.au/dp/1509881581); ASIN:1509881581; Paperback; English; 2021. Confidence: high. Existing count retained.

Reference pages: [22](https://library.kmu.ac.zm/bib/542); edition ISBN:9781509881574; bibliographical references 270–291. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [212](https://www.amazon.com.au/dp/1509881581); www.amazon.com.au; product 1509881581; retrieved 2026-10-18T18:29:17.698Z. Existing verified snapshot retained.

R&D: 22 reference pages / 368 total pages = 5.98%; R&D = 1.20 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:1509881581; reference edition: ISBN:9781509881574. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.47 | 8.47 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.60; O15 -5.00; REL 0.00; RD 1.20. Score **65.63 → 66.83**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="n9eee603ebd"></a>
## Packing for Mars: The Curious Science of Life in the Void — Mary Roach

Initial rank 729. Sources: 143, 205, 208. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#n9eee603ebd). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n9eee603ebd).

Total pages: [352](https://wwnorton.co.uk/books/9781324036050-packing-for-mars-c7f61350-17d2-4922-8905-ebce8919afc7); ISBN:9781324036050; Paperback; English; 2022. Confidence: high. Existing count retained.

Reference pages: [10](https://openlibrary.org/books/OL24832279M); edition OL24832279M; bibliographical references 325–334. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [2053](https://www.amazon.com.au/dp/1324036052); amazon.com.au; product 1324036052; retrieved 2026-10-24T10:46:34.189Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1324036052); previously https://www.amazon.de/s?k=Packing%20for%20Mars%20Mary%20Roach%20paperback. [Product evidence](https://www.amazon.com.au/dp/1324036052). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 10 reference pages / 352 total pages = 2.84%; R&D = 0.57 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781324036050; reference edition: OL24832279M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.60; O15 0.00; REL 2.83; RD 0.57. Score **65.61 → 65.61**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="s51"></a>
## The Invisible Weapon — Daniel R. Headrick

Initial rank 734. Sources: 51. [Prior content assessment](../analysis/analysis_discover92_261018_1550.md#headrick). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#s51).

Total pages: [300](https://openlibrary.org/books/OL28488494M/Invisible_Weapon); ISBN:0199930333; Paperback; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: [4](https://books.google.com/books?id=-vAkbD-tZAEC&source=gbs_book_other_versions&hl=en); edition GoogleBooks:-vAkbD-tZAEC; Bibliographical Essay 275–278. Confidence: moderate. New count. Bounded reference sections only; index excluded. Contents boundaries can include a final blank page. Edition matching is unconfirmed.

Amazon ratings: [4](https://www.amazon.com.au/dp/0199930333); www.amazon.com.au; product 0199930333; retrieved 2026-10-18T18:28:04.897Z. Existing verified snapshot retained.

R&D: 4 reference pages / 300 total pages = 1.33%; R&D = 0.27 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0199930333; reference edition: GoogleBooks:-vAkbD-tZAEC. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 17.00 | 17.00 |
| Transferable strategic utility | 14.00 | 14.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 9.00 | 8.10 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -3.24; P14 -3.50; O15 -20.00; REL 0.00; RD 0.27. Score **65.56 → 65.83**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="progress-0649"></a>
## Energy and the Wealth of Nations — Charles A. S. Hall; Kent Klitgaard

Initial rank 736. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0649). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0649).

Total pages: [407](https://openlibrary.org/books/OL27036331M); OL27036331M; [electronic resource] :; eng; 2012. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [22](https://www.amazon.com.au/dp/3030097641); amazon.com.au; product 3030097641; retrieved 2026-10-23T22:50:00.797Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL27036331M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.54**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n165cec2868"></a>
## The Brain — David Eagleman

Initial rank 737. Sources: 135, 205. [Prior content assessment](../analysis/analysis_hn29462663_261020_1731.md#n165cec2868). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n165cec2868).

Total pages: [256](https://www.penguinrandomhouse.com/books/250966/the-brain-by-david-eagleman/9781101870549/); ISBN:9780525433446; paperback; English; 2017. Confidence: moderate. Existing count retained.

Reference pages: [10](https://openlibrary.org/books/OL26882002M); edition OL26882002M; bibliographical references 204–213. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [6346](https://www.amazon.com.au/dp/0525433449); amazon.com.au; product 0525433449; retrieved 2026-10-24T10:47:19.193Z. Newly established count from a saved snapshot; confidence high.

R&D: 10 reference pages / 256 total pages = 3.91%; R&D = 0.78 points. Edition recorded as matching. Page edition: ISBN:9780525433446; reference edition: OL26882002M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.10; O15 0.00; REL 2.00; RD 0.78. Score **65.50 → 65.50**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="n5ebb281344"></a>
## The Facemaker — Lindsey Fitzharris

Initial rank 746. Sources: 143, 212. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#n5ebb281344). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n5ebb281344).

Total pages: [320](https://www.bol.com/nl/nl/p/the-facemaker/9300000132304952/); ISBN:9780141990293; Paperback; English; 2023. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1387](https://www.amazon.com.au/dp/0141990295); amazon.com.au; product 0141990295; retrieved 2026-10-23T11:45:13.191Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780141990293; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.38**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0388"></a>
## Toms River — Dan Fagin

Initial rank 748. Sources: 10, 194, 195. [Prior content assessment](../analysis/analysis_pastedlists_261018_0118.md#p024). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0388).

Total pages: [576](https://openlibrary.org/books/OL28540969M/Toms_River); ISBN:1610915917; Paperback; English; 2015. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1039](https://www.amazon.com/dp/1610915917); www.amazon.com; product 1610915917; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1610915917; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.38**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0198"></a>
## Powerful — Patty McCord

Initial rank 749. Sources: 115, 192. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0655). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0198).

Total pages: [228](https://openlibrary.org/books/OL28637321M/Powerful); ISBN:1939714095; Not stated by source; English; 2018. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1768](https://www.amazon.com.au/dp/1939714095); www.amazon.com.au; product 1939714095; retrieved 2026-10-18T22:27:16.468Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1939714095; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.37**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n88837eb597"></a>
## What's Happening in the Mathematical Sciences — Barry Cipra; Dana Mackenzie (series authors; volume scope unspecified)

Initial rank 750. Sources: 140. [Prior content assessment](../analysis/analysis_casualmath_261020_1731.md#n88837eb597). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n88837eb597).

Total pages: unknown; no unambiguous supported edition extent established.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. Individual-volume aggregates are not used for the nominated series.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: unknown; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.37**. Verdict: Selective. Content confidence: moderate.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1828"></a>
## The Cold War: A New History — John Lewis Gaddis

Initial rank 751. Sources: 193. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1828). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1828).

Total pages: [400](https://openlibrary.org/books/OL28982653M); /books/OL28982653M; Book (format unspecified); English; 2006. Confidence: moderate. Existing count retained.

Reference pages: [48](https://openlibrary.org/books/OL22761762M); edition OL22761762M; bibliographical references 267–314. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [1600](https://www.amazon.com.au/dp/0713999284); amazon.com.au; product 0713999284; retrieved 2026-10-24T10:48:04.198Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://obnb.uk/a00141518-john-lewis-gaddis). Open British National Bibliography identifies The Cold War by John Lewis Gaddis, Allen Lane 2006, with this ISBN. Amazon shortens the subtitle.

R&D: 48 reference pages / 400 total pages = 12.00%; R&D = 2.40 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL28982653M; reference edition: OL22761762M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -1.40; P14 -2.10; O15 0.00; REL 0.00; RD 2.40. Score **65.35 → 65.35**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="n553cf824fa"></a>
## The Quantum Labyrinth: How Richard Feynman and John Wheeler Revolutionized Time and Reality — Paul Halpern

Initial rank 752. Sources: 139, 239. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n553cf824fa). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n553cf824fa).

Total pages: [336](https://books.google.com/books?id=6fPsnAAACAAJ); ISBN:9780465097586; Format not specified in catalog; English; 2017. Confidence: moderate. Existing count retained.

Reference pages: [15](https://bridgew.bywatersolutions.com/cgi-bin/koha/opac-detail.pl?biblionumber=306268); edition ISBN:9780465097586; bibliographical references 275–289. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [200](https://www.amazon.com.au/dp/0465097588); www.amazon.com.au; product 0465097588; retrieved 2026-10-22T08:13:11.279Z. Existing verified snapshot retained.

R&D: 15 reference pages / 336 total pages = 4.46%; R&D = 0.89 points. Edition recorded as matching. Page edition: ISBN:9780465097586; reference edition: ISBN:9780465097586. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.72; P14 -0.90; O15 -5.00; REL 2.00; RD 0.89. Score **65.35 → 66.24**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g0563"></a>
## A Cultural History of Physics — Károly Simonyi

Initial rank 753. Sources: 118, 214. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0563). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0563).

Total pages: [622](https://repository.gsi.de/record/67331/export/hr?ln=en); ISBN:9781568813295; Hardcover; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: [15](https://repository.gsi.de/record/67331/export/hr?ln=en); edition ISBN:9781568813295; Bibliography 585–599. Confidence: moderate. New count. Explicit catalogued bibliography range only; index excluded.

Amazon ratings: [27](https://www.amazon.com.au/dp/1568813295); www.amazon.com.au; product 1568813295; retrieved 2026-10-22T08:12:17.269Z. Existing verified snapshot retained.

Edition correction: Corrected prepublication year 2010 to the 2012 English edition. GSI and IAS catalogs agree. Extent xiv + 622 numbered pages; existing 622-page count retained. Hardcover binding is corroborated by the saved Amazon product snapshot. [Evidence](https://repository.gsi.de/record/67331/export/hr?ln=en). Original production year used for P14 is unchanged.

Purchase link: [updated product](https://www.amazon.de/dp/1568813295); previously https://www.amazon.com/dp/B010WF2GZO. [Product evidence](https://www.amazon.com.au/dp/1568813295). Saved 2026-10-22 Amazon snapshot verifies this English hardcover. Replaces the ebook product link with a verified print identity; no paperback identity was established. German availability remains unverified.

R&D: 15 reference pages / 622 total pages = 2.41%; R&D = 0.48 points. Edition recorded as matching. Page edition: ISBN:9781568813295; reference edition: ISBN:9781568813295. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.80; O15 -10.00; REL 2.00; RD 0.48. Score **65.33 → 65.81**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="progress-0045"></a>
## More Work For Mother: The Ironies Of Household Technology From The Open Hearth To The Microwave — Ruth Schwartz Cowan

Initial rank 754. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0045). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0045).

Total pages: [257](https://openlibrary.org/books/OL16246452M); /books/OL16246452M; Paperback; English; 1989. Confidence: moderate. Existing count retained.

Reference pages: [30](https://wwws.loc.gov/rr/program/journey/household.html); edition ISBN:0465047319; Bibliographic essays 220–233; Notes 234–249. Confidence: moderate. New count. Documented sections only; index excluded. Search-index snapshot. Edition may differ from total-page edition. Library of Congress lists both sections; the narrower AGRIS bibliography range alone would omit the notes.

Amazon ratings: [2](https://www.amazon.com.au/dp/1853430765); amazon.com.au; product 1853430765; retrieved 2026-10-24T10:49:34.206Z. Newly established count from a saved snapshot; confidence high.

R&D: 30 reference pages / 257 total pages = 11.67%; R&D = 2.33 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL16246452M; reference edition: ISBN:0465047319. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -4.30; O15 -20.00; REL 0.00; RD 2.33. Score **65.33 → 47.66**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 2 new Amazon attempts. 

<a id="progress-0508"></a>
## This Will Make You Smarter — John Brockman

Initial rank 755. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0508). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0508).

Total pages: [448](https://openlibrary.org/books/OL28486203M); /books/OL28486203M; Print format unspecified; English; 2013. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [537](https://www.amazon.com.au/dp/085752111X); amazon.com.au; product 085752111X; retrieved 2026-10-24T10:50:19.211Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL28486203M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 -5.00; REL 0.00; RD 0.00. Score **65.27 → 60.27**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0690"></a>
## Noble Obsession — Charles Slack

Initial rank 756. Sources: 236. [Prior content assessment](../analysis/analysis_gmuinnovate_261023_2134.md#progress-0690). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0690).

Total pages: [288](https://openlibrary.org/books/OL8143580M); /books/OL8143580M; Paperback; English; 2003. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [11](https://www.amazon.com.au/dp/0786888563); amazon.com.au; product 0786888563; retrieved 2026-10-24T10:51:04.215Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL8143580M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -6.64; P14 -2.40; O15 -10.00; REL 0.00; RD 0.00. Score **65.25 → 55.25**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0184"></a>
## Geons, Black Holes, and Quantum Foam — John Archibald Wheeler; Kenneth Ford

Initial rank 758. Sources: 12. [Prior content assessment](../analysis/analysis_physcanon_261018_0147.md#p022). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0184).

Total pages: [380](https://openlibrary.org/books/OL7453655M/Geons_Black_Holes_and_Quantum_Foam); ISBN:0393319911; Paperback; English; 2000. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [151](https://www.amazon.com.au/dp/0393319911); www.amazon.com.au; product 0393319911; retrieved 2026-10-18T18:29:02.521Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0393319911; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.23**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g1155"></a>
## The Essays of Warren Buffett — Warren E. Buffett; Lawrence A. Cunningham (editor)

Initial rank 759. Sources: 123, 177, 193, 196, 197, 215. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#g1155). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1155).

Total pages: [224](https://openlibrary.org/books/OL8553683M/The_Essays_of_Warren_Buffett); ISBN:0966446100; Paperback; English; 1998. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1977](https://www.amazon.com.au/dp/0966446100); amazon.com.au; product 0966446100; retrieved 2026-10-24T10:51:49.220Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0966446100; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.90; O15 0.00; REL 4.47; RD 0.00. Score **65.21 → 65.21**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1673"></a>
## The Contest for the Indian Ocean — Darshana M Baruah

Initial rank 760. Sources: 179. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1673). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1673).

Total pages: [240](https://yalebooks.yale.edu/book/9780300270914/the-contest-for-the-indian-ocean/); ISBN:9780300270914; Hardcover; English; 2024. Confidence: high. Existing count retained.

Reference pages: [30](https://books.google.com/books?id=u6cXEQAAQBAJ&hl=en); edition GoogleBooks:u6cXEQAAQBAJ; Notes 163–178; Bibliography 179–192. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: [4](https://www.amazon.com.au/dp/0300270917); amazon.com.au; product 0300270917; retrieved 2026-10-24T10:52:34.222Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0300270917); previously https://www.amazon.de/s?k=The%20Contest%20for%20the%20Indian%20Ocean%20Darshana%20M%20Baruah%20paperback. [Product evidence](https://www.amazon.com.au/dp/0300270917). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 30 reference pages / 240 total pages = 12.50%; R&D = 2.50 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780300270914; reference edition: GoogleBooks:u6cXEQAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.20; O15 -20.00; REL 0.00; RD 2.50. Score **65.18 → 45.18**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="q0182"></a>
## The Rise of the West — William H. McNeill

Initial rank 761. Sources: 11. [Prior content assessment](../analysis/analysis_pastefollow_261018_0130.md#f048). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0182).

Total pages: [828](https://openlibrary.org/books/OL1545084M/The_rise_of_the_West); ISBN:0226561410; Paperback; English; 1991. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [133](https://www.amazon.com.au/dp/0226561410); www.amazon.com.au; product 0226561410; retrieved 2026-10-18T18:28:52.263Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0226561410; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.18**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0086"></a>
## Arctic Labyrinth — Glyn Williams

Initial rank 764. Sources: 3. [Prior content assessment](../analysis/analysis_obscurebooks_261017_1936.md). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0086).

Total pages: [439](https://www.amazon.com.au/dp/0520269950); ASIN:0520269950; Paperback; English; 2010. Confidence: high. Existing count retained.

Reference pages: [27](https://libcatalog.sacredheart.edu/cgi-bin/koha/opac-detail.pl?biblionumber=16671); edition ISBN:9780520266278; Bibliographical references 387–413. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: [40](https://www.amazon.it/dp/0520269950); www.amazon.it; product 0520269950; retrieved 2026-10-18T18:55:18.826Z. Existing verified snapshot retained.

R&D: 27 reference pages / 439 total pages = 6.15%; R&D = 1.23 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:0520269950; reference edition: ISBN:9780520266278. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.18 | 9.18 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -4.80; P14 -1.70; O15 -10.00; REL 0.00; RD 1.23. Score **65.06 → 66.29**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="progress-0624"></a>
## Crick: A Mind in Motion – from DNA to the Brain — Matthew Cobb

Initial rank 765. Sources: 243. [Prior content assessment](../analysis/analysis_fbscience_261023_2134.md#progress-0624). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0624).

Total pages: [608](https://openlibrary.org/books/OL60900892M); /books/OL60900892M; Print format unspecified; English; 2025. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [94](https://www.amazon.com.au/dp/1541602889); amazon.com.au; product 1541602889; retrieved 2026-10-23T22:12:57.352Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL60900892M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.06**. Verdict: Selective. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bg6b5ce39a94"></a>
## Pre-Suasion — Robert Cialdini

Initial rank 766. Sources: 169. [Prior content assessment](../analysis/analysis_bgalexhormoz_261021_0210.md#bg6b5ce39a94). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bg6b5ce39a94).

Total pages: [432](https://openlibrary.org/books/OL28618015M/Pre-Suasion); OL28618015M; Not stated by source; English; 2017. Confidence: moderate. Existing count retained.

Reference pages: [164](https://books.google.com/books?id=GI7tDAAAQBAJ&hl=en); edition GoogleBooks:GI7tDAAAQBAJ; References 235–330; Notes 331–398. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: [3462](https://www.amazon.com.au/dp/1847941435); amazon.com.au; product 1847941435; retrieved 2026-10-24T10:53:19.226Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1847941435); previously https://www.amazon.com/dp/1501109790. [Product evidence](https://www.amazon.com.au/dp/1847941435). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 164 reference pages / 432 total pages = 37.96%; R&D = 7.59 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL28618015M; reference edition: GoogleBooks:GI7tDAAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.00; O15 0.00; REL 0.00; RD 7.59. Score **65.06 → 65.06**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="g0175"></a>
## Talent — Tyler Cowen & Daniel Gross

Initial rank 767. Sources: 115, 192, 193. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0807). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0175).

Total pages: [288](https://openlibrary.org/books/OL32650049M/Talent); ISBN:1250275814; hardcover; Not stated by source; 2022. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [255](https://www.amazon.com.au/dp/1250275814); www.amazon.com.au; product 1250275814; retrieved 2026-10-18T22:27:09.306Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1250275814; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.05**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0761"></a>
## Netscape Time — Jim Clark; Owen Edwards

Initial rank 768. Sources: 244. [Prior content assessment](../analysis/analysis_hn17204467_261023_2134.md#progress-0761). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0761).

Total pages: [304](https://openlibrary.org/books/OL9477139M); /books/OL9477139M; Hardcover; English; 1999. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [9](https://www.amazon.com.au/dp/0312199341); amazon.com.au; product 0312199341; retrieved 2026-10-24T10:54:04.229Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL9477139M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.12; P14 -2.70; O15 -20.00; REL 0.00; RD 0.00. Score **65.05 → 45.05**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0021"></a>
## The Secret Life of Groceries — Benjamin Lorr

Initial rank 769. Sources: 207. [Prior content assessment](../analysis/analysis_hn42614722_261023_0229.md#intake-0021). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0021).

Total pages: [336](https://openlibrary.org/books/OL30110224M); /books/OL30110224M; hardcover; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: [40](https://librarycatalog.richlandhills.com/Record/210967); edition Catalog:https://librarycatalog.richlandhills.com/Record/210967; bibliographical references 277–316. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [1429](https://www.amazon.com.au/dp/0553459392); amazon.com.au; product 0553459392; retrieved 2026-10-23T10:38:12.787Z. Existing verified snapshot retained.

R&D: 40 reference pages / 336 total pages = 11.90%; R&D = 2.38 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL30110224M; reference edition: Catalog:https://librarycatalog.richlandhills.com/Record/210967. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -0.24; P14 -0.60; O15 0.00; REL 0.00; RD 2.38. Score **65.04 → 67.42**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="bgf077c854c9"></a>
## My Life and Work — Henry Ford with Samuel Crowther

Initial rank 772. Sources: 173. [Prior content assessment](../analysis/analysis_bgblasmoros_261021_0210.md#bgf077c854c9). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bgf077c854c9).

Total pages: [289](https://openlibrary.org/books/OL57660609M/My_life_and_work); OL57660609M; Not stated by source; English; 1926. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1519](https://www.amazon.com.au/dp/B08JDYXN75); www.amazon.com.au; product B08JDYXN75; retrieved 2026-10-22T08:13:49.588Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL57660609M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **65.01**. Verdict: Selective. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n5aa8a92872"></a>
## The Clean Coder — Robert C. Martin

Initial rank 773. Sources: 130, 175, 191. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0876). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n5aa8a92872).

Total pages: [210](https://openlibrary.org/books/OL25108903M/The_Clean_Coder); OL25108903M; Not stated by source; English; 2011. Confidence: moderate. Existing count retained.

Reference pages: [9](https://openlibrary.org/books/OL25108903M); edition OL25108903M; Bibliography 22–22; Bibliography 76–76; Bibliography 84–84; Bibliography 94–94; Bibliography 119–120; Bibliography 148–148; Bibliography 171–172. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [2243](https://www.amazon.com.au/dp/0137081073); amazon.com.au; product 0137081073; retrieved 2026-10-24T10:54:49.233Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0137081073); previously https://www.amazon.de/s?k=The%20Clean%20Coder%20Robert%20C.%20Martin. [Product evidence](https://www.amazon.com.au/dp/0137081073). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 9 reference pages / 210 total pages = 4.29%; R&D = 0.86 points. Edition recorded as matching. Page edition: OL25108903M; reference edition: OL25108903M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.50; O15 0.00; REL 2.83; RD 0.86. Score **65.00 → 65.00**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="intake-0015"></a>
## How to Make a Spaceship — Julian Guthrie

Initial rank 774. Sources: 207. [Prior content assessment](../analysis/analysis_hn42614722_261023_0229.md#intake-0015). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0015).

Total pages: [448](https://www.amazon.com.au/dp/1594206724); ASIN:1594206724; Hardcover; English; 2016. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [309](https://www.amazon.com.au/dp/1594206724); amazon.com.au; product 1594206724; retrieved 2026-10-23T09:25:03.073Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:1594206724; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.99**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0512"></a>
## How Google Works — Eric Schmidt

Initial rank 776. Sources: 117, 191. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0425). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0512).

Total pages: [352](https://openlibrary.org/books/OL43657047M/How_Google_Works); OL43657047M; Not stated by source; Not stated by source; 2014. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [4118](https://www.amazon.com.au/dp/1444792474); amazon.com.au; product 1444792474; retrieved 2026-10-24T10:55:34.238Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1444792474); previously https://www.amazon.de/dp/1455582344. [Product evidence](https://www.amazon.com.au/dp/1444792474). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL43657047M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.20; O15 0.00; REL 2.00; RD 0.00. Score **64.97 → 64.97**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0195"></a>
## Making Software — Andy Oram; Greg Wilson (editors)

Initial rank 777. Sources: 211. [Prior content assessment](../analysis/analysis_hn22692281_261023_0229.md#intake-0195). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0195).

Total pages: [624](https://www.oreilly.com/library/view/making-software/9780596808310/); ISBN:9780596808327; Paperback; English; 2010. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [27](https://www.amazon.com.au/dp/0596808321); amazon.com.au; product 0596808321; retrieved 2026-10-23T11:50:13.207Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780596808327; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.97**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0173"></a>
## The Golden Road — William Dalrymple

Initial rank 778. Sources: 9. [Prior content assessment](../analysis/analysis_explainworld_261017_2336.md#w052). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0173).

Total pages: [496](https://www.amazon.com.au/dp/163973841X); ASIN:163973841X; Paperback; English; 2026. Confidence: high. Existing count retained.

Reference pages: [154](https://books.google.com/books/about/The_Golden_Road.html?id=Gj75EAAAQBAJ); edition GoogleBooks:Gj75EAAAQBAJ; Notes 299–398; Bibliography 399–452. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: [2018](https://www.amazon.com/dp/163973841X); www.amazon.com; product 163973841X; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: 154 reference pages / 496 total pages = 31.05%; R&D = 6.21 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:163973841X; reference edition: GoogleBooks:Gj75EAAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 17.00 | 17.00 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.47 | 8.47 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -12.00; P14 -0.20; O15 0.00; REL 0.00; RD 6.21. Score **64.97 → 71.18**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1244"></a>
## The Long Twentieth Century — Giovanni Arrighi

Initial rank 783. Sources: 196, 197. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1244). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1244).

Total pages: [416](https://openlibrary.org/books/OL25049538M); /books/OL25049538M; Book (format unspecified); English; 2010. Confidence: moderate. Existing count retained.

Reference pages: [18](https://openlibrary.org/books/OL25049538M); edition OL25049538M; bibliographical references 387–404. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [70](https://www.amazon.com.au/dp/1844673049); amazon.com.au; product 1844673049; retrieved 2026-10-24T10:56:19.248Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1844673049); previously https://www.amazon.de/s?k=The%20Long%20Twentieth%20Century%20Giovanni%20Arrighi%20paperback. [Product evidence](https://www.amazon.com.au/dp/1844673049). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 18 reference pages / 416 total pages = 4.33%; R&D = 0.87 points. Edition recorded as matching. Page edition: /books/OL25049538M; reference edition: OL25049538M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 16.00 | 15.06 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -3.20; O15 -10.00; REL 2.00; RD 0.87. Score **64.92 → 54.92**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="rem-u1657"></a>
## The Tragedy of Great Power Politics — John J. Mearsheimer

Initial rank 786. Sources: 179. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1657). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1657).

Total pages: [561](https://openlibrary.org/books/OL27158350M); /books/OL27158350M; Book (format unspecified); English; 2014. Confidence: moderate. Existing count retained.

Reference pages: [131](https://openlibrary.org/books/OL16130391M); edition OL16130391M; bibliographical references 403–533. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [911](https://www.amazon.com.au/dp/0393349276); amazon.com.au; product 0393349276; retrieved 2026-10-24T10:57:04.263Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0393349276); previously https://www.amazon.de/s?k=The%20Tragedy%20of%20Great%20Power%20Politics%20John%20J.%20Mearsheimer%20paperback. [Product evidence](https://www.amazon.com.au/dp/0393349276). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 131 reference pages / 561 total pages = 23.35%; R&D = 4.67 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL27158350M; reference edition: OL16130391M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.50; O15 -5.00; REL 0.00; RD 4.67. Score **64.90 → 59.90**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="q0329"></a>
## Unnatural Causes — Richard Shepherd

Initial rank 788. Sources: 6. [Prior content assessment](../analysis/analysis_bestever_261017_2138.md#b036). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0329).

Total pages: [464](https://openlibrary.org/books/OL28703400M/Unnatural_Causes); ISBN:1405923539; Paperback; English; 2019. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [23604](https://www.amazon.com.au/dp/1405923539); www.amazon.com.au; product 1405923539; retrieved 2026-10-18T18:29:55.756Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1405923539; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.87**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bg97db6f940c"></a>
## Strangers to Ourselves: Discovering the Adaptive Unconscious — Timothy D. Wilson

Initial rank 789. Sources: 166. [Prior content assessment](../analysis/analysis_bgkevinsimle_261021_0210.md#bg97db6f940c). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bg97db6f940c).

Total pages: [272](https://www.dymocks.com.au/strangers-to-ourselves-by-timothy-d-wilson-9780674013827); 9780674013827; paperback; English; 2004. Confidence: high. Existing count retained.

Reference pages: [34](https://books.google.com/books?id=XPb37addxE0C&hl=en); edition GoogleBooks:XPb37addxE0C; Notes 223–236; Bibliography 237–256. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: [453](https://www.amazon.com.au/dp/0674013824); amazon.com.au; product 0674013824; retrieved 2026-10-24T10:57:49.265Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0674013824); previously https://www.amazon.de/s?k=Strangers%20to%20Ourselves%3A%20Discovering%20the%20Adaptive%20Unconscious%20Timothy%20D.%20Wilson%20paperback. [Product evidence](https://www.amazon.com.au/dp/0674013824). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 34 reference pages / 272 total pages = 12.50%; R&D = 2.50 points. Estimate: editions differ or matching is unconfirmed. Page edition: 9780674013827; reference edition: GoogleBooks:XPb37addxE0C. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.60 | 2.60 |
| Authorial precision | 1.70 | 1.70 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.40; O15 -5.00; REL 0.00; RD 2.50. Score **64.86 → 59.86**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="q0309"></a>
## QED: The Strange Theory of Light and Matter — Richard P. Feynman

Initial rank 792. Sources: 12, 118, 139, 205, 228. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#q0309). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0309).

Total pages: [190](https://www.amazon.com/dp/0691164096); ASIN:0691164096; Paperback; English; 2014. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1087](https://www.amazon.com.au/dp/0691164096); www.amazon.com.au; product 0691164096; retrieved 2026-10-18T22:28:30.704Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0691164096; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.83**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g1309"></a>
## The Sleepwalkers — Christopher Clark

Initial rank 793. Sources: 126, 146, 199. [Prior content assessment](../analysis/analysis_definitive26_261020_1731.md#g1309). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1309).

Total pages: [736](https://openlibrary.org/books/OL28797985M/Sleepwalkers); ISBN:0061146668; Not stated by source; English; 2014. Confidence: moderate. Existing count retained.

Reference pages: [104](https://library.usi.edu/record/693782?ln=en&p=%28+%28author%3A%22Clark%2C+Christopher+M.%22%29%29); edition ISBN:9780061146657; bibliographical references 563–666. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [4665](https://www.amazon.com/dp/0061146668); www.amazon.com; product 0061146668; retrieved 2026-10-18T22:29:31.904Z. Existing verified snapshot retained.

R&D: 104 reference pages / 736 total pages = 14.13%; R&D = 2.83 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0061146668; reference edition: ISBN:9780061146657. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -4.48; P14 -1.40; O15 0.00; REL 2.83; RD 2.83. Score **64.83 → 67.65**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="q0967"></a>
## The United States of War — David Vine

Initial rank 795. Sources: 5. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#v0004). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0967).

Total pages: [464](https://openlibrary.org/books/OL33915494M/United_States_of_War); ISBN:0520385683; Not stated by source; English; 2021. Confidence: moderate. Existing count retained.

Reference pages: [62](https://books.google.com/books?id=aSU9EAAAQBAJ&hl=en); edition GoogleBooks:aSU9EAAAQBAJ; Notes 347–408. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: [86](https://www.amazon.com.au/dp/0520385683); amazon.com.au; product 0520385683; retrieved 2026-10-24T10:58:34.271Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://www.ucpress.edu/book/9780520385689/the-united-states-of-war). Publisher confirms David Vine’s book and the paperback ISBN; Amazon includes the series volume number in its title.

R&D: 62 reference pages / 464 total pages = 13.36%; R&D = 2.67 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0520385683; reference edition: GoogleBooks:aSU9EAAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 -0.28; P14 -0.60; O15 -10.00; REL 0.00; RD 2.67. Score **64.81 → 54.81**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="rem-u0478"></a>
## The Infinity Machine: Demis Hassabis, DeepMind, and the Quest for Superintelligence — Sebastian Mallaby

Initial rank 796. Sources: 182. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u0478). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u0478).

Total pages: [480](https://www.penguin.com.au/books/the-infinity-machine-9780241703557); ISBN:9780241703557; Trade Paperback; English; 2026. Confidence: high. Existing count retained.

Reference pages: [40](https://www.richlandlibrary.com/catalog/detail/2457735); edition ISBN:9780593831847; bibliographical references 401–440. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [1430](https://www.amazon.com.au/dp/0241703557); www.amazon.com.au; product 0241703557; retrieved 2026-10-22T08:13:52.403Z. Existing verified snapshot retained.

R&D: 40 reference pages / 480 total pages = 8.33%; R&D = 1.67 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780241703557; reference edition: ISBN:9780593831847. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.04; P14 0.00; O15 0.00; REL 0.00; RD 1.67. Score **64.81 → 66.47**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="n1dd01d3afa"></a>
## Ghost in the Wires — Kevin Mitnick; William L. Simon

Initial rank 798. Sources: 135, 175, 191, 211, 212. [Prior content assessment](../analysis/analysis_hn29462663_261020_1731.md#n1dd01d3afa). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n1dd01d3afa).

Total pages: [432](https://books.google.com/books?hl=en&id=p-nRxITKc34C); ISBN:9780316134477; Format not specified in catalog; English; 2011. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

Purchase link: [updated product](https://www.amazon.de/dp/0316037729); previously https://www.amazon.de/dp/0316134473. [Product evidence](https://www.hachettebookgroup.com/titles/kevin-mitnick/ghost-in-the-wires/9780316037723/). Paperback ISBN verified from the linked bibliographic source. The Amazon.de URL is constructed from its ISBN-10 equivalent; the new Amazon listing and regional availability could not be checked after an access challenge. Publisher confirms the print ISBN. Earlier Amazon product used the ebook ISBN and returned 404. Alternative UK print ISBN: 9780316212182, verified at https://www.littlebrown.co.uk/titles/kevin-mitnick/ghost-in-the-wires/9780316212182/.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780316134477; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.78**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0009"></a>
## Arms and Influence — Thomas C. Schelling

Initial rank 799. Sources: 31. [Prior content assessment](../analysis/analysis_web80_261018_0229.md#w31). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0009).

Total pages: [336](https://www.amazon.com.au/dp/0300246749); ASIN:0300246749; Paperback; English; 2020. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [116](https://www.amazon.com/dp/0300246749); www.amazon.com; product 0300246749; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0300246749; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.78**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0108"></a>
## Inventing the Renaissance — Ada Palmer

Initial rank 800. Sources: 7, 141. [Prior content assessment](../analysis/analysis_interesting_261020_1731.md#q0108). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0108).

Total pages: [768](https://www.amazon.com.au/dp/0226852598); ASIN:0226852598; Paperback; English; 2026. Confidence: high. Existing count retained.

Reference pages: [32](https://catalog.freelibrary.org/Record/2768963); edition ISBN:9780226837970; Bibliographical references 651–682. Confidence: moderate. New count. Documented 32-page section only; additional notes are not inferred. Edition match unconfirmed.

Amazon ratings: [196](https://www.amazon.com.au/dp/0226852598); www.amazon.com.au; product 0226852598; retrieved 2026-10-18T18:28:35.719Z. Existing verified snapshot retained.

R&D: 32 reference pages / 768 total pages = 4.17%; R&D = 0.83 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:0226852598; reference edition: ISBN:9780226837970. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 5.00 | 2.50 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -12.00; P14 -0.10; O15 -5.00; REL 2.00; RD 0.83. Score **64.77 → 65.60**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1720"></a>
## Co-Intelligence — Ethan Mollick

Initial rank 802. Sources: 193. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1720). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1720).

Total pages: [256](https://openlibrary.org/books/OL52195259M); /books/OL52195259M; Book (format unspecified); English; 2024. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [4723](https://www.amazon.com.au/dp/0753560771); amazon.com.au; product 0753560771; retrieved 2026-10-23T12:05:13.318Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL52195259M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.70**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0274"></a>
## The Genome War — James Shreeve

Initial rank 803. Sources: 212. [Prior content assessment](../analysis/analysis_smb1hg08ou_261023_0229.md#intake-0274). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0274).

Total pages: [416](https://openlibrary.org/books/OL9392539M); /books/OL9392539M; Paperback; English; 2005. Confidence: moderate. Existing count retained.

Reference pages: [16](https://books.google.com/books?id=GERcyqzOP9MC&source=gbs_book_other_versions&hl=en); edition GoogleBooks:GERcyqzOP9MC; A Note on Sources 375–390. Confidence: moderate. New count. Bounded reference sections only; index excluded. Contents boundaries can include a final blank page. Edition matching is unconfirmed.

Amazon ratings: [86](https://www.amazon.com.au/dp/0345433742); amazon.com.au; product 0345433742; retrieved 2026-10-23T08:54:02.879Z. Existing verified snapshot retained.

R&D: 16 reference pages / 416 total pages = 3.85%; R&D = 0.77 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL9392539M; reference edition: GoogleBooks:GERcyqzOP9MC. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.00; P14 -2.20; O15 -10.00; REL 0.00; RD 0.77. Score **64.68 → 65.45**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1599"></a>
## Periodic Tales: The Curious Lives of the Elements — Hugh Aldersey-Williams

Initial rank 804. Sources: 205, 213. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1599). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1599).

Total pages: [448](https://openlibrary.org/books/OL36289113M); /books/OL36289113M; Book (format unspecified); English; 2011. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [583](https://www.amazon.com.au/dp/0670918113); amazon.com.au; product 0670918113; retrieved 2026-10-24T11:00:49.282Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL36289113M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.50; O15 -5.00; REL 2.00; RD 0.00. Score **64.67 → 59.67**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 2 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0845"></a>
## Knowledge and The Wealth of Nations — David Warsh

Initial rank 806. Sources: 120, 166. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0845). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0845).

Total pages: [448](https://openlibrary.org/books/OL7454431M/Knowledge_and_the_Wealth_of_Nations); ISBN:0393329887; Not stated by source; English; 2007. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [57](https://www.amazon.com.au/dp/0393329887); www.amazon.com.au; product 0393329887; retrieved 2026-10-22T08:12:21.865Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0393329887; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.64**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0456"></a>
## Rebooting AI — Gary Marcus; Ernest Davis

Initial rank 807. Sources: 116. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0456). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0456).

Total pages: [288](https://openlibrary.org/books/OL28310581M/Rebooting_AI); ISBN:1524748250; hardcover; English; 2019. Confidence: moderate. Existing count retained.

Reference pages: [54](https://catalog.losgatosca.gov/Record/521782?page=1&recordIndex=3&searchId=8217158); edition ISBN:9781524748258; bibliographical references 209–262. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [394](https://www.amazon.com.au/dp/1524748250); www.amazon.com.au; product 1524748250; retrieved 2026-10-22T08:12:53.244Z. Existing verified snapshot retained.

R&D: 54 reference pages / 288 total pages = 18.75%; R&D = 3.75 points. Edition recorded as matching. Page edition: ISBN:1524748250; reference edition: ISBN:9781524748258. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.70; O15 -5.00; REL 0.00; RD 3.75. Score **64.62 → 68.37**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="n73e66a58df"></a>
## Quantum — Manjit Kumar

Initial rank 810. Sources: 139, 190, 204, 214, 226, 227. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n73e66a58df). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n73e66a58df).

Total pages: [448](https://books.google.com/books/about/Quantum.html?id=Bos_AQAAIAAJ); GoogleBooks:Bos_AQAAIAAJ; Format not specified in catalog; English; 2008. Confidence: moderate. Existing count retained.

Reference pages: [52](https://openlibrary.org/books/OL23699081M); edition OL23699081M; bibliographical references 421–438; Notes 387–420; Bibliography 421–438. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [1396](https://www.amazon.com.au/dp/1848310358); amazon.com.au; product 1848310358; retrieved 2026-10-24T11:01:34.289Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1848310358); previously https://www.amazon.de/s?k=Quantum%20Manjit%20Kumar%20paperback. [Product evidence](https://www.amazon.com.au/dp/1848310358). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 52 reference pages / 448 total pages = 11.61%; R&D = 2.32 points. Estimate: editions differ or matching is unconfirmed. Page edition: GoogleBooks:Bos_AQAAIAAJ; reference edition: OL23699081M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -2.48; P14 -1.80; O15 0.00; REL 4.47; RD 2.32. Score **64.60 → 64.60**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="progress-0217"></a>
## The Great A&P and the Struggle for Small Business in America — Marc Levinson

Initial rank 811. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0217). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0217).

Total pages: [358](https://openlibrary.org/books/OL24988752M); OL24988752M; Hardcover; eng; 2011. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [115](https://www.amazon.com.au/dp/0809095432); amazon.com.au; product 0809095432; retrieved 2026-10-23T22:35:17.762Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL24988752M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.60**. Verdict: Low priority. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0417"></a>
## The Origin of Species — Charles Darwin

Initial rank 812. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0417). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0417).

Total pages: [516](https://openlibrary.org/books/OL8860806M); /books/OL8860806M; Paperback; English; 2003. Confidence: moderate. Existing count retained.

Reference pages: [20](https://assets.cambridge.org/97805218/67092/frontmatter/9780521867092_frontmatter.pdf); edition ISBN:9780521867092; Explanatory notes 415–421; bibliographical references 422–434. Confidence: moderate. New count. Reference apparatus in the 2009 Endersby scholarly edition, not the 1859 original. Notes span inferred from the next contents boundary; possible trailing blank pages cannot be checked in this preview. Front-matter footnotes are not counted. Total-page edition may differ.

Amazon ratings: [9209](https://www.amazon.com.au/dp/0521867096); amazon.com.au; product 0521867096; retrieved 2026-10-24T11:02:19.290Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://assets.cambridge.org/97805218/67092/frontmatter/9780521867092_frontmatter.pdf). Publisher front matter confirms Darwin’s On the Origin of Species, Jim Endersby editor, 2009 hardcover ISBN. Amazon prepends Cambridge and appends format/date. Of the two inspected editions, this aggregate is the larger; counts are not summed.

R&D: 20 reference pages / 516 total pages = 3.88%; R&D = 0.78 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL8860806M; reference edition: ISBN:9780521867092. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -10.00; O15 0.00; REL 0.00; RD 0.78. Score **64.57 → 65.35**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 2 new Amazon attempts. 

<a id="rem-u1570"></a>
## Delusions of Gender: How Our Minds, Society, and Neurosexism Create Difference — Cordelia Fine

Initial rank 813. Sources: 204, 215. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1570). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1570).

Total pages: [320](https://openlibrary.org/books/OL34446870M); /books/OL34446870M; Book (format unspecified); English; 2010. Confidence: moderate. Existing count retained.

Reference pages: [39](https://openlibrary.org/books/OL25569726M); edition OL25569726M; bibliographical references 289–327. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [917](https://www.amazon.com.au/dp/184831163X); amazon.com.au; product 184831163X; retrieved 2026-10-24T11:03:49.307Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://books.google.co.uk/books?id=lte_ugEACAAJ). Google Books confirms Cordelia Fine’s Icon 2010 edition and ISBN. The UK edition has the subtitle The Real Science Behind Sex Differences; the US title uses How Our Minds, Society, and Neurosexism Create Difference. Goodreads edition grouping also confirms these belong to the same work: https://www.goodreads.com/work/editions/12635310-delusions-of-gender-the-real-science-behind-sex-differences.

R&D: 39 reference pages / 320 total pages = 12.19%; R&D = 2.44 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL34446870M; reference edition: OL25569726M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.60; O15 -5.00; REL 2.00; RD 2.44. Score **64.57 → 59.57**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="n54eaa6a073"></a>
## The Society of Mind — Marvin Minsky

Initial rank 814. Sources: 130, 193, 232. [Prior content assessment](../analysis/analysis_hn39057219_261020_1731.md#n54eaa6a073). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n54eaa6a073).

Total pages: [336](https://www.simonandschuster.com/books/Society-Of-Mind/Marvin-Minsky/9780671657130); 9780671657130; Paperback; English; 1988. Confidence: moderate. Existing count retained.

Reference pages: [7](https://openlibrary.org/books/OL15530911M); edition OL15530911M; Bibliography: 326–332. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [216](https://www.amazon.com.au/dp/0671657135); amazon.com.au; product 0671657135; retrieved 2026-10-24T11:04:34.302Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0671657135); previously https://www.amazon.de/s?k=The%20Society%20of%20Mind%20Marvin%20Minsky%20paperback. [Product evidence](https://www.amazon.com.au/dp/0671657135). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 7 reference pages / 336 total pages = 2.08%; R&D = 0.42 points. Estimate: editions differ or matching is unconfirmed. Page edition: 9780671657130; reference edition: OL15530911M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.00; O15 -5.00; REL 2.83; RD 0.42. Score **64.57 → 59.57**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="intake-0062"></a>
## Tolbert Lanston and the Monotype — Richard L. Hopkins

Initial rank 815. Sources: 207. [Prior content assessment](../analysis/analysis_hn42614722_261023_0229.md#intake-0062). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0062).

Total pages: [232](https://utampapress.org/product/tolbert-lanston-and-the-monotype-trade-edition); ISBN:9781597321006; Hardcover; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

Purchase link: [updated product](https://www.amazon.de/dp/159732101X); previously https://www.amazon.de/dp/1597321001. [Product evidence](https://netlib.sandia.gov/tex/bib/printing-history.pdf). Paperback ISBN verified from the linked bibliographic source. The Amazon.de URL is constructed from its ISBN-10 equivalent; the new Amazon listing and regional availability could not be checked after an access challenge. Scholarly bibliography identifies Richard L. Hopkins’s University of Tampa Press 2012 paperback ISBN, alongside the hardcover ISBN that returned 404. The publisher confirms the hardcover work at https://utampapress.org/product/tolbert-lanston-and-the-monotype-trade-edition.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781597321006; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.56**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bg77fe5a4faf"></a>
## A Thousand Brains — Jeff Hawkins

Initial rank 820. Sources: 148, 177, 193. [Prior content assessment](../analysis/analysis_bgbillgates_261021_0210.md#bg77fe5a4faf). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bg77fe5a4faf).

Total pages: [288](https://openlibrary.org/books/OL35678174M/A_Thousand_Brains); OL35678174M; paperback; Not stated by source; 2022. Confidence: moderate. Existing count retained.

Reference pages: [7](https://catalog.losgatosca.gov/Record/543422); edition Catalog:https://catalog.losgatosca.gov/Record/543422; bibliographical references 247–253. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [2084](https://www.amazon.com.au/dp/1541675797); amazon.com.au; product 1541675797; retrieved 2026-10-24T11:06:04.311Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1541675797); previously https://www.amazon.com/dp/1541675819. [Product evidence](https://www.amazon.com.au/dp/1541675797). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 7 reference pages / 288 total pages = 2.43%; R&D = 0.49 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL35678174M; reference edition: Catalog:https://catalog.losgatosca.gov/Record/543422. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 6.50 | 4.23 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 0.00; REL 2.83; RD 0.49. Score **64.47 → 64.96**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="progress-0598"></a>
## Baidarka — George Dyson

Initial rank 821. Sources: 238. [Prior content assessment](../analysis/analysis_fbcomputing_261023_2134.md#progress-0598). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0598).

Total pages: [203](https://openlibrary.org/books/OL2717711M); /books/OL2717711M; Print format unspecified; English; 1986. Confidence: moderate. Existing count retained.

Reference pages: [5](https://archive.org/details/baidarka0000dyso); edition ISBN:088240315X; Bibliography: 208–212. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [25](https://www.amazon.com.au/dp/088240315X); amazon.com.au; product 088240315X; retrieved 2026-10-24T11:06:49.315Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://ocw.mit.edu/courses/4-195-special-problems-in-architectural-design-spring-2005/pages/readings/). MIT OpenCourseWare’s bibliography explicitly identifies George Dyson, Baidarka: The Kayak, Alaska Northwest Books 1986, ISBN 088240315X. Amazon omits the author byline.

R&D: 5 reference pages / 203 total pages = 2.46%; R&D = 0.49 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL2717711M; reference edition: ISBN:088240315X. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.00; O15 -10.00; REL 0.00; RD 0.49. Score **64.47 → 54.96**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0862"></a>
## Race Against The Machine — Erik Brynjolfsson; Andrew McAfee

Initial rank 823. Sources: 120. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0862). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0862).

Total pages: [92](https://opac.mzuni.ac.mw/cgi-bin/koha/opac-detail.pl?biblionumber=21175&shelfbrowse_itemnumber=31897); ISBN:9780984725113; Paperback; English; 2011. Confidence: high. Existing count retained.

Reference pages: [12](https://archive.org/details/raceagainstmachi0000bryn); edition ISBN:9780984725113; bibliographical references 81–92. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. ISBN matches the total-page edition.

Amazon ratings: [572](https://www.amazon.com.au/dp/0984725113); www.amazon.com.au; product 0984725113; retrieved 2026-10-22T08:12:56.783Z. Existing verified snapshot retained.

R&D: 12 reference pages / 92 total pages = 13.04%; R&D = 2.61 points. Edition recorded as matching. Page edition: ISBN:9780984725113; reference edition: ISBN:9780984725113. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 9.00 | 8.10 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.50; O15 -5.00; REL 0.00; RD 2.61. Score **64.43 → 67.04**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0269"></a>
## Fall of Civilizations — Paul Cooper

Initial rank 826. Sources: 9. [Prior content assessment](../analysis/analysis_explainworld_261017_2336.md#w055). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0269).

Total pages: [544](https://www.amazon.com.au/dp/0715655485); ASIN:0715655485; Paperback; English; 2025. Confidence: high. Existing count retained.

Reference pages: [66](https://libcat.arlingtonva.us/Record/343540?page=&recordIndex=1&searchId=64262469); edition ISBN:9781335013415; bibliographical references 493–558. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [619](https://www.amazon.com.au/dp/0715655485); www.amazon.com.au; product 0715655485; retrieved 2026-10-18T18:29:28.671Z. Existing verified snapshot retained.

R&D: 66 reference pages / 544 total pages = 12.13%; R&D = 2.43 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:0715655485; reference edition: ISBN:9781335013415. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.47 | 8.47 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.20; O15 -5.00; REL 0.00; RD 2.43. Score **64.41 → 66.83**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="progress-0671"></a>
## The Art of Sanctions: A View from the Field — Richard Nephew

Initial rank 827. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0671). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0671).

Total pages: [240](https://cup.columbia.edu/book/the-art-of-sanctions/9780231542555/); ISBN:9780231180276; Paperback; English; 2023. Confidence: high. New count. 

Reference pages: [18](https://www.degruyterbrill.com/document/doi/10.7312/neph18026-011/html); edition DOI:10.7312/neph18026; Notes 187–198; Bibliography 199–204. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: [33](https://www.amazon.com.au/dp/0231180276); amazon.com.au; product 0231180276; retrieved 2026-10-24T11:07:34.318Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0231180276); previously https://www.amazon.de/dp/0231542550. [Product evidence](https://www.amazon.com.au/dp/0231180276). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 18 reference pages / 240 total pages = 7.50%; R&D = 1.50 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780231180276; reference edition: DOI:10.7312/neph18026. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.90; O15 -10.00; REL 0.00; RD 1.50. Score **64.39 → 55.89**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 1 new Amazon attempts. 

<a id="progress-0655"></a>
## Copper for America: The United States Copper Industry from Colonial Times to the 1990s — Charles K. Hyde

Initial rank 828. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0655). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0655).

Total pages: [288](https://openlibrary.org/books/OL34163983M); /books/OL34163983M; Print format unspecified; English; 1998. Confidence: moderate. Existing count retained.

Reference pages: [44](https://books.google.com/books?id=J-czEAAAQBAJ); edition GoogleBooks:J-czEAAAQBAJ; Notes 213–254; Bibliographic Essay 255–256. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

Purchase link: [updated product](https://www.amazon.de/dp/0816532796); previously https://www.amazon.de/dp/0816546134. [Product evidence](https://www.ubcpress.ca/copper-for-america-1). Paperback ISBN verified from the linked bibliographic source. The Amazon.de URL is constructed from its ISBN-10 equivalent; the new Amazon listing and regional availability could not be checked after an access challenge. Publisher distributor confirms Charles K. Hyde’s 2016 paperback ISBN after the previously used product returned 404. Also confirmed in the University of Arizona Press spring 2016 catalog, https://azmemory.azlibrary.gov/assets/displaypdf/93286.

R&D: 44 reference pages / 288 total pages = 15.28%; R&D = 3.06 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL34163983M; reference edition: GoogleBooks:J-czEAAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.44; P14 -2.80; O15 0.00; REL 0.00; RD 3.06. Score **64.39 → 67.44**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. 

<a id="q0266"></a>
## Almost Perfect — W. E. Pete Peterson

Initial rank 829. Sources: 8, 217, 244. [Prior content assessment](../analysis/analysis_readlately_261017_2316.md#h131). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0266).

Total pages: [236](https://openlibrary.org/books/OL1423853M/Almost_perfect); OL1423853M; Not stated by source; English; 1994. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1](https://www.amazon.com.au/dp/1559584777); amazon.com.au; product 1559584777; retrieved 2026-10-24T11:09:04.324Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL1423853M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.18 | 9.18 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 -1.68; P14 -3.20; O15 -20.00; REL 2.83; RD 0.00. Score **64.39 → 44.39**. Verdict: Poor fit. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0544"></a>
## The Pleasure of Finding Things Out — Richard P. Feynman; Jeffrey Robbins (editor)

Initial rank 830. Sources: 118, 182, 193, 205. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#g0544). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0544).

Total pages: [270](https://openlibrary.org/books/OL7593391M/The_Pleasure_Of_Finding_Things_Out); ISBN:0465023959; Not stated by source; English; 2005. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [951](https://www.amazon.com.au/dp/0465023959); www.amazon.com.au; product 0465023959; retrieved 2026-10-18T22:28:30.080Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0465023959; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.38**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0603"></a>
## Idea Makers — Stephen Wolfram

Initial rank 831. Sources: 118, 154. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0603). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0603).

Total pages: [250](https://www.wolfram-media.com/products/idea-makers/); ISBN:9781579550035; Hardcover; English; 2016. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [272](https://www.amazon.com.au/dp/1579550037); www.amazon.com.au; product 1579550037; retrieved 2026-10-22T08:13:20.531Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781579550035; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.32**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1741"></a>
## High-Speed Dreams: NASA and the Technopolitics of Supersonic Transportation, 1945–1999 — Erik M. Conway

Initial rank 833. Sources: 193, 235. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1741). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1741).

Total pages: [392](https://www.amazon.com.au/dp/080188067X); ISBN/ASIN:080188067X; Hardcover; English; 2005. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [7](https://www.amazon.com.au/dp/080188067X); www.amazon.com.au; product 080188067X; retrieved 2026-10-21T22:48:25.389Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN/ASIN:080188067X; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.30**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bg35aa63a232"></a>
## It's Your Ship — Captain D. Michael Abrashoff

Initial rank 838. Sources: 173. [Prior content assessment](../analysis/analysis_bgblasmoros_261021_0210.md#bg35aa63a232). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bg35aa63a232).

Total pages: [224](https://www.hachettebookgroup.com/titles/captain-d-michael-abrashoff/its-your-ship/9780446535533/); 9780446535533; ebook; English; 2007. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [4142](https://www.amazon.com.au/dp/145552302X); amazon.com.au; product 145552302X; retrieved 2026-10-23T12:10:13.337Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 9780446535533; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.27**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0187"></a>
## The Quest for Artificial Intelligence — Nils J. Nilsson

Initial rank 839. Sources: 211. [Prior content assessment](../analysis/analysis_hn22692281_261023_0229.md#intake-0187). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0187).

Total pages: [562](https://openlibrary.org/books/OL24013083M); /books/OL24013083M; Print format unspecified; English; 2010. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [24](https://www.amazon.com.au/dp/0521116392); amazon.com.au; product 0521116392; retrieved 2026-10-23T08:58:02.904Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL24013083M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.26**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0016"></a>
## The Pursuit of Power — William H. McNeill

Initial rank 841. Sources: 10, 11. [Prior content assessment](../analysis/analysis_pastefollow_261018_0130.md#f047). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0016).

Total pages: [416](https://openlibrary.org/books/OL9589969M/The_Pursuit_of_Power); ISBN:0226561585; Paperback; English; 1984. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [96](https://www.amazon.com/dp/0226561585); www.amazon.com; product 0226561585; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0226561585; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.24**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g1150"></a>
## More Than You Know — Michael J. Mauboussin

Initial rank 842. Sources: 123, 168. [Prior content assessment](../analysis/analysis_glaspinvest_261019_0144.md#g1150). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1150).

Total pages: [320](https://openlibrary.org/books/OL28500096M/More_More_Than_You_Know); ISBN:0231143737; Not stated by source; English; 2013. Confidence: moderate. Existing count retained.

Reference pages: [32](https://books.google.com/books?id=_7mrAgAAQBAJ&hl=en); edition GoogleBooks:_7mrAgAAQBAJ; Notes 259–290. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: [353](https://www.amazon.com.au/dp/0231143737); amazon.com.au; product 0231143737; retrieved 2026-10-24T11:09:49.330Z. Newly established count from a saved snapshot; confidence high.

R&D: 32 reference pages / 320 total pages = 10.00%; R&D = 2.00 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0231143737; reference edition: GoogleBooks:_7mrAgAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.00; O15 -5.00; REL 2.00; RD 2.00. Score **64.23 → 59.23**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="progress-0689"></a>
## First Light — Richard Preston

Initial rank 844. Sources: 236. [Prior content assessment](../analysis/analysis_gmuinnovate_261023_2134.md#progress-0689). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0689).

Total pages: [304](https://www.penguinrandomhouse.com/books/133838/first-light-by-richard-preston/); ISBN:9780812991857; Paperback; English; 1996. Confidence: high. New count. 

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [175](https://www.amazon.com.au/dp/0812991850); amazon.com.au; product 0812991850; retrieved 2026-10-24T11:10:34.335Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0812991850); previously https://www.amazon.de/dp/0307817423. [Product evidence](https://www.amazon.com.au/dp/0812991850). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780812991857; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -1.60; P14 -3.90; O15 -5.00; REL 0.00; RD 0.00. Score **64.22 → 59.22**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nb7f4a67284"></a>
## Open Circuits — Windell H. Oskay; Eric Schlaepfer

Initial rank 845. Sources: 134. [Prior content assessment](../analysis/analysis_hn36581241_261020_1731.md#nb7f4a67284). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nb7f4a67284).

Total pages: [304](https://nostarch.com/open-circuits); 9781718502345; Hardcover; English; 2022. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1484](https://www.amazon.com.au/dp/1718502346); amazon.com.au; product 1718502346; retrieved 2026-10-23T11:03:12.947Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 9781718502345; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.21**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="ndceda67ac7"></a>
## Artificial Life — Steven Levy

Initial rank 846. Sources: 135. [Prior content assessment](../analysis/analysis_hn29462663_261020_1731.md#ndceda67ac7). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#ndceda67ac7).

Total pages: [400](https://books.google.com/books/about/Artificial_life.html?hl=en&id=SeBG0iWBzq4C); ISBN:9780679743897; Format not specified in catalog; English; 1992. Confidence: moderate. Existing count retained.

Reference pages: [20](https://openlibrary.org/books/OL1743400M); edition OL1743400M; bibliographical references 351–370. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [17](https://www.amazon.com.au/dp/0679743898); amazon.com.au; product 0679743898; retrieved 2026-10-24T11:11:19.341Z. Newly established count from a saved snapshot; confidence high.

R&D: 20 reference pages / 400 total pages = 5.00%; R&D = 1.00 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780679743897; reference edition: OL1743400M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.40; O15 -10.00; REL 0.00; RD 1.00. Score **64.19 → 54.19**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="g0838"></a>
## Good Economics For Hard Times — Abhijit V. Banerjee; Esther Duflo

Initial rank 847. Sources: 120, 187. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0838). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0838).

Total pages: [432](https://www.amazon.com/dp/1610399501); ASIN:1610399501; Hardcover; English; 2019. Confidence: high. Existing count retained.

Reference pages: [57](https://opac.northsouth.edu/cgi-bin/koha/opac-detail.pl?biblionumber=29187&query_desc=su%3A%22Macroeconomics%22); edition ISBN:9781610399500; bibliographical references 327–383. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [4234](https://www.amazon.com.au/dp/1610399501); www.amazon.com.au; product 1610399501; retrieved 2026-10-21T14:59:28.227Z. Existing verified snapshot retained.

R&D: 57 reference pages / 432 total pages = 13.19%; R&D = 2.64 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:1610399501; reference edition: ISBN:9781610399500. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.70; O15 0.00; REL 2.00; RD 2.64. Score **64.18 → 66.82**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="n4be212b763"></a>
## Shattered Sword — Jonathan Parshall; Anthony Tully

Initial rank 848. Sources: 143. [Prior content assessment](../analysis/analysis_technicalnf_261020_1731.md#n4be212b763). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n4be212b763).

Total pages: [640](https://www.nebraskapress.unl.edu/potomac-books/9781574889246/shattered-sword/); ISBN:9781574889246; Paperback; English; 2007. Confidence: high. Existing count retained.

Reference pages: [9](https://catalog.freelibrary.org/Record/1589431); edition ISBN:9781574889239; bibliographical references 581–589. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [2766](https://www.amazon.com.au/dp/1574889249); amazon.com.au; product 1574889249; retrieved 2026-10-23T11:05:12.949Z. Existing verified snapshot retained.

R&D: 9 reference pages / 640 total pages = 1.41%; R&D = 0.28 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781574889246; reference edition: ISBN:9781574889239. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -3.36; P14 -2.10; O15 0.00; REL 0.00; RD 0.28. Score **64.17 → 64.45**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="progress-0022"></a>
## Food: A Very Short Introduction — John Krebs

Initial rank 849. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0022). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0022).

Total pages: [144](https://www.oupjapan.co.jp/en/node?page=408); ISBN:9780199661084; Paperback; English; 2013. Confidence: high. New count. Publisher page count; library pagination xiv + 130 confirms 144.

Reference pages: [12](https://ci.nii.ac.jp/ncid/BB13460172); edition ISBN:9780199661084; Bibliographical references 113–124. Confidence: moderate. New count. Documented reference sections only; excludes index. Page and reference editions can differ; ratio is an estimate.

Amazon ratings: [60](https://www.amazon.com.au/dp/0199661081); amazon.com.au; product 0199661081; retrieved 2026-10-24T11:12:04.342Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://ci.nii.ac.jp/ncid/BB13460172). The library record used for this book’s page and reference counts identifies Food: A Very Short Introduction by John Krebs, ISBN 9780199661084, equivalent to 0199661081. Amazon gives only the surname Krebs.

R&D: 12 reference pages / 144 total pages = 8.33%; R&D = 1.67 points. Edition recorded as matching. Page edition: ISBN:9780199661084; reference edition: ISBN:9780199661084. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.30; O15 -10.00; REL 0.00; RD 1.67. Score **64.17 → 55.83**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 2 new Amazon attempts. 

<a id="q0160"></a>
## The Second World War — Antony Beevor

Initial rank 850. Sources: 8, 201. [Prior content assessment](../analysis/analysis_readlately_261017_2316.md#h058). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0160).

Total pages: [880](https://openlibrary.org/books/OL29171685M/Second_World_War); ISBN:1780225644; Paperback; English; 2014. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [4374](https://www.amazon.com.au/dp/1780225644); www.amazon.com.au; product 1780225644; retrieved 2026-10-18T18:28:50.806Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1780225644; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.17**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0293"></a>
## Blueprint — Nicholas A. Christakis

Initial rank 851. Sources: 4, 118, 148, 154. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0575). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0293).

Total pages: [544](https://openlibrary.org/books/OL27950118M/Blueprint); ISBN:0316230049; paperback; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [613](https://www.amazon.com.au/dp/0316230049); www.amazon.com.au; product 0316230049; retrieved 2026-10-18T18:29:50.182Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0316230049; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.15**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0326"></a>
## History of Engineering Drawing — Peter Jeffrey Booker

Initial rank 852. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0326). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0326).

Total pages: [239](https://openlibrary.org/books/OL18739593M); /books/OL18739593M; Print format unspecified; English; 1979. Confidence: moderate. Existing count retained.

Reference pages: [4](https://obnb.uk/p11002159-a-history-of-engineering-drawing); edition ISBN:0852984243; Bibliography 233–236. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: [1](https://www.amazon.com.au/dp/0852984243); amazon.com.au; product 0852984243; retrieved 2026-10-24T11:13:34.351Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://obnb.uk/p11002159-a-history-of-engineering-drawing). British National Bibliography identifies Peter Jeffrey Booker, A History of Engineering Drawing, Northgate 1979, ISBN 0852984243. Amazon abbreviates the author to P.J. Booker.

R&D: 4 reference pages / 239 total pages = 1.67%; R&D = 0.33 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL18739593M; reference edition: ISBN:0852984243. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -2.64; P14 -6.30; O15 -20.00; REL 0.00; RD 0.33. Score **64.13 → 44.47**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. 

<a id="n6694fcb8ec"></a>
## The World Is Your Office — Prithwiraj Choudhury

Initial rank 853. Sources: 145. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h1128). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n6694fcb8ec).

Total pages: [187](https://ci.nii.ac.jp/ncid/BD14161003); ISBN:9781647824716; Hardcover; English; 2025. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [11](https://www.amazon.com.au/dp/1647824710); www.amazon.com.au; product 1647824710; retrieved 2026-10-22T08:12:03.310Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781647824716; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.13**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0299"></a>
## Pacific Crucible — Ian W. Toll

Initial rank 855. Sources: 212. [Prior content assessment](../analysis/analysis_smb1hg08ou_261023_0229.md#intake-0299). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0299).

Total pages: [656](https://openlibrary.org/books/OL29600929M); /books/OL29600929M; Print format unspecified; English; 2011. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [6874](https://www.amazon.com.au/dp/0393343413); amazon.com.au; product 0393343413; retrieved 2026-10-23T12:11:13.344Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL29600929M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.09**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0814"></a>
## Net Zero by 2050: A Roadmap for the Global Energy Sector — International Energy Agency

Initial rank 856. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0814). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0814).

Total pages: [224](https://www.oecd.org/en/publications/net-zero-by-2050_c8328405-en.html); ISBN:9789264608795; Publisher report PDF; English; 2021. Confidence: moderate. New count. OECD publisher metadata for the 18 May 2021 report.

Reference pages: [6](https://iea.blob.core.windows.net/assets/063ae08a-7114-4b58-a34e-39db2112d0a2/NetZeroby2050-ARoadmapfortheGlobalEnergySector.pdf); edition PublisherPDF:netzero:2021; References 217–222. Confidence: high. New count. Annex D spans printed pages 217–222 (physical PDF pages 218–223); the final colophon is excluded. Total physical PDF extent is 224, corroborating the publisher page count. Edition match to publisher metadata remains unconfirmed.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 6 reference pages / 224 total pages = 2.68%; R&D = 0.54 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9789264608795; reference edition: PublisherPDF:netzero:2021. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.50; O15 0.00; REL 0.00; RD 0.54. Score **64.09 → 64.62**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 1 new Amazon attempts. 

<a id="q0343"></a>
## Empire of Cotton — Sven Beckert

Initial rank 857. Sources: 11, 12. [Prior content assessment](../analysis/analysis_physcanon_261018_0147.md#p066). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0343).

Total pages: [640](https://www.amazon.com/dp/0375713964); ASIN:0375713964; Paperback; English; 2015. Confidence: high. Existing count retained.

Reference pages: [139](https://ci.nii.ac.jp/ncid/BB17429312?l=en); edition ISBN:9780375414145; bibliographical references 449–587. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [975](https://www.amazon.com/dp/0375713964); www.amazon.com; product 0375713964; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: 139 reference pages / 640 total pages = 21.72%; R&D = 4.34 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:0375713964; reference edition: ISBN:9780375414145. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 17.00 | 17.00 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.20; O15 -5.00; REL 2.00; RD 4.34. Score **64.08 → 68.43**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g0343"></a>
## The Startup Community Way — Brad Feld; Ian Hathaway

Initial rank 858. Sources: 115. [Prior content assessment](../analysis/analysis_glaspbiz_261019_0144.md#g0343). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0343).

Total pages: [256](https://openlibrary.org/books/OL28933278M/Startup_Community_Way); ISBN:1119613604; Not stated by source; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: [24](https://www.wiley.com/en-us/the-startup-community-way-evolving-an-entrepreneurial-ecosystem-p-9781119613626); edition ISBN:9781119613626; Notes 301–324. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: [143](https://www.amazon.com/dp/1119613604); www.amazon.com; product 1119613604; retrieved 2026-10-18T22:27:56.203Z. Existing verified snapshot retained.

R&D: 24 reference pages / 256 total pages = 9.38%; R&D = 1.88 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:1119613604; reference edition: ISBN:9781119613626. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.60; O15 -5.00; REL 0.00; RD 1.88. Score **64.08 → 65.95**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="n0ba6424513"></a>
## The Polymath — Peter Burke

Initial rank 860. Sources: 132. [Prior content assessment](../analysis/analysis_hn38556188_261020_1731.md#n0ba6424513). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n0ba6424513).

Total pages: [352](https://yalebooks.yale.edu/book/9780300260465/the-polymath/); 9780300260465; Paperback; English; 2021. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [101](https://www.amazon.com/dp/0300260466); amazon.com; product unspecified; retrieved 2026-10-20T17:31:44.8645338Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 9780300260465; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.07**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0215"></a>
## The Jakarta Method — Vincent Bevins

Initial rank 863. Sources: 5, 8, 9, 11, 141, 200. [Prior content assessment](../analysis/analysis_interesting_261020_1731.md#q0215). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0215).

Total pages: [340](https://openlibrary.org/books/OL30924068M/The_Jakarta_Method); ISBN:1541724003; paperback; English; 2021. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1938](https://www.amazon.com/dp/1541724003); www.amazon.com; product 1541724003; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1541724003; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.04**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1500"></a>
## The Beak of the Finch: A Story of Evolution in Our Time — Jonathan Weiner

Initial rank 865. Sources: 203. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1500). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1500).

Total pages: [332](https://openlibrary.org/books/OL1425727M); /books/OL1425727M; Book (format unspecified); English; 1994. Confidence: moderate. Existing count retained.

Reference pages: [17](https://openlibrary.org/books/OL1425727M); edition OL1425727M; bibliographical references 305–321. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [820](https://www.amazon.com.au/dp/0679400036); amazon.com.au; product 0679400036; retrieved 2026-10-24T11:15:04.359Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://library.rtc.bt/bib/1578). The library record identifies Jonathan Weiner, The Beak of the Finch, Knopf 1994, ISBN 0679400036. Amazon omits the author byline.

R&D: 17 reference pages / 332 total pages = 5.12%; R&D = 1.02 points. Edition recorded as matching. Page edition: /books/OL1425727M; reference edition: OL1425727M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.20; O15 -5.00; REL 0.00; RD 1.02. Score **64.04 → 59.04**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="bgebf9a1a227"></a>
## The Strategy of Conflict — Thomas C. Schelling

Initial rank 866. Sources: 156, 166. [Prior content assessment](../analysis/analysis_bgstevenpink_261021_0210.md#bgebf9a1a227). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bgebf9a1a227).

Total pages: [309](https://books.google.com/books/about/The_Strategy_of_Conflict.html?id=7RkL4Z8Yg5AC); 9780674840317; paperback; new preface; English; 1980. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [144](https://www.amazon.com.au/dp/0674840313); www.amazon.com.au; product 0674840313; retrieved 2026-10-22T08:13:25.285Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 9780674840317; reference edition: unknown. Ratio confidence: unknown.

Score retained: **64.04**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nd135f70a3c"></a>
## Fire Weather — John Vaillant

Initial rank 867. Sources: 132, 143. [Prior content assessment](../analysis/analysis_hn38556188_261020_1731.md#nd135f70a3c). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nd135f70a3c).

Total pages: [432](https://www.penguinrandomhouse.com/books/554938/fire-weather-by-john-vaillant/); 9780525434245; Paperback; English; 2024. Confidence: moderate. Existing count retained.

Reference pages: [37](https://library.nmhschool.org/cgi-bin/koha/opac-detail.pl?biblionumber=38961&shelfbrowse_itemnumber=44077); edition ISBN:9781524732851; Notes 365–398; Bibliography 399–401. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ. Publisher contents corroborate the notes start; the catalog supplies the bibliography end. Final blank pages are not inferred as references.

Amazon ratings: [2444](https://www.amazon.com/dp/0525434240); amazon.com; product unspecified; retrieved 2026-10-20T17:39:38.8628368Z. Existing verified snapshot retained.

R&D: 37 reference pages / 432 total pages = 8.56%; R&D = 1.71 points. Estimate: editions differ or matching is unconfirmed. Page edition: 9780525434245; reference edition: ISBN:9781524732851. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 -0.40; P14 -0.30; O15 0.00; REL 2.00; RD 1.71. Score **64.03 → 65.74**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g0908"></a>
## Unelected Power — Paul Tucker

Initial rank 868. Sources: 120, 167. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0908). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0908).

Total pages: [656](https://openlibrary.org/books/OL27372394M/Unelected_Power); OL27372394M; hardcover; English; 2018. Confidence: moderate. Existing count retained.

Reference pages: [32](https://books.google.com/books?id=EXKYDwAAQBAJ&hl=en); edition GoogleBooks:EXKYDwAAQBAJ; Bibliography 579–610. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: [31](https://www.amazon.com.au/dp/0691176736); amazon.com.au; product 0691176736; retrieved 2026-10-24T11:15:49.363Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0691176736); previously https://www.amazon.com/dp/B07NPFRDLY. [Product evidence](https://www.amazon.com.au/dp/0691176736). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 32 reference pages / 656 total pages = 4.88%; R&D = 0.98 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL27372394M; reference edition: GoogleBooks:EXKYDwAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 5.00 | 2.50 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.80; O15 -10.00; REL 2.00; RD 0.98. Score **64.01 → 54.01**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="intake-0192"></a>
## From Counterculture to Cyberculture — Fred Turner

Initial rank 869. Sources: 211, 232. [Prior content assessment](../analysis/analysis_hn22692281_261023_0229.md#intake-0192). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0192).

Total pages: [354](https://openlibrary.org/books/OL10193187M); /books/OL10193187M; Paperback; English; 2008. Confidence: moderate. Existing count retained.

Reference pages: [50](https://books.google.com/books?id=2SNFpgX_WigC&hl=en); edition GoogleBooks:2SNFpgX_WigC; Notes 263–290; Bibliography 291–312. Confidence: moderate. New count. Only displayed, bounded reference sections are counted. Google Books may omit other sections from its contents list; a boundary may include a final blank page. Edition can differ from the length edition. Chosen over a bibliography-only catalog count because this contents record also gives a bounded notes section.

Amazon ratings: [74](https://www.amazon.com.au/dp/0226817423); amazon.com.au; product 0226817423; retrieved 2026-10-24T11:16:34.368Z. Newly established count from a saved snapshot; confidence high.

R&D: 50 reference pages / 354 total pages = 14.12%; R&D = 2.82 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL10193187M; reference edition: GoogleBooks:2SNFpgX_WigC. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.04; P14 -2.00; O15 -10.00; REL 2.00; RD 2.82. Score **64.00 → 56.83**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="rem-u1023"></a>
## The Way Things Work Now — David Macaulay

Initial rank 870. Sources: 190, 208. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1023). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1023).

Total pages: [400](https://books.google.com/books/about/The_Way_Things_Work_Now.html?id=A2EbDAAAQBAJ); ISBN:9780241282199; Book (format unspecified); English; 2016. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780241282199; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.99**. Verdict: Low priority. Content confidence: low.

Audit: 1 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0639"></a>
## The Weightless World: Strategies for managing the digital economy — Diane Coyle

Initial rank 872. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0639). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0639).

Total pages: [272](https://openlibrary.org/books/OL9768173M); /books/OL9768173M; Paperback; English; 1999. Confidence: moderate. Existing count retained.

Reference pages: [5](https://openlibrary.org/books/OL364248M/The_weightless_world); edition ISBN:0262032597; bibliographical references 238–242. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 5 reference pages / 272 total pages = 1.84%; R&D = 0.37 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL9768173M; reference edition: ISBN:0262032597. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.90; O15 0.00; REL 0.00; RD 0.37. Score **63.97 → 64.33**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 2 new Amazon attempts. 

<a id="rem-u1412"></a>
## The Girls of Atomic City: The Untold Story of the Women Who Helped Win World War II — Denise Kiernan

Initial rank 874. Sources: 201. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1412). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1412).

Total pages: [400](https://openlibrary.org/books/OL33987747M); /books/OL33987747M; Book (format unspecified); English; 2013. Confidence: moderate. Existing count retained.

Reference pages: [69](https://openlibrary.org/books/OL27143809M); edition OL27143809M; bibliographical references 575–643. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 69 reference pages / 400 total pages = 17.25%; R&D = 3.45 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL33987747M; reference edition: OL27143809M. Ratio confidence: low.

Score retained: **63.96**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="q0031"></a>
## Violence and Social Orders — Douglass C. North; John J. Wallis; Barry R. Weingast

Initial rank 875. Sources: 11. [Prior content assessment](../analysis/analysis_pastefollow_261018_0130.md#f052). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0031).

Total pages: [346](https://www.amazon.com.au/dp/1107646995); ASIN:1107646995; Paperback; English; 2013. Confidence: high. Existing count retained.

Reference pages: [22](https://catalog.otsnagaland.edu.in/cgi-bin/koha/opac-detail.pl?biblionumber=11960&shelfbrowse_itemnumber=15358); edition Catalog:OTS11960; Bibliographical references 273–294. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: [86](https://www.amazon.com/dp/1107646995); www.amazon.com; product 1107646995; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: 22 reference pages / 346 total pages = 6.36%; R&D = 1.27 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:1107646995; reference edition: Catalog:OTS11960. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 17.00 | 17.00 |
| Transferable strategic utility | 14.00 | 14.00 |
| Mechanistic and causal depth | 11.29 | 11.29 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.70; O15 -10.00; REL 0.00; RD 1.27. Score **63.94 → 65.22**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1345"></a>
## Dominion: How the Christian Revolution Remade the World — Tom Holland

Initial rank 876. Sources: 200. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1345). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1345).

Total pages: [624](https://openlibrary.org/books/OL38328105M); /books/OL38328105M; Book (format unspecified); English; 2023. Confidence: moderate. Existing count retained.

Reference pages: [17](https://aspen.greenvillelibrary.org/Record/403656); edition ISBN:9780465093526; bibliographical references 575–591. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [2152](https://www.amazon.com.au/dp/1408706954); amazon.com.au; product 1408706954; retrieved 2026-10-23T11:18:13.062Z. Existing verified snapshot retained.

R&D: 17 reference pages / 624 total pages = 2.72%; R&D = 0.54 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL38328105M; reference edition: ISBN:9780465093526. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.70; O15 0.00; REL 0.00; RD 0.54. Score **63.94 → 64.49**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="progress-0535"></a>
## Possiplex — Ted Nelson

Initial rank 878. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0535). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0535).

Total pages: [380](https://www.lulu.com/shop/ted-nelson/possiplex/paperback/product-14925222.html); ISBN:9780893470043; Paperback; English; 2010. Confidence: moderate. New count. Lulu print-on-demand product specifications. Prefer the publisher count to a secondary citation of 382 pages.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [10](https://www.amazon.com.au/dp/089347004X); amazon.com.au; product 089347004X; retrieved 2026-10-24T11:20:19.385Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780893470043; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.64; P14 -1.60; O15 -10.00; REL 0.00; RD 0.00. Score **63.93 → 53.93**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1208"></a>
## A Template for Understanding Big Debt Crises — Ray Dalio

Initial rank 879. Sources: 196, 197. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1208). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1208).

Total pages: [480](https://www.simonandschuster.com/books/Principles-for-Navigating-Big-Debt-Crises/Ray-Dalio/Principles/9781668009291); ISBN:9781668009291; Hardcover; English; 2022. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [320](https://www.amazon.com.au/dp/1668009293); amazon.com.au; product 1668009293; retrieved 2026-10-24T11:21:04.391Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://books.google.com/books?id=2eyaEAAAQBAJ). Google Books confirms Ray Dalio’s Principles for Navigating Big Debt Crises, Simon and Schuster 2022, ISBN 1668009293. This is the later edition of the source work Big Debt Crises; its three-part contents are documented at https://www.labyrinthbooks.com/principles-for-navigating-big-debt-crises/, and Goodreads groups the 2018 and 2022 editions under work 64527848.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781668009291; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.80; O15 -5.00; REL 2.00; RD 0.00. Score **63.93 → 58.93**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0617"></a>
## In Pursuit of the Unknown: 17 Equations That Changed the World — Ian Stewart

Initial rank 880. Sources: 242. [Prior content assessment](../analysis/analysis_fbengineer_261023_2134.md#progress-0617). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0617).

Total pages: [360](https://openlibrary.org/books/OL27587475M); /books/OL27587475M; paperback; English; 2013. Confidence: moderate. Existing count retained.

Reference pages: [10](https://iucat.iu.edu/catalog/12322397/librarian_view); edition Catalog:IUCAT12322397; Bibliographical references 321–330. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: [665](https://www.amazon.com.au/dp/0465085989); amazon.com.au; product 0465085989; retrieved 2026-10-24T11:21:49.399Z. Newly established count from a saved snapshot; confidence high.

R&D: 10 reference pages / 360 total pages = 2.78%; R&D = 0.56 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL27587475M; reference edition: Catalog:IUCAT12322397. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 -5.00; REL 0.00; RD 0.56. Score **63.92 → 59.48**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. 

<a id="g0179"></a>
## What You Do Is Who You Are — Ben Horowitz

Initial rank 881. Sources: 115, 162, 193. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h1212). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0179).

Total pages: [304](https://openlibrary.org/books/OL28926636M/What_You_Do_Is_Who_You_Are); ISBN:0062871331; Not stated by source; English; 2019. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1945](https://www.amazon.com.au/dp/0062871331); www.amazon.com.au; product 0062871331; retrieved 2026-10-18T22:27:10.345Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0062871331; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.92**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bga20f469258"></a>
## Why Don't Students Like School? — Daniel T. Willingham

Initial rank 882. Sources: 148. [Prior content assessment](../analysis/analysis_bgbillgates_261021_0210.md#bga20f469258). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bga20f469258).

Total pages: [240](https://openlibrary.org/books/OL27305044M/Why_Don't_Students_Like_School_A_Cognitive_Scientist_Answers_Questions_About_How_the_Mind_Works_and_); ISBN:047059196X; paperback; Not stated by source; 2010. Confidence: moderate. Existing count retained.

Reference pages: [6](https://www.wiley.com/en-us/Why%2BDon%27t%2BStudents%2BLike%2BSchool%3F%3A%2BA%2BCognitive%2BScientist%2BAnswers%2BQuestions%2BAbout%2BHow%2Bthe%2BMind%2BWorks%2Band%2BWhat%2BIt%2BMeans%2Bfor%2Bthe%2BClassroom%2C%2B2nd%2BEdition-p-9781119715665); edition ISBN:9781119715665; Notes 285–290. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: [1073](https://www.amazon.com.au/dp/0470279303); amazon.com.au; product 0470279303; retrieved 2026-10-23T11:21:13.066Z. Existing verified snapshot retained.

R&D: 6 reference pages / 240 total pages = 2.50%; R&D = 0.50 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:047059196X; reference edition: ISBN:9781119715665. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.70; O15 0.00; REL 0.00; RD 0.50. Score **63.91 → 64.41**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="n08b0bddcfa"></a>
## Breakneck — Dan Wang

Initial rank 883. Sources: 141, 193, 250. [Prior content assessment](../analysis/analysis_interesting_261020_1731.md#n08b0bddcfa). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n08b0bddcfa).

Total pages: [288](https://www.penguin.co.uk/books/465161/breakneck-by-wang-dan/9781802067798); ISBN:9781802067798; Paperback; English; 2026. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2600](https://www.amazon.com.au/dp/1802067795); amazon.com.au; product 1802067795; retrieved 2026-10-24T11:22:34.399Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1802067795); previously https://www.amazon.de/s?k=Breakneck%20Dan%20Wang%20paperback. [Product evidence](https://www.amazon.com.au/dp/1802067795). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781802067798; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.10; O15 0.00; REL 2.83; RD 0.00. Score **63.91 → 63.91**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1067"></a>
## The Upstarts: How Uber, Airbnb, and the Killer Companies of the New Silicon Valley Are Changing the World — Brad Stone

Initial rank 885. Sources: 191. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1067). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1067).

Total pages: [448](https://openlibrary.org/books/OL30584774M); /books/OL30584774M; Book (format unspecified); English; 2018. Confidence: moderate. Existing count retained.

Reference pages: [22](https://openlibrary.org/books/OL27226520M); edition OL27226520M; bibliographical references 337–358. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [1536](https://www.amazon.com.au/dp/0552172588); amazon.com.au; product 0552172588; retrieved 2026-10-24T11:23:19.404Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0552172588); previously https://www.amazon.de/s?k=The%20Upstarts%3A%20How%20Uber%2C%20Airbnb%2C%20and%20the%20Killer%20Companies%20of%20the%20New%20Silicon%20Valley%20Are%20Changing%20the%20World%20Brad%20Stone%20paperback. [Product evidence](https://www.amazon.com.au/dp/0552172588). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 22 reference pages / 448 total pages = 4.91%; R&D = 0.98 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL30584774M; reference edition: OL27226520M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.40; P14 -0.90; O15 0.00; REL 0.00; RD 0.98. Score **63.85 → 63.85**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="bgd956830182"></a>
## Smallpox: The Death of a Disease — D. A. Henderson

Initial rank 887. Sources: 148, 229. [Prior content assessment](../analysis/analysis_bgbillgates_261021_0210.md#bgd956830182). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bgd956830182).

Total pages: [360](https://openlibrary.org/books/OL23186403M/Smallpox); ISBN:1591027225; Hardcover; English; 2009. Confidence: moderate. Existing count retained.

Reference pages: [6](https://wellcomecollection.org/works/r8wh9knu); edition ISBN:9781591027225; Bibliographical references 315–320. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. ISBN matches the total-page edition.

Amazon ratings: [68](https://www.amazon.com.au/dp/1591027225); amazon.com.au; product 1591027225; retrieved 2026-10-24T11:24:04.404Z. Newly established count from a saved snapshot; confidence high.

R&D: 6 reference pages / 360 total pages = 1.67%; R&D = 0.33 points. Edition recorded as matching. Page edition: ISBN:1591027225; reference edition: ISBN:9781591027225. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.84; P14 -1.70; O15 -10.00; REL 2.00; RD 0.33. Score **63.84 → 54.17**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 1 new Amazon attempts. 

<a id="rem-u1224"></a>
## The Great Tech Game: How Technology Is Shaping Geopolitics and the Destiny of Nations — Anirudh Suri

Initial rank 888. Sources: 196, 197. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1224). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1224).

Total pages: [537](https://books.google.com/books/about/The_Great_Tech_Game.html?id=lLuc0AEACAAJ); ISBN:9789356990203; Book (format unspecified); English; 2022. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [99](https://www.amazon.com.au/dp/9356990204); amazon.com.au; product 9356990204; retrieved 2026-10-24T11:24:49.413Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://books.google.com/books/about/The_Great_Tech_Game.html?id=lLuc0AEACAAJ). Google Books confirms Anirudh Suri and ISBN 9789356990203. The subtitle is shortened to Shaping Geopolitics and the Destinies of Nations; booksellers also list the source subtitle How Technology Is Shaping Geopolitics and the Destiny of Nations for the same ISBN.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9789356990203; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.40; O15 -10.00; REL 2.00; RD 0.00. Score **63.83 → 53.83**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1212"></a>
## The Price of Time: The Real Story of Interest — Edward Chancellor

Initial rank 889. Sources: 196, 197. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1212). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1212).

Total pages: [432](https://www.penguin.co.uk/books/448594/the-price-of-time-by-chancellor-edward/9781802060157); ISBN:9781802060157; Paperback; English; 2023. Confidence: high. Existing count retained.

Reference pages: [19](https://ci.nii.ac.jp/ncid/BD04549225.amp); edition ISBN:9781802060157; bibliographical references 315–333. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [1315](https://www.amazon.com.au/dp/1802060154); amazon.com.au; product 1802060154; retrieved 2026-10-24T11:25:34.416Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1802060154); previously https://www.amazon.de/s?k=The%20Price%20of%20Time%3A%20The%20Real%20Story%20of%20Interest%20Edward%20Chancellor%20paperback. [Product evidence](https://www.amazon.com.au/dp/1802060154). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 19 reference pages / 432 total pages = 4.40%; R&D = 0.88 points. Edition recorded as matching. Page edition: ISBN:9781802060157; reference edition: ISBN:9781802060157. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.40; O15 0.00; REL 2.00; RD 0.88. Score **63.83 → 64.71**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="progress-0599"></a>
## Splinters of Infinity: Cosmic Rays and the Clash of Two Nobel Prize–Winning Scientists over the Secrets of Creation — Mark Wolverton

Initial rank 890. Sources: 239. [Prior content assessment](../analysis/analysis_fbphysics_261023_2134.md#progress-0599). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0599).

Total pages: [280](https://www.penguinrandomhouse.com/books/739509/splinters-of-infinity-by-mark-wolverton/); ISBN:9780262048828; Hardcover; English; 2024. Confidence: high. New count. 

Reference pages: [26](https://penguinrandomhousehighereducation.com/book/?isbn=9780262377836); edition ISBN:9780262377836; Notes 237–258; Bibliography 259–262. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: [2](https://www.amazon.com.au/dp/0262048825); amazon.com.au; product 0262048825; retrieved 2026-10-24T11:26:19.425Z. Newly established count from a saved snapshot; confidence high.

R&D: 26 reference pages / 280 total pages = 9.29%; R&D = 1.86 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780262048828; reference edition: ISBN:9780262377836. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -3.44; P14 -0.20; O15 -20.00; REL 0.00; RD 1.86. Score **63.83 → 45.68**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. 

<a id="g0675"></a>
## The Upright Thinkers — Leonard Mlodinow

Initial rank 891. Sources: 118. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0675). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0675).

Total pages: [352](https://openlibrary.org/books/OL27706317M/The_Upright_Thinkers); OL27706317M; paperback; Not stated by source; 2016. Confidence: moderate. Existing count retained.

Reference pages: [19](https://openlibrary.org/books/OL27179638M); edition OL27179638M; bibliographical references 301–319. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [345](https://www.amazon.com.au/dp/0345804430); amazon.com.au; product 0345804430; retrieved 2026-10-24T11:27:04.425Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0345804430); previously https://www.amazon.com/dp/B00N6PBEY2. [Product evidence](https://www.amazon.com.au/dp/0345804430). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 19 reference pages / 352 total pages = 5.40%; R&D = 1.08 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL27706317M; reference edition: OL27179638M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.10; O15 -5.00; REL 0.00; RD 1.08. Score **63.80 → 58.80**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="rem-u1759"></a>
## Now It Can Be Told — Leslie R. Groves

Initial rank 892. Sources: 193. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1759). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1759).

Total pages: [464](https://openlibrary.org/books/OL19122711M); /books/OL19122711M; Book (format unspecified); English; 1963. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [551](https://www.amazon.com.au/dp/0306801892); amazon.com.au; product 0306801892; retrieved 2026-10-23T09:43:12.494Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL19122711M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.80**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g1065"></a>
## Origin Story — David Christian

Initial rank 893. Sources: 122, 148. [Prior content assessment](../analysis/analysis_glasphist_261019_0144.md#g1065). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1065).

Total pages: [368](https://openlibrary.org/books/OL29775230M/Origin_Story); OL29775230M; Not stated by source; English; 2018. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1849](https://www.amazon.com.au/dp/0316392006); amazon.com.au; product 0316392006; retrieved 2026-10-24T11:28:34.433Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL29775230M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.80; O15 0.00; REL 2.00; RD 0.00. Score **63.79 → 63.79**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 2 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0460"></a>
## Rise of the Robots — Martin Ford

Initial rank 895. Sources: 116. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0460). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0460).

Total pages: [334](https://openlibrary.org/books/OL26887324M/Rise_of_the_Robots); ISBN:0465059996; Not stated by source; English; 2015. Confidence: moderate. Existing count retained.

Reference pages: [29](https://openlibrary.org/books/OL26887324M); edition OL26887324M; bibliographical references 287–315. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [2584](https://www.amazon.com.au/dp/0465059996); amazon.com.au; product 0465059996; retrieved 2026-10-24T11:29:19.436Z. Newly established count from a saved snapshot; confidence high.

R&D: 29 reference pages / 334 total pages = 8.68%; R&D = 1.74 points. Edition recorded as matching. Page edition: ISBN:0465059996; reference edition: OL26887324M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.10; O15 0.00; REL 0.00; RD 1.74. Score **63.78 → 63.78**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="n421921f202"></a>
## Think Again — Adam Grant

Initial rank 896. Sources: 142. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h1137). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n421921f202).

Total pages: [307](https://openlibrary.org/books/OL31987441M/Think_Again); OL31987441M; paperback; English; 2021. Confidence: moderate. Existing count retained.

Reference pages: [30](https://books.google.com/books?id=sBb6DwAAQBAJ&hl=en); edition GoogleBooks:sBb6DwAAQBAJ; Notes 267–296. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: [17710](https://www.amazon.com.au/dp/0593298748); amazon.com.au; product 0593298748; retrieved 2026-10-24T11:30:04.438Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://libcat.weber.edu/cgi-bin/koha/opac-MARCdetail.pl?biblionumber=1203447). University library MARC record identifies Adam Grant’s Think Again and explicitly labels 0593298748 / 9780593298749 as the paperback ISBN. Amazon omits the author byline.

R&D: 30 reference pages / 307 total pages = 9.77%; R&D = 1.95 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL31987441M; reference edition: GoogleBooks:sBb6DwAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 0.00; REL 0.00; RD 1.95. Score **63.77 → 63.77**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="bg079441201d"></a>
## The Perfect Weapon — David E. Sanger

Initial rank 897. Sources: 148. [Prior content assessment](../analysis/analysis_bgbillgates_261021_0210.md#bg079441201d). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bg079441201d).

Total pages: [400](https://www.penguinrandomhouse.com/books/547683/the-perfect-weapon-by-david-e-sanger/); 9780451497901; paperback; English; 2019. Confidence: high. Existing count retained.

Reference pages: [28](https://openlibrary.org/books/OL26955858M); edition OL26955858M; bibliographical references 315–342. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [926](https://www.amazon.com.au/dp/0451497902); amazon.com.au; product 0451497902; retrieved 2026-10-24T11:30:49.443Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0451497902); previously https://www.amazon.de/s?k=The%20Perfect%20Weapon%20David%20E.%20Sanger%20paperback. [Product evidence](https://www.amazon.com.au/dp/0451497902). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 28 reference pages / 400 total pages = 7.00%; R&D = 1.40 points. Estimate: editions differ or matching is unconfirmed. Page edition: 9780451497901; reference edition: OL26955858M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 -0.36; P14 -0.80; O15 -5.00; REL 0.00; RD 1.40. Score **63.77 → 58.77**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="progress-0708"></a>
## Brunelleschi's Dome — Ross King

Initial rank 898. Sources: 245. [Prior content assessment](../analysis/analysis_engbs2rtp_261023_2134.md#progress-0708). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0708).

Total pages: [192](https://openlibrary.org/books/OL25440291M); /books/OL25440291M; Paperback; English; 2008. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2516](https://www.amazon.com.au/dp/0099526786); amazon.com.au; product 0099526786; retrieved 2026-10-24T11:31:34.448Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL25440291M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -12.00; P14 -2.60; O15 0.00; REL 0.00; RD 0.00. Score **63.77 → 63.77**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n22132d6148"></a>
## 1493: Uncovering the New World Columbus Created — Charles C. Mann

Initial rank 899. Sources: 141, 199, 208. [Prior content assessment](../analysis/analysis_interesting_261020_1731.md#n22132d6148). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n22132d6148).

Total pages: [720](https://www.penguinrandomhouse.com/books/107179/1493-by-charles-c-mann/9780307278241/); ISBN:9780307278241; Paperback; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [2123](https://www.amazon.com.au/dp/0307278247); amazon.com.au; product 0307278247; retrieved 2026-10-24T11:32:19.453Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0307278247); previously https://www.amazon.de/s?k=1493%20Charles%20C.%20Mann%20paperback. [Product evidence](https://www.amazon.com.au/dp/0307278247). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780307278241; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.50; O15 0.00; REL 2.83; RD 0.00. Score **63.76 → 63.76**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0704"></a>
## Brunel: The Man Who Built the World — Steven Brindle

Initial rank 900. Sources: 245. [Prior content assessment](../analysis/analysis_engbs2rtp_261023_2134.md#progress-0704). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0704).

Total pages: [288](https://openlibrary.org/books/OL7988626M); /books/OL7988626M; Paperback; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: [2](https://archive.org/details/brunelmanwhobuil0000brin); edition ISBN:9780753821251; bibliographical references 189–190. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [442](https://www.amazon.com.au/dp/0753821257); amazon.com.au; product 0753821257; retrieved 2026-10-23T22:38:57.829Z. Existing verified snapshot retained.

R&D: 2 reference pages / 288 total pages = 0.69%; R&D = 0.14 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL7988626M; reference edition: ISBN:9780753821251. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -6.68; P14 -2.10; O15 -5.00; REL 0.00; RD 0.14. Score **63.76 → 63.90**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0323"></a>
## Science in History — J. D. Bernal

Initial rank 902. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0323). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0323).

Total pages: [1328](https://openlibrary.org/books/OL4768153M); /books/OL4768153M; Print format unspecified; English; 1971. Confidence: moderate. Existing count retained.

Reference pages: [15](https://content.www.wellcomecollection.org/works/b4x56k2p); edition Catalog:https://content.www.wellcomecollection.org/works/b4x56k2p; bibliographical references 934–948. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

Metadata qualification: The inspected Amazon product 0262020734 shows 2 global ratings, but its scope is unresolved. Library records list this ISBN on a four-volume Science in History record (1328 pages), while Amazon gives no extent and a weight of 476 g, insufficient to establish a complete set. The count is withheld pending full-work product identification. Identity evidence: https://ci.nii.ac.jp/ncid/BA00493535 and https://openlibrary.org/books/OL4768153M/Science_in_history. This is not a zero-rating finding.

R&D: 15 reference pages / 1328 total pages = 1.13%; R&D = 0.23 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL4768153M; reference edition: Catalog:https://content.www.wellcomecollection.org/works/b4x56k2p. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -7.20; O15 0.00; REL 0.00; RD 0.23. Score **63.74 → 63.96**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="g0987"></a>
## Titan — Ron Chernow

Initial rank 903. Sources: 122, 134, 164, 172, 173, 201, 207, 215. [Prior content assessment](../analysis/analysis_hn36581241_261020_1731.md#g0987). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0987).

Total pages: [832](https://openlibrary.org/books/OL7700585M/Titan); ISBN:0679757031; Paperback; English; 1999. Confidence: moderate. Existing count retained.

Reference pages: [13](https://openlibrary.org/books/OL686205M); edition OL686205M; bibliographical references 737–749. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [271](https://www.amazon.com.au/dp/0679757031); amazon.com.au; product 0679757031; retrieved 2026-10-24T11:33:49.460Z. Newly established count from a saved snapshot; confidence high.

R&D: 13 reference pages / 832 total pages = 1.56%; R&D = 0.31 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0679757031; reference edition: OL686205M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 5.00 | 2.50 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 -3.56; P14 -2.80; O15 -5.00; REL 5.29; RD 0.31. Score **63.72 → 58.72**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="g1216"></a>
## The Man Who Solved the Market — Gregory Zuckerman

Initial rank 904. Sources: 123. [Prior content assessment](../analysis/analysis_glaspinvest_261019_0144.md#g1216). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1216).

Total pages: [359](https://openlibrary.org/books/OL27784852M/The_Man_Who_Solved_the_Market); OL27784852M; Not stated by source; English; 2019. Confidence: moderate. Existing count retained.

Reference pages: [9](https://openlibrary.org/books/OL27784852M); edition OL27784852M; bibliographical references 335–343. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [5217](https://www.amazon.com.au/dp/073521798X); amazon.com.au; product 073521798X; retrieved 2026-10-24T11:34:34.464Z. Newly established count from a saved snapshot; confidence high.

R&D: 9 reference pages / 359 total pages = 2.51%; R&D = 0.50 points. Edition recorded as matching. Page edition: OL27784852M; reference edition: OL27784852M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -0.32; P14 -0.70; O15 0.00; REL 0.00; RD 0.50. Score **63.71 → 63.71**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="rem-u1709"></a>
## A Shortcut Through Time — George Johnson

Initial rank 905. Sources: 193. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1709). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1709).

Total pages: [224](https://openlibrary.org/books/OL7425239M); /books/OL7425239M; Book (format unspecified); English; 2003. Confidence: moderate. Existing count retained.

Reference pages: [17](https://openlibrary.org/books/OL18185058M); edition OL18185058M; bibliographical references 175–191. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [24](https://www.amazon.com.au/dp/0375411933); amazon.com.au; product 0375411933; retrieved 2026-10-24T11:35:19.467Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0375411933); previously https://www.amazon.de/s?k=A%20Shortcut%20Through%20Time%20George%20Johnson%20paperback. [Product evidence](https://www.amazon.com.au/dp/0375411933). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 17 reference pages / 224 total pages = 7.59%; R&D = 1.52 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL7425239M; reference edition: OL18185058M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.30; O15 -10.00; REL 0.00; RD 1.52. Score **63.69 → 53.69**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="g0541"></a>
## Genome — Matt Ridley

Initial rank 906. Sources: 118, 164, 190, 204. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0541). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0541).

Total pages: [344](https://openlibrary.org/books/OL7283762M/Genome); OL7283762M; Not stated by source; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: [23](https://openlibrary.org/books/OL17592396M); edition OL17592396M; bibliographical references 314–336. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [1798](https://www.amazon.com.au/dp/0060894083); amazon.com.au; product 0060894083; retrieved 2026-10-24T11:36:04.472Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0060894083); previously https://www.amazon.com/dp/B00AXXUA7C. [Product evidence](https://www.amazon.com.au/dp/0060894083). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 23 reference pages / 344 total pages = 6.69%; R&D = 1.34 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL7283762M; reference edition: OL17592396M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.70; O15 0.00; REL 3.46; RD 1.34. Score **63.68 → 63.68**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="sr-u0095"></a>
## The Cathedral and the Bazaar — Eric S. Raymond

Initial rank 907. Sources: 175, 211. [Prior content assessment](../analysis/analysis_reviewbatch_261021_2314.md#sr-u0095). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#sr-u0095).

Total pages: [256](https://www.amazon.com.au/dp/0596001088); ISBN:0596001088; Paperback; English; 2001. Confidence: moderate. Existing count retained.

Reference pages: [2](https://archive.org/details/cathedralbaz00raym); edition ISBN:9780596001087; bibliographical references 234–235. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. ISBN matches the total-page edition.

Amazon ratings: [281](https://www.amazon.com.au/dp/0596001088); www.amazon.com.au; product 0596001088; retrieved 2026-10-21T21:11:17.626Z. Existing verified snapshot retained.

R&D: 2 reference pages / 256 total pages = 0.78%; R&D = 0.16 points. Edition recorded as matching. Page edition: ISBN:0596001088; reference edition: ISBN:9780596001087. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.70; O15 -5.00; REL 2.00; RD 0.16. Score **63.67 → 63.82**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nd85651861f"></a>
## The Enigma of Reason — Hugo Mercier and Dan Sperber

Initial rank 909. Sources: 142. [Prior content assessment](../analysis/analysis_rationality_261020_1731.md#nd85651861f). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nd85651861f).

Total pages: [408](https://www.jstor.org/stable/j.ctv2sp3dd8); ISBN:9780674977860; Ebook; English; 2017. Confidence: moderate. Existing count retained.

Reference pages: [46](https://books.google.com/books?id=punZEQAAQBAJ&hl=en); edition GoogleBooks:punZEQAAQBAJ; Notes 337–356; References 357–382. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 46 reference pages / 408 total pages = 11.27%; R&D = 2.25 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780674977860; reference edition: GoogleBooks:punZEQAAQBAJ. Ratio confidence: low.

Score retained: **63.62**. Verdict: Low priority. Content confidence: low.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="n29877c1adf"></a>
## The Equation That Couldn't Be Solved — Mario Livio

Initial rank 911. Sources: 139. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n29877c1adf). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n29877c1adf).

Total pages: [368](https://books.google.com/books/about/The_Equation_that_Couldn_t_Be_Solved.html?id=_Ol31GmIAZgC); ISBN:9780743274623; Format not specified in catalog; English; 2005. Confidence: moderate. Existing count retained.

Reference pages: [44](https://books.google.com/books?id=_Ol31GmIAZgC&hl=en); edition GoogleBooks:_Ol31GmIAZgC; Notes 293–308; References 309–336. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 44 reference pages / 368 total pages = 11.96%; R&D = 2.39 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780743274623; reference edition: GoogleBooks:_Ol31GmIAZgC. Ratio confidence: low.

Score retained: **63.61**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="progress-0481"></a>
## The Age of Edison — Ernest Freeberg

Initial rank 914. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0481). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0481).

Total pages: [354](https://openlibrary.org/books/OL25425024M); /books/OL25425024M; Hardcover; English; 2013. Confidence: moderate. Existing count retained.

Reference pages: [25](https://archive.org/details/ageofedisonelect0000free); edition ISBN:9781594204265; bibliographical references 317–341. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [99](https://www.amazon.com.au/dp/1594204268); amazon.com.au; product 1594204268; retrieved 2026-10-24T11:38:19.486Z. Newly established count from a saved snapshot; confidence high.

R&D: 25 reference pages / 354 total pages = 7.06%; R&D = 1.41 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL25425024M; reference edition: ISBN:9781594204265. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -4.24; P14 -1.30; O15 -10.00; REL 0.00; RD 1.41. Score **63.59 → 55.00**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bg245380c6bc"></a>
## Tools and Weapons — Brad Smith; Carol Ann Browne

Initial rank 915. Sources: 148. [Prior content assessment](../analysis/analysis_bgbillgates_261021_0210.md#bg245380c6bc). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bg245380c6bc).

Total pages: [464](https://www.penguinrandomhouse.com/books/604709/tools-and-weapons-by-brad-smith-and-carol-ann-browne/); 9781984877734; paperback; English; 2021. Confidence: high. Existing count retained.

Reference pages: [28](https://siris-libraries.si.edu/ipac20/ipac.jsp?aspect=subtab103&index=PSUBJ&menu=search&profile=liball&ri=1&session=17HA02M183201.15737&source=~%21silibraries&term=Computer+crimes+sears&uri=link%3D3100009~%212857123~%213100001~%213100002); edition ISBN:9781984877710; bibliographical references 309–336. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [713](https://www.amazon.com.au/dp/1984877739); www.amazon.com.au; product 1984877739; retrieved 2026-10-22T08:13:06.353Z. Existing verified snapshot retained.

R&D: 28 reference pages / 464 total pages = 6.03%; R&D = 1.21 points. Estimate: editions differ or matching is unconfirmed. Page edition: 9781984877734; reference edition: ISBN:9781984877710. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.70; O15 -5.00; REL 0.00; RD 1.21. Score **63.58 → 64.79**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="progress-0388"></a>
## Computers and Society — Richard Hamming

Initial rank 917. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0388). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0388).

Total pages: [284](https://openlibrary.org/books/OL4583414M); /books/OL4583414M; Print format unspecified; English; 1971. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL4583414M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.55**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0307"></a>
## Origins of Genius — Dean Keith Simonton

Initial rank 918. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0307). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0307).

Total pages: [320](https://books.google.com/books?id=LcB2kOXT-68C); GoogleBooks:LcB2kOXT-68C; Google Books edition; English; 1999. Confidence: moderate. New count. 

Reference pages: [48](https://books.google.com/books?id=LcB2kOXT-68C); edition GoogleBooks:LcB2kOXT-68C; Notes and references 249–296. Confidence: moderate. New count. Documented reference sections only; excludes index. Page and reference editions can differ; ratio is an estimate.

Amazon ratings: [17](https://www.amazon.com.au/dp/0195128796); amazon.com.au; product 0195128796; retrieved 2026-10-24T11:39:49.492Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://api.pageplace.de/preview/DT0400.9780195351705_A23603244/preview-9780195351705_A23603244.pdf). Oxford University Press preview copyright and cataloguing page identifies Dean Keith Simonton, Origins of Genius: Darwinian Perspectives on Creativity, and ISBN 0-19-512879-6. Amazon abbreviates the author to Simonton.

R&D: 48 reference pages / 320 total pages = 15.00%; R&D = 3.00 points. Estimate: editions differ or matching is unconfirmed. Page edition: GoogleBooks:LcB2kOXT-68C; reference edition: GoogleBooks:LcB2kOXT-68C. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.70; O15 -10.00; REL 0.00; RD 3.00. Score **63.53 → 56.53**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="progress-0043"></a>
## The Anthropology of Childhood: Cherubs, Chattel, Changelings — David F. Lancy

Initial rank 920. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0043). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0043).

Total pages: [547](https://ci.nii.ac.jp/ncid/BB17889775); ISBN:9781107420984; Paperback, second edition; English; 2015. Confidence: high. New count. Library extent xiv + 533 = 547 pages including front matter.

Reference pages: [105](https://ci.nii.ac.jp/ncid/BB17889775); edition ISBN:9781107420984; Bibliographical references 411–515. Confidence: moderate. New count. Documented reference sections only; excludes index. Page and reference editions can differ; ratio is an estimate.

Amazon ratings: [71](https://www.amazon.com.au/dp/1107420989); amazon.com.au; product 1107420989; retrieved 2026-10-24T11:40:34.494Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/1107420989); previously https://www.amazon.de/dp/1316121615. [Product evidence](https://www.amazon.com.au/dp/1107420989). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 105 reference pages / 547 total pages = 19.20%; R&D = 3.84 points. Edition recorded as matching. Page edition: ISBN:9781107420984; reference edition: ISBN:9781107420984. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.80; O15 -10.00; REL 0.00; RD 3.84. Score **63.52 → 57.36**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="n2085eda21a"></a>
## From Eternity to Here — Sean M. Carroll

Initial rank 921. Sources: 139, 203. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n2085eda21a). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n2085eda21a).

Total pages: [464](https://www.penguinrandomhouse.com/books/302470/from-eternity-to-here-by-sean-carroll/); ISBN:9780452296541; paperback; English; 2010. Confidence: moderate. Existing count retained.

Reference pages: [10](https://library.kaist.ac.kr/search/ctlgSearch/posesn/view.do?bibctrlno=567953&se=b0&ty=B); edition ISBN:9780452296541; Bibliographical references 411–420. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. ISBN matches the total-page edition.

Amazon ratings: [756](https://www.amazon.com.au/dp/0452296544); amazon.com.au; product 0452296544; retrieved 2026-10-24T11:41:19.501Z. Newly established count from a saved snapshot; confidence high.

R&D: 10 reference pages / 464 total pages = 2.16%; R&D = 0.43 points. Edition recorded as matching. Page edition: ISBN:9780452296541; reference edition: ISBN:9780452296541. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 5.00 | 5.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.60; O15 -5.00; REL 2.00; RD 0.43. Score **63.51 → 58.95**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 1 new Amazon attempts. 

<a id="n57accad7bc"></a>
## Euler as Physicist — Dieter Suisky

Initial rank 922. Sources: 136. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0323). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n57accad7bc).

Total pages: [338](https://openlibrary.org/books/OL23988405M/Euler_as_physicist); OL23988405M; Not stated by source; English; 2009. Confidence: moderate. Existing count retained.

Reference pages: [12](https://openlibrary.org/books/OL23988405M); edition OL23988405M; bibliographical references 313–324. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: [1](https://www.amazon.com.au/dp/3540748636); amazon.com.au; product 3540748636; retrieved 2026-10-24T11:42:04.502Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/3540748636); previously https://www.amazon.de/s?k=Euler%20as%20Physicist%20Dieter%20Suisky%20paperback. [Product evidence](https://www.amazon.com.au/dp/3540748636). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 12 reference pages / 338 total pages = 3.55%; R&D = 0.71 points. Edition recorded as matching. Page edition: OL23988405M; reference edition: OL23988405M. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -9.72; P14 -1.80; O15 -20.00; REL 0.00; RD 0.71. Score **63.51 → 43.51**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="rem-u1564"></a>
## Unweaving the Rainbow: Science, Delusion and the Appetite for Wonder — Richard Dawkins

Initial rank 923. Sources: 204, 215. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1564). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1564).

Total pages: [354](https://openlibrary.org/books/OL36191702M); /books/OL36191702M; Book (format unspecified); English; 2000. Confidence: moderate. Existing count retained.

Reference pages: [10](https://openlibrary.org/books/OL378789M); edition OL378789M; bibliographical references 314–323. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 10 reference pages / 354 total pages = 2.82%; R&D = 0.56 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL36191702M; reference edition: OL378789M. Ratio confidence: low.

Score retained: **63.50**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="g0571"></a>
## Anthropic Bias — Nick Bostrom

Initial rank 924. Sources: 118, 232. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0101). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0571).

Total pages: [224](https://openlibrary.org/books/OL7496815M/Anthropic_Bias); OL7496815M; Not stated by source; English; 2002. Confidence: moderate. Existing count retained.

Reference pages: [12](https://books.google.com/books?id=TZ5FLwnCTMAC&hl=en); edition GoogleBooks:TZ5FLwnCTMAC; Bibliography 207–218. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: [12](https://www.amazon.com.au/dp/0415938589); amazon.com.au; product 0415938589; retrieved 2026-10-24T11:43:34.514Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0415938589); previously https://www.amazon.de/dp/B00FVTSFK2. [Product evidence](https://www.amazon.com.au/dp/0415938589). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 12 reference pages / 224 total pages = 5.36%; R&D = 1.07 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL7496815M; reference edition: GoogleBooks:TZ5FLwnCTMAC. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 9.00 | 8.10 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.40; O15 -10.00; REL 2.00; RD 1.07. Score **63.49 → 53.49**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="progress-0387"></a>
## Engineers' Dreams — Willy Ley

Initial rank 926. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0387). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0387).

Total pages: [239](https://books.google.com/books?id=PxLsAAAAIAAJ); GoogleBooks:PxLsAAAAIAAJ; Print; English; 1954. Confidence: moderate. New count. Bibliographic block and contents identify Ley; descriptive blurb incorrectly discusses Petroski and was disregarded.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [7](https://www.amazon.com.au/dp/9997483219); amazon.com.au; product 9997483219; retrieved 2026-10-24T11:44:19.516Z. Newly established count from a saved snapshot; confidence high.

Identity evidence: [bibliographic record](https://www.genekeyes.com/To-Give-Life.pdf). Gene Keyes's documented bibliography identifies Willy Ley, Engineers' Dreams, Viking 1954, and explicitly links this Amazon product identifier. Amazon omits the byline; the product title matches.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: GoogleBooks:PxLsAAAAIAAJ; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -7.20; O15 -20.00; REL 0.00; RD 0.00. Score **63.44 → 43.44**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0303"></a>
## The Unthinkable — Amanda Ripley

Initial rank 927. Sources: 5. [Prior content assessment](../analysis/analysis_changedmind_261017_2105.md#c094). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0303).

Total pages: [304](https://openlibrary.org/books/OL10353445M/The_Unthinkable); OL10353445M; Hardcover; English; 2008. Confidence: moderate. Existing count retained.

Reference pages: [60](https://iucat.iu.edu/iui/21148827); edition ISBN:9780593796726; bibliographical references 311–370. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ. References belong to the revised 2024 edition.

Amazon ratings: [1981](https://www.amazon.com/dp/0593796721); www.amazon.com; product 0593796721; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: 60 reference pages / 304 total pages = 19.74%; R&D = 3.95 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL10353445M; reference edition: ISBN:9780593796726. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.33 | 7.56 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.47 | 8.47 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.80; O15 0.00; REL 0.00; RD 3.95. Score **63.43 → 67.37**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="progress-0578"></a>
## Roskam's Airplane War Stories — Jan Roskam

Initial rank 928. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0578). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0578).

Total pages: [304](https://openlibrary.org/books/OL12171460M); /books/OL12171460M; Paperback; English; 2002. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [18](https://www.amazon.com.au/dp/1884885578); amazon.com.au; product 1884885578; retrieved 2026-10-23T22:18:17.468Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL12171460M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.42**. Verdict: Low priority. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n6182111e81"></a>
## Thinking 101 — Woo-kyoung Ahn

Initial rank 929. Sources: 142. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h1141). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n6182111e81).

Total pages: [288](https://openlibrary.org/books/OL36883902M/Thinking_101); OL36883902M; Not stated by source; English; 2022. Confidence: moderate. Existing count retained.

Reference pages: [10](https://catalog.slcpl.org/search/title.aspx?=&cn=984930&ctx=1.1033.0.0.7&pos=1); edition ISBN:9781250805959; Bibliographical references 261–270. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: [223](https://www.amazon.com.au/dp/1250805953); www.amazon.com.au; product 1250805953; retrieved 2026-10-22T08:13:09.076Z. Existing verified snapshot retained.

R&D: 10 reference pages / 288 total pages = 3.47%; R&D = 0.69 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL36883902M; reference edition: ISBN:9781250805959. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.40; O15 -5.00; REL 0.00; RD 0.69. Score **63.42 → 64.11**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="q0191"></a>
## Master of the Senate — Robert A. Caro

Initial rank 930. Sources: 2, 6, 8, 12, 164, 193. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#q0191). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0191).

Total pages: [1232](https://www.amazon.com.au/dp/0394720954); ASIN:0394720954; Paperback; English; 2003. Confidence: high. Existing count retained.

Reference pages: [91](https://catalog.freelibrary.org/Record/1843278); edition ISBN:9780394528366; bibliographical references 1051–1141. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [1448](https://www.amazon.com.au/dp/0394720954); www.amazon.com.au; product 0394720954; retrieved 2026-10-18T18:29:03.429Z. Existing verified snapshot retained.

R&D: 91 reference pages / 1232 total pages = 7.39%; R&D = 1.48 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:0394720954; reference edition: ISBN:9780394528366. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 14.00 | 14.00 |
| Mechanistic and causal depth | 12.00 | 12.00 |
| Information density | 5.00 | 2.50 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 -10.00; H13 -2.64; P14 -2.40; O15 0.00; REL 4.47; RD 1.48. Score **63.42 → 64.89**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1849"></a>
## Why Everyone Else Is a Hypocrite — Robert Kurzban

Initial rank 931. Sources: 193. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1849). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1849).

Total pages: [288](https://assets.press.princeton.edu/catalogs/phil11.pdf); ISBN:9780691146744; Hardcover; English; 2011. Confidence: high. Existing count retained.

Reference pages: [46](https://books.google.com/books?id=JZVYEUb0Tq0C&hl=en); edition GoogleBooks:JZVYEUb0Tq0C; Notes 221–244; References 245–266. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: [202](https://www.amazon.com.au/dp/0691146748); amazon.com.au; product 0691146748; retrieved 2026-10-24T11:45:04.521Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0691146748); previously https://www.amazon.de/s?k=Why%20Everyone%20Else%20Is%20a%20Hypocrite%20Robert%20Kurzban%20paperback. [Product evidence](https://www.amazon.com.au/dp/0691146748). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 46 reference pages / 288 total pages = 15.97%; R&D = 3.19 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780691146744; reference edition: GoogleBooks:JZVYEUb0Tq0C. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.60; O15 -5.00; REL 0.00; RD 3.19. Score **63.41 → 58.41**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 1 new Amazon attempts. 

<a id="progress-0066"></a>
## The Frackers — Gregory Zuckerman

Initial rank 932. Sources: 230, 231. [Prior content assessment](../analysis/analysis_conwayread_261023_2134.md#progress-0066). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0066).

Total pages: [448](https://www.penguinrandomhouse.com/books/314332/the-frackers-by-gregory-zuckerman/); ISBN:9781591847090; Paperback; English; 2014. Confidence: moderate. New count. Publisher paperback count; differs from the 2013 ebook (432) and hardcover (416) records.

Reference pages: [8](https://archive.org/details/constitutionalmy0000raph); edition ISBN:9781591846451; bibliographical references 397–404. Confidence: low. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ. The catalog item identifier refers to a different title, although its current title, author and ISBN all identify The Frackers. A second matching record confirms the work and 404-page edition but gives no reference range. The eight-page extent is retained as a low-confidence documented catalog count, not scan verification.

Amazon ratings: [1185](https://www.amazon.com.au/dp/1591847095); amazon.com.au; product 1591847095; retrieved 2026-10-24T11:45:49.528Z. Newly established count from a saved snapshot; confidence high.

Metadata qualification: Catalog identifier anomaly checked against https://archive.org/metadata/constitutionalmy0000raph and https://archive.org/metadata/frackersoutrageo0000zuck. Both current records identify The Frackers; only the first documents pages 397–404. Confidence in that range is low.

Purchase link: [updated product](https://www.amazon.de/dp/1591847095); previously https://www.amazon.de/dp/0241966736. [Product evidence](https://www.amazon.com.au/dp/1591847095). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 8 reference pages / 448 total pages = 1.79%; R&D = 0.36 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781591847090; reference edition: ISBN:9781591846451. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -0.52; P14 -1.30; O15 0.00; REL 2.00; RD 0.36. Score **63.41 → 63.77**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0513"></a>
## A Beautiful Question — Frank Wilczek

Initial rank 934. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0513). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0513).

Total pages: [480](https://www.penguinrandomhouse.com/books/312435/a-beautiful-question-by-frank-wilczek/); ISBN:9780143109365; Paperback; English; 2016. Confidence: high. New count. 

Reference pages: [3](https://archive.org/details/beautifulquestio0000wilc); edition ISBN:9781594205262; bibliographical references 407–409. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [418](https://www.amazon.com.au/dp/0143109367); amazon.com.au; product 0143109367; retrieved 2026-10-24T11:46:34.532Z. Newly established count from a saved snapshot; confidence high.

Purchase link: [updated product](https://www.amazon.de/dp/0143109367); previously https://www.amazon.de/dp/1594205264. [Product evidence](https://www.amazon.com.au/dp/0143109367). English print product identity verified. Amazon.de link uses that product identifier; German stock and live endpoint remain unverified after an access challenge. A regional 404 does not prove the old German link was broken.

R&D: 3 reference pages / 480 total pages = 0.63%; R&D = 0.13 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780143109365; reference edition: ISBN:9781594205262. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.10; O15 -5.00; REL 0.00; RD 0.13. Score **63.38 → 58.51**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0176"></a>
## The Brain Makers — H. P. Newquist

Initial rank 935. Sources: 211. [Prior content assessment](../analysis/analysis_hn22692281_261023_0229.md#intake-0176). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0176).

Total pages: [488](https://openlibrary.org/books/OL1447486M); /books/OL1447486M; Print format unspecified; English; 1994. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [3](https://www.amazon.com.au/dp/0672304120); amazon.com.au; product 0672304120; retrieved 2026-10-24T11:47:19.532Z. Newly established count from a saved snapshot; confidence high.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL1447486M; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.32; P14 -3.20; O15 -20.00; REL 0.00; RD 0.00. Score **63.38 → 43.38**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0325"></a>
## Life Is Simple — Johnjoe McFadden

Initial rank 937. Sources: 214. [Prior content assessment](../analysis/analysis_hn30489142_261023_0229.md#intake-0325). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0325).

Total pages: [384](https://openlibrary.org/books/OL33944705M); /books/OL33944705M; Not stated by catalog; English; 2021. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL33944705M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.35**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0789"></a>
## Ancient Engineers' Inventions: Precursors of the Present — Cesare Rossi; Flavio Russo; Ferruccio Russo

Initial rank 939. Sources: 233. [Prior content assessment](../analysis/analysis_locenghist_261023_2134.md#progress-0789). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0789).

Total pages: [354](https://link.springer.com/book/10.1007/978-90-481-2253-0); ISBN:9789048122523; Hardcover, first edition; English; 2009. Confidence: high. New count. Publisher contents: front matter i-xv plus numbered text through 339. All three named authors apply to this first edition.

Reference pages: [7](https://openlibrary.org/books/OL25381988M/Ancient_engineers%27_inventions); edition ISBN:9789048122523; bibliographical references 327–333. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [3](https://www.amazon.com.au/dp/904812252X); amazon.com.au; product 904812252X; retrieved 2026-10-24T11:48:49.541Z. Newly established count from a saved snapshot; confidence high.

R&D: 7 reference pages / 354 total pages = 1.98%; R&D = 0.40 points. Edition recorded as matching. Page edition: ISBN:9789048122523; reference edition: ISBN:9789048122523. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -12.00; P14 -1.70; O15 -20.00; REL 0.00; RD 0.40. Score **63.34 → 43.74**. Verdict: Poor fit. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 1 new Amazon attempts. 

<a id="progress-0029"></a>
## The Coming of the Book: The Impact of Printing, 1450-1800 — Lucien Febvre & Henri-Jean Martin

Initial rank 940. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0029). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0029).

Total pages: [378](https://openlibrary.org/books/OL8624084M); /books/OL8624084M; Paperback; English; 1997. Confidence: moderate. Existing count retained.

Reference pages: [22](https://books.google.com/books?id=9opxcMjv4TUC&hl=en); edition GoogleBooks:9opxcMjv4TUC; Notes 333–354. Confidence: moderate. New count. Only displayed, bounded reference sections are counted. Google Books may omit other sections from its contents list; a boundary may include a final blank page. Edition can differ from the length edition.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 22 reference pages / 378 total pages = 5.82%; R&D = 1.16 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL8624084M; reference edition: GoogleBooks:9opxcMjv4TUC. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -9.04; P14 -6.80; O15 0.00; REL 0.00; RD 1.16. Score **63.29 → 64.45**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 1 new Amazon attempts. 

<a id="intake-0189"></a>
## Before the Computer — James W. Cortada

Initial rank 941. Sources: 211. [Prior content assessment](../analysis/analysis_hn22692281_261023_0229.md#intake-0189). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0189).

Total pages: [350](https://openlibrary.org/books/OL24751315M); /books/OL24751315M; Print format unspecified; English; 2000. Confidence: moderate. Existing count retained.

Reference pages: [48](https://books.google.com/books?id=Q_12f2ciVK0C&hl=en); edition GoogleBooks:Q_12f2ciVK0C; Notes 289–330; Bibliographic Review 331–336. Confidence: moderate. New count. Only displayed, bounded reference sections are counted. Google Books may omit other sections from its contents list; a boundary may include a final blank page. Edition can differ from the length edition. The six-page bibliographic review is included with the notes.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 48 reference pages / 350 total pages = 13.71%; R&D = 2.74 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL24751315M; reference edition: GoogleBooks:Q_12f2ciVK0C. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -3.04; P14 -3.30; O15 0.00; REL 0.00; RD 2.74. Score **63.29 → 66.03**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="necb2191e2d"></a>
## The Black Hole War — Leonard Susskind

Initial rank 942. Sources: 139, 204. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#necb2191e2d). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#necb2191e2d).

Total pages: [480](https://www.hbgacademic.com/titles/leonard-susskind/the-black-hole-war/9780316016414/); ISBN:9780316016414; paperback; English; 2009. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780316016414; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.28**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0332"></a>
## Backroom Boys — Francis Spufford

Initial rank 943. Sources: 214. [Prior content assessment](../analysis/analysis_hn30489142_261023_0229.md#intake-0332). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0332).

Total pages: [262](https://openlibrary.org/books/OL3358062M); /books/OL3358062M; Not stated by catalog; English; 2003. Confidence: moderate. Existing count retained.

Reference pages: [9](https://books.google.com/books?vid=ISBN0571266444&hl=en); edition GoogleBooks:2ZVngOztijMC; Sources Further Reading 337–345. Confidence: moderate. New count. Bounded reference sections only; index excluded. Contents boundaries can include a final blank page. Edition matching is unconfirmed.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 9 reference pages / 262 total pages = 3.44%; R&D = 0.69 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL3358062M; reference edition: GoogleBooks:2ZVngOztijMC. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 -1.04; P14 -2.30; O15 0.00; REL 0.00; RD 0.69. Score **63.28 → 63.96**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="progress-0765"></a>
## The HP Way — David Packard

Initial rank 946. Sources: 244. [Prior content assessment](../analysis/analysis_hn17204467_261023_2134.md#progress-0765). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0765).

Total pages: [256](https://openlibrary.org/books/OL9237639M); /books/OL9237639M; Paperback; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [306](https://www.amazon.com.au/dp/0060845791); amazon.com.au; product 0060845791; retrieved 2026-10-23T22:39:57.848Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL9237639M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.26**. Verdict: Low priority. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nea960bca34"></a>
## Through Two Doors at Once — Anil Ananthaswamy

Initial rank 948. Sources: 130, 139. [Prior content assessment](../analysis/analysis_hn39057219_261020_1731.md#nea960bca34). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nea960bca34).

Total pages: [304](https://www.penguinrandomhouse.com/books/550744/through-two-doors-at-once-by-anil-ananthaswamy/); ISBN:9781101986103; Paperback; English; 2019. Confidence: moderate. Existing count retained.

Reference pages: [14](https://openlibrary.org/books/OL26974487M); edition OL26974487M; bibliographical references 267–280. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 14 reference pages / 304 total pages = 4.61%; R&D = 0.92 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781101986103; reference edition: OL26974487M. Ratio confidence: low.

Score retained: **63.24**. Verdict: Low priority. Content confidence: moderate.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="intake-0102"></a>
## Exponential — Azeem Azhar

Initial rank 949. Sources: 208, 231. [Prior content assessment](../analysis/analysis_enguvq9h4_261023_0229.md#intake-0102). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0102).

Total pages: [403](https://openlibrary.org/books/OL52627321M); /books/OL52627321M; Print format unspecified; English; 2021. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [561](https://www.amazon.com.au/dp/184794292X); amazon.com.au; product 184794292X; retrieved 2026-10-23T12:03:13.303Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL52627321M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.23**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1174"></a>
## The Crime and Punishment of I.G. Farben — Joseph Borkin

Initial rank 950. Sources: 194, 195. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1174). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1174).

Total pages: [322](https://openlibrary.org/books/OL39794160M); /books/OL39794160M; Book (format unspecified); English; 1979. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL39794160M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.22**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0606"></a>
## Learn or Die — Edward Hess

Initial rank 951. Sources: 118. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0510). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0606).

Total pages: [267](https://openlibrary.org/books/OL27184986M/Learn_or_die); ISBN:0231170246; Not stated by source; English; 2014. Confidence: moderate. Existing count retained.

Reference pages: [30](https://openlibrary.org/books/OL27184986M); edition OL27184986M; bibliographical references 227–256. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 30 reference pages / 267 total pages = 11.24%; R&D = 2.25 points. Edition recorded as matching. Page edition: ISBN:0231170246; reference edition: OL27184986M. Ratio confidence: moderate.

Score retained: **63.22**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="rem-u0306"></a>
## Social Physics: How Good Ideas Spread -Lessons from a New Science — Alex Pentland

Initial rank 953. Sources: 178. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u0306). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u0306).

Total pages: [300](https://openlibrary.org/books/OL27157787M); /books/OL27157787M; Book (format unspecified); English; 2014. Confidence: moderate. Existing count retained.

Reference pages: [30](https://openlibrary.org/books/OL27157787M); edition OL27157787M; bibliographical references 265–294. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 30 reference pages / 300 total pages = 10.00%; R&D = 2.00 points. Edition recorded as matching. Page edition: /books/OL27157787M; reference edition: OL27157787M. Ratio confidence: moderate.

Score retained: **63.20**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="nd5b0d3fc85"></a>
## Rework — Jason Fried; David Heinemeier Hansson

Initial rank 955. Sources: 115, 130, 149, 175, 188, 191, 193, 219. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0713). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nd5b0d3fc85).

Total pages: [288](https://openlibrary.org/books/OL29463026M/ReWork_(Vermilion_Life_Essentials)); OL29463026M; Not stated by source; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [11625](https://www.amazon.com.au/dp/0307463745); www.amazon.com.au; product 0307463745; retrieved 2026-10-18T22:27:02.500Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL29463026M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.16**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0346"></a>
## Bodies/Machines — Iwan Rhys Morus (editor)

Initial rank 957. Sources: 214. [Prior content assessment](../analysis/analysis_hn30489142_261023_0229.md#intake-0346). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0346).

Total pages: [251](https://openlibrary.org/books/OL3554024M); /books/OL3554024M; Not stated by catalog; English; 2002. Confidence: moderate. Existing count retained.

Reference pages: [25](https://wellcomecollection.org/works/bvagpy9f); edition ISBN:1859736904; bibliographical references 221–245. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 25 reference pages / 251 total pages = 9.96%; R&D = 1.99 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL3554024M; reference edition: ISBN:1859736904. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.40; O15 0.00; REL 0.00; RD 1.99. Score **63.15 → 65.14**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g0520"></a>
## Radical Uncertainty — John Kay; Mervyn King

Initial rank 958. Sources: 117, 192. [Prior content assessment](../analysis/analysis_glaspstrat_261019_0144.md#g0520). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0520).

Total pages: [384](https://openlibrary.org/books/OL28056882M/Radical_Uncertainty); ISBN:1324004770; Not stated by source; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: [39](https://discover.bklynlibrary.org/item?b=12262034); edition ISBN:9781324004776; bibliographical references 469–507. Confidence: low. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ. Conflicting catalog endpoints: Brooklyn records 469–507, while CiNii records 469–511 for the same ISBN. Use the narrower documented span pending direct text verification; do not infer the extra four pages.

Amazon ratings: [642](https://www.amazon.com.au/dp/1324004770); www.amazon.com.au; product 1324004770; retrieved 2026-10-18T22:28:26.523Z. Existing verified snapshot retained.

R&D: 39 reference pages / 384 total pages = 10.16%; R&D = 2.03 points. Edition recorded as matching. Page edition: ISBN:1324004770; reference edition: ISBN:9781324004776. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.60; O15 -5.00; REL 2.00; RD 2.03. Score **63.13 → 65.16**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="intake-0336"></a>
## Mathematics and the Physical World — Morris Kline

Initial rank 959. Sources: 214. [Prior content assessment](../analysis/analysis_hn30489142_261023_0229.md#intake-0336). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0336).

Total pages: [496](https://openlibrary.org/books/OL7635609M); /books/OL7635609M; Paperback; English; 1981. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL7635609M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.12**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0240"></a>
## Don't Be Evil — Rana Foroohar

Initial rank 960. Sources: 212. [Prior content assessment](../analysis/analysis_smb1hg08ou_261023_0229.md#intake-0240). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0240).

Total pages: [368](https://www.penguinrandomhouse.com/books/602099/dont-be-evil-by-rana-foroohar/); ISBN:9781984824004; Paperback; English; 2021. Confidence: high. Existing count retained.

Reference pages: [30](https://books.google.com/books?id=T-8kEAAAQBAJ); edition ISBN:9781984824004; Notes 289–314; Bibliography 315–318. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. ISBN matches the total-page edition.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 30 reference pages / 368 total pages = 8.15%; R&D = 1.63 points. Edition recorded as matching. Page edition: ISBN:9781984824004; reference edition: ISBN:9781984824004. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.28; P14 -0.70; O15 0.00; REL 0.00; RD 1.63. Score **63.11 → 64.74**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="q0010"></a>
## Networks of Power — Thomas P. Hughes

Initial rank 961. Sources: 19, 230, 231. [Prior content assessment](../analysis/analysis_web80_261018_0229.md#w19). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0010).

Total pages: [474](https://openlibrary.org/books/OL49819465M/Networks_of_Power); ISBN:0801846145; Paperback; English; 1983. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [8](https://www.amazon.com.au/dp/0801846145); www.amazon.com.au; product 0801846145; retrieved 2026-10-18T18:28:09.806Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0801846145; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.08**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n6bcdcb62bf"></a>
## The Effective Engineer — Edmond Lau

Initial rank 962. Sources: 130, 132. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0903). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n6bcdcb62bf).

Total pages: [245](https://openlibrary.org/books/OL27186653M/The_effective_engineer); OL27186653M; Paperback; English; 2015. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [140](https://www.amazon.com.au/dp/0996128107); www.amazon.com.au; product 0996128107; retrieved 2026-10-22T08:13:34.057Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL27186653M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **63.07**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0355"></a>
## Paved Paradise — Henry Grabar

Initial rank 963. Sources: 5, 212. [Prior content assessment](../analysis/analysis_changedmind_261017_2105.md#c060). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0355).

Total pages: [368](https://www.amazon.com/dp/1984881159); ASIN:1984881159; Paperback; English; 2024. Confidence: high. Existing count retained.

Reference pages: [41](https://catalog.freelibrary.org/Record/2655774); edition ISBN:9781984881137; bibliographical references 289–329. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [245](https://www.amazon.com.au/dp/1984881159); www.amazon.com.au; product 1984881159; retrieved 2026-10-18T18:29:50.766Z. Existing verified snapshot retained.

R&D: 41 reference pages / 368 total pages = 11.14%; R&D = 2.23 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:1984881159; reference edition: ISBN:9781984881137. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.88 | 9.88 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.30; O15 -5.00; REL 2.00; RD 2.23. Score **63.07 → 65.30**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="intake-0746"></a>
## Lean Software Development — Mary Poppendieck; Tom Poppendieck

Initial rank 964. Sources: 219. [Prior content assessment](../analysis/analysis_so1711_261023_0229.md#intake-0746). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0746).

Total pages: [240](https://openlibrary.org/books/OL9784944M); /books/OL9784944M; Paperback; English; 2003. Confidence: moderate. Existing count retained.

Reference pages: [8](https://books.google.com/books?id=UalKAgAAQBAJ&hl=en); edition GoogleBooks:UalKAgAAQBAJ; Bibliography 187–194. Confidence: moderate. New count. Only displayed, bounded reference sections are counted. Google Books may omit other sections from its contents list; a boundary may include a final blank page. Edition can differ from the length edition.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 8 reference pages / 240 total pages = 3.33%; R&D = 0.67 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL9784944M; reference edition: GoogleBooks:UalKAgAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
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

T11 0.00; T12 0.00; H13 0.00; P14 -2.30; O15 0.00; REL 0.00; RD 0.67. Score **63.05 → 63.71**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="g0487"></a>
## This Is How They Tell Me The World Ends — Nicole Perlroth

Initial rank 965. Sources: 116, 192. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0487). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0487).

Total pages: [528](https://openlibrary.org/books/OL31913494M/This_Is_How_They_Tell_Me_the_World_Ends); OL31913494M; hardcover; English; 2021. Confidence: moderate. Existing count retained.

Reference pages: [61](https://discover.knoxcountylibrary.org/Record/33168); edition ISBN:9781635576054; Bibliographical references 411–471. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 61 reference pages / 528 total pages = 11.55%; R&D = 2.31 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL31913494M; reference edition: ISBN:9781635576054. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -0.24; P14 -0.50; O15 0.00; REL 2.00; RD 2.31. Score **62.99 → 65.30**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1575"></a>
## The Trouble with Physics: The Rise of String Theory, the Fall of a Science and What Comes Next — Lee Smolin

Initial rank 967. Sources: 204, 232. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1575). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1575).

Total pages: [416](https://openlibrary.org/books/OL7606595M); /books/OL7606595M; Book (format unspecified); English; 2007. Confidence: moderate. Existing count retained.

Reference pages: [13](https://openlibrary.org/books/OL17726418M); edition OL17726418M; bibliographical references 359–371. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 13 reference pages / 416 total pages = 3.13%; R&D = 0.63 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL7606595M; reference edition: OL17726418M. Ratio confidence: low.

Score retained: **62.97**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="progress-0637"></a>
## Liquid Stone: New Architecture in Concrete — Jean-Louis Cohen; G. Martin Moeller Jr. (editors)

Initial rank 968. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0637). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0637).

Total pages: [248](https://openlibrary.org/books/OL9091039M); /books/OL9091039M; Paperback; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL9091039M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.97**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1005"></a>
## Objectivity — Lorraine Daston, Peter Galison

Initial rank 969. Sources: 190. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1005). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1005).

Total pages: [501](https://openlibrary.org/books/OL22767493M); /books/OL22767493M; Book (format unspecified); English; 2007. Confidence: moderate. Existing count retained.

Reference pages: [63](https://iucat.iu.edu/iuk/7324040); edition Catalog:https://iucat.iu.edu/iuk/7324040; bibliographical references 419–481. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 63 reference pages / 501 total pages = 12.57%; R&D = 2.51 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL22767493M; reference edition: Catalog:https://iucat.iu.edu/iuk/7324040. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.90; O15 0.00; REL 0.00; RD 2.51. Score **62.97 → 65.48**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="intake-0106"></a>
## Entering Space — Robert Zubrin

Initial rank 970. Sources: 208. [Prior content assessment](../analysis/analysis_enguvq9h4_261023_0229.md#intake-0106). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0106).

Total pages: [305](https://openlibrary.org/books/OL8816293M); /books/OL8816293M; Paperback; English; 2000. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL8816293M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.94**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0052"></a>
## Seven Elements That Have Changed the World — John Browne

Initial rank 972. Sources: 230, 231. [Prior content assessment](../analysis/analysis_conwayread_261023_2134.md#progress-0052). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0052).

Total pages: [288](https://openlibrary.org/books/OL29173582M); OL29173582M; Print edition (binding unspecified); eng; 2014. Confidence: moderate. Existing count retained.

Reference pages: [22](https://books.google.com/books?id=TL1CEAAAQBAJ); edition GoogleBooks:TL1CEAAAQBAJ; Bibliography 97–118. Confidence: low. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ. Google Books displays unusual ebook pagination (bibliography 97; index 119) for a 288-page listing. Retained as a low-confidence edition estimate, not a print-pagination claim.

Amazon ratings: [85](https://www.amazon.com.au/dp/0297869892); amazon.com.au; product 0297869892; retrieved 2026-10-23T22:29:57.681Z. Existing verified snapshot retained.

R&D: 22 reference pages / 288 total pages = 7.64%; R&D = 1.53 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL29173582M; reference edition: GoogleBooks:TL1CEAAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.30; O15 -10.00; REL 2.00; RD 1.53. Score **62.93 → 64.46**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 3 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="intake-0137"></a>
## Slide Rule — Nevil Shute

Initial rank 974. Sources: 210. [Prior content assessment](../analysis/analysis_mech1sy03cs_261023_0229.md#intake-0137). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0137).

Total pages: [186](https://openlibrary.org/books/OL8925816M); /books/OL8925816M; Paperback; English; 2000. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL8925816M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.92**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bg41b3ac7320"></a>
## Apprentice to Genius — Robert Kanigel

Initial rank 975. Sources: 173. [Prior content assessment](../analysis/analysis_bgblasmoros_261021_0210.md#bg41b3ac7320). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bg41b3ac7320).

Total pages: [271](https://openlibrary.org/books/OL20940439M/Apprentice_to_genius); OL20940439M; Not stated by source; English; 1986. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL20940439M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.89**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0404"></a>
## Emotional Design — Donald A. Norman

Initial rank 976. Sources: 215. [Prior content assessment](../analysis/analysis_hn15155833_261023_0229.md#intake-0404). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0404).

Total pages: [257](https://openlibrary.org/books/OL8531187M); /books/OL8531187M; Paperback; English; 2004. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL8531187M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.88**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0303"></a>
## Less and More — Klaus Klemp

Initial rank 977. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0303). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0303).

Total pages: [808](https://openlibrary.org/books/OL36725781M); /books/OL36725781M; Print format unspecified; English; 2015. Confidence: moderate. Existing count retained.

Reference pages: [15](https://siris-libraries.si.edu/ipac20/ipac.jsp?profile=liball&source=~%21silibraries&uri=full%3D3100001~%211026488~%210); edition ISBN:9783899552775; bibliographical references 785–799. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 15 reference pages / 808 total pages = 1.86%; R&D = 0.37 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL36725781M; reference edition: ISBN:9783899552775. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.70; O15 0.00; REL 0.00; RD 0.37. Score **62.88 → 63.25**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1338"></a>
## Children of Ash and Elm: A History of the Vikings — Neil Price

Initial rank 978. Sources: 200. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1338). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1338).

Total pages: [624](https://openlibrary.org/books/OL34701832M); /books/OL34701832M; Book (format unspecified); English; 2022. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL34701832M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.85**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0013"></a>
## The Epic of Steel — Douglas A. Fisher

Initial rank 980. Sources: 229. [Prior content assessment](../analysis/analysis_rootsprog_261023_2134.md#progress-0013). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0013).

Total pages: [352](https://old.fondazioneisec.it/patrimonio/LO121_FRU.pdf); Catalog:ISEC-FRU2089; Print; English; 1963. Confidence: moderate. New count. Library catalog gives VIII + 344 pages; total includes eight preliminary pages. The contemporary Cambridge book review independently confirms the main 344-page sequence.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: Catalog:ISEC-FRU2089; reference edition: unknown. Ratio confidence: unknown.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -2.52; P14 -6.30; O15 0.00; REL 0.00; RD 0.00. Score **62.82 → 62.82**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n9a355cc3e2"></a>
## How to Make an Apple Pie from Scratch — Harry Cliff

Initial rank 981. Sources: 139. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n9a355cc3e2). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n9a355cc3e2).

Total pages: [400](https://www.penguinrandomhouse.com/books/612737/how-to-make-an-apple-pie-from-scratch-by-harry-cliff/9780385545655/); ISBN:9780385545655; hardcover; English; 2021. Confidence: moderate. Existing count retained.

Reference pages: [8](https://catalog.spokanelibrary.org/catalog/Record/3af2a0c0-5ae3-5b06-9a37-490154e91571?lng=ru); edition ISBN:9780385545655; bibliographical references 359–366. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [234](https://www.amazon.com.au/dp/0385545657); www.amazon.com.au; product 0385545657; retrieved 2026-10-22T08:13:17.014Z. Existing verified snapshot retained.

R&D: 8 reference pages / 400 total pages = 2.00%; R&D = 0.40 points. Edition recorded as matching. Page edition: ISBN:9780385545655; reference edition: ISBN:9780385545655. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 -5.00; REL 0.00; RD 0.40. Score **62.82 → 63.22**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g0685"></a>
## What is Life? — Erwin Schrödinger

Initial rank 982. Sources: 118. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0685). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0685).

Total pages: [178](https://openlibrary.org/books/OL20969865M/What_is_life); ISBN:052109397X; Not stated by source; English; 1992. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:052109397X; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.82**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0450"></a>
## One Up — Joost van Dreunen

Initial rank 985. Sources: 116. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0450). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0450).

Total pages: [320](https://openlibrary.org/books/OL29511252M/One_up_-_Creativity_Competition_and_the_Global_Business_of_Video_Games); ISBN:0231197527; Not stated by source; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [114](https://www.amazon.com.au/dp/0231197527); www.amazon.com.au; product 0231197527; retrieved 2026-10-18T22:28:16.660Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0231197527; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.78**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0240"></a>
## Execution — Larry Bossidy

Initial rank 986. Sources: 115, 188. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0330). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0240).

Total pages: [278](https://openlibrary.org/books/OL24746242M/Execution); ISBN:0609610570; Not stated by source; English; 2002. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1432](https://www.amazon.com.au/dp/0609610570); www.amazon.com.au; product 0609610570; retrieved 2026-10-18T22:27:29.035Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0609610570; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.77**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1680"></a>
## Inadequate Equilibria — Eliezer Yudkowsky

Initial rank 987. Sources: 193. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1680). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1680).

Total pages: [180](https://www.ebay.com/itm/188945147620); ISBN:9781939311221; Trade Paperback; English; 2017. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9781939311221; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.77**. Verdict: Low priority. Content confidence: low.

Audit: 1 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0320"></a>
## The Light Ages — Seb Falk

Initial rank 988. Sources: 214. [Prior content assessment](../analysis/analysis_hn30489142_261023_0229.md#intake-0320). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0320).

Total pages: [400](https://openlibrary.org/books/OL29494131M); /books/OL29494131M; Not stated by catalog; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL29494131M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.77**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nc1414aa02d"></a>
## Mathematical Thought from Ancient to Modern Times — Morris Kline

Initial rank 989. Sources: 139, 140, 223, 224. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#nc1414aa02d). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nc1414aa02d).

Total pages: [1238](https://books.google.com/books/about/Mathematical_Thought_from_Ancient_to_Mod.html?hl=en&id=zFMTJjUw3qoC&output=html_text); ISBN:9780195014969; Format not specified in catalog; English; 1972. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780195014969; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.74**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nc94cb01924"></a>
## How to Build Impossible Things — Mark Ellison

Initial rank 991. Sources: 130. [Prior content assessment](../analysis/analysis_hn39057219_261020_1731.md#nc94cb01924). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nc94cb01924).

Total pages: [304](https://www.penguin.co.uk/books/447751/how-to-build-impossible-things-by-ellison-mark/9781529157307); 9781529157307; Paperback; English; 2024. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 9781529157307; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.73**. Verdict: Low priority. Content confidence: moderate.

Audit: 1 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0420"></a>
## Jony Ive — Leander Kahney

Initial rank 992. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0420). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0420).

Total pages: [336](https://www.penguinrandomhouse.com/books/313546/jony-ive-by-leander-kahney/); ISBN:9781591847069; Paperback; English; 2014. Confidence: high. New count. 

Reference pages: [20](https://archive.org/details/jonyivegeniusbeh0000kahn); edition ISBN:9781591846178; bibliographical references 275–294. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 20 reference pages / 336 total pages = 5.95%; R&D = 1.19 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781591847069; reference edition: ISBN:9781591846178. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.52; P14 -1.30; O15 0.00; REL 0.00; RD 1.19. Score **62.72 → 63.91**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nef311ecc75"></a>
## The Lightning Tamers — Kathy Joseph

Initial rank 993. Sources: 134. [Prior content assessment](../analysis/analysis_hn36581241_261020_1731.md#nef311ecc75). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nef311ecc75).

Total pages: [310](https://kathylovesphysics.com/wp-content/uploads/2022/07/kathy-joseph-media-kit.pdf); 9798985981315; Ebook; English; 2022. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 9798985981315; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.72**. Verdict: Low priority. Content confidence: low.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0843"></a>
## How The West Grew Rich — Nathan Rosenberg; L. E. Birdzell Jr.

Initial rank 994. Sources: 120. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0843). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0843).

Total pages: [368](https://openlibrary.org/books/OL7593523M/How_the_West_Grew_Rich); ISBN:0465031099; Not stated by source; English; 1987. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [34](https://www.amazon.com.au/dp/0465031099); www.amazon.com.au; product 0465031099; retrieved 2026-10-21T14:59:29.364Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0465031099; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.71**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0186"></a>
## Machines Who Think — Pamela McCorduck

Initial rank 995. Sources: 211. [Prior content assessment](../analysis/analysis_hn22692281_261023_0229.md#intake-0186). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0186).

Total pages: [375](https://openlibrary.org/books/OL7834738M); /books/OL7834738M; Paperback; English; 1981. Confidence: moderate. Existing count retained.

Reference pages: [11](https://ci.nii.ac.jp/ncid/BA68871204); edition ISBN:1568812051; bibliographical references 535–545. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 11 reference pages / 375 total pages = 2.93%; R&D = 0.59 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL7834738M; reference edition: ISBN:1568812051. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.70; O15 0.00; REL 0.00; RD 0.59. Score **62.70 → 63.28**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g1253"></a>
## Mathematician's Delight — W. Sawyer

Initial rank 996. Sources: 124. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0551). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1253).

Total pages: [240](https://openlibrary.org/books/OL9784377M/Mathematician's_Delight); ISBN:0486462404; Paperback; English; 2007. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0486462404; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.67**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n48cd09a0bd"></a>
## Once Upon a Prime: The Wondrous Connections Between Mathematics and Literature — Sarah Hart

Initial rank 997. Sources: 139. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n48cd09a0bd). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n48cd09a0bd).

Total pages: [304](https://books.google.com/books/about/Once_Upon_a_Prime.html?id=JDcn0AEACAAJ); ISBN:9780008601119; Format not specified in catalog; English; 2024. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780008601119; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.67**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1523"></a>
## Bad Science — Ben Goldacre

Initial rank 998. Sources: 204. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1523). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1523).

Total pages: [304](https://openlibrary.org/books/OL37360586M); /books/OL37360586M; Book (format unspecified); English; 2010. Confidence: moderate. Existing count retained.

Reference pages: [14](https://openlibrary.org/books/OL23393749M); edition OL23393749M; bibliographical references 325–338. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 14 reference pages / 304 total pages = 4.61%; R&D = 0.92 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL37360586M; reference edition: OL23393749M. Ratio confidence: low.

Score retained: **62.66**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="g0858"></a>
## Portfolios of the Poor — Daryl Collins; Jonathan Morduch; Stuart Rutherford; Orlanda Ruthven

Initial rank 999. Sources: 120. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0858). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0858).

Total pages: [283](https://openlibrary.org/books/OL22972037M/Portfolios_of_the_poor); ISBN:0691141487; Not stated by source; English; 2009. Confidence: moderate. Existing count retained.

Reference pages: [8](https://openlibrary.org/books/OL30648157M); edition OL30648157M; bibliographical references 265–272. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 8 reference pages / 283 total pages = 2.83%; R&D = 0.57 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0691141487; reference edition: OL30648157M. Ratio confidence: low.

Score retained: **62.66**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1771"></a>
## Reckoning with Risk: Learning to Live with Uncertainty — Gerd Gigerenzer

Initial rank 1000. Sources: 193. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1771). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1771).

Total pages: [320](https://www.penguin.co.uk/books/26623/reckoning-with-risk-by-gerd-gigerenzer/9780140297867); ISBN:9780140297867; Paperback; English; 2003. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [74](https://www.amazon.com.au/dp/0140297863); www.amazon.com.au; product 0140297863; retrieved 2026-10-22T08:12:21.269Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780140297867; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.64**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n2460503f23"></a>
## Warped Passages — Lisa Randall

Initial rank 1001. Sources: 139, 232. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n2460503f23). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n2460503f23).

Total pages: [500](https://books.google.com/books/about/Warped_Passages.html?id=w8snAQAAIAAJ); ISBN:9780713996999; Format not specified in catalog; English; 2005. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780713996999; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.63**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0718"></a>
## Code Name Ginger — Steve Kemper

Initial rank 1003. Sources: 246. [Prior content assessment](../analysis/analysis_ae1ay7rjs_261023_2134.md#progress-0718). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0718).

Total pages: [336](https://openlibrary.org/books/OL8754200M); /books/OL8754200M; Hardcover; English; 2003. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [24](https://www.amazon.com.au/dp/1578516730); amazon.com.au; product 1578516730; retrieved 2026-10-23T22:22:17.549Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL8754200M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.62**. Verdict: Low priority. Content confidence: low.

Audit: 3 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0347"></a>
## Breath from Salt — Bijal P. Trivedi

Initial rank 1004. Sources: 3, 148. [Prior content assessment](../analysis/analysis_obscurebooks_261017_1936.md). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0347).

Total pages: [400](https://openlibrary.org/books/OL29808929M/Breath_from_Salt); OL29808929M; Not stated by source; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [371](https://www.amazon.com.au/dp/1948836378); www.amazon.com.au; product 1948836378; retrieved 2026-10-21T14:56:34.464Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL29808929M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.62**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0262"></a>
## Innovating Out of Crisis — Shigetaka Komori

Initial rank 1005. Sources: 115. [Prior content assessment](../analysis/analysis_glaspbiz_261019_0144.md#g0262). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0262).

Total pages: [216](https://openlibrary.org/books/OL28555645M/Innovating_Out_of_Crisis); ISBN:1611720230; Not stated by source; English; 2015. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [67](https://www.amazon.com.au/dp/1611720230); www.amazon.com.au; product 1611720230; retrieved 2026-10-18T22:27:36.134Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1611720230; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.62**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1603"></a>
## Pale Blue Dot: A Vision of the Human Future in Space — Carl Sagan

Initial rank 1006. Sources: 205. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1603). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1603).

Total pages: [448](https://openlibrary.org/books/OL37082871M); /books/OL37082871M; Book (format unspecified); English; 1996. Confidence: moderate. Existing count retained.

Reference pages: [6](https://openlibrary.org/books/OL1093712M); edition OL1093712M; bibliographical references 406–411. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 6 reference pages / 448 total pages = 1.34%; R&D = 0.27 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL37082871M; reference edition: OL1093712M. Ratio confidence: low.

Score retained: **62.61**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="g1214"></a>
## The Little Book of Common Sense Investing — John Bogle

Initial rank 1008. Sources: 123, 150, 164. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0987). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1214).

Total pages: [270](https://openlibrary.org/books/OL26941335M/The_little_book_of_common_sense_investing); ISBN:1119404509; Not stated by source; English; 2017. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1119404509; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.60**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0192"></a>
## Strangers and Intimates — Tiffany Jenkins

Initial rank 1009. Sources: 3. [Prior content assessment](../analysis/analysis_obscurebooks_261017_1936.md). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0192).

Total pages: [464](https://www.amazon.com.au/dp/1529034183); ASIN:1529034183; Paperback; English; 2026. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [62](https://www.amazon.com.au/dp/1529034183); www.amazon.com.au; product 1529034183; retrieved 2026-10-18T18:29:11.048Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:1529034183; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.58**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0239"></a>
## When McKinsey Comes to Town — Walt Bogdanich; Michael Forsythe

Initial rank 1010. Sources: 8, 193. [Prior content assessment](../analysis/analysis_readlately_261017_2316.md#h137). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0239).

Total pages: [368](https://www.amazon.com.au/dp/0593081870); ASIN:0593081870; Paperback; English; 2023. Confidence: high. Existing count retained.

Reference pages: [46](https://catalog.sbplibrary.org/Record/124913); edition ISBN:9780385546232; bibliographical references 289–334. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [1523](https://www.amazon.com.au/dp/0593081870); www.amazon.com.au; product 0593081870; retrieved 2026-10-18T18:29:18.076Z. Existing verified snapshot retained.

R&D: 46 reference pages / 368 total pages = 12.50%; R&D = 2.50 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:0593081870; reference edition: ISBN:9780385546232. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.17 | 11.81 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.47 | 8.47 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.40; O15 0.00; REL 2.00; RD 2.50. Score **62.58 → 65.08**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1028"></a>
## Seeing Further: The Story of Science, Discovery, and the Genius of the Royal Society — Bill Bryson (editor); Jon Turney (contributing editor)

Initial rank 1011. Sources: 190. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1028). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1028).

Total pages: [512](https://openlibrary.org/books/OL35888593M); /books/OL35888593M; Book (format unspecified); English; 2010. Confidence: moderate. Existing count retained.

Reference pages: [4](https://openlibrary.org/works/OL15436252W?edition=seeingfurthersto0000unse_z4z0); edition ISBN:9780061999772; bibliographical references 486–489. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 4 reference pages / 512 total pages = 0.78%; R&D = 0.16 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL35888593M; reference edition: ISBN:9780061999772. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.60; O15 0.00; REL 0.00; RD 0.16. Score **62.57 → 62.73**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g0642"></a>
## Sustainable Materials With Both Eyes Open — Julian M. Allwood; Jonathan M. Cullen

Initial rank 1012. Sources: 118, 148, 230, 231. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0642). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0642).

Total pages: [373](https://ci.nii.ac.jp/ncid/BB10025235); ISBN:9781906860059; Paperback; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: [9](https://archive.org/details/sustainablemater0000allw); edition ISBN:9781906860059; bibliographical references 357–365. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. ISBN matches the total-page edition.

Amazon ratings: [6](https://www.amazon.com.au/dp/1906860076); www.amazon.com.au; product 1906860076; retrieved 2026-10-21T20:29:03.210Z. Existing verified snapshot retained.

R&D: 9 reference pages / 373 total pages = 2.41%; R&D = 0.48 points. Edition recorded as matching. Page edition: ISBN:9781906860059; reference edition: ISBN:9781906860059. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 17.00 | 17.00 |
| Transferable strategic utility | 14.00 | 14.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.50; O15 -20.00; REL 3.46; RD 0.48. Score **62.56 → 63.05**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="progress-0386"></a>
## The Arabs — Eugene Rogan

Initial rank 1014. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0386). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0386).

Total pages: [736](https://www.penguin.co.uk/books/187098/the-arabs-by-rogan-eugene/9780141986548); ISBN:9780141986548; Paperback; English; 2018. Confidence: high. New count. 

Reference pages: [29](https://catalog.pascolibraries.org/Record/14290); edition ISBN:9780465071005; bibliographical references 503–531. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 29 reference pages / 736 total pages = 3.94%; R&D = 0.79 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780141986548; reference edition: ISBN:9780465071005. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 19.00 | 18.05 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -0.72; P14 -1.70; O15 0.00; REL 0.00; RD 0.79. Score **62.56 → 63.35**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1014"></a>
## A Brief History of Everyone Who Ever Lived: The Stories in Our Genes — Adam Rutherford

Initial rank 1016. Sources: 190, 205. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1014). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1014).

Total pages: [320](https://openlibrary.org/books/OL48159988M); /books/OL48159988M; Book (format unspecified); English; 2016. Confidence: moderate. Existing count retained.

Reference pages: [15](https://openlibrary.org/books/OL26935136M); edition OL26935136M; bibliographical references 370–384. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 15 reference pages / 320 total pages = 4.69%; R&D = 0.94 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL48159988M; reference edition: OL26935136M. Ratio confidence: low.

Score retained: **62.52**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="g0617"></a>
## Nature via Nurture (also The Agile Gene) — Matt Ridley

Initial rank 1017. Sources: 118. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0617). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0617).

Total pages: [326](https://catalog.freelibrary.org/Record/2509914); ISBN:9780060006792; Paperback; English; 2004. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780060006792; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.52**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0550"></a>
## Moonwalking with Einstein — Joshua Foer

Initial rank 1018. Sources: 118, 135, 148, 177, 185, 205, 207. [Prior content assessment](../analysis/analysis_hn29462663_261020_1731.md#g0550). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0550).

Total pages: [307](https://openlibrary.org/books/OL30405506M/Moonwalking_with_Einstein); ISBN:0143120530; paperback; Not stated by source; 2012. Confidence: moderate. Existing count retained.

Reference pages: [99](https://openlibrary.org/books/OL32126727M); edition OL32126727M; bibliographical references 209–307. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 99 reference pages / 307 total pages = 32.25%; R&D = 6.45 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0143120530; reference edition: OL32126727M. Ratio confidence: low.

Score retained: **62.51**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="nb298658135"></a>
## Love and Math: The Heart of Hidden Reality — Edward Frenkel

Initial rank 1021. Sources: 139, 140, 182. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#nb298658135). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nb298658135).

Total pages: [288](https://books.google.com/books?id=AFs4DgAAQBAJ); ISBN:9780465069958; Format not specified in catalog; English; 2013. Confidence: moderate. Existing count retained.

Reference pages: [36](https://archive.org/details/lovemathheartofh0000fren_e4w3); edition ISBN:0465064957; bibliographical references 247–282. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: [830](https://www.amazon.com.au/dp/0465064957); amazon.com.au; product 0465064957; retrieved 2026-10-23T10:43:12.818Z. Existing verified snapshot retained.

R&D: 36 reference pages / 288 total pages = 12.50%; R&D = 2.50 points. Edition recorded as matching. Page edition: ISBN:9780465069958; reference edition: ISBN:0465064957. Ratio confidence: moderate.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.30; O15 -5.00; REL 2.83; RD 2.50. Score **62.50 → 65.00**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0284"></a>
## Pockets — Hannah Carlson

Initial rank 1022. Sources: 212. [Prior content assessment](../analysis/analysis_smb1hg08ou_261023_0229.md#intake-0284). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0284).

Total pages: [320](https://www.hachettebookgroup.com/titles/hannah-carlson/pockets/9781643751542/); ISBN:9781643751542; Hardcover; English; 2023. Confidence: high. Existing count retained.

Reference pages: [49](https://catalog.freelibrary.org/Record/2666543); edition ISBN:9781643751542; Notes 235–283. Confidence: moderate. Existing count retained. Only the documented sections are counted. Inline citations and online supplements are excluded. Reference pages are not a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 49 reference pages / 320 total pages = 15.31%; R&D = 3.06 points. Edition recorded as matching. Page edition: ISBN:9781643751542; reference edition: ISBN:9781643751542. Ratio confidence: moderate.

Score retained: **62.49**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="n945952c647"></a>
## What the Dormouse Said — John Markoff

Initial rank 1023. Sources: 134, 211, 232, 244, 247. [Prior content assessment](../analysis/analysis_hn36581241_261020_1731.md#n945952c647). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n945952c647).

Total pages: [352](https://www.penguinrandomhouse.com/books/291224/what-the-dormouse-said-by-john-markoff/); 9780143036760; Paperback; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: [9](https://openlibrary.org/books/OL17217886M); edition OL17217886M; bibliographical references 291–299. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 9 reference pages / 352 total pages = 2.56%; R&D = 0.51 points. Edition recorded as matching. Page edition: 9780143036760; reference edition: OL17217886M. Ratio confidence: moderate.

Score retained: **62.49**. Verdict: Low priority. Content confidence: low.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="g1036"></a>
## Eradication — Nancy Leys Stepan

Initial rank 1025. Sources: 122, 148. [Prior content assessment](../analysis/analysis_glasphist_261019_0144.md#g1036). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1036).

Total pages: [309](https://openlibrary.org/books/OL25186714M/Eradication); ISBN:0801450586; Not stated by source; English; 2011. Confidence: moderate. Existing count retained.

Reference pages: [4](https://openlibrary.org/books/OL25186714M); edition OL25186714M; bibliographical references 296–299. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 4 reference pages / 309 total pages = 1.29%; R&D = 0.26 points. Edition recorded as matching. Page edition: ISBN:0801450586; reference edition: OL25186714M. Ratio confidence: moderate.

Score retained: **62.41**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="progress-0678"></a>
## The Optical Munitions Industry in Great Britain 1888 to 1923 — Stephen C. Sambrook

Initial rank 1026. Sources: 231. [Prior content assessment](../analysis/analysis_materialbib_261023_2134.md#progress-0678). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0678).

Total pages: [272](https://www.routledge.com/The-Optical-Munitions-Industry-in-Great-Britain-18881923/Sambrook/p/book/9781138661967); ISBN:9781138661967; Print; English; 2013. Confidence: high. New count. Published book count. The longer 2005 doctoral thesis is a distinct version and is not used.

Reference pages: [36](https://books.google.com/books?id=EZBECgAAQBAJ&hl=en); edition GoogleBooks:EZBECgAAQBAJ; Notes 213–240; Works Cited 241–248. Confidence: moderate. New count. Only displayed, bounded reference sections are counted. Google Books may omit other sections from its contents list; a boundary may include a final blank page. Edition can differ from the length edition.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 36 reference pages / 272 total pages = 13.24%; R&D = 2.65 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781138661967; reference edition: GoogleBooks:EZBECgAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -4.12; P14 -2.10; O15 0.00; REL 0.00; RD 2.65. Score **62.41 → 65.06**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="progress-0483"></a>
## Mirror Worlds — David Gelernter

Initial rank 1027. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0483). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0483).

Total pages: [237](https://openlibrary.org/books/OL1540547M); /books/OL1540547M; Print format unspecified; English; 1991. Confidence: moderate. Existing count retained.

Reference pages: [6](https://books.google.com/books/about/Mirror_Worlds.html?hl=en&id=jh2U379fq18C&output=html_text); edition GoogleBooks:jh2U379fq18C; Notes 227–232. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 6 reference pages / 237 total pages = 2.53%; R&D = 0.51 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL1540547M; reference edition: GoogleBooks:jh2U379fq18C. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.50; O15 0.00; REL 0.00; RD 0.51. Score **62.35 → 62.85**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="intake-0254"></a>
## Fast Food Nation — Eric Schlosser

Initial rank 1028. Sources: 212. [Prior content assessment](../analysis/analysis_smb1hg08ou_261023_0229.md#intake-0254). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0254).

Total pages: [400](https://openlibrary.org/books/OL7358129M); /books/OL7358129M; Paperback; English; 2002. Confidence: moderate. Existing count retained.

Reference pages: [62](https://openlibrary.org/books/OL7469003M/Fast_Food_Nation); edition OL7469003M; Notes 274–329; Bibliography 330–335. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 62 reference pages / 400 total pages = 15.50%; R&D = 3.10 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL7358129M; reference edition: OL7469003M. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.04; P14 -2.50; O15 0.00; REL 0.00; RD 3.10. Score **62.34 → 65.44**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="rem-u1876"></a>
## High Conflict: Why We Get Trapped and How We Get Out — Amanda Ripley

Initial rank 1030. Sources: 193. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1876). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1876).

Total pages: [368](https://openlibrary.org/books/OL36353780M); /books/OL36353780M; Book (format unspecified); English; 2021. Confidence: moderate. Existing count retained.

Reference pages: [14](https://aspen-arlingtontest.bywatersolutions.com/Record/233086?page=4&recordIndex=67&referred=resultIndex&searchId=60110176); edition ISBN:9781982128562; bibliographical references 299–312. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 14 reference pages / 368 total pages = 3.80%; R&D = 0.76 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL36353780M; reference edition: ISBN:9781982128562. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
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

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 0.00; REL 0.00; RD 0.76. Score **62.32 → 63.08**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="nd19145c511"></a>
## Potato: A History of the Propitious Esculent — John Reader

Initial rank 1031. Sources: 141, 212. [Prior content assessment](../analysis/analysis_interesting_261020_1731.md#nd19145c511). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nd19145c511).

Total pages: [336](https://yalebooks.yale.edu/book/9780300171457/potato/); ISBN:9780300171457; Paperback; English; 2011. Confidence: moderate. Existing count retained.

Reference pages: [27](https://wellcomecollection.org/works/n262amq4); edition ISBN:9780434013180; bibliographical references 279–305. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [114](https://www.amazon.com.au/dp/0300171455); www.amazon.com.au; product 0300171455; retrieved 2026-10-22T08:13:46.633Z. Existing verified snapshot retained.

R&D: 27 reference pages / 336 total pages = 8.04%; R&D = 1.61 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780300171457; reference edition: ISBN:9780434013180. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.80; O15 -5.00; REL 2.00; RD 1.61. Score **62.29 → 63.90**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="nf724bcf50a"></a>
## The Computing Universe — Tony Hey; Gyuri Pápay

Initial rank 1033. Sources: 134. [Prior content assessment](../analysis/analysis_hn36581241_261020_1731.md#nf724bcf50a). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nf724bcf50a).

Total pages: [411](https://openlibrary.org/books/OL26798706M/The_Computing_Universe_A_Journey_through_a_Revolution); OL26798706M; Not stated by source; Not stated by source; 2014. Confidence: moderate. Existing count retained.

Reference pages: [3](https://obnb.uk/p16884942-the-computing-universe-a-journey-through-a-revolution); edition ISBN:9780521150187; bibliographical references 377–379. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 3 reference pages / 411 total pages = 0.73%; R&D = 0.15 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL26798706M; reference edition: ISBN:9780521150187. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.20; O15 0.00; REL 0.00; RD 0.15. Score **62.27 → 62.41**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="n135e62ec09"></a>
## Prime Obsession: Bernhard Riemann and the Greatest Unsolved Problem in Mathematics — John Derbyshire

Initial rank 1034. Sources: 139, 182, 222. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n135e62ec09). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n135e62ec09).

Total pages: [448](https://books.google.com/books/about/Prime_Obsession.html?id=S8yNEAAAQBAJ); ISBN:9780452285255; Format not specified in catalog; English; 2004. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [444](https://www.amazon.com.au/dp/0452285259); amazon.com.au; product 0452285259; retrieved 2026-10-23T10:53:12.881Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780452285255; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.26**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n451946fbbd"></a>
## Gravity's Fatal Attraction — Begelman & Rees

Initial rank 1035. Sources: 139. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n451946fbbd). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n451946fbbd).

Total pages: [350](https://www.cambridge.org/highereducation/books/gravitys-fatal-attraction/B9F5C22A73A0972CDA3FCFB187382175); ISBN:9781108819053; paperback; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: [2](https://openlibrary.org/books/OL24567580M); edition OL24567580M; bibliographical references 279–280. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 2 reference pages / 350 total pages = 0.57%; R&D = 0.11 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781108819053; reference edition: OL24567580M. Ratio confidence: low.

Score retained: **62.25**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="progress-0062"></a>
## Iron, Steam & Money — Roger Osborne

Initial rank 1036. Sources: 230, 231. [Prior content assessment](../analysis/analysis_conwayread_261023_2134.md#progress-0062). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0062).

Total pages: [400](https://books.google.com/books?id=JOp0EU8QkC4C); GoogleBooks:JOp0EU8QkC4C; Google Books edition; English; 2013. Confidence: moderate. New count. 

Reference pages: [8](https://archive.org/details/ironsteammoneyma0000roge); edition ISBN:9781847921895; bibliographical references 366–373. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 8 reference pages / 400 total pages = 2.00%; R&D = 0.40 points. Estimate: editions differ or matching is unconfirmed. Page edition: GoogleBooks:JOp0EU8QkC4C; reference edition: ISBN:9781847921895. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -7.04; P14 -1.30; O15 0.00; REL 2.00; RD 0.40. Score **62.25 → 62.65**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u0513"></a>
## Lost in Math: How Beauty Leads Physics Astray — Sabine Hossenfelder

Initial rank 1037. Sources: 182. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u0513). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u0513).

Total pages: [304](https://openlibrary.org/books/OL29836331M); /books/OL29836331M; Book (format unspecified); English; 2020. Confidence: moderate. Existing count retained.

Reference pages: [27](https://openlibrary.org/books/OL26962273M); edition OL26962273M; bibliographical references 249–275. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 27 reference pages / 304 total pages = 8.88%; R&D = 1.78 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL29836331M; reference edition: OL26962273M. Ratio confidence: low.

Score retained: **62.23**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="progress-0384"></a>
## Future Perfect — Steven Johnson

Initial rank 1039. Sources: 232. [Prior content assessment](../analysis/analysis_collison_261023_2134.md#progress-0384). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#progress-0384).

Total pages: [272](https://www.penguinrandomhouse.com/books/309723/future-perfect-by-steven-johnson/9781101596975/); ISBN:9781101596975; Ebook; English; 2012. Confidence: moderate. New count. Publisher-specified ebook length, not a verified print extent.

Reference pages: [7](https://archive.org/details/futureperfectcas0000john); edition ISBN:9781594488207; bibliographical references 219–225. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 7 reference pages / 272 total pages = 2.57%; R&D = 0.51 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781101596975; reference edition: ISBN:9781594488207. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
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

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 0.00; REL 0.00; RD 0.51. Score **62.19 → 62.71**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 3 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nbd5c9e1f3b"></a>
## The Illusion of Control — Jon Danielsson

Initial rank 1040. Sources: 132. [Prior content assessment](../analysis/analysis_hn38556188_261020_1731.md#nbd5c9e1f3b). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nbd5c9e1f3b).

Total pages: [288](https://yalebooks.yale.edu/book/9780300234817/the-illusion-of-control/); ISBN:9780300234817; Hardcover; English; 2022. Confidence: high. Existing count retained.

Reference pages: [7](https://www.finna.fi/Record/jamk.993829440206251); edition ISBN:0300265093; bibliographical references 259–265. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [23](https://www.amazon.com.au/dp/0300234813); www.amazon.com.au; product 0300234813; retrieved 2026-10-22T08:12:26.846Z. Existing verified snapshot retained.

R&D: 7 reference pages / 288 total pages = 2.43%; R&D = 0.49 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780300234817; reference edition: ISBN:0300265093. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 11.00 | 11.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.40; O15 -10.00; REL 0.00; RD 0.49. Score **62.19 → 62.67**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g0850"></a>
## Models. Behaving. Badly. — Emanuel Derman

Initial rank 1041. Sources: 120. [Prior content assessment](../analysis/analysis_glaspecon_261019_0144.md#g0850). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0850).

Total pages: [240](https://openlibrary.org/books/OL27620952M/Models.Behaving.Badly.); ISBN:1439164991; paperback; Not stated by source; 2012. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1439164991; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.17**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u1088"></a>
## The Reflective Practitioner — Donald A. Schön

Initial rank 1042. Sources: 192. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u1088). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u1088).

Total pages: [374](https://openlibrary.org/books/OL8999512M); /books/OL8999512M; Paperback; English; 1995. Confidence: moderate. Existing count retained.

Reference pages: [10](https://cir.nii.ac.jp/crid/1970586434910479368); edition ISBN:9781857423198; bibliographical references 355–364. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [308](https://www.amazon.com.au/dp/1857423194); www.amazon.com.au; product 1857423194; retrieved 2026-10-22T08:13:22.940Z. Existing verified snapshot retained.

R&D: 10 reference pages / 374 total pages = 2.67%; R&D = 0.53 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL8999512M; reference edition: ISBN:9781857423198. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.30; O15 -5.00; REL 0.00; RD 0.53. Score **62.17 → 62.70**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="intake-0160"></a>
## A People's History of Computing in the United States — Joy Lisi Rankin

Initial rank 1044. Sources: 211, 247. [Prior content assessment](../analysis/analysis_hn22692281_261023_0229.md#intake-0160). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0160).

Total pages: [325](https://openlibrary.org/books/OL26976830M); /books/OL26976830M; Print format unspecified; English; 2018. Confidence: moderate. Existing count retained.

Reference pages: [66](https://books.google.com/books?id=WnhyDwAAQBAJ&hl=en); edition GoogleBooks:WnhyDwAAQBAJ; Notes 245–294; Bibliography 295–310. Confidence: moderate. New count. Only displayed, bounded reference sections are counted. Google Books may omit other sections from its contents list; a boundary may include a final blank page. Edition can differ from the length edition.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 66 reference pages / 325 total pages = 20.31%; R&D = 4.06 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL26976830M; reference edition: GoogleBooks:WnhyDwAAQBAJ. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.84; P14 -0.80; O15 0.00; REL 2.00; RD 4.06. Score **62.15 → 66.21**. Verdict: Selective. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="n17ad18ba21"></a>
## Music and the Making of Modern Science — Peter Pesic

Initial rank 1045. Sources: 136. [Prior content assessment](../analysis/analysis_purdueread_261020_1731.md#n17ad18ba21). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n17ad18ba21).

Total pages: [356](https://mitpress.mit.edu/9780262543903/music-and-the-making-of-modern-science/); ISBN 9780262543903; Paperback; English; 2022. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [10](https://www.amazon.com/dp/0262027275); amazon.com; product 0262027275; retrieved 2026-10-20T16:06:22.1693177Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN 9780262543903; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.12**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="na14891c2ce"></a>
## Big Bang: The Origin of the Universe — S. Singh

Initial rank 1046. Sources: 139, 204. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#na14891c2ce). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#na14891c2ce).

Total pages: [532](https://books.google.com/books?vid=ISBN9780007152513); ISBN:9780007152513; Format not specified in catalog; English; 2004. Confidence: moderate. Existing count retained.

Reference pages: [8](https://catalog.freelibrary.org/Record/1034552); edition ISBN:0007162200; bibliographical references 509–516. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 8 reference pages / 532 total pages = 1.50%; R&D = 0.30 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780007152513; reference edition: ISBN:0007162200. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.20; O15 0.00; REL 2.00; RD 0.30. Score **62.12 → 62.42**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="intake-0584"></a>
## Just for Fun — Linus Torvalds; David Diamond

Initial rank 1047. Sources: 218, 219, 244. [Prior content assessment](../analysis/analysis_seinspired_261023_0229.md#intake-0584). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0584).

Total pages: [288](https://openlibrary.org/books/OL8826539M); /books/OL8826539M; Paperback; English; 2002. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL8826539M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.11**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0629"></a>
## Plentiful Energy — Charles E. Till; Yoon Il Chang

Initial rank 1048. Sources: 118. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0629). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0629).

Total pages: [391](https://openlibrary.org/books/OL25269813M/Plentiful_energy); ISBN:1466384603; Not stated by source; English; 2011. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [50](https://www.amazon.com.au/dp/1466384603); www.amazon.com.au; product 1466384603; retrieved 2026-10-22T08:12:28.636Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:1466384603; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.11**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g1181"></a>
## Devil Take the Hindmost — Edward Chancellor

Initial rank 1050. Sources: 123. [Prior content assessment](../analysis/analysis_glaspinvest_261019_0144.md#g1181). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1181).

Total pages: [400](https://openlibrary.org/books/OL7590892M/Devil_Take_the_Hindmost); ISBN:0452281806; Not stated by source; English; 2000. Confidence: moderate. Existing count retained.

Reference pages: [20](https://wilkinson.marmot.org/Record/.b11336845); edition ISBN:0374138583; bibliographical references 351–370. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 20 reference pages / 400 total pages = 5.00%; R&D = 1.00 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0452281806; reference edition: ISBN:0374138583. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
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

T11 0.00; T12 -10.00; H13 0.00; P14 -2.70; O15 0.00; REL 0.00; RD 1.00. Score **62.09 → 63.09**. Verdict: Low priority. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="intake-0407"></a>
## They Made America — Harold Evans; Gail Buckland; David Lefer

Initial rank 1051. Sources: 215, 236. [Prior content assessment](../analysis/analysis_hn15155833_261023_0229.md#intake-0407). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0407).

Total pages: [692](https://openlibrary.org/books/OL9343868M); /books/OL9343868M; Paperback; English; 2006. Confidence: moderate. Existing count retained.

Reference pages: [9](https://catalogue.umu.ac.ug/cgi-bin/koha/opac-ISBDdetail.pl?biblionumber=37572); edition ISBN:0316277665; bibliographical references 473–481. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 9 reference pages / 692 total pages = 1.30%; R&D = 0.26 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL9343868M; reference edition: ISBN:0316277665. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -2.20; O15 0.00; REL 2.00; RD 0.26. Score **62.09 → 62.35**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="q0129"></a>
## Inward Bound — Abraham Pais

Initial rank 1054. Sources: 12. [Prior content assessment](../analysis/analysis_physcanon_261018_0147.md#p021). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0129).

Total pages: [684](https://www.amazon.com.au/dp/0198519974); ASIN:0198519974; Paperback; English; 1988. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [58](https://www.amazon.com/dp/0198519974); www.amazon.com; product 0198519974; retrieved 2026-10-18. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:0198519974; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.07**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0598"></a>
## Happy Accidents — Morton A. Meyers

Initial rank 1056. Sources: 118. [Prior content assessment](../analysis/analysis_glaspsci_261019_0144.md#g0598). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0598).

Total pages: [408](https://openlibrary.org/books/OL8612226M/Happy_Accidents); OL8612226M; Hardcover; English; 2007. Confidence: moderate. Existing count retained.

Reference pages: [6](https://books.google.com/books?id=_zRyD6IRQnkC&hl=en); edition GoogleBooks:_zRyD6IRQnkC; Selected Bibliography 371–376. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 6 reference pages / 408 total pages = 1.47%; R&D = 0.29 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL8612226M; reference edition: GoogleBooks:_zRyD6IRQnkC. Ratio confidence: low.

Score retained: **62.04**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="intake-0825"></a>
## e: The Story of a Number — Eli Maor

Initial rank 1057. Sources: 223, 232. [Prior content assessment](../analysis/analysis_mathideas_261023_0229.md#intake-0825). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0825).

Total pages: [242](https://openlibrary.org/books/OL7757433M); /books/OL7757433M; Paperback; English; 1994. Confidence: moderate. Existing count retained.

Reference pages: [3](https://archive.org/details/estoryofnumber0000maor); edition ISBN:0691033900; bibliographical references 213–215. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 3 reference pages / 242 total pages = 1.24%; R&D = 0.25 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL7757433M; reference edition: ISBN:0691033900. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
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

T11 0.00; T12 0.00; H13 0.00; P14 -3.20; O15 0.00; REL 2.00; RD 0.25. Score **62.03 → 62.28**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="bg0cdd5d067e"></a>
## Berkshire Hathaway Letters to Shareholders — Warren Buffett; edited by Max Olson

Initial rank 1058. Sources: 168. [Prior content assessment](../analysis/analysis_bgbillgurley_261021_0210.md#bg0cdd5d067e). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bg0cdd5d067e).

Total pages: [706](https://futureblind.com/p/berkshire-hathaway-letters-to-shareholders); 2013 collection described by its editor; print; en; 2013. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 2013 collection described by its editor; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.02**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nf427e62692"></a>
## Innumeracy: Mathematical Illiteracy and Its Consequences — John Allen Paulos

Initial rank 1059. Sources: 142, 167. [Prior content assessment](../analysis/analysis_rationality_261020_1731.md#nf427e62692). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nf427e62692).

Total pages: [208](https://openlibrary.org/books/OL37039936M/Innumeracy); OL37039936M; library binding; Not stated by source; 2001. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: OL37039936M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **62.01**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="g0406"></a>
## The Master Switch — Tim Wu

Initial rank 1060. Sources: 116, 175, 191, 232, 245. [Prior content assessment](../analysis/analysis_glasptech_261019_0144.md#g0406). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0406).

Total pages: [384](https://www.penguinrandomhouse.com/books/194417/the-master-switch-by-tim-wu/9780307594655/); ISBN:9780307594655; Ebook; English; 2010. Confidence: high. Existing count retained.

Reference pages: [32](https://openlibrary.org/books/OL25122620M); edition OL25122620M; bibliographical references 325–356. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 32 reference pages / 384 total pages = 8.33%; R&D = 1.67 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780307594655; reference edition: OL25122620M. Ratio confidence: low.

Score retained: **62.00**. Verdict: Low priority. Content confidence: moderate.

Audit: 1 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="q0093"></a>
## The Party — Richard McGregor

Initial rank 1063. Sources: 11, 193, 232. [Prior content assessment](../analysis/analysis_pastefollow_261018_0130.md#f023). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0093).

Total pages: [312](https://openlibrary.org/books/OL28492635M/Party); ISBN:0141975555; Paperback; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [85](https://www.amazon.com.au/dp/0141975555); www.amazon.com.au; product 0141975555; retrieved 2026-10-18T18:28:35.127Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:0141975555; reference edition: unknown. Ratio confidence: unknown.

Score retained: **61.95**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0242"></a>
## An Edible History of Humanity — Tom Standage

Initial rank 1066. Sources: 212. [Prior content assessment](../analysis/analysis_smb1hg08ou_261023_0229.md#intake-0242). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0242).

Total pages: [269](https://openlibrary.org/books/OL23164901M); /books/OL23164901M; Not stated by catalog; English; 2009. Confidence: moderate. Existing count retained.

Reference pages: [9](https://gc.wyldcatalog.org/Record/a1576084); edition Catalog:https://gc.wyldcatalog.org/Record/a1576084; bibliographical references 249–257. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [934](https://www.amazon.com.au/dp/0802715885); amazon.com.au; product 0802715885; retrieved 2026-10-23T10:04:12.591Z. Existing verified snapshot retained.

R&D: 9 reference pages / 269 total pages = 3.35%; R&D = 0.67 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL23164901M; reference edition: Catalog:https://gc.wyldcatalog.org/Record/a1576084. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.70; O15 -5.00; REL 0.00; RD 0.67. Score **61.94 → 62.61**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="g1138"></a>
## Secrets of Sand Hill Road — Scott Kupor

Initial rank 1067. Sources: 123, 193. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0740). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g1138).

Total pages: [320](https://openlibrary.org/books/OL28900281M/Secrets_of_Sand_Hill_Road); ISBN:059308358X; Not stated by source; English; 2019. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:059308358X; reference edition: unknown. Ratio confidence: unknown.

Score retained: **61.94**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0969"></a>
## The Tyranny of Experts — William Easterly

Initial rank 1069. Sources: 3, 120. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#v0005). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0969).

Total pages: [394](https://openlibrary.org/books/OL27157027M/The_tyranny_of_experts); ISBN:0465031250; Not stated by source; English; 2013. Confidence: moderate. Existing count retained.

Reference pages: [26](https://openlibrary.org/books/OL27157027M); edition OL27157027M; bibliographical references 355–380. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 26 reference pages / 394 total pages = 6.60%; R&D = 1.32 points. Edition recorded as matching. Page edition: ISBN:0465031250; reference edition: OL27157027M. Ratio confidence: moderate.

Score retained: **61.93**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="intake-0294"></a>
## Plutopia — Kate Brown

Initial rank 1070. Sources: 212. [Prior content assessment](../analysis/analysis_smb1hg08ou_261023_0229.md#intake-0294). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0294).

Total pages: [416](https://www.amazon.com.au/dp/0190233109); ASIN:0190233109; Paperback; English; 2015. Confidence: high. Existing count retained.

Reference pages: [58](https://wellcomecollection.org/works/zjad8r9h); edition ISBN:9780199855766; bibliographical references 341–398. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: [307](https://www.amazon.com.au/dp/0190233109); amazon.com.au; product 0190233109; retrieved 2026-10-23T10:05:12.592Z. Existing verified snapshot retained.

R&D: 58 reference pages / 416 total pages = 13.94%; R&D = 2.79 points. Estimate: editions differ or matching is unconfirmed. Page edition: ASIN:0190233109; reference edition: ISBN:9780199855766. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.40; P14 -1.30; O15 -5.00; REL 0.00; RD 2.79. Score **61.93 → 64.72**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="intake-0034"></a>
## Sweating Bullets — Robert Gaskins

Initial rank 1071. Sources: 207. [Prior content assessment](../analysis/analysis_hn42614722_261023_0229.md#intake-0034). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0034).

Total pages: [512](https://openlibrary.org/books/OL25293481M); /books/OL25293481M; Paperback; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [28](https://www.amazon.com.au/dp/0985142421); amazon.com.au; product 0985142421; retrieved 2026-10-23T09:08:02.976Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: /books/OL25293481M; reference edition: unknown. Ratio confidence: unknown.

Score retained: **61.92**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0890"></a>
## Schrödinger: Life and Thought — Walter Moore

Initial rank 1072. Sources: 226. [Prior content assessment](../analysis/analysis_hsmphysics_261023_0229.md#intake-0890). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0890).

Total pages: [513](https://openlibrary.org/books/OL2048518M); /books/OL2048518M; Print format unspecified; English; 1989. Confidence: moderate. Existing count retained.

Reference pages: [19](https://openlibrary.org/works/OL2985994W/Schrodinger_life_and_thought); edition Catalog:https://openlibrary.org/works/OL2985994W/Schrodinger_life_and_thought; bibliographical references 483–501. Confidence: moderate. New count. Documented reference ranges only; separate uncounted notes may remain. Index excluded. Search-index snapshot. Source edition and total-page edition may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 19 reference pages / 513 total pages = 3.70%; R&D = 0.74 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL2048518M; reference edition: Catalog:https://openlibrary.org/works/OL2985994W/Schrodinger_life_and_thought. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -2.60; P14 -3.70; O15 0.00; REL 0.00; RD 0.74. Score **61.92 → 62.66**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 1 saved search batches; 0 new Amazon attempts. 

<a id="nb9da087d59"></a>
## Never a Dull Moment: Hassler Whitney, Mathematics Pioneer — Keith Kendig

Initial rank 1073. Sources: 140. [Prior content assessment](../analysis/analysis_casualmath_261020_1731.md#nb9da087d59). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nb9da087d59).

Total pages: [385](https://booksearch.americanalpineclub.org/bib/49994); ISBN:9781470448288; Paperback; English; 2018. Confidence: high. Existing count retained.

Reference pages: [36](https://books.google.com/books?id=aaVyDwAAQBAJ&hl=en); edition GoogleBooks:aaVyDwAAQBAJ; Notes 345–372; Bibliography 373–380. Confidence: moderate. Existing count retained. Count covers the displayed numbered reference sections. Google Books can omit sections from its contents list; a boundary may include a final blank page. Not a citation count or evidence-quality measure.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 36 reference pages / 385 total pages = 9.35%; R&D = 1.87 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9781470448288; reference edition: GoogleBooks:aaVyDwAAQBAJ. Ratio confidence: low.

Score retained: **61.90**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="g0577"></a>
## Cosmos — Carl Sagan

Initial rank 1074. Sources: 118, 144, 183, 190, 203, 215, 242, 248. [Prior content assessment](../analysis/analysis_reasonbooks_261020_1731.md#g0577). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#g0577).

Total pages: [432](https://www.penguinrandomhouse.com/books/159730/cosmos-by-carl-sagan/9780345539434/); 9780345539434; Paperback; English; 2013. Confidence: high. Existing count retained.

Reference pages: [6](https://openlibrary.org/books/OL24740450M); edition OL24740450M; Bibliography: 350–355. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 6 reference pages / 432 total pages = 1.39%; R&D = 0.28 points. Estimate: editions differ or matching is unconfirmed. Page edition: 9780345539434; reference edition: OL24740450M. Ratio confidence: low.

Score retained: **61.90**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="naef7c41178"></a>
## The 4% Universe — Richard Panek

Initial rank 1075. Sources: 139, 206. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#naef7c41178). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#naef7c41178).

Total pages: [297](https://books.google.com/books/about/The_4_Percent_Universe.html?id=MXi0tAEACAAJ); ISBN:9780547577579; Format not specified in catalog; English; 2011. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [341](https://www.amazon.com.au/dp/0547577575); www.amazon.com.au; product 0547577575; retrieved 2026-10-22T08:13:51.318Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780547577579; reference edition: unknown. Ratio confidence: unknown.

Score retained: **61.90**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="rem-u0281"></a>
## The Code of Capital: How the Law Creates Wealth and Inequality — Katharina Pistor

Initial rank 1076. Sources: 178. [Prior content assessment](../analysis/analysis_remaining_261022_0042.md#rem-u0281). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#rem-u0281).

Total pages: [316](https://www.harvard.com/book/9780691208602); ISBN:9780691208602; Paperback; English; 2020. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [259](https://www.amazon.com.au/dp/0691208603); www.amazon.com.au; product 0691208603; retrieved 2026-10-22T08:13:27.022Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780691208602; reference edition: unknown. Ratio confidence: unknown.

Score retained: **61.89**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="intake-0311"></a>
## Elixir — Brian Fagan

Initial rank 1077. Sources: 213. [Prior content assessment](../analysis/analysis_smb3rmh5s_261023_0229.md#intake-0311). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#intake-0311).

Total pages: [384](https://openlibrary.org/books/OL24494551M); /books/OL24494551M; Print format unspecified; English; 2011. Confidence: moderate. Existing count retained.

Reference pages: [19](https://archive.org/details/elixirhistoryofw0000faga_y1r7); edition ISBN:9781608190034; bibliographical references 351–369. Confidence: moderate. New count. Library metadata explicitly states the reference range. Only documented ranges are counted; unlisted notes may remain uncounted. Reference and total-page editions may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 19 reference pages / 384 total pages = 4.95%; R&D = 0.99 points. Estimate: editions differ or matching is unconfirmed. Page edition: /books/OL24494551M; reference edition: ISBN:9781608190034. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.50; O15 0.00; REL 0.00; RD 0.99. Score **61.88 → 62.87**. Verdict: Low priority. Content confidence retained: low. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0206"></a>
## Half Lives — Lucy Jane Santos

Initial rank 1078. Sources: 3. [Prior content assessment](../analysis/analysis_obscurebooks_261017_1936.md). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0206).

Total pages: [320](https://www.amazon.com.au/dp/1785787187); ASIN:1785787187; Paperback; English; 2021. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [60](https://www.amazon.com.au/dp/1785787187); www.amazon.com.au; product 1785787187; retrieved 2026-10-18T18:29:11.097Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:1785787187; reference edition: unknown. Ratio confidence: unknown.

Score retained: **61.88**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 2 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="q0429"></a>
## The Address Book — Deirdre Mask

Initial rank 1079. Sources: 7. [Prior content assessment](../analysis/analysis_anysubject_261017_2227.md#a054). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#q0429).

Total pages: [336](https://www.amazon.com/dp/1781259011); ASIN:1781259011; Paperback; English; 2021. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: [1029](https://www.amazon.com.au/dp/1781259011); www.amazon.com.au; product 1781259011; retrieved 2026-10-18T18:30:15.859Z. Existing verified snapshot retained.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ASIN:1781259011; reference edition: unknown. Ratio confidence: unknown.

Score retained: **61.88**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="nc97887258a"></a>
## Fundamentals: Ten Keys to Reality — Frank Wilczek

Initial rank 1080. Sources: 144. [Prior content assessment](../analysis/analysis_reasonbooks_261020_1731.md#nc97887258a). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#nc97887258a).

Total pages: [272](https://www.penguinrandomhouse.com/books/554034/fundamentals-by-frank-wilczek/); ISBN:9780735223905; Paperback; English; 2022. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780735223905; reference edition: unknown. Ratio confidence: unknown.

Score retained: **61.86**. Verdict: Low priority. Content confidence: moderate.

Audit: 1 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n3ada19c5bb"></a>
## A History of Economic Theory and Method — Robert B. Ekelund; Robert F. Hébert

Initial rank 1082. Sources: 136. [Prior content assessment](../analysis/analysis_ruleaudit_261020_2349.md#h0024). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n3ada19c5bb).

Total pages: [508](https://openlibrary.org/books/OL5060126M/A_history_of_economic_theory_and_method); OL5060126M; Not stated by source; English; 1975. Confidence: moderate. Existing count retained.

Reference pages: [3](https://openlibrary.org/books/OL982104M); edition OL982104M; bibliographical references 579–581. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 3 reference pages / 508 total pages = 0.59%; R&D = 0.12 points. Estimate: editions differ or matching is unconfirmed. Page edition: OL5060126M; reference edition: OL982104M. Ratio confidence: low.

Score retained: **61.84**. Verdict: Low priority. Content confidence: low.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="bge672b47cb1"></a>
## Catching Fire — Richard Wrangham

Initial rank 1083. Sources: 167. [Prior content assessment](../analysis/analysis_bgbalajisrin_261021_0210.md#bge672b47cb1). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bge672b47cb1).

Total pages: [320](https://openlibrary.org/books/OL26791377M/Catching_Fire_How_Cooking_Made_Us_Human); ISBN:0465020410; Not stated by source; Not stated by source; 2010. Confidence: moderate. Existing count retained.

Reference pages: [76](https://books.google.com/books/about/Catching_Fire.html?id=-avfYyMouJEC); edition ISBN:9781847652102; Notes 213–256; Bibliography 257–288. Confidence: moderate. New count. Only documented reference sections are counted. Index, image credits and acknowledgements are excluded. Search-index snapshot; contents boundaries may include a final blank page. Reference and total-page editions may differ.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 76 reference pages / 320 total pages = 23.75%; R&D = 4.75 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:0465020410; reference edition: ISBN:9781847652102. Ratio confidence: low.

| Criterion | Raw attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.70; O15 0.00; REL 0.00; RD 4.75. Score **61.83 → 66.58**. Verdict: Selective. Content confidence retained: moderate. Change is due only to documented metadata and its prescribed formula effects.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. 

<a id="ncaa247ed7e"></a>
## The Joy of X: A Guided Tour of Math, from One to Infinity — Steven Strogatz

Initial rank 1084. Sources: 139. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#ncaa247ed7e). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#ncaa247ed7e).

Total pages: [336](https://books.google.com/books/about/The_Joy_Of_X.html?id=edbv3FyVsMcC); ISBN:9780547517667; Format not specified in catalog; English; 2012. Confidence: moderate. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: ISBN:9780547517667; reference edition: unknown. Ratio confidence: unknown.

Score retained: **61.83**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 1 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.

<a id="n3f243f8e24"></a>
## The First Three Minutes — S. Weinberg

Initial rank 1085. Sources: 139, 205. [Prior content assessment](../analysis/analysis_uncwbooks_261020_1731.md#n3f243f8e24). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#n3f243f8e24).

Total pages: [224](https://books.google.com/books/about/The_First_Three_Minutes.html?id=Yw47_BsQlJ0C); ISBN:9780465024377; Format not specified in catalog; English; 1993. Confidence: moderate. Existing count retained.

Reference pages: [4](https://openlibrary.org/books/OL1036857M); edition OL1036857M; bibliographical references 192–195. Confidence: moderate. Existing count retained. Count covers the explicitly catalogued reference ranges or bounded contents sections. Unlisted notes, inline citations, and online supplements are not counted; it is not a citation count or a measure of evidence quality.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: 4 reference pages / 224 total pages = 1.79%; R&D = 0.36 points. Estimate: editions differ or matching is unconfirmed. Page edition: ISBN:9780465024377; reference edition: OL1036857M. Ratio confidence: low.

Score retained: **61.82**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 0 Google Books steps; 0 saved search batches; 0 new Amazon attempts. 

<a id="bg7bdb79df18"></a>
## Under a White Sky — Elizabeth Kolbert

Initial rank 1086. Sources: 148, 204. [Prior content assessment](../analysis/analysis_bgbillgates_261021_0210.md#bg7bdb79df18). [Prior score calculation](../analysis/analysis_scorebonus_261024_0106.md#bg7bdb79df18).

Total pages: [272](https://www.penguinrandomhouse.com/books/617060/under-a-white-sky-by-elizabeth-kolbert/9780593136294/); 9780593136287; Paperback; English; 2022. Confidence: high. Existing count retained.

Reference pages: unknown; no sufficiently identified and bounded section established.

Amazon ratings: unknown; O15=0 fallback. No explicit identity-verified total-rating aggregate was established in the available evidence.

R&D: R&D input unavailable; explicit zero-point fallback. Counts remain unknown. Page edition: 9780593136287; reference edition: unknown. Ratio confidence: unknown.

Score retained: **61.82**. Verdict: Low priority. Content confidence: moderate.

Audit: 2 library steps (including cached/skipped steps); 4 Google Books steps; 2 saved search batches; 0 new Amazon attempts. Internet Archive catalog lookup recorded; HTTP 200.
