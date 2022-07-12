const gameBoard = {
    board: [],
    player: 'X',
    computer: 'O',
    winningCombinations: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    init() {
        this.board = [
            '', '', '',
            '', '', '',
            '', '', ''
        ];
    }
}
const allSquares = document.getElementsByClassName('square');
const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const square3 = document.getElementById('square3');
const square4 = document.getElementById('square4');
const square5 = document.getElementById('square5');
const square6 = document.getElementById('square6');
const square7 = document.getElementById('square7');
const square8 = document.getElementById('square8');
const square9 = document.getElementById('square9');
const rowSquares = [
    square1, square2, square3,
    square4, square5, square6,
    square7, square8, square9
]
const columnSquares = [
    square1, square4, square7,
    square2, square5, square8,
    square3, square6, square9
]
const diagonalSquares = [
    square1, square5, square9,
    square3, square5, square7
]

