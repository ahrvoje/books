# Further metadata with previously attempted books filtered — 2026-11-02

Completed **250 additional previously missing numeric values**: 0 total-page counts, 249 Amazon rating aggregates, and 1 reference-page counts. 249 books updated; 159 score totals changed.

## Evidence and confidence

The primary assistant checked source identity, explicit numeric evidence, scope, and arithmetic. OpenRouter workers used Mistral Nemo for research and Mistral Small 24B for a separate evidence audit. Source text, not worker-generated numbers, determines acceptance. Metadata confidence is moderate. Amazon counts describe one matched product snapshot; the original indexed snapshot date is unknown. Counts are not guaranteed live and are not sums across products or written-review totals. Print counts identify a print edition. Reference counts use explicit inclusive bibliographical ranges, including catalogued pagination for digital editions where stated. Ratios across different or unconfirmed editions are low-confidence estimates. Unknown inputs retain their prescribed zero-bonus fallback.

Content assessments, eligibility, source memberships, and purchase links are retained. Only missing metadata and its resulting O15/RD scores change. [External audit resolutions](../data/value250_261102/audit-resolutions.json) explain the primary assistant’s decisions on model flags.

## Cost and reusable findings

Saved successful OpenRouter responses report **$0.970443** in usage, including experiments and audit calls. This is recorded API usage, not an invoice. [Machine-readable cost and yield results](../data/value250_261102/cost-learning.json) record the comparison.

The best tested setup remains Mistral Nemo with Parallel fast search and ten results per query. Research uses a one-token response limit because the source annotations are the intended output. Mistral Small 24B audits batches of five; the primary assistant checks the evidence and resolves flags.

The queue excluded 1074 previously searched book IDs. There were 880 distinct standard queries plus 20 paired compact-prompt queries. Five accepted values reused saved evidence. Secondary results were checked against their actual works. No total-page count was accepted. The one reference count is documented in a saved library record.

The paired 20-book pilot tested a short system instruction and replaced the quoted global ratings search phrase with ratings. Baseline cost $0.021317 yielded five verified target matches; compact cost $0.021055 yielded three. Compact calls cost 1.23% less in total, but cost per verified target was $0.007018 versus $0.004263. We retained the baseline. These are small-sample results; two prompt changes were bundled and search excerpts can vary. Automatic title-only hits included a wrong-author Uncertainty result, which was rejected in the verified yield. Off-target secondary results are excluded from the pilot target metric but may contribute accepted fields to the full batch.

This round cost $0.970443, or $0.003882 per accepted field, 48.8% above the preceding round. No overall cost improvement is claimed. Remaining books, cache availability and search difficulty differ. Six audit calls were rate-limited; retries succeeded after audit concurrency was reduced to two.

Reusable method: cache first, skip previously attempted books, retain title and author plus global ratings, and inspect secondary results. Optimize verified values per dollar, not just tokens per call. The audit still misapplied print-page requirements to rating fields despite prompt clarification; field-specific audit instructions are a future test, not a measured improvement. Confidence is high for recorded arithmetic and moderate for generalizing the pilot.

## Accepted values

