import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const dir='data/veto_review_261021/',read=f=>fs.readFileSync(f,'utf8'),sha=s=>crypto.createHash('sha256').update(s).digest('hex');
assert(!fs.existsSync(dir+'rules-amendment.json'),'Amendment already recorded');
const before=JSON.parse(read(dir+'baseline.json')).files['AGENTS.md'],after=read('AGENTS.md');
const expected=before.text.replace('1. Exclude fiction books','1. Works which do not represent a book and are never published in a book form.\r\n2. Exclude fiction books').replace('2. Exclude textbooks','3. Exclude textbooks');
assert.equal(after,expected,'Unexpected rule change: review before recording');
fs.writeFileSync(dir+'rules-amendment.json',JSON.stringify({recordedAt:new Date().toISOString(),previousSha256:before.sha256,reviewedSha256:sha(after),text:after,
 change:'Inserted exclusion for works never published as books; fiction and instruction/reference text unchanged, renumbered to 2 and 3. V1–V5 and scoring unchanged from the review baseline.',
 handling:'Every current review checks book form. Stable gate names replace positional H codes. Non-book references remain outside all three book ledgers. Historical baseline and analyses preserved.',
 wordingConcern:'The unchanged prose still says both hard exclusions and either exclusion rule although there are now three numbered items. Apply all listed conditions; do not alter the user instructions.'},null,2)+'\n');
console.log('Recorded the exact rule amendment without changing the baseline.');
