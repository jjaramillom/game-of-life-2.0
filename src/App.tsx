import React, { useContext } from 'react';

import Board from 'containers/Board/Board';
import Controls from 'containers/Controls/Controls';
import ThemeSelector from 'containers/ThemeSelector/ThemeSelector';
import { uiThemeContext, themes } from 'state/UIThemeProvider';
import classes from 'App.module.scss';

function App() {
  const { themeIndex } = useContext(uiThemeContext);
  return (
    <div
      className={classes.app}
      style={{
        backgroundColor: themes[themeIndex].background,
        color: themes[themeIndex].textColor,
      }}>
      <div className={classes.board}>
        <Board />
      </div>
      <div className={classes.configuration_column}>
        <Controls />
        <ThemeSelector />
      </div>
    </div>
  );
}

export default App;
