// movement and camera control

function movement(player,speed, window){
    let attack = false;
    let orginial_width = 120;
    let opened = false;
    camera.on();
    if(keyIsPressed){
        if (kb.pressing('left')) {
            player.vel.x = -speed;
            player.changeAni('walk');
          }
          else if (kb.pressing('right')) {
            player.vel.x = speed;
            player.changeAni('walk');
           
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
          }
        else if (kb.pressing(' ') && attack == false ) {
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
      }
    camera.y = player.y;
}

function checkInteract(player, chest, potion){ // add creep and boss to the attribute for interactivity later

  if(player.collide(chest)){
    if(chest.image == chestClosed){
      fill(255);
      textSize(25);
      text('press ' + "'z' " + 'to open chest', chest.x-20, chest.y-100);
      if(kb.presses('z')){
        chest.image = chestOpen;
        potion.visible  = true;
          for(let i = 0; i < 30; i+=5){
            potion.y -=i;
            print(i);
            // 
            
        }
      }
    }
  }

}


