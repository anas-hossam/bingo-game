import { Responsive, WidthProvider } from "react-grid-layout";
import { useState } from "react";

import Game from "./components/Game";

import background from "./images/bingo.jpeg";
import otherBackground from "./images/bingo2.jpg";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const [gameCount, setGameCount] = useState(1);

  const activeGames = Array(gameCount).fill(true);

  return (
    <div style={{ 
      background: `url(${background}) right bottom no-repeat, url(${otherBackground}) left top repeat`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
      }}>
      <button style={{
        height: '30px',
        fontWeight: '600',
        fontSize: '14px',
        alignItems: 'center',
        margin: '10px',
        color: 'darkgreen'
      }} onClick={() => setGameCount(gameCount + 1)}>Add Game</button>
      <ResponsiveGridLayout
        layouts={{
          lg: activeGames.map((_game, index) => {
            return { w: 0, h: 5, x: 0, y: 1000, i: `${index}` };
          }),
          xs: activeGames.map((_game, index) => {
            return { w: 0, h: 6, x: 5, y: 5, i: `${index}` };
          }),
        }}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
          {activeGames.map((_game, index) => <Game key={index.toString()} />)}
      </ResponsiveGridLayout>
    </div>
  );
}

export default App;
