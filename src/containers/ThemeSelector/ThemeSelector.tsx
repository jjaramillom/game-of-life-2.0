import React, { useContext } from 'react';

import { cellThemeContext, themeMap } from 'state/CellThemeProvider';
import { uiThemeContext, themes } from 'state/UIThemeProvider';
import Card from 'components/UI/Card/Card';
import TooltipContainer from 'components/UI/TooltipContainer/TooltipContainer';
import CellThemeSelectorIcon from 'components/UI/CellThemeSelectorIcon/CellThemeSelectorIcon';
import UIThemeSelectorIcon from 'components/UI/UIThemeSelectorIcon/UIThemeSelectorIcon';
import classes from './ThemeSelector.module.scss';

const ThemeSelector = () => {
  const {
    cellColor,
    cellFilledColor,
    cellBorderColor,
    setCellColor,
    setCellFilledColor,
    setCellBorderColor,
  } = useContext(cellThemeContext);

  const { themeIndex, setThemeIndex } = useContext(uiThemeContext);

  const changeTheme = (
    cellColor: string,
    cellFilledColor: string,
    cellBorderColor: string
  ) => {
    setCellColor(cellColor);
    setCellFilledColor(cellFilledColor);
    setCellBorderColor(cellBorderColor);
  };

  return (
    <Card>
      <div className={classes.main}>
        <div className={classes.theme_option}>
          <div style={{ marginBottom: '5px' }}>Main Theme</div>

          <TooltipContainer mode='click'>
            <UIThemeSelectorIcon color={themes[themeIndex].mainColor} />
            <TooltipContainer.Tooltip>
              <div className={classes.theme_modal}>
                {themes.map((o, i: number) => (
                  <div className={classes.icon_wrapper} key={i}>
                    <UIThemeSelectorIcon
                      color={o.mainColor}
                      onClick={() => setThemeIndex(i)}
                    />
                  </div>
                ))}
              </div>
            </TooltipContainer.Tooltip>
          </TooltipContainer>
        </div>
        <div className={classes.theme_option}>
          <div style={{ marginBottom: '5px' }}>Cell Theme</div>
          <TooltipContainer mode='click'>
            <CellThemeSelectorIcon
              innerColor={cellFilledColor}
              outerColor={cellColor}
              borderColor={cellBorderColor}
            />
            <TooltipContainer.Tooltip>
              <div className={classes.theme_modal}>
                {Object.values(themeMap).map((o: CellTheme, i: number) => (
                  <div className={classes.icon_wrapper} key={i}>
                    <CellThemeSelectorIcon
                      onClick={() => changeTheme(o.cell, o.filledCell, o.border)}
                      innerColor={o.filledCell}
                      outerColor={o.cell}
                      borderColor={o.border}
                    />
                  </div>
                ))}
              </div>
            </TooltipContainer.Tooltip>
          </TooltipContainer>
        </div>
      </div>
    </Card>
  );
};

export default ThemeSelector;
