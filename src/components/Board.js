import React from "react";

import Square from "./Square";
import EmptySquare from "./EmptySqaure";

const style = {
  border: "4px solid #b09f78",
  borderRadius: "10px",
  width: "92%",
  height: "45%",
  margin: "40px auto 10px auto",
  display: "grid",
  gridTemplate: "repeat(5, 1fr) / repeat(5, 1fr)",
};

const Board = ({ squares, layout, onClick }) => (
  <div style={style}>
    {squares.map((square, index) => (
      index !== 12 ? 
        <Square key={index} value={square} layout={layout} onClick={() => onClick(index)} /> :
        <EmptySquare key={index} onClick={() => onClick(index)} />
    ))}
  </div>
);

export default Board;
