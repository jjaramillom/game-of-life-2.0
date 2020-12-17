import React, { createContext, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import matches from 'lodash/matches';

import { shouldLive, getRandomBool } from './helpers';

interface MatrixStateContext {
  matrix: Matrix;
  setMatrix: (newMatrix: Matrix) => void;
  updateMatrix: (shouldvalidateSteadyState: boolean) => void;
  setCellValue: (coordinate: Coordinate, value: boolean) => void;
  getCellValue: (coordinate: Coordinate) => boolean | undefined;
  randomizeMatrix: () => void;
  steadyState: boolean;
}

const matrixStateContext = createContext<MatrixStateContext>({
  matrix: [[]],
  setMatrix: (newMatrix) => {},
  updateMatrix: (shouldvalidateSteadyState: boolean) => {},
  setCellValue: (coordinate, value) => {},
  getCellValue: (coordinate) => undefined,
  randomizeMatrix: () => {},
  steadyState: false,
});

type Props = {
  children?: React.ReactNode;
};

const MatrixStateProvider = ({ children }: Props) => {
  const [matrix, setMatrix] = useState<Matrix>([[]]);
  const [steadyState, setSteadyState] = useState(false);

  const setCellValue = ({ x, y }: Coordinate, value: boolean) => {
    matrix[y][x].isAlive = value;
    setMatrix(matrix);
  };

  const getCellValue = ({ x, y }: Coordinate): boolean | undefined => {
    return matrix[y]?.[x]?.isAlive;
  };

  const updateMatrix = (shouldvalidateSteadyState: boolean) => {
    if (steadyState) {
      return;
    }
    const updatedMatrix = matrix.map((row) =>
      row.map((cell) => ({ ...cell, isAlive: shouldLive(cell, matrix) }))
    );

    if (shouldvalidateSteadyState) {
      validateSteadyState(matrix, updatedMatrix);
    }

    setMatrix(updatedMatrix);
  };

  const validateSteadyState = (oldMatrix: Matrix, newMatrix: Matrix) => {
    const compare = matches(oldMatrix);
    if (compare(newMatrix)) {
      setSteadyState(true);
    }
  };

  const randomizeMatrix = () => {
    const matrixClone = cloneDeep(matrix);
    matrixClone.forEach((row) => row.forEach((cell) => (cell.isAlive = getRandomBool())));
    setMatrix(matrixClone);
    setSteadyState(false);
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
        steadyState,
      }}>
      {children}
    </matrixStateContext.Provider>
  );
};

export { matrixStateContext };
// export type { Matrix };
export default MatrixStateProvider;
