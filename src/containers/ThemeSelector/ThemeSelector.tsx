import React, { useContext } from 'react';

import { cellThemeContext } from '../../state/CellThemeProvider';
import Card from '../../components/UI/Card/Card';
import classes from './ThemeSelector.module.scss';

const ThemeSelector = () => {
  const { cellColor, cellFilledColor } = useContext(cellThemeContext);
  return (
    <Card>
      <div className={classes.main}>
        <div className={classes.theme_option}>
          Main Theme
          <div className={classes.theme_selector}>
            <div />
          </div>
        </div>
        <div className={classes.theme_option}>
          Cell Theme
          <div style={{ backgroundColor: cellColor }} className={classes.theme_selector}>
            <div style={{ backgroundColor: cellFilledColor }} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ThemeSelector;
