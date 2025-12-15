// ================= FOOTER FADE-IN =================
const footer = document.querySelector("[data-footer]");

if (footer && "IntersectionObserver" in window) {
  footer.classList.add("footer--hidden");

  const footerObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.classList.add("footer--visible");
          footerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  footerObserver.observe(footer);
}