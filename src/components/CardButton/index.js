import React from "react";

import "./styles.css"

const CardButton = ({ playerName, text, onClick }) => (
  <button 
    className="cardButton"
    disabled={!playerName}
    onClick={onClick}>
    {text}
  </button>
);

export default CardButton;
