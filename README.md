# knightTravails

Find the shortest path between two positions for a chess' knight piece

## Links

- [Link to assignment](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Summary

My project uses a graph data-structure that finds the shortest possible route by using a depth-first search algorithm (DFS).

knightTravail.js contains a single class 'Graph()'

When creating a new 'Graph()' the return is a new Map obj "board".

New 'Graph()' objects have 3 functions available to them.

#1. Create graph vertices (`setVertices() `)
This function sets up all the coordinates of the graph from [0,0] to [7,7]

#2. Connect graph edges (`setPlayableKnightMoves()`)
Connects all possible knight moves at each position of graph

#3. Utilize DFS to find the shortest possible route from start to end (`knightMove(start, end)`)
Knight Move accepts a starting and end point for a Knight chess piece (from ["0,0"] to ["7,7"]),
returning a console.log of the fastest path.

```javascript
class Graph {
  constructor() {
    return {
      board: new Map(),
      setVertices,
      setPlayableKnightMoves,
      knightMove,
    };
  }
}
```

When running the below lines of code,

```javascript
let graph = new Graph();
graph.setVertices();
graph.setPlayableKnightMoves();
graph.knightMove(["0,0"], ["1,2"]);
graph.knightMove(["5,4"], ["7,7"]);
graph.knightMove(["3,3"], ["2,2"]);
```

The following lines will be returned to console

```
The fastest path from [0,0] to [1,2]
[ '0,0', '1,2' ]

The fastest path from [5,4] to [7,7]
[ '5,4', '7,5', '5,6', '7,7' ]
[ '5,4', '7,3', '6,5', '7,7' ]
[ '5,4', '3,5', '5,6', '7,7' ]
[ '5,4', '4,6', '6,5', '7,7' ]

The fastest path from [3,3] to [2,2]
[ '3,3', '4,1', '2,2' ]
[ '3,3', '1,4', '2,2' ]

```
