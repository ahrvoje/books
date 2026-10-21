import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { retrieve, DIR } from './collect.mjs';

const urls = [
  'https://www.penguin.co.uk/books/446348/the-cosmography-and-geography-of-africa-by-africanus-leo/9780241543931',
  'https://www.research.ed.ac.uk/en/publications/the-cosmography-and-geography-of-africa/',
  'https://www.cambridge.org/core/books/history-and-description-of-africa/97E2E0EC4BBEC18496871C315C965CC1',
  'https://www.cambridge.org/core/books/the-history-and-description-of-africa/B6E0CCB61666C4CDC948C59BDD1FABA3',
  'https://www.cambridge.org/core/books/history-and-description-of-africa/B613803A560E64B69E037D9C0AB203BA'
];
const evidence = [];
for (let i = 0; i < urls.length; i++) {
  const r = await retrieve(urls[i], `additional-q0702-${i}`, 'html');
  evidence.push(r);
  console.log(JSON.stringify({ url: r.url, status: r.status, file: r.rawFile }));
  await new Promise(resolve => setTimeout(resolve, 1100));
}
const sampleUrl = 'https://cdn.penguin.co.uk/dam-assets/books/9780241543931/9780241543931-sample.pdf';
const response = await fetch(sampleUrl);
if (!response.ok) throw new Error(`Publisher sample HTTP ${response.status}`);
const sample = Buffer.from(await response.arrayBuffer());
if (sample.subarray(0, 4).toString() !== '%PDF') throw new Error('Not a PDF');
const rawFile = 'data/enrichment_261020/pages/raw/additional-q0702-penguin-sample.pdf';
fs.writeFileSync(rawFile, sample);
const metadata = {
  url: sampleUrl, retrieved: new Date().toISOString(), status: response.status,
  rawFile, sha256: crypto.createHash('sha256').update(sample).digest('hex')
};
fs.writeFileSync(path.join(DIR, 'raw/additional-q0702-penguin-sample.meta.json'), JSON.stringify(metadata, null, 2) + '\n');
evidence.push(metadata);
fs.writeFileSync(path.join(DIR, 'additional-source-metadata.json'), JSON.stringify(evidence.map(({ data, text, ...r }) => r), null, 2) + '\n');
