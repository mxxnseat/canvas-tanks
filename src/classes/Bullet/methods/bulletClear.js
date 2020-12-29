export default function bulletClear() {
    if(this.x>innerWidth || this.x<0 || this.y>innerHeight || this.y<0){
        this.playerContext.bulletsModify(this.index);
    }
}