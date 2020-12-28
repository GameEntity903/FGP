const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Jack,JackImg;
var score,ground;

function preload()
{
	JackImg = loadImage("Jack.png");
}

function setup() {
	createCanvas(displayWidth-12, displayHeight-125);
	Jack = createSprite(150,500,40,40);
	Jack.addImage(JackImg);
	Jack.scale = 0.6
	engine = Engine.create();
	world = engine.world;
	ground = createSprite(displayWidth/2,595,displayWidth,2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (keyIsDown(32)){
	Jack.y = Jack.y -40;
	Jack.velocityY = 6;
	console.log(Jack.velocityY)
	}
	if (Jack.isTouching(ground)){
		Jack.velocityY = 0;
	}
  drawSprites();
 
}



