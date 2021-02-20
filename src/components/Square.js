import React from "react";

const style = {
    fontFamily: 'Monospace',
    border: '1px solid darkblue',
    fontSize: '10px',
    fontWeight: '300',
    cursor: 'pointer',
    outline: 'none',
};

const getStyle = active => {
    return {
        ...style,
        background: active ? 'royalblue' : 'lightblue',
        textDecoration: active ? 'line-through' : 'none',
    };
};

const bingoStyle = { ...style, background: 'gold'}

const Square = ({ onClick, value }) => (
    <button style={value.is_bingo ? bingoStyle : getStyle(value.is_active)} onClick={onClick}>
        {value.name}
    </button>
);

export default Square;
