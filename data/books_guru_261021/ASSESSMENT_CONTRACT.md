# New-title assessment contract

This batch follows the user's explicit instruction: document previously covered titles and duplicates, without new quality or eligibility assessment. Assess only the genuinely new unique titles assigned in the packet. Read current `AGENTS.md`; its three hard exclusions and V1–V5 apply. A low score or unwanted subject is not an extra exclusion. V4 allows supported, balanced expert speculation with safeguards. V5 requires doctrine or specifically evidenced extremist advocacy.

Write an array to your assigned `*-assessments.json`. Keep each packet ID. Use this shape:

```json
{
  "id": "packet id", "title": "verified title", "author": "verified author",
  "status": "recommended | vetoed | excluded | nonbook | unresolved",
  "confidence": "high | moderate | low", "eligibilityConfidence": "high | moderate | low",
  "eligibility": "Book form, fiction, purpose and structure finding.",
  "reason": "Specific conclusion, with any veto grounded in evidence.",
  "gateReview": {"BOOK_FORM":"finding","FICTION":"finding","REFERENCE":"finding","V1":"finding","V2":"finding","V3":"finding","V4":"finding","V5":"finding"},
  "evidence": ["URLs actually inspected"],
  "exclusion": "FICTION or REFERENCE, only when excluded",
  "veto": ["V1"], "vetoConfidence": "moderate",
  "raw": [0,0,0,0,0,0,0,0,0,0],
  "notes": ["E reason","S reason","U reason","M reason","D reason","R reason","F reason","A reason","N reason","P reason"],
  "year": 2000, "yearConfidence":"high", "yearNote":"Original publication evidence, not reprint year.",
  "T11": 0, "T12": 0, "themeNote":"Separate justification for both flags.",
  "periodEnd": null, "periodConfidence":"moderate", "periodNote":"Explicit timeless/cross-period account or central historical endpoint.",
  "amazon":{"count":null,"status":"Unknown after recorded attempts; O15=0 fallback.","attemptedAt":"2026-10-21","attempts":[]},
  "purchaseUrl":"Amazon product or explicitly identified search locator", "purchaseFormat":"Verified format, or unknown.",
  "reader":"Verified reader aggregate and source, otherwise Unavailable.",
  "enrichment":{"domains":{},"connections":{"status":"partial","mechanisms":[],"joins":[],"limitations":"Evidence limits."},"research":{"reviewed":"2026-10-21","unknownReason":"Evidence limits."}}
}
```

Excluded, nonbook and unresolved items receive no score inputs, dates, deductions or enrichment. If an assigned title proves previously covered, return `{id, mergeInto: "existing stable ID", reason, evidence}` instead of reassessing it, and notify the owner.

Raw criterion order E/S/U/M/D/R/F/A/N/P has maxima 20/17/15/12/10/9/7/5/3/2. The publisher calculates E/S/D quadratic contributions and all five deductions. Assess ten specific reasons, not generic reusable praise. Do not compute or round the raw vector prematurely. Unknown or weakly evidenced quality remains included at explicit confidence unless a serious veto is established independently.

Books Guru is an aggregator with observed mismatched descriptions. Its cards establish candidate occurrence, not factual quality, identity accuracy, a verified Amazon count or the authenticity of an expert endorsement. Verify new nonfiction through publisher/author material, contents, samples or other substantive evidence. Do not follow unrelated recommendation lists to add extra candidates. Record direct public retrieval/search attempts for Amazon; source-reported counts alone cannot become verified counts. A shared access failure must be described accurately, without pretending every product was inspected.

Capture edition pages and supported domains while researching new books. Edition fields: `pages`, `id`, `url`, `retrieved`, `language`, `format`, integer `year`, confidence. Domain IDs: SCI QNT CMP HTC ENG ENE MAT PRD QLT LOG TRD SCL INN INS ECO FIN POL MIL STR HEU. Each supported domain uses `{value:0..4,confidence,rationale,refs}`. Leave unknown domains absent. A mechanism needs `id`, at least two supported `domains`, distinct `roles`, causal `statement`, `scope`, strength 1..4, confidence and `refs`; a topic list is not a mechanism. Avoid filling fields from title words. Record missing evidence honestly.

Save research notes and retrieval provenance in this batch directory. Do not edit canonical ledgers, historical files, site files or active catalog. Prefer efficient batched checks and prioritize clear identity and gate decisions before score detail.
