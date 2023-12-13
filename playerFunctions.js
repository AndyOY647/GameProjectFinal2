// movement and camera control

function movement(player,speed, window){
    let leftWall = 160;
    let rightWall = window.width-160;
    let top =  -6522;
    let bottom =  675;
    camera.on();
    if(keyIsPressed){
        if (kb.pressing('left')) {
            player.vel.x = -speed;
            player.changeAni('walk');
            //boarder detection
            //left collision
            if(player.y < -665 && player.y > -5280){
              leftWall = 452;
            }else if(player.y < -5280){
              leftWall = 0+player.width;
            }else{
              leftWall = 160;
            }
            if(player.x < leftWall){
              player.vel.x = 0;
            }
            
          }
          else if (kb.pressing('right')) {
            player.vel.x = speed;
            player.changeAni('walk');
            //boarder detection
            //right collision
            if(player.y < -665 && player.y > -5280){
              rightWall = windowWidth - 452;
            }else if(player.y < -5280){
              rightWall = windowWidth - player.width;
            }else{
              rightWall = windowWidth - 160;
            }
            if(player.x > rightWall){
              player.vel.x = 0;
            }
        } 
        else if (kb.pressing('up')) {
            player.vel.y = -speed;
            player.changeAni('walk');
            //smoother movement when both keys are pressed up and right or left
            if(kb.presses('right')){
              player.vel.x = speed;
              player.vel.y = 0;
            }else{
              player.vel.x = 0;
            }
            if(kb.presses('left')){
              player.vel.x = -speed;
              player.vel.y = 0;
            }
            else{
              player.vel.x = 0;
            }

            //boarder detection
            //top of the map
            if(player.y < top){
              player.vel.y = 0;
            }
        } 
        else if (kb.pressing('down')) {

            player.vel.y = speed;
            player.changeAni('walk');
            //smoother movement when both keys are pressed up or right and left
            if(kb.presses('right')){
              player.vel.x = speed;
              player.vel.y = 0;
            }else{
              player.vel.x = 0;
            }
            if(kb.presses('left')){
              player.vel.x = -speed;
              player.vel.y = 0;
            }
            else{
              player.vel.x = 0;
            }
            //boarder detection
            //bottom of the map
            if(player.y > bottom){
              player.vel.y = 0;
              
            }
          }
        else if (kb.pressing(' ')  ) {
          player.changeAni('attack');
          player.vel.x = 0;
          player.vel.y = 0;
      }
      }else if(!keyIsPressed){
        player.changeAni('idle');
        player.vel.x = 0;
        player.vel.y = 0;
      }
    camera.y = player.y;
}
