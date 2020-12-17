import React, { createContext, useState } from 'react';

interface UIThemeContext {
  mainColor: string;
  setMainColor: (color: string) => void;
  secondaryColor: string;
  setSecondaryColor: (color: string) => void;
  textColor: string;
  setTextColor: (color: string) => void;
}

const uiThemeContext = createContext<UIThemeContext>({
  mainColor: '#f1f21f',
  setMainColor: (color) => {},
  secondaryColor: '#f1f21f',
  setSecondaryColor: (color) => {},
  textColor: '#000000',
  setTextColor: (color: string) => {},
});

type Props = {
  children?: React.ReactNode;
};

const UIThemeProvider = ({ children }: Props) => {
  const [mainColor, setMainColor] = useState('#18ab');
  const [secondaryColor, setSecondaryColor] = useState('#afcc');
  const [textColor, setTextColor] = useState('#afcc');

  return (
    <uiThemeContext.Provider
      value={{
        mainColor,
        setMainColor,
        secondaryColor,
        setSecondaryColor,
        textColor,
        setTextColor,
      }}>
      {children}
    </uiThemeContext.Provider>
  );
};

export { uiThemeContext };
export default UIThemeProvider;
