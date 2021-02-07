import React, { createContext, useState } from 'react';

type Theme = {
  background: string;
  textColor: string;
  cards: {
    background: string;
    boxShadowColor: string;
  };
  buttons: {
    default: { bg: string; text: string };
    danger: { bg: string; text: string };
    success: { bg: string; text: string };
    warning: { bg: string; text: string };
  };
};

export const themes: ReadonlyArray<Theme> = [
  {
    background: '#EEEEEE',
    textColor: '#000',
    cards: { background: '#d4d4d4', boxShadowColor: '#aaa' },
    buttons: {
      default: { bg: '#eee', text: '#fff' },
      danger: { bg: '#d11128', text: '#fff' },
      success: { bg: '#3ac346', text: '#fff' },
      warning: { bg: '#bec33a', text: '#fff' },
    },
  },
  {
    background: '#000',
    textColor: '#EEEEEE',
    cards: {
      background: '#444',
      boxShadowColor: '#999',
    },
    buttons: {
      default: { bg: '#d11128', text: '#fff' },
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
