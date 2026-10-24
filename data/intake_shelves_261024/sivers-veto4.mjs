import {dir,read,write} from './capture.mjs';
const v=read(dir+'/veto-overrides.json');
v['What Makes Us Human']={veto:'V3',vetoConfidence:'moderate',vetoReason:'Source reader report and inspected answer excerpts show vague existential assertions with little developed transferable explanation. Publisher confirms the book consists of generated spiritual answers, rather than analysis of the technology.'};
v['Secrets of the Millionaire Mind']={veto:'V1',vetoConfidence:'moderate',vetoReason:'The central claim assigns financial outcomes to a subconscious blueprint while explicitly dismissing education, skill, timing and luck; the inspected notes and publisher description assert this causal dominance without establishing it.'};
v['Conspiracy of the Rich']={veto:'V1',vetoConfidence:'moderate',vetoReason:'The inspected source excerpts make ordinary equity shares and mutual funds into derivatives and use that category to explain creating money from ideas. The resulting central financial explanation conflates ownership, contractual derivative exposure and metaphor; the veto is not based on the title.'};
write(dir+'/veto-overrides.json',v);
