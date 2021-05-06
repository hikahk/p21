function bounceoff(a,b){
 if (a.x - b.x < b.width/2 + a.width/2
      && b.x - a.x < b.width/2 + a.width/2) {
    a.velocityX = a.velocityX * (-1);
    b.velocityX = b.velocityX * (-1);
  }
  if (a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2){
    a.velocityY = a.velocityY * (-1);
    b.velocityY = b.velocityY * (-1);
  }


}


function isTouching(c,d){


  
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  

      return true;
}
else{

  return false
}

}
