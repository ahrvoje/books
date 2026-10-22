# Implementation review

Date: 2026-10-21. Decisions and concerns are recorded for later review. No response is needed to use the site.

## Delivered

Latest update: [rating gaps and Pareto boundaries](analysis/analysis_ratinggaps_261021_1704.md). Added 181 explicit total-rating aggregates, preserving prior known counts. Coverage: 1,499 recommended and 39 vetoed works; 1,605 remain unknown. Amazon returned an access challenge, which stopped direct collection. Only O15 and its resulting totals/verdicts change. Both ledgers and both HTML lists show linked counts. The display removes the marked filler, uses equal 16×16 icons and labels the control Pareto tradeoffs. Three successive boundaries use red, blue and dark yellow. The size contract is 1,500 bytes per recommended or vetoed work (4,714,500 bytes at current membership). Current validation: `node data/ratings_pareto_261021/validate.mjs --browser`.

The [page-count and density review](analysis/analysis_densitypages_261021_1630.md) adds edition counts to both Markdown ledgers and the vetoed HTML view. Coverage is 2,927/2,938 recommended and 200/205 vetoed works. Sixteen unresolved counts remain unknown. Only three density estimates change; the other criteria, deductions, categories and existing enrichment records are preserved. The clarified density protocol measures useful learning per reading effort and credits examples that teach distinct content. Unreviewed density estimates are labelled in the HTML. Full edition collection metadata stays in the repository; the HTML retains the count, edition identity, source link, date, format, language, confidence and notes.

Earlier page-count update: all 15 tests and offline Chromium checks at six widths passed. HTML: 3,076,901 bytes. Its [validation record](data/pages_density_261021/validation.json) records preservation, coverage and the tested HTML hash for that historical snapshot.

`docs/index.html` is one monolithic, dependency-free HTML file. It contains the catalog, links to cited repository analyses, styles and application code. It needs no server, account, installation or network connection. External evidence and purchase links are optional.

The 44-variable model supports signed normalized scoring, independent filters, selection, settings import/export and an optional Pareto plot. Matching and filtered books are separately sorted by score. All rows render without pagination. Authors follow titles on the same line. The Columns panel selects raw values and score contributions; phones show the selected facts below each title.

The [reference-page collection](data/reference_pages_261022/report.html) adds `RP` for all current recommended and vetoed works. Counts identify documented reference sections in an edition; unknowns stay explicit. It starts disabled with zero weight. Existing settings acquire that disabled term on restore or import. The build checks membership and inclusive range arithmetic. The focused browser test covers the new column, rate scoring, filtering, evidence, vetoed rows and mobile layout. The older full browser suite currently stops at its unchanged header assertion (line 25); that unrelated layout is outside this change.

The initial ranking reproduces the current 15-rule evaluation. Domain variables, page counts, source-count scoring and connection measures start inactive. Improved ideal-book defaults remain for later review.

The top navigation opens Books, Vetoed, Excluded, Sources and Methodology within the same HTML. Vetoed shows every current stored counterfactual score with its reason and analysis. Excluded shows every current hard-excluded work without scores. Sources presents all 174 registered entries with their numbers, dates, original links and saved analyses. Full source inputs and historical analyses open from repository links; current book details remain offline. Reference views have no filtering or scoring controls. Methodology explains source collection, identity checks, exclusions, vetoes, all scoring rules, evidence, domain connections and custom controls. All hard exclusions, V4, V5, V6 and the complete rules appendix come directly from `AGENTS.md`, identified by rule content rather than numbering.

Default optional columns are Year, Pages, Amazon ratings and Sources only, with Details last. All four configuration buttons stay above results, with leading icons and distinct pastel colors. Book links are dark navy and underlined. A top horizontal scrollbar makes wide desktop tables accessible; phones show the selected facts below each title. Custom column choices persist. Compatible catalog updates restore settings silently, and the old three-column default migrates to the new default without a catalog-change warning.

The [H3/V6 category review](analysis/analysis_categories_261021_1600.md) gives current membership: 2,938 recommended, 205 vetoed and 1,076 excluded. Existing scores are unchanged; two admissions receive first baselines. The [Books Guru batch](data/books_guru_261021/REPORT.md) records preceding source decisions. The [V4/V5 review](data/veto_review_261021/REPORT.md), [earlier H2/V5 audit](data/rule_review_261020/REPORT.md), [source integration audit](data/sources_261020/REPORT.md) and [enrichment audit](data/enrichment_261020/REPORT.md) remain dated historical records. Recommended-list membership includes low-scoring books and poor fits; it is not an endorsement of every title.

## Sources page and static hosting

The subsequent Sources-page update changes presentation only; it does not collect evidence or change book assessments. Source rows come directly from `SOURCES.md`, with build checks for unique numbers, dates and links. The browser check compares every rendered source to the embedded register, opens all pasted inputs offline, restores the Sources route after reload, and checks widths of 320, 390 and 1,440 pixels.

