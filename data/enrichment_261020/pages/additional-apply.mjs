import fs from 'node:fs';
import zlib from 'node:zlib';
import assert from 'node:assert/strict';

const dir = 'data/enrichment_261020/pages';
const sources = JSON.parse(fs.readFileSync(`${dir}/additional-source-metadata.json`, 'utf8'));
const html = index => zlib.gunzipSync(fs.readFileSync(`${dir}/${sources[index].rawFile}`)).toString('utf8');
assert.match(html(0), /9780241543931/);
assert.match(html(0), /560/);
assert.match(html(0), /2023/);
assert.match(html(1), /English/);
assert.match(html(1), /560/);
const source = (index, provider) => ({
  ...sources[index], provider,
  rawFile: sources[index].rawFile.startsWith('data/') ? sources[index].rawFile : `${dir}/${sources[index].rawFile}`
});
const record = {
  q0702: {
    edition: {
      pages: 560,
      id: 'ISBN:9780241543931',
      url: sources[0].url,
      retrieved: sources[0].retrieved,
      language: 'English',
      format: 'Paperback',
      year: 2023,
      confidence: 'high',
      title: 'The Cosmography and Geography of Africa',
      authors: 'Johannes Leo Africanus',
      publisher: 'Penguin Classics',
      isbn13: ['9780241543931'],
      publicationDate: '2023-03-02',
      notes: 'Complete English translation by Anthony Ossa-Richardson and Richard J. Oosterhoff, based on the surviving manuscript. Publisher sample contents cover all seven manuscript books, notes and index; this is not one volume of the Pory/Brown edition or a partial anthology. Publisher extent includes introduction and notes. UK publication date; the same ISBN reached US distribution in 2024. The original composition year is separate and unchanged.',
      source: {
        ...source(0, 'Penguin Books UK'),
        corroboration: source(1, 'University of Edinburgh: translator research record'),
        scope: {
          ...source(5, 'Penguin Books UK publisher sample'),
          inspected: 'Copyright page (PDF page 5); contents (PDF pages 6–7); introduction on textual basis (printed pages xxv–xxviii).',
          finding: 'The manuscript is the source text; two substantial Ramusio passages absent from the manuscript are included in brackets. Translators explain sentence editing and removal of empty repetition. All seven manuscript books are present.'
        }
      }
    },
    reason: null,
    alternativeCompleteEdition: {
      title: 'The History and Description of Africa',
      author: 'Leo Africanus',
      translator: 'John Pory',
      editor: 'Robert Brown',
      publisher: 'Cambridge University Press',
      language: 'English',
      format: 'Three-volume paperback set',
      year: 2010,
      pages: 1288,
      calculation: '364 + 488 + 436 = 1288; sum of publisher extents, not cumulative last-page numbers.',
      scope: 'All three volumes of the Pory/Brown edition, with commentary and all nine books of the Ramusio-derived arrangement.',
      components: [
        { volume: 1, isbn13: '9781108012881', pages: 364, source: source(2, 'Cambridge University Press') },
        { volume: 2, isbn13: '9781108012898', pages: 488, source: source(3, 'Cambridge University Press') },
        { volume: 3, isbn13: '9781108012904', pages: 436, source: source(4, 'Cambridge University Press') }
      ]
    }
  }
};
for (const component of record.q0702.alternativeCompleteEdition.components) {
  const index = component.volume + 1;
  assert.match(html(index), new RegExp(component.isbn13));
  assert.match(html(index), new RegExp(String(component.pages)));
}
assert.equal(record.q0702.alternativeCompleteEdition.components.reduce((sum, volume) => sum + volume.pages, 0), 1288);
fs.writeFileSync(`${dir}/additional-page-results.json`, JSON.stringify(record, null, 2) + '\n');
console.log('q0702: 560 pages, full English paperback edition verified; complete Cambridge alternative: 1,288 pages.');
