var iron, iron_move, iron_collided;
var bg, bgImage;


function preload(){
  iron_move =  loadAnimation("images/iron.png");
  bgImage = loadImage("images/bg.jpg");
}

function setup() {
  createCanvas(2000, 1600);

  bg = createSprite(200,390);
  bg.addImage(bgImage);
  bg.scale =0.5;
// 
  iron = createSprite(200,505,20,50);
  iron.addAnimation("still", iron_move);
  iron.scale =0.3;

  // ground = createSprite(200,585,400,10);
 
  // ground.visible = false;
}

function draw() {
 

  if(keyDown("space") ) {
    iron.velocityY = -16;
  }

  // iron.velocityY = mario.velocityY + 0.5;
  // iron.collide(ground);


  drawSprites();
}
