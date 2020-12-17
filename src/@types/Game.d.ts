interface Cell {
  x: number;
  y: number;
  isAlive: boolean;
}

interface Coordinate {
  x: number;
  y: number;
}

type Matrix = Cell[][];
