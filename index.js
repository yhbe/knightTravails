class Graph {
  constructor() {
    return {
      board: null,
      createChessBoard,
      connectKnightMoves,
    };
    function createChessBoard() {
      let map = new Map();
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          map.set(`${[i, j]}`, []);
        }
      }
      return (this.board = map);
    }

    function connectKnightMoves() {
      for (let [elem] of this.board) {
        let splitElem = elem.split(",");
        let x = Number(splitElem[0]);
        let y = Number(splitElem[1]);
        let knightMoves = {
          1: [x + 1, y + 2],
          2: [x + 2, y + 1],
          3: [x + 2, y + -1],
          4: [x + 1, y - 2],
          5: [x - 1, y + 2],
          6: [x - 2, y + 2],
          7: [x - 2, y + 1],
          8: [x - 1, y + 2],
        };
        for (let number in knightMoves) {
          if (this.board.has(knightMoves[number].toString())) {
            this.board.get(elem).push(knightMoves[number]);
          }
        }
      }
      return this.board;
    }
  }
}

let chessMove = new Graph();
chessMove.createChessBoard();
chessMove.connectKnightMoves();
