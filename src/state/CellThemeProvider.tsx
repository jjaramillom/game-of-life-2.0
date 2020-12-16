import React, { createContext, useState } from 'react';

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
  children?: JSX.Element | JSX.Element[];
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

export { cellThemeContext as boardContext };
export default CellThemeProvider;
