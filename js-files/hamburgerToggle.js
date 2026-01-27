export function hamburgerToggle(hamburgerSelector, navSelector) {
  const hamburger = document.querySelector(hamburgerSelector);
  const nav = document.querySelector(navSelector);
  const navLinks = nav?.querySelectorAll("a");

  if (!hamburger || !nav) {
    console.warn("Hamburger menu: element not found.");
    return;
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("open");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("open");
    });
  });
}
