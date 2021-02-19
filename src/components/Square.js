import React from 'react';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '15px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({ onClick, value }) => (
    <button style={style} onClick={onClick}>
        {value.name}
    </button>
);

export default Square;
