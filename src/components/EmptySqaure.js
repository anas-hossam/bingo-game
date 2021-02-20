import React from 'react';

const style = {
    background: 'gold',
    border: '2px solid darkblue',
    fontSize: '15px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
};

const EmptySquare = ({ onClick }) => (
    <button style={style} onClick={onClick} />
);

export default EmptySquare;
