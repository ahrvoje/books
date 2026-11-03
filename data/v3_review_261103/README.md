# V3 review audit

The active catalog is `compiled.json`. The decision report is [analysis_v3review_261103_2142.md](../../analysis/analysis_v3review_261103_2142.md).

- `baseline.json` records the previous catalog and preservation hashes.
- `inputs.json` preserves the starting book-specific evidence used for screening.
- `screening-ledger.json` covers all 6,635 starting scored records. Its review level distinguishes structured screening from focused judgment. Flags identify evidence gaps; they do not decide vetoes.
- `changes.json` records 64 focused decisions, their evidence and numerical changes.
- `recovered-purpose.json` contains bounded sections from older analyses. Historical wording and scores remain historical. A total of 412 current records retain these extracts; the focused decisions carry their own findings.
- `archived-metadata.json` preserves records removed from live scored metadata.
- `verification.json` and `browser-check.json` record the final checks.

Run `node data/v3_review_261103/verify.mjs` from the repository root to check preservation, scores, membership, report tables and metadata. Run `node data/v3_review_261103/browser-check.mjs` for the focused offline interface checks. The other scripts record the one-time migration and its corrections; do not rerun them against the completed catalog.

This is a review of saved evidence with focused external checks, not a new full-text reading of the catalog. The 1,763 direct-review flags remain unresolved evidence limits.
