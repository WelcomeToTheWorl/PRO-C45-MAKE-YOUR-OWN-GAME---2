var forestbg;
var boy
var bread,burger,pizza,salad,taco
var obstacle

function preLoad(){
forestbg=loadImage("images/forestbg.png")
boy=loadImage("images/boy.png")
bread=loadImage("images/bread.png")
burger=loadImage("images/bruger.png")
obstacle=loadImage("images/obstacle.png")
pizza=loadImage("images/pizza.png")
salad=loadImage("images/salad.png")
taco=loadImage("images/taco.png")
}




function setup() {
  createCanvas(400,400);
  
  boy=createSprite(100,390)
  
  boy= new Group();
  bread= new Group();
  burger= new Group();
  pizza= new Group();
  salad= new Group();
  taco= new Group();
  obstacle= new Group();
 

}

function draw() {
background(forestbg)

  

  drawSprites();
}





