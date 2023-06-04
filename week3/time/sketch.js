let x_hour = 50;
let x_minute = 50;
let x_second = 50;
let x_mil = 50;

let currentSecond;
let milliFreeze = 0;
let mm;

function preload(){
  sun = loadImage('https://kolbycs.github.io/creative-coding-true/week3/time/sun.jpg');  //preload image
  mercury = loadImage('https://kolbycs.github.io/creative-coding-true/week3/time/mercury.jpg')  //preload background
  venus = loadImage('https://kolbycs.github.io/creative-coding-true/week3/time/venus.jpg');  //preload image
  earth = loadImage('https://kolbycs.github.io/creative-coding-true/week3/time/earth.jpg')  //preload background
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  textSize(20);
  text("hour: "+ hour(), 50, 50);
  text("minute: "+ minute(), 50, 75);
  text("second: "+ second(), 50, 100);
  text("millisecond: "+ mm, 50, 125);

  if (currentSecond != second()){
  currentSecond = second();
  milliFreeze = millis();
}

mm = millis() - milliFreeze;

push();
line(50, 150, 50, 350);
line(550, 150, 550, 350);
pop();

push();

noStroke();
fill("blue");

x_hour = map(hour(), 0, 23, 50, 550);
circle(x_hour, 180, 40);

x_minute = map(minute(), 0, 59, 50, 550);
circle(x_minute, 240, 40);

x_second = map(second(), 0, 59, 50, 550);
circle(x_second, 300, 40);

x_mil = map(mm, 0, 999, 50, 550);
circle(x_mil, 350, 20);

pop();

}