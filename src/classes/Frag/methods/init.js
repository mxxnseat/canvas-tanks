export default function init() {

    const x = Math.round((Math.random() * innerWidth));
    const y = Math.round((Math.random() * innerHeight));
    if (x > innerWidth / 2 - 100 && x < innerWidth / 2 + 100 ||
        y > innerHeight / 2 - 100 && y < innerHeight / 2 + 100) {
        this.init();
        return;
    }


    this.x.start = x;
    this.y.start = y;

    this.size = Math.round((Math.random() * (20 - 7) + 7));;

    let dx = ((innerWidth / 2) - 15) - this.x.start;
    let dy = ((innerHeight / 2) - 15) - this.y.start;

    this.angleMove = dy / dx;
    this.dir.x = this.x.start > innerWidth / 2 ? -1 : 1;
    this.dir.y = this.y.start > innerHeight / 2 ? -1 : 1;
    this.draw();
}