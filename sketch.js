var  backgroundImage,bowImage,blue_balloonImage,green_balloonImage,pink_balloonImage,red_balloonImage,arrowImage;
var bow,blueB,greenB,pinkB,redB,arrow,arrowGroup;

var score;

function preload(){
  //load your image here
  backgroundImage=loadImage("background0.png");
  bowImage=loadImage("bow0.png");
  blue_balloonImage=loadImage("blue_balloon0.png")
  green_balloonImage=loadImage("green_balloon0.png")
  pink_balloonImage=loadImage("pink_balloon0.png")
  red_balloonImage=loadImage("red_balloon0.png")
  arrowImage =loadImage("arrow0.png")
}
  

function setup() {
  createCanvas(600, 600);
  //creating background
  scene=createSprite(0,0,600,600);
  scene.addImage(backgroundImage);
  scene.scale=2.8
  
  //creating bow
  bow=createSprite(480,220,20,50);
  bow.addImage(bowImage);
  bow.scale=1
  
  //add balloons in group 
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
}

  score=0

function draw() {
  //add code here
  scene.velocityX=-3;
  if(scene.x<0){
   scene.x=scene.width/2
  }
  
  bow.y =mouseY;
  
  if(keyDown("space")){
    CreateArrow();
  }
  
  
var select_balloon = Math.round(random(1,4));
  if (frameCount % 100 == 0){
   if (select_balloon == 1){
    redBalloon();
  }else if (select_balloon == 2){
    greenBalloon();
  }else if (select_balloon == 3){
    blueBalloon();
  }else if (select_balloon == 4){
    pinkBalloon();
  }    
}
  
  
  if (arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  if (arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
  
  if (arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
  
  if (arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
  }
  
    drawSprites();
    text("Score:" + score,500,50);
}

//write code here to spawn balloons
function redBalloon(){
  var red = createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 100;
  red.scale = 0.1;
  redB.add(red)
  return red
}

function blueBalloon(){
  var blue = createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue)
  return blue
}

function greenBalloon(){
  var green = createSprite(0,Math.round(random(20,370)),10,10);
  green .addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green)
  return green
}

function pinkBalloon(){
   var  pink = createSprite(0,Math.round(random(20,370)),10,10);
   pink .addImage( pink_balloonImage);
   pink.velocityX = 3;
   pink.lifetime = 150;
   pink.scale = 1;
   pinkB.add( pink)
   return pink
}

//creating arrow
function CreateArrow(){
   var arrow = createSprite(410,220,60,10);
   arrow.addImage(arrowImage);
   arrow.y=bow.y;
   arrow.velocityX = -4;
   arrow.lifetime = 150;
   arrow.scale = 0.3;
   arrowGroup.add(arrow)
   return arrow
}


  
