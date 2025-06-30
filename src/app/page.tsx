'use client'
import { useEffect, useState } from "react";


// caret always appends the front of document, the flow of text should be from left to right
//contenteditable is a security risk, code can be injected

/*
TODO
get the text writing left to rightinput is appending it to the string backwewrds
hello_my
[ym_olleh]

on every input != backspace or space we need to move the caret past the latter

*/

export default function Home() {

  const [text, setText] = useState<string | null>(null);

  return (
    <div className="outer_countainer h-screen flex justify-center items-center bg-blue-400">
      <div 
          contentEditable="true"
          suppressContentEditableWarning={true}
          className="processor h-10/12 w-4/12 bg-gray-200 text-black"
          onInput={(e) => setText(e.currentTarget.textContent)}
          
        >

          {text}
      </div>

    </div>
  );
}
