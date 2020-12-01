const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var world,engine;

function setup(){
    createCanvas(800,700)

    engine=Engine.create();
    world=engine.world;

    base = new Ground(400,600,800,30)

    ball = new Ball(300,200,70,70)

    string = new Rope(ball.body,{x:300,y:0})

    box1 = new Box(500,500,60,60)
    box2 = new Box(500,400,60,60)
    box3 = new Box(500,400,60,60)
    box4 = new Box(500,400,60,60)
    box5 = new Box(500,400,60,60)

}

function draw(){
    background(0)

    Engine.update(engine);

    base.display();
    string.display();
    ball.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}