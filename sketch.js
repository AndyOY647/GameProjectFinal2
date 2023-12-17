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

let chest = [];
let chestRadius = [];
let potion = [];

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
  //Before main loop
  win = new Canvas(windowWidth, windowHeight);
 
  wallL = new Sprite(leftWall.width/2, -leftWall.height/2.55, leftWall.width, leftWall.height, 'static');
  wallL.image = leftWall;
  wallR = new Sprite( windowWidth - rightWall.width/2, -rightWall.height/2.55, rightWall.width, rightWall.height, 'static');
  wallR.image = rightWall;
  wallT = new Sprite(windowWidth/2, -6880, bgTop.width, bgTop.height, 'static');
  wallT.image = bgTop;
  wallB = new Sprite(windowWidth/2,windowHeight-300, windowWidth, 20, 'static');

  for(let i = 0; i <  3; i++){
    health[i] = new Sprite((i+1)*100,50, 90, 80, 'kenetic');
    health[i].image = heart;
  }

  for(let j  = 0; j < 3; j++){
    chest[j] = new Sprite(640, -4820, chestClosed.width, chestClosed.height, 'static');
    chestRadius[j] = new Sprite(640, -4820, chestClosed.width *2 , chestClosed.height*2, 'static');
    chest[j].image = chestClosed;
    chestRadius[j].scale = 0.5;
    chestRadius[j].visible = false;
    chest[j].scale = 0.5;
  }
  chest[1].y = -3000;
  chestRadius[1]. y = -3000;
  chest[2].y = -1400;
  chest[2].x = 1000;
  chestRadius[2].x = 1000;
  chestRadius[2].y = -1400;

 
  
  for(let p = 0; p < 3; p++){
    potion[p] = new Sprite(chest[p].x, chest[p].y, potionImage.width, potionImage.height, 'n');
    potion[p].image = potionImage;
    potion[p].scale = 0.2;
    potion[p].visible = false;
  }
  

 
  //player
  percy = new Sprite(windowWidth/2, -5000, percyWidth, percyHeight);
  percy.scale= 0.5;
  percy.rotationLock = true;
 
  percy.addAni('idle', standLoad);
  percy.addAni('walk', walkingLoad);
  percy.addAni('attack', attackLoad);

  percy.changeAni('idle');
  percy.visible = false;

  //enemy
  wolf = new Sprite(800, 275, 14, 30, 'static');
  wolf.scale = 2;
  wolf.addAni('wolfattack', wolfAttackLoad);
  wolf.addAni('wolfwalk', wolfWalkLoad);
  wolf.visible = false;

  //health
  for(let i = 0; i <  3; i++){
    health[i].visible = false;
  }

  //wall
  wallL.visible = false;
  wallR.visible = false;
  wallB.visible = false;
  bgTop.visible = false;
  chestRadius.visible = false;

} // setup ends


function draw() {
 
  camera.on();
  
  // percy.debug = true;
  // wolf.debug = true;
  // percy.pixelPerfect = true;
  // wallL.debug = true;
  // wallR.debug = true;
  // wallT.debug = false;
  // chest.debug = true;
  // chestRadius.debug = false;
  
  
  image(startScreen, 0, 0, win.width, win.height);
  if(kb.presses('enter')){
    run = true;
    percy.visible = true;
    wolf.visible = true;
    wallL.visible = false; // wallsprites created for collision only
    wallR.visible = false;
    wallT.visible = false;
    potion.visible = false;
    
   
    
  }


  if(run){
    background(255)
    
    // image(bgTop, 0, -6800);
    // image(leftWall, 0, -leftWall.height+ windowHeight/1.5);
    // image(rightWall, windowWidth - rightWall.width, -rightWall.height  + windowHeight/1.5);
    image(bg, 0,-bg.height+windowHeight/1.5);
    // console.log(chest.length);
    
   
    movement(percy,speed, win);
    for(let i = 0; i <  3; i++){
      health[i].visible = true;
      health[i].y = camera.y-400;
    }
    
    checkInteract(percy, chest, potion);
    
   
    
  }
  console.log(percy.x, percy.y);
  // console.log(chest.x, chest.height- 100)
  
  
}  

