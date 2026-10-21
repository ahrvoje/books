import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import assert from 'node:assert/strict';
import { books, state, DIR, amazonFields, titleMatches, authorMatches, clean } from './collect.mjs';

const pending = books.filter(b => b.amazon?.count == null);
assert.equal(pending.length, 499);
const rawFiles = fs.readdirSync(path.join(DIR, 'raw'));
const result = { version: 1, generated: new Date().toISOString(), scope: 'New observations for baseline-missing Amazon counts only. Pending review; do not rewrite the canonical baseline or scores.', books: {}, audit: {}, counts: {} };
const countOf = value => {
  const m = clean(value).match(/([\d,]+)\s+(?:global\s+)?ratings?\b/i);
  return m ? +m[1].replace(/,/g, '') : null;
};
for (const b of pending) {
  const files = [...new Set([
    ...state.books[b.id].attempts.filter(a => a.kind === 'amazon' && a.rawFile).map(a => a.rawFile.replace(/^raw\//, '')),
    ...rawFiles.filter(f => f.startsWith(`amazon-${b.id}-`) && f.endsWith('.html.gz'))
  ])], attempts = [];
  let observation = null;
  for (const file of files) {
    const html = zlib.gunzipSync(fs.readFileSync(path.join(DIR, 'raw', file))).toString();
    const meta = JSON.parse(fs.readFileSync(path.join(DIR, 'raw', file + '.meta.json'))), f = amazonFields(html);
    const titleMatch = titleMatches(b.title, f.title), authorMatch = authorMatches(b.author, f.byline);
    const globalMarkup = html.match(/<span\b[^>]*data-hook="total-review-count"[^>]*>([\s\S]*?)<\/span>/)?.[1] || '';
    const topMarkup = html.match(/<span\b[^>]*id="acrCustomerReviewText"[^>]*>([\s\S]*?)<\/span>/)?.[1] || '';
    const globalText = clean(globalMarkup), topText = clean(topMarkup);
    const globalCount = countOf(globalText), topRatingCount = countOf(topText);
    const bareTop = topText.match(/^\(([\d,]+)\)$/)?.[1];
    const topCount = topRatingCount ?? (bareTop ? +bareTop.replace(/,/g, '') : null);
    const product = f.productId || meta.url?.match(/\/dp\/([A-Z0-9]{10})/i)?.[1];
    const availableCount = globalCount ?? topRatingCount; // Never infer "reviews" = total ratings.
    const agreement = globalCount === null || topCount === null || globalCount === topCount;
    const accepted = meta.status === 200 && titleMatch && authorMatch && product && Number.isInteger(availableCount) && availableCount >= 0 && agreement;
    const blocked = /validateCaptcha|Robot Check|Server Busy/i.test(html);
    const reason = accepted ? 'Verified one matching product total-rating aggregate.' : blocked ? 'Public page blocked by CAPTCHA/Server Busy.' : !titleMatch || !authorMatch ? 'Title or author identity did not pass strict matching.' : !agreement ? 'Visible rating controls disagree.' : 'No explicit total-ratings aggregate; written reviews are not a substitute.';
    attempts.push({ url: meta.url, status: meta.status, retrieved: meta.retrieved, rawFile: `data/enrichment_261020/pages/raw/${file}`, title: f.title, byline: f.byline, product, titleMatch, authorMatch, globalText, topText, accepted: !!accepted, reason });
    if (accepted && !observation) observation = {
      count: availableCount, product, marketplace: new URL(meta.url).hostname, url: `https://${new URL(meta.url).hostname}/dp/${product}`, retrieved: meta.retrieved, confidence: 'high',
      limitations: 'One matching product aggregate observed in the cached public page; counts may combine formats under Amazon’s product grouping. No counts summed. New observation pending baseline review.',
      source: { rawFile: `data/enrichment_261020/pages/raw/${file}`, sha256: meta.sha256, title: f.title, byline: f.byline, globalText, topText }
    };
  }
  const reason = observation ? 'Resolved from one cached matching product.' : !files.length ? 'No cached matching product response; public collection stopped at CAPTCHA/Server Busy.' : attempts.every(a => a.reason.includes('blocked')) ? 'Public product requests blocked; no total count observed.' : attempts.some(a => a.titleMatch && a.authorMatch) ? 'Matching cached page has no reliable total-ratings aggregate.' : 'No cached candidate passed strict title/author identity checks.';
  result.books[b.id] = { observation };
  result.audit[b.id] = { title: b.title, author: b.author, reason, attempts };
}
const values = Object.values(result.books);
result.counts = { total: pending.length, resolved: values.filter(x => x.observation).length, unknown: values.filter(x => !x.observation).length, byUnknownReason: {} };
for (const [id, a] of Object.entries(result.audit)) if (!result.books[id].observation) result.counts.byUnknownReason[a.reason] = (result.counts.byUnknownReason[a.reason] || 0) + 1;
assert.equal(Object.keys(result.books).length, 499);
fs.writeFileSync(path.join(DIR, 'missing-ratings.json'), JSON.stringify(result, null, 2) + '\n');
console.log(result.counts);
