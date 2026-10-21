# Source batch assessment contract

The inventory records source mentions. It does not decide eligibility. Use `AGENTS.md` and `spec_01.md`. The packet for each reviewer contains the full prior scored record, any prior exclusion, existing edition/domain evidence, and the captured source occurrences. Read the linked prior book assessment and current deduction record for each encountered existing book.

Save an array in your assigned directory as `assessments.json`. Use the packet `id` unchanged. Do not edit the ledgers or the site's generated catalog. Every packet work needs one decision:

```json
{
  "id": "packet ID",
  "title": "verified title",
  "author": "verified author",
  "status": "recommended | vetoed | excluded | unresolved | nonbook",
  "confidence": "high | moderate | low",
  "eligibility": "Purpose, structure and audience; why the two hard exclusions pass or fail.",
  "reason": "Book-specific conclusion, including serious veto finding or why none is established.",
  "evidence": ["public URLs actually retrieved", "analysis/previous_file.md#anchor"],
  "reassessment": "For existing books: explicit changed/retained gates, ten attainments, themes, dates and count, with reasons.",
  "exclusion": "H1 or H2, only for excluded books",
  "veto": "V1–V5 identifiers, only for vetoed books",
  "vetoConfidence": "high | moderate | low",
  "raw": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "notes": ["E reason", "S reason", "U reason", "M reason", "D reason", "R reason", "F reason", "A reason", "N reason", "P reason"],
  "year": 2000,
  "yearConfidence": "high | moderate | low",
  "yearNote": "Original publication evidence; distinguish translated/revised edition.",
  "T11": 0,
  "T12": 0,
  "themeNote": "Separate reasons for both theme flags.",
  "periodEnd": null,
  "periodConfidence": "high | moderate | low",
  "periodNote": "Explicit non-period determination or supported endpoint and scope.",
  "amazon": {
    "count": null,
    "status": "Unavailable after specified retrieval attempts; O15=0 fallback.",
    "attemptedAt": "ISO date",
    "attempts": []
  },
  "purchaseUrl": "verified Amazon product link, or clearly labeled search locator if product unresolved",
  "purchaseFormat": "verified edition format or explicit unknown",
  "reader": "Actual observed reader aggregate and citation, otherwise Unavailable.",
  "enrichment": {
    "edition": null,
    "domains": {},
    "connections": { "status": "partial", "mechanisms": [], "joins": [], "limitations": "Describe what was and was not checked." },
    "research": { "reviewed": "2026-10-20", "unknownReason": "Specific evidence limitation." }
  }
}
```

Only recommended and vetoed records receive scores, dates and deductions. Raw attainments are E/S/U/M/D/R/F/A/N/P with maxima 20/17/15/12/10/9/7/5/3/2. Never square a prior contribution again. The batch builder computes all contributions, deductions, totals and verdicts.

New source mentions are not independent evidence of quality. Retaining a score requires a fresh, stated comparison with the evidence; changing it requires a reason. A publisher's description can establish purpose and contents but cannot prove its own praise. Use moderate or low confidence where evidence is limited.

For Amazon, retain an existing verified observation with its true date unless new verified evidence supersedes it. For new works, attempt public product/index retrieval and preserve the result. Never invent a count, product or reader rating. Stop at access challenges. A domain search failure can explain unavailable further product retrieval; do not claim every remaining product was individually retrieved.

Site enrichment uses the `site/build.mjs` contract: domain values are 0–4, each with `value`, `confidence`, `rationale`, `refs`. Unknown stays absent, not zero. An edition needs `pages`, `id`, `url`, `retrieved`, `language`, `format`, integer `year`, and confidence. Page counts must identify one actual print/e-book edition and its scope. Multi-volume nominations need the complete nominated scope, not one volume. Use all supported evidence; no grades inferred from title words.

Connections need a stated causal mechanism, at least two supported domain participants, their distinct roles, scope, strength 1–4, confidence and references. A list of topics is not a mechanism. Mark reviews partial when evidence does not justify a complete review of all connections.

Unresolved names must stay in the source audit until identity is established. A real named book in a comment counts as a mention even if the comment misidentifies a cover; identify the comment provenance accurately.
