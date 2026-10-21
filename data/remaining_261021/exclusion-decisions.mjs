// Each decision is subject to a source/metadata evidence check before publication.
const rows=[];
const add=(ids,rule,reason)=>ids.split(' ').forEach(batchId=>rows.push({batchId,rule,reason,confidence:'high'}));
add('u0323','H2','The BNFA library classifies Gallo’s Le Chant du départ, first Napoleon volume, as a historical novel. Historical subjects and English translation possibilities do not override fiction.');
for(const [batchId,reason] of [
 ['u0275','Only German editions were found in publisher, author bibliography and library evidence. The English-looking title does not establish an English edition; searches for English and Croatian translations found none. Reassess if a qualifying edition is identified.'],
 ['u0312','Fayard identifies the French 2016 work. Author bibliographies and translation searches did not identify an English or Croatian edition. The English Zoonoses and Emergence of Infectious Diseases are different books, not verified translations of this title.'],
 ['u0322','The verified XO edition is French. Its English-language marketing page retains the same French ISBN and does not document an English translation. No English or Croatian edition was located; the partly fictional narrative presents an additional unresolved H2 concern.']
])rows.push({batchId,rule:'H4',reason,confidence:'moderate'});
add('u1225','H2','Fictionalized biography, identified as such by a specialist study of its narrative method. A real historical couple and biographical marketing do not override its fictional reconstruction.');
add('u1607','H3','An illustrated element-by-element reference centered on identifying elements, properties and examples. Its photographs and readable explanations do not change the main reference purpose.');
add('u1778','H3','The authors present a prescribed professional communication format, worked applications and a practice cheat sheet; the primary value is learning to implement the method.');
add('u1780','H3','Professional interview training centered on question design, follow-ups and procedures for eliciting stories and information.');
add('u1782 u1787','H3','Procedural storytelling or presentation training aimed at developing performance proficiency through a prescribed method, examples and practice.');
add('u1766','H3','A protocol-based operating manual centered on implementing health and performance routines. Scientific explanations support the procedures; the author confirms publication on 15 September 2026.');
add('u1686','H3','The source-linked Goodreads page identifies David J. C. MacKay’s Information Theory, Inference, and Learning Algorithms: a specialist textbook with worked methods and more than 400 exercises. Reject the unrelated title-only Quantum Information Theory search hit.');
add('u1690','H3','A professional venture-financing reference and training guide. Wiley contents cover term-sheet provisions, capitalization tables, debt, negotiation and sample legal documents; explanation supports specialist transaction proficiency.');
add('u1707','H3','A collection of technical financial-econometrics research presenting statistical methods for detecting return predictability. The main content requires specialist mathematical analysis; it is not Malkiel’s popular A Random Walk Down Wall Street.');
add('u1752','H3','A prescribed business-acquisition method: locating sellers, evaluating transactions, negotiating and operating purchased businesses. The publisher excerpt makes procedural investment proficiency the main purpose.');
add('u1760','H3','A step-by-step professional product-positioning method. The author explicitly describes five components and a ten-step implementation process in the first edition.');
add('u1764 u1781 u1883','H3','Professional sales, pitching or marketing procedure is the main purpose: prescribed scripts, presentation structure or implementation methods develop specialist commercial proficiency.');
add('u1700','H3','The central letters teach direct-response copywriting, offer construction, customer lists and selling procedures. Personal advice does not override the professional advertising-training purpose.');
add('u1808','H3','The book teaches implementation of a specific stock-selection formula and portfolio process. Clear explanations do not override the specialist investment-proficiency purpose.');
add('u1809','H3','A practical management training manual centered on hiring, meetings, feedback and operating a team. Personal anecdotes support prescribed professional procedures rather than sustained institutional history.');
add('u1816','H3','A structured customer-interview and validation procedure for startup practitioners. The primary value is applying the prescribed questioning and feedback method.');
add('u1874','H3','A practical founder curriculum from choosing a cofounder and idea through testing, building and financing a company. Professional implementation is the main purpose.');
add('u0022','H3','A prescribed five-day design/prototyping procedure is the main content; organizational examples support the procedural training.');
add('u0023 u0024 u0042','H3','Professional marketing, prospecting or funnel-building training: the main value comes from learning and applying a prescribed sales procedure.');
add('u0165 u0178 u0189 u0199 u0211 u0230 u0234 u0238','H3','Professional recruiting, business, software, investment or financial-statement curriculum/reference. The source describes tactical instruction or a structured professional method as the main purpose.');
add('u0462','H3','The nominated complete PIHKAL includes a large technical phenethylamine synthesis/reference section; its autobiographical first section does not override the specialist methods content. Ann Shulgin is a coauthor.');
add('u0505','H3','A mathematics activity book for school pupils: biographies frame curricular problems and puzzles. The author’s institutional account explicitly identifies this teaching purpose.');
add('u1173 u1377','H2','A narrative poem or literary retelling of mythic stories; this is not an analytical nonfiction history of the stories.');
add('u0759 u0794 u0796','H3','A professional rental-investment, cash-allocation or marketing implementation manual centered on applying a prescribed operational process.');
add('u0100','H2','Self-help fable about invented strangers and their billionaire mentor; a nonfiction lesson does not remove the fictional narrative gate. Publisher description confirms the story frame.');
add('u0351 u0400','H2','Invented child characters and narrative teach creativity; this is a fictional picture book.');
add('u0381','H2','The publisher describes an invented Papa based on Lodner Phillips, with an imagined family adventure. Historical inspiration does not make the narrative nonfiction.');
add('u0959 u1162 u1165 u1166 u1167 u1175 u1184 u1186 u1187 u1188 u1189 u1190 u1192 u1193 u1194 u1195 u1196 u1197 u1198 u1199 u1201 u1202 u1226 u1227 u1307 u1443 u1444 u1460 u1684 u1691 u1692 u1693 u1706 u1713 u1799 u1812 u1815 u1823','H2','Novel, fictional story collection or nominated fiction series. Historical settings, philosophical lessons and scientific subject matter do not override H2.');
add('u0168','H3','Illustrated architectural design curriculum and reference: forms, spatial organization and principles are taught for design proficiency.');
add('u0171 u0239 u1055 u1057 u1058 u1062 u1064 u1069 u1070 u1074 u1075 u1076 u1077 u1078','H3','Primary purpose is professional software design/programming training, implementation procedures or technical reference. Clear explanatory prose does not override H3.');
add('u0223','H3','Systems medicine textbook develops mathematical models of physiology and disease for technical study.');
add('u0227','H3','Specialist neuroscience textbook and reference organized around neural and biological foundations of emotion.');
add('u0345 u0356 u0361 u0363 u0369 u0377 u0384 u0393 u0426 u0432','H3','Primary content is guided making, drawing, sticker placement or construction activities and procedures; excluded before scoring under the procedural part of H3.');
add('u0455','H3','Edited mathematical research contributions honoring Halmos; specialist mathematics rather than an explanatory biography.');
add('u0487','H3','Dunham presents and reconstructs Euler’s mathematical work and proofs; historical framing does not override the technical-study exclusion.');
add('u0804 u0825 u0826 u0832 u0833 u0836 u0852 u0872 u0876','H3','Professional curriculum, competency framework, procedure manual or structured business reference is the main purpose.');
add('u1047 u1053','H3','School science practice/curriculum and study guide, not a sustained account of discoveries or mechanisms.');
add('u1052','H3','Practical star-identification and observing reference; the main purpose is proficiency in locating constellations.');
add('u1092 u1094 u1112 u1113 u1141','H3','Professional coaching/leadership practice manual centered on methods and intervention procedures.');
add('u1211 u1215 u1260','H3','Specialist valuation, macroeconomic analysis or flight training text; professional proficiency is the main purpose.');
add('u1685 u1688 u1699 u1715 u1725 u1732 u1776 u1866 u1875','H3','Technical textbook or specialist procedural/reference work: excluded before scoring regardless of authority or importance.');
export default rows;
