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
            return { line: lines[i], lineNumber: i };
        }
    }

    return null;
};

/**
 * Randomize array using Durstenfeld shuffle algorithm
 * @param {*} array 
 */
const shuffleArray = array => {
    const arrayCopy = [...array];
    for (var i = arrayCopy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrayCopy[i];
        arrayCopy[i] = arrayCopy[j];
        arrayCopy[j] = temp;
    }

    return arrayCopy;
}

const getRandomCard = () => {
    const card = [
        { name: 'dummy value 1', is_active: false, is_bingo: false },
        { name: 'dummy value 2', is_active: false, is_bingo: false },
        { name: 'dummy value 3', is_active: false, is_bingo: false },
        { name: 'dummy value 4', is_active: false, is_bingo: false },
        { name: 'dummy value 5', is_active: false, is_bingo: false },
        { name: 'dummy value 6', is_active: false, is_bingo: false },
        { name: 'dummy value 7', is_active: false, is_bingo: false },
        { name: 'dummy value 8', is_active: false, is_bingo: false },
        { name: 'dummy value 9', is_active: false, is_bingo: false },
        { name: 'dummy value 10', is_active: false, is_bingo: false },
        { name: 'dummy value 11', is_active: false, is_bingo: false },
        { name: 'dummy value 12', is_active: false, is_bingo: false },
        { name: 'dummy value 13', is_active: false, is_bingo: false },
        { name: 'dummy value 14', is_active: false, is_bingo: false },
        { name: 'dummy value 15', is_active: false, is_bingo: false },
        { name: 'dummy value 16', is_active: false, is_bingo: false },
        { name: 'dummy value 17', is_active: false, is_bingo: false },
        { name: 'dummy value 18', is_active: false, is_bingo: false },
        { name: 'dummy value 19', is_active: false, is_bingo: false },
        { name: 'dummy value 20', is_active: false, is_bingo: false },
        { name: 'dummy value 21', is_active: false, is_bingo: false },
        { name: 'dummy value 22', is_active: false, is_bingo: false },
        { name: 'dummy value 23', is_active: false, is_bingo: false },
        { name: 'dummy value 24', is_active: false, is_bingo: false },
        { name: 'dummy value 25', is_active: false, is_bingo: false },
    ];

    return shuffleArray(card);
};

export {
    calculateBingo,
    getRandomCard,
};
