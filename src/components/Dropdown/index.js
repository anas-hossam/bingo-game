import React from "react";

import "./styles.css"

const Dropdown = ({ playerName, activeGames, players, setActiveGame }) => (
  <div className="dropdown" style={{ margin: "10px" }}>
    <button className="dropbtn">{playerName}</button>
    <div className="dropdown-content">
      {activeGames.map(game =>
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="javascript:void(0);" onClick={() => setActiveGame(game)}>{players[game]}</a>)}
    </div>
  </div>
);

export default Dropdown;
