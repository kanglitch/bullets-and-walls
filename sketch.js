var bullet,speed,weight;
var wall,thickness;




function setup() {
  createCanvas(1600,400);

speed=random(223,321)
weight=random(30,52)
thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor=color(225)


  wall=createSprite(1200,200,thickness,height/2)
  wall.shapecolor=color(80,80,80)
  bullet.shapecolor=color(80,80,80)
}

function draw() {
if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
var deformation=0.5 * weight * speed* speed/22509;
if(deformation>10)
{
  bullet.shapeColor=color(255,0,0);
}

if(deformation<10 );
{
  bullet.shapeColor=color(0,255,0);

}


}
}