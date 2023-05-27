let img;
function preload(){
   img = loadImage('https://kolbycs.github.io/creative-coding-true/week2/pixels/chief.jpg');
}

function setup() {
  createCanvas(800, 800);
  img.loadPixels();
}

function draw() {
  background(220);
}
