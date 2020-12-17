import React, { useState, useContext, useMemo, useEffect } from 'react';

import { uiThemeContext } from '../../../state/UIThemeProvider';
import { hexToRgb } from '../helpers';
import classes from './Button.module.scss';
import { colorMap } from '../../../styles/colors';
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
  secondaryColor: string;
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
  secondaryColor,
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
  const { mainColor: mainThemeColor, secondaryColor, textColor: textThemeColor } = useContext(
    uiThemeContext
  );
  const [hover, setHover] = useState(false);
  const [mainColor, setMainColor] = useState<string>(
    color ? colorMap[color].bg : mainThemeColor
  );
  const [textColor, setTextColor] = useState<string>(
    color ? colorMap[color].text : textThemeColor
  );

  const hoverMainColor = useMemo(() => {
    const { r, g, b } = hexToRgb(color ? colorMap[color].bg : mainThemeColor);
    return `rgba(${r},${g},${b},0.5)`;
  }, [mainThemeColor, color]);

  useEffect(() => {
    if (!color) {
      setMainColor(mainThemeColor);
      setTextColor(textThemeColor);
    }
  }, [mainThemeColor, textThemeColor]);

  const styles = useMemo(
    () =>
      createStyles({
        size,
        mainColor: hover ? hoverMainColor : mainColor,
        secondaryColor,
        textColor,
      }),
    [size, mainColor, secondaryColor, textColor, hoverMainColor, hover]
  );
  return (
    <button
      className={[classes.button, disabled ? classes.disabled : ''].join(' ')}
      style={{ ...styles, ...style }}
      onClick={() => (disabled ? null : onClick?.())}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {upperCase ? children?.toString().toUpperCase() : children}
    </button>
  );
};

export default Button;
