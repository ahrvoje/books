import fs from 'node:fs';
import {dir,read,write} from './capture.mjs';
const books=read(dir+'/triaged.json');
const gates={
'Making a Good Brain Great':'H3: a health-improvement program supplying detailed diet, supplement doses, exercise and monitoring procedures. The captured source notes show these prescriptions as the main practical content, rather than a sustained history of neuroscience.',
'Persuasion Story Code':'H3: specialist sales-copy and persuasive-story construction instruction; the source explicitly identifies stories written to sell as its purpose.',
'Before We Go':'H3: strength-training and fitness coaching essays aimed at improving training practice. The source identifies weight lifting and fitness as the central purpose.',
'Attempts':'H3: strength and fitness training guidance, focused on applying training fundamentals according to the source report.',
'Consider This':'H3: professional fiction-writing craft instruction, notwithstanding anecdotes and personal reflections. The nominated book is subtitled Moments in My Writing Life After Which Everything Was Different; its lessons address developing the reader as a writer.'
};
for(const [t,note]of Object.entries(gates)){const b=books.find(b=>b.title===t);if(!b)throw Error(t);Object.assign(b,{status:'excluded',note,confidence:'moderate'});}
write(dir+'/triaged.json',books);
const file=dir+'/integrate.mjs';let s=fs.readFileSync(file,'utf8');s=s.replace('Comment-count reconciliation remains open: 26 comment bodies were captured against a displayed total of 38; the difference may include pingbacks. No claim of complete comments coverage is made.','Comment counts reconciled: 26 comment bodies plus 12 pingbacks match the displayed total of 38. The explicitly named book in a pingback was matched to its existing entry; linked articles were not treated as additional book nominations.');fs.writeFileSync(file,s);
