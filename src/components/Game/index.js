/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Reward from "react-rewards";

import "./styles.css"

import Board from "../Board";

import { getRandomCard, calculateBingo } from "../../helpers";

const Game = ({ layout, mode, display }) => {
    const [history, setHistory] = useState([getRandomCard({ mode })]);
    const [stepNumber, setStepNumber] = useState(0);
    const [bingoLines, setBingoLines] = useState({ "0": [] });
    const [reward, setReward] = useState({});
    const [score, setScore] = useState(0);

    const handleClick = i => {
      const timeInHistory = history.slice(0, stepNumber + 1);
      const current = timeInHistory[stepNumber];
      const squares = [...current.map(square => { return { ...square }; })];

      if (squares[i].isActive) return;

      squares[i].isActive = true;
      setHistory([...timeInHistory, squares]);
      setStepNumber(timeInHistory.length);

      const bingoLinesCopy = {
        ...bingoLines
      };

      if (stepNumber) bingoLinesCopy[stepNumber] = bingoLinesCopy[stepNumber - 1];
      setBingoLines(bingoLinesCopy);

      const currentBoardStatus = squares.map(square => square.isActive);
      const bingo = calculateBingo(currentBoardStatus, bingoLinesCopy[stepNumber]);

      if (bingo) {
        setScore(score + 100);
        bingo.line.map(index => {
          squares[index].isBingo = true;
        });

        setHistory([...timeInHistory, squares]);
        setBingoLines({
          ...bingoLinesCopy,
          [stepNumber]: [...bingoLinesCopy[stepNumber], bingo.lineNumber]
        });

        reward.rewardMe();
      }
    };

    const jumpTo = move => {
      if(move === 0) setScore(0);
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
    );

    return (
      <div style={{
        display: !display && "none",
        textAlign: "center",
        width: layout === "desktop" ? "60%" : "100%",
        height: "100%",
        }}>

        <Reward
          ref={(ref) => setReward(ref)}
          type="emoji">
          <button onClick={reward.fetchSomeData} />
        </Reward>

        <div className="scoreWrapper">
          <span className="scoreText" >Score</span>
          <input id="score" readOnly className="scoreNumber" type="text" value={score} />
        </div>

        <div className="paginationWrapper">
          <a 
            style={{ float: "left", width: "20px", height: "20px" }}
            href="javascript:void(0);" 
            onClick={() => { if(stepNumber) setStepNumber(stepNumber - 1); }}
            className="previous round">
            &#8249;
          </a>
          <a
            style={{ float: "right", width: "20px", height: "20px" }}
            href="javascript:void(0);"
            onClick={() => { if(stepNumber < history.length - 1) setStepNumber(stepNumber + 1); }}
            className="next round">
            &#8250;
          </a>
        </div>

        <Board squares={history[stepNumber]} layout={layout} onClick={handleClick} />
        <div className="gameMoves">
          {renderMoves()}
        </div>
      </div>
    )
};

export default Game;
