import {dir,read,write} from './capture.mjs';
const a=read(dir+'/triaged.json');
const gates={
'Never Let Go':'H3: strength-training instruction and coaching essays; the source explicitly describes advice on lifting and training, not an explanatory history of sport.',
'The Barbell Prescription':'H3: age-specific strength-training program, with exercise selection and implementation as the main purpose.',
'The Baby Sleep Solution: The stay-and-support method to help your baby sleep through the night':'H3: procedural sleep-training program; the nominated subtitle identifies a specific method to implement.',
'Weekend Language':'H3: professional presentation and public-speaking instruction aimed at developing specialist communication proficiency.',
'Into the Woods: How Stories Work':'H3: professional story-construction and screenwriting craft instruction; analytical examples serve learning to build stories.',
'The Calculus Story':'H3: an introductory calculus curriculum developing differentiation and integration. A narrative presentation does not override the central technical teaching purpose. Evidence: https://api.pageplace.de/preview/DT0400.9780192526717_A35506255/preview-9780192526717_A35506255.pdf',
'An Incomplete Education':'H3: encyclopedic cultural-literacy reference organized to supply facts and summaries across disciplines, rather than a sustained explanatory argument.'
};
for(const[t,note]of Object.entries(gates)){const b=a.find(b=>b.title===t);if(!b)throw Error(t);Object.assign(b,{status:'excluded',note,confidence:'moderate'});}
write(dir+'/triaged.json',a);
const m=read(dir+'/metadata-overrides.json');for(const t of ['At the Existentialist Café','Kingdom of Characters'])m[t]={...(m[t]||{}),periodEndConfidence:'low'};write(dir+'/metadata-overrides.json',m);
