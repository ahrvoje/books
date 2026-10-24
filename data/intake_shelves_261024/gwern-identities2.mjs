import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json'),rows=read(dir+'/rows.json'),selected=read(dir+'/selected.json'),base=read('data/top500_261024/compiled.json');
const gates={
'Umineko no Naku Koro ni':['Ryukishi07','H2: fictional visual novel, also adapted into published manga; the source explicitly discusses its invented mystery narrative.'],
'Bias in Mental Testing':['Arthur R. Jensen','H3: specialist psychometric methods monograph; source review describes extensive formulas, factor extraction, test properties and glossary-dependent technical study.'],
'On Machine Intelligence':['Donald Michie','H3: collected technical machine-intelligence papers; source contrasts this earlier technical collection with the accessible later anthology.'],
'Fuse Teppō Musume no Torimonochō':['Kazuki Sakuraba','H2: fictional novel, referred to as such in the source discussion.']
};
for(const[t,[author,note]]of Object.entries(gates)){const b=a.find(b=>b.title===t);if(!b)throw Error(t);Object.assign(b,{author,status:'excluded',note,confidence:'high'});}
const spec=a.find(b=>b.title==='The Theory of Special Operations'),s=selected.find(b=>b.title==='Spec Ops');
if(spec&&s){for(const r of rows.filter(r=>r.newId===spec.id))r.newId=s.id;spec.mergedInto=s.id;}
const arpa=a.find(b=>b.title==='ARPA and SCI: Surfing AI');const strategic=[...base.currentBooks,...selected].find(b=>b.title.startsWith('Strategic Computing')&&b.author.includes('Roland'));
if(arpa&&strategic){for(const r of rows.filter(r=>r.newId===arpa.id)){if(strategic.id.startsWith('shelf-'))r.newId=strategic.id;else{r.id=strategic.id;r.status=strategic.status;delete r.newId;}}arpa.mergedInto=strategic.id;}
write(dir+'/triaged.json',a);write(dir+'/rows.json',rows);
const m=read(dir+'/metadata-overrides.json');m['Pragmatism an Introduction']=m['Pragmatism: An Introduction'];delete m['Pragmatism: An Introduction'];m['Pragmatism an Introduction'].edition.format='hardcover';m['Pragmatism an Introduction'].edition.notes+=' Hardcover ISBN 9780745646640; publisher has a separate paperback ISBN.';write(dir+'/metadata-overrides.json',m);
console.log({specMerged:!!(spec&&s),arpaMatched:strategic?.id});
