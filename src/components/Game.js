import React, { useState } from 'react';
import Board from './Board';

const styles = {
    width: '200px',
    margin: '20px auto'
};

const Game = () => {

    const [history, setHistory] = useState([Array(25).fill(null)]);

    const handleClick = i => {

    }

    return (
        <>
        <Board squares={history[0]} onClick={handleClick} />
        </>
    )
};

export default Game;