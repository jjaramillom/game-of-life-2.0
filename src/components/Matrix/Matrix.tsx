import React, { useContext, useEffect } from 'react';

import { boardEventsContext } from 'state/BoardEventsProvider';
import { matrixStateContext } from 'state/MatrixStateProvider';
import { cellThemeContext } from 'state/CellThemeProvider';
import Cell from 'components/Cell/Cell';
import classes from './Matrix.module.scss';

interface Props {
  rows: number;
  columns: number;
}

const Matrix = ({ rows: rowsNumber, columns: columnsNumber }: Props) => {
  const { setClearing, setFilling } = useContext(boardEventsContext);
  const { setMatrix } = useContext(matrixStateContext);
  const { cellBorderColor } = useContext(cellThemeContext);

  const handleMouseLeave = () => {
    setClearing(false);
    setFilling(false);
  };
  const matrix: Matrix = [[]];
  const rows = new Array(rowsNumber).fill(null).map((el, rowIdx) => {
    matrix.push([]);
    return (
      <div key={`row-${rowIdx}`} className={classes.row}>
        {new Array(columnsNumber).fill(null).map((el, colIdx) => {
          matrix[rowIdx].push({ x: colIdx, y: rowIdx, isAlive: false });
          return <Cell key={`${rowIdx}-${colIdx}`} filled={false} x={colIdx} y={rowIdx} />;
        })}
      </div>
    );
  });

  useEffect(() => {
    setMatrix(matrix);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={classes.matrix}
      style={{ borderColor: cellBorderColor }}>
      {rows}
    </div>
  );
};

export default Matrix;
