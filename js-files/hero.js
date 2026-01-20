export class floatingLines {
  constructor(heroContainer, lines, interval = 800, lifetime = 10000) {
    this.heroContainer = document.getElementById(heroContainer);
    this.lines = lines;
    this.interval = interval;
    this.lifetime = lifetime;
    this.timer = null;
  }

 createLine() {
  if (!this.heroContainer) return;

  const rect = this.heroContainer.getBoundingClientRect();

  const line = document.createElement("div");
  line.className = "code-line";
  line.innerText = this.lines[Math.floor(Math.random() * this.lines.length)];

  line.style.animationDuration = this.lifetime / 600 + "s";

  this.heroContainer.appendChild(line);

  // measure AFTER append so we know the element size
  const lineRect = line.getBoundingClientRect();

  const maxX = Math.max(0, rect.width - lineRect.width);
  const maxY = Math.max(0, rect.height - lineRect.height);

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  line.style.left = `${x}px`;
  line.style.top = `${y}px`;

  setTimeout(() => line.remove(), this.lifetime);
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
