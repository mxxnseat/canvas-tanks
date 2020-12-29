export default function calculateRotate(x,y) {
    let res = Math.atan(y/x);
    if(x<0 && y>0 && res*180/Math.PI<0 ||
        x<0 && y<0 && res*180/Math.PI<=90){
        res = 180+res*180/Math.PI;
        res *= Math.PI/180;
    }

    this.currentAngleRotate = res;
}