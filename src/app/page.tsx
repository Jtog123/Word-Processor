'use client'
import { useEffect, useState } from "react";



// caret always appends the front of document, the flow of text should be from left to right
//contenteditable is a security risk, code can be injected

/*
TODO

on every input != backspace or space we need to move the caret past the latter

Set automatic margins on everything
achieve a 1-inch margin by using the m-24 class for margins on all sides, or mx-24
enable page breaks approx 450 words
allow for jibbberish to count as words

How do i feed a word in from my frontend DOM to my backend?

We aree going to have to collect all input from the front end and sencd it back as chunks?
use a setTimeout that syncs the backend state to the frontend state - sync()

THe cat is FAT, and the dog is SKINNY

The cat is
FAT
and the dog is
SKINNY

flow -> 
user types in words -> 
front end state shows changes
  We are tracking keyboardinput (onInput and selectionChange) the front end, appending all key presses into a TextRun string, until we form a paragraph
  Once we form a paragraph (Identify paragraph spacing), we push this textRun into the Paragraph type
  We can then push the paragraph to the Document

If we click the bold or italic or underline button we immediatley start updating backend state?


Every 10s, backend state takes note or where the cursor is,

*/

/*
setting word count 
if the space bar has been hit
  if there is text in the space before we hti the spacebar, go back 2? (move caret)
    then we have a word and we should set teh wordCount
*/

export default function Home() {

  const [wordCount, setWordCount] = useState(0)

  function handleSpaceBar(e: React.KeyboardEvent<HTMLDivElement>) {

    if(e.key == " " || e.code == "Space" || e.keyCode == 32) {
      console.log(e);
      //now if we look backwards two chars and the char is nopt a space
      //setWordCount(wordCount => wordCount + 1);
    }

  }
  /*
  When we highlist text returns a Selection object, or when we move the Caret we can monitor its placement on the DOM
  VERY USEFUL

  document.onselectionchange = () => {
    console.log(document.getSelection());
  };
  document.addEventListener("selectionchange", () => {
  console.log(document.getSelection());
  });
  */

  function handleInput() {
    console.log("Handling the input")
  }

  return (
    <div className="outer_countainer h-screen flex justify-center items-center bg-blue-400">



      <div 
          contentEditable="true"
          suppressContentEditableWarning={true}
          className="processor h-10/12 w-4/12 p-24 bg-gray-200 text-black overflow-auto"
          onKeyUp={(e) => handleSpaceBar(e)} 
          onInput={handleInput}
          
                 
      >

      </div>


      <div className="document-requirements bg-red-300 h-23 w-23">

        <div> Count: {wordCount} </div>

      </div>



    </div>
  );
}
