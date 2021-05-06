var fixedRect,movingRect;

var fixedRect, movingRect;
var weight
var speed
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(1000, 400, 50, 80);
  fixedRect.shapeColor = "white";
  fixedRect.setVelocity(0,0)
  //fixedRect.debug = true;
speed=random(50,500)
  weight=random(50,250)
  movingRect = createSprite(100, 400,100,10);
  movingRect.shapeColor = "pink"
  movingRect.setVelocity(5,0)
  //movingRect.debug = true;
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  
  
  background(0,0,0);
  



  //bounceoff(fixedRect,movingRect);
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){


movingRect.setVelocity(0,0)
movingRect.shapeColor="red"
var deformation=0.5 * weight * speed * speed/22500
if(deformation>180){

movingRect.shapeColor="red"
fixedRect.visible=false;


}
if(deformation<180 && deformation>100){
  movingRect.collide(fixedRect);
movingRect.shapeColor="yellow"

}


if(deformation<100){
movingRect.bounceOff(fixedRect)

  movingRect.shapeColor="green"
}


}

  drawSprites();
}