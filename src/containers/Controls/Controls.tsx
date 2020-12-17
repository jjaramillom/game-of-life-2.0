import React, { useContext } from 'react';

import { gameStatusContext } from '../../state/GameStatusProvider';
import { matrixStateContext } from '../../state/MatrixStateProvider';
import Card from '../../components/UI/Card/Card';
import Button from '../../components/UI/Button/Button';
import classes from './Controls.module.scss';

const Controls = () => {
  const { increaseCurrentGeneration } = useContext(gameStatusContext);
  const { randomizeMatrix, updateMatrix } = useContext(matrixStateContext);
  const handleNextStep = () => {
    increaseCurrentGeneration();
    updateMatrix();
  };
  return (
    <Card>
      <div className={classes.controls}>
        <Button upperCase size='md' onClick={handleNextStep}>
          step
        </Button>
        <Button upperCase size='md' onClick={randomizeMatrix}>
          randomize
        </Button>
      </div>
    </Card>
  );
};

export default Controls;
