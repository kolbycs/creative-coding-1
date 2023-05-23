function setup() {
  createCanvas(1200, 1200);
noFill()
}

function draw() {
  background(220);

translate(100,100);
for (let x = 0; x < 8; x++){
   for (let y = 0; y < 8; y++){
      push();
      translate(x * 100 + random(-50, 50), y * 100 + random(-50, 50)); // add randomness from a range of numbers
        fill ('black');       //change inside color
      stroke('white');        //change outline color
      strokeWeight('40');     //change outline thickness
     ellipse(0,0,100,100);
      pop();
   }

}
}
