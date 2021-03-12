
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,50,500,30);
	bob1 = new Bob(200,350);
	rope1 = new Rope(bob1.body,roof.body,-200/1,0);
	bob2 = new Bob(300,350);
	rope2 = new Rope(bob2.body,roof.body,-200/2,0);
	bob3 = new Bob(400,350);
	rope3 = new Rope(bob3.body,roof.body,-200/17,0);
	bob4 = new Bob(500,350);
	rope4 = new Rope(bob4.body,roof.body,200/2,0);
	bob5 = new Bob(600,350);
	rope5 = new Rope(bob5.body,roof.body,200/1,0);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
  
  
    drawSprites();
 
}

function keyPressed(){
	if (keyCode===32){
 Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:50});
	}
}

