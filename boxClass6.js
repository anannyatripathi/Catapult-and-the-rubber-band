class boxClass6 extends baseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
    }

    display(){
        var pos = this.body.position;
var angle = this.body.angle;
if(this.body.speed > 6){
    score++
}
push();
translate(pos.x,pos.y);
rectMode(CENTER);
rotate(angle);
strokeWeight(2);
fill(0,255,0);
rect(0,0,this.width,this.height);
pop();
}
    }
