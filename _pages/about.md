---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome!
========

I am **Ibrahim Boyenle**, a Ph.D. candidate in Biochemistry at the [**University of Maryland, Department of Chemistry & Biochemistry**](https://chem.umd.edu) & the [**Institute for Bioscience and Biotechnology Research (IBBR)**](https://www.ibbr.umd.edu/).  
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
