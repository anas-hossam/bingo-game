import card from "./constants/card";

/**
 * @description
 * checks if squares values that have true value 
 * matches any row or column or diagonal and not exist in active lines
 * if no matches return false
 * @param {Array<Boolean>} squares 
 * @param {object} activeLines 
 * @returns {object} winning line which contains line indexes and number
 */
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
 * @description
 * Randomize array using Durstenfeld shuffle algorithm
 * @param {Array} items
 * @returns randomized items
 */
const randomize = items => {
  const itemsCopy = [...items];
  for (var i = itemsCopy.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = itemsCopy[i];
    itemsCopy[i] = itemsCopy[j];
    itemsCopy[j] = temp;
  }

  return itemsCopy;
}

/**
 * @description
 * get random card based on mode after putting
 * empty sqaure at the middle of card 
 */
const getRandomCard = ({ items = card, mode }) => {
  const randomizedItems = randomize([...items[mode]]);
  // add empty sqaure at the middle of card
  randomizedItems.splice(
    randomizedItems.length / 2,
     0,
     { name: "", isActive: true, isBingo: true },
  );

  return randomizedItems;
};

/**
 * @description
 * get layouts based on items length
 * @param {Array.<number>} items
 */
const getLayouts = items => {
  return {
    lg: items.map(item => {
      return { w: 0, h: 5, x: 0, y: 1000, i: `${item}` };
    }),
    xs: items.map(item => {
      return { w: 0, h: 6, x: 5, y: 5, i: `${item}` };
    }),
  }
};

export {
  calculateBingo,
  getRandomCard,
  getLayouts,
};
