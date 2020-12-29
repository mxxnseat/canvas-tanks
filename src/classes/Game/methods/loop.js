export default function loop() {

    if (this.config.play) {
        this.draw();
        window.requestAnimationFrame(() => this.loop());
        return;
    }

    this.clear();
    clearInterval(this.fragRespawnInterval);
    this.player = null;
    this.frags = [];
    this.gameOverWindow();
    window.removeEventListener("mousemove", this.mousemoveListener);
    window.removeEventListener("mousedown", this.mousedownListener);
}