import React from 'react';

import Board from 'containers/Board/Board';
import Controls from 'containers/Controls/Controls';
import ThemeSelector from 'containers/ThemeSelector/ThemeSelector';
import GameStatusprovider from 'state/GameStatusProvider';
import CellThemeProvider from 'state/CellThemeProvider';
import MatrixStateProvider from 'state/MatrixStateProvider';
import classes from 'App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <GameStatusprovider>
        <MatrixStateProvider>
          <CellThemeProvider>
            <div className={classes.board}>
              <Board />
            </div>
            <div className={classes.configuration_column}>
              <Controls />
              <ThemeSelector />
            </div>
          </CellThemeProvider>
        </MatrixStateProvider>
      </GameStatusprovider>
    </div>
  );
}

export default App;
