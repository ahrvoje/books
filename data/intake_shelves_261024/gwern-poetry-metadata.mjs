import {dir,read,write} from './capture.mjs';
const v=read(dir+'/veto-overrides.json');
for(const t of ['Shin Kokinshu','1000 Poems from the Manyoshu','Man’yoshu','Kokinshu','Unforgotten Dreams','A Shropshire Lad','More Poems','Selected Poems','From Threshold to Threshold','The Complete Poems','Curves and Angles','The Poems of Gerard Manley Hopkins'])v[t]={veto:'V3',vetoConfidence:'moderate',vetoReason:'The principal payload is lyrical or aesthetic; contextual notes and individual observations do not establish sustained transferable mechanisms, models or heuristics. This is not a blanket classification of poetry as fiction.'};
write(dir+'/veto-overrides.json',v);
const m=read(dir+'/metadata-overrides.json');m['Man’yoshu']={yearConfidence:'low'};write(dir+'/metadata-overrides.json',m);
