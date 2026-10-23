import fs from 'node:fs';
const url='https://issc.al.uw.edu.pl/wp-content/uploads/sites/2/2022/05/Nick-Bostrom-Milan-M.-Cirkovic-Global-Catastrophic-Risks-2008-Oxford-University-Press.pdf';
const r=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!r.ok)throw Error(r.status);const b=Buffer.from(await r.arrayBuffer());if(b.subarray(0,4).toString()!=='%PDF')throw Error('not PDF');fs.writeFileSync('data/top250_261023/raw/gcr.pdf',b);console.log(b.length);
