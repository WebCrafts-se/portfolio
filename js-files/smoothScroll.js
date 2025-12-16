export function smoothScroll(){
    document.addEventListener("click", (e) => {
    const scrollBtn = e.target.closest('li');
    if(!scrollBtn) return;

    const targetBtn = scrollBtn.dataset.target || scrollBtn.getAttribute('href');
    if(!targetBtn) return;

    const target = document.querySelector(targetBtn);
    if (!target) return;

    target.scrollIntoView({behavior: 'smooth', block: 'start'});

    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });

    if (typeof onScrollComplete === "function") {
            onScrollComplete();
        }
    })
};