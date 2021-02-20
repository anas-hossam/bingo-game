import React from "react";

import Square from "./Square";
import EmptySquare from "./EmptySqaure";

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '92%',
    height: '45%',
    margin: '50px auto',
    display: 'grid',
    gridTemplate: 'repeat(5, 1fr) / repeat(5, 1fr)'
};

const Board = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((square, i) => (
            i !== 12 ? 
                <Square key={i} value={square} onClick={() => onClick(i)} /> :
                <EmptySquare key={i} onClick={() => onClick(i)} />
        ))}
    </div>
);

export default Board;
