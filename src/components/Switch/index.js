import React from "react";

import "./styles.css"

const Switch = ({ mode, onClick }) => (
  <div className="switchWrapper">
    <span className="switchText">
      {mode ? "Conversation" : "Basic"}
    </span>
    <label className="switch">
      <input type="checkbox" onClick={onClick} />
      <span className="slider round"></span>
    </label>
  </div>
);

export default Switch;
