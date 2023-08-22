let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;
    checkWinner();
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      setTimeout(() => {
        alert(currentPlayer + ' wins!');
        resetBoard();
      }, 100);
    }
  }

  if (!board.includes('')) {
    setTimeout(() => {
      alert('It\'s a draw!');
      resetBoard();
    }, 100);
  }
}

function resetBoard() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  const cells = document.getElementsByClassName('cell');
  for (const cell of cells) {
    cell.textContent = '';
  }
}