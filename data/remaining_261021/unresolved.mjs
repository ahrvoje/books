// These are source records, not identified works. Do not score or put them in EXCLUDED_BOOKS.md.
export default [
['u1805','The Information','James Gleick and Luciano Floridi have different books with this title; the source supplies no author or product link. The user does not know the intended work.'],
['u1827','The Social Animal','Elliot Aronson’s social-psychology text and David Brooks’s narrative synthesis have different eligibility and scoring. The user does not know the intended work.'],
['u1844','Value Investing','Multiple authors and materially different books match. No author, subtitle or product link is supplied; the user cannot resolve it.'],
['u1885','Improv','A generic shorthand without author or subtitle; candidate works cannot safely be distinguished. The user cannot resolve it.'],
['u1745','How to Tell a Story','The Moth’s training book and Mark Twain’s essay/collection share this title. Source context does not select one.'],
['u1786','Supercommunicator','Frank J. Pietrucha’s singular title and a possible shorthand for Charles Duhigg’s Supercommunicators are both plausible; no author or link resolves the spelling.'],
['u1791','The Avoidable War','Kevin Rudd and J. Kenneth Brody wrote distinct works with this title. No source detail selects one.'],
['u1811','The Man Who Knew the Future','No source-linked bibliographic identity was established. A recent Leonardo novel, a prophetic diary and possible mistaken titles are not safe substitutions.'],
['u1818','The New Venturers','John W. Wilson’s venture-capital history and Phyllis Bentley’s historical fiction share the title. The source supplies no author.'],
['u1851',"You’re Invited",'Jon Levy’s nonfiction and Amanda Jayatissa’s novel share the title. The source supplies no author or subtitle.'],
['u1881','Touchy Feely','Likely shorthand for Stanford’s Interpersonal Dynamics course, placed near Connect, but published books with similar names also exist. Do not turn the course guess into a book or a fiction exclusion.'],
['u1722','Complexity Economics, Beinhocker','Beinhocker has essays on complexity economics and the book The Origin of Wealth. The source does not identify which object it means; do not add the book by inference.']
].map(([batchId,title,reason])=>({batchId,title,status:'unresolved identity',confidence:'unknown',reason}));
