import { floatingLines } from "./js/hero.js";



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