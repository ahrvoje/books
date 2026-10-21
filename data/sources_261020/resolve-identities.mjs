import fs from 'node:fs';
const dir = 'data/sources_261020/';
const read = f => JSON.parse(fs.readFileSync(dir + f, 'utf8'));
const norm = s => String(s || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, ' ').trim().replace(/^(the|a|an) /, '');
const overrides = read('identity-overrides.json');
const priorAliases = {
  'fermat s last theorem|simon singh':'q0371',
  'fermat s enigma|':'q0371',
  'years of lyndon johnson|robert a caro':'q0220',
  'poisoner s handbook|':'q0476',
  'alchemy of air|':'q0039',
  'bad blood|':'q0035',
  'ship of gold in the deep blue sea|':'q0157',
  'skunk works|':'q0069',
  'stuff matters|':'stuff',
  'code book|':'q0142',
  'most secret war the wizard war|r v jones':'q0067',
  'path between the seas|':'q0014',
  'immortal life of henrietta lacks|':'q0648',
  'why nations fail|':'q0178',
  'history of western philosophy|':'q0345',
  '1491|':'q0226',
  'napoleon the great|andrew roberts':'q0272'
};
for (const [k, priorId] of Object.entries(priorAliases)) overrides[k] = { priorId };
const authorAliases = {
  'history of mathematics|carl b boyer and uta c merzbach':'Carl B. Boyer',
  'project hail mary|':'Andy Weir',
  'journey through genius the great theorems of mathematics|':'William Dunham',
  'particle at the end of the universe|':'Sean Carroll',
  'nothing like it in the world|':'Stephen Ambrose',
  'longest day|':'Cornelius Ryan'
};
for (const [k, author] of Object.entries(authorAliases)) overrides[k] = { author };
fs.writeFileSync(dir + 'identity-overrides.json', JSON.stringify(overrides,null,2)+'\n');
const groups = new Map();
for (const b of read('inventory.json').books) {
  const k = norm(b.title.split(':')[0]);
  if (!groups.has(k)) groups.set(k, []);
  groups.get(k).push({id:b.id,title:b.title,author:b.author,owner:b.owner,sources:b.sources,occurrence:b.appearances[0].occurrence});
}
fs.writeFileSync(dir+'cross-identity-review.json',JSON.stringify([...groups].filter(([,g])=>g.length>1),null,2)+'\n');
console.log('Duplicate-title groups:',[...groups].filter(([,g])=>g.length>1).length);
