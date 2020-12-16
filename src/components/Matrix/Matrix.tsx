import React from 'react';

import Cell from '../Cell/Cell';
import classes from './Matrix.module.scss';

interface Props {
  rows: number;
  columns: number;
}

const Matrix = ({ rows: rowsNumber, columns: columnsNumber }: Props) => {
  const rows = new Array(rowsNumber).fill(null).map((el, rowIdx) => (
    <div key={`row-${rowIdx}`} className={classes.row}>
      {new Array(columnsNumber).fill(null).map((el, colIdx) => (
        <Cell key={`${rowIdx}-${colIdx}`} filled={false} x={colIdx} y={rowIdx} />
      ))}
    </div>
  ));

  return (
    <div onMouseUp={() => console.log('mouse up')} className={classes.matrix}>
      {rows}
    </div>
  );
};

export default Matrix;
