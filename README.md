# Book selection

Open **[docs/index.html](docs/index.html)** in a current browser. It is one monolithic HTML file containing the catalog, cited repository analyses, styles, and application code. No server, account, installation, other file, or network connection is needed to use it. It has no runtime dependencies.

The initial ranking uses the repository's existing 15-rule evaluation. Filters, custom scoring, selected books, and the optional Pareto plot run locally. Settings can be exported and imported as JSON. Purchase and source links open only when selected.

## Use

1. Search by title, author, or subtitle.
2. Open **Filters** to set raw-value, normalized-level, or contribution limits. Filtered books remain below the matching list.
3. Open **Scoring** to enable a variable, choose its normalization and curve, and set a signed weight. For a linear page term, choose **Points per page**, set the rate to `-0.01`, and set reference `0`. Raw anchors set the caps.
4. **Ideal book** shares the scoring model. Its optional domain target requires explicit depth, importance, strength, and confidence choices.
5. Open **Pareto** and choose **Score / sources** to compare known catalog values immediately. Page and connection axes require the corresponding evidence.
6. Panel edits are drafts until **Apply**. **Cancel** discards them. Selection and text search act immediately.
7. Open **Columns** to select raw values and score contributions. The default shows Year, Pages, Amazon ratings, Sources, and every enabled scoring contribution. It follows changes to scoring; manual column choices remain custom. The same choices appear as labelled values on a phone.
8. Use the top links for **Vetoed**, **Excluded**, **Sources**, and **Methodology**. These views are embedded in the same file. Vetoed shows saved counterfactual scores; excluded works have no score. Sources lists all entries from `SOURCES.md`, with source number, date added, original link and saved analysis. The four pasted inputs also open offline. These reference views have no filter or scoring controls. Methodology explains the process and includes the exact repository rules.

The **ƒx** button shows variable aliases. The whole recommended catalog renders at once across the two lists, with no pagination, row limit, or “load more” control. Search narrows the visible collection. Titles and authors share one compact line when space permits.

Compatible settings survive catalog updates silently. Numeric headings align with their values. Compact widths and wrapped names reduce the default table from 2628 to 1954 CSS pixels; the top scrollbar provides access to all selected columns. Details remains the last column.

Unknown values are shown as unknown. They are not inferred from titles. Inactive unknown fields do not affect the initial ranking. See **[IMPLEMENTATION_REVIEW.md](IMPLEMENTATION_REVIEW.md)** for evidence gaps and decisions made without further questions.

The latest additions and source coverage are documented in **[the Books Guru batch](data/books_guru_261021/REPORT.md)**. For this batch, the user's explicit instruction preserves all previously covered assessments and adds source provenance only; unique new works receive full gate and score assessments. The [V4/V5 review](data/veto_review_261021/REPORT.md), [earlier H2/V5 audit](data/rule_review_261020/REPORT.md), [source integration audit](data/sources_261020/REPORT.md) and [enrichment audit](data/enrichment_261020/REPORT.md) remain dated history. Each accepted page count identifies an edition. Domain depths and connection records carry evidence and confidence. Reviewing a book does not mean every domain has become known.

## GitHub Pages

The generated site is in `docs/`, the folder name supported by GitHub Pages branch publishing. The build writes `docs/index.html` and `docs/.nojekyll`; the latter disables Jekyll. Hash routes such as `index.html#sources` work under the `/books/` project path and need no server routing.

For the configured remote `ahrvoje/books`, the default project URL would be `https://ahrvoje.github.io/books/`. Commit and push `docs/index.html` and `docs/.nojekyll`, then choose **Settings → Pages → Deploy from a branch → main → /docs → Save**. [GitHub publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Publishing `/docs` includes only the approximately 43 MB site, keeping the research tree outside the published folder and well below the 1 GB published-site limit. [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). The HTML's size can slow a first visit over a mobile connection; it includes all available cited analyses to preserve offline use.

This change prepares the local files only. It does not commit, push, enable Pages, or verify a live deployment. Rebuild and publish the generated files in `docs/` after later catalog changes.

## Build and verify

Node.js 24 was used. The build and calculation tests use Node's standard library and need no package installation.

```text
npm run build
npm test
npm run preview
```

The active compiled-data path is recorded in `data/catalog.json`. Edit the active assessment and enrichment data together, then rebuild. `site/merge-enrichment.mjs` targets the older catalog and refuses to overwrite a later source batch.

The latest publisher is `data/books_guru_261021/build.mjs`: its default mode validates all decisions and stages reviewable outputs; `--write` publishes them once after checking the saved baseline hashes. The earlier publishers remain in their dated directories. Do not rerun a publisher's `--write` after publication or regenerate its baseline to bypass that protection. `node data/books_guru_261021/validate.mjs` verifies source coverage, ledger agreement, and preservation of historical analyses, existing assessments and metadata. Its `--staged` mode checks proposed outputs before publication. After the browser test, `--browser` also records its results and verifies that the tested isolated HTML matches the deliverable exactly.

The active catalog records the hash of the `AGENTS.md` rules used for its review. The site refuses to build if those instructions change without a corresponding catalog reassessment. All hard exclusions, V4, V5 and the complete rule appendix are embedded directly from that same file, using rule names to avoid numbering drift. V4 permits supported, balanced expert speculation with explicit safeguards. V5 requires religious doctrine or specifically evidenced advocacy of ideological extremism; a manifesto label or reform proposal is insufficient.

The preview command serves `docs/` at `http://127.0.0.1:4173`, matching the published site root. It binds only to the local machine. Stop it with Ctrl+C. Set `BOOKS_PORT` to use a different port.

Browser checks use Playwright as a development dependency:

```text
npm install
npx playwright install chromium
npm run test:browser
```

The browser test copies only `docs/index.html` to an isolated folder, opens that copy with a `file:` URL, and blocks HTTP requests. It checks every rendered row, selected columns, embedded analyses, controls, export/import, selection, Pareto interaction, and layouts at six widths. Screenshots and results go to the ignored `site/qa-output/` directory. `BOOKS_PLAYWRIGHT_MODULE` can point to an existing Playwright `index.mjs` installation instead of installing another copy.

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
