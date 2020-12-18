var form,player,game;
var rocket;
var gamer;
var rocketImg,ufoImg,bulletImg;

function preload(){
    rocketImg=loadImage("Rocket.png")
    ufoImg=loadImage("ufo.png")
    bulletImg=loadImage("bullet.png")
}

function setup(){
    database=firebase.database();
    createCanvas(displayWidth,displayHeight);
   form=new Form()
player=new Player()

}

function draw(){
   
form.display()

drawSprites()
}
function keyPressed(){
    if(keyDown("A")){
        bullet=createSprite(gamer.x,gamer.y,10,10)
        bullet.velocityY=-5;
        bullet.lifetime=100;
        bullet.addImage(bulletImg)
        bullet.scale=0.1
    }

}


