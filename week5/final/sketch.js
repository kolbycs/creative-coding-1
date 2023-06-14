let x = 0
let y = 0
let yspeed = 5
let xspeed = 5
function preload(){
  obj = loadImage('https://kolbycs.github.io/creative-coding-true/week5/final/obj.jpeg');
  target = loadImage('https://kolbycs.github.io/creative-coding-true/week5/final/target.jpg');
}

function setup() {
  createCanvas(1080, 720);
}

function draw() {
  background('grey');

  if (x < 0 || x > width){  // detect collosion with walls
    xspeed = xspeed * -1; // reverse the x direction
}

if (y < 0 || y > height){ //detect collision with walls
  yspeed = yspeed * -1; // reverse the y direction
  
}
  y = y + yspeed; //iterate y
x = x + xspeed; // iterate x

image(obj,x-40,height / 2 - 40,80,80);  //create object on x axis
image(target,width / 2 - 40, y-40,80,80);  //create target on y axis
}