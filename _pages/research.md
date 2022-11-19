---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---


High-dimensional causal inference with presence of unobserved confounding
------ 
One of core goals of social and genetic sciences is to investigating how a treatment (e.g. [peer effect](https://www.encyclopedia.com/social-sciences/applied-and-social-sciences-magazines/peer-effects#A), [gene expression](https://en.wikipedia.org/wiki/Gene_expression)) impacts the outcome of interest (e.g. income, clinical [phenotype](https://en.wikipedia.org/wiki/Phenotype)). Often, there are, inevitably, a lot of unobserved confounding variables which affect the treatment and outcome. Ignoring them will induce [spurious relationship](https://en.wikipedia.org/wiki/Spurious_relationship) and thus introduce bias when inferring the causal effect. Typically the treatment variable presents high-dimensionality in these applications, which pose more challenge. With the help of [instrumental variable](https://en.wikipedia.org/wiki/Instrumental_variables_estimation)(IV), a nice [two-stage estimation and inference framework](https://arxiv.org/abs/2204.00111) is developed to tackle such problem, under which the flexible modeling methods between IV and treatment are allowed. In a [mouse obesity dataset](https://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.0020015), a set of new gene expressions in liver tissue that were not discovered before, are found to influence the weight of mouse.

<p align="left">
  <img src="/images/IVapplication.png" width="800">
</p>

Boosting the inference for intractable likelihood models using quasi-Monte Carlo method
------ 
<p align="left">
  <img src="/images/QMC_vs_MC.png" width="800">
</p>

[Quasi-Monte Carlo method](https://en.wikipedia.org/wiki/Quasi-Monte_Carlo_method) (QMC) is an important numerical technique for approximating intractable integral using [low-discrepancy sequences](https://en.wikipedia.org/wiki/Low-discrepancy_sequence) (also called quasi-random sequences or sub-random sequences). Compared with Monte Carlo method, an attractive feature QMC method enjoys is the approximation error can be improved to O(1/n) when the integrand is "nice" enough. A wonderful introduction for QMC method can be found in a chapter of a [recent book](https://ziangniu6.github.io/files/qmcstuff.pdf) by [Art Owen](https://artowen.su.domains/). Such improvement of approximation is crucial and desired when handling the inference for [intractable likelihood models](https://stats.stackexchange.com/questions/127180/what-would-be-an-example-of-a-really-simple-model-with-an-intractable-likelihood), which has been commonly considered in modern machine learning and statistics applications. Typically, [minimum distance estimator](https://en.wikipedia.org/wiki/Minimum-distance_estimation) can be used for parameter estimation via minimizing some distance metric (many candidates inclusing [integral probability metric](https://ziangniu6.github.io/files/integral-probability-metrics-and-their-generating-classes-of-functions.pdf)) between the probability measure after the parametrizatioin and the empirical distribution of data. Such inferential procedure always invovles computing some intractable integrals, where QMC can be of great help. The figure below illustrates the empirical performance on the generative neural netowrk models using different metrics inclusing maximum mean discrepancy (MMD), [sliced Wassertein distance](https://www.cv-foundation.org/openaccess/content_cvpr_2016/html/Kolouri_Sliced_Wasserstein_Kernels_CVPR_2016_paper.html) (SW), Sinkhorn divergence (S). See [here](https://ziangniu6.github.io/files/Sinkhorn_aude_talk.pdf) for a gentle introduction on Sinkhorn diverngece and its relationship with MMD.

<p align="left">
  <img src="/images/GNN_simulation.png" width="800">
</p>

