export default function GameLogic() {
    const gameLogic = {
        checkWinner: function (board, player) {
            const winningCombinations = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6]             // Diagonals
            ]
            for (let i = 0; i < winningCombinations.length; i++) {
                const [a, b, c] = winningCombinations[i];
                if (board[a] === player && board[b] === player && board[c] === player) {
                    return true;
                }
            }
            return false;
        },
        checkTie: function (board) {
            return board.every(cell => cell !== "");
        },
        checkGameOver: function (board, player) {
            return this.checkWinner(board, player) || this.checkTie(board);
        }
    }
    return gameLogic;
}