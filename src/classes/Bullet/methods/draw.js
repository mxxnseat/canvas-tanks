export default function draw() {
    this.bulletClear();
    this.ctx.fillStyle = this.color;

    this.x = window.innerWidth / 2 + Math.round(this.velocity * Math.cos(this.angleRotate) * this.lifeTime);
    this.y = window.innerHeight / 2 + Math.round(this.velocity * Math.sin(this.angleRotate) * this.lifeTime);
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fill();

    this.lifeTime++;
}