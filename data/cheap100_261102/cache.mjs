import fs from 'node:fs';
const dir='data/cheap100_261102';
let code=fs.readFileSync(dir+'/harvest-cross.mjs','utf8');
code=code.replace("old='data/cheap100_261102/raw'","old=process.argv[2]");
code=code.replace("const start=+(process.argv[2]||0),end=+(process.argv[3]||0);","const start=0,end=0;");
fs.writeFileSync(dir+'/cache-one.mjs',code);
