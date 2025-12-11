import { teamMembers } from "./js-files/teamMembers.js";

function renderTeam(members) {
    const grid = document.getElementById("team-grid");
    if (!grid) return;

    grid.innerHTML = "";

    members.forEach((member) => {
        grid.appendChild(member.createCardElement());
    });
}

renderTeam(teamMembers);