import React, { useContext } from 'react';

import { cellThemeContext, themeMap } from '../../state/CellThemeProvider';
import Card from '../../components/UI/Card/Card';
import TooltipContainer from '../../components/UI/TooltipContainer/TooltipContainer';
import ThemeSelectorIcon from '../../components/UI/ThemeSelectorIcon/ThemeSelectorIcon';
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

  const changeTheme = (
    cellColor: string,
    cellFilledColor: string,
    cellBorderColor: string
  ) => {
    console.log('change');

    setCellColor(cellColor);
    setCellFilledColor(cellFilledColor);
    setCellBorderColor(cellBorderColor);
  };

  console.log(Object.values(themeMap))

  return (
    <Card>
      <div className={classes.main}>
        <div className={classes.theme_option}>
          Main Theme
          <TooltipContainer mode='hover'>
            <TooltipContainer.Tooltip>testing</TooltipContainer.Tooltip>
          </TooltipContainer>
        </div>
        <div className={classes.theme_option}>
          <div style={{ marginBottom: '5px' }}>Cell Theme</div>
          <TooltipContainer mode='click'>
            <ThemeSelectorIcon
              innerColor={cellFilledColor}
              outerColor={cellColor}
              borderColor={cellBorderColor}
            />
            <TooltipContainer.Tooltip>
              <div className={classes.theme_modal}>
                {Object.values(themeMap).map((o: CellTheme, i: number) => (
                  <div className={classes.icon_wrapper} key={i}>
                    <ThemeSelectorIcon
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
