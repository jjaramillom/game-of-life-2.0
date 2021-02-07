/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import classes from './CellThemeSelectorIcon.module.scss';

interface Props {
  innerColor: string;
  outerColor: string;
  borderColor: string;
  onClick?: () => void;
}

const CellThemeSelectorIcon = ({ innerColor, outerColor, borderColor, onClick }: Props) => {
  const style = css`
    border-color: ${borderColor};
    &:before {
      background-color: ${innerColor};
    }
    &:after {
      background-color: ${outerColor};
    }
  `;

  return <div onClick={onClick} className={classes.theme_selector} css={style} />;
};

export default CellThemeSelectorIcon;
