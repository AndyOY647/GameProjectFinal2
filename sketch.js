//player variables
let percy;
let standLoad, walkingLoad, attackLoad;

//enemy variables
let wolf;
let wolfAttackLoad, wolfWalkLoad;

function preload(){
  standLoad = loadAni(
    'medp370_final_assets/percy_idle.png'
    );

  walkingLoad = loadAni(
    'medp370_final_assets/percy_step_left.png',
    'medp370_final_assets/percy_step_right.png',
   );

  attackLoad = loadAni(
    'medp370_final_assets/percy_swing1.png',
    'medp370_final_assets/percy_swing1.png',
    'medp370_final_assets/percy_swing1.png',
    'medp370_final_assets/percy_swing1.png',
    'medp370_final_assets/percy_swing1.png'
   );
  
  wolfAttackLoad = loadAni(
    'medp370_final_assets/wolf_sprites/wolf_attack1.png',
    'medp370_final_assets/wolf_sprites/wolf_attack2.png',
    'medp370_final_assets/wolf_sprites/wolf_attack3.png',
    'medp370_final_assets/wolf_sprites/wolf_attack4.png',
    'medp370_final_assets/wolf_sprites/wolf_attack5.png',
    'medp370_final_assets/wolf_sprites/wolf_attack6.png',
    );

    wolfWalkLoad = loadAni(
      'medp370_final_assets/wolf_sprites/wolf_walk1.png',
      'medp370_final_assets/wolf_sprites/wolf_walk2.png',
      'medp370_final_assets/wolf_sprites/wolf_walk3.png',
      'medp370_final_assets/wolf_sprites/wolf_walk4.png',
      'medp370_final_assets/wolf_sprites/wolf_walk5.png',
      'medp370_final_assets/wolf_sprites/wolf_walk6.png',
    
    );

} // preload end

function setup() {
  new Canvas(1200, 600);
 
  
  percy = new Sprite(500, 275, 120, 320);
  percy.scale= 0.5;
  percy.rotationLock = true;

  percy.addAni('idle', standLoad);
  percy.addAni('walk', walkingLoad);
  percy.addAni('attack', attackLoad);

  wolf = new Sprite(800, 275, 14, 30, 'static');
  wolf.scale = 2;
  wolf.addAni('attack', wolfAttackLoad);
  wolf.addAni('walk', wolfWalkLoad)

}

function draw() {
  //background(220);
  clear();
  percy.debug = true;
  
  wolf.debug = true;
  

  if (kb.pressing('left')) {
		percy.changeAni('walk');
		percy.vel.x = -2;
	} else if (kb.pressing('right')) {
		percy.changeAni('walk');
		percy.vel.x = 2;
  } else if (kb.pressing('up')) {
    percy.changeAni('walk');
		percy.vel.y = -2;
  } else if (kb.pressing('down')) {
    percy.changeAni('walk');
		percy.vel.y = 2;
	} else {
		percy.changeAni('idle');
		percy.vel.x = 0;
    percy.vel.y = 0;
	}

  if(percy.collided(wolf)){
    wolf.collider = 'dynamic';
  }

}