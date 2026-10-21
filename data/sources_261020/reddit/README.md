# Reddit source capture

The inventory records source mentions, not verified bibliography or eligibility. All visible text from the eight readable threads was examined. Source 147 could not be read. The complete comment count is unknown, so none of these captures is presented as a complete thread export.

| Source | Book records | Captured visible comment anchors | Coverage |
|---|---:|---:|---|
| 127 | 7 | 14 | Partial |
| 131 | 4 | 4 | Partial |
| 141 | 72 | 45 | Partial |
| 142 | 48 | 7 | Partial |
| 143 | 124 | 107 | Partial |
| 144 | 50 | 54 | Partial |
| 145 | 91 | 61 | Partial; image inaccessible |
| 146 | 42 | 16 | Partial; linked original crosspost inaccessible |
| 147 | 0 | 0 | Unavailable |
| Total | 438 | 308 | Before cross-source deduplication |

The first direct Reddit public JSON request, for source 127, returned HTTP 403. The collector stopped at that denial and did not try the other JSON endpoints. The web reader returned the visible OP and comment text for eight threads. It exposed 63 reply-expansion links across the captured pages. Each expansion was tried and returned a cache miss. The source 143 initial text was truncated, so a second reader view captured the remaining lines. The readable file combines the two views in line order.

The timestamp links for all 169 comments used by the inventory were opened. Their target pages returned cache misses, but the responses exposed actual comment IDs and permalinks. These IDs locate the comments already captured in the main reader view; they do not imply that additional replies were obtained.

Source 145 has an OP cover grid. Its exact image URL is in `raw/145-image-link.json`. The web reader returned a cache miss and the normal CDN request returned HTTP 403. No covers were inspected. A commenter named burchb supplied an explicitly caveated AI transcription. The inventory records the titles in that comment as comment mentions only. Some names and author attributions are wrong or unresolved; bibliography must be checked before scoring. A real title in that comment is still a source mention, even if it misidentifies a cover. Generic author references and non-book resources are separate from the book records.

Source 147 returned a cache miss. No browser surface was available. A search returned other threads, which were not treated as evidence for this source. No book or cover was inferred.

`raw/` preserves reader responses and failed retrieval evidence. `readable/` removes unrelated suggested posts and orders the captured source lines. `claims-*.tsv` records the extracted title claims. `inventory.mjs` combines them with actual comment locators and the non-book audit in `extras.json`. `transcription.mjs` preserves the AI-comment title spellings and adds an explicit uncertainty note.

Confidence is high that the inventory reflects the captured text. Confidence that it contains every book in the full live threads is unknown because hidden replies and images were unavailable.
