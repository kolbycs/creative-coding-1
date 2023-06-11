/*

This is a sketch offering a template for generating a book
based on a Markov-chain analysis of some existing text. You 
are welcome to use it. 

Note: this is rather slow. It may take a few minutes to generate a book.

What I have done:
 - created the workflow 
 - set up options that usually produce a 50K book
 
What you need to do:
 - provide your own text file
 - adjust the options to make it work well
 - tweak the book presentation to make it look good
 - check the comments below for places where you can 
   make adustments
   
*/


let lines, fullText, mv,c,wc;

function preload() {
  lines = loadStrings("warandpeace.txt");
}

function setup() {
  noCanvas();
  
  // the base container for the book
  let content = createElement("div");
  content.attribute("id","content");

  // build the markov model
  // see options at: https://rednoise.org/rita/reference/RiTa/markov/index.html 
  mv = RiTa.markov(2, {'disableInputChecks': true, 'temperature': 100, 'maxAttempts': 9999});
  mv.addText(lines.join(" "));
  
  // creates a title for the book by generating a sentence
  content.child(createElement("h1", mv.generate(1)));
  
  
  c = 1;
  do {
    
    // create chapter titles from single sentences.
    content.child( createElement("h2","Chapter " + c + ": " + mv.generate(1)));
    let newText = "";
    // use random() to specify the minimum and maximum
    // paragraphs per chapter
    for (let p = 0; p < random(12,60); p++ ){
     
      // generate a random number of sentences, using
      // random() to dictate min and max sentences
      let sentGen = mv.generate(floor(random(1,7)));
      
      let sentences = (typeof sentGen == 'object') ? sentGen.join(" ") : sentGen;
            newText += "<p>" + sentences  + "</p>";   
    }
    content.child(createElement("div", newText));
   
    c++;
  }
  while (c < 50); // the number of chapters to generate.
    
  // Make it into a book
  Bindery.makeBook({
    content: '#content',
    
    rules: [
      Bindery.PageBreak({
        selector: "h1",
        position: "after",
      })]
  });
  
}
