// movement and camera control

function movement(player,speed){
    let attack = false;
    let original_width = 120;
    let original_height = 320;
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
        else if (kb.pressing(' ') && attack == false) {
          attack = true;
          if(attack){
            if(kb.pressing('right')){
              player.vel.x = speed;
              player.vel.y = 0;
              player.changeAni('attack');
              player.width = original_width+5;
            }
            if(kb.pressing('left')){
              player.vel.x = -speed;
              player.vel.y = 0;
              player.changeAni('attack');
              player.width = original_width+5;
            }
            if(kb.pressing('up')){
              player.vel.x = 0;
              player.vel.y = -speed;
              player.changeAni('attack');
              player.width = original_width +5;
            }
            if(kb.pressing('down')){
              player.vel.x = 0;
              player.vel.y = speed;
              player.changeAni('attack');
              player.width = original_width +5;
            }else{
              player.vel.x = 0;
              player.vel.y = 0;
              player.changeAni('attack');
              player.width = original_width +5;
            }
          }
      }
      }else if(!keyIsPressed){
        // player.removeColliders();
        attack = false;
        player.width = original_width/2;
        player.height = original_height/2
        player.changeAni('idle');
        player.vel.x = 0;
        player.vel.y = 0;
        
      }
   
    camera.y = player.y;
    
}


function checkInteract(player, chest, potion){ // add creep and boss to the attribute for interactivity later
  for(let i = 0; i < chest.length; i++){
    if(player.overlapping(chestRadius[i])){
      if(chest[i].image == chestClosed){
        fill(255);
        textSize(25);
        let chestText = 'press ' + "'z' " + 'to open chest';
        text(chestText, chest[i].x-50, chest[i].y+150);
        if(kb.presses('z')){
          chest[i].image = chestOpen;
          potion[i].visible  = true;
          for(let j = 0; j < 30; j+=5){
            potion[i].y -=j;
            setTimeout(disappear, 200);
          }
          heal(player)
        
        }
      }
    }
  }
  
}

function disappear(){
  for(let i = 0; i < potion.length; i++){
    potion[i].visible = false;
  }
 
}

function heal(player){
  if(player.currentHealth != player.maxHealth ){
    health.length +=1;
    player.currentHealth +=1;
    health[health.length-1] = new Sprite(health.length*100,50, 90, 80, 'kenetic');
    health[health.length-1].image = heart;
  }
}
