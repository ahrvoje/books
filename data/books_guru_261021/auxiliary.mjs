import fs from 'node:fs';
import crypto from 'node:crypto';
const dir='data/books_guru_261021/';
const read=f=>JSON.parse(fs.readFileSync(dir+f,'utf8'));
const inv=read('inventory.json'),quotes=read('quotes.json');
const norm=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim().replace(/^(the|a|an) /,'');
const nominated=[
[28,'The Everything Store','Brad Stone'],[31,'The Everything Store','Brad Stone'],[37,'The Everything Store','Brad Stone'],
[30,'Culture series','Iain M. Banks'],[59,'Culture series','Iain M. Banks'],[50,'Dune series','Frank Herbert'],
[82,'Principles','Ray Dalio'],[93,'Whole Earth Catalog','Stewart Brand'],[95,'Enlightenment Now','Steven Pinker'],[104,'Delivering Happiness','Tony Hsieh'],
[192,'Antifascism','Paul Gottfried'],[196,'Fascism','Paul Gottfried'],[194,'The Ordeal of Civility','John Murray Cuddihy'],
[227,'Why Are All the Black Kids Sitting Together in the Cafeteria?','Beverly Daniel Tatum'],[228,'Children of Virtue and Vengeance','Tomi Adeyemi'],[231,'The Young Elites series','Marie Lu'],
[239,"Darwin's Dangerous Idea",'Daniel C. Dennett'],[247,'The Selfish Gene','Richard Dawkins'],[242,'The Elephant in the Brain','Kevin Simler, Robin Hanson'],
[246,'The Lessons of History','Will Durant, Ariel Durant'],[246,'The Tao of Philosophy','Alan Watts'],[246,'Class','Paul Fussell'],
[254,'Impro','Keith Johnstone'],[254,'The Lessons of History','Will Durant, Ariel Durant'],[254,'Class','Paul Fussell'],
[248,'Reinventing Discovery','Michael Nielsen'],[253,'Why Information Grows','César Hidalgo'],[312,'The Rational Optimist','Matt Ridley'],[315,'The Perfect Pass','S. C. Gwynne'],
[368,'Poor Charlie’s Almanack','Charles T. Munger'],[368,'The Autobiography of Charles Darwin','Charles Darwin'],[368,'The Selfish Gene','Richard Dawkins'],
[383,'Influence','Robert B. Cialdini'],[383,'The Autobiography of Charles Darwin','Charles Darwin'],[383,'The Selfish Gene','Richard Dawkins']
];
const audit=[];
for(const[qi,title,author]of nominated){const q=quotes[qi],parent=inv.books.find(b=>b.occurrences.some(o=>o.sourceId===q.sourceId&&o.title===q.title));
  let b=inv.books.find(b=>norm(b.title)===norm(title));
  if(!b){const key=norm(title)+'|'+norm(author);b={id:'bg'+crypto.createHash('sha256').update(key).digest('hex').slice(0,10),title,author,sources:[],occurrences:[],priorId:null,priorStatus:null,priorRefs:[],identityNote:'Explicit auxiliary title or series mention in a quotation; no external source expanded into additional candidates.'};inv.books.push(b);}
  const po=parent.occurrences.find(o=>o.sourceId===q.sourceId&&o.title===q.title);
  const occurrence={sourceId:q.sourceId,sourceURL:po.sourceURL,capturedPageURL:po.capturedPageURL,captureFile:po.captureFile,kind:'quotation_auxiliary_mention',parentCardTitle:q.title,quoteIndex:qi,title,author,productURL:null,originalRecommendationURLs:q.quotes.flatMap(q=>q.originalSourceURLs),quotedContext:q.quotes.map(q=>q.text).join(' / '),description:null,sourceReportedRating:null,metadataStatus:'third_party_mention; authors resolved by named context/card or primary bibliography; no rating attached'};
  if(!b.occurrences.some(o=>o.kind==='quotation_auxiliary_mention'&&o.quoteIndex===qi)){b.occurrences.push(occurrence);if(!b.sources.includes(q.sourceId))b.sources.push(q.sourceId);}
  audit.push({quoteIndex:qi,sourceId:q.sourceId,parentCardTitle:q.title,title,author,inventoryId:b.id,context:occurrence.quotedContext});
}
const evidence={
'The Everything Store':['https://www.hachettebookgroup.com/contributor/brad-stone/'],
'Whole Earth Catalog':['https://wholeearth.info/p/whole-earth-catalog-fall-1968','https://wholeearth.info/information'],
'The Young Elites series':['https://www.penguinrandomhouse.com/authors/223095/marie-lu/','https://www.penguin.co.uk/series/YOUNGEL/the-young-elites']
};
for(const b of inv.books){if(evidence[b.title])b.identityEvidence=evidence[b.title];b.sources.sort((a,b)=>a-b);}
inv.auxiliaryOccurrenceCount=audit.length;inv.quotationAudit={inspectedQuotes:quotes.length,namedSecondaryMentions:audit.length,method:'All393 extracted quotation records read. Named secondary works and named series are recorded; author-only references and unnamed plural books do not generate invented titles.'};
inv.books.sort((a,b)=>a.title.localeCompare(b.title));
fs.writeFileSync(dir+'inventory.json',JSON.stringify(inv,null,2)+'\n');fs.writeFileSync(dir+'auxiliary-mentions.json',JSON.stringify(audit,null,2)+'\n');
const overrides=read('identity-overrides.json');overrides.bg68b48bf27a={priorId:'g1182',reason:'Fiasco: The Inside Story of a Wall Street Trader is the alternate edition title of F.I.A.S.C.O.: Blood in the Water on Wall Street by Frank Partnoy.',confidence:'high'};overrides.bg4eca5b5b26={priorId:'h0570',reason:'Same Molecular Biology of the Cell textbook; changing coauthor lists reflect editions. Prior exclusion covers this work.',confidence:'high'};
fs.writeFileSync(dir+'identity-overrides.json',JSON.stringify(overrides,null,2)+'\n');
console.log({books:inv.books.length,auxiliaryMentions:audit.length,newAuxiliaryTitles:inv.books.filter(b=>b.occurrences.every(o=>o.kind==='quotation_auxiliary_mention')).map(b=>[b.id,b.title])});
