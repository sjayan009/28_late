
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy, boy_Img;

function preload()
{
	boy_Img = loadImage("images_1234/boy.png");
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(140,610,20,20);
	boy.addImage("the image itself", boy_Img);
	boy.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,800,40)

	stone = new realStone(700,500, 50, 50);

	slingshot = new Slingshot(stone.body, {x: 80, y:560});

	test_tree = new tree(614,500,400,400);

	mango1 = new Mango(480,435,50,50)
	mango2 = new Mango(650, 380, 50, 50);
	mango3 = new Mango(660, 320, 50, 50);
	mango4 = new Mango(580, 360, 50, 50);
	mango5 = new Mango(700, 380, 50, 50);

	



	Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255,204,205);
 
  ground.display();
  
  stone.display();

  slingshot.display();

  test_tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();



  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.flying();
}