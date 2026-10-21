# Domain evidence review: second shard

`assessments.json` contains the 818 recommended books at zero-based positions 818–1635 after sorting their stable IDs with JavaScript lexical comparison. `audit.json` contains coverage counts. `validation.json` records structural checks.

All 818 book-specific prior assessment excerpts were read. The resulting domain estimates are conservative and usually low confidence. Unknown fields are omitted from `domains` and listed in each `researchAudit`; omission is not an assessed absence. No title or keyword rubric generated the grades.

The supplementary pass reviewed 35 available Open Library descriptions or contents records for books without prior domain grades. It added cautious grades for 17 books. These records are edition metadata, not primary full-text evidence. Publisher descriptions and contents for Mindell, Vincenti and Rosenberg were also inspected; Rosenberg's chapter 4 and chapter 6 author summaries support two specific mechanisms.

All connection reviews remain partial. Mechanisms identify concrete roles and a bounded common constraint or process. The one explicit join records transfer between Mindell's pre-war engineering communities and wartime research coordination. No joins were inferred solely from shared domain tags.

`judgments.txt` preserves manually authored base judgments. `evidence.json` preserves the prior evidence excerpts. `extra-evidence.json` preserves inspected catalogue material and source references. The scripts assemble these authored judgments; they do not derive grades from prose.

To reproduce the final assessment from the stored evidence, run from the repository root, in order:

```text
node data/enrichment_261020/domains_b/assemble.mjs 817
node data/enrichment_261020/domains_b/supplement.mjs
node data/enrichment_261020/domains_b/validate.mjs
```

Run `supplement.mjs` only after `assemble.mjs`, because it appends the authored mechanisms. To refresh the catalogue evidence, run `extra-evidence.mjs` after the base assembly and before supplementation; review any new records before updating the authored supplemental judgments.

Validation checks membership, schema, supported mechanism participants, unique mechanism IDs, unknown-field accounting, local files, and explicit reference anchors. It does not turn partial evidence into a complete contents or full-text review.
