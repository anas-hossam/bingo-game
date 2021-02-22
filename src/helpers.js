import card from "./constants/card";

const calculateBingo = (squares, activeLines) => {
  const squaresCopy = [...squares];
  // make middle sqaure always active
  squaresCopy[12] = true;

  const lines = [
    // rows
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    // columns
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    // diagonal
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];

    if (
      (activeLines.indexOf(i) === -1) &&
      squaresCopy[a] &&
      squaresCopy[a] === squaresCopy[b] &&
      squaresCopy[a] === squaresCopy[c] &&
      squaresCopy[a] === squaresCopy[d] &&
      squaresCopy[a] === squaresCopy[e]
    ) {
      return {
        line: lines[i],
        lineNumber: i
      };
    }
  }

  return null;
};

/**
 * Randomize array using Durstenfeld shuffle algorithm
 * @param {Array} items
 */
const getRandomCard = ({ items = card, mode }) => {
  const itemsCopy = [...items[mode]];
  for (var i = itemsCopy.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = itemsCopy[i];
    itemsCopy[i] = itemsCopy[j];
    itemsCopy[j] = temp;
  }

  // add empty sqaure at the middle of card
  itemsCopy.splice(
    itemsCopy.length / 2,
     0,
     { name: "", isActive: true, isBingo: true },
  );

  return itemsCopy;
};

const getLayouts = items => {
  return {
    lg: items.map((_, index) => {
      return { w: 0, h: 5, x: 0, y: 1000, i: `${index}` };
    }),
    xs: items.map((_, index) => {
      return { w: 0, h: 6, x: 5, y: 5, i: `${index}` };
    }),
  }
};

export {
  calculateBingo,
  getRandomCard,
  getLayouts,
};
