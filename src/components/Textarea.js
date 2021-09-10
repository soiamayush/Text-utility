import React from "react";
import { useState } from "react";

export default function Textarea(props) {
  const [text, settext] = useState('');

  const handleonchange=(event)=>{
    settext(event.target.value)
  }
  // -------------buttton function

  const handleuppcase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);

  };


  const handlelowcase = () => {
    let newtext = text.toLowerCase();
    settext(newtext)
  };
  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert('Your text has been copied to clipboard', 'success');


  };
  const handlespaces = () => {
    let newtext = text.split(/[ ] +/);
      settext(newtext.join(' '))
  };
  const handleclear = () => {
    let newText = '';
      settext(newText);
  };
  return (
    <div className="container">
      <div className="mb-3 my-3">
        <h1
          className={`text-${props.mode === "light" ? "drak" : "light"} my-3`}
        >
          Text utils
        </h1>
        <textarea
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter your text"
          onChange={handleonchange}
          value={text}
          style={{backgroundColor:props.mode==='dark'? '#a5a7a2' : 'white'}}
        ></textarea>

        {/* --------------------------buttons */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleuppcase}
          disabled={text.length===0}
        >
          convert to uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={handlelowcase}
          disabled={text.length===0}

        >
          Convert to lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={handlecopy}
          disabled={text.length===0}

        >
          Copy text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={handlespaces}
          disabled={text.length===0}

        >
          Remove extra spaces
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={handleclear}
          disabled={text.length===0}

        >
          Clear console
        </button>
      </div>
      <div className="container">
        <h2>Text summary</h2>
        <p>Your text have {(text.split(/\s+/).filter((element)=>{return  element.length!==0}).length )} words and {text.length} characters</p>
        <p>An average person takes {0.008 * (text.split(/\s+/).filter((element)=>{return  element.length!==0}).length )} minutes to complete these words</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
