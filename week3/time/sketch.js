let x_hour = 50;
let x_minute = 50;
let x_second = 50;
let x_day = 50;

function preload(){
  sun = loadImage('https://kolbycs.github.io/creative-coding-true/week3/time/sun.jpg');  //preload image
  mercury = loadImage('https://kolbycs.github.io/creative-coding-true/week3/time/mercury.jpg')  //preload background
  venus = loadImage('https://kolbycs.github.io/creative-coding-true/week3/time/venus.jpg');  //preload image
  earth = loadImage('https://kolbycs.github.io/creative-coding-true/week3/time/earth.jpg')  //preload background
}

function setup() {
  createCanvas(1200, 1000); //600, 400

sun.resize(500,500);
mercury.resize(80,100);
venus.resize(150,150);
earth.resize(150,150);

}

function draw() {
  background(0);

  textSize(20);
  fill(255);
  text("hour: "+ hour(), 50, 50);
  text("minute: "+ minute(), 50, 75);
  text("second: "+ second(), 50, 100);
  text("day: "+ day(), 50, 125);

push();
line(50, 150, 50, 350);
line(550, 150, 550, 350);
pop();

push();

x_hour = map(hour(), 0, 23, 50, 550);
image(sun, x_hour, 10, 200);

x_minute = map(minute(), 0, 59, 50, 550);
image(mercury, x_minute, 530, 200);

x_second = map(second(), 0, 59, 50, 550);
image(venus, x_second, 650, 200);

x_day = map(day(), 0, 31, 50, 550);
image(earth, x_day, 850, 200);

pop();

}