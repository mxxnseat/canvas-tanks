import collision from "./methods/collision";
import init from "./methods/init";
import draw from "./methods/draw";
import moveCalculate from "./methods/moveCalculate";
import setNewIndex from "./methods/setNewIndex";

class Frag {
    constructor(ctx, index) {
        this.x = { start: null, current: null };
        this.y = { start: null, current: null };
        this.index = index;
        this.angleMove = 0;
        this.velocity = 2;
        this.size = 20;
        this.timeToCollisionPlayer = 0;
        this.ctx = ctx;
        this.dir = {};
        this.color = "#99d";


        this.collision = collision.bind(this);
        this.init = init.bind(this);
        this.draw = draw.bind(this);
        this.moveCalculate = moveCalculate.bind(this);
        this.setNewIndex = setNewIndex.bind(this);

        this.init();
    }
}

export default Frag;