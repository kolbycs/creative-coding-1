let x = 0;
let y = 0;
let xspeed = 1;
let yspeed = 1;
function preload(){
  img = loadImage('https://kolbycs.github.io/creative-coding-true/week3/3.1.bounce/cowa.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // check for collision with left and right edge, top and bottom edge
  if (x < 0 | x > width){
    xspeed = xspeed * -1; // reverse the x direction
}
  if (y < 0 | y > height){
    yspeed = yspeed * -1; // reverse the y direction
  }
  x = x + xspeed; // iterate x
  y = y + yspeed; // iterate y
  
  image(img,x,y,50,50);
  }

