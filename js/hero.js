export class floatingLines {
    constructor (heroContainer, lines, interval = 800, lifetime = 10000) {
        this.heroContainer = document.getElementById(heroContainer);
        this.lines = lines;
        this.interval = interval;
        this.lifetime = lifetime;
        this.timer = null;
    }

    createLine() {
        const line = document.createElement("div");
        line.className = "code-line";
        line.innerText = this.lines[Math.floor(Math.random() * this.lines.length)];

        line.style.left = Math.random() * 90 + "%";
        line.style.top = Math.random() * 90 + "%";
        line.style.animationDuration = 6 + Math.random() * 5 + "s";

        this.heroContainer.appendChild(line);

        setTimeout(() => {
            line.style.animation ="none";
            line.style.transition = "opacity 2s";
            line.style.opacity = 0;

             setTimeout(() => line.remove(), 2000); // ta bort efter fade-out
            }, this.lifetime);
    }

    start() {
        if (!this.timer) {
        this.timer = setInterval(() => this.createLine(), this.interval);
        }
    }

    stop() {
        if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        }
    }
}

