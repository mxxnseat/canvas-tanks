import draw from "./methods/draw";
import calculateRotate from "./methods/calculateRotate";
import getBullets from "./methods/getBullets";
import bulletsModify from "./methods/bulletsModify";
import getCord from "./methods/getCord";
import shoot from "./methods/shoot";


class Player {
    constructor(ctx, gameContext) {
        this.ctx = ctx;
        this.color = '#f00';
        this.playerSize = 30;
        this.x = -this.playerSize / 2;
        this.y = -this.playerSize / 2;
        this.currentAngleRotate = 0;
        this.gameContext = gameContext;

        this.bullets = [];

        this.draw = draw.bind(this);
        this.calculateRotate = calculateRotate.bind(this);
        this.getBullets = getBullets.bind(this);
        this.bulletsModify = bulletsModify.bind(this);
        this.getCord = getCord.bind(this);
        this.shoot = shoot.bind(this);


        this.draw();
    }
}

export default Player;