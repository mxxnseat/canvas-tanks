export default function bulletsModify(index) {
    this.bullets.splice(index, 1);
    this.bullets.forEach((item, index) => {
        item.setNewIndex(index);
    });
}