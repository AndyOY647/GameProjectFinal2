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
    if(enemy.collided(player) && attack){
      enemy.currentHealth -= 1;
        }else if(enemy.collided(player) && !attack){
            player.currentHealth -= 1;
            health[health.length-1].remove();
            // health.pop(health.length-1);
              }
            if(health.length <= 0){
              player.currentHealth = 0;
        }
    }