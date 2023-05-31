let speedfactor = 3;      //define variables
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0; 
let y = 0;
function preload(){
  img = loadImage('https://kolbycs.github.io/creative-coding-true/week3/3.2.follower/donkey.jpg');  //preload image
  }
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (mouseX > x){             //check for directions
    xspeed = speedfactor;
  }else{
    xspeed = -speedfactor;
  }
 
  if (mouseY > y){
    yspeed = speedfactor;
  }else{
    yspeed = -speedfactor;
  }

  x += xspeed; //update values of x,y  
  y += yspeed; 

  if (dist(mouseX,mouseY)<5){   //if sprite gets too close to cursor, reset position
    x=0;
    y=0;
  }

  image(img,x-50,y-50,100,100);   //create sprite



}