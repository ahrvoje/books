import fs from 'node:fs';
const p='data/metadata2_261025/publish.mjs';let s=fs.readFileSync(p,'utf8');
s=s.replace('The title aliases for Dyson and Pross are documented in identity-aliases.json; other title matching is not weakened.','Explicitly reviewed title aliases are documented in identity-aliases.json. Tim Wu also needs an exact-name exception because the inherited matcher rejects two-letter surnames. Other identity matching is not weakened.');
s=s.replace('Reference ranges are checked against the source edition extent when available.','Reference ranges are checked against the source edition extent when available. Google preview boundaries must lead to a recognizable reference or back-matter section; skipped body chapters are not counted as references.');
s=s.replaceAll('x.edition.year}',"x.edition.year??'year unknown'}");
fs.writeFileSync(p,s);
