import fs from 'node:fs';
const path = process.argv[2];
const packet = JSON.parse(fs.readFileSync('data/sources_261020/math/packet.json', 'utf8'));
const observations = ['002','003'].flatMap(n => JSON.parse(fs.readFileSync(`data/sources_261020/math/amazon-input-${n}.results.json`, 'utf8').replace(/^\uFEFF/, '')));
const batch = JSON.parse(fs.readFileSync(path, 'utf8'));
for (const item of batch) {
  const id = packet[item.index].id;
  const observed = observations.find(x => x.id === id);
  if (!observed && item.amazon) continue;
  if (!observed) throw new Error(`No reviewed Amazon response: ${id}`);
  const html = fs.readFileSync(observed.raw, 'utf8');
  const match = html.match(/data-hook="total-review-count"[^>]*>\s*([\d,]+)\s+global ratings?/);
  const count = match ? Number(match[1].replaceAll(',', '')) : null;
  item.amazon = {count, marketplace:'amazon.com', product:observed.url.split('/').at(-1), url:observed.url,
    attemptedAt:observed.retrieved.slice(0,10), retrieved:observed.retrieved,
    status:count === null ? 'Matching public product retrieved; no total global-rating aggregate shown. O15=0 fallback; unknown is not zero.' : 'Matching title and author reviewed. Total global ratings shown on this single product; no edition or marketplace counts added.',
    attempts:[{url:observed.url,result:observed.status,raw:observed.raw}]};
  item.purchaseUrl = observed.url;
  item.reader = count === null ? 'Unavailable: matching Amazon product shows no verified total-rating aggregate.' : `Amazon.com: ${count} global ratings${observed.rating ? `; ${observed.rating}` : ''}, retrieved ${observed.retrieved.slice(0,10)}. ${observed.url}`;
  if (!item.evidence.includes(observed.url)) item.evidence.push(observed.url);
}
fs.writeFileSync(path, JSON.stringify(batch,null,2)+'\n');
