let words = "never odd or even";
let wc = 0;

function setup() {
  let content = createElement("div");
   content.attribute("id","content");
   content.style("font-family", "Times New Roman, serif");
  content.child(createElement("h1","Life, " + words + "."));

  // make a sentence
  
  while( wc < 50000){
    content.child(createElement("h2",String(words+" ").repeat(random(2,8)).toUpperCase()));
    
    for (let p = 0; p < random(10,50); p++){ 
      let paragraph = '';
      for (let s = 0; s < random(3,15); s++){
        let internalPunct = [",",",",",",",",",",",",",",",",","];
        let endPunct = [".",".",".",".",".",".",".","."];
        let sentence = words.charAt(0).toUpperCase() + words.slice(1);
        let sentenceLength = random(9,35);
        wc += sentenceLength + 1;
        for (let w = 0; w < sentenceLength; w++){
          sentence += " " + words;
          if (random() < 0.2){
            sentence += random(internalPunct);
          }
        }
        sentence += random(endPunct) + " ";
        paragraph += sentence;
      }
      content.child(createElement("p",paragraph));
    }
    
  
    
  }
  
  // make a book out of all the content
  Bindery.makeBook({
    content: '#content',
    
    rules: [
      Bindery.PageBreak({
        selector: "h1",
        position: "after",
      }),
    Bindery.PageBreak({
      selector: 'h2',
      position: 'before',
      continue: 'right'
    }),
    
  ],
  
})
}