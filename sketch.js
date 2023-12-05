let percy;
let standLoad, stand;
let walkingLoad, walk;
let attackLoad, attack;

function preload(){
  standLoad = loadAnimation('medp370_final_assets/percy_idle.png');
  walkingLoad = loadAni(
                       'medp370_final_assets/percy_step_left.png',
                       'medp370_final_assets/percy_step_right.png',
                       );

  attackLoad = loadAni('medp370_final_assets/percy_swing1.png',
                       'medp370_final_assets/percy_swing1.png',
                       'medp370_final_assets/percy_swing1.png',
                       'medp370_final_assets/percy_swing1.png',
                       'medp370_final_assets/percy_swing1.png');
}

function setup() {
  new Canvas(1200, 600);
 
  
  percy = new Sprite(500, 275, 320, 320);
  percy.scale= 0.5;
  
  percy.addAni('idle', standLoad);
  percy.addAni('walk', walkingLoad);
  percy.addAni('attack', attackLoad);

}

function draw() {
  //background(220);
  clear();
  percy.debug = true;
  

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

}