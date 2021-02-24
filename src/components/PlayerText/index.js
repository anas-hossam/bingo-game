import React from "react";

const PlayerText = ({ playerName, onClick }) => (
  <input
    maxLength="17" 
    type="text"
    value={playerName}
    onChange={onClick}
    placeholder="Player Name"
  />
);

export default PlayerText;
