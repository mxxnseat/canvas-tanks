export default function draw() {
    const { x, y } = this;
    this.ctx.fillStyle = this.color;
    this.ctx.translate(innerWidth / 2, innerHeight / 2);
    this.ctx.rotate(this.currentAngleRotate);


    this.ctx.fillRect(
        x,
        y,
        this.playerSize,
        this.playerSize
    );

    this.ctx.beginPath();

    this.ctx.moveTo(this.playerSize / 2 + 2, -8);
    this.ctx.lineTo(this.playerSize / 2 + 10, 0);
    this.ctx.lineTo(this.playerSize / 2 + 2, 8);
    this.ctx.closePath();

    this.ctx.lineWidth = 5;
    this.ctx.fillStyle = "#483d8b";
    this.ctx.strokeStyle = '#fff';
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);


}