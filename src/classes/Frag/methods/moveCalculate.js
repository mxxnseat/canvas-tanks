export default function moveCalculate() {
    const tgSqr = Math.pow(this.angleMove, 2)
    let cos = Math.sqrt(
        1 / (1 + tgSqr)
    );
    let sin = Math.sqrt(
        tgSqr / (tgSqr + 1)
    );
    this.x.current = this.x.start + this.dir.x * (this.velocity * cos * this.timeToCollisionPlayer);
    this.y.current = this.y.start + this.dir.y * (this.velocity * sin * this.timeToCollisionPlayer);
}