class Game{
    constructor(){

    }

    start(){
        
        gamer=createSprite(displayWidth/2,displayHeight-50,10,10)
       gamer.addImage(rocketImg)
        gamer.scale=0.3
        
           // spawnUfo()
            
        }
   
           spawnUfo() {
                //write code here to spawn the clouds
               //if (frameCount % 10 === 0) {
                  var ufo = createSprite(displayWidth/2,displayHeight/2,40,10);
                 
                  ufo.addImage(ufoImg);
                ufo.scale = 0.5;
                //ufo.velocityX = -3;
                  
                   //assign lifetime to the variable
                   //ufo.lifetime = 134;
                  
                  //adjust the depth
                 // cloud.depth = trex.depth;
                  //trex.depth = trex.depth + 1;
                  //cloudsGroup.add(cloud);
               // }
            }
        }
              



    











