const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const revealTargets = [];

  function prepareReveal(elements, step = 90, start = 0, variant = "default") {
    Array.from(elements).forEach((element, index) => {
      element.classList.add("reveal-item", `reveal-${variant}`);
      element.style.setProperty("--reveal-delay", `${start + index * step}ms`);
      revealTargets.push(element);
    });
  }

  prepareReveal(document.querySelectorAll(".site-header > *"), 100, 40);
  prepareReveal(document.querySelectorAll(".hero-copy > *"), 90, 100);
  prepareReveal(document.querySelectorAll(".hero-visual"), 0, 180);
  prepareReveal(document.querySelectorAll(".about > *"), 130);

  document.querySelectorAll(".section-heading").forEach((heading) => {
    prepareReveal(heading.children, 90);
  });

  prepareReveal(document.querySelectorAll(".project-index-item"), 70, 80);
  prepareReveal(document.querySelectorAll(".project-index-preview"), 0, 190);
  prepareReveal(document.querySelectorAll(".project-pagination"), 0, 230);
  prepareReveal(document.querySelectorAll(".ai-workflow"), 0, 160);
  prepareReveal(document.querySelectorAll(".contact > *"), 120);
  prepareReveal(document.querySelectorAll(".site-footer > *"), 100);

  const timeline = document.querySelector(".timeline");
  if (timeline) {
    timeline.classList.add("motion-assembly");
    timeline.querySelectorAll("article").forEach((entry, index) => {
      entry.style.setProperty("--entry-delay", `${380 + index * 100}ms`);
    });
    revealTargets.push(timeline);
  }

  const skillMap = document.querySelector(".skill-map");
  if (skillMap) {
    skillMap.classList.add("motion-assembly");
    const skillPanels = skillMap.querySelectorAll(".skill-cluster");
    skillPanels.forEach((panel, index) => {
      panel.style.setProperty("--panel-delay", `${680 + index * 90}ms`);
    });
    revealTargets.push(skillMap);
  }

  document.documentElement.classList.add("motion-ready");

  revealTargets
    .filter((target) => target.closest(".site-header, .hero"))
    .forEach((target) => target.classList.add("is-visible"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealTargets
      .filter((target) => !target.classList.contains("is-visible"))
      .forEach((target) => revealObserver.observe(target));
  } else {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
  }
}
