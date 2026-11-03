# HTML size review

Date: 2026-11-03. Sizes use decimal MB (1,000,000 bytes).

The standalone HTML is **40.8% smaller**, with every existing portable data field preserved. Confidence: **high**, based on full data comparison and offline browser tests. The tested methods do **not** reach 600 bytes of uncompressed storage per scored book or a 90% reduction. Confidence in that practical limit: **moderate**; this is an experiment, not a proof that no better encoding exists.

## Measured result

The snapshot contains 5,868 recommended books, 767 vetoed books, 3,105 excluded works and 303 sources. Per-book figures divide the complete size by the 6,635 scored books, so they also include the excluded list, source register and other shared content.

| Measure | Before | After |
|---|---:|---:|
| Complete standalone HTML | 7.628 MB | 4.517 MB |
| Stored JSON before gzip | 42.665 MB | 16.124 MB |
| Gzip payload before base64 | 5.585 MB | 3.249 MB |
| Base64 payload in HTML | 7.446 MB | 4.332 MB |
| Complete HTML per scored book | 1,150 bytes | 681 bytes |
| Stored JSON per scored book | 6,430 bytes | 2,430 bytes |

The initial HTML was exactly 7,627,682 bytes. Rebuild timestamps can change the compressed result by a few bytes. The reconstructed data remains 42.665 MB: packing changes its storage representation, not its content.

## What occupied the space

Source names and links were already stored once. Recommended books already referred to them by numeric ID. The complete source register was only 64,807 bytes before compression, about 0.15% of the original JSON.

Recommended-book evidence occupied 26,005,503 bytes before compression, out of 42,664,611 bytes for the whole dataset. Other sizable fields included numeric-value records (2.723 MB), edition records (2.634 MB), Amazon records (1.701 MB), research notes (1.248 MB) and connection records (1.187 MB). These figures include repeated JSON structures and text.

For example, the exact text “Retained current repository assessment.” occurred 11,907 times. Repeated confidence labels, review paths, rating limitations and reference-count explanations also contributed substantial duplication.

## Implemented storage changes

`site/packing.mjs` applies four reversible transformations before the existing gzip/base64 step:

1. Store each distinct string once and use a short reference at each occurrence. This also shares repeated evidence URLs and analysis paths.
2. Store each ordered set of object field names once. Records then contain values in that field order.
3. Store arrays of records with the same fields by column, improving compression of similar values.
4. Sort the text dictionary and store common prefixes as a prefix length plus the exact remaining text. This shares text without rewriting or summarizing it.

The same decoder function is imported by the build and embedded in the page. It reconstructs ordinary independent objects before the existing application starts. The scoring model, controls, routes, details and saved-settings format are unchanged. Gzip decoding remains browser-native; no dependency, fetch or separate data file was added.

The build compares the unpacked result against the full JSON form of the original portable dataset. Every build must also fit within 900 HTML bytes per scored book, reduced from the previous 1,500-byte limit. A regression test requires at least 25% payload savings over plain gzip, including all packing dictionaries.

## Further reduction and the 600-byte target

Several alternatives were measured: shared values alone, shared object structures, string dictionaries, column storage, sentence fragments, prefix storage and different dictionary orders. More complex combinations produced some additional savings, but the implemented representation gives about 41% whole-file savings with a small encoder and decoder and no application-specific text rules.

A 600-byte uncompressed allowance gives **3.981 MB** for all 6,635 scored books, including dictionaries if the result remains self-contained. The implemented packed JSON contains:

| Component | Bytes before gzip |
|---|---:|
| Text dictionary, after common-prefix storage | 9,691,919 |
| Records and their references | 6,310,971 |
| Field-name schemas | 121,413 |

The text dictionary contains 138,443 distinct complete strings before prefix storage. There are 42,484 distinct strings whose final recorded occurrence is an evidence rationale, totaling 7,918,760 UTF-8 bytes. These explanations still contain some shared phrases; their distinctness is not a claim of incompressibility.

As a separate experiment, the prefix-stored text dictionary alone compresses to 2,269,411 bytes with gzip level 9 or 1,560,474 bytes with Brotli quality 9. Neither figure includes records, base64 or the interface. Brotli was measured only; it is not used by the page. Even that stronger dictionary-only result exceeds the 0.763 MB budget for a 90% reduction of the original HTML.

The current measurements therefore do not support either target. Compact factual records alone can be much smaller, but the retained explanations, evidence and shared storage must be included in any complete size claim. Deleting or summarizing those explanations, or moving data to a separate download, would change the stated preservation requirement.

## Verification and existing build issue

- Compared the complete decoded new catalog with the previous HTML's decoded catalog: exact equality except for the build timestamp. Dataset hash remains `59d744a2cb2663ef`.
- Calculation and data tests pass, including every recommended and vetoed portable record, exact scores, sources and coverage.
- Packing tests cover Unicode, common prefixes, HTML-like text, numbers, nulls, booleans, omitted fields, empty records, nested arrays, unusual property names and independent mutable records.
- Offline Chromium tests pass with zero JavaScript errors and zero network requests. They cover catalog rows, source and reference views, book details, filters, scoring, Pareto controls, settings export/import and responsive layouts.

The first test run exposed an existing stale `audit.rulesSha256` in `data/refs100_261102/compiled.json`. Its old hash matches the CRLF version of `AGENTS.md` from commit `31fe8b12306e56454352d1179fca32688644782e`. Removing only the newly added “Low-cost OpenRouter metadata workers” section from the current file reproduces that historical file exactly. The complete analysis prompt, exclusion and veto rules, and scoring instructions are unchanged. Only this audit hash was refreshed; book assessments, metadata, scores and source membership were not edited. The build's rules guard remains active.
