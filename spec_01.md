# Book selection site — specification 01

Date: 2026-10-21, Europe/Warsaw. Revision: 13 — compact layout, equal icons, rating gap update and three successive Pareto boundaries.

Build a small, stand-alone site that loads the recommended book collection, lets the reader change filters and scoring rules, and explains the resulting order. Add an optional two-axis Pareto plot for comparing tradeoffs.

## 1. Scope and design decisions

The site serves one reader: a theoretical physicist with strong interests in mechanisms, quantification, technology, production, logistics, scaling, institutions, and strategic decisions. It must support rapid comparison without hiding the evidence behind a score.

| Decision | Specification | Confidence |
|---|---|---|
| Stand-alone delivery | One monolithic, dependency-free `docs/index.html` with embedded data, links to cited repository analyses, CSS, and JavaScript. The file works by itself when copied to another folder and opened locally, or when served by a static host. | High: explicit requirement. |
| Collection | Include each current work in `RECOMMENDED_BOOKS.md` once in the interactive Books view. Separate read-only views present the current veto and exclusion ledgers. | High: explicit requirement. |
| Book model | 44 numeric fields: 15 existing rules, 20 domains, source count, page count, reference pages, and six calculated measures of coverage and connection. A separate list of evidenced mechanisms preserves connections among any number of domains. | Moderate: proposed modeling design; definitions and arithmetic are explicit. |
| Initial ideal and ranking | Reproduce the current `RECOMMENDED_BOOKS.md` evaluation, including all 15 rules. New inputs have zero ranking weight, and no connection target is selected. Later defaults require an explicit replacement. | High: explicit requirement; arithmetic equivalence is specified below. |
| Normalization | Every criterion supports a bounded level in `[0,1]` or `[-1,1]`, shown as `[0,100]` or `[-100,100]`. A separate signed weight converts that level to score points. | High: explicit requirement. |
| Filtered books | Keep them in a separate muted list below the matching books. Both lists use the same current score. | High: explicit requirement. |
| Selection | A checkbox per book creates a local selection. Selection alone does not change its score or filter status. | Moderate: minimum useful interpretation of selection. |
| Pareto support | Include the feature, but keep its controls and plot off by default. Both axes can use any input. | High: implements the optional display. |
| Reference style | Use a compact, text-led catalog with search and expandable filters. Specific visual tokens below are proposed choices. | Moderate: interpretation of the reference. |
| Desktop and phone | The same data and operations, with controls above the desktop table, and phone control sheets and stacked book rows. | High: required scope; exact layout choices are proposals. |

The specification defines the model and how to assess it. The focused book investigation in section 4.7 informs the design; it does not establish complete new domain values, connection records, or page counts for the catalog.

Breadth alone is not a quality measure. The new model distinguishes a book that mentions many subjects, a book that connects several subjects through a mechanism, and a book that develops a larger explanation from linked mechanisms. The user defines the desired domain set; a narrow but coherent book need not be treated as a failed universal account.

Version 1 needs no server, account, database service, remote model, live retailer query, cover-image grid, or reading-progress system. Data preparation occurs before the HTML file is generated. Runtime calculations stay in the browser.

For the 26 Books Guru lists submitted on 2026-10-21, the user explicitly requests a batch exception: document and skip deeper analysis of every title covered by any previous source. Preserve its gate, quality vector, deductions and confidence; add distinct source provenance only. Resolve aliases and repeated nominations before assessing genuinely new works. Capture all pages and explicitly named books in recommendation quotations. Aggregator blurbs and counts need independent verification. Record the exception in the source analyses and embedded methodology; leave the normal future-source reassessment rule intact.

## 2. Reference, desktop layout, and phone layout

