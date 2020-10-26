const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var block1;
var ground1;

function setup() {

  createCanvas(800,400);
  
  engine  = Engine.create();
  world   = engine.world;

  block1  = new block(400,200,70,70);
  ground1 = new ground(400,380,800,20);
  
}

function draw() {
  background("skyblue");  
  Engine.update(engine);

  block1.display();
  ground1.display();
  
}