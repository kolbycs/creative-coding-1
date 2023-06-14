let x = 0;
let y = 0;
let yspeed = 2;
let xspeed = 5;
let released = false;
let targetHit = false;

let targetX = 0; // Initial x position of the target
let targetY = 0; // Initial y position of the target
let targetYspeed = 2; // Initial y speed of the target
let targetDirection = 1; // Initial direction of the target's movement 

function preload() {
  obj = loadImage('https://kolbycs.github.io/creative-coding-true/week5/final/obj.jpeg');
  target = loadImage('https://kolbycs.github.io/creative-coding-true/week5/final/target.jpg');
  man = loadImage('https://kolbycs.github.io/creative-coding-true/week5/final/man.jpg');
  bg = loadImage('https://kolbycs.github.io/creative-coding-true/week5/final/background.jpeg'); // Changed variable name to "bg"
}

function setup() {
  createCanvas(1080, 720);
  targetX = width * 3 / 4;
  targetY = height / 2;
}

function draw() {
  background(bg); // Changed variable name to "bg"

  if (!released && mouseIsPressed) {
    released = true; // Release the object
  }
  
  if (released) {
    if (x < -40 || x > width || targetHit) {
      // Object hits a wall or target, reset its position and disappear
      x = 0;
      y = 0;
      released = false;
      targetHit = false;
    }
  }

  if (y < 0 || y > height) {
    yspeed = -yspeed; // Reverse the y direction when hitting the walls
  }
  
  y = y + yspeed; // Iterate y
  x = x + xspeed; // Iterate x

  if (released && !targetHit) {
    image(obj, x - 40, height / 2 - 40, 80, 80); // Create object on x-axis
  }
  
  // Calculate the distance between the centers of the object and target
  let distance = dist(x, y, targetX, targetY);
  let objectRadius = 40;
  let targetRadius = 40;

  if (distance < objectRadius + targetRadius) {
    targetHit = true; // Collision detected
  }

  // Restore the target's position and speed if the object is reset
  if (!released) {
    targetY = targetY + targetYspeed * targetDirection;
  }
  
  // Reverse the target's direction when hitting the walls
  if (targetY < targetRadius || targetY > height - targetRadius) {
    targetDirection *= -1;
  }
  
  targetY = targetY + targetYspeed * targetDirection; // Iterate target's y-position

  image(target, targetX - targetRadius, targetY - targetRadius, 80, 80); // Create target on y-axis

  image(man, -10, height / 2 - 40, 80, 80); // Create stationary man to the left end of x-axis
}






