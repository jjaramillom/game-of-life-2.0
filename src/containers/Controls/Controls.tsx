import React, { useContext, useState } from 'react';

import { gameStatusContext } from 'state/GameStatusProvider';
import { matrixStateContext } from 'state/MatrixStateProvider';
import useInterval from 'hooks/useInterval';
import Card from 'components/UI/Card/Card';
import Button from 'components/UI/Button/Button';
import Slider from 'components/UI/Slider/Slider';
import classes from './Controls.module.scss';

const Controls = () => {
  const [updateSpeed, setUpdateSpeed] = useState(1);
  const {
    increaseCurrentGeneration,
    resetCurrentGeneration,
    setRunning,
    running,
    currentGeneration,
  } = useContext(gameStatusContext);
  const { randomizeMatrix, updateMatrix, clearMatrix } = useContext(matrixStateContext);

  const handleNextStep = () => {
    increaseCurrentGeneration();
    updateMatrix(currentGeneration % 10 === 0);
  };

  useInterval(handleNextStep, running ? 1000 / updateSpeed : null);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    resetCurrentGeneration();
    clearMatrix();
  };

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
          <Button
            upperCase
            size='md'
            disabled={running}
            style={{ width: '100%' }}
            onClick={handleReset}>
            reset
          </Button>
        </div>
        <div className={classes.controls_row}>
          <Slider min={1} max={10} initialValue={updateSpeed} onChange={setUpdateSpeed} />
        </div>
        <div className={[classes.controls_row, classes.generation_label].join(' ')}>
          <div className={[classes.label, classes.speed].join(' ')}>
            Current speed: {updateSpeed} gens/sec
          </div>
          <div className={[classes.label, classes.generation].join(' ')}>
            Current generation: {currentGeneration}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Controls;
