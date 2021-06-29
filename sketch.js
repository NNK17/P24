
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1, ground1, box9, box10, box11;

function preload() {
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Paper(100, 200, 10);
	World.add(world, ball1)

	ground1 = new Ground(400, 690, 800, 20);
	World.add(world, ground1)

	box9 = new Box(700, 680, 160, 10);
	World.add(world, box9);
	box10 = new Box(620, 655, 10, 60);
	World.add(world, box10);
	box11 = new Box(780, 655, 10, 60);
	World.add(world, box11);



	Engine.run(engine);


}


function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();
	ball1.display();
	ground1.show();
	box9.display();
	box10.display();
	box11.display();
	


}

function keyPressed(){

if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(ball1.body,ball1.body.position, {x:15,y:-15});

}

}