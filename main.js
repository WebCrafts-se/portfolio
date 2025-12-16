import { floatingLines } from "./js-files/hero.js";
import { hamburgerToggle } from "./js-files/hamburgerToggle.js";
import { smoothScroll } from "./js-files/smoothScroll.js";
import {renderProjects, setupProjectScrollAnimation} from "./js-files/ourproject.js";
import { initContactForm } from "./js-files/form.js";
import { teamMembers } from "./js-files/teamMembers.js";

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupProjectScrollAnimation();
  initContactForm();
  hamburgerToggle('.hamburger', '.nav');
});


// Hero section START //

    const sampleLines = [
        "const team = ['Dennis', 'Sarvin', 'Olivia', 'Axel'];",
        "function build() { return 'WebCraftStudio Magic'; }",
        "let studio = 'WebCraftStudio';",
        "// keep creating, keep coding",
        "if (code === 'life') keepCoding();",
        "// innovation starts here",
        ];

    const floating = new floatingLines("floating", sampleLines,);
        floating.start();

// Hero section END //

// smoothScroll(menu.closeMenu);

function renderTeam(members) {
    const grid = document.getElementById("team-grid");
    if (!grid) return;

    grid.innerHTML = "";

    members.forEach((member) => {
        grid.appendChild(member.createCardElement());
    });
}

renderTeam(teamMembers);

