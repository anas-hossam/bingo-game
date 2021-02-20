import React, { useState } from "react";

import Board from './Board';

import { getRandomCard, calculateBingo } from "../helpers";

const styles = {
    width: '165px',
    height: '150px',
    margin: '20px auto',
    overflowX: 'hidden', 
    overflowY: 'auto',
    textAlign: 'justify'
};

const Game = () => {

    const [history, setHistory] = useState([getRandomCard()]);
    const [stepNumber, setStepNumber] = useState(0);
    const [bingoLines, setBingoLines] = useState({ '0': [] });

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current.map(square => { return { ...square }; })];

        if(squares[i].is_active) return;

        squares[i].is_active = true;
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);

        const bingoLinesCopy = {...bingoLines }
        if(stepNumber) bingoLinesCopy[stepNumber] = bingoLinesCopy[stepNumber - 1];
        setBingoLines(bingoLinesCopy);

        const currentBoardStatus = squares.map(square => square.is_active);
        const bingo = calculateBingo(currentBoardStatus, bingoLinesCopy[stepNumber]);

        if(bingo) {
            bingo.line.map(index => {
                squares[index].is_bingo = true;
            });

            setHistory([...timeInHistory, squares]);
            setBingoLines({...bingoLinesCopy, [stepNumber]: [...bingoLinesCopy[stepNumber], bingo.lineNumber] });
        }
    };

    const jumpTo = move => {
        setStepNumber(move);
    };

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    )

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles}>
                {renderMoves()}
            </div>
        </>
    )
};

export default Game;
