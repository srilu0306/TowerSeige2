const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var poly, ground, stand1, stand2, polygon, engine, world;

function preload(){

  polygon = loadImage("polygon.png");

}

function setup() {
  
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  ledge1 = new Ledge(490,350,250,10);
  ledge2 = new Ledge(800,200,200,10);
 
  
  block1 = new Box(400,275,30,40);
  block2 = new Box(430,275,30,40);
  block3 = new Box(460,275,30,40);
  block4 = new Box(490,275,30,40);
  block5 = new Box(520,275,30,40);
  block6 = new Box(550,275,30,40);
  block7 = new Box(580,275,30,40);
  block8 = new Box (430,235,30,40);
  block9 = new Box(460,235,30,40);
  block10 = new Box(490,235,30,40);
  block11 = new Box(520,235,30,40);
  block12 = new Box(550,235,30,40);
  block13 = new Box(460,195,30,40);
  block14 = new Box(490,195,30,40);
  block15 = new Box(520,195,30,40);
  block16 = new Box(490,155,30,40);

  blocks1 = new Box(740,175,30,40);
  blocks2 = new Box(770,175,30,40);
  blocks3 = new Box(800,175,30,40);
  blocks4 = new Box(830,175,30,40);
  blocks5 = new Box(860,175,30,40);
  blocks6 = new Box(770,135,30,40);
  blocks7 = new Box(800,135,30,40);
  blocks8 = new Box(830,135,30,40);
  blocks9 = new Box(800,95,30,40);

  poly = Bodies.circle(50,200,20 ,{density:2});
  World.add(world, poly);

  slingShot = new Slingshot(this.poly, {x:150, y:400})


}

function draw() {
  background(0);  
  textSize(20);
  fill("white");
  text("Let's see if you can bring them down in 1 go. And remember use the SPACE BAR to RESTART",100,30);

  ground.display();

  ledge1.display();
  ledge2.display();

  slingShot.display();

  strokeWeight(0);
  stroke(0);
  fill("violet");
  block1.display();
  fill("turquoise");
  block2.display();
  fill("violet");
  block3.display();
  fill("turquoise");
  block4.display();
  fill("violet");
  block5.display();
  fill("turquoise");
  block6.display();
  fill("violet");
  block7.display();
  // stage 2
  fill("turquoise");
  block8.display();
  fill("violet");
  block9.display();
  fill("turquoise");
  block10.display();
  fill("violet");
  block11.display();
  fill("turquoise");
  block12.display();
  // stage 3
  fill("violet");
  block13.display();
  fill("turquoise");
  block14.display();
  fill("violet");
  block15.display();
  // stage 4
  fill("turquiose");
  block16.display();

   // stand2 
  // stage 1
  fill("violet");
  blocks1.display();
  fill("turquiose");
  blocks2.display();
  fill("violet")
  blocks3.display();
  fill("turquoise")
  blocks4.display();
  fill("violet")
  blocks5.display();
  // stage2
  fill("turquiose");
  blocks6.display();
  fill("violet")
  blocks7.display();
  fill("turquoise")
  blocks8.display();

  fill("violet")
  blocks9.display();

  

   imageMode(CENTER)
  image(polygon ,poly.position.x, poly.position.y,40,40);

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(poly,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32)
  Matter.Body.setPosition(poly, {x:150, y:400});
  slingShot.attach(poly);
}










