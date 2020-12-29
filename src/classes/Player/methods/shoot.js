import Bullet from "../../Bullet/";

export default function shoot() {
    const colors = [
        "#87CEEB",
        "#D3D3D3",
        "#FFE4B5",
        "#00FFFF",
        "#00FF7F",
        "#CD5C5C",
        "#CD661D",
    ];
    const color = colors[Math.round(Math.random() * colors.length)];


    this.bullets.push(new Bullet(this.ctx, this.bullets.length, this, this.currentAngleRotate, color));
}