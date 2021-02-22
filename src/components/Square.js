import React from "react";

const FONT_SIZE_MAPPER = {
  desktop: "16px",
  tablet: "12px",
  mobile: "8px",
  basic: "20px",
};

const style = {
  fontFamily: "Monospace",
  color: "#323b67",
  border: "1px solid #706046",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const getStyle = (active, layout) => {
  return {
    ...style,
    fontSize: FONT_SIZE_MAPPER[layout],
    background: active ? "#5a71b7" : "#fbedba",
    textDecoration: active ? "line-through" : "none",
  };
};

const bingoStyle = layout => {
  return {
    ...style,
    fontSize: FONT_SIZE_MAPPER[layout],
  };
};

const Square = ({ value, layout, onClick }) => (
  <button className={value.isBingo && "bingo"} style={
    value.isBingo ? bingoStyle(layout) : getStyle(value.isActive, layout)
    } onClick={onClick}>
    {value.name}
  </button>
);

export default Square;
