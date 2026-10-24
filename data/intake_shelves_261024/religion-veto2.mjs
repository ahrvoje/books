import {dir,read,write} from './capture.mjs';
const v=read(dir+'/veto-overrides.json');
v['When Things Fall Apart']={veto:'V5',vetoConfidence:'high',vetoReason:'The inspected source notes present a Buddhist path to enlightenment and prescribe devotional meditation as the central response to suffering. This is religious teaching and practice, not historical or comparative analysis of Buddhism.'};
v['Living Beautifully with Uncertainty and Change']={veto:'V5',vetoConfidence:'high',vetoReason:'The publisher and captured source notes organize the work around Buddhist commitments and practices directed toward liberation and awakening. Religious practice is the central purpose; practical emotional advice does not suspend V5.'};
write(dir+'/veto-overrides.json',v);
