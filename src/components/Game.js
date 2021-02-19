import React, { useState } from 'react';
import Board from './Board';

import { getRandomCard } from "../helpers";

const styles = {
    width: '200px',
    margin: '20px auto'
};

const Game = () => {

    const [history, setHistory] = useState([getRandomCard()]);

    const handleClick = i => {
        alert(`you clicked me !! #${i}`)
    }

    return (
        <>
        <Board squares={history[0]} onClick={handleClick} />
        </>
    )
};

export default Game;
