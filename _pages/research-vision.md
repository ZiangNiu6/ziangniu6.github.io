---
layout: single
title: "Research Vision"
permalink: /research-vision/
author_profile: true
---

I place equal weight on developing new statistical methodology and making it usable in the scientific settings that motivate it. Both are central to my research: advancing statistical ideas and translating those advances into tools that directly improve how scientists design experiments, analyze data, and draw conclusions.

Statistics has long developed through a close relationship with practice. Scientific challenges generate fundamental statistical questions, while statistical advances help other disciplines build more rigorous approaches to evidence. I see this exchange as essential to the field’s future. Engagement with applications shapes the questions worth asking, the assumptions worth studying, and the standards by which a method should be evaluated.

Rapid advances in AI give this relationship renewed urgency. AI tools can help researchers without specialized statistical training carry out increasingly sophisticated analyses. This creates valuable opportunities, but producing an analysis and establishing its statistical soundness remain distinct challenges. An analysis can run successfully and yield convincing results even when its assumptions are inappropriate or its uncertainty is poorly quantified. As the ability to perform complex analyses expands, we need methods and tools that make statistically justified decisions equally accessible.

<figure class="research-vision-diagram">
  <img src="{{ '/images/research-vision-venn.svg' | relative_url }}?v={{ site.time | date: '%s' }}" width="600" height="540" alt="Impact and adoption at the intersection of statistical innovation, scientific importance, and practical utility.">
</figure>

Concretely, my research balances three complementary priorities: statistical innovation, scientific importance, and practical utility.

**Statistical Innovation.** I aim to develop new statistical ideas that overcome important limitations of existing methods. This includes improving the reliability of inference under realistic conditions, using limited data more effectively, and making principled analyses feasible at scale. Mathematical theory helps establish when a method works, which assumptions it requires, and where it may fail. I value methodological advances that expand what scientists can learn from their data and provide a clear basis for trusting the resulting conclusions.

**Scientific Importance.** I focus on questions whose answers can advance scientific understanding or change how experiments are designed. Engagement with domain scientists helps identify the sources of uncertainty, experimental constraints, and scientific distinctions that a statistical method must address. These considerations shape the target of inference, the modeling assumptions, and the criteria for success throughout a project. I evaluate progress through its scientific consequences: whether conclusions become more trustworthy, meaningful effects become detectable, or experimental resources can be used more effectively.

**Practical Utility.** I treat software development and adoption as integral parts of statistical research. Methods should translate into intuitive, computationally efficient tools that fit the workflows of domain scientists. Principled defaults, clear inputs, and informative diagnostics should minimize the need for custom modifications or statistical tuning. Assumptions and limitations should remain visible, supported by documentation and reproducible examples. My goal is to carry the statistical principles behind a method into its everyday use, making rigorous analysis accessible to the scientists who need it.

These priorities come together in my work on perturbation genomics, where calibration, power, and computation must be addressed jointly to support reliable discoveries and informative experiments. Calibration addresses false discoveries; power guides experimental design; and efficient computation makes rigorous inference feasible at the scale of modern data.
