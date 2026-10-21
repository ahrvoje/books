# Source integration audit

Reviewed 2026-10-20, Europe/Warsaw. The 22 submitted URLs identify 21 distinct sources, numbered 127–147. The repeated Hacker News 36581241 URL counts once.

All **1554 captured candidate records** received decisions, consolidated into **1549 work records**. This is complete coverage of captured candidates, not a claim that blocked comments or images were read.

| Decision in this batch | Works |
|---|---:|
| recommended | 719 |
| vetoed | 118 |
| excluded | 684 |
| unresolved | 24 |
| nonbook | 4 |

The cumulative catalog contains **2131 recommended-list works**, **486 vetoed works**, and **1234 hard exclusions**. “Recommended-list” includes low scores and poor fits: these are eligible works, not an endorsement of every title.

| Current recommended catalog field | Known | Unknown or incomplete |
|---|---:|---:|
| Identified-edition page count | 2045 | 86 |
| Individual domain grades | 6088 | 36532 |
| Complete 20-domain profile | 0 | 2131 |
| Complete connection inventory | 0 | 2131 |
| Verified Amazon rating count | 1212 | 919 |

1935 works have at least one graded domain. There are 195 documented mechanisms and 5 explicit joins. These numbers measure recorded evidence, not full-text reading. Missing domain grades stay unknown; co-occurring topics alone do not create a connection. A partial inventory cannot establish the exact best connection across an entire book.

## Evidence and access limits

Publisher, author, library and specialist-review records establish identity, main purpose, original years, edition scope and assessment support. Statements of praise do not establish evidence quality. Each scored work has ten linear attainments, ten criterion reasons, five separate deductions and a confidence level. E, S and D are curved once. Repeated mentions add distinct source numbers, not quality points.

The seven Hacker News trees were captured. Purdue, UNCW and MathOverflow reading-list material was captured. Reddit access remained partial: some reply expansions failed, one source was unavailable, and a cover image was blocked. Named books in readable comments count as comment nominations; they are not presented as verified transcriptions of blocked images. Full per-source coverage is recorded in each analysis and in [the review queue](review-queue.json).

Amazon counts use one matching product and the original retrieval date. Written-review counts, wrong titles, incomplete series and multi-book bundles are rejected. A failed lookup leaves the count unknown and applies the specified O15=0 fallback. Product availability is not inferred from an ISBN-based purchase locator. No access challenge was bypassed.

Edition page counts refer to the stated print or ebook product. A series needs the whole nominated scope. Original production, selected edition year and historical topic endpoint are separate fields. Approximate or uncertain dates are stated with confidence.

## Corrections and remaining review

Prior source assessments remain historical records. Fresh decisions replace current scores and gates, retain all contributing source numbers, and cite prior evidence. The publication check rejects duplicate identities, alias cycles, overlapping ledgers, malformed criteria and unsupported connection participants before writing.

The inherited *Almost Perfect* ledger year is repaired from NaN to the already supported 1994. *The Origins of Efficiency* displays 88.18 using the same decimal rounding as the site; its underlying score is unchanged. The old *Last Lion: Defender of the Realm* purchase link pointed to a trilogy box set; it now uses the separately verified final-volume ISBN. The newly nominated complete trilogy remains a separate scope.

The [review queue](review-queue.json) lists unresolved identities, missing edition extents, low-confidence date judgments and source access gaps. Some memoir, instruction, specialist-history and activism boundaries retain moderate confidence. The review does not invent missing titles, Amazon aggregates, exact historical dates or complete domain profiles.

The generated site remains one offline HTML file. [The specification](../../spec_01.md) defines the model; [the implementation review](../../IMPLEMENTATION_REVIEW.md) records browser validation and remaining product concerns.
