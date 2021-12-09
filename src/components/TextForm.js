import React, { useState } from "react";
export default function TextForm(props) {
  


  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleTrClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.trim();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText)
}

      
let handleCopy = () => {
  navigator.clipboard.writeText(text); 

}
 
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

  
  
  // text = ("new text"); //wrong way to change state
  // setText ("new text");
  return (
    <>
    <div className = "container"  style ={{color: props.mode==='dark' ? 'white' : '#042743'}}>
      <h1 >{props.heading}</h1>

      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} 
        ></textarea>
      </div>
      <button className="btn-primary mx-1 my-1 " onClick={handleUpClick} >
        Convert to uppercase
      </button>
      <button className="btn-primary mx-1 my-1" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button className="btn-primary mx-1 my-1" onClick={handleTrClick}>
        Trim first whitespaces
      </button>
      <button className="btn-primary mx-1 my-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn-primary mx-1 my-1" onClick={handleClearClick}>
       Clear Text
      </button>
    </div>
    <div className = "container my-3" style ={{color: props.mode==='dark' ? 'white' : '#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words, {text.length} characters</p>
      <p> 
       {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length}  Minutes to read </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}
