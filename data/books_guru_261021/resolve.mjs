import fs from 'node:fs';
const dir='data/books_guru_261021/';
const read=f=>JSON.parse(fs.readFileSync(dir+f,'utf8'));
const inv=read('inventory.json');const overrides={};
const aliases={
bg1c76dce682:['h0593','1984 is the numeric-title variant of Orwell’s Nineteen Eighty-Four.'],
bg39f54b07a0:['g1029','Short source card title; author and image full title identify Deng Xiaoping and the Transformation of China.'],
bgcd2b76d528:['g0009','Short source card title; author and image full title identify Genghis Khan and the Making of the Modern World.'],
bg29fb30824d:['g0043','Van Doren biography: source labels a volume edition; prior entry covers the same complete biography.'],
bg7227baafc1:['q0651','Inverted catalogue article: Elegant Defense, An is An Elegant Defense by Matt Richtel.'],
bg1a50d5b4f3:['h0332','Same work; source lists coauthor Rappaport as well as Mauboussin.'],
bg7ae2259163:['h0383','Same work; source lists only coauthor William Ury, with middle initial.'],
bgf34e74ed7c:['g0265','Same work; source lists both Womack and Jones, with middle initials.'],
bg3910322f05:['h0003','Number-word title variant: One Thousand Ways to Make $1000 is Minaker’s 1000 Ways to Make $1,000.'],
bg594477ad83:['g0642','Short card title; same Allwood/Cullen work, Sustainable Materials With Both Eyes Open.'],
bg9fb5689888:['q1029','Lao Tzu and Laozi are romanization variants for the traditional attribution of Tao Te Ching.'],
bg78805497a1:['h0818','Same title with punctuation and workweek spacing variant; Tim and Timothy Ferriss are the same author.'],
bgf6047989a3:['g0796','Short card title for Principles for Dealing with the Changing World Order by Dalio.'],
bg0bfd9647c5:['h0890','Cixin Liu and Liu Cixin differ by ordering of the same author’s name.'],
bga8e93c8589:['g0372','Unnumbered first volume; product ISBN1537000454 is volume1, not the later separately named volumes.'],
bgb6e49023d9:['g0990','Explicit1940–1965 volume is Defender of the Realm, already covered separately.'],
bg62296a73f5:['g0382','Generic source author Collective of authors refers to the same collective-authored Little Bitcoin Book; no competing work identified.'],
bg434d8d4c66:['g0157','Same author William Thorndike; source adds middle initial and Jr.'],
bg615eed75dd:['g0853','Title variant drops initial On; same Ricardo treatise.'],
bg1f59dcfd2a:['g0483','Same two authors in reversed order, Vigna and Casey.'],
bgdf2c0d7b7f:['q0625','3.0 labels an updated edition of Friedman’s The World Is Flat, not a distinct work.'],
bg13355e61d8:['g0929','Apostrophe variation in Beginner’s Mind; same Suzuki book.'],
bgd9d0e32eec:['n_last_lion_series','The1874–1932 volume is included in the explicitly previously covered three-volume Last Lion biography.'],
bg9120908107:['n_last_lion_series','The1932–1940 volume is included in the explicitly previously covered three-volume Last Lion biography.'],
bg741700e704:['h0353','Foundation and Empire is volume2 of the explicitly previously covered Foundation trilogy.'],
bg8777e6f638:['h0353','Second Foundation is volume3 of the explicitly previously covered Foundation trilogy.'],
bg827fbbee84:['h0994','The Return of the King is the third part of the explicitly previously covered Lord of the Rings work.']
};
for(const b of inv.books){if(/^Art of Computer Programming - Vol/.test(b.title))aliases[b.id]=['h0835','Named volume or fascicle is part of the explicitly previously covered Art of Computer Programming series; retain component identity in occurrences.'];if(/^The Feynman Lectures on Physics - Vol/.test(b.title))aliases[b.id]=['n5bddeddc6f','Named volume is part of the explicitly previously covered three-volume Feynman Lectures; retain component identity in occurrences.'];}
for(const[id,[priorId,reason]]of Object.entries(aliases))overrides[id]={priorId,reason,confidence:'high'};
for(const b of read('match-candidates.json'))if(!overrides[b.id])overrides[b.id]={new:true,reason:'Reviewed title/author candidates: none is the same work. Same-author different-title books, different-author namesakes, later volumes outside an explicitly covered set, and a collection versus a single story stay distinct.'};
overrides.bg5c494c8148={new:true,reason:'Source image explicitly identifies Leo Gough’s modern-day interpretation of Fred Schwed, ISBN190682133X. This is not Schwed’s original work.'};
overrides.bgb1118ff1cf={new:true,reason:'Ted Chiang story collection; prior Story of Your Life entry covers the single title story, not explicitly the entire collection. Keep distinct.'};
overrides.bge2bcf20dca={new:true,reason:'Gulag volume2 is not the currently covered volume1; earlier generic/abridged mentions do not establish prior assessment of this full volume.'};
overrides.bga3aeda092c={new:true,reason:'Gulag volume3 is not the currently covered volume1; earlier generic/abridged mentions do not establish prior assessment of this full volume.'};
fs.writeFileSync(dir+'identity-overrides.json',JSON.stringify(overrides,null,2)+'\n');
console.log('Reviewed overrides',Object.keys(overrides).length);
