function preload(){
  sunImg = loadImage("sun.png");
  earthImg = loadImage("earth.png");
}
var angle = 0;

function setup() {
  createCanvas(1200,1200);
  sun = createSprite(0, 0, 50, 50);
  sun.addImage("sun", sunImg);
  sun.scale = 0.5;
  sun.setCollider("circle", 0,0 ,200);
  sun.debug = true;

  earth = createSprite(500, 50, 50, 50);
  earth.addImage("earth", earthImg);
  earth.scale = 0.1;
}

function draw() {
  background(255,255,255);  
  if(frameCount % 1 === 0 ){
    sun.scale = sun.scale + 0.001;
  }
  if (earth.isTouching(sun)){
    earth.destroy();
  }
  angleMode(DEGREES);
  translate(width/2 , height/2);
  rotate(angle);
  angle = angle + 0.2 ; 
  drawSprites();
}