/*

This is a p5.js sketch that creates a book by repeating some
word 50000 times, with punctuation and organization added so 
that it looks more like a real book.

You are welcome to use this template to make your own 
repetion-based computer-generated book.

What I Have Done:
 - chosen a word to repeat: quack
 - written the code that repeats that word an arbitrary number of 
   times, along with punctuation.
  
What You Should Do:
 - choose a different word. Animals sounds and screams have already
   been done. 
 - tweak the book layout options so it looks good.
 - take a look through the code below, which is written in a fairfly
   verbose way so that you can adjust any aspect you need to. 
   
*/

let myBook = "";

function setup() {
 noCanvas();
  
 let content = createDiv();
  content.id("content");
  
let bookTitle = createElement("h1","Life, never odd or even");

content.child(bookTitle);

for (let w = 0; w < 50000; w++){
myBook += random([
"never odd or even",
"NEVER ODD OR EVEN",
"Never odd or even",
]);
myBook += random([
  "",
  "",
  "",
  "",
  "",
  ".",
  ",",
  "--",
  "!",
  "?",
  "?!"
]);
}

let bookContent = createDiv(myBook);

content.child(bookContent);

Bindery.makeBook({
  content: 'content'
});

}
