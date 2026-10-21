import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dir, '../..');
const write = (name, value) => fs.writeFileSync(path.join(dir, name), JSON.stringify(value, null, 2) + '\n');
const sources = [
  [127, 'skunkbooks', 'Reddit: books on Skunk Works', 'https://www.reddit.com/r/area51/comments/1aej594/any_recommendations_on_books_on_skunkworks/'],
  [128, 'hn33792217', 'Hacker News 33792217', 'https://news.ycombinator.com/item?id=33792217'],
  [129, 'hn40864249', 'Hacker News 40864249', 'https://news.ycombinator.com/item?id=40864249'],
  [130, 'hn39057219', 'Hacker News 39057219', 'https://news.ycombinator.com/item?id=39057219'],
  [131, 'chipwarbooks', 'Reddit: books similar to Chip War', 'https://www.reddit.com/r/booksuggestions/comments/z2qibj/suggest_me_a_book_similar_to_chip_war/'],
  [132, 'hn38556188', 'Hacker News 38556188', 'https://news.ycombinator.com/item?id=38556188'],
  [133, 'hn42157034', 'Hacker News 42157034', 'https://news.ycombinator.com/item?id=42157034'],
  [134, 'hn36581241', 'Hacker News 36581241', 'https://news.ycombinator.com/item?id=36581241'],
  [135, 'hn29462663', 'Hacker News 29462663', 'https://news.ycombinator.com/item?id=29462663'],
  [136, 'purdueread', 'Purdue nonlinear optics reading list', 'https://www.physics.purdue.edu/nlo/ReadingList.html'],
  [137, 'mathaha', 'Reddit: mathematics aha moments', 'https://www.reddit.com/r/math/comments/ovw4f7/what_book_made_gave_you_the_aha_moment/'],
  [138, 'mathrigor', 'Reddit: mathematics textbooks and rigor', 'https://www.reddit.com/r/math/comments/18uy6dv/wellwritten_textbooks_with_a_midlevel_of_rigor/'],
  [139, 'uncwbooks', 'UNCW: Russell Herman reading list', 'https://people.uncw.edu/hermanr/booklist.htm'],
  [140, 'casualmath', 'MathOverflow: casual advanced mathematics books', 'https://mathoverflow.net/questions/322987/good-casual-advanced-math-books'],
  [141, 'interesting', 'Reddit: interesting nonfiction', 'https://www.reddit.com/r/suggestmeabook/comments/1vpcn45/suggest_me_nonfiction_books_with_interesting/'],
  [142, 'rationality', 'Reddit: rational thinking', 'https://www.reddit.com/r/suggestmeabook/comments/1v56f5k/suggest_me_books_to_improve_rational_thinking/'],
  [143, 'technicalnf', 'Reddit: technical nonfiction', 'https://www.reddit.com/r/suggestmeabook/comments/1vo9rfk/help_me_find_a_nonfiction_book_with_technical/'],
  [144, 'reasonbooks', 'Reddit: reasoning resources', 'https://www.reddit.com/r/samharris/comments/wwke21/could_you_recommend_a_resource_book_podcast_that/'],
  [145, 'ratings2025', 'Reddit: 2025 book ratings', 'https://www.reddit.com/r/nonfictionbookclub/comments/1q3tac6/2025_book_ratings/'],
  [146, 'definitive26', 'Reddit: definitive nonfiction works', 'https://www.reddit.com/r/nonfictionbooks/comments/1x33v46/books_widely_considered_to_be_the_definitive_work/'],
  [147, 'usedhaul', 'Reddit: used book haul', 'https://www.reddit.com/r/nonfictionbooks/comments/1wsupoa/used_book_haul/']
].map(([number, short, label, url]) => ({ number, short, label, url }));
if (!fs.existsSync(path.join(dir, 'baseline.json'))) {
  const files = ['RECOMMENDED_BOOKS.md', 'VETOED_BOOKS.md', 'EXCLUDED_BOOKS.md', 'SOURCES.md', 'site/enrichment.json'];
  const baseline = Object.fromEntries(files.map(file => {
    const text = fs.readFileSync(path.join(root, file), 'utf8');
    return [file, { text, sha256: crypto.createHash('sha256').update(text).digest('hex') }];
  }));
  write('baseline.json', baseline);
}
if (!fs.existsSync(path.join(dir, 'manifest.json'))) {
  const time = new Date();
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Warsaw', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
  }).formatToParts(time).map(p => [p.type, p.value]));
  const date = `${parts.year}-${parts.month}-${parts.day}`;
  const stamp = `${parts.year.slice(2)}${parts.month}${parts.day}_${parts.hour}${parts.minute}`;
  write('manifest.json', {
    date, stamp, startedAt: time.toISOString(), reviewYear: 2026,
    previousCompiled: 'data/glasp_261019/compiled.json',
    duplicateInput: 'The second occurrence of HN 36581241 is source 134, not an additional source.',
    sources: sources.map(s => ({ ...s, report: `analysis/analysis_${s.short}_${stamp}.md` }))
  });
}
console.log('Saved immutable batch baseline and 21-source manifest.');
