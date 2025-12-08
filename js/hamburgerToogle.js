export function hamburgerToogle(hamburgerSelector, navSelector) {
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

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
        });
    });
}