export default function kill(action) {
    if (action === "stop") this.config.play = false;
    if (typeof action === "object") {
        this.player.bulletsModify(action.bulletIndex);
        this.fragsModify(action)
        this.score++;
        return;
    }
}