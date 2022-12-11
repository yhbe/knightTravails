class Graph {
  constructor() {
    return {
      board: createChessBoard(),
    };
    function createChessBoard() {
      let arr = [];
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          arr.push(`${[i, j]}`);
        }
      }
      return arr;
    }
  }
}

let chessMove = new Graph();
console.log(chessMove);