The reference is [Theoretical Physics Canon](https://ahrvoje.github.io/thphyscanon/), inspected on 2026-10-20. Its retrieved page has subject navigation, a search field, tier filters, optional tag and subject filters, and compact bibliographic entries. Use this catalog structure as the design reference. Do not import its book collection or its tier judgments.

The following visual choices are proposals, not claims about the reference's exact CSS. A rendered visual comparison with the reference remains an implementation check.

| Element | Proposed treatment |
|---|---|
| Page | Light paper background, dark text, one restrained blue accent, thin gray separators. |
| Type | System serif for titles and bibliographic text; system sans-serif for controls; tabular numerals for scores. No font download. |
| Density | Compact rows with enough spacing to track a title across columns. Avoid large cards and large empty areas. |
| Numeric columns | Right-align headings and values on the same edge. Use compact widths by value type; wrap readable names and put the contribution unit on a separate line. Derive column widths, minimum table width and the top scrollbar extent from the same width calculation. |
| Width | Center the content up to 1,440 CSS px. Support a 320 px viewport without page-wide horizontal scrolling. |
| Controls | Search and counts remain easy to reach. Group controls as Filter books, Adjust scoring, Define ideal book, and Pareto tradeoffs. Use distinct subtle pastel backgrounds and a 16×16 SVG icon for each button. Omit the decorative masthead labels, tagline, model heading and redundant matching-list heading. Titles are underlined dark navy links. Search the variable list by name or alias. |
| Matching rows | Full contrast, restrained score emphasis, visible selection checkbox. |
| Filtered rows | Muted gray text and a pale background. Keep titles and controls readable; do not reduce opacity on the whole interactive row. |
| Focus and hover | Clear focus outline. A focused or hovered muted row returns to full text contrast. |
| Small screens | Use the dedicated phone layout below. A desktop table compressed to phone width does not satisfy this specification. |

### 2.1 Desktop: viewport width at least 1,100 px

Keep all four configuration buttons above the results at every viewport width. Use one full-width results area, with dialog controls opened from the buttons. Sticky elements must not cover a focused control or row.

Use a semantic table with aligned score, year, source count, and page columns. Put the author after the title on the same line in smaller type. Allow long titles and authors to wrap. Keep selection and details controls separate from the purchase link. The default list emphasizes `TOTAL`.

The **Columns** panel controls which optional columns appear in both lists. Offer each of the 44 variables as a raw value and as its contribution to the current score. Also offer original publication year, central historical period end, and repository baseline. Use readable names such as “Amazon ratings”; aliases belong in the variable editor. Label contributions as points so they cannot be mistaken for raw attainment. Default to Year → Pages → Amazon ratings → Sources only. Details stays last. Scoring changes do not add columns; manual column choices switch to a custom selection. Provide default, quality-contribution and recency presets. Column choices persist and round-trip with model settings; they never change scoring or filtering. Wide tables have horizontal scrolling accessible above the rows; phone rows show the selected labelled facts.

### Library navigation and methodology

Top navigation links switch between Books, Vetoed, Excluded, Sources and Methodology within the same monolithic HTML. Vetoed shows every current vetoed work in saved ledger order, with its stored counterfactual score, year, edition page count, rule, confidence, sources and embedded reason. Page counts link to edition evidence and appear in phone rows and Details. Unknown counts stay unknown. Excluded shows every hard-excluded work alphabetically, without scores. Reference views contain no filtering, scoring, selection or model controls. Changing the Books model cannot change their contents or scores. Import existing records only; these interface changes perform no new book research or assessment.

Sources shows every registered entry from `SOURCES.md`, ordered by source number, without pagination. Include the number, date added, source label and link, and the linked stored analysis. Keep full source inputs and historical analyses in the repository and link to them online. Embed current book details, category reasons and scoring inputs offline. Use lossless gzip/base64 for the dataset and enforce an HTML limit of 1,500 bytes per recommended or vetoed book. External source links open in a new tab. Use aligned columns on desktop and stacked labelled entries on phones. `#sources` is a direct, reloadable route within the HTML.

The generated HTML must work on a static host under a project path such as `/books/`, without server routing or runtime dependencies. Build directly into `docs/`, with `index.html` and `.nojekyll` as its only required files. Do not retain a second root HTML. Use the same output location for preview and verification, and document GitHub Pages configuration as branch `main`, folder `/docs`. Hosting preparation does not itself publish the repository.

Methodology explains source capture, identity resolution, reassessment, hard exclusions, vetoes, all scoring criteria and deductions, date/count evidence, uncertainty, domains, connections and custom controls. Include the exact current `AGENTS.md` instructions at build time so the complete rules are available offline. Links and browser history must work on desktop and phone.

H3 excludes books whose main purpose is technical training, proofs, derivations, procedures or specialist reference, including historical technical treatises. Narrative passages alone do not override that purpose. Explanatory histories, surveys and annotated chronologies may qualify when they explain discoveries and systems without requiring course study. V6 excludes dominant partisan recruitment, allegiance-building and campaign attacks; a political view, criticism or proposed reform alone is insufficient. H3 precedes vetoes.

The [category review](analysis/analysis_categories_261021_1600.md) screens all 4,219 current works, with targeted purpose and mobilization checks. Current totals are 2,938 recommended, 205 vetoed and 1,076 excluded. Existing scores and parameters remain unchanged; two previously unscored admissions receive first baselines. Earlier analyses remain history.

Embed all hard exclusions and vetoes 4–6 directly from AGENTS.md by rule name. Reject builds when the reviewed rules hash differs from AGENTS.md.

Restore compatible saved settings and known selections silently when the catalog hash changes. Do not display a catalog-change warning on restore or import. Preserve validation messages for genuinely invalid settings. Migrate the former default Year/Sources/Pages column selection to the new automatic default; preserve custom selections.

Render every search-matching book across the matching and filtered sections. No pagination, row cap, virtualization, or “show more” control is permitted. A filter moves a book to the lower section without removing it from the page. Search may narrow both sections.

Control rows initially show the variable name, filter state, and scoring state. Expand a row to set raw bounds, normalized range, curve, and signed weight. Show normalized levels on a 0–100 or −100–100 scale, while bounds retain native units such as pages or years. A direct points-per-unit editor is available for linear terms. Show a small preview of raw value → normalized level → contribution in points. Advanced settings must not require a wide spreadsheet of tiny inputs. Group variables into the 15 rules, 20 domains, six connection measures, and length/source count. Display the current group size and the number of active settings.

### 2.2 Intermediate widths: 768–1,099 px

Use a single content column. The four control buttons open a panel above the results. Keep only one panel open at a time. Use the compact table while it fits; switch to stacked book rows when text or enlarged fonts require it. Collapse no feature merely because the viewport is narrower than desktop.

### 2.3 Phone: viewport width below 768 px

Use one column with 12–16 px side margins. The top area contains the title, search, counts, and a two-by-two group of control buttons. Active filters wrap beneath it; never put required controls in a horizontally scrolling strip.

```text
Book selection                       Selected 3
Search titles or authors…
Matching …  Filtered …
[Filters (3)]   [Scoring]
[Ideal book]    [Pareto]
Active: Pages ≤500; Energy ≥3; +1

Optional plot — tap a dot for details

Matching books — count
□  Book title, allowed to wrap             86.88
   Author · original year
   3 sources · 420 pages · Details
   Optional: connected 7/9 desired domains
------------------------------------------------
…
Filtered books — count
… same stacked rows, muted; short failure reason
```

The numbers above illustrate layout only. They do not assert page counts or connection assessments for a real book.

Each book is a compact stacked row. Put the author after the title, wrapping only as needed. Keep score and selection easy to scan. The optional desktop columns appear as labelled values below the title on phones. Do not truncate the only title or hide selected facts in hover text. Unknown values show an em dash with their reason in details; a non-period account shows `n/a` for period end. A details dialog provides the full assessment. Both complete lists stay in the document, with filtered books below matching books.

Tapping a control button opens a full-height sheet with a title, a scrollable body, and visible Cancel/Apply controls. Show one variable editor per vertical block. Every field has a persistent label and unit; a slider is optional, and a numeric input is always available. Use at least 16 px input text and 44 × 44 px targets for ordinary controls. The sheet must adapt to the on-screen keyboard and safe-area insets, keep the focused input and Apply reachable, and prevent background scrolling. Closing restores focus to the opening button.

The Ideal book sheet initially shows “Current repository evaluation” and the 15-rule model from section 5.3. Editing a rule here edits the same state as Scoring; there is no second, conflicting quality model. An optional “Domain connections” section starts with “No target configured.” When enabled, use a wrapping domain selector and a searchable list of all 20 domains, with depth and importance for each selection. Select all domains is an explicit action. Clearing a target is a valid operation with the dependent-setting behavior in section 6.3. No 20-column matrix or 190-cell pair grid is required.

### 2.4 Shared editing and result behavior

Panels edit a draft. Valid changes update a compact preview of matching count and model summary, debounced by about 150 ms; Apply commits the draft and updates both lists and the plot together. Cancel discards the draft. Invalid fields show an inline message and block Apply. Search and book-selection checkboxes act immediately. A device resize preserves the draft, active field values, applied model, selection, and open book details.

Use the same model state and evaluator on every viewport. Changing layout must not change defaults, arithmetic, filters, or result order. After applying a filter, preserve a visible surviving row as the scroll anchor when possible; otherwise move to the result summary. Do not move keyboard focus into a reordered list automatically.

All controls work by keyboard. Labels and focus outlines remain visible. Normal text, including muted book text, must have contrast of at least 4.5:1 against its background. Use text and markers as well as color to distinguish filtered, missing, and selected states. At 200% zoom, switch layouts as needed rather than clip controls or book text.

### 2.5 Plot and details on both layouts

The optional plot spans the results column on desktop and the content width on phone, with a proposed height of 320–420 px on desktop and 280–360 px on phone. Axis controls stack vertically on phone. Put the legend below the plot; label both axis units and objectives. Reflow labels rather than shrink them to unreadable size.

Desktop supports hover and keyboard focus. Phone supports tap-to-select, with a persistent concise tooltip below the plot and a close control. Coordinate clusters open a title list; closely spaced targets must also be selectable through that list. The table/list remains the complete accessible alternative. Do not require pinch zoom, precise tapping of a tiny dot, or hover to read a score.

Book details show base/current scores, raw values, normalized levels, curves, signed contributions, confidence, missing inputs, page edition, source and analysis links, and reader-rating snapshots. When a connection target is configured, its section shows the domains covered, missing or shallow domains, and the mechanism records and joins that support the best connected explanation. A text chain with named steps is sufficient; a force-directed network diagram is not required.

## 3. Repository inputs and eligibility

### 3.1 Inputs inspected for this specification

| Repository input | Role |
|---|---|
| [AGENTS.md](AGENTS.md) | Existing eligibility and scoring contracts. |
| [RECOMMENDED_BOOKS.md](RECOMMENDED_BOOKS.md) | Membership, entry date, title, author, first year, displayed score, purchase link, and contributing source IDs. Derive the current count from this ledger. |
| [SOURCES.md](SOURCES.md) | Source identities and links to analysis history. |
| [VETOED_BOOKS.md](VETOED_BOOKS.md) and [EXCLUDED_BOOKS.md](EXCLUDED_BOOKS.md) | Checks that no ineligible work enters the interactive ranked collection; supplies the separate read-only lists. |
| [data/catalog.json](data/catalog.json) | Pointer to the active compiled candidate data. Its target's `currentBooks` contains both recommended and vetoed records; membership must be checked against the current ledgers. Earlier compiled snapshots remain history. |
| [data/single_scores_261018.json](data/single_scores_261018.json) | Earlier named raw criteria, contributions, deductions, and provenance. Use only when still applicable to the current assessment. |
| [analysis/](analysis/) | Evidence, explanations, and revisions. |

Some existing records contain historical fields such as an earlier `unroundedTotal` beside a later `total`. An importer must identify the current assessment and formula explicitly. It must not select a numeric field merely because its name looks suitable.

The inspected compiled records also store `T11` and `T12` as signed deductions, 0 or −10, rather than the 0/1 flags used by this specification. Convert verified deduction 0 to flag 0 and −10 to flag 1. Do not multiply the stored −10 by −10. Some records lack `displayScore`; recompute their display from the current assessment and check the ledger. Ages must come from the documented dates/scope, not by reversing a capped deduction.

One display discrepancy was found during initial specification verification: *The Origins of Efficiency* has unrounded compiled total 88.175, but the old recommendation ledger displayed 88.17. Decimal rounding under section 5.2 gives 88.18. The source-batch publisher corrects the displayed value without changing any criterion or normalization. The site and publisher share the same display formatter.

### 3.2 Membership contract

1. Use a stable work ID. Retain existing IDs where possible and use an explicit alias map for identity corrections. Do not join on title alone.
2. Reconcile every recommended row to exactly one work record and its latest applicable assessment.
3. Check that the work appears in neither the vetoed nor the excluded ledger. A conflict is a data-build error to resolve, not a runtime filter.
4. Preserve all contributing source IDs and analysis references.
5. Include low-scoring recommended works. A score threshold is a user filter, not a new eligibility rule.
6. Filters and weights cannot restore vetoed or hard-excluded works. The lower list contains recommended works that failed user filters, not vetoed works.
7. Read-only vetoed and excluded views exactly reproduce their current ledger membership. Vetoed scores are stored counterfactual values; excluded works have no score. Neither enters custom evaluation or Pareto dominance.

The site does not edit these ledgers. Changes to canonical assessments require the repository review process and a new data build.

## 4. The 44-field model and its connection evidence

### 4.1 Common rules

Store named fields, not an unlabelled array. There are 37 source inputs and six derived fields. Mechanisms and joins are evidence records outside this scalar vector; six numbers alone cannot preserve their structure. The order below is for display and export. Short aliases are stable, case-sensitive identifiers. Preserve the legacy meanings of `S` for systems integration and `M` for causal depth.

Each source input has a numeric `value` or `null`, a confidence of `high`, `moderate`, `low`, or `unknown`, a short rationale, and evidence references. Zero means an assessed zero. `null` means unknown. Known but low-confidence estimates remain single values; do not turn them into invented precision or score ranges.

Raw inputs, normalized levels, and calculated point contributions are different objects. For example, `E = 18` is an assessment, its default normalized level is `n_E = 0.90` (shown as 90/100), and its quadratic contribution is `c_E = 16.20` points. The prefixes `n_` and `c_` denote results under the active ranking model, not additional vector inputs. Normalization never overwrites the assessment.

### 4.2 Inputs 1–15: existing scoring rules

For rules 1–10, retain the linear attainment before the quadratic profile. For rules 11–15, retain the underlying flag, age, or count so the transformation can be changed without trying to reverse a deduction.

`RY` is the profile's explicit review year. It initially equals the reviewed dataset year, currently 2026. It does not change silently with the device clock. The read-only `BASE` always uses the dataset's review year; an edited review year belongs to the custom model and its age inputs.

| # | Alias | Name and definition | Native value | Default point contribution |
|---:|---|---|---|---|
| 1 | `E` | Evidence and inferential integrity: reliable facts, sources, valid inference, stated uncertainty, and treatment of counterevidence. | 0–20 | `E² / 20` |
| 2 | `S` | Systems integration: coherent links between science, engineering, production, trade, finance, institutions, geography, military power, or culture. | 0–17 | `S² / 17` |
| 3 | `U` | Transferable strategic utility: reusable mechanisms, models, constraints, or lessons across cases. | 0–15 | `U` |
| 4 | `M` | Mechanistic and causal depth: explains incentives, feedback, bottlenecks, failure modes, and causal chains. | 0–12 | `M` |
| 5 | `D` | Information density and length justification: chapters earn their space through evidence, mechanism, or interpretation. | 0–10 | `D² / 10` |
| 6 | `R` | Durability: useful beyond current personalities, disputes, news cycles, and hype. | 0–9 | `R` |
| 7 | `F` | Direct domain fit: extent of substantive coverage of the reader's desired scientific, industrial, and strategic domains. | 0–7 | `F` |
| 8 | `A` | Expert authority and intellectual standing: scholarship, practice, access, and serious specialist scrutiny. | 0–5 | `A` |
| 9 | `N` | Narrative architecture and clarity: cumulative, readable, memorable structure without false certainty. | 0–3 | `N` |
| 10 | `P` | Authorial precision and finesse: exact, controlled, disciplined prose. | 0–2 | `P` |
| 11 | `T11` | Unwanted-theme flag: predominant racial/civil-movement history, ecology/environment, urban history, political/media personality, US-focused narrative and influence, American tragedy, single-nation history, or disease. Apply the repository classification as written. | 0 or 1 | `-10 × T11` |
| 12 | `T12` | Auxiliary-domain-as-central-topic flag: central war, military doctrine, politics/intelligence, finance, media, power, or philosophy. Incidental application of these topics does not trigger it. | 0 or 1 | `-10 × T12` |
| 13 | `H13` | Age in years of the end of the central historical period: `max(0, RY - periodEndYear)`. Explicitly timeless or broad cross-period works have value 0. | Nonnegative years | `-min(12, H13 / 25)` |
| 14 | `P14` | Original publication/composition age: `max(0, RY - originalYear)`. A series uses its first volume's original year. | Nonnegative years | `-min(10, P14 / 10)` |
| 15 | `O15` | Total Amazon ratings on one verified matching product, with a recorded marketplace and snapshot. This is a count, not the average stars or the written-review count. | Nonnegative integer or unknown | `<10: -20; 10–99: -10; 100–999: -5; ≥1000: 0; unknown: 0 with fallback label` |

Rule 11 can trigger at most once; rule 12 can trigger at most once. They are independent and can sum to -20. Several themes within either rule do not multiply its deduction.

Historical scope must be recorded as `period`, `timeless`, `cross_period`, or `unknown`. Only the two explicit non-period states produce `H13 = 0` without an endpoint. Unknown scope or an unknown required endpoint is not timeless. Resolve it before declaring the baseline import complete. Store endpoint confidence separately.

Translations, reprints, and later editions do not reset `P14`. Approximate ancient composition years are allowed when documented. Use one consistent signed-year convention, record it in the data schema, and use it in both import and scoring. Default: astronomical year numbering; 1 BCE is 0, 2 BCE is -1.

`O15` needs marketplace, product ID, URL, retrieval date, title/author identity check, and snapshot limitations. Do not add ratings across editions or markets. An unavailable count stays `null`; only its default contribution receives the required zero fallback.

### 4.3 Inputs 16–35: twenty domains of interest

Use an integer 0–4 scale. The score measures substantive explanatory coverage for this reader. It does not measure agreement with the author or repeat the evidence-quality score.

| Value | Assessment anchor |
|---:|---|
| 0 | Absent, or mentioned without a useful explanation. |
| 1 | Minor treatment with at least one concrete explanatory point. |
| 2 | A substantial section or repeated treatment with a clear mechanism. |
| 3 | A major explanatory thread with several mechanisms or constraints. |
| 4 | A central, sustained account of the domain with reusable explanations and boundary conditions. |

Several domains may receive 4. This is not a percentage allocation across a book. Apply these anchors to contents, structure, samples, and prior evidence; title keywords do not establish depth. Elementary physics exposition need not have high value for this expert reader.

| # | Alias | Domain | Definition and boundary |
|---:|---|---|---|
| 16 | `SCI` | Science and physical principles | Discovery, scientific explanations, physical limits, and the use of scientific knowledge. Includes physics; distinguish scientific content from research organization in `INS` and `INN`. |
| 17 | `QNT` | Mathematics, models, and uncertainty | Mathematical structure, quantitative estimation, model assumptions, probability, risk, sensitivity, and comparison with observations. |
| 18 | `CMP` | Computing and information | Algorithms, software, numerical simulation, information processing, computer architecture, and their practical effects. |
| 19 | `HTC` | High technology | Advanced capabilities and platforms: semiconductors, aerospace, nuclear technology, photonics, advanced instruments, and comparable systems. Score explained capabilities and constraints, not the label “high tech.” |
| 20 | `ENG` | Engineering and design | Feasibility, design choices, integration, testing, and technical tradeoffs that turn ideas into working systems. General design depth differs from the advanced platform in `HTC`. |
| 21 | `ENE` | Energy and useful power | Generation, conversion, storage, distribution, fuel supply, power density, efficiency, and energy constraints on other activities. Independent of materials and military power. |
| 22 | `MAT` | Materials and resources | Material properties, extraction, processing, substitution, scarcity, resource allocation, and dependence on essential inputs. |
| 23 | `PRD` | Production and industrialization | Manufacturing processes, industrial organization, capacity, throughput, productivity, and repeatable output. |
| 24 | `QLT` | Quality, reliability, and precision | Metrology, tolerances, variation, failure analysis, maintenance, error control, and dependable performance. |
| 25 | `LOG` | Logistics and infrastructure | Transport, distribution, inventory, physical networks, infrastructure capacity, and coordination of flows. |
| 26 | `TRD` | Trade and globalization | Specialization, international exchange, supply dependence, market access, trade barriers, and cross-border production. Distinct from physical movement in `LOG`. |
| 27 | `SCL` | Scaling and technological leverage | Miniaturization, speed, power, throughput, network scale, global reach, and changes in constraints with scale. |
| 28 | `INN` | Innovation and improvement | Invention, experimentation, diffusion, learning curves, research practice, cumulative improvement, and the use of knowledge. |
| 29 | `INS` | Institutions and organization | Incentives, ownership, standards, contracts, firms, research organizations, and coordination. Dry administrative description earns little. |
| 30 | `ECO` | Economics and prosperity | Prices, allocation, productivity, economic development, growth, and material living standards. Funding and financial instruments belong specifically in `FIN`. |
| 31 | `FIN` | Finance and capital | Funding, investment, credit, working capital, financial risk, capital markets, and allocation of capital. Presence does not imply investment advice or merit. |
| 32 | `POL` | Politics, policy, and state capacity | Public decisions, regulation, procurement policy, political institutions, diplomacy, and mobilization of state resources. Distinct from general institutional design and strategic reasoning. |
| 33 | `MIL` | Military capability and operations | Weapons, force structure, doctrine, operational constraints, military organization, procurement, sustainment, and conversion of resources into military capability. |
| 34 | `STR` | Strategy and geostrategy | Choices under competition, dependence, deterrence, geographic constraints, adversarial adaptation, and strategic risk. Applies to firms and states; not a synonym for war. |
| 35 | `HEU` | Decision heuristics and practical reasoning | Economical reasoning, useful abstractions, robust decisions, and memorable cases that support general principles. Includes practical philosophy with a clear intellectual payload. |

The domains overlap where the underlying systems overlap. A semiconductor book does not automatically receive high `SCI`, `CMP`, `HTC`, `ENG`, and `PRD` values: it must explain each. Likewise, naming a war does not establish military, political, and strategic depth. Default ranking weights are zero, and domain presence never cancels `T11` or `T12`.

### 4.4 Connection evidence: mechanisms instead of a fixed pair matrix

Use a sparse set of **mechanism records**. Each record describes one supported explanation involving any subset of 2–20 domains. In mathematical terms, this is a hyperedge: a connection may have more than two participants. The interface calls it a mechanism.

A record needs a stable ID, participant domain IDs, a concise mechanism statement, and the role of each participant: input, constraint, decision, consequence, or feedback. It also records case/system/period boundaries, chapter/section/page locators where available, evidence references, strength from 1 to 4, and separate high/moderate/low confidence.

| Strength | Required explanation |
|---:|---|
| 1 | A specific connection is stated, but its intermediate steps or limits are weakly developed. |
| 2 | A causal or constraint mechanism is developed with identifiable steps. |
| 3 | The mechanism includes important constraints, tradeoffs, or feedback, with supporting evidence. |
| 4 | A sustained explanation connects the participants, tests or bounds the claims, and makes the important conditions and failure modes clear. |

Every participant must have a known positive domain value and a specific role. A broad chapter title or claim about “everything being connected” is insufficient. Keep the smallest complete explanation supported by the evidence. Split unrelated cases; do not merge them into an eight-domain record merely to raise its size. Preserve a genuine joint mechanism rather than replace it with all possible pairs.

A synthetic joint mechanism is: a deployable aircraft design is feasible only when material properties, useful power, manufacturing tolerances, fuel supply, procurement funding, and mission requirements are compatible. A record could involve `ENG, MAT, ENE, QLT, LOG, FIN, MIL` if the book explains their joint constraint on that outcome. This is not an assessment of a particular book. Merely compressing a sequence of independent links into one sentence does not establish a joint mechanism or raise `ORDER`; represent that sequence with records and joins.

**Joining mechanisms.** Two records form a larger explanation only through an explicit, evidenced **join**. A join identifies both record IDs, the concrete shared quantity/process/decision, compatible scope, an explanation of the handoff or feedback, strength 1–4, confidence, and evidence. For example, the same plant's output in one mechanism supplies the deployed system in another. A shared label such as `FIN` is not a join. Financing an unrelated railway and war does not make them one system.

| Structure | Representation | What it establishes |
|---|---|---|
| Several topics without developed links | Domain values only | Coverage, with no connection credit. |
| One mechanism involving four, five, or eight domains | One record with that participant set | A joint explanation; it does not assert that every pair is directly connected. |
| Mechanisms joined into a larger explanation | Records plus explicit joins | Connected reasoning across the combined domains; it does not prove a direct causal relation between every endpoint. |

Store only evidenced mechanisms and joins. Start with the principal mechanisms and add records when needed to represent distinct explanations. There is no fixed requirement for ten records and no reward for record count. Do not enumerate 190 pairs or all subsets of 20 domains. Repeated statements or evidence do not increase a score.

Structural validation checks fields, IDs, ranges, and dependencies. Deciding whether a claim is supported, whether all participants have real roles, and whether a join is justified requires evidence review. Do not present schema validity as factual verification.

Each book has `connectionReview.status = unreviewed | partial | complete`, plus inspected material and limitations. Complete means the declared evidence review is finished, not a claim to have read every page. An empty completed review means no qualifying connection was found. A partial or unreviewed set is unknown for final connection scores, not evidence of no connections.

### 4.5 Inputs 36–38: source count, page count and reference pages

| # | Alias | Value and definition | Evidence and limitations |
|---:|---|---|---|
| 36 | `SRC` | Number of distinct contributing source IDs for the work in `SOURCES.md`; integer ≥1 for this collection. | Deduplicate IDs. Repeated comments, mentions, or editions within one source do not increase it. This measures recorded exposure, not independent evidence of quality. |
| 37 | `PG` | Number of pages in one identified reading edition; positive integer or unknown. | Record ISBN or another edition ID, language, format, edition year, provider URL, and retrieval date. Prefer the linked paperback; otherwise identify the actual edition used. |
| 38 | `RP` | Distinct pages in documented reference, bibliography, source-note or endnote sections; non-negative integer or unknown. | Store the edition, source, retrieval date, inclusive ranges or contents boundaries, and confidence. Exclude indexes, acknowledgments, glossaries, inline citations and online supplements. Unlisted sections can remain outside the documented count. Missing is not zero. |

Count all sources that the repository records as contributing to the work. Do not relabel them as independent endorsements. A wider source count may help discovery, but has zero weight in the default quality score.

For a nominated multi-volume series, `PG` is the sum for the complete nominated set, using a documented compatible edition set. If only some volume lengths are known, `PG` is unknown. A single nominated volume uses that volume's length. Do not use ebook location counts, audiobook minutes, or a guessed average as page counts.

`RP` is an optional extent variable, not a quality judgment or citation count. Contents boundaries can include a final blank page. Do not divide it by `PG` unless both use the same edition. Catalogued ranges and contents boundaries normally support moderate confidence. Preserve scores and gates when collecting this metadata; its default weight is zero. Every current recommended and vetoed work must have an `RP` record, including explicit unknowns. Collection proceeds through recommended books in descending score order, then vetoed books. Use cached evidence before new retrieval, and retain unresolved cases after bounded attempts.

### 4.6 Fields 39–44: derived measures for an optional connection target

These six fields are calculated from the book evidence and an optional **connection target**, not assessed as six more subjective grades. The initial ideal-book model is the existing repository evaluation in section 5.3. Connection measures extend it only when the user configures a target and chooses how to use the results. Every field can then be filtered, transformed for ranking, or used on either Pareto axis.

The initial state is `connectionTarget = null`. Show “Not configured” for these six fields, rather than zero or missing book evidence. Keep the fields discoverable, but require a valid target before applying a dependent filter, score term, or axis. An optional target specifies:

- Target set `T`: 2–20 selected domains. A single-domain search uses its ordinary domain filter.
- Desired depth `r_i`: integer 1–4 for each selected domain.
- Importance `w_i`: integer 1–5 for each selected domain. Each target retains a positive weight.
- Minimum connection strength `tau`: integer 1–4.
- Minimum connection confidence: high, moderate, or low. This threshold applies to mechanisms and joins. Do not convert confidence labels to invented numerical probabilities.

Require these choices in the target editor; no proposed domain combination or threshold is an initial ideal-book preference. The synthetic fixtures below provide explicit test configurations, not defaults.

For known domain depth `d_i`, define `a_i = min(1, d_i/r_i)` and `W = sum(w_i for i in T)`. Meeting the desired depth earns full coverage credit; extra depth cannot compensate for a missing required domain. Changing the profile changes these fields for all books, but does not change book assessments or `BASE`.

Calculate connected coverage as follows:

1. For each level `l` from `tau` through 4, retain mechanisms and joins with strength at least `l` and confidence meeting the profile threshold.
2. Use a join only if both referenced mechanisms remain. Build connected components of mechanism records using explicit joins. An isolated mechanism is a component by itself. A shared domain label never creates an implicit join.
3. For each component `C`, take the union of its records' domains. Count each target once. Non-target domains may be evidenced bridges, but receive no coverage weight.
4. Define `coverage(C) = sum(w_i × a_i for selected domains i in C) / W`. A component must contain at least two selected domains with positive depth to earn connection credit.
5. Define `LINK = 100 × max((l/4) × coverage(C))` across these levels and qualifying components. If a complete review yields none, use 0. Select the strongest connected coverage; do not sum overlapping stories.

| # | Alias | Name | Definition and range |
|---:|---|---|---|
| 39 | `COV` | Target coverage | `100 × sum(w_i × a_i) / W`; 0–100. Rewards relevant depth, whether connected or not. |
| 40 | `FLOOR` | Weakest target coverage | `100 × min(a_i for i in T)`; 0–100. Missing or shallow targets cannot be concealed by strong other topics. |
| 41 | `LINK` | Connected target strength | Strongest confidence-qualified connected coverage from the algorithm above; 0–100. Includes domain depth and connection strength. |
| 42 | `SPAN` | Domains in one connected explanation | At level `tau`, the largest number of selected domains meeting their desired depths in a qualifying component; 0–the size of `T`. |
| 43 | `ORDER` | Domains in one joint mechanism | At level `tau`, the largest number of selected domains meeting their desired depths in one accepted mechanism record; 0–the size of `T`. Distinguishes a joint explanation from a longer chain. |
| 44 | `FIT` | Integrated connection fit | `LINK × (0.5 + 0.5 × FLOOR/100)`; 0–100. A missing required domain halves connected-coverage credit; complete depth coverage applies no reduction. |

For `SPAN` and `ORDER`, a component/record must contain at least two selected domains with positive depth, as for `LINK`. The count meeting desired depth can then be 0, 1, or more. Invariants: `ORDER ≤ SPAN ≤ size(T)`, `LINK ≤ COV`, and `FIT ≤ LINK`. Counts remain native counts; their initial normalization, once a target is configured, divides by `size(T)`.

`FIT` is a preference rule, not a validated measure of book quality. The factor 0.5 is a proposed policy: it penalizes omissions without setting every partial match to zero. Confidence in this choice is moderate. Stronger requirements belong in filters. Do not add `COV`, `LINK`, and `FIT` together by default: they overlap by construction.

The algorithm needs at most four passes over stored records and joins. It does not search every domain subset. Direct component traversal is sufficient for a small record set. Preserve the winning component and strength level so the interface can explain the score. Break equal values by higher level, then stable sorted record IDs. Documented feedback may form cycles; traversal must handle them without double-counting.

**Exact matching.** Provide three named filter modes:

| Mode | Condition | Meaning |
|---|---|---|
| Covers every desired domain | `FLOOR = 100` | Every selected topic meets the requested depth. No connection is implied. |
| Connects every desired domain | `FLOOR = 100` and `SPAN = size(T)` | One supported explanation, possibly made of joined mechanisms, contains all targets at the chosen thresholds. |
| One joint mechanism includes every desired domain | `FLOOR = 100` and `ORDER = size(T)` | All targets participate in one mechanism, with the evidence requirement in section 4.4. |

Selecting all 20 domains tests a universal target without creating a pair matrix. A maximum `FIT=100` additionally requires strength-4 connected coverage of the complete target. If nothing qualifies, show “No documented match for this profile” and the unassessed count. Do not claim no such book exists. Ordinary filters such as `E ≥ 16` or `BASE ≥ 75` keep evidence quality separate from topical fit.

**Unknowns.** If any selected domain is unknown, all six target measures are unknown. If selected depths are known but the connection review is partial/unreviewed, `COV` and `FLOOR` are available while `LINK`, `SPAN`, `ORDER`, and `FIT` are unknown. Use section 5.4 for missing values. Confidence of an available derived measure cannot exceed the least-confident assessment used to support it. Display its evidence and profile thresholds.

**Synthetic comparison.** Eight equally weighted target domains, desired depth 3, minimum strength 2, and accepted confidence. These are fixtures, not book ratings.

| Evidence structure | COV | FLOOR | LINK | SPAN | ORDER | FIT |
|---|---:|---:|---:|---:|---:|---:|
| All eight reach depth 3; no mechanisms after a complete review | 100.00 | 100.00 | 0.00 | 0 | 0 | 0.00 |
| Same coverage; four separate strength-4 pair mechanisms | 100.00 | 100.00 | 25.00 | 2 | 2 | 25.00 |
| Same coverage; a chain of pair mechanisms at strength 4, all joins at strength 3 | 100.00 | 100.00 | 75.00 | 8 | 2 | 75.00 |
| Same coverage; one supported strength-4 eight-domain mechanism | 100.00 | 100.00 | 100.00 | 8 | 8 | 100.00 |
| Six domains reach depth 3 in one strength-4 mechanism; two are assessed absent | 75.00 | 0.00 | 75.00 | 6 | 6 | 37.50 |
| All eight reach only depth 2 in one strength-4 mechanism | 66.67 | 66.67 | 66.67 | 0 | 0 | 55.56 |

These cases distinguish topic breadth, disconnected local links, a connected chain, and a joint mechanism. Repeating a record or its evidence changes none of the values.

### 4.7 Investigation of existing recommended books

A focused design sample of twelve existing recommended works was checked against current compiled assessments, cited prior analyses, and the primary scope sources below on 2026-10-20. This is a purposive sample of explanatory structures, not an exhaustive catalog analysis. Publisher descriptions establish scope, not independent proof of a book's claims.

The domain sets and structures are **candidate encodings inferred from that evidence**, with moderate confidence. They identify what to inspect during detailed coding. They are not completed connection-strength assessments, claims that each topic reaches depth 3, or new scores. This investigation changes no ledger score.

| Existing book; contributing sources | Candidate domains and structure | Design lesson and evidence |
|---|---|---|
| **Chip War** — Chris Miller; 8, 11, 12 | `HTC, CMP, ENG, PRD, TRD, POL, MIL, STR`: semiconductor production and supply dependence connect technical capacity to state and military power. | Separate technology, production, policy, and military capability. Expect linked mechanisms, not an automatic eight-way claim. [Prior analysis](analysis/analysis_physcanon_261018_0147.md#p072); [publisher](https://www.simonandschuster.com/books/Chip-War/Chris-Miller/9781982172015). |
| **Skunk Works** — Ben R. Rich and Leo Janos; 11, 116 | `HTC, ENG, QLT, INN, INS, MIL, STR`: mission requirements, design, testing, team autonomy, and procurement. | A project-centered explanation differs from broad coverage. Keep insider evidence limits visible. [Prior analysis](analysis/analysis_pastefollow_261018_0130.md#f056); [publisher](https://www.hachettebookgroup.com/titles/ben-r-rich/skunk-works/9780316246934/). |
| **The Making of the Atomic Bomb** — Richard Rhodes; 1, 6, 7, 8, 11, 12, 122 | `SCI, ENG, ENE, MAT, PRD, INS, POL, MIL`: discovery, industrial conversion, organized research, and weapons development. | Preserve the science-to-production program as a linked system; test its handoffs. [Prior analysis](analysis/analysis_physcanon_261018_0147.md#p052); [publisher](https://www.simonandschuster.com/books/The-Making-of-the-Atomic-Bomb/Richard-Rhodes/9781451677614). |
| **The Prize** — Daniel Yergin; 7, 8, 9, 11, 12, 120 | `ENE, MAT, FIN, LOG, ECO, POL, MIL, STR`: oil supply, capital, transport, public decisions, and military dependence. | Different episodes need evidence to join; the shared word “oil” is insufficient. [Prior analysis](analysis/analysis_physcanon_261018_0147.md#p060); [publisher](https://www.simonandschuster.com/books/The-Prize/Daniel-Yergin/9781439110126). |
| **Energy and Civilization** — Vaclav Smil; 10, 11, 112, 118 | `ENE, SCI, ENG, PRD, LOG, ECO, MIL`: energy conversion constrains several activities across eras. | A shared physical constraint can organize many domains; cross-era joins need a supported general argument. [Prior reassessment](analysis/analysis_tactical92_261018_2302.md); [publisher](https://mitpress.mit.edu/9780262536165/energy-and-civilization/). |
| **Material World** — Ed Conway; 8, 9, 11, 12, 110 | `MAT, ENE, ENG, PRD, LOG, TRD, HTC`: material transformation and specialized production networks. | Several supply chains remain separate unless their mechanisms are connected in the book. [Prior analysis](analysis/analysis_tactical92_261018_2302.md#material); [publisher excerpt](https://penguinrandomhousehighereducation.com/2023/11/16/excerpt-from-material-world/). |
| **The Box** — Marc Levinson; 10, 11, 115 | `ENG, LOG, TRD, FIN, INS, ECO`: standards, complementary infrastructure investment, labor coordination, and transport costs. | Joint complementary constraints disappear when reduced to isolated pair grades. [Prior analysis](analysis/analysis_pastefollow_261018_0130.md#f045); [publisher chapter](https://assets.press.princeton.edu/chapters/s9383.pdf). |
| **The Dream Machine** — M. Mitchell Waldrop; 11, 116 | `CMP, ENG, INN, INS, FIN`: funding, interactive computing, and research networks. | Institutions and funding need specific explanatory roles. [Prior analysis](analysis/analysis_pastefollow_261018_0130.md#f067); [publisher](https://press.stripe.com/the-dream-machine). |
| **Engineers of Victory** — Paul Kennedy; 11 | `ENG, HTC, PRD, LOG, MIL, STR`: engineering and industrial adaptation remove operational bottlenecks. | Distinguish objectives, military capability, and technical/logistical means. [Prior analysis](analysis/analysis_pastefollow_261018_0130.md#f043); [publisher](https://www.penguinrandomhouse.com/books/91616/engineers-of-victory-by-paul-kennedy/). |
| **Supplying War** — Martin van Creveld; 11 | `MAT, LOG, MIL, STR`: supply, transport capacity, distance, and feasible operations. | A narrower mechanism can be coherent; the target profile decides whether missing finance or high technology matters. [Prior analysis](analysis/analysis_pastefollow_261018_0130.md#f066); [publisher introduction](https://www.cambridge.org/core/books/abs/supplying-war/introduction/31DFE7186A4BFEBB1DC0982FDA71D34C). |
| **Power and Plenty** — Ronald Findlay and Kevin H. O'Rourke; 10, 11 | `TRD, LOG, ECO, POL, MIL, STR`: transport costs, coercion, state capacity, and development. | Preserve feedback between trade and power, including cycles. [Prior analysis](analysis/analysis_pastefollow_261018_0130.md#f037). |
| **The Origins of Efficiency** — Brian Potter; 99 | `ENG, MAT, PRD, QLT, LOG, SCL, ECO`: coupled production steps, inventory, variation, design, and throughput. | Cross-industry reuse needs support; repeated examples are not connection bonuses. [Prior analysis](analysis/analysis_tactical92_261018_2302.md#efficiency); [publisher](https://press.stripe.com/origins-of-efficiency). |

The sample suggests conversion chains, complementary inputs, bottlenecks, research/funding systems, and feedback between economic and strategic outcomes. These are descriptive patterns, not five extra grades. This evidence does not establish a book that meets every proposed target at the required depth and connection strength. The profile and assessment process make that question testable.

## 5. Scoring model

### 5.1 One evaluator: normalize, shape, and weight

Every one of the 44 numeric fields can independently be a filter, a ranking variable, a Pareto variable, or all three. This includes the six derived connection measures once their target is configured. A filter does not enable scoring, and a scoring weight does not enable a filter. Mechanism records supply evidence; their count is not a scoring variable.

Keep three quantities distinct: raw value `v` in native units, normalized level `n`, and contribution `c` in score points. Each term has a normalization, a curve, and a signed weight. Use the same evaluator for ranking and weighted axes:

```text
clamp(x, lo, hi) = min(hi, max(lo, x))
n = normalize(v)                  # bounded in [0,1] or [-1,1]
z = curve(n)                      # stays within the same interval
c = b + w × z                     # score points; b is normally zero
score(book) = sum(c for enabled terms)
```

`w` is the change in points per unit of shaped level, not a percentage of the total. With `b=0`, it is the contribution at `z=1`. Positive and negative weights are both valid. For example, `w=-10, z=0.5` gives −5 points; `w=+10` gives +5. A negative normalized level with a negative weight gives a positive contribution; show this explicitly in the preview. The point offset `b` is only generated by the direct per-unit conversion below; it is not another freely editable preference.

Scoring off, or a zero weight, gives zero contribution regardless of input availability. Enforce `b=0` whenever `w=0`. Missing active values follow section 5.4 before normalization; never substitute raw zero and then run a curve or offset.

#### Normalization and caps

Every field offers either normalized range. Normalization never uses catalog statistics or the filtered subset. For an affine normalization, the user supplies finite raw anchors `L < H`. First set `v_c = clamp(v,L,H)`; values outside the interval saturate, but the stored raw value and raw filters remain unchanged.

| Range | Formula before optional reversal | Meaning |
|---|---|---|
| `[0,1]` | `n = (v_c-L)/(H-L)` | Raw `L` maps to 0; `H` maps to 1. |
| `[-1,1]` | Below/equal pivot: `n = (v_c-p)/(p-L)`; above pivot: `n = (v_c-p)/(H-p)`; require `L < p < H`. | Raw `L` maps to −1, pivot `p` to 0, and `H` to +1. Initially place the pivot at `(L+H)/2` when this mode is chosen. |

An optional Reverse switch uses `1-n` for `[0,1]` and `-n` for `[-1,1]`. Keep reversal separate from weight sign. Reversing an age scale and rewarding it adds a recency bonus; applying a negative weight to unreversed age imposes an age penalty. Their point offsets differ, even when they produce the same order.

Count bands are an alternative bounded normalization, required for the current `O15` rule. Specify disjoint, exhaustive intervals with explicit boundaries and outputs within the chosen range. A final open-ended count band is allowed. The canonical outputs are in the default table below; changing its display range to `[-1,1]` maps each output `u` to `2u-1` and requires an explicit custom-model preview. Every banded field also offers ordinary affine normalization. Unknown counts do not belong to any band.

| Curve | Definition | Controls |
|---|---|---|
| Linear | `z=n` | No further curve parameter. |
| Quadratic / signed quadratic | `[0,1]`: `z=n²`; `[-1,1]`: `z=n × abs(n)`. | The signed version preserves negative levels; label it “Signed quadratic.” It is not ordinary squaring of a negative value. |
| Scaled linear | `z=clamp(a×n+d, rangeMin, rangeMax)` | Slope `a`, normalized offset `d`, and visible saturation points. |
| Piecewise linear | Interpolate between ordered `(n,z)` knots. | Knots include both range endpoints; outputs stay in range. This permits preferred intervals or asymmetric rewards and penalties. |

Use double precision for calculations and integer values for counts. Reject non-finite parameters, equal/reversed anchors, an out-of-range pivot, incomplete/overlapping bands, and unordered/duplicate knots. One input has at most one term in each model. Ranking and the two axes have separate term settings; a linked axis term follows its ranking term explicitly.

#### Intuitive controls and direct rates

The interface shows `100×n` and, when useful, `100×z`: 0–100 or −100–100. It stores and calculates with 0–1 or −1–1. Label these values “normalized level” and “level after curve,” not book quality or score points. Raw assessments remain visible, including the original 0–4 domain grades. Use a signed control labelled “Weight (points),” with a numeric input for exact values and fine fractions. Explain that +100 **after the curve** contributes `w` points when `b=0`; the level before the curve may have a different effect. A slider may span −100 to +100 points; it must not limit the numeric input to that span. Show a nonzero point offset separately when a direct rate generates it.

For affine normalization with a linear curve, offer “points per page,” “points per year,” or the field's native unit. This edits the same term, not a second bonus or penalty. Let `k` be the signed rate and `v0` the reference raw value, initially 0. The requested contribution is:

```text
c = k × (clamp(v,L,H) - v0)
```

Within `[L,H]`, the rate is exactly `k`; outside it, the contribution is capped. Bounded normalization with a finite weight cannot also provide an unbounded linear contribution. Show both raw cap anchors and the resulting point limits instead of concealing this limit.

For an unreversed `[0,1]` scale, compile the rate into `w=k×(H-L)` and `b=k×(L-v0)`. For a symmetric `[-1,1]` scale with midpoint pivot `p`, use `w=k×(H-L)/2` and `b=k×(p-v0)`. If reversed, negate `w`; the `[0,1]` offset becomes `k×(H-v0)`, while the symmetric signed offset stays unchanged. These conversions preserve the same raw-value contribution. The offset is necessary: centered normalization must not accidentally turn a simple length penalty into a short-book bonus.

The rate editor is unavailable for a nonlinear curve, count bands, or an asymmetric signed pivot because these have no single constant native-unit rate. Switching to such a configuration explicitly switches to normalized-weight mode, which always sets `b=0`; preview any resulting change instead of silently discarding a point offset. In rate mode, changing anchors keeps `k` and `v0` fixed and recalculates `w,b`. In weight mode, changing anchors keeps `w` fixed and changes the effective raw-unit slope. Show the effect in the draft preview. Store which mode is authoritative; never maintain independently editable, conflicting rates and weights.

When converting an existing linear weight-mode term to rate mode, preserve its function: for unreversed `[0,1]`, set `k=w/(H-L), v0=L`; if reversed, set `k=-w/(H-L), v0=H`. For symmetric `[-1,1]`, use `k=2w/(H-L), v0=p`, negating `k` if reversed. Reference 0 is the seed for a newly created rate term, not a reason to change an existing term during conversion.

For example, `PG`, bounds 0–1,000, linear curve, `k=-0.01` point/page and `v0=0` compiles to `w=-10,b=0`. A 500-page book has normalized level 50/100 and contributes −5 points; a 1,500-page book is capped at −10. Changing the rate to `+0.01` gives +5 and +10. Raising the cap to 2,000 in rate mode preserves −0.01 point/page and gives −15 for 1,500 pages, with `w=-20`. In signed mode with bounds 0–1,000 and pivot 500, the same negative rate uses `w=-5,b=-5`: 500 pages has normalized level 0 and still contributes −5.

#### Initial normalization and weights

All initial terms use `[0,1]`, no reversal, and `b=0`. These mappings reproduce the repository evaluation exactly. Fixed scale seeds for inactive fields are editing aids, not added ideal-book criteria. They can be replaced when the user supplies better defaults.

| Inputs | Normalization | Curve | Signed weight in points |
|---|---|---|---:|
| `E`, `S`, `D` | Raw anchors `0..20`, `0..17`, `0..10`, respectively. | Quadratic | 20, 17, 10 |
| `U`, `M`, `R`, `F`, `A`, `N`, `P` | Raw anchors `0..m`, with the criterion's own maximum `m`. | Linear | 15, 12, 9, 7, 5, 3, 2 |
| `T11`, `T12` | Raw anchors `0..1`. | Linear | −10 each |
| `H13` | Raw topic-age anchors `0..300` years. | Linear | −12 |
| `P14` | Raw publication-age anchors `0..100` years. | Linear | −10 |
| `O15` | Bands: `[0,10) → 1`; `[10,100) → 0.5`; `[100,1000) → 0.25`; `[1000,∞) → 0`. | Linear | −20 |
| All 20 domains | Raw anchors `0..4`. | Linear | 0; scoring off |
| `COV`, `FLOOR`, `LINK`, `FIT` | Raw anchors `0..100`; requires a configured target. | Linear | 0; scoring off |
| `SPAN`, `ORDER` | Raw anchors `0..size(T)`; requires a configured target. | Linear | 0; scoring off |
| `SRC` | Fixed raw anchors `0..10` sources; editable when enabled. | Linear | 0; scoring off |
| `PG` | Fixed raw anchors `0..1000` pages; editable when enabled. | Linear | 0; scoring off |
| `RP` | Fixed raw anchors `0..100` reference pages; editable when enabled. | Linear | 0; scoring off |

For example, normalized evidence gives `20×(E/20)² = E²/20`; normalized topic age gives `−12×clamp(H13/300,0,1) = −min(12,H13/25)`. A normalized criterion is bounded; the weighted contribution and final sum need not lie in either normalized range.

### 5.2 Baseline and custom scores

The read-only baseline `BASE` is:

```text
BASE = E²/20 + S²/17 + U + M + D²/10 + R + F + A + N + P
       - 10×T11 - 10×T12
       - min(12, H13/25) - min(10, P14/10) + obscurity(O15)
```

The maximum positive total is 100. The lowest possible baseline is -62. Do not clamp the final sum to 0–100; that would conceal real deductions. Display the baseline as points with a positive maximum of 100.

`TOTAL` is the current ranking score. It initially equals `BASE`. Changing any active weight, normalization, curve, or rate creates a custom model, identified as such. Its total can exceed 100 or be negative, so label it “score,” not “percent” or “/100.” Keep `BASE` available in details for comparison. Normalized controls do not normalize the final score or divide it by the sum of active weights.

Do not infer raw values from a two-decimal displayed score. Import the named raw attainment. When migrating older criterion maxima, preserve attainment with `newRaw = newMax × oldRaw / oldMax`, then apply the new transformation once. Never square an already squared contribution.

Keep full precision for sorting and comparisons. Display values and contributions to two decimal places, rounding decimal halfway cases away from zero. Account for binary floating-point representation in this display-only step: the current score 88.175 for *The Origins of Efficiency* must display as 88.18. Do not round intermediate terms for calculation, sorting, or dominance. A sum of rounded displayed terms can differ slightly from the displayed total. Do not silently change repository verdict labels based on a custom score; show the canonical verdict as historical assessment context only.

Examples of user configurations, all off by default:

| Goal | Configuration | Example result |
|---|---|---|
| Reward production content | `PRD`, anchors 0–4, `[0,1]`, linear, `w=10`. | `PRD=3` has level 75/100 and gives +7.50 points. |
| Favor only strong production coverage | Same anchors, quadratic, `w=10`. | `PRD=2` has level 50/100, shaped level 25/100, and gives +2.50 points. |
| Give source presence a small capped reward | `SRC`, anchors 1–5, `[0,1]`, linear, `w=4`; equivalently rate `k=1`, reference `v0=1`. | One source gives 0; three give +2.00; five or more give +4.00. |
| Penalize each page slightly | `PG`, anchors 0–1,000, linear, rate `k=-0.01`, reference 0. | 500 pages gives −5.00. A positive rate gives a length reward instead. |
| Penalize length above 300 pages | `PG`, anchors 300–700, linear, rate `k=-0.02`, reference 300; equivalent `w=-8,b=0`. | 300 or fewer gives 0; 450 gives −3.00; 700 or more gives −8.00. |
| Favor moderate length | `PG`, anchors 0–800, `[0,1]`, normalized knots `(0,0), (0.25,1), (0.5,1), (1,0)`, `w=5`. | 200–400 pages gives +5.00; 600 gives +2.50; 800 or more gives 0. |
| Reward or penalize position around a midpoint | `PG`, anchors 0–1,000, `[-1,1]`, pivot 500, linear, weight `w=10`, offset 0. | 250 pages gives level −50/100 and −5.00 points; 750 gives +50/100 and +5.00. A negative weight reverses both contributions. |
| Match the existing publication-age penalty | `P14`, anchors 0–100 years, linear, rate `k=-0.1`, reference 0. | At `RY=2026`, original year 2006 gives age 20 and −2.00 points; age 100 or more gives −10.00. |
| Match the existing historical-topic penalty | `H13`, anchors 0–300 years, linear, rate `k=-0.04`, reference 0. | At `RY=2026`, central period end 1951 gives age 75 and −3.00 points; age 300 or more gives −12.00. |

Changing the catalog or filters must not change any input's scale. Do not normalize against the current subset's minimum, maximum, mean, or rank.

Publication age always uses the original work year, not a reprint or the page edition's year. Historical relevance uses the assessed central period endpoint, not the publication date or an invented midpoint of the period. The existing classification gives timeless/cross-period works `H13=0`; keep that classification visible so zero age is not mistaken for a contemporary historical period. A custom reverse-age reward therefore also rewards those zero-age works, which the preview must state. An unknown endpoint remains unknown. Positive or negative custom rates are allowed for either age measure; neither change updates the canonical assessment.

### 5.3 Initial ideal: current repository evaluation

The sole initial ideal-book model is **Current repository evaluation**. Derive it from the same versioned rule registry used to reproduce `RECOMMENDED_BOOKS.md`; do not maintain a second copy of the 15 defaults in the Ideal book panel. “Ideal” initially means full attainment of the ten positive criteria and no applicable deductions under rules 11–15. It does not mean maximum page count, source count, or coverage of a newly proposed domain set.

| Setting | Initial state |
|---|---|
| Quality criteria | All ten current criteria, with maxima 20, 17, 15, 12, 10, 9, 7, 5, 3, and 2. Only evidence, integration, and density use a quadratic curve. |
| Deductions | Preserve both thematic flags, historical-topic age, original-publication age, and Amazon count bands, including current caps and missing-count fallback. |
| Normalization | The exact score-preserving mappings in section 5.1. |
| Additional ranking variables | All 20 domains, source count, pages, and six connection measures have weight 0 and scoring off. |
| Connection target | Not configured. No default domain combination, minimum connected span, or extra fit bonus. |
| Filters | None. Show every current recommended work, including low scores and works with unknown enrichment. |
| Ranking and plot | `TOTAL=BASE`; optional Pareto display off. |

The reader can edit this model and later supply improved defaults. Mark edits as custom and preserve the read-only repository baseline. A future default version must be an explicit model replacement; it must not overwrite saved preferences silently. No additional named interest presets are required now.

Configuring a connection target alone computes `COV` through `FIT` for inspection. It changes ranking only if a dependent term is enabled, and selection only if a dependent filter is enabled. `FIT` means connection fit, not the overall ideal-book score. It does not replace `E`, `S`, or `M`, and does not cancel either thematic deduction. A book may explain military or finance mechanisms well while receiving `T12` when that is its central topic.

After a target is explicitly configured, a custom example is `TOTAL = 0.8 × BASE + 0.2 × FIT`: multiply the 15 canonical point weights by 0.8 and give normalized `FIT/100` a weight of 20. This example is not an initial preset. Do not also add separate coverage and connection bonuses unless the reader chooses that overlap. Another explicit option keeps ranking unchanged and plots `BASE` against `FIT`.

### 5.4 Unknown values and completeness

Canonical raw criteria, theme decisions, historical classification, and original-year inputs must be resolved for a complete baseline import. The unchanged rule 15 band term uses the required zero contribution when its Amazon count is unknown, with a visible "rating count unavailable" marker. This prescribed fallback does not make `BASE` incomplete. If a custom term uses raw `O15` with another transformation, apply the general missing-input rule below. Do not invent missing criteria to match the published total.

For new domains, connection measures, and pages, allow `null` while research is incomplete. Unknown connection measures follow section 4.6; do not turn a partial mechanism list into a definitive zero or final score. If an unknown field has an enabled, nonzero ranking weight, contribute zero for the entire term, including any point offset, and visibly mark the score “incomplete.” The field remains unknown at the raw, normalized, and shaped stages. Do not renormalize the remaining terms. This can favor a book with an unknown penalty; state that effect beside the missing-input summary and provide a “require known” filter.

An unconfigured connection target is a model state, not missing book data. Its six measures are unavailable for use until configured, but do not make the initial model incomplete. Inactive unknown page/domain fields likewise have no effect on the baseline or its completeness.

Show known active inputs as a count, for example `18/21 active inputs known`. Also show the number of books affected. Confidence and completeness are separate. Low confidence is not the same as missing data.

For a Pareto axis, an unknown input with a nonzero coefficient prevents a coordinate. Such a book stays in the table and appears in an “unplotted: missing axis data” count. Do not silently place it at zero. The repository's `O15` fallback may be used inside `BASE`, with its fallback marker; direct use of raw `O15` still requires a known count.

## 6. Filtering, ranking, and selection

### 6.1 Filters

Each of the 44 numeric fields offers a filter independently of whether its scoring weight is zero. Connection fields require a configured target:

- Numeric inputs: inclusive minimum and maximum in native units.
- `T11` and `T12`: either, flag present, or flag absent.
- Every input: unknown policy of include, exclude, or only unknown. For an active range/flag filter, the default is exclude unknown.
- An inactive filter has no effect, including on unknown values.
- Several active filters combine with AND. Minimum and maximum on the same field form one closed interval. Reject minimum greater than maximum.

Text search matches title, subtitle, author, and recorded aliases, ignoring case and diacritics. It is another filter. Also allow minimum `BASE` and `TOTAL` filters, the three exact target modes from section 4.6, and “Selected only.” A completeness shortcut adds “require known” for active score inputs. A failed ideal filter states the gap, such as `Connected 6 of 9 target domains` or `Connection review incomplete`.

For all 43 fields, offer three filter bases: **Raw value**, **Normalized level**, and **Score contribution**. Raw is the initial choice. Label the unit and model explicitly: `E raw /20`, `n_E current level /100`, or `c_E current points`. Normalized filters use `100×n` before the curve, with bounds on 0–100 or −100–100; contribution filters use `c` after the curve, weight, and offset. They use the ranking term's settings, even if scoring is off; in that case known contributions are zero and normalized levels remain available. Unknown values remain unknown for filters even when their zero contribution is the scoring fallback. Raw filters remain unchanged by normalization or weight edits. Normalized filters follow normalization edits; contribution filters follow all relevant scoring edits. Show those dependencies in the preview.

### 6.2 Evaluation order and two-list contract

```text
Validated recommended collection
  → derive ages and distinct source counts
  → evaluate a configured connection target against evidence, if present
  → normalize inputs and apply curves, signed weights, and point offsets
  → calculate BASE, current contributions, TOTAL, and any active axes
  → evaluate all active filters
  → partition into matching and filtered books
  → sort each partition by the same current TOTAL
  → compute the frontier for matching books with valid axis values
  → render both lists and, when enabled, the plot
```

Sort descending by the unrounded `TOTAL`. Break exact ties by normalized title, then author, then stable work ID, using a fixed comparison rule independent of device locale. Do not break ties using displayed two-decimal totals.

Every imported book appears exactly once in one of the two lists. A book that fails a filter retains the same calculated score it would have in the matching list. Show all failed conditions in details and a concise first reason in the muted row, for example `Pages 612 > 500` or `QNT unknown`.

Keep the filtered section below the matching section, expanded by default. If no book matches, show “No matching books” with a reset-filters action and keep the filtered list available. Filtering must not delete or invalidate a selection.

Use counts for matching, filtered, selected, and missing active data. The invariant is `matching + filtered = imported recommended works`.

### 6.3 Selection and local state

A selection checkbox works in both lists. Store selected work IDs, model version, review year, ranking settings, filters, axes, and the optional connection target locally. Persist raw anchors, normalized range, pivot, reversal, curve parameters, and the authoritative weight or direct rate/reference; derive compiled weights and offsets from that authority. Keep Scoring and Ideal book as views of the same applied model.

Provide separate reset actions for filters, scoring, and the connection target; none clears selection. Reset scoring restores the 15 canonical terms and switches every additional term off; it preserves filters and any configured connection target. Explain changes to score-dependent filters in the preview. Clearing the connection target also removes its dependent filters, switches its ranking terms off, and clears any dependent axes in the same draft. Show these effects before Apply; no invalid target-dependent settings may survive the commit. Ordinary filters and independent axes remain. Provide a separate clear-selection action.

Persistence is best effort when opened through `file://`, since browser storage behavior can differ. If storage fails, keep the session usable and show that changes will not persist. Provide a small JSON export/import for settings and selected IDs so the model is reproducible. Validate its schema and aliases before applying it. Do not import executable code or book assessments through this control.

## 7. Optional Pareto model and plot

### 7.1 Axis construction

Show short aliases in the scoring and axis panels when “Show variables” is enabled. Every numeric field and current contribution has an alias. Provide `BASE` and `TOTAL` as aggregate shortcuts; the six target measures, including `FIT`, are already registered derived fields.

Each axis can be a raw input, a normalized input, a named aggregate, or a sum of configured terms. A weighted term uses the same normalization/curve/signed-weight evaluator as ranking, with its own configuration. A raw axis such as pages intentionally keeps its native units; a normalized axis shows 0–100 or −100–100. The user can reuse a ranking contribution as a shortcut; when linked, it follows that contribution's settings and is visibly labelled as linked.

Use a term builder with a variable selector, transform controls, and coefficient. Show a compact, read-only formula preview. Version 1 does not need a free-text programming language or arbitrary JavaScript evaluation.

Use a fixed acyclic evaluation order: source inputs and connection records → optional target measures and baseline contributions → current normalized levels, ranking contributions, and aggregates → axes → filters and frontier. `BASE` and `TOTAL` can expand to their configured terms. The six target measures remain named calculation nodes with visible definitions; they cannot be expanded as a simple weighted sum of domains. Axes cannot feed back into ranking, the connection target, or each other. Reject unknown aliases and duplicate terms in a model. Show when an explicit custom formula combines overlapping measures; do not add such terms automatically.

Each axis has a label and an explicit objective, maximize or minimize. Label units, including points or pages. Preserve actual units in ticks; scaling the screen coordinates does not change dominance.

Provide these axis choices. Those using connection measures are available only after a target is configured; selecting an axis does not change the ideal-book model:

| Preset | Horizontal axis | Vertical axis | Purpose |
|---|---|---|---|
| Quality and reading length — initial choice | `BASE`, maximize | `PG`, minimize | Compare intellectual quality with edition length. |
| Quality and connection fit | `BASE`, maximize | `FIT`, maximize | Separate established quality from the optional connection target. |
| Fit and reading length | `FIT`, maximize | `PG`, minimize | Explore topical return against reading length. |
| Breadth and connection | `COV`, maximize | `LINK`, maximize | Distinguish broad topic coverage from connected explanation for the same ideal. |

The title score in the tooltip always means the current ranking `TOTAL`, even when neither axis is `TOTAL`. Page count is a length proxy; do not relabel it as measured reading time. It is not a density measure: typography, figures, references and reader background alter reading effort. Density is an independent judgment of useful learning for the length.

### 7.2 Exact dominance

Orient both axes so that a larger internal objective value is better. For a minimize axis, negate its numeric value for the comparison only.

Book `a` dominates book `b` exactly when:

```text
X(a) >= X(b) AND Y(a) >= Y(b)
AND (X(a) > X(b) OR Y(a) > Y(b))
```

Use full-precision evaluated values. Do not compare rounded labels. Books with identical coordinates do not dominate each other and share frontier status. If one is dominated by a third book, every book at those coordinates is dominated.

Compute three successive boundaries over matching books with both coordinates available. Layer 1 is the main frontier (red); remove every title in it, including all coordinate ties, then compute layer 2 (blue); remove layers 1 and 2, then compute layer 3 (dark yellow). Empty layers remain empty; do not repeat an earlier frontier. Filtered books can be shown as muted background points, but cannot dominate a matching book or receive the active-frontier marker. Recompute after applied changes to filters or axes, and after connection-target changes when an axis or filter depends on a target measure. A ranking-only change affects the frontier only when an axis or active filter depends on that ranking.

### 7.3 Marks, curve, and interaction

| Element | Required behavior |
|---|---|
| Frontier book | Larger dot in its layer color; layer 1 also has an outer ring. Accessible labels identify the layer number. |
| Other matching book | Small, less pronounced dot. |
| Filtered book | Small, pale-gray dot, on by default; it remains hoverable. |
| Shared coordinates | Keep the true coordinates. Use one cluster mark with a count; hover/focus lists the titles and their scores. Do not jitter coordinates used for dominance. |
| Tooltip | Concise title and `TOTAL`; also include the two labelled coordinates and filter status when needed. |
| Hover/focus/tap | Show the same tooltip; keyboard focus and touch must work. A separate action can open the inline book details. |
| Curve | A thin, smooth guide through the unique frontier coordinates in axis order; use monotone interpolation without overshoot. |
| Legend | Identify layers 1–3 by number and color, explain removal of earlier layers, and state that curves are guides rather than additional books. |

A curved guide is not a set of attainable books and is not used to test dominance. Do not compute a convex hull: a non-convex part of the Pareto frontier must remain represented. Keep every actual nondominated point emphasized.

For zero frontier points, draw no curve and explain the empty or missing-data state. For one unique point, draw only the point. For two unique points, use a straight connector. Draw a curved guide only with at least three unique frontier points. If all values on an axis are equal, add a small visual margin to its display extent; do not alter data.

Use SVG for the plot at the current collection size. Match each plotted work to its row by stable ID. Small dots need a larger invisible hit area. Overlapping targets must offer the complete cluster list rather than make some titles unreachable.

## 8. Data and implementation contracts

### 8.1 Minimal architecture

Prepare a normalized book dataset and a variable registry during the build. A small generator embeds both into one HTML file. Use plain JavaScript, CSS, and SVG without third-party runtime libraries, remote assets, or adjacent file dependencies. Embed current book evidence and link to full repository analyses online. Development tests may use separate tools; the delivered HTML must not need them.

The runtime needs five small responsibilities: load validated data, evaluate models, evaluate filters, compute the frontier, and render the interface. Use one evaluator for ranking and axes. Do not duplicate formulas inside widgets or chart code.

The site must make no runtime network request to calculate scores or render the catalog. External purchase and evidence links open only on user action. Escape embedded data safely, including script-closing text, and render book text as text rather than executable HTML.

### 8.2 Registry contract

One registry defines each alias, name, group, native range, unit, description, source/derived status, calculation dependencies, and initial normalization/curve/weight. Generate desktop and phone controls, help text, formula previews, exports, and validation from this registry. Both Scoring and Ideal book use the same model state and versioned defaults. This keeps a local UI change from silently changing the meaning of a score.

Required invariants:

- Exactly 43 unique numeric aliases: 15 rule inputs, 20 domains, two metadata inputs, and six derived target measures.
- Exactly three default quadratic criteria: `E`, `S`, and `D`.
- The ten positive maxima sum to 100; `S` has maximum 17 and `M` has maximum 12.
- All 43 aliases can be selected by the filter, score, and axis controls on desktop and phone.
- Every alias supports both normalized ranges and signed weights. No unit such as pages or years is added directly to a weighted score without a declared normalization. Raw axes and raw filters remain explicitly labelled exceptions because they do not compute weighted contributions.
- Normalized and shaped levels stay within the declared interval. Final points are not clamped to that interval. Scale changes cannot alter raw assessments or the read-only baseline.
- Each term has one parameter authority: normalized weight, or native-unit rate/reference. In rate mode derive weight and offset; reject conflicting serialized values. Zero-weight terms have zero offset.
- Initial ideal and ranking models reproduce all 15 repository rules, with all other terms off, no filters, and no connection target. No hidden domain preference can change the initial order.
- Known domain inputs are integers from 0 to 4. Known source counts and pages meet their integer constraints. Derived fields obey the ranges and inequalities in section 4.6.
- Mechanism participants are unique known domain IDs with positive values. Joins reference existing mechanism IDs and document a concrete connection and compatible scope. Shared tags cannot generate joins.
- Mechanism/connection strengths are integers 1–4. Duplicate statements within the same scope are merged; repeated evidence never adds numerical credit.
- A connection target is either null or has 2–20 unique domains, positive importance weights, valid desired depths, and explicit strength/confidence thresholds. Null cannot coexist with active dependent terms, filters, or axes.
- Target measures are calculated from evidence and the current profile. They cannot be edited independently or loaded as permanent book facts.
- `SRC` is derived from unique source IDs, not independently hand-entered.
- `H13` and `P14` are derived from metadata and `RY`, not separately edited values that can disagree with dates.
- Contributions and totals are calculated; any stored reference totals are checked, not trusted as inputs.

### 8.3 Normalized record and model state

The schema must contain these fields; exact serialization may follow existing repository conventions.

| Record | Required contents |
|---|---|
| Dataset | Schema version, dataset version/hash, scoring-rule version, review year, build date and time zone, source-file references, registry, book records. |
| Book identity | Stable ID, title, subtitle/aliases if present, author list, original year with confidence, entry date, purchase URL and format, recommended status. |
| Assessment | Named raw inputs, named evidence records, baseline profile version, canonical verdict and confidence, contributing analyses. |
| Connection evidence | Mechanism records and explicit joins from section 4.4; review status, inspected materials, and limitations. Roles and scope are required, not just lists of tags. |
| Derived target result | Profile hash, source-assessment version, six calculated values or unknowns, confidence, and winning record/level references. Cache only; recompute when dependencies change. |
| Historical scope | Scope kind, period endpoint where required, endpoint confidence, rationale, and evidence. |
| Sources | Unique source IDs and resolved source links. |
| Reading edition | Edition ID/ISBN, language, format, edition year, pages or unknown, evidence URL, retrieval date. |
| Amazon snapshot | Product ID, marketplace, URL, count or unknown, retrieval date/attempts, identity verification, limitations. |
| Reader ratings | Optional provider-specific rating, scale, count, URL, and snapshot date. Keep providers separate; no invented cross-provider mean. |
| User model | Model/schema version, repository-default version, review year, optional connection target and thresholds, ranking terms, filters with basis/unknown policy, axis models/objectives, plot visibility, selected IDs. Keep unsaved panel drafts separate from applied state. |
| Term configuration | Input alias, scoring enabled state, normalization kind and output range, raw anchors/pivot or bands, reversal, curve/knots, parameter mode, authoritative signed weight or native-unit rate/reference. Compiled point offsets are derived, not independent editable inputs. |

Store per-input evidence as `{confidence, rationale, refs}` linked by alias. Derived inputs inherit relevant provenance, such as the original-year record for `P14`; connection results also retain the mechanism/join IDs used. Unknowns record the missing-data reason. Do not invent values to fill 43 slots.

This revision requires model/settings schema version 3 because a weight now acts on a normalized level rather than the earlier raw transform. Never reinterpret a version-2 raw weight as a normalized weight. Reject earlier settings with an explanation; an explicit migration may be added only if it proves contribution equivalence, including caps and unknown handling. The connection-evidence dataset contract introduced in revision 2 is unchanged.

The old ten pair fields from revision 1 remain retired; they cannot be converted automatically into joint mechanisms or joins. `SCI` replaces the narrower proposed `PHY`; `FIN`, `POL`, `MIL`, `HTC`, and `TRD` require explicit assessment under their new boundaries. Recheck retained domains whose scope was split. Revision-1 and current `FIT` definitions are incompatible. Existing canonical rules and source IDs retain their identities.

### 8.4 Data preparation and refresh

1. Reconcile current membership and work identities against the three ledgers.
2. Select the latest applicable raw assessment for each recommended work. Record the mapping from source fields to stable aliases.
3. Migrate old maxima only when the assessment's declared scoring version requires it.
4. Recompute the baseline with its original review year. Compare every result with the latest ledger score and resolve discrepancies before release.
5. Assess the 20 domains using contents, samples, reliable descriptions, and relevant prior analyses. Then record evidenced mechanisms and joins, with role/scope checks. Complete the twelve-book design sample first to check consistent interpretation, then assess the remaining catalog. Do not copy its candidate domain sets as final scores.
6. Mark the connection review status honestly. Calculate the six target measures only for explicitly configured targets. Check coverage-only, disconnected, connected-chain, and joint-mechanism fixtures before claiming useful connection matching. A high existing `S` score cannot substitute for connection evidence.
7. Verify the named page edition. Keep unavailable values unknown. Retain the existing verified Amazon snapshot unless deliberately refreshed.
8. Build and validate the generated HTML on desktop and phone. Preserve compatible settings and selection IDs; report schema/identity changes instead of silently matching by title.

The first functional release may contain unknown domain, connection, or page data, with explicit completeness behavior. A fully assessed interest catalog additionally requires all 20 domain values and a completed, documented connection review for every recommended work. A completed review may contain no qualifying mechanisms. These are different completion claims; a functioning interface alone does not establish ideal-book search coverage. The baseline model must be complete at the functional release.

## 9. Acceptance checks

Use meaningful calculation and interaction checks. These are implementation requirements, not claims that an application already exists.

| ID | Check | Required result |
|---|---|---|
| A01 | Compare imported work IDs with the current recommendation ledger. | Exact one-to-one match; no vetoed or hard-excluded work. Derive the expected count from the active ledger and compiled snapshot. |
| A02 | Inspect the registry and generated controls on desktop and phone. | All 43 fields appear once and can drive filters, ranking, X, and Y with either normalization range and signed weights. Derived fields require a target and have no editable book-grade control. |
| A03 | Set all positive raw criteria to their maxima and all deductions to zero. | Baseline is exactly 100.00. |
| A04 | Set every positive raw criterion to half its maximum; use no deductions. | Baseline is 38.25: quadratic maxima sum to 47, linear maxima to 53, so `47/4 + 53/2`. |
| A05 | Test individual profile rules. | `E=10 → 5.00`; `S=8.5 → 4.25`; `D=5 → 2.50`; `M=6 → 6.00`. No repeated quadratic transform. |
| A06 | Enable both thematic flags. | Total changes by exactly -20.00. Each flag remains independent. |
| A07 | With `RY=2026`, use period end 1951 and original year 1951. | `H13=75 → -3.00`; `P14=75 → -7.50`. Topic and publication dates remain separate inputs. |
| A08 | With `RY=2026`, use period end 1700 and original year 1800. | Historical deduction is capped at -12.00; publication deduction at -10.00. Explicit cross-period scope instead gives H13=0. Unknown scope does not. |
| A09 | Test Amazon counts `0,9,10,99,100,999,1000,null`. | Deductions `-20,-20,-10,-10,-5,-5,0,0`; only `null` carries the unknown fallback. |
| A10 | Recompute every imported current score, including signed stored thematic deductions and missing display strings. | Normalized evaluation agrees with current unrounded totals within a documented arithmetic tolerance and displays the reconciled ledger score. The shared formatter resolves the former 88.17/88.18 discrepancy in section 3.1; every future display mismatch fails the build. No −10 deduction is mistaken for a raw flag. |
| A11 | Test source IDs `[8,8,9,11]` and page count unknown. | `SRC=3`; `PG=null`. Missing pages never become zero pages. |
| A12 | Test every normalization and curve, including caps, bands, negative weights, and invalid parameters. | Examples in sections 5.1–5.2 hold. Raw clamping precedes affine normalization; curves stay in range; points remain signed and are not clamped to 0–100. Invalid settings cannot be applied. |
| A13 | Evaluate all six synthetic structures in section 4.6. | Every COV/FLOOR/LINK/SPAN/ORDER/FIT result agrees before display rounding. Full topic coverage without mechanisms gives FIT=0, not 100. |
| A14 | Apply filters, search, selected-only, and an active missing-value policy. | Each work stays in exactly one list, both lists stay score-sorted, and each filtered work explains its failures. |
| A15 | Change a weight while filters are active. | Both lists update from the same score; raw filters remain fixed and current-contribution filters follow the new term. |
| A16 | Use synthetic points A=(10,5), B=(8,4), C=(10,5), D=(9,6), with both axes maximized. | A, C, and D are Pareto-optimal; B is dominated. Equal-coordinate books are both reachable. |
| A17 | Repeat A16 with Y minimized. | A, B, and C are optimal; D is dominated by A/C. Objective direction affects dominance. |
| A18 | Use E=(0,10), F=(4,4), G=(10,0), with both axes maximized. | All three are optimal although F is below the line joining E and G. Do not replace the frontier with a convex hull. |
| A19 | Filter out a dominating book, or make a required axis input unknown. | Frontier recomputes over matching complete points; missing-coordinate books remain in the list with an unplotted count. |
| A20 | Test zero, one, two, and three unique frontier coordinates, identical axes, and constant axes. | Correct empty/point/straight/curved display; no division-by-zero errors, invented books, or curve-driven dominance. |
| A21 | Use keyboard and touch on controls, muted rows, plot points, and coordinate clusters. | The same information and selection actions are available without hover. Focus remains visible. |
| A22 | Open the generated file offline. | Catalog, filters, scores, selection, and plot work without network requests. Storage failure does not break the session. |
| A23 | Export and import a valid settings file, then try invalid aliases and a different data version. | Valid settings reproduce the model; invalid settings are rejected clearly; version changes are surfaced. |
| A24 | Inspect widths 320, 390, 768, 1,099, 1,100, and 1,440 CSS px, portrait/landscape, and 200% zoom. | Correct layouts from section 2; no page-wide horizontal scroll, clipped text, covered controls, lost draft settings, or hidden source/page fields. |
| A25 | Measure a warm filter/score/connection-target update on the current catalog and 2,000 synthetic works with mechanisms and joins. | Target: results within 150 ms for 95% of 30 updates on each documented desktop and phone test device/browser. Record limits and optimize only if needed. |
| A26 | Give three pair mechanisms overlapping domain labels but no explicit joins; then add supported strength-3 joins. | Initially only individual mechanisms count. The joined explanation appears only after the explicit joins; its LINK uses the weaker joins rather than treating the whole chain as strength 4. |
| A27 | Repeat a mechanism, repeat a source citation, add unrelated non-target topics, or change result filters. | No artificial connection bonus. Filters do not rescale or alter a book's target measures. Duplicate evidence is not independent support. |
| A28 | Configure or change target depths, importance, membership, strength, or confidence threshold. | Recalculate affected fields, filters, custom scores, and axes. Configuring a target alone does not change TOTAL. Raw book assessments and BASE are unchanged. Invalid targets cannot be applied. |
| A29 | Test the three exact-match modes with a chain and a joint eight-domain mechanism. | Both can pass “connects every domain”; only the joint mechanism passes the one-mechanism requirement. Missing-depth and incomplete-review cases cannot claim a match. |
| A30 | Test partial/unreviewed/complete empty connection records, a missing target domain, unknown non-target domains, and confidence thresholds. | Unknown dependencies propagate as section 4.6 requires. Complete empty reviews give known zero connection; unrelated unknown fields do not block a valid target. |
| A31 | Test join cycles, dangling IDs, duplicate participants, unsupported scope merges, and a record with an unknown participant. | Valid cycles terminate and count each target once. Structural errors fail validation; unsupported claims or scope merges fail the evidence review. |
| A32 | Open phone control sheets, invoke the keyboard, change several fields, cancel/apply, rotate, and resize into desktop layout. | Draft and applied states remain distinct; Apply is reachable; focus returns correctly; both layouts yield the same results. |
| A33 | Tap dense/overlapping plot points and open book details on a phone. | Every title remains reachable through cluster/list controls; the tooltip does not require hover or obscure the selected book's information. |
| A34 | Import version-1 pair settings, version-2 raw-weight settings, or cached FIT values from another target/schema. | No silent reuse. Reject incompatible settings and invalidate stale derived results. Version-3 export/import preserves normalization and rate/weight authority. |
| A35 | Open with no saved settings and inspect both Scoring and Ideal book. | One shared 15-rule model reproduces the ledger; all added weights are zero, filters are off, and target is null. Derived fields say “Not configured”; unknown enrichment does not make BASE or TOTAL incomplete. |
| A36 | Normalize raw values below, within, and above anchors 0–1,000; test signed pivot 500. | Raw 500 maps to 0.5 (shown as 50) in `[0,1]`, and 0 in `[-1,1]`. Endpoints map to 0/1 or −1/+1; out-of-range values saturate without changing raw filters. Reversal follows section 5.1. |
| A37 | Apply the signed quadratic to normalized values −0.5, 0, +0.5 with weight +20, then −20. | Shaped levels −0.25, 0, +0.25 give points −5, 0, +5; negative weight reverses the points. UI levels are −50, 0, +50 before the curve. |
| A38 | Use page rate −0.01, then +0.01, with anchors 0–1,000 and reference 0. | 500 pages gives −5 then +5; 1,500 pages gives capped −10 then +10. Symmetric signed normalization compiles to weights −5/+5 and offsets −5/+5, preserving those contributions. |
| A39 | Raise the page upper anchor from 1,000 to 2,000 in rate mode, then separately in normalized-weight mode. | Fixed rate −0.01 gives −15 for 1,500 pages and derives weight −20. Fixed weight −10 instead gives −7.50. The preview and exported parameter mode distinguish them. |
| A40 | Compare raw, normalized-level, and contribution filters while editing normalization, curve, and weight; repeat with scoring off. | Dependencies match section 6.1 for every field. Filters never enable scoring. Off terms retain normalized levels, have zero known contribution, and preserve unknown-value filtering. |
| A41 | Give an active term an unknown input, including a signed rate term with a nonzero offset. | Entire ranking contribution is zero with incomplete status; normalized value remains unknown and the axis is unavailable. No offset bonus/penalty is assigned. Off terms do not cause incompleteness. |
| A42 | Clear an active connection target, then cancel or apply; reset scoring separately. | Cancel preserves all settings. Apply clears only target-dependent filters/axes and switches dependent terms off. Reset scoring restores repository weights while preserving selection, filters, and any configured target. Both views remain in sync. |
| A43 | Change catalog membership or result filters while evaluating the same book with a fixed model. | Raw-to-normalized mapping and contributions remain identical. Original publication year and central-period endpoint remain distinct; neither is replaced by edition year or catalog statistics. |

## 10. Implementation sequence and completion

1. **Data adapter and registry** → verify identities, all 43 aliases, versioned initial ideal, normalized baseline equivalence, and signed-rate conversions.
2. **Domain and connection model** → code the twelve-book design sample with evidence, test derived formulas and target matching, and record remaining assessment gaps.
3. **Desktop and phone catalog/controls** → verify 0–100/−100–100 displays, native-unit rate editing, shared ideal/scoring state, draft/apply behavior, unknown handling, both sorted lists, and local selection.
4. **Axis builder and Pareto plot** → verify dominance independently of the guide curve, missing data, ties, and touch/keyboard use.
5. **Catalog enrichment and final review** → verify coverage, page editions, offline behavior, both layouts, and the performance target.

The original eight plan items map to sections 1/8 (stand-alone site), 2 (reference style), 4 (variable model), 5/6 (transforms and filters), 6.2 (two sorted lists), 7.1 (aliases and two dimensions), 7.2–7.3 (Pareto frontier and interaction), and 4.5 (sources and pages). Multi-domain evidence and optional matching are in 4.4/4.6, the existing-book investigation in 4.7, and desktop/phone layouts in 2.1–2.5. Revision 3 defines the repository-based initial ideal in 5.3 and universal normalization, signed weights, and direct page/year rates in 5.1–5.2.

The implementation is complete as a functional site when the mandatory behavior and checks pass and any missing enrichment is counted and visible. It is complete as a fully assessed catalog only when the additional coverage requirement in section 8.4 also passes.

## Focused density calibration and edition enrichment

Use the D protocol in AGENTS.md: credit distinct learning from facts, mechanisms, evidence and cases, even when they share a framework. Deduct only for low-yield material, and consider the full book. Record inspected coverage and confidence. The first calibration reviews Why Nations Fail, The Righteous Mind and A Thousand Brains; other estimates remain marked as not recalibrated. Keep D quadratic with maximum 10 and change no other criterion to compensate.

Shared supplemental edition records in site/editions.json serve recommended and vetoed works. Preserve earlier verified editions. Require title and author agreement, edition identity, positive page count, source URL and retrieval date. Exclude audio durations and work-level median pages; series require a verified set total. Both Markdown tables include a linked Pages column.
