//create the variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var survivalTime;

function preload(){
  monkey_running =              loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png"," sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  //create the canvas
  createCanvas(600,400);
  
  //create the monkey
  monkey = createSprite(80,310,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //create the ground
  ground = createSprite(600,350,1200,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  console.log(ground.x);
  
  //create the time and score
  survivalTime = 0;
}


function draw() {

  //add the background
  background("white");
  
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.5;
  
  ground.velocityX = -6;
  
  //ground movement
     if (ground.x < 0){
      ground.x = ground.width/2;
     }  
  
  //jump when the space key is pressed
      if(keyDown("space") && monkey.y >= 100) {
       monkey.velocityY = -12;
     }
  

  //make the monkey colllide with the ground
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time = "+ survivalTime,300,50);
  
  //call the functions
  food();
  obstacle();
  
  //draw the sprites
  drawSprites();
}

function food() {
   //write code here for food 
      if (World.frameCount % 80 === 0) {
      var banana  = createSprite(600,120,40,10);
      banana.y = Math.round(random(80,200));
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.velocityX = -3;
    
     //assign lifetime to the variable
      banana.lifetime = 600/3;
    
      //adjust the depth
      banana.depth = monkey.depth;
      monkey.depth = monkey.depth + 1;
    
    }
}

function obstacle() {
     //write code here for food 
      if (World.frameCount % 300 === 0) {
      var obstacle  = createSprite(600,310,40,10);
      obstacle.addImage(obstacleImage);
      obstacle.scale = 0.2;
      obstacle.velocityX = -5;
    
      //assign lifetime to the variable
      obstacle.lifetime = 600/5;
    
      }
}
