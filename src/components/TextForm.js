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
  
  // text = ("new text"); //wrong way to change state
  // setText ("new text");
  return (
    <>
    <div className = "container">
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <label for="myBox" class="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn-primary mx-2 " onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn-primary mx-2" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button className="btn-primary mx-2" onClick={handleTrClick}>
        Trim first whitespaces
      </button>
    </div>
    <div className = "container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length-1} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
