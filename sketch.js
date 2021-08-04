
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world
var engine 
var base1, base2, base3
var ball

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base1=new Ground(400,650,800,15);
	base2=new Ground(500,610,15,80);
	base3=new Ground(620,610,15,80);
	fill ("blue");
    ball=Bodies.circle(150,600,20);

	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  base1.display();
  base2.display();
  base3.display();
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20);
}

function keyPressed(){
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0.03})
	}
}

