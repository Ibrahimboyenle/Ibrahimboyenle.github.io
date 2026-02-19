document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".impact-number");
  let started = false;

  const startCounting = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const speed = 80; // lower = faster

      const updateCount = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        startCounting();
      }
    });
  }, { threshold: 0.4 });

  const section = document.querySelector("#research-impact");
  if (section) observer.observe(section);
});
