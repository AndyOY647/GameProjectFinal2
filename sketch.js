//player variables
let percy;
let percyWidth = 120;
let percyHeight = 320;
let standLoad, walkingLoad, attackLoad;
let speed = 10;
let health = [];

//enemy variables
let wolf;
let wolfAttackLoad, wolfWalkLoad;

//screen and background
let startScreen, bg;

let chest;

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

  startScreen = loadImage('medp370final_startscreen.png');
  bg = loadImage('medp370finalgame_background.png');
  bgTop = loadImage('medp370_final_assets/top.png');
  leftWall = loadImage('medp370_final_assets/left wall.png');
  rightWall = loadImage('medp370_final_assets/right_wall.png');
  heart = loadImage('medp370_final_assets/health_heart.png');
  emptyHeart = loadImage('medp370_final_assets/empty_heart.png');
  chestClosed = loadImage('medp370_final_assets/itemchest_closed.png');
  chestOpen = loadImage('medp370_final_assets/itemchest_opened.png');
  potionImage = loadImage('medp370_final_assets/potion_item.png');



} // preload end

// main loop variables
let run = false;
let win;

function setup() {
  win = new Canvas(windowWidth, windowHeight);
  percy = new Sprite(windowWidth/2, -5000, percyWidth, percyHeight);
  
  wallL = new Sprite(leftWall.width/2, -leftWall.height/2.55, leftWall.width, leftWall.height, 'static');
  wallL.image = leftWall;
  wallR = new Sprite( windowWidth - rightWall.width/2, -rightWall.height/2.55, rightWall.width, rightWall.height, 'static');
  wallR.image = rightWall;
  wallT = new Sprite(windowWidth/2, -6870, bgTop.width, bgTop.height, 'static');
  wallT.image = bgTop;
  wallB = new Sprite(windowWidth/2,windowHeight-300, windowWidth, 20, 'static');

  for(let i = 0; i <  3; i++){
    health[i] = new Sprite((i+1)*100,50, 90, 80, 'kenetic');
    health[i].image = heart;
  }

  chest = new Sprite(640, -4820, chestClosed.width, chestClosed.height, 'static');
  chest.image = chestClosed;
  chest.scale = 0.5;

  potion = new Sprite(chest.x, chest.y, potionImage.width, potionImage.height, 'n');
  potion.image = potionImage;
  potion.scale = 0.2;


 
  

  // s
  percy.scale= 0.5;
  percy.rotationLock = true;
 
  percy.addAni('idle', standLoad);
  percy.addAni('walk', walkingLoad);
  percy.addAni('attack', attackLoad);

  wolf = new Sprite(800, 275, 14, 30, 'static');
  wolf.scale = 2;
  wolf.addAni('wolfattack', wolfAttackLoad);
  wolf.addAni('wolfwalk', wolfWalkLoad);

  percy.changeAni('idle');
  percy.visible = false;
  wolf.visible = false;
  for(let i = 0; i <  3; i++){
    health[i].visible = false;
  }
  wallL.visible = false;
  wallR.visible = false;
  wallB.visible = false;
  bgTop.visible = false;
}


function draw() {
 
  camera.on();
  
  // percy.debug = true;
  // wolf.debug = true;
  // percy.pixelPerfect = true;
  // wallL.debug = true;
  // wallR.debug = true;
  // wallT.debug = false;
  // chest.debug = false;
  
  
  image(startScreen, 0, 0, win.width, win.height);
  if(kb.presses('enter')){
    run = true;
    percy.visible = true;
    wolf.visible = true;
    wallL.visible = false;
    wallR.visible = false;
    potion.visible = false;
   
    
  }


  if(run){
    background(255)
    
    // image(bgTop, 0, -6800);
    // image(leftWall, 0, -leftWall.height+ windowHeight/1.5);
    // image(rightWall, windowWidth - rightWall.width, -rightWall.height  + windowHeight/1.5);
    image(bg, 0,-bg.height+windowHeight/1.5);
    
   
    movement(percy,speed, win);
    for(let i = 0; i <  3; i++){
      health[i].visible = true;
      health[i].y = camera.y-400;
    }
    checkInteract(percy, chest, potion);
    
   
    
  }
  // console.log(percy.x, percy.y);
  console.log(chest.x, chest.height- 100)
  
  
}  

