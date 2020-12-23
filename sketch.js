var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

car= createSprite(100,300,70,20);
car.velocityX= 4;
car.shapeColor= "blue";

wall= createSprite(700,300,30,200);
wall.shapeColor= "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(IS_Touching(car,wall)){
    car.shapeColor= "yellow";
    fill("white");
    textSize(35);
    text("TOUCHED!!",200,400);
    }
    else{
      car.shapeColor = "blue"; 
    }

    BOUNCE_OFF(car,wall);
  drawSprites();
}

