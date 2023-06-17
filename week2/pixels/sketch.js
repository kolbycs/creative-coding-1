let img;
let sampleX = 30; //change size of pixels
let sampleY = 30;
function preload(){
   img = loadImage('https://kolbycs.github.io/creative-coding-true/week2/pixels/chief.jpg'); //load image 
}

function setup() {
  createCanvas(800, 800);
  img.loadPixels();  //load image data
}

function draw() {
  background(220);
  noStroke(); //hide outline
  
for (let x = 0; x <= img.width; x += sampleX ) { //code from video to set up pixel data

for (let y = 0; y <= img.height; y += sampleY ){

var index = (x + y * img.width) * 4;

var r = img.pixels[index + 0];
var g = img.pixels[index + 1];
var b = img.pixels[index + 2];

fill(r,g,b); //fill with color data 

triangle(x, y, x + sampleX, y, x + sampleX / 2, y + sampleY); //create triangles

rect(x, y, sampleX, sampleY);

circle(x + sampleX / 2, y + sampleY / 2, sampleX);

}

}

}
