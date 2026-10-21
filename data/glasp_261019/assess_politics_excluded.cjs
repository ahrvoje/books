const {excluded}=require('./science_helpers.cjs');
module.exports=[
excluded('g0699',2,'A policy-analysis methods manual organized around an eightfold practical procedure and skill development.',{author:'Eugene Bardach; Eric M. Patashnik'}),
excluded('g0754',1,'A satirical novel about a television news reporter; political-media subject matter does not make it nonfiction.'),
excluded('g0770',1,'A satirical novella about an imagined intergalactic political conspiracy, not a factual insider account.',{author:'Jamie Weinstein; Will Rahn',evidence:['https://play.google.com/store/books/details/Jamie_Weinstein_The_Lizard_King?id=Elcoq1sSO5AC']}),
excluded('g0788',2,'A practical guide to debating political opponents and applying persuasion tactics; method instruction is the main purpose, so it is excluded before any ideological veto.'),
excluded('g0795',2,'A practical persuasion toolkit presented through the 2016 election. The political narrative illustrates techniques for readers to apply; instructional main purpose takes precedence over vetoes.',{confidence:'moderate'})
];
