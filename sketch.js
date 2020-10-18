
var movingRectangle;
var fixedRectangle;
function setup() {
  createCanvas(800,400);
 movingRectangle=createSprite(300,120,50,30);
 movingRectangle.shapeColor = "green";
 movingRectangle.velocityX = -1;
 movingRectangle.velocityY = -1;
 
 fixedRectangle=createSprite(180,120,50,30)
 fixedRectangle.shapeColor = "green";
 fixedRectangle.velocityX = 1;
 fixedRectangle.velocityY = -1;
}

function draw() {

  background(255,255,255);  
 // movingRectangle.x = World.mouseX;
  //movingRectangle.y = World.mouseY;

if(movingRectangle.x - fixedRectangle.x<movingRectangle.width/2 + fixedRectangle.width/2 && fixedRectangle.x - movingRectangle.x <fixedRectangle.width/2 + movingRectangle.width/2 && fixedRectangle.y-movingRectangle.y< fixedRectangle.height/2 + movingRectangle.height/2 && movingRectangle.y - fixedRectangle.y<movingRectangle.height/2 + fixedRectangle.height/2){
  movingRectangle.shapeColor = "red";
  fixedRectangle.shapeColor = "red";
  movingRectangle.velocityX = movingRectangle.velocityX * (-1);
  movingRectangle.velocityY = movingRectangle.velocityY*(-1);
  fixedRectangle.velocityX = fixedRectangle.velocityX*(-1);
  fixedRectangle.velocityY = fixedRectangle.velocityY*(-1);
}
  else{
    movingRectangle.shapeColor = "green";
    fixedRectangle.shapeColor = "green";

  }
  drawSprites();
}