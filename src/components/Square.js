import React from 'react';

const style = active => {
    return {
        background: active ? 'royalblue' : 'lightblue',
        border: '2px solid darkblue',
        fontSize: '15px',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none',
        textDecoration: active ? 'line-through' : 'none',
    };
};

const bingoStyle = {
    background: 'gold',
    border: '2px solid darkblue',
    fontSize: '15px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
}

const Square = ({ onClick, value }) => (
    <button style={value.is_bingo ? bingoStyle : style(value.is_active)} onClick={onClick}>
        {value.name}
    </button>
);

export default Square;
