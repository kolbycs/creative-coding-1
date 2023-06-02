let x_hour = 50;
let x_minute = 50;
let x_second = 50;
let x_mil = 50;

let currentSecond;
let milliFreeze = 0;
let mm;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  textSize(20);
  text("hour:"+ hour(), 50, 50);
  text("minute:"+ minute(), 50, 75);
  text("second:"+ x_second(), 50, 100);
  text("millisecond:"+ mm, 50, 125);

  if (currentSecond != second()){
  currentSecond = second();
  milliFreeze = millis();
}

mm = millis() - milliFreeze;






}