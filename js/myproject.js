// Our Projects Module
export const projectsData = [
  {
    title: "Landingpage",
    description: "",
    meta: "UX / UI • Frontend Development",
    image: "https://picsum.photos/600/400?random=1",
    link: ""
  },
  {
    title: "Weather App",
    description: "",
    meta: "Design System • Web Development",
    image: "https://picsum.photos/600/400?random=2",
    link: ""
  },
  {
    title: "Snake Game",
    description: "",
    meta: "Gaming",
    image: "https://picsum.photos/600/400?random=3",
    link: ""
  }
];

export function renderProjects() {
  const list = document.querySelector("[data-projects-list]");
  if (!list) return;

  list.innerHTML = "";

  projectsData.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const href = project.link || "#";

    card.innerHTML = `
      <a href="${href}" class="project-card__link" target="_blank">
        <figure class="project-card__media">
          <img src="${project.image}" class="project-card__image" alt="${project.title}" />
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

export function setupProjectScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("project-card--visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".project-card").forEach(card => {
    card.classList.add("project-card--hidden");
    observer.observe(card);
  });
}