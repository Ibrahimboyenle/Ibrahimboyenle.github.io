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

I am **Ibrahim Boyenle**, a Ph.D. candidate in Biochemistry at the **University of Maryland** & the **Institute for Bioscience and Biotechnology Research (IBBR)**.  
My research focuses on understanding how co-chaperones regulate the conformational cycle of the **Hsp90 molecular chaperone**, combining **experimental biochemistry** **structural biology** & **molecular dynamics simulations**.

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

### Beyond Research
I enjoy mentoring students, presenting at conferences such as ACS and NOBCChE, and writing about science for both academic and public audiences.  
When I’m not in the lab or running simulations, you’ll often find me outdoors in nature.

---

## Recent Posts

{% for post in site.posts limit:3 %}
<article class="archive__item" style="margin-bottom:1.25rem;">
  <h3 class="archive__item-title">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h3>

  {% if post.excerpt %}
    <div class="archive__item-excerpt">
      {{ post.excerpt | markdownify }}
    </div>
  {% endif %}

  <p class="page__meta" style="margin:.25rem 0 0 0;">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
  </p>
</article>
<hr/>
{% endfor %}

<p><a class="btn btn--primary" href="{{ '/year-archive/' | relative_url }}">View all posts →</a></p>
