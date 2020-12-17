import React, { createContext, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import { shouldLive, getRandomBool } from './helpers';

interface MatrixStateContext {
  matrix: Matrix;
  setMatrix: (newMatrix: Matrix) => void;
  updateMatrix: () => void;
  setCellValue: (coordinate: Coordinate, value: boolean) => void;
  getCellValue: (coordinate: Coordinate) => boolean | undefined;
  randomizeMatrix: () => void;
}

const matrixStateContext = createContext<MatrixStateContext>({
  matrix: [[]],
  setMatrix: (newMatrix) => {},
  updateMatrix: () => {},
  setCellValue: (coordinate, value) => {},
  getCellValue: (coordinate) => undefined,
  randomizeMatrix: () => {},
});

type Props = {
  children?: React.ReactNode;
};

const MatrixStateProvider = ({ children }: Props) => {
  const [matrix, setMatrix] = useState<Matrix>([[]]);

  const setCellValue = ({ x, y }: Coordinate, value: boolean) => {
    matrix[y][x].isAlive = value;
    setMatrix(matrix);
  };

  const getCellValue = ({ x, y }: Coordinate): boolean | undefined => {
    return matrix[y]?.[x]?.isAlive;
  };

  const updateMatrix = () => {
    const matrixClone = matrix.map((row) =>
      row.map((cell) => ({ ...cell, isAlive: shouldLive(cell, matrix) }))
    );
    setMatrix(matrixClone);
  };

  const randomizeMatrix = () => {
    const matrixClone = cloneDeep(matrix);
    matrixClone.forEach((row) => row.forEach((cell) => (cell.isAlive = getRandomBool())));
    setMatrix(matrixClone);
  };

  return (
    <matrixStateContext.Provider
      value={{
        matrix,
        setMatrix,
        updateMatrix,
        setCellValue,
        getCellValue,
        randomizeMatrix,
      }}>
      {children}
    </matrixStateContext.Provider>
  );
};

export { matrixStateContext };
// export type { Matrix };
export default MatrixStateProvider;
