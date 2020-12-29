export default function draw(bullets) {

    this.moveCalculate();
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x.current, this.y.current, this.size, 0, 2 * Math.PI);
    this.ctx.fill();
    this.timeToCollisionPlayer++;

    return this.collision(bullets);
}