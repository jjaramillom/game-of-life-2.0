import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import GameStatusprovider from 'state/GameStatusProvider';
import CellThemeProvider from 'state/CellThemeProvider';
import UIThemeProvider from 'state/UIThemeProvider';
import MatrixStateProvider from 'state/MatrixStateProvider';

ReactDOM.render(
  <React.StrictMode>
    <GameStatusprovider>
      <MatrixStateProvider>
        <CellThemeProvider>
          <UIThemeProvider>
            <App />
          </UIThemeProvider>
        </CellThemeProvider>
      </MatrixStateProvider>
    </GameStatusprovider>
  </React.StrictMode>,
  document.getElementById('root')
);
