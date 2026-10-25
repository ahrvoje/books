import fs from 'node:fs';
const p='data/metadata2_261025/publish.mjs';let s=fs.readFileSync(p,'utf8');
s=s.replace("['manual','library'","['manual','extra','library'");
s=s.replace("const ci=states.cinii", "const ex=states.extra.books?.[b.id]||{};\n const ci=states.cinii");
s=s.replace('sp.edition,am.edition);','sp.edition,am.edition,ex.edition);');
s=s.replace('h.reference,sp.reference);','h.reference,sp.reference,ex.reference);');
fs.writeFileSync(p,s);
