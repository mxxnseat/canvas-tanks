export default function collision(bullets) {

    if (this.x.current < innerWidth / 2 + 30 &&
        this.x.current > innerWidth / 2 - 30 &&

        this.y.current < innerHeight / 2 + 30 &&
        this.y.current > innerHeight / 2 - 30) {
        return "stop";
    }

    let bulletIndex;
    let f = bullets && bullets.find(bullet => {
        bulletIndex = bullet.index
        return bullet.x <= this.x.current + this.size
            && bullet.x > this.x.current - this.size
            && bullet.y >= this.y.current - this.size
            && bullet.y < this.y.current + this.size;
    });

    if (!f) return;

    return {
        bulletIndex,
        fragIndex: this.index
    }
}