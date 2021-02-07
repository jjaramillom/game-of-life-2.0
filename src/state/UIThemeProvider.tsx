import React, { createContext, useState } from 'react';

export const themes = [
  {
    mainColor: '#EEEEEE',
    textColor: '#000',
    cards: { background: '#EEE', shadow: '#aaa' },
    buttons: {
      danger: { bg: '#d11128', text: '#fff' },
      success: { bg: '#3ac346', text: '#fff' },
      warning: { bg: '#bec33a', text: '#fff' },
    },
  },
  {
    mainColor: '#000',
    textColor: '#EEEEEE',
    cards: {
      background: '#444',
      shadow: '#999',
    },
    buttons: {
      danger: { bg: '#d11128', text: '#fff' },
      success: { bg: '#3ac346', text: '#fff' },
      warning: { bg: '#bec33a', text: '#fff' },
    },
  },
];

interface UIThemeContext {
  themeIndex: number;
  setThemeIndex: (index: number) => void;
}

const uiThemeContext = createContext<UIThemeContext>({
  themeIndex: 0,
  setThemeIndex: (index) => {},
});

type Props = {
  children?: React.ReactNode;
};

const UIThemeProvider = ({ children }: Props) => {
  const [themeIndex, setThemeIndex] = useState(0);

  return (
    <uiThemeContext.Provider
      value={{
        themeIndex,
        setThemeIndex,
      }}>
      {children}
    </uiThemeContext.Provider>
  );
};

export { uiThemeContext };
export default UIThemeProvider;
