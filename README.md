# Book explorer

Open **[docs/index.html](docs/index.html)** in a current browser. It is one monolithic HTML file containing the compressed catalog, styles, and application code. No server, account, installation, other file, or network connection is needed to use it. Book details and calculations work offline. Full source inputs and historical analyses open online in the repository. The browser uses its built-in DecompressionStream; no external library is loaded.

The initial ranking uses the repository's 17-rule evaluation, including Relevance and R&D. Scores can exceed 100. Filters, custom scoring, and the optional Pareto plot run locally. Settings can be exported and imported as JSON. Purchase and source links open only when selected.

## Use

The [Relevance and R&D scoring update](analysis/analysis_scorebonus_261024_0106.md) recalculates all 4,671 recommended and 254 counterfactual vetoed scores. Relevance adds `2 × sqrt(distinct sources − 1)`; R&D adds `20 × reference pages / total pages`, using fractional points and available data. Missing inputs contribute zero; unconfirmed edition ratios are labelled estimates. Both bonuses are enabled by default without clipping. Adjust their multipliers under **Adjust scoring**, or inspect them in **Columns**, filters, Details and Pareto axes. Existing saved settings acquire both bonuses at multiplier 1 while retaining earlier custom choices. The active catalog is `data/v9_apply11_261024/compiled.json`.

The [500-book metadata review](analysis/analysis_top500data_261024_1353.md) adds 27 page counts, 107 Amazon rating counts, and 151 reference-page counts; expands one existing reference count; corrects one edition record; and updates 54 purchase links. It improves 231 books and recalculates 204 scores through the obscurity deduction and R&D bonus. Within the fixed cohort, 3 page counts, 119 Amazon counts, and 271 reference counts remain unknown. Amazon requests were paced at least 45 seconds apart and stopped on an access challenge. No zero-rating count was established. New print identities and untested regional links are distinguished in the report. Content assessments and source membership are unchanged.

The [250-book metadata review](analysis/analysis_top250data_261024_0052.md) adds 50 page counts, 139 Amazon rating counts, and 121 reference-page counts. It also corrects three wrong-work page records and 36 purchase links. Within the fixed review cohort, 1 page count, 20 Amazon counts, and 128 reference counts remain unknown. Only new Amazon counts change scores through the obscurity deduction. That metadata snapshot is retained at `data/top250_261023/compiled.json`; the active catalog now includes the scoring bonuses.

**Reference pages (`RP`)** is available in **Adjust scoring**, **Filter books**, **Columns**, and **Pareto tradeoffs**. It starts disabled with zero weight, so saved scores do not change. The [collection report](data/reference_pages_261022/report.html) lists every recommended and vetoed work, the documented section ranges, and remaining unknowns. Counts have moderate confidence and identify an edition; bibliography-only records can omit separate notes. R&D uses the available RP and total-page counts. Ratios from differing or unconfirmed editions are labelled estimates with low confidence. More reference pages do not establish better evidence. Raw RP remains an optional separate term; the R&D ratio bonus is enabled by default.

The [reference-page gap review](data/reference_gaps_261022/REPORT.md) checked the 100 highest-ranked books with missing reference-page counts and added 28 verified counts. The remaining 72 are still unknown; documented ranges, edition details, and unresolved cases are retained in the report. Scores are unchanged.

The earlier [top-200 metadata update](data/top200_261022/REPORT.md) added 25 print-edition page counts and 23 verified Amazon rating aggregates. At that stage, the top 200 had complete page counts and 151 verified Amazon counts; 49 counts remained unknown after retrieval attempts. All content assessments and non-rating deductions were unchanged.

The [remaining-title review](data/remaining_261021/REPORT.md) resolves 954 of 968 records after four identity splits: 683 new eligible works, 33 new vetoed works, 156 new hard exclusions, 52 existing-work matches, 27 within-batch duplicates and three non-book references. Fourteen records remain unresolved. All new scores have low confidence; density estimates use descriptions and selected evidence, not full-text coverage. The catalog now contains 3,630 recommended, 238 vetoed and 1,414 excluded works. The active catalog is `data/remaining_261021/compiled.json`.

The earlier [identity and assessment continuation](data/source_review_261021/REPORT.md) resolved 173 pending records, added 11 scored works and 154 hard exclusions, and reconciled eight duplicate records.

