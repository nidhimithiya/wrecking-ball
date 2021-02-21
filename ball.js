class Ball{
    constructor( x,y,radius,angle){
        var options={
      frictionAir : 0.004,
      density: 1,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World .add(world,this.body);
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    //rectMode(CENTER);
    fill ("gray");
    ellipse(0,0,this.radius,this.radius);
    pop ();
}
}