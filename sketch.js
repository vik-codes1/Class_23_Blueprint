//namespacing

const Engine = Matter.Engine;  // Universe
const World = Matter.World;   //Globe
const Bodies= Matter.Bodies;  // Objects

var engine,world,ground,box1;


function setup() {
  createCanvas(400,400);

engine=Engine.create();
world=engine.world;

//JSON - Javascript object notation

var options={

  isStatic: true

}

ground=Bodies.rectangle(200,390,400,20,options);
World.add(world,ground);

box1= new Box(200,200,50,50);
box2= new Box(240,100,50,100);


console.log(ground);


 // createSprite(200, 200, 50, 50);
}

function draw() {
  background(0,0,0); 

  Engine.update(engine);

  rectMode (CENTER);
  fill (255);
 
 fill ("brown");
 rect(ground.position.x,ground.position.y,400,20);

 box1.display();
 box2.display();

  //drawSprites();
}