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
  text("day: "+ day(), 50, 50);
  text("hour: "+ hour(), 50, 75);
  text("minute: "+ minute(), 50, 100);
  text("second: "+ second(), 50, 125);
 
push();
line(50, 150, 50, 350);
line(550, 150, 550, 350);
pop();

push();

y_day = map(day(), 0, 23, 50, 550);
image(sun, y_day, 10, 200);

y_hour = map(hour(), 0, 59, 50, 550);
image(mercury, y_hour, 530, 200);

y_minute = map(minute(), 0, 59, 50, 550);
image(venus, y_minute, 650, 200);

y_second = map(second(), 0, 59, 50, 550);
image(earth, y_second, 850, 200);

pop();

}