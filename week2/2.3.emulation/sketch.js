function setup() {
  createCanvas(1325, 660);
noLoop()
}

function draw() {
  background("#161618");

  translate(60,60);
for (let x = 0; x < 6; x++){
   for (let y = 0; y < 3; y++){
      push();
      translate(x * 220,y * 220); //change spacing of circles
      fill (random(0,144),100,144);       //change inside color
      stroke(random (144,255),200,255);        //change outline color randomly
      strokeWeight(10);     //change outline thickness
     rect(0,0,100,100);
      pop();
   }

}
  
  
}