import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import Game from "./components/Game";

import { getLayouts } from "./helpers";

import background from "./constants/images/bingo.jpeg";
import otherBackground from "./constants/images/bingo2.jpg";

const ResponsiveGridLayout = WidthProvider(Responsive);

const App = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [players, setPlayers] = useState({ '0': 'host' });
  const [playerName, setPlayerName] = useState("");
  const [gameCount, setGameCount] = useState(1);
  const [conversationMode, setConversationMode] = useState(true);
  const [currentLayout, setCurrentLayout] = useState("desktop");

  const activeGames = [...Array(gameCount).keys()];

  const handleClick = () => {
    setConversationMode(!conversationMode);
    setGameCount(0);
  };

  return (
    <div style={{ 
      background: `url(${background}) right bottom no-repeat, url(${otherBackground}) left top repeat`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover"
      }}>

      <div className="switchWrapper">
        <span className="switchText">
          {conversationMode ? "Conversation" : "Basic"}
        </span>
        <label className="switch">
          <input type="checkbox" onClick={handleClick} />
          <span className="slider round"></span>
        </label>
      </div>

      <div class="dropdown" style={{ margin: "10px" }}>
        <button class="dropbtn">Players Cards</button>
        <div class="dropdown-content">
          {activeGames.map(game =>
            <a href="javascript:void(0);" onClick={() => setActiveGame(game)}>{players[game]}</a>)}
        </div>
      </div>

      <div style={{
        width: currentLayout === "mobile" ? "80%" : "50%",
        marginLeft: "60px",
        display: "inline-block",
      }}>
        <input
          maxLength="17" 
          type="text"
          value={playerName}
          onChange={e => setPlayerName(e.target.value)}
          placeholder="Player Name"
        />

        <button 
          className="cardButton"
          disabled={!playerName}
          onClick={() => {
            setGameCount(gameCount + 1);
            players[gameCount] = playerName;
            setPlayers(players);
            setPlayerName("");
          }}>
          Add Card
        </button>
      </div>

      <ResponsiveGridLayout
        layouts={getLayouts(activeGames)}
        onLayoutChange={() => {
          let currentMedia = window.innerWidth > 1200 ? "desktop" : "tablet";
          if(window.innerWidth <= 480) currentMedia = "mobile";

          setCurrentLayout(currentMedia);
        }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={150}
        autoSize={true}
        isDraggable={false}
        isResizable={false}
        measureBeforeMount={false}>
        {activeGames.map(game =>
          <Game
            display={game === activeGame}
            layout={conversationMode ? currentLayout : "basic"}
            mode={conversationMode ? "conversation" : "basic"}
            key={game.toString()}
          />
        )}
      </ResponsiveGridLayout>
    </div>
  );
};

export default App;
