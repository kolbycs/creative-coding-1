let y_day = 50; 
let y_hour = 50; 
let y_minute = 50;
let y_second = 50;

function preload(){
  sun = loadImage('https://kolbycs.github.io/creative-coding-true/week3/time/sun.jpg');  //preload sun
  mercury = loadImage('https://kolbycs.github.io/creative-coding-true/week3/time/mercury.jpg')  //preload mercury
  venus = loadImage('https://kolbycs.github.io/creative-coding-true/week3/time/venus.jpg');  //preload venus
  earth = loadImage('https://kolbycs.github.io/creative-coding-true/week3/time/earth.jpg')  //preload earth
}

function setup() {
  createCanvas(1200, 1000); 
}

function draw() {
  background(0);

  //textSize(20);
  //fill(255);
  //text("day: "+ day(), 50, 50);
  //text("hour: "+ hour(), 50, 75);
  //text("minute: "+ minute(), 50, 100);
  //text("second: "+ second(), 50, 125);
 
push();

y_day = map(day(), 0, 23, 150, 350); //map different units of time to map a vertical path
image(sun, 10, y_day, 500, 500);    //apply path calculated to the image

y_hour = map(hour(), 0, 59, 150, 350);
image(mercury, 530, y_hour, 125, 125);

y_minute = map(minute(), 0, 59, 150, 350);
image(venus, 760, y_minute, 125, 125);

y_second = map(second(), 0, 59, 150, 350);
image(earth, 1000, y_second, 125, 125);

pop();

}