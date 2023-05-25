let colors = [     //create a list of colors in a global variable
  ["#4061E5"],
  ["#3a4ecd"],
  ["#596bb0"],
  ["#353d66"],
  ["#3d79cd"],
  ["#3979b8"],
];

function setup() {
  createCanvas(1325, 660);    
noLoop()  
}

function draw() {
  background("#161618");  //change background color
  translate(60,60);
for (let x = 0; x < 6; x++){      //create 6 by 3 grid
   for (let y = 0; y < 3; y++){
      push();
      translate(x * 220,y * 220); //change spacing of squares
    let colorlist = random(colors); //create a local variable that randomizes color list
     fill (colorlist);   //fill with randomizes color list
     rect(0,0,100,100);  //create a small rectangle 
      pop();
   }

}
  
  
}