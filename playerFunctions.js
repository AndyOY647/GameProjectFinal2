function movement(player){
    if(keyIsPressed){
        if (kb.pressing('left')) {
            player.vel.x = -2;
            player.changeAni('walk');
          } 
          else if (kb.pressing('right')) {
          
            player.vel.x = 2;
            player.changeAni('walk');
        } 
        else if (kb.pressing('up')) {
            player.vel.y = -2;
            player.changeAni('walk');
        } 
        else if (kb.pressing('down')) {
            player.vel.y = 2;
            player.changeAni('walk');
          }
      else if (kb.presses(' ')) {
        player.changeAni('attack');
        percyWidth + 100;
        player.vel.x = 0;
        player.vel.y = 0;

      }
      }else if(!keyIsPressed){
        player.changeAni('idle');
        player.vel.x = 0;
        player.vel.y = 0;
      }
}
