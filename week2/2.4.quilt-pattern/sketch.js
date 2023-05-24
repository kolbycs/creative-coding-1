function setup() {
  createCanvas(400, 400);
noLoop()
}

function draw() {
  background(220);
  
  angleMode(DEGREES);

for (let x = 0; x < 10; x++){
  for (let y = 0; y < 10; y++){
    push();
    translate(x * 100, y * 100);
    
    rect(50,50,100,100)
    // tile drawing code here

    pop();
  }
}
}