import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json'),rows=read(dir+'/rows.json');
for(const title of ['Pages of History and Autobiography','Mystical Works']){
 const b=a.find(b=>b.title===title);if(!b)throw Error(title);
 Object.assign(b,{status:'nonbook',author:'Jorge Luis Borges',confidence:'high',note:'Extraction captured the title inside a Borges prologue/essay heading, explicitly linked as a book review in the source, not a separate nomination of the underlying anthology. The nominated item is an essay in Selected Non-Fictions, already encountered separately; no additional book or source count. Evidence: captured 259-extracted.json hyperlink and https://s3.amazonaws.com/arena-attachments/911407/e11bf56a7763d0a3f72d457ea00e779b.pdf contents pp. x and notes p.546.'});delete b.metadata;
}
const alias=a.find(b=>b.title==='Experimenter Expectancy Effects'),target=a.find(b=>b.title==='Experimenter Effects In Behavioral Research');
alias.mergedInto=target.id;alias.note='Loose title used in the same source review of Rosenthal, not an independently identified second book.';for(const r of rows.filter(r=>r.newId===alias.id))r.newId=target.id;
for(const[title,author]of[['I am a Pencil','Leonard E. Read'],['Selected Poems','Paul Celan'],['The Complete Poems','Randall Jarrell'],['Left In The Dark','Tony Wright and Graham Gynn'],['The Poems of Gerard Manley Hopkins','Gerard Manley Hopkins'],['Man’yoshu','Various poets, traditionally compiled by Ōtomo no Yakamochi']]){
 const b=a.find(b=>b.title===title);if(!b)throw Error(title);b.author=author;b.identityNote='Identity corrected from explicit source context; unrelated catalog match discarded.';delete b.metadata;
}
const p=a.find(b=>b.title==='Proving History');Object.assign(p,{status:'excluded',author:'Richard C. Carrier',confidence:'moderate',note:'H3: primary aim is to teach and justify a formal historical-inference method and demonstrate its application, not narrate a historical discovery. Simple mathematics and accessibility do not override that procedural purpose. Publisher explicitly describes reducing valid methods to Bayes and showing how to apply it: https://www.simonandschuster.com/books/Proving-History/Richard-C-Carrier/9781616145590 . Distinct from On the Historicity of Jesus, which applies the framework to a historical question.'});
write(dir+'/triaged.json',a);write(dir+'/rows.json',rows);
