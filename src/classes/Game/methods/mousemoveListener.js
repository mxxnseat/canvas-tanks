export default function mousemoveListener(e) {
    let clx = e.clientX - this.canvas.width / 2 - 15;
    let cly = e.clientY - this.canvas.height / 2 - 15
    this.player.calculateRotate(clx, cly);
}