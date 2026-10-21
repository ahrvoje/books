The Year of Open Science: Computer science - MIT Press (https://mitpress.mit.edu/the-year-of-open-science-computer-science/)
citeturn2586search0 [wordlim: 200] Published: 3.4 years ago; Crawled: 2 months ago; In Reinforcement Learning, Richard Sutton and Andrew Barto provide a clear and simple account of the field’s key ideas and algorithms. ... End-of-chapter exercises allow students to apply what they have learned, and an appendix covers notation.
“The MIT Press has a rich history of publishing landmark books from thought leaders in the field of computer science. Legacy titles include Structure and Interpretation of Computer Programs (first edition published in 1984, second edition published in 1996; JavaScript edition published in 2022), Reinforcement Learning (first edition published in 1998, second edition in 2018), and How to Design Programs (first edition published in 2001, and the second in 2017). More recently the computer science list has published Deep Learning (2016), Probabilistic Machine Learning: An Introduction (2022), and Essentials of Compilation (2023). All these books rely on open science to ensure excellence since the community is part of the process of building these landmark books, from stress-testing code, to catching technical errors, to test driving drafts in courses.”

Read on to explore several books from Elizabeth’s list, and discover even more computer science titles on our website.

* * *

### Structure and Interpretation of Computer Programs: JavaScript Edition by Harold Abelson, Gerald Jay Sussman, Martin Henz and Tobias Wrigstad

Since the publication of its first edition in 1984 and its second edition in 1996, Structure and Interpretation of Computer Programs (SICP) has influenced computer science curricula around the world. Widely adopted as a textbook, the book has its origins in a popular entry-level computer science course taught by Harold Abelson and Gerald Jay Sussman at MIT. SICP introduces the reader to central ideas of computation by establishing a series of mental models for computation. Earlier editions used the programming language Scheme in their program examples. This edition has been adapted to JavaScript.

* * *

### Reinforcement Learning, Second Edition: An Introduction by Richard S. Sutton and Andrew G. Barto

Reinforcement learning, one of the most active research areas in artificial intelligence, is a computational approach to learning whereby an agent tries to maximize the total amount of reward it receives while interacting with a complex, uncertain environment. In Reinforcement Learning, Richard Sutton and Andrew Barto provide a clear and simple account of the field’s key ideas and algorithms. This second edition has been significantly expanded and updated, presenting new topics and updating coverage of other topics.

* * *

### Deep Learning by Ian Goodfellow, Yoshua Bengio and Aaron Courville

Deep learning is a form of machine learning that enables computers to learn from experience and understand the world in terms of a hierarchy of concepts. Because the computer gathers knowledge from experience, there is no need for a human computer operator to formally specify all the knowledge that the computer needs. The hierarchy of concepts allows the computer to learn complicated concepts by building them out of simpler ones; a graph of these hierarchies would be many layers deep. This book introduces a broad range of topics in deep learning. 

This book is available in an open access edition on the authors’ website.

* * *

### Probabilistic Machine Learning: An Introduction by Kevin P. Murphy

This book offers a detailed and up-to-date introduction to machine learning (including deep learning) through the unifying lens of probabilistic modeling and Bayesian decision theory. The book covers mathematical background (including linear algebra and optimization), basic supervised learning (including linear and logistic regression and deep neural networks), as well as more advanced topics (including transfer learning and unsupervised learning). End-of-chapter exercises allow students to apply what they have learned, and an appendix covers notation.

* * *--------------------------------------------------------------------------------
Reinforcement Learning: (https://www.incompleteideas.net/book/bookdraft2018mar21.pdf)
citeturn2586search2 [wordlim: 200] Published: 8 months ago; Some exercises are also marked with a ∗to indicate that they are more advanced and ... and artiﬁcial intelligence that launched our long excursion into reinforcement learning. ... Barto, a recent Ph.D. from ... while, Sutton, an undergraduate studying computer science and psychology at Stanford,
Preface to the Second Edition
xi
learning or neural networks should cover Chapters 9 and 10, and a course focusing on
artiﬁcial intelligence or planning should cover Chapter 8. Throughout the book, sections
and chapters that are more diﬃcult and not essential to the rest of the book are marked
with a ∗. These can be omitted on ﬁrst reading without creating problems later on.
Some exercises are also marked with a ∗to indicate that they are more advanced and
not essential to understanding the basic material of the chapter.
Most chapters end with a section entitled “Bibliographical and Historical Remarks,”
wherein we credit the sources of the ideas presented in that chapter, provide pointers
to further reading and ongoing research, and describe relevant historical background.
Despite our attempts to make these sections authoritative and complete, we have un-
doubtedly left out some important prior work. For that we again apologize, and we
welcome corrections and extensions for incorporation into the electronic version of the
Harry
was instrumental in obtaining funding from AFOSR for a project to assess the scientiﬁc
merit of these and related ideas. This project was conducted in the late 1970s at the
University of Massachusetts Amherst (UMass Amherst), initially under the direction
of Michael Arbib, William Kilmer, and Nico Spinelli, professors in the Department of
Computer and Information Science at UMass Amherst, and founding members of the Cy-
bernetics Center for Systems Neuroscience at the University, a farsighted group focusing
on the intersection of neuroscience and artiﬁcial intelligence. Barto, a recent Ph.D. from
the University of Michigan, was hired as post doctoral researcher on the project. Mean-
while, Sutton, an undergraduate studying computer science and psychology at Stanford,
had been corresponding with Harry regarding their mutual interest in the role of stim-
ulus timing in classical conditioning. Harry suggested to the UMass group that Sutton
would be a great addition to the project. Thus, Sutton became a UMass graduate stu-
dent, whose Ph.D. was directed by Barto, who had become an Associate Professor. The
study of reinforcement learning as presented in this book is rightfully an outcome of that
project instigated by Harry and inspired by his ideas. Further, Harry was responsible
for bringing us, the authors, together in what has been a long and enjoyable interaction.
By dedicating this book to Harry we honor his essential contributions, not only to the
ﬁeld of reinforcement learning, but also to our collaboration. We also thank Professors
Arbib, Kilmer, and Spinelli for the opportunity they provided to us to begin exploring
these ideas. Finally, we thank AFOSR for generous support over the early years of our--------------------------------------------------------------------------------
Challenges and Opportunities for Statistics in the Era of Data Science · Issue 7.2, Spring 2025 (https://hdsr.mitpress.mit.edu/pub/ufaltur6/release/2)
citeturn2586search1 [wordlim: 200] Published: 1.4 years ago; Crawled: yesterday; Finally, reinforcement learning (RL) is a rapidly evolving field that has gained attention for its ability to tackle complex decision-making problems across various domains (Mnih et al., 2015; Sutton & Barto, 2018; Wurman et al., 2022). ... Fundamentals of high-dimensional statistics: With exercises and R labs.
## 5.4. Statistics and Computation

There are numerous computational challenges in data science, including large-scale and heterogeneous data, over-parameterized models, and sequential decision-making. These concerns motivate the design of new methods and associated theoretical guarantees, and require combining statistical principles and techniques with concepts from other fields, including computing, optimization, numerics, and dynamical systems. In the following, we highlight four concrete topics where statistics can help with computation: subsampling, deep learning, loss functions, and reinforcement learning. Computational cost has been a growing concern in terms of designing and computing a statistical estimator $\hat \theta_n$θ^n​ based on a sample of size n. In the current big data era, both n and the number of unknown parameters p can be very large. The compounded effect can render standard statistical procedures like linear regression infeasible to compute. For example, to fit a LASSO (least absolute shrinkage and selection operator) regression, with $p\sim n/2$p∼n/2 (say) using the LARS (least angle regression) algorithm would require $O(n^3)$O(n 3) operations (Efron et al., 2004), which can be prohibitive.
One is to learn the best loss function (from a parameterized family) jointly with a predictive model. A second one (Barron, 2019) is to design loss functions that facilitate generalization under distributional shift (Latinne et al., 2001). A third one is to develop loss functions for extreme classification (classification with a huge number of classes), where existing loss functions based on the conventional one-hot label encoding, such as cross entropy, are computationally inefficient (J. Zhang & Scott, 2023). Finally, the use of cross-entropy itself as the go-to loss function for classification deserves careful scrutiny in light of both statistical and computational considerations (Hui et al., 2023).

Finally, reinforcement learning (RL) is a rapidly evolving field that has gained attention for its ability to tackle complex decision-making problems across various domains (Mnih et al., 2015; Sutton & Barto, 2018; Wurman et al., 2022). Its appeal lies in the potential to enable machines to learn and make decisions akin to humans by leveraging experience. Information Systems, 114, Article 102177. https://doi.org/10.1016/j.is.2023.102177

Agarwal, R., Schwarzer, M., Castro, P. S., Courville, A. C., & Bellemare, M. (2021). Deep reinforcement learning at the edge of the statistical precipice. Advances In Neural Information Processing Systems, 34, Article 2244. https://proceedings.neurips.cc/paper_files/paper/2021/file/f514cec81cb148559cf475e7426eed5e-Paper.pdf

Agenis-Nevers, M., Bokde, N. D., Yaseen, Z. M., & Shende, M. K. (2021). An empirical estimation for time and memory algorithm complexities: Newly developed R package. Multimedia Tools and Applications, 80(2), 2997 – 3015. https://doi.org/10.1007/s11042-020-09471-8

Regulation 1689/2024. Laying down harmonised rules on rtificial intelligence and amending Regulations (EC) No 300/2008, (EU) No 167/2013, (EU) No 168/2013, (EU) 2018/858, (EU) 2018/1139 and (EU) 2019/2144 and Directives 2014/90/EU, (EU) 2016/797 and (EU) 2020/1828 (Artificial Intelligence Act). 298–305). Morgan Kaufmann Publishers Inc. https://doi.org/10.5555/645530.655676

Lattimore, T., Hutter, M., & Sunehag, P. (2013). The sample-complexity of general reinforcement learning. In S. Dasgupta, & D. McAllester (Eds.), Proceedings of the 30th international conference on machine learning (Vol. 28, pp. 28–36). Proceedings of Machine Learning Research. https://proceedings.mlr.press/v28/lattimore13.html

LeBlanc, P. M., Banks, D., Fu, L., Li, M., Tang, Z., & Wu, Q. (2024). Recommender systems: A review. Journal of the American Statistical Association, 119(545), 773–785. https://doi.org/10.1080/01621459.2023.2279695

Lederer, J. (2022). Fundamentals of high-dimensional statistics: With exercises and R labs. Springer. https://doi.org/10.1007/978-3-030-73792-4

Lederer, J. (2024). Statistical guarantees for sparse deep learning. AStA Advances in Statistical Analysis, 108(2), 231–258. https://doi.org/10.1007/s10182-022-00467-3
Reinhart, M. D., & Genovese, C. R. (2021). Expanding the scope of statistical computing: Training statisticians to be software engineers. Journal of Statistics and Data Science Education, 29(sup1), S7–S15. https://doi.org/10.1080/10691898.2020.1845109

Rivasplata, O., Kuzborskij, I., Szepesvári, C., & Shawe-Taylor, J. (2020). PAC-Bayes analysis beyond the usual bounds. Advances in Neural Information Processing Systems, 33, 16833–16845. https://proceedings.neurips.cc/paper/2020/hash/c3992e9a68c5ae12bd18488bc579b30d-Abstract.html

Rolínek, M., Zietlow, D., & Martius, G. (2019). Variational Autoencoders pursue PCA directions (by accident). In Proceedings of the 2019 IEEE/CVF conference on computer vision and pattern recognition, (pp. 12398–12407). IEEE. https://doi.org/10.1109/CVPR.2019.01269

Rowland, M., Dadashi, R., Kumar, S., Munos, R., Bellemare, M. G., & Dabney, W. (2019). Statistics and samples in distributional reinforcement learning. Stodden, V., Seiler, J., & Ma, Z. (2018). An empirical analysis of journal policy effectiveness for computational reproducibility. Proceedings of the National Academy of Sciences, 115(11), 2584–2589. https://doi.org/10.1073/pnas.1708290115

Sutton, R. S., & Barto, A. G. (2018). Reinforcement learning: An introduction. MIT Press.

Taheri, M., Lim, N., & Lederer, J. (2022). Balancing statistical and computational precision: A general theory and applications to sparse regression. IEEE Transactions on Information Theory, 69(1), 316–333. https://doi.org/10.1109/TIT.2022.3203857

Taheri, M., Xie, F., & Lederer, J. (2021). Statistical guarantees for regularized neural networks. Neural Networks, 142, 148–161. https://doi.org/10.1016/j.neunet.2021.04.034

Tiapkin, D., Belomestny, D., Calandriello, D., Moulines, E., Munos, R., Naumov, A., Rowland, M., Valko, M., & Ménard, P. (2022). Optimistic posterior sampling for reinforcement learning with few samples and tight guarantees. Netherlands Organization for Applied Scientific Research.

van Hasselt, H., Guez, A., & Silver, D. (2016). Deep reinforcement learning with double Q-learning. Proceedings of the AAAI Conference on Artificial Intelligence, 30(1). https://doi.org/10.1609/aaai.v30i1.10295

van’t Veer, L. J., & Bernards, R. (2008). Enabling personalized cancer medicine through analysis of gene-expression patterns. Nature, 452(7187), 564–570. https://doi.org/10.1038/nature06915

van’t Veer, L. J., Dai, H., Van De Vijver, M. J., He, Y. D., Hart, A. A., Mao, M., Peterse, H. L., Van Der Kooy, K., Marton, M. J., Witteveen, A. T., Schreiber, G. J., Kerkhoven, C. R., Linsley, P. S., Bernard, R., & Friend, S. H. (2002). Gene expression profiling predicts clinical outcome of breast cancer. Nature, 415(6871), 530–536. https://doi.org/10.1038/415530a

Vapnik, V. N. (1998). Statistical learning theory. Wiley.

Vincent, B. T., & Rainforth, T. (2017). The DARC Toolbox: Automated, flexible, and efficient delayed and risky choice experiments using Bayesian adaptive design. PsyArXiv. https://doi.org/10.31234/osf.io/yehjb

Wald, A. (1939). Contributions to the theory of statistical estimation and testing hypotheses. The Annals of Mathematical Statistics, 10(4), 299 –326. https://doi.org/10.1214/aoms/1177732144

In M. Belkin, & S. Kpotufe (Eds.), Proceedings of thirty fourth conference on learning theory (Vol. 134, pp. 4300–4354). Proceedings of Machine Learning Research. https://proceedings.mlr.press/v134/wei21b.html

Wen, Z., Precup, D., Ibrahimi, M., Barreto, A., Van Roy, B., & Singh, S. (2020). On efficiency in hierarchical reinforcement learning. Advances in Neural Information Processing Systems, 33, 6708–6718. https://proceedings.neurips.cc/paper/2020/hash/4a5cfa9281924139db466a8a19291aff-Abstract.html

Westphal, M., & Brannath, W. (2020). Evaluation of multiple prediction models: A novel view on model selection and performance assessment. Statistical Methods in Medical Research, 29(6), 1728–1745. https://doi.org/10.1177/0962280219854487

Westphal, M., & Brannath, W. (2019). Improving model selection by employing the test data. In K. Chaudhuri, & R. Salakhutdinov (Eds.), Proceedings of the 36th international conference on machine learning (Vol. 97, pp. 
