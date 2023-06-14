let x = 0
let y = 200
let xspeed = 5
function preload(){
  img = loadImage('https://kolbycs.github.io/creative-coding-true/week5/final/target.jpg');
}

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background('grey');

  if (x < 0 || x > width){  // detect collosion with walls
    xspeed = xspeed * -1; // reverse the x direction
}

x = x + xspeed; // iterate x
image(img,x-40,y-40,80,80);

}