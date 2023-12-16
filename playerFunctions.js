// movement and camera control

function movement(player,speed, window){
    let leftWall = 160;
    let rightWall = window.width-160;
    let top =  -6522;
    let bottom =  860;
    let attack = false;
    let orginial_width = 120;
    let attackCounter = 0;
    camera.on();
    if(keyIsPressed){
        if (kb.pressing('left')) {
            player.vel.x = -speed;
            player.changeAni('walk');
            //boarder detection
            //left collision
            if(player.y < -570 && player.y > -5280){
              leftWall = 452;
            }else if(player.y < -5280){
              leftWall = player.width;
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
            if(player.y < -570 && player.y > -5295){
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
            if(player.x > windowWidth-480 && player.x <= windowWidth-130 && player.y < -530 && player.y > -600){
              top = -535;
            }
            if(player.x > 0 && player.x <= 465 && player.y < -530 && player.y > -600){
              top = -535;
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
            if(player.x > windowWidth-480 && player.x <= windowWidth && player.y == -5300){
              bottom = -5305;
            }
            if(player.x > 0 && player.x <= 465 && player.y == -5300){
              rect(465, -5200, 100,5)
              bottom = -5305;
            }
            if(player.y > bottom){
              player.vel.y = 0;
              
            }
          }
        else if (kb.presses(' ') && attack == false ) {
          attack = true;
          player.changeAni('attack');
          player.vel.x = 0;
          player.vel.y = 0;
          if(attack){
            player.width = orginial_width+5;
          }
         
          
          
      }
      }else if(!keyIsPressed){
        // player.removeColliders();
        attack = false;
        player.width = orginial_width-60;
        player.changeAni('idle');
        player.vel.x = 0;
        player.vel.y = 0;
        // if(!attack){
        //   player.removeColliders();
        // }
        
      }
    camera.y = player.y;
}
