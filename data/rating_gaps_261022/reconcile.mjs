import fs from 'node:fs';
import zlib from 'node:zlib';
import assert from 'node:assert/strict';
const dir='data/rating_gaps_261022/',s=JSON.parse(fs.readFileSync(dir+'captures.json'));
const notes={
 'rem-u1833':'Author-follow panel identifies John Newhouse.',
 'nc56e0cbafe':'Exact title and Stanovich surname; Keith E. Stanovich is the identified author of this ISBN.',
 'n6b21a7a71a':'Exact title and Blockley surname; David Blockley is the identified author of this ISBN.',
 'h1164':'Exact title and Harris surname; Larry Harris appears in the matching alternate product title.',
 'n95576bf6a6':'Product description explicitly names Douglas Smith and Robert Alexander.',
 'nb06e887b70':'Apollo 13 is the catalogued retitle of Lost Moon; James Lovell and Jeffrey Kluger match. Parenthetical catalog identity note caused the automatic rejection.',
 'n7323020521':'Author-follow panel identifies Anton Zeilinger.',
 'bg5ca24349c5':'Michael Dell matches; catalog coauthor separator with is not parsed by the automatic matcher.',
 'ndd2463e2b7':'Author-follow panel identifies Paul J. Nahin.',
 'g0560':'Author-follow panel identifies Richard P. Feynman and Ralph Leighton.',
 'bg732f9f21a2':'Exact title and both surnames Land and Nilsson match the two catalog authors.',
 'rem-u0145':'Exact title and Dr Li byline; short surname and hyphenated first name cause automatic rejection.',
 'rem-u1579':'Exact title and Dawkins surname; Richard Dawkins is the identified author of this ISBN.',
 'g1153':'Parenthesized Mis in catalog title causes token mismatch; same title and both authors match.',
 'rem-u0830':'Exact ISBN 0749472715 identifies Michael Sales, corroborated by https://books.google.com/books/about/Aviation_Logistics.html?id=fIF4CwAAQBAJ .',
 'bg5e1a0c83aa':'Exact title and Wall surname; Joseph Frazier Wall is the catalog author of this ISBN.',
 'bgf077c854c9':'Henry Ford matches; catalog coauthor separator with is not parsed by the automatic matcher.',
 'n7578db60f5':'Updated edition subtitle Discovering the Higgs Boson; exact author and publisher record https://penguinrandomhousehighereducation.com/book/?isbn=9780307591821 .',
 'naef7c41178':'4 Percent and 4% are equivalent title forms; author Richard Panek matches.'
};
for(const [id,note] of Object.entries(notes)){const b=s.books[id];if(b.amazon)continue;const a=b.attempts.find(a=>a.count!=null&&a.status===200);assert(a,id);
 const text=zlib.gunzipSync(fs.readFileSync(a.rawFile)).toString();assert(text.includes(a.evidence));
 b.amazon={...a,titleMatch:true,authorMatch:true,identityNote:note,manualIdentityReview:true};
}
fs.writeFileSync(dir+'captures.json',JSON.stringify(s,null,2)+'\n');
console.log('Accepted',Object.values(s.books).filter(b=>b.amazon).length);
