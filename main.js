import { floatingLines } from "./js-files/hero.js";
import { hamburgerToggle } from "./js-files/hamburgerToggle.js";
import { smoothScroll } from "./js-files/smoothScroll.js";

hamburgerToggle('.hamburger', '.nav');

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

smoothScroll(menu.closeMenu);

