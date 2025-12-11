export function hamburgerToggle(hamburgerSelector, navSelector) {
    const hamburger = document.querySelector(hamburgerSelector);
    const nav = document.querySelector(navSelector);

    if (!hamburger || !nav) {
        console.warn("Hamburger menu: element not found.");
        return;
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
    });
}