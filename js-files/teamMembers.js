
export class TeamMember {
    constructor(name, imageSrc, roles = []) {
        this.name = name;
        this.imageSrc = imageSrc;
        this.roles = roles;
    }

    createCardElement() {
        const card = document.createElement("article");
        card.classList.add("team-card");

        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("team-card__image-wrapper")

        const img = document.createElement("img");
        img.classList.add("team-card__image");
        img.src = this.imageSrc;
        img.alt = `${this.name} portraits`;

        imgWrapper.appendChild(img);
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
    new TeamMember("Dennis Cederqvist", "img/Dennis.jpg", ["Projectleader", "Developer"]),

    new TeamMember("Sarvin Riazi", "img/Sarvin.jpg", ["Copywriter", "Developer"]),

    new TeamMember("Axel Lindgren", "img/Axel.jpg", ["Communicator", "Developer"]),

    new TeamMember("Olivia Mach", "img/Olivia.jpg", ["Designer", "Developer"]),
];