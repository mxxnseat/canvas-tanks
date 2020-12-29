export default function mousedownListener(e){
    {
        switch (e.buttons) {
            case 1:
                if (!this.config.clickDisable) {
                    return;
                }
                this.config.clickDisable && this.player.shoot();
                this.config.clickDisable = false;
                this.clickPosibleTimer();
                break;

        }
    }
}