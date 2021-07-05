
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;

var score
var ground,groundImage;

var obstacleGround,fruitGround;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 // groundImage=loadImage("ground.png");
  obstacleImage=loadImage("obstacle.png");
  
  
}



function setup() {
createCanvas(400, 400);

// 
  
 monkey=createSprite(70,348,20,20) ;
 monkey.addAnimation("running",monkey_running) ;
 // monkey.addAnimation("collided",monkey_collided)
  monkey.scale=0.1;
  
  ground = createSprite(560,389,400,20);
  ground.x = ground.width /2;
 
  
 
  bananaGroup=createGroup();
  obstacleGroup=createGroup()
  
  score=0;
}


function draw() {
 background("pink");
  
 if (ground.x < 0){
   ground.x=groud.width/2 ;
 }
 spwanObstacle();
 spwanBanana();
   
if (keyDown("space")&& monkey.y >=60 ) {
  monkey.velocityY=-13;
    }
  
 if (bananaGroup.isTouching(monkey)){
   bananaGroup.destroyEach();
   score=score+1;
 }
  
  
  
       monkey.velocityY=monkey.velocityY+0.8 
 // monkey.velocityY=0
  
  monkey.collide(ground);
  
drawSprites();
fill("green")
 text("score:"+ score,350,30) ;
  
  
  
  fill("green");
 textSize(20) ;
 var survivalTime=Math.ceil(frameCount/frameRate()) 
 text("survival Time:"+survivalTime,30,30) 
  
}



function spwanBanana() {
  
  if (frameCount % 120 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
   banana.addImage(bananaImage);
    banana.scale = 0.1;
     banana.velocityX = -3;
    
    bananaGroup.add(banana);
  }
}
function spwanObstacle(){
  
 if(frameCount %120===0) {
   var obstacle=createSprite(560,360,40,10);
 //  obstacle.y=Math.round(random(80,120));
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.1
   obstacle.velocityX=-5;
   obstacleGroup.add(obstacle);
 }
  
}




