/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import classes from './ThemeSelectorIcon.module.scss';

interface Props {
  innerColor: string;
  outerColor: string;
  borderColor: string;
  onClick?: () => void;
}

const ThemeSelectorIcon = ({ innerColor, outerColor, borderColor, onClick }: Props) => {
  const style = css`
    border-color: ${borderColor};
    &:before {
      background-color: ${outerColor};
    }
    &:after {
      background-color: ${innerColor};
    }
  `;

  return <div onClick={onClick} className={classes.theme_selector} css={style} />;
};

export default ThemeSelectorIcon;