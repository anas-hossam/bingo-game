import React from "react";

const PlayerText = ({ playerName, onClick }) => (
  <input
  className="playerText"
    maxLength="17" 
    type="text"
    value={playerName}
    onChange={onClick}
    placeholder="Player Name"
  />
);

export default PlayerText;
