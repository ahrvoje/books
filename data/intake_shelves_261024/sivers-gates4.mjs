import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json');
for(const[t,note]of Object.entries({
'Mindfulness in Plain English':'H3: explicitly a step-by-step practical Vipassana training manual, with repeated practice essential to its stated purpose. Author introduction distinguishes this manual from explanatory books on Buddhist philosophy. https://www.vipassana.org/meditation/mindfulness_in_plain_english_2.html',
'Meditation for Beginners':'H3: a progressive practical meditation course with guided breathing, sensations, thoughts, forgiveness, loving-kindness, eating and walking exercises. Primary purpose is training a practice rather than explaining historical discovery. Contents: https://books.google.com/books?id=A2MpTnVNR0QC'
})){const b=a.find(b=>b.title===t);if(!b)throw Error(t);Object.assign(b,{status:'excluded',note,confidence:'high'});}
write(dir+'/triaged.json',a);
const v=read(dir+'/veto-overrides.json');
v['Complete Idiot’s Guide to Understanding Judaism']={veto:'V5',vetoConfidence:'high',vetoReason:'Inspected source excerpts explicitly assert the truth of a Creator, dismiss atheism as refusal of reality, and ground binding moral duties in divine revelation. The central teaching is confessional, not detached analysis of religion.'};
v['The Essentials of Hinduism']={veto:'V5',vetoConfidence:'high',vetoReason:'Inspected source excerpts and contents teach divine incarnation, scriptural truths and liberation through God-realization as authoritative doctrine; explanation serves a confessional religious account.'};
v['The Think Big Manifesto']={veto:'V3',vetoConfidence:'moderate',vetoReason:'The source reader reports book-wide motivational repetition with little usable content; inspected notes and publisher contents support encouragement rather than developed mechanisms or heuristics. The manifesto label is not the reason.'};
write(dir+'/veto-overrides.json',v);
