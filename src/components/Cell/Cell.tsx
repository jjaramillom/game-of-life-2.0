import React, { useState, useContext, useEffect } from 'react';

import { boardEventsContext } from 'state/BoardEventsProvider';
import { cellThemeContext } from 'state/CellThemeProvider';
import { matrixStateContext } from 'state/MatrixStateProvider';
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

const Cell = ({ filled: filledInitialState, x, y }: Props) => {
  const [filled, setFilled] = useState(filledInitialState);
  const [clicking, setClicking] = useState(false);

  const { cellBorderColor, cellColor, cellFilledColor } = useContext(cellThemeContext);
  const { filling, setFilling, clearing, setClearing } = useContext(boardEventsContext);
  const { setCellValue, getCellValue } = useContext(matrixStateContext);

  const handleHover = () => {
    if (!filled && filling) {
      updateFillValue(true);
    } else if (filled && clearing) {
      updateFillValue(false);
    }
  };

  const updateFillValue = (value: boolean) => {
    setCellValue({ x, y }, value);
    setFilled(value);
  };

  const handleMouseDown = () => {
    setClicking(true);
    updateFillValue(!filled);
  };

  const handleMouseLeave = () => {
    if (clicking) {
      if (filled) {
        setFilling(true);
      } else {
        setClearing(true);
      }
      setClicking(false);
    }
  };

  const handleMouseUp = () => {
    setClicking(false);
    if (filling) {
      setFilling(false);
    } else if (clearing) {
      setClearing(false);
    }
  };

  const cellValueState = getCellValue({ x, y });

  useEffect(() => {
    if (cellValueState !== undefined && cellValueState !== filled) {
      setFilled(cellValueState);
    }
  }, [cellValueState]);

  return (
    <div
      test-id='cell'
      className={classes.cell}
      style={createStyles({
        cellBorderColor,
        cellColor: filled ? cellFilledColor : cellColor,
      })}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleHover}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Cell;
