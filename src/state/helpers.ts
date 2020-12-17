export const getRandomBool = (aliveRandomness: number = 0.5): boolean => {
  return Math.random() > aliveRandomness;
};

export const shouldLive = ({ x, y, isAlive }: Cell, board: Matrix): boolean => {
  const numberOfAliveNeighbors = getNumberOfAliveNeighbors({ x, y }, board);
  if (isAlive) {
    return numberOfAliveNeighbors === 2 || numberOfAliveNeighbors === 3;
  }
  return numberOfAliveNeighbors === 3;
};

const getNumberOfAliveNeighbors = (coord: Coordinate, board: Matrix): number => {
  const aliveNeighbors = new Array<Boolean>();

  let minX: number = coord.x - 1;
  let maxX: number = coord.x + 1;

  let minY: number = coord.y - 1;
  let maxY: number = coord.y + 1;

  // if is in the far right end
  if (coord.x === board.length - 1) {
    minX = coord.x - 1;
    maxX = coord.x;
  } else if (coord.x === 0) {
    //if it is in the far left end
    minX = coord.x;
    maxX = coord.x + 1;
  }

  //if it is in the top
  if (coord.y === board[0].length - 1) {
    minY = coord.y - 1;
    maxY = coord.y;
  } else if (coord.y === 0) {
    //if it is in the bottom
    minY = coord.y;
    maxY = coord.y + 1;
  }

  for (let i = minX; i <= maxX; i++) {
    for (let j = minY; j <= maxY; j++) {
      if (i === coord.x && j === coord.y) continue;
      aliveNeighbors.push(board[j][i]?.isAlive);
    }
  }
  return aliveNeighbors.filter(Boolean).length;
};
