import React from "react";

const style = {
  fontFamily: "Monospace",
  border: "1px solid darkblue",
  fontSize: "10px",
  fontWeight: "300",
  cursor: "pointer",
  outline: "none",
};

const getStyle = (active, layout) => {
  return {
    ...style,
    fontSize: layout === "desktop" ? "15px": style.fontSize,
    background: active ? "royalblue" : "lightblue",
    textDecoration: active ? "line-through" : "none",
  };
};

const bingoStyle = { ...style, background: "gold" };

const Square = ({ value, layout, onClick }) => (
  <button style={value.is_bingo ? bingoStyle : getStyle(value.is_active, layout)} onClick={onClick}>
    {value.name}
  </button>
);

export default Square;
