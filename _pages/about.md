---
permalink: /
author_profile: true
---

Welcome!
========

I am currently a Ph.D. candidate in Biochemistry at the [**University of Maryland, Department of Chemistry & Biochemistry**](https://chem.umd.edu){:target="_blank" rel="noopener"} & the [**Institute for Bioscience and Biotechnology Research (IBBR)**](https://www.ibbr.umd.edu/){:target="_blank" rel="noopener"}.  
My research focuses on understanding how co-chaperones regulate the conformational cycle of the **Hsp90 molecular chaperone**, combining **experimental biochemistry**, **structural biology**, & **molecular dynamics simulations**.

I am particularly interested in:
- The structural and functional roles of CS-containing co-chaperones.  
- How co-chaperone interactions modulate Hsp90’s ATPase activity and conformational cycle.  
- Using integrative approaches (biochemical assays, MD simulations, CryoEM, and structural modeling) to uncover mechanisms of chaperone regulation.

---

### Academic Highlights 
- 🏅 Oral Presentation Award, NOBCChE NE/SE Conference, 2025  
- 🏅 G. Forrest Wood Fellowship, Department of Biochemistry, University of Maryland, 2025  
- 🏅 Goldhaber Travel Award, Department of Biochemistry, University of Maryland, 2025
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