The build writes `docs/index.html` and `docs/.nojekyll` for GitHub Pages. The output folder is shared by the build, preview and validation tools. The root HTML has been moved rather than duplicated. Select `main` and `/docs` as the publishing source; the [README](README.md#github-pages) records setup steps. Only the approximately 3.12 MB site is published from this folder. No remote publication or repository settings change is part of this update.

## Earlier Books Guru source batch and column layout (superseded where noted above)

The 26 submitted expert lists contain 976 book cards. All advertised card counts match the captures, including pagination. The collection also checks 393 recommendation quotations and records 35 explicit auxiliary book mentions. Identity matching reduces these nominations to 832 distinct works: 462 previously covered works and 370 new works. The user's explicit instruction for this batch permits source-only updates to earlier entries. Earlier scores, judgments and metadata remain unchanged; repeated list appearances add provenance only.

New works receive individual identity, exclusion, veto and scoring decisions. Separate volumes and materially distinct books are assessed as their actual nominated scope. Aggregator descriptions sometimes identify the wrong book, so they do not establish eligibility, dates, page counts or Amazon rating aggregates. The capture audit and individual assessments record the evidence used. Unknown metadata remains unknown.

Desktop numeric headings and values now share their column widths and right alignment. Contribution headings show the criterion name with a separate points label. The default table is 1,954 pixels wide, down from 2,628 pixels, while retaining all selected columns and the top scrollbar. Phone rows retain labelled values. Browser assertions check heading-to-value alignment and compact widths.

## Earlier V4/V5 review — historical

All 355 books in the previous veto ledger receive a new decision under the revised rules. V4 permits substantiated, balanced expert speculation with explicit safeguards. V5 requires religious doctrine or specifically evidenced advocacy of ideological extremism. Manifesto labels, reform proposals, activism and institutional criticism are insufficient. Each book also receives independent findings for the other gates. A withdrawn veto is not replaced by V1 or V2 without evidence that meets that rule.

The review records eight gate findings, ten criterion reasons, five deductions, evidence and separate eligibility and score confidence per work. Scores are retained when only the gate changes; evidence corrections receive their own explanation. Restored edition and domain records come from existing evidence. Unknown values remain unknown.

During the review, `AGENTS.md` gained an explicit exclusion for works never published as books. The [recorded amendment](data/veto_review_261021/rules-amendment.json) preserves both rule hashes and confirms that the other conditions did not change. Gate names now identify book form, fiction and instruction/reference purpose without relying on numerical position. Non-book references stay outside all three book ledgers. The original baseline remains intact.

All 2,591 previously recommended records and 903 previously excluded records remain unchanged. The new analysis and source index record current decisions; all 64 earlier analysis files remain unchanged. The final counts and any new hard exclusions appear in the current audit.

## Earlier H2/V5 review — historical

All 1,720 prior excluded or vetoed entries were reviewed. Two duplicate identities were merged, leaving 1,718 distinct reviewed works. Of these, 460 enter the recommended list: 323 formerly excluded and 137 formerly vetoed. Six former exclusions now receive vetoes and full counterfactual scores. All 2,131 existing recommended assessments outside this review remain unchanged.

That review applied the expert-to-expert exception for narrative or explanatory work unless explicitly intended for exams, instructions or reference. Its former V5 included explicit manifesto or activist purpose; the current V4/V5 review supersedes that interpretation. Both Princeton Companions remained excluded because their prefaces expressly identified reference intent. *Good to Great* passed H2 but received V1 at moderate confidence after a separate assessment of its central inference. Each historical decision records its evidence and uncertainty.

Restored works include *Thinking in Systems*, *Safeware*, *Probability Theory: The Logic of Science*, Hamming's two distinct books, and *How Infrastructure Works* (85.30). The veto review also corrects two thematic deductions and 139 unsupported Amazon counts, including two wrong-work products. Seventy-two O15 deductions change to the specified unknown-count fallback. These are evidence corrections, not claims of improved book quality. The excluded-book batches also reject unsupported review-only counts.

Current source links lead to the new audit and retain historical analyses. All 63 earlier analysis files remain byte-for-byte unchanged. The build checks the reviewed rules' hash, ledger membership and scores. A rules change requires reconciliation before the HTML can be rebuilt. Restored edition and domain evidence comes from retained records; this gate review does not claim complete new domain research. The missing-domain index for 25 restored metadata records was derived from their existing supported values, without adding grades.

## Earlier source integration

The 22 submitted URLs identify 21 distinct sources. The repeated Hacker News link counts once. All 1,554 captured candidate records have decisions, consolidated into 1,549 records. Existing works were reassessed and retain all contributing source numbers. Previous analyses remain historical records.

The updated canonical files are `SOURCES.md`, `RECOMMENDED_BOOKS.md`, `VETOED_BOOKS.md` and `EXCLUDED_BOOKS.md`, with one new analysis per source. Unresolved identities and non-book references stay outside the three book ledgers.

Corrections include hard-excluding *Atomic Habits* under the instruction-book rule, rejecting rating counts that were actually review counts or belonged to bundles, and separating the complete *Last Lion* trilogy from its final volume. *The Origins of Efficiency* now displays 88.18 in both the ledger and site without changing its underlying score. *Almost Perfect* retains the verified 1994 original year instead of the inherited NaN display.

The 1994 origin for *Energy and Civilization* is retained after a fresh publisher check: the 2017 book is an expanded and updated *Energy in World History*. Selected edition year and original production year remain separate.

## Concerns for later review

| Priority | Concern | Current handling | Next review |
|---|---|---|---|
| High | Some Reddit replies and a cover image could not be retrieved; one submitted source was unavailable. | Each source analysis states capture coverage. Comment nominations are not presented as transcriptions of blocked images. | Revisit accessible source material and amend the existing source record. |
| High | Some nominations have ambiguous identities. | The [review queue](data/sources_261020/review-queue.json) records competing identities or insufficient attribution. No substitute title is invented. | Resolve the actual work before scoring. |
| High | Page counts are not established for every work and can differ by edition. | Each accepted extent identifies its edition. Partial series, audio counts and mismatched products are rejected. | Review the missing extents and catalog conflicts. |
| High | Most 20-domain profiles and all complete connection inventories remain incomplete. | Supported values have rationale, references and confidence. Unassessed values stay unknown. Co-occurrence alone does not establish a mechanism. | Use broader contents, samples or full text to assess the remaining domains and connections. |
| High | Partial connection evidence cannot establish an exact maximum over every mechanism in a book. | Individual domains can be filtered and scored; known mechanisms appear in details. `LINK`, `SPAN`, `ORDER` and `FIT` remain unknown until their required review is complete. | Consider explicitly labelled lower bounds in a later version. |
| Medium | Some historical endpoints and original years are approximate. | Each fresh judgment records its basis and confidence. Publication year is not used as a substitute for the topic endpoint. | Review the low-confidence dates listed in the queue. |
| Medium | Many Amazon rating aggregates remain unavailable. | Unknown remains null and uses the specified O15=0 fallback. Verified observations retain the actual retrieval date and one matching product. | Revisit unknown counts; update the canonical evidence and scores together. |
| Medium | Books Guru descriptions and edition dates can be wrong or incomplete. | New assessments use separate publisher, author, library, sample or review evidence. Original dates remain distinct from reprints and translations. Conflicting dates receive explicit confidence notes. | Revisit the dated evidence when a better bibliographic record becomes available. |
| Medium | Earlier titles in the Books Guru lists were deliberately not reassessed. | The user's batch-specific instruction preserves their scores, status and metadata. Identity matching retains all new source references. | Reassess those works only in a separately requested review or a later normal source analysis. |
| Low | One old analysis link points to an already absent file, `analysis_definitive_20261017T165524+0200.md`. | Earlier reports already record this absence. All available linked analyses are embedded recursively; no substitute history is invented. | Restore the original file if a valid archived copy becomes available. |
| Medium | Some speculation/hype and interpretation/doctrine boundaries remain uncertain. | Every one of the 355 prior vetoes has a new decision with confidence. Primary samples and full texts were checked for selected disputed cases; this is not a full rereading of every book. | Review the cited passages when challenging a gate; a label or affiliation is insufficient. |
| Medium | Existing recommendations outside the requested veto review retain their prior assessments. | The 2,591 previously recommended records are unchanged; earlier concerns such as the purpose of *Ultralearning* are not silently treated as resolved. | Review those records separately if further evidence changes their eligibility. |
| Low | The edited rules still say “both hard exclusions” and “either exclusion rule” despite listing three. | Apply all three explicit conditions and keep non-book references outside the book ledgers. Preserve the user's wording and record the amendment. | Align that prose in a later instruction revision. |
| Low | Improved ideal-book defaults are not agreed. | The existing repository evaluation is the initial model; domain targets require explicit user choices. | Version new defaults without overwriting saved custom models. |

## Implementation choices

- The matching, filtered, vetoed and excluded lists render every applicable row. There is no cap, pagination, virtualization or “Show next” control.
- Every variable offers raw and contribution columns. Original year, period end and baseline score are additional choices. Column settings persist and export.
- Current book details, category reasons and scoring inputs are embedded. Copying only `index.html` preserves the working application. Full historical analyses and raw captures remain repository files reached through online links.
- All scoring controls have numeric inputs. Caps and curves use explicit fields; arbitrary executable formulas are not accepted.
- Switching to a direct rate preserves the current linear contribution. A nonlinear curve uses normalized weight mode and previews the result.
- Advanced count bands and piecewise knots use a validated JSON editor.
- Pareto coordinates are not jittered. A point selector exposes overlapping books for touch and keyboard access.
- Local storage is best effort, especially under `file:` URLs. JSON export/import is the portable backup.
- The site has no runtime dependencies or background network calls. Playwright is only a development test dependency.
- The deliverable remains local. No hosting account or remote deployment was used.

## Verification

The publication preflight checks every input decision, eight gate findings, score bounds, ten criterion reasons, separate deductions, mutual exclusion of the ledgers, edition fields and supported connection participants. It checks canonical inputs against the saved baseline and the frozen collection. The Books Guru rules remain unchanged. The site build requires exact membership, displayed-score agreement and agreement with the reviewed rules.

The calculation and browser checks cover the full catalog, baseline equivalence, normalization, signed rates, caps, filters, Pareto ties, connection fixtures, local evidence references, settings and responsive layouts. The browser test copies only `index.html` to an isolated folder and blocks HTTP requests.

Earlier H3/V6 validation: 4,219 unique identities retained; 2,938 recommended, 205 vetoed and 1,076 excluded. All surviving existing scored parameters are unchanged. All 15 calculation/data tests pass. Offline Chromium checks pass at six widths, with no page errors or HTTP requests. The HTML is 3,599,827 bytes. See [category validation](data/category_review_261021/validation.json).

Earlier validation after the Books Guru publication (historical counts and packaging):

- All 15 calculation and data tests passed for 3,021 eligible works, 187 vetoed works and 1,011 hard exclusions.
- The source audit accounts for all 832 distinct nominated works: 462 prior works skipped and 370 new decisions. The 26 captures match their advertised counts.
- All 3,849 earlier book assessments, 2,192 metadata records, 65 historical analyses and the previous compiled catalog are preserved. Only source provenance changes on existing records.
- All 91 available analyses are embedded, including historical files cited by other analyses. The Sources page also embeds four pasted input documents. The one already absent historical reference is recorded separately.
- Offline Chromium tested an isolated copy of `index.html` with no page errors or HTTP requests. All six widths from 320 to 1,440 pixels passed; numeric heading/value alignment and compact widths passed. Desktop and phone screenshots were inspected.
- The validation record includes the tested HTML hash and browser results. All 263 new scored works use the documented unknown-rating fallback; 119 of the 245 new eligible works have edition page counts. Other metadata gaps remain explicit.

Earlier validation after the V4/V5 publication:

- All 15 calculation and data tests passed. Every displayed baseline score agrees with the ledger, and every initial model total agrees with the full-precision canonical assessment. Read-only list membership and vetoed scores match the existing ledgers exactly.
- Offline Chromium rendered the entire current recommended catalog from an isolated copy of the HTML, with zero page errors and zero HTTP requests. Exact counts are recorded in the validation file.
- Widths 320, 390, 768, 1,099, 1,100 and 1,440 CSS pixels had no page-wide horizontal overflow. Desktop and phone screenshots were also inspected.
- The calculation performance check evaluates 2,000 works over repeated model updates. This is a local measurement, not a physical-phone benchmark.
- Navigation, silent restoration of older settings, readable columns, automatic enabled-criterion columns, the top scrollbar, read-only lists and the embedded methodology passed browser checks. Custom scoring changes do not alter stored vetoed scores.
- SHA-256 checks confirm all 64 historical analyses and the prior compiled catalog remain unchanged. All 2,591 previously recommended and 903 previously excluded records remain exact. Decision-file hashes match the published review.
- Every one of the 355 prior vetoed books maps to exactly one current reviewed work. Each has numbered source attribution. All new assessment anchors exist, and all local decision references resolve.

Current browser output and screenshots are saved in `site/qa-output/`. The [Books Guru validation record](data/books_guru_261021/validation.json), [V4/V5 validation](data/veto_review_261021/validation.json), [H2/V5 validation](data/rule_review_261020/validation.json) and [source-integration validation](data/sources_261020/validation.json) remain historical.

Confidence is **high** in the tested arithmetic, ledger agreement and offline file independence. Book judgments retain their recorded **high**, **moderate** or **low** confidence.

Physical phones, mobile on-screen keyboards, Safari and Firefox are not verified by Chromium viewport checks. Implementation confidence and book-assessment confidence are separate: a passing calculation test does not resolve missing book evidence.

Priority review: [top-50 review](analysis/analysis_topreview_261021_1712.md) corrects two high-ranked assessments. The active snapshot is data/top_review_261021/compiled.json. The remaining top-50 rows are a review queue, not a completed full-text assessment. No additional Amazon counts were accepted from ambiguous indexed counters.
