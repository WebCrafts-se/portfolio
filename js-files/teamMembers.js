export class TeamMember {
  constructor(name, imageSrc, roles = [], linkedInUrl = "#") {
    this.name = name;
    this.imageSrc = imageSrc;
    this.roles = roles;
    this.linkedInUrl = linkedInUrl;
  }

  createCardElement() {
    const card = document.createElement("article");
    card.classList.add("team-card");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("team-card__image-wrapper");

    const link = document.createElement("a");
    link.classList.add("team-card__link");
    link.href = this.linkedInUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `Open ${this.name} on LinkedIn`);

    const img = document.createElement("img");
    img.classList.add("team-card__image");
    img.src = this.imageSrc;
    img.alt = `${this.name} portraits`;

    link.appendChild(img);
    imgWrapper.appendChild(link);
    card.appendChild(imgWrapper);

    const nameEl = document.createElement("h3");
    nameEl.classList.add("team-card__name");
    nameEl.textContent = this.name;
    card.appendChild(nameEl);

    const rolesEl = document.createElement("p");
    rolesEl.classList.add("team-card__roles");
    rolesEl.innerHTML = this.roles.join("<br>");
    card.appendChild(rolesEl);

    return card;
  }
}

export const teamMembers = [
  new TeamMember("Dennis Cederqvist", "Assets/img/Dennis.jpg", [
    "Projectleader",
    "Developer",], "https://www.linkedin.com/in/dennis-cederqvist/"),

  new TeamMember("Sarvin Riazi", "Assets/img/sarvin.png", [
    "Copywriter",
    "Developer",], "https://www.linkedin.com/in/sarvinriazi/"),

  new TeamMember("Axel Lindgren", "Assets/img/axel.png", [
    "Communicator",
    "Developer",], "https://www.linkedin.com/in/axel-lindgren-a26264244/"),

  new TeamMember("Olivia Mach", "Assets/img/olivia.png", [
    "Designer",
    "Developer",], "https://www.linkedin.com/in/olivia-mach-0b433811a/" ),
];
