import React, { useState, useContext, useMemo, useEffect } from 'react';

import { uiThemeContext, themes } from 'state/UIThemeProvider';
import { hexToRgb } from '../helpers';
import classes from './Button.module.scss';
type Size = 'sm' | 'md' | 'bg';

interface Props {
  size?: Size;
  upperCase?: boolean;
  disabled?: boolean;
  color?: Color;
  onClick?: () => any;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

interface ButtonStyleProps {
  size: Size;
  mainColor: string;
  textColor: string;
}

type StylesMap = {
  [key in Size]: React.CSSProperties;
};

const stylesMap: StylesMap = {
  sm: { height: '24px', width: '64px', fontSize: '10px' },
  md: { height: '28px', width: '64px', fontSize: '14px' },
  bg: { height: '32px', width: '64px', fontSize: '18px' },
};

const createStyles = ({
  size,
  mainColor,
  textColor,
}: ButtonStyleProps): React.CSSProperties => {
  return {
    ...stylesMap[size],
    backgroundColor: mainColor,
    color: textColor,
  };
};

const Button: React.FunctionComponent<Props> = ({
  size = 'md',
  upperCase,
  children,
  disabled,
  color,
  style,
  onClick,
}: Props) => {
  const { themeIndex } = useContext(uiThemeContext);
  const [hover, setHover] = useState(false);
  const [mainColor, setMainColor] = useState<string>(
    color ? themes[themeIndex].buttons[color].bg : themes[themeIndex].background
  );
  const [textColor, setTextColor] = useState<string>(
    color ? themes[themeIndex].buttons[color].text : themes[themeIndex].textColor
  );

  const hoverMainColor = useMemo(() => {
    const { r, g, b } = hexToRgb(mainColor);
    return `rgba(${r},${g},${b},0.5)`;
  }, [mainColor]);

  useEffect(() => {
    if (color) {
      setMainColor(themes[themeIndex].buttons[color].bg);
      setTextColor(themes[themeIndex].buttons[color].text);
    }
  }, [themeIndex]);

  const styles = useMemo(
    () =>
      createStyles({
        size,
        mainColor: hover ? hoverMainColor : mainColor,
        textColor,
      }),
    [size, mainColor, textColor, hoverMainColor, hover]
  );
  return (
    <button
      className={[classes.button, disabled ? classes.disabled : ''].join(' ')}
      style={{ ...styles, ...style }}
      title={disabled ? 'disabled' : ''}
      onClick={() => (disabled ? null : onClick?.())}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {upperCase ? children?.toString().toUpperCase() : children}
    </button>
  );
};

export default Button;
