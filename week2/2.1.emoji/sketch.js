function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200,200,250,250);
  stroke("gold"); // set the stroke (line) color 
  strokeWeight(6); // set the stroke thickness
  fill("yellow"); // set the fill color
  
// draw an ellipse with 250 pixel diameter
  // with its center at x position 200
  // and at y position 200
  
  // Draw eyes
  fill("black");
  circle(width / 2 - 50, height / 2, 30);
  circle(width / 2 + 50, height / 2, 30);
  
  // Draw mouth
  noFill();
  stroke(0);
  strokeWeight(10);
  arc(width / 2, height / 2 + 50, 80, 40, 0, PI);

}