import React, { useState, useContext } from 'react';

import { boardEventsContext } from '../../state/BoardEventsProvider';
import { cellThemeContext } from '../../state/CellThemeProvider';
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

const Cell = ({ filled: filledInitialState }: Props) => {
  const [filled, setFilled] = useState(filledInitialState);
  const [clicking, setClicking] = useState(false);

  const { cellBorderColor, cellColor, cellFilledColor } = useContext(cellThemeContext);
  const { filling, setFilling, clearing, setClearing } = useContext(boardEventsContext);

  const handleHover = () => {
    if (filling) {
      setFilled(true);
    } else if (clearing) {
      setFilled(false);
    }
  };

  const handleMouseDown = () => {
    setClicking(true);
    setFilled(!filled);
  };

  const handleMouseLeave = () => {
    if (clicking) {
      if (filled) {
        setFilling(true);
      } else {
        setClearing(true);
      }
    }
  };

  const handleMouseUp = () => {
    if (filling) {
      setFilling(false);
    } else if (clearing) {
      setClearing(false);
    }
  };

  return (
    <div
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
