import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json');
for(const[t,note]of Object.entries({
'Useful Belief':'H2: a business fable built around an invented traveller and three encounters; the source explicitly calls the framing fictional and publisher describes the tale as the vehicle for its argument. https://books.google.com/books/about/Useful_Belief.html?id=OROJCgAAQBAJ',
'Confessions of a Public Speaker':'H3: professional public-speaking instruction; publisher contents teach preparation, pacing, audience involvement and handling rooms. Personal anecdotes support skills training. https://www.oreilly.com/library/view/confessions-of-a/9780596806927/'
})){const b=a.find(b=>b.title===t);if(!b)throw Error(t);Object.assign(b,{status:'excluded',note,confidence:'high'});}
write(dir+'/triaged.json',a);
