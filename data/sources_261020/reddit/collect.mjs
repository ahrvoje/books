import fs from 'node:fs';
import crypto from 'node:crypto';

const dir = 'data/sources_261020/reddit';
fs.mkdirSync(`${dir}/raw`, { recursive: true });
const sources = [
  [127, 'area51', '1aej594', 'any_recommendations_on_books_on_skunkworks'],
  [131, 'booksuggestions', 'z2qibj', 'suggest_me_a_book_similar_to_chip_war'],
  [141, 'suggestmeabook', '1vpcn45', 'suggest_me_nonfiction_books_with_interesting'],
  [142, 'suggestmeabook', '1v56f5k', 'suggest_me_books_to_improve_rational_thinking'],
  [143, 'suggestmeabook', '1vo9rfk', 'help_me_find_a_nonfiction_book_with_technical'],
  [144, 'samharris', 'wwke21', 'could_you_recommend_a_resource_book_podcast_that'],
  [145, 'nonfictionbookclub', '1q3tac6', '2025_book_ratings'],
  [146, 'nonfictionbooks', '1x33v46', 'books_widely_considered_to_be_the_definitive_work'],
  [147, 'nonfictionbooks', '1wsupoa', 'used_book_haul']
].map(([source, subreddit, id, slug]) => ({ source, subreddit, id, url: `https://www.reddit.com/r/${subreddit}/comments/${id}/${slug}/` }));
fs.writeFileSync(`${dir}/sources.json`, JSON.stringify(sources, null, 2) + '\n');
const outcomes = [];
for (const source of sources) {
  const url = `${source.url}.json?limit=500&depth=20&raw_json=1&sort=old`;
  const filename = `${dir}/raw/${source.source}-thread.json`;
  if (fs.existsSync(filename)) continue;
  const retrieved = new Date().toISOString();
  try {
    const response = await fetch(url, { headers: { 'User-Agent': 'BookCatalogResearch/1.0 (public metadata)' }, signal: AbortSignal.timeout(30000) });
    const body = await response.text();
    const valid = body.trim().startsWith('[');
    const rawFile = valid ? filename : `${dir}/raw/${source.source}-response.html`;
    fs.writeFileSync(rawFile, body);
    const meta = { ...source, requestedUrl: url, finalUrl: response.url, retrieved, status: response.status, rawFile, sha256: crypto.createHash('sha256').update(body).digest('hex'), validJson: valid };
    fs.writeFileSync(`${dir}/raw/${source.source}-meta.json`, JSON.stringify(meta, null, 2) + '\n');
    outcomes.push(meta);
    console.log(JSON.stringify({ source: source.source, status: response.status, validJson: valid }));
    if ([401, 403, 429].includes(response.status) || /captcha|blocked by network security|whoa there/i.test(body)) {
      console.log('Public JSON access blocked. No further direct requests; use accessible web evidence.');
      break;
    }
  } catch (error) {
    outcomes.push({ ...source, retrieved, error: error.message });
    console.log(JSON.stringify({ source: source.source, error: error.message }));
    break;
  }
  await new Promise(resolve => setTimeout(resolve, 1500));
}
fs.writeFileSync(`${dir}/retrieval.json`, JSON.stringify(outcomes, null, 2) + '\n');
