class Rope{
    constructor( bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 1.2,
            length: 400
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World .add(world,this.rope);
    }
display(){
    var pos1 = this.rope.bodyA.position;
    var pos2 = this.pointB;
    push ();
strokeWeight(3);
line (pos1.x,pos1.y,pos2.x,pos2.y);
pop ();
}
}