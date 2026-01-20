import { floatingLines } from "./js-files/hero.js";
import { hamburgerToggle } from "./js-files/hamburgerToggle.js";
import { smoothScroll } from "./js-files/smoothScroll.js";
import { renderProjects, setupProjectScrollAnimation } from "./js-files/ourproject.js";
import { initContactForm } from "./js-files/form.js";
import { teamMembers } from "./js-files/teamMembers.js";

// ======================= Scroll to top button =======================
function setupScrollTopButton() {
  const btn = document.querySelector("[data-scroll-top]");
  if (!btn) return;

  const onScroll = () => {
    if (window.scrollY > 250) btn.classList.add("scroll-top--visible");
    else btn.classList.remove("scroll-top--visible");
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ======================= Team render + reveal =======================
function renderTeam(members) {
  const grid = document.getElementById("team-grid");
  if (!grid) return;

  grid.innerHTML = "";
  members.forEach((member) => grid.appendChild(member.createCardElement()));
}

function setupRevealAnimation() {
  const cards = document.querySelectorAll(".team-card");
  if (!cards.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.5, root: null, rootMargin: "0px 0px -10% 0px" }
  );

  cards.forEach((card) => observer.observe(card));
}

// ======================= Footer fade-in =======================
function setupFooterFadeIn() {
  const footer = document.querySelector("[data-footer]");
  if (!footer || !("IntersectionObserver" in window)) return;

  footer.classList.add("footer--hidden");

  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        footer.classList.add("footer--visible");
        footerObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  footerObserver.observe(footer);
}

// ======================= Hero floating code =======================
function setupHero() {
  const sampleLines = [
    "const team = ['Dennis', 'Sarvin', 'Olivia', 'Axel'];",
    "function build() { return 'WebCraftStudio Magic'; }",
    "let studio = 'WebCraftStudio';",
    "// keep creating, keep coding",
    "if (code === 'life') keepCoding();",
    "// innovation starts here",
  ];

  const floating = new floatingLines("floating", sampleLines);
  floating.start();
}

// ======================= App init =======================
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupProjectScrollAnimation();

  initContactForm();
  hamburgerToggle(".hamburger", ".nav");

  renderTeam(teamMembers);
  setupRevealAnimation();

  setupFooterFadeIn();
  setupScrollTopButton();

  setupHero();
});