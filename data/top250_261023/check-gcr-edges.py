import json,re,sys
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
p=json.load(open('data/top250_261023/raw/gcr-pages.json',encoding='utf8'))
for n in [26,27,28,29,30,31,86,87,88,89,90,119,163,221,262,304,305,306,307,361,362,376,377,378,401,442,449,475,499,500,501,502,503,518,519]:
 t=p[n+23]; print(n,repr(t[:190]),'headings', [s for s in t.splitlines() if any(w in re.sub(r'[^a-z]','',s.lower()) for w in ['references','furtherreading'])])
