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
        fontFamily: "Monospace",
        height: "30px",
        fontWeight: "600",
        fontSize: "15px",
        alignItems: "center",
        margin: "55px 40px",
        color: "#562175",
        }} 
        onClick={() => setGameCount(gameCount + 1)}>
          Add Card
      </button>
      <ResponsiveGridLayout
        layouts={getLayouts(activeGames)}
        onLayoutChange={() => {
          const currentMedia = window.innerWidth > 1200 ? "desktop" : "mobile";
          setCurrentLayout(currentMedia);
        }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={150}
        autoSize={true}
        isDraggable={false}
        isResizable={false}
        measureBeforeMount={false}>
            {activeGames.map((_game, index) => <Game layout={currentLayout} key={index.toString()} />)}
      </ResponsiveGridLayout>
    </div>
  );
};

export default App;
