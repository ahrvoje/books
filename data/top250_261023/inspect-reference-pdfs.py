from pathlib import Path
import sys
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
from pypdf import PdfReader
import re, json
root=Path('data/top250_261023/raw')
for name in ['petrochemicals','minerals','landmarks']:
    file=root/(name+'.pdf')
    if not file.exists(): continue
    reader=PdfReader(file)
    pages=[page.extract_text() or '' for page in reader.pages]
    print(name, len(pages))
    found=[]
    for i,t in enumerate(pages):
        if re.search(r'(?im)^\s*(references|bibliography|further reading)\s*$',t):
            found.append(i)
            print('heading PDF page',i+1,repr(t[:170]),repr(t[-120:]))
    if name=='minerals': found=list(range(len(pages)-35,len(pages)))
    if name=='petrochemicals': found=sorted(set(j for i in found for j in range(i,min(i+5,len(pages)))))
    if name=='landmarks': found=list(range(len(pages)-20,len(pages)))
    for i in found: print(i+1,repr(pages[i][:100]),repr(pages[i][-100:]))
