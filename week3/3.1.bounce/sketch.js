let x = 0;
let y = 0;
let xspeed = 1;
let yspeed = 1;
function preload(){
  img = loadImage('https://kolbycs.github.io/creative-coding-true/week3/3.1.bounce/cowa.jpg');
}
let texts = [     //create a list of text in a global variable
  ['COWabunga'],
  ['rAdIcAl'],
  ['mOOOOOOO'],
  ['over the MOOOOn'],
];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // check for collision with left and right edge, top and bottom edge
  if (x < 0 | x > width){
    xspeed = xspeed * -1; // reverse the x direction
    let textslist = random(texts);  //call back to array, randomize
    displayText(textslist);
  }
  if (y < 0 | y > height){
    yspeed = yspeed * -1; // reverse the y direction
    let textslist = random(texts);
    displayText(textslist);
  }
  x = x + xspeed; // iterate x
  y = y + yspeed; // iterate y
  
  translate(width/2,height/2);
  image(img,x,y,60,60);
  
  function displayText(message) {
    fill(255, 0, 255); // text color to magenta
    textAlign(CENTER); // align text to center
    textSize(30); // text size
  
    text(message, width / 2, height / 2); // display text in center of canvas
  }
  }

