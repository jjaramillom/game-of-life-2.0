import React, { useContext } from 'react';
import { uiThemeContext, themes } from 'state/UIThemeProvider';

import classes from './Card.module.scss';

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const createStyles = (themeIndex: number): React.CSSProperties => {
  return {
    backgroundColor: themes[themeIndex].cards.background,
    boxShadow: `5px 5px 10px ${themes[themeIndex].cards.boxShadowColor}`,
  };
};

const Card = ({ children, style }: Props) => {
  const { themeIndex } = useContext(uiThemeContext);
  return (
    <div style={{ ...style, ...createStyles(themeIndex) }} className={classes.card}>
      {children}
    </div>
  );
};

export default Card;
