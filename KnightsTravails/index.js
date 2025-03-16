/* a knight on a standard 8x8 chess board can move from any square to any other square. Its basic move is two steps forward and one step to the side or one step forward and two steps to the side. It can face any direction.

 knightMoves(startingPoint, endPoint)` that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.
*/

const BOARD_SIZE = 8;

// getPossibleNextMoves(startingPoint) given starting point, get possible next moves
const getPossibleNextMoves = ([x, y]) => {
  const possibleNextMovesArr = [];
  if (isValidPosition(x, y)) {
    if (isValidPosition([x + 1, y + 2])) {
      possibleNextMovesArr.push([x + 1, y + 2]);
    }
    if (isValidPosition(x + 2, y + 1)) {
      possibleNextMovesArr.push([x + 2, y + 1]);
    }
    if (isValidPosition(x + 2, y - 1)) {
      possibleNextMovesArr.push([x + 2, y - 1]);
    }
    if (isValidPosition(x + 1, y - 2)) {
      possibleNextMovesArr.push([x + 1, y - 2]);
    }
    if (isValidPosition(x - 1, y - 2)) {
      possibleNextMovesArr.push([x - 1, y - 2]);
    }
    if (isValidPosition(x - 2, y - 1)) {
      possibleNextMovesArr.push([x - 2, y - 1]);
    }
    if (isValidPosition(x - 2, y + 1)) {
      possibleNextMovesArr.push([x - 2, y + 1]);
    }
    if (isValidPosition(x - 1, y + 2)) {
      possibleNextMovesArr.push([x - 1, y + 2]);
    }
    if (isValidPosition(x + 1, y + 2)) {
      possibleNextMovesArr.push([x + 1, y + 2]);
    }
    if (isValidPosition(x + 2, y + 1)) {
      possibleNextMovesArr.push([x + 2, y + 1]);
    }
    if (isValidPosition(x + 2, y - 1)) {
      possibleNextMovesArr.push([x + 2, y - 1]);
    }
    if (isValidPosition(x + 1, y - 2)) {
      possibleNextMovesArr.push([x + 1, y - 2]);
    }
    if (isValidPosition(x - 1, y - 2)) {
      possibleNextMovesArr.push([x - 1, y - 2]);
    }
    if (isValidPosition(x - 2, y - 1)) {
      possibleNextMovesArr.push([x - 2, y - 1]);
    }
    if (isValidPosition(x - 2, y + 1)) {
      possibleNextMovesArr.push([x - 2, y + 1]);
    }
    if (isValidPosition(x - 1, y + 2)) {
      possibleNextMovesArr.push([x - 1, y + 2]);
    }
  }

  return possibleNextMovesArr;
};

// isValidPosition([x, y]) checks if position is not out of bound
const isValidPosition = (row, col) => {
  if (row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE) {
    return true;
  } else {
    return false;
  }
};
// getPrintReadyPath(pathMatrix) returns pathMatrix elements on separate lines
const getPrintReadyPath = (pathMatrix) => {
  let printReadyPath = "\n";
  for (let i = 0; i < pathMatrix.length; i++) {
    printReadyPath += JSON.stringify(pathMatrix[i]);
    if (i < pathMatrix.length - 1) {
      printReadyPath += "\n";
    }
  }

  return printReadyPath;
};

// knightsMoves(start, end)
const knightsMoves = (start, end) => {
  if (
    !isValidPosition(start[0], start[1]) ||
    !isValidPosition(end[0], end[1])
  ) {
    console.log(
      "Please enter a valid start and end point between [0,0] and [7,7]"
    );
  }

  const queue = [[start, [start]]];
  const visited = new Set();
  visited.add(start);

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const possibleNextMoves = getPossibleNextMoves(current);

    if (current[0] === end[0] && current[1] === end[1]) {
      const res = getPrintReadyPath(path);
      return `You made it in ${
        path.length - 1
      } moves! Here's is your path: ${res}`;
      // return path;
    }

    possibleNextMoves.forEach((nextMove) => {
      const newPosition = nextMove;
      if (
        isValidPosition(newPosition[0], newPosition[1]) &&
        !visited.has(newPosition[0], newPosition[1])
      ) {
        queue.push([newPosition, [...path, newPosition]]);
      }
    });
  }
};

console.log(knightsMoves([3, 3], [4, 3]));
