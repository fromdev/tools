// script.js

const board = document.getElementById('board');
const restartBtn = document.getElementById('restart-btn');
const instructions = document.getElementById('instructions');

let currentPlayer = 'X';
let boardState = Array(9).fill(null);

function getWinMessage(winner)  {
  if (winner === 'O') {
    return 'AI Wins, please try again.';
  } else {
    return 'Congratualtions! You win.'
  }
};

function getMoveMessage(player)  {
  if (player === 'O') {
    return 'AI turn, thinking...';
  } else {
    return 'Your turn. Pick a box for your next move.'
  }
};
// Winning combinations
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Initialize the board
function createBoard() {
    board.innerHTML = '';
    boardState.fill(null);
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick, { once: true });
        board.appendChild(cell);
    }
    currentPlayer = 'X';
    updateInstructions(`Your turn`);
}

// Handle cell click
function handleCellClick(e) {
    const cell = e.target;
    const index = cell.dataset.index;

    if (boardState[index]) return;

    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
       const winMessage = getWinMessage(currentPlayer);
        updateInstructions(winMessage);
        highlightWinningCells();
        disableBoard();
    } else if (boardState.every(cell => cell)) {
        updateInstructions("It's a tie! You are awesome at this game. Let's play again.");
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        const moveMessage = getMoveMessage(currentPlayer);
        updateInstructions(moveMessage);

        if (currentPlayer === 'O') {
            makeComputerMove();
        }
    }
}

// Improved AI for computer's move
function makeComputerMove() {
    setTimeout(() => {
        // Try to win or block opponent's win
        let move = findBestMove('O') || findBestMove('X');

        // Otherwise, pick a random available cell
        if (move === null) {
            const availableCells = boardState.map((val, idx) => val === null ? idx : null).filter(idx => idx !== null);
            move = availableCells[Math.floor(Math.random() * availableCells.length)];
        }

        const cell = document.querySelector(`.cell[data-index='${move}']`);
        cell.click();
    }, 500);
}

// Find the best move to win or block
function findBestMove(player) {
    for (const combo of winningCombos) {
        const values = combo.map(index => boardState[index]);
        if (values.filter(val => val === player).length === 2 && values.includes(null)) {
            return combo[values.indexOf(null)];
        }
    }
    return null;
}

// Check for win
function checkWin(player) {
    return winningCombos.some(combo => combo.every(index => boardState[index] === player));
}

// Highlight winning cells
function highlightWinningCells() {
    winningCombos.forEach(combo => {
        if (combo.every(index => boardState[index] === currentPlayer)) {
            combo.forEach(index => {
                document.querySelector(`.cell[data-index='${index}']`).classList.add('highlight');
            });
        }
    });
}

// Disable the board
function disableBoard() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.removeEventListener('click', handleCellClick);
    });
}

// Update instructions
function updateInstructions(message) {
    instructions.textContent = message;
}

// Restart the game
restartBtn.addEventListener('click', createBoard);

// Initial setup
createBoard();
