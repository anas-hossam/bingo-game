import React from "react";

import background from "../constants/images/emptySquare.jpg"

const style = {
    background: `url(${background})`,
    backgroundSize: 'cover',
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
