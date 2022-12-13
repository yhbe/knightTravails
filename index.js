class Graph {
  constructor() {
    return {
      board: null,
      createChessBoard,
      connectKnightMoves,
      knightMove,
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
          let move = knightMoves[number].toString();
          if (
            this.board.has(knightMoves[number].toString()) &&
            !this.board.get(elem).includes(move)
          ) {
            this.board.get(elem).push(move);
          }
        }
      }
      return this.board;
    }

    function knightMove(start, end) {
      start = start.shift();
      end = end.shift();
      let queue = [];
      let visited = new Set();
      let finishedPath = [];

      queue.push([start, [start]]);
      while (queue.length > 0) {
        let [active, path] = queue.shift();
        console.log(`${active} active, path ${path}`);
        visited.add(active);
        if (active === end) {
          finishedPath.push(path);
        }
        let possibleMoves = this.board.get(active);
        for (let elem of possibleMoves) {
          if (!visited.has(elem)) {
            queue.push([elem, [...path, elem]]);
          }
        }
      }
      console.log(`Your path from [${start}] to [${end}]`);
      finishedPath.forEach((elem) => console.log(elem));
    }
  }
}

let chessMove = new Graph();
chessMove.createChessBoard();
chessMove.connectKnightMoves();
chessMove.knightMove(["0,0"], ["5,4"]);
