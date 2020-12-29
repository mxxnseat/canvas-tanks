export default function draw() {
    this.clear();
    this.ctx.fillStyle = "#fff";
    this.ctx.font = "italic 18px Arial";
    this.ctx.fillText(`Score: ${this.score}`, innerWidth - 100, 50);

    this.player.draw();
    this.player.getBullets().length && this.player.getBullets().map(bullet => bullet.draw());
    this.frags.length && this.frags.map((frag) => this.kill(frag.draw(this.player.getBullets())));
}