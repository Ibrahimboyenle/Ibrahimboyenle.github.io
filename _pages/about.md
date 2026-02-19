---
permalink: /
author_profile: true
---

Welcome!
========

Ibrahim Boyenle is a Ph.D. candidate in Biochemistry at the **[University of Maryland, Department of Chemistry & Biochemistry](https://chem.umd.edu)** and the **[Institute for Bioscience and Biotechnology Research (IBBR)](https://www.ibbr.umd.edu/)**. He conducts his doctoral research under the supervision of **Dr. Yanxin Liu**, where his work focuses on elucidating the molecular mechanisms by which co-chaperones regulate the conformational cycle and ATPase activity of the **Hsp90 molecular chaperone**.

His research integrates **experimental biochemistry**, **structural biology**, and **molecular dynamics simulations** to understand how co-chaperone binding events influence Hsp90 structure, dynamics, and function. In particular, he is interested in how CS-containing co-chaperones modulate Hsp90’s ATP-driven conformational transitions and how these interactions reshape the chaperone’s functional cycle. Through an integrative approach that combines biochemical assays, atomistic simulations, cryo-electron microscopy, and structural modeling, his work aims to uncover mechanistic principles governing chaperone regulation at the molecular level.

Prior to his doctoral training, Ibrahim earned his **Bachelor’s degree from [Ladoke Akintola University of Technology](https://www.lautech.edu.ng/), Oyo State, Nigeria**. During his undergraduate research, he worked with Prof. Adeola Ehigie on the modulation of the mitochondrial permeability transition pore (mPTP) using medicinal plant extracts, a project that led to publications in peer-reviewed journals. This work sparked his interest in mitochondrial biology, bioenergetics, and mechanisms of cellular stress and death.

In parallel, he trained under Dr. Temitope Adelusi, where he developed a strong foundation in molecular dynamics simulations and structure-based computational methods. Through this work, he applied in silico approaches to investigate protein–ligand interactions and identify potential inhibitors across multiple biological targets, contributing to several high-impact publications. These early experiences shaped his current research philosophy, which emphasizes the integration of computation and experiment to address complex biological problems.

---

### Academic Highlights
- 🏅 ACS Seed Mentor Waiver, Fall, 2025
- 🏅 Oral Presentation Award, NOBCChE NE/SE Conference, 2025  
- 🏅 G. Forrest Wood Fellowship, Department of Biochemistry, University of Maryland, 2025  
- 🏅 Goldhaber Travel Award, Department of Biochemistry, University of Maryland, 2025
- 🏅 Dean's Fellowship, Department of Biochemistry, University of Maryland, 2022
- 🎓 First runner-up, Department of Biochemistry graduating set 2021, LAUTECH

---

## Featured Research

<div class="featured-publications">

  <!-- First Publication -->
  <div class="pub-card">
    <a href="https://www.mdpi.com/2409-9279/8/5/103" target="_blank" rel="noopener">
      <img src="/images/publications/htpg-2025-fig.png" alt="HtpG study figure" loading="lazy">
    </a>
    <div class="pub-info">
      <h3>
        <a href="https://www.mdpi.com/2409-9279/8/5/103" target="_blank" rel="noopener">
          Biochemical characterization of cyanobacterial HtpG from <i>Synechococcus elongatus</i> PCC 7942
        </a>
      </h3>
      <p><em>Methods &amp; Protocols</em>, 2025</p>
      <p>Biochemical study of the cyanobacterial HtpG homolog, a heat-shock protein 90 (Hsp90) from <i>Synechococcus elongatus</i>.</p>
    </div>
  </div>

  <!-- Second Publication -->
  <div class="pub-card">
    <a href="https://doi.org/10.1016/j.mito.2022.01.006" target="_blank" rel="noopener">
      <img src="/images/publications/MPTP-2022-fig.jpg" alt="mPTP review figure" loading="lazy">
    </a>
    <div class="pub-info">
      <h3>
        <a href="https://doi.org/10.1016/j.mito.2022.01.006" target="_blank" rel="noopener">
          Targeting the mitochondrial permeability transition pore for drug discovery: Challenges and opportunities
        </a>
      </h3>
      <p><em>Mitochondrion</em>, 2022</p>
      <p>Review of mPTP models, regulators, and drug-discovery challenges.</p>
    </div>
  </div>

</div>

<p style="margin-top:1.5rem;">
  <a class="btn btn--primary" href="{{ '/publications/' | relative_url }}">See more → Publications</a>
</p>

<!-- Optional CSS for cleaner cards -->
<style>
.featured-publications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.pub-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
  overflow: hidden;
}
.pub-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.pub-info { padding: 1rem; }
.pub-info h3 { margin-top: 0; font-size: 1.1rem; }
.pub-info p { margin: 0.3rem 0; }
</style>

---

## Recent Talks

{% assign sorted_talks = site.talks | sort: "date" | reverse %}
{% for talk in sorted_talks limit:2 %}
<article class="archive__item" style="margin-bottom:1.25rem;">
  <h3 class="archive__item-title">
    <a href="{{ talk.url | relative_url }}">{{ talk.title }}</a>
  </h3>

  {% if talk.excerpt %}
    <div class="archive__item-excerpt">
      {{ talk.excerpt | markdownify }}
    </div>
  {% endif %}

  <p class="page__meta" style="margin:.25rem 0 0 0;">
    <time datetime="{{ talk.date | date_to_xmlschema }}">{{ talk.date | date: "%b %-d, %Y" }}</time>
  </p>
</article>
<hr/>
{% endfor %}

<p><a class="btn btn--primary" href="{{ '/talks/' | relative_url }}">View all talks →</a></p>

---
## Research Impact

<div class="metrics">

<div class="metric">
<strong>25+</strong><br/>
Peer-reviewed publications
</div>

<div class="metric">
<strong>800+</strong><br/>
Citations
</div>

<div class="metric">
<strong>4</strong><br/>
Conference presentations
</div>

</div>
