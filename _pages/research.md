---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<img src="/images/high-throughput.png" align="right" width="350">

High-dimensional causal inference with presence of unobserved confounding
------ 
One of core goals of social and genetic sciences is to investigating how a treatment (e.g. [peer effect](https://www.encyclopedia.com/social-sciences/applied-and-social-sciences-magazines/peer-effects#A), [gene expression](https://en.wikipedia.org/wiki/Gene_expression)) impacts the outcome of interest (e.g. income, clinical [phenotype](https://en.wikipedia.org/wiki/Phenotype)). Often, there are, inevitably, a lot of unobserved confounding variables which affect the treatment and outcome. Ignoring them will induce [spurious relationship](https://en.wikipedia.org/wiki/Spurious_relationship) and thus introduce bias when inferring the causal effect. Typically the treatment variable presents high-dimensionality in these applications, which pose more challenge. With the help of [instrumental variable](https://en.wikipedia.org/wiki/Instrumental_variables_estimation)(IV), a nice [two-stage estimation and inference framework](https://arxiv.org/abs/2204.00111) is developed to tackle such problem, under which the flexible modeling methods between IV and treatment are allowed. In a [mouse obesity dataset](https://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.0020015), a set of new gene expressions in liver tissue that were not discovered before, are found to influence the weight of mouse.

<p align="left">
  <img src="/images/IVapplication.png" width="400">
</p>


