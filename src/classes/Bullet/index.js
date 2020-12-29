import draw from "./methods/draw";
import bulletClear from "./methods/bulletClear";
import getCord from "./methods/getCord";
import setNewIndex from "./methods/setNewIndex";

class Bullet {
    constructor(ctx, index, playerContext, angleRotate, color) {
        this.index = index;
        this.size = 7;
        this.x = 0;
        this.y = 0;
        this.velocity = 9;
        this.lifeTime = 0;
        this.playerContext = playerContext;
        this.angleRotate = angleRotate;
        this.color = color;


        this.draw = draw.bind(this);
        this.bulletClear = bulletClear.bind(this);
        this.getCord = getCord.bind(this);
        this.setNewIndex = setNewIndex.bind(this);

        this.ctx = ctx;
    }

    
    
    
    
}
export default Bullet;