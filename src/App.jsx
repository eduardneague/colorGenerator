import { React, useState, useEffect } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import "./reset.css";

import Navbar from "../components/Navbar";
import Color from "../components/Color";

function App() {

  const [colorInput, setColorInput] = useState("#00000");
  const [selectInput, setSelectInput] = useState("monochrome");
  const [colorArray, setColorArray] = useState([]);
  const [text, setText] = useState("")

  function handleColorChange(event) {
    const color = event.target.value;
    setColorInput(color.replace("#", ""));
  }

  function handleSelectChange(event) {
    setSelectInput(event.target.value);
  }

  function handleButtonClick() {
    getColors();
  }

  // copy to clipboard functionality

  function copyColor(hexValue) {
    colorArray.map((color) => {
       if(color.hex.value === hexValue) {
        navigator.clipboard.writeText(color.hex.value)
       }
    })
  }

  const baseURL = "https://www.thecolorapi.com/scheme";

  function getColors() {
    fetch(`${baseURL}?hex=${colorInput}&mode=${selectInput}&count=5`)
      .then((response) => response.json())
      .then((data) => {
        setColorArray(data.colors);
      });
  }

  const colorElements = colorArray.map((color) => {
    return( 
    <Color 
      key={nanoid()}
      color={color.hex.value} 
      copyColor = {() => copyColor(color.hex.value)}
    />
    );
  });

  useEffect(() => {}, []);

  return (
    <>
      <div className="title--container">
        <h1 className="title"> edu's Colorscheme Generator </h1>
      </div>

      <div className="main--container">
        <Navbar
          handleColorChange={handleColorChange}
          handleSelectChange={handleSelectChange}
          handleButtonClick={handleButtonClick}
        />

    {colorArray.length === 0 ? 
      <div className="placeholder--wrapper">
        <h1 className = "placeholder--title">
          Select a color, a type of colorscheme and press the button!
        </h1>
        <h1 className = "placeholder--title2">
          You can also copy the colors' hex values by clicking on them!
        </h1>
        <p className = "placeholder--based">Based on 
          <span className = "placeholder--custom--color"> 
            <a href = "https://www.thecolorapi.com/" target = "_blank"> The Color API</a>
          </span>
        </p>
      </div>
     : 
      <div className="color--container">
          {colorElements}
      </div>
    }

      </div>
    </>
  );
}

export default App;
