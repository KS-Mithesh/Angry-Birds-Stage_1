const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var block1,block2,block3,block4;
var ground1;
var log1,log2;
var pig1,pig2;
var bird1;

function setup() {

  createCanvas(800,400);
  
  engine  = Engine.create();
  world   = engine.world;

  block1  = new block(400,350,70,70);
  block2  = new block(600,350,70,70);
  block3  = new block(600,250,70,70);
  block4  = new block(400,250,70,70);
  ground1 = new ground(400,380,800,20);
  log1    = new log(500,315,270,PI/2);
  log2    = new log(500,150,270,90);
  pig1    = new pig(500,350,50,50);
  pig2    = new pig(500,300,50,50);
  bird1   = new bird();
  
}

function draw() {
  background("skyblue");  
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  ground1.display();
  log1.display();
  log2.display();
  pig1.display();
  pig2.display();
  bird1.display();
  
}