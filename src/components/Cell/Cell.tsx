import React, { useContext } from 'react';

import { boardContext } from '../../state/CellThemeProvider';
import classes from './Cell.module.scss';

interface Props {
  x: number;
  y: number;
  filled: boolean;
}

interface CellTheme {
  cellColor: string;
  cellBorderColor: string;
}

const createStyles = ({ cellBorderColor, cellColor }: CellTheme): React.CSSProperties => {
  return {
    borderColor: cellBorderColor,
    backgroundColor: cellColor,
  };
};

const Cell = (props: Props) => {
  const { filled } = props;
  const { cellBorderColor, cellColor, cellFilledColor } = useContext(boardContext);
  return (
    <div
      className={classes.cell}
      style={createStyles({
        cellBorderColor,
        cellColor: filled ? cellFilledColor : cellColor,
      })}></div>
  );
};

export default Cell;
