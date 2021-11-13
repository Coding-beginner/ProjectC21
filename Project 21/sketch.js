
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1400);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(800,700,100,ball_options);
	World.add(ball,world);

	groundObj = new ground(0,0,width,10);
	leftSide = new ground(1300,11,10,300);
	rightSide = new ground(1500,11,10,300);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,100)

  function keyPressed(){
	  if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(ball,ball.position.x-1, 1000,500)
	  }
  }

  groundObj.display();
  leftSide.display();
  rightSide.dsiplay();

  drawSprites();
 
}



