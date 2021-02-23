import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import Game from "./components/Game";

import { getLayouts } from "./helpers";

import background from "./constants/images/bingo.jpeg";
import otherBackground from "./constants/images/bingo2.jpg";

const ResponsiveGridLayout = WidthProvider(Responsive);

const App = () => {
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

      <button className="cardButton" 
        onClick={() => setGameCount(gameCount + 1)}>
          Add Card
      </button>

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
        {activeGames.map((_game, index) =>
          <Game
            layout={conversationMode ? currentLayout : "basic"}
            mode={conversationMode ? "conversation" : "basic"}
            key={index.toString()}
          />
        )}
      </ResponsiveGridLayout>
    </div>
  );
};

export default App;