The earlier [maintenance and source intake](data/source_batch_261021/REPORT.md) recovered 59 missing Amazon counts, completing the top 100 at that stage, applied the English/Croatian exclusion, and removed passive table Tab stops. There are 206 registered sources. The 32-source assimilation remains **incomplete** because auxiliary-page coverage and the blocked Bookshop source are unresolved. Later additions changed the top 100; another retrieval attempt left some new entrants without verified counts. Unknown counts receive the specified zero obscurity deduction.

The [rating-gap update](analysis/analysis_ratinggaps_261021_1704.md) adds 181 verified counts: 169 recommended and 12 vetoed. Coverage is 1,499/2,938 recommended and 39/205 vetoed; 1,605 remain unknown after an Amazon access challenge stopped direct retrieval. Known counts retain their product, marketplace and snapshot date. Only the affected obscurity deductions and totals change. Both lists display Amazon counts.

1. Search by title, author, or subtitle.
2. Open **Filter books** to set raw-value, normalized-level, or contribution limits. Filtered books remain below the matching list.
3. Open **Adjust scoring** to enable a variable, choose its normalization and curve, and set a signed weight. For a linear page term, choose **Points per page**, set the rate to `-0.01`, and set reference `0`. Raw anchors set the caps.
4. **Define ideal book** shares the scoring model. Choose subjects, desired depth and importance, plus minimum connection strength and confidence, then **Apply**. A target alone does not change ranking: enable and weight a target measure in **Adjust scoring**, or use it in filters, columns or the Pareto plot. Subject coverage works only when all selected subject depths are known. No book currently has a complete connection review, so the connected measures remain unknown.
5. Open **Pareto tradeoffs**, choose the X and Y variables, and select **Apply** to show the plot and its boundaries. The three boundaries are red, blue and dark yellow. Lines end at actual book coordinates. A boundary with one coordinate is a highlighted dot without a line. All books with finite coordinates are plotted, including filtered books; non-finite logarithmic coordinates are omitted. Boundaries use plottable matching books, or visible filtered books when no matching books can be plotted; the caption identifies that fallback. Each is computed after removing every book on the earlier boundaries. Both axes offer BASE, TOTAL, and all variables. Each axis can independently be linear or logarithmic. Logarithmic display omits zero and negative values on that axis and reports their count; it does not change scores. Boundaries are calculated from the books that can be plotted, using their original values. Page and connection axes require the corresponding evidence.
6. Panel edits are drafts until **Apply**. **Cancel** discards them. Text search and the plot axis scales act immediately.
7. Open **Columns** to select raw values and score contributions. The default shows Year, Amazon ratings, Pages, Reference pages, and Sources, alongside Score, Title / author and Details. Scoring changes do not add columns; manual column choices remain custom. The same choices appear as labelled values on a phone.
8. Use the top links for **Vetoed**, **Excluded**, **Sources**, and **Methodology**. These views are embedded in the same file. Vetoed shows saved counterfactual scores; excluded works have no score. Sources lists all entries from `SOURCES.md`, with source number, date added, original link and saved analysis. Source inputs and full analyses open online. These reference views have no filter or scoring controls. Methodology explains the process and includes the exact repository rules.

The **ƒx** button shows variable aliases. The whole recommended catalog renders at once across the two lists, with no pagination, row limit, or “load more” control. Search narrows the visible collection. Titles and authors share one compact line when space permits.

Compatible settings survive catalog updates silently. Numeric headings align with their values. Controls stay above the books at every width. A top scrollbar appears when more than five optional columns are selected. Details remains the last column.

Unknown values are shown as unknown. They are not inferred from titles. Inactive unknown fields do not affect the initial ranking. See **[IMPLEMENTATION_REVIEW.md](IMPLEMENTATION_REVIEW.md)** for evidence gaps and decisions made without further questions.

The [H3/V6 category review](analysis/analysis_categories_261021_1600.md) leaves 2,938 recommended, 205 vetoed and 1,076 excluded works. The subsequent [page-count and density review](analysis/analysis_densitypages_261021_1630.md) provides cited edition counts for 2,927 recommended and 200 vetoed works. The remaining 16 counts are explicit unknowns. It changes only the density estimates for Why Nations Fail, The Righteous Mind and A Thousand Brains; other density estimates are marked as not recalibrated under the clarified learning-yield protocol.

The latest additions and source coverage are documented in **[the Books Guru batch](data/books_guru_261021/REPORT.md)**. For this batch, the user's explicit instruction preserves all previously covered assessments and adds source provenance only; unique new works receive full gate and score assessments. The [V4/V5 review](data/veto_review_261021/REPORT.md), [earlier H2/V5 audit](data/rule_review_261020/REPORT.md), [source integration audit](data/sources_261020/REPORT.md) and [enrichment audit](data/enrichment_261020/REPORT.md) remain dated history. Each accepted page count identifies an edition. Domain depths and connection records carry evidence and confidence. Reviewing a book does not mean every domain has become known.

