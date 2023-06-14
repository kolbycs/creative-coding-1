let x = 0
let y = 200
let xspeed = 5
function preload(){
  obj = loadImage('https://kolbycs.github.io/creative-coding-true/week5/final/target.jpg');
  man = loadImage('');
}

function setup() {
  createCanvas(1080, 720);
}

function draw() {
  background('grey');

  if (x < 0 || x > width){  // detect collosion with walls
    xspeed = xspeed * -1; // reverse the x direction
}

x = x + xspeed; // iterate x
image(obj,x-40,40,80,80);

}