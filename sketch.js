const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,log,pig,box3,box4,log2,pig2,log3,log4,bird

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(190,390);
    pig = new Pig(225,390)
    box2 = new Box(255,390);
    log = new Log(230,380,200,PI/2)
    box3 = new Box(190,360);
    pig2 = new Pig(225,360)
    box4 = new Box(255,360);
    log2 = new Log(230,350,200,PI/2)
    log3 = new Log(200,340,120,PI/5)
    log4 = new Log(255,340,120,-PI/5)
    bird = new Bird(100,200)
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig.display();
    log.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}