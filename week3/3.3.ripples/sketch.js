let ripple_x = 0;
let ripple_y = 0;
let ripple_d = 0;
let ripple_all = [];
class Rippler {
  constructor (x,y){
   this.x = x,
   this.y = y,
   this.d = 0
  }
draw(){
  this.d += 1;
  circle(this.x, this.y, this.d);
}

}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  stroke("white");
  strokeWeight(5);
  noFill();

  for (Let i = 0; i < ripple_all.length; i++){
    ripple_all[i].draw();
  }
  
  //ripple_d += 1;
  //circle(ripple_x, ripple_y, ripple_d);

  //push();
  //fill("white");
  //strokeWeight(1);
  //textSize(50);
  //text("ripple_x:" + ripple_x, 50, 50);
  //text("ripple_y:" + ripple_y, 50, 100);
 // pop();
}

function mousePressed(){

ripple_x = mouseX;
ripple_y = mouseY;
ripple_d = 0;
ripple_all.push(new Rippler(mouseX, mouseY));

}