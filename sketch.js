
function setup() 
{
 createCanvas(windowWidth, windowHeight);

  
}
 function preload() {
  myImg = loadImage("Saul Leiter.jpg");
}


function draw() 
{
  
  image(myImg, 0, 0,windowWidth, windowHeight);
    
   
    background(myImg);
    textFont('futura')
    fill(225);
    textSize(30);
    text("we were meant to be (but you didn't see)",windowWidth/2-250, windowHeight/2-170);
    
    textFont('Futura')
    fill(0,0,0);
    textSize(40);
    
    text(hour(),windowWidth/2-550,100);
    textSize(40);
   
    text(minute(),windowWidth/2,100);
    textSize(40);
   
    text(second(),windowWidth/2+550,100);

 
}
 
