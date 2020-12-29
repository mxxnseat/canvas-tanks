import Frag from "../../Frag/";
import Player from "../../Player/";

export default function init() {
    this.config.play = true;
    this.frags = [new Frag(this.ctx, 0)];
    this.score = 0;
    this.setCanvasSizes();
    this.player = new Player(this.ctx, this.config.canvasWidth, this.config.canvasHeight, this);

    this.fragRespawnInterval = setInterval(() => this.fragRespawn(), 900);


    window.addEventListener("resize", () => this.setCanvasSizes());
    window.addEventListener("mousedown", this.mousedownListener);
    window.addEventListener("mousemove", this.mousemoveListener);

    this.loop();
}