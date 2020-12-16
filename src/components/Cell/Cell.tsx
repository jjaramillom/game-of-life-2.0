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
  const { selecting, setSelecting } = useContext(boardEventsContext);

  const handleHover = () => {
    if (selecting) {
      setFilled(true);
    }
  };

  const handleMouseDown = () => {
    if (!filled) {
      setClicking(true);
    }
    setFilled(!filled);
  };

  const handleMouseLeave = () => {
    if (clicking) {
      setSelecting(true);
    }
  };

  const handleMouseUp = () => {
    if (selecting) {
      setSelecting(false);
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
