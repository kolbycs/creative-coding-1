function setup() {
  createCanvas(2000, 2000);
  noLoop();
}

// I chose to do 'square in a square'' as it seemed more doable then most of the other designs.
https://www.internationalquiltmuseum.org/quilt/19970070181


function draw() {
  background(0,0,140);

  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 15; y++) {
      push();
      translate(x * 130, y * 130);
           if ((x + y) % 2 == 0) {   //uses the sums of x and y and divides it by 2 to determine if odd or even. Uses the answer to assign a color scheme, creating a checkerboard pattern.
                                     //uses the Modulus (Division Remainder) for the check
        stroke(0, 0, 128); // dark blue outline
        fill(255); // white interior
      } else {    // if odd, then this color scheme
        stroke(255); // white outline
        fill(0, 0, 128); // dark blue interior
      }
      strokeWeight(30);
      rect(50, 50, 100, 100);

      pop();
    }
  }
}