| Book | Field | Count | Source | Confidence |
|---|---|---:|---|---|
| Status and Culture: How Our Desire for Social Rank Creates Taste, Identity, Art, Fashion, and Constant Change — W. David Marx | amazon | 251 | [evidence](https://www.amazon.com/dp/0593296702) | moderate |
| What I Learned Losing a Million Dollars — Jim Paul; Brendan Moynihan | amazon | 1798 | [evidence](https://www.amazon.com/dp/0963579495) | moderate |
| The Fate of Rome: Climate, Disease, and the End of An Empire — Kyle Harper | amazon | 624 | [evidence](https://www.amazon.com/dp/0691166838) | moderate |
| Toward a Theory of Instruction — Jerome Bruner | amazon | 27 | [evidence](https://www.amazon.com/dp/0674897005) | moderate |
| Paris 1919: Six Months that Changed the World — Margaret MacMillan, Richard Holbrooke, Casey Hampton | reference | 16 | [evidence](https://library.usi.edu/record/1405308?ln=en&p=subjectheading%3A%5BInternationale+conflicten.%5D) | moderate |
| The Cloud Revolution — Mark P. Mills | amazon | 108 | [evidence](https://www.amazon.com/dp/1641772301) | moderate |
| Human Universals — Donald Brown | amazon | 64 | [evidence](https://www.amazon.com/dp/007008209X) | moderate |
| Insanely Great — Steven Levy | amazon | 182 | [evidence](https://www.amazon.com/dp/0140291776) | moderate |
| A Primate’s Memoir — Robert M. Sapolsky | amazon | 1199 | [evidence](https://www.amazon.com/dp/0743202473) | moderate |
| Euler's Pioneering Equation — Robin Wilson | amazon | 115 | [evidence](https://www.amazon.com/dp/0198794924) | moderate |
| For The Love Of Physics — Walter Lewin; Warren Goldstein | amazon | 2557 | [evidence](https://www.amazon.com/dp/145160713X) | moderate |
| Shadows of Forgotten Ancestors — Carl Sagan; Ann Druyan | amazon | 661 | [evidence](https://www.amazon.com/dp/0345384725) | moderate |
| The Lady Tasting Tea — David Salsburg | amazon | 470 | [evidence](https://www.amazon.com/dp/0805071342) | moderate |
| Everything in Its Place (Work Clean) — Dan Charnas | amazon | 619 | [evidence](https://www.amazon.com/dp/1635650119) | moderate |
| The Organized Mind: Thinking Straight in the Age of Information Overload — Daniel J. Levitin | amazon | 2494 | [evidence](https://www.amazon.com/dp/052595418X) | moderate |
| The Science of Success — Charles Koch | amazon | 321 | [evidence](https://www.amazon.com/dp/0470139889) | moderate |
| The End of Everything (Astrophysically Speaking) — Katie Mack | amazon | 3181 | [evidence](https://www.amazon.com/dp/1982103558) | moderate |
| This Is Your Brain on Music — Daniel J. Levitin | amazon | 3022 | [evidence](https://www.amazon.com/dp/0452288525) | moderate |
| Good Profit — Charles Koch | amazon | 990 | [evidence](https://www.amazon.com/dp/1101904135) | moderate |
| Monkeyluv: And Other Essays on Our Lives as Animals — Robert M. Sapolsky | amazon | 219 | [evidence](https://www.amazon.com/dp/0743260163) | moderate |
| Professor Stewart's Cabinet of Mathematical Curiosities — Ian Stewart | amazon | 169 | [evidence](https://www.amazon.com/dp/0465013023) | moderate |
| The 80/20 Principle — Richard Koch | amazon | 2821 | [evidence](https://www.amazon.com/dp/0385491743) | moderate |
| The End of Poverty — Jeffrey Sachs | amazon | 635 | [evidence](https://www.amazon.com/dp/1594200459) | moderate |
| The Infinite Resource — Ramez Naam | amazon | 135 | [evidence](https://www.amazon.com/dp/161168255X) | moderate |
| Wedding of the Waters — Peter L. Bernstein | amazon | 254 | [evidence](https://www.amazon.com/dp/0393327957) | moderate |
| Endure: Mind, Body, and the Curiously Elastic Limits of Human Performance — Alex Hutchinson | amazon | 4300 | [evidence](https://www.amazon.com/dp/006249998X) | moderate |
| Religion Explained — Pascal Boyer | amazon | 258 | [evidence](https://www.amazon.com/dp/0465006965) | moderate |
| Merchants of Doubt — Naomi Oreskes and Erik M. Conway | amazon | 1929 | [evidence](https://www.amazon.com/dp/1608193942) | moderate |
| Ruling the Void: The Hollowing of Western Democracy — Peter Mair | amazon | 84 | [evidence](https://www.amazon.com/dp/1844673243) | moderate |
| Accidental Empires — Robert X. Cringely | amazon | 137 | [evidence](https://www.amazon.com/dp/0887308554) | moderate |
| Deep Medicine — Eric Topol | amazon | 926 | [evidence](https://www.amazon.com/dp/1541646495) | moderate |
| Explore/Create My Life in Pursuit of New Frontiers, Hidden Worlds, and the Creative Spark — Richard Garriott and David Fisher | amazon | 109 | [evidence](https://www.amazon.com/dp/006228665X) | moderate |
| Seeking Wisdom — Peter Bevelin | amazon | 397 | [evidence](https://www.amazon.com/dp/1578644283) | moderate |
| Ghetto at the Center of the World — Gordon Mathews | amazon | 115 | [evidence](https://www.amazon.com/dp/0226510190) | moderate |
| Capital Ideas — Peter L. Bernstein | amazon | 131 | [evidence](https://www.amazon.com/dp/0471731749) | moderate |
| Bad Astronomy: Misconceptions and Misuses Revealed, from Astrology to the Moon Landing — Philip C. Plait | amazon | 280 | [evidence](https://www.amazon.com/dp/0471409766) | moderate |
| Understanding Power — Noam Chomsky | amazon | 730 | [evidence](https://www.amazon.com/dp/1565847032) | moderate |
| Code Girls: The Untold Story of the American Women Code Breakers Who Helped Win World War II — Liza Mundy | amazon | 6725 | [evidence](https://www.amazon.com/dp/0316439894) | moderate |
| The Riddle of the Labyrinth — Margalit Fox | amazon | 974 | [evidence](https://www.amazon.com/dp/0062228838) | moderate |
| Silent Spring — Rachel Carson | amazon | 3848 | [evidence](https://www.amazon.com/dp/0395683297) | moderate |
| Osman’s Dream — Caroline Finkel | amazon | 463 | [evidence](https://www.amazon.com/dp/0465023967) | moderate |
| An Entirely Synthetic Fish — Anders Halverson | amazon | 240 | [evidence](https://www.amazon.com/dp/0300140878) | moderate |
| A Random Walk Down Wall Street — Burton Malkiel | amazon | 554 | [evidence](https://www.amazon.com/dp/0393340740) | moderate |
| Black Flags — Joby Warrick | amazon | 4404 | [evidence](https://www.amazon.com/dp/0385538219) | moderate |
| Henry J. Kaiser: Builder in the Modern American West — Mark Foster | amazon | 45 | [evidence](https://www.amazon.com/dp/0292742266) | moderate |
| Who Owns the Future? — Jaron Lanier | amazon | 615 | [evidence](https://www.amazon.com/dp/1451654960) | moderate |
| Lab Girl — Hope Jahren | amazon | 9890 | [evidence](https://www.amazon.com/dp/0345809866) | moderate |
| The Arms of Krupp — William Manchester | amazon | 308 | [evidence](https://www.amazon.com/dp/0316529400) | moderate |
| City of the Century — Donald L. Miller | amazon | 353 | [evidence](https://www.amazon.com/dp/0684831384) | moderate |
| Close to the Machine — Ellen Ullman | amazon | 172 | [evidence](https://www.amazon.com/dp/1250002486) | moderate |
| The Road to Serfdom — Friedrich A. Hayek | amazon | 3087 | [evidence](https://www.amazon.com/dp/0226320553) | moderate |
| The Mismeasure of Man — Stephen Jay Gould | amazon | 543 | [evidence](https://www.amazon.com/dp/0393314251) | moderate |
| The Bed of Procrustes — Nassim Nicholas Taleb | amazon | 1654 | [evidence](https://www.amazon.com/dp/1400069971) | moderate |
| The Good Ancestor — Roman Krznaric | amazon | 377 | [evidence](https://www.amazon.com/dp/1615198334) | moderate |
| Origins: Fourteen Billion Years of Cosmic Evolution — Neil deGrasse Tyson; Donald Goldsmith | amazon | 1420 | [evidence](https://www.amazon.com/dp/0393866882) | moderate |
| The Botany of Desire: A Plant's-Eye View of the World — Michael Pollan | amazon | 1965 | [evidence](https://www.amazon.com/dp/0747563004) | moderate |
| Grinding It Out: The Making of McDonald's — Ray Kroc with Robert Anderson | amazon | 2759 | [evidence](https://www.amazon.com/dp/125013028X) | moderate |
| To Pixar And Beyond: My Unlikely Journey with Steve Jobs to Make Entertainment History — Lawrence Levy | amazon | 1435 | [evidence](https://www.amazon.com/dp/0544734149) | moderate |
| The Alchemists — Neil Irwin | amazon | 244 | [evidence](https://www.amazon.com/dp/0143124994) | moderate |
| Unreasonable Hospitality — Will Guidara | amazon | 5702 | [evidence](https://www.amazon.com/dp/152914681X) | moderate |
| Evolution's Bite: A Story of Teeth, Diet, and Human Origins — Peter S. Ungar | amazon | 75 | [evidence](https://www.amazon.com/dp/0691160538) | moderate |
| The Story of the Human Body: Evolution, Health, and Disease — Daniel E. Lieberman | amazon | 2065 | [evidence](https://www.amazon.com/dp/030774180X) | moderate |
| The Greeks: A Global History — Roderick Beaton | amazon | 413 | [evidence](https://www.amazon.com/dp/1541618297) | moderate |
| The Roman Market Economy — Peter Temin | amazon | 48 | [evidence](https://www.amazon.com/dp/0691177945) | moderate |
| Thunderstruck — Erik Larson | amazon | 8337 | [evidence](https://www.amazon.com/dp/1400080673) | moderate |
| Capital and Ideology — Thomas Piketty | amazon | 955 | [evidence](https://www.amazon.com/dp/0674980824) | moderate |
| Personal Knowledge — Michael Polanyi | amazon | 105 | [evidence](https://www.amazon.com/dp/0226672883) | moderate |
| Adam Smith in Beijing: Lineages of the Twenty-First Century — Giovanni Arrighi | amazon | 31 | [evidence](https://www.amazon.com/dp/1844671046) | moderate |
| The Process of Education — Jerome S. Bruner | amazon | 85 | [evidence](https://www.amazon.com/dp/0674710010) | moderate |
| Exercised: The Science of Physical Activity, Rest and Health — Daniel E. Lieberman | amazon | 1694 | [evidence](https://www.amazon.com/dp/0241309271) | moderate |
| Liberalism and Its Discontents — Francis Fukuyama | amazon | 871 | [evidence](https://www.amazon.com/dp/0374606714) | moderate |
| American Caesar: Douglas MacArthur 1880-1964 — William Manchester | amazon | 1695 | [evidence](https://www.amazon.com/dp/0316024740) | moderate |
| Civilization and Its Discontents — Sigmund Freud | amazon | 981 | [evidence](https://www.amazon.com/dp/0393301583) | moderate |
| Endurance — Scott Kelly | amazon | 4967 | [evidence](https://www.amazon.com/dp/0525432434) | moderate |
| James J. Hill: Empire Builder — Michael P. Malone | amazon | 46 | [evidence](https://www.amazon.com/dp/0806128607) | moderate |
| The Man Who Loved Only Numbers — Paul Hoffman | amazon | 358 | [evidence](https://www.amazon.com/dp/0786884061) | moderate |
| The Breakthrough — Charles Graeber | amazon | 470 | [evidence](https://www.amazon.com/dp/1455568503) | moderate |
| Inferno: The World at War, 1939-1945 — Max Hastings | amazon | 1282 | [evidence](https://www.amazon.com/dp/B004SOQ198) | moderate |
| Testosterone Rex — Cordelia Fine | amazon | 217 | [evidence](https://www.amazon.com/dp/0393082083) | moderate |
| Otherlands: A Journey Through Earth's Extinct Worlds — Thomas Halliday | amazon | 770 | [evidence](https://www.amazon.com/dp/0593132882) | moderate |
| Means of Control — Byron Tau | amazon | 159 | [evidence](https://www.amazon.com/dp/B0C4J8D8H7) | moderate |
| Black Wave — Kim Ghattas | amazon | 2037 | [evidence](https://www.amazon.com/dp/1250131200) | moderate |
| The Power of Regret — Daniel H. Pink | amazon | 1747 | [evidence](https://www.amazon.com/dp/0735210659) | moderate |
| Musicophilia: Tales of Music and the Brain — Oliver Sacks | amazon | 1576 | [evidence](https://www.amazon.com/dp/1400040817) | moderate |
| Dark Money — Jane Mayer | amazon | 6759 | [evidence](https://www.amazon.com/dp/0385535597) | moderate |
| The Rise and Fall of the Dinosaurs: A New History of a Lost World — Steve Brusatte | amazon | 6364 | [evidence](https://www.amazon.com/dp/0062490427) | moderate |
| Les Schwab: Pride in Performance, Keep It Going! — Les Schwab | amazon | 72 | [evidence](https://www.amazon.com/dp/0892881518) | moderate |
| Deep Work: Rules for Focused Success in a Distracted World — Cal Newport | amazon | 3720 | [evidence](https://www.amazon.com/dp/1455586692) | moderate |
| Authentic: A Memoir — Paul Van Doren | amazon | 500 | [evidence](https://www.amazon.com/dp/164112024X) | moderate |
| Predictably Irrational — Dan Ariely | amazon | 11387 | [evidence](https://www.amazon.com/dp/1607513943) | moderate |
| North Star over My Shoulder — Bob Buck | amazon | 236 | [evidence](https://www.amazon.com/dp/0743262301) | moderate |
| The Perilous Frontier: Nomadic Empires and China 221 B.C. to AD 1757 — Thomas J. Barfield | amazon | 15 | [evidence](https://www.amazon.com/dp/1557863245) | moderate |
| Certain To Win — Chet Richards | amazon | 353 | [evidence](https://www.amazon.com/dp/1413453767) | moderate |
| On Looking: Eleven Walks with Expert Eyes — Alexandra Horowitz | amazon | 672 | [evidence](https://www.amazon.com/dp/1439191255) | moderate |
| Wasteland — Oliver Franklin-Wallis | amazon | 292 | [evidence](https://www.amazon.com/dp/0306827115) | moderate |
| What Is Life? with Mind and Matter and Autobiographical Sketches — Erwin Schrödinger | amazon | 1199 | [evidence](https://www.amazon.com/dp/0521427088) | moderate |
| Behind the Beautiful Forevers — Katherine Boo | amazon | 9582 | [evidence](https://www.amazon.com/dp/1846274516) | moderate |
| Friends: Understanding the Power of our Most Important Relationships — Robin Dunbar | amazon | 226 | [evidence](https://www.amazon.com/dp/1408711737) | moderate |
| The Psychology of Invention in the Mathematical Field — Jacques Hadamard | amazon | 18 | [evidence](https://www.amazon.com/dp/0486201074) | moderate |
| Little Bosses Everywhere — Bridget Read | amazon | 171 | [evidence](https://www.amazon.com/dp/0593443926) | moderate |
| Thinking in Time — Richard E. Neustadt; Ernest R. May | amazon | 197 | [evidence](https://www.amazon.com/dp/0029227909) | moderate |
| The Man Who Changed Everything: The Life of James Clerk Maxwell — Basil Mahon | amazon | 497 | [evidence](https://www.amazon.com/dp/0470861711) | moderate |
| I Am a Strange Loop — Douglas R. Hofstadter | amazon | 1072 | [evidence](https://www.amazon.com/dp/0465030793) | moderate |
| China’s World View — David Daokui Li | amazon | 125 | [evidence](https://www.amazon.com/dp/0393292398) | moderate |
| The Future and Its Enemies: The Growing Conflict Over Creativity, Enterprise, and Progress — Virginia Postrel | amazon | 130 | [evidence](https://www.amazon.com/dp/B004U7GX0U) | moderate |
| The Medici Effect — Frans Johansson | amazon | 233 | [evidence](https://www.amazon.com/dp/1591391865) | moderate |
| The Fabric of Reality — David Deutsch | amazon | 932 | [evidence](https://www.amazon.com/dp/014027541X) | moderate |
| How the Mighty Fall — Jim Collins | amazon | 1100 | [evidence](https://www.amazon.com/dp/0977326411) | moderate |
| Nanofuture: What's Next For Nanotechnology — J. Storrs Hall | amazon | 27 | [evidence](https://www.amazon.com/dp/1591022878) | moderate |
| The Rediscovery of America — Ned Blackhawk | amazon | 539 | [evidence](https://www.amazon.com/dp/0300244053) | moderate |
| The Match King: Ivar Kreuger, The Financial Genius Behind a Century of Wall Street Scandals — Frank Partnoy | amazon | 277 | [evidence](https://www.amazon.com/dp/1586488120) | moderate |
| Tomorrow's Table — Pamela C. Ronald and Raoul W. Adamchak | amazon | 121 | [evidence](https://www.amazon.com/dp/0195393570) | moderate |
| End Times — Peter Turchin | amazon | 775 | [evidence](https://www.amazon.com/dp/0593490509) | moderate |
| On Politics — Alan Ryan | amazon | 257 | [evidence](https://www.amazon.com/dp/0871404656) | moderate |
| Why We Die — Venki Ramakrishnan | amazon | 1003 | [evidence](https://www.amazon.com/dp/0063113279) | moderate |
| Are Your Lights On? — Donald C. Gause; Gerald M. Weinberg | amazon | 95 | [evidence](https://www.amazon.com/dp/0932633161) | moderate |
| Shikake: The Japanese Art of Shaping Behavior Through Design — Naohiro Matsumura | amazon | 80 | [evidence](https://www.amazon.com/dp/1631497812) | moderate |
| Winning — Jack Welch | amazon | 1997 | [evidence](https://www.amazon.com/dp/0060753943) | moderate |
| Outliers — Malcolm Gladwell | amazon | 39366 | [evidence](https://www.amazon.com/dp/0141043024) | moderate |
| The Method Method — Eric Ryan | amazon | 62 | [evidence](https://www.amazon.com/dp/1591843995) | moderate |
| Stone Age Economics — Marshall Sahlins | amazon | 67 | [evidence](https://www.amazon.com/dp/0202010996) | moderate |
| Evolution: The Remarkable History of a Scientific Theory — Edward J. Larson | amazon | 87 | [evidence](https://www.amazon.com/dp/0679642889) | moderate |
| The Art of Learning — Josh Waitzkin | amazon | 5417 | [evidence](https://www.amazon.com/dp/0743277465) | moderate |
| The Art of Profitability — Adrian Slywotzky | amazon | 254 | [evidence](https://www.amazon.com/dp/0446692271) | moderate |
| Spec Ops — William H. McRaven | amazon | 647 | [evidence](https://www.amazon.com/dp/0891416005) | moderate |
| Star Warriors — William J. Broad | amazon | 2 | [evidence](https://www.amazon.com/dp/0671545663) | moderate |
| Read Write Own — Chris Dixon | amazon | 777 | [evidence](https://www.amazon.com/dp/0593731387) | moderate |
| Classic Feynman — Richard P. Feynman | amazon | 94 | [evidence](https://www.amazon.com/dp/0393061329) | moderate |
| The Open Society and Its Enemies — Karl R. Popper | amazon | 139 | [evidence](https://www.amazon.com/dp/0691158134) | moderate |
| An Indigenous Peoples' History of the United States — Roxanne Dunbar-Ortiz | amazon | 5176 | [evidence](https://www.amazon.com/dp/0807057835) | moderate |
| Six Thinking Hats — Edward de Bono | amazon | 1989 | [evidence](https://www.amazon.com/dp/0141033053) | moderate |
| Mr. China — Tim Clissold | amazon | 421 | [evidence](https://www.amazon.com/dp/0060761393) | moderate |
| The Sixth Extinction — Elizabeth Kolbert | amazon | 10030 | [evidence](https://www.amazon.com/dp/0805092994) | moderate |
| Clear Thinking — Shane Parrish | amazon | 3069 | [evidence](https://www.amazon.com/dp/1529915945) | moderate |
| Direct From Dell: Strategies That Revolutionized an Industry — Michael Dell | amazon | 250 | [evidence](https://www.amazon.com/dp/0887309143) | moderate |
| A Spy Among Friends — Ben Macintyre | amazon | 12575 | [evidence](https://www.amazon.com/dp/0804136653) | moderate |
| Common Sense on Mutual Funds — John C. Bogle | amazon | 584 | [evidence](https://www.amazon.com/dp/0470138130) | moderate |
| Plastic: A Toxic Love Story — Susan Freinkel | amazon | 252 | [evidence](https://www.amazon.com/dp/054715240X) | moderate |
| Ingenious Pursuits: Building the Scientific Revolution — Lisa Jardine | amazon | 48 | [evidence](https://www.amazon.com/dp/0385720017) | moderate |
| Winning The Loser's Game — Charles Ellis | amazon | 250 | [evidence](https://www.amazon.com/dp/B08NTX7N4Q) | moderate |
| We Have No Idea: A Guide to the Unknown Universe — Jorge Cham; Daniel Whiteson | amazon | 2615 | [evidence](https://www.amazon.com/dp/0735211515) | moderate |
| Euclid's Window — Leonard Mlodinow | amazon | 483 | [evidence](https://www.amazon.com/dp/0684865246) | moderate |
| The Art of War — Sun Tzu | amazon | 1484 | [evidence](https://www.amazon.com/dp/0877734526) | moderate |
| Many Worlds in One — Alex Vilenkin | amazon | 97 | [evidence](https://www.amazon.com/dp/0809095238) | moderate |
| The Great Influenza — John M. Barry | amazon | 11540 | [evidence](https://www.amazon.com/dp/B000OCXFWE) | moderate |
| Radical Markets: Uprooting Capitalism and Democracy for a Just Society — Eric A. Posner/E. Glenn Weyl | amazon | 270 | [evidence](https://www.amazon.com/dp/0691177503) | moderate |
| Core Memory — John Alderman; Mark Richards | amazon | 82 | [evidence](https://www.amazon.com/dp/0811854426) | moderate |
| Super Founders — Ali Tamaseb | amazon | 274 | [evidence](https://www.amazon.com/dp/B08HLZZT6G) | moderate |
| In the Kingdom of Ice: The Grand and Terrible Polar Voyage of the USS Jeannette — Hampton Sides | amazon | 7489 | [evidence](https://www.amazon.com/dp/0385535376) | moderate |
| Ecological Imperialism — Alfred W. Crosby | amazon | 161 | [evidence](https://www.amazon.com/dp/1107569877) | moderate |
| What the CEO Wants You to Know — Ram Charan | amazon | 692 | [evidence](https://www.amazon.com/dp/0553417789) | moderate |
| The Lost City of the Monkey God — Douglas Preston | amazon | 17589 | [evidence](https://www.amazon.com/dp/1455540013) | moderate |
| The Mathematical Universe — William Dunham | amazon | 110 | [evidence](https://www.amazon.com/dp/0471176613) | moderate |
| Gamers at Work — Morgan Ramsay | amazon | 32 | [evidence](https://www.amazon.com/dp/1430233516) | moderate |
| Data and Goliath: The Hidden Battles to Collect Your Data and Control Your World — Bruce Schneier | amazon | 875 | [evidence](https://www.amazon.com/dp/039335217X) | moderate |
| The Science of Conjecture — James Franklin | amazon | 30 | [evidence](https://www.amazon.com/dp/0801871093) | moderate |
| A Hacker's Mind: How the Powerful Bend Society's Rules, and How to Bend them Back — Bruce Schneier | amazon | 497 | [evidence](https://www.amazon.com/dp/0393866661) | moderate |
| Singularity Rising — James Daniel Miller | amazon | 50 | [evidence](https://www.amazon.com/dp/1936661659) | moderate |
| The Meaning of It All — Richard Feynman | amazon | 573 | [evidence](https://www.amazon.com/dp/0465023940) | moderate |
| A Briefer History of Time — Stephen Hawking; Leonard Mlodinow | amazon | 2538 | [evidence](https://www.amazon.com/dp/0553385461) | moderate |
| The Ohlone Way — Malcolm Margolin | amazon | 9 | [evidence](https://www.amazon.com/dp/0930588029) | moderate |
| Makers: The New Industrial Revolution — Chris Anderson | amazon | 573 | [evidence](https://www.amazon.com/dp/0307720950) | moderate |
| Abundance — Ezra Klein; Derek Thompson | amazon | 5009 | [evidence](https://www.amazon.com/dp/1668023482) | moderate |
| Irrational Exuberance — Robert J. Shiller | amazon | 1151 | [evidence](https://www.amazon.com/dp/0691166269) | moderate |
| Joy at Work — Dennis W. Bakke | amazon | 203 | [evidence](https://www.amazon.com/dp/0976268604) | moderate |
| Paris 1919: Six Months that Changed the World — Margaret MacMillan, Richard Holbrooke, Casey Hampton | amazon | 2002 | [evidence](https://www.amazon.com/dp/0375760520) | moderate |
| Phantoms in the Brain — V. S. Ramachandran; Sandra Blakeslee | amazon | 711 | [evidence](https://www.amazon.com/dp/0688172172) | moderate |
| The Dealmaker — Guy Hands | amazon | 623 | [evidence](https://www.amazon.com/dp/B094NZZ5HB) | moderate |
| Console Wars — Blake J. Harris | amazon | 3807 | [evidence](https://www.amazon.com/dp/0062276700) | moderate |
| General Relativity from A to B — Robert Geroch | amazon | 69 | [evidence](https://www.amazon.com/dp/0226288641) | moderate |
| The Dodge Brothers: The Men, the Motor Cars, and the Legacy — Charles Hyde | amazon | 140 | [evidence](https://www.amazon.com/dp/0814332463) | moderate |
| How Brands Grow: What Marketers Don’t Know — Byron Sharp | amazon | 1211 | [evidence](https://www.amazon.com/dp/0195573560) | moderate |
| Iron Kingdom: The Rise and Downfall of Prussia, 1600–1947 — Christopher Clark | amazon | 1158 | [evidence](https://www.amazon.com/dp/0674031962) | moderate |
| Quality Investing — Lawrence A. Cunningham | amazon | 538 | [evidence](https://www.amazon.com/dp/0857195123) | moderate |
| Raven Rock — Garrett Graff | amazon | 1619 | [evidence](https://www.amazon.com/dp/1476735409) | moderate |
| Crabgrass Frontier — Kenneth T. Jackson | amazon | 201 | [evidence](https://www.amazon.com/dp/0195049837) | moderate |
| Why We Buy: The Science of Shopping — Paco Underhill | amazon | 202 | [evidence](https://www.amazon.com/dp/0684849135) | moderate |
| Relativity: The Special and the General Theory — Albert Einstein | amazon | 4445 | [evidence](https://www.amazon.com/dp/0517029618) | moderate |
| Endless Universe: Beyond the Big Bang — Paul J. Steinhardt; Neil Turok | amazon | 164 | [evidence](https://www.amazon.com/dp/0385509642) | moderate |
| Give and Take — Adam Grant | amazon | 6456 | [evidence](https://www.amazon.com/dp/0143124986) | moderate |
| Chance and Necessity — Jacques Monod | amazon | 38 | [evidence](https://www.amazon.com/dp/0394466152) | moderate |
| The Storytelling Animal — Jonathan Gottschall | amazon | 1018 | [evidence](https://www.amazon.com/dp/0544002342) | moderate |
| The Price of Peace — Zachary D. Carter | amazon | 1267 | [evidence](https://www.amazon.com/dp/0525509038) | moderate |
| A Little History of Religion — Richard Holloway | amazon | 938 | [evidence](https://www.amazon.com/dp/0300228813) | moderate |
| Narrative Economics: How Stories Go Viral and Drive Major Economic Events — Robert J. Shiller | amazon | 899 | [evidence](https://www.amazon.com/dp/0691210268) | moderate |
| The Kill Chain — Christian Brose | amazon | 1853 | [evidence](https://www.amazon.com/dp/031653367X) | moderate |
| An Empire of Wealth — John Steele Gordon | amazon | 352 | [evidence](https://www.amazon.com/dp/0060093625) | moderate |
| The Age of Agile: How Smart Companies Are Transforming the Way Work Gets Done — Stephen Denning | amazon | 448 | [evidence](https://www.amazon.com/dp/0814439098) | moderate |
| Imagined Communities: Reflections on the Origin and Spread of Nationalism (Revised Edition) — Benedict Anderson | amazon | 49 | [evidence](https://www.amazon.com/dp/0860915468) | moderate |
| Deep Value — Tobias Carlisle | amazon | 200 | [evidence](https://www.amazon.com/dp/1118747968) | moderate |
| Catalogues and Counters: A History of Sears, Roebuck & Company — Boris Emmet, John E. Jeuck | amazon | 6 | [evidence](https://www.amazon.com/dp/B0006DDANK) | moderate |
| The Way We Think — Gilles Fauconnier; Mark Turner | amazon | 62 | [evidence](https://www.amazon.com/dp/0465087868) | moderate |
| The Greatest Trade Ever — Gregory Zuckerman | amazon | 578 | [evidence](https://www.amazon.com/dp/0385529945) | moderate |
| The City In History — Lewis Mumford | amazon | 152 | [evidence](https://www.amazon.com/dp/0156180359) | moderate |
| So Good They Can’t Ignore You — Cal Newport | amazon | 899 | [evidence](https://www.amazon.com/dp/1455509124) | moderate |
| The Rise and Decline of the Medici Bank: 1397–1494 — Raymond de Roover | amazon | 24 | [evidence](https://www.amazon.com/dp/1893122328) | moderate |
| The Aspirational Investor — Ashvin Chhabra | amazon | 132 | [evidence](https://www.amazon.com/dp/0062235095) | moderate |
| Losing My Virginity — Richard Branson | amazon | 3600 | [evidence](https://www.amazon.com/dp/0753519550) | moderate |
| Amp It Up: Leading for Hypergrowth by Raising Expectations, Increasing Urgency, and Elevating Intensity — Frank Slootman | amazon | 1406 | [evidence](https://www.amazon.com/dp/1119836115) | moderate |
| Superhuman — Rowan Hooper | amazon | 51 | [evidence](https://www.amazon.com/dp/1408709465) | moderate |
| The Four: The Hidden DNA of Amazon, Apple, Facebook, and Google — Scott Galloway | amazon | 4198 | [evidence](https://www.amazon.com/dp/0735213674) | moderate |
| The Discovery of France — Graham Robb | amazon | 429 | [evidence](https://www.amazon.com/dp/B000WJSBCS) | moderate |
| Making Ideas Happen — Scott Belsky | amazon | 639 | [evidence](https://www.amazon.com/dp/159184312X) | moderate |
| Born of This Land: My Life Story — Chung Ju-yung | amazon | 33 | [evidence](https://www.amazon.com/dp/B07YNZF25Z) | moderate |
| Magnetic Mountain — Stephen Kotkin | amazon | 88 | [evidence](https://www.amazon.com/dp/0520208234) | moderate |
| The Formula: How Rogues, Geniuses, and Speed Freaks Reengineered F1 into the World's Fastest-Growing Sport — Joshua Robinson and Jonathan Clegg | amazon | 1618 | [evidence](https://www.amazon.com/dp/0063318628) | moderate |
| The Worst Journey in the World — Apsley Cherry-Garrard | amazon | 1202 | [evidence](https://www.amazon.com/dp/0143039385) | moderate |
| White Trash: The 400-Year Untold History of Class in America — Nancy Isenberg | amazon | 5654 | [evidence](https://www.amazon.com/dp/0670785970) | moderate |
| Who’s in Charge? — Michael S. Gazzaniga | amazon | 576 | [evidence](https://www.amazon.com/dp/0061906107) | moderate |
| Destined For War — Graham Allison | amazon | 2662 | [evidence](https://www.amazon.com/dp/0544935276) | moderate |
| Wizard: The Life and Times of Nikola Tesla — Marc J. Seifer | amazon | 1605 | [evidence](https://www.amazon.com/dp/1559723297) | moderate |
| The Conscious Mind — David Chalmers | amazon | 332 | [evidence](https://www.amazon.com/dp/0195105532) | moderate |
| The Blazing World: A New History of Revolutionary England — Jonathan Healey | amazon | 600 | [evidence](https://www.amazon.com/dp/0593318358) | moderate |
| Conquistador — Buddy Levy | amazon | 1608 | [evidence](https://www.amazon.com/dp/0553384716) | moderate |
| Who Is Michael Ovitz? — Michael Ovitz | amazon | 717 | [evidence](https://www.amazon.com/dp/1591845548) | moderate |
| American Nations — Colin Woodard | amazon | 5248 | [evidence](https://www.amazon.com/dp/0143122029) | moderate |
| The History of Mary Prince: A West Indian Slave Narrative — Mary Prince | amazon | 220 | [evidence](https://www.amazon.com/dp/0140437495) | moderate |
| The Four Pillars of Investing — William J. Bernstein | amazon | 1124 | [evidence](https://www.amazon.com/dp/0071385290) | moderate |
| To Save Everything, Click Here — Evgeny Morozov | amazon | 195 | [evidence](https://www.amazon.com/dp/1610391381) | moderate |
| Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist — Kate Raworth | amazon | 3979 | [evidence](https://www.amazon.com/dp/1847941397) | moderate |
| The Making of Europe — Robert Bartlett | amazon | 129 | [evidence](https://www.amazon.com/dp/0691037809) | moderate |
| Persuasive Technology — B.J. Fogg | amazon | 122 | [evidence](https://www.amazon.com/dp/B000VO18UQ) | moderate |
| Order Out of Chaos — Ilya Prigogine and Isabelle Stengers | amazon | 66 | [evidence](https://www.amazon.com/dp/0553343637) | moderate |
| Super Thinking: The Big Book of Mental Models — Gabriel Weinberg; Lauren McCann | amazon | 1232 | [evidence](https://www.amazon.com/dp/0525542817) | moderate |
| Saint-Exupery — Stacy Schiff | amazon | 149 | [evidence](https://www.amazon.com/dp/0805079130) | moderate |
| The Divide — Jason Hickel | amazon | 503 | [evidence](https://www.amazon.com/dp/1785151126) | moderate |
| The King of Oil — Daniel Ammann | amazon | 1631 | [evidence](https://www.amazon.com/dp/0312570740) | moderate |
| The Transformation of War — Martin van Creveld | amazon | 112 | [evidence](https://www.amazon.com/dp/0029331552) | moderate |
| Ice Age — John Gribbin; Mary Gribbin | amazon | 309 | [evidence](https://www.amazon.com/dp/1511926422) | moderate |
| The Minimalist Entrepreneur — Sahil Lavingia | amazon | 764 | [evidence](https://www.amazon.com/dp/0593192397) | moderate |
| The Medieval Origins of the Legal Profession — James A. Brundage | amazon | 7 | [evidence](https://www.amazon.com/dp/0226077608) | moderate |
| Every Living Thing: The Great and Deadly Race to Know All Life — Jason Roberts | amazon | 227 | [evidence](https://www.amazon.com/dp/1984855204) | moderate |
| Buffett — Roger Lowenstein | amazon | 1377 | [evidence](https://www.amazon.com/dp/0812979273) | moderate |
| The Billion Dollar Spy — David E. Hoffman | amazon | 6624 | [evidence](https://www.amazon.com/dp/0385537603) | moderate |
| Mastermind: How to Think Like Sherlock Holmes — Maria Konnikova | amazon | 1465 | [evidence](https://www.amazon.com/dp/0670026573) | moderate |
| Don’t Sleep, There Are Snakes — Daniel Everett | amazon | 1127 | [evidence](https://www.amazon.com/dp/0307386120) | moderate |
| The Sirens' Call — Chris Hayes | amazon | 1230 | [evidence](https://www.amazon.com/dp/B0DDNGLSJP) | moderate |
| Stress Test — Timothy F. Geithner | amazon | 1452 | [evidence](https://www.amazon.com/dp/0804138613) | moderate |
| One Buck at a Time — Macon Brock and Earl Swift | amazon | 110 | [evidence](https://www.amazon.com/dp/0895876817) | moderate |
| The Warren Buffett CEO — Robert P. Miles | amazon | 24 | [evidence](https://www.amazon.com/dp/0471442593) | moderate |
| The Ten Commandments for Business Failure — Donald R. Keough | amazon | 369 | [evidence](https://www.amazon.com/dp/1591844134) | moderate |
| The Book of Elon: Elon Musk's Most Useful Ideas in His Own Words — Eric Jorgenson | amazon | 401 | [evidence](https://www.amazon.com/dp/1544550758) | moderate |
| The English and Their History — Robert Tombs | amazon | 1566 | [evidence](https://www.amazon.com/dp/1101873361) | moderate |
| Leadership: Six Studies in World Strategy — Henry Kissinger | amazon | 1348 | [evidence](https://www.amazon.com/dp/0593489446) | moderate |
| The Man Without a Face — Masha Gessen | amazon | 2071 | [evidence](https://www.amazon.com/dp/1594488428) | moderate |
| Less Is More — Jason Hickel | amazon | 968 | [evidence](https://www.amazon.com/dp/1786091216) | moderate |
| The Witches: Salem, 1692 — Stacy Schiff | amazon | 2034 | [evidence](https://www.amazon.com/dp/0316200603) | moderate |
| Empireland: How Imperialism Has Shaped Modern Britain — Sathnam Sanghera | amazon | 2568 | [evidence](https://www.amazon.com/dp/0241445299) | moderate |
| The Storm Before the Storm: The Beginning of the End of the Roman Republic — Mike Duncan | amazon | 4438 | [evidence](https://www.amazon.com/dp/1610397215) | moderate |
| Cleopatra: A Life — Stacy Schiff | amazon | 2453 | [evidence](https://www.amazon.com/dp/0316120448) | moderate |
<a id="shelf-91e900ef9d3f"></a>

## Status and Culture: How Our Desire for Social Rank Creates Taste, Identity, Art, Fashion, and Constant Change — W. David Marx

Sources: 263, 299. Prior review: analysis/analysis_leinweber_261025_2011.md#shelf-91e900ef9d3f. 

Added amazon: **251**. [Source](https://www.amazon.com/dp/0593296702); [saved evidence](../data/cheap100_261102/raw/amazon-1571-parallel-fast.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 2.80 | 2.80 |
| Expert authority | 3.75 | 3.75 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.40; O15 -5.00; REL 2.00; RD 1.09.

R&D inputs: reference pages 20 (GoogleBooks:uyxJEAAAQBAJ); total pages 368 (GoogleBooks:uyxJEAAAQBAJ). 20 / 368 = 5.43%; R&D 1.09. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **52.17 → 47.17**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1123"></a>

## What I Learned Losing a Million Dollars — Jim Paul; Brendan Moynihan

Sources: 192, 290, 293. Prior review: analysis/analysis_subcritical_261025_2011.md#rem-u1123. 

Added amazon: **1798**. [Source](https://www.amazon.com/dp/0963579495); [saved evidence](../data/cheapnext100_261102/raw/amazon-1765-parallel-fast-short.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -3.20; O15 0.00; REL 2.83; RD 0.21.

R&D inputs: reference pages 2 (OL1131535M); total pages 191 (/books/OL29227845M). 2 / 191 = 1.05%; R&D 0.21. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **44.53 → 44.53**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-1aecb42a953a"></a>

## The Fate of Rome: Climate, Disease, and the End of An Empire — Kyle Harper

Sources: 265, 269, 289. Prior review: analysis/analysis_nikomc_261025_2011.md#shelf-1aecb42a953a. 

Added amazon: **624**. [Source](https://www.amazon.com/dp/0691166838); [saved evidence](../data/cheapnext100_261102/raw/amazon-1767-parallel-fast-short.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 -10.00; T12 -10.00; H13 -12.00; P14 -0.90; O15 -5.00; REL 2.83; RD 4.60.

R&D inputs: reference pages 96 (ISBN:9780691166834); total pages 417 (OL26424811M). 96 / 417 = 23.02%; R&D 4.60. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **44.50 → 39.50**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0170"></a>

## Toward a Theory of Instruction — Jerome Bruner

Sources: 232, 291. Prior review: analysis/analysis_bretvictor_261025_2011.md#progress-0170. 

Added amazon: **27**. [Source](https://www.amazon.com/dp/0674897005); [saved evidence](../data/reuse100b_261102/raw/amazon-0204-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -6.00; O15 -10.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 192 (/books/OL40222877M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **60.19 → 50.19**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0964"></a>

## Paris 1919: Six Months that Changed the World — Margaret MacMillan, Richard Holbrooke, Casey Hampton

Sources: 189, 201. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u0964. 

Added reference: **16**. [Source](https://library.usi.edu/record/1405308?ln=en&p=subjectheading%3A%5BInternationale+conflicten.%5D); [saved evidence](../data/cheapnext100_261101/raw/reference-0543-parallel-fast.json). Counts the expressly catalogued reference section only; may omit separate notes. Does not count the index. This is metadata evidence, not full-text inspection. No reference-page count is inferred from total length.

Ranges: Bibliographical references: 497–512.

Added amazon: **2002**. [Source](https://www.amazon.com/dp/0375760520); [saved evidence](../data/value250_261102/raw/amazon-0522-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -4.28; P14 -2.50; O15 0.00; REL 2.00; RD 0.51.

R&D inputs: reference pages 16 (Source:https://library.usi.edu/record/1405308?ln=en&p=subjectheading%3A%5BInternationale+conflicten.%5D); total pages 624 (/books/OL7427608M). 16 / 624 = 2.56%; R&D 0.51. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.01 → 56.52**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-192-7"></a>

## The Cloud Revolution — Mark P. Mills

Sources: 272. Prior review: analysis/analysis_ezrascience_261025_1223.md#complete-192-7. 

Added amazon: **108**. [Source](https://www.amazon.com/dp/1641772301); [saved evidence](../data/value250_261102/raw/amazon-0001-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 11.00 | 6.05 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 464 (ISBN:1641772301). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **62.19 → 57.19**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bgec05fa2ad7"></a>

## Human Universals — Donald Brown

Sources: 173, 291. Prior review: analysis/analysis_bretvictor_261025_2011.md#bgec05fa2ad7. 

Added amazon: **64**. [Source](https://www.amazon.com/dp/007008209X); [saved evidence](../data/value250_261102/raw/amazon-0002-parallel-fast-compact.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.50; O15 -10.00; REL 2.00; RD 4.09.

R&D inputs: reference pages 45 (OL1864282M); total pages 220 (ISBN:007008209X). 45 / 220 = 20.45%; R&D 4.09. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **62.17 → 52.17**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="intake-0577"></a>

## Insanely Great — Steven Levy

Sources: 217, 270, 291, 298. Prior review: analysis/analysis_bretvictor_261025_2011.md#intake-0577. 

Added amazon: **182**. [Source](https://www.amazon.com/dp/0140291776); [saved evidence](../data/value250_261102/raw/amazon-0008-parallel-fast-compact.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.28; P14 -3.20; O15 -5.00; REL 3.46; RD 0.27.

R&D inputs: reference pages 4 (OL1420398M); total pages 292 (/books/OL1420398M). 4 / 292 = 1.37%; R&D 0.27. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **62.05 → 57.05**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n3911e15103"></a>

## A Primate’s Memoir — Robert M. Sapolsky

Sources: 132, 182, 276. Prior review: analysis/analysis_misiti_261024_2307.md#n3911e15103. 

Added amazon: **1199**. [Source](https://www.amazon.com/dp/0743202473); [saved evidence](../data/value250_261102/raw/amazon-0015-parallel-fast-compact.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.08; P14 -2.50; O15 0.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 304 (ISBN:9780743202473). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **61.92 → 61.92**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="progress-0605"></a>

## Euler's Pioneering Equation — Robin Wilson

Sources: 240. Prior review: analysis/analysis_metadata2_261025_1921.md#progress-0605. 

Added amazon: **115**. [Source](https://www.amazon.com/dp/0198794924); [saved evidence](../data/value250_261102/raw/amazon-0016-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.80; O15 -5.00; REL 0.00; RD 0.34.

R&D inputs: reference pages 3 (GoogleBooks:fMLADwAAQBAJ); total pages 176 (/books/OL28724949M). 3 / 176 = 1.70%; R&D 0.34. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.91 → 56.91**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0594"></a>

## For The Love Of Physics — Walter Lewin; Warren Goldstein

Sources: 118, 148, 177, 293. Prior review: analysis/analysis_mcateer_261025_2011.md#g0594. 

Added amazon: **2557**. [Source](https://www.amazon.com/dp/145160713X); [saved evidence](../data/value250_261102/raw/amazon-0025-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 6.00 | 3.60 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.50; O15 0.00; REL 3.46; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 320 (OL28468910M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **61.78 → 61.78**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1652"></a>

## Shadows of Forgotten Ancestors — Carl Sagan; Ann Druyan

Sources: 205, 253. Prior review: analysis/analysis_jermyn_261024_1455.md#rem-u1652. 

Added amazon: **661**. [Source](https://www.amazon.com/dp/0345384725); [saved evidence](../data/value250_261102/raw/amazon-0026-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.40; O15 -5.00; REL 2.00; RD 2.27.

R&D inputs: reference pages 60 (OL21550229M); total pages 528 (ISBN:9780345384720). 60 / 528 = 11.36%; R&D 2.27. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.77 → 56.77**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-e1c174f0c7b0"></a>

## The Lady Tasting Tea — David Salsburg

Sources: 259, 291. Prior review: analysis/analysis_bretvictor_261025_2011.md#shelf-e1c174f0c7b0. 

Added amazon: **470**. [Source](https://www.amazon.com/dp/0805071342); [saved evidence](../data/value250_261102/raw/amazon-0032-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 9.75 | 9.75 |
| Mechanistic and causal depth | 7.80 | 7.80 |
| Information density | 6.50 | 4.23 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 1.95 | 1.95 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 -1.04; P14 -2.50; O15 -5.00; REL 2.00; RD 0.57.

R&D inputs: reference pages 10 (CiNii:BB07356518); total pages 352 (OL7932832M). 10 / 352 = 2.84%; R&D 0.57. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.68 → 56.68**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-3af7c7070249"></a>

## Everything in Its Place (Work Clean) — Dan Charnas

Sources: 251. Prior review: analysis/analysis_sivers_261024_1455.md#shelf-3af7c7070249. 

Added amazon: **619**. [Source](https://www.amazon.com/dp/1635650119); [saved evidence](../data/value250_261102/raw/amazon-0040-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.00; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 291 (OL27224911M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **61.63 → 56.63**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-2b2b69258295"></a>

## The Organized Mind: Thinking Straight in the Age of Information Overload — Daniel J. Levitin

Sources: 263, 276. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-2b2b69258295. 

Added amazon: **2494**. [Source](https://www.amazon.com/dp/052595418X); [saved evidence](../data/value250_261102/raw/amazon-0043-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.05 | 7.18 |
| Transferable strategic utility | 9.75 | 9.75 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 6.50 | 4.23 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 3.85 | 3.85 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.20; O15 0.00; REL 2.00; RD 3.22.

R&D inputs: reference pages 85 (ISBN:9780147516312); total pages 528 (OL28569301M). 85 / 528 = 16.10%; R&D 3.22. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.63 → 61.63**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0340"></a>

## The Science of Success — Charles Koch

Sources: 115. Prior review: analysis/analysis_scorebonus_261024_0106.md#g0340. 

Added amazon: **321**. [Source](https://www.amazon.com/dp/0470139889); [saved evidence](../data/value250_261102/raw/amazon-0049-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.90; O15 -5.00; REL 0.00; RD 1.15.

R&D inputs: reference pages 12 (GoogleBooks:ZG1pPhxlFAIC); total pages 208 (ISBN:0470139889). 12 / 208 = 5.77%; R&D 1.15. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.55 → 56.55**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="nce10db8d6e"></a>

## The End of Everything (Astrophysically Speaking) — Katie Mack

Sources: 139, 204. Prior review: analysis/analysis_scorebonus_261024_0106.md#nce10db8d6e. 

Added amazon: **3181**. [Source](https://www.amazon.com/dp/1982103558); [saved evidence](../data/value250_261102/raw/amazon-0050-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.60; O15 0.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 256 (ISBN:9781982103552). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **61.51 → 61.51**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rem-u1615"></a>

## This Is Your Brain on Music — Daniel J. Levitin

Sources: 205, 297, 299, 303. Prior review: analysis/analysis_ringsmuth_261025_2011.md#rem-u1615. 

Added amazon: **3022**. [Source](https://www.amazon.com/dp/0452288525); [saved evidence](../data/value250_261102/raw/amazon-0043-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.00; O15 0.00; REL 3.46; RD 1.86.

R&D inputs: reference pages 30 (OL39814261M); total pages 322 (/books/OL39814261M). 30 / 322 = 9.32%; R&D 1.86. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **59.63 → 59.63**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0248"></a>

## Good Profit — Charles Koch

Sources: 115, 173. Prior review: analysis/analysis_scorebonus_261024_0106.md#g0248. 

Added amazon: **990**. [Source](https://www.amazon.com/dp/1101904135); [saved evidence](../data/value250_261102/raw/amazon-0049-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 11.00 | 6.05 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.10; O15 -5.00; REL 2.00; RD 0.42.

R&D inputs: reference pages 6 (GoogleBooks:Kp_GBgAAQBAJ); total pages 288 (ISBN:1101904135). 6 / 288 = 2.08%; R&D 0.42. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.74 → 52.74**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelves-monkeyluv"></a>

## Monkeyluv: And Other Essays on Our Lives as Animals — Robert M. Sapolsky

Sources: 291. Prior review: analysis/analysis_bretvictor_261025_2011.md#shelves-monkeyluv. 

Added amazon: **219**. [Source](https://www.amazon.com/dp/0743260163); [saved evidence](../data/value250_261102/raw/amazon-0015-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.10; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 224 (ISBN:9780743260169). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **55.54 → 50.54**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="intake-0813"></a>

## Professor Stewart's Cabinet of Mathematical Curiosities — Ian Stewart

Sources: 222. Prior review: analysis/analysis_scorebonus_261024_0106.md#intake-0813. 

Added amazon: **169**. [Source](https://www.amazon.com/dp/0465013023); [saved evidence](../data/value250_261102/raw/amazon-0009-parallel-fast-compact.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 7.00 | 2.88 |
| Transferable strategic utility | 5.00 | 5.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.80; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 310 (/books/OL32135435M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **54.66 → 49.66**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0308"></a>

## The 80/20 Principle — Richard Koch

Sources: 115. Prior review: analysis/analysis_scorebonus_261024_0106.md#g0308. 

Added amazon: **2821**. [Source](https://www.amazon.com/dp/0385491743); [saved evidence](../data/value250_261102/raw/amazon-0049-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.90; O15 0.00; REL 0.00; RD 0.82.

R&D inputs: reference pages 11 (OL690849M); total pages 269 (ISBN:0385491743). 11 / 269 = 4.09%; R&D 0.82. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **51.84 → 51.84**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="bgaa4cd74300"></a>

## The End of Poverty — Jeffrey Sachs

Sources: 148. Prior review: analysis/analysis_scorebonus_261024_0106.md#bgaa4cd74300. 

Added amazon: **635**. [Source](https://www.amazon.com/dp/1594200459); [saved evidence](../data/value250_261102/raw/amazon-0052-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.10; O15 -5.00; REL 0.00; RD 0.69.

R&D inputs: reference pages 16 (OL22768083M); total pages 464 (9780143036586). 16 / 464 = 3.45%; R&D 0.69. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.47 → 56.47**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="progress-0479"></a>

## The Infinite Resource — Ramez Naam

Sources: 232. Prior review: analysis/analysis_metadata2_261025_1921.md#progress-0479. 

Added amazon: **135**. [Source](https://www.amazon.com/dp/161168255X); [saved evidence](../data/value250_261102/raw/amazon-0053-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.30; O15 -5.00; REL 0.00; RD 1.54.

R&D inputs: reference pages 28 (GoogleBooks:dWZeYN42wZgC); total pages 364 (/books/OL25429027M). 28 / 364 = 7.69%; R&D 1.54. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.47 → 56.47**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0702"></a>

## Wedding of the Waters — Peter L. Bernstein

Sources: 245. Prior review: analysis/analysis_metadata1000_261025_1546.md#progress-0702. 

Added amazon: **254**. [Source](https://www.amazon.com/dp/0393327957); [saved evidence](../data/value250_261102/raw/amazon-0054-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -8.04; P14 -2.10; O15 -5.00; REL 0.00; RD 0.76.

R&D inputs: reference pages 11 (ISBN:0393052338); total pages 288 (/books/OL7457802M). 11 / 288 = 3.82%; R&D 0.76. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.46 → 56.46**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1900"></a>

## Endure: Mind, Body, and the Curiously Elastic Limits of Human Performance — Alex Hutchinson

Sources: 193, 263. Prior review: analysis/analysis_mchale_261024_1455.md#rem-u1900. 

Added amazon: **4300**. [Source](https://www.amazon.com/dp/006249998X); [saved evidence](../data/value250_261102/raw/amazon-0059-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.80; O15 0.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 320 (/books/OL44169941M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **61.43 → 61.43**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-23-113"></a>

## Religion Explained — Pascal Boyer

Sources: 269, 283. Prior review: analysis/analysis_metadata1000_261025_1546.md#rest-23-113. 

Added amazon: **258**. [Source](https://www.amazon.com/dp/0465006965); [saved evidence](../data/value250_261102/raw/amazon-0070-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.50; O15 -5.00; REL 2.00; RD 0.70.

R&D inputs: reference pages 15 (ISBN:9780465006953); total pages 430 (ISBN:0434008435). 15 / 430 = 3.49%; R&D 0.70. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.28 → 56.28**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bgebbfba2a81"></a>

## Merchants of Doubt — Naomi Oreskes and Erik M. Conway

Sources: 151, 204, 297, 303. Prior review: analysis/analysis_ringsmuth_261025_2011.md#bgebbfba2a81. 

Added amazon: **1929**. [Source](https://www.amazon.com/dp/1608193942); [saved evidence](../data/value250_261102/raw/amazon-0071-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -1.60; O15 0.00; REL 3.46; RD 3.53.

R&D inputs: reference pages 65 (HathiTrust:102324812); total pages 368 (ISBN:1608193942). 65 / 368 = 17.66%; R&D 3.53. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.28 → 61.28**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-953131962b1e"></a>

## Ruling the Void: The Hollowing of Western Democracy — Peter Mair

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-953131962b1e. 

Added amazon: **84**. [Source](https://www.amazon.com/dp/1844673243); [saved evidence](../data/value250_261102/raw/amazon-0074-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 4.75 | 4.75 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.70 | 1.70 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.30; O15 -10.00; REL 0.00; RD 2.08.

R&D inputs: reference pages 20 (GoogleBooks:bblvDwAAQBAJ); total pages 192 (GoogleBooks:bblvDwAAQBAJ). 20 / 192 = 10.42%; R&D 2.08. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **61.25 → 51.25**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="nc194dd7f59"></a>

## Accidental Empires — Robert X. Cringely

Sources: 134, 141, 211, 217, 244. Prior review: analysis/analysis_scorebonus_261024_0106.md#nc194dd7f59. 

Added amazon: **137**. [Source](https://www.amazon.com/dp/0887308554); [saved evidence](../data/value250_261102/raw/amazon-0078-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.20; P14 -3.40; O15 -5.00; REL 4.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 358 (OL22139026M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **61.22 → 56.22**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0582"></a>

## Deep Medicine — Eric Topol

Sources: 118, 303. Prior review: analysis/analysis_fast100_261102_0000.md#g0582. 

Added amazon: **926**. [Source](https://www.amazon.com/dp/1541646495); [saved evidence](../data/value250_261102/raw/amazon-0081-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.70; O15 -5.00; REL 2.00; RD 2.15.

R&D inputs: reference pages 43 (Source:https://cmc.marmot.org/Record/.b59767509); total pages 400 (ISBN:1541644638). 43 / 400 = 10.75%; R&D 2.15. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.18 → 56.18**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-3066f2c783a3"></a>

## Explore/Create My Life in Pursuit of New Frontiers, Hidden Worlds, and the Creative Spark — Richard Garriott and David Fisher

Sources: 261. Prior review: analysis/analysis_metadata2_261025_1921.md#shelf-3066f2c783a3. 

Added amazon: **109**. [Source](https://www.amazon.com/dp/006228665X); [saved evidence](../data/value250_261102/raw/amazon-0086-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.80 | 7.80 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 3.75 | 3.75 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 -0.40; P14 -0.90; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 297 (ISBN:9780062286673). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **61.08 → 56.08**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0924"></a>

## Seeking Wisdom — Peter Bevelin

Sources: 121, 173, 192, 215, 251, 258. Prior review: analysis/analysis_metadata1000_261025_1546.md#g0924. 

Added amazon: **397**. [Source](https://www.amazon.com/dp/1578644283); [saved evidence](../data/value250_261102/raw/amazon-0089-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.30; O15 -5.00; REL 4.47; RD 0.73.

R&D inputs: reference pages 12 (ISBN:1578644283); total pages 328 (ISBN:1578644283). 12 / 328 = 3.66%; R&D 0.73. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **61.05 → 56.05**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="progress-0398"></a>

## Ghetto at the Center of the World — Gordon Mathews

Sources: 232. Prior review: analysis/analysis_metadata2_261025_1921.md#progress-0398. 

Added amazon: **115**. [Source](https://www.amazon.com/dp/0226510190); [saved evidence](../data/value250_261102/raw/amazon-0090-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.50; O15 -5.00; REL 0.00; RD 0.50.

R&D inputs: reference pages 6 (GoogleBooks:Ks-sZHUFTd4C); total pages 241 (OL24478994M). 6 / 241 = 2.49%; R&D 0.50. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.04 → 56.04**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1171"></a>

## Capital Ideas — Peter L. Bernstein

Sources: 123. Prior review: analysis/analysis_scorebonus_261024_0106.md#g1171. 

Added amazon: **131**. [Source](https://www.amazon.com/dp/0471731749); [saved evidence](../data/value250_261102/raw/amazon-0054-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -1.44; P14 -3.40; O15 -5.00; REL 0.00; RD 0.65.

R&D inputs: reference pages 11 (OL22108877M); total pages 340 (ISBN:0029030129). 11 / 340 = 3.24%; R&D 0.65. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **60.10 → 55.10**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="complete-666-109"></a>

## Bad Astronomy: Misconceptions and Misuses Revealed, from Astrology to the Moon Landing — Philip C. Plait

Sources: 283, 301. Prior review: analysis/analysis_czarandy_261025_2011.md#complete-666-109. 

Added amazon: **280**. [Source](https://www.amazon.com/dp/0471409766); [saved evidence](../data/value250_261102/raw/amazon-0063-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 7.00 | 2.88 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.40; O15 -5.00; REL 2.00; RD 0.29.

R&D inputs: reference pages 4 (ISBN:0471409766); total pages 277 (ISBN:0471409766). 4 / 277 = 1.44%; R&D 0.29. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **53.47 → 48.47**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n045f6d232e"></a>

## Understanding Power — Noam Chomsky

Sources: 144, 290, 293. Prior review: analysis/analysis_subcritical_261025_2011.md#n045f6d232e. 

Added amazon: **730**. [Source](https://www.amazon.com/dp/1565847032); [saved evidence](../data/value250_261102/raw/amazon-0091-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 6.00 | 3.60 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.00 | 1.00 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -2.40; O15 -5.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 416 (ISBN:9781565847033). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **36.42 → 31.42**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rem-u1282"></a>

## Code Girls: The Untold Story of the American Women Code Breakers Who Helped Win World War II — Liza Mundy

Sources: 199, 301. Prior review: analysis/analysis_czarandy_261025_2011.md#rem-u1282. 

Added amazon: **6725**. [Source](https://www.amazon.com/dp/0316439894); [saved evidence](../data/value250_261102/raw/amazon-0094-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -3.24; P14 -0.90; O15 0.00; REL 2.00; RD 1.85.

R&D inputs: reference pages 40 (OL26929853M); total pages 432 (/books/OL36807820M). 40 / 432 = 9.26%; R&D 1.85. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **61.00 → 61.00**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-98fc49596c59"></a>

## The Riddle of the Labyrinth — Margalit Fox

Sources: 259. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-98fc49596c59. 

Added amazon: **974**. [Source](https://www.amazon.com/dp/0062228838); [saved evidence](../data/value250_261102/raw/amazon-0106-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.25 | 4.25 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 -2.80; P14 -1.30; O15 -5.00; REL 0.00; RD 0.44.

R&D inputs: reference pages 8 (ISBN:9780062228833); total pages 363 (OL26176999M). 8 / 363 = 2.20%; R&D 0.44. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **60.84 → 55.84**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="q0983"></a>

## Silent Spring — Rachel Carson

Sources: 8, 194, 195, 203, 300. Prior review: analysis/analysis_hendricks_261025_2011.md#q0983. 

Added amazon: **3848**. [Source](https://www.amazon.com/dp/0395683297); [saved evidence](../data/value250_261102/raw/amazon-0121-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.76 | 7.76 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -6.40; O15 0.00; REL 4.00; RD 2.91.

R&D inputs: reference pages 55 (OL3670355M); total pages 378 (ISBN:0618249060). 55 / 378 = 14.55%; R&D 2.91. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **60.69 → 60.69**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-55-48"></a>

## Osman’s Dream — Caroline Finkel

Sources: 269, 276, 300. Prior review: analysis/analysis_hendricks_261025_2011.md#rest-55-48. 

Added amazon: **463**. [Source](https://www.amazon.com/dp/0465023967); [saved evidence](../data/value250_261102/raw/amazon-0128-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -4.12; P14 -2.10; O15 -5.00; REL 2.83; RD 0.97.

R&D inputs: reference pages 32 (ISBN:0465023967); total pages 660 (Osman’s Dream; edition date unverified). 32 / 660 = 4.85%; R&D 0.97. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **60.62 → 55.62**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0293"></a>

## An Entirely Synthetic Fish — Anders Halverson

Sources: 212. Prior review: analysis/analysis_metadata1000_261025_1546.md#intake-0293. 

Added amazon: **240**. [Source](https://www.amazon.com/dp/0300140878); [saved evidence](../data/value250_261102/raw/amazon-0129-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.60; O15 -5.00; REL 0.00; RD 2.65.

R&D inputs: reference pages 34 (ISBN:9780300140873); total pages 257 (/books/OL23735627M). 34 / 257 = 13.23%; R&D 2.65. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **60.62 → 55.62**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1163"></a>

## A Random Walk Down Wall Street — Burton Malkiel

Sources: 123, 168, 180, 259, 290, 301. Prior review: analysis/analysis_subcritical_261025_2011.md#g1163. 

Added amazon: **554**. [Source](https://www.amazon.com/dp/0393340740); [saved evidence](../data/value250_261102/raw/amazon-0136-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -5.30; O15 -5.00; REL 4.47; RD 0.67.

R&D inputs: reference pages 15 (OL387646M); total pages 447 (ISBN:0393246116). 15 / 447 = 3.36%; R&D 0.67. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **60.51 → 55.51**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1289"></a>

## Black Flags — Joby Warrick

Sources: 126, 276, 293. Prior review: analysis/analysis_mcateer_261025_2011.md#g1289. 

Added amazon: **4404**. [Source](https://www.amazon.com/dp/0385538219); [saved evidence](../data/value250_261102/raw/amazon-0143-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -0.48; P14 -1.10; O15 0.00; REL 2.83; RD 0.83.

R&D inputs: reference pages 16 (Harvard:990144984040203941); total pages 384 (ISBN:0804168938). 16 / 384 = 4.17%; R&D 0.83. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **60.40 → 60.40**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-7b96f40f7246"></a>

## Henry J. Kaiser: Builder in the Modern American West — Mark Foster

Sources: 261, 276. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-7b96f40f7246. 

Added amazon: **45**. [Source](https://www.amazon.com/dp/0292742266); [saved evidence](../data/value250_261102/raw/amazon-0157-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.45 | 12.28 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -2.36; P14 -3.70; O15 -10.00; REL 2.00; RD 0.34.

R&D inputs: reference pages 6 (OL2210727M); total pages 358 (OL2210727M). 6 / 358 = 1.68%; R&D 0.34. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **60.28 → 50.28**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0101"></a>

## Who Owns the Future? — Jaron Lanier

Sources: 208. Prior review: analysis/analysis_metadata1000_261025_1546.md#intake-0101. 

Added amazon: **615**. [Source](https://www.amazon.com/dp/1451654960); [saved evidence](../data/value250_261102/raw/amazon-0161-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.30; O15 -5.00; REL 0.00; RD 0.24.

R&D inputs: reference pages 5 (ISBN:9781451654967); total pages 416 (/books/OL25424120M). 5 / 416 = 1.20%; R&D 0.24. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **60.23 → 55.23**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1502"></a>

## Lab Girl — Hope Jahren

Sources: 203, 293, 303. Prior review: analysis/analysis_mcateer_261025_2011.md#rem-u1502. 

Added amazon: **9890**. [Source](https://www.amazon.com/dp/0345809866); [saved evidence](../data/value250_261102/raw/amazon-0162-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -0.44; P14 -1.00; O15 0.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 304 (/books/OL34635271M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **60.23 → 60.23**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n3933b51b7f"></a>

## The Arms of Krupp — William Manchester

Sources: 134. Prior review: analysis/analysis_metadata1000_261025_1546.md#n3933b51b7f. 

Added amazon: **308**. [Source](https://www.amazon.com/dp/0316529400); [saved evidence](../data/value250_261102/raw/amazon-0132-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 4.00 | 1.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -2.32; P14 -5.80; O15 -5.00; REL 0.00; RD 0.14.

R&D inputs: reference pages 7 (ISBN:0899509894); total pages 976 (GoogleBooks:3sC3AAAAIAAJ). 7 / 976 = 0.72%; R&D 0.14. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **59.90 → 54.90**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1022"></a>

## City of the Century — Donald L. Miller

Sources: 122. Prior review: analysis/analysis_scorebonus_261024_0106.md#g1022. 

Added amazon: **353**. [Source](https://www.amazon.com/dp/0684831384); [saved evidence](../data/value250_261102/raw/amazon-0105-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 5.00 | 2.50 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 -5.04; P14 -3.00; O15 -5.00; REL 0.00; RD 3.64.

R&D inputs: reference pages 128 (OL7721484M); total pages 704 (ISBN:0684831384). 128 / 704 = 18.18%; R&D 3.64. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **57.08 → 52.08**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0164"></a>

## Close to the Machine — Ellen Ullman

Sources: 211. Prior review: analysis/analysis_scorebonus_261024_0106.md#intake-0164. 

Added amazon: **172**. [Source](https://www.amazon.com/dp/1250002486); [saved evidence](../data/value250_261102/raw/amazon-0161-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -1.16; P14 -2.90; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 189 (/books/OL680682M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **56.13 → 51.13**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0803"></a>

## The Road to Serfdom — Friedrich A. Hayek

Sources: 120, 187, 215, 290, 293, 294, 300. Prior review: analysis/analysis_subcritical_261025_2011.md#g0803. 

Added amazon: **3087**. [Source](https://www.amazon.com/dp/0226320553); [saved evidence](../data/value250_261102/raw/amazon-0150-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -8.20; O15 0.00; REL 4.90; RD 0.21.

R&D inputs: reference pages 3 (OL21888122M); total pages 283 (ISBN:0226320553). 3 / 283 = 1.06%; R&D 0.21. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **49.23 → 49.23**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0998"></a>

## The Mismeasure of Man — Stephen Jay Gould

Sources: 190, 204, 283, 303. Prior review: analysis/analysis_elitescience_261025_2011.md#rem-u0998. 

Added amazon: **543**. [Source](https://www.amazon.com/dp/0393314251); [saved evidence](../data/value250_261102/raw/amazon-0114-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -4.50; O15 -5.00; REL 3.46; RD 0.27.

R&D inputs: reference pages 6 (OL807754M); total pages 448 (/books/OL29595101M). 6 / 448 = 1.34%; R&D 0.27. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **38.32 → 33.32**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0963"></a>

## The Bed of Procrustes — Nassim Nicholas Taleb

Sources: 121, 251, 293. Prior review: analysis/analysis_mcateer_261025_2011.md#g0963. 

Added amazon: **1654**. [Source](https://www.amazon.com/dp/1400069971); [saved evidence](../data/value250_261102/raw/amazon-0133-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 10.00 | 5.00 |
| Systems integration | 7.00 | 2.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 4.00 | 4.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.60; O15 0.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 156 (ISBN:0812982401). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **36.01 → 36.01**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-b16ea0e853ec"></a>

## The Good Ancestor — Roman Krznaric

Sources: 251. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-b16ea0e853ec. 

Added amazon: **377**. [Source](https://www.amazon.com/dp/1615198334); [saved evidence](../data/value250_261102/raw/amazon-0148-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 5.50 | 3.03 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.30 | 1.30 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.60; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 288 (OL29868415M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **35.86 → 30.86**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1583"></a>

## Origins: Fourteen Billion Years of Cosmic Evolution — Neil deGrasse Tyson; Donald Goldsmith

Sources: 204, 303. Prior review: analysis/analysis_elitescience_261025_2011.md#rem-u1583. 

Added amazon: **1420**. [Source](https://www.amazon.com/dp/0393866882); [saved evidence](../data/value250_261102/raw/amazon-0172-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.20; O15 0.00; REL 2.00; RD 0.18.

R&D inputs: reference pages 3 (ISBN:0393059928); total pages 336 (/books/OL7718433M). 3 / 336 = 0.89%; R&D 0.18. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **60.17 → 60.17**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1526"></a>

## The Botany of Desire: A Plant's-Eye View of the World — Michael Pollan

Sources: 204, 293, 299, 300. Prior review: analysis/analysis_mcateer_261025_2011.md#rem-u1526. 

Added amazon: **1965**. [Source](https://www.amazon.com/dp/0747563004); [saved evidence](../data/value250_261102/raw/amazon-0175-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.50; O15 0.00; REL 3.46; RD 0.66.

R&D inputs: reference pages 10 (ISBN:0375760393); total pages 304 (/books/OL7427599M). 10 / 304 = 3.29%; R&D 0.66. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **60.16 → 60.16**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-04d2c61b09c6"></a>

## Grinding It Out: The Making of McDonald's — Ray Kroc with Robert Anderson

Sources: 261. Prior review: analysis/analysis_founders_261024_1455.md#shelf-04d2c61b09c6. 

Added amazon: **2759**. [Source](https://www.amazon.com/dp/125013028X); [saved evidence](../data/value250_261102/raw/amazon-0178-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 -2.00; P14 -4.90; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 218 (OL9345050M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **60.14 → 60.14**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-aa46b1b2a859"></a>

## To Pixar And Beyond: My Unlikely Journey with Steve Jobs to Make Entertainment History — Lawrence Levy

Sources: 261, 298. Prior review: analysis/analysis_computepod_261025_2011.md#shelf-aa46b1b2a859. 

Added amazon: **1435**. [Source](https://www.amazon.com/dp/0544734149); [saved evidence](../data/value250_261102/raw/amazon-0179-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -0.80; P14 -1.00; O15 0.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 272 (OL26425401M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **60.11 → 60.11**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-a9e84d00527a"></a>

## The Alchemists — Neil Irwin

Sources: 258. Prior review: analysis/analysis_gallagher_261024_1455.md#shelf-a9e84d00527a. 

Added amazon: **244**. [Source](https://www.amazon.com/dp/0143124994); [saved evidence](../data/value250_261102/raw/amazon-0182-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.45 | 12.28 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.55 | 2.55 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 -0.56; P14 -1.30; O15 -5.00; REL 0.00; RD 0.71.

R&D inputs: reference pages 16 (OL17667243W-unconfirmed-edition); total pages 448 (ISBN:9780143124993). 16 / 448 = 3.57%; R&D 0.71. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **60.06 → 55.06**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n153b42c197"></a>

## Unreasonable Hospitality — Will Guidara

Sources: 145, 176. Prior review: analysis/analysis_metadata2_261025_1921.md#n153b42c197. 

Added amazon: **5702**. [Source](https://www.amazon.com/dp/152914681X); [saved evidence](../data/value250_261102/raw/amazon-0183-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.40; O15 0.00; REL 2.00; RD 0.14.

R&D inputs: reference pages 2 (GoogleBooks:NJVuEAAAQBAJ); total pages 288 (ISBN:9780593418574). 2 / 288 = 0.69%; R&D 0.14. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **60.06 → 60.06**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelves-evolutionsbite"></a>

## Evolution's Bite: A Story of Teeth, Diet, and Human Origins — Peter S. Ungar

Sources: 303. Prior review: analysis/analysis_elitescience_261025_2011.md#shelves-evolutionsbite. 

Added amazon: **75**. [Source](https://www.amazon.com/dp/0691160538); [saved evidence](../data/value250_261102/raw/amazon-0184-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.90; O15 -10.00; REL 0.00; RD 1.63.

R&D inputs: reference pages 20 (ISBN:9780691160535); total pages 245 (ISBN:9780691160535; ix + 236 pages). 20 / 245 = 8.16%; R&D 1.63. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **60.05 → 50.05**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rem-u1593"></a>

## The Story of the Human Body: Evolution, Health, and Disease — Daniel E. Lieberman

Sources: 205, 300, 303. Prior review: analysis/analysis_metadata3000_261025_2354.md#rem-u1593. 

Added amazon: **2065**. [Source](https://www.amazon.com/dp/030774180X); [saved evidence](../data/value250_261102/raw/amazon-0186-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.30; O15 0.00; REL 2.83; RD 2.70.

R&D inputs: reference pages 62 (CiNii:BB14539857); total pages 460 (/books/OL25648166M). 62 / 460 = 13.48%; R&D 2.70. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **60.04 → 60.04**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-43-37"></a>

## The Greeks: A Global History — Roderick Beaton

Sources: 269. Prior review: analysis/analysis_metadata2_261025_1921.md#rest-43-37. 

Added amazon: **413**. [Source](https://www.amazon.com/dp/1541618297); [saved evidence](../data/value250_261102/raw/amazon-0188-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.50; O15 -5.00; REL 0.00; RD 0.23.

R&D inputs: reference pages 7 (CiNii:BC12262625); total pages 608 (GoogleBooks:Iq0bEAAAQBAJ). 7 / 608 = 1.15%; R&D 0.23. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **60.02 → 55.02**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-35-29"></a>

## The Roman Market Economy — Peter Temin

Sources: 269. Prior review: analysis/analysis_metadata2_261025_1921.md#rest-35-29. 

Added amazon: **48**. [Source](https://www.amazon.com/dp/0691177945); [saved evidence](../data/value250_261102/raw/amazon-0189-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -12.00; P14 -1.40; O15 -10.00; REL 0.00; RD 1.74.

R&D inputs: reference pages 26 (GoogleBooks:KIW8fg1pS00C); total pages 299 (The Roman Market Economy; edition date unverified). 26 / 299 = 8.70%; R&D 1.74. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **60.02 → 50.02**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n51d1d8c1a8"></a>

## Thunderstruck — Erik Larson

Sources: 143, 181, 182, 200, 267. Prior review: analysis/analysis_metadata1000_261025_1546.md#n51d1d8c1a8. 

Added amazon: **8337**. [Source](https://www.amazon.com/dp/1400080673); [saved evidence](../data/value250_261102/raw/amazon-0191-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -4.64; P14 -2.00; O15 0.00; REL 4.00; RD 0.29.

R&D inputs: reference pages 7 (ISBN:9781400080663); total pages 480 (ISBN:9781400080670). 7 / 480 = 1.46%; R&D 0.29. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **59.97 → 59.97**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rest-125-105"></a>

## Capital and Ideology — Thomas Piketty

Sources: 270. Prior review: analysis/analysis_fabioxie_261025_0116.md#rest-125-105. 

Added amazon: **955**. [Source](https://www.amazon.com/dp/0674980824); [saved evidence](../data/value250_261102/raw/amazon-0192-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.70; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 976 (Capital and Ideology; edition date unverified). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **59.96 → 54.96**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0953"></a>

## Personal Knowledge — Michael Polanyi

Sources: 121. Prior review: analysis/analysis_scorebonus_261024_0106.md#g0953. 

Added amazon: **105**. [Source](https://www.amazon.com/dp/0226672883); [saved evidence](../data/value250_261102/raw/amazon-0193-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -6.80; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 464 (ISBN:022623262X). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **59.93 → 54.93**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rem-u1243"></a>

## Adam Smith in Beijing: Lineages of the Twenty-First Century — Giovanni Arrighi

Sources: 196, 197. Prior review: analysis/analysis_metadata1000_261025_1546.md#rem-u1243. 

Added amazon: **31**. [Source](https://www.amazon.com/dp/1844671046); [saved evidence](../data/value250_261102/raw/amazon-0196-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.90; O15 -10.00; REL 2.00; RD 0.90.

R&D inputs: reference pages 19 (ISBN:9781844672981); total pages 420 (/books/OL9794589M). 19 / 420 = 4.52%; R&D 0.90. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **59.89 → 49.89**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0441"></a>

## The Process of Education — Jerome S. Bruner

Sources: 232. Prior review: analysis/analysis_scorebonus_261024_0106.md#progress-0441. 

Added amazon: **85**. [Source](https://www.amazon.com/dp/0674710010); [saved evidence](../data/value250_261102/raw/amazon-0167-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.50 | 7.23 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -6.60; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 97 (/books/OL16365364M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **58.46 → 48.46**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-6ec727285042"></a>

## Exercised: The Science of Physical Activity, Rest and Health — Daniel E. Lieberman

Sources: 263, 269, 303. Prior review: analysis/analysis_elitescience_261025_2011.md#shelf-6ec727285042. 

Added amazon: **1694**. [Source](https://www.amazon.com/dp/0241309271); [saved evidence](../data/value250_261102/raw/amazon-0186-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.05 | 7.18 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 2.45 | 2.45 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.60; O15 0.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 464 (OL29693845M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **53.89 → 53.89**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-8e3d2aaa3a73"></a>

## Liberalism and Its Discontents — Francis Fukuyama

Sources: 263. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-8e3d2aaa3a73. 

Added amazon: **871**. [Source](https://www.amazon.com/dp/0374606714); [saved evidence](../data/value250_261102/raw/amazon-0195-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 11.05 | 7.18 |
| Transferable strategic utility | 8.25 | 8.25 |
| Mechanistic and causal depth | 6.60 | 6.60 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 3.15 | 3.15 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.40; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 192 (OL33952741M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **46.63 → 41.63**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-227-191"></a>

## American Caesar: Douglas MacArthur 1880-1964 — William Manchester

Sources: 276, 300. Prior review: analysis/analysis_hendricks_261025_2011.md#complete-227-191. 

Added amazon: **1695**. [Source](https://www.amazon.com/dp/0316024740); [saved evidence](../data/value250_261102/raw/amazon-0194-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 6.50 | 4.23 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 -10.00; H13 -2.48; P14 -4.80; O15 0.00; REL 2.00; RD 0.45.

R&D inputs: reference pages 18 (OL4720951M); total pages 793 (OL4720951M). 18 / 793 = 2.27%; R&D 0.45. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **29.32 → 29.32**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0215"></a>

## Civilization and Its Discontents — Sigmund Freud

Sources: 177. Prior review: analysis/analysis_metadata2_261025_1921.md#rem-u0215. 

Added amazon: **981**. [Source](https://www.amazon.com/dp/0393301583); [saved evidence](../data/value250_261102/raw/amazon-0186-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 9.00 | 4.05 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 5.00 | 5.00 |
| Mechanistic and causal depth | 4.00 | 4.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -9.60; O15 -5.00; REL 0.00; RD 0.54.

R&D inputs: reference pages 5 (ISBN:0393010678); total pages 186 (OL24815714M). 5 / 186 = 2.69%; R&D 0.54. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **18.65 → 13.65**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="nf4a5fd8915"></a>

## Endurance — Scott Kelly

Sources: 143, 182, 293. Prior review: analysis/analysis_mcateer_261025_2011.md#nf4a5fd8915. 

Added amazon: **4967**. [Source](https://www.amazon.com/dp/0525432434); [saved evidence](../data/value250_261102/raw/amazon-0206-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.40; P14 -0.90; O15 0.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 496 (ISBN:9780525432432). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **59.76 → 59.76**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-bc02228347b1"></a>

## James J. Hill: Empire Builder — Michael P. Malone

Sources: 261. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-bc02228347b1. 

Added amazon: **46**. [Source](https://www.amazon.com/dp/0806128607); [saved evidence](../data/value250_261102/raw/amazon-0211-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.45 | 12.28 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.25 | 4.25 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -4.40; P14 -3.00; O15 -10.00; REL 0.00; RD 0.59.

R&D inputs: reference pages 9 (OL800227M); total pages 306 (OL800227M). 9 / 306 = 2.94%; R&D 0.59. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **59.72 → 49.72**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n2ca9347b1c"></a>

## The Man Who Loved Only Numbers — Paul Hoffman

Sources: 139, 182. Prior review: analysis/analysis_scorebonus_261024_0106.md#n2ca9347b1c. 

Added amazon: **358**. [Source](https://www.amazon.com/dp/0786884061); [saved evidence](../data/value250_261102/raw/amazon-0212-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.20; P14 -2.80; O15 -5.00; REL 2.00; RD 0.63.

R&D inputs: reference pages 10 (OL354306M); total pages 320 (ISBN:9780786863624). 10 / 320 = 3.13%; R&D 0.63. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **59.71 → 54.71**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g0651"></a>

## The Breakthrough — Charles Graeber

Sources: 118, 276, 289, 292. Prior review: analysis/analysis_nikomc_261025_2011.md#g0651. 

Added amazon: **470**. [Source](https://www.amazon.com/dp/1455568503); [saved evidence](../data/value250_261102/raw/amazon-0214-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 -0.36; P14 -0.80; O15 -5.00; REL 3.46; RD 0.06.

R&D inputs: reference pages 1 (OL26974931M); total pages 320 (OL29403552M). 1 / 320 = 0.31%; R&D 0.06. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **59.69 → 54.69**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1372"></a>

## Inferno: The World at War, 1939-1945 — Max Hastings

Sources: 200. Prior review: analysis/analysis_metadata1000_261025_1546.md#rem-u1372. 

Added amazon: **1282**. [Source](https://www.amazon.com/dp/B004SOQ198); [saved evidence](../data/value250_261102/raw/amazon-0216-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -3.24; P14 -1.50; O15 0.00; REL 0.00; RD 0.25.

R&D inputs: reference pages 9 (ISBN:9780307475534); total pages 729 (ISBN:9780307273598). 9 / 729 = 1.23%; R&D 0.25. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **59.64 → 59.64**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-97d48dde4926"></a>

## Testosterone Rex — Cordelia Fine

Sources: 256. Prior review: analysis/analysis_physlibrary_261024_1455.md#shelf-97d48dde4926. 

Added amazon: **217**. [Source](https://www.amazon.com/dp/0393082083); [saved evidence](../data/value250_261102/raw/amazon-0221-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 8.00 | 6.40 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 2.10 | 2.10 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.90; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 266 (OL27227513M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **59.62 → 54.62**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1629"></a>

## Otherlands: A Journey Through Earth's Extinct Worlds — Thomas Halliday

Sources: 205. Prior review: analysis/analysis_metadata3000_261025_2354.md#rem-u1629. 

Added amazon: **770**. [Source](https://www.amazon.com/dp/0593132882); [saved evidence](../data/value250_261102/raw/amazon-0223-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.50 | 7.23 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -12.00; P14 -0.40; O15 -5.00; REL 0.00; RD 2.12.

R&D inputs: reference pages 44 (CiNii:BD02806666); total pages 416 (/books/OL38330339M). 44 / 416 = 10.58%; R&D 2.12. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **59.61 → 54.61**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="large-442"></a>

## Means of Control — Byron Tau

Sources: 278. Prior review: analysis/analysis_metadata2_261025_1921.md#large-442. 

Added amazon: **159**. [Source](https://www.amazon.com/dp/B0C4J8D8H7); [saved evidence](../data/value250_261102/raw/amazon-0233-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.20; O15 -5.00; REL 0.00; RD 1.80.

R&D inputs: reference pages 36 (GoogleBooks:3gzKEAAAQBAJ); total pages 400 (ISBN:0593443225). 36 / 400 = 9.00%; R&D 1.80. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **59.48 → 54.48**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1718"></a>

## Black Wave — Kim Ghattas

Sources: 193. Prior review: analysis/analysis_metadata2_261025_1921.md#rem-u1718. 

Added amazon: **2037**. [Source](https://www.amazon.com/dp/1250131200); [saved evidence](../data/value250_261102/raw/amazon-0240-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.60; O15 0.00; REL 0.00; RD 1.20.

R&D inputs: reference pages 24 (Harvard:99153868710403941); total pages 400 (/books/OL28060457M). 24 / 400 = 6.00%; R&D 1.20. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **59.39 → 59.39**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-b05a422d5bc4"></a>

## The Power of Regret — Daniel H. Pink

Sources: 251, 301. Prior review: analysis/analysis_czarandy_261025_2011.md#shelf-b05a422d5bc4. 

Added amazon: **1747**. [Source](https://www.amazon.com/dp/0735210659); [saved evidence](../data/value250_261102/raw/amazon-0241-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 2.80 | 2.80 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.40; O15 0.00; REL 2.00; RD 1.25.

R&D inputs: reference pages 16 (Harvard:99155984504503941); total pages 256 (OL34194061M). 16 / 256 = 6.25%; R&D 1.25. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **59.37 → 59.37**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1511"></a>

## Musicophilia: Tales of Music and the Brain — Oliver Sacks

Sources: 203, 293, 299, 300. Prior review: analysis/analysis_mcateer_261025_2011.md#rem-u1511. 

Added amazon: **1576**. [Source](https://www.amazon.com/dp/1400040817); [saved evidence](../data/value250_261102/raw/amazon-0213-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.90; O15 0.00; REL 3.46; RD 0.84.

R&D inputs: reference pages 17 (OL22797127M); total pages 406 (/books/OL58724153M). 17 / 406 = 4.19%; R&D 0.84. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **51.02 → 51.02**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-340-282"></a>

## Dark Money — Jane Mayer

Sources: 276. Prior review: analysis/analysis_metadata2_261025_1921.md#complete-340-282. 

Added amazon: **6759**. [Source](https://www.amazon.com/dp/0385535597); [saved evidence](../data/value250_261102/raw/amazon-0231-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -1.00; O15 0.00; REL 0.00; RD 1.88.

R&D inputs: reference pages 45 (ISBN:9780385535595); total pages 480 (GoogleBooks:DkPOCwAAQBAJ). 45 / 480 = 9.38%; R&D 1.88. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **42.69 → 42.69**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1410"></a>

## The Rise and Fall of the Dinosaurs: A New History of a Lost World — Steve Brusatte

Sources: 201, 203. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1410. 

Added amazon: **6364**. [Source](https://www.amazon.com/dp/0062490427); [saved evidence](../data/value250_261102/raw/amazon-0245-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -12.00; P14 -0.80; O15 0.00; REL 2.00; RD 1.88.

R&D inputs: reference pages 38 (OL26951379M); total pages 404 (/books/OL26951379M). 38 / 404 = 9.41%; R&D 1.88. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **59.30 → 59.30**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bg198c521a8a"></a>

## Les Schwab: Pride in Performance, Keep It Going! — Les Schwab

Sources: 150, 164, 261. Prior review: analysis/analysis_founders_261024_1455.md#bg198c521a8a. 

Added amazon: **72**. [Source](https://www.amazon.com/dp/0892881518); [saved evidence](../data/value250_261102/raw/amazon-0246-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.00; O15 -10.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 228 (9780892881512). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **59.30 → 49.30**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rem-u0528"></a>

## Deep Work: Rules for Focused Success in a Distracted World — Cal Newport

Sources: 183, 185, 188, 193, 215, 251, 258, 263, 276, 293. Prior review: analysis/analysis_metadata3000_261025_2354.md#rem-u0528. 

Added amazon: **3720**. [Source](https://www.amazon.com/dp/1455586692); [saved evidence](../data/value250_261102/raw/amazon-0254-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 7.00 | 2.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.00; O15 0.00; REL 6.00; RD 1.60.

R&D inputs: reference pages 23 (CiNii:BB26433161); total pages 288 (/books/OL40567570M). 23 / 288 = 7.99%; R&D 1.60. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **59.18 → 59.18**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-66aaef8ba60c"></a>

## Authentic: A Memoir — Paul Van Doren

Sources: 261. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-66aaef8ba60c. 

Added amazon: **500**. [Source](https://www.amazon.com/dp/164112024X); [saved evidence](../data/value250_261102/raw/amazon-0261-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.05 | 7.18 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.80 | 7.80 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 3.75 | 3.75 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 -0.24; P14 -0.50; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 352 (GoogleBooks:XfwqEAAAQBAJ). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **59.09 → 54.09**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="nfc7687f570"></a>

## Predictably Irrational — Dan Ariely

Sources: 142, 185, 193, 205, 208, 215, 220, 251, 254, 276, 290, 293, 300, 301. Prior review: analysis/analysis_subcritical_261025_2011.md#nfc7687f570. 

Added amazon: **11387**. [Source](https://www.amazon.com/dp/1607513943); [saved evidence](../data/value250_261102/raw/amazon-0266-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.80; O15 0.00; REL 7.21; RD 0.59.

R&D inputs: reference pages 9 (ISBN:9780061353239); total pages 304 (OL9952510M). 9 / 304 = 2.96%; R&D 0.59. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **58.99 → 58.99**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0302"></a>

## North Star over My Shoulder — Bob Buck

Sources: 232. Prior review: analysis/analysis_scorebonus_261024_0106.md#progress-0302. 

Added amazon: **236**. [Source](https://www.amazon.com/dp/0743262301); [saved evidence](../data/value250_261102/raw/amazon-0269-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.44; P14 -2.40; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 448 (/books/OL7947986M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **58.97 → 53.97**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-444265f71e4f"></a>

## The Perilous Frontier: Nomadic Empires and China 221 B.C. to AD 1757 — Thomas J. Barfield

Sources: 265. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-444265f71e4f. 

Added amazon: **15**. [Source](https://www.amazon.com/dp/1557863245); [saved evidence](../data/value250_261102/raw/amazon-0270-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 13.50 | 13.50 |
| Mechanistic and causal depth | 10.80 | 10.80 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 -10.76; P14 -3.70; O15 -10.00; REL 0.00; RD 0.55.

R&D inputs: reference pages 9 (ISBN:1557860432); total pages 325 (OL8602441M). 9 / 325 = 2.77%; R&D 0.55. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **58.96 → 48.96**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0226"></a>

## Certain To Win — Chet Richards

Sources: 115, 298. Prior review: analysis/analysis_computepod_261025_2011.md#g0226. 

Added amazon: **353**. [Source](https://www.amazon.com/dp/1413453767); [saved evidence](../data/value250_261102/raw/amazon-0272-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.20; O15 -5.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 188 (ISBN:1413453767). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **58.94 → 53.94**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-ee1dbb3b07f6"></a>

## On Looking: Eleven Walks with Expert Eyes — Alexandra Horowitz

Sources: 251, 263. Prior review: analysis/analysis_sivers_261024_1455.md#shelf-ee1dbb3b07f6. 

Added amazon: **672**. [Source](https://www.amazon.com/dp/1439191255); [saved evidence](../data/value250_261102/raw/amazon-0288-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 8.50 | 4.25 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 1.40 | 1.40 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.30; O15 -5.00; REL 2.00; RD 1.82.

R&D inputs: reference pages 28 (OL27140333M); total pages 308 (OL27140333M). 28 / 308 = 9.09%; R&D 1.82. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **58.77 → 53.77**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n55f4397a7e"></a>

## Wasteland — Oliver Franklin-Wallis

Sources: 132, 276. Prior review: analysis/analysis_metadata2_261025_1921.md#n55f4397a7e. 

Added amazon: **292**. [Source](https://www.amazon.com/dp/0306827115); [saved evidence](../data/value250_261102/raw/amazon-0290-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.30; O15 -5.00; REL 2.00; RD 1.95.

R&D inputs: reference pages 39 (Harvard:99156840873903941); total pages 400 (9780306827112). 39 / 400 = 9.75%; R&D 1.95. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **58.74 → 53.74**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1605"></a>

## What Is Life? with Mind and Matter and Autobiographical Sketches — Erwin Schrödinger

Sources: 205. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1605. 

Added amazon: **1199**. [Source](https://www.amazon.com/dp/0521427088); [saved evidence](../data/value250_261102/raw/amazon-0300-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -8.20; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 184 (ISBN:9781107604667). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **58.62 → 58.62**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bgc25fc0e34a"></a>

## Behind the Beautiful Forevers — Katherine Boo

Sources: 148, 184, 186, 189, 289, 293, 300. Prior review: analysis/analysis_nikomc_261025_2011.md#bgc25fc0e34a. 

Added amazon: **9582**. [Source](https://www.amazon.com/dp/1846274516); [saved evidence](../data/value250_261102/raw/amazon-0301-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 -0.60; P14 -1.40; O15 0.00; REL 4.90; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 288 (ISBN:081297932X). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **58.62 → 58.62**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-317adda31056"></a>

## Friends: Understanding the Power of our Most Important Relationships — Robin Dunbar

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-317adda31056. 

Added amazon: **226**. [Source](https://www.amazon.com/dp/1408711737); [saved evidence](../data/value250_261102/raw/amazon-0307-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 7.00 | 4.90 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 2.45 | 2.45 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 -5.00; REL 0.00; RD 2.08.

R&D inputs: reference pages 44 (IUCAT:19478856); total pages 424 (IUCAT:19478856). 44 / 424 = 10.38%; R&D 2.08. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **58.55 → 53.55**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-71edd30fcd4a"></a>

## The Psychology of Invention in the Mathematical Field — Jacques Hadamard

Sources: 259, 290. Prior review: analysis/analysis_subcritical_261025_2011.md#shelf-71edd30fcd4a. 

Added amazon: **18**. [Source](https://www.amazon.com/dp/0486201074); [saved evidence](../data/value250_261102/raw/amazon-0310-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -8.10; O15 -10.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 145 (OL7634766M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **58.52 → 48.52**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n22b6ad54ee"></a>

## Little Bosses Everywhere — Bridget Read

Sources: 145. Prior review: analysis/analysis_metadata3000_261025_2354.md#n22b6ad54ee. 

Added amazon: **171**. [Source](https://www.amazon.com/dp/0593443926); [saved evidence](../data/value250_261102/raw/amazon-0319-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.10; O15 -5.00; REL 0.00; RD 2.34.

R&D inputs: reference pages 43 (CiNii:BD10873669); total pages 368 (ISBN:9780593443927). 43 / 368 = 11.68%; R&D 2.34. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **58.41 → 53.41**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0566"></a>

## Thinking in Time — Richard E. Neustadt; Ernest R. May

Sources: 232, 290, 291. Prior review: analysis/analysis_subcritical_261025_2011.md#progress-0566. 

Added amazon: **197**. [Source](https://www.amazon.com/dp/0029227909); [saved evidence](../data/value250_261102/raw/amazon-0321-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 14.00 | 14.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -4.00; O15 -5.00; REL 2.83; RD 1.52.

R&D inputs: reference pages 25 (ISBN:0029227909); total pages 329 (/books/OL9224841M). 25 / 329 = 7.60%; R&D 1.52. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **58.39 → 53.39**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelves-mahonmaxwell"></a>

## The Man Who Changed Everything: The Life of James Clerk Maxwell — Basil Mahon

Sources: 297. Prior review: analysis/analysis_ringsmuth_261025_2011.md#shelves-mahonmaxwell. 

Added amazon: **497**. [Source](https://www.amazon.com/dp/0470861711); [saved evidence](../data/value250_261102/raw/amazon-0262-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -5.88; P14 -2.30; O15 -5.00; REL 0.00; RD 0.23.

R&D inputs: reference pages 3 (ISBN:9780470012543); total pages 262 (ISBN:9780470012543; electronic edition, xx + 226 + 16 plate pages). 3 / 262 = 1.15%; R&D 0.23. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **66.34 → 61.34**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="n1ec329a42c"></a>

## I Am a Strange Loop — Douglas R. Hofstadter

Sources: 130, 215, 220, 276, 280, 291, 293. Prior review: analysis/analysis_bretvictor_261025_2011.md#n1ec329a42c. 

Added amazon: **1072**. [Source](https://www.amazon.com/dp/0465030793); [saved evidence](../data/value250_261102/raw/amazon-0248-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.90; O15 0.00; REL 4.90; RD 0.28.

R&D inputs: reference pages 6 (OL24948194M); total pages 436 (ISBN:9780465030798). 6 / 436 = 1.38%; R&D 0.28. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **49.21 → 49.21**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-d40d1b9998bf"></a>

## China’s World View — David Daokui Li

Sources: 251. Prior review: analysis/analysis_or100done_261101_2321.md#shelf-d40d1b9998bf. 

Added amazon: **125**. [Source](https://www.amazon.com/dp/0393292398); [saved evidence](../data/value250_261102/raw/amazon-0250-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.20; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 288 (ISBN:9780393292398). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **40.68 → 35.68**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0001"></a>

## The Future and Its Enemies: The Growing Conflict Over Creativity, Enterprise, and Progress — Virginia Postrel

Sources: 229, 232, 289. Prior review: analysis/analysis_nikomc_261025_2011.md#progress-0001. 

Added amazon: **130**. [Source](https://www.amazon.com/dp/B004U7GX0U); [saved evidence](../data/value250_261102/raw/amazon-0329-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.80; O15 -5.00; REL 2.83; RD 2.43.

R&D inputs: reference pages 35 (OL23065083M); total pages 288 (/books/OL7722514M). 35 / 288 = 12.15%; R&D 2.43. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **58.30 → 53.30**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0528"></a>

## The Medici Effect — Frans Johansson

Sources: 117. Prior review: analysis/analysis_scorebonus_261024_0106.md#g0528. 

Added amazon: **233**. [Source](https://www.amazon.com/dp/1591391865); [saved evidence](../data/value250_261102/raw/amazon-0336-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.20; O15 -5.00; REL 0.00; RD 0.91.

R&D inputs: reference pages 10 (OL26939792M); total pages 219 (ISBN:1633692949). 10 / 219 = 4.57%; R&D 0.91. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **58.25 → 53.25**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g0655"></a>

## The Fabric of Reality — David Deutsch

Sources: 118, 193, 205, 232, 254, 270, 272, 276, 290, 292, 303. Prior review: analysis/analysis_subcritical_261025_2011.md#g0655. 

Added amazon: **932**. [Source](https://www.amazon.com/dp/014027541X); [saved evidence](../data/value250_261102/raw/amazon-0337-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.90; O15 -5.00; REL 6.32; RD 0.15.

R&D inputs: reference pages 3 (OL660771M); total pages 400 (ISBN:014027541X). 3 / 400 = 0.75%; R&D 0.15. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **58.25 → 53.25**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1743"></a>

## How the Mighty Fall — Jim Collins

Sources: 193. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1743. 

Added amazon: **1100**. [Source](https://www.amazon.com/dp/0977326411); [saved evidence](../data/value250_261102/raw/amazon-0340-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.70; O15 0.00; REL 0.00; RD 2.61.

R&D inputs: reference pages 29 (OL23910539M); total pages 222 (/books/OL23910539M). 29 / 222 = 13.06%; R&D 2.61. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **58.22 → 58.22**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0019"></a>

## Nanofuture: What's Next For Nanotechnology — J. Storrs Hall

Sources: 229. Prior review: analysis/analysis_metadata1000_261025_1546.md#progress-0019. 

Added amazon: **27**. [Source](https://www.amazon.com/dp/1591022878); [saved evidence](../data/value250_261102/raw/amazon-0341-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 5.00 | 5.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.10; O15 -10.00; REL 0.00; RD 0.48.

R&D inputs: reference pages 8 (ISBN:1591022878); total pages 333 (/books/OL8851089M). 8 / 333 = 2.40%; R&D 0.48. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **58.20 → 48.20**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0237"></a>

## The Rediscovery of America — Ned Blackhawk

Sources: 212. Prior review: analysis/analysis_metadata2_261025_1921.md#intake-0237. 

Added amazon: **539**. [Source](https://www.amazon.com/dp/0300244053); [saved evidence](../data/value250_261102/raw/amazon-0345-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -1.04; P14 -0.30; O15 -5.00; REL 0.00; RD 3.31.

R&D inputs: reference pages 102 (GoogleBooks:atGwEAAAQBAJ); total pages 616 (ISBN:9780300276671). 102 / 616 = 16.56%; R&D 3.31. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **58.19 → 53.19**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-4bafa91836e8"></a>

## The Match King: Ivar Kreuger, The Financial Genius Behind a Century of Wall Street Scandals — Frank Partnoy

Sources: 261. Prior review: analysis/analysis_founders_261024_1455.md#shelf-4bafa91836e8. 

Added amazon: **277**. [Source](https://www.amazon.com/dp/1586488120); [saved evidence](../data/value250_261102/raw/amazon-0347-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 -3.76; P14 -1.70; O15 -5.00; REL 0.00; RD 0.44.

R&D inputs: reference pages 6 (ISBN:1586487434); total pages 272 (ISBN:1586487434). 6 / 272 = 2.21%; R&D 0.44. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **58.16 → 53.16**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bgfb6ac7bfa0"></a>

## Tomorrow's Table — Pamela C. Ronald and Raoul W. Adamchak

Sources: 148. Prior review: analysis/analysis_scorebonus_261024_0106.md#bgfb6ac7bfa0. 

Added amazon: **121**. [Source](https://www.amazon.com/dp/0195393570); [saved evidence](../data/value250_261102/raw/amazon-0348-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.80; O15 -5.00; REL 0.00; RD 1.79.

R&D inputs: reference pages 20 (GoogleBooks:LTMelUjT6V4C); total pages 224 (OL10134929M). 20 / 224 = 8.93%; R&D 1.79. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **58.16 → 53.16**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="n4c21c50d45"></a>

## End Times — Peter Turchin

Sources: 132, 179. Prior review: analysis/analysis_metadata2_261025_1921.md#n4c21c50d45. 

Added amazon: **775**. [Source](https://www.amazon.com/dp/0593490509); [saved evidence](../data/value250_261102/raw/amazon-0350-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.30; O15 -5.00; REL 2.00; RD 0.60.

R&D inputs: reference pages 11 (Harvard:99156863537503941); total pages 368 (ISBN:9780593490501). 11 / 368 = 2.99%; R&D 0.60. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **58.13 → 53.13**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-f93d48ec6611"></a>

## On Politics — Alan Ryan

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-f93d48ec6611. 

Added amazon: **257**. [Source](https://www.amazon.com/dp/0871404656); [saved evidence](../data/value250_261102/raw/amazon-0355-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 8.00 | 6.40 |
| Durability | 8.55 | 8.55 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 4.75 | 4.75 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.70 | 1.70 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.40; O15 -5.00; REL 0.00; RD 0.43.

R&D inputs: reference pages 24 (CiNii:BB10933711); total pages 1114 (CiNii:BB10933711). 24 / 1114 = 2.15%; R&D 0.43. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **58.04 → 53.04**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-132-109"></a>

## Why We Die — Venki Ramakrishnan

Sources: 270. Prior review: analysis/analysis_metadata1000_261025_1546.md#rest-132-109. 

Added amazon: **1003**. [Source](https://www.amazon.com/dp/0063113279); [saved evidence](../data/value250_261102/raw/amazon-0357-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.20; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 352 (GoogleBooks:zyPGEAAAQBAJ). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **58.02 → 58.02**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0644"></a>

## Are Your Lights On? — Donald C. Gause; Gerald M. Weinberg

Sources: 219, 260. Prior review: analysis/analysis_krybus_261024_1455.md#intake-0644. 

Added amazon: **95**. [Source](https://www.amazon.com/dp/0932633161); [saved evidence](../data/value250_261102/raw/amazon-0358-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.40; O15 -10.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 156 (/books/OL3108825M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **58.01 → 48.01**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="resume-483-6"></a>

## Shikake: The Japanese Art of Shaping Behavior Through Design — Naohiro Matsumura

Sources: 278. Prior review: analysis/analysis_sinclarius_261025_1104.md#resume-483-6. 

Added amazon: **80**. [Source](https://www.amazon.com/dp/1631497812); [saved evidence](../data/value250_261102/raw/amazon-0363-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.00; O15 -10.00; REL 0.00; RD 0.24.

R&D inputs: reference pages 2 (ISBN:1631497812); total pages 168 (ISBN:1631497812). 2 / 168 = 1.19%; R&D 0.24. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **57.93 → 47.93**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0358"></a>

## Winning — Jack Welch

Sources: 115, 188. Prior review: analysis/analysis_scorebonus_261024_0106.md#g0358. 

Added amazon: **1997**. [Source](https://www.amazon.com/dp/0060753943); [saved evidence](../data/value250_261102/raw/amazon-0364-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.10; O15 0.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 372 (OL23273540M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **57.92 → 57.92**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="bg1a7c4e2bb3"></a>

## Outliers — Malcolm Gladwell

Sources: 148, 163, 164, 185, 186, 188, 203, 207, 251, 262, 289, 293, 300, 301. Prior review: analysis/analysis_nikomc_261025_2011.md#bg1a7c4e2bb3. 

Added amazon: **39366**. [Source](https://www.amazon.com/dp/0141043024); [saved evidence](../data/value250_261102/raw/amazon-0370-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 11.00 | 6.05 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.80; O15 0.00; REL 7.21; RD 1.01.

R&D inputs: reference pages 17 (ISBN:9780316024976); total pages 336 (9780316017930). 17 / 336 = 5.06%; R&D 1.01. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.84 → 57.84**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0529"></a>

## The Method Method — Eric Ryan

Sources: 117. Prior review: analysis/analysis_scorebonus_261024_0106.md#g0529. 

Added amazon: **62**. [Source](https://www.amazon.com/dp/1591843995); [saved evidence](../data/value250_261102/raw/amazon-0372-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.50; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 256 (ISBN:1591843995). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **57.82 → 47.82**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g0863"></a>

## Stone Age Economics — Marshall Sahlins

Sources: 120. Prior review: analysis/analysis_scorebonus_261024_0106.md#g0863. 

Added amazon: **67**. [Source](https://www.amazon.com/dp/0202010996); [saved evidence](../data/value250_261102/raw/amazon-0379-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -5.40; O15 -10.00; REL 0.00; RD 2.37.

R&D inputs: reference pages 41 (GoogleBooks:LTUlDwAAQBAJ); total pages 346 (ISBN:1138702617). 41 / 346 = 11.85%; R&D 2.37. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.76 → 47.76**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-837-121"></a>

## Evolution: The Remarkable History of a Scientific Theory — Edward J. Larson

Sources: 283. Prior review: analysis/analysis_metadata1000_261025_1546.md#complete-837-121. 

Added amazon: **87**. [Source](https://www.amazon.com/dp/0679642889); [saved evidence](../data/value250_261102/raw/amazon-0380-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.20; O15 -10.00; REL 0.00; RD 0.42.

R&D inputs: reference pages 7 (ISBN:0679642889); total pages 337 (ISBN:0679642889). 7 / 337 = 2.08%; R&D 0.42. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **57.76 → 47.76**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bgbd5e105264"></a>

## The Art of Learning — Josh Waitzkin

Sources: 173, 192, 193, 251, 258. Prior review: analysis/analysis_sivers_261024_1455.md#bgbd5e105264. 

Added amazon: **5417**. [Source](https://www.amazon.com/dp/0743277465); [saved evidence](../data/value250_261102/raw/amazon-0384-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.90; O15 0.00; REL 4.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 288 (Google Books: aAYcmC-_sM8C). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **57.71 → 57.71**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="intake-0500"></a>

## The Art of Profitability — Adrian Slywotzky

Sources: 215, 251, 263. Prior review: analysis/analysis_metadata1000_261025_1546.md#intake-0500. 

Added amazon: **254**. [Source](https://www.amazon.com/dp/0446692271); [saved evidence](../data/value250_261102/raw/amazon-0385-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.40; O15 -5.00; REL 2.83; RD 0.19.

R&D inputs: reference pages 2 (ISBN:0446531502); total pages 206 (/books/OL7536992M). 2 / 206 = 0.97%; R&D 0.19. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **57.70 → 52.70**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-30a7c850652a"></a>

## Spec Ops — William H. McRaven

Sources: 259, 290, 299. Prior review: analysis/analysis_subcritical_261025_2011.md#shelf-30a7c850652a. 

Added amazon: **647**. [Source](https://www.amazon.com/dp/0891416005); [saved evidence](../data/value250_261102/raw/amazon-0386-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 -2.00; P14 -3.10; O15 -5.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 402 (OL1120019M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **57.66 → 52.66**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-5c737386197a"></a>

## Star Warriors — William J. Broad

Sources: 253. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-5c737386197a. 

Added amazon: **2**. [Source](https://www.amazon.com/dp/0671545663); [saved evidence](../data/value250_261102/raw/amazon-0389-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 8.00 | 6.40 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 -10.00; T12 0.00; H13 -1.64; P14 -4.10; O15 -20.00; REL 0.00; RD 0.69.

R&D inputs: reference pages 8 (ISBN:0571146422); total pages 233 (OL22574221M). 8 / 233 = 3.43%; R&D 0.69. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.63 → 37.63**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0377"></a>

## Read Write Own — Chris Dixon

Sources: 116, 262, 270, 303. Prior review: analysis/analysis_elitescience_261025_2011.md#g0377. 

Added amazon: **777**. [Source](https://www.amazon.com/dp/0593731387); [saved evidence](../data/value250_261102/raw/amazon-0395-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 10.00 | 5.00 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 5.00 | 5.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.20; O15 -5.00; REL 3.46; RD 2.38.

R&D inputs: reference pages 38 (GoogleBooks:uTotEQAAQBAJ); total pages 320 (OL57541589M). 38 / 320 = 11.88%; R&D 2.38. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.51 → 52.51**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-81ba348b04d6"></a>

## Classic Feynman — Richard P. Feynman

Sources: 253. Prior review: analysis/analysis_jermyn_261024_1455.md#shelf-81ba348b04d6. 

Added amazon: **94**. [Source](https://www.amazon.com/dp/0393061329); [saved evidence](../data/value250_261102/raw/amazon-0342-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 8.50 | 4.25 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 7.00 | 4.90 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.10; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 511 (OL3403714M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **57.05 → 47.05**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="q0971"></a>

## The Open Society and Its Enemies — Karl R. Popper

Sources: 7, 215. Prior review: analysis/analysis_scorebonus_261024_0106.md#q0971. 

Added amazon: **139**. [Source](https://www.amazon.com/dp/0691158134); [saved evidence](../data/value250_261102/raw/amazon-0355-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 14.17 | 11.81 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.18 | 9.18 |
| Information density | 5.00 | 2.50 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -8.10; O15 -5.00; REL 2.00; RD 0.05.

R&D inputs: reference pages 2 (GoogleBooks:PqLAAwAAQBAJ); total pages 760 (ISBN:1138126802). 2 / 760 = 0.26%; R&D 0.05. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **51.23 → 46.23**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="q1020"></a>

## An Indigenous Peoples' History of the United States — Roxanne Dunbar-Ortiz

Sources: 6, 199. Prior review: analysis/analysis_scorebonus_261024_0106.md#q1020. 

Added amazon: **5176**. [Source](https://www.amazon.com/dp/0807057835); [saved evidence](../data/value250_261102/raw/amazon-0345-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.06 | 7.06 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.00 | 1.00 |

T11 -10.00; T12 -10.00; H13 -0.52; P14 -1.20; O15 0.00; REL 2.00; RD 2.56.

R&D inputs: reference pages 40 (OL26246061M); total pages 312 (ISBN:0807057835). 40 / 312 = 12.82%; R&D 2.56. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **38.82 → 38.82**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0773"></a>

## Six Thinking Hats — Edward de Bono

Sources: 220. Prior review: analysis/analysis_scorebonus_261024_0106.md#intake-0773. 

Added amazon: **1989**. [Source](https://www.amazon.com/dp/0141033053); [saved evidence](../data/value250_261102/raw/amazon-0336-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 6.00 | 2.12 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 4.00 | 4.00 |
| Information density | 6.00 | 3.60 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.10; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 192 (ISBN:9780141037554). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **35.82 → 35.82**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bgcf1adb2f17"></a>

## Mr. China — Tim Clissold

Sources: 168. Prior review: analysis/analysis_scorebonus_261024_0106.md#bgcf1adb2f17. 

Added amazon: **421**. [Source](https://www.amazon.com/dp/0060761393); [saved evidence](../data/value250_261102/raw/amazon-0401-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -1.08; P14 -2.20; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 288 (9780060761400). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **57.45 → 52.45**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g0671"></a>

## The Sixth Extinction — Elizabeth Kolbert

Sources: 118, 148, 184, 190, 201, 204, 276, 289, 293, 303. Prior review: analysis/analysis_nikomc_261025_2011.md#g0671. 

Added amazon: **10030**. [Source](https://www.amazon.com/dp/0805092994); [saved evidence](../data/value250_261102/raw/amazon-0407-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.20; O15 0.00; REL 6.00; RD 0.75.

R&D inputs: reference pages 12 (OL26243635M); total pages 319 (OL26243635M). 12 / 319 = 3.76%; R&D 0.75. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **57.37 → 57.37**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0496"></a>

## Clear Thinking — Shane Parrish

Sources: 117, 193. Prior review: analysis/analysis_scorebonus_261024_0106.md#g0496. 

Added amazon: **3069**. [Source](https://www.amazon.com/dp/1529915945); [saved evidence](../data/value250_261102/raw/amazon-0408-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.30; O15 0.00; REL 2.00; RD 0.56.

R&D inputs: reference pages 8 (OL48180231M); total pages 288 (OL48180231M). 8 / 288 = 2.78%; R&D 0.56. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **57.37 → 57.37**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-400808607782"></a>

## Direct From Dell: Strategies That Revolutionized an Industry — Michael Dell

Sources: 261, 298. Prior review: analysis/analysis_computepod_261025_2011.md#shelf-400808607782. 

Added amazon: **250**. [Source](https://www.amazon.com/dp/0887309143); [saved evidence](../data/value250_261102/raw/amazon-0412-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 0.00; H13 -1.08; P14 -2.70; O15 -5.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 236 (OL16942247M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **57.28 → 52.28**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1288"></a>

## A Spy Among Friends — Ben Macintyre

Sources: 126, 162, 201, 289. Prior review: analysis/analysis_nikomc_261025_2011.md#g1288. 

Added amazon: **12575**. [Source](https://www.amazon.com/dp/0804136653); [saved evidence](../data/value250_261102/raw/amazon-0415-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -2.52; P14 -1.20; O15 0.00; REL 3.46; RD 1.77.

R&D inputs: reference pages 34 (GoogleBooks:32H4AgAAQBAJ); total pages 384 (ISBN:0804136653). 34 / 384 = 8.85%; R&D 1.77. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.25 → 57.25**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="bg3690a5c67f"></a>

## Common Sense on Mutual Funds — John C. Bogle

Sources: 150. Prior review: analysis/analysis_scorebonus_261024_0106.md#bg3690a5c67f. 

Added amazon: **584**. [Source](https://www.amazon.com/dp/0470138130); [saved evidence](../data/value250_261102/raw/amazon-0417-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.80 | 1.80 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.70; O15 -5.00; REL 0.00; RD 0.15.

R&D inputs: reference pages 5 (OL24062499M); total pages 656 (9780470597484). 5 / 656 = 0.76%; R&D 0.15. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.22 → 52.22**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="progress-0018"></a>

## Plastic: A Toxic Love Story — Susan Freinkel

Sources: 229, 230, 231. Prior review: analysis/analysis_metadata1000_261025_1546.md#progress-0018. 

Added amazon: **252**. [Source](https://www.amazon.com/dp/054715240X); [saved evidence](../data/value250_261102/raw/amazon-0418-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.50; O15 -5.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 324 (ISBN:9780547152400). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **57.19 → 52.19**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1050"></a>

## Ingenious Pursuits: Building the Scientific Revolution — Lisa Jardine

Sources: 190. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1050. 

Added amazon: **48**. [Source](https://www.amazon.com/dp/0385720017); [saved evidence](../data/value250_261102/raw/amazon-0423-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -12.00; P14 -2.70; O15 -10.00; REL 0.00; RD 1.08.

R&D inputs: reference pages 25 (OL24957004M); total pages 464 (/books/OL7440415M). 25 / 464 = 5.39%; R&D 1.08. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.17 → 47.17**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1236"></a>

## Winning The Loser's Game — Charles Ellis

Sources: 123. Prior review: analysis/analysis_scorebonus_261024_0106.md#g1236. 

Added amazon: **250**. [Source](https://www.amazon.com/dp/B08NTX7N4Q); [saved evidence](../data/value250_261102/raw/amazon-0424-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.80; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 286 (ISBN:1259838048). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **57.17 → 52.17**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rem-u1531"></a>

## We Have No Idea: A Guide to the Unknown Universe — Jorge Cham; Daniel Whiteson

Sources: 204, 293. Prior review: analysis/analysis_mcateer_261025_2011.md#rem-u1531. 

Added amazon: **2615**. [Source](https://www.amazon.com/dp/0735211515); [saved evidence](../data/value250_261102/raw/amazon-0425-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.90; O15 0.00; REL 2.00; RD 0.23.

R&D inputs: reference pages 4 (OL27238466M); total pages 354 (/books/OL27238466M). 4 / 354 = 1.13%; R&D 0.23. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **57.17 → 57.17**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0387"></a>

## Euclid's Window — Leonard Mlodinow

Sources: 215. Prior review: analysis/analysis_metadata1000_261025_1546.md#intake-0387. 

Added amazon: **483**. [Source](https://www.amazon.com/dp/0684865246); [saved evidence](../data/value250_261102/raw/amazon-0429-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.50; O15 -5.00; REL 0.00; RD 1.56.

R&D inputs: reference pages 25 (OL18391546M); total pages 320 (/books/OL7722663M). 25 / 320 = 7.81%; R&D 1.56. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.09 → 52.09**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n1af14336f8"></a>

## The Art of War — Sun Tzu

Sources: 126, 135, 151, 183, 185, 187, 188, 199, 215, 220, 283, 290, 298, 299, 300. Prior review: analysis/analysis_subcritical_261025_2011.md#n1af14336f8. 

Added amazon: **1484**. [Source](https://www.amazon.com/dp/0877734526); [saved evidence](../data/value250_261102/raw/amazon-0431-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 9.00 | 8.10 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -10.00; O15 0.00; REL 7.48; RD 1.10.

R&D inputs: reference pages 6 (Harvard:990012839930203941); total pages 109 (OL7930826M). 6 / 109 = 5.50%; R&D 1.10. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.08 → 57.08**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="n4f90c642b5"></a>

## Many Worlds in One — Alex Vilenkin

Sources: 139, 253. Prior review: analysis/analysis_jermyn_261024_1455.md#n4f90c642b5. 

Added amazon: **97**. [Source](https://www.amazon.com/dp/0809095238); [saved evidence](../data/value250_261102/raw/amazon-0433-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.00; O15 -10.00; REL 2.00; RD 1.14.

R&D inputs: reference pages 14 (GoogleBooks:9nRGwQnvGx0C); total pages 246 (ISBN:9780374707149). 14 / 246 = 5.69%; R&D 1.14. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.05 → 47.05**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="bg021268ad2f"></a>

## The Great Influenza — John M. Barry

Sources: 167, 189, 190, 199, 205, 276, 283, 300, 303. Prior review: analysis/analysis_hendricks_261025_2011.md#bg021268ad2f. 

Added amazon: **11540**. [Source](https://www.amazon.com/dp/B000OCXFWE); [saved evidence](../data/value250_261102/raw/amazon-0435-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -4.24; P14 -2.20; O15 0.00; REL 5.66; RD 2.15.

R&D inputs: reference pages 62 (GoogleBooks:BYsW6qTP0pMC); total pages 576 (9780143036494). 62 / 576 = 10.76%; R&D 2.15. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **57.04 → 57.04**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rem-u0292"></a>

## Radical Markets: Uprooting Capitalism and Democracy for a Just Society — Eric A. Posner/E. Glenn Weyl

Sources: 178, 293. Prior review: analysis/analysis_mcateer_261025_2011.md#rem-u0292. 

Added amazon: **270**. [Source](https://www.amazon.com/dp/0691177503); [saved evidence](../data/value250_261102/raw/amazon-0439-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.80; O15 -5.00; REL 2.00; RD 1.42.

R&D inputs: reference pages 24 (Harvard:990153195800203941); total pages 337 (/books/OL26958407M). 24 / 337 = 7.12%; R&D 1.42. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **56.99 → 51.99**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0597"></a>

## Core Memory — John Alderman; Mark Richards

Sources: 238. Prior review: analysis/analysis_metadata1000_261025_1546.md#progress-0597. 

Added amazon: **82**. [Source](https://www.amazon.com/dp/0811854426); [saved evidence](../data/value250_261102/raw/amazon-0443-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.44; P14 -1.90; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 160 (OL8003125M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **56.97 → 46.97**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0039"></a>

## Super Founders — Ali Tamaseb

Sources: 207. Prior review: analysis/analysis_fast100_261102_0000.md#intake-0039. 

Added amazon: **274**. [Source](https://www.amazon.com/dp/B08HLZZT6G); [saved evidence](../data/value250_261102/raw/amazon-0449-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 -5.00; REL 0.00; RD 0.50.

R&D inputs: reference pages 8 (Source:https://librarysearch.melbourne.vic.gov.au/cgi-bin/spydus.exe/ENQ/OPAC/BIBENQ?BRN=790195&SETLVL); total pages 320 (ISBN:9781541768420). 8 / 320 = 2.50%; R&D 0.50. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.91 → 51.91**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1422"></a>

## In the Kingdom of Ice: The Grand and Terrible Polar Voyage of the USS Jeannette — Hampton Sides

Sources: 201. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1422. 

Added amazon: **7489**. [Source](https://www.amazon.com/dp/0385535376); [saved evidence](../data/value250_261102/raw/amazon-0455-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -5.80; P14 -1.20; O15 0.00; REL 0.00; RD 0.38.

R&D inputs: reference pages 9 (OL27162145M); total pages 480 (/books/OL40290035M). 9 / 480 = 1.88%; R&D 0.38. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.84 → 56.84**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-aa871facdbc9"></a>

## Ecological Imperialism — Alfred W. Crosby

Sources: 265. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-aa871facdbc9. 

Added amazon: **161**. [Source](https://www.amazon.com/dp/1107569877); [saved evidence](../data/value250_261102/raw/amazon-0461-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 -10.00; T12 0.00; H13 -5.04; P14 -4.00; O15 -5.00; REL 0.00; RD 2.66.

R&D inputs: reference pages 49 (ISBN:0521320097); total pages 368 (ISBN:0521320097). 49 / 368 = 13.32%; R&D 2.66. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **56.79 → 51.79**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1847"></a>

## What the CEO Wants You to Know — Ram Charan

Sources: 193. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1847. 

Added amazon: **692**. [Source](https://www.amazon.com/dp/0553417789); [saved evidence](../data/value250_261102/raw/amazon-0464-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.50; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 141 (/books/OL7585818M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **56.76 → 51.76**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1360"></a>

## The Lost City of the Monkey God — Douglas Preston

Sources: 200, 276, 293. Prior review: analysis/analysis_mcateer_261025_2011.md#rem-u1360. 

Added amazon: **17589**. [Source](https://www.amazon.com/dp/1455540013); [saved evidence](../data/value250_261102/raw/amazon-0468-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.44; P14 -0.90; O15 0.00; REL 2.83; RD 1.12.

R&D inputs: reference pages 19 (OL27226026M); total pages 338 (/books/OL47309006M). 19 / 338 = 5.62%; R&D 1.12. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.65 → 56.65**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0838"></a>

## The Mathematical Universe — William Dunham

Sources: 223. Prior review: analysis/analysis_metadata1000_261025_1546.md#intake-0838. 

Added amazon: **110**. [Source](https://www.amazon.com/dp/0471176613); [saved evidence](../data/value250_261102/raw/amazon-0474-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 5.00 | 5.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -3.20; O15 -5.00; REL 0.00; RD 0.70.

R&D inputs: reference pages 11 (ISBN:0471536563); total pages 314 (/books/OL7612860M). 11 / 314 = 3.50%; R&D 0.70. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.62 → 51.62**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0158"></a>

## Gamers at Work — Morgan Ramsay

Sources: 211. Prior review: analysis/analysis_scorebonus_261024_0106.md#intake-0158. 

Added amazon: **32**. [Source](https://www.amazon.com/dp/1430233516); [saved evidence](../data/value250_261102/raw/amazon-0479-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -0.56; P14 -1.40; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 369 (ISBN:9781430233510). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **56.57 → 46.57**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelves-datagoliath"></a>

## Data and Goliath: The Hidden Battles to Collect Your Data and Control Your World — Bruce Schneier

Sources: 292. Prior review: analysis/analysis_kamdar_261025_2011.md#shelves-datagoliath. 

Added amazon: **875**. [Source](https://www.amazon.com/dp/039335217X); [saved evidence](../data/value250_261102/raw/amazon-0480-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -1.10; O15 -5.00; REL 0.00; RD 5.74.

R&D inputs: reference pages 122 (ISBN:9780393352177); total pages 425 (ISBN:9780393352177). 122 / 425 = 28.71%; R&D 5.74. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **56.55 → 51.55**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g1267"></a>

## The Science of Conjecture — James Franklin

Sources: 124, 290, 292. Prior review: analysis/analysis_subcritical_261025_2011.md#g1267. 

Added amazon: **30**. [Source](https://www.amazon.com/dp/0801871093); [saved evidence](../data/value250_261102/raw/amazon-0486-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -12.00; P14 -2.50; O15 -10.00; REL 2.83; RD 3.98.

R&D inputs: reference pages 102 (GoogleBooks:1zDECQAAQBAJ); total pages 512 (ISBN:0801871093). 102 / 512 = 19.92%; R&D 3.98. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.38 → 46.38**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="resume-430-4"></a>

## A Hacker's Mind: How the Powerful Bend Society's Rules, and How to Bend them Back — Bruce Schneier

Sources: 278. Prior review: analysis/analysis_metadata2_261025_1921.md#resume-430-4. 

Added amazon: **497**. [Source](https://www.amazon.com/dp/0393866661); [saved evidence](../data/value250_261102/raw/amazon-0480-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 13.00 | 13.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.30; O15 -5.00; REL 0.00; RD 1.45.

R&D inputs: reference pages 22 (Harvard:99156597160703941); total pages 304 (ISBN:1324074531). 22 / 304 = 7.24%; R&D 1.45. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **69.08 → 64.08**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0439"></a>

## Singularity Rising — James Daniel Miller

Sources: 232, 259. Prior review: analysis/analysis_metadata1000_261025_1546.md#progress-0439. 

Added amazon: **50**. [Source](https://www.amazon.com/dp/1936661659); [saved evidence](../data/value250_261102/raw/amazon-0493-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 5.00 | 5.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 -10.00; REL 2.00; RD 1.39.

R&D inputs: reference pages 20 (GoogleBooks:P5Quj8N2dXAC); total pages 288 (GoogleBooks:P5Quj8N2dXAC). 20 / 288 = 6.94%; R&D 1.39. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **56.31 → 46.31**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0665"></a>

## The Meaning of It All — Richard Feynman

Sources: 118, 204, 253. Prior review: analysis/analysis_jermyn_261024_1455.md#g0665. 

Added amazon: **573**. [Source](https://www.amazon.com/dp/0465023940); [saved evidence](../data/value250_261102/raw/amazon-0434-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.80; O15 -5.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 133 (ISBN:0738201669). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **53.99 → 48.99**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n7910c752df"></a>

## A Briefer History of Time — Stephen Hawking; Leonard Mlodinow

Sources: 139, 205. Prior review: analysis/analysis_scorebonus_261024_0106.md#n7910c752df. 

Added amazon: **2538**. [Source](https://www.amazon.com/dp/0553385461); [saved evidence](../data/value250_261102/raw/amazon-0429-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 7.00 | 2.88 |
| Transferable strategic utility | 3.00 | 3.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.10; O15 0.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 176 (ISBN:9780553385465). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **53.48 → 53.48**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="progress-0412"></a>

## The Ohlone Way — Malcolm Margolin

Sources: 232. Prior review: analysis/analysis_metadata1000_261025_1546.md#progress-0412. 

Added amazon: **9**. [Source](https://www.amazon.com/dp/0930588029); [saved evidence](../data/value250_261102/raw/amazon-0453-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 5.00 | 5.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -10.24; P14 -4.80; O15 -20.00; REL 0.00; RD 0.48.

R&D inputs: reference pages 5 (OL18703054M); total pages 208 (/books/OL8360506M). 5 / 208 = 2.40%; R&D 0.48. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **26.63 → 6.63**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0406"></a>

## Makers: The New Industrial Revolution — Chris Anderson

Sources: 181. Prior review: analysis/analysis_metadata1000_261025_1546.md#rem-u0406. 

Added amazon: **573**. [Source](https://www.amazon.com/dp/0307720950); [saved evidence](../data/value250_261102/raw/amazon-0500-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 5.00 | 5.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 -5.00; REL 0.00; RD 0.31.

R&D inputs: reference pages 4 (ISBN:9780307720962); total pages 257 (/books/OL25290555M). 4 / 257 = 1.56%; R&D 0.31. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.23 → 51.23**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1860"></a>

## Abundance — Ezra Klein; Derek Thompson

Sources: 193, 289, 303. Prior review: analysis/analysis_nikomc_261025_2011.md#rem-u1860. 

Added amazon: **5009**. [Source](https://www.amazon.com/dp/1668023482); [saved evidence](../data/value250_261102/raw/amazon-0502-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.10; O15 0.00; REL 2.83; RD 3.03.

R&D inputs: reference pages 46 (Harvard:99161563192303941); total pages 304 (/books/OL57760575M). 46 / 304 = 15.13%; R&D 3.03. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **56.21 → 56.21**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-2d950e833699"></a>

## Irrational Exuberance — Robert J. Shiller

Sources: 258. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-2d950e833699. 

Added amazon: **1151**. [Source](https://www.amazon.com/dp/0691166269); [saved evidence](../data/value250_261102/raw/amazon-0509-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 5.25 | 5.25 |
| Expert authority | 4.75 | 4.75 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -2.60; O15 0.00; REL 0.00; RD 3.33.

R&D inputs: reference pages 56 (OL23098986M); total pages 336 (OL8065004M). 56 / 336 = 16.67%; R&D 3.33. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **56.16 → 56.16**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-4f1886efd311"></a>

## Joy at Work — Dennis W. Bakke

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-4f1886efd311. 

Added amazon: **203**. [Source](https://www.amazon.com/dp/0976268604); [saved evidence](../data/value250_261102/raw/amazon-0516-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.05 | 7.18 |
| Transferable strategic utility | 9.75 | 9.75 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 6.50 | 4.23 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 4.55 | 4.55 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.10; O15 -5.00; REL 0.00; RD 0.38.

R&D inputs: reference pages 6 (OL3316973M); total pages 314 (OL3316973M). 6 / 314 = 1.91%; R&D 0.38. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **56.09 → 51.09**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n21c234a6ae"></a>

## Phantoms in the Brain — V. S. Ramachandran; Sandra Blakeslee

Sources: 135, 193, 204, 258. Prior review: analysis/analysis_gallagher_261024_1455.md#n21c234a6ae. 

Added amazon: **711**. [Source](https://www.amazon.com/dp/0688172172); [saved evidence](../data/value250_261102/raw/amazon-0530-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -2.80; O15 -5.00; REL 3.46; RD 0.94.

R&D inputs: reference pages 15 (OL344966M); total pages 320 (ISBN:9780688152475). 15 / 320 = 4.69%; R&D 0.94. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **55.87 → 50.87**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rest-95-83"></a>

## The Dealmaker — Guy Hands

Sources: 270. Prior review: analysis/analysis_metadata1000_261025_1546.md#rest-95-83. 

Added amazon: **623**. [Source](https://www.amazon.com/dp/B094NZZ5HB); [saved evidence](../data/value250_261102/raw/amazon-0533-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.50; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 288 (GoogleBooks:ugyREAAAQBAJ). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **55.85 → 50.85**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="nb5bf8a801c"></a>

## Console Wars — Blake J. Harris

Sources: 128, 300. Prior review: analysis/analysis_hendricks_261025_2011.md#nb5bf8a801c. 

Added amazon: **3807**. [Source](https://www.amazon.com/dp/0062276700); [saved evidence](../data/value250_261102/raw/amazon-0539-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 5.00 | 2.50 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 -1.20; P14 -1.20; O15 0.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 558 (ISBN:9780062276698). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **55.77 → 55.77**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-6d53dc2ea6f7"></a>

## General Relativity from A to B — Robert Geroch

Sources: 255. Prior review: analysis/analysis_baez_261024_1455.md#shelf-6d53dc2ea6f7. 

Added amazon: **69**. [Source](https://www.amazon.com/dp/0226288641); [saved evidence](../data/value250_261102/raw/amazon-0541-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 6.80 | 2.72 |
| Transferable strategic utility | 7.50 | 7.50 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -4.80; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 233 (OL9514040M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **55.72 → 45.72**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-52bcb19e4077"></a>

## The Dodge Brothers: The Men, the Motor Cars, and the Legacy — Charles Hyde

Sources: 261. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-52bcb19e4077. 

Added amazon: **140**. [Source](https://www.amazon.com/dp/0814332463); [saved evidence](../data/value250_261102/raw/amazon-0543-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 5.95 | 5.95 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 0.00; H13 -4.24; P14 -2.10; O15 -5.00; REL 0.00; RD 2.55.

R&D inputs: reference pages 32 (ISBN:0814332463); total pages 251 (OL9809135M). 32 / 251 = 12.75%; R&D 2.55. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **55.70 → 50.70**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-c61aa9c3772d"></a>

## How Brands Grow: What Marketers Don’t Know — Byron Sharp

Sources: 261. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-c61aa9c3772d. 

Added amazon: **1211**. [Source](https://www.amazon.com/dp/0195573560); [saved evidence](../data/value250_261102/raw/amazon-0545-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.05 | 7.18 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 3.85 | 3.85 |
| Expert authority | 4.25 | 4.25 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.60; O15 0.00; REL 0.00; RD 1.01.

R&D inputs: reference pages 11 (ISBN:9780195573565); total pages 217 (OL55247497M). 11 / 217 = 5.07%; R&D 1.01. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **55.67 → 55.67**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-760e05bd4a60"></a>

## Iron Kingdom: The Rise and Downfall of Prussia, 1600–1947 — Christopher Clark

Sources: 265. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-760e05bd4a60. 

Added amazon: **1158**. [Source](https://www.amazon.com/dp/0674031962); [saved evidence](../data/value250_261102/raw/amazon-0549-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 15.30 | 13.77 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.80 | 1.80 |

T11 -10.00; T12 -10.00; H13 -3.16; P14 -2.00; O15 0.00; REL 0.00; RD 1.83.

R&D inputs: reference pages 73 (ISBN:0674023854); total pages 800 (OL7691863M). 73 / 800 = 9.13%; R&D 1.83. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **55.64 → 55.64**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1199"></a>

## Quality Investing — Lawrence A. Cunningham

Sources: 123. Prior review: analysis/analysis_scorebonus_261024_0106.md#g1199. 

Added amazon: **538**. [Source](https://www.amazon.com/dp/0857195123); [saved evidence](../data/value250_261102/raw/amazon-0550-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.00; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 224 (ISBN:0857195123). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **55.62 → 50.62**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rest-59-52"></a>

## Raven Rock — Garrett Graff

Sources: 269, 299. Prior review: analysis/analysis_leinweber_261025_2011.md#rest-59-52. 

Added amazon: **1619**. [Source](https://www.amazon.com/dp/1476735409); [saved evidence](../data/value250_261102/raw/amazon-0554-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.90; O15 0.00; REL 2.00; RD 0.34.

R&D inputs: reference pages 9 (ISBN:9781476735405); total pages 529 (ISBN:9781476735405). 9 / 529 = 1.70%; R&D 0.34. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **55.54 → 55.54**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-8c8da92cc2d4"></a>

## Crabgrass Frontier — Kenneth T. Jackson

Sources: 258. Prior review: analysis/analysis_gallagher_261024_1455.md#shelf-8c8da92cc2d4. 

Added amazon: **201**. [Source](https://www.amazon.com/dp/0195049837); [saved evidence](../data/value250_261102/raw/amazon-0555-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 9.60 | 9.60 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 2.80 | 2.80 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 -10.00; T12 0.00; H13 -1.84; P14 -4.10; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 432 (OL7389021M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **55.54 → 50.54**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="complete-479-137"></a>

## Why We Buy: The Science of Shopping — Paco Underhill

Sources: 278, 291. Prior review: analysis/analysis_bretvictor_261025_2011.md#complete-479-137. 

Added amazon: **202**. [Source](https://www.amazon.com/dp/0684849135); [saved evidence](../data/value250_261102/raw/amazon-0557-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.70; O15 -5.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 255 (ISBN:0684849135). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **55.53 → 50.53**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1477"></a>

## Relativity: The Special and the General Theory — Albert Einstein

Sources: 203, 228, 291, 303. Prior review: analysis/analysis_bretvictor_261025_2011.md#rem-u1477. 

Added amazon: **4445**. [Source](https://www.amazon.com/dp/0517029618); [saved evidence](../data/value250_261102/raw/amazon-0559-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 19.00 | 18.05 |
| Systems integration | 7.00 | 2.88 |
| Transferable strategic utility | 5.00 | 5.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -10.00; O15 0.00; REL 3.46; RD 0.21.

R&D inputs: reference pages 2 (ISBN:0517025302); total pages 192 (/books/OL30086032M). 2 / 192 = 1.04%; R&D 0.21. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **55.50 → 55.50**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="nc3e90eed0b"></a>

## Endless Universe: Beyond the Big Bang — Paul J. Steinhardt; Neil Turok

Sources: 139. Prior review: analysis/analysis_scorebonus_261024_0106.md#nc3e90eed0b. 

Added amazon: **164**. [Source](https://www.amazon.com/dp/0385509642); [saved evidence](../data/value250_261102/raw/amazon-0564-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 4.00 | 4.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.90; O15 -5.00; REL 0.00; RD 0.23.

R&D inputs: reference pages 3 (OL23100198M); total pages 256 (ISBN:9780385523110). 3 / 256 = 1.17%; R&D 0.23. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **55.25 → 50.25**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rem-u0112"></a>

## Give and Take — Adam Grant

Sources: 176, 177, 251. Prior review: analysis/analysis_sivers_261024_1455.md#rem-u0112. 

Added amazon: **6456**. [Source](https://www.amazon.com/dp/0143124986); [saved evidence](../data/value250_261102/raw/amazon-0566-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 8.00 | 3.76 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.30; O15 0.00; REL 2.83; RD 1.25.

R&D inputs: reference pages 22 (OL26446374M); total pages 352 (/books/OL48146041M). 22 / 352 = 6.25%; R&D 1.25. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **55.24 → 55.24**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-1d18309bc2fb"></a>

## Chance and Necessity — Jacques Monod

Sources: 258, 289. Prior review: analysis/analysis_nikomc_261025_2011.md#shelf-1d18309bc2fb. 

Added amazon: **38**. [Source](https://www.amazon.com/dp/0394466152); [saved evidence](../data/value250_261102/raw/amazon-0568-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 5.25 | 5.25 |
| Expert authority | 4.75 | 4.75 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 0.00; P14 -5.60; O15 -10.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 188 (OL44116249M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **55.21 → 45.21**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bg271075acc1"></a>

## The Storytelling Animal — Jonathan Gottschall

Sources: 168, 254. Prior review: analysis/analysis_metadata1000_261025_1546.md#bg271075acc1. 

Added amazon: **1018**. [Source](https://www.amazon.com/dp/0544002342); [saved evidence](../data/value250_261102/raw/amazon-0569-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 0.00; REL 2.00; RD 1.18.

R&D inputs: reference pages 16 (ISBN:9780547391403); total pages 272 (9780547391403). 16 / 272 = 5.88%; R&D 1.18. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **55.19 → 55.19**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g0897"></a>

## The Price of Peace — Zachary D. Carter

Sources: 120, 301. Prior review: analysis/analysis_czarandy_261025_2011.md#g0897. 

Added amazon: **1267**. [Source](https://www.amazon.com/dp/0525509038); [saved evidence](../data/value250_261102/raw/amazon-0575-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 5.00 | 2.50 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -0.40; P14 -0.60; O15 0.00; REL 2.00; RD 0.34.

R&D inputs: reference pages 11 (GoogleBooks:OCmrDwAAQBAJ); total pages 656 (ISBN:0525509054). 11 / 656 = 1.68%; R&D 0.34. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **55.11 → 55.11**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rest-118-98"></a>

## A Little History of Religion — Richard Holloway

Sources: 270. Prior review: analysis/analysis_metadata1000_261025_1546.md#rest-118-98. 

Added amazon: **938**. [Source](https://www.amazon.com/dp/0300228813); [saved evidence](../data/value250_261102/raw/amazon-0576-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.00; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 244 (ISBN:9780300208832). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **55.11 → 50.11**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0288"></a>

## Narrative Economics: How Stories Go Viral and Drive Major Economic Events — Robert J. Shiller

Sources: 178. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u0288. 

Added amazon: **899**. [Source](https://www.amazon.com/dp/0691210268); [saved evidence](../data/value250_261102/raw/amazon-0578-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.70; O15 -5.00; REL 0.00; RD 2.45.

R&D inputs: reference pages 50 (GoogleBooks:DdPgDwAAQBAJ); total pages 408 (/books/OL29895091M). 50 / 408 = 12.25%; R&D 2.45. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **55.10 → 50.10**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1305"></a>

## The Kill Chain — Christian Brose

Sources: 126, 167, 193, 250. Prior review: analysis/analysis_scorebonus_261024_0106.md#g1305. 

Added amazon: **1853**. [Source](https://www.amazon.com/dp/031653367X); [saved evidence](../data/value250_261102/raw/amazon-0579-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.60; O15 0.00; REL 3.46; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 320 (ISBN:031653353X). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **55.09 → 55.09**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-2c5a6212b7ab"></a>

## An Empire of Wealth — John Steele Gordon

Sources: 258. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-2c5a6212b7ab. 

Added amazon: **352**. [Source](https://www.amazon.com/dp/0060093625); [saved evidence](../data/value250_261102/raw/amazon-0583-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 3.75 | 3.75 |
| Narrative architecture | 2.55 | 2.55 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -2.20; O15 -5.00; REL 0.00; RD 0.39.

R&D inputs: reference pages 9 (OL18296358M); total pages 460 (OL18296358M). 9 / 460 = 1.96%; R&D 0.39. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **55.05 → 50.05**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1152"></a>

## The Age of Agile: How Smart Companies Are Transforming the Way Work Gets Done — Stephen Denning

Sources: 192. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1152. 

Added amazon: **448**. [Source](https://www.amazon.com/dp/0814439098); [saved evidence](../data/value250_261102/raw/amazon-0588-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.80; O15 -5.00; REL 0.00; RD 1.85.

R&D inputs: reference pages 31 (GoogleBooks:63BGDwAAQBAJ); total pages 336 (/books/OL38914430M). 31 / 336 = 9.23%; R&D 1.85. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **55.01 → 50.01**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0938"></a>

## Imagined Communities: Reflections on the Origin and Spread of Nationalism (Revised Edition) — Benedict Anderson

Sources: 189, 201, 263. Prior review: analysis/analysis_mchale_261024_1455.md#rem-u0938. 

Added amazon: **49**. [Source](https://www.amazon.com/dp/0860915468); [saved evidence](../data/value250_261102/raw/amazon-0591-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -4.30; O15 -10.00; REL 2.83; RD 0.31.

R&D inputs: reference pages 4 (OL20914401M); total pages 256 (/books/OL8956192M). 4 / 256 = 1.56%; R&D 0.31. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **54.98 → 44.98**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1180"></a>

## Deep Value — Tobias Carlisle

Sources: 123. Prior review: analysis/analysis_scorebonus_261024_0106.md#g1180. 

Added amazon: **200**. [Source](https://www.amazon.com/dp/1118747968); [saved evidence](../data/value250_261102/raw/amazon-0594-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.20; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 222 (ISBN:1118747968). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **54.92 → 49.92**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0031"></a>

## Catalogues and Counters: A History of Sears, Roebuck & Company — Boris Emmet, John E. Jeuck

Sources: 229. Prior review: analysis/analysis_metadata2_261025_1921.md#progress-0031. 

Added amazon: **6**. [Source](https://www.amazon.com/dp/B0006DDANK); [saved evidence](../data/value250_261102/raw/amazon-0602-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -3.04; P14 -7.60; O15 -20.00; REL 0.00; RD 0.53.

R&D inputs: reference pages 21 (Harvard:990009655340203941); total pages 788 (/books/OL10191797M). 21 / 788 = 2.66%; R&D 0.53. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **54.77 → 34.77**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0450"></a>

## The Way We Think — Gilles Fauconnier; Mark Turner

Sources: 215, 291. Prior review: analysis/analysis_bretvictor_261025_2011.md#intake-0450. 

Added amazon: **62**. [Source](https://www.amazon.com/dp/0465087868); [saved evidence](../data/value250_261102/raw/amazon-0606-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -2.40; O15 -10.00; REL 2.00; RD 0.68.

R&D inputs: reference pages 17 (HathiTrust:004242231); total pages 500 (/books/OL7594119M). 17 / 500 = 3.40%; R&D 0.68. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **54.74 → 44.74**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bgcb095f9fc5"></a>

## The Greatest Trade Ever — Gregory Zuckerman

Sources: 164. Prior review: analysis/analysis_metadata2_261025_1921.md#bgcb095f9fc5. 

Added amazon: **578**. [Source](https://www.amazon.com/dp/0385529945); [saved evidence](../data/value250_261102/raw/amazon-0608-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.70 | 2.70 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 -0.72; P14 -1.70; O15 -5.00; REL 0.00; RD 0.19.

R&D inputs: reference pages 3 (Harvard:990123141950203941); total pages 320 (9780385529945). 3 / 320 = 0.94%; R&D 0.19. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **54.74 → 49.74**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g1076"></a>

## The City In History — Lewis Mumford

Sources: 122, 232, 258, 290. Prior review: analysis/analysis_subcritical_261025_2011.md#g1076. 

Added amazon: **152**. [Source](https://www.amazon.com/dp/0156180359); [saved evidence](../data/value250_261102/raw/amazon-0613-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 5.00 | 2.50 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -6.50; O15 -5.00; REL 3.46; RD 1.70.

R&D inputs: reference pages 56 (OL20253507M); total pages 657 (ISBN:0156180359). 56 / 657 = 8.52%; R&D 1.70. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **54.70 → 49.70**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-5c890b37e955"></a>

## So Good They Can’t Ignore You — Cal Newport

Sources: 251, 263, 293. Prior review: analysis/analysis_mcateer_261025_2011.md#shelf-5c890b37e955. 

Added amazon: **899**. [Source](https://www.amazon.com/dp/1455509124); [saved evidence](../data/value250_261102/raw/amazon-0616-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 2.80 | 2.80 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.40; O15 -5.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 304 (OL25102032M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **54.65 → 49.65**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-df1fa2c1c76c"></a>

## The Rise and Decline of the Medici Bank: 1397–1494 — Raymond de Roover

Sources: 259. Prior review: analysis/analysis_gwern_261024_1455.md#shelf-df1fa2c1c76c. 

Added amazon: **24**. [Source](https://www.amazon.com/dp/1893122328); [saved evidence](../data/value250_261102/raw/amazon-0622-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 14.45 | 12.28 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.20 | 10.20 |
| Information density | 8.00 | 6.40 |
| Durability | 8.55 | 8.55 |
| Direct domain fit | 4.90 | 4.90 |
| Expert authority | 4.75 | 4.75 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.70 | 1.70 |

T11 0.00; T12 -10.00; H13 -12.00; P14 -6.30; O15 -10.00; REL 0.00; RD 3.76.

R&D inputs: reference pages 94 (Fulcrum:gh93gz54c:1963); total pages 500 (CiNii:BA40292834). 94 / 500 = 18.80%; R&D 3.76. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **54.54 → 44.54**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1208"></a>

## The Aspirational Investor — Ashvin Chhabra

Sources: 123. Prior review: analysis/analysis_scorebonus_261024_0106.md#g1208. 

Added amazon: **132**. [Source](https://www.amazon.com/dp/0062235095); [saved evidence](../data/value250_261102/raw/amazon-0624-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.10; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 222 (ISBN:0062235095). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **54.52 → 49.52**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="bged8652ea0a"></a>

## Losing My Virginity — Richard Branson

Sources: 171, 207, 251, 261. Prior review: analysis/analysis_sivers_261024_1455.md#bged8652ea0a. 

Added amazon: **3600**. [Source](https://www.amazon.com/dp/0753519550); [saved evidence](../data/value250_261102/raw/amazon-0626-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 6.00 | 3.60 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.32; P14 -2.80; O15 0.00; REL 3.46; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 488 (1852276843). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **54.51 → 54.51**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rem-u1220"></a>

## Amp It Up: Leading for Hypergrowth by Raising Expectations, Increasing Urgency, and Elevating Intensity — Frank Slootman

Sources: 196, 197, 261. Prior review: analysis/analysis_founders_261024_1455.md#rem-u1220. 

Added amazon: **1406**. [Source](https://www.amazon.com/dp/1119836115); [saved evidence](../data/value250_261102/raw/amazon-0630-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 6.50 | 4.23 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.40; O15 0.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 224 (/books/OL34780318M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **54.49 → 54.49**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0640"></a>

## Superhuman — Rowan Hooper

Sources: 118. Prior review: analysis/analysis_scorebonus_261024_0106.md#g0640. 

Added amazon: **51**. [Source](https://www.amazon.com/dp/1408709465); [saved evidence](../data/value250_261102/raw/amazon-0632-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.80; O15 -10.00; REL 0.00; RD 0.74.

R&D inputs: reference pages 13 (OL26977039M); total pages 352 (ISBN:1501168738). 13 / 352 = 3.69%; R&D 0.74. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **54.47 → 44.47**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1054"></a>

## The Four: The Hidden DNA of Amazon, Apple, Facebook, and Google — Scott Galloway

Sources: 191, 298, 299, 303. Prior review: analysis/analysis_computepod_261025_2011.md#rem-u1054. 

Added amazon: **4198**. [Source](https://www.amazon.com/dp/0735213674); [saved evidence](../data/value250_261102/raw/amazon-0633-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.00 | 4.90 |
| Durability | 5.00 | 5.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.90; O15 0.00; REL 3.46; RD 1.69.

R&D inputs: reference pages 27 (ISBN:9780735213654); total pages 320 (/books/OL28625474M). 27 / 320 = 8.44%; R&D 1.69. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **54.47 → 54.47**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1083"></a>

## The Discovery of France — Graham Robb

Sources: 122, 258, 259, 290, 300. Prior review: analysis/analysis_subcritical_261025_2011.md#g1083. 

Added amazon: **429**. [Source](https://www.amazon.com/dp/B000WJSBCS); [saved evidence](../data/value250_261102/raw/amazon-0635-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 6.00 | 3.60 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 -4.48; P14 -1.90; O15 -5.00; REL 4.00; RD 1.38.

R&D inputs: reference pages 33 (OL19304667M); total pages 480 (ISBN:0393333647). 33 / 480 = 6.88%; R&D 1.38. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **54.34 → 49.34**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-277545f61d15"></a>

## Making Ideas Happen — Scott Belsky

Sources: 251, 291. Prior review: analysis/analysis_bretvictor_261025_2011.md#shelf-277545f61d15. 

Added amazon: **639**. [Source](https://www.amazon.com/dp/159184312X); [saved evidence](../data/value250_261102/raw/amazon-0636-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.60; O15 -5.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 242 (OL24520849M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **54.32 → 49.32**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-62e8f5497a60"></a>

## Born of This Land: My Life Story — Chung Ju-yung

Sources: 261. Prior review: analysis/analysis_founders_261024_1455.md#shelf-62e8f5497a60. 

Added amazon: **33**. [Source](https://www.amazon.com/dp/B07YNZF25Z); [saved evidence](../data/value250_261102/raw/amazon-0637-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 14.45 | 12.28 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 6.30 | 6.30 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 0.00; H13 -1.12; P14 -2.80; O15 -10.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 357 (ISBN:9791196193447). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **54.31 → 44.31**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="progress-0063"></a>

## Magnetic Mountain — Stephen Kotkin

Sources: 230, 231. Prior review: analysis/analysis_metadata1000_261025_1546.md#progress-0063. 

Added amazon: **88**. [Source](https://www.amazon.com/dp/0520208234); [saved evidence](../data/value250_261102/raw/amazon-0642-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 19.00 | 18.05 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 -10.00; H13 -3.40; P14 -3.10; O15 -10.00; REL 2.00; RD 0.27.

R&D inputs: reference pages 10 (ISBN:0520069080); total pages 728 (/books/OL7710329M). 10 / 728 = 1.37%; R&D 0.27. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **54.25 → 44.25**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-13b1ae042f6e"></a>

## The Formula: How Rogues, Geniuses, and Speed Freaks Reengineered F1 into the World's Fastest-Growing Sport — Joshua Robinson and Jonathan Clegg

Sources: 261. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-13b1ae042f6e. 

Added amazon: **1618**. [Source](https://www.amazon.com/dp/0063318628); [saved evidence](../data/value250_261102/raw/amazon-0644-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.80 | 7.80 |
| Information density | 7.50 | 5.63 |
| Durability | 6.75 | 6.75 |
| Direct domain fit | 5.25 | 5.25 |
| Expert authority | 3.75 | 3.75 |
| Narrative architecture | 2.55 | 2.55 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -0.12; P14 -0.20; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 304 (GoogleBooks:L35Z0AEACAAJ). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **54.22 → 54.22**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0058"></a>

## The Worst Journey in the World — Apsley Cherry-Garrard

Sources: 207, 271. Prior review: analysis/analysis_clancy_261024_2307.md#intake-0058. 

Added amazon: **1202**. [Source](https://www.amazon.com/dp/0143039385); [saved evidence](../data/value250_261102/raw/amazon-0645-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -4.52; P14 -10.00; O15 0.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 344 (/books/OL39222585M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **54.21 → 54.21**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1308"></a>

## White Trash: The 400-Year Untold History of Class in America — Nancy Isenberg

Sources: 199. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1308. 

Added amazon: **5654**. [Source](https://www.amazon.com/dp/0670785970); [saved evidence](../data/value250_261102/raw/amazon-0646-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -1.00; O15 0.00; REL 0.00; RD 5.39.

R&D inputs: reference pages 124 (OL25938400M); total pages 460 (/books/OL25938400M). 124 / 460 = 26.96%; R&D 5.39. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **54.21 → 54.21**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0686"></a>

## Who’s in Charge? — Michael S. Gazzaniga

Sources: 118, 254, 303. Prior review: analysis/analysis_elitescience_261025_2011.md#g0686. 

Added amazon: **576**. [Source](https://www.amazon.com/dp/0061906107); [saved evidence](../data/value250_261102/raw/amazon-0654-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.50; O15 -5.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 260 (ISBN:0061906107). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **54.10 → 49.10**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0982"></a>

## Destined For War — Graham Allison

Sources: 122, 151, 155, 178, 179, 269, 290. Prior review: analysis/analysis_subcritical_261025_2011.md#g0982. 

Added amazon: **2662**. [Source](https://www.amazon.com/dp/0544935276); [saved evidence](../data/value250_261102/raw/amazon-0656-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 11.00 | 6.05 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.90; O15 0.00; REL 4.90; RD 3.13.

R&D inputs: reference pages 60 (ISBN:9780544935273); total pages 384 (ISBN:0544935276). 60 / 384 = 15.63%; R&D 3.13. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **54.04 → 54.04**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n2dd4d99b9d"></a>

## Wizard: The Life and Times of Nikola Tesla — Marc J. Seifer

Sources: 139. Prior review: analysis/analysis_scorebonus_261024_0106.md#n2dd4d99b9d. 

Added amazon: **1605**. [Source](https://www.amazon.com/dp/1559723297); [saved evidence](../data/value250_261102/raw/amazon-0664-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 7.00 | 7.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 0.00; H13 -3.32; P14 -3.00; O15 0.00; REL 0.00; RD 0.33.

R&D inputs: reference pages 9 (OL812676M); total pages 542 (ISBN:9781559723299). 9 / 542 = 1.66%; R&D 0.33. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **54.00 → 54.00**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="nbdd8adfeb5"></a>

## The Conscious Mind — David Chalmers

Sources: 144, 254. Prior review: analysis/analysis_carroll2015_261024_1455.md#nbdd8adfeb5. 

Added amazon: **332**. [Source](https://www.amazon.com/dp/0195105532); [saved evidence](../data/value250_261102/raw/amazon-0659-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 6.00 | 3.60 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -3.00; O15 -5.00; REL 2.00; RD 2.13.

R&D inputs: reference pages 46 (GoogleBooks:0fZZQHOfdAAC); total pages 432 (9780195117899). 46 / 432 = 10.65%; R&D 2.13. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **45.41 → 40.41**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-5ecc479d6cb1"></a>

## The Blazing World: A New History of Revolutionary England — Jonathan Healey

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-5ecc479d6cb1. 

Added amazon: **600**. [Source](https://www.amazon.com/dp/0593318358); [saved evidence](../data/value250_261102/raw/amazon-0640-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 12.75 | 9.56 |
| Transferable strategic utility | 9.75 | 9.75 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.50 | 5.63 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 3.85 | 3.85 |
| Expert authority | 4.25 | 4.25 |
| Narrative architecture | 2.55 | 2.55 |
| Authorial precision | 1.60 | 1.60 |

T11 -10.00; T12 -10.00; H13 -12.00; P14 -0.30; O15 -5.00; REL 0.00; RD 1.38.

R&D inputs: reference pages 34 (Folger:1152836); total pages 492 (Folger:1152836). 34 / 492 = 6.91%; R&D 1.38. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **37.22 → 32.22**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0085"></a>

## Conquistador — Buddy Levy

Sources: 207. Prior review: analysis/analysis_metadata1000_261025_1546.md#intake-0085. 

Added amazon: **1608**. [Source](https://www.amazon.com/dp/0553384716); [saved evidence](../data/value250_261102/raw/amazon-0597-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -12.00; P14 -1.80; O15 0.00; REL 0.00; RD 0.89.

R&D inputs: reference pages 19 (OL23698154M); total pages 429 (/books/OL23698154M). 19 / 429 = 4.43%; R&D 0.89. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **35.89 → 35.89**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bg1994e200af"></a>

## Who Is Michael Ovitz? — Michael Ovitz

Sources: 162, 261, 290. Prior review: analysis/analysis_subcritical_261025_2011.md#bg1994e200af. 

Added amazon: **717**. [Source](https://www.amazon.com/dp/1591845548); [saved evidence](../data/value250_261102/raw/amazon-0637-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 2.50 | 2.50 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 -1.20; P14 -0.80; O15 -5.00; REL 2.83; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 384 (9798217045280). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **34.06 → 29.06**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="g1014"></a>

## American Nations — Colin Woodard

Sources: 122, 201, 258, 263, 276. Prior review: analysis/analysis_misiti_261024_2307.md#g1014. 

Added amazon: **5248**. [Source](https://www.amazon.com/dp/0143122029); [saved evidence](../data/value250_261102/raw/amazon-0507-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 6.00 | 3.60 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -1.50; O15 0.00; REL 4.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 371 (OL24842579M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **30.68 → 30.68**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1191"></a>

## The History of Mary Prince: A West Indian Slave Narrative — Mary Prince

Sources: 194, 195. Prior review: analysis/analysis_metadata2_261025_1921.md#rem-u1191. 

Added amazon: **220**. [Source](https://www.amazon.com/dp/0140437495); [saved evidence](../data/value250_261102/raw/amazon-0652-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 6.00 | 2.12 |
| Transferable strategic utility | 5.00 | 5.00 |
| Mechanistic and causal depth | 4.00 | 4.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 1.00 | 1.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -7.92; P14 -10.00; O15 -5.00; REL 2.00; RD 1.23.

R&D inputs: reference pages 7 (ISBN:0472084100); total pages 114 (ISBN:0140437495). 7 / 114 = 6.14%; R&D 1.23. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **19.08 → 14.08**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-4c5f91a756c8"></a>

## The Four Pillars of Investing — William J. Bernstein

Sources: 251. Prior review: analysis/analysis_sivers_261024_1455.md#shelf-4c5f91a756c8. 

Added amazon: **1124**. [Source](https://www.amazon.com/dp/0071385290); [saved evidence](../data/value250_261102/raw/amazon-0669-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.00 | 4.90 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.40; O15 0.00; REL 0.00; RD 0.32.

R&D inputs: reference pages 5 (OL3670166M); total pages 316 (OL3670166M). 5 / 316 = 1.58%; R&D 0.32. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **53.95 → 53.95**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n7fe336bbf9"></a>

## To Save Everything, Click Here — Evgeny Morozov

Sources: 130. Prior review: analysis/analysis_metadata1000_261025_1546.md#n7fe336bbf9. 

Added amazon: **195**. [Source](https://www.amazon.com/dp/1610391381); [saved evidence](../data/value250_261102/raw/amazon-0675-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 6.00 | 3.60 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -1.30; O15 -5.00; REL 0.00; RD 1.76.

R&D inputs: reference pages 38 (ISBN:9781610391382); total pages 432 (9781610393706). 38 / 432 = 8.80%; R&D 1.76. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **53.78 → 48.78**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="rem-u0801"></a>

## Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist — Kate Raworth

Sources: 187, 263, 297. Prior review: analysis/analysis_ringsmuth_261025_2011.md#rem-u0801. 

Added amazon: **3979**. [Source](https://www.amazon.com/dp/1847941397); [saved evidence](../data/value250_261102/raw/amazon-0679-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 0.00; P14 -0.90; O15 0.00; REL 2.83; RD 2.46.

R&D inputs: reference pages 38 (OL26620534M); total pages 309 (/books/OL26620534M). 38 / 309 = 12.30%; R&D 2.46. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **53.75 → 53.75**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1096"></a>

## The Making of Europe — Robert Bartlett

Sources: 122, 290. Prior review: analysis/analysis_subcritical_261025_2011.md#g1096. 

Added amazon: **129**. [Source](https://www.amazon.com/dp/0691037809); [saved evidence](../data/value250_261102/raw/amazon-0687-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 15.00 | 13.24 |
| Transferable strategic utility | 11.00 | 11.00 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -12.00; P14 -3.30; O15 -5.00; REL 2.00; RD 1.43.

R&D inputs: reference pages 32 (OL1512583M); total pages 447 (ISBN:0691037809). 32 / 447 = 7.16%; R&D 1.43. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **53.72 → 48.72**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-a15a631096b8"></a>

## Persuasive Technology — B.J. Fogg

Sources: 258. Prior review: analysis/analysis_gallagher_261024_1455.md#shelf-a15a631096b8. 

Added amazon: **122**. [Source](https://www.amazon.com/dp/B000VO18UQ); [saved evidence](../data/value250_261102/raw/amazon-0690-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 5.95 | 5.95 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -2.30; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 283 (OL17072591M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **53.66 → 48.66**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-76ae025ff1f5"></a>

## Order Out of Chaos — Ilya Prigogine and Isabelle Stengers

Sources: 258. Prior review: analysis/analysis_metadata2_261025_1921.md#shelf-76ae025ff1f5. 

Added amazon: **66**. [Source](https://www.amazon.com/dp/0553343637); [saved evidence](../data/value250_261102/raw/amazon-0691-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.65 | 7.65 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 -10.00; H13 0.00; P14 -4.70; O15 -10.00; REL 0.00; RD 1.15.

R&D inputs: reference pages 20 (GoogleBooks:w6GyDQAAQBAJ); total pages 349 (OL22157191M). 20 / 349 = 5.73%; R&D 1.15. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **53.65 → 43.65**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelves-superthinking"></a>

## Super Thinking: The Big Book of Mental Models — Gabriel Weinberg; Lauren McCann

Sources: 294. Prior review: analysis/analysis_karpathy_261025_2011.md#shelves-superthinking. 

Added amazon: **1232**. [Source](https://www.amazon.com/dp/0525542817); [saved evidence](../data/value250_261102/raw/amazon-0696-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 6.50 | 4.23 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.70; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 352 (ISBN:9780525533580 hardcover). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **53.59 → 53.59**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="progress-0518"></a>

## Saint-Exupery — Stacy Schiff

Sources: 232. Prior review: analysis/analysis_metadata1000_261025_1546.md#progress-0518. 

Added amazon: **149**. [Source](https://www.amazon.com/dp/0805079130); [saved evidence](../data/value250_261102/raw/amazon-0697-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 0.00; H13 -3.28; P14 -3.20; O15 -5.00; REL 0.00; RD 0.15.

R&D inputs: reference pages 4 (OL1009325M); total pages 544 (/books/OL9757435M). 4 / 544 = 0.74%; R&D 0.15. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **53.53 → 48.53**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="q0978"></a>

## The Divide — Jason Hickel

Sources: 9. Prior review: analysis/analysis_scorebonus_261024_0106.md#q0978. 

Added amazon: **503**. [Source](https://www.amazon.com/dp/1785151126); [saved evidence](../data/value250_261102/raw/amazon-0699-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 11.00 | 6.05 |
| Systems integration | 15.58 | 14.28 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.76 | 7.76 |
| Information density | 7.00 | 4.90 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.90; O15 -5.00; REL 0.00; RD 2.42.

R&D inputs: reference pages 42 (OL26945470M); total pages 347 (ISBN:1786090031). 42 / 347 = 12.10%; R&D 2.42. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **53.52 → 48.52**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1672"></a>

## The King of Oil — Daniel Ammann

Sources: 179, 258, 261. Prior review: analysis/analysis_gallagher_261024_1455.md#rem-u1672. 

Added amazon: **1631**. [Source](https://www.amazon.com/dp/0312570740); [saved evidence](../data/value250_261102/raw/amazon-0704-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 7.00 | 7.00 |
| Direct domain fit | 5.00 | 5.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -1.00; P14 -1.70; O15 0.00; REL 2.83; RD 0.93.

R&D inputs: reference pages 14 (GoogleBooks:0iT5MZqDd5gC); total pages 302 (/books/OL23235138M). 14 / 302 = 4.64%; R&D 0.93. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **53.45 → 53.45**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1839"></a>

## The Transformation of War — Martin van Creveld

Sources: 193. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1839. 

Added amazon: **112**. [Source](https://www.amazon.com/dp/0029331552); [saved evidence](../data/value250_261102/raw/amazon-0714-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 13.00 | 9.94 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -3.50; O15 -5.00; REL 0.00; RD 1.18.

R&D inputs: reference pages 15 (OL1886001M); total pages 254 (/books/OL36189625M). 15 / 254 = 5.91%; R&D 1.18. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **53.27 → 48.27**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0602"></a>

## Ice Age — John Gribbin; Mary Gribbin

Sources: 118, 164, 303. Prior review: analysis/analysis_elitescience_261025_2011.md#g0602. 

Added amazon: **309**. [Source](https://www.amazon.com/dp/1511926422); [saved evidence](../data/value250_261102/raw/amazon-0719-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 -10.00; T12 0.00; H13 0.00; P14 -2.50; O15 -5.00; REL 2.83; RD 0.58.

R&D inputs: reference pages 3 (OL18479403M); total pages 104 (OL20591787M). 3 / 104 = 2.88%; R&D 0.58. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **52.52 → 47.52**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-b24cdf1309e3"></a>

## The Minimalist Entrepreneur — Sahil Lavingia

Sources: 251. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-b24cdf1309e3. 

Added amazon: **764**. [Source](https://www.amazon.com/dp/0593192397); [saved evidence](../data/value250_261102/raw/amazon-0720-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 12.00 | 7.20 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 10.50 | 10.50 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 7.00 | 4.90 |
| Durability | 6.30 | 6.30 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 0.00; P14 -0.50; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 256 (GoogleBooks:H086zgEACAAJ). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **52.52 → 47.52**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="intake-0323"></a>

## The Medieval Origins of the Legal Profession — James A. Brundage

Sources: 214. Prior review: analysis/analysis_metadata2_261025_1921.md#intake-0323. 

Added amazon: **7**. [Source](https://www.amazon.com/dp/0226077608); [saved evidence](../data/value250_261102/raw/amazon-0721-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 18.00 | 16.20 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 7.00 | 7.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -12.00; P14 -1.80; O15 -20.00; REL 0.00; RD 3.07.

R&D inputs: reference pages 86 (GoogleBooks:VBj3ltusTSoC); total pages 560 (/books/OL10191624M). 86 / 560 = 15.36%; R&D 3.07. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **52.48 → 32.48**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u0495"></a>

## Every Living Thing: The Great and Deadly Race to Know All Life — Jason Roberts

Sources: 182. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u0495. 

Added amazon: **227**. [Source](https://www.amazon.com/dp/1984855204); [saved evidence](../data/value250_261102/raw/amazon-0722-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -9.52; P14 -0.20; O15 -5.00; REL 0.00; RD 0.37.

R&D inputs: reference pages 8 (GoogleBooks:ik9KEQAAQBAJ); total pages 432 (/books/OL60885116M). 8 / 432 = 1.85%; R&D 0.37. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **52.47 → 47.47**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1169"></a>

## Buffett — Roger Lowenstein

Sources: 123, 148, 261. Prior review: analysis/analysis_founders_261024_1455.md#g1169. 

Added amazon: **1377**. [Source](https://www.amazon.com/dp/0812979273); [saved evidence](../data/value250_261102/raw/amazon-0725-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 6.00 | 3.60 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 2.00 | 2.00 |

T11 0.00; T12 -10.00; H13 -1.28; P14 -3.10; O15 0.00; REL 2.83; RD 1.45.

R&D inputs: reference pages 35 (OL24909540M); total pages 482 (ISBN:0812979273). 35 / 482 = 7.26%; R&D 1.45. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **52.42 → 52.42**; Low priority. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="complete-346-291"></a>

## The Billion Dollar Spy — David E. Hoffman

Sources: 276. Prior review: analysis/analysis_metadata1000_261025_1546.md#complete-346-291. 

Added amazon: **6624**. [Source](https://www.amazon.com/dp/0385537603); [saved evidence](../data/value250_261102/raw/amazon-0746-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.50 | 5.63 |
| Durability | 9.00 | 9.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 -1.64; P14 -1.10; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 625 (ISBN:9781410482891). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **52.16 → 52.16**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-6d5d57474088"></a>

## Mastermind: How to Think Like Sherlock Holmes — Maria Konnikova

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-6d5d57474088. 

Added amazon: **1465**. [Source](https://www.amazon.com/dp/0670026573); [saved evidence](../data/value250_261102/raw/amazon-0748-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 9.35 | 5.14 |
| Transferable strategic utility | 9.75 | 9.75 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 6.50 | 4.23 |
| Durability | 6.75 | 6.75 |
| Direct domain fit | 3.15 | 3.15 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.30; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 288 (OL29144348M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **52.12 → 52.12**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-6b7635bd8e6b"></a>

## Don’t Sleep, There Are Snakes — Daniel Everett

Sources: 259, 290. Prior review: analysis/analysis_subcritical_261025_2011.md#shelf-6b7635bd8e6b. 

Added amazon: **1127**. [Source](https://www.amazon.com/dp/0307386120); [saved evidence](../data/value250_261102/raw/amazon-0749-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 10.20 | 6.12 |
| Transferable strategic utility | 7.50 | 7.50 |
| Mechanistic and causal depth | 7.20 | 7.20 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 2.10 | 2.10 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.40 | 1.40 |

T11 0.00; T12 0.00; H13 -0.72; P14 -1.80; O15 0.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 283 (OL16797242M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **52.10 → 52.10**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="n2b3d6fd6c8"></a>

## The Sirens' Call — Chris Hayes

Sources: 141, 272. Prior review: analysis/analysis_ezrascience_261024_2307.md#n2b3d6fd6c8. 

Added amazon: **1230**. [Source](https://www.amazon.com/dp/B0DDNGLSJP); [saved evidence](../data/value250_261102/raw/amazon-0750-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 -10.00; H13 0.00; P14 -0.10; O15 0.00; REL 2.00; RD 2.02.

R&D inputs: reference pages 34 (GoogleBooks:m1GREQAAQBAJ); total pages 336 (ISBN:9780593653135). 34 / 336 = 10.12%; R&D 2.02. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **52.09 → 52.09**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g1152"></a>

## Stress Test — Timothy F. Geithner

Sources: 123, 148, 150, 207, 293. Prior review: analysis/analysis_mcateer_261025_2011.md#g1152. 

Added amazon: **1452**. [Source](https://www.amazon.com/dp/0804138613); [saved evidence](../data/value250_261102/raw/amazon-0752-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 14.00 | 11.53 |
| Transferable strategic utility | 12.00 | 12.00 |
| Mechanistic and causal depth | 10.00 | 10.00 |
| Information density | 5.00 | 2.50 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 6.00 | 6.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 -0.52; P14 -1.20; O15 0.00; REL 4.00; RD 0.47.

R&D inputs: reference pages 14 (ISBN:9780804138611); total pages 592 (ISBN:0804138613). 14 / 592 = 2.36%; R&D 0.47. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **52.08 → 52.08**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-a811a079935e"></a>

## One Buck at a Time — Macon Brock and Earl Swift

Sources: 258. Prior review: analysis/analysis_metadata1000_261025_1546.md#shelf-a811a079935e. 

Added amazon: **110**. [Source](https://www.amazon.com/dp/0895876817); [saved evidence](../data/value250_261102/raw/amazon-0754-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.90 | 8.33 |
| Transferable strategic utility | 11.25 | 11.25 |
| Mechanistic and causal depth | 9.00 | 9.00 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 5.25 | 5.25 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.25 | 2.25 |
| Authorial precision | 1.40 | 1.40 |

T11 -10.00; T12 0.00; H13 -0.40; P14 -0.90; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 216 (GoogleBooks:0fXwvQAACAAJ). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **52.08 → 47.08**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="bg7883719d4e"></a>

## The Warren Buffett CEO — Robert P. Miles

Sources: 150. Prior review: analysis/analysis_scorebonus_261024_0106.md#bg7883719d4e. 

Added amazon: **24**. [Source](https://www.amazon.com/dp/0471442593); [saved evidence](../data/value250_261102/raw/amazon-0762-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.50 | 3.50 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 2.00 | 2.00 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 -1.00; P14 -2.50; O15 -10.00; REL 0.00; RD 0.74.

R&D inputs: reference pages 16 (OL3581271M); total pages 432 (ISBN:0471430455). 16 / 432 = 3.70%; R&D 0.74. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **51.97 → 41.97**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="bg6f8b82a443"></a>

## The Ten Commandments for Business Failure — Donald R. Keough

Sources: 150. Prior review: analysis/analysis_scorebonus_261024_0106.md#bg6f8b82a443. 

Added amazon: **369**. [Source](https://www.amazon.com/dp/1591844134); [saved evidence](../data/value250_261102/raw/amazon-0767-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 13.00 | 8.45 |
| Systems integration | 7.00 | 2.88 |
| Transferable strategic utility | 10.00 | 10.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 2.50 | 2.50 |
| Authorial precision | 1.50 | 1.50 |

T11 0.00; T12 0.00; H13 0.00; P14 -1.80; O15 -5.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 208 (9781591844136). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **51.93 → 46.93**; Poor fit. Content confidence retained: moderate. Content assessments were not rerated in this metadata update.

<a id="shelf-9518ba96f9ad"></a>

## The Book of Elon: Elon Musk's Most Useful Ideas in His Own Words — Eric Jorgenson

Sources: 261, 276. Prior review: analysis/analysis_misiti_261024_2325.md#shelf-9518ba96f9ad. 

Added amazon: **401**. [Source](https://www.amazon.com/dp/1544550758); [saved evidence](../data/value250_261102/raw/amazon-0776-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 11.00 | 6.05 |
| Systems integration | 11.05 | 7.18 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 6.60 | 6.60 |
| Information density | 5.50 | 3.03 |
| Durability | 5.85 | 5.85 |
| Direct domain fit | 5.60 | 5.60 |
| Expert authority | 3.25 | 3.25 |
| Narrative architecture | 2.10 | 2.10 |
| Authorial precision | 1.20 | 1.20 |

T11 0.00; T12 0.00; H13 0.00; P14 0.00; O15 -5.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 400 (ISBN:154455074X). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **51.86 → 46.86**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-de55affc0c70"></a>

## The English and Their History — Robert Tombs

Sources: 258, 290, 300. Prior review: analysis/analysis_subcritical_261025_2011.md#shelf-de55affc0c70. 

Added amazon: **1566**. [Source](https://www.amazon.com/dp/1101873361); [saved evidence](../data/value250_261102/raw/amazon-0778-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 13.60 | 10.88 |
| Transferable strategic utility | 9.75 | 9.75 |
| Mechanistic and causal depth | 8.40 | 8.40 |
| Information density | 7.50 | 5.63 |
| Durability | 8.10 | 8.10 |
| Direct domain fit | 4.20 | 4.20 |
| Expert authority | 4.50 | 4.50 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.60 | 1.60 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -1.20; O15 0.00; REL 2.83; RD 1.96.

R&D inputs: reference pages 99 (ISBN:9781101873366); total pages 1012 (OL31300027M). 99 / 1012 = 9.78%; R&D 1.96. Estimate: editions differ or matching is unconfirmed. Ratio confidence: low.

Score **51.84 → 51.84**; Low priority. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1870"></a>

## Leadership: Six Studies in World Strategy — Henry Kissinger

Sources: 193. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1870. 

Added amazon: **1348**. [Source](https://www.amazon.com/dp/0593489446); [saved evidence](../data/value250_261102/raw/amazon-0680-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 6.00 | 6.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 5.00 | 5.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.40; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 528 (/books/OL40314712M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **40.45 → 40.45**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="g0772"></a>

## The Man Without a Face — Masha Gessen

Sources: 119, 276. Prior review: analysis/analysis_misiti_261024_2307.md#g0772. 

Added amazon: **2071**. [Source](https://www.amazon.com/dp/1594488428); [saved evidence](../data/value250_261102/raw/amazon-0716-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 14.00 | 9.80 |
| Systems integration | 11.00 | 7.12 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.00 | 4.90 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 -0.60; P14 -1.40; O15 0.00; REL 2.00; RD 1.02.

R&D inputs: reference pages 16 (OL25116038M); total pages 314 (ISBN:1594488428). 16 / 314 = 5.10%; R&D 1.02. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **38.34 → 38.34**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="q1024"></a>

## Less Is More — Jason Hickel

Sources: 9, 297. Prior review: analysis/analysis_ringsmuth_261025_2011.md#q1024. 

Added amazon: **968**. [Source](https://www.amazon.com/dp/1786091216); [saved evidence](../data/value250_261102/raw/amazon-0699-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 11.00 | 6.05 |
| Systems integration | 14.17 | 11.81 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 7.76 | 7.76 |
| Information density | 7.00 | 4.90 |
| Durability | 6.00 | 6.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 3.00 | 3.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.00 | 1.00 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.60; O15 -5.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 320 (OL29518280M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **37.92 → 32.92**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1275"></a>

## The Witches: Salem, 1692 — Stacy Schiff

Sources: 199. Prior review: analysis/analysis_scorebonus_261024_0106.md#rem-u1275. 

Added amazon: **2034**. [Source](https://www.amazon.com/dp/0316200603); [saved evidence](../data/value250_261102/raw/amazon-0697-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 17.00 | 14.45 |
| Systems integration | 10.00 | 5.88 |
| Transferable strategic utility | 8.00 | 8.00 |
| Mechanistic and causal depth | 7.00 | 7.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 3.00 | 3.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 0.00; H13 -12.00; P14 -1.10; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 512 (/books/OL29734611M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **37.36 → 37.36**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="shelf-a96ebface863"></a>

## Empireland: How Imperialism Has Shaped Modern Britain — Sathnam Sanghera

Sources: 263. Prior review: analysis/analysis_mchale_261024_1455.md#shelf-a96ebface863. 

Added amazon: **2568**. [Source](https://www.amazon.com/dp/0241445299); [saved evidence](../data/value250_261102/raw/amazon-0707-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 15.00 | 11.25 |
| Systems integration | 11.05 | 7.18 |
| Transferable strategic utility | 8.25 | 8.25 |
| Mechanistic and causal depth | 6.60 | 6.60 |
| Information density | 7.00 | 4.90 |
| Durability | 7.20 | 7.20 |
| Direct domain fit | 3.15 | 3.15 |
| Expert authority | 3.75 | 3.75 |
| Narrative architecture | 2.40 | 2.40 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 0.00; P14 -0.50; O15 0.00; REL 0.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 306 (OL32194760M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **35.68 → 35.68**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1312"></a>

## The Storm Before the Storm: The Beginning of the End of the Roman Republic — Mike Duncan

Sources: 199, 289. Prior review: analysis/analysis_nikomc_261025_2011.md#rem-u1312. 

Added amazon: **4438**. [Source](https://www.amazon.com/dp/1610397215); [saved evidence](../data/value250_261102/raw/amazon-0768-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 12.00 | 8.47 |
| Transferable strategic utility | 9.00 | 9.00 |
| Mechanistic and causal depth | 8.00 | 8.00 |
| Information density | 8.00 | 6.40 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 4.00 | 4.00 |
| Expert authority | 3.50 | 3.50 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 -12.00; P14 -0.90; O15 0.00; REL 2.00; RD 0.00.

R&D inputs: reference pages unknown (edition unknown); total pages 352 (/books/OL34901970M). Missing total-page or reference-page count: explicit zero R&D fallback. Ratio confidence: unknown.

Score **33.77 → 33.77**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

<a id="rem-u1376"></a>

## Cleopatra: A Life — Stacy Schiff

Sources: 201, 263, 301. Prior review: analysis/analysis_czarandy_261025_2011.md#rem-u1376. 

Added amazon: **2453**. [Source](https://www.amazon.com/dp/0316120448); [saved evidence](../data/value250_261102/raw/amazon-0697-parallel-fast-fresh.json). Indexed Amazon product snapshot; original snapshot date not supplied. Retrieved 2026-11-01. Count is the explicit total rating aggregate for one product; not written reviews, not summed across products. Live current count, stock and other editions are unverified.

| Criterion | Linear attainment | Contribution |
|---|---:|---:|
| Evidence and inferential integrity | 16.00 | 12.80 |
| Systems integration | 9.00 | 4.76 |
| Transferable strategic utility | 6.00 | 6.00 |
| Mechanistic and causal depth | 5.00 | 5.00 |
| Information density | 7.50 | 5.63 |
| Durability | 8.00 | 8.00 |
| Direct domain fit | 2.00 | 2.00 |
| Expert authority | 4.00 | 4.00 |
| Narrative architecture | 3.00 | 3.00 |
| Authorial precision | 1.50 | 1.50 |

T11 -10.00; T12 -10.00; H13 -12.00; P14 -1.60; O15 0.00; REL 2.83; RD 0.16.

R&D inputs: reference pages 3 (OL24383354M); total pages 368 (OL24080962M). 3 / 368 = 0.82%; R&D 0.16. Both counts come from the same catalog record. Ratio confidence: moderate.

Score **22.08 → 22.08**; Poor fit. Content confidence retained: low. Content assessments were not rerated in this metadata update.

