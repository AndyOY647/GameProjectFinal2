//player variables
let percy;
let percyWidth = 120;
let percyHeight = 320;
let standLoad, walkingLoad, attackLoad;

//enemy variables
let wolf;
let wolfAttackLoad, wolfWalkLoad;

//screen and background
let startScreen, bg;

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
    'medp370_final_assets/percy_swing2.png',
    'medp370_final_assets/percy_swing3.png',
    'medp370_final_assets/percy_swing4.png',
    'medp370_final_assets/percy_swing5.png'
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
startScreen = loadImage('medp370final_startscreen.png')

} // preload end

// main loop variables
let run = false;

function setup() {
  new Canvas(windowWidth, windowHeight);
 
  percy = new Sprite(500, 275, percyWidth, percyHeight);
  percy.scale= 0.5;
  percy.rotationLock = true;

  percy.addAni('idle', standLoad);
  percy.addAni('walk', walkingLoad);
  percy.addAni('attack', attackLoad);

  wolf = new Sprite(800, 275, 14, 30, 'static');
  wolf.scale = 2;
  wolf.addAni('attack', wolfAttackLoad);
  wolf.addAni('walk', wolfWalkLoad);

  percy.changeAni('idle');
  percy.visible = false;
  wolf.visible = false;
}


function draw() {
  percy.debug = true;
  
  wolf.debug = true;
  image(startScreen, 0, 0, windowWidth, windowHeight);
  if(kb.presses('enter')){
    run = true;
  }
  if(run){
    percy.visible = true;
    wolf.visible = true;
    background(220);
    movement(percy);
  }

}  