## GitHub Pages

The generated site is in `docs/`, the folder name supported by GitHub Pages branch publishing. The build writes `docs/index.html` and `docs/.nojekyll`; the latter disables Jekyll. Hash routes such as `index.html#sources` work under the `/books/` project path and need no server routing.

For the configured remote `ahrvoje/books`, the default project URL would be `https://ahrvoje.github.io/books/`. Commit and push `docs/index.html` and `docs/.nojekyll`, then choose **Settings → Pages → Deploy from a branch → main → /docs → Save**. [GitHub publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Publishing `/docs` includes only the approximately 3.72 MB site, keeping the research tree outside the published folder and well below the 1 GB published-site limit. [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). Displayed book facts and assessments use lossless gzip compression and base64 encoding. Raw edition collection metadata stays in the research tree. Full historical analyses stay in the repository. The build enforces a limit of 1,500 bytes per recommended or vetoed book.

This change prepares the local files only. It does not commit, push, enable Pages, or verify a live deployment. Rebuild and publish the generated files in `docs/` after later catalog changes.

## Build and verify

Node.js 24 was used. The build and calculation tests use Node's standard library and need no package installation.

```text
npm run build
npm test
npm run preview
```

The active compiled-data path is recorded in `data/catalog.json`. Edit the active assessment and enrichment data together, then rebuild. `site/merge-enrichment.mjs` targets the older catalog and refuses to overwrite a later source batch.

The current category migration is `data/category_review_261021/build.mjs` (already applied; one-time use). Validate the active catalog with `node data/category_review_261021/validate.mjs`. The preceding source-batch publisher is `data/books_guru_261021/build.mjs`: its default mode validates all decisions and stages reviewable outputs; `--write` publishes them once after checking the saved baseline hashes. The earlier publishers remain in their dated directories. Do not rerun a publisher's `--write` after publication or regenerate its baseline to bypass that protection. `node data/books_guru_261021/validate.mjs` verifies source coverage, ledger agreement, and preservation of historical analyses, existing assessments and metadata. Its `--staged` mode checks proposed outputs before publication. After the browser test, `--browser` also records its results and verifies that the tested isolated HTML matches the deliverable exactly.

The active catalog records the hash of the `AGENTS.md` rules used for its review. The site refuses to build if those instructions change without a corresponding catalog reassessment. All hard exclusions, V4, V5, V6 and the complete rule appendix are embedded directly from that same file, using rule names to avoid numbering drift. H3 excludes primary technical-training and specialist-reference purposes, including historical technical treatises. V6 excludes dominant partisan recruitment and campaign attacks, with evidence; political views alone do not qualify. V4 permits supported, balanced expert speculation with explicit safeguards. V5 requires religious doctrine or specifically evidenced advocacy of ideological extremism; a manifesto label or reform proposal is insufficient.

The preview command serves `docs/` at `http://127.0.0.1:4173`, matching the published site root. It binds only to the local machine. Stop it with Ctrl+C. Set `BOOKS_PORT` to use a different port.

Browser checks use Playwright as a development dependency:

```text
npm install
npx playwright install chromium
npm run test:browser
```

The browser test copies only `docs/index.html` to an isolated folder, opens that copy with a `file:` URL, and blocks HTTP requests. It checks every rendered row, selected columns, online analysis links, controls, export/import, Pareto interaction, and layouts at six widths. Screenshots and results go to the ignored `site/qa-output/` directory. `BOOKS_PLAYWRIGHT_MODULE` can point to an existing Playwright `index.mjs` installation instead of installing another copy.

## Files and data

| File | Purpose |
|---|---|
| `docs/index.html`, `docs/.nojekyll` | Generated, stand-alone deliverable and static publishing marker. Rebuild instead of editing them. |
| `site/model.mjs` | Registry, normalization, signed scoring, filters, connection measures, validation, and Pareto dominance. |
| `site/build.mjs` | Reconciles ledger membership, imports current assessments, validates data, and embeds the application. |
| `site/app.js` | Browser controls, local state, book details, and plot rendering. |
| `site/template.html`, `site/style.css` | Accessible page structure and responsive layout. |
| `site/methodology.html` | Readable methodology, with the precise repository instructions embedded during the build. |
| `site/enrichment.json` | Evidence-backed domain grades, edition lengths, connection records, and explicit unknowns. |
| `site/editions.json` | Supplemental edition evidence for recommended and vetoed works; original enrichment records are preserved. |
| `site/reference-pages.json` | Reference-page variable for every current recommended and vetoed work, with edition, section ranges, source, confidence and explicit unknowns. |
| `data/reference_pages_261022/` | Ranked collection attempts, cached library and contents evidence, reviewed web records, coverage report and validation. |
| `data/pages_density_261021/` | Historical compiled catalog, page-count evidence, unresolved cases, three density decisions and preservation checks. |
| `data/ratings_pareto_261021/` | Rating-update snapshot, recovered Amazon counts, unresolved gaps, score changes and preservation checks. |
| `site/merge-enrichment.mjs` | Validates full-catalog review coverage and merges the dated research artifacts. |
| `data/enrichment_261020/` | Collected edition evidence, per-book domain reviews, and unresolved-field audit. |
| `data/sources_261020/` | Historical source captures, decisions, compiled data, and access/identity review queue. |
| `data/rule_review_261020/` | Historical H2/V5 reassessment, evidence, compiled data and validation audit. |
| `data/veto_review_261021/` | Historical V4/V5 review of every prior veto, evidence, compiled data and validation audit. |
| `data/books_guru_261021/` | Current Books Guru source captures, identity matches, new assessments, compiled data and validation audit. |
| `data/catalog.json` | Pointer to the active compiled catalog. |
| `site/model.test.mjs`, `site/browser.test.mjs` | Calculation and browser checks. |
| `spec_01.md` | Product and calculation contract. |

The adapter reads the compiled path in `data/catalog.json`, using `RECOMMENDED_BOOKS.md` as the membership authority. It checks vetoed and excluded membership, source IDs, raw criteria, and baseline equivalence. A changed ledger or score discrepancy fails the build rather than silently reusing stale data.

Repository rules and assessments are not edited by the site. The baseline review year is fixed at 2026. An edited review year belongs to the custom scoring model.

## Add assessed enrichment

Use stable work IDs from the compiled data as keys in `site/enrichment.json`. A domain entry needs `value` (integer 0–4), `confidence`, `rationale`, and `refs`. Do not treat an uncoded domain as zero.

An edition record needs `pages`, an edition `id`, evidence `url`, and retrieval date `retrieved`; also record language, format, and edition year. For series, document the complete nominated volume set.

A `connections` record has `status` (`unreviewed`, `partial`, or `complete`), `mechanisms`, `joins`, and `limitations`. Each mechanism needs `id`, `domains`, `roles`, `statement`, `scope`, `strength`, `confidence`, and `refs`. Each join needs `from`, `to`, `handoff`, `statement`, `scope`, `strength`, `confidence`, and `refs`. Optional locators can identify chapters, sections, or pages.

The build validates structure and dependencies. Evidence support still needs review. See sections 4.3–4.6 of the specification for assessment anchors and connection rules. Settings imports cannot alter book assessments.

Priority review: [top-50 review](analysis/analysis_topreview_261021_1712.md) corrects two high-ranked assessments. That review’s snapshot is data/top_review_261021/compiled.json. The remaining top-50 rows are a review queue, not a completed full-text assessment. No additional Amazon counts were accepted from ambiguous indexed counters.

The [eligibility review](analysis/analysis_newrules_261024_2005.md) applies H5/H6 and V6–V8, including borderline cases. The collection now has 5407 recommended, 602 vetoed, and 2653 hard-excluded works. Marcus Aurelius’s *Meditations* retains its explicit exception. Three title aliases are merged; source IDs and historical analyses are preserved.

The initial [V9 foundations review](analysis/analysis_veto9_261024_2037.md) applied the high-confidence central-defect rule to the disputed-book set and recorded catalog leads. In that initial review, no recommendation changed status; *Science at the Crossroads* gains V9 alongside V1. The active catalog is `data/foundations_261024/compiled.json`; counts and scores are unchanged.

The [revised V9 application](analysis/analysis_foundations_261024_2050.md) covers disputed central theses and recurring explanatory narratives. Nine high-confidence matches, including Sapiens, move to the veto list. The collection now has 5,398 recommended, 611 vetoed and 2,653 hard-excluded works. Scores and source IDs are retained.

The [approved eleven-title V9 application](analysis/analysis_v9apply11_261024_2117.md) moves the eleven high-confidence catalog-review candidates to the veto list. Current totals: **5,387 recommended, 622 vetoed, 2,653 hard-excluded**. Scores and source IDs are retained; moderate-confidence candidates keep their status.
