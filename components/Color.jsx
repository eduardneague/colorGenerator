import { React, useState, useEffect } from "react";

function Color(props) {
  const styles = {
    backgroundColor: props.color,
  };

  return (
    <>
      <div className="color--component--container" onClick = {props.copyColor} >
        <div className="color--component" style={styles}></div>
        <h3 className="color--hexcode"> {props.color} </h3>
      </div>
    </>
  );
}

export default Color;
