var bullet = createSprtie (50,25,200,50);
bullet.shapeColor = "white"
var wall = createSprite (1200,200,thickness,height/2);
wall.shapeColor = "80,80,80"
var spead,weight; 
var thickness = random (22,83)

function setup ()
{
 speed = random (223,321);
 weight = rando (30,52);
 }

function draw () {
createCanvas (1600,400);

car.velocityX = speed;
deformation = 0.5*weight*speed*speed/22500

if (hascollided(bullet,wall))
{
    bullet.velocityX = 0;   
    var damage = 0.5 * weight* speed * speed/(thickness*thickness*thickness);

    if (damage>10)
{
   wall.spapecolour=color(255,0,0);
}

if (damage < 10)
{
    wall.shapeColor = color(0,255,0)
}

    if (wall.x-car.x <(car.width + wall.width)/2)
    {
     car.velocityX = 0;
        var deformation = 0.5*weight*speed*speed/22509;
            
        if (deformation > 180)
        {
            car.shapeColor = color (255,0,0);
        }
        if (deformation < 180 && deformation > 100)
        {
            car.shapeColor = color (230,230,0);
        }

        if (deformation < 100)
        {
            car.shapeColor = color(0,255,0);
        }
    }
}
}
function hascollided(Lbullet, Lbullet)
{
   bulletRightEdge=LbuLLet.X; +LbuLLet.width;
   waLLleftedge=lwall.X;

if (bulletleftedeg>=waLLlefted)
{    
    return true
}
return false;   
}