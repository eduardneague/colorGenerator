import { React, useState, useEffect } from "react";

function Navbar(props) {
  return (
    <>
      <div className="flex--wrapper">
        <input
          type="color"
          className="color--input"
          onChange={props.handleColorChange}
        />

        <select
          name="colorSchemes"
          id="colorSchemes"
          className="color--dropdown"
          onChange={props.handleSelectChange}
        >
          <option value="monochrome">Monochrome</option>
          <option value="monochrome-dark">Monochrome Dark</option>
          <option value="monochrome-light">Monochrome Light</option>
          <option value="analogic">Analogic</option>
          <option value="complement">Complement</option>
          <option value="analogic-complement">Analogic-Complement</option>
          <option value="triad">Triad</option>
          <option value="quad">Quad</option>
        </select>

        <button
          onClick={props.handleButtonClick}
          type="submit"
          className="color--submit"
        >
          Get Color Scheme
        </button>
      </div>
    </>
  );
}

export default Navbar;
