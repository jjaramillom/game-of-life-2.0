import React, { useState, useContext, useMemo } from 'react';

import { uiThemeContext } from '../../../state/UIThemeProvider';
import { hexToRgb } from '../helpers';
import classes from './Button.module.scss';
type Size = 'sm' | 'md' | 'bg';

interface Props {
  size?: Size;
  upperCase?: boolean;
  disabled?: boolean;
  onClick?: () => any;
  children?: React.ReactNode;
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
  onClick,
}: Props) => {
  const [hover, setHover] = useState(false);
  const { mainColor, secondaryColor, textColor } = useContext(uiThemeContext);
  const hoverMainColor = useMemo(() => {
    const { r, g, b } = hexToRgb(mainColor);
    return `rgba(${r},${g},${b},0.5)`;
  }, [mainColor]);

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
      className={classes.button}
      style={styles}
      onClick={() => (disabled ? null : onClick?.())}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {upperCase ? children?.toString().toUpperCase() : children}
    </button>
  );
};

export default Button;
