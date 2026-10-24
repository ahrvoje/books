import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json');
for(const b of a){
 if(b.title.startsWith("It's Not All About Me:"))Object.assign(b,{status:'excluded',confidence:'moderate',note:'H3: professional rapport/interview proficiency training, organized around ten operational techniques. FBI professional publication https://leb.fbi.gov/file-repository/archives/leb-oct-2012.pdf and publisher https://www.simonandschuster.com/books/Its-Not-All-About-Me-Revised-and-Updated-Edition/Robin-Dreeke/9781637748466 establish this purpose.'});
 if(b.title.startsWith('Wild: From Lost')||b.title==='The Education of Henry Adams')delete b.metadata;
}write(dir+'/triaged.json',a);
const v=read(dir+'/veto-overrides.json');
for(const[t,veto,reason]of[
["Tao of Leadership: Lao Tzu's Tao Te Ching Adapted for a New Age",'V5','Chapters 1,32,34,41 establish universal Tao as authoritative truth underlying all events and leadership; not merely historical discussion of religion.'],
['Wild: From Lost to Found on the Pacific Crest Trail','V3','Personal recovery and journey dominate; inspected publisher account offers little transferable intellectual model.'],
['The Yankee Tea-party Or, Boston in 1773','V2','Preface explicitly aims at patriotic veneration; sampled narrative presents asymmetrical heroic and hostile characterizations rather than evidence-led inquiry.']
])v[t]={veto,vetoConfidence:'moderate',vetoReason:reason};write(dir+'/veto-overrides.json',v);
const m=read(dir+'/metadata-overrides.json');
m['Focus: The Hidden Driver of Excellence']={edition:{id:'IBSU:2919',url:'https://library.ibsu.ac.pg/bib/2919',pages:311,year:2013,language:'English',format:'unknown',retrieved:'2026-10-24',confidence:'high'},referencePages:{pages:34,ranges:[{start:261,end:294,label:'bibliographic references'}],edition:{id:'IBSU:2919'},url:'https://library.ibsu.ac.pg/bib/2919',sameEditionAsPG:true,confidence:'high'}};
write(dir+'/metadata-overrides.json',m);
