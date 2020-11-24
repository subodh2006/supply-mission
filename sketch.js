var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
var ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine,body;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	box1 = new Box(375,650,70,15);
box2 = new Box (420,630,15,60);  
box3 = new Box (340,630,15,60);

	packageSprite=createSprite(102, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	
	  background(0); 
box1.display();
box2.display();
box3.display();
	  rectMode(CENTER);
	  packageSprite.x= packageBody.position.x
	   packageSprite.y= packageBody.position.y

	   keyPressed();

	   if(packageSprite. isTouching(groundSprite)){
  Matter.Body.setStatic(packageBody, true);
} drawSprites(); 
		} 
		
		function keyPressed() {
			 if (keyCode === DOWN_ARROW) {
				  Matter.Body.setStatic(packageBody, false); 
				} 
			}
