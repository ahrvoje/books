import fs from 'node:fs';
const d='data/intake_progress_261023',read=f=>JSON.parse(fs.readFileSync(f)),p=read(d+'/pending.json'),rows=read(d+'/matched.json');
const norm=s=>String(s).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const fix=[
[229,'Progress: Ten Reasons to Look Forward to the Future','Johan Norberg'],
[229,'How We Got Here: From Bows and Arrows to the Space Age','Christopher Hallpike'],
[230,'Salt: Grain of Life','Pierre Laszlo'],[231,'Salt: Grain of Life','Pierre Laszlo'],
[233,"Ancient Engineers' Inventions: Precursors of the Present",'Cesare Rossi; Flavio Russo; Ferruccio Russo'],
[240,'The History of Mathematics: A Reader','John Fauvel; Jeremy Gray'],
[231,'Tesla: Inventor of the Electrical Age','W. Bernard Carlson'],
[235,'Concorde: New Shape in the Sky','Kenneth Owen'],
[237,'Computer Architecture: A Quantitative Approach','John L. Hennessy; David A. Patterson'],
[231,'The Limits to Growth','Donella H. Meadows; Dennis L. Meadows; Jørgen Randers; William W. Behrens III'],
[232,'Aftermath','Flying Magazine'],[232,'Lincoln: Speeches and Writings 1859-1865','Abraham Lincoln'],
[232,'Artificial Intelligence','Stuart Russell; Peter Norvig'],[232,'Quantum Mechanics','Nouredine Zettili'],
[232,'Priceless','Lloyd Constantine'],[232,'Abstract Algebra','David S. Dummit; Richard M. Foote'],
[232,'Real Analysis','N. L. Carothers'],[232,'Special Relativity','A. P. French'],
[232,'Upstart','Edward M. Walsh'],[232,'Lincoln','Fred Kaplan'],[232,'An Autobiography','Anthony Trollope'],
[232,'A Great Leap Forward','Alexander J. Field'],[232,'Machine Learning','Stephen Marsland'],[232,'The Deep','Claire Nouvian']
];
const extra=[
[245,'The Ancient Engineers','L. Sprague de Camp'],[239,'The Science of Superman','Mark Wolverton'],
[240,'Principia Mathematica','Isaac Newton'],[240,'Elements','Euclid'],[240,'The Bible','Multiple ancient authors'],
[240,'A History of Mathematics: An Introduction','Victor J. Katz'],[240,'The History of Mathematics: An Introduction','David Burton'],
[240,'Mathematics Emerging','Jacqueline Stedall'],[240,'Lewis Carroll in Numberland','Robin Wilson'],[240,'Euclid and His Modern Rivals','Charles Lutwidge Dodgson'],
[241,'An Essay on the Principle of Population','Thomas Robert Malthus'],
[231,'Our Plundered Planet','Fairfield Osborn'],[231,'Road to Survival','William Vogt'],
[231,'The Economics of the Second World War: Seventy-Five Years On','Stephen Broadberry; Mark Harrison'],
[231,'War and Economic Development: Essays in Memory of David Joslin','J. M. Winter'],
[231,'Super Porphyry Copper & Gold Deposits: A Global Perspective','T. M. Porter'],
[231,'100+ Years of Plastics','E. Thomas Strom; Seth C. Rasmussen'],
[231,'Nuts & Bolts of Construction History','Robert Carvais et al.'],
[231,'The World Copper Factbook 2021','International Copper Study Group'],
[231,'2021 Guide to the Business of Chemistry','American Chemistry Council'],
[231,'Recycling Rates of Metals: A Status Report','UNEP'],
[231,'Material Resources, Productivity and the Environment','OECD'],
[231,'Global Material Resources Outlook to 2060','OECD'],
[231,'The Future of Petrochemicals','International Energy Agency'],
[231,'Net Zero by 2050: A Roadmap for the Global Energy Sector','International Energy Agency'],
[231,'The Role of Critical Minerals in Clean Energy Transitions','International Energy Agency'],
[231,'World Energy Investment','International Energy Agency'],[231,'World Energy Outlook','International Energy Agency'],
[231,'Sand and Sustainability: 10 Strategic Recommendations to Avert a Crisis','UNEP']
];
const c=read(read('data/catalog.json').compiled),all=[...c.currentBooks,...c.exclusions];
for(const [source,title,author] of fix){let r=rows.find(r=>r.source===source&&r.title===title);if(!r)throw Error(title);for(const k of ['id','status','matchedTitle','matchedAuthor'])delete r[k];r.author=author;r.identityCorrection='Rejected short-title match to a different author/work';}
for(const [source,title,author] of extra)if(!rows.some(r=>r.source===source&&norm(r.title)===norm(title)))rows.push({source,title,author,context:'Additional explicit title in source prose/comments or bibliography papers section'});
for(const r of rows.filter(r=>!r.id)){
let b=p.find(b=>norm(b.title)===norm(r.title));if(!b){let hits=all.filter(b=>norm(b.title)===norm(r.title)&&r.author.split(/[; ]/).some(a=>a.length>3&&norm(b.author).includes(norm(a))));if(hits.length===1){r.id=hits[0].id;r.status=hits[0].status||'excluded';continue;}
b={...r,key:norm(r.title),index:p.length,sources:[]};p.push(b);}b.sources=[...new Set([...b.sources,r.source])];
}
fs.writeFileSync(d+'/pending.json',JSON.stringify(p,null,2));fs.writeFileSync(d+'/matched.json',JSON.stringify(rows,null,2));console.log(p.filter(b=>b.index>=772).map(b=>[b.index,b.title,b.author]));
