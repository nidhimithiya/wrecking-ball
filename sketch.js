const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground ,b1,b2,b3,b4,b5;
var rope,ball;

function setup (){
    createCanvas(1200,800);
    engine = Engine.create()
    world = engine.world;
    ground = new Ground(700,780,1200,20);
    b1 = new Box(800,720,100,100);
    b2 = new Box(800,620,100,100);
    b3 = new Box(800,520,100,100);
    b4 = new Box(800,420,100,100);
    b5 = new Box(800,320,100,100);

    ball = new Ball(400,500,100,PI/2);
    rope = new Rope(ball.body,{x:400,y:100});
}
function draw(){
    background(255);
    Engine.update(engine);

    ground.display();
    b1.display();
    b2.display();
    b3.display()
    b4.display();
    b5.display();
    ball.display();
    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX , y:mouseY});
}