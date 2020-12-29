import mousemoveListener from "./methods/mousemoveListener";
import mousedownListener from "./methods/mousedownListener";
import clickPosibleTimer from "./methods/clickPosibleTimer";
import init from "./methods/init";
import kill from "./methods/kill";
import fragRespawn from "./methods/fragRespawn";
import setCanvasSizes from "./methods/setCanvasSizes";
import gameOverWindow from "./methods/gameOverWindowDraw";
import loop from "./methods/loop";
import draw from "./methods/draw";
import clear from "./methods/clear";
import fragsModify from "./methods/fragsModify";




class Game {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");

        
        this.score = 0;
        this.fragRespawnInterval = null;

        this.config = {
            canvasWidth: null,
            canvasHeight: null,

            clickDisable: true,
            play: false,
        }

        this.mousemoveListener = mousemoveListener.bind(this);
        this.mousedownListener = mousedownListener.bind(this);
        this.draw = draw.bind(this);
        this.clickPosibleTimer = clickPosibleTimer.bind(this);
        this.init = init.bind(this);
        this.kill = kill.bind(this);
        this.fragRespawn = fragRespawn.bind(this);
        this.setCanvasSizes = setCanvasSizes.bind(this);
        this.gameOverWindow = gameOverWindow.bind(this);
        this.loop = loop.bind(this);
        this.clear = clear.bind(this);
        this.fragsModify = fragsModify.bind(this);



        this.init();
    } 
}


export default Game;