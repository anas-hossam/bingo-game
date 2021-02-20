import React from "react";

const style = {
    border: '2px solid darkblue',
    fontSize: '15px',
    fontWeight: '800',
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
