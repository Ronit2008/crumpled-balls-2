
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var db1,db2,db3;
var papiu;
var dustbinImage;
function preload()
{
	dustbinImage=loadImage("dustbin.png")
}

function setup() {
	var canvas = createCanvas(1600, 700);
  engine = Engine.create();
    world = engine.world;  
  
   
    ground = new Ground(600,630,2000,20);
	db1=new Dustbin(1100,550,100,PI)
    db2=new Dustbin(1300,550,100,PI)
    db3=new Dustbin(1200,600,200,PI/2)
     papiu = new paper(100,600,60);
     Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display()
  db1.display()
 db2.display()
 db3.display()
 papiu.display()
 imageMode (CENTER)
 image(dustbinImage,1200,523,250,200)
  drawSprites();
  
}


function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(papiu.body,papiu.body.position,{x:100,y:-100});
  }


}
