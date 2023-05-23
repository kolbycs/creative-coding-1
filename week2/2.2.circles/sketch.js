function setup() {
  createCanvas(1200, 1200); 
noLoop()    // stop circles from moving
}

function draw() {
  background(220);

translate(100,100);
for (let x = 0; x < 8; x++){
   for (let y = 0; y < 8; y++){
      push();
      translate(x * 145,y * 145); //change spacing of circles
      fill (random(0,144),100,144);       //change inside color
      stroke('white');        //change outline color
      strokeWeight(random(5,25));     //change outline thickness
     ellipse(0,0,100,100);
      pop();
   }

}
}
