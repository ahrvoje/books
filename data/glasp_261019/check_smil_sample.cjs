const fs=require('fs');
(async()=>{
 const url='https://www.wiley-vch.de/en/areas-interest/engineering/materials-science-10ms/general-introductory-materials-science-10ms0/making-the-modern-world-978-1-119-94253-5';
 const html=await (await fetch(url)).text();
 fs.writeFileSync(__dirname+'/research_smil_publisher.html',html);
 const sample=html.match(/href="([^"]*media.wiley[^"]*)"/)[1];
 const response=await fetch(sample.replace('http:','https:'));
 fs.writeFileSync(__dirname+'/research_smil_sample.pdf',Buffer.from(await response.arrayBuffer()));
 console.log(sample,response.status,response.headers.get('content-type'));
})();
