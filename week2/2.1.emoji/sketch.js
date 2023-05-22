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
nofill()
stroke("black")
strokeWeight(6)
line(150, 180, 180, 180); // Left eye
line(220, 180, 250, 180); // Right eye

// Draw mouth
line(150, 250, 250, 250);

  
}