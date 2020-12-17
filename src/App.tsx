import React from 'react';

import Board from './containers/Board/Board';
import Controls from './containers/Controls/Controls';
import GameStatusprovider from './state/GameStatusProvider';
import MatrixStateProvider from './state/MatrixStateProvider';

function App() {
  return (
    <div>
      <GameStatusprovider>
        <MatrixStateProvider>
          <Board />
          <Controls />
        </MatrixStateProvider>
      </GameStatusprovider>
    </div>
  );
}

export default App;
