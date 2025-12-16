// ================= OUR PROJECTS DATA =================
export const projectsData = [
  {
    title: "Landingpage",
    meta: "UX / UI • Frontend Development",
    image: "https://picsum.photos/800/600?random=11",
    link: ""
  },
  {
    title: "Weather App",
    meta: "Design System • Web Development",
    image: "https://picsum.photos/800/600?random=12",
    link: ""
  },
  {
    title: "Snake Game",
    meta: "Gaming • JavaScript",
    image: "https://picsum.photos/800/600?random=13",
    link: ""
  }
];

// ================= RENDER PROJECTS =================
export function renderProjects() {
  const list = document.querySelector("[data-projects-list]");
  if (!list) return;

  list.innerHTML = "";

  projectsData.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card project-card--hidden";

    card.innerHTML = `
      <a href="${project.link || "#"}" class="project-card__link" target="_blank">
        <figure class="project-card__media">
          <img 
            src="${project.image}" 
            alt="${project.title}" 
            class="project-card__image"
          />
          <figcaption class="project-card__overlay">
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__meta">${project.meta}</p>
          </figcaption>
        </figure>
      </a>
    `;

    list.appendChild(card);
  });
}

// ================= FADE-UP ANIMATION =================
export function setupProjectScrollAnimation() {
  const cards = document.querySelectorAll(".project-card");
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("project-card--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach(card => observer.observe(card));
}