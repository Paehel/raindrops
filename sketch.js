
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rainDrops = [];
var rain1;
var engine;
var world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

  
}

function draw() {
  background(255);  

  Engine.update(engine);

  if (frameCount % 1 === 0) {
    var rain1 = new RainDrop((random(10,790), random(10,390), random(10,50), random(10,60) ));
    rainDrops.push(rain1);
  }

  for(var i = 0; i < rainDrops.length; i++){
    rainDrops[i].fall();
    rainDrops[i].display();
  }


}



