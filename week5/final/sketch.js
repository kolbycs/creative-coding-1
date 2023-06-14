let x = 0
let y = 0
let yspeed = 5
let xspeed = 5
let released = false;
function preload(){
  obj = loadImage('https://kolbycs.github.io/creative-coding-true/week5/final/obj.jpeg');
  target = loadImage('https://kolbycs.github.io/creative-coding-true/week5/final/target.jpg');
  man = loadImage('https://kolbycs.github.io/creative-coding-true/week5/final/man.jpg');
}

function setup() {
  createCanvas(1080, 720);
}

function draw() {
  background('grey');
  
if (!released && mouseIsPressed) {
  released = true; // Release the object
}

if (released) {
  if (x < 0 || x > width || y < 0 || y > height) {
    // Object hits a wall, reset its position
    x = 0;
    y = 0;
    released = false;
  } else if (dist(x, height / 2, width * 3 / 4, y) < 40) {
    // Object hits the target, make it disappear
    released = false;
  }
}

if (y < 0 || y > height){ //detect collision with walls
  yspeed = yspeed * -1; // reverse the y direction
  
}
y = y + yspeed; //iterate y
x = x + xspeed; //iterate x

if (released) {
image(obj,x-40,height/2-40,80,80);  //create object on x axis
}
image(target,width*3/4,y-40,80,80);  //create target on y axis
image(man,-10,height/2-40,80,80);            //create stationary man to the left end of x axis 
}