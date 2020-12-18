class Game{
    constructor(){

    }

    start(){
        
        gamer=createSprite(displayWidth/2,displayHeight-50,10,10)
       gamer.addImage(rocketImg)
        gamer.scale=0.3
        if(keyDown("L")){
            gamer.velocityX=-9
            
            }
            
            if(keyDown("R")){
            gamer.velocityX=9
            
            }


    }









}