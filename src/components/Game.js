import React, { useState } from 'react';
import Board from './Board';

import { getRandomCard, calculateBingo } from "../helpers";

const styles = {
    width: '200px',
    margin: '20px auto'
};

const Game = () => {

    const [history, setHistory] = useState([getRandomCard()]);
    const [stepNumber, setStepNumber] = useState(0);
    const [bingoLines, setBingoLines] = useState([]);

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];

        if(squares[i].is_active) return;

        squares[i].is_active = true;
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);

        const currentBoardStatus = squares.map(square => square.is_active);
        const bingo = calculateBingo(currentBoardStatus, bingoLines);

        if(bingo) {
            bingo.line.map(index => {
                squares[index].is_bingo = true;
            });

            setHistory([...timeInHistory, squares]);
            setBingoLines([...bingoLines, bingo.lineNumber]);
        }
    }

    return (
        <>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        </>
    )
};

export default Game;
