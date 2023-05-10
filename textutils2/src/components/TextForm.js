import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was Clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("UpperCase was Clicked", "success");
  };

  const handleLoClick = () => {
    console.log("LowerCase was Clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("LowerCase was Clicked", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been Cleared", "success");
  };

  const handleOnChange = (event) => {
    console.log("No change");
    setText(event.target.value); //write kr skte hei ab textbox mei
    props.showAlert("Extra Space has been removed", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); //ek yeh ek se jyda space hei to text ko spiit kra hei
    setText(newText.join(" "));
    props.showAlert("Extra Space has been removed", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <button
            type="button"
            onClick={handleUpClick}
            className="btn btn-danger my-3"
          >
            Convert to UpperCase
          </button>
          <button
            type="button"
            onClick={handleLoClick}
            className="btn btn-info m-2"
          >
            Convert to LowerCase
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="btn btn-secondary m-2"
          >
            Copy
          </button>
          <button
            type="button"
            onClick={handleClearClick}
            className="btn btn-success m-2"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleExtraSpaces}
            className="btn btn-success m-2"
          >
            Extra Spaces will be removed
          </button>
        </div>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text Summary</h2>
        <p>
          Your words: {text.split(" ").length} and character: {text.length}
        </p>
        <p>Words will be read in {0.008 * text.split(" ").length} Minute</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? "text" : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
