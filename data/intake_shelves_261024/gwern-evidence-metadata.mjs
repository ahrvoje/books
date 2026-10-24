import {dir,read,write} from './capture.mjs';
const v=read(dir+'/veto-overrides.json');
for(const[t,rule,confidence,reason]of[
['A Troublesome Inheritance','V1','high','Central genetic explanation of institutional and economic differences is not supported by the population-genetic evidence invoked; the researchers explicitly reject that inference.'],
['The Son Also Rises','V1','moderate','Surname-group persistence is used to infer general individual mobility without sufficient identifying assumptions; formal methodological criticism shows the measures are not interchangeable.'],
['On the Historicity of Jesus','V1','moderate','Central probability conclusion rests on insufficiently identified likelihoods and contested source-transmission readings; alternative compatibility is not comparative causal evidence.'],
['Left In The Dark','V1','high','The central fruit-diet and hemispheric-degeneration causal account rests on unsupported extrapolation from correlations and anecdotes.'],
['Morning of the Magicians','V1','high','Paranormal and occult hidden-history claims are used as explanatory evidence without adequate source and causal discrimination.'],
['Silicon Snake Oil','V1','moderate','Major enduring-impossibility judgments are extrapolated from temporary limitations and personal preference; some local cautions remain useful.'],
['Reflections on Violence','V6','high','Representative chapters and prefaces chiefly rally revolutionary syndicalist allegiance through mobilizing myth and strikes.']
])v[t]={veto:rule,vetoConfidence:confidence,vetoReason:reason};write(dir+'/veto-overrides.json',v);
const m=read(dir+'/metadata-overrides.json');
for(const[t,id,url,pg,y,start,end]of[
['Private Wealth in Renaissance Florence','Penn:996651843503681','https://find.library.upenn.edu/catalog/996651843503681',311,1968,291,303],
['The Midas Paradox','CiNii:BB20510226','https://ci.nii.ac.jp/ncid/BB20510226',509,2015,469,484]
])m[t]={edition:{id,url,pages:pg,year:y,language:'English',format:'hardcover',retrieved:'2026-10-24',confidence:'high'},referencePages:{pages:end-start+1,ranges:[{start,end,label:'bibliography'}],edition:{id},url,sameEditionAsPG:true,confidence:'high',limitation:'Cataloged bibliography and numbered extent.'}};
m['The Rise and Decline of the Medici Bank: 1397–1494']={edition:{id:'CiNii:BA40292834',url:'https://ci.nii.ac.jp/ncid/BA40292834',pages:500,year:1966,language:'English',format:'paperback',retrieved:'2026-10-24',confidence:'high'},referencePages:{pages:94,ranges:[{start:391,end:408,label:'bibliography'},{start:409,end:484,label:'notes'}],edition:{id:'Fulcrum:gh93gz54c:1963'},url:'https://www.fulcrum.org/concern/monographs/gh93gz54c',sameEditionAsPG:false,confidence:'moderate',limitation:'1963 publisher contents start bibliography at 391, notes at 409 and index at 485; paired with 1966 500-page catalog extent, so ratio is a cross-edition estimate.'}};
write(dir+'/metadata-overrides.json',m);
