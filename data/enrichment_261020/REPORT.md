# Catalog enrichment audit

Reviewed 2026-10-20. Each of the 1,636 recommended works has a metadata lookup outcome and a domain review.

| Field | Available | Still unknown or incomplete |
|---|---:|---:|
| Edition page count | 1628 | 8 |
| Individual domain depths | 4554 | 28166 |
| Complete 20-domain profiles | 0 | 1636 |
| Complete connection reviews | 0 | 1636 |
| New Amazon counts among 499 baseline gaps | 3 | 496 |

1468 books have at least one assessed domain. There are 68 explicit mechanisms and 5 explicit joins. These counts measure recorded evidence, not full-text reading or verified absence of other domains.

Page evidence confidence: 437 high, 1191 moderate and 0 low. Among accepted page records, 176 sources do not state language and 570 do not state binding/format. Those attributes are labelled unknown; a known page extent does not imply complete edition metadata.

The existing 15-rule assessments, original years, historical endpoints, source counts and Amazon counts are imported from the current repository evaluation. New enrichment does not change those judgments or the initial ranking.

New Amazon observations appear separately in book details, with product, date and limitations. They are pending a canonical evaluation update. Public product retrieval eventually returned CAPTCHA or Server Busy responses and was stopped; no count was invented or borrowed from a different book.

## Method and limits

- Edition lookups use ISBNs or matched title and author. Page counts belong to the named edition, not a work-level average. Source URL, retrieval time, identity, format, language, year and confidence accompany each accepted count. Missing edition attributes remain explicitly unknown.
- Open Library catalog pagination can count numbered pages differently from a publisher's total extent. Publisher checks resolve selected conflicts; the source and basis remain recorded.
- Domain grades are manual interpretations of book-specific prior assessments and available new contents, samples or descriptions. They are not converted from title keywords, the old systems score, or popularity.
- A missing domain is not graded zero. Source descriptions usually support presence better than absence. Full domain profiles and exhaustive connection reviews require broader evidence than a short description.
- Connection records name each participant's role, a common causal account, scope, strength, confidence and sources. A shared label does not create a join.
- An incomplete connection review cannot establish the exact best connection score or absence of a connection. The interface keeps those derived values unknown. Known individual domain values can already be filtered and scored.

## Domain evidence coverage

| Domain | Known | High | Moderate | Low | Unknown |
|---|---:|---:|---:|---:|---:|
| SCI | 290 | 0 | 2 | 288 | 1346 |
| QNT | 231 | 0 | 7 | 224 | 1405 |
| CMP | 140 | 0 | 7 | 133 | 1496 |
| HTC | 84 | 0 | 5 | 79 | 1552 |
| ENG | 148 | 0 | 16 | 132 | 1488 |
| ENE | 51 | 0 | 5 | 46 | 1585 |
| MAT | 88 | 0 | 5 | 83 | 1548 |
| PRD | 133 | 0 | 8 | 125 | 1503 |
| QLT | 92 | 0 | 5 | 87 | 1544 |
| LOG | 181 | 0 | 6 | 175 | 1455 |
| TRD | 102 | 0 | 4 | 98 | 1534 |
| SCL | 83 | 0 | 8 | 75 | 1553 |
| INN | 256 | 0 | 7 | 249 | 1380 |
| INS | 962 | 0 | 11 | 951 | 674 |
| ECO | 204 | 0 | 9 | 195 | 1432 |
| FIN | 227 | 0 | 3 | 224 | 1409 |
| POL | 404 | 0 | 6 | 398 | 1232 |
| MIL | 156 | 0 | 3 | 153 | 1480 |
| STR | 239 | 0 | 2 | 237 | 1397 |
| HEU | 483 | 0 | 1 | 482 | 1153 |

## Evidence and remaining work

- [Page lookup attempts and provenance](pages/progress.json)
- [Page collector and edition audit](pages/)
- [First domain review set](domains_a/assessments.json)
- [Second domain review set](domains_b/assessments.json)
- [Primary-source supplements](primary/assessments.json)
- [Primary publisher page reviews](primary/page-gap-results.json)
- [First publisher gap review set](domains_a/page-gap-results.json)
- [Second publisher gap review set](domains_b/page-gap-results.json)
- [Complete-work edition follow-up](pages/additional-page-results.json)
- [New rating observations and unresolved attempts](pages/missing-ratings.json)
- [Per-book unresolved fields](review-queue.json)

## Remaining page gaps

| ID | Work | Reason |
|---|---|---|
| q0617 | Ravensbrück (probable) | Source identity remains probable. A matching candidate Sarah Helm paperback has 784 pages (ISBN 9780307278715, 2016, https://www.penguinrandomhouse.com/books/78292/ravensbruck-by-sarah-helm/), but a page count cannot resolve which source work was meant. |
| q0686 | Symposium | Source author is only probable. Plato paperback candidate has 144 pages (ISBN 9780140449273, 2003, https://www.penguinrandomhouseretail.com/book/?isbn=9780140449273); not applied until the source identity is resolved. |
| q0730 | The Beast (likely migrant-train account) | Source title identifies only a likely migrant-train account. Searches found Oscar Martinez candidates, but did not establish the original source identity. No guessed edition assigned. |
| q0760 | Henry James biography (version unresolved) | Repository identity is explicitly unresolved: Leon Edel wrote a multi-volume biography and a condensed version. No single edition or volume may be silently selected. |
| q0948 | Une histoire populaire du baseball | Exact ISBN 9782493043061 was found, but extent is unresolved: publisher press release reports 340 pages (https://www.olbia-conseil.com/wp-content/uploads/2022/04/communique-1-1.pdf), Fnac reports 400 (https://www.fnac.com/a16569787/Gaetan-Alibert-Une-histoire-populaire-du-Baseball), and Sport a lire reports both 388 and 392. The current publisher page omits extent. A scan or physical copy is needed to resolve the material conflict. |
| q0952 | It Was Never About You | Print identity 9798182244497, J. C. Maurer, English paperback, independently published 2026, was found at IBS, ZVAB and eBay, but none supplied a verified page extent. ElevenReader gives audio duration, not pages, and an inconsistent 2021 date; it cannot supply the missing print count. See https://www.ebay.com/itm/800700865600 and https://www.ibs.it/libri-inglese/autori/j-c-maurer. |
| q0964 | A Piece of Cake (probable) | Repository author and title identification are explicitly probable. A page count for Cupcake Brown would falsely resolve the source identity; retained unknown pending identity review. |
| g0742 | On Power | Audio original. No verified paginated print or ebook edition was found; listening duration cannot be converted into a page count. The publisher identifies an Audible exclusive adaptation of two speeches, and the contemporary AP report states there would be no print or ebook edition. |

Confidence is high that coverage counts match the embedded data. Bibliographic and judgment confidence belongs to each record. This audit does not claim that all missing facts have been recovered.
