# Source intake and catalog maintenance

2026-10-21, Europe/Warsaw.

## Completed

- Removed sequential Tab stops from passive table containers and stopped page navigation from focusing the whole results area. Controls and links remain keyboard accessible.
- Explained ideal-book targets in the panel, including their current evidence limitation: no complete connection reviews. Targets alone do not change scores.
- Recovered 59 missing Amazon aggregates: all 36 gaps in the starting top 100 and 23 books brought into the top 100 by reranking. Both sets now have complete counts. Existing known counts were retained. Only O15 and resulting totals changed. Each new count has a matching product, marketplace, retrieval time and saved snapshot.
- Applied H4 to the two identified non-English catalog works and one new German source work. An English translation preserves eligibility for the Silvestrin monograph. Missing metadata is not treated as proof of ineligibility.
- Registered all 32 requested URLs as sources 175–206. Direct retrieval saved 30 full HTML responses; the other two have search-service snapshots.
- Added source provenance to 743 catalog records and recorded 26 new hard exclusions. This preserves existing numerical assessments; it is not a fresh review of all duplicates.

## Incomplete

Full source assimilation is **not complete**. There are **964 pending identity/assessment records**, including duplicates, title variants and authorless mentions. These are not a count of distinct new eligible books. No unassessed work was inserted into the recommendation or veto tables. [Pending records](pending.json) retain the source context; [reconciled intake](reconciled.json) retains matches and exclusions.

Bookshop exposes a Load More control in the indexed snapshot; the remaining dynamic entries are not recovered. Auxiliary titles in endorsements and list comments require a completeness pass. Goodreads shelf page 2 repeats the same 50 identities as page 1; the numbered history and science list pages are distinct.

The existing assessments are reused for provenance only in accordance with the request to avoid duplicate work. A later review must inspect substantive new reader comments before claiming reassessment. Source reports show current full criterion breakdowns and links to prior analyses, plus explicit pending queues.

## Reproduction and checks

Active snapshot: data/source_review_261021/compiled.json. The publication scripts are one-time migrations and refuse a changed baseline. Do not rerun them against the published catalog. Historical compiled snapshots and analyses remain unchanged.

For the current continuation, run npm run build, npm test, then node data/source_review_261021/validate.mjs. The earlier maintenance validator describes its historical baseline. Validation checks that the 59 rating corrections are the only score changes, all prior source numbers survive, the two language removals carry no new score, and source analysis is explicitly marked incomplete.

Rating evidence: [initial pass](../../analysis/analysis_top100lang_261021_2230.md), [manual ISBN identities](../../analysis/analysis_ratingids_261021_2239.md), [reranking pass 1](../../analysis/analysis_rankratings_261021_2240.md), [reranking pass 2](../../analysis/analysis_rankratings_261021_2241.md), [reranking pass 3](../../analysis/analysis_rankratings_261021_2242.md), [reranking pass 4](../../analysis/analysis_rankratings_261021_2244.md), [reranking pass 5](../../analysis/analysis_rankratings_261021_2245.md). Count confidence: high; underlying book-assessment confidence is unchanged.

The [next review](../source_review_261021/REPORT.md) resolves 173 of the original pending records: 11 new scored works, 154 new exclusions and eight duplicate records.
