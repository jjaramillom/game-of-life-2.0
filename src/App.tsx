import React from 'react';

import Board from './containers/Board/Board';
import Controls from './containers/Controls/Controls';
import ThemeSelector from './containers/ThemeSelector/ThemeSelector';
import GameStatusprovider from './state/GameStatusProvider';
import MatrixStateProvider from './state/MatrixStateProvider';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <GameStatusprovider>
        <MatrixStateProvider>
          <Board />
          <div className={classes.configuration_column}>
            <Controls />
            <ThemeSelector />
          </div>
        </MatrixStateProvider>
      </GameStatusprovider>
    </div>
  );
}

export default App;
