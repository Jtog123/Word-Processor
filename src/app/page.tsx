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

*/

/*
setting word count 
if the space bar has been hit
  if there is text in the space before we hti the spacebar, go back 2? (move caret)
    then we have a word and we should set teh wordCount
*/

export default function Home() {

  const [wordCount, setWordCount] = useState(0)

  async function handleSpaceBar(e: React.KeyboardEvent<HTMLDivElement>) {

    if(e.key == " " || e.code == "Space" || e.keyCode == 32) {
      console.log(e);
      //now if we look backwards two chars and the char is nopt a space
      //setWordCount(wordCount => wordCount + 1);
    }

  }

  return (
    <div className="outer_countainer h-screen flex justify-center items-center bg-blue-400">



      <div 
          contentEditable="true"
          suppressContentEditableWarning={true}
          className="processor h-10/12 w-4/12 p-24 bg-gray-200 text-black overflow-auto"
          onKeyUp={(e) => handleSpaceBar(e)}        
      >

      </div>


      <div className="document-requirements bg-red-300 h-23 w-23">

        <div> Count: {wordCount} </div>

      </div>



    </div>
  );
}
