import {dir,read,write} from './capture.mjs';
const v=read(dir+'/veto-overrides.json');
for(const [title,veto,reason] of [
['The Invention of the Jewish People','V1','Central historiographic suppression and novelty claims depend on distorted treatment of existing scholarship; specialist review gives specific examples.'],
['Fossil Future','V2','Central dismissal of mainstream energy expertise rests on an anti-human motive attribution contradicted by its explicit development and energy-access analysis.'],
['The China Study','V1','Central dietary conclusions rely on overextended ecological and experimental inference; counterarguments and the author’s biological-model defense are recorded.']
])v[title]={veto,vetoConfidence:'moderate',vetoReason:reason};
write(dir+'/veto-overrides.json',v);
