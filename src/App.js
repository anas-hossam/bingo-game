import { Responsive, WidthProvider } from "react-grid-layout";
import { useState } from "react";

import Game from "./components/Game";

import { getLayouts } from "./helpers";

import background from "./constants/images/bingo.jpeg";
import otherBackground from "./constants/images/bingo2.jpg";

const ResponsiveGridLayout = WidthProvider(Responsive);

const App = () => {
  const [gameCount, setGameCount] = useState(1);
  const [currentLayout, setCurrentLayout] = useState("desktop");

  const activeGames = Array(gameCount).fill(true);

  return (
    <div style={{ 
      background: `url(${background}) right bottom no-repeat, url(${otherBackground}) left top repeat`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover"
      }}>
      <button style={{
        height: "30px",
        fontWeight: "600",
        fontSize: "14px",
        alignItems: "center",
        margin: "10px",
        color: "darkgreen"
        }} 
        onClick={() => setGameCount(gameCount + 1)}>
          Add Game
      </button>
      <ResponsiveGridLayout
        layouts={getLayouts(activeGames)}
        onLayoutChange={() => {
          const currentMedia = window.innerWidth > 1200 ? "desktop" : "mobile";
          setCurrentLayout(currentMedia);
        }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>
          {activeGames.map((_game, index) => <Game layout={currentLayout} key={index.toString()} />)}
      </ResponsiveGridLayout>
    </div>
  );
};

export default App;
