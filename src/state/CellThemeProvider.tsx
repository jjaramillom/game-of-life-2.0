import React, { createContext, useState } from 'react';

export const themeMap = {
  default: {
    cell: '#18ab',
    filledCell: '#afcc',
    border: '#0a0a0a',
  },
  'black-yellow': {
    cell: '#111',
    filledCell: '#eeff00',
    border: '#ccc',
  },
  honey: {
    cell: '#F7A072',
    filledCell: '#00A7E1',
    border: '#D9E5D6',
  },
};

interface CellThemeContext {
  cellColor: string;
  setCellColor: (color: string) => void;
  cellFilledColor: string;
  setCellFilledColor: (color: string) => void;
  cellBorderColor: string;
  setCellBorderColor: (color: string) => void;
}

const cellThemeContext = createContext<CellThemeContext>({
  cellColor: '#18ab',
  setCellColor: (color) => {},
  cellFilledColor: '#afcc',
  setCellFilledColor: (color) => {},
  cellBorderColor: '#111',
  setCellBorderColor: (color) => {},
});

type Props = {
  children?: React.ReactNode;
};

const CellThemeProvider = ({ children }: Props) => {
  const [cellColor, setCellColor] = useState('#18ab');
  const [cellFilledColor, setCellFilledColor] = useState('#afcc');
  const [cellBorderColor, setCellBorderColor] = useState('#111');

  return (
    <cellThemeContext.Provider
      value={{
        cellColor,
        setCellColor,
        cellFilledColor,
        setCellFilledColor,
        cellBorderColor,
        setCellBorderColor,
      }}>
      {children}
    </cellThemeContext.Provider>
  );
};

export { cellThemeContext };
export default CellThemeProvider;
