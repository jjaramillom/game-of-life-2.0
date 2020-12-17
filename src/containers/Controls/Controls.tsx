import React, { useContext, useEffect, useRef } from 'react';

import { gameStatusContext } from '../../state/GameStatusProvider';
import { matrixStateContext } from '../../state/MatrixStateProvider';
import Card from '../../components/UI/Card/Card';
import Button from '../../components/UI/Button/Button';
import classes from './Controls.module.scss';

const Controls = () => {
  const { increaseCurrentGeneration, setRunning, running, currentGeneration } = useContext(
    gameStatusContext
  );
  const { randomizeMatrix, updateMatrix } = useContext(matrixStateContext);
  const updateInterval = useRef<NodeJS.Timeout | null>();

  const handleNextStep = () => {
    increaseCurrentGeneration();
    updateMatrix(currentGeneration % 10 === 0);
  };

  useEffect(() => {
    if (running) {
      updateInterval.current = setInterval(() => handleNextStep(), 500);
      return () => {
        if (updateInterval.current) {
          clearInterval(updateInterval.current);
        }
      };
    }
  }, [running]);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);

  return (
    <Card>
      <div className={classes.controls_main}>
        <div className={classes.controls_row}>
          <Button
            upperCase
            size='md'
            disabled={running}
            style={{ width: '100%' }}
            color='success'
            onClick={handleStart}>
            start
          </Button>
          <Button
            upperCase
            disabled={!running}
            size='md'
            style={{ width: '100%' }}
            color='danger'
            onClick={handleStop}>
            stop
          </Button>
        </div>
        <div className={classes.controls_row}>
          <Button
            upperCase
            size='md'
            disabled={running}
            style={{ width: '100%' }}
            onClick={handleNextStep}>
            step
          </Button>
          <Button
            upperCase
            size='md'
            disabled={running}
            style={{ width: '100%' }}
            onClick={randomizeMatrix}>
            randomize
          </Button>
        </div>
        <div className={[classes.controls_row, classes.generation_label].join(' ')}>
          Current generation: {currentGeneration}
        </div>
      </div>
    </Card>
  );
};

export default Controls;
