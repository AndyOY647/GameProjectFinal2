function move(enemy){
    // integer represent seconds
    if(counter < 5){
        enemy.x++;
        if(frameCount % 60 == 0){
          counter++;
        }
      }else if(counter >= 5 && counter <= 10){
        enemy.x --;
        if(frameCount % 60 == 0){
          counter++;
        }
      }else{
        counter = 0;
      }
}


function checkDemage(enemy, player, attack){
    if(enemy.collides(player) && attack){
      if(enemy == wolf){
        wolfHealth[wolfHealth.length-1].remove();
        wolfHealth.length-1;
        wolf.remove();
      }
      if(enemy == goblin){
        goblinHealth[goblinHealth.length-1].remove();
        goblinHealth.length-1;
        goblin.remove();
      }
      if(enemy == boss && attack){
        if(bossHealth.length >0){
        boss.currentHealth-=1;
        bossHealth[bossHealth.length-1].remove();
        bossHealth.length-=1;
        }
        if(bossHealth.length == 0 || !run){
          boss.remove();
        }
      }

        }else if(enemy.collided(player) && !attack){
          if(health.length >=1){
            player.currentHealth -= 1;
            health[health.length-1].remove();
            health.length -=1;
          }
              }
            if(health.length <= 0){
              player.currentHealth = 0;
              run = false;
        }
    }

   