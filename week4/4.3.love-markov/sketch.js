let rm = RiTa.markov(4);
let data = document.getElementById("source").innerText;
rm.addText(data);

function setup() {
  
  let lines = rm.generate(8);
 
  // find the element to add to
let letter = select("#letter"); 

// add a salutation
letter.child( createP('My Dearest Gaia,'));

// loop through the array of lines, adding each as a new p element
for (let l = 0; l < lines.length; l++){
	let paragraph = createP(lines[l]);
	letter.child(paragraph);
}

// add a closing
letter.child( createP('Love,<br>Markov'));
}


function mousePressed(){
	letter.remove();
	letter = createDiv();
	letter.id("letter");
	setup();
}