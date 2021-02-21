import React from "react";

const style = {
  fontFamily: "Monospace",
  color: "#323b67",
  border: "1px solid #706046",
  fontSize: "10px",
  fontWeight: "900",
  cursor: "pointer",
  outline: "none",
};

const getStyle = (active, layout) => {
  return {
    ...style,
    fontSize: layout === "desktop" ? "15px": style.fontSize,
    background: active ? "#5a71b7" : "#fbedba",
    textDecoration: active ? "line-through" : "none",
  };
};

const bingoStyle = layout => {
  return {
    ...style,
    color: "#fbedba",
    background: "gold",
    fontSize: layout === "desktop" ? "15px": style.fontSize,
  };
};

const Square = ({ value, layout, onClick }) => (
  <button style={
    value.is_bingo ? bingoStyle(layout) : getStyle(value.is_active, layout)
    } onClick={onClick}>
    {value.name}
  </button>
);

export default Square;
