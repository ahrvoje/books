import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json');
const groups={
'Language-learning procedures and specialist linguistic instruction are the main purpose.':['Fluent Forever','How to Learn a Foreign Language','Linguistics: A Complete Introduction','How to Learn and Memorize French Vocabulary','The Way of the Linguist','Cambridge Language Surveys: Chinese'],
'Travel preparation, local customs reference and practical visitor instructions dominate.':['Turkey - Culture Smart','Finland Culture Shock','Chile Culture Smart','Argentina Culture Smart','Colombia Culture Smart','Mexico Culture Smart','Cyprus Culture Smart','Guru’Guay Guide to Montevideo'],
'Writing craft and specialist communication procedures are the main purpose.':['100 Ways to Improve Your Writing','Bird by Bird','Writing to Learn','The Presentation Secrets of Steve Jobs: How to Be Insanely Great in Front of Any Audience'],
'A training program or procedural manual, rather than a sustained explanatory account.':['Cognitive Behavioral Therapy for Dummies','Toilet Training in Less Than A Day','The 4-Hour Body','Your Memory','Pomodoro Technique Illustrated','The Art of Project Management','Start Small, Stay Small'],
'School curriculum or subject-reference work.':['A Political Theory Primer','The American People Volumes 1 and 2','The Dorling Kindersley History of the World','Ancient Egypt']
};
for(const b of a)if(!b.status)for(const [why,titles] of Object.entries(groups))if(titles.includes(b.title))Object.assign(b,{status:'excluded',note:'H3: '+why+' Source context and bibliographic identity support this classification.',confidence:'moderate'});
for(const b of a)if(!b.status&&['Aesop’s Fables','Thus Spoke Zarathustra','Way of the Peaceful Warrior'].includes(b.title))Object.assign(b,{status:'excluded',note:'H2: fables, a philosophical novel, or a fictionalized spiritual narrative. Its instructional themes do not change the fictional narrative form.',confidence:'high'});
write(dir+'/triaged.json',a);
