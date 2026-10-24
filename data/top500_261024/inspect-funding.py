import json,re
p=json.load(open('data/top500_261024/raw/funding.pages.json',encoding='utf-8'))
for i,t in enumerate(p):
    if re.search(r'\n(?:NOTES|REFERENCES)\n',t):
        print('PHYSICAL',i+1,'HEADER',repr(t[:160]),'HEADINGS',[(m.group(),m.start()) for m in re.finditer(r'\n(?:NOTES|REFERENCES)\n',t)])
