import React, { createContext, useState } from 'react';

interface Cell {
  x: number;
  y: number;
  isAlive: boolean;
  shouldLive: boolean;
}

type Matrix = Cell[][];

interface MatrixStateContext {
  matrix: Matrix;
  setMatrix: (newMatrix: Matrix) => void;
}

const matrixStateContext = createContext<MatrixStateContext>({
  matrix: [[]],
  setMatrix: (newMatrix) => {},
});

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const MatrixStateProvider = ({ children }: Props) => {
  const [matrix, setMatrix] = useState<Matrix>([[]]);

  return (
    <matrixStateContext.Provider
      value={{
        matrix,
        setMatrix,
      }}>
      {children}
    </matrixStateContext.Provider>
  );
};

export { matrixStateContext };
export default MatrixStateProvider;
