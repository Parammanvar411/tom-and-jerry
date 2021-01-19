var garden=createSprite(400,400);
garden.addAnimation(garden.png)
var cat= createSprite(200,200,10,10);
var mouse=createSprite(100,100,10,10);


function preload() {
    cat=loadImage(tomOne.png);
    mouse=loadImage(jerryOne.png);
    
}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(300,200,10,10);
    jerry=createSprite(200,200,10,10);

}

function draw() {
    background(255);
   cat.addAnimation("tomOne.png");
mouse.addAnimation("jerryOne.png");
    


    keyPressed();
    drawSprites();
}


function keyPressed(){


}



}
